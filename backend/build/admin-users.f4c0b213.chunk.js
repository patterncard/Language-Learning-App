(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5199],{78086:function(Z,y,t){(function(e,a){Z.exports=a(t(67294))})(this,function(e){return function(a){var c={};function o(n){if(c[n])return c[n].exports;var r=c[n]={i:n,l:!1,exports:{}};return a[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=a,o.c=c,o.d=function(n,r,p){o.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:p})},o.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,r){if(1&r&&(n=o(n)),8&r||4&r&&typeof n=="object"&&n&&n.__esModule)return n;var p=Object.create(null);if(o.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:n}),2&r&&typeof n!="string")for(var f in n)o.d(p,f,function(D){return n[D]}.bind(null,f));return p},o.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(r,"a",r),r},o.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},o.p="",o(o.s=67)}({0:function(a,c){a.exports=e},67:function(a,c,o){"use strict";o.r(c);var n=o(0);function r(){return(r=Object.assign||function(p){for(var f=1;f<arguments.length;f++){var D=arguments[f];for(var M in D)Object.prototype.hasOwnProperty.call(D,M)&&(p[M]=D[M])}return p}).apply(this,arguments)}c.default=function(p){return n.createElement("svg",r({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p),n.createElement("path",{d:"M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",fill:"#32324D"}),n.createElement("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",fill:"#32324D"}),n.createElement("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",fill:"#32324D"}))}}})})},57338:(Z,y,t)=>{"use strict";t.d(y,{Z:()=>a});const a={firstname:"",lastname:"",email:"",roles:[]}},55867:(Z,y,t)=>{"use strict";t.d(y,{Z:()=>a});const a=[]},46903:(Z,y,t)=>{"use strict";t.r(y),t.d(y,{default:()=>qe});var e=t(67294),a=t(68547),c=t(87751),o=t(78862),n=t(19408),r=t(62031),p=t(84686),f=t(78086),D=t.n(f),M=t(49656),v=t(97132),m=t(23724),T=t(45697),u=t.n(T),te=t(59522),I=t(5493),ae=t(30741),X=t(67826),U=t(49425),j=t(41798),N=t(19352),z=t.n(N),H=t(18568),le=t.n(H),V=t(8610),oe=Object.defineProperty,B=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,Y=(s,i,l)=>i in s?oe(s,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[i]=l,ne=(s,i)=>{for(var l in i||(i={}))J.call(i,l)&&Y(s,l,i[l]);if(B)for(var l of B(i))S.call(i,l)&&Y(s,l,i[l]);return s},ge=(s,i)=>{var l={};for(var d in s)J.call(s,d)&&i.indexOf(d)<0&&(l[d]=s[d]);if(s!=null&&B)for(var d of B(s))i.indexOf(d)<0&&S.call(s,d)&&(l[d]=s[d]);return l};const $=({canDelete:s,headers:i,entriesToDelete:l,onClickDelete:d,onSelectRow:P,withMainAction:_,withBulkActions:O,rows:h})=>{const{push:E,location:{pathname:C}}=(0,M.useHistory)(),{formatMessage:W}=(0,v.useIntl)();return e.createElement(j.Tbody,null,h.map(g=>{const re=l.findIndex(F=>F===g.id)!==-1;return e.createElement(j.Tr,ne({key:g.id},(0,a.onRowClick)({fn:()=>E(`${C}/${g.id}`),condition:O})),_&&e.createElement(j.Td,ne({},a.stopPropagation),e.createElement(te.BaseCheckbox,{"aria-label":W({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,V.Pp)(g.firstname,g.lastname)}),checked:re,onChange:()=>{P({name:g.id,value:!re})}})),i.map(F=>{var K=F,{key:se,cellFormatter:q,name:ee}=K,x=ge(K,["key","cellFormatter","name"]);return e.createElement(j.Td,{key:se},typeof q=="function"?q(g,ne({key:se,name:ee,formatMessage:W},x)):e.createElement(U.Typography,{textColor:"neutral800"},g[ee]||"-"))}),O&&e.createElement(j.Td,null,e.createElement(X.Flex,{justifyContent:"end"},e.createElement(ae.IconButton,{onClick:()=>E(`${C}/${g.id}`),label:W({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,V.Pp)(g.firstname,g.lastname)}),noBorder:!0,icon:e.createElement(z(),null)}),s&&e.createElement(I.Box,ne({paddingLeft:1},a.stopPropagation),e.createElement(ae.IconButton,{onClick:()=>d(g.id),label:W({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,V.Pp)(g.firstname,g.lastname)}),noBorder:!0,icon:e.createElement(le(),null)})))))}))};$.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete:()=>{},onSelectRow:()=>{},rows:[],withBulkActions:!1,withMainAction:!1},$.propTypes={canDelete:u().bool,entriesToDelete:u().array,headers:u().array.isRequired,onClickDelete:u().func,onSelectRow:u().func,rows:u().array,withBulkActions:u().bool,withMainAction:u().bool};const Ie=$;var Ue=t(23980),We=t.n(Ue);const De=({displayedFilters:s})=>{const[i,l]=(0,e.useState)(!1),{formatMessage:d}=(0,v.useIntl)(),P=(0,e.useRef)(),_=()=>{l(O=>!O)};return e.createElement(e.Fragment,null,e.createElement(I.Box,{paddingTop:1,paddingBottom:1},e.createElement(n.Button,{variant:"tertiary",ref:P,startIcon:e.createElement(We(),null),onClick:_,size:"S"},d({id:"app.utils.filters",defaultMessage:"Filters"})),i&&e.createElement(a.FilterPopoverURLQuery,{displayedFilters:s,isVisible:i,onToggle:_,source:P})),e.createElement(a.FilterListURLQuery,{filtersSchema:s}))};De.propTypes={displayedFilters:u().arrayOf(u().shape({name:u().string.isRequired,metadatas:u().shape({label:u().string}),fieldSchema:u().shape({type:u().string})})).isRequired};const Fe=De;var me=t(87462),Te=t(15861),ve=t(70885),Ke=t(64687),pe=t.n(Ke),fe=t(75146),ie=t(34626),Ce=t(68115),Le=t(9008),xe=t(80831),ye=t(23998),Ze=t(81288);const $e=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]];var ce=t(53209);const je=ce.Ry().shape({firstname:ce.Z_().required(a.translatedErrors.required),lastname:ce.Z_(),email:ce.Z_().email(a.translatedErrors.email).required(a.translatedErrors.required),roles:ce.IX().min(1,a.translatedErrors.required).required(a.translatedErrors.required)}),Ne={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};var ze=function(){return window&&window.strapi&&window.strapi.isEE?t(97083).Z:t(57338).Z}(),Qe=function(){return window&&window.strapi&&window.strapi.isEE?t(810).Z:t(55867).Z}(),we=function(){return window&&window.strapi&&window.strapi.isEE?t(12201).Z:t(31605).Z}(),_e=function(i){var l=i.queryName,d=i.onToggle,P=(0,e.useState)("create"),_=(0,ve.Z)(P,2),O=_[0],h=_[1],E=(0,e.useState)(!1),C=(0,ve.Z)(E,2),W=C[0],g=C[1],re=(0,e.useState)(null),F=(0,ve.Z)(re,2),K=F[0],se=F[1],q=(0,m.useQueryClient)(),ee=(0,v.useIntl)(),x=ee.formatMessage,Pe=(0,a.useNotification)(),b=(0,a.useOverlayBlocker)(),Ee=b.lockApp,ue=b.unlockApp,et=(0,m.useMutation)(function(R){return ye.be.post("/admin/users",R)},{onSuccess:function(){var R=(0,Te.Z)(pe().mark(function w(k){var G;return pe().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return G=k.data,se(G.data.registrationToken),de.next=4,q.invalidateQueries(l);case 4:at(),g(!1);case 6:case"end":return de.stop()}},w)}));function Q(w){return R.apply(this,arguments)}return Q}(),onError:function(Q){throw g(!1),Pe({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),Q},onSettled:function(){ue()}}),Se=x({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),tt=function(){var R=(0,Te.Z)(pe().mark(function Q(w,k){var G,L;return pe().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return G=k.setErrors,Ee(),g(!0),A.prev=3,A.next=6,et.mutateAsync(w);case 6:A.next=12;break;case 8:A.prev=8,A.t0=A.catch(3),ue(),(A.t0===null||A.t0===void 0||(L=A.t0.response)===null||L===void 0?void 0:L.data.message)==="Email already taken"&&G({email:A.t0.response.data.message});case 12:case"end":return A.stop()}},Q,null,[[3,8]])}));return function(w,k){return R.apply(this,arguments)}}(),at=function(){Re?h(Re):d()},he=Ne[O],be=he.buttonSubmitLabel,Oe=he.isDisabled,Re=he.next,nt=O==="create"?e.createElement(n.Button,{type:"submit",loading:W},x(be)):e.createElement(n.Button,{type:"button",loading:W,onClick:d},x(be));return e.createElement(fe.ModalLayout,{onClose:d,labelledBy:"title"},e.createElement(fe.ModalHeader,null,e.createElement(Ce.Breadcrumbs,{label:Se},e.createElement(Ce.Crumb,null,Se))),e.createElement(xe.Formik,{initialValues:ze,onSubmit:tt,validationSchema:je,validateOnChange:!1},function(R){var Q=R.errors,w=R.handleChange,k=R.values;return e.createElement(a.Form,null,e.createElement(fe.ModalBody,null,e.createElement(Le.Stack,{spacing:6},O!=="create"&&e.createElement(we,{registrationToken:K}),e.createElement(I.Box,null,e.createElement(U.Typography,{variant:"beta",as:"h2"},x({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),e.createElement(I.Box,{paddingTop:4},e.createElement(Le.Stack,{spacing:1},e.createElement(ie.Grid,{gap:5},$e.map(function(G){return G.map(function(L){return e.createElement(ie.GridItem,(0,me.Z)({key:L.name},L.size),e.createElement(a.GenericInput,(0,me.Z)({},L,{disabled:Oe,error:Q[L.name],onChange:w,value:k[L.name]})))})}))))),e.createElement(I.Box,null,e.createElement(U.Typography,{variant:"beta",as:"h2"},x({id:"global.roles",defaultMessage:"User's role"})),e.createElement(I.Box,{paddingTop:4},e.createElement(ie.Grid,{gap:5},e.createElement(ie.GridItem,{col:6,xs:12},e.createElement(Ze.Z,{disabled:Oe,error:Q.roles,onChange:w,value:k.roles})),Qe.map(function(G){return G.map(function(L){return e.createElement(ie.GridItem,(0,me.Z)({key:L.name},L.size),e.createElement(a.GenericInput,(0,me.Z)({},L,{disabled:Oe,onChange:w,value:k[L.name]})))})})))))),e.createElement(fe.ModalFooter,{startActions:e.createElement(n.Button,{variant:"tertiary",onClick:d,type:"button"},x({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:nt}))}))};_e.propTypes={onToggle:u().func.isRequired,queryName:u().array.isRequired};const Ge=_e,Me=({pagination:s})=>e.createElement(I.Box,{paddingTop:4},e.createElement(X.Flex,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(a.PageSizeURLQuery,null),e.createElement(a.PaginationURLQuery,{pagination:s})));Me.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},Me.propTypes={pagination:u().shape({page:u().number,pageCount:u().number,pageSize:u().number,total:u().number})};const Xe=Me;var Ae=(s,i,l)=>new Promise((d,P)=>{var _=E=>{try{h(l.next(E))}catch(C){P(C)}},O=E=>{try{h(l.throw(E))}catch(C){P(C)}},h=E=>E.done?d(E.value):Promise.resolve(E.value).then(_,O);h((l=l.apply(s,i)).next())});const He=(s,i)=>Ae(void 0,null,function*(){const{data:{data:l}}=yield ye.be.get(`/admin/users${s}`);return i(),l}),Ve=s=>Ae(void 0,null,function*(){yield ye.be.post("/admin/users/batch-delete",{ids:s})}),Je=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],Be=[{name:"firstname",key:"firstname",metadatas:{label:"Firstname",sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:"Lastname",sortable:!0}},{key:"email",name:"email",metadatas:{label:"Email",sortable:!0}},{key:"roles",name:"roles",metadatas:{label:"Roles",sortable:!1},cellFormatter:({roles:s},{formatMessage:i})=>e.createElement(U.Typography,{textColor:"neutral800"},s.map(l=>i({id:`global.${l.code}`,defaultMessage:l.name})).join(`,
`))},{key:"username",name:"username",metadatas:{label:"Username",sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:"User status",sortable:!1},cellFormatter:({isActive:s},{formatMessage:i})=>e.createElement(X.Flex,null,e.createElement(a.Status,{isActive:s,variant:s?"success":"danger"}),e.createElement(U.Typography,{textColor:"neutral800"},i({id:s?"global.active":"global.inactive",defaultMessage:s?"Active":"Inactive"})))}];var Ye=(s,i,l)=>new Promise((d,P)=>{var _=E=>{try{h(l.next(E))}catch(C){P(C)}},O=E=>{try{h(l.throw(E))}catch(C){P(C)}},h=E=>E.done?d(E.value):Promise.resolve(E.value).then(_,O);h((l=l.apply(s,i)).next())});const ke=()=>{const[s,i]=(0,e.useState)(!1),{allowedActions:{canCreate:l,canDelete:d,canRead:P}}=(0,a.useRBAC)(c.Z.settings.users),_=(0,m.useQueryClient)(),O=(0,a.useNotification)(),{formatMessage:h}=(0,v.useIntl)(),{search:E}=(0,M.useLocation)();(0,a.useFocusWhenNavigate)();const{notifyStatus:C}=(0,p.useNotifyAT)(),W=["users",E],g=h({id:"global.users",defaultMessage:"Users"}),re=()=>{C(h({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:g}))},{status:F,data:K,isFetching:se}=(0,m.useQuery)(W,()=>He(E,re),{enabled:P,keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:()=>{O({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),q=()=>{i(b=>!b)},ee=(0,m.useMutation)(b=>Ve(b),{onSuccess:()=>Ye(void 0,null,function*(){yield _.invalidateQueries(W)}),onError:b=>{var Ee,ue;(ue=(Ee=b==null?void 0:b.response)==null?void 0:Ee.data)!=null&&ue.data?O({type:"warning",message:b.response.data.data}):O({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),x=F!=="success"&&F!=="error"||F==="success"&&se,Pe=l?e.createElement(n.Button,{"data-testid":"create-user-button",onClick:q,startIcon:e.createElement(D(),null),size:"L"},h({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})):void 0;return e.createElement(r.Main,{"aria-busy":x},e.createElement(a.SettingsPageTitle,{name:"Users"}),e.createElement(o.HeaderLayout,{primaryAction:Pe,title:g,subtitle:h({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),P&&e.createElement(o.ActionLayout,{startActions:e.createElement(e.Fragment,null,e.createElement(a.SearchURLQuery,{label:h({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:g})}),e.createElement(Fe,{displayedFilters:Je}))}),e.createElement(o.ContentLayout,{canRead:P},!P&&e.createElement(a.NoPermissions,null),F==="error"&&e.createElement("div",null,"TODO: An error occurred"),P&&e.createElement(e.Fragment,null,e.createElement(a.DynamicTable,{contentType:"Users",isLoading:x,onConfirmDeleteAll:ee.mutateAsync,onConfirmDelete:b=>ee.mutateAsync([b]),headers:Be,rows:K==null?void 0:K.results,withBulkActions:!0,withMainAction:d},e.createElement(Ie,{canDelete:d,headers:Be,rows:(K==null?void 0:K.results)||[],withBulkActions:!0,withMainAction:d})),e.createElement(Xe,{pagination:K==null?void 0:K.pagination}))),s&&e.createElement(Ge,{onToggle:q,queryName:W}))},qe=()=>e.createElement(a.CheckPagePermissions,{permissions:c.Z.settings.users.main},e.createElement(ke,null))},82464:(Z,y,t)=>{"use strict";t.d(y,{Z:()=>I});var e=t(67294),a=t(45697),c=t.n(a),o=t(30741),n=t.n(o),r=t(68547),p=t.n(r),f=t(67483),D=t.n(f),M=t(74855),v=t.n(M),m=t(97132),T=t.n(m);const u=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},e.createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},e.createElement("tspan",{x:"23",y:"36"},"\u2709\uFE0F"))),te=({children:ae,target:X})=>{const U=(0,r.useNotification)(),{formatMessage:j}=(0,m.useIntl)(),N=()=>{U({type:"info",message:{id:"notification.link-copied"}})},z=j({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return e.createElement(r.ContentBox,{endAction:e.createElement(M.CopyToClipboard,{onCopy:N,text:X},e.createElement(o.IconButton,{label:z,noBorder:!0,icon:e.createElement(D(),null)})),title:X,titleEllipsis:!0,subtitle:ae,icon:e.createElement(u,null),iconBackground:"neutral100"})};te.propTypes={children:c().oneOfType([c().element,c().string]).isRequired,target:c().string.isRequired};const I=te},31605:(Z,y,t)=>{"use strict";t.d(y,{Z:()=>D});var e=t(67294),a=t(97132),c=t.n(a),o=t(45697),n=t.n(o),r=t(63871),p=t(82464);const f=({registrationToken:M})=>{const{formatMessage:v}=(0,a.useIntl)(),m=`${window.location.origin}${r.Z}auth/register?registrationToken=${M}`;return e.createElement(p.Z,{target:m},v({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};f.defaultProps={registrationToken:""},f.propTypes={registrationToken:n().string};const D=f},81288:(Z,y,t)=>{"use strict";t.d(y,{Z:()=>j});var e=t(67294),a=t(45697),c=t.n(a),o=t(97132),n=t.n(o),r=t(43808),p=t.n(r),f=t(23724),D=t.n(f),M=t(78384),v=t(57572),m=t.n(v),T=t(23998),u=(N,z,H)=>new Promise((le,V)=>{var oe=S=>{try{J(H.next(S))}catch(Y){V(Y)}},B=S=>{try{J(H.throw(S))}catch(Y){V(Y)}},J=S=>S.done?le(S.value):Promise.resolve(S.value).then(oe,B);J((H=H.apply(N,z)).next())});const te=M.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,I=M.default.div`
  animation: ${te} 2s infinite linear;
`,ae=()=>e.createElement(I,null,e.createElement(m(),null)),X=()=>u(void 0,null,function*(){const{data:N}=yield T.be.get("/admin/roles");return N.data}),U=({disabled:N,error:z,onChange:H,value:le})=>{const{status:V,data:oe}=(0,f.useQuery)(["roles"],X,{staleTime:5e4}),{formatMessage:B}=(0,o.useIntl)(),J=z?B({id:z,defaultMessage:z}):"",S=B({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),Y=B({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),ne=B({id:"app.components.Select.placeholder",defaultMessage:"Select"}),ge=V==="loading"?e.createElement(ae,null):void 0;return e.createElement(r.Select,{id:"roles",disabled:N,error:J,hint:Y,label:S,name:"roles",onChange:$=>{H({target:{name:"roles",value:$}})},placeholder:ne,multi:!0,startIcon:ge,value:le,withTags:!0,required:!0},(oe||[]).map($=>e.createElement(r.Option,{key:$.id,value:$.id},B({id:`global.${$.code}`,defaultMessage:$.name}))))};U.defaultProps={disabled:!1,error:void 0},U.propTypes={disabled:c().bool,error:c().string,onChange:c().func.isRequired,value:c().array.isRequired};const j=U},97083:(Z,y,t)=>{"use strict";t.d(y,{Z:()=>M});var e=t(57338),a=Object.defineProperty,c=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(v,m,T)=>m in v?a(v,m,{enumerable:!0,configurable:!0,writable:!0,value:T}):v[m]=T,p=(v,m)=>{for(var T in m||(m={}))o.call(m,T)&&r(v,T,m[T]);if(c)for(var T of c(m))n.call(m,T)&&r(v,T,m[T]);return v};const f=strapi.features.isEnabled(strapi.features.SSO)?{useSSORegistration:!0}:{},M=p(p({},e.Z),f)},810:(Z,y,t)=>{"use strict";t.d(y,{Z:()=>a});const a=strapi.features.isEnabled(strapi.features.SSO)?[[{intlLabel:{id:"Settings.permissions.users.form.sso",defaultMessage:"Connect with SSO"},hint:{id:"Settings.permissions.users.form.sso.description",defaultMessage:"When enabled (ON), users can login via SSO"},name:"useSSORegistration",type:"bool",size:{col:6,xs:12}}]]:[]},12201:(Z,y,t)=>{"use strict";t.d(y,{Z:()=>D});var e=t(67294),a=t(97132),c=t.n(a),o=t(45697),n=t.n(o),r=t(63871),p=t(82464);const f=({registrationToken:M})=>{const{formatMessage:v}=(0,a.useIntl)();return M?e.createElement(p.Z,{target:`${window.location.origin}${r.Z}auth/register?registrationToken=${M}`},v({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):e.createElement(p.Z,{target:`${window.location.origin}${r.Z}auth/login`},v({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};f.defaultProps={registrationToken:""},f.propTypes={registrationToken:n().string};const D=f}}]);