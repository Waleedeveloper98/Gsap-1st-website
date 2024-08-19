var tl = gsap.timeline()

tl.from("nav",{
    y:-100,
    duration:1,
    delay : .5,
    opacity: 0,
},"a")
tl.to("#nav-part2 img",{
    rotate:360,
    duration:1,
    delay:.8
},"a")
tl.from("#frame",{
    height:100,
    duration:1.5
},"a")
tl.from("#frame h2",{
    opacity:0,
    duration:1.5
},"a")
tl.from("#frame #hero-img",{
    y:-80,
    duration: 1.5
},"a")
tl.to(".big-text h1",{
    width: "120%",
    duration:1.5
})