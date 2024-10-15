export type LangInItem = {
    item_name: string,
    description: string,
    wiki_link: string,
    drop: {name: string, link: string}
};
export type ItemShort = {
    id: string,
    url_name: string,
    thumb: string,
    item_name: string
};
export type ItemFull = {
    id: string,
    items_in_set : {
        url_name: string,
        icon: string,
        icon_format: string,
        thumb: string,
        sub_icon: string,
        mod_max_rank: number,
        subtypes: string,
        tags: string,
        ducats: number,
        quantity_for_set: number,
        set_root: boolean,
        mastery_level: number,
        rarity: string,
        trading_tax: number
        en: LangInItem
    }[]
};

export type NemesisWeapon = {
    id: string,
    url_name: string,
    icon: string,
    icon_format: string,
    thumb: string,
    item_name: string
};
export type NemesisEphemera = {
    id: string,
    url_name: string,
    icon: string,
    icon_format: string,
    thumb: string,
    animation: string,
    animation_format: string,
    element: string,
    item_name: string
};
export type NemesisQuirk = {
    id: string,
    url_name: string,
    item_name: string,
    description: string,
    group: string
};

export type RivenItem = {
    id: string,
    url_name: string,
    group: string,
    riven_type: string,
    icon: string,
    icon_format: string,
    thumb: string,
    item_name: string,
    mastery_level: number
};
export type RivenAttribute = {
    id: string,
    url_name: string,
    group: string,
    prefix: string,
    suffix: string,
    positive_is_negative: boolean,
    exclusive_to: string[],
    effect: string,
    units: string,
    negative_only: boolean,
    search_only: boolean
};

export type Location = {
    id: string,
    url_name: string,
    icon: string,
    thumb: string,
    min_level: number,
    max_level: number,
    faction: string,
    node_name: string,
    system_name: string
};
export type NPC = {
    id: string,
    url_name: string,
    icon: string,
    thumb: string,
    name: string
};
export type Mission = {
    id: string,
    url_name: string,
    icon: string,
    thumb: string,
    name: string
};
