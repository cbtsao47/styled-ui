(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"+r8+":function(e,t,a){"use strict";var r=a("HbGN"),n=a("ERkP"),l=a.n(n),o=a("4dwc"),c=a("UVB/"),d=a.n(c),u=a("vUXE"),i=l.a.createElement;t.a=function(e){var t=e.theme,a=e.mode,n=(Object(r.a)(e,["theme","mode"]),Object(o.useTheme)()),l=d()(a),c=!!a,b=n[t]||l[t];if(!b)return"Theme field not found";"space"!==t&&"sizes"!==t||(b=Object.keys(b).filter((function(e){return!e.toString().match(/[qh]$/)})).reduce((function(e,t){return e[t]=b[t],e}),{}));var p=function(e,t){return t?JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"  $1:").replace(/{/g," {").replace(/}/g,"  }"):JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"$1:")}(b,c);return i(u.a,null,a?"export const ".concat(a," = {\n  ").concat(t,":").concat(p," \n}"):"export const ".concat(t," = ").concat(p))}},"UVB/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=c(c(c({},{dark:i,light:u}[null!==e&&void 0!==e?e:"dark"]),p),b);return Object.defineProperty(t,"get",{value:function(e,a){return(0,r.default)(t,e,a)},writable:!1,enumerable:!1,configurable:!1}),t},t.gradientColor=t.blindnessColor=t.dark=t.light=void 0;var r=l(a("2uJw")),n=l(a("GS+q"));function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={text:{emphasis:n.default["black:emphasis"],primary:n.default["black:primary"],secondary:n.default["black:secondary"],tertiary:n.default["black:tertiary"],disabled:n.default["black:disabled"],link:n.default["blue:60"],error:n.default["red:60"],warning:n.default["orange:50"]},risk:{high:n.default["red:60"],medium:n.default["orange:50"],low:n.default["yellow:50"],safe:n.default["green:50"],information:n.default["blue:60"],unknown:n.default["gray:50"]},chart:{1:n.default["blue:60"],2:n.default["green:50"],3:n.default["orange:50"],4:n.default["cyan:40"],5:n.default["red:60"],6:n.default["purple:60"],7:n.default["teal:40"],8:n.default["magenta:50"],9:n.default["green:30"],10:n.default["yellow:50"],other:n.default["gray:50"]}};t.light=u;var i={text:{emphasis:n.default["white:emphasis"],primary:n.default["white:primary"],secondary:n.default["white:secondary"],tertiary:n.default["white:tertiary"],disabled:n.default["white:disabled"],link:n.default["blue:40"],error:n.default["red:50"],warning:n.default["orange:50"]},risk:{high:n.default["red:50"],medium:n.default["orange:50"],low:n.default["yellow:50"],safe:n.default["green:40"],information:n.default["blue:50"],unknown:n.default["gray:50"]},chart:{1:n.default["blue:50"],2:n.default["green:40"],3:n.default["orange:50"],4:n.default["cyan:40"],5:n.default["red:50"],6:n.default["purple:50"],7:n.default["teal:40"],8:n.default["magenta:40"],9:n.default["green:30"],10:n.default["yellow:50"],other:n.default["gray:50"]}};t.dark=i;var b={blindness:{risk:{high:n.default["magenta:60"],medium:n.default["orange:50"],low:n.default["yellow:50"],safe:n.default["green:30"],information:n.default["blue:30"],unknown:n.default["gray:50"]},chart:{1:n.default["blue:30"],2:n.default["green:30"],3:n.default["orange:50"],4:n.default["cyan:30"],5:n.default["magenta:60"],6:n.default["purple:50"],7:n.default["teal:40"],8:n.default["purple:30"],9:n.default["cyan:70"],10:n.default["yellow:50"],other:n.default["gray:50"]},gradient:{high:"linear-gradient(45deg, ".concat(n.default["purple:60"],", ").concat(n.default["magenta:60"],")"),medium:"linear-gradient(45deg, ".concat(n.default["magenta:60"],", ").concat(n.default["orange:50"],")"),low:"linear-gradient(45deg, ".concat(n.default["orange:50"],", ").concat(n.default["yellow:50"],")"),safe:"linear-gradient(45deg, ".concat(n.default["teal:50"],", ").concat(n.default["green:30"],")")}}};t.blindnessColor=b;var p={gradient:{high:"linear-gradient(45deg, ".concat(n.default["purple:60"],", ").concat(n.default["red:50"],")"),medium:"linear-gradient(45deg, ".concat(n.default["red:50"],", ").concat(n.default["orange:50"],")"),low:"linear-gradient(45deg, ".concat(n.default["orange:50"],", ").concat(n.default["yellow:50"],")"),safe:"linear-gradient(45deg, ".concat(n.default["teal:50"],", ").concat(n.default["green:40"],")"),1:"linear-gradient(45deg, ".concat(n.default["purple:50"],", ").concat(n.default["magenta:40"],")"),2:"linear-gradient(45deg, ".concat(n.default["purple:60"],", ").concat(n.default["blue:50"],")"),3:"linear-gradient(45deg, ".concat(n.default["blue:50"],", ").concat(n.default["teal:40"],")"),4:"linear-gradient(45deg, ".concat(n.default["cyan:40"],", ").concat(n.default["teal:30"],")"),5:"linear-gradient(45deg, ".concat(n.default["blue:60"],", ").concat(n.default["teal:40"],")"),6:"linear-gradient(45deg, ".concat(n.default["green:40"],", ").concat(n.default["cyan:30"],")"),7:"linear-gradient(45deg, ".concat(n.default["magenta:60"],", ").concat(n.default["red:40"],")"),8:"linear-gradient(45deg, ".concat(n.default["magenta:50"],", ").concat(n.default["blue:60"],")")}};t.gradientColor=p},"s4G/":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/colors",function(){return a("yjKP")}])},yjKP:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var r=a("cxan"),n=a("HbGN"),l=a("ERkP"),o=a.n(l),c=a("ZVZ0"),d=a("zygG"),u=a("4dwc"),i=a("UVB/"),b=a.n(i),p=o.a.createElement,f=function(e){return e.split(":")},s=function(e,t){return Object.keys(t).find((function(a){return t[a]===e}))},m=function(e){var t=e.token,a=e.color,l=Object(n.a)(e,["token","color"]),o=f(t),c=Object(d.a)(o,2),i=c[0],b=c[1],s={justify:"space-between",fontSize:"sm",width:"300px",height:"12x",py:"3x",px:"4x",lineHeight:"lg",fontFamily:"mono",color:b<=50?"black":"white",backgroundColor:a};return p(u.Flex,Object(r.a)({},s,l),p(u.Box,null,"".concat(i.charAt(0).toUpperCase()).concat(i.slice(1))," ",b),p(u.Box,null,a))},g=function(e){var t=e.hue,a=Object(u.useTheme)(),r=RegExp(t,"g"),n=Object.keys(a.colors).filter((function(e){return e.match(r)})).reduce((function(e,t){return e[t]=a.colors[t],e}),{});return p(u.Flex,{align:"center"},p(u.Stack,{direction:"column"},Object.keys(n).map((function(e){return p(m,{key:e,token:"".concat(e),color:"".concat(n[e])})}))))},h=function(e){return p(u.Grid,Object(r.a)({gap:"6x",templateColumns:"repeat(auto-fit, 300px)"},e))},y=function(e){var t=e.mode,a=Object(n.a)(e,["mode"]),l=Object(u.useColorMode)().colorMode,o=t&&{light:{bg:"white",border:1,borderColor:"gray:20"},dark:{bg:"gray:100",border:1,borderColor:"gray:70"}}[null!==t&&void 0!==t?t:l];return p(u.Grid,Object(r.a)({px:"14x",py:"10x",rowGap:"8x",columnGap:"6x",templateColumns:"repeat(auto-fit, 120px)",maxWidth:"1242px"},o,a))},O=function(e){var t,a=e.mode,l=e.palette,o=e.colorType,c=e.color,i=(Object(n.a)(e,["mode","palette","colorType","color"]),Object(u.useColorMode)().colorMode),b=Object(u.useTheme)(),m={fontSize:"sm",mt:"2x",color:{dark:"white:primary",light:"black:primary"}[null!==a&&void 0!==a?a:i]},g={fontSize:"xs",lineHeight:"sm",color:{dark:"white:secondary",light:"black:secondary"}[null!==a&&void 0!==a?a:i]};if("gradient"===l){t=c.match(/#\w+/g).map((function(e){var t=f(s(e,b.colors)),a=Object(d.a)(t,2),n=a[0],l=a[1];return p(u.Box,Object(r.a)({key:e},g),"".concat(n.charAt(0).toUpperCase()).concat(n.slice(1))," ",l," ",e)}))}else{var h=f(s(c,b.colors)),y=Object(d.a)(h,2),O=y[0],j=y[1];t="text"===l&&["black","white"].includes(O)?p(u.Box,g,c):p(u.Box,g,"".concat(O.charAt(0).toUpperCase()).concat(O.slice(1))," ",j," ",c)}return p(u.Box,null,p(u.Box,Object(r.a)({background:c},{width:"80px",height:"80px"})),p(u.Box,m,l,".",o),t)},j=function(e){var t=e.mode,a=e.type,r=e.palette,l=(Object(n.a)(e,["mode","type","palette"]),a&&r?"".concat(a,".").concat(r):null!==r&&void 0!==r?r:a),o=b()(t).get(l);return p(y,{mode:t},Object.keys(o).map((function(e){return p(O,{key:e,mode:t,palette:null!==r&&void 0!==r?r:a,colorType:e,color:"".concat(o[e])})})))},x=a("+r8+"),k=(o.a.createElement,{}),w="wrapper";function C(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)(w,Object(r.a)({},k,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Colors"),Object(c.b)("p",null,"Add a ",Object(c.b)("inlineCode",{parentName:"p"},"theme.colors")," object to provide colors for your project. By default these colors can be referenced by ",Object(c.b)("inlineCode",{parentName:"p"},"color"),", ",Object(c.b)("inlineCode",{parentName:"p"},"borderColor"),", and ",Object(c.b)("inlineCode",{parentName:"p"},"backgroundColor"),", ",Object(c.b)("inlineCode",{parentName:"p"},"fill"),", ",Object(c.b)("inlineCode",{parentName:"p"},"stroke"),", and styles."),Object(c.b)("p",null,"We recommend adding a palette that go from ",Object(c.b)("inlineCode",{parentName:"p"},"10")," (lightest color) to ",Object(c.b)("inlineCode",{parentName:"p"},"100")," (darkest color). You can use a name (such as Red 10 or Red 70) to indicate that Red 10 is a light red color and Red 70 is a dark red color."),Object(c.b)("p",null,"The color palette  is defined for both Light Theme and Dark Theme where ",Object(c.b)("inlineCode",{parentName:"p"},"10")," - ",Object(c.b)("inlineCode",{parentName:"p"},"50")," means to pass AA contrast with black text and  ",Object(c.b)("inlineCode",{parentName:"p"},"60")," - ",Object(c.b)("inlineCode",{parentName:"p"},"100")," means to pass AA contrast with white text."),Object(c.b)(x.a,{theme:"colors",mdxType:"ThemeParser"}),Object(c.b)("h3",null,"Color palettes"),Object(c.b)(h,{mdxType:"ColorWrapper"},Object(c.b)(g,{hue:"red",mdxType:"ColorPalettes"}),Object(c.b)(g,{hue:"magenta",mdxType:"ColorPalettes"}),Object(c.b)(g,{hue:"purple",mdxType:"ColorPalettes"}),Object(c.b)(g,{hue:"blue",mdxType:"ColorPalettes"}),Object(c.b)(g,{hue:"green",mdxType:"ColorPalettes"}),Object(c.b)(g,{hue:"teal",mdxType:"ColorPalettes"}),Object(c.b)(g,{hue:"cyan",mdxType:"ColorPalettes"}),Object(c.b)(g,{hue:"gray",mdxType:"ColorPalettes"})),Object(c.b)("h3",null,"Text color"),Object(c.b)(x.a,{mode:"light",theme:"text",mdxType:"ThemeParser"}),Object(c.b)(x.a,{mode:"dark",theme:"text",mdxType:"ThemeParser"}),Object(c.b)(j,{mode:"light",palette:"text",mdxType:"FunctionalColorPalettes"}),Object(c.b)(j,{mode:"dark",palette:"text",mdxType:"FunctionalColorPalettes"}),Object(c.b)("h3",null,"Functional color"),Object(c.b)(x.a,{mode:"light",theme:"risk",mdxType:"ThemeParser"}),Object(c.b)(x.a,{mode:"dark",theme:"risk",mdxType:"ThemeParser"}),Object(c.b)(j,{mode:"light",palette:"risk",mdxType:"FunctionalColorPalettes"}),Object(c.b)(j,{mode:"dark",palette:"risk",mdxType:"FunctionalColorPalettes"}),Object(c.b)("h3",null,"Chart color"),Object(c.b)(x.a,{mode:"light",theme:"chart",mdxType:"ThemeParser"}),Object(c.b)(x.a,{mode:"dark",theme:"chart",mdxType:"ThemeParser"}),Object(c.b)(j,{mode:"light",palette:"chart",mdxType:"FunctionalColorPalettes"}),Object(c.b)(j,{mode:"dark",palette:"chart",mdxType:"FunctionalColorPalettes"}),Object(c.b)("h3",null,"Gradient color"),Object(c.b)(x.a,{theme:"gradient",mdxType:"ThemeParser"}),Object(c.b)(j,{type:"gradient",mdxType:"FunctionalColorPalettes"}),Object(c.b)("h3",null,"Color blindness"),Object(c.b)("p",null,"We provide different colors for color blind users."),Object(c.b)(x.a,{theme:"blindness",mdxType:"ThemeParser"}),Object(c.b)("h4",null,"Functional color"),Object(c.b)(j,{type:"blindness",palette:"risk",mdxType:"FunctionalColorPalettes"}),Object(c.b)("h4",null,"Chart color"),Object(c.b)(j,{type:"blindness",palette:"chart",mdxType:"FunctionalColorPalettes"}),Object(c.b)("h4",null,"Gradient color"),Object(c.b)(j,{type:"blindness",palette:"gradient",mdxType:"FunctionalColorPalettes"}),Object(c.b)("h2",null,"Configuration Reference"),Object(c.b)("p",null,"Except for breakpoints, colors, and spacing, all keys in the theme object map to one of the core themes. All keys can be replaced or extended."),Object(c.b)("p",null,"For more information, see the complete properties ",Object(c.b)("a",{href:"https://styled-system.com/table",target:"_blank"},"reference table"),"."))}C.isMDXComponent=!0}},[["s4G/",0,1,6,3,4,5,2,7]]]);