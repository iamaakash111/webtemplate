//Selecting various sections
const skills= document.querySelector(".skills");
const projects= document.querySelector(".projects");
const interests= document.querySelector(".hobbyInterests");
const about= document.querySelector(".about");

//link IDs and scroll
const projectBtn= document.querySelector("#projects");
projectBtn.addEventListener("click", function(){
    projects.scrollIntoView({behavior:"smooth"})
})
const aboutBtn= document.querySelector("#about");
aboutBtn.addEventListener("click", function(){
    about.scrollIntoView({behavior:"smooth"})
})
const skillsBtn= document.querySelector("#skills");
skillsBtn.addEventListener("click", function(){
    skills.scrollIntoView({behavior:"smooth"})
})
const interestsBtn= document.querySelector("#interests");
interestsBtn.addEventListener("click", function(){
    interests.scrollIntoView({behavior:"smooth"})
})


//Selecting links
const headerLink= document.querySelectorAll(".nav-link");
//For tab Component
const box = document.querySelectorAll("box");
const tabBtn = document.querySelector(".tabs");
const tabs= document.querySelectorAll(".btn");
//For Toggle Button
const navLinks= document.querySelector(".nav-links");
const toggleButton= document.querySelector(".toggle");

toggleButton.addEventListener("click",function(e){
    console.log("Clicked");
    navLinks.classList.toggle("show")
})

// const observer= new IntersectionObserver(function (enteries,observer) {
//     enteries.forEach(entry => {
//         entry.target.classList.toggle("color", entry.isIntersecting);
//        // observer.unobserve(entry.target)
//     });
// },{
//    threshold:1
// })
// observer.observe(footer)

const content = document.querySelectorAll(".content")

tabBtn.addEventListener('click',function(e){

        const clicked = e.target.closest(".btn");
        if (clicked!==null){ 
           tabs.forEach(tab => {
               tab.classList.remove("active-btn");
           });
           clicked.classList.add("active-btn");
           content.forEach(item =>
            item.classList.remove("active-content")
           )
           document.querySelector(`.content-${clicked.dataset.tab}`).classList.toggle("active-content")
        }
       
 })    
//SElecting the toggle But


