/*Create a module*/
var myapp= angular.module("myModule", []);

/* Sorting the data using filter*/
myapp.controller("Mycntrl", function($scope){
	var employees=[
	{name : "Ram", dateofBirth: new Date("November 2, 1987"), Gender:"Male", Salary: "60000"},
	{name : "sita", dateofBirth: new Date("July 12, 1989"), Gender:"Female", Salary: "8000"},
	{name : "shyam", dateofBirth: new Date("May 23, 1970"), Gender:"Male", Salary: "95000"},
	{name : "Gita", dateofBirth: new Date("April 21, 1987"), Gender:"Female", Salary: "90000"},
	{name : "Ram", dateofBirth: new Date("August 27, 1986"), Gender:"Male", Salary: "90000"}
	];
	$scope.employees= employees;
	$scope.name= employees.name;
		
}).filter("endWithChar", function(){
	return function(name, char){
	 var char = "";
	if(name.substr(name.length-1)!== char){
		return name;		
	}
	}
	
}).filter('capitalize', function() {

  // Create the return function and set the required parameter as well as an optional paramater
  return function(input, char) {

    if (isNaN(input)) {

      // If the input data is not a number, perform the operations to capitalize the correct letter.
      var char = char - 1 || 0;
      var letter = input.charAt(char).toUpperCase();
      var out = [];

      for (var i = 0; i < input.length; i++) {

        if (i == char) {
          out.push(letter);
        } else {
          out.push(input[i]);
        }
        
      }

      return out.join('');

    } else {
      return input;
    }

  }

})

//provider
.provider("myProvider", function(){
	this.$get = function(){
		console.log("Provider $get function called");
		return "Provider- Praveen";
	}	
}).controller("providerController1", function(myProvider) {
    console.log("providerController1 - myProvider: " + myProvider);
	
}).controller("providerController2", function(myProvider) {
    console.log("providerController2 - myProvider: " + myProvider);
})
//factory 
.factory("myFactory", function(){
	console.log("Factory function called.");
    return new function() { // INLINED our object constructor
        this.getValue = function() {
            return "factory - Praveen Kumar";
        };
    };	
}).controller("factoryController1", function(myFactory) {
    console.log("factoryController1 - myFactory: " + myFactory.getValue());
	
}).controller("factoryController2", function(myFactory) {
    console.log("factoryController2 - myFactory: " + myFactory.getValue());
})
// Service
.service("myService", function(){
	console.log("Service function called.");
    // CHANGED "factory" to "service"
    // NOTE that the only function being passed is the object constructor from before
    this.getValue = function() {
        return "Service- Praveen Kumar";
    };
}).controller("serviceController1", function(myService) {
    console.log("serviceController1 - myService: " + myService.getValue());
	
}).controller("serviceController2", function(myService) {
    console.log("serviceController2 - myService: " + myService.getValue());
	
})
.provider("mySetProvider", function() {
    this.value = "Praveen";
    this.setValue = function(newValue) {
        this.value = newValue;
    };

    this.$get = function() {
        return this.value;
    };
})
.controller("setProviderController", function(mySetProvider) {
    console.log("setProviderController - mySetProvider: " + mySetProvider);
})
.config(function(mySetProviderProvider) { // ADDED config section
    // Note the extra "Provider" suffix
    mySetProviderProvider.setValue("Praveen Kumar");
});




