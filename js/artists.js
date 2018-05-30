// Constructor - Artist
function Artist(artist) {
	this.name = name;
	this.genre = genre;
	this.topTrack = function(){};
}

angular.module('musicalInfluences',[])
.controller("mi_Controller",function($scope){
	console.log('Controller "mi_Controller" created!');
	// $scope.influences <-- used by angular ng-repeat on the front end

	// Make a call on submit to last.fm API, populate $scope.influences array with results.
	$scope.getInfluences = function(e){
		e.preventDefault();
		console.log('Submit detected');
	}
})