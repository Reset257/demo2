
export interface ISchemas {
    field: string;
    label: string;
    // 默认值填充
    defaultValue?: string | number;
    component: "Input" | "Select" | "Radio" | "TreeSelect" | "Textarea" | "ApiSelect";
    placeholder?: string;
    options?: Record<string, string | number> | any;
    required?: boolean
    api?: (param?: any) => any;
    optionConfig?: any
}