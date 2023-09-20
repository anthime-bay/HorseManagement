var HorseManagement;
(function (HorseManagement) {
    var HorseViewModel = (function () {
        function HorseViewModel() {
            this.horses = ko.observableArray([]);
            this.initializeHorses();
        }
        HorseViewModel.prototype.initializeHorses = function () {
            var context = this;
            var url = '/api/v1/horses';
            fetch(url)
                .then(function (resp) { return resp.json(); })
                .then(function (horses) {
                var response = horses.map(function (horse) {
                    context.horses.push(new HorseManagement.Horse(horse.Rowid, horse.Name, horse.Description, horse.PictureLink, horse.Age, horse.NumbersOfPodiums, horse.CoatColor));
                });
                return context.horses.push(new HorseManagement.Horse(0));
            })
                .catch(function (error) {
                console.log(error);
            });
        };
        HorseViewModel.prototype.addHorse = function () {
            alert('CREATE!');
            console.log('aaa');
        };
        return HorseViewModel;
    }());
    HorseManagement.HorseViewModel = HorseViewModel;
})(HorseManagement || (HorseManagement = {}));
//# sourceMappingURL=horseViewModel.js.map