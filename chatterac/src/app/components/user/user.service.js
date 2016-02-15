/**
 * @ngdoc factory/service
 */
(function () {
  'use strict';

  angular
    .module('chatterac')
    .factory('User', User);

  /** @ngInject **/
  function User(Restangular) {
    return Restangular.service('user');
  }
})();
