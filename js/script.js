// Smooth scroll
function scrollToSection(id){
  const el = document.getElementById(id);
  if(!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top:y, behavior:"smooth" });
}

// Toggle videos
function toggleVideos(gridId){
  const grid = document.getElementById(gridId);
  if(!grid) return;
  const extra = grid.querySelector(".extra-videos");
  const btn = grid.querySelector(".view-all-btn");
  if(!extra || !btn) return;

  if(extra.style.display === "flex"){
    extra.style.display = "none";
    btn.textContent = "View All";
  }else{
    extra.style.display = "flex";
    btn.textContent = "View Less";
  }
}

// Scroll animations
const elements = document.querySelectorAll("[data-animate]");
function animateOnScroll(){
  const trigger = window.innerHeight * 0.85;
  elements.forEach(el=>{
    if(el.getBoundingClientRect().top < trigger) el.classList.add("active");
  });
}
window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
