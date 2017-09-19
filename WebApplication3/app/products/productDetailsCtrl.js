(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductDetailsCtrl",
                     ProductDetailsCtrl);

    function ProductDetailsCtrl() {
        var vm = this;

        vm.product = {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2010",
            "description": "15 gallon capacity rolling garden cart",
            "cost": 20.00,
            "price": 32.99,
            "category": "garden",
            "tags": ["barrow", "cart", "wheelbarrow"],
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        };

        vm.title = "Product Details : " + vm.product.productName;
        if (vm.product.tags) {
            vm.product.tags = vm.product.tags.toString();
        }


    }
}());