// 按钮防抖指令
function throttle(app: any) {
    app.directive('throttle', {
        mounted(el: any, binding: any) {
            el.addEventListener('click', () => {
                if (!el.disabled) {
                    el.disabled = true;
                    let time = binding.value || 2;
                    setTimeout(() => {
                        el.disabled = false;
                    }, time * 1000);
                }
            });
        }
    })
}
export default throttle