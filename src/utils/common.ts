import { delToken } from './cookies'

export const logOut = () => {
    delToken()
    localStorage.clear()
    window.location.reload()
}

// el-form校验失败滚动到对应的错误位置
export function elFormErrorScrollIntoView() {
    // 获取第一个校验错误的元素
    const element = document.querySelectorAll('.el-form-item__error')[0]
    // 滚动到错误元素对应位置
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
}