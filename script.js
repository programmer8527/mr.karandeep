///logo 
const logo = document.querySelector('.headerlogo');
logo.style.cursor='pointer'
logo.addEventListener('click',() => {
  window.location.href='index.html';
  
})
///nav bar movment
const navbtn= document.querySelector(".btn");
const navheader=document.querySelector(".header");
navbtn.addEventListener("click",() =>{
navheader.classList.toggle("active")
})

///on scroll animation
//scroll animation

// Optimized for performance using IntersectionObserver
const options = {
    root: null,
    threshold: 0.5 // Adjust as needed
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll");
      } else {
        entry.target.classList.remove("scroll");
      }
    });
  }, options);
  
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  // Trigger animation on refresh as well
  window.addEventListener("load", () => {
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top >= 0) {
        section.classList.add("scroll");
      }
    });
  });

  ///feedback function
const feed = document.getElementById('feedback');
const form = document.querySelector('.feedbackform');
const close1 = document.querySelector('.closebtn');
feed.addEventListener('click', () =>{
  form.style.transform='translateX(0)';
  
})

close1.addEventListener('click', () =>{
  form.style.transform='translateX(100%)';
  
})

// Check if page_view entry is present
var visitCount = localStorage.getItem("page_view");
if (visitCount) {
  visitCount = Number(visitCount) + 1 ;
} else {
  visitCount = 1;
}
localStorage.setItem("page_view", visitCount);

var counterContainer = document.querySelector(".website-counter");
counterContainer.innerHTML = visitCount + ' + views';


