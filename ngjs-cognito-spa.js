
import Amplify, { Auth, Hub, API } from 'aws-amplify'
(function(angular) {

    'use strict';
    function CreateCognitoClientFactory () {
      return {
        "Amplify": Amplify,
        "Auth": Auth,
        "Hub": Hub,
        "API": Api
    }
  
    angular.module('cognito.spa', [])
        .service('createCognitoClient', function() { return CreateCognitoClientFactory; } )

})(window.angular);
