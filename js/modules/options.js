import quizItemRender from './quizItemRender';
import audioPlayerRender from './audioPlayerRender';
import {
  getResource
} from '../services/services';

   
 async function options(item) {  

  // сразу создадим нужный текст
  const inroDiv = document.querySelector('.quiz__wrapper_item');
  const createIntro = document.createElement('div');
  createIntro.classList.add('createIntro');
  createIntro.innerHTML = `
  Послушайте плеер. <br>
  Выберите птицу из списка.
  `
  inroDiv.append(createIntro);


 const quizWrapperOptions = document.querySelector('.quiz__wrapper_options');
    
  quizWrapperOptions.innerHTML = ""; 
  
  let score = 5;

  class BirdsOptions {
    constructor(id, name, species, description, image, audio) {
      this.id = id;
      this.name = name;
      this.species = species;
      this.description = description;
      this.image = image;
      this.audio = audio;      
      this.parent = document.querySelector('.quiz__wrapper_options');      
    }    

     render(someRandomID) {      
      
      const addSomeEvent = () => {
        quizWrapperOptionsItem.forEach(x => {
          
            x.addEventListener('mousedown', (e) => {
              getResource(item).then(data => quizItemRender(data, x.id, someRandomID, e, score)).then(data => score = data);              
               
            })
        })
      }

      const element = document.createElement('div');

      
      
      element.classList.add('quiz__wrapper_options-item')
      element.id = `${this.id}`
      element.innerHTML = `${this.name}`;

      this.parent.append(element);

      const quizWrapperOptionsItem = document.querySelectorAll('.quiz__wrapper_options-item');

      if (quizWrapperOptionsItem.length === 6) {
          addSomeEvent()
      };
  }
}


       
getResource(item)
  .then(data => {    
    
    
    data = data.sort(() => Math.random() - 0.5);

    let randomID = [...data].sort(() => Math.random() - 0.5)[0].id;
    let randomAudio = data.filter(item => item.id == randomID)[0];    

    data.forEach(({
      id,
      name,
      audio           
    }) => {
      new BirdsOptions(id, name, audio).render(randomID);
      
    }); 
    
    audioPlayerRender(randomAudio);
    
  });

  
       

 }
     



 export default options;