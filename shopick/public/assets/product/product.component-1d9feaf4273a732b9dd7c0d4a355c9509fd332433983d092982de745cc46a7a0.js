function ProductController(e,t,n,r){var i=this;i.globalID=n.id,e.product={},console.log(n),r.get("/api/v1/product_global/"+n.product_id).then(function(t){console.log(t),e.product=t.data}),e.openProduct=function(e){console.log("open products globalID : "+e),t.path("/product/"+e)}}ProductController.$inject=["$scope","$location","$routeParams","$http"],angular.module("ShopickApp").controller("ProductCtrl",ProductController).component("productDetail",{templateUrl:"assets/product/product.template.html.erb",controller:ProductController});