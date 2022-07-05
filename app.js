// gsap timeline

const tl = gsap.timeline({default: {duration: 0.15}})
const containers = document.querySelectorAll(".input-container");
const form = document.querySelector("form");


// home page animation
tl.fromTo('.cta1' , {x:-110, opacity: 0}, {x: 0, opacity: 1});
tl.fromTo('.cta2' , {x:110, opacity: 0}, {x: 0, opacity: 1});
tl.fromTo('.cta3' , {x:-180, opacity: 0}, {x: 0, opacity: 1});
tl.fromTo('.cta4' , {x:180, opacity: 0}, {x: 0, opacity: 1});
tl.fromTo('.cta-text-a', {opacity: 0}, {opacity: 1});
tl.fromTo('.homepicc' , {x:-180, opacity: 0}, {x: 0, opacity: 1}, '<');
tl.fromTo('.deliveryy' , {x:180, opacity: 0}, {x: 0, opacity: 1}, '<');


//Elastic Effect
containers.forEach((container) => {
  const input = container.querySelector(".input");
  const line = container.querySelector(".elastic-line");
  const placeholder = container.querySelector(".placeholder");

  input.addEventListener("focus", () => {
    //Check to see if there is any text in the input
    if (!input.value) {
      tl.fromTo(
        line,
        { attr: { d: start } },
        { attr: { d: end }, ease: "Power2.easeOut", duration: 0.75 }
      );
      tl.to(line, { attr: { d: start }, ease: "elastic.out(3,0.5)" }, "<50%");
      //Placeholder Shift
      tl.to(
        placeholder,
        {
          top: -5,
          left: 0,
          scale: 0.7,
          duration: 0.5,
          ease: "Power2.easeOut",
        },
        "<15%"
      );
    }
  });
});


form.addEventListener("click", () => {
    containers.forEach((container) => {
      const input = container.querySelector(".input");
      const line = container.querySelector(".elastic-line");
      const placeholder = container.querySelector(".placeholder");
  
      if (document.activeElement !== input) {
        if (!input.value) {
          gsap.to(placeholder, {
            top: 0,
            left: 0,
            scale: 1,
            duration: 0.5,
            ease: "Power2.easeOut",
          });
        }
      }
    });
  });

// for mobile menubar

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// about section animation

gsap.from('.about-img', {
  duration: 0.75,
  autoAlpha: 0,
  rotation: -60,
  x: -100,
  scrollTrigger: {
      trigger: ".about-img",
      // markers: true,
      // Trigger Scroller
      start: "top 80%",
      end: "bottom 95%",
      scrub: true,
  }
})

gsap.from('.about-text', {
  duration: 0.75,
  autoAlpha: 0,
  x: 20,
  scrollTrigger: {
      trigger: ".about-text",
      // markers: true,
      // Trigger Scroller
      start: "top 80%",
      end: "bottom 90%",
      scrub: true,
  }
})

// service section animation

gsap.from('.col', {
  duration: 0.75,
  autoAlpha: 0,
  x: -200,
  scrollTrigger: {
      trigger: ".col",
      // markers: true,
      // Trigger Scroller
      start: "top 80%",
      end: "bottom 80%",
      scrub: true,
  }
})

// contact section animation

gsap.from('.contact-form', {
  duration: 0.75,
  autoAlpha: 0,
  x: 50,
  scrollTrigger: {
      trigger: ".contact-form",
      // markers: true,
      // Trigger Scroller
      start: "top 80%",
      end: "bottom 80%",
      scrub: true,
  }
})

