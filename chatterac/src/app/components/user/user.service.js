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
    // todo - this should be internally exposed!
    return Restangular.service('user');
  }
})();
