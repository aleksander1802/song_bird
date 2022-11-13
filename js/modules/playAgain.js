
import results from './results';
import maxResult from './maxResult'


function playAgain () {    

    let score = decodeURIComponent(location.search.slice(1)).split('&');
    score.splice(0, 1);
    let result = +score[0];

    if (result < 30) {
        results(result)
    }
    if (result === 30) {
        maxResult()       
    }

    console.log('Не успел реализовать Extra scope, а именно локализацию приложения на два языка и галерею всех птиц. Самооценка 250 баллов');
    

    const mainResult = document.querySelector('.results__main');
    
}


export default playAgain;




