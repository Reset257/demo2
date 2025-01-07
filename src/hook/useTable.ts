import { IResultType } from '@/api/interface'

interface IApi {
    delete?: (params?: any) => Promise<IResultType<any>>
    edit?: (params?: any) => Promise<IResultType<any>>
    add?: (params?: any) => Promise<IResultType<any>>
}
interface ITableProps {
    // 请求固定参数，后续不会随意变化，用于初始化 table
    params?: any
    // 增删改的请求
    api?: IApi
    // 处理新增和编辑弹窗数据之后再去入参
    handleApiParams?: (data: any) => any
}

const useTable = (props?: ITableProps) => {
    const tableRef = ref()
    // 查询参数
    const query = reactive<Record<string, any>>({});

    const getList = (params?: any) => {
        tableRef.value.getList(params)
    }

    // 重置
    const reset = () => {
        for (let key in query) {
            query[key] = "";
        }
    }

    // 删除
    const handleDelete = async (row: any) => {
        if (!props?.api?.delete) return
        await props.api.delete({ id: row.id }).then((res) => {
            res.code === 200 && getList()
        })
    }

    // 操作弹窗（新增或者删除）
    const handleDialog = async (type: 'add' | 'edit', data: any) => {
        if (type === 'add') {
            if (!props?.api?.add) return
            await props.api.add(props.handleApiParams ? props.handleApiParams(data) : data).then((res) => {
                res.code === 200 && getList()
            })
        } else if (type === 'edit') {
            if (!props?.api?.edit) return
            await props.api.edit(props.handleApiParams ? props.handleApiParams(data) : data).then((res) => {
                res.code === 200 && getList()
            })
        }
    }

    onMounted(() => {
        if (tableRef.value) {
            tableRef.value.init(props?.params);
        }
    });

    // 导出的是响应式对象，解构获取可能会导致失去响应
    return {
        query,
        tableRef,
        getList,
        reset,
        handleDelete,
        handleDialog
    }
}
export default useTable