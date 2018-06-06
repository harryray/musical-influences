angular.module('musicalInfluences',[]).controller('skinController',function($scope){
	// When Skin Selector changes, fetch relevant stylesheet
	$scope.getSkin = function(){
		$("link#skin_stylesheet").attr("href","styles/skins/skin_" + selectedSkin + ".css");
	}
})
