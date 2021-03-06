# Contemplate cached template 'demo'

# imports start here, if any

# imports end here

def __getTplClass__(Contemplate):

    # extends the main Contemplate class
    class Contemplate_demo_Cached(Contemplate):
        'Contemplate cached template demo'

        # constructor
        def __init__(self, id=None, __=None):
            # initialize internal vars
            self.id = None 
            self.data = None 
            self._renderFunction = None 
            self._parent = None  
            self._blocks = None 

            self.id = id 
            
            # parent tpl assign code starts here
            self.setParent( 'base' )
            # parent tpl assign code ends here



        # tpl-defined blocks render code starts here
        
        
        # tpl block render method for block 'Block3'
        def _blockfn_Block3(self, __instance__):
            
            __p__ = ''
             
            __p__ += '' + "\n" + "\n" + '    <strong>Block3 is overriden by the demo template</strong>' + "\n" + "\n" + '    <br /><br />' + "\n" + '    ' + "\n" + '    ' 
            if ( len(__instance__.data['users'])>0 ):
                # be able to use both key/value in loop
                if isinstance(__instance__.data['users'], list):
                    _loopObj1 = enumerate(__instance__.data['users'])
                else:
                    _loopObj1 = __instance__.data['users'].items()
                for  i,usergroup in _loopObj1 :
                    __instance__.data['i'] = i
                    __instance__.data['usergroup'] = usergroup
                     
                    __p__ += '' + "\n" + '        <!-- call a (sub-)template -->' + "\n" + '        ' + Contemplate.tpl( "sub",  {"i":__instance__.data['i'], "users":__instance__.data['users']} ) 
                     
                    __p__ += '' + "\n" + '    ' 
             
            __p__ += '' + "\n" + "\n" + ''
            return __p__
            
        
        
        # tpl block render method for block 'Block2'
        def _blockfn_Block2(self, __instance__):
            
            __p__ = ''
             
            __p__ += '' + "\n" + "\n" + '    <strong>Block2 is overriden by the demo template</strong>' + "\n" + "\n" + '    <br /><br />' + "\n" + "\n" + '    <strong>A table</strong><br />' + "\n" + '    ' + Contemplate.htmltable(__instance__.data['table_data'], __instance__.data['table_options']) 
             
            __p__ += '' + "\n" + "\n" + '    <br /><br />' + "\n" + '    ' + "\n" + '    <strong>A select box</strong><br />' + "\n" + '    ' + Contemplate.htmlselect(__instance__.data['select_data'], __instance__.data['select_options']) 
             
            __p__ += '' + "\n" + "\n" + '    <br /><br />' + "\n" + '    ' + "\n" + '    <strong>A table with alternative format</strong><br />' + "\n" + '    ' + Contemplate.htmltable(__instance__.data['table_data'], {"header":True}) 
             
            __p__ += '' + "\n" + "\n" + '    <br /><br />' + "\n" + '    ' + "\n" + '    <strong>A select box with alternative format</strong><br />' + "\n" + '    ' + Contemplate.htmlselect(__instance__.data['select_data'], {            "optgroups":["group1", "group2", "group3"],            "selected":3,            "multiple":False,            "style":"width:200px;"        }) 
             
            __p__ += '' + "\n" + '    ' + "\n" + '    <br /><br />' + "\n" + '    <!-- include a (sub-)template file -->' + "\n" + '     <!-- print a localized date php-style -->' + "\n" + '<strong>A (localized) date, PHP-style</strong><br />' + "\n" + str( Contemplate.ldate("M, d", Contemplate.now()) ) + "\n" + '' 
             
            __p__ += '' + "\n" + "\n" + ''
            return __p__
            
        
        # tpl-defined blocks render code ends here

        # render a tpl block method
        def renderBlock(self, block, __instance__=None):
            if ( not __instance__ ): __instance__ = self

            method = '_blockfn_' + block

            if (hasattr(self, method) and callable(getattr(self, method))): 
                return getattr(self, method)(__instance__)

            elif self._parent is not None: 
                return self._parent.renderBlock(block, __instance__)

            return ''
            
        
        # tpl render method
        def render(self, data, __instance__=None):
            __p__ = '' 
            if ( not __instance__ ): __instance__ = self

            if self._parent is not None: 
                __p__ = self._parent.render(data, __instance__)

            else: 
                # tpl main render code starts here
                __p__ = ''
                # tpl main render code ends here

            self.data = None 
            return __p__
    
    return Contemplate_demo_Cached

# allow to 'import *'  from this file as a module
__all__ = ['__getTplClass__']        
