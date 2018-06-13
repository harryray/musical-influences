// Constructor - Artist
function Artist(artist) {
	console.log(artist);
	this.name = name;
	//this.genre = genre;
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
		req.open("GET","https://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&artist=" + $scope.artistName + "&api_key=95be8d664959f5402c7f75142e65f6ec&format=json");	
		req.send(null);
		req.onreadystatechange = function(){
			if (req.readyState == XMLHttpRequest.DONE) {
				res = JSON.parse(req.responseText);
				console.log(res);
				console.log(res.similarartists.artist);
				console.log(res.similarartists.artist[0]['image'][2]["#text"]);
				console.log(res.similarartists.artist.length);
				for (var i = 0; i < res.similarartists.artist.length; i++){
					console.log(this);
					var artist = Artist(this);
					console.log(artist);
				}
				$scope.influences = res.similarartists.artist;
				$scope.$apply();
			}
		}

	}
})