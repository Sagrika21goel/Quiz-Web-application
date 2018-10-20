app.factory('questionService', ['$http', '$log', function($http, $log) {

    return{
        getAllQuestions: function(callback){
            $http.get("./assets/questions.json").then(function (response) {
                callback(response.data);
            })

        },

        getQuestionById: function(id, callback){
            $http.get("./assets/questions.json").then(function (response) {
                callback(response.data[id]);
            })
        }
    }
}]);
