
namespace HorseManagement {
    
    export class HorseDetailsViewModel {
        
        public horse: KnockoutObservable<Horse> = ko.observable(new Horse());
        public isEditMode: KnockoutObservable<boolean> = ko.observable(false);
        
        constructor() {

            let rowid = '';

            let urlParameters = new URLSearchParams(location.search);
            if(urlParameters.has('rowid'))
            {
                rowid = urlParameters.get('rowid');
            }

            if(urlParameters.has('mode'))
            {
                // let isEdit = urlParameters.get('mode') == 'edit' ? true : false;
                // this.isEditMode(isEdit);

                this.isEditMode(urlParameters.get('mode') == 'edit' ? true : false);
            }

            this.getHorse(rowid);
        }

        private getHorse(rowid: string) {

            let context = this;
            
            const url = '/api/v1/horses/' + rowid;

            //Let's call the API in NodeJs to get data for horse with given id
            fetch(url)
            .then((response) => response.json())
            .then(function(jsonHorse) {
                context.horse(Horse.fromJson(jsonHorse));
            })
            .catch(function(error) {
              console.log(error); 
            });
        }

        public save() {

            let context = this;
            
            const url = '/api/v1/horses/' + this.horse().rowid;

            //Let's call the API in NodeJs to get data for horse with given id
            fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(this.horse())

            })
            .then((response) => response.json())
            .then(function(json) {
                context.horse().rowid = json.Rowid;
                
                context.isEditMode(false);
            })
            .catch(function(error) {
              console.log(error); 
            });
        }

        public edit() {
            this.isEditMode(true)
        }    

        public cancel() {
            this.isEditMode(false)
        }

        public delete() {

            let context = this;
            
            const url = '/api/v1/horses/' + this.horse().rowid;

            //Let's call the API in NodeJs to get data for horse with given id
            fetch(url, {
                method: "DELETE"
            })
            .then(() => {
                window.location.href = "/";
            })
            .catch(function(error) {
              console.log(error); 
            });
        }
    }
}