console.log("hellow developer")

function PageOneAnimation(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            pin: true,
            markers: true,
        }
    })
    
    tl
    .to("#circle #btm img", {
        rotate: "-180deg",
        scale: .6,
        stagger: .1,
        ease: Power1,
    },"same")
    .to("#circle #top img", {
        scale: .6,
        ease: Power1,
     },"same")
    .to("#home #gallery", {
        bottom: "-100%",
        ease: Power1,
    },"same")
    .to("#cimage img", {
        scale: 0,
        ease: Power1,
        delay: .2,
    },"same")
    .to("#centerimg h5",{
        opacity: 0,
        ease: Power1,
        
    },"same")
    .to("#circp", {
        top: "50%",
        scale: 2,
        ease: Power1
    },"same")
    .to("#circle",{
        scale: .5,
        ease: Power1
    },"same")
    .to("smcircle",{
        scale: .6,
        ease: Power1,
    },"same")
    
    .to(" #pinkflare",{
        bottom: "0%",
        rotate: 0,
        ease: Power1,    
    },"same")
    .to("#circle",{
        scale: 0,
        ease: Power1, 
    },"same2")
    .to("#smcircle",{
        scale: 0,
        ease: Power1, 
    },"same2")
    .to("#circp",{
        opacity: 0,
        scale:1,
        ease: Power1  ,
    },"same2")
    .to("#sidepurple",{
        top:0,
        ease: Power1,
    },"same2")
    .to("#sidepurple",{
        top:"-150%",
        ease: Power1,
        delay:.2,
        duration: 2,
    })
    
}

function PageSecondAnimation(){
     var tl2 = gsap.timeline({
        scrollTrigger:{
           trigger: "#second",
           pin: true,
           markers: true,
           scrub: 1,
           start: "top top",
        }
    })
    
    tl2.to(".circle",{
        top: "50%",
        stagger: .5,
        duration: 1,
        ease: Power1
    })
    .to(".circle",{
        left: "50%",
        duration: 5,
        ease: Power1,
    })
    .to(".circle",{
        scale: .8,
        duration: 5,
        ease: Power1
    })
    .to(".circle",{
        scale: 10,
        duration: 5,
        ease: Power1
    })
    .to(".pu",{
        background: `linear-gradient(to right, #D5A7B4, #B4AAD5)`,
        duration: 5,
        ease: Power1,
    },"b")
    .to("#stop h1",{
        left: "-150%",
        duration: 10,
        ease: Power1
    },"b")
    .to("#stop h1",{
        left: "-150%",
        duration: 10,
        ease: Power1
    },"b")
    .to("#p2",{
        opacity: 0,
        duration: 3,
        ease: Power1,
    },"b")
    .to("#p1",{
        opacity: 1,
        delay: 2,
        duration: 3,
        ease: Power1
    },"b")
    .to(".slide",{
        top: 0,
        stagger: 1,
        duration: 10,
        ease: Power1,
    })
}
PageOneAnimation();
PageSecondAnimation();