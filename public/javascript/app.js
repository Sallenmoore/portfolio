(function(){
	//creating AngularJS application
	var app = angular.module('app',[]);

	//Defining a angular factory to simplify services. 
	//Calls the backend services using Restful resources
	app.factory('MyFactory', function ($http) {
 
		var MyFactory = {};

		MyFactory.data={

			name: '',
			email: '',
			skills: '',
			summary: '',
			check: false
		};

		MyFactory.checkSubmission=function() {


			MyFactory.data.check = true;
			return MyFactory.data.check;
			// body...
		};

		MyFactory.makeSubmission = function (data) {
			// body...
			console.log("Inside factory makesubmission");

			return ($http.post("/users",data));
		}

		return MyFactory;
	});

	//defining controller to interact with the form proving two way binding
	//Dependency Injection : MyFactory is passed as dependency to the controller
	app.controller('createCtrl',['MyFactory',function(MyFactory){
		var self =this;
		self.name='';
		self.email='';
		self.skills='';
		self.summary='';
		self.check='';

		self.checkSubmission = function(checkvalid){

			var obj={
			name: self.name,
			email: self.email,
			skills: self.skills,
			summary: self.summary
		}
			console.log("Inside checksubmission method in ctrl");
			if(checkvalid===true){
				MyFactory.makeSubmission(obj).success(function(result){

					self.check=true;
				}).error(function(err){

					self.check=false;

				});

			}else{
				console.log("Form is invalid");
			}
		}
	}]);
})();
