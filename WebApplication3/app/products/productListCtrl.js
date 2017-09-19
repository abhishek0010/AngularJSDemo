(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ["productResource",
                    ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this; //When "controller as" syntax is used the model is defined in this variable. 

        //this function is directly refering to the function written in productResource.js
        productResource.query(function (data) {
            vm.products = data;
        });

        vm.showImage = false;
        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }
    };
}());