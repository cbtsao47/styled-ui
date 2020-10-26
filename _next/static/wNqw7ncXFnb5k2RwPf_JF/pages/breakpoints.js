(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+r8+":function(e,t,a){"use strict";var n=a("HbGN"),r=a("ERkP"),l=a.n(r),o=a("4dwc"),u=a("UVB/"),d=a.n(u),c=a("vUXE"),i=l.a.createElement;t.a=function(e){var t=e.theme,a=e.mode,r=(Object(n.a)(e,["theme","mode"]),Object(o.useTheme)()),l=d()(a),u=!!a,f=r[t]||l[t];if(!f)return"Theme field not found";"space"!==t&&"sizes"!==t||(f=Object.keys(f).filter((function(e){return!e.toString().match(/[qh]$/)})).reduce((function(e,t){return e[t]=f[t],e}),{}));var s=function(e,t){return t?JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"  $1:").replace(/{/g," {").replace(/}/g,"  }"):JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"$1:")}(f,u);return i(c.a,null,a?"export const ".concat(a," = {\n  ").concat(t,":").concat(s," \n}"):"export const ".concat(t," = ").concat(s))}},"U/M+":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a("cxan"),r=a("HbGN"),l=a("ERkP"),o=a.n(l),u=a("ZVZ0"),d=a("+r8+"),c=(o.a.createElement,{}),i="wrapper";function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(u.b)(i,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h1",null,"Breakpoints"),Object(u.b)("p",null,"To configure the default breakpoints used in responsive array values, add a\nbreakpoints array to your theme. These values will be used to generate\nmobile-first (i.e. min-width) media queries, which can then be used to apply\nresponsive styles. "),Object(u.b)("blockquote",null,Object(u.b)("p",{parentName:"blockquote"},"The ",Object(u.b)("inlineCode",{parentName:"p"},"breakpoints")," array is used at breakpoints theme scale.")),Object(u.b)("blockquote",null,Object(u.b)("p",{parentName:"blockquote"},"For example, you can write ",Object(u.b)("inlineCode",{parentName:"p"},'<Box fontSize={["xs", "sm"]}/>')," to make the font size responsive.")),Object(u.b)(d.a,{theme:"breakpoints",mdxType:"ThemeParser"}),Object(u.b)("pre",null,Object(u.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'// responsive font size\n<Box fontSize={["xs", "sm", "md", "lg"]}>Breakpoints</Box>\n')),Object(u.b)("h2",null,"Configuration Reference"),Object(u.b)("p",null,"Except for breakpoints, colors, and spacing, all keys in the theme object map to one of the core themes. All keys can be replaced or extended."),Object(u.b)("p",null,"For more information, see the complete properties ",Object(u.b)("a",{href:"https://styled-system.com/table",target:"_blank"},"reference table"),"."))}f.isMDXComponent=!0},"UVB/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=u(u(u({},{dark:i,light:c}[null!==e&&void 0!==e?e:"dark"]),s),f);return Object.defineProperty(t,"get",{value:function(e,a){return(0,n.default)(t,e,a)},writable:!1,enumerable:!1,configurable:!1}),t},t.gradientColor=t.blindnessColor=t.dark=t.light=void 0;var n=l(a("2uJw")),r=l(a("GS+q"));function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c={text:{emphasis:r.default["black:emphasis"],primary:r.default["black:primary"],secondary:r.default["black:secondary"],tertiary:r.default["black:tertiary"],disabled:r.default["black:disabled"],link:r.default["blue:60"],error:r.default["red:60"],warning:r.default["orange:50"]},risk:{high:r.default["red:60"],medium:r.default["orange:50"],low:r.default["yellow:50"],safe:r.default["green:50"],information:r.default["blue:60"],unknown:r.default["gray:50"]},chart:{1:r.default["blue:60"],2:r.default["green:50"],3:r.default["orange:50"],4:r.default["cyan:40"],5:r.default["red:60"],6:r.default["purple:60"],7:r.default["teal:40"],8:r.default["magenta:50"],9:r.default["green:30"],10:r.default["yellow:50"],other:r.default["gray:50"]}};t.light=c;var i={text:{emphasis:r.default["white:emphasis"],primary:r.default["white:primary"],secondary:r.default["white:secondary"],tertiary:r.default["white:tertiary"],disabled:r.default["white:disabled"],link:r.default["blue:40"],error:r.default["red:50"],warning:r.default["orange:50"]},risk:{high:r.default["red:50"],medium:r.default["orange:50"],low:r.default["yellow:50"],safe:r.default["green:40"],information:r.default["blue:50"],unknown:r.default["gray:50"]},chart:{1:r.default["blue:50"],2:r.default["green:40"],3:r.default["orange:50"],4:r.default["cyan:40"],5:r.default["red:50"],6:r.default["purple:50"],7:r.default["teal:40"],8:r.default["magenta:40"],9:r.default["green:30"],10:r.default["yellow:50"],other:r.default["gray:50"]}};t.dark=i;var f={blindness:{risk:{high:r.default["magenta:60"],medium:r.default["orange:50"],low:r.default["yellow:50"],safe:r.default["green:30"],information:r.default["blue:30"],unknown:r.default["gray:50"]},chart:{1:r.default["blue:30"],2:r.default["green:30"],3:r.default["orange:50"],4:r.default["cyan:30"],5:r.default["magenta:60"],6:r.default["purple:50"],7:r.default["teal:40"],8:r.default["purple:30"],9:r.default["cyan:70"],10:r.default["yellow:50"],other:r.default["gray:50"]},gradient:{high:"linear-gradient(45deg, ".concat(r.default["purple:60"],", ").concat(r.default["magenta:60"],")"),medium:"linear-gradient(45deg, ".concat(r.default["magenta:60"],", ").concat(r.default["orange:50"],")"),low:"linear-gradient(45deg, ".concat(r.default["orange:50"],", ").concat(r.default["yellow:50"],")"),safe:"linear-gradient(45deg, ".concat(r.default["teal:50"],", ").concat(r.default["green:30"],")")}}};t.blindnessColor=f;var s={gradient:{high:"linear-gradient(45deg, ".concat(r.default["purple:60"],", ").concat(r.default["red:50"],")"),medium:"linear-gradient(45deg, ".concat(r.default["red:50"],", ").concat(r.default["orange:50"],")"),low:"linear-gradient(45deg, ".concat(r.default["orange:50"],", ").concat(r.default["yellow:50"],")"),safe:"linear-gradient(45deg, ".concat(r.default["teal:50"],", ").concat(r.default["green:40"],")"),1:"linear-gradient(45deg, ".concat(r.default["purple:50"],", ").concat(r.default["magenta:40"],")"),2:"linear-gradient(45deg, ".concat(r.default["purple:60"],", ").concat(r.default["blue:50"],")"),3:"linear-gradient(45deg, ".concat(r.default["blue:50"],", ").concat(r.default["teal:40"],")"),4:"linear-gradient(45deg, ".concat(r.default["cyan:40"],", ").concat(r.default["teal:30"],")"),5:"linear-gradient(45deg, ".concat(r.default["blue:60"],", ").concat(r.default["teal:40"],")"),6:"linear-gradient(45deg, ".concat(r.default["green:40"],", ").concat(r.default["cyan:30"],")"),7:"linear-gradient(45deg, ".concat(r.default["magenta:60"],", ").concat(r.default["red:40"],")"),8:"linear-gradient(45deg, ".concat(r.default["magenta:50"],", ").concat(r.default["blue:60"],")")}};t.gradientColor=s},r8jD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/breakpoints",function(){return a("U/M+")}])}},[["r8jD",0,1,6,3,4,5,2,7]]]);