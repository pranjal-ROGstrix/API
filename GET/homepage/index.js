(function () {
  let myApp = angular.module('myApp', ['ui.router']);

  myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/root');
    $stateProvider
      // .state('extract', {
      //   url: '',
      //   controller: 'params'
      // })
      .state('profile', {
        url: '/profile',
        templateUrl: "profile.html",
      })
      .state('root', {
        url: '/root',
        templateUrl: "home.html",
        controller: 'params'
      })
      .state('hostel', {
        url: '/hostel',
        templateUrl: 'hostel.html'
      })
      .state('academics', {
        url: '/academics',
        templateUrl: 'Academics.html',
      })
      .state('academics.ct1', {
        url: '/ct1',
        templateUrl: 'ct1.html',
        controller: 'ct1'
      })
      .state('academics.ct2', {
        url: '/ct2',
        templateUrl: "ct2.html",
        controller: 'ct2'
      })
  })

  myApp.controller('params', function ($scope, $http) {
    $http({
        method: "GET",
        url: 'https://my-json-server.typicode.com/pranjal-ROGstrix/project/users'
      })
      .then(
        function mySuccess(response) {
          formdata = response.data;
          let loc1 = 0
          let loc2 = 0
          let loc = window.location.href;
          for (let x = 0; x < loc.length; x++) {
            if (loc[x] == "=") {
              loc1 = (x + 1)
            }
            if (loc[x] == "#")
              loc2 = x
          }
         login__email = loc.substring(loc1, loc2)
          let all__data = ""; 
          for(let x= 0; x < formdata.length; x++) {
            if(formdata[x].email == login__email) {
              all__data = formdata[x];
            }
          }
          $scope.fullname = all__data.name;
          $scope.email = all__data.email;
          $scope.img = all__data.avatar;

         
        },
        function myError(response) {}
      );
      

  })




  myApp.controller('ct1', function ($scope) {
    $scope.subjects = [{
        "name": "Phisycs",
        "marks": "50/60"
      },
      {
        "name": "Maths",
        "marks": "50/60"
      },
      {
        "name": "Electrical Engineering",
        "marks": "50 / 60"
      },
      {
        "name": "Engineering Drawing",
        "marks": "60 / 60"
      }

    ];
  });
  myApp.controller('ct2', function ($scope) {
    $scope.subjects = [{
        "name": "Phisycs",
        "marks": "50/60"
      },
      {
        "name": "Maths",
        "marks": "55/60"
      },
      {
        "name": "Electrical Engineering",
        "marks": "60 / 60"
      },
      {
        "name": "Engineering Drawing",
        "marks": "10 / 60"
      }

    ];
  });
})();