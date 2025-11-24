// --- Amazing Effect: Neon Mouse Tracer Logic ---
const tracer = document.querySelector('.tracer');
let timeout;

// Moves the tracer element
document.addEventListener('mousemove', (e) => {
    // Clear the fade-out timeout on movement
    clearTimeout(timeout); 

    // Position the tracer at the mouse coordinates
    tracer.style.left = e.clientX + 'px';
    tracer.style.top = e.clientY + 'px';
    
    // Ensure tracer is visible (fade-in)
    tracer.classList.add('active'); 

    // Set a new timeout to fade out the tracer if movement stops
    timeout = setTimeout(() => {
        tracer.classList.remove('active'); // Fade out smoothly using CSS transition
    }, 100); // Erase after 100ms of no movement
});

// --- Amazing Effect: 3D Tilt for Service Cards ---
// The vanilla-tilt library is included in index.html for this
VanillaTilt.init(document.querySelectorAll(".card"), {
	max: 10,
	speed: 400,
    glare: true,
    'max-glare': 0.5,
});

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
