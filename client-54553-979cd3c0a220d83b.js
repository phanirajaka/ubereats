"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[54553],{71694:(e,t,o)=>{o.d(t,{j:()=>v});var r=o(13340),n=o(39696),a=o(60783),l=o(9024),i=o(75190);const c=(0,l.zo)("div",(e=>{let{$theme:t,$backgroundColor:o,$color:r,$nested:n}=e;const a=n?t.borders.radius300:t.borders.radius400;return{backgroundColor:o,borderStartStartRadius:a,borderStartEndRadius:a,borderEndStartRadius:a,borderEndEndRadius:a,color:r,display:"grid",gridColumnGap:t.sizing.scale600,gridTemplateColumns:"min-content auto min-content",gridTemplateRows:"auto minmax(0, min-content)",marginTop:t.sizing.scale600,marginRight:t.sizing.scale600,marginBottom:t.sizing.scale600,marginLeft:t.sizing.scale600}}));c.displayName="StyledRoot";const s=(0,l.zo)("div",(e=>{let{$theme:t,$includesArtwork:o}=e;return{alignItems:"center",display:"flex",paddingInlineStart:o?t.sizing.scale600:null}}));s.displayName="StyledLeadingContent";const d=(0,l.zo)("div",(e=>{let{$theme:t,$actionPosition:o}=e;return{display:"flex",flexDirection:"column",justifyContent:"center",paddingBlockStart:t.sizing.scale600,paddingBlockEnd:o===i.LZ.trailing?t.sizing.scale600:null}}));d.displayName="StyledMessageContent";const u=(0,l.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",gridRowEnd:"span 2",marginInlineStart:"auto"}}));u.displayName="StyledTrailingContent";const g=(0,l.zo)("div",(e=>{let{$theme:t,$actionPosition:o}=e;return{gridColumnStart:2,paddingBlockStart:o===i.LZ.below?t.sizing.scale300:null,paddingBlockEnd:o===i.LZ.below?t.sizing.scale600:null}}));g.displayName="StyledBelowContent";const b=(0,l.zo)("div",(e=>{let{$theme:t}=e;return t.typography.LabelMedium}));b.displayName="StyledTitle";const h=(0,l.zo)("div",(e=>{let{$theme:t}=e;return t.typography.ParagraphMedium}));h.displayName="StyledMessage";const m=(0,l.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",paddingInlineEnd:t.sizing.scale600}}));m.displayName="StyledTrailingButtonContainer";const p=(0,l.zo)("button",(e=>{let{$theme:t,$nested:o}=e;const r=o?t.borders.radius300:t.borders.radius400;return{alignItems:"center",background:"none",border:"none",borderStartEndRadius:r,borderEndEndRadius:r,color:"inherit",cursor:"pointer",display:"flex",paddingInlineStart:t.sizing.scale600,paddingInlineEnd:t.sizing.scale600,":hover":{boxShadow:"inset 999px 999px 0px rgba(0, 0, 0, 0.04)"},":active":{boxShadow:"inset 999px 999px 0px rgba(0, 0, 0, 0.08)"}}}));p.displayName="StyledTrailingIconButton";var C=o(30330);function k(e){let{artwork:t}=e;const[,o]=(0,l.hQ)();if(!t)return null;const r=t.type===i.Tz.badge?o.sizing.scale1000:o.sizing.scale800;return t.icon({size:r})}function f(e){let{action:t,backgroundColor:o,color:a}=e;return t&&t.position===i.LZ.below&&t.label?(0,C.tZ)(r.Z,{colors:{backgroundColor:o,color:a},onClick:t.onClick,size:n.NO.compact,shape:n.X3.pill,children:t.label}):null}function S(e){let{action:t,backgroundColor:o,color:c,overrides:s,nested:d}=e;const[,u]=(0,l.hQ)();if(!t||t.position&&t.position!==i.LZ.trailing)return null;const[g,b]=(0,a.jb)(s.TrailingIconButton,p);if(t.icon)return(0,C.tZ)(g,{"aria-label":t.label,onClick:t.onClick,$nested:d,...b,children:t.icon({size:u.sizing.scale650})});const[h,k]=(0,a.jb)(s.TrailingButtonContainer,m);return t.label?(0,C.tZ)(h,{...k,children:(0,C.tZ)(r.Z,{colors:{backgroundColor:o,color:c},onClick:t.onClick,size:n.NO.compact,shape:n.X3.pill,overrides:{BaseButton:{style:{whiteSpace:"nowrap"}}},children:t.label})}):null}function v(e){let{action:t,artwork:o,children:r,hierarchy:n=i.T5.low,kind:m=i.TO.info,overrides:p={},nested:v=!1,title:w}=e;const[,y]=(0,l.hQ)(),L=n===i.T5.high?function(e,t){switch(t){case i.TO.negative:return{actionBackgroundColor:e.colors.bannerActionHighNegative,backgroundColor:e.colors.backgroundNegative,color:e.colors.contentOnColor};case i.TO.positive:return{actionBackgroundColor:e.colors.bannerActionHighPositive,backgroundColor:e.colors.backgroundPositive,color:e.colors.contentOnColor};case i.TO.warning:return{actionBackgroundColor:e.colors.bannerActionHighWarning,backgroundColor:e.colors.backgroundWarning,color:e.colors.contentPrimary};case i.TO.info:default:return{actionBackgroundColor:e.colors.bannerActionHighInfo,backgroundColor:e.colors.backgroundAccent,color:e.colors.contentOnColor}}}(y,m):function(e,t){switch(t){case i.TO.negative:return{actionBackgroundColor:e.colors.bannerActionLowNegative,backgroundColor:e.colors.backgroundNegativeLight,color:e.colors.contentPrimary};case i.TO.positive:return{actionBackgroundColor:e.colors.bannerActionLowPositive,backgroundColor:e.colors.backgroundPositiveLight,color:e.colors.contentPrimary};case i.TO.warning:return{actionBackgroundColor:e.colors.bannerActionLowWarning,backgroundColor:e.colors.backgroundWarningLight,color:e.colors.contentPrimary};case i.TO.info:default:return{actionBackgroundColor:e.colors.bannerActionLowInfo,backgroundColor:e.colors.backgroundAccentLight,color:e.colors.contentPrimary}}}(y,m),x=t&&t.position?t.position:i.LZ.trailing,[z,T]=(0,a.jb)(p.Root,c),[P,Z]=(0,a.jb)(p.LeadingContent,s),[N,A]=(0,a.jb)(p.MessageContent,d),[R,B]=(0,a.jb)(p.TrailingContent,u),[F,$]=(0,a.jb)(p.BelowContent,g),[E,I]=(0,a.jb)(p.Title,b),[O,M]=(0,a.jb)(p.Message,h),j=T.hasOwnProperty("aria-label")?T["aria-label"]:"this is an announcement banner";return(0,C.BX)(z,{$backgroundColor:L.backgroundColor,$color:L.color,$nested:v,...T,role:"complementary","aria-label":j,children:[(0,C.tZ)(P,{$includesArtwork:Boolean(o),...Z,children:(0,C.tZ)(k,{artwork:o})}),(0,C.BX)(N,{$actionPosition:x,...A,children:[Boolean(w)&&(0,C.tZ)(E,{...I,children:w}),Boolean(r)&&(0,C.tZ)(O,{...M,children:r})]}),(0,C.tZ)(R,{...B,children:(0,C.tZ)(S,{action:t,backgroundColor:L.actionBackgroundColor,color:L.color,overrides:p,nested:v})}),(0,C.tZ)(F,{$actionPosition:x,...$,children:(0,C.tZ)(f,{action:t,backgroundColor:L.actionBackgroundColor,color:L.color})})]})}},75190:(e,t,o)=>{o.d(t,{LZ:()=>r,T5:()=>a,TO:()=>l,Tz:()=>n});const r=Object.freeze({below:"below",trailing:"trailing"}),n=Object.freeze({icon:"icon",badge:"badge"}),a=Object.freeze({low:"low",high:"high"}),l=Object.freeze({info:"info",negative:"negative",positive:"positive",warning:"warning"})},44792:(e,t,o)=>{o.d(t,{R:()=>r});const r=o(77808).createContext({accordion:{collapse:"Collapse",expand:"Expand"},breadcrumbs:{ariaLabel:"Breadcrumbs navigation"},datepicker:{ariaLabel:"Select a date.",ariaLabelRange:"Select a date range.",ariaLabelCalendar:"Calendar.",ariaRoleDescriptionCalendarMonth:"Calendar month",previousMonth:"Previous month.",nextMonth:"Next month.",pastWeek:"Past Week",pastMonth:"Past Month",pastThreeMonths:"Past 3 Months",pastSixMonths:"Past 6 Months",pastYear:"Past Year",pastTwoYears:"Past 2 Years",screenReaderMessageInput:"Date format is ${formatString}. Press the down arrow or enter key to interact with the calendar and select a date. Press the escape button to close the calendar.",selectedDate:"Selected date is ${date}.",selectedDateRange:"Selected date range is from ${startDate} to ${endDate}.",selectSecondDatePrompt:"Select the second date.",quickSelectLabel:"Choose a date range",quickSelectAriaLabel:"Choose a date range",quickSelectPlaceholder:"None",timeSelectEndLabel:"End time",timeSelectStartLabel:"Start time",timePickerAriaLabel12Hour:"Select a time, 12-hour format.",timePickerAriaLabel24Hour:"Select a time, 24-hour format.",timezonePickerAriaLabel:"Select a timezone.",selectedStartDateLabel:"Selected start date.",selectedEndDateLabel:"Selected end date.",dateNotAvailableLabel:"Not available.",dateAvailableLabel:"It's available.",selectedLabel:"Selected.",chooseLabel:"Choose"},datatable:{emptyState:"No rows match the filter criteria defined. Please remove one or more filters to view more data.",loadingState:"Loading rows.",searchAriaLabel:"Search by text",filterAdd:"Add Filter",filterExclude:"Exclude",filterApply:"Apply",filterExcludeRange:"Exclude range",filterExcludeValue:"Exclude value",filterAppliedTo:"filter applied to",optionsLabel:"Select column to filter by",optionsSearch:"Search for a column to filter by...",optionsEmpty:"No columns available.",categoricalFilterSearchLabel:"Search categories",categoricalFilterSelectAll:"Select All",categoricalFilterSelectClear:"Clear",categoricalFilterEmpty:"No categories found",datetimeFilterRange:"Range",datetimeFilterRangeDatetime:"Date, Time",datetimeFilterRangeDate:"Date",datetimeFilterRangeTime:"Time",datetimeFilterCategorical:"Categorical",datetimeFilterCategoricalWeekday:"Weekday",datetimeFilterCategoricalMonth:"Month",datetimeFilterCategoricalQuarter:"Quarter",datetimeFilterCategoricalHalf:"Half",datetimeFilterCategoricalFirstHalf:"H1",datetimeFilterCategoricalSecondHalf:"H2",datetimeFilterCategoricalYear:"Year",numericalFilterRange:"Range",numericalFilterSingleValue:"Single Value",booleanFilterTrue:"true",booleanFilterFalse:"false",booleanColumnTrueShort:"T",booleanColumnFalseShort:"F",selectRow:"Select row",selectAllRows:"Select all rows",sortColumn:"Sort column"},buttongroup:{ariaLabel:"button group"},fileuploader:{dropFilesToUpload:"Drop files here to upload...",or:"",browseFiles:"Browse files",retry:"Retry Upload",cancel:"Cancel"},menu:{noResultsMsg:"No results",parentMenuItemAriaLabel:"You are currently at an item that opens a nested listbox. Press right arrow to enter that element and left arrow to return."},modal:{close:"Close"},drawer:{close:"Close"},pagination:{prev:"Prev",next:"Next",preposition:"of"},select:{noResultsMsg:"No results found",placeholder:"Select...",create:"Create"},toast:{close:"Close"}})},2989:(e,t,o)=>{o.d(t,{Z:()=>p});var r=o(9024),n=o(25335),a=o(65406),l=o(12351),i=o(19785),c=o(35461),s=o(64248),d=o(30330);const u=(0,s.zo)("div",(e=>{let{$width:t,$height:o}=e;return{...o?{height:"".concat(o,"px")}:{},...t?{width:"".concat(t,"px")}:{}}})),g=e=>{let{customArtwork:t}=e;if(t){const{illustration:e}=t.illustration;switch(e.type){case"icon":return(0,d.tZ)(l.SZ,{richIllustration:t.illustration});case"urlImage":{var o,r;let n={...e.urlImage};const a=null!=n&&n.dimensions?(0,c.xq)(null==n||null===(o=n.dimensions)||void 0===o?void 0:o.height):null!=n&&n.size?c.lf[null==n?void 0:n.size]:0,i=null!=n&&n.dimensions?(0,c.xq)(null==n||null===(r=n.dimensions)||void 0===r?void 0:r.width):null!=n&&n.size?c.lf[null==n?void 0:n.size]:0;return(0,d.tZ)(u,{$height:a,$width:i,children:(0,d.tZ)(l.SZ,{richIllustration:t.illustration})})}default:return null}}return null},b=e=>{switch(e){case"UNKNOWN":return;case"HIGH":return"high";case"LOW":default:return"low"}},h=e=>{switch(e){case"FAILURE":return"negative";case"INFO":return"info";case"SUCCESS":return"positive";case"WARNING":return"warning";case"UNKNOWN":return;default:return"info"}},m=e=>{var t,o,r;return e?null!==(t=e.title)&&void 0!==t&&t.richTextElements?e.title.richTextElements.map((e=>{var t;return"text"===e.type&&(null===(t=e.text.text)||void 0===t?void 0:t.text)||""})).join(" "):null!==(o=e.title)&&void 0!==o&&o.accessibilityText?null===(r=e.title)||void 0===r?void 0:r.accessibilityText:"":""},p=e=>{let{viewModel:t,onClick:o}=e;const{message:c,headline:s,bannerColor:u,customArtwork:p,actionButton:C,hierarchy:k,bannerState:f,contentColor:S}=t,[,v]=(0,r.hQ)(),w=null==u?void 0:u.type,y=(0,n.Lq)(u&&w?u[w]:null),L=null==S?void 0:S.type,x=(0,n.Lq)(S&&L?S[L]:null);return(0,d.tZ)(a.jL,{hierarchy:b(k),kind:h(f),overrides:{Root:{style:{...y?{backgroundColor:v.colors[y]}:{},...x?{color:v.colors[x]}:{}}}},artwork:{icon:()=>(0,d.tZ)(g,{customArtwork:p})},title:s?(0,d.tZ)(i.ZP,{text:s}):null,action:{onClick:o||(()=>{}),label:m(C),...null!=C&&C.illustration?{icon:()=>(0,d.tZ)(l.SZ,{richIllustration:null==C?void 0:C.illustration})}:{}},children:c?(0,d.tZ)(i.ZP,{text:c}):null})}},65406:(e,t,o)=>{o.d(t,{jL:()=>a});var r=o(71694),n=o(30330);function a(e){return(0,n.tZ)(r.j,{...e})}a.defaultProps=r.j.defaultProps}}]);