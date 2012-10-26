(function($) {

  var baseContext, config1, config2;

  baseContext = {
    baseUrl: 'scripts',
    paths: {
      'jquery-1.7.1': 'lib/jquery-1.7.1',
      'jquery-1.8.2': 'lib/jquery-1.8.2'
    }
  };

  config1 = {
    context: 'test1',
    config: {
      'getjquery_test': {
        name: 'test1'
      }
    }
  };

  config2 = {
    context: 'test2',
    config: {
      'getjquery_test': {
        name: 'test2'
      }
    }
  };

  $.extend(config1, baseContext);
  $.extend(config2, baseContext);

  require(config1, ['getjquery_test']);
  require(config2, ['getjquery_test']);

})(jQuery);