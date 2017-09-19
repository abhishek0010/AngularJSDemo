(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductDetailsCtrl", [
                    "product",
                     ProductDetailsCtrl]);
    //if we provided the product resource and $stateparam to this section the code would also have worked perfectly, but the rendering will not wait for loading
    function ProductDetailsCtrl(product) {
        var vm = this;

        vm.product = product;

        vm.title = "Product Details : " + vm.product.productName;
        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }


    }
}());