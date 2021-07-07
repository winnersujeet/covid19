(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{124:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(16),r=a.n(c),o=(a(124),a(25)),i=a(202),s=a(186),l=a(160),j=a(195),d=a(189),b=a(190),x=a(72),h=a(73),u=a(70),O=a(196),m=a(78),p=a.n(m),g=a(32),f=a(108),v=a(201),y=a(205),C=a(191),w=a(204),S=a(192),k=a(193),N=a(194),D=a(4),T=function(e){var t=e.type,a=e.label,n=e.color,c=Object(f.a)(e,["type","label","color"]);return Object(D.jsx)(l.a,Object(g.a)(Object(g.a)({variant:t,color:n},c),{},{children:a}))},R=function(e){var t=e.name,a=e.label,n=e.type,c=e.data,r=e.errors,o=e.onChange;return Object(D.jsx)(v.a,{label:a,type:n||"text",variant:"outlined",color:"primary",size:"small",fullWidth:!0,name:t,value:c[t],error:!!r[t],helperText:r[t]?r[t]:"",onChange:o})},A=function(e){var t=e.name,a=e.label,n=e.options,c=e.data,r=e.errors,o=e.onChange;return Object(D.jsx)(v.a,{select:!0,label:a,variant:"outlined",color:"primary",size:"small",fullWidth:!0,name:t,value:c[t],error:!!r[t],helperText:r[t]?r[t]:"",onChange:o,children:n.map((function(e){return Object(D.jsx)(y.a,{value:e.value,children:e.key},e.value)}))})},I=function(e){var t=e.initialState,a=e.title,n=e.content,c=e.action,r=e.handleClose;return Object(D.jsxs)(w.a,{open:t,onClose:r,"aria-labelledby":"".concat(a,"-title"),"aria-describedby":"".concat(a,"-description"),children:[Object(D.jsx)(S.a,{id:a,children:a}),Object(D.jsx)(k.a,{children:n}),Object(D.jsx)(N.a,{children:c})]})},F=a(98),B=a.n(F),z=a.p+"static/media/indianFlag.7c92a5aa.png",_=a(99),E=a.n(_);function H(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),m=Object(o.a)(r,2),g=m[0],f=m[1],v=Object(n.useState)({}),y=Object(o.a)(v,2),C=y[0],w=y[1],S=Object(n.useState)({}),k=Object(o.a)(S,2),N=(k[0],k[1]),T=Object(n.useState)([]),R=Object(o.a)(T,2),A=R[0],I=R[1];return Object(n.useEffect)((function(){return!a&&p.a.get("https://api.covid19api.com/summary").then((function(e){var t=e.data.Global;w({"New Cases":t.NewConfirmed,"Total Cases":t.TotalConfirmed,"New Recovery":t.NewRecovered,"Total Recovery":t.TotalRecovered,"New Deaths":t.NewDeaths,"Total Deaths":t.TotalDeaths}),c(!0)}))})),Object(n.useEffect)((function(){!g&&p.a.get("https://api.covid19india.org/data.json").then((function(e){var t=e.data.cases_time_series,a={};t.forEach((function(e,t){var n=new Date(e.date),c=n.getMonth(),r=n.getFullYear();a[r]||(a[r]={}),a[r][c]?a[r][c]+=+e.dailyconfirmed:a[r][c]=+e.dailyconfirmed})),N(a);var n=Object.keys(a[2021]).map((function(e,t){return a[2021][e]}));I(n),f(!0)})),W({labels:["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],title:"Covid cases",data:A,bgColor:x.a[200],borderColor:x.a[800]})})),Object(D.jsxs)(i.a,{mt:2,mr:2,ml:2,children:[Object(D.jsxs)(s.a,{container:!0,spacing:1,children:[Object(D.jsx)(s.a,{item:!0,xs:12,sm:12,children:Object(D.jsx)(l.a,{variant:"h6",gutterBottom:!0,style:{color:x.a[700]},children:"Global Status"})}),Object.entries(C).length?Object.entries(C).map((function(e,t){return function(e){var t=e.key,a=e.value,n=e.index,c=e.Color;return Object(D.jsx)(s.a,{item:!0,xs:6,sm:3,children:Object(D.jsx)(d.a,{raised:!0,children:Object(D.jsx)(b.a,{children:Object(D.jsxs)(s.a,{container:!0,children:[Object(D.jsx)(s.a,{item:!0,xs:"auto",style:{background:c,paddingRight:"5px"}}),Object(D.jsxs)(s.a,{item:!0,xs:11,children:[Object(D.jsx)(l.a,{variant:"body1",component:"h6",align:"center",color:"textSecondary",gutterBottom:!0,children:t}),Object(D.jsx)(l.a,{variant:"h5",component:"h5",align:"center",style:{color:c},children:a})]})]})})})},n)}({key:e[0],value:Object(D.jsx)(B.a,{start:0,end:e[1],duration:2}),index:t,Color:"New Cases"===e[0]||"Total Cases"===e[0]?x.a[500]:"New Recovery"===e[0]||"Total Recovery"===e[0]?h.a[500]:u.a[500]})})):Object(D.jsxs)(i.a,{style:{height:"200px",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(D.jsx)(l.a,{variant:"body1",color:"textSecondary",align:"center",children:"Loading Global state ..."}),Object(D.jsx)("br",{}),Object(D.jsx)(j.a,{color:"secondary"})]})]}),Object(D.jsx)(i.a,{mt:4,children:Object(D.jsxs)(s.a,{container:!0,children:[Object(D.jsx)(s.a,{item:!0,xs:12,sm:12,children:Object(D.jsx)(l.a,{variant:"h6",gutterBottom:!0,style:{color:x.a[700]},children:"Regional Status"})}),Object(D.jsx)(s.a,{item:!0,xs:12,sm:12,children:Object(D.jsxs)(d.a,{children:[Object(D.jsxs)(i.a,{p:1,style:{display:"flex"},children:[Object(D.jsx)("img",{src:z,alt:"Indian flag",style:{width:"40px",height:"auto"}}),Object(D.jsx)(l.a,{variant:"body1",component:"h6",style:{color:O.a[700],lineHeight:"50px"},children:"India"})]}),Object(D.jsx)(b.a,{children:Object(D.jsx)("canvas",{id:"myChart",width:"100%",height:"400"})})]})})]})})]})}var W=function(e){var t=e.labels,a=e.title,n=e.data,c=e.bgColor,r=e.borderColor,o=document.getElementById("myChart").getContext("2d");return new E.a(o,{type:"line",data:{labels:t,datasets:[{label:a,data:n,backgroundColor:c,borderColor:r,borderWidth:3}]},options:{scales:{yAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"},ticks:{beginAtZero:!0,callback:function(e,t,a){return e/1e6+"m"}}}],xAxes:[{gridLines:{color:"rgba(0, 0, 0, 0)"}}]},responsive:!0,maintainAspectRatio:!1}})},G=a(100),L=a.n(G);function U(){return Object(D.jsx)(s.a,{container:!0,children:Object(D.jsx)(s.a,{item:!0,xs:12,style:{backgroundColor:"#efefef"},children:Object(D.jsx)(i.a,{p:2,children:Object(D.jsxs)(l.a,{variant:"body1",component:"h6",color:"textSecondary",align:"center",children:["Created with ",Object(D.jsx)(L.a,{color:"secondary"})," All right Reserved"," ",Object(D.jsx)("a",{href:"http://www.manit.ac.in",target:"blank",children:"@MANIT"})]})})})})}var J=a(197),Y=a(198),M=a(199),q=a(69),K=a(101),P=a.n(K),Q=a(102),V=a.n(Q),X=a(38);function Z(){return Object(D.jsx)(J.a,{position:"static",style:{background:q.a.A400},children:Object(D.jsxs)(Y.a,{children:[Object(D.jsx)(M.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(D.jsx)(P.a,{})}),Object(D.jsx)(l.a,{variant:"h6",children:Object(D.jsx)(X.b,{to:"/",style:{textDecoration:"none",color:"white"},children:"Covid19 Tracker"})}),Object(D.jsx)(C.a,{component:X.b,to:"/feedback_and_grievance",variant:"outlined",color:"default",startIcon:Object(D.jsx)(V.a,{}),style:{color:"white",borderColor:"white",textDecoration:"none",marginLeft:"auto"},children:"Feedback And Grievance"})]})})}var $=a(52),ee=a(200),te=a(71),ae={formContainer:{display:"flex",flexFlow:"row Wrap",justifyContent:"center",alignItems:"center",height:"88vh"},form:{padding:"10px",minHeight:"350px",height:"auto",marginTop:"65px"},formTitle:{color:O.a[700],textAlign:"center",margin:"10px 0px 30px 0px"},uploadDataRoot:{padding:"16px",minHeight:"327px",maxHeight:"327px",overflowY:"auto"},cardData:{position:"relative",marginBottom:"8px",textTransform:"capitalize"},deletebutton:{position:"absolute",top:"0px ",right:"0px"},dataDisplay:{width:"100%",backgroundColor:te.a[500],color:"white"}},ne=a(110),ce=a(105),re=a.n(ce),oe=a(103),ie=a.n(oe),se=a(104),le=a(107).a.initializeApp({apiKey:"AIzaSyCp8sgkqVNQHDWSp3en5Jmm-DX-6ygHfTc",authDomain:"reactcrudapp007.firebaseapp.com",projectId:"reactcrudapp007",storageBucket:"reactcrudapp007.appspot.com",messagingSenderId:"1037735974106",appId:"1:1037735974106:web:3585e5c05831e631b481e3"}),je=le.firestore(),de="users",be=Object(ee.a)(ae);function xe(e){var t=e.users,a=e.setFetched,c=be(),r=Object(n.useState)(""),x=Object(o.a)(r,2),h=x[0],O=x[1],m=Object(n.useState)(!1),p=Object(o.a)(m,2),g=p[0],f=p[1],v=function(){f(!1)},y=function(){return Object(D.jsxs)(i.a,{children:[Object(D.jsx)(l.a,{align:"center",gutterBottom:!0,children:Object(D.jsx)(ie.a,{style:{fontSize:"55px",color:u.a[500]}})}),Object(D.jsx)(l.a,{align:"center",variant:"h6",component:"h5",children:"Are You Sure To Delete ?"})]})};return Object(D.jsxs)("div",{className:c.uploadDataRoot,children:[Object(D.jsx)(I,{initialState:g,content:Object(D.jsx)(y,{}),action:Object(D.jsxs)(i.a,{mt:2,children:[Object(D.jsx)(C.a,{onClick:v,variant:"outlined",color:"default",style:{marginRight:"8px"},children:"Cancle"}),Object(D.jsx)(C.a,{onClick:function(){var e;e=h,je.collection(de).doc(e).delete(),se.a.success("Deleted Successfully"),f(!1),a(!1)},variant:"contained",color:"secondary",autoFocus:!0,children:"Delete"})]}),handleClose:v}),Object(D.jsx)(s.a,{container:!0,children:0===t.length?Object(D.jsxs)(s.a,{item:!0,xs:12,children:[Object(D.jsx)(l.a,{align:"center",children:"No Data To Show"}),Object(D.jsx)(l.a,{align:"center",variant:"subtitle2",color:"error",children:"Plz Add Data Through Form"})]}):t.length>0?t.map((function(e,t){return Object(D.jsx)(s.a,{item:!0,xs:12,children:Object(D.jsx)(d.a,{className:c.cardData,children:Object(D.jsxs)(b.a,{children:[Object(D.jsx)(M.a,{color:"secondary",className:c.deletebutton,onClick:function(){f(!0),O(e.id)},children:Object(D.jsx)(re.a,{})}),Object(D.jsx)(l.a,{variant:"body1",component:"h6",children:" ".concat(e.firstName," ").concat(e.lastName)}),Object(D.jsx)(l.a,{variant:"body1",children:e.email}),Object(D.jsx)(l.a,{variant:"body2",children:e.gender}),Object(D.jsx)(l.a,{variant:"body2",children:e.suggession})]})})},t)})):Object(D.jsx)(s.a,{item:!0,xs:12,style:{display:"flex",justifyContent:"center",marginTop:"100px"},children:Object(D.jsx)(j.a,{color:"primary"})})})]})}var he=Object(ee.a)(ae);function ue(){var e=he(),t=Object(n.useState)({firstName:"",lastName:"",suggession:"",gender:""}),a=Object(o.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)({}),j=Object(o.a)(l,2),x=j[0],h=j[1],u=Object(n.useState)(!1),O=Object(o.a)(u,2),m=O[0],p=O[1],f=Object(n.useState)([]),v=Object(o.a)(f,2),y=v[0],w=v[1],S=function(e){var t=e.target,a=t.name,n=t.value;t.value.length<3?x[t.name]=h(Object(g.a)(Object(g.a)({},x),{},Object($.a)({},a,"".concat(a," have atleast 3 letters")))):x[t.name]=h(Object(g.a)(Object(g.a)({},x),{},Object($.a)({},a,""))),r(Object(g.a)(Object(g.a)({},c),{},Object($.a)({},a,n)))};return Object(n.useEffect)((function(){m||(!function(e){var t,a=e.setUploadedData,n=[];je.collection(de).get().then((function(e){e.forEach((function(e){(t=e.data()).id=e.id,n.push(t)})),a(n)}))}({setUploadedData:w}),p(!0))}),[m,y.length]),Object(D.jsx)(s.a,{container:!0,className:e.formContainer,children:Object(D.jsx)(s.a,{item:!0,xs:12,sm:9,children:Object(D.jsx)("form",{onSubmit:function(e){e.preventDefault(),function(e){return je.collection(de).add(e)}(c).then((function(e){return console.log("uploaded dataset",e)})),r({firstName:"",lastName:"",suggession:"",gender:""}),function(e){var t=e.fx_RunOnUpdata;je.collection(de).onSnapshot((function(e){return t}))}({fx_RunOnUpdata:p(!1)})},children:Object(D.jsxs)(ne.a,{component:i.a,mb:1,p:2,children:[Object(D.jsx)(i.a,{pt:2,mt:1,children:T({type:"h6",color:"primary",label:"Covid 19 FeedBack Form",align:"center",gutterBottom:!0})}),Object(D.jsxs)(s.a,{container:!0,children:[Object(D.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(D.jsxs)(d.a,{children:[Object(D.jsxs)(b.a,{children:[Object(D.jsx)(i.a,{mt:1,mb:1,children:R({name:"firstName",label:"First Name",type:"text",data:c,errors:x,onChange:S})}),R({name:"lastName",label:"Last Name",type:"text",data:c,errors:x,onChange:S}),Object(D.jsx)(i.a,{mt:1,mb:1,children:A({name:"gender",label:"Gender",options:[{key:"male",value:"male"},{key:"female",value:"female"},{key:"other",value:"other"}],data:c,errors:x,onChange:S})}),Object(D.jsx)(i.a,{mt:1,mb:1,children:R({name:"suggession",label:"Suggession",type:"text",data:c,errors:x,onChange:S})})]}),Object(D.jsx)("p",{style:{textAlign:"center",padding:"0px 16px"},children:Object(D.jsx)(C.a,{type:"submit",color:"primary",variant:"contained",fullWidth:!0,size:"small",children:"Submit"})})]})}),Object(D.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(D.jsx)(xe,{users:y,setFetched:p})})]})]})})})})}a(106);var Oe=a(18),me=function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(Z,{}),Object(D.jsx)(H,{}),Object(D.jsx)(U,{})]})},pe=function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(Z,{}),Object(D.jsx)(ue,{}),Object(D.jsx)(U,{})]})},ge=function(){return Object(D.jsxs)(Oe.d,{children:[Object(D.jsx)(Oe.b,{exact:!0,path:"/feedback_and_grievance",render:function(){return Object(D.jsx)(pe,{})}}),Object(D.jsx)(Oe.b,{exact:!0,path:"/",render:function(){return Object(D.jsx)(me,{})}}),Object(D.jsx)(Oe.b,{exact:!0,path:"*",render:function(){return Object(D.jsx)(Oe.a,{to:"/"})}})]})};function fe(){return Object(D.jsx)(ge,{})}r.a.render(Object(D.jsx)(X.a,{children:Object(D.jsx)(fe,{})}),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.3fdc6fe0.chunk.js.map