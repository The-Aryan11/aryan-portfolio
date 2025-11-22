// Fade‑in on scroll
const faders=document.querySelectorAll(".fade");
const observer=new IntersectionObserver(
 entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");}),
 {threshold:0.15});
faders.forEach(f=>observer.observe(f));

// Testimonial slider
let slides=document.querySelectorAll("#slider .slide"),index=0;
setInterval(()=>{
 slides[index].classList.remove("visible");
 index=(index+1)%slides.length;
 slides[index].classList.add("visible");
},5000);