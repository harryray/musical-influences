var module = angular.module('musicalInfluences');
module.controller('skinController',function($scope){
	// When Skin Selector changes, fetch relevant stylesheet
	$scope.getSkin = function(e){
		document.getElementById("skin_stylesheet").attr("href","styles/skins/skin_" + selectedSkin + ".css");
	}
})
