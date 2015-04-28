var app = angular.module('customersApp', []);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/producto', {
			controller: 'ProductController',
			templateUrl: '/app/partials/inventory/product.html'
		})
		.when('/producto/:id', {
			controller: 'CustomerOrdersController',
			templateUrl: '/app/partials/inventory/product.html'
		})
		.when('/tipoProducto', {
			controller: 'TypeProductController',
			templateUrl: '/app/partials/inventory/typeProduct.html'
		})
		.when('/', {
			controller: 'HomeController',
			templateUrl: '/app/partials/home/home.html'
		})
		.when('/inicio', {
			controller: 'HomeController',
			templateUrl: '/app/partials/home/home.html'
		})
		.when('/usuario', {
			controller: 'UserController',
			templateUrl: '/app/partials/security/user.html'
		})
		.when('/ventas', {
			controller: 'SalesController',
			templateUrl: '/app/partials/sales/sales.html'
		})
		.when('/login', {
			controller: 'SecurityController',
			templateUrl: '/app/partials/security/login.html'
		})


	.otherwise({
		redirectTo: '/inicio'
	});


});

app.run(function ($rootScope) {
    $rootScope.Menus = [];
});
