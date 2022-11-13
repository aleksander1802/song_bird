
import audioPlayer from './audioPlayer';

function audioPlayerRender(someItem) {

const element = document.querySelector('.audio__player');   

const {audio} = someItem;

element.innerHTML = `
        <audio id="mainPlayer" src=${audio} preload="auto" hidden></audio>
        <div class="audio__player_controls audio__player_controls-360"> 
            <div class="audio__player_controlsButton">
                <img class="audio__player_play"  src="./styles/assets/icons/play__button.svg" alt="play button">
                <img class="audio__player_pause hide" src="./styles/assets/icons/pause__button.svg" alt="pause button">
            </div>                        

            <div class="audio__player_duration">
                <input 
                    min="0" 
                    max="100" 
                    value="0" 
                    step="1" 
                    type="range"
                    class="audio__player_duration-change durationRange">
                <div class="audio__player_duration-time">
                    <span class="audio__player_duration-time-left currentTimer">00:00</span>
                    <span class="audio__player_duration-time-right durationTimer">Loading</span>                    
                </div>    
            </div>
            <div class="audio__player_mute">
                <img src="./styles/assets/icons/mute__icon_on.svg" alt="mute on" class="audio__player_mute-on">
                <img src="./styles/assets/icons/mute__icon_off.svg" alt="mute off" class="audio__player_mute-off hide">
            </div>
            <div class="audio__player_volume">
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value="100" 
                    step="1"                     
                    class="audio__player_volume-change volumeRange">
            </div>
        </div>
    `
    
    audioPlayer(audio); 

}

export default audioPlayerRender;