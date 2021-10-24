gsap.from("#button",{opacity:0, y:50, duration:0.6,delay:3})
gsap.from("#tagline",{opacity:0, x:-50, duration:0.6,delay:3})
gsap.from("#toucan",{opacity:0,y:50,duration:1,delay:2})
gsap.from("#santelmo",{opacity:0,y:50,duration:1,delay:2})
gsap.from("#blob",{x:-300,duration: 1,delay:1})

gsap.set("#blob", {
  transformOrigin:"90px 90px"
});
gsap.to("#blob",{rotation:360,duration:30,repeat:-1,ease:"power1.out"})

gsap.set("#tail", {
  rotation: 0,
  transformOrigin:"100% 0%"         // make transform origin be center for x and y axis
});
gsap.to("#tail",{rotation:10,ease:Linear.circ,duration:1,repeat:-1,yoyo:true})

var width = 1100, //assumes your image is 1024px wide
   speed = -10, //pixels per second
   duration = 10,
   endPosition = -220;
gsap.to("#background", duration, {css:{backgroundPosition:endPosition + "px " + endPosition + "px"}, repeat:-1,yoyo:true});

function hover() {
  var button = document.querySelector('#rectangle');
  button.style.fill = "#FFE7B9";
  button.style.stroke = "#FFE7B9";
}

function leave() {
  var button = document.querySelector('#rectangle');
  button.style.fill = "#FCBF49";
  button.style.stroke = "#FCBF49";
}
