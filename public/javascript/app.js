(function(){

	var app = angular.module('app',[]);


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

	app.controller('createCtrl',['MyFactory',function(MyFactory){
		var self =this;
		self.name='';
		self.email='';
		self.skills='';
		self.summary='';
		self.check='';

		 /*var obj={
			name: self.name,
			email: self.email,
			skills: self.skills,
			summary: self.data.summary
		}*/
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

/*module.exports = angulartest;*/
