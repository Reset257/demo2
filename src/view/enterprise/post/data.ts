import { IColumn } from '@/components/TableCom/interface'
import { ISchemas } from '@/components/FormDialog/interface'
import { getCompanyOptions } from '@/api/company/index'

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
        label: '岗位名称',
        component: 'Input',
    },
]

export const dialogSchemas: ISchemas[] = [
    {
        field: 'department',
        label: '组织',
        component: 'ApiSelect',
        api: getCompanyOptions,
        required: true,
    },
    {
        field: 'name',
        label: '岗位名称',
        component: 'Input',
        required: true
    },
    {
        field: 'introduce',
        label: '岗位职责',
        component: 'Textarea',
        required: true
    },
]