gsap.registerPlugin(Flip)

const links = document.querySelectorAll(".text")
const active = document.querySelector(".active");

links.forEach((link) => {
 link.addEventListener("click", () => {
   //turn navs blue
gsap.to(links, { color: "#c39eff"});
if(document.activeElement === link) {
 gsap.to(link, {color:"rgb(252 211 77)"})
}


//Wanna move the line
const state = Flip.getState(active);
link.appendChild(active)
Flip.from(state,{
 duration:1.25,
 absolute:true,
 ease: 'elastic.out(1,0.5)'

})
 })
})

 //Cards 

 const cards = document.querySelectorAll(".card");

 cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    //get state

    const state = Flip.getState(cards);

    //Add the active class to the clicked one and add inactiveto tje others

    const isCardActive = card.classList.contains("active")
    cards.forEach((otherCard , otherIdx) => {
      otherCard.classList.remove("active");
      otherCard.classList.remove("is-inactive");
      if(!isCardActive && index !== otherIdx) {
        otherCard.classList.add("is-inactive")
      }
    });
    if(!isCardActive) card.classList.add("active");
    Flip.from(state, {
      duration:1,
      ease:"expo.out",
      absolute:true,
    })
  })
 })