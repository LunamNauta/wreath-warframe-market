import * as basic_api_calls from "./basic_api_calls.ts"
import type * as market_types from "./market_types.ts"
import * as path from "path"

export async function GetItems(force: boolean = false) : Promise<market_types.ItemShort[]>{return basic_api_calls.GetFromAPI(path.join(__dirname, "../market_data/items/items.json"), "/items", force).then(res => {return res.items;});}
export async function GetItem_ByName(name: string, force: boolean = false) : Promise<market_types.ItemFull>{return basic_api_calls.GetFromAPI(path.join(__dirname, "../market_data/items/" + name + ".json"), "/items/" + name, force).then(res => {return res.item;});}

export async function GetLich_Weapons(force: boolean = false) : Promise<market_types.NemesisWeapon[]>{return basic_api_calls.GetFromAPI(path.join(__dirname, "../market_data/lich/weapons.json"), "/lich/weapons", force).then(res => {return res.weapons;});}
export async function GetLich_Ephemeras(force: boolean = false) : Promise<market_types.NemesisEphemera[]>{return basic_api_calls.GetFromAPI(path.join(__dirname, "../market_data/lich/ephemeras.json"), "/lich/ephemeras", force).then(res => {return res.ephemeras;});}
export async function GetLich_Quirks(force: boolean = false) : Promise<market_types.NemesisQuirk[]>{return basic_api_calls.GetFromAPI(path.join(__dirname, "../market_data/lich/quirks.json"), "/lich/quirks", force).then(res => {return res.quirks;});}

export async function GetSister_Weapons(force: boolean = false) : Promise<market_types.NemesisWeapon[]>{return basic_api_calls.GetFromAPI(path.join(__dirname, "../market_data/sister/weapons.json"), "/sister/weapons", force).then(res => {return res.weapons;});}
export async function GetSister_Ephemeras(force: boolean = false) : Promise<market_types.NemesisEphemera[]>{return basic_api_calls.GetFromAPI(path.join(__dirname, "../market_data/sister/ephemeras.json"), "/sister/ephemeras", force).then(res => {return res.ephemeras;});}
export async function GetSister_Quirks(force: boolean = false) : Promise<market_types.NemesisQuirk[]>{return basic_api_calls.GetFromAPI(path.join(__dirname, "../market_data/sister/quirks.json"), "/sister/quirks", force).then(res => {return res.quirks});}

export async function GetRiven_Items(force: boolean = false) : Promise<market_types.RivenItem[]>{return basic_api_calls.GetFromAPI(path.join(__dirname, "../market_data/riven/items.json"), "/riven/items", force).then(res => {return res.items;});}
export async function GetRiven_Attributes(force: boolean = false) : Promise<market_types.RivenAttribute[]>{return basic_api_calls.GetFromAPI(path.join(__dirname, "../market_data/riven/attributes.json"), "/riven/attributes", force).then(res => {return res.attributes;});}

export async function GetLocations(force: boolean = false) : Promise<market_types.Location[]>{return basic_api_calls.GetFromAPI(path.join(__dirname, "../market_data/misc/locations.json"), "/locations", force).then(res => {return res.locations;});}
export async function GetNPCs(force: boolean = false) : Promise<market_types.NPC[]>{return basic_api_calls.GetFromAPI(path.join(__dirname, "../market_data/misc/npcs.json"), "/npc", force).then(res => {return res.npc;});}
export async function GetMissions(force: boolean = false) : Promise<market_types.Mission[]>{return basic_api_calls.GetFromAPI(path.join(__dirname, "../market_data/misc/missions.json"), "/missions", force).then(res => {return res.missions;});}
