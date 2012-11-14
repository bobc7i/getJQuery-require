// Generated by CoffeeScript 1.3.3
(function() {

  (function($) {
    return define(["module", "getJQuery!1.7.1[plugin-1.7.1.jquery]", "getJQuery!1.8.2[plugin-1.8.2.jquery, lib/jquery-ui-1.9.0.custom]", "getJQuery!1.8.2[plugin-global.jquery, plugin-1.8.2.jquery, lib/jquery-ui-1.9.0.custom]"], function(module, $171, $182, $182_2) {
      var assert, ui190Vers, uiVers, versionContent;
      assert = function($ns, name, assertVal, scope) {
        var fn;
        fn = ($ns.jquery ? $ns : $ns.fn);
        if (!window.console || !console.assert) {
          window.console = {
            assert: function(val, msg) {
              return $("<p>" + val + ": " + msg + "</p>").appendTo($("body"));
            }
          };
        }
        return console.log(typeof $ns[name] === assertVal, "Expect " + name + " on <strong>" + scope + "</strong> jquery(" + fn.jquery + ") to be <strong>" + assertVal + "</strong> got <strong>" + (typeof $ns[name]) + "</strong>");
      };
      versionContent = function(version, name, pluginName) {
        return "<h3 data-" + name + "-" + pluginName + "=\"" + version + "\">Module is rendering " + pluginName + " on an element wrapped by " + name + " version:" + version + "</h3>";
      };
      if ($.ui) {
        uiVers = $.ui.version;
      }
      if ($182.ui) {
        ui190Vers = $182.ui.version;
      }
      assert($.fn, "plugin171", "undefined", "global");
      assert($.fn, "plugin182", "undefined", "global");
      assert($.fn, "plugin182", "undefined", "global");
      assert($171.fn, "plugin171", "function", "local (" + $171.fn.jquery + ")");
      assert($171.fn, "plugin182", "undefined", "local (" + $171.fn.jquery + ")");
      assert($171.fn, "pluginGlobal", "undefined", "local (" + $171.fn.jquery + ")");
      assert($171, "widget", "undefined", "local (" + $171.fn.jquery + ")");
      assert($182.fn, "plugin171", "undefined", "local (" + $182.fn.jquery + ")");
      assert($182.fn, "plugin182", "function", "local (" + $182.fn.jquery + ")");
      assert($182.fn, "pluginGlobal", "function", "local (" + $182.fn.jquery + ")");
      assert($182, "widget", "function", "local (" + $182.fn.jquery + ")");
      assert($182_2.fn, "plugin171", "undefined", "local (" + $182_2.fn.jquery + ")");
      assert($182_2.fn, "plugin182", "function", "local (" + $182_2.fn.jquery + ")");
      assert($182_2.fn, "pluginGlobal", "function", "local (" + $182_2.fn.jquery + ")");
      assert($182_2, "widget", "function", "local (" + $182_2.fn.jquery + ")");
      console.log(ui190Vers !== uiVers, "Expect jquery-ui version(1.9.0) isn\'t window\'s jquery-ui version(1.8.24) got " + (ui190Vers !== uiVers));
      return $(function() {
        var content_171, content_182, content_182_2, content_global, content_global_2, elem;
        elem = $('<section/>').append("<h2>Module (" + (module.config().name) + ") thinks that window jQuery version is: " + $.fn.jquery + "</h2>");
        content_171 = versionContent($171.fn.jquery, "jQuery171", "plugin171");
        content_182 = versionContent($182.fn.jquery, "jQuery182", "plugin182");
        content_182_2 = versionContent($182_2.fn.jquery, "jQuery182_2", "plugin182");
        content_global = versionContent($182.fn.jquery, "jQuery182", "pluginGlobal");
        content_global_2 = versionContent($182_2.fn.jquery, "jQuery182_2", "pluginGlobal");
        $171(content_171).appendTo(elem).after($171('<div/>').plugin171());
        $182(content_182).appendTo(elem).after($182('<div/>').plugin182());
        $182_2(content_182_2).appendTo(elem).after($182_2('<div/>').plugin182());
        $182(content_global).appendTo(elem).after($182('<div/>').pluginGlobal());
        $182_2(content_global_2).appendTo(elem).after($182_2('<div/>').pluginGlobal());
        $("body").append(elem);
        return elem.accordion({
          header: 'h3',
          heightStyle: 'fill',
          collapsible: true
        });
      });
    });
  })(jQuery);

}).call(this);
