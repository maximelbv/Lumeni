// reload on viewport size change
window.addEventListener('resize', () => {
    location.reload();
})

// DO NOT MOVE SCOPE
let cardWidth = document.querySelector('.card').scrollHeight * 1.778;
let cardsSelector = document.querySelector('.portfolioGrid').children;
let cards = [...cardsSelector];

cards.forEach(card => {
    card.style.width = `${cardWidth}px`
});
// DO NOT MOVE SCOPE

gsap.registerPlugin(ScrollTrigger);

let box = document.querySelector('.showcaseCtn');
let showcaseHeaderLength = document.querySelector('.showcaseHeader').clientWidth + 5;
let cardLength = document.querySelector('.card').scrollWidth + 32;
let cardCount = Math.round(document.querySelector('.portfolioGrid').childElementCount / 2);
let portfolioLength = (cardCount * cardLength) + 32;



let showcaseLength = (portfolioLength + showcaseHeaderLength) - window.innerWidth;

// portfolio horizontal scroll
const timeline = gsap.timeline({
    scrollTrigger: {
        delay: 1,
        trigger: box,
        start: `top 104.8px`,
        pin: true,
        end: '+=600%',
        // markers: true,
        scrub: 0.5,
    }
});

timeline
    .to('body',{ duration: .2 }) 
    .to(box , {
    duration: 1,
    x: `-=${showcaseLength}` ,
    ease: "none",
    
    })
    .to('body',{ duration: .2 })
