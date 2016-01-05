function appHeader($rootScope) {

  function link($scope, element) {
    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {

      if (toState.url === '/') {
        element.addClass('mh--full');

      } else {
        element.removeClass('mh--full');
      }

    });
  }

  return {
    restrict: 'A',
    link
  };
}

export default appHeader;
