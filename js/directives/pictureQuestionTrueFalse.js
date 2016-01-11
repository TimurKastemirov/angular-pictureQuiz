angular.module('pictureQuiz')
.directive('pictureQuestionTrueFalse', function() {
    return {
        restrict: 'E',
        templateUrl: 'html/directives/pictureQuestionTrueFalse.html', 
        scope: {
            autoAdvance: '=',
            questionId: '=',
            question: '@',
            pictureQuestion: '@',
            correctAnswer: '@',
            userCorrect: '=',
            userAnswered: '=',
            userAnsweredCorrectly: '=',
            getNextQuestion: '&'
        }, 
        link: function(scope, elem, attrs) {
            console.log("In pictureQuestionTrueFalse link");
        },
        controller: function($scope) {
            console.log("in pictureQuestionTrueFalse controller")
            $scope.userAnswered = false;
            $scope.userAnsweredCorrectly = false;
            $scope.processUserInput = function(selection, whereFrom) {
                var temp = ((whereFrom === 'fromRadio') && $scope.autoAdvance);
                var temp2 = ((whereFrom === 'fromButton') && !$scope.autoAdvance);
                if (temp || temp2) {
                    $scope.userAnswered = true;
                    if (selection === $scope.correctAnswer) {
                        $scope.userCorrect[$scope.questionId] = true;
                        $scope.userAnsweredCorrectly = true;
                    }
                    else {
                        $scope.userCorrect[$scope.questionId] = false;
                        $scope.userAnsweredCorrectly = false;
                    }
                    /* $scope.getNextQuestion(); */
                }
            }    
         
        } 
    }
});