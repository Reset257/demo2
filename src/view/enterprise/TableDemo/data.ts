import { IColumn, ISchemas as ITableSchemas } from '@/components/TableCom/interface'
import { ISchemas } from '@/components/FormDialog/interface'
import { getCompanyOptions } from '@/api/company/index'

export const column: IColumn[] = [
    {
        label: '子系统编号',
        prop: 'code',
    },
    {
        label: '端口号',
        prop: 'port',
    },
    {
        label: '子系统名称',
        prop: 'name',
    },
    {
        label: '序号',
        prop: 'sort',
    },
    {
        label: '系统版本',
        prop: 'version',
    },
];

export const schemas: ITableSchemas[] = [
    {
        field: 'name',
        label: '岗位名称',
        component: 'Input',
    },
]

export const dialogSchemas: ISchemas[] = [
    {
        field: 'name',
        label: '岗位名称',
        component: 'Input',
        required: true
    },
    {
        field: 'name',
        label: '岗位名称',
        component: 'Input',
        required: true
    },
    {
        field: 'name',
        label: '岗位名称',
        component: 'Input',
        required: true
    },
    {
        field: 'name',
        label: '岗位名称',
        component: 'Input',
        required: true
    },
    {
        field: 'name',
        label: '岗位名称',
        component: 'Input',
        required: true
    },
    {
        field: 'name',
        label: '岗位名称',
        component: 'Input',
        required: true
    },
    {
        field: 'name',
        label: '岗位名称',
        component: 'Input',
        required: true
    },
    {
        field: 'name',
        label: '岗位名称',
        component: 'Input',
        required: true
    },
    {
        field: 'name',
        label: '岗位名称',
        component: 'Input',
        required: true
    },
    {
        field: 'name',
        label: '岗位名称',
        component: 'Input',
        required: true
    },
    {
        field: 'department',
        label: '组织',
        component: 'ApiSelect',
        api: getCompanyOptions,
        // required: true,
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