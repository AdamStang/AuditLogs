export interface IRow {
    name: string;
    value: string | null;
    valueBefore: string | null;
    author?: string;
    authorBefore?: string;
    level: number;
    nodeType: string | null;
}
