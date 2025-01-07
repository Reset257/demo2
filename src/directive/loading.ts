import { ElLoading } from 'element-plus'

function loading(app: any) {
    app.directive('loading', {
        mounted(el: any, binding: any) {
            if (binding.value) {
                el.instance = ElLoading.service({
                    target: el,
                    lock: true,
                    text: 'Loading...'
                })
            }
        },
        updated(el: any, binding: any) {
            if (binding.value !== binding.oldValue) {
                if (binding.value) {
                    el.instance = ElLoading.service({
                        target: el,
                        lock: true,
                        text: 'Loading...'
                    })
                } else {
                    el.instance.close()
                }
            }
        },
        unmounted(el: any) {
            if (el.instance) {
                el.instance.close()
            }
        }
    })
}

export default loading
