app.controller('ShowTestController',
    ['$window','$rootScope', '$scope','questionService', 'localStorageService', function($window, $rootScope, $scope, questionService, localStorageService) {
        $scope.questions = null;
        $scope.question = null;
        $scope.index = 0;
        $scope.nextButtonDisabled = false;
        $scope.prevButtonDisabled = true;
        $scope.onInit = function(){
            localStorageService.getItem("questions", function(data){
                $scope.questions = data;
            });
            if($scope.questions == null) {
                questionService.getAllQuestions(function(data){
                    $scope.questions = data;
                });
            }
            localStorageService.getItem("pageNumber", function(data){
                if(data == null){
                    $scope.index = 0
                }
                else{
                    $scope.index = data;
                }
            })
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
            localStorageService.setItem("pageNumber", $scope.index)
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
            localStorageService.setItem("questions", JSON.stringify($scope.questions));
            localStorageService.setItem("pageNumber", $scope.index)
        }

        $scope.onSubmitTest = function(){
            $rootScope.questions = $scope.questions;
            localStorageService.setItem("pageNumber", 0)
            localStorage.setItem("questions", JSON.stringify($scope.questions));
            $('#submit_paper').modal('hide');
            $window.location.href = '#/summary';
        }
        
        $scope.clearStorage = function(){
            localStorageService.clear();
        }
}]);