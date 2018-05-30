// Constructor - Artist
function Artist(artist) {
	this.name = name;
	this.genre = genre;
	this.topTrack = function(){};
}

angular.module('musicalInfluences',[])
.controller("mi_Controller",function($scope){
	// $scope.influences <-- used by angular ng-repeat on the front end
	$scope.influences=[];
	// Make a call on submit to last.fm API, populate $scope.influences array with results.
	$scope.getInfluences = function(e){
		e.preventDefault();
		var req = new XMLHttpRequest();
		req.open("GET","https://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&artist=" + $scope.artistName + "&api_key=95be8d664959f5402c7f75142e65f6ec");	
		req.send(null);
		req.onreadystatechange = function(){
			if (req.readyState == XMLHttpRequest.DONE) {
				res = req.responseXML.children[0];
				$scope.influences = res.getElementsByTagName("artist");
				$scope.$apply();
			}
		}

	}
})