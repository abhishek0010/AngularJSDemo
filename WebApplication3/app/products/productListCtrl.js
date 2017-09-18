(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("productListCtrl",
                        ProductListCtrl);
    function ProductListCtrl() {
        var vm = this; //When "controller as" syntax is used the model is defined in this variable. 
         
    };
});