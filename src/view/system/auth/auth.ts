import { IColumn, ISchemas } from '@/components/TableCom/interface'

export const column: IColumn[] = [
    {
        prop: "monitorPointName",
        label: "名称",
    },
    {
        prop: "packetTime",
        label: "时间",
    },
    {
        prop: "dataType",
        label: "类型",
        slot: true
    },
    {
        prop: "devSn",
        label: "devSn",
    },
];

export const schemas: ISchemas[] = [
    {
        field: 'menuName',
        label: '菜单名称',
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