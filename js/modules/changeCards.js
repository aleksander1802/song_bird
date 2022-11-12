import audioPlayer from './audioPlayer';
  

function changeCards(data) {

    const mysteryItem = document.querySelectorAll('.quiz__item_mystery');
    const birdNameId = document.querySelector('.quiz__bird-name');
    

    let result = [...data].sort(() => Math.random() - 0.5)[0];
    let resultId = result.id;
    birdNameId.id = resultId;
    

    mysteryItem.forEach(item => {
        item.addEventListener('mouseup', (e) => {
            const target = e.currentTarget
            target.style.opacity = '0'
            setTimeout(function() {
                target.style.display = 'none'
            }, 1000);   
            
           if(e.target.id == resultId) {
            console.log('АГА');
           }
        })
    })

    class BirdsFind {
        constructor(id, name, image, audio) {
          this.id = id;
          this.name = name;                   
          this.image = image;
          this.audio = audio;
          
        //   this.parent = document.querySelector('.quiz__items');
        }

        render() {
            
          audioPlayer(this.audio)  

            
            

        }

        

    }

     function elements(array) {

        const {id, name, image, audio} = array;

        
        new BirdsFind(id, name, image, audio).render(); 
        

     }

     elements(result)

}

 export default  changeCards;