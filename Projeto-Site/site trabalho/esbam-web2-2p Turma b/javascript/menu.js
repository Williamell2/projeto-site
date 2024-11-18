
document.addEventListener("DOMContentLoaded",() =>{
    const menuContainer = document.getElementById(menu-container)
    if (menuContainer){
        fetch("menu.html")
        .then(response =>{
            if(!response.ok) {
                throw new Error("Erro ao carregar menu!")
            }
            return response.text()
        })
        .then(data =>{
            menuContainer.innerHTML = data
        })
        .catch(console.error( =>{
            console.error("error", error)
        });
        )
    }
})v