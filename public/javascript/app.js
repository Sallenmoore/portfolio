(function(){

	var app = angular.module('app',[]);


	app.factory('MyFactory', function () {
 
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

		return MyFactory;
	});

	app.controller('createCtrl',['MyFactory',function(MyFactory){
		var self =this;
		self.name=MyFactory.data.name;
		self.email=MyFactory.data.email;
		self.skills=MyFactory.data.skills;
		self.summary=MyFactory.data.summary;
		self.check=MyFactory.data.check;

		self.checkSubmission = function(){


			self.check = MyFactory.checkSubmission();
		}
	}]);
})();

/*module.exports = angulartest;*/
