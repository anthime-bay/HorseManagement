
namespace HorseManagement {
    
    export class HorseViewModel {
        
        public horses: KnockoutObservableArray<Horse> = ko.observableArray([]);

        constructor() {

            this.initializeHorses();
        }

        private initializeHorses() {

            let context = this;

            const url = '/api/v1/horses';

            fetch(url)
            .then((resp) => resp.json())
            .then(function(horses) {
                let response = horses.map(function(horse: any) {
                    context.horses.push(
                        new Horse(horse.Rowid, horse.Name, horse.Description, horse.PictureLink, horse.Age, horse.NumbersOfPodiums, horse.CoatColor)
                    );
                });
                //we add a last empty row to the horses collection in order to add a + button to create a new horse
                return context.horses.push(
                    new Horse(0)
                );
            })
            .catch(function(error) {
              console.log(error); 
            });
                       
        }

        public addHorse(){
            alert('CREATE!');
            console.log('aaa')
        }
    }

}