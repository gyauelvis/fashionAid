let navStatus = false;

document.querySelector("#price_range").addEventListener("input",(e)=>{
    document.querySelector("#price_range_label").textContent = `Ghc ${e.target.value}`;
})

document.querySelector(".hamburger").addEventListener("click",(e)=>{
    e.preventDefault();
    let sideBar = document.querySelector(".side-bar");
    if(!navStatus){
        sideBar.classList.contains("animate-slideOut")?sideBar.classList.replace("animate-slideOut","animate-slideIn"): sideBar.classList.add("animate-slideIn");

        navStatus = true;
    }else{
        sideBar.classList.replace("animate-slideIn","animate-slideOut");
        navStatus = false;
    }
});