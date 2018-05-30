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
	$scope.influences=[];
	// Make a call on submit to last.fm API, populate $scope.influences array with results.
	$scope.getInfluences = function(e){
		e.preventDefault();
		console.log('Submit detected');
		var req = new XMLHttpRequest();
		req.open("GET","https://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&artist=" + $scope.artistName + "&api_key=95be8d664959f5402c7f75142e65f6ec");
		console.log(req.open("GET","https://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&artist=" + $scope.artistName + "&api_key=95be8d664959f5402c7f75142e65f6ec"));
		
		req.send(null);
		console.log($scope.artistName);
		req.onreadystatechange = function(){
			console.log(req.readyState);
			if (req.readyState == XMLHttpRequest.DONE) {
				res = req.responseXML.children[0];
				console.log(res);
				$scope.influences = res.getElementsByTagName("artist");
				console.log($scope.influences);
				console.log('0000000000001');
				$scope.$apply();
			}
		}
		console.log(req);

	}
})