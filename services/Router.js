const Router = {
    init: function initialization(){
        console.log('router initalized')
        document.querySelectorAll("a.navlink").forEach((link)=>{
            link.addEventListener("click", event=>{
                event.preventDefault()
                console.log("link clicked")
                const url = link.getAttribute("href")
                this.go(url)
            })
        })

        //Check the initial url
        // based on the current url it will load homepage, details or other page
        this.go(location.pathname)

        // Event handler for URL changes
        window.addEventListener("popstate", event=>{
           this.go(event.state.route, false) 
        })
    },
    go: function navigateTo(route, addToHistory=true){
        console.log(`Going to ${route}`)
        if(addToHistory){
            history.pushState({
                route
            }, '', route)
        }
        let pageElement = null
        switch(route){
            case "/":
                pageElement = document.createElement('menu-page')
                break
            case "/order": 
                pageElement = document.createElement('order-page')
                break
            default:
               if(route.startsWith("/product/")){
                    pageElement = document.createElement('details-page')
                    break
               }
        }
        let mainSection = document.querySelector("main")
        mainSection.innerHTML = ""
        mainSection.appendChild(pageElement)
        window.scrollX = 0
        window.scrollY = 0
    }
}

export default Router