console.log("in file");

angular.module("forum", [])
    .controller("AppCtrl", function($scope, $http, userService)  {

        $scope.users = globals.users;

        $scope.topics = globals.topics;
        $scope.model={
            selectedTopic:undefined
        };

        $scope.commentModel={
            user:undefined,
            content:undefined
        };



        $scope.createComment=function(commentModel){


            $scope.model.selectedTopic.comments.
            push(angular.copy(commentModel));
        }

    })
    
    .factory("userService", function($q, $http, apiService){

        var users = null; // could be used as a cache

        var service = {

            getUsers : function(){
               
            },
            getAdmins : function(){
                return service.getUsers().then(function(users){
                    //filter, map, some, foreach
                    return users.filter(function(user){
                        return user.admin;
                    })
                })
            }
        };
        return service;
    }).factory("apiService", function(){

        var service ={
            root : "http://localhost:3000/api/"
        }
        return service;
    })


























