(function() {
  'use strict';

  angular
    .module('chatterac')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
