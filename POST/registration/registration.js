(function() {

    var SimpleApplicationApp = angular.module("SimpleApplicationApp", []);

    SimpleApplicationApp.controller('RegistrationController', function() {

        var registration = this;
        $('#form__span__error__name').hide();
        $('#form__span__error__libid').hide();
        $('#form__span__error__email').hide();
        $('#form__span__error__confirmpassword').hide();

        registration.nameValidation = function() {
            let name = registration.name;
            console.log(name)
            if (!isNaN(name)) {
                $('#form__span__error__name').html("please enter a valid name");
                $('#form__span__error__name').show();
                $('#form__name').addClass("error__border");
                $('#form__name').focus();
            } else if (name.length < 3 || name.length > 20) {
                $('#form__span__error__name').show();
                $('#form__span__error__name').html("please enter a valid name");
                $('#form__name').focus();
                $('#form__name').addClass('error__border');
                return false;
            } else {
                $('#form__span__error__name').hide();
                $('#form__name').removeClass('error__border')
                $('#form__name').addClass('border-success');
                return true;
            }
        }
        registration.libidValidation = function() {
            let libid = registration.libid;
            if (libid.length != 10) {
                $('#form__span__error__libid').html("please enter a valid libid");
                $('#form__span__error__libid').show();
                $('#form__libid').addClass("error__border");
                $('#form__libid').focus();
                return false;
            } else if (isNaN(libid.substring(0, 4)) || !isNaN(libid.substring(4, 6)) || isNaN(libid.substring(6, 10))) {
                console.log(isNaN(libid.slice(0, 4)))
                console.log(libid.slice(0, 4))
                $('#form__span__error__libid').html("please enter a valid libid");
                $('#form__span__error__libid').show();
                $('#form__libid').addClass("error__border");
                $('#form__libid').focus();

                return false;
            } else {
                $('#form__span__error__libid').hide();
                $('#form__libid').removeClass('error__border')
                $('#form__libid').addClass('border-success');
                $('#button').attr("disabled", "disabled");
                $('#button').prop("disabled", true);
                return true;
            }
        }
        registration.confirmpasswordValidation = function() {
            let confirmpassword = registration.confirmPassword;
            let password = registration.password;
            if (password != confirmpassword) {
                {
                    $('#form__span__error__confirmpassword').show();
                    $('#form__span__error__confirmpassword').html("PASSWORDS DO NOT MATCH");
                    $('#confirm-password').addClass('error__border');
                    $('#button').prop("disabled", true);
                    return false;
                }
            } else {
                $('#confirm-password').removeClass('error__border');
                $('#confirm-password').addClass('border-success');
                $('#form__span__error__confirmpassword').hide();
                $('#button').prop('disabled', false);
            }
        }
    });
})();
