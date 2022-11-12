
import audioPlayerRenderMini from "./audioPlayerRenderMini";
import success from "./success";


function quizItemRender (array, numberID, randomID, event, score) {

  const button = document.querySelector('.button__quiz_next');
   
   const arr = array.filter(item => item.id == numberID);    
   const {id, name, species, description, image, audio} = arr[0];
   

   if(randomID === id && button.disabled === true) { 
    success(event, score, name, image);
     
   } 

   if (randomID !== id && !event.target.classList.contains('null')) {       
    event.target.style.filter = 'drop-shadow(0px 0px 10px red) invert(100%)';  
    event.target.classList.add('null');
    score -= 1
   }

   if (randomID !== id && button.disabled === true) {
    let wrongAudio = new Audio('./styles/assets/audio/wrong-answer.mp3');
    wrongAudio.play() 
   }



   
   
   

    class BirdsItem {
        constructor(id, name, species, description, image, audio, randomID) {
          this.id = id;
          this.name = name;
          this.species = species;
          this.description = description;
          this.image = image;
          this.audio = audio;          
          this.parent = document.querySelector('.quiz__wrapper_item');
          this.randomId = randomID;
        }
    
         render() {
          const quizWrapperItem = document.querySelector('.quiz__wrapper_item');
          quizWrapperItem.innerHTML = '';
          const element = document.createElement('div');
          
          
          element.innerHTML = `
            <div class="quiz__wrapper_grid">
              <div class="quiz__wrapper_grid-image">
                <img src=${this.image} alt=${this.name}>
              </div>              
              <div id="${this.id}" class="quiz__wrapper_grid-name">${this.name}</div>                              
              <div class="quiz__wrapper_grid-species">${this.species}</div>
            </div>
            <div class="audio__player_item quiz__wrapper_item-miniplayer">              
            </div>                            
            <div class="quiz__wrapper_item-description">${this.description}</div>
          `;
    
          this.parent.append(element);  
          audioPlayerRenderMini(this.audio)
      }

      
    }
    
    new BirdsItem(id, name, species, description, image, audio, randomID).render();
    
    return score
    
}

export default quizItemRender;