import React from 'react';

    function createSupportChannel(email) {
            if(!emailIsValid(email)) {
                showErrorMessage('Invalid email. ');
         }
    }

    function inputIsValid(email, password) {
    return emailIsValid(email) && password && password.trim() != '';

    }

    function emailIsValid(email) {
        return email && email.includes('@')
    }

    function showErrorMessage(message) {
    console.log(message)
    }
