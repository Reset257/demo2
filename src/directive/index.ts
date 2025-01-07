
import type { App } from 'vue';
import throttle from './throttle'
import loading from './loading'

/**
 * @methods 用法：v-throttle
 */

export default function directive(app: App) {
    throttle(app)
    loading(app)
}



