import Amplify, { Auth, Hub, API } from 'aws-amplify'
(function(angular) {

    'use strict';
    var CreateCognitoClientFactory = function  () {
      return {
        "Amplify": Amplify,
        "Auth": Auth,
        "Hub": Hub,
        "API": API
    }
}
  
    angular.module('cognito.spa', [])
        .service('createCognitoClient', function() { return CreateCognitoClientFactory; } )

})(window.angular);
