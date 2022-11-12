import {
  getResource
} from '../services/services';



async function cards() {
  
  class BirdsData {
    constructor(id, name, species, description, image, audio, ...classes) {
      this.id = id;
      this.name = name;
      this.species = species;
      this.description = description;
      this.image = image;
      this.audio = audio;
      this.classes = classes;
      this.parent = document.querySelector('.quiz__wrapper_options');
    }

     render() {
      
      const element = document.createElement('div');
      
      if (this.classes.length === 0) {
        this.classes = "quiz__item";
        element.classList.add(this.classes);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }
      
      element.innerHTML = `
                <div class="quiz__item_mystery">
                  <div id="${this.id}" class="quiz__item_mystery-name">${this.name}</div> 
                </div>
                <img class="quiz__item-image" src=${this.image} alt=${this.name}>
                <h3 class="quiz__item-name">${this.name}</h3>                
                <h3 class="quiz__item-species">${this.species}</h3>                
                <div class="quiz__item-description">${this.description}</div> 
            `;

      this.parent.append(element);

      
      
  }
}


      
return getResource('http://localhost:3000/trainingBirdsData')
  .then(data => {    
    
    console.log(data = data.sort(() => Math.random() - 0.5));

    data.forEach(({
      id,
      name,
      species,
      description,
      image,
      audio
    }) => {
      new BirdsData(id, name, species, description, image, audio, "quiz__item").render();      
    });
    return [...data]
  });

  
}

export default cards;