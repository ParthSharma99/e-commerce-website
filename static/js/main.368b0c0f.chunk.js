(this["webpackJsonpe-commerce-website"]=this["webpackJsonpe-commerce-website"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(0),r=c(12),n=c.n(r),i=(c(31),c(7)),o=(c(32),c(5)),l=c(6),m=function(e){var t=e.item,c=e.addRemoveCartItem,r=Object(s.useState)(0),n=Object(i.a)(r,2),m=n[0],j=n[1];return Object(a.jsxs)("div",{className:"item-wrapper",children:[Object(a.jsx)("img",{src:t.image,className:"item-image"}),Object(a.jsx)("div",{className:"item-title",children:t.title.slice(0,Math.min(t.title.length,50))}),Object(a.jsxs)("button",{className:"item-price",onClick:function(){c("ADD",t),j(m+1)},children:[Object(a.jsx)(o.a,{icon:l.a})," $",t.price,Object(a.jsx)("sup",{className:"in-cart-cnt",children:m})]})]})},j=c(14),d=function(e){return fetch(e).then((function(e){return e.json()}))},u="CHANGE_SEARCHFIELD",b="REQUEST_ITEMS_PENDING",h="REQUEST_ITEMS_SUCCESS",O="ADD_ITEMS",p="REMOVE_ITEMS",v=function(e){var t=e.items,c=e.addRemoveCartItem,s=e.cartItems;return Object(a.jsx)("div",{className:"item-list-wrapper",children:t.map((function(e,r){return Object(a.jsx)(m,{item:t[r],addRemoveCartItem:c,cartItems:s},r)}))})},I=function(e){e.searchfield;var t=e.searchChange,c=e.cartItems,s=e.setShowCart;return Object(a.jsxs)("div",{className:"search-wrapper",children:[Object(a.jsx)("input",{className:"search-bar",placeholder:"Search items",onChange:t}),Object(a.jsxs)("span",{className:"cart-count noselect",onClick:function(){return s(!0)},children:[Object(a.jsx)(o.a,{icon:l.c})," ",Object(a.jsx)("sup",{children:c.length})]})]})},f=c(20),g=c(21),x=c(25),y=c(24),N=(s.Component,function(e){var t=e.item,c=e.addRemoveCartItem,r=Object(s.useState)(0),n=Object(i.a)(r,2);n[0],n[1];return Object(a.jsxs)("div",{className:"item-wrapper",children:[Object(a.jsx)("img",{src:t.image,className:"item-image"}),Object(a.jsx)("div",{className:"item-title",children:t.title.slice(0,Math.min(t.title.length,50))}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("button",{className:"cart-remove-button",onClick:function(){return c("REMOVE",t)},children:[" ","-"," "]}),Object(a.jsx)("span",{className:"cart-count-counter",children:t.count}),Object(a.jsxs)("button",{className:"cart-add-button",onClick:function(){return c("ADD",t)},children:[" ","+"," "]})]})]})}),w=function(e){var t=e.cartItems,c=e.addRemoveCartItem,s=e.totalPrice;return Object(a.jsxs)("div",{className:"item-list-wrapper",children:[t.map((function(e,s){return Object(a.jsx)(N,{item:t[s],addRemoveCartItem:c},s)})),Object(a.jsxs)("span",{className:"total-price",children:["Total Price : ",Object(a.jsxs)("span",{children:["$ ",s]})]})]})},C=Object(j.b)((function(e){return{searchField:e.searchItems.searchField,items:e.requestItems.items,isPending:e.requestItems.isPending,cartItems:e.cartItems.cartItems,totalPrice:e.cartItems.totalPrice}}),(function(e){return{onSearchChange:function(t){return e((c=t.target.value,{type:u,payload:c}));var c},onRequestItems:function(){return e((function(e){e({type:b}),d("https://fakestoreapi.com/products").then((function(t){return e({type:h,payload:t})})).catch((function(t){return e({type:h,payload:t})}))}))},addRemoveCartItem:function(t,c){return e(function(e,t){return function(c){"ADD"===e?c({type:O,payload:t}):"REMOVE"===e&&c({type:p,payload:t})}}(t,c))},onRequestItemById:function(t){return e(function(e){return function(t){t({type:b}),d("https://fakestoreapi.com/products/"+e).then((function(e){return t({type:h,payload:e})})).catch((function(e){return t({type:h,payload:e})}))}}(t))}}}))((function(e){var t=e.items,c=e.searchField,r=e.onSearchChange,n=e.isPending,m=e.onRequestItems,j=e.cartItems,d=e.addRemoveCartItem,u=e.totalPrice,b=Object(s.useState)(!1),h=Object(i.a)(b,2),O=h[0],p=h[1];Object(s.useEffect)((function(){m()}),[]);var f=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("div",{className:"main-wrapper",children:n?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"loader"}),Object(a.jsx)("h2",{style:{color:"white"},children:"Loading..."})]}):O?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("span",{className:"home-button noselect",onClick:function(){return p(!1)},children:["Home ",Object(a.jsx)(o.a,{icon:l.b})]}),Object(a.jsx)(w,{cartItems:j,addRemoveCartItem:d,totalPrice:u})]}):Object(a.jsxs)("div",{"class-name":"search-item-wrapper",children:[Object(a.jsx)("div",{className:"search-box",children:Object(a.jsx)(I,{searchChange:r,cartItems:j,setShowCart:p})}),Object(a.jsx)("div",{className:"item-container",children:Object(a.jsx)(v,{items:f,addRemoveCartItem:d,cartItems:j})})]})}),Object(a.jsx)("span",{className:"bg-circle circle-size1",style:{left:"7vw",top:"20vw"}}),Object(a.jsx)("span",{className:"bg-circle circle-size3",style:{right:"10vw",top:"2vw"}}),Object(a.jsx)("span",{className:"bg-circle circle-size2",style:{right:"5vw",bottom:"10vw"}}),Object(a.jsx)("span",{className:"bg-circle circle-size3",style:{left:"8vw",top:"3vw"}}),Object(a.jsx)("span",{className:"bg-circle circle-size1",style:{left:"25vw",bottom:"7vw"}})]})})),P=c(8),E=c(4),R=c(3),S={searchField:""},D={items:[],isPending:!0},k={items:[],isPending:!0},M={cartItems:[],totalPrice:0},q=c(22),F=c(23),T=Object(F.createLogger)(),_=Object(P.c)({searchItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case u:return Object.assign({},e,{searchField:t.payload});default:return e}},requestItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b:return Object.assign({},e,{isPending:!0});case h:return Object.assign({},e,{items:t.payload,isPending:!1});case h:return Object.assign({},e,{error:t.payload});default:return e}},requestItemById:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b:return Object.assign({},e,{isPending:!0});case h:return Object.assign({},e,{items:t.payload,isPending:!1});case h:return Object.assign({},e,{error:t.payload});default:return e}},cartItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O:var c=e.cartItems.indexOf(t.payload),a=t.payload;return-1!==c?((a=e.cartItems[c]).count++,Object(R.a)(Object(R.a)({},e),{},{cartItems:[].concat(Object(E.a)(e.cartItems.slice(0,c)),[a],Object(E.a)(e.cartItems.slice(c+1))),totalPrice:e.totalPrice+a.price})):(a.count=1,Object(R.a)(Object(R.a)({},e),{},{cartItems:[].concat(Object(E.a)(e.cartItems),[a]),totalPrice:e.totalPrice+a.price}));case p:var s=e.cartItems.indexOf(t.payload),r=t.payload;return r.count>1?(r.count--,Object(R.a)(Object(R.a)({},e),{},{cartItems:[].concat(Object(E.a)(e.cartItems.slice(0,s)),[r],Object(E.a)(e.cartItems.slice(s+1))),totalPrice:e.totalPrice-r.price})):Object(R.a)(Object(R.a)({},e),{},{cartItems:[].concat(Object(E.a)(e.cartItems.slice(0,s)),Object(E.a)(e.cartItems.slice(s+1))),totalPrice:e.totalPrice-r.price});default:return e}}}),A=Object(P.d)(_,Object(P.a)(q.a,T));n.a.render(Object(a.jsx)(j.a,{store:A,children:Object(a.jsx)(C,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.368b0c0f.chunk.js.map