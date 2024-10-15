const API_URL = "https://api.warframe.market/v1"
let last_payload_request = new Date().getTime();
let delay_standard = 1000;
let delay_429 = 5000;

export async function GetPayload(url: string, max_retries: number = 3){
    if (max_retries == 0) throw new Error("Error: Max retries reached");
    let delay = new Date().getTime() - last_payload_request;
    if (delay < delay_standard) await new Promise((resolve) => setTimeout(resolve, delay_standard - delay));
    last_payload_request = new Date().getTime();
    const response = await fetch(url);
    if (response.status === 404) throw new Error("Error: Invalid API-URL");
    if (response.status === 429){
        const retryAfter = response.headers.get("retry-after");
        let delay = 0;
        if (retryAfter){
            if (!isNaN(Number(retryAfter))) delay = parseInt(retryAfter, 10) * 1000;
            else delay = new Date(retryAfter).getTime() - new Date().getTime();
        } else delay = delay_429;
        await new Promise((resolve) => setTimeout(resolve, delay));
        return GetPayload(url, max_retries - 1);
    }
    const response_json = await response.json()
    return response_json.payload
}
export async function GetFromAPI(file_path: string, url: string, force: boolean = false){
    let out_file = Bun.file(file_path);
    if (!force && await out_file.exists()){return await out_file.json();}
    const out_json = await GetPayload(API_URL + url);
    Bun.write(out_file, JSON.stringify(out_json));
    return out_json
}
