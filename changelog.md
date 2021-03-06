###ChangeLog

__0.4.3__
* Contemplate Engine for Python 2.x and 3.x
* minor edits, generate formatted and anotated cached template code (better for debug)
* tidy up repo
* project stopped

__0.4.2__
* add clear (memory) method _clearCache()_
* allow inline templates with _addInline()_ method (see examples)
* allow _for()_ directive to handle an expression in place of an object ( so _%for($data["subdata"] as $key=>$val)_ or other expressions WILL work)
* allow to refresh the (memory) cache for a specific template (ie. _Contemplate.tpl(tpl_id, data, refresh)_ ) refresh = true will refresh the (memory) cache (default __false__ )

__0.4.1__
* parse template tags a little more accurately
* minor edits/optimizations

__0.4__
* add template inheritance and block definitions
* allow client-js template engine to load templates via ajax
* add basic html/url escaping ( *htmlentities* , *urlencode* )
* minor edits/optimizations

__0.3.3__
* make Contemplate.js work with Nodejs , add nodejs server example (test.js)
* add *%count* function (number of items in an array/object)

__0.3.2__
* make *%htmltable* *%htmlselect* constructs instead of functions (so literal data can be used also)
* add *%ltrim* , *%rtrim* functions
* minor fixes, edits

__0.3.1__
* add *%q* *%dq* functions (quote, double quote)
* add *%htmltable* *%htmlselect* functions (render a html table with options, render a html select with options)
* minor fixes, edits

__0.3__
* add *%template* directive
* add template functions to manipulate dates and localized dates
* add some javascript methods from [phpjs](https://github.com/kvz/phpjs) project, (trim, sprintf, time, date), these are available as template functions (eg %sprintf, %trim, etc..)
* make the Contemplate.js class compatible with both browser, node.js and requirejs configurations

__0.2__
* add *%include* directive
* make template separators configurable (defaults are '<%' and '%>')
* add filesystem caching, refactor, optimize

__0.1__
* add localization options and template functions
* initial release
