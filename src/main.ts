import * as api_calls from "./api_calls.ts"

let items = await api_calls.GetItems();
for (const item of items) console.log(item.item_name);
