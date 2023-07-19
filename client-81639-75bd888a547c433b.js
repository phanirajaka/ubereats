"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[81639],{33202:(t,e,o)=>{o.d(e,{Z:()=>a});var i=o(77808),r=o(9024),n=o(60783),s=o(81149),l=o(30330);const a=i.forwardRef((function(t,e){const[,o]=(0,r.hQ)(),{title:i="Delete Alt",size:a,color:d,overrides:p={},...c}=t,u=(0,n.vt)({component:o.icons&&o.icons.DeleteAlt?o.icons.DeleteAlt:null},p&&p.Svg?(0,n.hq)(p.Svg):{});return(0,l.tZ)(s.Z,{viewBox:"0 0 24 24",ref:e,title:i,size:a,color:d,overrides:{Svg:u},...c,children:(0,l.tZ)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 20C16.4183 20 20 16.4183 20 12C20 7.58173 16.4183 4 12 4C7.58173 4 4 7.58173 4 12C4 16.4183 7.58173 20 12 20ZM10.0303 8.96967C9.73743 8.67679 9.26257 8.67679 8.96967 8.96967C8.67676 9.26257 8.67676 9.73743 8.96967 10.0303L10.9393 12L8.96967 13.9697C8.67676 14.2626 8.67676 14.7374 8.96967 15.0303C9.26257 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9697 15.0303C14.2626 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697L13.0607 12L15.0303 10.0303C15.3232 9.73743 15.3232 9.26257 15.0303 8.96967C14.7374 8.67679 14.2626 8.67679 13.9697 8.96967L12 10.9393L10.0303 8.96967Z"})})}))},45082:(t,e,o)=>{o.d(e,{Z:()=>m});var i=o(77808),r=o(60783),n=o(22028),s=o(63018),l=o(76089),a=o(9024),d=o(81149),p=o(30330);const c=i.forwardRef((function(t,e){const[,o]=(0,a.hQ)(),{title:i="Hide",size:n,color:s,overrides:l={},...c}=t,u=(0,r.vt)({component:o.icons&&o.icons.Hide?o.icons.Hide:null},l&&l.Svg?(0,r.hq)(l.Svg):{});return(0,p.tZ)(d.Z,{viewBox:"0 0 20 20",ref:e,title:i,size:n,color:s,overrides:{Svg:u},...c,children:(0,p.tZ)("path",{d:"M12.81 4.36l-1.77 1.78a4 4 0 00-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0112.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 01-12.62 5.64l1.77-1.78a4 4 0 004.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"})})}));const u=i.forwardRef((function(t,e){const[,o]=(0,a.hQ)(),{title:i="Show",size:n,color:s,overrides:l={},...c}=t,u=(0,r.vt)({component:o.icons&&o.icons.Show?o.icons.Show:null},l&&l.Svg?(0,r.hq)(l.Svg):{});return(0,p.tZ)(d.Z,{viewBox:"0 0 20 20",ref:e,title:i,size:n,color:s,overrides:{Svg:u},...c,children:(0,p.tZ)("path",{d:"M.2 10a11 11 0 0119.6 0A11 11 0 01.2 10zm9.8 4a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"})})}));var h=o(98529);function g(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,e);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}const b=()=>null;class f extends i.Component{constructor(){super(...arguments),g(this,"inputRef",this.props.inputRef||i.createRef()),g(this,"state",{isFocused:this.props.autoFocus||!1,isMasked:"password"===this.props.type,initialType:this.props.type,isFocusVisibleForClear:!1,isFocusVisibleForMaskToggle:!1}),g(this,"onInputKeyDown",(t=>{this.props.clearOnEscape&&"Escape"===t.key&&this.inputRef.current&&!this.props.readOnly&&(this.clearValue(),t.stopPropagation())})),g(this,"onClearIconClick",(()=>{this.inputRef.current&&this.clearValue(),this.inputRef.current&&this.inputRef.current.focus()})),g(this,"onFocus",(t=>{this.setState({isFocused:!0}),this.props.onFocus(t)})),g(this,"onBlur",(t=>{this.setState({isFocused:!1}),this.props.onBlur(t)})),g(this,"handleFocusForMaskToggle",(t=>{(0,h.E)(t)&&this.setState({isFocusVisibleForMaskToggle:!0})})),g(this,"handleBlurForMaskToggle",(t=>{!1!==this.state.isFocusVisibleForMaskToggle&&this.setState({isFocusVisibleForMaskToggle:!1})})),g(this,"handleFocusForClear",(t=>{(0,h.E)(t)&&this.setState({isFocusVisibleForClear:!0})})),g(this,"handleBlurForClear",(t=>{!1!==this.state.isFocusVisibleForClear&&this.setState({isFocusVisibleForClear:!1})}))}componentDidMount(){const{autoFocus:t,clearable:e}=this.props;this.inputRef.current&&(t&&this.inputRef.current.focus(),e&&this.inputRef.current.addEventListener("keydown",this.onInputKeyDown))}componentWillUnmount(){const{clearable:t}=this.props;t&&this.inputRef.current&&this.inputRef.current.removeEventListener("keydown",this.onInputKeyDown)}clearValue(){const t=this.inputRef.current;if(t){const e=Object.getOwnPropertyDescriptor(this.props.type===n.iB.textarea?HTMLTextAreaElement.prototype:HTMLInputElement.prototype,"value");if(e){const o=e.set;if(o){o.call(t,"");const e=function(t){let e;return"function"==typeof window.Event?e=new window.Event(t,{bubbles:!0,cancelable:!0}):(e=document.createEvent("Event"),e.initEvent(t,!0,!0)),e}("input");t.dispatchEvent(e)}}}}getInputType(){return"password"===this.props.type?this.state.isMasked?"password":"text":this.props.type}renderMaskToggle(){if("password"!==this.props.type)return null;const[t,e]=(0,r.jb)(this.props.overrides.MaskToggleButton,s.ac),[o,i]=(0,r.jb)(this.props.overrides.MaskToggleShowIcon,u),[l,a]=(0,r.jb)(this.props.overrides.MaskToggleHideIcon,c),d=this.state.isMasked?"Show password text":"Hide password text",g={[n.NO.mini]:"12px",[n.NO.compact]:"16px",[n.NO.default]:"20px",[n.NO.large]:"24px"}[this.props.size];return(0,p.tZ)(t,{$size:this.props.size,$isFocusVisible:this.state.isFocusVisibleForMaskToggle,"aria-label":d,onClick:()=>this.setState((t=>({isMasked:!t.isMasked}))),title:d,type:"button",...e,onFocus:(0,h.Ah)(e,this.handleFocusForMaskToggle),onBlur:(0,h.Z5)(e,this.handleBlurForMaskToggle),children:this.state.isMasked?(0,p.tZ)(o,{size:g,title:d,...i}):(0,p.tZ)(l,{size:g,title:d,...a})})}renderClear(){const{clearable:t,value:e,disabled:o,readOnly:i,overrides:a={}}=this.props;if(o||i||!t||null==e||"string"==typeof e&&0===e.length)return null;const[d,c]=(0,r.jb)(a.ClearIconContainer,s.Er),[u,g]=(0,r.jb)(a.ClearIcon,s.i),b="Clear value",f=(0,l.t)(this.props,this.state),m={[n.NO.mini]:"14px",[n.NO.compact]:"14px",[n.NO.default]:"16px",[n.NO.large]:"22px"}[this.props.size];return(0,p.tZ)(d,{$alignTop:this.props.type===n.iB.textarea,...f,...c,children:(0,p.tZ)(u,{size:m,tabIndex:0,title:b,"aria-label":b,onClick:this.onClearIconClick,onKeyDown:t=>{!t.key||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.onClearIconClick())},role:"button",$isFocusVisible:this.state.isFocusVisibleForClear,...f,...g,onFocus:(0,h.Ah)(g,this.handleFocusForClear),onBlur:(0,h.Z5)(g,this.handleBlurForClear)})})}render(){const{overrides:{InputContainer:t,Input:e,Before:o,After:i}}=this.props,a="password"===this.state.initialType&&this.props.autoComplete===f.defaultProps.autoComplete?"new-password":this.props.autoComplete,d=(0,l.t)(this.props,this.state),[c,u]=(0,r.jb)(t,s.fv),[h,g]=(0,r.jb)(e,s.II),[m,y]=(0,r.jb)(o,b),[v,C]=(0,r.jb)(i,b);return(0,p.BX)(c,{"data-baseweb":this.props["data-baseweb"]||"base-input",...d,...u,children:[(0,p.tZ)(m,{...d,...y}),(0,p.tZ)(h,{ref:this.inputRef,"aria-activedescendant":this.props["aria-activedescendant"],"aria-autocomplete":this.props["aria-autocomplete"],"aria-controls":this.props["aria-controls"],"aria-errormessage":this.props["aria-errormessage"],"aria-haspopup":this.props["aria-haspopup"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-describedby":this.props["aria-describedby"],"aria-invalid":this.props.error,"aria-required":this.props.required,autoComplete:a,disabled:this.props.disabled,readOnly:this.props.readOnly,id:this.props.id,inputMode:this.props.inputMode,maxLength:this.props.maxLength,name:this.props.name,onBlur:this.onBlur,onChange:this.props.onChange,onFocus:this.onFocus,onKeyDown:this.props.onKeyDown,onKeyPress:this.props.onKeyPress,onKeyUp:this.props.onKeyUp,pattern:this.props.pattern,placeholder:this.props.placeholder,type:this.getInputType(),required:this.props.required,role:this.props.role,value:this.props.value,min:this.props.min,max:this.props.max,step:this.props.step,rows:this.props.type===n.iB.textarea?this.props.rows:null,...d,...g}),this.renderClear(),this.renderMaskToggle(),(0,p.tZ)(v,{...d,...C})]})}}g(f,"defaultProps",{"aria-activedescendant":null,"aria-autocomplete":null,"aria-controls":null,"aria-errormessage":null,"aria-haspopup":null,"aria-label":null,"aria-labelledby":null,"aria-describedby":null,adjoined:n.y4.none,autoComplete:"on",autoFocus:!1,disabled:!1,error:!1,positive:!1,name:"",inputMode:"text",onBlur:()=>{},onChange:()=>{},onKeyDown:()=>{},onKeyPress:()=>{},onKeyUp:()=>{},onFocus:()=>{},onClear:()=>{},clearable:!1,clearOnEscape:!0,overrides:{},pattern:null,placeholder:"",required:!1,role:null,size:n.NO.default,type:"text",readOnly:!1});const m=f},22028:(t,e,o)=>{o.d(e,{NO:()=>n,Xf:()=>s,iB:()=>i,y4:()=>r});const i={textarea:"textarea"},r={none:"none",left:"left",right:"right",both:"both"},n={mini:"mini",default:"default",compact:"compact",large:"large"},s={start:"start",end:"end"}},63018:(t,e,o)=>{o.d(e,{Er:()=>l,Fp:()=>y,Hx:()=>x,II:()=>S,ac:()=>s,d5:()=>g,fC:()=>b,fv:()=>F,hB:()=>C,i:()=>a});var i=o(9024),r=o(22028),n=o(33202);const s=(0,i.zo)("button",(t=>{let{$theme:e,$size:o,$isFocusVisible:i}=t;const n={[r.NO.mini]:e.sizing.scale400,[r.NO.compact]:e.sizing.scale400,[r.NO.default]:e.sizing.scale300,[r.NO.large]:e.sizing.scale200}[o];return{display:"flex",alignItems:"center",borderTopStyle:"none",borderBottomStyle:"none",borderLeftStyle:"none",borderRightStyle:"none",background:"none",paddingLeft:n,paddingRight:n,outline:i?"solid 3px ".concat(e.colors.borderAccent):"none",color:e.colors.contentPrimary}}));s.displayName="StyledMaskToggleButton";const l=(0,i.zo)("div",(t=>{let{$alignTop:e=!1,$size:o,$theme:i}=t;const n={[r.NO.mini]:i.sizing.scale200,[r.NO.compact]:i.sizing.scale200,[r.NO.default]:i.sizing.scale100,[r.NO.large]:i.sizing.scale0}[o];return{display:"flex",alignItems:e?"flex-start":"center",paddingLeft:n,paddingRight:n,paddingTop:e?i.sizing.scale500:"0px",color:i.colors.contentPrimary}}));l.displayName="StyledClearIconContainer";const a=(0,i.zo)(n.Z,(t=>{let{$theme:e,$isFocusVisible:o}=t;return{cursor:"pointer",outline:o?"solid 3px ".concat(e.colors.borderAccent):"none"}}));function d(t,e){return{[r.NO.mini]:{paddingTop:e.scale100,paddingBottom:e.scale100,paddingLeft:e.scale550,paddingRight:e.scale550},[r.NO.compact]:{paddingTop:e.scale200,paddingBottom:e.scale200,paddingLeft:e.scale550,paddingRight:e.scale550},[r.NO.default]:{paddingTop:e.scale400,paddingBottom:e.scale400,paddingLeft:e.scale550,paddingRight:e.scale550},[r.NO.large]:{paddingTop:e.scale550,paddingBottom:e.scale550,paddingLeft:e.scale550,paddingRight:e.scale550}}[t]}function p(t,e,o,i,n){let s=t===r.y4.both||t===r.y4.left&&"rtl"!==i||t===r.y4.right&&"rtl"===i||n&&"rtl"===i,l=t===r.y4.both||t===r.y4.right&&"rtl"!==i||t===r.y4.left&&"rtl"===i||n&&"rtl"!==i;return{paddingLeft:s?o.scale550:"0px",paddingRight:l?o.scale550:"0px"}}function c(t,e){return{[r.NO.mini]:e.font100,[r.NO.compact]:e.font200,[r.NO.default]:e.font300,[r.NO.large]:e.font400}[t]}function u(t,e,o){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4?arguments[4]:void 0;return t?{borderLeftColor:r.inputFillDisabled,borderRightColor:r.inputFillDisabled,borderTopColor:r.inputFillDisabled,borderBottomColor:r.inputFillDisabled,backgroundColor:r.inputFillDisabled}:e?{borderLeftColor:r.borderSelected,borderRightColor:r.borderSelected,borderTopColor:r.borderSelected,borderBottomColor:r.borderSelected,backgroundColor:r.inputFillActive}:o?{borderLeftColor:r.inputBorderError,borderRightColor:r.inputBorderError,borderTopColor:r.inputBorderError,borderBottomColor:r.inputBorderError,backgroundColor:r.inputFillError}:i?{borderLeftColor:r.inputBorderPositive,borderRightColor:r.inputBorderPositive,borderTopColor:r.inputBorderPositive,borderBottomColor:r.inputBorderPositive,backgroundColor:r.inputFillPositive}:{borderLeftColor:r.inputBorder,borderRightColor:r.inputBorder,borderTopColor:r.inputBorder,borderBottomColor:r.inputBorder,backgroundColor:r.inputFill}}function h(t,e){let o=e.inputBorderRadius;return t===r.NO.mini&&(o=e.inputBorderRadiusMini),{borderTopLeftRadius:o,borderBottomLeftRadius:o,borderTopRightRadius:o,borderBottomRightRadius:o}}a.displayName="StyledClearIcon";const g=t=>{const{$isFocused:e,$adjoined:o,$error:i,$disabled:r,$positive:n,$size:s,$theme:l,$theme:{borders:a,colors:d,sizing:g,typography:b,animation:f},$hasIconTrailing:m}=t;return{boxSizing:"border-box",display:"flex",overflow:"hidden",width:"100%",borderLeftWidth:"2px",borderRightWidth:"2px",borderTopWidth:"2px",borderBottomWidth:"2px",borderLeftStyle:"solid",borderRightStyle:"solid",borderTopStyle:"solid",borderBottomStyle:"solid",transitionProperty:"border",transitionDuration:f.timing200,transitionTimingFunction:f.easeOutCurve,...h(s,a),...c(s,b),...u(r,e,i,n,d),...p(o,0,g,l.direction,m)}},b=(0,i.zo)("div",g);function f(t,e){return{[r.NO.mini]:{paddingRight:e.scale400,paddingLeft:e.scale400},[r.NO.compact]:{paddingRight:e.scale400,paddingLeft:e.scale400},[r.NO.default]:{paddingRight:e.scale300,paddingLeft:e.scale300},[r.NO.large]:{paddingRight:e.scale200,paddingLeft:e.scale200}}[t]}function m(t,e,o,i,r){return t?{color:r.inputEnhancerTextDisabled,backgroundColor:r.inputFillDisabled}:e?{color:r.contentPrimary,backgroundColor:r.inputFillActive}:o?{color:r.contentPrimary,backgroundColor:r.inputFillError}:i?{color:r.contentPrimary,backgroundColor:r.inputFillPositive}:{color:r.contentPrimary,backgroundColor:r.inputFill}}b.displayName="Root";const y=(0,i.zo)("div",(t=>{const{$size:e,$disabled:o,$isFocused:i,$error:r,$positive:n,$theme:{colors:s,sizing:l,typography:a,animation:d}}=t;return{display:"flex",alignItems:"center",justifyContent:"center",transitionProperty:"color, background-color",transitionDuration:d.timing200,transitionTimingFunction:d.easeOutCurve,...c(e,a),...f(e,l),...m(o,i,r,n,s)}}));function v(t,e,o,i,r){return t?{color:r.inputTextDisabled,backgroundColor:r.inputFillDisabled}:e?{color:r.contentPrimary,backgroundColor:r.inputFillActive}:o?{color:r.contentPrimary,backgroundColor:r.inputFillError}:i?{color:r.contentPrimary,backgroundColor:r.inputFillPositive}:{color:r.contentPrimary,backgroundColor:r.inputFill}}y.displayName="InputEnhancer";const C=t=>{const{$isFocused:e,$error:o,$disabled:i,$positive:r,$size:n,$theme:{colors:s,typography:l,animation:a}}=t;return{display:"flex",width:"100%",transitionProperty:"background-color",transitionDuration:a.timing200,transitionTimingFunction:a.easeOutCurve,...c(n,l),...v(i,e,o,r,s)}},F=(0,i.zo)("div",C);function k(t,e,o,i){return t?{color:i.inputTextDisabled,"-webkit-text-fill-color":i.inputTextDisabled,caretColor:i.contentPrimary,"::placeholder":{color:i.inputPlaceholderDisabled}}:{color:i.contentPrimary,caretColor:i.contentPrimary,"::placeholder":{color:i.inputPlaceholder}}}F.displayName="InputContainer";const x=t=>{const{$disabled:e,$isFocused:o,$error:i,$size:r,$theme:{colors:n,sizing:s,typography:l}}=t;return{boxSizing:"border-box",backgroundColor:"transparent",borderLeftWidth:0,borderRightWidth:0,borderTopWidth:0,borderBottomWidth:0,borderLeftStyle:"none",borderRightStyle:"none",borderTopStyle:"none",borderBottomStyle:"none",outline:"none",width:"100%",minWidth:0,maxWidth:"100%",cursor:e?"not-allowed":"text",margin:"0",paddingTop:"0",paddingBottom:"0",paddingLeft:"0",paddingRight:"0",...c(r,l),...d(r,s),...k(e,0,0,n)}},S=(0,i.zo)("input",x);S.displayName="Input"},76089:(t,e,o)=>{function i(t,e){const{disabled:o,error:i,positive:r,adjoined:n,size:s,required:l,resize:a,readOnly:d}=t,{isFocused:p}=e;return{$isFocused:p,$disabled:o,$error:i,$positive:r,$adjoined:n,$size:s,$required:l,$resize:a,$isReadOnly:d}}o.d(e,{t:()=>i})},81830:(t,e,o)=>{o.d(e,{Z:()=>l});var i=o(64248),r=o(2220),n=o(30330);const s=(0,i.zo)("div",(t=>{let{$theme:e}=t;return{height:0,borderBottom:"2px solid ".concat(e.colors.borderOpaque)}})),l=(0,r.Z)((t=>t.isStuck?(0,n.tZ)(s,{}):null))},2220:(t,e,o)=>{o.d(e,{Z:()=>c});var i=o(85865),r=o(77808),n=o(44335),s=o(30330);function l(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,e);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}const a={},d=t=>({height:t}),p={sticky_when_scrolling:t=>{let{zIndex:e,topOffset:o,leftAligned:i}=t;return{zIndex:e,position:"fixed",top:"".concat(o,"px"),...i?{left:"0px"}:{},width:"100%"}},sticky_when_scrolling_up:t=>{let{zIndex:e,topOffset:o,leftAligned:i,isVisible:r,childHeight:n}=t;return{zIndex:e,position:"fixed",top:"".concat(r?o:-(n||0),"px"),...i?{left:"0px"}:{},width:"100%",transition:"top 500ms"}},not_sticky:()=>a};function c(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sticky_when_scrolling";class o extends r.Component{constructor(){super(...arguments),l(this,"parentRef",r.createRef()),l(this,"childRef",r.createRef()),l(this,"state",{shouldStick:!1,childHeight:0,topOffset:this.props.topOffset||0,scrollOffsetY:0,isScrollingUp:!0}),l(this,"onScroll",(()=>{const t=this.parentRef.current,o=this.childRef.current;if(!t||!o)return;const i=t.getBoundingClientRect(),r=o.getBoundingClientRect(),n=this.state.scrollOffsetY<i.top,s="sticky_when_scrolling_up"!==e||n?0:r.height,l="not_sticky"!==e&&i.top+s<this.state.topOffset;this.state.shouldStick!==l||this.state.childHeight!==r.height?this.setState({shouldStick:l,childHeight:r.height,scrollOffsetY:i.top,isScrollingUp:n}):this.setState({...this.state,isScrollingUp:n,scrollOffsetY:i.top})}))}componentDidMount(){i.Z&&(i.Z.addEventListener("scroll",this.onScroll),this.onScroll())}componentDidUpdate(t){t.topOffset!==this.props.topOffset&&this.setState({topOffset:this.props.topOffset})}componentWillUnmount(){i.Z&&i.Z.removeEventListener("scroll",this.onScroll)}render(){return(0,s.tZ)("div",{ref:this.parentRef,style:this.state.shouldStick?d(this.state.childHeight):a,children:(0,s.tZ)("div",{style:this.state.shouldStick?p[e]({topOffset:this.state.topOffset,zIndex:this.props.zIndex||n.I_.cover,leftAligned:!this.props.disableLeftAlign,isVisible:this.state.isScrollingUp,childHeight:this.state.childHeight}):a,ref:this.childRef,children:(0,s.tZ)(t,{...this.props,isStuck:this.state.shouldStick})})})}}return o}},71221:(t,e,o)=>{o.d(e,{Z:()=>s});var i=o(18898),r=o(37725),n=o(67573);function s(){const t=(0,r.k6)(),e=i.useContext(n.v);return i.useCallback((o=>{if(!e)return t.push(o);t.goBack()}),[e,t])}}}]);