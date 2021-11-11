export interface YggdrasilNode {
    get_rule: () => any;
    get_range: () => any;
    from_cst: (tree: any) => any;
    from_pair: (pair: any) => any;
}

