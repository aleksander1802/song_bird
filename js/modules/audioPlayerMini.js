



function audioPlayerMini () { 
     
    let audio = document.getElementById('miniPlayer');
    const playButton = document.getElementById('audio__player_play');
    const pauseButton = document.getElementById('audio__player_pause');
    const volumeRange = document.getElementById('volumeRange');
    const audioDuration = document.getElementById('durationRange');    
    const timePicker = document.getElementById('currentTimer');
    const durationTimer = document.getElementById('durationTimer');
    const audioMute = document.getElementById('audio__player_mute-on');
    const audioUnmute = document.getElementById('audio__player_mute-off');
    const volumeChanged = document.querySelector('.audio__player_volume-change-mini');

    const buttonPlay = () => {
        audio.play();
        playButton.classList.add('hide');
        pauseButton.classList.remove('hide');
    }

    const buttonPause = () => {
        audio.pause();
        playButton.classList.remove('hide');
        pauseButton.classList.add('hide');
    }

    playButton.addEventListener('mousedown', () => {
        buttonPlay();       
    })

    pauseButton.addEventListener('mousedown', () => {
        buttonPause();      
    }) 


    audio.addEventListener('loadeddata', () => {

        let totalTimer = secondsToTime(audio.duration)
        
        durationTimer.textContent = totalTimer
        audioDuration.max = (audio.duration).toFixed()
        audioDuration.value = 0;
        
        audioDuration.addEventListener("input", (e) => {

         const pct = audioDuration.value / 1;    

         audio.currentTime = pct;
        });

    })

    audio.addEventListener('ended', function () {     
        audio.currentTime = 0;        
        buttonPause()
    }, false);

    // функция таймера начало 

    const secondsToTime = (time) => {
        let fulltime;     
        let dm = time % (60 * 60),
            m = Math.floor(dm / 60),
            ds = dm % 60,
            s = Math.ceil(ds);
        if (s === 60) {
            s = 0;
            m = m + 1;
        }
        if (s < 10) {
            s = '0' + s;
        }        
        if (m < 10) {
            m = '0' + m;
        }
        fulltime = m + ':' + s;
        
        return fulltime;
    }

  // функция таймера конец 
    

    audio.addEventListener('timeupdate', function () {       
        
        timePicker.textContent = secondsToTime(audio.currentTime);  
        audioDuration.value = (audio.currentTime).toFixed();
        audioDuration, audioDuration.value;        
        
    }, false);  
    
    const muteOn = () => {
        audio.muted = false;
        audioMute.classList.remove('hide');
        audioUnmute.classList.add('hide');
    }

    const muteOff = () => {
        audio.muted = true;
        audioMute.classList.add('hide');
        audioUnmute.classList.remove('hide');
    }

    volumeRange.addEventListener('mousemove', () => {        
        audio.volume = parseFloat(volumeRange.value / 100);
        if (audio.volume === 0) {
            muteOff()
         } 
    }) 

    volumeRange.addEventListener('mousedown', () => {        
        muteOn()
        
    })  
    volumeRange.addEventListener('input', () => {
        if (audio.volume > 0) {
            muteOn()
         } 

         audio.volume = volumeChanged.value / 100;
    })
          

        // кнопкf выключения звука

        audioMute.addEventListener('mouseup', () => {
            muteOff()
            audio.volume = 0;
            volumeChanged.value = 0;
        })

        audioUnmute.addEventListener('mouseup', () => {
            muteOn()
            audio.volume = 1;
            volumeChanged.value = 100;
        })

}

export default audioPlayerMini;
