// Элементы на странице
const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#bntNext');
const btnPrev = document.querySelector('#bntPrev');

sliderItems.forEach(function(slide, index) {
    console.log(slide);


    if (index !== 0) slide.classList.add('hidden');  
    
    slide.dataset.index = index;

    sliderItems[0].setAttribute('data-active', '');

});

btnNext.onclick = function () {
    // console.log('Next Slide');

    //  Скрываем тикуший слайд 
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Показываем след слайд
    const nextSlideIndex = currentSlideIndex + 1 ===  sliderItems.length ? 0 : currentSlideIndex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}

btnPrev.onclick = function () {
    console.log('Prev Slide');

    //  Скрываем тикуший слайд 
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Показываем след слайд
    const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length -1 : currentSlideIndex - 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}