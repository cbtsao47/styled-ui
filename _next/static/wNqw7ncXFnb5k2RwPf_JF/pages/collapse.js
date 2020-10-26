(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+wNj":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("+wNj");function r(e,t){if(null==e)return{};var n,r,i=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n("ERkP"),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return(r.a.createElement(b.Provider,{value:t},e.children))},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return(r.a.createElement(r.a.Fragment,{},t))}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,O=s["".concat(o,".").concat(u)]||s[u]||m[u]||i;return n?r.a.createElement(O,c(c({ref:t},b),{},{components:n})):r.a.createElement(O,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var i=n.length,o=new Array(i);o[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"===typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},lxMa:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n("cxan"),r=n("HbGN"),i=n("ERkP"),o=n.n(i),c=n("ZVZ0"),l=(o.a.createElement,{}),b="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)(b,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Collapse"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Collapse")," is used to create regions of content that can expand/collapse with a simple animation. It helps to hide content that's not immediately relevant to the user."),Object(c.b)("p",null,"This component uses ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Stanko/react-animate-height"}),"react-animate-height")," for animating height."),Object(c.b)("h2",null,"Import"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import Collapse from '@trendmicro/react-styled-ui/Collapse';\n// or\nimport { Collapse } from '@trendmicro/react-styled-ui';\n")),Object(c.b)("h2",null,"Usage"),Object(c.b)("h3",null,"Basic usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'function Example() {\n  const [show, setShow] = React.useState(false);\n  const handleToggle = () => setShow(!show);\n\n  return (\n    <Box whiteSpace="pre-wrap">\n      <Box mb="2x">\n        <Button variantColor="red" onClick={handleToggle}>\n          Toggle\n        </Button>\n      </Box>\n      <Collapse isOpen={show}>\n        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n      </Collapse>\n    </Box>\n  );\n}\n')),Object(c.b)("h3",null,"Changing the ",Object(c.b)("inlineCode",{parentName:"h3"},"startingHeight")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"function Example() {\n  const [show, setShow] = React.useState(false);\n  const handleToggle = () => setShow(!show);\n  const textStyleProps = {\n    whiteSpace: show ? 'wrap' : 'nowrap',\n    overflow: 'hidden',\n    textOverflow: 'ellipsis',\n    width: '100%',\n  };\n\n  return (\n    <Box whiteSpace=\"pre-wrap\">\n      <Collapse startingHeight={20} isOpen={show}>\n        <Text {...textStyleProps}>\n          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n        </Text>\n      </Collapse>\n      <Link onClick={handleToggle}>\n        {show ? 'Show less' : 'Show more'}\n      </Link>\n    </Box>\n  );\n}\n")),Object(c.b)("h2",null,"Props"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Collapse")," composes the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./box"}),Object(c.b)("inlineCode",{parentName:"a"},"Box"))," component. You can override the default styles with style props."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isOpen"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", the content will be visible.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"animateOpacity"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"true"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", the opacity of the content will be animated.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"duration"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The animation duration as it expands.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"startingHeight"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The height you want the content in it's collapsed state.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"endingHeight"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"'auto'"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The height you want the content in it's expanded state.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"onAnimationEnd"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A callback which will be called when animation starts. The first argument passed to this callback is an object containing ",Object(c.b)("inlineCode",{parentName:"td"},"newHeight"),", the pixel value of the height at which the animation will end.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"onAnimationStart"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A callback which will be called when animation ends. The first argument passed to this callback is an object containing ",Object(c.b)("inlineCode",{parentName:"td"},"newHeight"),", the pixel value of the height at which the animation ended.")))))}p.isMDXComponent=!0},pIZp:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collapse",function(){return n("lxMa")}])}},[["pIZp",0,1]]]);