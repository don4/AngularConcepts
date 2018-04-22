// JavaScript Document
/*Create a function for controller*/
function Customer($scope,$rootScope){
	$rootScope.counter= (($rootScope.counter||0)+1);
	$scope.CustomerName= "Shivani";
	$scope.CustomerCode= "1001";
	$scope.Submit= function(){
		if($scope.CustomerName.length>0){
			alert("proper format data");			
			}
		else{
			alert("not in proper format data");
			}
		
		}
}
/*Create a module*/
var myapp= angular.module("myModule", []);
/*Registring a controller with module*/
myapp.controller("myController", Customer);

/* Sorting the data using filter*/
myapp.controller("Mycntrl", function($scope){
	var employees=[
	{name : "Ram", dateofBirth: new Date("November 2, 1987"), Gender:"Male", Salary: "60000"},
	{name : "Sita", dateofBirth: new Date("July 12, 1989"), Gender:"Female", Salary: "80000"},
	{name : "Shyam", dateofBirth: new Date("May 23, 1970"), Gender:"Male", Salary: "95000"},
	{name : "Gita", dateofBirth: new Date("April 21, 1987"), Gender:"Female", Salary: "90000"},
	{name : "Ram", dateofBirth: new Date("August 27, 1986"), Gender:"Male", Salary: "90000"}
	];
	$scope.employees= employees;
	$scope.sortColumn= "name";
	$scope.reverseSort= "false";
	
	$scope.sortData= function(column){
		$scope.reverseSort=($scope.sortColumn==column) ? !$scope.reverseSort : false;
		$scope.sortColumn=column;
		};
		
	$scope.getSortClass = function(column){
		if($scope.sortColumn==column){
		 return $scope.reverseSort ? "arrow-down":"arrow-up";
		
		}
		
			return "";
			
	}
	
	
	});

