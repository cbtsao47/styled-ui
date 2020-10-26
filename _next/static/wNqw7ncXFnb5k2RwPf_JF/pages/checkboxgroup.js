(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+wNj":function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},"2gFM":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a("cxan"),r=a("HbGN"),c=a("ERkP"),b=a.n(c),o=a("ZVZ0"),l=(b.a.createElement,{}),p="wrapper";function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(p,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"CheckboxGroup"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"CheckboxGroup")," is used to group related checkboxes."),Object(o.b)("h2",null,"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import CheckboxGroup from '@trendmicro/react-styled-ui/CheckboxGroup';\n// or\nimport { CheckboxGroup } from '@trendmicro/react-styled-ui';\n")),Object(o.b)("h3",null,"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<CheckboxGroup defaultValue={["apple", "papaya"]}>\n  <Stack direction="column" spacing="1x" shouldWrapChildren>\n    <Checkbox value="apple">Apple</Checkbox>\n    <Checkbox value="orange">Orange</Checkbox>\n    <Checkbox value="papaya">Papaya</Checkbox>\n  </Stack>\n</CheckboxGroup>\n')),Object(o.b)("h3",null,"Group orientation"),Object(o.b)("p",null,"Make a set of checkboxes appear horizontal stacked rather than vertically, by adding ",Object(o.b)("inlineCode",{parentName:"p"},'direction="row"')," to the ",Object(o.b)("inlineCode",{parentName:"p"},"Stack")," component."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<CheckboxGroup defaultValue={["apple", "papaya"]}>\n  <Stack direction="row" spacing="3x">\n    <Checkbox value="apple">Apple</Checkbox>\n    <Checkbox value="orange">Orange</Checkbox>\n    <Checkbox value="papaya">Papaya</Checkbox>\n  </Stack>\n</CheckboxGroup>\n')),Object(o.b)("h3",null,"Colors"),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"variantColor")," prop to change the color scheme of the Radio. ",Object(o.b)("inlineCode",{parentName:"p"},"variantColor")," can be any color key with key ",Object(o.b)("inlineCode",{parentName:"p"},"50"),"(hover), ",Object(o.b)("inlineCode",{parentName:"p"},"60"),"(checked) that exist in the ",Object(o.b)("inlineCode",{parentName:"p"},"theme.colors"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<CheckboxGroup variantColor="green" defaultValue={["apple", "papaya"]}>\n  <Stack direction="row" spacing="3x">\n    <Checkbox value="apple">Apple</Checkbox>\n    <Checkbox value="orange">Orange</Checkbox>\n    <Checkbox value="papaya">Papaya</Checkbox>\n  </Stack>\n</CheckboxGroup>\n')),Object(o.b)("h3",null,"Sizes"),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"size")," prop to change the size of the ",Object(o.b)("inlineCode",{parentName:"p"},"CheckboxGroup"),". You can set the value to ",Object(o.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(o.b)("inlineCode",{parentName:"p"},"md"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"lg"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="1x" shouldWrapChildren>\n  <CheckboxGroup size="sm">\n    <Stack direction="row" spacing="3x">\n      <Checkbox value="apple">Apple</Checkbox>\n      <Checkbox value="orange">Orange</Checkbox>\n      <Checkbox value="papaya">Papaya</Checkbox>\n    </Stack>\n  </CheckboxGroup>\n  <CheckboxGroup size="md">\n    <Stack direction="row" spacing="3x">\n      <Checkbox value="apple">Apple</Checkbox>\n      <Checkbox value="orange">Orange</Checkbox>\n      <Checkbox value="papaya">Papaya</Checkbox>\n    </Stack>\n  </CheckboxGroup>\n  <CheckboxGroup size="lg">\n    <Stack direction="row" spacing="3x">\n      <Checkbox value="apple">Apple</Checkbox>\n      <Checkbox value="orange">Orange</Checkbox>\n      <Checkbox value="papaya">Papaya</Checkbox>\n    </Stack>\n  </CheckboxGroup>\n</Stack>\n')),Object(o.b)("h3",null,"States"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<CheckboxGroup disabled>\n  <Stack spacing="1x">\n    <Checkbox value="apple">Apple</Checkbox>\n    <Checkbox value="orange">Orange</Checkbox>\n    <Checkbox value="papaya">Papaya</Checkbox>\n  </Stack>\n</CheckboxGroup>\n')),Object(o.b)("h2",null,"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"value"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Array<Checkbox","['value']",">"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The value of the checkbox group.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"disabled"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"false"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If ",Object(o.b)("inlineCode",{parentName:"td"},"true"),", all checkboxes will be disabled.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"variantColor"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The color of the checkbox when it's checked. This should be one of the color keys in the theme (e.g. ",Object(o.b)("inlineCode",{parentName:"td"},"'green'"),", ",Object(o.b)("inlineCode",{parentName:"td"},"'red'"),")")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"size"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"'md'"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The size (width and height) of the checkbox. One of: ",Object(o.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(o.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(o.b)("inlineCode",{parentName:"td"},"'lg'"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"defaultValue"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Array<Checkbox","['value']",">"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The initial value of the checkbox group.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"children"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReactNode"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The content of the checkbox group. Must be the ",Object(o.b)("inlineCode",{parentName:"td"},"Checkbox")," component.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"onChange"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"function"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A callback fired when any descendant ",Object(o.b)("inlineCode",{parentName:"td"},"Checkbox")," is checked or unchecked.")))))}i.isMDXComponent=!0},HbGN:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("+wNj");function r(e,t){if(null==e)return{};var a,r,c=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}},KD1S:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkboxgroup",function(){return a("2gFM")}])},Km8e:function(e,t,a){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},ZVZ0:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a("ERkP"),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"===typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return(r.a.createElement(p.Provider,{value:t},e.children))},O="mdxType",j={inlineCode:"code",wrapper:function(e){var t=e.children;return(r.a.createElement(r.a.Fragment,{},t))}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(a),O=n,h=u["".concat(b,".").concat(O)]||u[O]||j[O]||c;return a?r.a.createElement(h,o(o({ref:t},p),{},{components:a})):r.a.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var c=a.length,b=new Array(c);b[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[O]="string"===typeof e?e:n,b[1]=o;for(var p=2;p<c;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},cxan:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))}},[["KD1S",0,1]]]);