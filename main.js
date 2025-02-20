



const tl = gsap.timeline()

tl.from('.top', {
  y: 1000,
  duration: 1.6,
  delay: .2,
  opacity: 0,
  ease: "expo.inOut"
})

tl.from('.page1 .hero', {
  opacity: 0,
  y: 30,
  duration: .6,
  stagger: .15,
  ease: "expo.inOut"
})


tl.from('.hero1', {
  opacity: 0,
  y: -30,
  duration: .6,
  stagger: .1,
  ease: "expo.inOut"
})



gsap.from('.line', {
  x: -100,
  duration: .2,
  opacity: 0,
  delay: 3.6,
})

tl.from('.page1 .down', {
  opacity: 0,
  y: -30,
  duration: .6,
  stagger: .15,
  ease: "expo.inOut"
})

gsap.from('.page2top', {
  y: -50,
  opacity: 0,
  stagger: .8,
  scrollTrigger: {
    trigger: '.page2top',
    scroller: 'body',
    start: "top 70%",
    end: "top 50%",
    scrub: 3,
    ease: "expo.in",
  }
})




gsap.to('.heading2', {
  x: -360,
  scrollTrigger: {
    trigger: '.heading2',
    scroller: 'body',
    start: "top 100%",
    end: "top -20%",
    ease: "expo.inOut",
    scrub: 2
  }
})




gsap.from('.links', {
  x: 50,

  stagger: .25,
  scrollTrigger: {
    trigger: '.links',
    scroller: 'body',
    start: "top 80%",
    end: "top 60%",
    ease: "power.inOut",
    scrub: 2
  }
})

gsap.from('.links3', {
  y: 50,
  stagger: .25,
  scrollTrigger: {
    trigger: '.links3',
    scroller: 'body',
    start: "top 100%",
    end: "top 80%",
    ease: "power.inOut",
    scrub: 2
  }
})



gsap.from('.links2', {
  y: 50,
  opacity: 0,
  stagger: .25,
  scrollTrigger: {
    trigger: '.links2',
    scroller: 'body',
    start: "top 80%",
    end: "top 60%",
    ease: "power.inOut",
    scrub: 2
  }
})


gsap.from('.skillsBtnCover', {
  y: -50,
  opacity: 0,
  scrollTrigger: {
    trigger: '.skillsBtnCover',
    scroller: 'body',
    start: "top 70%",
    end: "top 65%",
    ease: "power.inOut",
    scrub: 4
  }
})

// Target the text in the .aboutStarted div
gsap.from(".aboutStarted", {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: '.aboutStarted',
    scroller: 'body',
    start: "top 90%",
    end: "top 70%",
    ease: "power.inOut",
    scrub: 2,
  }
}); // Ensure visibility


gsap.from(".pagedown", {
 opacity: 0,
  x: -50,
  scrollTrigger: {
    trigger: '.pagedown',
    scroller: 'body',
    start: "top 80%",
    end: "top 60%",
    ease: "power.inOut",
    scrub: 2,
  }
}); 


/*
const aboutDiv = document.querySelector(".leftAbout")
let text = aboutDiv.textContent.split(" ")
console.log(text)
aboutDiv.innerHTML="";
let clutter ="";
text.forEach((word)=>{
  clutter+=`<span class="word">${word} </span>`
})
aboutDiv.innerHTML=clutter,

gsap.from('.word',{
  y:20,
  opacity:0,
  stagger:.1,
  scrollTrigger:{
    trigger : '.word',
    scroller : 'body',
    start: "top 100%",
    end: "top 70%",
    ease :"ease.in",
    scrub:4,
  }
  
})

*/

/*
const calculate = document.querySelector('.calculate')
let sec = 40
for(let i= 0 ; i <= 93 ; i++){
  setTimeout(()=>{
    console.log(i)
    calculate.innerHTML=i
  },i*sec)
}


*/
const calculate1 = document.querySelector('.calculate1');

const calculate2 = document.querySelector('.calculate2');
const calculate3 = document.querySelector('.calculate3');

let sec = 20;

function calculateSkills(div, name, n) {
  ScrollTrigger.create({
    trigger: `.${name}`,
    start: 'top 100%',
    onEnter: () => {
      div.innerHTML = "0%";
      for (let i = 40; i <= n; i++) {
        setTimeout(() => {
          div.innerHTML = `${i}%`;
        }, i * sec);
      }
    },
  });


}
calculateSkills(calculate1, "calculate1", 80)
calculateSkills(calculate2, "calculate2", 90)
calculateSkills(calculate3, "calculate3", 85)
// Scroll-triggered animation



gsap.from('.skill1', {
  x: -220,
  stagger: .25,
  scrollTrigger: {
    trigger: '.skill1',
    scroller: 'body',
    start: "top 80%",
    end: "top 50%",
    ease: "ease.in",
    scrub: 4
  }
})

gsap.from('.skill2', {
  x: -240,
  stagger: .25,
  scrollTrigger: {
    trigger: '.skill2',
    scroller: 'body',
    start: "top 80%",
    end: "top 50%",
    ease: "ease.in",
    scrub: 4
  }
})

gsap.from('.skill3', {
  x: -200,
  stagger: .25,
  scrollTrigger: {
    trigger: '.skill3',
    scroller: 'body',
    start: "top 80%",
    end: "top 50%",
    ease: "ease.in",
    scrub: 4
  }
})



//quotes
gsap.from('.quotes1', {
  y: -100,
  opacity:0,
  scrollTrigger: {
    trigger: '.quotes1',
    scroller: 'body',
    start: "top 70%",
    end: "top 50%",
    scrub: 3,
    ease: "ease.in",
  }
})



gsap.from('.page3top', {
  y: -70,
  opacity: 0,
  stagger: .2,
  scrollTrigger: {
    trigger: '.page3top',
    scroller: 'body',
    start: "top 70%",
    end: "top 50%",
    scrub: 3,
    ease: "ease.in",
  }
})

gsap.from('.page4top', {
  y: -70,
  opacity: 0,
  stagger: .2,
  scrollTrigger: {
    trigger: '.page4top',
    scroller: 'body',
    start: "top 70%",
    end: "top 50%",
    scrub: 3,
    ease: "ease.in",
  }
})


document.getElementById('toggle1').addEventListener('click', function () {
  const content = document.getElementById('content1');
  const icon = this.querySelector('.text-end');

  if (content.style.height === '0px' || content.style.height === '') {
    // Expand the content
    gsap.to(content, { height: content.scrollHeight, duration: 0.4, ease: 'power2.out' });
    gsap.to(icon, { rotate: 90, duration: 0.5 });
    gsap.from('.lines',{
   x:-30,
  stagger:.3,
  scrollTrigger: {
    trigger: '.lines',
    scroller: 'body',
    start: "top 80%",
    end: "top 40%",
    scrub: 3,
    ease: "power2.out",
  }
})
  } else {
    // Collapse the content
    gsap.to(content, { height: 0, duration: 0.5, ease: 'power2.in' });
    gsap.to(icon, { rotate: 0, duration: 0.5 });
  }
});




gsap.to('.imageScroller', {
  x: -350,
  scrollTrigger: {
    trigger: '.imageScroller',
    scroller: 'body',
    start: "top 90%",
    end: "top -50%",
    ease: "ease.in",
    scrub: 5,
  }
})

gsap.from('.imageAbout', {
  x: 300,
  y:-160,
  borderRadius:"50%",
  scale:1.2,
  scrollTrigger: {
    trigger: '.imageAbout',
    scroller: 'body',
    start: "top 90%",
    end: "top -50%",
    ease: "ease.in",
    scrub: 5,
  }
})
