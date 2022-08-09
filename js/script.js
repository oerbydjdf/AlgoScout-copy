'use strict';

let questionsItem = Array.from(document.querySelectorAll('.questions__item'));
questionsItem.forEach(e => {
    e.addEventListener('click', function () {
        showsBlock(e);
    });
});

// Показывает блок 'questions__answer'

function showsBlock(e) {
    let questionsAnswer = e.querySelector('.questions__answer_display-none');
    questionsAnswer.classList.toggle("questions__answer_display-active");
    if (questionsAnswer.style.height) {
        questionsAnswer.style.height = 0;
    } else {
        questionsAnswer.style.height = questionsAnswer.scrollHeight + 'px';
    }

    // Поворачивает стрелку
    let questionsArrow = e.querySelector('.questions__arrow');
    questionsArrow.classList.toggle("questions__arrow_active");
}

// Прокрутка страницы вверх
function scrollUp() {
    let top = document.querySelector('.back-top');
    top.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
}
scrollUp();

// Плавная прокрутка при нажатии на ссылки навигации
function scrollToElement() {
    let menu = document.querySelector('.menu__list');
    menu.addEventListener('click', function (event) {
        let target = event.target;
        if (target.className != 'menu__link') return;
        event.preventDefault();
        let id = target.getAttribute('href').slice(1);
        let elem = document.getElementById(id);
        let height = elem.offsetTop;
        window.scrollBy({
            top: height,
            behavior: 'smooth'
        });
    });
}
scrollToElement();