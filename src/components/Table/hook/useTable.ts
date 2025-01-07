import { IResultType } from '@/api/interface'
import { IProps } from '../index.vue'

interface IUseTableProps extends IProps {
    deleteApi?: (params?: any) => Promise<IResultType<any>>
    editApi?: (params?: any) => Promise<IResultType<any>>
    addApi?: (params?: any) => Promise<IResultType<any>>
    handleApiParams?: (data: any) => any
}

const useTable = (props: IUseTableProps) => {
    const tableRef = ref()

    /* 刷新列表 */
    const getList = () => {
        tableRef.value.getList()
    }

    /* 删除 */
    const handleDelete = async (row: any) => {
        if (!props.deleteApi) return
        await props.deleteApi({ id: row.id }).then((res: any) => {
            res.code === 200 && getList()
        })
    }

    /* 操作弹窗（新增或者删除） */
    const handleDialog = async (type: 'add' | 'edit', data: any) => {
        if (type === 'add') {
            if (!props.addApi) return
            await props.addApi(props.handleApiParams ? props.handleApiParams(data) : data).then((res) => {
                res.code === 200 && getList()
            })
        } else if (type === 'edit') {
            if (!props.editApi) return
            await props.editApi(props.handleApiParams ? props.handleApiParams(data) : data).then((res) => {
                res.code === 200 && getList()
            })
        }
    }

    /* 返回 hook 传入的属性，也许只是为了代码简洁好看 */
    const getProps = computed(() => props)

    onMounted(() => {
        if (tableRef.value && !props?.treeAside) {
            getList()
        }
    });


    return {
        tableRef,
        getProps,
        getList,
        handleDelete,
        handleDialog,
    }
}
export default useTable