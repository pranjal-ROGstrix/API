(function () {
    var SimpleFormsApp = angular.module("SimpleFormsApp", []);
    SimpleFormsApp.controller("LoginController", function ($http) {
        let login = this;
        login.myFunction = function () {
            login.found = "";
            let email = login.email;
            let pass = login.password;
            $http({
                    method: "POST",
                    url: 'https://reqres.in/api/login',
                    data: {
                        'email': email,
                        'password': pass
                    }
                    // url: 'https://my-json-server.typicode.com/pranjal-ROGstrix/project/users'
                })
                .then(
                    function mySuccess(response) {
                        formdata = response.data;
                        console.log(formdata.token)
                        window.location.href = "../homepage/index.html?b=" + email;
                    },
                    function myError(response) {
                        alert('Wrong Credentials');
                        login.email = "";
                        login.password = "";
                    }
                );
        }
    });
})();