export interface IMenuItem {
    id?: number;
    key?: string;
    label: string;
    icon?: string;
    link?: string;
    collapsed?: boolean;
    children?: any;
    isTitle?: boolean;
    badge?: any;
    parentKey?: number;
}
