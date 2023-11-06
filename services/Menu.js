import API from "./API.js";

export async function loadData(){
    _app.store.menu = await API.fetchMenu.call(API)
}

export async function getProductById(id){
    if(_app.store.menu === null){
        await loadData()
    }
    for (let coffee of _app.store.menu) {
        for (let product of coffee.products) {
            if (product.id==id) {
                return product;
            }
        }
    }
    return null;
   
}