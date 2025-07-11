//get html elements
const sliderContainer = document.querySelector('.slider-container')

const slideLeft = document.querySelector('.left-slide')

const slideRight = document.querySelector('.right-slide')

const downBtn = document.querySelector('.down-button')

const upBtn = document.querySelector('.up-button')

//here we count no.of count
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0 

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener('click' , ()=>{
    changeSlide('up')
})

downBtn.addEventListener('click' , ()=>{
    changeSlide('down')
})

const changeSlide = (direction)=>{
    const sliderHeight = sliderContainer.clientHeight

    if(direction === 'up'){

        activeSlideIndex++

        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0
        }
    }
    else if(direction === 'down'){
        activeSlideIndex--

        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`

    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`


    
}