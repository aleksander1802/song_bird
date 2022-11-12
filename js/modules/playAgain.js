
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
    

    const mainResult = document.querySelector('.results__main');

    
    
}


export default playAgain;




