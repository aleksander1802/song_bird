import audioPlayerMini from "./audioPlayerMini";

function audioPlayerRenderMini(someItem) {

    const element = document.querySelector('.quiz__wrapper_item-miniplayer'); 

    element.innerHTML = `
    <audio id="miniPlayer" src=${someItem} preload="auto" hidden></audio>
    <div class="audio__player_controls"> 
            <div class="audio__player_controlsButton">
                <img id="audio__player_play" class="audio__player_play audio__player_play-mini"  src="./styles/assets/icons/play__button.svg" alt="play button">
                <img id="audio__player_pause" class="audio__player_pause audio__player_pause-mini hide" src="./styles/assets/icons/pause__button.svg" alt="pause button">
            </div>                        

            <div class="audio__player_duration">
                <input 
                    min="0" 
                    max="100" 
                    value="0" 
                    step="1" 
                    type="range" 
                    id="durationRange" 
                    class="audio__player_duration-change">
                <div class="audio__player_duration-time audio__player_duration-time-mini">
                    <span 
                        id="currentTimer"  
                        class="audio__player_duration-time-left">
                        00:00
                    </span>
                    <span 
                        id="durationTimer" 
                        class="audio__player_duration-time-right">Loading</span>                    
                </div>    
            </div>
            <div class="audio__player_mute">
                <img 
                    id="audio__player_mute-on"
                    src="./styles/assets/icons/mute__icon_on.svg" 
                    alt="mute on" 
                    class="audio__player_mute-on audio__player_mute-on-mini">
                <img 
                    id="audio__player_mute-off"
                    src="./styles/assets/icons/mute__icon_off.svg" 
                    alt="mute off" 
                    class="audio__player_mute-off audio__player_mute-off-mini
                    hide">
            </div>
            <div class="audio__player_volume">
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value="100" 
                    step="1" 
                    id="volumeRange"
                    class="audio__player_volume-change audio__player_volume-change-mini">
            </div>
        </div>
    ` 

        audioPlayerMini()
   
    
    }
    
    export default audioPlayerRenderMini;