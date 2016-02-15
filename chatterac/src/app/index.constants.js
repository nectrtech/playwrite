/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('chatterac')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('proxyConfig', {
      baseUrl: '/chat'
    })
    .constant('logCfg', {
      debug: true
    });

})();
