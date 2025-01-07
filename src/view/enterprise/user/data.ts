import { IColumn, ISchemas } from '@/components/TableCom/interface'

export type IPageType = 'list' | 'form'
export const column: IColumn[] = [
    {
        prop: "username",
        label: "名称",
    },
    {
        prop: "status",
        label: "时间",
    },
    {
        prop: "certificationType",
        label: "类型",
    },
];

export const schemas: ISchemas[] = [
    {
        field: 'name',
        label: '公司名称',
        component: 'Input',
    },
]