var HorseManagement;
(function (HorseManagement) {
    var HorseDetailsViewModel = (function () {
        function HorseDetailsViewModel() {
            this.horse = ko.observable(new HorseManagement.Horse());
            this.isEditMode = ko.observable(false);
            var rowid = '';
            var urlParameters = new URLSearchParams(location.search);
            if (urlParameters.has('rowid')) {
                rowid = urlParameters.get('rowid');
            }
            if (urlParameters.has('mode')) {
                this.isEditMode(urlParameters.get('mode') == 'edit' ? true : false);
            }
            this.getHorse(rowid);
        }
        HorseDetailsViewModel.prototype.getHorse = function (rowid) {
            var context = this;
            var url = '/api/v1/horses/' + rowid;
            fetch(url)
                .then(function (response) { return response.json(); })
                .then(function (jsonHorse) {
                context.horse(HorseManagement.Horse.fromJson(jsonHorse));
            })
                .catch(function (error) {
                console.log(error);
            });
        };
        HorseDetailsViewModel.prototype.save = function () {
            var context = this;
            var url = '/api/v1/horses/' + this.horse().rowid;
            fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.horse())
            })
                .then(function (response) { return response.json(); })
                .then(function (json) {
                context.horse().rowid = json.Rowid;
                context.isEditMode(false);
            })
                .catch(function (error) {
                console.log(error);
            });
        };
        HorseDetailsViewModel.prototype.edit = function () {
            this.isEditMode(true);
        };
        HorseDetailsViewModel.prototype.cancel = function () {
            this.isEditMode(false);
        };
        HorseDetailsViewModel.prototype.delete = function () {
            var context = this;
        };
        return HorseDetailsViewModel;
    }());
    HorseManagement.HorseDetailsViewModel = HorseDetailsViewModel;
})(HorseManagement || (HorseManagement = {}));
//# sourceMappingURL=horseDetailsViewModel.js.map