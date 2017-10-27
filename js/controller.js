angular.module('RouteControllers', []) // creating a modle called RouteControllers leaving array empty []
    .controller('HomeController', function($scope) { // creating new controller called HomeConroller pass in the $scope
        $scope.title = "Welcome To Angular Todo!";
    });
    // added for form 

     .controller('RegisterController', function($scope, UserAPIService, store) { //create a new Angular controller called RegisterController and we’ll pass in the $scope object
 
        $scope.registrationUser = {}; // create a new empty object on our $scope object. Our empty object will be called registrationUser
 		var URL = "https://morning-castle-91468.herokuapp.com/";

 		 var authStorage = { // creating standard javascript object called authStorage. first is key that we’ll be using and second will the value
            name: "StorageTest"
        };
 
        store.set('obj', authStorage); //  set method from the store object to local storage. 


 		 $scope.login = function() { // once registered they can login.
            UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
                $scope.token = results.data.token;
                console.log($scope.token);
            }).catch(function(err) {
                console.log(err.data);
            });
        }

        $scope.submitForm = function() { // create the submitForm() method that we reference in the ng-submit attribute of our HTML form
            if //do an if statement just to double check that the form is, in fact, valid!
            ($scope.registrationForm.$valid) { // adding new properties (username and password)
                $scope.registrationUser.username = $scope.user.username; //This will assign the values of the user model to the username and password properties on the registrationUser object
                $scope.registrationUser.password = $scope.user.password; 

                UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results) { //The then method is provided as part of our service. 
                	//This is known as a promise. This is basically saying, It might take a bit of time, but I promise that I’ll get this done for you later. 
                	//And by putting a ‘then’ following a promise, we say what should happen once the promise is fulfilled. So once the API call is made, the then method will be invoked. 
                	//And inside the then method we’re passing the results object that gets passed back from the service.
                    $scope.data = results.data;
                    alert("You have successfully registered to Angular Todo");
                    $scope.login();
                }).catch(function(err) {// if anything goes wrong it will catch it.
                    alert("Oops! Something went wrong!");
                    console.log(err);
                });
            }
        };
    });