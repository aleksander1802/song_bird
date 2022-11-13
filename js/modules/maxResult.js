

const maxResult = () => {

    const mainResult = document.querySelector('.results__main');
    mainResult.innerHTML = '';    

    let element = document.createElement('div');

    element.innerHTML = `
    <div class="results__main_score">
        Поздравляем!<br>
        Вы прошли игру и набрали максимальный балл!  
    </div>

    <div class="results__main_variants">  
        <div class="results__main_variants-link">
            <a class="header__main_nav-link" href="./index.html">Вернуться на главную</a>
        </div>
    </div>    
    `
    
    mainResult.append(element);




}

export default maxResult;