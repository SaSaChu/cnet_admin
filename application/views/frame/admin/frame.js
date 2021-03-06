/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

var imgLiquid=imgLiquid||{VER:"0.9.944"};imgLiquid.bgs_Available=!1,imgLiquid.bgs_CheckRunned=!1,imgLiquid.injectCss=".imgLiquid img {visibility:hidden}",function(i){function t(){if(!imgLiquid.bgs_CheckRunned){imgLiquid.bgs_CheckRunned=!0;var t=i('<span style="background-size:cover" />');i("body").append(t),!function(){var i=t[0];if(i&&window.getComputedStyle){var e=window.getComputedStyle(i,null);e&&e.backgroundSize&&(imgLiquid.bgs_Available="cover"===e.backgroundSize)}}(),t.remove()}}i.fn.extend({imgLiquid:function(e){this.defaults={fill:!0,verticalAlign:"center",horizontalAlign:"center",useBackgroundSize:!0,useDataHtmlAttr:!0,responsive:!0,delay:0,fadeInTime:0,removeBoxBackground:!0,hardPixels:!0,responsiveCheckTime:500,timecheckvisibility:500,onStart:null,onFinish:null,onItemStart:null,onItemFinish:null,onItemError:null},t();var a=this;return this.options=e,this.settings=i.extend({},this.defaults,this.options),this.settings.onStart&&this.settings.onStart(),this.each(function(t){function e(){-1===u.css("background-image").indexOf(encodeURI(c.attr("src")))&&u.css({"background-image":'url("'+encodeURI(c.attr("src"))+'")'}),u.css({"background-size":g.fill?"cover":"contain","background-position":(g.horizontalAlign+" "+g.verticalAlign).toLowerCase(),"background-repeat":"no-repeat"}),i("a:first",u).css({display:"block",width:"100%",height:"100%"}),i("img",u).css({display:"none"}),g.onItemFinish&&g.onItemFinish(t,u,c),u.addClass("imgLiquid_bgSize"),u.addClass("imgLiquid_ready"),l()}function d(){function e(){c.data("imgLiquid_error")||c.data("imgLiquid_loaded")||c.data("imgLiquid_oldProcessed")||(u.is(":visible")&&c[0].complete&&c[0].width>0&&c[0].height>0?(c.data("imgLiquid_loaded",!0),setTimeout(r,t*g.delay)):setTimeout(e,g.timecheckvisibility))}if(c.data("oldSrc")&&c.data("oldSrc")!==c.attr("src")){var a=c.clone().removeAttr("style");return a.data("imgLiquid_settings",c.data("imgLiquid_settings")),c.parent().prepend(a),c.remove(),c=a,c[0].width=0,setTimeout(d,10),void 0}return c.data("imgLiquid_oldProcessed")?(r(),void 0):(c.data("imgLiquid_oldProcessed",!1),c.data("oldSrc",c.attr("src")),i("img:not(:first)",u).css("display","none"),u.css({overflow:"hidden"}),c.fadeTo(0,0).removeAttr("width").removeAttr("height").css({visibility:"visible","max-width":"none","max-height":"none",width:"auto",height:"auto",display:"block"}),c.on("error",n),c[0].onerror=n,e(),o(),void 0)}function o(){(g.responsive||c.data("imgLiquid_oldProcessed"))&&c.data("imgLiquid_settings")&&(g=c.data("imgLiquid_settings"),u.actualSize=u.get(0).offsetWidth+u.get(0).offsetHeight/1e4,u.sizeOld&&u.actualSize!==u.sizeOld&&r(),u.sizeOld=u.actualSize,setTimeout(o,g.responsiveCheckTime))}function n(){c.data("imgLiquid_error",!0),u.addClass("imgLiquid_error"),g.onItemError&&g.onItemError(t,u,c),l()}function s(){var i={};if(a.settings.useDataHtmlAttr){var t=u.attr("data-imgLiquid-fill"),e=u.attr("data-imgLiquid-horizontalAlign"),d=u.attr("data-imgLiquid-verticalAlign");("true"===t||"false"===t)&&(i.fill=Boolean("true"===t)),void 0===e||"left"!==e&&"center"!==e&&"right"!==e&&-1===e.indexOf("%")||(i.horizontalAlign=e),void 0===d||"top"!==d&&"bottom"!==d&&"center"!==d&&-1===d.indexOf("%")||(i.verticalAlign=d)}return imgLiquid.isIE&&a.settings.ieFadeInDisabled&&(i.fadeInTime=0),i}function r(){var i,e,a,d,o,n,s,r,m=0,h=0,f=u.width(),v=u.height();void 0===c.data("owidth")&&c.data("owidth",c[0].width),void 0===c.data("oheight")&&c.data("oheight",c[0].height),g.fill===f/v>=c.data("owidth")/c.data("oheight")?(i="100%",e="auto",a=Math.floor(f),d=Math.floor(f*(c.data("oheight")/c.data("owidth")))):(i="auto",e="100%",a=Math.floor(v*(c.data("owidth")/c.data("oheight"))),d=Math.floor(v)),o=g.horizontalAlign.toLowerCase(),s=f-a,"left"===o&&(h=0),"center"===o&&(h=.5*s),"right"===o&&(h=s),-1!==o.indexOf("%")&&(o=parseInt(o.replace("%",""),10),o>0&&(h=.01*s*o)),n=g.verticalAlign.toLowerCase(),r=v-d,"left"===n&&(m=0),"center"===n&&(m=.5*r),"bottom"===n&&(m=r),-1!==n.indexOf("%")&&(n=parseInt(n.replace("%",""),10),n>0&&(m=.01*r*n)),g.hardPixels&&(i=a,e=d),c.css({width:i,height:e,"margin-left":Math.floor(h),"margin-top":Math.floor(m)}),c.data("imgLiquid_oldProcessed")||(c.fadeTo(g.fadeInTime,1),c.data("imgLiquid_oldProcessed",!0),g.removeBoxBackground&&u.css("background-image","none"),u.addClass("imgLiquid_nobgSize"),u.addClass("imgLiquid_ready")),g.onItemFinish&&g.onItemFinish(t,u,c),l()}function l(){t===a.length-1&&a.settings.onFinish&&a.settings.onFinish()}var g=a.settings,u=i(this),c=i("img:first",u);return c.length?(c.data("imgLiquid_settings")?(u.removeClass("imgLiquid_error").removeClass("imgLiquid_ready"),g=i.extend({},c.data("imgLiquid_settings"),a.options)):g=i.extend({},a.settings,s()),c.data("imgLiquid_settings",g),g.onItemStart&&g.onItemStart(t,u,c),imgLiquid.bgs_Available&&g.useBackgroundSize?e():d(),void 0):(n(),void 0)})}})}(jQuery),!function(){var i=imgLiquid.injectCss,t=document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i)),t.appendChild(e)}();

!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(){var e=a(this),o=n.settings,s=t(this).data("tag");return isNaN(e.datetime)||(0==o.cutoff||r(e.datetime)<o.cutoff)&&(""==s||void 0===s?t(this).text(i(e.datetime)):t(this).data(s,i(e.datetime))),this}function a(e){if(e=t(e),!e.data("timeago")){e.data("timeago",{datetime:n.datetime(e)});var a=t.trim(e.text());n.settings.localeTitle?e.attr("title",e.data("timeago").datetime.toLocaleString()):!(a.length>0)||n.isTime(e)&&e.attr("title")||e.attr("title",a)}return e.data("timeago")}function i(t){return n.inWords(r(t))}function r(t){return(new Date).getTime()-t.getTime()}t.timeago=function(e){return i(e instanceof Date?e:"string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var n=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowFuture:!1,localeTitle:!1,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(e){function a(a,r){var n=t.isFunction(a)?a(r,e):a,o=i.numbers&&i.numbers[r]||r;return n.replace(/%d/i,o)}var i=this.settings.strings,r=i.prefixAgo,n=i.suffixAgo;this.settings.allowFuture&&0>e&&(r=i.prefixFromNow,n=i.suffixFromNow);var o=Math.abs(e)/1e3,s=o/60,u=s/60,m=u/24,d=m/365,l=45>o&&a(i.seconds,Math.round(o))||90>o&&a(i.minute,1)||45>s&&a(i.minutes,Math.round(s))||90>s&&a(i.hour,1)||24>u&&a(i.hours,Math.round(u))||42>u&&a(i.day,1)||30>m&&a(i.days,Math.round(m))||45>m&&a(i.month,1)||365>m&&a(i.months,Math.round(m/30))||1.5>d&&a(i.year,1)||a(i.years,Math.round(d)),f=i.wordSeparator||"";return void 0===i.wordSeparator&&(f=" "),t.trim([r,l,n].join(f))},parse:function(e){var a=t.trim(e);return a=a.replace(/\.\d+/,""),a=a.replace(/-/,"/").replace(/-/,"/"),a=a.replace(/T/," ").replace(/Z/," UTC"),a=a.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),a=a.replace(/([\+\-]\d\d)$/," $100"),new Date(a)},datetime:function(e){var a=n.isTime(e)?t(e).attr("datetime"):t(e).data("time");return n.parse(a)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var o={init:function(){var a=t.proxy(e,this);a();var i=n.settings;i.refreshMillis>0&&(this._timeagoInterval=setInterval(a,i.refreshMillis))},update:function(a){var i=n.parse(a);t(this).data("timeago",{datetime:i}),n.settings.localeTitle&&t(this).attr("title",i.toLocaleString()),e.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:n.parse(n.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),e.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};t.fn.timeago=function(t,e){var a=t?o[t]:o.init;if(!a)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){a.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")});
jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:"從現在開始",suffixAgo:"之前",suffixFromNow:null,seconds:"不到 1 分鐘",minute:"約 1 分鐘",minutes:"%d 分鐘",hour:"約 1 小時",hours:"%d 小時",day:"約 1 天",days:"%d 天",month:"約 1 個月",months:"%d 個月",year:"約 1 年",years:"%d 年",numbers:[],wordSeparator:""};

