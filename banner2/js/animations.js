gsap.from("#button",{opacity:0, y:50, duration:0.6,delay:3})
gsap.from("#tagline",{opacity:0, x:-50, duration:0.6,delay:3})
gsap.from("#toucan",{opacity:0,y:50,duration:1,delay:2})
gsap.from("#santelmo",{opacity:0,y:50,duration:1,delay:2})
gsap.from("#rect3",{x:-900,duration: 1,delay:1})


gsap.set("#tail", {
  rotation: 0,
  transformOrigin:"100% 0%"         // make transform origin be center for x and y axis
});
gsap.to("#tail",{rotation:10,ease:Linear.circ,duration:1,repeat:-1,yoyo:true})


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
