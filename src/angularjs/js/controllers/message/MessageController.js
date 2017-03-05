class MessageController {
  constructor($http, $scope, $rootScope) {
	$scope.alpha = [];
  $rootScope.obj = {};
  $rootScope.obj.title = "";
  $scope.getAll = function(){
  	/*$http.get("http://localhost:8989/posts").then(function(success){
  		$scope.alpha = success.data.response;
  		/*angular.forEach($scope.alpha, function(al){
  			al.creation_date = new Date(al.creation_date.substring(0, 10))
  		})*
  	});*/
    $scope.alpha = [
      {title: "MIME", desc: "The best mime in barcelona.", user: "A", date: new Date()},
      {title: "MUSICIAN", desc: "Searching for guitarist.", user: "B", date: new Date()}
    ]
  }
  $scope.getAll();
  $rootScope.save = function(){
    $rootScope.obj.title = "Mime";
    $rootScope.obj.user = 'A';
    $rootScope.obj.date = new Date();
    $scope.alpha.push(angular.copy($rootScope.obj));
    $rootScope.obj = {};
    //$scope.obj.date = new Date();
    /*$http.post("http://localhost:8989/posts", $rootScope.obj).then(function(success){
        $scope.getAll();
    })*/
  }
  }
}

export default MessageController
