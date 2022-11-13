import playAgain from './modules/playAgain';
import options from './modules/options';
import {
    trainingBirdsData,
    sparrowBirdsData,
    forestBirdsData,
    songBirdsData,
    predatorBirdsData,
    seaBirdsData
} from './modules/db';

window.addEventListener('DOMContentLoaded', function () {

    const button = document.querySelector('.button__quiz_next');
    const categoryItem = document.querySelectorAll('.quiz__category_item');
    const birdName = document.querySelector('.quiz__bird-name');
    const birdImage = document.querySelector('.quiz__bird-image');
    const mainScore = document.querySelector('.header__main_score-change');
    const inroDiv = document.querySelector('.quiz__wrapper_item');

    let data = [trainingBirdsData, sparrowBirdsData, forestBirdsData, songBirdsData, predatorBirdsData, seaBirdsData];
    let count = 0;

    const changeCategoryItem = (num) => {

        categoryItem.forEach(item => {
            item.classList.remove('quiz__category_item-active');
        })

        categoryItem[num].classList.value = 'quiz__category_item quiz__category_item-active';
    }

    button.addEventListener("click", () => {
        birdName.textContent = 'Угадай, кто я?';
        birdImage.src = './styles/assets/img/guess.png';
        inroDiv.innerHTML = "";

        count += 1

        if (count === 6) {
            count = 0;

            window.location.href = 'results.html?&' + mainScore.textContent;

            mainScore.textContent = '0';
        }

        options(data[count]);
        changeCategoryItem(count);

        button.disabled = true;

    })

    options(data[count]);

    changeCategoryItem(count);

    button.disabled = true;

    playAgain()

});