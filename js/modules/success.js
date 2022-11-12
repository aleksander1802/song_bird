



function success (event, result, name, image) { 

    const button = document.querySelector('.button__quiz_next');
    const birdName = document.querySelector('.quiz__bird-name');
    const birdImage = document.querySelector('.quiz__bird-image');
    const mainScore = document.querySelector('.header__main_score-change');
    const mainPlayer = document.getElementById('mainPlayer');
    const playButton = document.querySelector('.audio__player_play');
    const pauseButton = document.querySelector('.audio__player_pause');


    let audio = new Audio('./styles/assets/audio/correct-answer.mp3');
    audio.play();
    mainPlayer.pause();
    playButton.classList.remove('hide');
    pauseButton.classList.add('hide');

    let scoreChange = +mainScore.textContent + result;

    button.disabled = false;
      
      event.target.classList.add('score');
    
      birdName.textContent = name;
      birdImage.src = image;

      mainScore.textContent = `${scoreChange}`
      
}

export default success;
