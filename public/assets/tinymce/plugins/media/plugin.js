!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e[f]=d(a[f]);b.apply(null,e)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("8",tinymce.util.Tools.resolve),g("1",["8"],function(a){return a("tinymce.PluginManager")}),g("f",["8"],function(a){return a("tinymce.Env")}),g("g",["8"],function(a){return a("tinymce.util.Delay")}),g("b",["8"],function(a){return a("tinymce.util.Tools")}),g("h",[],function(){var a=function(a){return a.getParam("media_scripts")},b=function(a){return a.getParam("audio_template_callback")},c=function(a){return a.getParam("video_template_callback")},d=function(a){return a.getParam("media_live_embeds",!0)},e=function(a){return a.getParam("media_filter_html",!0)},f=function(a){return a.getParam("media_url_resolver")},g=function(a){return a.getParam("media_alt_source",!0)},h=function(a){return a.getParam("media_poster",!0)},i=function(a){return a.getParam("media_dimensions",!0)};return{getScripts:a,getAudioTemplateCallback:b,getVideoTemplateCallback:c,hasLiveEmbeds:d,shouldFilterHtml:e,getUrlResolver:f,hasAltSource:g,hasPoster:h,hasDimensions:i}}),g("m",["8"],function(a){return a("tinymce.html.SaxParser")}),g("n",["8"],function(a){return a("tinymce.html.Schema")}),g("o",["8"],function(a){return a("tinymce.dom.DOMUtils")}),g("q",[],function(){var a=function(a,b){if(a)for(var c=0;c<a.length;c++)if(b.indexOf(a[c].filter)!==-1)return a[c]};return{getVideoScriptMatch:a}}),g("k",[],function(){var a=function(a){return a.replace(/px$/,"")},b=function(a){return/^[0-9.]+$/.test(a)?a+"px":a},c=function(b){return function(c){return c?a(c.style[b]):""}},d=function(a){return function(c,d){c&&(c.style[a]=b(d))}};return{getMaxWidth:c("maxWidth"),getMaxHeight:c("maxHeight"),setMaxWidth:d("maxWidth"),setMaxHeight:d("maxHeight")}}),g("i",["b","m","n","o","q","k"],function(a,b,c,d,e,f){var g=d.DOM,h=function(a){return g.getAttrib(a,"data-ephox-embed-iri")},i=function(a){var b=g.createFragment(a);return""!==h(b.firstChild)},j=function(c,d){var f={};return new b({validate:!1,allow_conditional_comments:!0,special:"script,noscript",start:function(b,d){if(f.source1||"param"!==b||(f.source1=d.map.movie),"iframe"!==b&&"object"!==b&&"embed"!==b&&"video"!==b&&"audio"!==b||(f.type||(f.type=b),f=a.extend(d.map,f)),"script"===b){var g=e.getVideoScriptMatch(c,d.map.src);if(!g)return;f={type:"script",source1:d.map.src,width:g.width,height:g.height}}"source"===b&&(f.source1?f.source2||(f.source2=d.map.src):f.source1=d.map.src),"img"!==b||f.poster||(f.poster=d.map.src)}}).parse(d),f.source1=f.source1||f.src||f.data,f.source2=f.source2||"",f.poster=f.poster||"",f},k=function(a){var b=g.createFragment(a),c=b.firstChild;return{type:"ephox-embed-iri",source1:h(c),source2:"",poster:"",width:f.getMaxWidth(c),height:f.getMaxHeight(c)}},l=function(a,b){return i(b)?k(b):j(a,b)};return{htmlToData:l}}),g("r",["8"],function(a){return a("tinymce.util.Promise")}),g("t",[],function(){var a=function(a){var b={mp3:"audio/mpeg",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"},c=a.toLowerCase().split(".").pop(),d=b[c];return d?d:""};return{guess:a}}),g("l",["8"],function(a){return a("tinymce.html.Writer")}),g("e",["l","m","n","o","k"],function(a,b,c,d,e){var f=d.DOM,g=function(a,b){var c,d,e,f;for(c in b)if(e=""+b[c],a.map[c])for(d=a.length;d--;)f=a[d],f.name===c&&(e?(a.map[c]=e,f.value=e):(delete a.map[c],a.splice(d,1)));else e&&(a.push({name:c,value:e}),a.map[c]=e)},h=function(c){var d=new a,e=new b(d);return e.parse(c),d.getContent()},i=function(d,e,f){var h,i=new a,j=0;return new b({validate:!1,allow_conditional_comments:!0,special:"script,noscript",comment:function(a){i.comment(a)},cdata:function(a){i.cdata(a)},text:function(a,b){i.text(a,b)},start:function(a,b,c){switch(a){case"video":case"object":case"embed":case"img":case"iframe":void 0!==e.height&&void 0!==e.width&&g(b,{width:e.width,height:e.height})}if(f)switch(a){case"video":g(b,{poster:e.poster,src:""}),e.source2&&g(b,{src:""});break;case"iframe":g(b,{src:e.source1});break;case"source":if(j++,j<=2&&(g(b,{src:e["source"+j],type:e["source"+j+"mime"]}),!e["source"+j]))return;break;case"img":if(!e.poster)return;h=!0}i.start(a,b,c)},end:function(a){if("video"===a&&f)for(var b=1;b<=2;b++)if(e["source"+b]){var c=[];c.map={},j<b&&(g(c,{src:e["source"+b],type:e["source"+b+"mime"]}),i.start("source",c,!0))}if(e.poster&&"object"===a&&f&&!h){var d=[];d.map={},g(d,{src:e.poster,width:e.width,height:e.height}),i.start("img",d,!0)}i.end(a)}},new c({})).parse(d),i.getContent()},j=function(a){var b=f.createFragment(a);return""!==f.getAttrib(b.firstChild,"data-ephox-embed-iri")},k=function(a,b){var c=f.createFragment(a),d=c.firstChild;return e.setMaxWidth(d,b.width),e.setMaxHeight(d,b.height),h(d.outerHTML)},l=function(a,b,c){return j(a)?k(a,b):i(a,b,c)};return{updateHtml:l}}),g("u",[],function(){var a=[{regex:/youtu\.be\/([\w\-.]+)/,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)/,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$2",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\-_]+(?:\?.+)?)/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowfullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$2?title=0&amp;byline=0",allowfullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'//maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"//www.dailymotion.com/embed/video/$1",allowFullscreen:!0}];return{urlPatterns:a}}),g("s",["b","h","i","t","e","u","q"],function(a,b,c,d,e,f,g){var h=function(a){var b=a.allowFullscreen?' allowFullscreen="1"':"";return'<iframe src="'+a.source1+'" width="'+a.width+'" height="'+a.height+'"'+b+"></iframe>"},i=function(a){var b='<object data="'+a.source1+'" width="'+a.width+'" height="'+a.height+'" type="application/x-shockwave-flash">';return a.poster&&(b+='<img src="'+a.poster+'" width="'+a.width+'" height="'+a.height+'" />'),b+="</object>"},j=function(a,b){return b?b(a):'<audio controls="controls" src="'+a.source1+'">'+(a.source2?'\n<source src="'+a.source2+'"'+(a.source2mime?' type="'+a.source2mime+'"':"")+" />\n":"")+"</audio>"},k=function(a,b){return b?b(a):'<video width="'+a.width+'" height="'+a.height+'"'+(a.poster?' poster="'+a.poster+'"':"")+' controls="controls">\n<source src="'+a.source1+'"'+(a.source1mime?' type="'+a.source1mime+'"':"")+" />\n"+(a.source2?'<source src="'+a.source2+'"'+(a.source2mime?' type="'+a.source2mime+'"':"")+" />\n":"")+"</video>"},l=function(a){return'<script src="'+a.source1+'"></script>'},m=function(m,n){var o=a.extend({},n);if(!o.source1&&(a.extend(o,c.htmlToData(b.getScripts(m),o.embed)),!o.source1))return"";if(o.source2||(o.source2=""),o.poster||(o.poster=""),o.source1=m.convertURL(o.source1,"source"),o.source2=m.convertURL(o.source2,"source"),o.source1mime=d.guess(o.source1),o.source2mime=d.guess(o.source2),o.poster=m.convertURL(o.poster,"poster"),a.each(f.urlPatterns,function(a){var b,c,d=a.regex.exec(o.source1);if(d){for(c=a.url,b=0;d[b];b++)c=c.replace("$"+b,function(){return d[b]});o.source1=c,o.type=a.type,o.allowFullscreen=a.allowFullscreen,o.width=o.width||a.w,o.height=o.height||a.h}}),o.embed)return e.updateHtml(o.embed,o,!0);var p=g.getVideoScriptMatch(b.getScripts(m),o.source1);p&&(o.type="script",o.width=p.width,o.height=p.height);var q=b.getAudioTemplateCallback(m),r=b.getVideoTemplateCallback(m);return o.width=o.width||300,o.height=o.height||150,a.each(o,function(a,b){o[b]=m.dom.encode(a)}),"iframe"===o.type?h(o):"application/x-shockwave-flash"===o.source1mime?i(o):o.source1mime.indexOf("audio")!==-1?j(o,q):"script"===o.type?l(o):k(o,r)};return{dataToHtml:m}}),g("j",["r","h","s"],function(a,b,c){var d=function(b,c,d){var e={};return new a(function(a,f){var g=function(d){return d.html&&(e[b.source1]=d),a({url:b.source1,html:d.html?d.html:c(b)})};e[b.source1]?g(e[b.source1]):d({url:b.source1},g,f)})},e=function(b,c){return new a(function(a){a({html:c(b),url:b.source1})})},f=function(a){return function(b){return c.dataToHtml(a,b)}},g=function(a,c){var g=b.getUrlResolver(a);return g?d(c,f(a),g):e(c,f(a))};return{getEmbedHtml:g}}),g("p",[],function(){var a=function(a,b){a.state.set("oldVal",a.value()),b.state.set("oldVal",b.value())},b=function(a,b){var c=a.find("#width")[0],d=a.find("#height")[0],e=a.find("#constrain")[0];c&&d&&e&&b(c,d,e.checked())},c=function(b,c,d){var e=b.state.get("oldVal"),f=c.state.get("oldVal"),g=b.value(),h=c.value();d&&e&&f&&g&&h&&(g!==e?(h=Math.round(g/e*h),isNaN(h)||c.value(h)):(g=Math.round(h/f*g),isNaN(g)||b.value(g))),a(b,c)},d=function(c){b(c,a)},e=function(a){b(a,c)},f=function(a){var b=function(){a(function(a){e(a)})};return{type:"container",label:"Dimensions",layout:"flex",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:5,onchange:b,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:5,onchange:b,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}};return{createUi:f,syncSize:d,updateSize:e}}),g("9",["f","g","b","h","i","j","k","e","p"],function(a,b,c,d,e,f,g,h,i){var j=a.ie&&a.ie<=8?"onChange":"onInput",k=function(a){return function(b){var c=b&&b.msg?"Media embed handler error: "+b.msg:"Media embed handler threw unknown error.";a.notificationManager.open({type:"error",text:c})}},l=function(a){var b=a.selection.getNode(),c=b.getAttribute("data-ephox-embed-iri");return c?{source1:c,"data-ephox-embed-iri":c,width:g.getMaxWidth(b),height:g.getMaxHeight(b)}:b.getAttribute("data-mce-object")?e.htmlToData(d.getScripts(a),a.serializer.serialize(b,{selection:!0})):{}},m=function(a){var b=a.selection.getNode();if(b.getAttribute("data-mce-object")||b.getAttribute("data-ephox-embed-iri"))return a.selection.getContent()},n=function(a,b){return function(f){var g=f.html,h=a.find("#embed")[0],j=c.extend(e.htmlToData(d.getScripts(b),g),{source1:f.url});a.fromJSON(j),h&&(h.value(g),i.updateSize(a))}},o=function(a,b){var c,d,e=a.dom.select("img[data-mce-object]");for(c=0;c<b.length;c++)for(d=e.length-1;d>=0;d--)b[c]===e[d]&&e.splice(d,1);a.selection.select(e[0])},p=function(a,b){var c=a.dom.select("img[data-mce-object]");a.insertContent(b),o(a,c),a.nodeChanged()},q=function(a,b){var c=a.toJSON();c.embed=h.updateHtml(c.embed,c),c.embed?p(b,c.embed):f.getEmbedHtml(b,c).then(function(a){p(b,a.html)})["catch"](k(b))},r=function(a,b){c.each(b,function(b,c){a.find("#"+c).value(b)})},s=function(a){var b,g,o=[{name:"source1",type:"filepicker",filetype:"media",size:40,autofocus:!0,label:"Source",onpaste:function(){setTimeout(function(){f.getEmbedHtml(a,b.toJSON()).then(n(b,a))["catch"](k(a))},1)},onchange:function(c){f.getEmbedHtml(a,b.toJSON()).then(n(b,a))["catch"](k(a)),r(b,c.meta)},onbeforecall:function(a){a.meta=b.toJSON()}}],p=[],s=function(a){a(b),g=b.toJSON(),b.find("#embed").value(h.updateHtml(g.embed,g))};if(d.hasAltSource(a)&&p.push({name:"source2",type:"filepicker",filetype:"media",size:40,label:"Alternative source"}),d.hasPoster(a)&&p.push({name:"poster",type:"filepicker",filetype:"image",size:40,label:"Poster"}),d.hasDimensions(a)){var t=i.createUi(s);o.push(t)}g=l(a);var u={id:"mcemediasource",type:"textbox",flex:1,name:"embed",value:m(a),multiline:!0,rows:5,label:"Source"},v=function(){g=c.extend({},e.htmlToData(d.getScripts(a),this.value())),this.parent().parent().fromJSON(g)};u[j]=v,b=a.windowManager.open({title:"Insert/edit media",data:g,bodyType:"tabpanel",body:[{title:"General",type:"form",items:o},{title:"Embed",type:"container",layout:"flex",direction:"column",align:"stretch",padding:10,spacing:10,items:[{type:"label",text:"Paste your embed code below:",forId:"mcemediasource"},u]},{title:"Advanced",type:"form",items:p}],onSubmit:function(){i.updateSize(b),q(b,a)}}),i.syncSize(b)};return{showDialog:s}}),g("2",["9"],function(a){var b=function(b){var c=function(){a.showDialog(b)};return{showDialog:c}};return{get:b}}),g("3",["9"],function(a){var b=function(b){var c=function(){a.showDialog(b)};b.addCommand("mceMedia",c)};return{register:b}}),g("a",["8"],function(a){return a("tinymce.html.Node")}),g("d",["m","n","l","b","h"],function(a,b,c,d,e){var f=function(d,f){if(e.shouldFilterHtml(d)===!1)return f;var g,h=new c;return new a({validate:!1,allow_conditional_comments:!1,special:"script,noscript",comment:function(a){h.comment(a)},cdata:function(a){h.cdata(a)},text:function(a,b){h.text(a,b)},start:function(a,b,c){if(g=!0,"script"!==a&&"noscript"!==a){for(var e=0;e<b.length;e++){if(0===b[e].name.indexOf("on"))return;"style"===b[e].name&&(b[e].value=d.dom.serializeStyle(d.dom.parseStyle(b[e].value),a))}h.start(a,b,c),g=!1}},end:function(a){g||h.end(a)}},new b({})).parse(f),h.getContent()};return{sanitize:f}}),g("c",["f","a","h","d","q"],function(a,b,c,d,e){var f=function(c,d){var e,f=d.name;return e=new b("img",1),e.shortEnded=!0,h(c,d,e),e.attr({width:d.attr("width")||"300",height:d.attr("height")||("audio"===f?"30":"150"),style:d.attr("style"),src:a.transparentSrc,"data-mce-object":f,"class":"mce-object mce-object-"+f}),e},g=function(a,c){var d,e,f,g=c.name;return d=new b("span",1),d.attr({contentEditable:"false",style:c.attr("style"),"data-mce-object":g,"class":"mce-preview-object mce-object-"+g}),h(a,c,d),e=new b(g,1),e.attr({src:c.attr("src"),allowfullscreen:c.attr("allowfullscreen"),width:c.attr("width")||"300",height:c.attr("height")||("audio"===g?"30":"150"),frameborder:"0"}),f=new b("span",1),f.attr("class","mce-shim"),d.append(e),d.append(f),d},h=function(a,b,c){var e,f,g,h,i;for(g=b.attributes,h=g.length;h--;)e=g[h].name,f=g[h].value,"width"!==e&&"height"!==e&&"style"!==e&&("data"!==e&&"src"!==e||(f=a.convertURL(f,e)),c.attr("data-mce-p-"+e,f));i=b.firstChild&&b.firstChild.value,i&&(c.attr("data-mce-html",escape(d.sanitize(a,i))),c.firstChild=null)},i=function(a){for(;a=a.parent;)if(a.attr("data-ephox-embed-iri"))return!0;return!1},j=function(b){return function(d){for(var h,j,k=d.length;k--;)h=d[k],h.parent&&(h.parent.attr("data-mce-object")||("script"!==h.name||(j=e.getVideoScriptMatch(c.getScripts(b),h.attr("src"))))&&(j&&(j.width&&h.attr("width",j.width.toString()),j.height&&h.attr("height",j.height.toString())),"iframe"===h.name&&c.hasLiveEmbeds(b)&&a.ceFalse?i(h)||h.replace(g(b,h)):i(h)||h.replace(f(b,h))))}};return{createPreviewIframeNode:g,createPlaceholderNode:f,placeHolderConverter:j}}),g("4",["a","b","c","d"],function(a,b,c,d){var e=function(e){e.on("preInit",function(){var f=e.schema.getSpecialElements();b.each("video audio iframe object".split(" "),function(a){f[a]=new RegExp("</"+a+"[^>]*>","gi")});var g=e.schema.getBoolAttrs();b.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(a){g[a]={}}),e.parser.addNodeFilter("iframe,video,audio,object,embed,script",c.placeHolderConverter(e)),e.serializer.addAttributeFilter("data-mce-object",function(b,c){for(var f,g,h,i,j,k,l,m,n=b.length;n--;)if(f=b[n],f.parent){for(l=f.attr(c),g=new a(l,1),"audio"!==l&&"script"!==l&&(m=f.attr("class"),m&&m.indexOf("mce-preview-object")!==-1?g.attr({width:f.firstChild.attr("width"),height:f.firstChild.attr("height")}):g.attr({width:f.attr("width"),height:f.attr("height")})),g.attr({style:f.attr("style")}),i=f.attributes,h=i.length;h--;){var o=i[h].name;0===o.indexOf("data-mce-p-")&&g.attr(o.substr(11),i[h].value)}"script"===l&&g.attr("type","text/javascript"),j=f.attr("data-mce-html"),j&&(k=new a("#text",3),k.raw=!0,k.value=d.sanitize(e,unescape(j)),g.append(k)),f.replace(g)}})}),e.on("setContent",function(){e.$("span.mce-preview-object").each(function(a,b){var c=e.$(b);0===c.find("span.mce-shim",b).length&&c.append('<span class="mce-shim"></span>')})})};return{setup:e}}),g("5",[],function(){var a=function(a){a.on("ResolveName",function(a){var b;1===a.target.nodeType&&(b=a.target.getAttribute("data-mce-object"))&&(a.name=b)})};return{setup:a}}),g("6",["e"],function(a){var b=function(b){b.on("click keyup",function(){var a=b.selection.getNode();a&&b.dom.hasClass(a,"mce-preview-object")&&b.dom.getAttrib(a,"data-mce-selected")&&a.setAttribute("data-mce-selected","2")}),b.on("ObjectSelected",function(a){var b=a.target.getAttribute("data-mce-object");"audio"!==b&&"script"!==b||a.preventDefault()}),b.on("objectResized",function(b){var c,d=b.target;d.getAttribute("data-mce-object")&&(c=d.getAttribute("data-mce-html"),c&&(c=unescape(c),d.setAttribute("data-mce-html",escape(a.updateHtml(c,{width:b.width,height:b.height})))))})};return{setup:b}}),g("7",[],function(){var a=function(a){a.addButton("media",{tooltip:"Insert/edit media",cmd:"mceMedia",stateSelector:["img[data-mce-object]","span[data-mce-object]","div[data-ephox-embed-iri]"]}),a.addMenuItem("media",{icon:"media",text:"Media",cmd:"mceMedia",context:"insert",prependToContext:!0})};return{register:a}}),g("0",["1","2","3","4","5","6","7"],function(a,b,c,d,e,f,g){return a.add("media",function(a){return c.register(a),g.register(a),e.setup(a),d.setup(a),f.setup(a),b.get(a)}),function(){}}),d("0")()}();