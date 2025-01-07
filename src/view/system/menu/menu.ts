import { IColumn, ISchemas } from '@/components/TableCom/interface'

export const column: IColumn[] = [
    {
        prop: "name",
        label: "名称",
    },
    {
        prop: "icon",
        label: "图标",
    },
    {
        prop: "url",
        label: "链接",
    },
    {
        prop: "component",
        label: "组件",
    },
    {
        prop: "sortNum",
        label: "排序",
    },
    {
        prop: "level",
        label: "层级",
    },
    {
        prop: "type",
        label: "类型",
    },
    {
        prop: "status",
        label: "状态",
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