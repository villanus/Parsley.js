(function() {
  function setupExample($playButton) {
    $playButton.click(launchEditor).html($playButton.html().replace('CodePen', svg))
    var $root = $playButton.closest('.example-group, body')
    var html = $.trim($root.find('div.example').html());
    var js = $.trim($root.find('script.example, .example-script').text());

    createCodeExample();

    function createCodeExample() {
      $('code.example').text(
        html +
        '\n\n<' + 'script type="text/javascript">\n' +
        js +
        '\n<' + '/script>\n'
      );
    }

    function launchEditor(evt) {
      var css = $.trim($root.find('style.example').text());
      var distUrl = 'https://rawgit.com/guillaumepotier/Parsley.js/' + window.Parsley.version;
      var data = {
        title: $(document).attr('title'),
        description: "Where does this show???",
        html: html,
        js: js,
        css: css + '\nhtml.codepen body {\n  margin: 1em;\n}\n',
        html_classes: 'codepen',
        js_external: [
          '//code.jquery.com/jquery-2.1.3.js',
          distUrl + '/dist/parsley.js'
        ].join(';'),
        css_external: [
          distUrl + '/bower_components/bootstrap/dist/css/bootstrap.css',
          distUrl + '/doc/assets/docs.css',
          distUrl + '/src/parsley.css'
        ].join(';')
      };

      var $input = $('<input type="hidden" name="data">')
        .val(JSON.stringify(data));
      var $form = $('<form action="http://codepen.io/pen/define?editors=101" method="POST" target="_blank">')
        .append($input)
        .appendTo($('body')) // Required to work on Firefox...
        .submit();
    }
  }

  function track() {
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-37229467-1']);
    _gaq.push(['_trackPageview']);

    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  }

  function init() {
    try {
      hljs.initHighlightingOnLoad();
    } catch ( err ) {}

    $('.play').each(function(_, elem) {
      setupExample($(elem))
    });

    track();
  }

  var svg = '<svg version="1.1" x="31px" y="62px" \
   width="250px" height="50px" viewBox="31 62 250 50" enable-background="new 31 62 250 50" style="height: 2.2em; padding-bottom: 0.2em; width: 10em; vertical-align: middle"> \
<g> \
  <path fill="#428bca" d="M51.011,76.064c2.696,0,5.168,0.975,7.086,2.586l2.61-3.111c-2.624-2.206-6.007-3.538-9.696-3.538 \
    c-8.322,0-15.093,6.771-15.093,15.093s6.771,15.094,15.093,15.094c3.689,0,7.072-1.332,9.696-3.539l-2.61-3.11 \
    c-1.918,1.612-4.39,2.585-7.086,2.585c-6.081,0-11.029-4.948-11.029-11.029C39.982,81.014,44.93,76.064,51.011,76.064z"/> \
  <path fill="#428bca" d="M134.562,72.873h-8.127c-1.122,0-2.032,0.91-2.032,2.031v24.381c0,1.123,0.91,2.031,2.032,2.031h8.127 \
    c7.842,0,14.222-6.379,14.222-14.223C148.784,79.251,142.404,72.873,134.562,72.873z M134.562,97.254h-6.096V76.938h6.096 \
    c5.602,0,10.159,4.557,10.159,10.158C144.722,92.697,140.164,97.254,134.562,97.254z"/> \
  <path fill="#428bca" d="M159.786,74.904v24.381c0,1.123,0.909,2.031,2.032,2.031h16.932v-4.063h-14.898v-8.127h9.48v-4.063h-9.48 \
    v-8.127h14.898v-4.062h-16.932C160.695,72.873,159.786,73.783,159.786,74.904z"/> \
  <path fill="#428bca" d="M221.289,74.904v24.381c0,1.123,0.909,2.031,2.031,2.031h16.932v-4.063h-14.898v-8.127h9.48v-4.063h-9.48 \
    v-8.127h14.898v-4.062H223.32C222.198,72.873,221.289,73.783,221.289,74.904z"/> \
  <path fill="#428bca" d="M201.952,72.873h-8.804c-1.123,0-2.032,0.91-2.032,2.031v26.414h4.063V89.127h6.771 \
    c4.48,0,8.127-3.646,8.127-8.127S206.434,72.873,201.952,72.873z M201.952,85.062h-6.772v-8.127h6.772 \
    c2.241,0,4.063,1.822,4.063,4.063C206.016,83.241,204.193,85.062,201.952,85.062z"/> \
  <path fill="#428bca" d="M272.018,72.873v20.801l-16.725-20.07c-0.548-0.658-1.447-0.901-2.253-0.609s-1.341,1.055-1.341,1.91 \
    v26.414h4.064V80.518l16.725,20.069c0.395,0.474,0.97,0.731,1.562,0.731c0.231,0,0.466-0.041,0.691-0.123 \
    c0.805-0.291,1.341-1.055,1.341-1.91V72.873H272.018z"/> \
  <path fill="#428bca" d="M112.861,80.168c-0.01-0.053-0.02-0.105-0.033-0.156c-0.008-0.031-0.02-0.06-0.029-0.091 \
    c-0.015-0.046-0.029-0.091-0.047-0.136c-0.014-0.031-0.027-0.061-0.042-0.09c-0.021-0.043-0.041-0.084-0.063-0.125 \
    c-0.018-0.028-0.035-0.057-0.054-0.086c-0.024-0.039-0.051-0.075-0.078-0.112c-0.021-0.026-0.042-0.054-0.064-0.08 \
    c-0.029-0.035-0.061-0.067-0.092-0.101c-0.025-0.025-0.049-0.049-0.075-0.073c-0.033-0.031-0.069-0.06-0.105-0.089 \
    c-0.027-0.021-0.055-0.043-0.084-0.063c-0.01-0.008-0.02-0.017-0.031-0.022l-19.81-13.208c-0.626-0.417-1.44-0.417-2.065,0 \
    L70.377,78.941c-0.011,0.008-0.02,0.017-0.03,0.023c-0.029,0.02-0.057,0.042-0.085,0.064c-0.036,0.027-0.071,0.057-0.105,0.088 \
    c-0.025,0.023-0.05,0.047-0.074,0.072c-0.032,0.033-0.062,0.066-0.093,0.102c-0.022,0.025-0.043,0.053-0.063,0.08 \
    c-0.028,0.037-0.054,0.074-0.079,0.113c-0.018,0.029-0.036,0.057-0.053,0.086c-0.023,0.041-0.044,0.082-0.063,0.123 \
    c-0.015,0.031-0.028,0.061-0.042,0.091c-0.018,0.044-0.033,0.09-0.048,0.136c-0.01,0.031-0.021,0.061-0.028,0.091 \
    c-0.014,0.052-0.023,0.104-0.033,0.156c-0.005,0.026-0.011,0.054-0.015,0.08c-0.011,0.081-0.017,0.161-0.017,0.244v13.207 \
    c0,0.081,0.006,0.163,0.017,0.243c0.004,0.026,0.01,0.054,0.015,0.08c0.01,0.053,0.02,0.104,0.033,0.155 \
    c0.008,0.031,0.019,0.06,0.028,0.091c0.015,0.047,0.03,0.092,0.048,0.137c0.014,0.031,0.027,0.061,0.042,0.091 \
    c0.02,0.042,0.04,0.083,0.063,0.124c0.017,0.029,0.035,0.058,0.053,0.086c0.025,0.039,0.051,0.076,0.079,0.113 \
    c0.021,0.027,0.041,0.054,0.063,0.08c0.03,0.035,0.061,0.067,0.093,0.102c0.024,0.025,0.049,0.049,0.074,0.072 \
    c0.034,0.031,0.069,0.06,0.105,0.088c0.028,0.021,0.056,0.044,0.085,0.064c0.011,0.008,0.02,0.017,0.03,0.022l19.811,13.207 \
    c0.312,0.209,0.672,0.313,1.032,0.313c0.36,0,0.721-0.104,1.033-0.313l19.81-13.207c0.012-0.007,0.021-0.017,0.031-0.022 \
    c0.029-0.021,0.057-0.043,0.084-0.064c0.036-0.028,0.072-0.057,0.105-0.088c0.026-0.023,0.05-0.047,0.075-0.072 \
    c0.031-0.033,0.062-0.066,0.092-0.102c0.022-0.026,0.044-0.053,0.064-0.08c0.027-0.037,0.054-0.074,0.078-0.113 \
    c0.019-0.028,0.036-0.057,0.054-0.086c0.022-0.041,0.043-0.082,0.063-0.124c0.015-0.03,0.028-0.06,0.042-0.091 \
    c0.018-0.045,0.032-0.09,0.047-0.137c0.01-0.031,0.021-0.06,0.029-0.091c0.014-0.051,0.023-0.103,0.033-0.155 \
    c0.004-0.026,0.011-0.054,0.015-0.08c0.01-0.08,0.017-0.162,0.017-0.243V80.492c0-0.083-0.007-0.163-0.017-0.244 \
    C112.872,80.223,112.865,80.195,112.861,80.168z M91.22,91.501l-6.587-4.405l6.587-4.406l6.588,4.406L91.22,91.501z M89.357,79.454 \
    l-8.075,5.401l-6.518-4.36l14.593-9.729V79.454L89.357,79.454z M77.933,87.096l-4.66,3.116v-6.233L77.933,87.096z M81.282,89.336 \
    l8.075,5.4v8.688l-14.593-9.729L81.282,89.336z M93.082,94.736l8.075-5.4l6.519,4.359l-14.594,9.729V94.736z M104.508,87.096 \
    l4.66-3.117v6.232L104.508,87.096z M101.157,84.854l-8.075-5.4v-8.688l14.594,9.729L101.157,84.854z"/> \
</g> \
</svg> \
';

  init();

})();
