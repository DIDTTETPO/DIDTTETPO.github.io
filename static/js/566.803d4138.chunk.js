"use strict";(self.webpackChunkskytime_donate=self.webpackChunkskytime_donate||[]).push([[566],{8566:function(e,t,r){r.r(t);var n=r(4165),a=r(5861),o=r(9439),c=r(2982),i=r(4419),s=r(5059),u=r(5508),p=r(8935),d=r(320),l=r(6573),h=r(7313),x=r(8467),f=r(2135),m=r(8341),b=r(3574),g=r(5407),k=r(6417);t.default=function(){var e=(0,h.useState)([]),t=(0,o.Z)(e,2),r=t[0],v=t[1],w=(0,h.useState)([]),j=(0,o.Z)(w,2),Z=j[0],y=j[1],C=(0,h.useState)(0),S=(0,o.Z)(C,2),_=S[0],z=S[1],A=(0,c.p)(),B=(0,h.useContext)(b.I);(0,h.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("https://api.skytime.su/admin/categories",{headers:{Authorization:"Bearer ".concat(B.props.auth)}});case 3:return t=e.sent,r=t.data,v(r.categories),e.next=8,l.Z.get("https://api.skytime.su/admin/products",{headers:{Authorization:"Bearer ".concat(B.props.auth)}});case 8:a=e.sent,o=a.data,y(o.products),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),(0,g.Z)(e.t0,A);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,h.useEffect)((function(){z(r[0]?r[0].id:0)}),[Z,r]);var D=(0,x.s0)();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(i.K,{direction:["column","row"],justifyContent:"space-between",children:[(0,k.jsx)(s.X,{children:"\u0422\u043e\u0432\u0430\u0440\u044b:"}),(0,k.jsxs)(i.K,{borderRadius:15,bgColor:"white",boxShadow:"0px 1px 4px 0px rgba(0, 0, 0, 0.25)",direction:"row",spacing:3,pb:2,pt:2,pl:4,pr:4,children:[r.map((function(e){return(0,k.jsx)(u.r,{fontWeight:_===e.id?"bold":"normal",onClick:function(){return z(e.id)},color:_===e.id?"black":"gray.600",_hover:{textDecoration:"none",color:"black"},children:e.name})})),(0,k.jsx)(u.r,{color:"gray.600",_hover:{textDecoration:"none",color:"black"},as:f.rU,to:"/admin/categories",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"})]})]}),(0,k.jsxs)(p.M,{mt:8,columns:[1,2,3],spacing:4,children:[(0,k.jsx)(d.z,{bg:"white",borderRadius:10,boxShadow:"0px 1px 4px 0px rgba(0, 0, 0, 0.25)",h:"full",size:"lg",minH:16,onClick:function(){return D("/admin/products/create")},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"}),Z.filter((function(e){return e.category_id===_})).map((function(e){return(0,k.jsx)(m.Z,{product:e})}))]})]})}}}]);