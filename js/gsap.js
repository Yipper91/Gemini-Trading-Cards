gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true)

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-Wrapper',
    content: '#smooth-content',
    smooth: 1,
    effects: true,
    normalizeScroll: true
});

// pin box-c when it reaches the center of the viewport, for 300px
// ScrollTrigger.create({
//     trigger: ".box-c",
//     pin: true,
//     start: "center center",
//     end: "+=300",
//     markers: true
// });