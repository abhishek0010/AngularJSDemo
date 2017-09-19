(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["productResource",
                    ProductListCtrl);

    function ProductListCtrl(productResource) {
        var vm = this; //When "controller as" syntax is used the model is defined in this variable. 

        productResource.query(function (data) {
            vm.products = data;
        });

        vm.showImage = false;
        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }
    };
}());