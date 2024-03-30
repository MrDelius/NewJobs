(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7884],{17884:function(e,o,n){"use strict";n.d(o,{Z:function(){return E}});var l=n(85893),r=n(67294),a=n(86501),c=n(24050),i=n(54451),t=n(28170),d=n(41009),s=n(27484),u=n.n(s);let p={certification:0,vocational:1,highSchool:2,associate:3,bachelor:4,master:5,doctorate:6};function f(e){let{post:o}=e,{data:n}=(0,d.Z)();if(!o||!n)return{experienceWarning:!1,educationWarning:!1,languageWarning:!1};let l=function(e){let{job:o,application:n}=e;if(!o.yearsOfExperience)return!0;let l="10+"===o.yearsOfExperience?10:Number(o.yearsOfExperience.split("")[0]),r=n.work.reduce((e,o)=>{let n=o.endDate?u()(o.endDate):u()(),l=n.diff(o.startDate,"month");return e+l},0);return r>=12*l}({job:o,application:n}),r=function(e){let{job:o,application:n}=e;if(!o.minEducation||"none"===o.minEducation||"None"===o.minEducation)return!0;let l=p[o.minEducation],r=0;return n.education.forEach(e=>{p[e.degreeLevel]>r&&(r=p[e.degreeLevel])}),r>=l}({job:o,application:n}),a=function(e){var o,n;let{job:l,application:r}=e;if(!(null===(o=l.requiredLanguages)||void 0===o?void 0:o.length))return!0;let a=null===(n=r.languages)||void 0===n?void 0:n.map(e=>e.lang),c=l.requiredLanguages.every(e=>a.includes(e.lang));return c}({job:o,application:n});return{experienceWarning:l,educationWarning:r,languageWarning:a}}var v=n(44037),_=n(22214),h=n(43966),y=n(33172),g=n(88278),m=n(51431),x=n.n(m);function j(e){let{post:o,apply:n,isModalOpen:r,setIsModalOpen:a}=e,{t:d,locale:s}=(0,v.Z)(),{experienceWarning:u,educationWarning:p,languageWarning:m}=f({post:o}),j=(0,h.Z)(null==o?void 0:o.requiredLanguages,d);return(0,l.jsx)(i.Z,{isOpen:r,closeModal:()=>a(!1),children:(0,l.jsxs)("div",{className:x().container,children:[(0,l.jsx)("h1",{className:x().title,children:d("warning")}),(0,l.jsx)("p",{className:x().description,dangerouslySetInnerHTML:{__html:d("warning_apply")}}),(0,l.jsxs)("div",{className:x().warningList,children:[u&&(0,l.jsxs)("div",{className:x().warningItem,children:[(0,l.jsx)("div",{className:x().icon,children:(0,l.jsx)(t.Z,{name:"workExperions",color:g.colorWhite,width:18,height:18})}),(0,_.Z)(null==o?void 0:o.yearsOfExperience,d,s)]}),p&&(0,l.jsxs)("div",{className:x().warningItem,children:[(0,l.jsx)("div",{className:x().icon,children:(0,l.jsx)(t.Z,{name:"graduation-hat",color:g.colorWhite,width:18,height:18})}),d((0,y.Z)(null==o?void 0:o.minEducation))]}),m&&(0,l.jsxs)("div",{className:x().warningItem,children:[(0,l.jsx)("div",{className:x().icon,children:(0,l.jsx)(t.Z,{name:"requiredLanguages",color:g.colorWhite,width:20,height:20})}),j]})]}),(0,l.jsx)("p",{className:x().description,dangerouslySetInnerHTML:{__html:d("warning_apply_description")}}),(0,l.jsxs)("div",{className:x().buttonContainer,children:[p||m?null:(0,l.jsx)(c.Z,{color:"secondary",onClick:()=>n(),children:d("apply_anyway")}),(0,l.jsx)(c.Z,{href:"/dashboard/my-application",children:d("edit_profile")})]})]})})}var C=n(3255),b=n(52215),w=n(14758),Z=n(74102),B=n(19090),G=n(40134),N=n.n(G),k=n(11163),A=n(92455),L=n(24330);function E(e){var o;let{post:n,postType:d,className:s,color:u,source:p,style:_,disabled:h,fullWidth:y}=e,{t:g}=(0,v.Z)(),m=(0,k.useRouter)(),[x,G]=(0,r.useState)(!1),[E,W]=(0,r.useState)(!1),{data:M}=(0,Z.Z)(),{data:D}=(0,w.Z)(),I=(null===(o=null==D?void 0:D.find(e=>{var o;return(null==e?void 0:null===(o=e[d])||void 0===o?void 0:o._id)===(null==n?void 0:n._id)}))||void 0===o?void 0:o.state)==="rejected",P=(0,b.Z)("".concat(d,"/").concat(null==n?void 0:n._id)),{experienceWarning:F,educationWarning:O,languageWarning:T}=f({post:n}),S=(0,r.useMemo)(()=>(null==M?void 0:M.role)==="applicant"&&(null==D?void 0:D.find(e=>{var o;return(null==e?void 0:null===(o=e[d])||void 0===o?void 0:o._id)===(null==n?void 0:n._id)})),[M,D,n,d]),Y=(null==M?void 0:M.name)&&(null==M?void 0:M.email)&&(null==M?void 0:M.locationCity)&&(null==M?void 0:M.locationCountry),R=()=>{A.Z.event(A.Z.EVENTS.APPLY_CLICKED,{source:p,job_guid:null==n?void 0:n._id,signed_in:!!M})},q=()=>{a.ZP.promise(P.mutateAsync(),{loading:g("applying"),success:()=>(G(!1),W(!1),g("successfully_applied")),error:e=>{var o,n;return g(null==e?void 0:null===(o=e.response)||void 0===o?void 0:null===(n=o.data)||void 0===n?void 0:n.message)}})},K=()=>{(null==M?void 0:M.role)==="applicant"?Y?q():a.ZP.error(g("fill_out_at_least")):G(!0),R(),B.B({action:"apply_click",category:"Apply",label:P,value:M})},H=()=>{G(!1),m.push("/signup/applicant"),A.Z.event(A.Z.EVENTS.CLICKED_SIGN_UP,{source:p,where:"Applicant"})};return(0,l.jsxs)(l.Fragment,{children:[I?(0,l.jsx)(c.Z,{className:"".concat(N().isRejected," ").concat(N()[u]," ").concat(s," ").concat(y?N().fullWidth:""),children:(0,l.jsx)("div",{className:N().rejectedTitle,children:(0,l.jsx)("p",{children:g("rejected")})})}):(0,l.jsx)(c.Z,{style:_,className:"".concat(N().button," ").concat(N()[u]," ").concat(y?N().fullWidth:""," ").concat(s," ").concat(h?N().disabled:""),disabled:S||h,onClick:K,children:S?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:(0,l.jsx)(C.Z,{})}),g("applied")]}):(null==n?void 0:n.status)!=="active"?g("archived_job"):g("apply")}),(0,l.jsx)(i.Z,{isOpen:x,closeModal:()=>G(!1),children:(0,l.jsxs)(L.xuv,{sx:{maxWidth:"100%",width:"580px",padding:"30px"},children:[(0,l.jsx)(L.xuv,{className:N().imgContainer,children:(0,l.jsx)(t.Z,{name:"deleteImg",width:200,height:200})}),(0,l.jsx)(L.xuv,{className:N().titleContainer,children:(0,l.jsx)(L.ZT$,{className:N().title,children:g("please_signup_as_applicant")})}),(0,l.jsxs)(L.xuv,{className:N().buttonContainer,children:[(0,l.jsx)(c.Z,{color:"secondary",onClick:()=>G(!1),children:g("cancel")}),(0,l.jsx)(c.Z,{onClick:H,children:g("sign_up")})]})]})}),(0,l.jsx)(j,{post:n,apply:q,isModalOpen:E,setIsModalOpen:W})]})}},43966:function(e,o,n){"use strict";function l(){var e;let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,l=null===(e=null==o?void 0:o.map(e=>"".concat(n(e.lang)).concat(e.level?" - ".concat(n(e.level)):"")))||void 0===e?void 0:e.join(", ");return l}n.d(o,{Z:function(){return l}})},22214:function(e,o,n){"use strict";function l(e,o,n){var l,r,a,c,i,t,d;let s="uz"===n;switch(e){case"0-1":return"0-1 ".concat(null===(l=null===(r=o("year"))||void 0===r?void 0:r.toLowerCase())||void 0===l?void 0:l.toLowerCase());case"1-3":return"1-3 ".concat(s?null===(a=o("year"))||void 0===a?void 0:a.toLowerCase():o("ru"===n?"year2":"years"));case"3-5":return"3-5 ".concat(s?null===(c=o("year"))||void 0===c?void 0:c.toLowerCase():o("years"));case"5-10":return"5-10 ".concat(s?null===(i=o("year"))||void 0===i?void 0:i.toLowerCase():o("years"));case"10+":return"10+ ".concat(s?null===(t=o("year"))||void 0===t?void 0:t.toLowerCase():o("years"));default:return"".concat(e," ").concat(s?null===(d=o("year"))||void 0===d?void 0:d.toLowerCase():o("years"))}}n.d(o,{Z:function(){return l}})},40134:function(e){e.exports={colorPrimary:"#3f8cff",colorPrimaryDark:"#073746",colorGreen:"#4bc0c8",colorBule3:"#3558ae",colorBule2:"#3b447a",colorBlueAB:"#003cab",colorWhite:"#fff",colorGreyF1:"#f1f1f1",colorGreyF8:"#f1f5f8",colorGreyF9:"#f5f7f9",colorGreyD2:"#d2d2d2",colorGreyA6:"#8692a6",colorGreyA8:"#9697a8",colorGreyCB:"#a5b4cb",colorGrey7C:"#7c8da6",colorGreyF3:"#f3f3f3",colorGreyCA:"#cacaca",colorDark:"#475467",colorText:"#242423",colorBlack:"#000",colorBlack2:"#525461",colorBlack3:"#111",colorBlack4:"#101828",colorBlack5:"#27292c",colorGreen2:"#159947",colorGreenC8:"#c8facd",colorGreen44:"#44e1bb",colorGreen97:"#6fcf97",colorRed:"#fc474a",colorPurple:"#716ab7",colorYellow:"#ffc727",colorYellow74:"#d0d274",roundness:"8px",isRejected:"ApplyButton_isRejected__1M2LQ",button:"ApplyButton_button__vp0CK",disabled:"ApplyButton_disabled__c7Csi",secondary:"ApplyButton_secondary__8tg0A",modalContainer:"ApplyButton_modalContainer__5oYOi",imgContainer:"ApplyButton_imgContainer__iP3mE",titleContainer:"ApplyButton_titleContainer__3Qw73",title:"ApplyButton_title__I5jU2",buttonContainer:"ApplyButton_buttonContainer__8y3_x",fullWidth:"ApplyButton_fullWidth__TDDHx"}},51431:function(e){e.exports={colorPrimary:"#3f8cff",colorPrimaryDark:"#073746",colorGreen:"#4bc0c8",colorBule3:"#3558ae",colorBule2:"#3b447a",colorBlueAB:"#003cab",colorWhite:"#fff",colorGreyF1:"#f1f1f1",colorGreyF8:"#f1f5f8",colorGreyF9:"#f5f7f9",colorGreyD2:"#d2d2d2",colorGreyA6:"#8692a6",colorGreyA8:"#9697a8",colorGreyCB:"#a5b4cb",colorGrey7C:"#7c8da6",colorGreyF3:"#f3f3f3",colorGreyCA:"#cacaca",colorDark:"#475467",colorText:"#242423",colorBlack:"#000",colorBlack2:"#525461",colorBlack3:"#111",colorBlack4:"#101828",colorBlack5:"#27292c",colorGreen2:"#159947",colorGreenC8:"#c8facd",colorGreen44:"#44e1bb",colorGreen97:"#6fcf97",colorRed:"#fc474a",colorPurple:"#716ab7",colorYellow:"#ffc727",colorYellow74:"#d0d274",roundness:"8px",container:"WarningModal_container__jYKrh",title:"WarningModal_title__iw56Q",description:"WarningModal_description__FlIJo",warningList:"WarningModal_warningList__efPMF",warningItem:"WarningModal_warningItem__2618V",icon:"WarningModal_icon__iRYfh",buttonContainer:"WarningModal_buttonContainer__4j9D8"}}}]);