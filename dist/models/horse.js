var HorseManagement;
(function (HorseManagement) {
    var Horse = (function () {
        function Horse(rowid, name, description, pictureLink, age, numbersOfPodiums, coatColor, weight) {
            if (rowid === void 0) { rowid = null; }
            if (name === void 0) { name = null; }
            if (description === void 0) { description = null; }
            if (pictureLink === void 0) { pictureLink = null; }
            if (age === void 0) { age = null; }
            if (numbersOfPodiums === void 0) { numbersOfPodiums = null; }
            if (coatColor === void 0) { coatColor = null; }
            if (weight === void 0) { weight = null; }
            this.rowid = rowid;
            this.name = name;
            this.description = description;
            this.pictureLink = pictureLink;
            this.age = age;
            this.numbersOfPodiums = numbersOfPodiums;
            this.coatColor = coatColor;
            this.weight = weight;
        }
        Horse.fromJson = function (json) {
            var horse = new Horse();
            if (json == null) {
                return horse;
            }
            if (json.Rowid != null) {
                horse.rowid = json.Rowid;
            }
            if (json.Name != null) {
                horse.name = json.Name;
            }
            if (json.Description != null) {
                horse.description = json.Description;
            }
            if (json.PictureLink != null) {
                horse.pictureLink = json.PictureLink;
            }
            if (json.Age != null) {
                horse.age = json.Age;
            }
            if (json.NumbersOfPodiums != null) {
                horse.numbersOfPodiums = json.NumbersOfPodiums;
            }
            if (json.CoatColor != null) {
                horse.coatColor = json.CoatColor;
            }
            if (json.Weight != null) {
                horse.weight = json.Weight;
            }
            return horse;
        };
        return Horse;
    }());
    HorseManagement.Horse = Horse;
})(HorseManagement || (HorseManagement = {}));
//# sourceMappingURL=horse.js.map