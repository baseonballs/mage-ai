(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6780],{2850:function(e,n,t){"use strict";t.d(n,{M:function(){return a},W:function(){return c}});var r=t(9518),i=t(23831),l=t(3055),c=34*t(49125).iI,a=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);",""],l.Mz,(function(e){return"\n    border-left: 1px solid ".concat((e.theme.borders||i.Z.borders).medium,";\n  ")}))},60547:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(82394),i=t(21831),l=t(82684),c=t(47999),a=t(1210),s=t(34744),u=t(28358),o=t(67971),d=t(87372),p=t(86673),f=t(82531),b=t(9518),h=t(23831),m=t(73942),v=t(49125),j=b.default.div.withConfig({displayName:"indexstyle__BannerStyle",componentId:"sc-1te3pmf-0"})(["border-radius:","px;padding:","px;"," "," ",""],m.n_,3*v.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||h.Z.shadow).small,";\n  ")}),(function(e){return e.background&&"\n    background: ".concat(e.background,";\n  ")}),(function(e){return e.backgroundImage&&'\n    background-image: url("'.concat(e.backgroundImage,'");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  ')})),g=t(3055),x=t(95354),Z=t(24141),y=t(28598);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=function(e){var n=e.after,t=e.afterHidden,r=e.afterWidth,b=e.before,h=e.beforeWidth,m=e.breadcrumbs,O=e.buildSidekick,P=e.children,_=e.errors,I=e.headline,w=e.pageName,S=e.pipeline,D=e.setErrors,C=e.subheader,E=e.subheaderBackground,N=e.subheaderBackgroundImage,T=e.subheaderButton,M=e.subheaderText,L=e.title,F=e.uuid,U=(0,Z.i)().height,A=S.uuid,R=f.ZP.pipelines.detail(A,{includes_outputs:!1},{revalidateOnFocus:!1}).data,H=null===R||void 0===R?void 0:R.pipeline,B=(0,l.useMemo)((function(){return n||(O?O({height:U,heightOffset:g.Mz,pipeline:H}):null)}),[n,O,U,H]),V=r||(B?50*v.iI:null),z=(0,l.useMemo)((function(){var e=[];return H&&(e.push.apply(e,[{label:function(){return"Pipelines"},linkProps:{href:"/pipelines"}}]),m?(e.push({label:function(){return H.uuid},linkProps:{as:"/pipelines/".concat(A,"/triggers"),href:"/pipelines/[pipeline]/triggers"}}),e.push.apply(e,(0,i.Z)(m)),e[e.length-1].bold=!0):e.push({bold:!0,label:function(){return H.name}})),e}),[m,H,A]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(a.Z,{after:B,afterHidden:t,afterWidth:V,before:b,beforeWidth:h,breadcrumbs:z,navigationItems:(0,x.H)(w,H),subheaderChildren:"undefined"!==typeof C&&C,title:H?L?L(H):H.name:null,uuid:F,children:[(T||M)&&(0,y.jsx)(p.Z,{mb:v.Mq,mt:v.cd,mx:v.cd,children:(0,y.jsx)(j,{background:E,backgroundImage:N,children:(0,y.jsxs)(o.Z,{alignItems:"center",children:[T,M&&(0,y.jsx)(p.Z,{ml:3}),M]})})}),I&&(0,y.jsx)(p.Z,{p:v.cd,children:(0,y.jsxs)(p.Z,{mt:v.cd,px:v.cd,children:[(0,y.jsx)(d.Z,{level:5,children:I}),(0,y.jsx)(s.Z,{light:!0,mt:v.cd,short:!0})]})}),P]}),_&&(0,y.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===D||void 0===D?void 0:D(null)},children:(0,y.jsx)(u.Z,k(k({},_),{},{onClose:function(){return null===D||void 0===D?void 0:D(null)}}))})]})}},56681:function(e,n,t){"use strict";t.d(n,{G:function(){return x},Z:function(){return Z}});var r=t(75582),i=t(82394),l=t(26304),c=t(32316),a=t(22673),s=t(86532),u=t(86673),o=t(19711),d=t(58180),p=t(49125),f=t(19395),b=t(28598),h=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j={uuid:"Run details"},g={uuid:"Dependency tree"},x=[g,j];function Z(e){var n=e.height,t=e.heightOffset,i=e.pipeline,m=e.selectedRun,Z=e.selectedTab,y=e.setSelectedTab,O=v({},(0,l.Z)(e,h));m?O.blockStatus=(0,f.IJ)(null===m||void 0===m?void 0:m.block_runs):O.noStatus=!0;var k=(null===m||void 0===m?void 0:m.variables)||{};null!==m&&void 0!==m&&m.event_variables&&(k.event=m.event_variables);var P=[];k&&JSON.stringify(k,null,2).split("\n").forEach((function(e){P.push("    ".concat(e))}));var _=m&&[["Run ID",null===m||void 0===m?void 0:m.id],["Variables",(0,b.jsx)(a.Z,{language:"json",small:!0,source:P.join("\n")})]],I=m&&(0,b.jsx)(u.Z,{pb:p.cd,px:p.cd,children:(0,b.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:_.map((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1];return[(0,b.jsx)(o.ZP,{monospace:!0,muted:!0,children:t}),(0,b.jsx)(o.ZP,{monospace:!0,textOverflow:!0,children:i})]})),uuid:"LogDetail"})}),w=Z&&y;return(0,b.jsxs)(b.Fragment,{children:[w&&(0,b.jsx)(u.Z,{py:p.cd,children:(0,b.jsx)(c.Z,{onClickTab:y,selectedTabUUID:null===Z||void 0===Z?void 0:Z.uuid,tabs:x})}),(!w||g.uuid===(null===Z||void 0===Z?void 0:Z.uuid))&&(0,b.jsx)(s.Z,v(v({},O),{},{height:n,heightOffset:(t||0)+(w?76:0),pipeline:i})),j.uuid===(null===Z||void 0===Z?void 0:Z.uuid)&&I]})}},58122:function(e,n,t){"use strict";t.d(n,{CL:function(){return f},FS:function(){return b},JZ:function(){return m},e7:function(){return v},v0:function(){return p},wx:function(){return h}});var r=t(75582),i=t(82394),l=t(43313),c=t(93348),a=t(1286),s=t(90211),u=t(84779);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e){var n=e.statistics,t=Object.keys(n),r=Array(l.Dy.length).fill(0);return 0===t.length?null:(t.forEach((function(e){if(l.Dy.includes(e)){var t=l.CC[e],i=n[e],c=i,a=!1,s=[2,3],o=l.Ub[e],d=l.oH[e],p=l.OD[e];if(l.y_.includes(e))a=!0,s=[2,1,2];else if(e in l.Sq){i=(0,u.Jw)(i,0);var f=l.Sq[e];c=n[f]}var b={columnFlexNumbers:s,name:t,progress:a,rate:c,successDirection:d,warning:p};l.y_.includes(e)||(b.value=i),r[o]=b}})),r)}function f(e){var n=e.columnTypes,t=void 0===n?{}:n,r=e.statistics,i=Object.keys(r);if(0===i.length)return null;var c=Object.values(t),u=c.length,o=[];o.push({name:"Column count",successDirection:l.oH.column_count,value:(0,s.x6)(u)}),i.forEach((function(e){if(l.Zu.includes(e)){var n=l.CC[e],t=r[e],i=l.OD[e];o.push({name:n,successDirection:l.oH[e],value:(0,s.x6)(t),warning:i})}}));var d=(0,a.QO)(c),p=d.countCategory,f=d.countDatetime,b=d.countNumerical;return o.push({name:"Categorical Features",rate:p/u,value:(0,s.x6)(p)},{name:"Numerical Features",rate:b/u,value:(0,s.x6)(b)},{name:"Datetime Features",rate:f/u,value:(0,s.x6)(f)}),o}function b(e){return"string"===typeof e?e:JSON.stringify(e)}function h(e,n){var t,r;return null===e||void 0===e||null===(t=e.find((function(e){var t=e.block;return n(t)})))||void 0===t||null===(r=t.variables)||void 0===r?void 0:r.map((function(e){var n=e.value;return d(d({},e),{},{value:b(n)})}))}function m(e,n){return n===c.Xm.TIME?e.push({uuid:"execution_date",value:"<run datetime>"}):n===c.Xm.EVENT&&e.push({uuid:"event",value:"<trigger event>"}),e}function v(e){return e?Object.entries(e).reduce((function(e,n){var t=(0,r.Z)(n,2),l=t[0],c=t[1],a=c;try{a=JSON.parse(c)}catch(s){}return d(d({},e),{},(0,i.Z)({},l,a))}),{}):e}},18025:function(e,n,t){"use strict";t.d(n,{J:function(){return s},U:function(){return a}});var r=t(9518),i=t(23831),l=t(73942),c=t(49125),a=r.default.div.withConfig({displayName:"indexstyle__CardStyle",componentId:"sc-m7tlau-0"})(["border-radius:","px;border-style:solid;border-width:2px;height:","px;margin-right:","px;padding:","px;width:","px;"," ",""],l.TR,14*c.iI,c.cd*c.iI,c.cd*c.iI,40*c.iI,(function(e){return!e.selected&&"\n    border-color: ".concat((e.theme.borders||i.Z.borders).light,";\n  ")}),(function(e){return e.selected&&"\n    border-color: ".concat((e.theme.interactive||i.Z.interactive).linkPrimary,";\n  ")})),s=r.default.div.withConfig({displayName:"indexstyle__DateSelectionContainer",componentId:"sc-m7tlau-1"})(["border-radius:","px;padding:","px;"," "," ",""],l.n_,c.tr,(function(e){return"\n    background-color: ".concat((e.theme.interactive||i.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.absolute&&"\n    position: absolute;\n    z-index: 2;\n    right: 0;\n    top: ".concat(2.5*c.iI,"px;\n  ")}),(function(e){return e.topPosition&&"\n    top: -".concat(42*c.iI,"px;\n  ")}))},43526:function(e,n,t){"use strict";t.d(n,{I7:function(){return r},IB:function(){return s},VV:function(){return l},_7:function(){return c},rn:function(){return a}});var r,i=t(66050),l="datetime",c="code",a=i.V;!function(e){e.SECOND="second",e.MINUTE="minute",e.HOUR="hour",e.DAY="day",e.WEEK="week",e.MONTH="month",e.YEAR="year",e.CUSTOM="custom"}(r||(r={}));var s=[r.MINUTE,r.HOUR,r.DAY,r.WEEK,r.MONTH,r.YEAR,r.CUSTOM]},2713:function(e,n,t){"use strict";var r=t(82394),i=t(44495),l=t(67971),c=t(55378),a=t(86673),s=t(19711),u=t(18025),o=t(49125),d=t(24224),p=t(28598);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.selectedDate,t=e.selectedTime,r=e.setSelectedDate,f=e.setSelectedTime,h=e.topPosition;return(0,p.jsxs)(u.J,{absolute:!0,topPosition:h,children:[(0,p.jsx)(i.ZP,{onChange:r,value:n}),(0,p.jsx)(a.Z,{mb:2}),(0,p.jsxs)(l.Z,{alignItems:"center",children:[(0,p.jsx)(s.ZP,{default:!0,large:!0,children:"Time (UTC):"}),(0,p.jsx)(a.Z,{pr:2}),(0,p.jsx)(c.Z,{compact:!0,monospace:!0,onChange:function(e){e.preventDefault(),f((function(n){return b(b({},n),{},{hour:e.target.value})}))},paddingRight:5*o.iI,placeholder:"HH",value:null===t||void 0===t?void 0:t.hour,children:(0,d.m5)(24,0).map((function(e){return String(e).padStart(2,"0")})).map((function(e){return(0,p.jsx)("option",{value:e,children:e},"hour_".concat(e))}))}),(0,p.jsx)(a.Z,{px:1,children:(0,p.jsx)(s.ZP,{bold:!0,large:!0,children:":"})}),(0,p.jsx)(c.Z,{compact:!0,monospace:!0,onChange:function(e){e.preventDefault(),f((function(n){return b(b({},n),{},{minute:e.target.value})}))},paddingRight:5*o.iI,placeholder:"MM",value:null===t||void 0===t?void 0:t.minute,children:(0,d.m5)(60,0).map((function(e){return String(e).padStart(2,"0")})).map((function(e){return(0,p.jsx)("option",{value:e,children:e},"minute_".concat(e))}))})]})]})}},22673:function(e,n,t){"use strict";var r=t(82684),i=t(73199),l=t.n(i),c=t(71593),a=t(9518),s=t(65292),u=t(23831),o=t(2005),d=t(49125),p=t(28598);n.Z=function(e){var n=e.language,t=e.maxWidth,i=e.showLineNumbers,f=e.small,b=e.source,h=e.wrapLines,m=(0,r.useContext)(a.ThemeContext);return(0,p.jsx)(l(),{source:b,renderers:{code:function(e){var r=e.value;return(0,p.jsx)(c.Z,{customStyle:{backgroundColor:(m.background||u.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:o.Vp,fontSize:f?12:14,marginBottom:0,marginTop:0,paddingBottom:2*d.iI,paddingTop:2*d.iI,maxWidth:t},lineNumberStyle:{color:(m.content||u.Z.content).muted},language:n,showLineNumbers:i,style:s._4,useInlineStyles:!0,wrapLines:h,children:r})}}})}},32316:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(82684),i=t(60328),l=t(67971),c=t(882),a=t(86673),s=t(99994),u=t(9518),o=t(49125),d=t(37391),p=u.default.div.withConfig({displayName:"indexstyle__TabsContainerStyle",componentId:"sc-segf7l-0"})(["padding-left:","px;padding-right:","px;"," "," ",""],o.cd*o.iI,o.cd*o.iI,(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.allowScroll&&"\n    overflow: auto;\n  "}),d.w5),f=t(66653),b=t(28598);var h=function(e){var n=e.allowScroll,t=e.contained,u=e.noPadding,d=e.onClickTab,h=e.selectedTabUUID,m=e.small,v=e.tabs,j=(0,r.useMemo)((function(){var e=v.length,n=[];return v.forEach((function(t,r){var u=t.Icon,p=t.IconSelected,v=t.label,j=t.uuid,g=j===h,x=g&&p||u,Z=v?v():j,y=(0,b.jsxs)(l.Z,{alignItems:"center",children:[x&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(x,{default:!g,size:2*o.iI}),(0,b.jsx)(a.Z,{mr:1})]}),Z]});r>=1&&e>=2&&n.push((0,b.jsx)("div",{style:{marginLeft:1.5*o.iI}},"spacing-".concat(j))),g?n.push((0,b.jsx)(c.Z,{backgroundGradient:s.yr,backgroundPanel:!0,borderLess:!0,borderWidth:2,compact:m,onClick:function(e){(0,f.j)(e),d(t)},paddingUnitsHorizontal:2,paddingUnitsVertical:1.25,small:m,children:y},j)):n.push((0,b.jsx)("div",{style:{padding:4},children:(0,b.jsx)(i.Z,{borderLess:!0,compact:m,default:!0,onClick:function(e){(0,f.j)(e),d(t)},outline:!0,small:m,children:y})},"button-tab-".concat(j)))})),n}),[d,h,m,v]),g=(0,b.jsx)(l.Z,{alignItems:"center",children:j});return t?g:(0,b.jsx)(p,{allowScroll:n,noPadding:u,children:g})}},12625:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return te}});var r=t(75582),i=t(77837),l=t(82394),c=t(38860),a=t.n(c),s=t(82684),u=t(83455),o=t(34376),d=t(43526),p=t(60328),f=t(34744),b=t(67971),h=t(87372),m=t(51099),v=t(60547),j=t(97496),g=t(47409),x=t(55378),Z=t(86673),y=t(58180),O=t(19711),k=t(82531),P=t(56681),_=t(10503),I=t(2850),w=t(49125),S=t(59920),D=t(90211),C=t(58122),E=t(19395),N=t(33766),T=t(7715),M=t(9736),L=t(96510),F=t(66653),U=t(59e3),A=t(28598);function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var B=function(e){var n=e.backfill,t=e.fetchBackfill,i=e.pipeline,l=e.variables,c=(0,M.Ct)(),a=(0,o.useRouter)(),R=n||{},B=R.block_uuid,V=R.end_datetime,z=R.id,W=R.interval_type,Y=R.interval_units,J=R.name,q=R.pipeline_run_dates,G=R.start_datetime,K=R.status,X=R.total_run_count,Q=R.variables,$=void 0===Q?{}:Q,ee=i.uuid,ne=(0,U.iV)(),te=(0,s.useState)(null),re=te[0],ie=te[1],le={_limit:40,_offset:40*(null!==ne&&void 0!==ne&&ne.page?ne.page:0)};null!==ne&&void 0!==ne&&ne.status&&(le.status=ne.status);var ce=k.ZP.pipeline_runs.list(H(H({},le),{},{backfill_id:z,order_by:["id DESC"]}),{refreshInterval:3e3,revalidateOnFocus:!0},{pauseFetch:!z}),ae=ce.data,se=ce.mutate,ue=!(G&&V&&W&&Y),oe=!K,de=(0,s.useMemo)((function(){return(oe?q:null===ae||void 0===ae?void 0:ae.pipeline_runs)||[]}),[ae,q,oe]),pe=(0,s.useMemo)((function(){var e;return(null===ae||void 0===ae||null===(e=ae.metadata)||void 0===e?void 0:e.count)||[]}),[ae]),fe=(0,s.useState)(null),be=fe[0],he=fe[1],me=(0,s.useMemo)((function(){var e=null!==ne&&void 0!==ne&&ne.page?ne.page:0;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(j.Z,{disableRowSelect:oe,emptyMessage:null!==ne&&void 0!==ne&&ne.status?"No runs available":'No runs available. Please complete backfill configuration by clicking "Edit backfill" above.',fetchPipelineRuns:se,onClickRow:function(e){return he((function(n){var t=de[e];return(null===n||void 0===n?void 0:n.id)!==t.id?t:null}))},pipelineRuns:de,selectedRun:be}),(0,A.jsx)(Z.Z,{p:2,children:(0,A.jsx)(m.Z,{page:Number(e),maxPages:9,onUpdate:function(e){var n=Number(e),t=H(H({},ne),{},{page:n>=0?n:0});a.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(ee,"/triggers/").concat(z,"?").concat((0,U.uM)(t)))},totalPages:Math.ceil(pe/40)})})]})}),[se,i,de,be]),ve=(0,s.useState)(P.G[0]),je=ve[0],ge=ve[1],xe=(0,u.Db)(k.ZP.backfills.useUpdate(z),{onSuccess:function(e){return(0,L.wD)(e,{callback:function(){t(),se()},onErrorCallback:function(e,n){return ie({errors:n,response:e})}})}}),Ze=(0,r.Z)(xe,2),ye=Ze[0],Oe=Ze[1].isLoading,ke=(0,s.useMemo)((function(){return!!K&&(d.rn.CANCELLED!==K&&d.rn.FAILED!==K)}),[K]),Pe=(0,s.useMemo)((function(){return K&&d.rn.CANCELLED!==K&&d.rn.FAILED!==K&&d.rn.INITIAL!==K&&d.rn.RUNNING!==K}),[K]),_e=(0,s.useMemo)((function(){var e={default:!0,size:1.5*w.iI},n=[[(0,A.jsxs)(b.Z,{alignItems:"center",children:[(0,A.jsx)(_.VW,H({},e)),(0,A.jsx)(Z.Z,{mr:1}),(0,A.jsx)(O.ZP,{default:!0,children:"Backfill type"})]},"backfill_type_label"),(0,A.jsx)(O.ZP,{monospace:!0,children:B?d._7:d.VV},"backfill_type")],[(0,A.jsxs)(b.Z,{alignItems:"center",children:[(0,A.jsx)(_.rs,H({},e)),(0,A.jsx)(Z.Z,{mr:1}),(0,A.jsx)(O.ZP,{default:!0,children:"Status"})]},"backfill_status_label"),(0,A.jsx)(O.ZP,{danger:d.rn.CANCELLED===K||d.rn.FAILED==K,default:d.rn.INITIAL===K,monospace:!0,muted:!K,success:d.rn.RUNNING===K||d.rn.COMPLETED===K,children:K||"inactive"},"backfill_status")]];return B||n.push.apply(n,[[(0,A.jsxs)(b.Z,{alignItems:"center",children:[(0,A.jsx)(_.aw,H({},e)),(0,A.jsx)(Z.Z,{mr:1}),(0,A.jsx)(O.ZP,{default:!0,children:"Start date and time"})]},"backfill_start_date_label"),(0,A.jsx)(O.ZP,{monospace:!0,children:(0,E.Vx)(G)},"backfill_start_date")],[(0,A.jsxs)(b.Z,{alignItems:"center",children:[(0,A.jsx)(_.aw,H({},e)),(0,A.jsx)(Z.Z,{mr:1}),(0,A.jsx)(O.ZP,{default:!0,children:"End date and time"})]},"backfill_end_date_label"),(0,A.jsx)(O.ZP,{monospace:!0,children:(0,E.Vx)(V)},"backfill_end_date")],[(0,A.jsxs)(b.Z,{alignItems:"center",children:[(0,A.jsx)(_.Pf,H({},e)),(0,A.jsx)(Z.Z,{mr:1}),(0,A.jsx)(O.ZP,{default:!0,children:"Interval type"})]},"interval_type_label"),(0,A.jsx)(O.ZP,{monospace:!0,children:W&&(0,D.kC)(W)},"interval_type")],[(0,A.jsxs)(b.Z,{alignItems:"center",children:[(0,A.jsx)(_.Pf,H({},e)),(0,A.jsx)(Z.Z,{mr:1}),(0,A.jsx)(O.ZP,{default:!0,children:"Interval units"})]},"interval_units_label"),(0,A.jsx)(O.ZP,{monospace:!0,children:Y},"interval_units")],[(0,A.jsxs)(b.Z,{alignItems:"center",children:[(0,A.jsx)(_.qZ,H({},e)),(0,A.jsx)(Z.Z,{mr:1}),(0,A.jsx)(O.ZP,{default:!0,children:"Total runs"})]},"total_runs_label"),(0,A.jsx)(O.ZP,{monospace:!0,children:X},"total_runs")]]),(0,A.jsx)(y.Z,{columnFlex:[null,1],rows:n})}),[B,V,W,Y,ke,G,K]),Ie=(0,s.useMemo)((function(){return $||{}}),[$]),we=(0,s.useMemo)((function(){var e,n=[];return(0,T.Qr)(Ie)?n=(0,C.wx)(l,(function(e){return"global"===e.uuid})):Object.entries(Ie).forEach((function(e){var t=(0,r.Z)(e,2),i=t[0],l=t[1];n.push({uuid:i,value:(0,C.FS)(l)})})),"undefined"!==typeof n&&null!==(e=n)&&void 0!==e&&e.length?(0,A.jsx)(y.Z,{columnFlex:[null,1],rows:n.map((function(e){var n=e.uuid,t=e.value;return[(0,A.jsx)(O.ZP,{default:!0,monospace:!0,small:!0,children:n},"settings_variable_label_".concat(n)),(0,A.jsx)(O.ZP,{monospace:!0,small:!0,children:t},"settings_variable_".concat(n))]}))}):null}),[Ie,l]);return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(v.Z,{afterHidden:!be,before:(0,A.jsxs)(I.M,{children:[(0,A.jsxs)(Z.Z,{mb:w.HN,pt:w.cd,px:w.cd,children:[(0,A.jsx)(Z.Z,{mb:w.cd,children:(0,A.jsx)(_.yg,{size:5*w.iI})}),(0,A.jsx)(h.Z,{children:J})]}),(0,A.jsx)(Z.Z,{px:w.cd,children:(0,A.jsx)(h.Z,{level:5,children:"Settings"})}),(0,A.jsx)(f.Z,{light:!0,mt:1,short:!0}),_e,we&&(0,A.jsxs)(Z.Z,{my:w.HN,children:[(0,A.jsx)(Z.Z,{px:w.cd,children:(0,A.jsx)(h.Z,{level:5,children:"Runtime variables"})}),(0,A.jsx)(f.Z,{light:!0,mt:1,short:!0}),we]})]}),beforeWidth:34*w.iI,breadcrumbs:[{label:function(){return"Backfills"},linkProps:{as:"/pipelines/".concat(ee,"/backfills"),href:"/pipelines/[pipeline]/backfills"}},{label:function(){return J},linkProps:{as:"/pipelines/".concat(ee,"/backfills/").concat(z),href:"/pipelines/[pipeline]/backfills/[...slug]"}}],buildSidekick:function(e){return(0,P.Z)(H(H({},e),{},{selectedRun:be,selectedTab:je,setSelectedTab:ge}))},errors:re,pageName:S.M.BACKFILLS,pipeline:i,setErrors:ie,subheader:(0,A.jsxs)(b.Z,{alignItems:"center",children:[!Pe&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(p.Z,{beforeIcon:ke?(0,A.jsx)(_.dz,{size:2*w.iI}):(0,A.jsx)(_.Py,{inverted:!(d.rn.CANCELLED===K||d.rn.FAILED===K),size:2*w.iI}),danger:ke,disabled:ue,loading:Oe,onClick:function(e){(0,F.j)(e),ye({backfill:{status:ke?d.rn.CANCELLED:d.rn.INITIAL}})},outline:!0,success:!ke&&!(d.rn.CANCELLED===K||d.rn.FAILED===K)&&!ue,children:ke?"Cancel backfill":d.rn.CANCELLED===K||d.rn.FAILED===K?"Retry backfill":"Start backfill"}),(0,A.jsx)(Z.Z,{mr:w.cd})]}),!c&&(0,A.jsxs)(A.Fragment,{children:[K===g.V.COMPLETED?(0,A.jsx)(O.ZP,{bold:!0,default:!0,large:!0,children:"Filter runs by status:"}):(0,A.jsx)(p.Z,{linkProps:{as:"/pipelines/".concat(ee,"/backfills/").concat(z,"/edit"),href:"/pipelines/[pipeline]/backfills/[...slug]"},noHoverUnderline:!0,outline:!0,sameColorAsText:!0,children:"Edit backfill"}),(0,A.jsx)(Z.Z,{mr:w.cd})]}),!oe&&(0,A.jsxs)(x.Z,{compact:!0,defaultColor:!0,onChange:function(e){e.preventDefault(),"all"===e.target.value?a.push("/pipelines/[pipeline]/backfills/[...slug]","/pipelines/".concat(ee,"/backfills/").concat(z)):(0,N.u7)({page:0,status:e.target.value})},paddingRight:4*w.iI,placeholder:"Select run status",value:(null===ne||void 0===ne?void 0:ne.status)||"all",children:[(0,A.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),Object.values(g.V).map((function(e){return(0,A.jsx)("option",{value:e,children:g.D[e]},e)}))]})]}),title:function(){return J},uuid:"backfill/detail",children:[(0,A.jsx)(Z.Z,{mt:w.cd,px:w.cd,children:(0,A.jsx)(h.Z,{level:5,children:"Runs for this backfill"})}),(0,A.jsx)(f.Z,{light:!0,mt:w.cd,short:!0}),me]})})},V=t(2713),z=t(47999),W=t(93461),Y=t(82944),J=[{label:function(){return"Date and time window"},description:function(){return"Backfill between a date and time range."},uuid:d.VV}],q=t(18025);function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var X=function(e){var n=e.backfill,t=e.fetchBackfill,i=e.pipeline,l=(e.variables,(0,o.useRouter)()),c=(0,s.useState)(),a=c[0],m=c[1],j=a||{},g=j.block_uuid,P=j.id,I=j.interval_type,N=j.interval_units,M=(j.end_datetime,j.start_datetime,j.name),F=i.uuid,U=(0,s.useState)(null),R=U[0],H=U[1],B=(0,s.useState)({}),G=B[0],X=(B[1],(0,s.useState)(g?d._7:d.VV)),Q=X[0],$=X[1],ee=(0,s.useState)(!1),ne=ee[0],te=ee[1],re=(0,s.useState)(!1),ie=re[0],le=re[1],ce=(0,s.useState)(null),ae=ce[0],se=ce[1],ue=(0,s.useState)(null),oe=ue[0],de=ue[1],pe=(0,s.useState)({hour:"00",minute:"00"}),fe=pe[0],be=pe[1],he=(0,s.useState)({hour:"00",minute:"00"}),me=he[0],ve=he[1];(0,s.useEffect)((function(){if(n){m(n);var e=n.start_datetime;if(e){var t=e.split(" ")[1];de((0,E.eI)(e)),ve({hour:t.substring(0,2),minute:t.substring(3,5)})}var r=n.end_datetime;if(r){var i=r.split(" ")[1];se((0,E.eI)(r)),be({hour:i.substring(0,2),minute:i.substring(3,5)})}}}),[n]);var je=(0,s.useMemo)((function(){var e=[[(0,A.jsxs)(b.Z,{alignItems:"center",children:[(0,A.jsx)(_.KJ,{default:!0,size:1.5*w.iI}),(0,A.jsx)(Z.Z,{mr:1}),(0,A.jsx)(O.ZP,{default:!0,children:"Backfill name"})]},"model_name_detail"),(0,A.jsx)(Y.Z,{monospace:!0,onChange:function(e){e.preventDefault(),m((function(n){return K(K({},n),{},{name:e.target.value})}))},placeholder:"Name this backfill",value:M},"model_name_input_detail")]];return d.VV===Q&&e.push.apply(e,[[(0,A.jsxs)(b.Z,{alignItems:"center",children:[(0,A.jsx)(_.aw,{default:!0,size:1.5*w.iI}),(0,A.jsx)(Z.Z,{mr:1}),(0,A.jsx)(O.ZP,{default:!0,children:"Start date and time"})]},"start_time"),(0,A.jsxs)("div",{style:{minHeight:"".concat(5.75*w.iI,"px")},children:[!ne&&(0,A.jsx)(Y.Z,{monospace:!0,onClick:function(){return te((function(e){return!e}))},onFocus:function(){return te(!0)},placeholder:"YYYY-MM-DD HH:MM",value:oe?"".concat(oe.toISOString().split("T")[0]," ").concat(null===me||void 0===me?void 0:me.hour,":").concat(null===me||void 0===me?void 0:me.minute):""}),(0,A.jsx)("div",{style:{width:"400px"},children:(0,A.jsx)(z.Z,{disableEscape:!0,onClickOutside:function(){return te(!1)},open:ne,style:{position:"relative"},children:(0,A.jsx)(V.Z,{selectedDate:oe,selectedTime:me,setSelectedDate:de,setSelectedTime:ve,topPosition:!0})})})]},"start_time_input")],[(0,A.jsxs)(b.Z,{alignItems:"center",children:[(0,A.jsx)(_.aw,{default:!0,size:1.5*w.iI}),(0,A.jsx)(Z.Z,{mr:1}),(0,A.jsx)(O.ZP,{default:!0,children:"End date and time"})]},"end_time"),(0,A.jsxs)("div",{style:{minHeight:"".concat(5.75*w.iI,"px")},children:[!ie&&(0,A.jsx)(Y.Z,{monospace:!0,onClick:function(){return le((function(e){return!e}))},onFocus:function(){return le(!0)},placeholder:"YYYY-MM-DD HH:MM",value:ae?"".concat(ae.toISOString().split("T")[0]," ").concat(null===fe||void 0===fe?void 0:fe.hour,":").concat(null===fe||void 0===fe?void 0:fe.minute):""}),(0,A.jsx)("div",{style:{width:"400px"},children:(0,A.jsx)(z.Z,{disableEscape:!0,onClickOutside:function(){return le(!1)},open:ie,style:{position:"relative"},children:(0,A.jsx)(V.Z,{selectedDate:ae,selectedTime:fe,setSelectedDate:se,setSelectedTime:be,topPosition:!0})})})]},"end_time_input")],[(0,A.jsxs)(b.Z,{alignItems:"center",children:[(0,A.jsx)(_.Pf,{default:!0,size:1.5*w.iI}),(0,A.jsx)(Z.Z,{mr:1}),(0,A.jsx)(O.ZP,{default:!0,children:"Interval type"})]},"interval_type"),(0,A.jsxs)(x.Z,{monospace:!0,onChange:function(e){e.preventDefault(),m((function(n){return K(K({},n),{},{interval_type:e.target.value})}))},placeholder:"Time spacing between each backfill",value:I,children:[!I&&(0,A.jsx)("option",{value:""}),d.IB.map((function(e){return(0,A.jsx)("option",{value:e,children:(0,D.kC)(e)},e)}))]},"interval_type_input")],[(0,A.jsxs)(b.Z,{alignItems:"center",children:[(0,A.jsx)(_.Pf,{default:!0,size:1.5*w.iI}),(0,A.jsx)(Z.Z,{mr:1}),(0,A.jsx)(O.ZP,{default:!0,children:"Interval units"})]},"interval_units"),(0,A.jsx)(Y.Z,{disabled:!I,monospace:!0,onChange:function(e){e.preventDefault(),m((function(n){return K(K({},n),{},{interval_units:e.target.value})}))},placeholder:I?"Number of ".concat(I).concat(I!==d.I7.CUSTOM?"s":""," between each backfill"):"Interval type is required",type:"number",value:N},"interval_unit_input")]]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Z.Z,{mb:2,px:w.cd,children:(0,A.jsx)(h.Z,{children:"Settings"})}),(0,A.jsx)(f.Z,{light:!0,short:!0}),(0,A.jsx)(y.Z,{columnFlex:[null,1],rows:e})]})}),[ae,oe,I,N,M,Q,ne,ie,fe,me]),ge=(0,u.Db)(k.ZP.backfills.useUpdate(P),{onSuccess:function(e){return(0,L.wD)(e,{callback:function(){t(),l.push("/pipelines/[pipeline]/backfills/[...slug]","/pipelines/".concat(F,"/backfills/").concat(P))},onErrorCallback:function(e,n){return H({errors:n,response:e})}})}}),xe=(0,r.Z)(ge,2),Ze=xe[0],ye=xe[1].isLoading,Oe=(0,s.useCallback)((function(){var e=K(K({},(0,T.GL)(a,["name"])),{},{end_datetime:null,interval_type:null,interval_units:null,start_datetime:null,variables:(0,C.e7)(G)});return d._7===Q||(e.interval_type=I,e.interval_units=N,e.end_datetime=ae&&null!==fe&&void 0!==fe&&fe.hour&&null!==fe&&void 0!==fe&&fe.minute?"".concat(ae.toISOString().split("T")[0]," ").concat(null===fe||void 0===fe?void 0:fe.hour,":").concat(null===fe||void 0===fe?void 0:fe.minute,":00"):null,e.start_datetime=oe&&null!==me&&void 0!==me&&me.hour&&null!==me&&void 0!==me&&me.minute?"".concat(oe.toISOString().split("T")[0]," ").concat(null===me||void 0===me?void 0:me.hour,":").concat(null===me||void 0===me?void 0:me.minute,":00"):null),Ze({backfill:e})}),[ae,oe,I,N,a,G,Q,fe,me]),ke=(0,s.useMemo)((function(){return d._7===Q?!g:!(ae&&oe&&I&&N)}),[g,ae,oe,I,N,Q,fe,me]);return(0,A.jsxs)(v.Z,{breadcrumbs:[{label:function(){return"Backfills"},linkProps:{as:"/pipelines/".concat(F,"/backfills"),href:"/pipelines/[pipeline]/backfills"}},{label:function(){return null===a||void 0===a?void 0:a.name},linkProps:{as:"/pipelines/".concat(F,"/backfills/").concat(P),href:"/pipelines/[pipeline]/backfills/[...slug]"}}],errors:R,pageName:S.M.BACKFILLS,pipeline:i,setErrors:H,subheader:(0,A.jsxs)(b.Z,{alignItems:"center",children:[(0,A.jsx)(p.Z,{disabled:ke,loading:ye,onClick:Oe,outline:!0,primary:!0,children:"Save changes"}),(0,A.jsx)(Z.Z,{mr:1}),(0,A.jsx)(p.Z,{linkProps:{href:"/pipelines/[pipeline]/backfills/[...slug]",as:"/pipelines/".concat(F,"/backfills/").concat(P)},noHoverUnderline:!0,outline:!0,sameColorAsText:!0,children:"Cancel"})]}),title:function(){return"Edit ".concat(null===a||void 0===a?void 0:a.name)},uuid:"backfill/edit",children:[(0,A.jsxs)(Z.Z,{p:w.cd,children:[(0,A.jsxs)(Z.Z,{mb:2,children:[(0,A.jsx)(h.Z,{children:"Backfill type"}),(0,A.jsx)(O.ZP,{muted:!0,children:"How would you like this pipeline to be backfilled?"})]}),(0,A.jsx)(b.Z,{children:J.map((function(e){var n=e.label,t=e.description,r=e.uuid,i=Q===r,l=Q&&!i;return(0,A.jsx)(p.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){$(r)},children:(0,A.jsx)(q.U,{selected:i,children:(0,A.jsxs)(b.Z,{alignItems:"center",children:[(0,A.jsx)(W.Z,{children:(0,A.jsx)("input",{checked:i,type:"radio"})}),(0,A.jsx)(Z.Z,{mr:w.cd}),(0,A.jsxs)(W.Z,{alignItems:"flex-start",flexDirection:"column",children:[(0,A.jsx)(h.Z,{bold:!0,default:!i&&!l,level:5,muted:!i&&l,children:n()}),(0,A.jsx)(O.ZP,{default:!i&&!l,leftAligned:!0,muted:l,children:t()})]})]})})},r)}))})]}),(0,A.jsx)(Z.Z,{mt:5,children:je})]})},Q=t(41788);function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ne(e){var n=e.backfillId,t=e.pipelineUUID,r=e.subpath,i=k.ZP.variables.pipelines.list(t).data,l=(0,s.useMemo)((function(){return null===i||void 0===i?void 0:i.variables}),[i]),c=k.ZP.pipelines.detail(t,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,a=(0,s.useMemo)((function(){return ee(ee({},null===c||void 0===c?void 0:c.pipeline),{},{uuid:t})}),[c,t]),u=k.ZP.backfills.detail(n,{include_preview_runs:!0}),o=u.data,d=u.mutate,p=(0,s.useMemo)((function(){return null===o||void 0===o?void 0:o.backfill}),[o]);return"edit"===r?(0,A.jsx)(X,{backfill:p,fetchBackfill:d,pipeline:a,variables:l}):(0,A.jsx)(B,{backfill:p,fetchBackfill:d,pipeline:a,variables:l})}ne.getInitialProps=function(){var e=(0,i.Z)(a().mark((function e(n){var t,i,l,c,s,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.query,i=t.pipeline,l=t.slug,!Array.isArray(l)){e.next=4;break}return c=(0,r.Z)(l,2),s=c[0],u=c[1],e.abrupt("return",{backfillId:s,pipelineUUID:i,subpath:u});case 4:return e.abrupt("return",{pipelineUUID:i});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var te=(0,Q.Z)(ne)},53664:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/backfills/[...slug]",function(){return t(12625)}])}},function(e){e.O(0,[3850,5716,5896,4804,1774,5872,2524,4495,2344,4506,6166,8180,6214,6532,1286,4741,9774,2888,179],(function(){return n=53664,e(e.s=n);var n}));var n=e.O();_N_E=n}]);