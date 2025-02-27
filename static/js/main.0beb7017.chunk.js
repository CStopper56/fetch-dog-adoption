(this["webpackJsonpfetch-dog-adoption"]=this["webpackJsonpfetch-dog-adoption"]||[]).push([[0],{43:function(e,a,t){},48:function(e,a,t){e.exports=t(65)},54:function(e,a,t){},62:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(44),r=t.n(c),s=t(67),o=t(68),i=t(72),m=t(74),d=t(69),u=t(71);t(54);var g=e=>{let{onLogin:a}=e;const[t,c]=Object(l.useState)(""),[r,g]=Object(l.useState)(""),[E,h]=Object(l.useState)(""),[p,b]=Object(l.useState)(!1),[f,v]=Object(l.useState)(!1);return n.a.createElement(s.a,{className:"main-container"},n.a.createElement(o.a,{className:"adopt-btn",onClick:()=>v(!0)},"Adopt Me Now!"),n.a.createElement(i.a,{show:f,onHide:()=>v(!1),centered:!0,backdrop:"blur"},n.a.createElement(i.a.Body,null,n.a.createElement("h1",{className:"modal-header"},"Fetch Dog Adoption"),n.a.createElement("h2",{className:"modal-title"},"Login"),n.a.createElement("p",{className:"modal-subtitle"},"Please enter your name and email to adopt a dog."),n.a.createElement("hr",null),n.a.createElement(m.a,null,n.a.createElement(m.a.Group,{className:"mb-3"},n.a.createElement(m.a.Control,{type:"text",placeholder:"Name",value:t,onChange:e=>c(e.target.value)})),n.a.createElement(m.a.Group,{className:"mb-3"},n.a.createElement(m.a.Control,{type:"email",placeholder:"Email",value:r,onChange:e=>g(e.target.value),isInvalid:!!E}),E&&n.a.createElement(m.a.Control.Feedback,{type:"invalid"},E)),n.a.createElement(o.a,{className:"login-btn",onClick:async()=>{if(t&&r)if((e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))(r)){h(""),b(!0);try{await u.a.post("".concat("https://frontend-take-home-service.fetch.com","/auth/login"),{name:t,email:r},{withCredentials:!0}),a(t,r)}catch(E){console.error("Login failed:",E),h("Login failed. Please try again.")}finally{b(!1)}}else h("Please enter a valid email address.");else h("Both fields are required.")},disabled:p},p?n.a.createElement(d.a,{size:"sm"}):"Take Me Home")))))},E=t(2),h=t(37);t(62);var p=e=>{let{dog:a,toggleFavorite:t,favorites:l=[]}=e;const c=l.some(e=>e.id===a.id);return n.a.createElement("div",{className:"dog-card"},n.a.createElement("img",{src:a.img||"default-dog-image.jpg",alt:a.name||"Dog",className:"dog-image",loading:"lazy"}),n.a.createElement("div",{className:"dog-info"},n.a.createElement("div",{className:"dog-meta"},n.a.createElement("span",null," ",n.a.createElement("h3",{className:"dog-name"},a.name||"Unknown")),n.a.createElement("span",null,n.a.createElement("button",{className:"favorite-button",onClick:()=>t(a),"aria-label":c?"Remove from favorites":"Add to favorites"},c?n.a.createElement(h.a,{className:"heart-icon filled"}):n.a.createElement(h.b,{className:"heart-icon"})))),n.a.createElement("div",{className:"dog-meta"},n.a.createElement("span",{className:"dog-breed"},a.breed||"Unknown Breed"),n.a.createElement("span",{className:"dog-location"},n.a.createElement("span",null,a.city||"N/A",", ",a.state||"N/A"))),n.a.createElement("div",{className:"dog-meta"},n.a.createElement("span",null,"\ud83d\udc36 ",a.age?"".concat(a.age," years"):"N/A"),n.a.createElement("span",null,"\ud83d\udccd ",a.zip_code||"N/A"))))},b=t(70),f=t(45),v=t(73),N=t(46);t(63),t(64);const y="https://frontend-take-home-service.fetch.com";var C=e=>{let{favorites:a,setFavorites:t}=e;const[c,r]=Object(l.useState)([]),[g,h]=Object(l.useState)([]),[C,k]=Object(l.useState)(""),[S,j]=Object(l.useState)(""),[O,w]=Object(l.useState)(""),[F,L]=Object(l.useState)(""),[A,x]=Object(l.useState)([0,20]),[M,P]=Object(l.useState)("breed:asc"),[z,B]=Object(l.useState)(!1),[G,I]=Object(l.useState)(null),[R,T]=Object(l.useState)(null),[D,H]=Object(l.useState)(0),[U,Z]=Object(l.useState)(!1),[J,_]=Object(l.useState)(!1),[Y,$]=Object(l.useState)(!1);Object(l.useEffect)(()=>{q()},[]),Object(l.useEffect)(()=>{U||K()},[C,S,O,F,A,M,D,U]);const q=async()=>{try{const e=await u.a.get("".concat(y,"/dogs/breeds"),{withCredentials:!0});h(e.data.sort())}catch(G){console.error("Error fetching breeds:",G),I("Failed to fetch breeds. Please try again.")}},K=async()=>{B(!0),I(null);try{let e=[];if(F)e=[F];else if(S||O){const a=await u.a.post("".concat(y,"/locations/search"),{city:S||void 0,states:O?[O]:void 0},{withCredentials:!0});a.data.results.length>0&&(e=a.data.results.map(e=>e.zip_code))}const a={breeds:C?[C]:[],zipCodes:e,ageMin:A[0],ageMax:A[1],sort:M,from:8*D,size:8},t=await u.a.get("".concat(y,"/dogs/search"),{params:a,withCredentials:!0});if(t.data.resultIds.length>0){const e=t.data.resultIds,a=await u.a.post("".concat(y,"/dogs"),e,{withCredentials:!0}),l=await Promise.all(a.data.map(async e=>{const a=await u.a.post("".concat(y,"/locations"),[e.zip_code],{withCredentials:!0});return a.data.length>0?Object(E.a)(Object(E.a)({},e),{},{city:a.data[0].city,state:a.data[0].state}):e}));r(l)}else r([])}catch(G){console.error("Error fetching dogs:",G),I("Failed to fetch dogs. Please check your filters and try again.")}finally{B(!1)}},Q=e=>{t(a=>a.some(a=>a.id===e.id)?a.filter(a=>a.id!==e.id):[...a,e])},V=a.slice(8*D,8*(D+1)),W=Math.ceil(a.length/8);return n.a.createElement(s.a,{fluid:!0,className:"search-container"},n.a.createElement(b.a,null,n.a.createElement(o.a,{className:"mobile-filter-btn",onClick:()=>$(!Y)},n.a.createElement("span",{role:"img","aria-label":"filter"},"\u2630")),n.a.createElement(f.a,{md:2,className:"filter-section ".concat(Y?"open":"")},n.a.createElement("h2",{className:"mb-4"},"Find Your Perfect Dog ",n.a.createElement("span",{role:"img","aria-label":"dog"},"\ud83d\udc36")),n.a.createElement(m.a,null,n.a.createElement(m.a.Group,{className:"mb-3"},n.a.createElement(m.a.Label,{htmlFor:"breed-select"},"Select a Breed"),n.a.createElement(m.a.Select,{id:"breed-select",value:C,onChange:e=>{k(e.target.value)},className:"filter-input"},n.a.createElement("option",{value:""},"Select a breed"),g.map(e=>n.a.createElement("option",{key:e,value:e},e)))),n.a.createElement(m.a.Group,{className:"mb-3"},n.a.createElement(m.a.Label,{htmlFor:"city-search"},"City"),n.a.createElement(m.a.Control,{id:"city-search",type:"text",placeholder:"Enter City",value:S,onChange:e=>{j(e.target.value)},className:"filter-input"})),n.a.createElement(m.a.Group,{className:"mb-3"},n.a.createElement(m.a.Label,{htmlFor:"state-search"},"State"),n.a.createElement(m.a.Control,{id:"state-search",type:"text",placeholder:"Enter State (e.g., IL)",value:O,onChange:e=>{w(e.target.value.toUpperCase().substring(0,2))},maxLength:2,className:"filter-input"})),n.a.createElement(m.a.Group,{className:"mb-3"},n.a.createElement(m.a.Label,{htmlFor:"zip-code"},"Zip Code"),n.a.createElement(m.a.Control,{id:"zip-code",type:"text",placeholder:"Enter Zip Code",value:F,onChange:e=>{const a=e.target.value;/^\d{0,5}$/.test(a)&&L(a)},maxLength:5,className:"filter-input"})),n.a.createElement(m.a.Group,{className:"mb-3"},n.a.createElement(m.a.Label,null,"Age Range: ",A[0]," - ",A[1]," years"),n.a.createElement(N.a,{range:!0,min:0,max:20,value:A,onChange:x})),n.a.createElement("div",{className:"mb-3"},n.a.createElement(o.a,{variant:"outline-primary",className:"filter-btn",onClick:()=>P("breed:asc")},"Sort A-Z"),n.a.createElement(o.a,{variant:"outline-primary",className:"filter-btn",onClick:()=>P("breed:desc")},"Sort Z-A")),n.a.createElement(o.a,{variant:"danger",className:"filter-btn",onClick:()=>{k(""),j(""),w(""),L(""),x([0,20]),P("breed:asc"),H(0)}},"Reset Filters")),n.a.createElement(o.a,{variant:"primary",className:"filter-btn",onClick:()=>Z(!U)},U?"Show All Dogs":"Show Favorites"),n.a.createElement(o.a,{variant:"success",className:"filter-btn",onClick:async()=>{if(0!==a.length){try{const e=await u.a.post("".concat(y,"/dogs/match"),a.map(e=>e.id),{withCredentials:!0});if(e.data.match){const t=a.find(a=>a.id===e.data.match);T(t)}else T("No perfect match found, but keep looking!")}catch(G){console.error("Error finding match:",G),T("An error occurred while finding a match.")}_(!0)}else alert("Please add at least one favorite dog before finding a match.")}},"Find Best Match")),n.a.createElement(f.a,{md:10,className:"dog-section"},G&&n.a.createElement(v.a,{variant:"danger"},G),z?n.a.createElement("div",{className:"text-center"},n.a.createElement(d.a,{animation:"border",role:"status"},n.a.createElement("span",{className:"visually-hidden"},"Loading..."))):n.a.createElement(b.a,null,U?V.length>0?V.map(e=>n.a.createElement(f.a,{key:e.id,md:3,className:"mb-4"},n.a.createElement(p,{dog:e,toggleFavorite:Q,favorites:a}))):n.a.createElement("p",null,"Please select some favorite dogs first! ",n.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f")):c.length>0?c.map(e=>n.a.createElement(f.a,{key:e.id,md:3,className:"mb-4"},n.a.createElement(p,{dog:e,toggleFavorite:Q,favorites:a}))):n.a.createElement("p",null,"No dogs found. Try a different search.")))),n.a.createElement("div",{className:"sticky-buttons"},n.a.createElement(o.a,{className:"pagination-btn",onClick:()=>H(e=>Math.max(e-1,0)),disabled:0===D},"Previous"),n.a.createElement("span",{className:"page-number"},D+1),n.a.createElement(o.a,{className:"pagination-btn",onClick:()=>H(e=>e+1),disabled:U?D+1>=W:c.length<8},"Next")),n.a.createElement(i.a,{show:J,onHide:()=>_(!1)},n.a.createElement(i.a.Header,{closeButton:!0},n.a.createElement(i.a.Title,null,"Your Best Match")),n.a.createElement(i.a.Body,null,"object"===typeof R?n.a.createElement(p,{dog:R,toggleFavorite:Q,favorites:a}):n.a.createElement("p",null,R)),n.a.createElement(i.a.Footer,null,n.a.createElement(o.a,{variant:"secondary",onClick:()=>_(!1)},"Close"))))};const k=u.a.create({baseURL:"https://frontend-take-home-service.fetch.com",withCredentials:!0});t(43);var S=()=>{const[e,a]=Object(l.useState)(!!document.cookie.includes("isAuthenticated=true")),[t,c]=Object(l.useState)([]);return Object(l.useEffect)(()=>{document.cookie=e?"isAuthenticated=true; path=/":"isAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"},[e]),n.a.createElement(s.a,{fluid:!0,className:"app"},e?n.a.createElement(n.a.Fragment,null,n.a.createElement("link",{rel:"icon",href:"./components/img/thump.png"}),n.a.createElement(o.a,{variant:"danger",className:"logout-button",onClick:()=>{k.post("/auth/logout"),a(!1)}},"Logout"),n.a.createElement(C,{favorites:t,setFavorites:c})):n.a.createElement(g,{onLogin:()=>a(!0)}))};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)))}},[[48,1,2]]]);
//# sourceMappingURL=main.0beb7017.chunk.js.map