!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipe=t()}(this,function(){"use strict";var e=function(e,t,n,i,o){var a={features:null,bind:function(e,t,n,i){var o=(i?"remove":"add")+"EventListener";t=t.split(" ");for(var a=0;a<t.length;a++)t[a]&&e[o](t[a],n,!1)},isArray:function(e){return e instanceof Array},createEl:function(e,t){var n=document.createElement(t||"div");return e&&(n.className=e),n},getScrollY:function(){var e=window.pageYOffset;return void 0!==e?e:document.documentElement.scrollTop},unbind:function(e,t,n){a.bind(e,t,n,!0)},removeClass:function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,t){a.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},hasClass:function(e,t){return e.className&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},getChildByClass:function(e,t){for(var n=e.firstChild;n;){if(a.hasClass(n,t))return n;n=n.nextSibling}},arraySearch:function(e,t,n){for(var i=e.length;i--;)if(e[i][n]===t)return i;return-1},extend:function(e,t,n){for(var i in t)if(t.hasOwnProperty(i)){if(n&&e.hasOwnProperty(i))continue;e[i]=t[i]}},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}},detectFeatures:function(){if(a.features)return a.features;var e=a.createEl(),t=e.style,n="",i={};if(i.oldIE=document.all&&!document.addEventListener,i.touch="ontouchstart"in window,window.requestAnimationFrame&&(i.raf=window.requestAnimationFrame,i.caf=window.cancelAnimationFrame),i.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!i.pointerEvent){var o=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var r=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);r&&r.length>0&&(r=parseInt(r[1],10),r>=1&&8>r&&(i.isOldIOSPhone=!0))}var l=o.match(/Android\s([0-9\.]*)/),s=l?l[1]:0;s=parseFloat(s),s>=1&&(4.4>s&&(i.isOldAndroid=!0),i.androidVersion=s),i.isMobileOpera=/opera mini|opera mobi/i.test(o)}for(var u,c,d=["transform","perspective","animationName"],p=["","webkit","Moz","ms","O"],m=0;4>m;m++){n=p[m];for(var f=0;3>f;f++)u=d[f],c=n+(n?u.charAt(0).toUpperCase()+u.slice(1):u),!i[u]&&c in t&&(i[u]=c);n&&!i.raf&&(n=n.toLowerCase(),i.raf=window[n+"RequestAnimationFrame"],i.raf&&(i.caf=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]))}if(!i.raf){var h=0;i.raf=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-h)),i=window.setTimeout(function(){e(t+n)},n);return h=t+n,i},i.caf=function(e){clearTimeout(e)}}return i.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,a.features=i,i}};a.detectFeatures(),a.features.oldIE&&(a.bind=function(e,t,n,i){t=t.split(" ");for(var o,a=(i?"detach":"attach")+"Event",r=function(){n.handleEvent.call(n)},l=0;l<t.length;l++)if(o=t[l])if("object"==typeof n&&n.handleEvent){if(i){if(!n["oldIE"+o])return!1}else n["oldIE"+o]=r;e[a]("on"+o,n["oldIE"+o])}else e[a]("on"+o,n)});var r=this,l=25,s=3,u={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return"A"===e.tagName},getDoubleTapZoom:function(e,t){return e?1:t.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};a.extend(u,i);var c,d,p,m,f,h,v,y,x,g,w,b,I,C,D,M,T,S,A,E,O,k,R,Z,P,F,L,_,z,N,U,H,Y,B,W,G,X,V,K,q,$,j,J,Q,ee,te,ne,ie,oe,ae,re,le,se,ue,ce,de,pe=function(){return{x:0,y:0}},me=pe(),fe=pe(),he=pe(),ve={},ye=0,xe={},ge=pe(),we=0,be=!0,Ie=[],Ce={},De=!1,Me=function(e,t){a.extend(r,t.publicMethods),Ie.push(e)},Te=function(e){var t=nn();return e>t-1?e-t:0>e?t+e:e},Se={},Ae=function(e,t){return Se[e]||(Se[e]=[]),Se[e].push(t)},Ee=function(e){var t=Se[e];if(t){var n=Array.prototype.slice.call(arguments);n.shift();for(var i=0;i<t.length;i++)t[i].apply(r,n)}},Oe=function(){return(new Date).getTime()},ke=function(e){ue=e,r.bg.style.opacity=e*u.bgOpacity},Re=function(e,t,n,i,o){(!De||o&&o!==r.currItem)&&(i/=o?o.fitRatio:r.currItem.fitRatio),e[k]=b+t+"px, "+n+"px"+I+" scale("+i+")"},Ze=function(e){oe&&(e&&(g>r.currItem.fitRatio?De||(hn(r.currItem,!1,!0),De=!0):De&&(hn(r.currItem),De=!1)),Re(oe,he.x,he.y,g))},Pe=function(e){e.container&&Re(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)},Fe=function(e,t){t[k]=b+e+"px, 0px"+I},Le=function(e,t){if(!u.loop&&t){var n=m+(ge.x*ye-e)/ge.x,i=Math.round(e-gt.x);(0>n&&i>0||n>=nn()-1&&0>i)&&(e=gt.x+i*u.mainScrollEndFriction)}gt.x=e,Fe(e,f)},_e=function(e,t){var n=wt[e]-xe[e];return fe[e]+me[e]+n-n*(t/w)},ze=function(e,t){e.x=t.x,e.y=t.y,t.id&&(e.id=t.id)},Ne=function(e){e.x=Math.round(e.x),e.y=Math.round(e.y)},Ue=null,He=function(){Ue&&(a.unbind(document,"mousemove",He),a.addClass(e,"pswp--has_mouse"),u.mouseUsed=!0,Ee("mouseUsed")),Ue=setTimeout(function(){Ue=null},100)},Ye=function(){a.bind(document,"keydown",r),U.transform&&a.bind(r.scrollWrap,"click",r),u.mouseUsed||a.bind(document,"mousemove",He),a.bind(window,"resize scroll",r),Ee("bindEvents")},Be=function(){a.unbind(window,"resize",r),a.unbind(window,"scroll",x.scroll),a.unbind(document,"keydown",r),a.unbind(document,"mousemove",He),U.transform&&a.unbind(r.scrollWrap,"click",r),V&&a.unbind(window,v,r),Ee("unbindEvents")},We=function(e,t){var n=dn(r.currItem,ve,e);return t&&(ie=n),n},Ge=function(e){return e||(e=r.currItem),e.initialZoomLevel},Xe=function(e){return e||(e=r.currItem),e.w>0?u.maxSpreadZoom:1},Ve=function(e,t,n,i){return i===r.currItem.initialZoomLevel?(n[e]=r.currItem.initialPosition[e],!0):(n[e]=_e(e,i),n[e]>t.min[e]?(n[e]=t.min[e],!0):n[e]<t.max[e]?(n[e]=t.max[e],!0):!1)},Ke=function(){if(k){var t=U.perspective&&!Z;return b="translate"+(t?"3d(":"("),void(I=U.perspective?", 0px)":")")}k="left",a.addClass(e,"pswp--ie"),Fe=function(e,t){t.left=e+"px"},Pe=function(e){var t=e.fitRatio>1?1:e.fitRatio,n=e.container.style,i=t*e.w,o=t*e.h;n.width=i+"px",n.height=o+"px",n.left=e.initialPosition.x+"px",n.top=e.initialPosition.y+"px"},Ze=function(){if(oe){var e=oe,t=r.currItem,n=t.fitRatio>1?1:t.fitRatio,i=n*t.w,o=n*t.h;e.width=i+"px",e.height=o+"px",e.left=he.x+"px",e.top=he.y+"px"}}},qe=function(e){var t="";u.escKey&&27===e.keyCode?t="close":u.arrowKeys&&(37===e.keyCode?t="prev":39===e.keyCode&&(t="next")),t&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||(e.preventDefault?e.preventDefault():e.returnValue=!1,r[t]()))},$e=function(e){e&&($||q||ae||G)&&(e.preventDefault(),e.stopPropagation())},je=function(){r.setScrollOffset(0,a.getScrollY())},Je={},Qe=0,et=function(e){Je[e]&&(Je[e].raf&&F(Je[e].raf),Qe--,delete Je[e])},tt=function(e){Je[e]&&et(e),Je[e]||(Qe++,Je[e]={})},nt=function(){for(var e in Je)Je.hasOwnProperty(e)&&et(e)},it=function(e,t,n,i,o,a,r){var l,s=Oe();tt(e);var u=function(){if(Je[e]){if(l=Oe()-s,l>=i)return et(e),a(n),void(r&&r());a((n-t)*o(l/i)+t),Je[e].raf=P(u)}};u()},ot={shout:Ee,listen:Ae,viewportSize:ve,options:u,isMainScrollAnimating:function(){return ae},getZoomLevel:function(){return g},getCurrentIndex:function(){return m},isDragging:function(){return V},isZooming:function(){return ee},setScrollOffset:function(e,t){xe.x=e,N=xe.y=t,Ee("updateScrollOffset",xe)},applyZoomPan:function(e,t,n,i){he.x=t,he.y=n,g=e,Ze(i)},init:function(n){if(!c&&!d){Ae("pvCallback",n);var i;r.framework=a,r.template=e,r.bg=a.getChildByClass(e,"pswp__bg"),L=e.className,c=!0,U=a.detectFeatures(),P=U.raf,F=U.caf,k=U.transform,z=U.oldIE,r.scrollWrap=a.getChildByClass(e,"pswp__scroll-wrap"),r.container=a.getChildByClass(r.scrollWrap,"pswp__container"),f=r.container.style,r.itemHolders=M=[{el:r.container.children[0],wrap:0,index:-1},{el:r.container.children[1],wrap:0,index:-1},{el:r.container.children[2],wrap:0,index:-1}],M[0].el.style.display=M[2].el.style.display="none",Ke(),x={resize:r.updateSize,scroll:je,keydown:qe,click:$e};var o=U.isOldIOSPhone||U.isOldAndroid||U.isMobileOpera;for(U.animationName&&U.transform&&!o||(u.showAnimationDuration=u.hideAnimationDuration=0),i=0;i<Ie.length;i++)r["init"+Ie[i]]();if(t){var l=r.ui=new t(r,a);l.init()}Ee("firstUpdate"),m=m||u.index||0,(isNaN(m)||0>m||m>=nn())&&(m=0),r.currItem=en(m),(U.isOldIOSPhone||U.isOldAndroid)&&(be=!1),e.setAttribute("aria-hidden","false"),u.modal&&(be?e.style.position="fixed":(e.style.position="absolute",e.style.top=a.getScrollY()+"px")),void 0===N&&(Ee("initialLayout"),N=_=a.getScrollY());var p="pswp--open ";for(u.mainClass&&(p+=u.mainClass+" "),u.showHideOpacity&&(p+="pswp--animate_opacity "),p+=Z?"pswp--touch":"pswp--notouch",p+=U.animationName?" pswp--css_animation":"",p+=U.svg?" pswp--svg":"",a.addClass(e,p),r.updateSize(),h=-1,we=null,i=0;s>i;i++)Fe((i+h)*ge.x,M[i].el.style);z||a.bind(r.scrollWrap,y,r),Ae("initialZoomInEnd",function(){r.setContent(M[0],m-1),r.setContent(M[2],m+1),M[0].el.style.display=M[2].el.style.display="block",u.focus&&e.focus(),Ye()}),r.setContent(M[1],m),r.updateCurrItem(),Ee("afterInit"),be||(C=setInterval(function(){Qe||V||ee||g!==r.currItem.initialZoomLevel||r.updateSize()},1e3)),a.addClass(e,"pswp--visible")}},close:function(){c&&(c=!1,d=!0,Ee("close"),Be(),an(r.currItem,null,!0,r.destroy))},destroy:function(){Ee("destroy"),qt&&clearTimeout(qt),e.setAttribute("aria-hidden","true"),e.className=L,C&&clearInterval(C),a.unbind(r.scrollWrap,y,r),a.unbind(window,"scroll",r),Mt(),nt(),Se=null},panTo:function(e,t,n){n||(e>ie.min.x?e=ie.min.x:e<ie.max.x&&(e=ie.max.x),t>ie.min.y?t=ie.min.y:t<ie.max.y&&(t=ie.max.y)),he.x=e,he.y=t,Ze()},handleEvent:function(e){e=e||window.event,x[e.type]&&x[e.type](e)},goTo:function(e){e=Te(e);var t=e-m;we=t,m=e,r.currItem=en(m),ye-=t,Le(ge.x*ye),nt(),ae=!1,r.updateCurrItem()},next:function(){r.goTo(m+1)},prev:function(){r.goTo(m-1)},updateCurrZoomItem:function(e){if(e&&Ee("beforeChange",0),M[1].el.children.length){var t=M[1].el.children[0];oe=a.hasClass(t,"pswp__zoom-wrap")?t.style:null}else oe=null;ie=r.currItem.bounds,w=g=r.currItem.initialZoomLevel,he.x=ie.center.x,he.y=ie.center.y,e&&Ee("afterChange")},invalidateCurrItems:function(){D=!0;for(var e=0;s>e;e++)M[e].item&&(M[e].item.needsUpdate=!0)},updateCurrItem:function(e){if(0!==we){var t,n=Math.abs(we);if(!(e&&2>n)){r.currItem=en(m),De=!1,Ee("beforeChange",we),n>=s&&(h+=we+(we>0?-s:s),n=s);for(var i=0;n>i;i++)we>0?(t=M.shift(),M[s-1]=t,h++,Fe((h+2)*ge.x,t.el.style),r.setContent(t,m-n+i+1+1)):(t=M.pop(),M.unshift(t),h--,Fe(h*ge.x,t.el.style),r.setContent(t,m+n-i-1-1));if(oe&&1===Math.abs(we)){var o=en(T);o.initialZoomLevel!==g&&(dn(o,ve),hn(o),Pe(o))}we=0,r.updateCurrZoomItem(),T=m,Ee("afterChange")}}},updateSize:function(t){if(!be&&u.modal){var n=a.getScrollY();if(N!==n&&(e.style.top=n+"px",N=n),!t&&Ce.x===window.innerWidth&&Ce.y===window.innerHeight)return;Ce.x=window.innerWidth,Ce.y=window.innerHeight,e.style.height=Ce.y+"px"}if(ve.x=r.scrollWrap.clientWidth,ve.y=r.scrollWrap.clientHeight,je(),ge.x=ve.x+Math.round(ve.x*u.spacing),ge.y=ve.y,Le(ge.x*ye),Ee("beforeResize"),void 0!==h){for(var i,o,l,c=0;s>c;c++)i=M[c],Fe((c+h)*ge.x,i.el.style),l=m+c-1,u.loop&&nn()>2&&(l=Te(l)),o=en(l),o&&(D||o.needsUpdate||!o.bounds)?(r.cleanSlide(o),r.setContent(i,l),1===c&&(r.currItem=o,r.updateCurrZoomItem(!0)),o.needsUpdate=!1):-1===i.index&&l>=0&&r.setContent(i,l),o&&o.container&&(dn(o,ve),hn(o),Pe(o));D=!1}w=g=r.currItem.initialZoomLevel,ie=r.currItem.bounds,ie&&(he.x=ie.center.x,he.y=ie.center.y,Ze(!0)),Ee("resize")},zoomTo:function(e,t,n,i,o){t&&(w=g,wt.x=Math.abs(t.x)-he.x,wt.y=Math.abs(t.y)-he.y,ze(fe,he));var r=We(e,!1),l={};Ve("x",r,l,e),Ve("y",r,l,e);var s=g,u={x:he.x,y:he.y};Ne(l);var c=function(t){1===t?(g=e,he.x=l.x,he.y=l.y):(g=(e-s)*t+s,he.x=(l.x-u.x)*t+u.x,he.y=(l.y-u.y)*t+u.y),o&&o(t),Ze(1===t)};n?it("customZoomTo",0,1,n,i||a.easing.sine.inOut,c):c(1)}},at=30,rt=10,lt={},st={},ut={},ct={},dt={},pt=[],mt={},ft=[],ht={},vt=0,yt=pe(),xt=0,gt=pe(),wt=pe(),bt=pe(),It=function(e,t){return e.x===t.x&&e.y===t.y},Ct=function(e,t){return Math.abs(e.x-t.x)<l&&Math.abs(e.y-t.y)<l},Dt=function(e,t){return ht.x=Math.abs(e.x-t.x),ht.y=Math.abs(e.y-t.y),Math.sqrt(ht.x*ht.x+ht.y*ht.y)},Mt=function(){j&&(F(j),j=null)},Tt=function(){V&&(j=P(Tt),Yt())},St=function(){return!("fit"===u.scaleMode&&g===r.currItem.initialZoomLevel)},At=function(e,t){return e?e.className&&e.className.indexOf("pswp__scroll-wrap")>-1?!1:t(e)?e:At(e.parentNode,t):!1},Et={},Ot=function(e,t){return Et.prevent=!At(e.target,u.isClickableElement),Ee("preventDragEvent",e,t,Et),Et.prevent},kt=function(e,t){return t.x=e.pageX,t.y=e.pageY,t.id=e.identifier,t},Rt=function(e,t,n){n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y)},Zt=function(e,t,n){if(e-Y>50){var i=ft.length>2?ft.shift():{};i.x=t,i.y=n,ft.push(i),Y=e}},Pt=function(){var e=he.y-r.currItem.initialPosition.y;return 1-Math.abs(e/(ve.y/2))},Ft={},Lt={},_t=[],zt=function(e){for(;_t.length>0;)_t.pop();return R?(de=0,pt.forEach(function(e){0===de?_t[0]=e:1===de&&(_t[1]=e),de++})):e.type.indexOf("touch")>-1?e.touches&&e.touches.length>0&&(_t[0]=kt(e.touches[0],Ft),e.touches.length>1&&(_t[1]=kt(e.touches[1],Lt))):(Ft.x=e.pageX,Ft.y=e.pageY,Ft.id="",_t[0]=Ft),_t},Nt=function(e,t){var n,i,o,a,l=0,s=he[e]+t[e],c=t[e]>0,d=gt.x+t.x,p=gt.x-mt.x;return n=s>ie.min[e]||s<ie.max[e]?u.panEndFriction:1,s=he[e]+t[e]*n,!u.allowPanToNext&&g!==r.currItem.initialZoomLevel||(oe?"h"!==re||"x"!==e||q||(c?(s>ie.min[e]&&(n=u.panEndFriction,l=ie.min[e]-s,i=ie.min[e]-fe[e]),(0>=i||0>p)&&nn()>1?(a=d,0>p&&d>mt.x&&(a=mt.x)):ie.min.x!==ie.max.x&&(o=s)):(s<ie.max[e]&&(n=u.panEndFriction,l=s-ie.max[e],i=fe[e]-ie.max[e]),(0>=i||p>0)&&nn()>1?(a=d,p>0&&d<mt.x&&(a=mt.x)):ie.min.x!==ie.max.x&&(o=s))):a=d,"x"!==e)?void(ae||J||g>r.currItem.fitRatio&&(he[e]+=t[e]*n)):(void 0!==a&&(Le(a,!0),J=a===mt.x?!1:!0),ie.min.x!==ie.max.x&&(void 0!==o?he.x=o:J||(he.x+=t.x*n)),void 0!==a)},Ut=function(e){if(!("mousedown"===e.type&&e.button>0)){if(Qt)return void e.preventDefault();if(!X||"mousedown"!==e.type){if(Ot(e,!0)&&e.preventDefault(),Ee("pointerDown"),R){var t=a.arraySearch(pt,e.pointerId,"id");0>t&&(t=pt.length),pt[t]={x:e.pageX,y:e.pageY,id:e.pointerId}}var n=zt(e),i=n.length;Q=null,nt(),V&&1!==i||(V=le=!0,a.bind(window,v,r),W=ce=se=G=J=$=K=q=!1,re=null,Ee("firstTouchStart",n),ze(fe,he),me.x=me.y=0,ze(ct,n[0]),ze(dt,ct),mt.x=ge.x*ye,ft=[{x:ct.x,y:ct.y}],Y=H=Oe(),We(g,!0),Mt(),Tt()),!ee&&i>1&&!ae&&!J&&(w=g,q=!1,ee=K=!0,me.y=me.x=0,ze(fe,he),ze(lt,n[0]),ze(st,n[1]),Rt(lt,st,bt),wt.x=Math.abs(bt.x)-he.x,wt.y=Math.abs(bt.y)-he.y,te=ne=Dt(lt,st))}}},Ht=function(e){if(e.preventDefault(),R){var t=a.arraySearch(pt,e.pointerId,"id");if(t>-1){var n=pt[t];n.x=e.pageX,n.y=e.pageY}}if(V){var i=zt(e);if(re||$||ee)Q=i;else if(gt.x!==ge.x*ye)re="h";else{var o=Math.abs(i[0].x-ct.x)-Math.abs(i[0].y-ct.y);Math.abs(o)>=rt&&(re=o>0?"h":"v",Q=i)}}},Yt=function(){if(Q){var e=Q.length;if(0!==e)if(ze(lt,Q[0]),ut.x=lt.x-ct.x,ut.y=lt.y-ct.y,ee&&e>1){if(ct.x=lt.x,ct.y=lt.y,!ut.x&&!ut.y&&It(Q[1],st))return;ze(st,Q[1]),q||(q=!0,Ee("zoomGestureStarted"));var t=Dt(lt,st),n=Vt(t);n>r.currItem.initialZoomLevel+r.currItem.initialZoomLevel/15&&(ce=!0);var i=1,o=Ge(),a=Xe();if(o>n)if(u.pinchToClose&&!ce&&w<=r.currItem.initialZoomLevel){var l=o-n,s=1-l/(o/1.2);ke(s),Ee("onPinchClose",s),se=!0}else i=(o-n)/o,i>1&&(i=1),n=o-i*(o/3);else n>a&&(i=(n-a)/(6*o),i>1&&(i=1),n=a+i*o);0>i&&(i=0),te=t,Rt(lt,st,yt),me.x+=yt.x-bt.x,me.y+=yt.y-bt.y,ze(bt,yt),he.x=_e("x",n),he.y=_e("y",n),W=n>g,g=n,Ze()}else{if(!re)return;if(le&&(le=!1,Math.abs(ut.x)>=rt&&(ut.x-=Q[0].x-dt.x),Math.abs(ut.y)>=rt&&(ut.y-=Q[0].y-dt.y)),ct.x=lt.x,ct.y=lt.y,0===ut.x&&0===ut.y)return;if("v"===re&&u.closeOnVerticalDrag&&!St()){me.y+=ut.y,he.y+=ut.y;var c=Pt();return G=!0,Ee("onVerticalDrag",c),ke(c),void Ze()}Zt(Oe(),lt.x,lt.y),$=!0,ie=r.currItem.bounds;var d=Nt("x",ut);d||(Nt("y",ut),Ne(he),Ze())}}},Bt=function(e){if(U.isOldAndroid){if(X&&"mouseup"===e.type)return;e.type.indexOf("touch")>-1&&(clearTimeout(X),X=setTimeout(function(){X=0},600))}Ee("pointerUp"),Ot(e,!1)&&e.preventDefault();var t;if(R){var n=a.arraySearch(pt,e.pointerId,"id");if(n>-1)if(t=pt.splice(n,1)[0],navigator.pointerEnabled)t.type=e.pointerType||"mouse";else{var i={4:"mouse",2:"touch",3:"pen"};t.type=i[e.pointerType],t.type||(t.type=e.pointerType||"mouse")}}var o,l=zt(e),s=l.length;if("mouseup"===e.type&&(s=0),2===s)return Q=null,!0;1===s&&ze(dt,l[0]),0!==s||re||ae||(t||("mouseup"===e.type?t={x:e.pageX,y:e.pageY,type:"mouse"}:e.changedTouches&&e.changedTouches[0]&&(t={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"})),Ee("touchRelease",e,t));var c=-1;if(0===s&&(V=!1,a.unbind(window,v,r),Mt(),ee?c=0:-1!==xt&&(c=Oe()-xt)),xt=1===s?Oe():-1,o=-1!==c&&150>c?"zoom":"swipe",ee&&2>s&&(ee=!1,1===s&&(o="zoomPointerUp"),Ee("zoomGestureEnded")),Q=null,$||q||ae||G)if(nt(),B||(B=Wt()),B.calculateSwipeSpeed("x"),G){var d=Pt();if(d<u.verticalDragRange)r.close();else{var p=he.y,m=ue;it("verticalDrag",0,1,300,a.easing.cubic.out,function(e){he.y=(r.currItem.initialPosition.y-p)*e+p,ke((1-m)*e+m),Ze()}),Ee("onVerticalDrag",1)}}else{if((J||ae)&&0===s){var f=Xt(o,B);if(f)return;o="zoomPointerUp"}if(!ae)return"swipe"!==o?void Kt():void(!J&&g>r.currItem.fitRatio&&Gt(B))}},Wt=function(){var e,t,n={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(i){ft.length>1?(e=Oe()-Y+50,t=ft[ft.length-2][i]):(e=Oe()-H,t=dt[i]),n.lastFlickOffset[i]=ct[i]-t,n.lastFlickDist[i]=Math.abs(n.lastFlickOffset[i]),n.lastFlickDist[i]>20?n.lastFlickSpeed[i]=n.lastFlickOffset[i]/e:n.lastFlickSpeed[i]=0,Math.abs(n.lastFlickSpeed[i])<.1&&(n.lastFlickSpeed[i]=0),n.slowDownRatio[i]=.95,n.slowDownRatioReverse[i]=1-n.slowDownRatio[i],n.speedDecelerationRatio[i]=1},calculateOverBoundsAnimOffset:function(e,t){n.backAnimStarted[e]||(he[e]>ie.min[e]?n.backAnimDestination[e]=ie.min[e]:he[e]<ie.max[e]&&(n.backAnimDestination[e]=ie.max[e]),void 0!==n.backAnimDestination[e]&&(n.slowDownRatio[e]=.7,n.slowDownRatioReverse[e]=1-n.slowDownRatio[e],n.speedDecelerationRatioAbs[e]<.05&&(n.lastFlickSpeed[e]=0,n.backAnimStarted[e]=!0,it("bounceZoomPan"+e,he[e],n.backAnimDestination[e],t||300,a.easing.sine.out,function(t){he[e]=t,Ze()}))))},calculateAnimOffset:function(e){n.backAnimStarted[e]||(n.speedDecelerationRatio[e]=n.speedDecelerationRatio[e]*(n.slowDownRatio[e]+n.slowDownRatioReverse[e]-n.slowDownRatioReverse[e]*n.timeDiff/10),n.speedDecelerationRatioAbs[e]=Math.abs(n.lastFlickSpeed[e]*n.speedDecelerationRatio[e]),n.distanceOffset[e]=n.lastFlickSpeed[e]*n.speedDecelerationRatio[e]*n.timeDiff,he[e]+=n.distanceOffset[e])},panAnimLoop:function(){return Je.zoomPan&&(Je.zoomPan.raf=P(n.panAnimLoop),n.now=Oe(),n.timeDiff=n.now-n.lastNow,n.lastNow=n.now,n.calculateAnimOffset("x"),n.calculateAnimOffset("y"),Ze(),n.calculateOverBoundsAnimOffset("x"),n.calculateOverBoundsAnimOffset("y"),n.speedDecelerationRatioAbs.x<.05&&n.speedDecelerationRatioAbs.y<.05)?(he.x=Math.round(he.x),he.y=Math.round(he.y),Ze(),void et("zoomPan")):void 0}};return n},Gt=function(e){return e.calculateSwipeSpeed("y"),ie=r.currItem.bounds,e.backAnimDestination={},e.backAnimStarted={},Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05?(e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0,e.calculateOverBoundsAnimOffset("x"),e.calculateOverBoundsAnimOffset("y"),!0):(tt("zoomPan"),e.lastNow=Oe(),void e.panAnimLoop())},Xt=function(e,t){var n;ae||(vt=m);var i;if("swipe"===e){var o=ct.x-dt.x,l=t.lastFlickDist.x<10;o>at&&(l||t.lastFlickOffset.x>20)?i=-1:-at>o&&(l||t.lastFlickOffset.x<-20)&&(i=1)}var s;i&&(m+=i,0>m?(m=u.loop?nn()-1:0,s=!0):m>=nn()&&(m=u.loop?0:nn()-1,s=!0),(!s||u.loop)&&(we+=i,ye-=i,n=!0));var c,d=ge.x*ye,p=Math.abs(d-gt.x);return n||d>gt.x==t.lastFlickSpeed.x>0?(c=Math.abs(t.lastFlickSpeed.x)>0?p/Math.abs(t.lastFlickSpeed.x):333,c=Math.min(c,400),c=Math.max(c,250)):c=333,vt===m&&(n=!1),ae=!0,Ee("mainScrollAnimStart"),it("mainScroll",gt.x,d,c,a.easing.cubic.out,Le,function(){nt(),ae=!1,vt=-1,(n||vt!==m)&&r.updateCurrItem(),Ee("mainScrollAnimComplete")}),n&&r.updateCurrItem(!0),n},Vt=function(e){return 1/ne*e*w},Kt=function(){var e=g,t=Ge(),n=Xe();t>g?e=t:g>n&&(e=n);var i,o=1,l=ue;return se&&!W&&!ce&&t>g?(r.close(),!0):(se&&(i=function(e){ke((o-l)*e+l)}),r.zoomTo(e,0,200,a.easing.cubic.out,i),!0)};Me("Gestures",{publicMethods:{initGestures:function(){var e=function(e,t,n,i,o){S=e+t,A=e+n,E=e+i,O=o?e+o:""};R=U.pointerEvent,R&&U.touch&&(U.touch=!1),R?navigator.pointerEnabled?e("pointer","down","move","up","cancel"):e("MSPointer","Down","Move","Up","Cancel"):U.touch?(e("touch","start","move","end","cancel"),Z=!0):e("mouse","down","move","up"),v=A+" "+E+" "+O,y=S,R&&!Z&&(Z=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),r.likelyTouchDevice=Z,x[S]=Ut,x[A]=Ht,x[E]=Bt,O&&(x[O]=x[E]),U.touch&&(y+=" mousedown",v+=" mousemove mouseup",x.mousedown=x[S],x.mousemove=x[A],x.mouseup=x[E]),Z||(u.allowPanToNext=!1)}}});var qt,$t,jt,Jt,Qt,en,tn,nn,on,an=function(t,n,i,o){qt&&clearTimeout(qt),Qt=!0,Jt=!0;var l;t.initialLayout?(l=t.initialLayout,t.initialLayout=null):l=u.getThumbBoundsFn&&u.getThumbBoundsFn(m);var s=i?u.hideAnimationDuration:u.showAnimationDuration,c=function(){et("initialZoom"),i?(r.template.removeAttribute("style"),r.bg.removeAttribute("style")):(ke(1),n&&(n.style.display="block"),a.addClass(e,"pswp--animated-in"),Ee("initialZoom"+(i?"OutEnd":"InEnd"))),o&&o(),Qt=!1};if(!s||!l||void 0===l.x)return Ee("initialZoom"+(i?"Out":"In")),g=t.initialZoomLevel,ze(he,t.initialPosition),Ze(),e.style.opacity=i?0:1,ke(1),void(s?setTimeout(function(){c()},s):c());var d=function(){var n=p,o=!r.currItem.src||r.currItem.loadError||u.showHideOpacity;t.miniImg&&(t.miniImg.style.webkitBackfaceVisibility="hidden"),i||(g=l.w/t.w,he.x=l.x,he.y=l.y-_,r[o?"template":"bg"].style.opacity=.001,Ze()),tt("initialZoom"),i&&!n&&a.removeClass(e,"pswp--animated-in"),o&&(i?a[(n?"remove":"add")+"Class"](e,"pswp--animate_opacity"):setTimeout(function(){a.addClass(e,"pswp--animate_opacity")},30)),qt=setTimeout(function(){if(Ee("initialZoom"+(i?"Out":"In")),i){var r=l.w/t.w,u={x:he.x,y:he.y},d=g,p=ue,m=function(t){1===t?(g=r,he.x=l.x,he.y=l.y-N):(g=(r-d)*t+d,he.x=(l.x-u.x)*t+u.x,he.y=(l.y-N-u.y)*t+u.y),Ze(),o?e.style.opacity=1-t:ke(p-t*p)};n?it("initialZoom",0,1,s,a.easing.cubic.out,m,c):(m(1),qt=setTimeout(c,s+20))}else g=t.initialZoomLevel,ze(he,t.initialPosition),Ze(),ke(1),o?e.style.opacity=1:ke(1),qt=setTimeout(c,s+20)},i?25:90)};d()},rn={},ln=[],sn={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return $t.length}},un=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},cn=function(e,t,n){var i=e.bounds;i.center.x=Math.round((rn.x-t)/2),i.center.y=Math.round((rn.y-n)/2)+e.vGap.top,i.max.x=t>rn.x?Math.round(rn.x-t):i.center.x,i.max.y=n>rn.y?Math.round(rn.y-n)+e.vGap.top:i.center.y,i.min.x=t>rn.x?0:i.center.x,i.min.y=n>rn.y?e.vGap.top:i.center.y},dn=function(e,t,n){if(e.src&&!e.loadError){var i=!n;if(i&&(e.vGap||(e.vGap={top:0,bottom:0}),Ee("parseVerticalMargin",e)),rn.x=t.x,rn.y=t.y-e.vGap.top,i){var o=rn.x/e.w,a=rn.y/e.h;e.fitRatio=a>o?o:a;var r=u.scaleMode;"orig"===r?n=1:"fit"===r&&(n=e.fitRatio),n>1&&(n=1),e.initialZoomLevel=n,e.bounds||(e.bounds=un())}if(!n)return;return cn(e,e.w*n,e.h*n),i&&n===e.initialZoomLevel&&(e.initialPosition=e.bounds.center),e.bounds}return e.w=e.h=0,e.initialZoomLevel=e.fitRatio=1,e.bounds=un(),e.initialPosition=e.bounds.center,e.bounds},pn=function(e,t,n,i,o,a){t.loadError||i&&(t.imageAppended=!0,hn(t,i,t===r.currItem&&De),n.appendChild(i),a&&setTimeout(function(){t&&t.loaded&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null)},500))},mn=function(e){e.loading=!0,e.loaded=!1;var t=e.img=a.createEl("pswp__img","img"),n=function(){e.loading=!1,e.loaded=!0,e.loadComplete?e.loadComplete(e):e.img=null,t.onload=t.onerror=null,t=null};return t.onload=n,t.onerror=function(){e.loadError=!0,n()},t.src=e.src,t},fn=function(e,t){return e.src&&e.loadError&&e.container?(t&&(e.container.innerHTML=""),e.container.innerHTML=u.errorMsg.replace("%url%",e.src),!0):void 0},hn=function(e,t,n){if(e.src){t||(t=e.container.lastChild);var i=n?e.w:Math.round(e.w*e.fitRatio),o=n?e.h:Math.round(e.h*e.fitRatio);e.placeholder&&!e.loaded&&(e.placeholder.style.width=i+"px",e.placeholder.style.height=o+"px"),t.style.width=i+"px",t.style.height=o+"px"}},vn=function(){if(ln.length){for(var e,t=0;t<ln.length;t++)e=ln[t],e.holder.index===e.index&&pn(e.index,e.item,e.baseDiv,e.img,!1,e.clearPlaceholder);ln=[]}};Me("Controller",{publicMethods:{lazyLoadItem:function(e){e=Te(e);var t=en(e);t&&(!t.loaded&&!t.loading||D)&&(Ee("gettingData",e,t),t.src&&mn(t))},initController:function(){a.extend(u,sn,!0),r.items=$t=n,r.ids=jt=o,en=r.getItemAt,tn=r.getIdsAt,nn=u.getNumItemsFn,on=u.loop,nn()<3&&(u.loop=!1),Ae("beforeChange",function(e){var t,n=u.preload,i=null===e?!0:e>=0,o=Math.min(n[0],nn()),a=Math.min(n[1],nn());for(t=1;(i?a:o)>=t;t++)r.lazyLoadItem(m+t);for(t=1;(i?o:a)>=t;t++)r.lazyLoadItem(m-t)}),Ae("initialLayout",function(){r.currItem.initialLayout=u.getThumbBoundsFn&&u.getThumbBoundsFn(m)}),Ae("mainScrollAnimComplete",vn),Ae("initialZoomInEnd",vn),Ae("destroy",function(){for(var e,t=0;t<$t.length;t++)e=$t[t],e.container&&(e.container=null),e.placeholder&&(e.placeholder=null),e.img&&(e.img=null),e.preloader&&(e.preloader=null),e.loadError&&(e.loaded=e.loadError=!1);ln=null})},getItemAt:function(e){return e>=0&&void 0!==$t[e]?$t[e]:!1},getIdsAt:function(e){return e>=0&&void 0!==jt[e]?jt[e]:!1},allowProgressiveImg:function(){return u.forceProgressiveLoading||!Z||u.mouseUsed||screen.width>1200},setContent:function(e,t){u.loop&&(t=Te(t));var n=r.getItemAt(e.index);n&&(n.container=null);var i,o=r.getItemAt(t);if(!o)return void(e.el.innerHTML="");Ee("gettingData",t,o),e.index=t,e.item=o;var l=o.container=a.createEl("pswp__zoom-wrap");if(!o.src&&o.html&&(o.html.tagName?l.appendChild(o.html):l.innerHTML=o.html),fn(o),dn(o,ve),!o.src||o.loadError||o.loaded)o.src&&!o.loadError&&(i=a.createEl("pswp__img","img"),i.style.opacity=1,i.src=o.src,hn(o,i),pn(t,o,l,i,!0));else{if(o.loadComplete=function(n){if(c){if(e&&e.index===t){if(fn(n,!0))return n.loadComplete=n.img=null,dn(n,ve),Pe(n),void(e.index===m&&r.updateCurrZoomItem());n.imageAppended?!Qt&&n.placeholder&&(n.placeholder.style.display="none",n.placeholder=null):U.transform&&(ae||Qt)?ln.push({item:n,baseDiv:l,img:n.img,index:t,holder:e,clearPlaceholder:!0}):pn(t,n,l,n.img,ae||Qt,!0)}n.loadComplete=null,n.img=null,Ee("imageLoadComplete",t,n)}},a.features.transform){var s="pswp__img pswp__img--placeholder";s+=o.msrc?"":" pswp__img--placeholder--blank";var d=a.createEl(s,o.msrc?"img":"");o.msrc&&(d.src=o.msrc),hn(o,d),l.appendChild(d),o.placeholder=d}o.loading||mn(o),r.allowProgressiveImg()&&(!Jt&&U.transform?ln.push({item:o,baseDiv:l,img:o.img,index:t,holder:e}):pn(t,o,l,o.img,!0,!0))}Jt||t!==m?Pe(o):(oe=l.style,an(o,i||o.img)),e.el.innerHTML="",e.el.appendChild(l)},cleanSlide:function(e){e.img&&(e.img.onload=e.img.onerror=null),e.loaded=e.loading=e.img=e.imageAppended=!1}}});var yn,xn={},gn=function(e,t,n){var i=document.createEvent("CustomEvent"),o={origEvent:e,target:e.target,releasePoint:t,pointerType:n||"touch"};i.initCustomEvent("pswpTap",!0,!0,o),e.target.dispatchEvent(i)};Me("Tap",{publicMethods:{initTap:function(){Ae("firstTouchStart",r.onTapStart),Ae("touchRelease",r.onTapRelease),Ae("destroy",function(){xn={},yn=null})},onTapStart:function(e){e.length>1&&(clearTimeout(yn),yn=null)},onTapRelease:function(e,t){if(t&&!$&&!K&&!Qe){var n=t;if(yn&&(clearTimeout(yn),yn=null,Ct(n,xn)))return void Ee("doubleTap",n);if("mouse"===t.type)return void gn(e,t,"mouse");var i=e.target.tagName.toUpperCase();if("BUTTON"===i||a.hasClass(e.target,"pswp__single-tap"))return void gn(e,t);ze(xn,n),yn=setTimeout(function(){gn(e,t),yn=null},300)}}}});var wn;Me("DesktopZoom",{publicMethods:{initDesktopZoom:function(){z||(Z?Ae("mouseUsed",function(){r.setupDesktopZoom()}):r.setupDesktopZoom(!0))},setupDesktopZoom:function(t){wn={};var n="wheel mousewheel DOMMouseScroll";Ae("bindEvents",function(){a.bind(e,n,r.handleMouseWheel)}),Ae("unbindEvents",function(){wn&&a.unbind(e,n,r.handleMouseWheel)}),r.mouseZoomedIn=!1;var i,o=function(){r.mouseZoomedIn&&(a.removeClass(e,"pswp--zoomed-in"),r.mouseZoomedIn=!1),1>g?a.addClass(e,"pswp--zoom-allowed"):a.removeClass(e,"pswp--zoom-allowed"),l()},l=function(){i&&(a.removeClass(e,"pswp--dragging"),i=!1)};Ae("resize",o),Ae("afterChange",o),Ae("pointerDown",function(){r.mouseZoomedIn&&(i=!0,a.addClass(e,"pswp--dragging"))}),Ae("pointerUp",l),t||o()},handleMouseWheel:function(e){if(g<=r.currItem.fitRatio)return u.modal&&(!u.closeOnScroll||Qe||V?e.preventDefault():k&&Math.abs(e.deltaY)>2&&(p=!0,r.close())),!0;if(e.stopPropagation(),wn.x=0,"deltaX"in e)1===e.deltaMode?(wn.x=18*e.deltaX,wn.y=18*e.deltaY):(wn.x=e.deltaX,wn.y=e.deltaY);else if("wheelDelta"in e)e.wheelDeltaX&&(wn.x=-.16*e.wheelDeltaX),e.wheelDeltaY?wn.y=-.16*e.wheelDeltaY:wn.y=-.16*e.wheelDelta;else{if(!("detail"in e))return;wn.y=e.detail}We(g,!0);var t=he.x-wn.x,n=he.y-wn.y;(u.modal||t<=ie.min.x&&t>=ie.max.x&&n<=ie.min.y&&n>=ie.max.y)&&e.preventDefault(),r.panTo(t,n)},toggleDesktopZoom:function(t){t=t||{x:ve.x/2+xe.x,y:ve.y/2+xe.y};var n=u.getDoubleTapZoom(!0,r.currItem),i=g===n;r.mouseZoomedIn=!i,r.zoomTo(i?r.currItem.initialZoomLevel:n,t,333),a[(i?"remove":"add")+"Class"](e,"pswp--zoomed-in")}}});var bn,In,Cn,Dn,Mn,Tn,Sn,An,En,On,kn,Rn,Zn={history:!0,galleryUID:1},Pn=function(){return kn.hash.substring(1)},Fn=function(){bn&&clearTimeout(bn),Cn&&clearTimeout(Cn)},Ln=function(){var e=Pn(),t={};if(e.length<5)return t;var n,i=e.split("&");for(n=0;n<i.length;n++)if(i[n]){var o=i[n].split("=");o.length<2||(t[o[0]]=o[1])}if(u.galleryPIDs){var a=t.pid;for(t.pid=0,n=0;n<$t.length;n++)if($t[n].pid===a){t.pid=n;break}}else t.pid=parseInt(t.pid,10)-1;return t.pid<0&&(t.pid=0),t},_n=function(){if(Cn&&clearTimeout(Cn),Qe||V)return void(Cn=setTimeout(_n,500));Dn?clearTimeout(In):Dn=!0;var e=m+1,t=en(m);t.hasOwnProperty("pid")&&(e=t.pid);var n=tn(m);Ee("pvCallback",n);var i=Sn+"&gid="+u.galleryUID+"&pid="+e+"&id="+n;An||-1===kn.hash.indexOf(i)&&(On=!0);var o=kn.href.split("#")[0]+"#"+i;Rn?"#"+i!==window.location.hash&&history[An?"replaceState":"pushState"]("",document.title,o):An?kn.replace(o):kn.hash=i,An=!0,In=setTimeout(function(){Dn=!1},60)};Me("History",{publicMethods:{initHistory:function(){if(a.extend(u,Zn,!0),u.history){kn=window.location,On=!1,En=!1,An=!1,Sn=Pn(),Rn="pushState"in history,Sn.indexOf("gid=")>-1&&(Sn=Sn.split("&gid=")[0],Sn=Sn.split("?gid=")[0]),Ae("afterChange",r.updateURL),Ae("unbindEvents",function(){a.unbind(window,"hashchange",r.onHashChange)});var e=function(){Tn=!0,En||(On?history.back():Sn?kn.hash=Sn:Rn?history.pushState("",document.title,kn.pathname+kn.search):kn.hash=""),Fn()};Ae("unbindEvents",function(){p&&e()}),Ae("destroy",function(){Tn||e()}),Ae("firstUpdate",function(){m=Ln().pid});var t=Sn.indexOf("pid=");t>-1&&(Sn=Sn.substring(0,t),"&"===Sn.slice(-1)&&(Sn=Sn.slice(0,-1))),setTimeout(function(){c&&a.bind(window,"hashchange",r.onHashChange)},40)}},onHashChange:function(){return Pn()===Sn?(En=!0,void r.close()):void(Dn||(Mn=!0,r.goTo(Ln().pid),Mn=!1))},updateURL:function(){Fn(),Mn||(An?bn=setTimeout(_n,800):_n())}}}),a.extend(r,ot)};return e});
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipeUI_Default=t()}(this,function(){"use strict";var e=function(e,t){var n,o,r,l,i,s,a,u,c,p,d,m,f,h,w,v,g,b,_,T=this,C=!1,I=!0,E=!0,F={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(e,t){return e.title?(t.children[0].innerHTML="<div>"+e.title+"</div>"+(e.content?"<div>"+e.content+"</div>":""),!0):(t.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,linkEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"分享到 Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"分享到 Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"分享到 Pinterest",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"}],getPageHref:function(){return e.currItem.href||""},getImageURLForShare:function(){return e.currItem.src||""},getPageURLForShare:function(){return e.currItem.href||window.location.href},getTextForShare:function(){return e.currItem.title||""},indexIndicatorSep:" / "},x=function(e){if(v)return!0;e=e||window.event,w.timeToIdle&&w.mouseUsed&&!c&&D();for(var n,o,r=e.target||e.srcElement,l=r.className,i=0;i<B.length;i++)n=B[i],n.onTap&&l.indexOf("pswp__"+n.name)>-1&&(n.onTap(),o=!0);if(o){e.stopPropagation&&e.stopPropagation(),v=!0;var s=t.features.isOldAndroid?600:30;g=setTimeout(function(){v=!1},s)}},k=function(){return!e.likelyTouchDevice||w.mouseUsed||screen.width>1200},S=function(e,n,o){t[(o?"add":"remove")+"Class"](e,"pswp__"+n)},K=function(){var e=1===w.getNumItemsFn();e!==h&&(S(o,"ui--one-slide",e),h=e)},L=function(){S(a,"share-modal--hidden",E)},O=function(){return E=!E,E?(t.removeClass(a,"pswp__share-modal--fade-in"),setTimeout(function(){E&&L()},300)):(L(),setTimeout(function(){E||t.addClass(a,"pswp__share-modal--fade-in")},30)),E||y(),!1},R=function(t){t=t||window.event;var n=t.target||t.srcElement;return e.shout("shareLinkClick",t,n),n.href?n.hasAttribute("download")?!0:(window.open(n.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),E||O(),!1):!1},y=function(){for(var e,t,n,o,r,l="",i=0;i<w.shareButtons.length;i++)e=w.shareButtons[i],n=w.getImageURLForShare(e),o=w.getPageURLForShare(e),r=w.getTextForShare(e),t=e.url.replace("{{url}}",encodeURIComponent(o)).replace("{{image_url}}",encodeURIComponent(n)).replace("{{raw_image_url}}",n).replace("{{text}}",encodeURIComponent(r)),l+='<a href="'+t+'" target="_blank" class="pswp__share--'+e.id+'"'+(e.download?"download":"")+">"+e.label+"</a>",w.parseShareButtonOut&&(l=w.parseShareButtonOut(e,l));a.children[0].innerHTML=l,a.children[0].onclick=R},z=function(e){for(var n=0;n<w.closeElClasses.length;n++)if(t.hasClass(e,"pswp__"+w.closeElClasses[n]))return!0},M=0,D=function(){clearTimeout(_),M=0,c&&T.setIdle(!1)},P=function(e){e=e?e:window.event;var t=e.relatedTarget||e.toElement;t&&"HTML"!==t.nodeName||(clearTimeout(_),_=setTimeout(function(){T.setIdle(!0)},w.timeToIdleOutside))},N=function(){w.fullscreenEl&&!t.features.isOldAndroid&&(n||(n=T.getFullscreenAPI()),n?(t.bind(document,n.eventK,T.updateFullscreen),T.updateFullscreen(),t.addClass(e.template,"pswp--supports-fs")):t.removeClass(e.template,"pswp--supports-fs"))},U=function(){w.preloaderEl&&(A(!0),p("beforeChange",function(){clearTimeout(f),f=setTimeout(function(){e.currItem&&e.currItem.loading?(!e.allowProgressiveImg()||e.currItem.img&&!e.currItem.img.naturalWidth)&&A(!1):A(!0)},w.loadingIndicatorDelay)}),p("imageLoadComplete",function(t,n){e.currItem===n&&A(!0)}))},A=function(e){m!==e&&(S(d,"preloader--active",!e),m=e)},H=function(e){var n=e.vGap;if(k()){var i=w.barsSize;if(w.captionEl&&"auto"===i.bottom)if(l||(l=t.createEl("pswp__caption pswp__caption--fake"),l.appendChild(t.createEl("pswp__caption__center")),o.insertBefore(l,r),t.addClass(o,"pswp__ui--fit")),w.addCaptionHTMLFn(e,l,!0)){var s=l.clientHeight;n.bottom=parseInt(s,10)||44}else n.bottom=i.top;else n.bottom="auto"===i.bottom?0:i.bottom;n.top=i.top}else n.top=n.bottom=0},Z=function(){w.timeToIdle&&p("mouseUsed",function(){t.bind(document,"mousemove",D),t.bind(document,"mouseout",P),b=setInterval(function(){M++,2===M&&T.setIdle(!0)},w.timeToIdle/2)})},q=function(){p("onVerticalDrag",function(e){I&&.95>e?T.hideControls():!I&&e>=.95&&T.showControls()});var e;p("onPinchClose",function(t){I&&.9>t?(T.hideControls(),e=!0):e&&!I&&t>.9&&T.showControls()}),p("zoomGestureEnded",function(){e=!1,e&&!I&&T.showControls()})},B=[{name:"caption",option:"captionEl",onInit:function(e){r=e}},{name:"share-modal",option:"shareEl",onInit:function(e){a=e},onTap:function(){O()}},{name:"button--share",option:"shareEl",onInit:function(e){s=e},onTap:function(){O()}},{name:"button--zoom",option:"zoomEl",onTap:e.toggleDesktopZoom},{name:"button--link",option:"linkEl",onTap:function(e){window.open(w.getPageHref(),"_blank")}},{name:"counter",option:"counterEl",onInit:function(e){i=e}},{name:"button--close",option:"closeEl",onTap:e.close},{name:"button--arrow--left",option:"arrowEl",onTap:e.prev},{name:"button--arrow--right",option:"arrowEl",onTap:e.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){n.isFullscreen()?n.exit():n.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(e){d=e}}],W=function(){var e,n,r,l=function(o){if(o)for(var l=o.length,i=0;l>i;i++){e=o[i],n=e.className;for(var s=0;s<B.length;s++)r=B[s],n.indexOf("pswp__"+r.name)>-1&&(w[r.option]?(t.removeClass(e,"pswp__element--disabled"),r.onInit&&r.onInit(e)):t.addClass(e,"pswp__element--disabled"))}};l(o.children);var i=t.getChildByClass(o,"pswp__top-bar");i&&l(i.children)};T.init=function(){t.extend(e.options,F,!0),w=e.options,o=t.getChildByClass(e.scrollWrap,"pswp__ui"),p=e.listen,q(),p("beforeChange",T.update),p("doubleTap",function(t){var n=e.currItem.initialZoomLevel;e.getZoomLevel()!==n?e.zoomTo(n,t,333):e.zoomTo(w.getDoubleTapZoom(!1,e.currItem),t,333)}),p("preventDragEvent",function(e,t,n){var o=e.target||e.srcElement;o&&o.className&&e.type.indexOf("mouse")>-1&&(o.className.indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(o.tagName))&&(n.prevent=!1)}),p("bindEvents",function(){t.bind(o,"pswpTap click",x),t.bind(e.scrollWrap,"pswpTap",T.onGlobalTap),e.likelyTouchDevice||t.bind(e.scrollWrap,"mouseover",T.onMouseOver)}),p("unbindEvents",function(){E||O(),b&&clearInterval(b),t.unbind(document,"mouseout",P),t.unbind(document,"mousemove",D),t.unbind(o,"pswpTap click",x),t.unbind(e.scrollWrap,"pswpTap",T.onGlobalTap),t.unbind(e.scrollWrap,"mouseover",T.onMouseOver),n&&(t.unbind(document,n.eventK,T.updateFullscreen),n.isFullscreen()&&(w.hideAnimationDuration=0,n.exit()),n=null)}),p("destroy",function(){w.captionEl&&(l&&o.removeChild(l),t.removeClass(r,"pswp__caption--empty")),a&&(a.children[0].onclick=null),t.removeClass(o,"pswp__ui--over-close"),t.addClass(o,"pswp__ui--hidden"),T.setIdle(!1)}),w.showAnimationDuration||t.removeClass(o,"pswp__ui--hidden"),p("initialZoomIn",function(){w.showAnimationDuration&&t.removeClass(o,"pswp__ui--hidden")}),p("initialZoomOut",function(){t.addClass(o,"pswp__ui--hidden")}),p("parseVerticalMargin",H),W(),w.shareEl&&s&&a&&(E=!0),K(),Z(),N(),U()},T.setIdle=function(e){c=e,S(o,"ui--idle",e)},T.update=function(){I&&e.currItem?(T.updateIndexIndicator(),w.captionEl&&(w.addCaptionHTMLFn(e.currItem,r),S(r,"caption--empty",!e.currItem.title)),C=!0):C=!1,E||O(),K()},T.updateFullscreen=function(o){o&&setTimeout(function(){e.setScrollOffset(0,t.getScrollY())},50),t[(n.isFullscreen()?"add":"remove")+"Class"](e.template,"pswp--fs")},T.updateIndexIndicator=function(){w.counterEl&&(i.innerHTML=e.getCurrentIndex()+1+w.indexIndicatorSep+w.getNumItemsFn())},T.onGlobalTap=function(n){n=n||window.event;var o=n.target||n.srcElement;if(!v)if(n.detail&&"mouse"===n.detail.pointerType){if(z(o))return void e.close();t.hasClass(o,"pswp__img")&&(1===e.getZoomLevel()&&e.getZoomLevel()<=e.currItem.fitRatio?w.clickToCloseNonZoomable&&e.close():e.toggleDesktopZoom(n.detail.releasePoint))}else if(w.tapToToggleControls&&(I?T.hideControls():T.showControls()),w.tapToClose&&(t.hasClass(o,"pswp__img")||z(o)))return void e.close()},T.onMouseOver=function(e){e=e||window.event;var t=e.target||e.srcElement;S(o,"ui--over-close",z(t))},T.hideControls=function(){t.addClass(o,"pswp__ui--hidden"),I=!1},T.showControls=function(){I=!0,C||T.update(),t.removeClass(o,"pswp__ui--hidden")},T.supportsFullscreen=function(){var e=document;return!!(e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen)},T.getFullscreenAPI=function(){var t,n=document.documentElement,o="fullscreenchange";return n.requestFullscreen?t={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:o}:n.mozRequestFullScreen?t={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+o}:n.webkitRequestFullscreen?t={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+o}:n.msRequestFullscreen&&(t={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),t&&(t.enter=function(){return u=w.closeOnScroll,w.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?e.template[this.enterK]():void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},t.exit=function(){return w.closeOnScroll=u,document[this.exitK]()},t.isFullscreen=function(){return document[this.elementK]}),t}};return e});
/*!
  Autosize 3.0.8
  license: MIT
  http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var o={exports:{}};t(o.exports,o),e.autosize=o.exports}}(this,function(e,t){"use strict";function o(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),u="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),i()}function o(t){var o=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=o,v=t,l&&(e.style.overflowY=t),n()}function n(){var t=window.pageYOffset,o=document.body.scrollTop,n=e.style.height;e.style.height="auto";var i=e.scrollHeight+u;return 0===e.scrollHeight?void(e.style.height=n):(e.style.height=i+"px",document.documentElement.scrollTop=t,void(document.body.scrollTop=o))}function i(){var t=e.style.height;n();var i=window.getComputedStyle(e,null);if(i.height!==e.style.height?"visible"!==v&&o("visible"):"hidden"!==v&&o("hidden"),t!==e.style.height){var r=document.createEvent("Event");r.initEvent("autosize:resized",!0,!1),e.dispatchEvent(r)}}var r=void 0===arguments[1]?{}:arguments[1],d=r.setOverflowX,s=void 0===d?!0:d,a=r.setOverflowY,l=void 0===a?!0:a;if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!e.hasAttribute("data-autosize-on")){var u=null,v="hidden",f=function(t){window.removeEventListener("resize",i),e.removeEventListener("input",i),e.removeEventListener("keyup",i),e.removeAttribute("data-autosize-on"),e.removeEventListener("autosize:destroy",f),Object.keys(t).forEach(function(o){e.style[o]=t[o]})}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",f),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",i),window.addEventListener("resize",i),e.addEventListener("input",i),e.addEventListener("autosize:update",i),e.setAttribute("data-autosize-on",!0),l&&(e.style.overflowY="hidden"),s&&(e.style.overflowX="hidden",e.style.wordWrap="break-word"),t()}}function n(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=document.createEvent("Event");t.initEvent("autosize:destroy",!0,!1),e.dispatchEvent(t)}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=document.createEvent("Event");t.initEvent("autosize:update",!0,!1),e.dispatchEvent(t)}}var r=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(r=function(e){return e},r.destroy=function(e){return e},r.update=function(e){return e}):(r=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return o(e,t)}),e},r.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],n),e},r.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),t.exports=r});

/*! jQuery UI - v1.12.0 - 2016-07-23
* http://jqueryui.com
* Includes: widget.js, data.js, scroll-parent.js, widgets/sortable.js, widgets/mouse.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){t.ui=t.ui||{},t.ui.version="1.12.0";var e=0,i=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var s,n,o=i.call(arguments,1),a=0,r=o.length;r>a;a++)for(s in o[a])n=o[a][s],o[a].hasOwnProperty(s)&&void 0!==n&&(e[s]=t.isPlainObject(n)?t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=i.call(arguments,1),l=this;return a?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new s(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var s=!1;t(document).on("mouseup",function(){s=!1}),t.widget("ui.mouse",{version:"1.12.0",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!s){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,n=1===e.which,o="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return n&&!o&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),s=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,s=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.0",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,l=r+t.height,h=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+h>r&&l>s+h,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&l>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=s&&n;return o?(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1)):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],l=[],h=this._connectWith();if(h&&e)for(s=h.length-1;s>=0;s--)for(o=t(h[s],this.document[0]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&l.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(l.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=l.length-1;s>=0;s--)l[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,l,h,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i],this.document[0]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,h=r.length;h>s;s++)l=t(r[s]),l.data(this.widgetName+"-item",a),c.push({item:l,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(n)):"tr"===s?e._createTrPlaceholder(e.currentItem,n):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var s=this;e.children().each(function(){t("<td>&#160;</td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,s,n,o,a,r,l,h,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,c=d.floating||this._isFloating(this.currentItem),a=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(l=this.items[s].item.offset()[a],h=!1,e[u]-l>this.items[s][r]/2&&(h=!0),n>Math.abs(e[u]-l)&&(n=Math.abs(e[u]-l),o=this.items[s],this.direction=h?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=/(html|body)/i.test(r[0].tagName);
return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():l?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():l?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})});

/*! sprintf-js v1.0.3 | Copyright (c) 2007-present, Alexandru Marasteanu <hello@alexei.ro> | BSD-3-Clause */
!function(e){"use strict";function t(){var e=arguments[0],r=t.cache;return r[e]&&r.hasOwnProperty(e)||(r[e]=t.parse(e)),t.format.call(null,r[e],arguments)}function r(e){return"number"==typeof e?"number":"string"==typeof e?"string":Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function n(e,t){return t>=0&&7>=t&&i[e]?i[e][t]:Array(t+1).join(e)}var s={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/bcdiefguxX/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/};t.format=function(e,a){var i,o,l,c,p,f,u,g=1,_=e.length,d="",b=[],h=!0,x="";for(o=0;_>o;o++)if(d=r(e[o]),"string"===d)b[b.length]=e[o];else if("array"===d){if(c=e[o],c[2])for(i=a[g],l=0;l<c[2].length;l++){if(!i.hasOwnProperty(c[2][l]))throw new Error(t('[sprintf] property "%s" does not exist',c[2][l]));i=i[c[2][l]]}else i=c[1]?a[c[1]]:a[g++];if(s.not_type.test(c[8])&&s.not_primitive.test(c[8])&&"function"==r(i)&&(i=i()),s.numeric_arg.test(c[8])&&"number"!=r(i)&&isNaN(i))throw new TypeError(t("[sprintf] expecting number but found %s",r(i)));switch(s.number.test(c[8])&&(h=i>=0),c[8]){case"b":i=parseInt(i,10).toString(2);break;case"c":i=String.fromCharCode(parseInt(i,10));break;case"d":case"i":i=parseInt(i,10);break;case"j":i=JSON.stringify(i,null,c[6]?parseInt(c[6]):0);break;case"e":i=c[7]?parseFloat(i).toExponential(c[7]):parseFloat(i).toExponential();break;case"f":i=c[7]?parseFloat(i).toFixed(c[7]):parseFloat(i);break;case"g":i=c[7]?parseFloat(i).toPrecision(c[7]):parseFloat(i);break;case"o":i=i.toString(8);break;case"s":i=String(i),i=c[7]?i.substring(0,c[7]):i;break;case"t":i=String(!!i),i=c[7]?i.substring(0,c[7]):i;break;case"T":i=r(i),i=c[7]?i.substring(0,c[7]):i;break;case"u":i=parseInt(i,10)>>>0;break;case"v":i=i.valueOf(),i=c[7]?i.substring(0,c[7]):i;break;case"x":i=parseInt(i,10).toString(16);break;case"X":i=parseInt(i,10).toString(16).toUpperCase()}s.json.test(c[8])?b[b.length]=i:(!s.number.test(c[8])||h&&!c[3]?x="":(x=h?"+":"-",i=i.toString().replace(s.sign,"")),f=c[4]?"0"===c[4]?"0":c[4].charAt(1):" ",u=c[6]-(x+i).length,p=c[6]&&u>0?n(f,u):"",b[b.length]=c[5]?x+i+p:"0"===f?x+p+i:p+x+i)}return b.join("")},t.cache={},t.parse=function(e){for(var t=e,r=[],n=[],a=0;t;){if(null!==(r=s.text.exec(t)))n[n.length]=r[0];else if(null!==(r=s.modulo.exec(t)))n[n.length]="%";else{if(null===(r=s.placeholder.exec(t)))throw new SyntaxError("[sprintf] unexpected placeholder");if(r[2]){a|=1;var i=[],o=r[2],l=[];if(null===(l=s.key.exec(o)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(i[i.length]=l[1];""!==(o=o.substring(l[0].length));)if(null!==(l=s.key_access.exec(o)))i[i.length]=l[1];else{if(null===(l=s.index_access.exec(o)))throw new SyntaxError("[sprintf] failed to parse named argument key");i[i.length]=l[1]}r[2]=i}else a|=2;if(3===a)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n[n.length]=r}t=t.substring(r[0].length)}return n};var a=function(e,r,n){return n=(r||[]).slice(0),n.splice(0,0,e),t.apply(null,n)},i={0:["","0","00","000","0000","00000","000000","0000000"]," ":[""," ","  ","   ","    ","     ","      ","       "],_:["","_","__","___","____","_____","______","_______"]};"undefined"!=typeof exports?(exports.sprintf=t,exports.vsprintf=a):(e.sprintf=t,e.vsprintf=a,"function"==typeof define&&define.amd&&define(function(){return{sprintf:t,vsprintf:a}}))}("undefined"==typeof window?this:window);
//# sourceMappingURL=sprintf.min.js.map

/*!
 * Masonry PACKAGED v3.1.2
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

(function(t){"use strict";function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define(function(){return e}):t.getStyleProperty=e})(window),function(t){"use strict";function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var n=s[e];t[n]=0}return t}function n(t){function n(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var n=r(t);if("none"===n.display)return i();var h={};h.width=t.offsetWidth,h.height=t.offsetHeight;for(var p=h.isBorderBox=!(!a||!n[a]||"border-box"!==n[a]),u=0,f=s.length;f>u;u++){var c=s[u],d=n[c],l=parseFloat(d);h[c]=isNaN(l)?0:l}var m=h.paddingLeft+h.paddingRight,y=h.paddingTop+h.paddingBottom,g=h.marginLeft+h.marginRight,v=h.marginTop+h.marginBottom,_=h.borderLeftWidth+h.borderRightWidth,b=h.borderTopWidth+h.borderBottomWidth,E=p&&o,L=e(n.width);L!==!1&&(h.width=L+(E?0:m+_));var T=e(n.height);return T!==!1&&(h.height=T+(E?0:y+b)),h.innerWidth=h.width-(m+_),h.innerHeight=h.height-(y+b),h.outerWidth=h.width+g,h.outerHeight=h.height+v,h}}var o,a=t("boxSizing");return function(){if(a){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[a]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var n=r(t);o=200===e(n.width),i.removeChild(t)}}(),n}var o=document.defaultView,r=o&&o.getComputedStyle?function(t){return o.getComputedStyle(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define(["get-style-property/get-style-property"],n):t.getSize=n(t.getStyleProperty)}(window),function(t){"use strict";var e=document.documentElement,i=function(){};e.addEventListener?i=function(t,e,i){t.addEventListener(e,i,!1)}:e.attachEvent&&(i=function(e,i,n){e[i+n]=n.handleEvent?function(){var e=t.event;e.target=e.target||e.srcElement,n.handleEvent.call(n,e)}:function(){var i=t.event;i.target=i.target||i.srcElement,n.call(e,i)},e.attachEvent("on"+i,e[i+n])});var n=function(){};e.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:e.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var o={bind:i,unbind:n};"function"==typeof define&&define.amd?define(o):t.eventie=o}(this),function(t){"use strict";function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==o.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var n=0,s=r.length;s>n;n++){var a=r[n];a()}}}function n(n){return n.bind(o,"DOMContentLoaded",i),n.bind(o,"readystatechange",i),n.bind(t,"load",i),e}var o=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define(["eventie/eventie"],n)):t.docReady=n(t.eventie)}(this),function(){"use strict";function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype;n.getListeners=function(t){var e,i,n=this._getEvents();if("object"==typeof t){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,o=this.getListenersAsObject(t),r="object"==typeof i;for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(r?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&(n=e(r[o],i),-1!==n&&r[o].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if("object"===i)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.emitEvent=function(t,e){var i,n,o,r,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)i=s[o][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){"use strict";function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,i){t.fn[e]=function(o){if("string"==typeof o){for(var s=n.call(arguments,1),a=0,h=this.length;h>a;a++){var p=this[a],u=t.data(p,e);if(u)if(t.isFunction(u[o])&&"_"!==o.charAt(0)){var f=u[o].apply(u,s);if(void 0!==f)return f}else r("no such method '"+o+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+o+"'")}return this}return this.each(function(){var n=t.data(this,e);n?(n.option(o),n._init()):(n=new i(this,o),t.data(this,e,n))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};t.bridget=function(t,e){i(e),o(t,e)}}}var n=Array.prototype.slice;"function"==typeof define&&define.amd?define(["jquery"],i):i(t.jQuery)}(window),function(t,e){"use strict";function i(t,e){return t[a](e)}function n(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function o(t,e){n(t);for(var i=t.parentNode.querySelectorAll(e),o=0,r=i.length;r>o;o++)if(i[o]===t)return!0;return!1}function r(t,e){return n(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,n=t.length;n>i;i++){var o=t[i],r=o+"MatchesSelector";if(e[r])return r}}();if(a){var h=document.createElement("div"),p=i(h,"div");s=p?i:r}else s=o;"function"==typeof define&&define.amd?define(function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){"use strict";function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function o(t,o,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var h=r("transition"),p=r("transform"),u=h&&p,f=!!r("perspective"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[h],d=["transform","transition","transitionDuration","transitionProperty"],l=function(){for(var t={},e=0,i=d.length;i>e;e++){var n=d[e],o=r(n);o&&o!==n&&(t[n]=o)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transition={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=o(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var n=l[i]||i;e[n]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,n=e.isOriginTop,o=parseInt(t[i?"left":"right"],10),r=parseInt(t[n?"top":"bottom"],10);o=isNaN(o)?0:o,r=isNaN(r)?0:r;var a=this.layout.size;o-=i?a.paddingLeft:a.paddingRight,r-=n?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var m=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,h=e-n,p={},u=this.layout.options;a=u.isOriginLeft?a:-a,h=u.isOriginTop?h:-h,p.transform=m(a,h),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=u?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transition;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var y=p&&n(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:y,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(c,this,!1))},a.prototype.transition=a.prototype[h?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transition,n=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!h||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=document.defaultView,s=r&&r.getComputedStyle?function(t){return r.getComputedStyle(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],o):(t.Outlayer={},t.Outlayer.Item=o(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){"use strict";function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function n(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var n=0,o=t.length;o>n;n++)e.push(t[n]);else e.push(t);return e}function o(t,e){var i=d(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,d,l,m){function y(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!c(t))return h&&h.error("Bad "+this.settings.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.options),this.option(i);var n=++v;this.element.outlayerGUID=n,_[n]=this,this._create(),this.options.isInitLayout&&this.layout()}function g(t,i){t.prototype[i]=e({},y.prototype[i])}var v=0,_={};return y.prototype.settings={namespace:"outlayer",item:m},y.prototype.options={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(y.prototype,f.prototype),y.prototype.option=function(t){e(this.options,t)},y.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},y.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},y.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.settings.item,n=[],o=0,r=e.length;r>o;o++){var s=e[o],a=new i(s,this);n.push(a)}return n},y.prototype._filterFindItemElements=function(t){t=n(t);for(var e=this.options.itemSelector,i=[],o=0,r=t.length;r>o;o++){var s=t[o];if(c(s))if(e){l(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),h=0,p=a.length;p>h;h++)i.push(a[h])}else i.push(s)}return i},y.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},y.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},y.prototype._init=y.prototype.layout,y.prototype._resetLayout=function(){this.getSize()},y.prototype.getSize=function(){this.size=d(this.element)},y.prototype._getMeasurement=function(t,e){var i,n=this.options[t];n?("string"==typeof n?i=this.element.querySelector(n):c(n)&&(i=n),this[t]=i?d(i)[e]:n):this[t]=0},y.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},y.prototype._getItemsForLayout=function(t){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i];o.isIgnored||e.push(o)}return e},y.prototype._layoutItems=function(t,e){if(!t||!t.length)return this.emitEvent("layoutComplete",[this,t]),void 0;this._itemsOn(t,"layout",function(){this.emitEvent("layoutComplete",[this,t])});for(var i=[],n=0,o=t.length;o>n;n++){var r=t[n],s=this._getItemLayoutPosition(r);s.item=r,s.isInstant=e,i.push(s)}this._processLayoutQueue(i)},y.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},y.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];this._positionItem(n.item,n.x,n.y,n.isInstant)}},y.prototype._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},y.prototype._postLayout=function(){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))},y.prototype._getContainerSize=u,y.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},y.prototype._itemsOn=function(t,e,i){function n(){return o++,o===r&&i.call(s),!0}for(var o=0,r=t.length,s=this,a=0,h=t.length;h>a;a++){var p=t[a];p.on(e,n)}},y.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},y.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},y.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var n=t[e];this.ignore(n)}}},y.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var n=t[e];o(n,this.stamps),this.unignore(n)}},y.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n(t)):void 0},y.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},y.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},y.prototype._manageStamp=u,y.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=d(t),o={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return o},y.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},y.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},y.prototype.unbindResize=function(){i.unbind(t,"resize",this),this.isResizeBound=!1},y.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},y.prototype.resize=function(){var t=d(this.element),e=this.size&&t;e&&t.innerWidth===this.size.innerWidth||this.layout()},y.prototype.addItems=function(t){var e=this._itemize(t);if(e.length)return this.items=this.items.concat(e),e},y.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},y.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},y.prototype.reveal=function(t){if(t&&t.length)for(var e=0,i=t.length;i>e;e++){var n=t[e];n.reveal()}},y.prototype.hide=function(t){if(t&&t.length)for(var e=0,i=t.length;i>e;e++){var n=t[e];n.hide()}},y.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];if(n.element===t)return n}},y.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],r=this.getItem(o);r&&e.push(r)}return e}},y.prototype.remove=function(t){t=n(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),o(s,this.items)}}},y.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];n.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.settings.namespace)},y.data=function(t){var e=t&&t.outlayerGUID;return e&&_[e]},y.create=function(t,i){function n(){y.apply(this,arguments)}return e(n.prototype,y.prototype),g(n,"options"),g(n,"settings"),e(n.prototype.options,i),n.prototype.settings.namespace=t,n.data=y.data,n.Item=function(){m.apply(this,arguments)},n.Item.prototype=new m,n.prototype.settings.item=n.Item,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),o="data-"+e+"-options",s=0,u=i.length;u>s;s++){var f,c=i[s],d=c.getAttribute(o);try{f=d&&JSON.parse(d)}catch(l){h&&h.error("Error parsing "+o+" on "+c.nodeName.toLowerCase()+(c.id?"#"+c.id:"")+": "+l);continue}var m=new n(c,f);p&&p.data(c,t,m)}}),p&&p.bridget&&p.bridget(t,n),n},y.Item=m,y}var a=t.document,h=t.console,p=t.jQuery,u=function(){},f=Object.prototype.toString,c="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},d=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){"use strict";function e(t,e){var n=t.create("masonry");return n.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},n.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},n.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n.prototype._getItemLayoutPosition=function(t){t.getSize();var e=Math.ceil(t.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var n=this._getColGroup(e),o=Math.min.apply(Math,n),r=i(n,o),s={x:this.columnWidth*r,y:o},a=o+t.size.outerHeight,h=this.cols+1-n.length,p=0;h>p;p++)this.colYs[r+p]=a;return s},n.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},n.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this.options.isOriginLeft?n.left:n.right,r=o+i.outerWidth,s=Math.floor(o/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a=Math.min(this.cols-1,a);for(var h=(this.options.isOriginTop?n.top:n.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(h,this.colYs[p])},n.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},n.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.prototype.resize=function(){var t=this.containerWidth;this.getContainerWidth(),t!==this.containerWidth&&this.layout()},n}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++){var o=t[i];if(o===e)return i}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window);


Array.prototype.column = function (k) { return this.map (function (t) { return k ? eval ("t." + k) : t; }); };
Array.prototype.diff = function (a, k) { return this.filter (function (i) { return a.column (k).indexOf (eval ("i." + k)) < 0; }); };
Array.prototype.max = function (k) { return Math.max.apply (null, this.column (k)); };
Array.prototype.min = function (k) { return Math.min.apply (null, this.column (k)); };

function getStorage (key) { return ((typeof (Storage) !== 'undefined') && (value = localStorage.getItem (key)) && (value = JSON.parse (value))) ? value : undefined; }
function setStorage (key, data) { try { if (typeof (Storage) !== 'undefined') { localStorage.setItem (key, JSON.stringify (data)); return true; } return false; } catch (err) { console.error ('Set storage failure.', error); return false; } }
/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

( function() {
  var pxUnit = CKEDITOR.tools.cssLength,
    needsIEHacks = CKEDITOR.env.ie && ( CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks );

  function getWidth( el ) {
    return CKEDITOR.env.ie ? el.$.clientWidth : parseInt( el.getComputedStyle( 'width' ), 10 );
  }

  function getBorderWidth( element, side ) {
    var computed = element.getComputedStyle( 'border-' + side + '-width' ),
      borderMap = {
        thin: '0px',
        medium: '1px',
        thick: '2px'
      };

    if ( computed.indexOf( 'px' ) < 0 ) {
      // look up keywords
      if ( computed in borderMap && element.getComputedStyle( 'border-style' ) != 'none' )
        computed = borderMap[ computed ];
      else
        computed = 0;
    }

    return parseInt( computed, 10 );
  }

  // Gets the table row that contains the most columns.
  function getMasterPillarRow( table ) {
    var $rows = table.$.rows,
      maxCells = 0,
      cellsCount, $elected, $tr;

    for ( var i = 0, len = $rows.length; i < len; i++ ) {
      $tr = $rows[ i ];
      cellsCount = $tr.cells.length;

      if ( cellsCount > maxCells ) {
        maxCells = cellsCount;
        $elected = $tr;
      }
    }

    return $elected;
  }

  function buildTableColumnPillars( table ) {
    var pillars = [],
      pillarIndex = -1,
      pillarHeight = 0,
      pillarPosition = null,
      rtl = ( table.getComputedStyle( 'direction' ) == 'rtl' );

    // Get the raw row element that contains the most columns.
    var $tr = getMasterPillarRow( table );

    // Sets pillar height and position based on given table element (head, body, footer).
    function setPillarDimensions( nativeTableElement ) {
      if ( nativeTableElement ) {
        var tableElement = new CKEDITOR.dom.element( nativeTableElement );
        pillarHeight += tableElement.$.offsetHeight;

        if ( !pillarPosition ) {
          pillarPosition = tableElement.getDocumentPosition();
        }
      }
    }

    // Table may contain only one of thead, tbody or tfoot elements so its existence should be checked (#417).
    setPillarDimensions( table.$.tHead );
    setPillarDimensions( table.$.tBodies[ 0 ] );
    setPillarDimensions( table.$.tFoot );

    if ( $tr ) {
      // Loop thorugh all cells, building pillars after each one of them.
      for ( var i = 0, len = $tr.cells.length; i < len; i++ ) {
        // Both the current cell and the successive one will be used in the
        // pillar size calculation.
        var td = new CKEDITOR.dom.element( $tr.cells[ i ] ),
          nextTd = $tr.cells[ i + 1 ] && new CKEDITOR.dom.element( $tr.cells[ i + 1 ] );

        pillarIndex += td.$.colSpan || 1;

        // Calculate the pillar boundary positions.
        var pillarLeft, pillarRight, pillarWidth;

        var x = td.getDocumentPosition().x;

        // Calculate positions based on the current cell.
        rtl ? pillarRight = x + getBorderWidth( td, 'left' ) : pillarLeft = x + td.$.offsetWidth - getBorderWidth( td, 'right' );

        // Calculate positions based on the next cell, if available.
        if ( nextTd ) {
          x = nextTd.getDocumentPosition().x;

          rtl ? pillarLeft = x + nextTd.$.offsetWidth - getBorderWidth( nextTd, 'right' ) : pillarRight = x + getBorderWidth( nextTd, 'left' );
        }
        // Otherwise calculate positions based on the table (for last cell).
        else {
          x = table.getDocumentPosition().x;

          rtl ? pillarLeft = x : pillarRight = x + table.$.offsetWidth;
        }

        pillarWidth = Math.max( pillarRight - pillarLeft, 3 );

        // The pillar should reflects exactly the shape of the hovered
        // column border line.
        pillars.push( {
          table: table,
          index: pillarIndex,
          x: pillarLeft,
          y: pillarPosition.y,
          width: pillarWidth,
          height: pillarHeight,
          rtl: rtl
        } );
      }
    }

    return pillars;
  }

  function getPillarAtPosition( pillars, positionX ) {
    for ( var i = 0, len = pillars.length; i < len; i++ ) {
      var pillar = pillars[ i ];

      if ( positionX >= pillar.x && positionX <= ( pillar.x + pillar.width ) )
        return pillar;
    }

    return null;
  }

  function cancel( evt ) {
    ( evt.data || evt ).preventDefault();
  }

  function columnResizer( editor ) {
    var pillar, document, resizer, isResizing, startOffset, currentShift, move;

    var leftSideCells, rightSideCells, leftShiftBoundary, rightShiftBoundary;

    function detach() {
      pillar = null;
      currentShift = 0;
      isResizing = 0;

      document.removeListener( 'mouseup', onMouseUp );
      resizer.removeListener( 'mousedown', onMouseDown );
      resizer.removeListener( 'mousemove', onMouseMove );

      document.getBody().setStyle( 'cursor', 'auto' );

      // Hide the resizer (remove it on IE7 - http://dev.ckeditor.com/ticket/5890).
      needsIEHacks ? resizer.remove() : resizer.hide();
    }

    function resizeStart() {
      // Before starting to resize, figure out which cells to change
      // and the boundaries of this resizing shift.

      var columnIndex = pillar.index,
        map = CKEDITOR.tools.buildTableMap( pillar.table ),
        leftColumnCells = [],
        rightColumnCells = [],
        leftMinSize = Number.MAX_VALUE,
        rightMinSize = leftMinSize,
        rtl = pillar.rtl;

      for ( var i = 0, len = map.length; i < len; i++ ) {
        var row = map[ i ],
          leftCell = row[ columnIndex + ( rtl ? 1 : 0 ) ],
          rightCell = row[ columnIndex + ( rtl ? 0 : 1 ) ];

        leftCell = leftCell && new CKEDITOR.dom.element( leftCell );
        rightCell = rightCell && new CKEDITOR.dom.element( rightCell );

        if ( !leftCell || !rightCell || !leftCell.equals( rightCell ) ) {
          leftCell && ( leftMinSize = Math.min( leftMinSize, getWidth( leftCell ) ) );
          rightCell && ( rightMinSize = Math.min( rightMinSize, getWidth( rightCell ) ) );

          leftColumnCells.push( leftCell );
          rightColumnCells.push( rightCell );
        }
      }

      // Cache the list of cells to be resized.
      leftSideCells = leftColumnCells;
      rightSideCells = rightColumnCells;

      // Cache the resize limit boundaries.
      leftShiftBoundary = pillar.x - leftMinSize;
      rightShiftBoundary = pillar.x + rightMinSize;

      resizer.setOpacity( 0.5 );
      startOffset = parseInt( resizer.getStyle( 'left' ), 10 );
      currentShift = 0;
      isResizing = 1;

      resizer.on( 'mousemove', onMouseMove );

      // Prevent the native drag behavior otherwise 'mousemove' won't fire.
      document.on( 'dragstart', cancel );
    }

    function resizeEnd() {
      isResizing = 0;

      resizer.setOpacity( 0 );

      currentShift && resizeColumn();

      var table = pillar.table;
      setTimeout( function() {
        table.removeCustomData( '_cke_table_pillars' );
      }, 0 );

      document.removeListener( 'dragstart', cancel );
    }

    function resizeColumn() {
      var rtl = pillar.rtl,
        cellsCount = rtl ? rightSideCells.length : leftSideCells.length,
        cellsSaved = 0;

      // Perform the actual resize to table cells, only for those by side of the pillar.
      for ( var i = 0; i < cellsCount; i++ ) {
        var leftCell = leftSideCells[ i ],
          rightCell = rightSideCells[ i ],
          table = pillar.table;

        // Defer the resizing to avoid any interference among cells.
        CKEDITOR.tools.setTimeout( function( leftCell, leftOldWidth, rightCell, rightOldWidth, tableWidth, sizeShift ) {
          // 1px is the minimum valid width (http://dev.ckeditor.com/ticket/11626).
          leftCell && leftCell.setStyle( 'width', pxUnit( Math.max( leftOldWidth + sizeShift, 1 ) ) );
          rightCell && rightCell.setStyle( 'width', pxUnit( Math.max( rightOldWidth - sizeShift, 1 ) ) );

          // If we're in the last cell, we need to resize the table as well
          if ( tableWidth )
            table.setStyle( 'width', pxUnit( tableWidth + sizeShift * ( rtl ? -1 : 1 ) ) );

          // Cells resizing is asynchronous-y, so we have to use syncing
          // to save snapshot only after all cells are resized. (http://dev.ckeditor.com/ticket/13388)
          if ( ++cellsSaved == cellsCount ) {
            editor.fire( 'saveSnapshot' );
          }
        }, 0, this, [
          leftCell, leftCell && getWidth( leftCell ),
          rightCell, rightCell && getWidth( rightCell ),
          ( !leftCell || !rightCell ) && ( getWidth( table ) + getBorderWidth( table, 'left' ) + getBorderWidth( table, 'right' ) ),
          currentShift
        ] );
      }
    }

    function onMouseDown( evt ) {
      cancel( evt );

      // Save editor's state before we do any magic with cells. (http://dev.ckeditor.com/ticket/13388)
      editor.fire( 'saveSnapshot' );
      resizeStart();

      document.on( 'mouseup', onMouseUp, this );
    }

    function onMouseUp( evt ) {
      evt.removeListener();

      resizeEnd();
    }

    function onMouseMove( evt ) {
      move( evt.data.getPageOffset().x );
    }

    document = editor.document;

    resizer = CKEDITOR.dom.element.createFromHtml( '<div data-cke-temp=1 contenteditable=false unselectable=on ' +
      'style="position:absolute;cursor:col-resize;filter:alpha(opacity=0);opacity:0;' +
        'padding:0;background-color:#004;background-image:none;border:0px none;z-index:10"></div>', document );

    // Clean DOM when editor is destroyed.
    editor.on( 'destroy', function() {
      resizer.remove();
    } );

    // Except on IE6/7 (http://dev.ckeditor.com/ticket/5890), place the resizer after body to prevent it
    // from being editable.
    if ( !needsIEHacks )
      document.getDocumentElement().append( resizer );

    this.attachTo = function( targetPillar ) {
      // Accept only one pillar at a time.
      if ( isResizing )
        return;

      // On IE6/7, we append the resizer everytime we need it. (http://dev.ckeditor.com/ticket/5890)
      if ( needsIEHacks ) {
        document.getBody().append( resizer );
        currentShift = 0;
      }

      pillar = targetPillar;

      resizer.setStyles( {
        width: pxUnit( targetPillar.width ),
        height: pxUnit( targetPillar.height ),
        left: pxUnit( targetPillar.x ),
        top: pxUnit( targetPillar.y )
      } );

      // In IE6/7, it's not possible to have custom cursors for floating
      // elements in an editable document. Show the resizer in that case,
      // to give the user a visual clue.
      needsIEHacks && resizer.setOpacity( 0.25 );

      resizer.on( 'mousedown', onMouseDown, this );

      document.getBody().setStyle( 'cursor', 'col-resize' );

      // Display the resizer to receive events but don't show it,
      // only change the cursor to resizable shape.
      resizer.show();
    };

    move = this.move = function( posX ) {
        if ( !pillar )
          return 0;

        if ( !isResizing && ( posX < pillar.x || posX > ( pillar.x + pillar.width ) ) ) {
          detach();
          return 0;
        }

        var resizerNewPosition = posX - Math.round( resizer.$.offsetWidth / 2 );

        if ( isResizing ) {
          if ( resizerNewPosition == leftShiftBoundary || resizerNewPosition == rightShiftBoundary )
            return 1;

          resizerNewPosition = Math.max( resizerNewPosition, leftShiftBoundary );
          resizerNewPosition = Math.min( resizerNewPosition, rightShiftBoundary );

          currentShift = resizerNewPosition - startOffset;
        }

        resizer.setStyle( 'left', pxUnit( resizerNewPosition ) );

        return 1;
      };
  }

  function clearPillarsCache( evt ) {
    var target = evt.data.getTarget();

    if ( evt.name == 'mouseout' ) {
      // Bypass interal mouse move.
      if ( !target.is( 'table' ) )
        return;

      var dest = new CKEDITOR.dom.element( evt.data.$.relatedTarget || evt.data.$.toElement );
      while ( dest && dest.$ && !dest.equals( target ) && !dest.is( 'body' ) )
        dest = dest.getParent();
      if ( !dest || dest.equals( target ) )
        return;
    }

    target.getAscendant( 'table', 1 ).removeCustomData( '_cke_table_pillars' );
    evt.removeListener();
  }
  CKEDITOR.plugins.add( 'tableresize', {
    requires: 'tabletools',

    init: function( editor ) {
      editor.on( 'contentDom', function() {
        var resizer,
          editable = editor.editable();

        // In Classic editor it is better to use document
        // instead of editable so event will work below body.
        editable.attachListener( editable.isInline() ? editable : editor.document, 'mousemove', function( evt ) {
          evt = evt.data;

          var target = evt.getTarget();

          // FF may return document and IE8 some UFO (object with no nodeType property...)
          // instead of an element (http://dev.ckeditor.com/ticket/11823).
          if ( target.type != CKEDITOR.NODE_ELEMENT )
            return;

          var pageX = evt.getPageOffset().x;

          // If we're already attached to a pillar, simply move the
          // resizer.
          if ( resizer && resizer.move( pageX ) ) {
            cancel( evt );
            return;
          }

          // Considering table, tr, td, tbody, thead, tfoot but nothing else.
          var table, pillars;

          if ( !target.is( 'table' ) && !target.getAscendant( { thead: 1, tbody: 1, tfoot: 1 }, 1 ) ) {
            return;
          }

          table = target.getAscendant( 'table', 1 );

          // Make sure the table we found is inside the container
          // (eg. we should not use tables the editor is embedded within)
          if ( !editor.editable().contains( table ) ) {
            return;
          }

          if ( !( pillars = table.getCustomData( '_cke_table_pillars' ) ) ) {
            // Cache table pillars calculation result.
            table.setCustomData( '_cke_table_pillars', ( pillars = buildTableColumnPillars( table ) ) );
            table.on( 'mouseout', clearPillarsCache );
            table.on( 'mousedown', clearPillarsCache );
          }

          var pillar = getPillarAtPosition( pillars, pageX );
          if ( pillar ) {
            !resizer && ( resizer = new columnResizer( editor ) );
            resizer.attachTo( pillar );
          }
        } );
      } );
    }
  } );

} )();

$(function () {
  // CKEDITOR.replace( 'editor1', {
  //   extraPlugins: 'tableresize'
  // });

  $('._i').imgLiquid ({ verticalAlign:'center' });
  $('._it').imgLiquid ({ verticalAlign:'top' });

  window.vars = {};
  window.funs = {};

  window.vars.$body = $('body');
  window.funs.ajaxError = function (result) { console.error (result.responseText); };
  
  window.vars.apis = {
    ckeditor: {
      apis: {
        images: {
          upload: '/admin/ckeditor/image_upload/',
          browser: '/admin/ckeditor/image_browser/',
        }
      },
      postImage: function () { return this.apis.images.upload ; },
      getImages: function () { return this.apis.images.browser ; },
    },
    scheduleTags: {
      apis: {
        list: '/api/schedule-tags/',
      },
      getList: function () { return this.apis.list; }
    },
    schedules: {
      apis: {
        list: '/api/schedules/',
        create: '/api/schedules/',
        update: '/api/schedules/%d/',
        delete: '/api/schedules/%d/',
        sort: '/api/schedules/sort/',
      },
      getList: function () { return this.apis.list; },
      postItem: function () { return this.apis.create; },
      putItem: function (id) { return sprintf (this.apis.update, id); },
      deleteItem: function (id) { return sprintf (this.apis.delete, id); },
      postSort: function () { return this.apis.sort; }
    }
  }

  window.funs.storage = {};
  window.funs.storage.minMenu = {
    storageKey: 'zeus.menu.min',
    isMin: function (val) {
      if (typeof val !== 'undefined') setStorage (this.storageKey, val);
      var tmp = getStorage (this.storageKey);
      return tmp ? tmp : false;
    },
  };

  autosize ($('.autosize'));

  window.funs.initPhotoSwipeFromDOM = function (gallerySelector, fnx) {
    var openPhotoSwipe = function (index, $pswp, $obj, disableAnimation, fromURL) {
      if (isNaN (index)) return;

      var items = $obj.get (0).$objs.map (function () {
        var $img = $(this).find ('img'), $figcaption = $(this).find ('figcaption');
          return {
            w: $img.get (0).width,
            h: $img.get (0).height,
            src: $img.attr ('src'),
            href: $(this).attr ('href'),
            title: $figcaption.html (),
            content: $figcaption.data ('description'),
            el: $(this).get (0),
          };
        }).toArray (), options = {
          showHideOpacity: true,
          galleryUID: $obj.data ('pswp-uid'),
          showAnimationDuration: disableAnimation ? 0 : 500,
          index: parseInt (index, 10) - (fromURL ? 1 : 0),
          getThumbBoundsFn: function (index) {
            var pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                rect = items[index].el.getBoundingClientRect ();

            return {
              x:rect.left,
              y:rect.top + pageYScroll,
              w:rect.width
            };
          }
        }, gallery = new PhotoSwipe ($pswp.get (0), PhotoSwipeUI_Default, items, options, $obj.get (0).$objs.map (function () {
          return 0;// $(this).data ('id');
        }));

      gallery.init (function (id) {});

      $pswp.get (0).$conter.width (Math.floor (gallery.currItem.w * gallery.currItem.fitRatio) - 20);
      gallery.listen ('beforeChange', function() { $pswp.get (0).$conter.removeClass ('show'); $pswp.get (0).$conter.width (Math.floor (gallery.currItem.w * gallery.currItem.fitRatio - 20)); });
      gallery.listen ('afterChange', function() { $pswp.get (0).$conter.addClass ('show'); });
      gallery.listen ('resize', function() { $pswp.get (0).$conter.width (Math.floor (gallery.currItem.w * gallery.currItem.fitRatio - 20)); });
    };
    var $pswp = $('<div class="pswp"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="關閉 (Esc)"></button><button class="pswp__button pswp__button--share" title="分享"></button><button class="pswp__button pswp__button--link" title="鏈結"></button><button class="pswp__button pswp__button--fs" title="全螢幕切換"></button><button class="pswp__button pswp__button--zoom" title="放大/縮小"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="上一張"></button><button class="pswp__button pswp__button--arrow--right" title="下一張"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>').appendTo (window.vars.$body), $obj = $(gallerySelector), params = {};
    if (!$obj.length) return false;

    $pswp.get (0).$conter = $pswp.find ('div.pswp__caption__center');

    $obj.each (function (i) {
      var $that = $(this);
      $that.data ('pswp-uid', i + 1);
      $that.get (0).$objs = $that.find (fnx);
      $that.find (fnx).click (function () { openPhotoSwipe ($that.get (0).$objs.index ($(this)), $pswp, $that); });
    });

    window.location.hash.replace ('#', '').split ('&').forEach (function (t, i) { if (!(t && (t = t.split ('=')).length && !isNaN (t[1]))) return; params[t[0]] = t[1]; });
    if (params && params.gid && params.pid)
      setTimeout (function () {
        openPhotoSwipe (params.pid - 1,  $pswp, $obj.eq (params.gid - 1), true, true);
      }, 100);
  };

  window.vars.$container = $('#container').addClass (window.funs.storage.minMenu.isMin () ? 'min' : null);
  window.vars.$hamburger = $('#hamburger').click (function () {
    window.vars.$container.toggleClass ('min');
    window.funs.storage.minMenu.isMin (window.vars.$container.hasClass ('min'));
  });

  window.funs.initPhotoSwipeFromDOM ('.content table', 'figure._i');
  window.funs.initPhotoSwipeFromDOM ('.row', '.x2');

  window.funs.updateFlag = function ($objs, callback) {
    $objs.each (function () {
      var $that = $(this),
          $input = $(this).find ('input'),
          url = $(this).data ('url'),
          column = $(this).data ('column'),
          data = { _method: 'put', _type: 'api' };

      if ($input.attr ('type') == 'checkbox') $that.get (0).oriVal = $input.prop ('checked');
      else if ($input.attr ('type') == 'radio') $that.get (0).oriVal = $input.filter (':checked').val ();

      $input.unbind ('change').change (function () {
        if ($(this).attr ('type') == 'checkbox') {
          $that.get (0).oriVal = !$(this).prop ('checked');

          if (!(url && column)) {
            setTimeout (function () { $(this).prop ('checked', $that.removeClass ('loading').get (0).oriVal).prop ('disabled', false); }.bind ($(this)), 100);
            return false;
          }

          data[column] = $(this).prop ('checked') ? 1 : 0;
          $.ajax ({ url: url, data: data, async: true, cache: false, dataType: 'json', type: 'POST',
            beforeSend: function () { $(this).prop ('disabled', true); $that.addClass ('loading'); }.bind ($(this))
          })
          .done (function (result) {
            $(this).prop ('checked', result[column] ? true : false).prop ('disabled', false);
            $that.removeClass ('loading').get (0).oriVal = $(this).prop ('checked');
            callback && callback.bind ($that, result[column] ? true : false) ();
          }.bind ($(this)))
          .fail (function (result) { $(this).prop ('checked', $that.removeClass ('loading').get (0).oriVal).prop ('disabled', false); }.bind ($(this)));
        } else if ($input.attr ('type') == 'radio') {
          if (!(url && column)) {
            setTimeout (function () { $input.filter ('[value="' + $that.removeClass ('loading').get (0).oriVal + '"]').prop ('checked', true); }.bind ($(this)), 100);
            return false;
          }

          data[column] = $input.filter (':checked').val ();
          $.ajax ({ url: url, data: data, async: true, cache: false, dataType: 'json', type: 'POST',
            beforeSend: function () { $input.prop ('disabled', true); $that.addClass ('loading'); }
          })
          .done (function (result) { $input.prop ('disabled', false).filter ('[value="' + result[column] + '"]').prop ('checked', true); $that.removeClass ('loading').get (0).oriVal = $input.filter (':checked').val (); })
          .fail (function (result) { $input.prop ('disabled', false).filter ('[value="' + $that.removeClass ('loading').get (0).oriVal + '"]').prop ('checked', true); });
        }
      });
    });
  };
  window.funs.updateFlag ($('table.table .switch'));
  window.funs.updateFlag ($('table.table .radios'));
  window.funs.updateFlag ($('table.table .checkbox'));

  window.funs.dropUploadImg = function ($objs) {
    $objs.each (function () {
      var $obj = $(this),
          $img = $obj.find ('img'),
          $input = $obj.find ('input[type="file"]').change (function () {
            $obj.attr ('data-loading', '讀取中..').removeClass ('no_cchoice');
            if (!$(this).val ().length) {
              $img.attr ('src', '');
              $obj.removeAttr ('data-loading').addClass ('no_cchoice');
            }

            if ($(this).get (0).files && $(this).get (0).files[0]) {
              var reader = new FileReader ();
              reader.onload = function (e) {
                $img.attr ('src', e.target.result).load (function () {
                  $obj.removeAttr ('data-loading').removeClass ('no_cchoice');
                });
              };
              reader.readAsDataURL ($(this).get (0).files[0]);
            }

            $(this).css ({'top' : 0, 'left': 0});
          });

      $obj.bind ('dragover', function (e) {
        e.stopPropagation ();
        e.preventDefault ();
        $(this).addClass ('no_cchoice');
        $input.offset ({ top: e.originalEvent.pageY - 15, left: e.originalEvent.pageX - 100 });
      })
      .bind ('dragleave', function (e) { e.stopPropagation (); e.preventDefault (); $(this).removeClass ('no_cchoice'); })
      .bind ('drop', function (e) { $(this).removeClass ('no_cchoice'); });
    });
    return $objs;
  };
  window.funs.dropUploadImg ($('.drop_img'));

  $('a[data-method="delete"]').click (function () {
    if (!confirm ('確定要刪除？')) return false;
    else return true;
  })
  $('#main_menu ul li > a.active').parents ('label').find ('input').prop ('checked', true)

  setTimeout (function () { window.vars.$container.addClass ('ani'); }, 500);

  $('form.form button[type="reset"]').click (function () {
    window.history.back ();
  });
  $('form.form').submit (function () {
    $(this).find ('input[type="checkbox"]:not([name="tag_ids[]"])').each (function () {
      $(this).val ($(this).prop ('checked') ? 1 : 0).prop ('checked', true).parent ().addClass ('loading');
    });
  });

  $('time[datetime]').timeago ();

  window.funs.schedulePrompt = function (okCallback, title, inputText, textareaText, radioVal, noCallback) {
    window.vars.$schedulePrompt = $('.schedulePrompt');
    
    this.closeResult = function () {
      var that = window.vars.$schedulePrompt.removeClass ('result')
      that.get (0).vars.$tip.attr ('title', '');
      return that;
    }
    this.closeLoading = function () {
      var that = window.vars.$schedulePrompt.removeClass ('loading')
      that.get (0).vars.$tip.attr ('title', '');
      return that;
    }
    this.loading = function (title) {
      var that = this.closeResult ().addClass ('loading')
      that.get (0).vars.$tip.attr ('title', title);
      return that;
    }
    this.result = function (title) {
      var that = this.closeLoading ().addClass ('result');
      that.get (0).vars.$tip.attr ('title', title);
      return that;
    }
    this.loadTags = function (callback) {
      var vals = window.vars.$schedulePrompt.get (0).vars;
      if (typeof vals.tags !== 'undefined') return callback && callback ();

      $.ajax ({
        url: window.vars.apis.scheduleTags.getList (),
        async: true, cache: false, dataType: 'json', type: 'GET',
        beforeSend: function () {
          this.loading ('初始中..');
        }.bind (this)
      })
      .done (function (result) {
        vals.tags = result;

        vals.$radios.append (vals.tags.map (function (t) {
          return $('<label>').css ({'padding-bottom': '2px', 'border-bottom': '2px solid ' + (t.color ? t.color : '#000000')}).append (
            $('<input />').attr ('type', 'radio').attr ('name', 'tag').val (t.id)).append (
            $('<span />')).append (
            t.name);
        }));

        callback && callback ();
      }.bind (this))
      .fail (function (result) { window.funs.ajaxError (result); })
      .complete (function (result) { this.closeLoading (); }.bind (this));
    }

    this.okCallback = function (callback) {
      if (callback) window.vars.$schedulePrompt.get (0).vars.$ok.unbind ('click').click (callback.bind ($(this), window.vars.$schedulePrompt.get (0).vars.$input, window.vars.$schedulePrompt.get (0).vars.$textarea));
    }
    this.close = function () {
      window.vars.$schedulePrompt.removeClass ('show_animation').addClass ('hide_animation');

      window.vars.$schedulePrompt.get (0).vars.timer = setTimeout (function () {
        window.vars.$schedulePrompt.attr ('class', 'schedulePrompt');

        window.vars.$schedulePrompt.get (0).vars.$input.val ('');
        window.vars.$schedulePrompt.get (0).vars.$textarea.val ('');
        window.vars.$schedulePrompt.get (0).vars.$radios && window.vars.$schedulePrompt.get (0).vars.$radios.find ('input').prop ('checked', false);
        window.vars.$schedulePrompt.get (0).vars.timer = null;
      }, 500);
    };

    if (window.vars.$schedulePrompt.length < 1) {
      
      window.vars.$schedulePrompt = $('<div />').addClass ('schedulePrompt').appendTo (window.vars.$body);

      window.vars.$schedulePrompt.get (0).vars = {
        $title: $('<div />').addClass ('title'),
        $input: $('<input />').attr ('type', 'text').attr ('placeholder', '請輸入標題..'),
        $textarea: $('<textarea />').attr ('placeholder', '請輸入細節..'),
        $ok: $('<a />').addClass ('ok').text ('確定'),
        $no: $('<a />').addClass ('no').text ('取消'),
        $radios: $('<div />').addClass ('radios'),
        $tip: $('<div />').addClass ('tip'),
        timer: null,
      };
      
      window.vars.$schedulePrompt.get (0).vars.$textarea.ckeditor ({
        skin: 'oa',
        height: 100,
        resize_enabled: false,
        removePlugins: 'elementspath',
        toolbarGroups: [{ name: '1', groups: [ 'mode', 'tools', 'links', 'basicstyles', 'colors', 'insert', 'list' ] }],
        removeButtons: 'Image,Strike,Underline,Italic,Table,HorizontalRule,Smiley,Subscript,Superscript,Forms,Save,NewPage,Print,Preview,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Form,RemoveFormat,CreateDiv,BidiLtr,BidiRtl,Language,Anchor,Flash,PageBreak,Iframe,About,Styles'
      });

      window.vars.$schedulePrompt.append (
        $('<div />').addClass ('cover').click (this.close)).append (
        $('<div />').addClass ('wrapper').append (
          window.vars.$schedulePrompt.get (0).vars.$title).append (
          window.vars.$schedulePrompt.get (0).vars.$tip).append (
          $('<div />').addClass ('content').append (
            window.vars.$schedulePrompt.get (0).vars.$input).append (
            window.vars.$schedulePrompt.get (0).vars.$textarea).append (
            window.vars.$schedulePrompt.get (0).vars.$radios)).append (
          $('<div />').addClass ('btns').append (
            window.vars.$schedulePrompt.get (0).vars.$ok.click (this.close)).append (
            window.vars.$schedulePrompt.get (0).vars.$no.click (this.close))));
    }
    var $that = $(this);
    this.loadTags (function () {
      if (window.vars.$schedulePrompt.get (0).vars.timer) return false;

      if (title) window.vars.$schedulePrompt.get (0).vars.$title.text (title);
      if (inputText) window.vars.$schedulePrompt.get (0).vars.$input.val (inputText);
      if (textareaText) setTimeout (function () {
        window.vars.$schedulePrompt.get (0).vars.$textarea.val (textareaText);
      }, 500);
      if (radioVal) window.vars.$schedulePrompt.get (0).vars.$radios.find ('input[value="' + radioVal + '"]').prop ('checked', true);

      if (okCallback) window.vars.$schedulePrompt.get (0).vars.$ok.unbind ('click').click (okCallback.bind (
        $that,
        window.vars.$schedulePrompt.get (0).vars.$input,
        window.vars.$schedulePrompt.get (0).vars.$textarea,
        window.vars.$schedulePrompt.get (0).vars.$radios));
      if (noCallback) window.vars.$schedulePrompt.get (0).vars.$no.unbind ('click').click (noCallback);
      window.vars.$schedulePrompt.addClass ('show').addClass ('show_animation');
      window.vars.$schedulePrompt.get (0).vars.$input.focus ();
    });
  };

  window.funs.formAddEmail = function ($obj) {
    $obj.each (function () {
      var that = this, $emails = $(this), $addEmail = $emails.find ('.add_email');

      that.fm = function (i, e) {
        return $('<div />').addClass ('email').append (
          $('<input />').attr ('type', 'text').attr ('name', 'emails[' + i + ']').attr ('placeholder', '請輸入聯絡人 E-Mail..').val (e ? e : '')).append (
          $('<button />').attr ('type', 'button').addClass ('icon-t').click (function () { $(this).parents ('.email').remove (); })
        );
      };

      if ($emails.data ('emails')) $emails.data ('emails').forEach (function (t) { that.fm ($emails.data ('i'), t).insertBefore ($addEmail); $emails.data ('i', $emails.data ('i') + 1); });
      $addEmail.find ('.add').click (function () { that.fm ($emails.data ('i')).insertBefore ($addEmail); $emails.data ('i', $emails.data ('i') + 1); }).click ();
    });
  };
  window.funs.formAddEmail ($('form.form .row.emails'));

  window.funs.mutiImg = function ($obj) {
    if ($obj.length <= 0) return;
    $obj.on ('click', '.icon-t', function () { var $parent = $(this).parent (); $parent.remove (); });
    $obj.on ('change', '.drop_img input', function () { var $parent = $(this).parent (); if ($(this).val ().length) if (!$parent.next ().length) { var $new = $parent.clone ().removeAttr ('data-loading').addClass ('no_cchoice'); $new.find ('img').attr ('src', ''); $new.find ('input').val (''); window.funs.dropUploadImg ($new).insertAfter ($parent); } });
  }
  window.funs.workAddBlock = function ($obj) {
    if ($obj.length <= 0) return;
    var $bifm = function (i, j, t, l) { return $('<div />', {'class': 'bi'}).append ( $('<input />', {'type': 'text', 'name': 'blocks[' + i + '][items][' + j + '][title]', 'placeholder': '請輸入細項標題..'}).val (t) ).append ( $('<input />', {'type': 'text', 'name': 'blocks[' + i + '][items][' + j + '][link]', 'placeholder': '請輸入細項鏈結..'}).val (l) ).append ( $('<button />', {'type': 'button', 'class': 'icon-t'}).click (function () { $(this).parents ('.bi').remove (); }) ); };
    var $bsfm = function (i, t, is) {return $('<div />', { 'class': 'row n2'}).append ($('<label />').text ('說 明：')).append ($('<div />').append ($('<div />', {'class': 'bt'}).append ($('<input />', {'type': 'text', 'name': 'blocks[' + i + '][title]', 'placeholder': '請輸入說明標題..', 'maxlength': '200', 'pattern': '.{1,200}', 'required': '', 'title': '輸入說明標題!'}).val (t)).append ($('<button />', {'type': 'button', 'class': 'icon-t'}).click (function () { $(this).parents ('.row').remove (); }))).append ($('<div />', {'class': 'bb'}).append ( $('<button />', {'type': 'button', 'class': 'icon-r'}).data ('i', 0).click (function () { var j = $(this).data ('i'); $bifm (i, j, '', '').insertBefore ($(this).parents ('.bb')).find ('input').first ().focus (); $(this).data ('i', j + 1); }))));};
    var $addBlock = $obj.click (function () { var text = window.prompt ('請輸入說明文字'); if (text && text.length) { var i = $(this).data ('i'); $bsfm (i, text).insertBefore ($(this).parents ('.row')).find ('input').first ().focus (); $(this).data ('i', i + 1); } });
    $.map ($addBlock.data ('blocks'), function (t) { var i = $addBlock.data ('i'), $b = $bsfm (i, t.title).insertBefore ($addBlock.parents ('.row')).find ('.icon-r'); if (t.items.length) $.map (t.items, function (t) { var j = $b.data ('i'); $bifm (i, j, t.title, t.link).insertBefore ($b.parents ('.bb')); $b.data ('i', j + 1); }); $addBlock.data ('i', $addBlock.data ('i') + 1); });
  }
  
  window.funs.mutiImg ($('.imgs_row'));
  window.funs.workAddBlock ($('.add_block'));
  

  $('textarea.cke').ckeditor ({
    filebrowserUploadUrl: window.vars.apis.ckeditor.postImage (),
    filebrowserImageBrowseUrl: window.vars.apis.ckeditor.getImages (),
    skin: 'oa',
    height: 300,
    resize_enabled: false,
    removePlugins: 'elementspath',
    toolbarGroups: [{ name: '1', groups: [ 'mode', 'tools', 'links', 'basicstyles', 'colors', 'insert', 'list', 'Table' ] }],
    removeButtons: 'Strike,Underline,Italic,HorizontalRule,Smiley,Subscript,Superscript,Forms,Save,NewPage,Print,Preview,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Form,RemoveFormat,CreateDiv,BidiLtr,BidiRtl,Language,Anchor,Flash,PageBreak,Iframe,About,Styles',
    extraPlugins: 'tableresize'
  });


  $('#export').click (function () {
    $(this).parent ().attr ('action', $(this).attr ('href')).submit ();
    $(this).parent ().attr ('action', '');
    return false;
  });
  if ($('#billin_rate').length) {
    var $inp = $('input[name="rate_type"]');
    var $m = $('#money').keyup (cm);
    var $r = $('#rate').keyup (cm);
    var $z = $('#zeus_money');
    var $rn = $('#rate_name');
    var $rt = $('#money_title');

    function cm () {
      var m = $m.val ();
      var r = $r.val ();

      if (isNaN (m) || isNaN (r)) return ;
      $z.val (Math.round ((r / 100) * m));
    }
    function setRate () {
      var v = $inp.filter (':checked').val ();

      if (v == 1) { $rn.val ('有發票'); $r.val (20); $rt.text ('* 總金額（含稅）'); }
      if (v == 2) { $rn.val ('無發票'); $r.val (10); $rt.text ('* 總金額（未稅）'); }
      
      if (v == 3) { $rn.val ('其他').show (); $rt.text ('* 總金額'); }
      else $rn.hide ();

      cm ();
    }
    $inp.change (setRate);
    if ($('#billin_rate .radios').data ('val') == '有發票') $('input[name="rate_type"][value="1"]').prop ('checked', true);
    else if ($('#billin_rate .radios').data ('val') == '無發票') $('input[name="rate_type"][value="2"]').prop ('checked', true);
    else { $('input[name="rate_type"][value="3"]').prop ('checked', true); $rn.val ($('#billin_rate .radios').data ('val')); }
    setRate ();
  }




  var $all_money = $('#all_money');
  var $single_money = $('#single_money');
  var $quantity = $('#quantity').keyup (function () { if (isNaN ($(this).val ()) || isNaN ($single_money.val ())) return; $all_money.val ($(this).val () * $single_money.val ()); });
  $single_money.keyup (function () { if (isNaN ($(this).val ()) || isNaN ($quantity.val ())) return; $all_money.val ($(this).val () * $quantity.val ()); });

});