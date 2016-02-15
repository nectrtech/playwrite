(function() {
  'use strict';

  angular
    .module('chatterac')
    .config(config);

  // todo - remove the toastrConfig when the main route is removed/retasked
  /** @ngInject */
  function config($injector, $logProvider, RestangularProvider, logCfg, proxyConfig, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(logCfg.debug);

    RestangularProvider.setBaseUrl(proxyConfig.baseUrl);
    RestangularProvider.setErrorInterceptor(function (response, deferred) {
      var $state = $injector.get('$state');
      if (response.status === 401) {
        deferred.reject();
        $state.go('/login');
      }
    });

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
