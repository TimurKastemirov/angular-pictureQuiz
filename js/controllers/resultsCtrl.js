angular.module('pictureQuiz')
.controller('resultsCtrl', function ($scope, quizService, $stateParams) {
    
    $scope.title = $stateParams.title;
    
    $scope.numQuestions = $stateParams.userCorrectArray.length;
    $scope.numCorrect = 0;
    for (var i = 0; i < $scope.numQuestions; i++) {
         if ($stateParams.userCorrectArray[i] === true)
             $scope.numCorrect++;
    } 
    
    
    $scope.percentCorrect = 0;
    if ($scope.numQuestions != 0)
        $scope.percentCorrect = Math.round(($scope.numCorrect / $scope.numQuestions) * 100);
    
    $scope.secondsElapsed = $stateParams.secondsElapsed;
    
    
    /* $scope.giphyUrl = 'https://media.giphy.com/media/iabcSfUB6VZYc/giphy.gif';
    
    var elem = angular.element(document.querySelector('.giphy.ng-enter')); 
    elem.css('background-image', $scope.giphyUrl); */
        

});