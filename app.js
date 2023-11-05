import API from './services/API.js'
import Store from './services/Store.js'
import { loadData } from './services/Menu.js'
import Router from './services/Router.js'


//Link web components
import { MenuPage } from './components/MenuPage.js'
import { DetailsPage } from './components/DetailsPage.js'
import { OrderPage } from './components/OrderPage.js'

// Creating store as globar variable since its in module not globabl
window._app = {}
_app.store = Store 
_app.router = Router

// to addEventListenermanipulate/work with dom it's better to wait for the dom content to load first
window.addEventListener("DOMContentLoaded", async()=>{ 
    // const menu = await API.fetchMenu()
    loadData()
    _app.router.init() // router initalization
})   

 