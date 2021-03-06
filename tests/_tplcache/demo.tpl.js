(function(root) {
   /* Contemplate cached template 'demo' */
   /* quasi extends main Contemplate class */
   
   /* This is NOT used, Contemplate is accessible globally */
   /* var self = require('Contemplate'); */
   
   /* constructor */
   function Contemplate_demo_Cached(id)
   {
       /* initialize internal vars */
       var _parent = null, _blocks = null;
       
       this.id = id;
       this.data = null;
       
       
       /* tpl-defined blocks render code starts here */
        
        _blocks = { 
            
            
            /* tpl block render method for block 'Block3' */
            'Block3': function(__instance__) {
                
                var __p__ = '';
                 
                __p__ += '' + "\n" + "\n" + '    <strong>Block3 is overriden by the demo template</strong>' + "\n" + '' + "\n" + '    <br /><br />' + "\n" + '    ' + "\n" + '    ';
                if ( __instance__.data['users'] && Object.keys(__instance__.data['users']).length )
                {
                   var i;
                   for ( i in __instance__.data['users'] )
                   {
                       if ( Contemplate.hasOwn(__instance__.data['users'], i) )
                       {
                           var usergroup = __instance__.data['users'][i];
                           __instance__.data['i'] = i;
                           __instance__.data['usergroup'] = usergroup;
                       
                             
                            __p__ += '' + "\n" + '        <!-- call a (sub-)template -->' + "\n" + '        ' + Contemplate.tpl( "sub",  {"i":__instance__.data['i'], "users":__instance__.data['users']} ); 
                             
                            __p__ += '' + "\n" + '    ';
                       }
                   }
                }
                
                 
                __p__ += '' + "\n" + '' + "\n" + '';
                return __p__;
                
            }
            ,
            
            
            /* tpl block render method for block 'Block2' */
            'Block2': function(__instance__) {
                
                var __p__ = '';
                 
                __p__ += '' + "\n" + "\n" + '    <strong>Block2 is overriden by the demo template</strong>' + "\n" + '' + "\n" + '    <br /><br />' + "\n" + '' + "\n" + '    <strong>A table</strong><br />' + "\n" + '    ' + Contemplate.htmltable(__instance__.data['table_data'], __instance__.data['table_options']); 
                 
                __p__ += '' + "\n" + '' + "\n" + '    <br /><br />' + "\n" + '    ' + "\n" + '    <strong>A select box</strong><br />' + "\n" + '    ' + Contemplate.htmlselect(__instance__.data['select_data'], __instance__.data['select_options']); 
                 
                __p__ += '' + "\n" + '' + "\n" + '    <br /><br />' + "\n" + '    ' + "\n" + '    <strong>A table with alternative format</strong><br />' + "\n" + '    ' + Contemplate.htmltable(__instance__.data['table_data'], {"header":true}); 
                 
                __p__ += '' + "\n" + '' + "\n" + '    <br /><br />' + "\n" + '    ' + "\n" + '    <strong>A select box with alternative format</strong><br />' + "\n" + '    ' + Contemplate.htmlselect(__instance__.data['select_data'], {            "optgroups":["group1", "group2", "group3"],            "selected":3,            "multiple":false,            "style":"width:200px;"        }); 
                 
                __p__ += '' + "\n" + '    ' + "\n" + '    <br /><br />' + "\n" + '    <!-- include a (sub-)template file -->' + "\n" + '     <!-- print a localized date php-style -->' + "\n" + '<strong>A (localized) date, PHP-style</strong><br />' + "\n" + ( Contemplate.ldate("M, d", Contemplate.now()) ) + '' + "\n" ; 
                 
                __p__ += '' + "\n" + '' + "\n" + '';
                return __p__;
                
            }
            
        };
        
       /* tpl-defined blocks render code ends here */
       
       /* template methods */
       
       this.setId = function(id) {
           if ( id ) this.id = id;
           return this;
       };
       
       this.setParent = function(parent) {
           if ( parent )
           {
               if ( parent.substr )
                   _parent = Contemplate.tpl( parent );
               else
                   _parent = parent;
           }
           return this;
       };
       
       /* render a tpl block method */
       this.renderBlock = function(block, __instance__) {
           if ( !__instance__ ) __instance__ = this;
           if ( _blocks && _blocks[block] ) return _blocks[block](__instance__);
           else if ( _parent ) return _parent.renderBlock(block, __instance__);
           return '';
       };
       
       /* tpl render method */
       this.render = function(data, __instance__) {
           if ( !__instance__ ) __instance__ = this;
           var __p__ = '';
           if ( _parent )
           {
               __p__ = _parent.render(data, __instance__);
           }
           else
           {
               /* tpl main render code starts here */
                __p__ = '';
               /* tpl main render code ends here */
           }
           this.data = null;
           return __p__;
       };
       
       /* parent tpl assign code starts here */
        this.setParent( 'base' );
       /* parent tpl assign code ends here */
   };
   
   
   /* export the class for both Node and Browser */
   if ( 'undefined' != typeof (module) && module.exports )
   {
       module.exports = Contemplate_demo_Cached;
   }
   else if ( 'undefined' != typeof (exports) )
   {
       exports = Contemplate_demo_Cached;
   }
   else
   {
       this['Contemplate_demo_Cached'] = Contemplate_demo_Cached;
   }
}).call(this);
