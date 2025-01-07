export interface IOptions {
    label: string;
    value: string;
}

export interface IComponentProps {
    options: IOptions[];
}

export interface ISchemas {
    field: string;
    label: string;
    component: "Input" | "Select";
    placeholder?: string;
    componentProps?: IComponentProps;
}

export interface IColumn {
    prop: string;
    label: string;
    // 为 true 可为该属性设置插槽自定义显示内容
    slot?: boolean;
}

