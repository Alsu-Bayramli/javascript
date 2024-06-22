

const hamburgerMenu = document.querySelector(".menimbuttonum") 
const baglamaiconu= document.querySelector(` .fa-xmark`)
hamburgerMenu.addEventListener(`click`, function () {
   
    document.querySelector(`.curtain-menu`) .classList.add(`aktiv`)

   
})


baglamaiconu.addEventListener(`click`, function() {

    document.querySelector(`.curtain-menu`) .classList.remove(`aktiv`)
})


document.querySelector(`.fa-circle-xmark`).addEventListener(`click`, function(){
      document.querySelector(`#watch-video-modal`).classList.remove(`aktiv`)
})



const watchVideoBtn  = document.getElementsByClassName("watch-video")[0]
  
watchVideoBtn.addEventListener('click', ()=>{
    document.getElementById ("watch-video-modal").classList.add("aktiv")
 } )
 




//  partnyor qismi
const swiper = new Swiper(".mySwiper", {
     slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });

 
//   <div class="blog py-4">
//   <small> <span id="date ">April 16,2021</span> <span id="time"> 6 </span> mins </small>
//   <h3 class="py-3">Design tips for designers, that cover everything you need</h3>

//   <a class="nav-link py-2" href="">Read the article <img class="ps-2" src="assets/images/oxwhite.svg"
//       alt=""></a>

// </div>


const blogButtonu= document.querySelector(`.blogGetirmeButtonu`)

for (let i = 0; i < 7; i++) {
    blogButtonu.innerHTML+=  `<div class="blog py-4">
      <small> <span id="date ">April 16,2021</span> <span id="time"> 6 </span> mins </small>
  <h3 class="py-3">Design tips for designers, that cover everything you need</h3>

  <a class="nav-link py-2" href="">Read the article <img class="ps-2" src="assets/images/oxwhite.svg"
      alt=""></a> </div> `
 
    
}