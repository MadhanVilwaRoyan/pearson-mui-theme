webpackJsonp([0],{198:function(e,t,l){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e){return s.a.createElement(g.a,{component:"div",style:{padding:24}},e.children)}Object.defineProperty(t,"__esModule",{value:!0});var i=l(0),s=l.n(i),c=l(2),d=l.n(c),u=l(35),f=(l.n(u),l(185)),h=l.n(f),p=l(784),v=l.n(p),m=l(797),b=l.n(m),y=l(182),g=l.n(y),S=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}();r.propTypes={children:d.a.node.isRequired};var w=function(e){return{root:{flexGrow:1,backgroundColor:"#f5f5f5",padding:"10px"}}},C=function(e){function t(){var e,l,o,r;a(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return l=o=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={value:0},o.handleChange=function(e,t){o.setState({value:t})},r=l,n(o,r)}return o(t,e),S(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.value;return s.a.createElement("div",{className:e.root},s.a.createElement(h.a,{position:"static"},s.a.createElement(v.a,{centered:!0,value:t,onChange:this.handleChange},s.a.createElement(b.a,{label:"Assignments"}),s.a.createElement(b.a,{label:"Table of Contents"}),s.a.createElement(b.a,{label:"Notebook"}))),0===t&&s.a.createElement(r,null,"Showing Assignments"),1===t&&s.a.createElement(r,null,"Showing Table of Contents"),2===t&&s.a.createElement(r,null,"Notebook should be here!"))}}]),t}(s.a.Component);C.propTypes={classes:d.a.object.isRequired},t.default=Object(u.withStyles)(w)(C)},772:function(e,t,l){"use strict";var a=l(1);t.__esModule=!0,t.default=void 0;var n=a(l(792)),o=a(l(795)),r=(a(l(773)),a(l(106)),function(e){var t=(0,n.default)(function(e,t){return!(0,o.default)(e,t)});return t(e)}),i=r;t.default=i},773:function(e,t,l){"use strict";var a=l(1);t.__esModule=!0,t.default=void 0;var n=a(l(794)),o=function(e){return(0,n.default)("displayName",e)},r=o;t.default=r},784:function(e,t,l){"use strict";var a=l(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=a(l(785))},785:function(e,t,l){"use strict";var a=l(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=a(l(3)),o=a(l(4)),r=a(l(10)),i=a(l(11)),s=a(l(12)),c=a(l(13)),d=a(l(14)),u=a(l(6)),f=a(l(0)),h=(a(l(2)),a(l(5)),a(l(7))),p=a(l(183)),v=a(l(184)),m=l(786),b=a(l(787)),y=a(l(788)),g=a(l(9)),S=a(l(789)),w=a(l(790)),C=function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch"},flexContainer:{display:"flex"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll"},scrollButtons:{},scrollButtonsAuto:(0,u.default)({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}};t.styles=C;var x=function(e){function t(){var e;return(0,r.default)(this,t),e=(0,s.default)(this,(0,c.default)(t).call(this)),e.state={indicatorStyle:{},scrollerStyle:{marginBottom:0},showLeftScroll:!1,showRightScroll:!1,mounted:!1},e.getConditionalElements=function(){var t=e.props,l=t.classes,a=t.scrollable,n=t.ScrollButtonComponent,o=t.scrollButtons,r=t.theme,i={};i.scrollbarSizeListener=a?f.default.createElement(y.default,{onLoad:e.handleScrollbarSizeChange,onChange:e.handleScrollbarSizeChange}):null;var s=a&&("auto"===o||"on"===o);return i.scrollButtonLeft=s?f.default.createElement(n,{direction:r&&"rtl"===r.direction?"right":"left",onClick:e.handleLeftScrollClick,visible:e.state.showLeftScroll,className:(0,h.default)(l.scrollButtons,(0,u.default)({},l.scrollButtonsAuto,"auto"===o))}):null,i.scrollButtonRight=s?f.default.createElement(n,{direction:r&&"rtl"===r.direction?"left":"right",onClick:e.handleRightScrollClick,visible:e.state.showRightScroll,className:(0,h.default)(l.scrollButtons,(0,u.default)({},l.scrollButtonsAuto,"auto"===o))}):null,i},e.getTabsMeta=function(t,l){var a;if(e.tabsRef){var n=e.tabsRef.getBoundingClientRect();a={clientWidth:e.tabsRef.clientWidth,scrollLeft:e.tabsRef.scrollLeft,scrollLeftNormalized:(0,m.getNormalizedScrollLeft)(e.tabsRef,l),scrollWidth:e.tabsRef.scrollWidth,left:n.left,right:n.right}}var o;if(e.tabsRef&&!1!==t){var r=e.tabsRef.children[0].children;if(r.length>0){var i=r[e.valueToIndex.get(t)];o=i?i.getBoundingClientRect():null}}return{tabsMeta:a,tabMeta:o}},e.handleLeftScrollClick=function(){e.moveTabsScroll(-e.tabsRef.clientWidth)},e.handleRightScrollClick=function(){e.moveTabsScroll(e.tabsRef.clientWidth)},e.handleScrollbarSizeChange=function(t){var l=t.scrollbarHeight;e.setState({scrollerStyle:{marginBottom:-l}})},e.moveTabsScroll=function(t){var l=e.props.theme,a="rtl"===l.direction?-1:1,n=e.tabsRef.scrollLeft+t*a,o="rtl"===l.direction&&"reverse"===(0,m.detectScrollType)()?-1:1;e.scroll(o*n)},e.scrollSelectedIntoView=function(){var t=e.props,l=t.theme,a=t.value,n=e.getTabsMeta(a,l.direction),o=n.tabsMeta,r=n.tabMeta;if(r&&o)if(r.left<o.left){var i=o.scrollLeft+(r.left-o.left);e.scroll(i)}else if(r.right>o.right){var s=o.scrollLeft+(r.right-o.right);e.scroll(s)}},e.scroll=function(t){(0,b.default)("scrollLeft",e.tabsRef,t)},e.updateScrollButtonState=function(){var t=e.props,l=t.scrollable,a=t.scrollButtons,n=t.theme;if(l&&"off"!==a){var o=e.tabsRef,r=o.scrollWidth,i=o.clientWidth,s=(0,m.getNormalizedScrollLeft)(e.tabsRef,n.direction),c="rtl"===n.direction?r>i+s:s>0,d="rtl"===n.direction?s>0:r>i+s;c===e.state.showLeftScroll&&d===e.state.showRightScroll||e.setState({showLeftScroll:c,showRightScroll:d})}},"undefined"!==typeof window&&(e.handleResize=(0,v.default)(function(){e.updateIndicatorState(e.props),e.updateScrollButtonState()},166),e.handleTabsScroll=(0,v.default)(function(){e.updateScrollButtonState()},166)),e}return(0,d.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.setState({mounted:!0}),this.updateIndicatorState(this.props),this.updateScrollButtonState(),this.props.action&&this.props.action({updateIndicator:this.handleResize})}},{key:"componentDidUpdate",value:function(e,t){this.updateIndicatorState(this.props),this.updateScrollButtonState(),this.state.indicatorStyle!==t.indicatorStyle&&this.scrollSelectedIntoView()}},{key:"componentWillUnmount",value:function(){this.handleResize.clear(),this.handleTabsScroll.clear()}},{key:"updateIndicatorState",value:function(e){var t=e.theme,l=e.value,a=this.getTabsMeta(l,t.direction),n=a.tabsMeta,o=a.tabMeta,r=0;if(o&&n){var i="rtl"===t.direction?n.scrollLeftNormalized+n.clientWidth-n.scrollWidth:n.scrollLeft;r=Math.round(o.left-n.left+i)}var s={left:r,width:o?Math.round(o.width):0};s.left===this.state.indicatorStyle.left&&s.width===this.state.indicatorStyle.width||isNaN(s.left)||isNaN(s.width)||this.setState({indicatorStyle:s})}},{key:"render",value:function(){var e,t=this,l=this.props,a=(l.action,l.centered),r=l.children,i=l.classes,s=l.className,c=l.component,d=l.fullWidth,v=l.indicatorColor,m=l.onChange,b=l.scrollable,y=(l.ScrollButtonComponent,l.scrollButtons,l.TabIndicatorProps),g=void 0===y?{}:y,w=l.textColor,C=(l.theme,l.value),x=(0,o.default)(l,["action","centered","children","classes","className","component","fullWidth","indicatorColor","onChange","scrollable","ScrollButtonComponent","scrollButtons","TabIndicatorProps","textColor","theme","value"]),W=(0,h.default)(i.root,s),_=(0,h.default)(i.flexContainer,(0,u.default)({},i.centered,a&&!b)),R=(0,h.default)(i.scroller,(e={},(0,u.default)(e,i.fixed,!b),(0,u.default)(e,i.scrollable,b),e)),E=f.default.createElement(S.default,(0,n.default)({className:i.indicator,color:v},g,{style:(0,n.default)({},this.state.indicatorStyle,g.style)}));this.valueToIndex=new Map;var M=0,k=f.default.Children.map(r,function(e){if(!f.default.isValidElement(e))return null;var l=void 0===e.props.value?M:e.props.value;t.valueToIndex.set(l,M);var a=l===C;return M+=1,f.default.cloneElement(e,{fullWidth:d,indicator:a&&!t.state.mounted&&E,selected:a,onChange:m,textColor:w,value:l})}),N=this.getConditionalElements();return f.default.createElement(c,(0,n.default)({className:W},x),f.default.createElement(p.default,{target:"window",onResize:this.handleResize}),N.scrollbarSizeListener,f.default.createElement("div",{className:i.flexContainer},N.scrollButtonLeft,f.default.createElement("div",{className:R,style:this.state.scrollerStyle,ref:function(e){t.tabsRef=e},role:"tablist",onScroll:this.handleTabsScroll},f.default.createElement("div",{className:_},k),this.state.mounted&&E),N.scrollButtonRight))}}]),t}(f.default.Component);x.propTypes={},x.defaultProps={centered:!1,component:"div",fullWidth:!1,indicatorColor:"secondary",scrollable:!1,ScrollButtonComponent:w.default,scrollButtons:"auto",textColor:"inherit"};var W=(0,g.default)(C,{name:"MuiTabs",withTheme:!0})(x);t.default=W},786:function(e,t,l){"use strict";function a(e){i=e}function n(){if(i)return i;if(!s||!window.document.body)return"indeterminate";var e=window.document.createElement("div");return e.appendChild(document.createTextNode("ABCD")),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),i="reverse",e.scrollLeft>0?i="default":(e.scrollLeft=1,0===e.scrollLeft&&(i="negative")),document.body.removeChild(e),i}function o(e,t){var l=e.scrollLeft;if("rtl"!==t)return l;var a=n();if("indeterminate"===a)return Number.NaN;switch(a){case"negative":return e.scrollWidth-e.clientWidth+l;case"reverse":return e.scrollWidth-e.clientWidth-l}return l}function r(e,t,l){if("rtl"!==l)return void(e.scrollLeft=t);var a=n();if("indeterminate"!==a)switch(a){case"negative":e.scrollLeft=e.clientWidth-e.scrollWidth+t;break;case"reverse":e.scrollLeft=e.scrollWidth-e.clientWidth-t;break;default:e.scrollLeft=t}}Object.defineProperty(t,"__esModule",{value:!0});var i,s=!("undefined"===typeof window||!window.document||!window.document.createElement);t._setScrollType=a,t.detectScrollType=n,t.getNormalizedScrollLeft=o,t.setNormalizedScrollLeft=r},787:function(e,t,l){"use strict";function a(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function n(e,t,l){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},r=n.ease,i=void 0===r?a:r,s=n.duration,c=void 0===s?300:s,d=null,u=t[e],f=!1,h=function(){f=!0},p=function a(n){if(f)return void o(new Error("Animation cancelled"));null===d&&(d=n);var r=Math.min(1,(n-d)/c);if(t[e]=i(r)*(l-u)+u,r>=1)return void requestAnimationFrame(function(){o(null)});requestAnimationFrame(a)};return u===l?(o(new Error("Element already at target position")),h):(requestAnimationFrame(p),h)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n;t.default=o},788:function(e,t,l){"use strict";var a=l(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(10)),o=a(l(11)),r=a(l(12)),i=a(l(13)),s=a(l(14)),c=a(l(0)),d=(a(l(2)),a(l(183))),u=a(l(184)),f={width:100,height:100,position:"absolute",top:-1e4,overflow:"scroll",msOverflowStyle:"scrollbar"},h=function(e){function t(){var e;return(0,n.default)(this,t),e=(0,r.default)(this,(0,i.default)(t).call(this)),e.setMeasurements=function(){var t=e.nodeRef;t&&(e.scrollbarHeight=t.offsetHeight-t.clientHeight,e.scrollbarWidth=t.offsetWidth-t.clientWidth)},"undefined"!==typeof window&&(e.handleResize=(0,u.default)(function(){var t=e.props.onChange,l=e.scrollbarHeight,a=e.scrollbarWidth;e.setMeasurements(),l===e.scrollbarHeight&&a===e.scrollbarWidth||t({scrollbarHeight:e.scrollbarHeight,scrollbarWidth:e.scrollbarWidth})},166)),e}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.setMeasurements(),this.props.onLoad({scrollbarHeight:this.scrollbarHeight,scrollbarWidth:this.scrollbarWidth})}},{key:"componentWillUnmount",value:function(){this.handleResize.clear()}},{key:"render",value:function(){var e=this,t=this.props.onChange;return c.default.createElement("div",null,t?c.default.createElement(d.default,{target:"window",onResize:this.handleResize}):null,c.default.createElement("div",{style:f,ref:function(t){e.nodeRef=t}}))}}]),t}(c.default.Component);h.propTypes={};var p=h;t.default=p},789:function(e,t,l){"use strict";function a(e){var t=e.classes,l=e.className,a=e.color,n=(0,r.default)(e,["classes","className","color"]);return i.default.createElement("span",(0,o.default)({className:(0,s.default)(t.root,t["color".concat((0,d.capitalize)(a))],l)},n))}var n=l(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(l(3)),r=n(l(4)),i=n(l(0)),s=(n(l(2)),n(l(7))),c=n(l(9)),d=l(28),u=function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create(),willChange:"left, width"},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main}}};t.styles=u,a.propTypes={};var f=(0,c.default)(u,{name:"MuiPrivateTabIndicator"})(a);t.default=f},790:function(e,t,l){"use strict";function a(e){var t=e.classes,l=e.className,a=e.direction,n=e.onClick,c=e.visible,d=(0,r.default)(e,["classes","className","direction","onClick","visible"]),u=(0,s.default)(t.root,l);return c?i.default.createElement(f.default,(0,o.default)({className:u,onClick:n,tabIndex:-1},d),"left"===a?p:v):i.default.createElement("div",{className:u})}var n=l(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(l(3)),r=n(l(4)),i=n(l(0)),s=(n(l(2)),n(l(7))),c=n(l(791)),d=n(l(796)),u=n(l(9)),f=n(l(104)),h={root:{color:"inherit",flex:"0 0 56px"}};t.styles=h;var p=i.default.createElement(c.default,null),v=i.default.createElement(d.default,null);a.propTypes={},a.defaultProps={visible:!0};var m=(0,u.default)(h,{name:"MuiPrivateTabScrollButton"})(a);t.default=m},791:function(e,t,l){"use strict";var a=l(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(0)),o=a(l(772)),r=a(l(107)),i=n.default.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),s=function(e){return n.default.createElement(r.default,e,i)};s=(0,o.default)(s),s.muiName="SvgIcon";var c=s;t.default=c},792:function(e,t,l){"use strict";var a=l(1);t.__esModule=!0,t.default=void 0;var n=a(l(793)),o=l(0),r=(a(l(773)),a(l(106)),function(e){return function(t){var l=(0,o.createFactory)(t),a=function(t){function a(){return t.apply(this,arguments)||this}(0,n.default)(a,t);var o=a.prototype;return o.shouldComponentUpdate=function(t){return e(this.props,t)},o.render=function(){return l(this.props)},a}(o.Component);return a}}),i=r;t.default=i},793:function(e,t){function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}e.exports=l},794:function(e,t,l){"use strict";t.__esModule=!0,t.default=void 0;var a=function(e,t){return function(l){return l[e]=t,l}},n=a;t.default=n},795:function(e,t,l){"use strict";var a=l(1);t.__esModule=!0,t.default=void 0;var n=a(l(186)),o=n.default;t.default=o},796:function(e,t,l){"use strict";var a=l(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(0)),o=a(l(772)),r=a(l(107)),i=n.default.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),s=function(e){return n.default.createElement(r.default,e,i)};s=(0,o.default)(s),s.muiName="SvgIcon";var c=s;t.default=c},797:function(e,t,l){"use strict";var a=l(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=a(l(798))},798:function(e,t,l){"use strict";var a=l(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=a(l(4)),o=a(l(10)),r=a(l(11)),i=a(l(12)),s=a(l(13)),c=a(l(14)),d=a(l(6)),u=a(l(3)),f=a(l(0)),h=(a(l(2)),a(l(7))),p=a(l(9)),v=a(l(104)),m=l(28),b=(a(l(799)),function(e){return{root:(0,u.default)({},e.typography.button,(0,d.default)({maxWidth:264,position:"relative",minWidth:72,padding:0,minHeight:48,flexShrink:0,overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.breakpoints.up("md"),{fontSize:e.typography.pxToRem(13),minWidth:160})),labelIcon:{minHeight:72},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.4}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,maxWidth:"none"},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"},labelContainer:(0,d.default)({width:"100%",boxSizing:"border-box",paddingTop:6,paddingBottom:6,paddingLeft:12,paddingRight:12},e.breakpoints.up("md"),{paddingLeft:24,paddingRight:24}),label:{},labelWrapped:(0,d.default)({},e.breakpoints.down("sm"),{fontSize:e.typography.pxToRem(12)})}});t.styles=b;var y=function(e){function t(){var e,l;(0,o.default)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return l=(0,i.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(n))),l.state={labelWrapped:!1},l.handleChange=function(e){var t=l.props,a=t.onChange,n=t.value,o=t.onClick;a&&a(e,n),o&&o(e)},l.checkTextWrap=function(){if(l.labelRef){var e=l.labelRef.getClientRects().length>1;l.state.labelWrapped!==e&&l.setState({labelWrapped:e})}},l}return(0,c.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.checkTextWrap()}},{key:"componentDidUpdate",value:function(e,t){this.state.labelWrapped===t.labelWrapped&&this.checkTextWrap()}},{key:"render",value:function(){var e,t,l=this,a=this.props,o=a.classes,r=a.className,i=a.disabled,s=a.fullWidth,c=a.icon,p=a.indicator,b=a.label,y=(a.onChange,a.selected),g=a.textColor,S=(a.value,(0,n.default)(a,["classes","className","disabled","fullWidth","icon","indicator","label","onChange","selected","textColor","value"]));void 0!==b&&(t=f.default.createElement("span",{className:o.labelContainer},f.default.createElement("span",{className:(0,h.default)(o.label,(0,d.default)({},o.labelWrapped,this.state.labelWrapped)),ref:function(e){l.labelRef=e}},b)));var w=(0,h.default)(o.root,o["textColor".concat((0,m.capitalize)(g))],(e={},(0,d.default)(e,o.disabled,i),(0,d.default)(e,o.selected,y),(0,d.default)(e,o.labelIcon,c&&t),(0,d.default)(e,o.fullWidth,s),e),r);return f.default.createElement(v.default,(0,u.default)({focusRipple:!0,className:w,role:"tab","aria-selected":y,disabled:i},S,{onClick:this.handleChange}),f.default.createElement("span",{className:o.wrapper},c,t),p)}}]),t}(f.default.Component);y.propTypes={},y.defaultProps={disabled:!1,textColor:"inherit"};var g=(0,p.default)(b,{name:"MuiTab"})(y);t.default=g},799:function(e,t,l){"use strict";function a(e,t,l,a,n){return null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a;t.default=n}});
//# sourceMappingURL=0.68c24912.chunk.js.map