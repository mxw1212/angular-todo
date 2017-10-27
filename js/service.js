angular.module('UserService', [])
    .factory('UserAPIService', function($http) {
 
        UserAPIService = {
            callAPI: function(url, data) {
                return $http.post(url, data);
            }
        };
        return UserAPIService;
    });

// our new serivce for todos table
 angular.module('TodoService', [])
 	.factory('TodoAPIService' function($http) {
 		TodoAPIService = {
 			getTodos: function(url, data, token) {
 				var header = "Authorization; JWT " + token;
 				return $http.get(url, {params:{"username": data}}, header);
 			},
 			createTodo: function(url, data, token) {
 				var header= "Authorization: JWT " + token;
 				return $http.post(url, data, header);
 			}
 		};
 		return TodoAPIService;
 	}); 
/*creating a new module called TodoService and we’ll create a new service inside that factory called TodoAPIService. 
Just as before, we’ll create a new object called TodoAPIService. Then we’ll create a new method called getTodos.

This method will take three parameters:
the url that we’ll be calling
the data argument, which is just going to be the username
our token*/