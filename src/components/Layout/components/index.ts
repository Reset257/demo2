import SubMenu from './SubMenu.vue'
import type { App } from 'vue';


SubMenu.install = (app: App) => {
	app.component(SubMenu.name, SubMenu)
}

export default SubMenu
