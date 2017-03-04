class MessageController {
  constructor($http, $scope) {
	$scope.alpha = [];
	$http.get("http://10.193.15.163:8989/posts").then(function(success){
		$scope.alpha = success.data.response;
		angular.forEach($scope.alpha, function(al){
			al.creation_date = new Date(al.creation_date.substring(0, 10))
		})
		
	});
  }
}

export default MessageController