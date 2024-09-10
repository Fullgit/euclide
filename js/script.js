const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const headerSearch = document?.querySelector('[data-search]');
const headerSearchForm = document?.querySelector('[data-search-form]');
const headerSearchClosed = document?.querySelector('.header__search-form-closed');
const searchFormClose = document?.querySelector('[data-search-form-close]');
const body = document.body;
const headerLink = nav?.querySelectorAll('a');
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
document.querySelector('.header__nav').style.setProperty('--header-height', `${headerHeight}px`);

burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    nav?.classList.toggle('header__nav--visible');
    nav?.classList.toggle('header__nav-closed');
    burger?.classList.toggle('burger--active');
})

headerLink.forEach(el => {
 el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    nav?.classList.remove('header__nav--visible');
    nav?.classList.add('header__nav-closed');
    burger?.classList.remove('burger--active');
 })   
});

headerSearch?.addEventListener('click', () => {
    headerSearchForm?.classList.toggle('header__search-visible');
    headerSearchClosed?.classList.toggle('header__search-form-closed');
    // headerSearch?.classList.add('header__search-hide');
})


searchFormClose?.addEventListener('click', () => {
    headerSearchForm?.classList.remove('header__search-visible');
    headerSearchClosed?.classList.toggle('header__search-form-closed');
    // headerSearch?.classList.remove('header__search-hide');
})

new Accordion('.questions__list', {
    elementClass: "accordion",
    triggerClass: "accordion-trigger",
    panelClass: "accordion-content",
    activeClass: "accordion-active"
})


const tabsBtn = document.querySelectorAll('.how-work__btn');
const tabsItem = document.querySelectorAll('.how-work-content');

tabsBtn.forEach(function(el){
    el.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn){ btn.classList.remove('how-work-tabs--active')});
        e.currentTarget.classList.add('how-work-tabs--active');

        tabsItem.forEach(function(el){el.classList.remove('how-work-content--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('how-work-content--active');
    })
})

const swiper = new Swiper('.swiper', {
    speed: 500,
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    // autoplay: {
    //   delay: 4000,
    //   stopOnLastSlide: false,
    //   disableOnInteraction: false,
    // },
    a11y: {
        paginationBulletMessage: 'Cлайд',
      },
  });