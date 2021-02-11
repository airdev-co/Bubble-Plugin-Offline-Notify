function(instance, properties, context) {
    

    // Add CSS after page load in order to avoid flash of content (this content was appearing on page load)
    var cssId = 'offlineCSS';
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://d2tf8y1b8kxrzw.cloudfront.net/serve_files/offline-js/offline-language-' + `${properties.language}` + '.css';
        link.media = 'all';
        head.appendChild(link);
    }
    
    var styles = `// add custom font face
    @font-face {
        font-family: 'Inter-Regular';
        src: url('https://s3.amazonaws.com/appforest_uf/f1579137364905x421113310796990460/Inter-Regular.otf');
    } 
    /* line 4, ../sass/_offline-theme-base.sass */
 .offline-ui, .offline-ui *, .offline-ui:before, .offline-ui:after, .offline-ui *:before, .offline-ui *:after {
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box;
}
/* line 7, ../sass/_offline-theme-base.sass */
 .offline-ui {
     display: none;
     position: fixed;
     background: white;
     z-index: 2000;
     margin: auto;
     top: 0;
     left: 0;
     right: 0;
}
/* line 17, ../sass/_offline-theme-base.sass */
 .offline-ui .offline-ui-content:before {
     display: inline;
}
/* line 20, ../sass/_offline-theme-base.sass */
 .offline-ui .offline-ui-retry {
     -webkit-user-select: none;
     -moz-user-select: none;
     user-select: none;
     display: none;
}
/* line 24, ../sass/_offline-theme-base.sass */
 .offline-ui .offline-ui-retry:before {
     display: inline;
}
/* line 29, ../sass/_offline-theme-base.sass */
 .offline-ui.offline-ui-up.offline-ui-up-5s {
     display: block;
}
/* line 32, ../sass/_offline-theme-base.sass */
 .offline-ui.offline-ui-down {
     display: block;
}
/* line 37, ../sass/_offline-theme-base.sass */
 .offline-ui.offline-ui-down.offline-ui-waiting .offline-ui-retry {
     display: block;
}
/* line 42, ../sass/_offline-theme-base.sass */
 .offline-ui.offline-ui-down.offline-ui-reconnect-failed-2s.offline-ui-waiting .offline-ui-retry {
     display: none;
}
 @-webkit-keyframes offline-dropin {
    /* line 40, ../sass/_keyframes.sass */
     0% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
         opacity: 0;
    }
    /* line 43, ../sass/_keyframes.sass */
     1% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
         opacity: 0;
    }
    /* line 48, ../sass/_keyframes.sass */
     2% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
         opacity: 1;
    }
    /* line 51, ../sass/_keyframes.sass */
     100% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
         opacity: 1;
    }
}
 @-moz-keyframes offline-dropin {
    /* line 40, ../sass/_keyframes.sass */
     0% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
         opacity: 0;
    }
    /* line 43, ../sass/_keyframes.sass */
     1% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
         opacity: 0;
    }
    /* line 48, ../sass/_keyframes.sass */
     2% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
         opacity: 1;
    }
    /* line 51, ../sass/_keyframes.sass */
     100% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
         opacity: 1;
    }
}
 @-ms-keyframes offline-dropin {
    /* line 40, ../sass/_keyframes.sass */
     0% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
         opacity: 0;
    }
    /* line 43, ../sass/_keyframes.sass */
     1% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
         opacity: 0;
    }
    /* line 48, ../sass/_keyframes.sass */
     2% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
         opacity: 1;
    }
    /* line 51, ../sass/_keyframes.sass */
     100% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
         opacity: 1;
    }
}
 @-o-keyframes offline-dropin {
    /* line 40, ../sass/_keyframes.sass */
     0% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
         opacity: 0;
    }
    /* line 43, ../sass/_keyframes.sass */
     1% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
         opacity: 0;
    }
    /* line 48, ../sass/_keyframes.sass */
     2% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
         opacity: 1;
    }
    /* line 51, ../sass/_keyframes.sass */
     100% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
         opacity: 1;
    }
}
 @keyframes offline-dropin {
    /* line 40, ../sass/_keyframes.sass */
     0% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
         opacity: 0;
    }
    /* line 43, ../sass/_keyframes.sass */
     1% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
         opacity: 0;
    }
    /* line 48, ../sass/_keyframes.sass */
     2% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
         opacity: 1;
    }
    /* line 51, ../sass/_keyframes.sass */
     100% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
         opacity: 1;
    }
}
 @-webkit-keyframes offline-dropout {
    /* line 57, ../sass/_keyframes.sass */
     0% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
    }
    /* line 59, ../sass/_keyframes.sass */
     100% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
    }
}
 @-moz-keyframes offline-dropout {
    /* line 57, ../sass/_keyframes.sass */
     0% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
    }
    /* line 59, ../sass/_keyframes.sass */
     100% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
    }
}
 @-ms-keyframes offline-dropout {
    /* line 57, ../sass/_keyframes.sass */
     0% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
    }
    /* line 59, ../sass/_keyframes.sass */
     100% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
    }
}
 @-o-keyframes offline-dropout {
    /* line 57, ../sass/_keyframes.sass */
     0% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
    }
    /* line 59, ../sass/_keyframes.sass */
     100% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
    }
}
 @keyframes offline-dropout {
    /* line 57, ../sass/_keyframes.sass */
     0% {
         transform: translateY(0);
         -webkit-transform: translateY(0);
         -moz-transform: translateY(0);
         -ms-transform: translateY(0);
         -o-transform: translateY(0);
    }
    /* line 59, ../sass/_keyframes.sass */
     100% {
         transform: translateY(-800px);
         -webkit-transform: translateY(-800px);
         -moz-transform: translateY(-800px);
         -ms-transform: translateY(-800px);
         -o-transform: translateY(-800px);
    }
}
 @-webkit-keyframes offline-rotation {
    /* line 64, ../sass/_keyframes.sass */
     0% {
         transform: rotate(0deg);
         -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
         -ms-transform: rotate(0deg);
         -o-transform: rotate(0deg);
    }
    /* line 66, ../sass/_keyframes.sass */
     100% {
         transform: rotate(359deg);
         -webkit-transform: rotate(359deg);
         -moz-transform: rotate(359deg);
         -ms-transform: rotate(359deg);
         -o-transform: rotate(359deg);
    }
}
 @-moz-keyframes offline-rotation {
    /* line 64, ../sass/_keyframes.sass */
     0% {
         transform: rotate(0deg);
         -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
         -ms-transform: rotate(0deg);
         -o-transform: rotate(0deg);
    }
    /* line 66, ../sass/_keyframes.sass */
     100% {
         transform: rotate(359deg);
         -webkit-transform: rotate(359deg);
         -moz-transform: rotate(359deg);
         -ms-transform: rotate(359deg);
         -o-transform: rotate(359deg);
    }
}
 @-ms-keyframes offline-rotation {
    /* line 64, ../sass/_keyframes.sass */
     0% {
         transform: rotate(0deg);
         -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
         -ms-transform: rotate(0deg);
         -o-transform: rotate(0deg);
    }
    /* line 66, ../sass/_keyframes.sass */
     100% {
         transform: rotate(359deg);
         -webkit-transform: rotate(359deg);
         -moz-transform: rotate(359deg);
         -ms-transform: rotate(359deg);
         -o-transform: rotate(359deg);
    }
}
 @-o-keyframes offline-rotation {
    /* line 64, ../sass/_keyframes.sass */
     0% {
         transform: rotate(0deg);
         -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
         -ms-transform: rotate(0deg);
         -o-transform: rotate(0deg);
    }
    /* line 66, ../sass/_keyframes.sass */
     100% {
         transform: rotate(359deg);
         -webkit-transform: rotate(359deg);
         -moz-transform: rotate(359deg);
         -ms-transform: rotate(359deg);
         -o-transform: rotate(359deg);
    }
}
 @keyframes offline-rotation {
    /* line 64, ../sass/_keyframes.sass */
     0% {
         transform: rotate(0deg);
         -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
         -ms-transform: rotate(0deg);
         -o-transform: rotate(0deg);
    }
    /* line 66, ../sass/_keyframes.sass */
     100% {
         transform: rotate(359deg);
         -webkit-transform: rotate(359deg);
         -moz-transform: rotate(359deg);
         -ms-transform: rotate(359deg);
         -o-transform: rotate(359deg);
    }
}
/* line 21, ../sass/offline-theme-slide.sass */
 .offline-ui {
     -webkit-border-radius: 0 0 4px 4px;
     -moz-border-radius: 0 0 4px 4px;
     -ms-border-radius: 0 0 4px 4px;
     -o-border-radius: 0 0 4px 4px;
     border-radius: 0 0 4px 4px;
     font-family: 'Inter-Regular', "Helvetica Neue", sans-serif !important;
     padding: 1em;
     width: 38em;
     max-width: 100%;
     overflow: hidden;
}
 @media (max-width: 38em) {
    /* line 21, ../sass/offline-theme-slide.sass */
     .offline-ui {
         -webkit-border-radius: 0;
         -moz-border-radius: 0;
         -ms-border-radius: 0;
         -o-border-radius: 0;
         border-radius: 0;
    }
}
/* line 32, ../sass/offline-theme-slide.sass */
 .offline-ui .offline-ui-retry {
     position: absolute;
     right: 3em;
     top: 0;
     bottom: 0;
     background: rgba(0, 0, 0, 0.1);
     text-decoration: none;
     color: inherit;
     line-height: 3.5em;
     height: 3.5em;
     margin: auto;
     padding: 0 1em;
}
/* line 45, ../sass/offline-theme-slide.sass */
 .offline-ui.offline-ui-up {
     -webkit-animation: offline-dropout forwards 0.5s 2s;
     -moz-animation: offline-dropout forwards 0.5s 2s;
     -ms-animation: offline-dropout forwards 0.5s 2s;
     -o-animation: offline-dropout forwards 0.5s 2s;
     animation: offline-dropout forwards 0.5s 2s;
     -webkit-backface-visibility: hidden;
     background: ${ properties.connected_background_color ? 	
        properties.connected_background_color : 
    	'rgb(145,219,128); background: -moz-linear-gradient(90deg, rgba(145,219,128,1) 0%, rgba(95,191,139,1) 100%); background: -webkit-linear-gradient(90deg, rgba(145,219,128,1) 0%, rgba(95,191,139,1) 100%); background: linear-gradient(90deg, rgba(145,219,128,1) 0%, rgba(95,191,139,1) 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#91db80",endColorstr="#5fbf8b",GradientType=1);' // add the background color if it exists, use default if not
    }
    ;
     color: ${
        properties.connected_font_color
    }
    ;
}
/* line 50, ../sass/offline-theme-slide.sass */
 .offline-ui.offline-ui-down {
     -webkit-animation: offline-dropin 0.5s;
     -moz-animation: offline-dropin 0.5s;
     -ms-animation: offline-dropin 0.5s;
     -o-animation: offline-dropin 0.5s;
     animation: offline-dropin 0.5s;
     -webkit-backface-visibility: hidden;
     background: ${
        properties.down_background_color ? 
        properties.down_background_color : 
    	'rgb(236,107,79); background: -moz-linear-gradient(90deg, rgba(236,107,79,1) 0%, rgba(233,74,110,1) 100%); background: -webkit-linear-gradient(90deg, rgba(236,107,79,1) 0%, rgba(233,74,110,1) 100%); background: linear-gradient(90deg, rgba(236,107,79,1) 0%, rgba(233,74,110,1) 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ec6b4f",endColorstr="#e94a6e",GradientType=1);' // add the background color if it exists
    }
    ;
     color: ${
        properties.down_font_color
    }
    ;
}
/* line 55, ../sass/offline-theme-slide.sass */
 .offline-ui.offline-ui-down.offline-ui-connecting, .offline-ui.offline-ui-down.offline-ui-waiting {
     background: ${
        properties.connecting_background_color ?
    	properties.connecting_background_color :
    	'rgb(247,199,74); background: -moz-linear-gradient(90deg, rgba(247,199,74,1) 0%, rgba(227,117,49,1) 100%); background: -webkit-linear-gradient(90deg, rgba(247,199,74,1) 0%, rgba(227,117,49,1) 100%); background: linear-gradient(90deg, rgba(247,199,74,1) 0%, rgba(227,117,49,1) 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#F7C74A",endColorstr="#E37531",GradientType=1);'// add the background color if it exists
    }
    ;
     color: ${
        properties.connecting_color
    }
    ;
     padding-right: 3em;
}
/* line 60, ../sass/offline-theme-slide.sass */
 .offline-ui.offline-ui-down.offline-ui-connecting:after, .offline-ui.offline-ui-down.offline-ui-waiting:after {
     -webkit-animation: offline-rotation 0.7s linear infinite;
     -moz-animation: offline-rotation 0.7s linear infinite;
     -ms-animation: offline-rotation 0.7s linear infinite;
     -o-animation: offline-rotation 0.7s linear infinite;
     animation: offline-rotation 0.7s linear infinite;
     -webkit-backface-visibility: hidden;
     -webkit-border-radius: 50%;
     -moz-border-radius: 50%;
     -ms-border-radius: 50%;
     -o-border-radius: 50%;
     border-radius: 50%;
     content: " ";
     display: block;
     position: absolute;
     right: 1em;
     top: 0;
     bottom: 0;
     margin: auto;
     height: 1em;
     width: 1em;
     border: 2px solid rgba(0, 0, 0, 0);
     border-top-color: ${
        properties.connecting_color
    }
    ;
     border-left-color: ${
        properties.connecting_color
    }
    ;
     opacity: 0.7;
}
/* line 77, ../sass/offline-theme-slide.sass */
 .offline-ui.offline-ui-down.offline-ui-waiting {
     padding-right: 11em;
}
/* line 80, ../sass/offline-theme-slide.sass */
 .offline-ui.offline-ui-down.offline-ui-waiting.offline-ui-reconnect-failed-2s {
     padding-right: 0;
}
`

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
}