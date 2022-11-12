

const results = (score) => {

    const mainResult = document.querySelector('.results__main');
    mainResult.innerHTML = '';
    

    let element = document.createElement('div');

    element.innerHTML = `
    <div class="results__main_score">
        Ваш итоговый счёт: ${score} баллов. <br>
        Желаете пройти викторину ещё раз?
    </div>

    <div class="results__main_variants">        
        <div><a class="header__main_nav-link" href="./main.html">Пройти викторину ещё раз</a></div>
        <div><a class="header__main_nav-link" href="./index.html">Вернуться на главную</a></div>
    </div>    
    `
    
    mainResult.append(element);




}

export default results;