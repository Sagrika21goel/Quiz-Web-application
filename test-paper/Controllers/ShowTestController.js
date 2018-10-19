app.controller('ShowTestController',
    ['$scope','questionService', function($scope, questionService) {
        $scope.questions = null;
        $scope.question = null;
        $scope.index = 0;
        $scope.nextButtonDisabled = false;
        $scope.prevButtonDisabled = true;
        $scope.onInit = function(){
            questionService.getQuestionById(0, function(data){
                $scope.question = data;
            });
            questionService.getAllQuestions(function(data){
                $scope.questions = data;
            });
        }

        $scope.getQuestion = function(action){
            switch (action) {
                case 'next':
                    $scope.index = $scope.index + 1;
                    // if($scope.index > $scope.questions.length-1){
                    //     $scope.index = $scope.questions.length-1;
                    //     return false;
                    // }
                    break;
                case 'prev':
                    $scope.index = $scope.index - 1;
                    break;
            }
            questionService.getQuestionById($scope.index, function(data){
                $scope.question = data;
            });
        }
}]);