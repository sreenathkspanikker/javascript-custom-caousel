//slider settings
const settings = {
    autoslide: false,
    autoslideDuration: 3000,
    nav: true,
    dots: true
}

// function initialization
function Init(e) {
    const {autoslide, nav, dots, autoslideDuration} = e;
    
    // Init first slide
    initilaItem();

    // Init nav
    if(nav) sliderNav();
    
    // Init dot
    if (dots) dotNav();

    // Init auto slide
    if (autoslide) autoSlide(autoslideDuration);

    // Init navigation
    document.querySelector('.btn-wrap').classList.add(!nav ? 'hide' : 'show');
    
};

// Function init all
Init(settings)

// Function initial slide 
function initilaItem() {
    let sliderElem = document.querySelectorAll('.card')
    for (let i = 0; i < sliderElem.length; i++) {
        const element = sliderElem[i];
        element.classList.remove("view");
        element.classList.add(`slide-${i}`);
        [...sliderElem][0].classList.add("view");
    } 
}

// Function auto slider
function autoSlide(duration) {
    setInterval(() => {
        const currCard = document.querySelector(".card.view")
        const autoNext = currCard.nextElementSibling ? currCard.nextElementSibling : document.querySelector('.card-container').firstElementChild
        currCard.classList.remove("view");
        autoNext.classList.add("view");
    }, duration);
}

// Function dot navigation
function dotNav() {
    const sliderWrapper = document.querySelector('.demo-slider')
    const dotUl = document.createElement('ul');
    dotUl.classList.add('dont-nav');
    sliderWrapper.append(dotUl);

    const totalCard = document.querySelectorAll(".card");
    let dotArr = [];
    for (let i = 0; i < totalCard.length; i++) {
        const element = totalCard[i];
        const dotLi = document.createElement('li')
        dotUl.append(dotLi);
        dotArr.push(dotLi)

        dotLi.addEventListener("click", function (e) {
            const currCard = document.querySelector(".card.view");
            for (let j = 0; j < [...dotArr].length; j++) {
                if (j === i) {
                    currCard.classList.remove("view");
                    element.classList.add("view");
                }
            }
        })
    }
}

// Function slider nav
function sliderNav() {
    const sliderWrap = document.querySelector('.demo-slider');
    const btnWrap = document.createElement("div");
    btnWrap.classList.add('btn-wrap');
    const prev = document.createElement("button");
    prev.classList.add('btn-prev');
    prev.innerHTML = '&lt;'
    const next = document.createElement("button");
    next.classList.add('btn-next');
    next.innerHTML = '&gt;'
    
    btnWrap.append(prev, next);
    sliderWrap.append(btnWrap);

    // function previos slider
    prev.addEventListener("click", function () {
        // Find the current card 
        const currCard = document.querySelector(".card.view");
        
        // Set the prevCard based on its availability 
        const prevCard = currCard.previousElementSibling
        ? currCard.previousElementSibling
        : document.querySelector(".card-container").lastElementChild;

        currCard.classList.remove("view");
        prevCard.classList.add("view");
    });

    // function next slider
    next.addEventListener("click", function () {
        //   Find the current card 
        const currCard = document.querySelector(".card.view");

        // Set the nextCard based on its availability 
        const nextCard = currCard.nextElementSibling
        ? currCard.nextElementSibling
        : document.querySelector(".card-container").firstElementChild;

        currCard.classList.remove("view");
        nextCard.classList.add("view");

    });

}
