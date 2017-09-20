(function () {
    angular
        .module("productManagement")
        .controller("ProductEditCtrl"[
                    "product",
                    ProductEditCtrl]);

    function ProductEdit(product) {
        var vm = this;
        vm.product = product;

        if (vm.product && vm.product.productId) {
            vm.title = vm.product.productName;
        }
        else {
            vm.title = "New Product";
        }
    }

}());