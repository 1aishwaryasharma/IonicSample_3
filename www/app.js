"use strict";

var app = angular.module('TestInputFieldInLandscape', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('inputField', {
		url : "/inputField",
		templateUrl : "views/inputField.html",
		controller : 'inputFieldCtrl'
	});
	
	$urlRouterProvider.otherwise("/inputField");

});

// Configure controllers
app.controller('mainCtrl', function($scope, $location) {
	console.log("appJs");
	
	
	$location.url('/inputField');
	
	
	
});



