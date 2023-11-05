const API = {
    url: '/data/menu.json',
    fetchMenu: async function loadData(){
        const result = await fetch(this.url)
        console.log('result....', result)
        return await result.json()   
    }
}


export default API