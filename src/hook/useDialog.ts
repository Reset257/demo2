const useDialog = () => {
  const dialogRef = ref();
  const initData = ref()

  const openDialog = (data?: any) => {
    data && (initData.value = data)
    dialogRef.value?.openDialog(data)
  }

  const closeDialog = () => {
    dialogRef.value?.closeDialog()
  }

  return {
    dialogRef,
    closeDialog,
    openDialog,
    initData
  }
}

export default useDialog
