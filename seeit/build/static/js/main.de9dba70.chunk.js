(this.webpackJsonpseeit=this.webpackJsonpseeit||[]).push([[0],{26:function(A,o,e){},27:function(A,o,e){},28:function(A,o,e){},29:function(A,o,e){},30:function(A,o,e){},31:function(A,o,e){},32:function(A,o,e){},33:function(A,o,e){},51:function(A,o,e){},52:function(A,o,e){},53:function(A,o,e){},54:function(A,o,e){},55:function(A,o,e){},56:function(A,o,e){},57:function(A,o,e){},58:function(A,o,e){},59:function(A,o,e){},60:function(A,o,e){"use strict";e.r(o);var t=e(0),C=e(2),n=e.n(C),g=e(18),s=e.n(g),a=(e(26),e(27),e(28),e(29),function(){return Object(t.jsxs)("div",{className:"logo",children:[Object(t.jsxs)("svg",{width:"37",height:"41",viewBox:"0 0 37 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(t.jsx)("path",{opacity:"0.7",fillRule:"evenodd",clipRule:"evenodd",d:"M31.26 30.3869L17.1171 38.4825C9.60092 42.785 0 37.4757 0 28.5957L4.76837e-07 12.4044C9.53674e-07 3.52437 9.60093 -1.78487 17.1172 2.51756L31.26 10.6132C38.9133 14.9941 38.9133 26.006 31.26 30.3869ZM27.2857 23.4439C29.5714 22.1355 29.5714 18.8646 27.2857 17.5562L13.1429 9.46054C10.8571 8.15215 8 9.78763 8 12.4044V28.5957C8 31.2125 10.8571 32.8479 13.1429 31.5396L27.2857 23.4439Z",fill:"#D1D1D1"}),Object(t.jsx)("path",{opacity:"0.7",d:"M22.0204 18.8361C23.3265 19.5756 23.3265 21.4244 22.0204 22.1639L13.9388 26.7397C12.6327 27.4792 11 26.5548 11 25.0758L11 15.9242C11 14.4452 12.6327 13.5208 13.9388 14.2603L22.0204 18.8361Z",fill:"url(#paint0_linear)"}),Object(t.jsx)("defs",{children:Object(t.jsxs)("linearGradient",{id:"paint0_linear",x1:"17",y1:"14",x2:"17",y2:"27",gradientUnits:"userSpaceOnUse",children:[Object(t.jsx)("stop",{stopColor:"#94BFFF"}),Object(t.jsx)("stop",{offset:"1",stopColor:"#61A0FF"})]})})]}),Object(t.jsx)("h1",{className:"logo__text",children:"seeit"})]})}),c=e(3),r=n.a.createContext(),l=function(){return Object(C.useContext)(r)};function i(A){var o=A.children,e=Object(C.useState)(null),n=Object(c.a)(e,2),g=n[0],s=n[1],a=Object(C.useState)(null),l=Object(c.a)(a,2),i=l[0],K=l[1],d=Object(C.useState)([]),u=Object(c.a)(d,2),j=u[0],b=u[1],h=Object(C.useState)(null),m=Object(c.a)(h,2),O=m[0],f=m[1],x=Object(C.useState)(null),v=Object(c.a)(x,2),p=v[0],w=v[1],E=Object(C.useState)(!1),B=Object(c.a)(E,2),_=B[0],Q=B[1],N=Object(C.useState)(!1),L=Object(c.a)(N,2),k=L[0],y=L[1],F=Object(C.useState)(!1),V=Object(c.a)(F,2),S=V[0],M=V[1],H=Object(C.useState)(null),I=Object(c.a)(H,2),D=I[0],Z=I[1],R=Object(C.useState)(!1),U=Object(c.a)(R,2),P=U[0],W=U[1],G=Object(C.useState)(null),T=Object(c.a)(G,2),J=T[0],q=T[1],X=Object(C.useState)("list"),z=Object(c.a)(X,2),Y=z[0],$=z[1];return Object(C.useEffect)((function(){var A=localStorage.getItem("results");A&&b(JSON.parse(A))}),[]),Object(C.useEffect)((function(){localStorage.setItem("results",JSON.stringify(j))}),[j]),Object(t.jsx)(r.Provider,{value:{rating:g,setRating:s,starHover:i,setStarHover:K,resultsArray:j,setResultsArray:b,resultEditId:O,setResultEditId:f,modalOpen:_,setModalOpen:Q,modelIdCheck:k,setModelIdCheck:y,currentResult:p,setCurrentResult:w,slideClassIndex:D,setSlideClassIndex:Z,slideClassControl:S,setSlideClassControl:M,cardClassIndex:J,setCardClassIndex:q,cardClassControl:P,setCardClassControl:W,viewToggle:Y,setViewToggle:$},children:o})}e(30);var K=function(A){var o=A.clickHandler,e=A.iconClass,C=A.circle,n=A.path;return Object(t.jsxs)("svg",{onClick:o,className:e,viewBox:"0 0 60 60",xmlns:"http://www.w3.org/2000/svg",children:[C,n]})},d=function(){var A=l(),o=A.resultsArray,e=A.setModalOpen,C=A.setModelIdCheck,n=A.viewToggle,g=A.setViewToggle,s=function(){g("list"===n?"cards":"list")};return Object(t.jsxs)("header",{children:[Object(t.jsx)(a,{}),Object(t.jsxs)("div",{className:"header__btn-group",children:[Object(t.jsx)("button",{"aria-label":"toggle",className:"header__btn ".concat(o.length>=1?"header__btn--active":"header__btn--disabled"),disabled:!(o.length>=1),onClick:s,children:Object(t.jsx)(K,{onClick:s,iconClass:o.length>=1?"tool-icon--shadow-primary":"tool-icon--disabled",circle:Object(t.jsx)("circle",{cx:"30",cy:"30",r:"30",fill:"white"}),path:"list"===n?Object(t.jsx)("path",{d:"M31.875 20H40.875C41.4963 20 42 20.5037 42 21.125V28.625C42 29.2463 41.4963 29.75 40.875 29.75H31.875C31.2537 29.75 30.75 29.2463 30.75 28.625V21.125C30.75 20.5037 31.2537 20 31.875 20ZM28.125 20H19.125C18.5037 20 18 20.5037 18 21.125V28.625C18 29.2463 18.5037 29.75 19.125 29.75H28.125C28.7463 29.75 29.25 29.2463 29.25 28.625V21.125C29.25 20.5037 28.7463 20 28.125 20ZM18 32.375V39.875C18 40.4963 18.5037 41 19.125 41H28.125C28.7463 41 29.25 40.4963 29.25 39.875V32.375C29.25 31.7537 28.7463 31.25 28.125 31.25H19.125C18.5037 31.25 18 31.7537 18 32.375ZM31.875 41H40.875C41.4963 41 42 40.4963 42 39.875V32.375C42 31.7537 41.4963 31.25 40.875 31.25H31.875C31.2537 31.25 30.75 31.7537 30.75 32.375V39.875C30.75 40.4963 31.2537 41 31.875 41Z"}):Object(t.jsx)("path",{d:"M19.3438 20C18.8802 20 18.4271 20.1375 18.0416 20.395C17.6562 20.6525 17.3558 21.0186 17.1784 21.4468C17.001 21.8751 16.9546 22.3463 17.045 22.801C17.1355 23.2556 17.3587 23.6733 17.6865 24.001C18.0142 24.3288 18.4319 24.552 18.8865 24.6425C19.3412 24.7329 19.8124 24.6865 20.2407 24.5091C20.6689 24.3317 21.035 24.0313 21.2925 23.6459C21.55 23.2604 21.6875 22.8073 21.6875 22.3438C21.6875 21.7221 21.4406 21.126 21.001 20.6865C20.5615 20.2469 19.9654 20 19.3438 20ZM19.3438 27.8125C18.8802 27.8125 18.4271 27.95 18.0416 28.2075C17.6562 28.465 17.3558 28.8311 17.1784 29.2593C17.001 29.6876 16.9546 30.1589 17.045 30.6135C17.1355 31.0681 17.3587 31.4858 17.6865 31.8135C18.0142 32.1413 18.4319 32.3645 18.8865 32.455C19.3412 32.5454 19.8124 32.499 20.2407 32.3216C20.6689 32.1442 21.035 31.8438 21.2925 31.4584C21.55 31.0729 21.6875 30.6198 21.6875 30.1562C21.6875 29.5346 21.4406 28.9385 21.001 28.499C20.5615 28.0594 19.9654 27.8125 19.3438 27.8125ZM19.3438 35.625C18.8802 35.625 18.4271 35.7625 18.0416 36.02C17.6562 36.2775 17.3558 36.6436 17.1784 37.0718C17.001 37.5001 16.9546 37.9713 17.045 38.426C17.1355 38.8806 17.3587 39.2983 17.6865 39.626C18.0142 39.9538 18.4319 40.177 18.8865 40.2675C19.3412 40.3579 19.8124 40.3115 20.2407 40.1341C20.6689 39.9567 21.035 39.6563 21.2925 39.2709C21.55 38.8854 21.6875 38.4323 21.6875 37.9688C21.6875 37.3471 21.4406 36.751 21.001 36.3115C20.5615 35.8719 19.9654 35.625 19.3438 35.625ZM41.2188 36.4062H25.5938C25.3866 36.4062 25.1878 36.4886 25.0413 36.6351C24.8948 36.7816 24.8125 36.9803 24.8125 37.1875V38.75C24.8125 38.9572 24.8948 39.1559 25.0413 39.3024C25.1878 39.4489 25.3866 39.5312 25.5938 39.5312H41.2188C41.426 39.5312 41.6247 39.4489 41.7712 39.3024C41.9177 39.1559 42 38.9572 42 38.75V37.1875C42 36.9803 41.9177 36.7816 41.7712 36.6351C41.6247 36.4886 41.426 36.4062 41.2188 36.4062ZM41.2188 20.7812H25.5938C25.3866 20.7812 25.1878 20.8636 25.0413 21.0101C24.8948 21.1566 24.8125 21.3553 24.8125 21.5625V23.125C24.8125 23.3322 24.8948 23.5309 25.0413 23.6774C25.1878 23.8239 25.3866 23.9062 25.5938 23.9062H41.2188C41.426 23.9062 41.6247 23.8239 41.7712 23.6774C41.9177 23.5309 42 23.3322 42 23.125V21.5625C42 21.3553 41.9177 21.1566 41.7712 21.0101C41.6247 20.8636 41.426 20.7812 41.2188 20.7812ZM41.2188 28.5938H25.5938C25.3866 28.5938 25.1878 28.6761 25.0413 28.8226C24.8948 28.9691 24.8125 29.1678 24.8125 29.375V30.9375C24.8125 31.1447 24.8948 31.3434 25.0413 31.4899C25.1878 31.6364 25.3866 31.7188 25.5938 31.7188H41.2188C41.426 31.7188 41.6247 31.6364 41.7712 31.4899C41.9177 31.3434 42 31.1447 42 30.9375V29.375C42 29.1678 41.9177 28.9691 41.7712 28.8226C41.6247 28.6761 41.426 28.5938 41.2188 28.5938Z"})})}),Object(t.jsx)("button",{"aria-label":"delete",className:"header__btn ".concat(o.length>=1?"header__btn--active":"header__btn--disabled"),disabled:!(o.length>=1),onClick:function(){e(!0),C("headerDeleteAll")},children:Object(t.jsx)(K,{iconClass:o.length>=1?"tool-icon--shadow-warning":"tool-icon--disabled",circle:Object(t.jsx)("circle",{cx:"30",cy:"30",r:"30",fill:"white"}),path:Object(t.jsx)("path",{d:"M40.2143 20.5625H35.3446C34.7171 20.5625 34.1429 20.2094 33.8598 19.6494V19.6494C33.762 19.4542 33.6114 19.29 33.4249 19.1753C33.2384 19.0606 33.0233 18.9999 32.804 19H27.1911C26.9722 18.9992 26.7576 19.0596 26.5717 19.1745C26.3859 19.2894 26.2363 19.454 26.1402 19.6494V19.6494C25.8571 20.2094 25.2829 20.5625 24.6554 20.5625H19.7857C19.5773 20.5625 19.3775 20.6448 19.2301 20.7913C19.0828 20.9378 19 21.1366 19 21.3438V22.9063C19 23.1135 19.0828 23.3122 19.2301 23.4587C19.3775 23.6052 19.5773 23.6875 19.7857 23.6875H40.2143C40.4227 23.6875 40.6225 23.6052 40.7699 23.4587C40.9172 23.3122 41 23.1135 41 22.9063V21.3438C41 21.1366 40.9172 20.9378 40.7699 20.7913C40.6225 20.6448 40.4227 20.5625 40.2143 20.5625ZM21.6125 41.8027C21.65 42.3978 21.9141 42.9562 22.3511 43.3644C22.7881 43.7726 23.3651 43.9999 23.9647 44H36.0353C36.6349 43.9999 37.2119 43.7726 37.6489 43.3644C38.0859 42.9562 38.35 42.3978 38.3875 41.8027L39.4286 25.25H20.5714L21.6125 41.8027Z"})})})]})]})},u=e(5),j=(e(31),e(32),e(20)),b=e(1),h=function(A){var o=A.disableClick,e=A.stateValues,n=l(),g=n.rating,s=n.setRating,a=n.starHover,c=n.setStarHover,r=Object(C.useRef)();return Object(t.jsx)("div",{className:"ratings",ref:function(A){return r=A},children:Object(u.a)(Array(5)).map((function(A,C){var n=C+1;return o?Object(t.jsx)("div",{children:Object(t.jsx)("svg",{width:"26",height:"25",viewBox:"0 0 26 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"rating__star ".concat(n<=e?"rating__star--active":"rating__star--inactive"),children:Object(t.jsx)("path",{d:"M11.1745 2.07813C11.8805 0.500952 14.1195 0.500953 14.8255 2.07813L16.8673 6.63967C17.1624 7.29881 17.7898 7.7477 18.5089 7.81408L23.5042 8.2752C25.2648 8.43773 25.964 10.6373 24.6204 11.7866L20.9508 14.9255C20.3849 15.4095 20.1348 16.1678 20.3016 16.8934L21.3809 21.5874C21.7716 23.2866 19.9523 24.6373 18.4388 23.7716L13.9929 21.2289C13.3777 20.877 12.6223 20.877 12.0071 21.2289L7.56121 23.7716C6.04766 24.6373 4.22844 23.2866 4.61913 21.5874L5.69835 16.8934C5.8652 16.1678 5.61509 15.4095 5.04923 14.9255L1.37961 11.7866C0.0359914 10.6373 0.735185 8.43773 2.4958 8.2752L7.49107 7.81408C8.21017 7.7477 8.83764 7.29881 9.13269 6.63967L11.1745 2.07813Z"})})},C):Object(t.jsxs)("label",{children:[Object(t.jsx)("input",{type:"radio",name:"rating",className:"rating__input-radio",value:n,onClick:function(){s(n),5===n&&j.a.to(r.children,.2,{y:-5,autoAlpha:.8,scale:1.3,rotation:360,stagger:{amount:.2,yoyo:!0,repeat:1},ease:b.b.easeOut})}}),Object(t.jsx)("svg",{width:"26",height:"25",viewBox:"0 0 26 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"rating__star \n                                        ".concat(n<=(a||g)?"rating__star--active":"rating__star--inactive","\n                                        "),onMouseEnter:function(){return c(n)},onMouseLeave:function(){return c(null)},children:Object(t.jsx)("path",{d:"M11.1745 2.07813C11.8805 0.500952 14.1195 0.500953 14.8255 2.07813L16.8673 6.63967C17.1624 7.29881 17.7898 7.7477 18.5089 7.81408L23.5042 8.2752C25.2648 8.43773 25.964 10.6373 24.6204 11.7866L20.9508 14.9255C20.3849 15.4095 20.1348 16.1678 20.3016 16.8934L21.3809 21.5874C21.7716 23.2866 19.9523 24.6373 18.4388 23.7716L13.9929 21.2289C13.3777 20.877 12.6223 20.877 12.0071 21.2289L7.56121 23.7716C6.04766 24.6373 4.22844 23.2866 4.61913 21.5874L5.69835 16.8934C5.8652 16.1678 5.61509 15.4095 5.04923 14.9255L1.37961 11.7866C0.0359914 10.6373 0.735185 8.43773 2.4958 8.2752L7.49107 7.81408C8.21017 7.7477 8.83764 7.29881 9.13269 6.63967L11.1745 2.07813Z"})})]},C)}))})},m=(e(33),function(A){var o=A.nameErrorState,e=A.ratingErrorState,C=null;return C=o||e?Object(t.jsx)("p",{className:"validate-errors",children:"Please fill all fields."}):null,Object(t.jsx)(t.Fragment,{children:C})}),O=e(19),f=e.n(O),x=function(){var A=l(),o=A.rating,e=A.setRating,n=A.setResultsArray,g=A.resultsArray,s=A.resultEditId,a=A.setResultEditId,r=A.setModalOpen,i=A.modalOpen,K=A.modelIdCheck,d=A.setModelIdCheck,j=A.currentResult,b=Object(C.useState)(!1),O=Object(c.a)(b,2),x=O[0],v=O[1],p=Object(C.useState)(""),w=Object(c.a)(p,2),E=w[0],B=w[1],_=Object(C.useState)(!1),Q=Object(c.a)(_,2),N=Q[0],L=Q[1];Object(C.useEffect)((function(){B(""),e(null),"editForm"===K&&B(j.movieName),"editForm"===K&&e(j.rating)}),[i,j,e,K]);return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("form",{onSubmit:function(A){return function(A,t){if(A.preventDefault(),!E)return L(!0);if(!o)return v(!0);L(!1),v(!1);var C="https://www.omdbapi.com/?t=".concat(E,"&apikey=").concat("3d85689c");f.a.get(C).then((function(A){var e=JSON.stringify(A.data.imdbID),C=JSON.stringify(A.data.Genre),s=JSON.stringify(A.data.Poster),c=C?C.replace(/['"]+/g,"").split(",").slice(0,1):"Genre Not Found";void 0===e&&(e="tt1333032");var l=!1;if(void 0!==s&&'"N/A"'!==s||(s="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAF0APoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+mCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDvNC+H2seJPDl1rujj7ZPb6uNLGlxrGsrqtrDczXZuJriGJEj+0QxrEFd3LO2UCDeAd3ZfBGQ6Va6hr3iWHw9cTAiezu7C3lS1kLyCOI3g1mGGV5I0WUBVUjcUI3I1ADv+FOaD/0UnSP/AACs/wD5oKALVr8D9NvnaOy8fWV46LvdLXS4Lh1TIXcyxa85VckDcQBkgZyaAOLT4UeJorPX77VIG0u20XTL3UYZZRbTrqJsgZWt0EF40lu0luksqStHKgZVjcL5gcAHmFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAe6+D9LvdX+Fuo2ljrNloUw8aNKbzUL+XTbZ400nTQ1u1zCkjbnZ1dIyjK7RjOCAQAb3xA0+8svhP4dsri9i1i4ttWtfOv7K4lvreYNFq5V47p1DyxRiSOBXdVGVCAD5RQB84eTL/AM8pP++G/wAKAPcPgPFKvijVXaORUGgyqXKMFDNqGnlVLEYDMEcqM5IViOFOADotL8P6rpOn/Ea5vvFWla5DP4U8QolnYazc6jPA7QXEgmureaNFgZVVoshpCHkZA2MlgD5poAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD27wvZaJf/AAq1CHX9YfQ7FfGxkW9Szmv2NwukaescP2a3VpW8xXkYsowmzLHGaAPSbzxJD4C+G3h+98NzQa9am6Sxtru9guLVJ4rhtSuZZjbBop43SWFoRG5UryWyRyAee/8AC+/Ef/QG0T8r/wD+S6APQ/hv8S9V8aaxe6bf2Gn2sdtpsl8kln9pDl0urWDYwmmlUqVuC3ABBUckE0Acjoek+E7Cy+I02g+KJNbvX8I+Io7mzfS7qxFtEYpmaRZ50WO52yokWYTjDb/ustAHzrQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHsXhfV/CEHw61DTfEwuLxj4sW8j0zT7qGDUSsmm2kUV4iSzRF7ZDBcxTMokCO0YdVLowAPR5k+H3ivwJouhQ+JrHw3ZW063sFrqGq6Y2p27RNfRNFdwz3qsDK1zJMDuHytGVAQhaAOP/AOFZfD//AKKdpH/gbon/AMsqAO08EaJ4F8E6ldalB8QNEv3ubF7ExS6po8CIj3FvcGTKX0hZs26qBwMMxOTjABx+m678OYLHx4NGg1DSr698Na1axy6tfQPFfNcpJHFaWESXMzSTTTvE6gCRhErMXCK7EA8CoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAA/9k=",l=!0),t){var i=g.findIndex((function(A){return A.id===t})),K=Object(u.a)(g);K[i]={movieName:E,omdbGenre:c,omdbPoster:s,posterError:l,rating:o,imdbMovieID:e,id:Math.random()*e.length},n(K),r(!1),d(null),a(null)}else n((function(A){return[{movieName:E,omdbGenre:c,omdbPoster:s,posterError:l,rating:o,imdbMovieID:e,id:Math.random()*e.length}].concat(Object(u.a)(A))}))})).catch((function(A){console.log("OMDB Error: ".concat(A))})),B(""),e("")}(A,s)},children:[Object(t.jsxs)("label",{className:"form__label form__input-group",children:["Name",Object(t.jsx)("input",{type:"text",placeholder:"Movie name",className:"form__input",value:E,onChange:function(A){return B(A.target.value)}})]}),Object(t.jsxs)("div",{className:"form__input-group--rating",children:[Object(t.jsx)("p",{className:"form__label",children:"Rating"}),Object(t.jsx)(h,{disableClick:!1})]}),Object(t.jsx)(m,{nameErrorState:N,ratingErrorState:x}),Object(t.jsx)("input",{className:"form__submit-btn",type:"submit",value:s?"Update Movie":"Add Movie"})]})})},v=(e(51),e.p+"static/media/background-desktop.75e7cc14.svg"),p=function(A){var o=A.children;return 0===l().resultsArray.length?Object(t.jsxs)("section",{className:"filter--full",children:[Object(t.jsx)("div",{className:"filter__content",children:o}),Object(t.jsx)("img",{className:"filter__img",src:v,alt:"Woman watching movies on a laptop"})]}):Object(t.jsx)("section",{className:"filter--small",children:Object(t.jsx)("div",{className:"filter__content",children:o})})},w=(e(52),e(8)),E=(e(53),function(A){var o=A.result,e=A.index,C=A.iconClassWarning,n=A.iconClassPrimary,g=l(),s=g.resultsArray,a=g.setResultsArray,c=g.setResultEditId,r=g.setModalOpen,i=g.setModelIdCheck,d=g.setCurrentResult,j=g.slideClassControl,b=g.setSlideClassControl;return Object(t.jsxs)("div",{className:"result-tools",children:[Object(t.jsx)(K,{clickHandler:function(){return function(A){var o=Object(u.a)(s);o.splice(A,1),a(o),b(!1)}(e)},iconClass:C,circle:Object(t.jsx)("circle",{cx:"30",cy:"30",r:"30",fill:"white"}),path:Object(t.jsx)("path",{d:"M40.2143 20.5625H35.3446C34.7171 20.5625 34.1429 20.2094 33.8598 19.6494V19.6494C33.762 19.4542 33.6114 19.29 33.4249 19.1753C33.2384 19.0606 33.0233 18.9999 32.804 19H27.1911C26.9722 18.9992 26.7576 19.0596 26.5717 19.1745C26.3859 19.2894 26.2363 19.454 26.1402 19.6494V19.6494C25.8571 20.2094 25.2829 20.5625 24.6554 20.5625H19.7857C19.5773 20.5625 19.3775 20.6448 19.2301 20.7913C19.0828 20.9378 19 21.1366 19 21.3438V22.9063C19 23.1135 19.0828 23.3122 19.2301 23.4587C19.3775 23.6052 19.5773 23.6875 19.7857 23.6875H40.2143C40.4227 23.6875 40.6225 23.6052 40.7699 23.4587C40.9172 23.3122 41 23.1135 41 22.9063V21.3438C41 21.1366 40.9172 20.9378 40.7699 20.7913C40.6225 20.6448 40.4227 20.5625 40.2143 20.5625ZM21.6125 41.8027C21.65 42.3978 21.9141 42.9562 22.3511 43.3644C22.7881 43.7726 23.3651 43.9999 23.9647 44H36.0353C36.6349 43.9999 37.2119 43.7726 37.6489 43.3644C38.0859 42.9562 38.35 42.3978 38.3875 41.8027L39.4286 25.25H20.5714L21.6125 41.8027Z"})}),Object(t.jsx)(K,{clickHandler:function(){c(o.id),d({movieName:o.movieName,rating:o.rating}),r(!0),i("editForm"),b(!j)},iconClass:n,circle:Object(t.jsx)("circle",{cx:"30",cy:"30",r:"30",fill:"white"}),path:Object(t.jsx)("path",{d:"M31.4929 23.0061L36.9936 28.5071L25.049 40.4522L20.1447 40.9936C19.4881 41.0662 18.9334 40.511 19.0065 39.8545L19.5522 34.9465L31.4929 23.0061V23.0061ZM40.3958 22.1872L37.813 19.6043C37.0073 18.7986 35.7007 18.7986 34.8951 19.6043L32.4652 22.0342L37.9659 27.5351L40.3958 25.1052C41.2014 24.2991 41.2014 22.9928 40.3958 22.1872V22.1872Z"})}),Object(t.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://www.imdb.com/title/".concat(o.imdbMovieID.replace(/['"]+/g,"")),children:Object(t.jsx)(K,{iconClass:n,circle:Object(t.jsx)("circle",{cx:"30",cy:"30",r:"30",fill:"white"}),path:Object(t.jsx)("path",{d:"M38.25 33H36.75C36.5511 33 36.3603 33.079 36.2197 33.2197C36.079 33.3603 36 33.5511 36 33.75V39H21V24H27.75C27.9489 24 28.1397 23.921 28.2803 23.7803C28.421 23.6397 28.5 23.4489 28.5 23.25V21.75C28.5 21.5511 28.421 21.3603 28.2803 21.2197C28.1397 21.079 27.9489 21 27.75 21H20.25C19.6533 21 19.081 21.2371 18.659 21.659C18.2371 22.081 18 22.6533 18 23.25V39.75C18 40.3467 18.2371 40.919 18.659 41.341C19.081 41.7629 19.6533 42 20.25 42H36.75C37.3467 42 37.919 41.7629 38.341 41.341C38.7629 40.919 39 40.3467 39 39.75V33.75C39 33.5511 38.921 33.3603 38.7803 33.2197C38.6397 33.079 38.4489 33 38.25 33ZM40.875 18H34.875C33.8733 18 33.3727 19.2145 34.0781 19.9219L35.753 21.5967L24.3281 33.0173C24.2232 33.1219 24.14 33.2461 24.0832 33.3828C24.0265 33.5195 23.9972 33.6662 23.9972 33.8142C23.9972 33.9623 24.0265 34.1089 24.0832 34.2456C24.14 34.3824 24.2232 34.5066 24.3281 34.6111L25.3908 35.6719C25.4953 35.7768 25.6195 35.86 25.7562 35.9168C25.893 35.9735 26.0396 36.0028 26.1877 36.0028C26.3357 36.0028 26.4823 35.9735 26.6191 35.9168C26.7558 35.86 26.88 35.7768 26.9845 35.6719L38.4037 24.2494L40.0781 25.9219C40.7812 26.625 42 26.1328 42 25.125V19.125C42 18.8266 41.8815 18.5405 41.6705 18.3295C41.4595 18.1185 41.1734 18 40.875 18V18Z"})})})]})}),B=(e(54),function(A){var o=A.movieName.trim().split(/[^A-Z0-9]/gi).slice(0,3),e=[];o.forEach((function(A){e.push(A.charAt(0))}));var C="";return C=e.length>2?"sm":"lg",Object(t.jsx)("span",{className:"avatar ".concat("sm"===C?"avatar--sm":"avatar--lg"),children:e})}),_=(e(55),function(A){var o=A.movieName,e=A.genre;return Object(t.jsxs)("div",{className:"result-row__txt",children:[Object(t.jsx)("h2",{className:"result-row__movie-name",children:o}),Object(t.jsx)("h3",{className:"result-row__category",children:e})]})}),Q=function(){var A=l(),o=A.resultsArray,e=A.slideClassIndex,C=A.setSlideClassIndex,n=A.slideClassControl,g=A.setSlideClassControl;return"list"===A.viewToggle?Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("div",{className:"results__overflow",children:o.map((function(A,o){return Object(t.jsxs)("div",{className:"result-row__parent",style:{"--delay":o},children:[Object(t.jsxs)("div",{className:"result-row__movie-info ".concat(e===o&&n?"result-row--slide":null),onClick:function(){return function(A){C(A),g(!n)}(o)},children:[Object(t.jsx)(B,{movieName:A.movieName}),Object(t.jsx)(_,{movieName:A.movieName,genre:A.omdbGenre}),Object(t.jsx)("div",{className:"result-row__rating",children:Object(t.jsx)(h,{disableClick:!0,stateValues:A.rating})}),Object(t.jsx)("div",{className:"result-row__plus",children:Object(t.jsx)(w.a,{})})]}),Object(t.jsx)("div",{className:"result-row__tool-wrapper",children:Object(t.jsx)("div",{className:"result-row__tool-shift",children:Object(t.jsx)(E,{iconClassPrimary:"tool-icon--shadow-primary",iconClassWarning:"tool-icon--shadow-warning",result:A,index:o})})})]},A.id)}))})}):null},N=(e(56),function(){var A=l(),o=A.resultsArray,e=A.cardClassIndex,C=A.setCardClassIndex,n=A.cardClassControl,g=A.setCardClassControl;return"cards"===A.viewToggle?Object(t.jsx)("section",{className:"result-cards",children:o.map((function(A,o){return Object(t.jsxs)("div",{className:"result-cards__frame",style:{"--delay":o},onClick:function(){return function(A){C(A),g(!n)}(o)},children:[Object(t.jsx)("img",{className:"result-cards__poster",src:A.omdbPoster.replace(/['"]+/g,""),alt:A.movieName}),Object(t.jsxs)("div",{className:"result-cards__info ".concat(e===o&&n?"result-cards__info--hide":"result-cards__info--show"),children:[Object(t.jsx)(h,{disableClick:!0,stateValues:A.rating}),Object(t.jsx)(_,{movieName:A.posterError?A.movieName:null,genre:A.omdbGenre})]}),Object(t.jsx)("div",{className:"result-cards__info ".concat(e===o&&n?"result-cards__tools--show":"result-cards__tools--hide"),children:Object(t.jsx)(E,{iconClassPrimary:"tool-icon--stroke-primary",iconClassWarning:"tool-icon--stroke-warning ",result:A,index:o})})]},A.id)}))}):null}),L=(e(57),function(A){var o=A.children,e=A.modalId,C=l(),n=C.modalOpen,g=C.setModalOpen,s=C.modelIdCheck,a=C.setModelIdCheck,c=C.setResultEditId,r=function(A){A.stopPropagation(),g(!1),c(null),a(null)};return Object(t.jsx)("div",{className:n&&s===e?"modal--show":"modal--hide",onClick:r,children:Object(t.jsxs)("div",{className:"modal__content",onClick:function(A){return A.stopPropagation()},children:[Object(t.jsx)("span",{className:"modal__close",onClick:r,children:Object(t.jsx)(w.a,{})}),o]})})}),k=(e(58),function(){var A=l(),o=A.setResultsArray,e=A.setModalOpen;return Object(t.jsxs)("div",{className:"delete",children:[Object(t.jsx)("h2",{className:"delete__text",children:"Are you sure you want to delete all movies?"}),Object(t.jsxs)("div",{className:"delete__btn-group",children:[Object(t.jsx)("button",{className:"delete__btn delete__btn--cancel",onClick:function(){e(!1)},children:"Cancel"}),Object(t.jsx)("button",{className:"delete__btn delete__btn--delete",onClick:function(){o([]),e(!1)},children:"Delete"})]})]})}),y=function(A){var o=A.children;return Object(t.jsx)(t.Fragment,{children:o})},F=(e(59),e.p+"static/media/background-mobile.a9fdc799.svg"),V=function(){return 0===l().resultsArray.length?Object(t.jsx)("section",{className:"result-art",children:Object(t.jsx)("img",{className:"result-art__img",src:F,alt:"Woman watching movies on a laptop"})}):null};var S=function(){return Object(t.jsxs)(i,{children:[Object(t.jsx)(d,{}),Object(t.jsx)(p,{children:Object(t.jsx)(x,{})}),Object(t.jsxs)(y,{children:[Object(t.jsx)(Q,{}),Object(t.jsx)(N,{}),Object(t.jsx)(V,{})]}),Object(t.jsx)(L,{modalId:"headerDeleteAll",children:Object(t.jsx)(k,{})}),Object(t.jsx)(L,{modalId:"editForm",children:Object(t.jsx)(x,{})})]})},M=function(A){A&&A instanceof Function&&e.e(3).then(e.bind(null,61)).then((function(o){var e=o.getCLS,t=o.getFID,C=o.getFCP,n=o.getLCP,g=o.getTTFB;e(A),t(A),C(A),n(A),g(A)}))},H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(A,o){navigator.serviceWorker.register(A).then((function(A){A.onupdatefound=function(){var e=A.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),o&&o.onUpdate&&o.onUpdate(A)):(console.log("Content is cached for offline use."),o&&o.onSuccess&&o.onSuccess(A)))})}})).catch((function(A){console.error("Error during service worker registration:",A)}))}s.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(S,{})}),document.getElementById("root")),function(A){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var o="".concat("","/service-worker.js");H?(!function(A,o){fetch(A,{headers:{"Service-Worker":"script"}}).then((function(e){var t=e.headers.get("content-type");404===e.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(A){A.unregister().then((function(){window.location.reload()}))})):I(A,o)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(o,A),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):I(o,A)}))}}(),M()}},[[60,1,2]]]);
//# sourceMappingURL=main.de9dba70.chunk.js.map