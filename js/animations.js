gsap.from("#button",{opacity:0, y:50, duration:0.6,delay:1})
gsap.from("#tagline",{opacity:0, x:-50, duration:0.6,delay:1})

var width = 1100, //assumes your image is 1024px wide
   speed = -20, //pixels per second
   duration = 10,
   endPosition = -220; //adjust the end position assuming 60fps
gsap.to("#background", duration, {css:{backgroundPosition:endPosition + "px " + endPosition + "px"}, repeat:-1, ease:Linear.circ,yoyo:true});