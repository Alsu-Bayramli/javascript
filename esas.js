

const hamburgerMenu = document.querySelector(".menimbuttonum") 
const baglamaiconu= document.querySelector(`.fa-xmark`)
hamburgerMenu.addEventListener(`click`, function () {
   
    document.querySelector(`.curtain-menu`) .classList.add(`aktiv`)

   
})


baglamaiconu.addEventListener(`click`, function() {

    document.querySelector(`.curtain-menu`) .classList.remove(`aktiv`)
})






const watchVideoBtn  = document.getElementsByClassName("watch-video")[0]
  
watchVideoBtn.addEventListener('click', ()=>{
    document.getElementsById("watch-video-modal").classList.add("aktiv")
 } )
 


// const watchVideoBTN=document.getElementsByClassName(`watch-video`)[0]
// watchVideoBTN.addEventListener(`click`, function() { 
//     document.getElementsByClassName("watch-video-modal").classList.add("aktiv")
// }
// )

 