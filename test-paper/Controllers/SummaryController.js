app.controller('SummaryController',['$scope', 'localStorageService', '$rootScope', function($scope, localStorageService, $rootScope)
{
    $scope.onInit = function(){
        localStorageService.getItem("questions", function(data){
            $rootScope.questions = data;
        });
    }
}]);