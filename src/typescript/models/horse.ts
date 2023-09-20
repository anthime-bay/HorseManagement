
namespace HorseManagement {

    export class Horse {

        public rowid: number;
        public name: string;
        public description: string;
        public pictureLink: string;
        public age: number;
        public numbersOfPodiums: number;
        public coatColor: string;
        public weight: number;
                 
        constructor(rowid: number = null, name: string = null, description: string = null, pictureLink: string = null, age: number = null, numbersOfPodiums: number = null, coatColor: string = null, weight: number = null) {
            this.rowid = rowid;
            this.name = name;
            this.description = description;
            this.pictureLink = pictureLink;
            this.age = age;
            this.numbersOfPodiums = numbersOfPodiums;
            this.coatColor = coatColor;
            this.weight = weight;
        }        

        public static fromJson(json: any)
        {
            var horse = new Horse();

            if(json == null)
            {
                return horse;
            }

            if(json.Rowid != null)
            {
                horse.rowid = json.Rowid;
            }

            if(json.Name != null)
            {
                horse.name = json.Name;
            }

            if(json.Description != null)
            {
                horse.description = json.Description;
            }
            
            if(json.PictureLink != null)
            {
                horse.pictureLink = json.PictureLink;
            }

            if(json.Age != null)
            {
                horse.age = json.Age;
            }

            if(json.NumbersOfPodiums != null)
            {
                horse.numbersOfPodiums = json.NumbersOfPodiums;
            }

            if(json.CoatColor != null)
            {
                horse.coatColor = json.CoatColor;
            }

            if(json.Weight != null)
            {
                horse.weight = json.Weight;
            }
            

            return horse;
        }
    }

}