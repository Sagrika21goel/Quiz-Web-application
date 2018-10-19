app.controller('ShowTestController',
    ['$window','$rootScope', '$scope','questionService', function($window, $rootScope, $scope, questionService) {
        $scope.questions = null;
        $scope.question = null;
        $scope.index = 0;
        $scope.nextButtonDisabled = false;
        $scope.prevButtonDisabled = true;
        $scope.onInit = function(){
            questionService.getAllQuestions(function(data){
                $scope.questions = data;
            });
        }

        $scope.getQuestion = function(action){
            switch (action) {
                case 'next':
                    $scope.index = $scope.index + 1;
                    break;
                case 'prev':
                    $scope.index = $scope.index - 1;
                    break;
            }
        }

        $scope.OnSelect = function(questionId, optionId){
            $.each($scope.questions, function(index, question){
                if(question.Id == questionId){
                    $.each(question.options, function(index1, option){
                        if(option.Id != optionId){
                            option.isSelected = false;
                        }
                        else{
                            option.isSelected = true;
                            if(option.isAnswer){
                                question.correctAnswerSelected = true;
                            }
                        }
                    })
                }
            });
        }

        $scope.onSubmitTest = function(){
            $rootScope.questions = $scope.questions;
            $('#submit_paper').modal('hide');
            $window.location.href = '#/summary';
        }
}]);