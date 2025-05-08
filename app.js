// gsap.to(".triggerScroll-boxes", {
//   scrollTrigger: ".scrollTrigger", // start the animation when ".box" enters the viewport (once)
//   x: 500,
// });

gsap.to(".triggerScroll-boxes", {
  y: 100,
  stagger: 0.1, // 0.1 seconds between when each ".box" element starts animating
});