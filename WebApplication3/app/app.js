(function () {
    "use strict";
    var app = angular
        .module("productManagement",
        ["common.services",
            "ui.router",
            "productResourceMock"]);

    app.config(["$stateProvider",
                "$urlRouterProvider",
                function ($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise("/");

                    $stateProvider
                        .state("home", {
                            url: "/",
                            templateUrl: "app/welcomeview.html"
                        })

                        .state("productList", {
                            url: "/products",
                            templateUrl: "app/products/productListView.html",
                            controller: "ProductListCtrl as vm"
                        })

                        .state("productEdit", {
                            url: "/products/edit/:productId",
                            templateUrl: "app/products/productEditView.html",
                            controller: "ProductEditCtrl as vm"
                        })

                        .state("productEdit.info", {
                            url: "/price",
                            templateUrl: "app/products/productEditInfoView.html"
                        })
                        //Sub state (nested states) are created
                        .state("productEdit.price", {
                            url: "/price",
                            templateUrl: "app/products/productEditPriceView.html"
                        })

                        .state("productEdit.tags", {
                            url: "/price",
                            templateUrl: "app/products/productEditTagsView.html"
                        })

                        .state("productDetails", {
                            url: "/products/:productId",
                            templateUrl: "app/products/productDetailsView.html",
                            controller: "ProductDetailsCtrl as vm",
                            resolve: {
                                productResource: "productResource",
                                product: function (productResource, $stateParams) {
                                    var productId = $stateParams.productId;
                                    return productResource.get({ productId: productId }).$promise;
                                }
                            }//resolve is added here to preload the required content then render the view
                        })
            
        }]
       
    );
} ());