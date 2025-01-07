import { IColumn, ISchemas } from '@/components/TableCom/interface'

export const column: IColumn[] = [
    {
        prop: "companyName",
        label: "企业名称",
    },
    {
        prop: "creditCode",
        label: "信用代码",
    },
    {
        prop: "username",
        label: "用户名",
    },
    {
        prop: "status",
        label: "状态",
        slot: true
    },
];

export const schemas: ISchemas[] = [
    {
        field: 'name',
        label: '用户名',
        component: 'Input',
    },
    {
        field: 'status',
        label: '状态',
        component: 'Select',
        componentProps: {
            options: [
                { label: '启用', value: '0' },
                { label: '停用', value: '1' },
            ],
        },
    },
]