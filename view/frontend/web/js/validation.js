define(['jquery'], function($) {
    'use strict';


    return function() {
         $.validator.addMethod(
            'custom-validate-length',
            function(value,element) {
                return value.length <= 250;
            },
            $.mage.__('Length must not be greater than 250 character length!')
        );

        $.validator.addMethod(
            'custom-validate-url',
            function(value,element) {
                return value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            },
            $.mage.__('Please enter a valid url code!')
        );
    }
});
