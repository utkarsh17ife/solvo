(function() {

angular.module('slovApp',[])
.controller('mainController',mainController)
.controller('authController',authController);

mainController.$inject = ['$scope'];
function mainController($scope){
	var ctrl = this;
	ctrl.posts = [];
	ctrl.newPost = {
					createdBy : '',
					text : '',
					createdAt : ''
					};

	ctrl.postIt = function(){
    
		ctrl.newPost.createdAt = Date.now();
		ctrl.posts.push({
			createdBy: ctrl.newPost.createdBy,
			text: ctrl.newPost.text,
			createdAt: ctrl.newPost.createdAt
		});
		ctrl.newPost.createdBy = '';
		ctrl.newPost.text = '';

	};
}

authController.$inject = ['$scope']
function authController($scope){
	var auth = this;
	auth.user = {
				username: '',
				password: ''
			};
	auth.error_message = '';

	auth.login = function(){
		auth.error_message = "Thanks for logging in with this username " + auth.user.username;		
	}
	auth.register = function(){
		auth.error_message = "Thanks for registering with this username " + auth.user.username;		
	}
}



})();
