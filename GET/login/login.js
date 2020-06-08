(function () {
    var SimpleFormsApp = angular.module("SimpleFormsApp", []);
    SimpleFormsApp.controller("LoginController", function ($http) {

        $http({
                method: "GET",
                url: 'https://my-json-server.typicode.com/pranjal-ROGstrix/project/users'
            })
            .then(
                function mySuccess(response) {
                    formdata = response.data;
                    console.log(formdata)
                },
                function myError(response) {}
            );
        let login = this;
        login.myFunction = function () {
            login.found = "";
            let email = login.email;
            let pass = login.password;
            for (x = 0; x < formdata.length; x++) {
                if (email == formdata[x].email && pass == formdata[x].password) {
                    login.found = formdata[x];
                    $('img').show();
                    window.location.href = "../homepage/index.html?b=" + email;
                    break;
                }
            }
            if (login.found == "") {
                $('img').hide();
                alert('INVALID USERNAME AND PASSWORD');
            }
        }
    });
})();