(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,a,t){e.exports=t.p+"static/media/burger-icon-01.eef32ba4.svg"},122:function(e,a,t){e.exports=t.p+"static/media/cloud-computing-01-01.76a8ebdf.png"},123:function(e,a,t){e.exports=t.p+"static/media/ai-process-01-01.a493823f.png"},124:function(e,a,t){e.exports=t.p+"static/media/report-vector-01-01.8feec911.png"},182:function(e,a,t){e.exports=t.p+"static/media/consulting.e48c08dd.jpg"},183:function(e,a,t){e.exports=t.p+"static/media/pavement-without-ai.d02eafd6.jpg"},184:function(e,a,t){e.exports=t.p+"static/media/pavement-with-ai.ef770fa6.jpg"},197:function(e,a,t){e.exports=t(339)},202:function(e,a,t){},29:function(e,a,t){},339:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(42),o=t.n(r),i=(t(202),t(54)),c=t(55),s=t(58),m=t(56),u=t(59),d=t(358),p=t(356),E=t(355),g=t(187),h=t(354),y=t(94),b=t.n(y),v=t(117),w=t.n(v),f=(t(29),t(24)),A=t(70),I=t(37),C=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).targetElement=null,t.navbarOn=function(){var e=t.state.mobileNav;t.setState({mobileNav:!e}),(e=!e)?Object(A.disableBodyScroll)(t.targetElement):Object(A.clearAllBodyScrollLocks)()},t.onLinkClick=function(e){e.preventDefault();var a=e.target.name;Object(A.clearAllBodyScrollLocks)(),t.setState({mobileNav:!1}),t.props.history.push(a)},t.state={mobileNav:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.targetElement=document.querySelector(".mobile-overlay")}},{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.onRouteChanged()}},{key:"onRouteChanged",value:function(){this.setState({mobileNav:!1}),Object(A.clearAllBodyScrollLocks)()}},{key:"render",value:function(){var e=this.props.browserLang.indexOf("es")>-1,a=this.state.mobileNav,t=a?"open":"closed",r="mobile-overlay-closed",o=this.props.location;return a&&(r="mobile-overlay-open"),console.log(o),l.a.createElement(n.Fragment,null,l.a.createElement(d.a,d.a.onlyComputer,l.a.createElement(p.a,{className:"App-nav",inverted:!0,style:{margin:"0",position:"absolute",width:"100%",zIndex:"100"}},l.a.createElement(E.a,{inverted:!0,secondary:!0},l.a.createElement(E.a.Item,null,l.a.createElement("a",{href:"/"},l.a.createElement(g.a,{size:"small",src:b.a}))),l.a.createElement(E.a.Menu,{position:"right"},l.a.createElement(E.a.Item,{name:"Data-labeling",active:"/data-labeling"===o.pathname,href:"#/data-labeling"},"Data Labeling"),l.a.createElement(E.a.Item,{name:"AI-Consulting",active:"/ai-consulting"===o.pathname,href:"#/ai-consulting"},"AI Consulting"),l.a.createElement(E.a.Item,null,l.a.createElement(h.a,{item:!0,text:"Industry-Specific Solutions",options:[{key:1,text:"Pavement Damage Analysis",value:1,href:"#/pavements-analysis",className:"navDropDownItem"}]})))))),l.a.createElement(d.a,d.a.onlyMobile,l.a.createElement("div",{style:{overflow:"hidden",maxHeight:"100vh",zIndex:"200"}},l.a.createElement("div",{className:"mobile-overlay ".concat(r),style:{maxHeight:"150vh"}}),a?l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{height:"100vh",zIndex:"120",position:"absolute",width:"100%"}},l.a.createElement(p.a,{className:"App-nav",inverted:!0},l.a.createElement(E.a,{inverted:!0,secondary:!0},l.a.createElement(E.a.Item,null,l.a.createElement(g.a,{onClick:this.onLinkClick,name:"/#",size:"small",src:b.a})),l.a.createElement(E.a.Menu,{position:"right"},l.a.createElement(E.a.Item,null,l.a.createElement(g.a,{onClick:this.navbarOn,style:{width:"38px",height:"29px"},size:"tiny",src:w.a})))),l.a.createElement(E.a,{vertical:!0,inverted:!0,className:"menu-item-group"},l.a.createElement(E.a.Item,{className:"mobile-menu-item ".concat(t),href:"#/data-labeling"},e?"Etiquetado de Datos":"Data Labeling"),l.a.createElement(E.a.Item,{className:"mobile-menu-item ".concat(t),href:"#/ai-consulting"},e?"Consultor\xeda en AI":"AI Consulting"),l.a.createElement(E.a.Item,{className:"mobile-menu-item ".concat(t),href:"#/pavements-analysis"},e?"An\xe1lisis de Da\xf1os en Pavimentos":"Pavement Damage Analysis"),l.a.createElement(E.a.Item,{className:"mobile-menu-item ".concat(t)},l.a.createElement(f.HashLink,{to:"/#contact-us"},e?"Cont\xe1ctenos":"Contact Us")))))):null),l.a.createElement(p.a,{className:"App-nav",inverted:!0,style:{margin:"0",position:"absolute",width:"100%",zIndex:"100"}},l.a.createElement(E.a,{inverted:!0,secondary:!0},l.a.createElement(E.a.Item,null,l.a.createElement(f.HashLink,{to:"/#"},l.a.createElement(g.a,{size:"small",src:b.a}))),l.a.createElement(E.a.Menu,{position:"right"},l.a.createElement(E.a.Item,null,l.a.createElement(g.a,{onClick:this.navbarOn,style:{width:"38px",height:"29px"},size:"tiny",src:w.a})))))))}}]),a}(n.Component),x=Object(I.k)(C),k=t(181),z=t.n(k),N=t(52),L=t(340),O=t(44),R=t(351),j=t(357),D=t(352),F=function(e){var a=e.tilt||"tilt-down",t=e.background||"#ffffff",n="extra-border-inner-".concat(a);return l.a.createElement("div",{className:"border-diagonal"},l.a.createElement("div",{className:"extra-border-outer"},l.a.createElement("div",{className:n,style:{backgroundColor:"".concat(t)}})))},q=t(122),S=t.n(q),H=t(123),T=t.n(H),P=t(124),U=t.n(P),W=t(182),B=t.n(W),M=t(183),J=t.n(M),_=t(184),G=t.n(_),Q=t(185),Y=t(353),$=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(Y.a,{style:{display:"inline-block"},size:"huge",action:"https://formspree.io/engin.ai.solutions@gmail.com",method:"POST"},l.a.createElement(Y.a.Group,{widths:"equal"},l.a.createElement(Y.a.Field,{required:!0},l.a.createElement(Y.a.Input,{required:!0,name:"name",type:"email",placeholder:"Email*"})),l.a.createElement(Y.a.Input,{name:"name",placeholder:"Company Name"})),l.a.createElement(Y.a.Field,{required:!0},l.a.createElement(Y.a.TextArea,{rows:10,required:!0,name:"name",placeholder:"Comment*"})),l.a.createElement(L.a,{size:"huge",type:"submit",className:"CTA-2"},"Contact Us"))}}]),a}(l.a.Component),K=t(35),V=function(e){var a=e.browserLang.indexOf("es")>-1;return l.a.createElement(n.Fragment,null,l.a.createElement(K.Helmet,null,l.a.createElement("title",null,"Engin.ai - AI Solutions for Engineers | AI Consulting, data labeling, damage analysis in pavements"),l.a.createElement("meta",{name:"description",content:"At Engin.AI we create custom AI solutions for engineering companies . We offer data labeling services, AI consulting, and pavement analysis with computer vision"}),l.a.createElement("meta",{property:"og:title",content:"Engin.AI - AI Solutions for Engineers | Your AI Strategic Partner"}),l.a.createElement("meta",{property:"og:type",content:"website"}),l.a.createElement("meta",{property:"og:url",content:"https://www.engin.ai"}),l.a.createElement("meta",{property:"og:description",content:"At Engin.AI we create custom AI solutions for engineering companies . We offer data labeling services, AI consulting, and pavement analysis with computer vision"}),l.a.createElement("meta",{name:"keywords",content:"engin ai, enginai, engin.ai, ai for engineers, ai consulting,  data labeling services, AI solutions, computer vision, damage analysis in pavements"}),l.a.createElement("meta",{name:"robots",content:"index, follow"}),l.a.createElement("meta",{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"}),l.a.createElement("meta",{name:"language",content:"English"}),l.a.createElement("meta",{name:"author",content:"Javier Urbina"}),l.a.createElement("meta",{property:"og:image",content:"%PUBLIC_URL%/full-color-logo-only-01-01.png"})),l.a.createElement("header",{className:"App-header"},l.a.createElement(p.a,{basic:!0,style:{width:"70%",zIndex:"10"}},l.a.createElement("h1",{style:{textTransform:"uppercase"}},a?"Empoderamos su negocio con inteligencia artificial":"Empowering your business with artificial intelligence"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,a?"Haga parte de la 4ta revoluci\xf3n industrial con Engin.ai, su aliado estrat\xe9gico":"Enter the 4th industrial revolution with Engin.ai, your strategic partner"),l.a.createElement("br",null),l.a.createElement(f.HashLink,{to:"/#contact-us"},l.a.createElement(L.a,{className:"mainCTABtn",inverted:!0,size:"huge",syle:{width:"50%"}},a?l.a.createElement("span",{className:"buttonText"},"Cont\xe1ctenos"):l.a.createElement("span",null,"Contact Us"),l.a.createElement("span",{className:"iconContainer",style:{display:"inline-block",width:"10px"}},l.a.createElement(O.a,{name:"chevron right"})))))),l.a.createElement(F,{tilt:"tilt-down"}),l.a.createElement("section",null,l.a.createElement(R.a,null,l.a.createElement("h1",null,a?"Lo que ofrecemos":"What we offer"),l.a.createElement(j.a,{centered:!0,stackable:!0,columns:3,divided:!0},l.a.createElement(j.a.Column,{style:{zIndex:"3"}},l.a.createElement(p.a,{basic:!0},l.a.createElement(j.a,{container:!0,centered:!0},l.a.createElement(j.a.Row,null,l.a.createElement(g.a,{alt:"cloud computing",className:"custom-icon",size:"small",src:U.a})),l.a.createElement(j.a.Row,null,l.a.createElement("h2",null,a?"Etiquetado de datos":"Data Labeling")),l.a.createElement(j.a.Row,null,l.a.createElement(p.a,{compact:!0,basic:!0,size:"large",style:{padding:"0"}},a?"Los algoritmos de aprendizaje s\xf3lo ser\xe1n tan buenos como los datos usados para entrenarlos. Nosotros le ayudamos con el proceso de etiquetado para que usted s\xf3lo se preocupe de entrenar sus modelos.":"A learning model will only be as good as the data used to train it. Our expert team will help you label your data so you only need to worry about training and using your model.")),l.a.createElement(j.a.Row,null,l.a.createElement(L.a,{href:"/#data-labeling",color:"green"},a?"Aprender M\xe1s":"Learn More"))))),l.a.createElement(j.a.Column,{style:{zIndex:"3"}},l.a.createElement(p.a,{basic:!0},l.a.createElement(j.a,{container:!0,centered:!0},l.a.createElement(j.a.Row,null,l.a.createElement(g.a,{alt:"Damage Analysis in Pavements",className:"custom-icon",size:"small",src:T.a})),l.a.createElement(j.a.Row,null,l.a.createElement("h2",null,a?"An\xe1lisis de da\xf1o de pavimentos":"Damage Analysis in Pavements")),l.a.createElement(j.a.Row,null,l.a.createElement(p.a,{compact:!0,basic:!0,size:"large",style:{padding:"0"}},a?"\xbfTiene fotos de pavimentos para analizar? Con nuestros algoritmos de visi\xf3n computacional, nosotros podemos analizarlos con gran precisi\xf3n y en tiempo r\xe9cord":"Do you have photos pavements to analyze? With our computer vision algorithms, we can analyze them with great accuracy and in a record time")),l.a.createElement(j.a.Row,null,l.a.createElement(L.a,{href:"/#pavements-analysis",color:"green"},a?"Aprender M\xe1s":"Learn More"))))),l.a.createElement(j.a.Column,{style:{zIndex:"3"}},l.a.createElement(p.a,{basic:!0},l.a.createElement(j.a,{container:!0,centered:!0},l.a.createElement(j.a.Row,null,l.a.createElement(g.a,{alt:"AI Consulting",className:"custom-icon",size:"small",src:S.a})),l.a.createElement(j.a.Row,null,l.a.createElement("h2",null,a?"Consultor\xeda en AI":"AI Consulting")),l.a.createElement(j.a.Row,null,l.a.createElement(p.a,{compact:!0,basic:!0,size:"large",style:{padding:"0"}},a?"\xbfQuisiera potenciar su empresa con soluciones personalizads? Nuestros consultores le pueden ayudar a crear soluciones para sus necesidades operacionales y de negocios.":"Would you like to find custom AI solutions for your company? Our AI consultants will work with you to create taylor-made solutions to your business and operational needs.")),l.a.createElement(j.a.Row,null,l.a.createElement(L.a,{href:"/#ai-consulting",color:"green"},a?"Aprender M\xe1s":"Learn More"))))),l.a.createElement(D.a,null),l.a.createElement(D.a,null)))),l.a.createElement(F,{background:"whitesmoke",tilt:"tilt-up"}),l.a.createElement("section",null,l.a.createElement(j.a,{container:!0,stackable:!0,columns:2,verticalAlign:"middle"},l.a.createElement(j.a.Column,{style:{zIndex:"3"}},l.a.createElement(Q.a,{before:G.a,after:J.a,width:500,height:250,defaultProgress:.5})),l.a.createElement(j.a.Column,{style:{zIndex:"3"}},l.a.createElement("h1",null,a?"El Programa en Acci\xf3n":"Our Software in Action"),l.a.createElement(p.a,{basic:!0,size:"massive",style:{lineHeight:"1.5"}},a?"Usamos algoritmos de visi\xf3n computacional para analizar y clasificar da\xf1os en diversos pavimentos.":"We use computer vision algorithms to analyze and classify damages in different pavements."),l.a.createElement(L.a,{className:"CTA-2",size:"huge",href:"/#/pavements-analysis"},a?"Aprender m\xe1s":"Learn more")))),l.a.createElement(F,{background:"white",tilt:"tilt-up"}),l.a.createElement("section",{className:"purpleBack"},l.a.createElement(j.a,{container:!0,stackable:!0,columns:2,verticalAlign:"middle"},l.a.createElement(j.a.Column,{style:{zIndex:"3"}},l.a.createElement("h1",null,a?"Por qu\xe9 escoger a Engin.ai":"Why Choose Engin.ai"),l.a.createElement(p.a,{basic:!0,size:"massive",style:{lineHeight:"1.5"}},a?"Tenemos un equipo de profesionales cualificados en diferentes \xe1reas de conocimientos. Esto nos permite trabajar con clientes en diversas industrias, y facilita el desarrollo de soluciones innovadoras para nuestros clientes.":"We have a qualified team of professionals in diverse areas. This allows us to work with our clients across different industries and enables us to create innovative enterprise solutions for our clients.")),l.a.createElement(j.a.Column,{style:{zIndex:"3"}},l.a.createElement(p.a,{basic:!0},l.a.createElement(g.a,{alt:"consulting-image",src:B.a,style:{borderRadius:"6% 6%"}}))))),l.a.createElement(F,{background:"#5a72ff",tilt:"tilt-up"}),l.a.createElement("section",{style:{background:"#5a72ff"}},l.a.createElement(R.a,null,l.a.createElement("h1",{style:{color:"white"}},a?"C\xf3mo Funciona":"How it works"),l.a.createElement(j.a,{centered:!0,stackable:!0,columns:3},l.a.createElement(j.a.Column,{style:{zIndex:"3"}},l.a.createElement(p.a,null,l.a.createElement(j.a,{container:!0,centered:!0},l.a.createElement(j.a.Row,null,l.a.createElement(g.a,{alt:"cloud computing",className:"custom-icon",size:"tiny",src:S.a})),l.a.createElement(j.a.Row,null,l.a.createElement("h2",null,a?"Env\xedo":"Upload")),l.a.createElement(j.a.Row,null,l.a.createElement(p.a,{compact:!0,basic:!0,size:"large",style:{padding:"0"}},a?"Env\xedanos de forma segura los datos que necesitas analizar.":"Send us the data that you need to analyze."))))),l.a.createElement(j.a.Column,{style:{zIndex:"3"}},l.a.createElement(p.a,null,l.a.createElement(j.a,{container:!0,centered:!0},l.a.createElement(j.a.Row,null,l.a.createElement(g.a,{alt:"analyze",className:"custom-icon",size:"tiny",src:T.a})),l.a.createElement(j.a.Row,null,l.a.createElement("h2",null,a?"An\xe1lisis":"Analyze")),l.a.createElement(j.a.Row,null,l.a.createElement(p.a,{compact:!0,basic:!0,size:"large",style:{padding:"0"}},a?"Nosotros analizamos los datos con nuestros algoritmos de visi\xf3n computacional.":"We analyze the data using our computer vision algorithms."))))),l.a.createElement(j.a.Column,{style:{zIndex:"3"}},l.a.createElement(p.a,null,l.a.createElement(j.a,{container:!0,centered:!0},l.a.createElement(j.a.Row,null,l.a.createElement(g.a,{alt:"report",className:"custom-icon",size:"tiny",src:U.a})),l.a.createElement(j.a.Row,null,l.a.createElement("h2",null,a?"Reporte":"Report")),l.a.createElement(j.a.Row,null,l.a.createElement(p.a,{compact:!0,basic:!0,size:"large",style:{padding:"0"}},a?"Recibe un reporte con el insight que necesitas para tomar decisiones informadas.":"Receive a report with the insight that you need to make informed decisions.")))))))),l.a.createElement(F,{background:"white",tilt:"tilt-down"}),l.a.createElement("section",{className:"cta-section",id:"contact-us"},l.a.createElement(j.a.Row,{centered:!0},l.a.createElement("h1",null,a?"Entra a la era AI con Engin.ai":"Enter the AI era with Engin.ai")),l.a.createElement(j.a.Row,{centered:!0},l.a.createElement("p",null,a?"Perm\xedtanos ayudarle a automatizar tareas para que usted pueda enfocarse en lo que sabe hacer mejor.":"We can help you automate tasks so you can focus on doing what you do best.")),l.a.createElement(D.a,null),l.a.createElement(j.a.Row,{centered:!0},l.a.createElement(R.a,{textAlign:"center"},l.a.createElement($,{style:{display:"inline-block"}})))))},X=t(349),Z=t(350),ee=function(e){var a=e.browserLang.indexOf("es")>-1,t="linear-gradient(45deg,  rgba(0,26,255,.7) 1%,rgba(98,38,183,.7) 30%,rgba(140,40,99,.7) 69%,rgba(250,34,52,.7) 100%),url(".concat("images/background-image-hero.jpg",")");return l.a.createElement("header",{className:"App-hero",style:{minHeight:"100vh",backgroundImage:t,color:"white"}},l.a.createElement(K.Helmet,null,l.a.createElement("title",null,"Engin.AI - Data Labeling Services"),l.a.createElement("meta",{name:"description",content:"A learning model will only be as good as the data used to train it. Our expert team will help you label your data so you only need to worry about training and using your models"}),l.a.createElement("meta",{property:"og:title",content:"Engin.AI - Data Labeling Services For AI"}),l.a.createElement("meta",{property:"og:type",content:"website"}),l.a.createElement("meta",{property:"og:url",content:"https://www.engin.ai"}),l.a.createElement("meta",{property:"og:description",content:"A learning model will only be as good as the data used to train it. Our expert team will help you label your data so you only need to worry about training and using your models"}),l.a.createElement("meta",{name:"keywords",content:"engin ai, enginai, engin.ai, data labeling services, AI solutions, computer vision, damage analysis in pavements"}),l.a.createElement("meta",{name:"robots",content:"index, follow"}),l.a.createElement("meta",{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"}),l.a.createElement("meta",{name:"language",content:"English"}),l.a.createElement("meta",{name:"author",content:"Javier Urbina"}),l.a.createElement("meta",{property:"og:image",content:"%PUBLIC_URL%/full-color-logo-only-01-01.png"})),l.a.createElement(p.a,{basic:!0,style:{width:"70%",zIndex:"10"},className:"cta-hero-section"},l.a.createElement(j.a,{stackable:!0},l.a.createElement(j.a.Row,{columns:2},l.a.createElement(j.a.Column,{style:{textAlign:"left"}},l.a.createElement("h1",{style:{textTransform:"uppercase"}},a?"Etiquetado de Datos":"Data labeling"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",{style:{lineHeight:"1.5"}},a?"Los algoritmos de aprendizaje s\xf3lo ser\xe1n tan buenos como los datos usados para entrenarlos. Nosotros le ayudamos con el proceso de etiquetado para que usted s\xf3lo se preocupe de entrenar sus modelos.":"A learning model will only be as good as the data used to train it. Our expert team will help you label your data so you only need to worry about training and using your models."),l.a.createElement("br",null)),l.a.createElement(j.a.Column,null,l.a.createElement(p.a,null,l.a.createElement(Y.a,{action:"https://formspree.io/engin.ai.solutions@gmail.com",method:"POST",style:{color:"black"}},l.a.createElement("h2",null,a?"Cont\xe1ctenos para Hacer un Demo":"Request a Demo"),l.a.createElement(p.a,{basic:!0,style:{textAlign:"left"}},l.a.createElement(Y.a.Field,null,l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement(X.a,{name:"name",placeholder:"John Doe"})),l.a.createElement(Y.a.Field,{required:!0},l.a.createElement("label",{htmlFor:"name"},"Email"),l.a.createElement(X.a,{name:"name",placeholder:"jdoe@example.com"})),l.a.createElement(Y.a.Field,null,l.a.createElement("label",{htmlFor:"name"},"Company"),l.a.createElement(X.a,{name:"name",placeholder:"My Business"})),l.a.createElement(Y.a.Field,null,l.a.createElement("label",{htmlFor:"name"},"Comment"),l.a.createElement(Z.a,{name:"name"}))),l.a.createElement(L.a,{type:"submit",inverted:!0,color:"red",size:"huge",syle:{width:"50%"}},a?l.a.createElement("span",{className:"buttonText"},"Cont\xe1ctenos"):l.a.createElement("span",null,"Contact Us"),l.a.createElement("span",{className:"iconContainer",style:{display:"inline-block",width:"10px"}},l.a.createElement(O.a,{name:"chevron right"})))))))),l.a.createElement(f.HashLink,{to:"/#contact-us"})))},ae=function(e){var a=e.browserLang.indexOf("es")>-1,t="linear-gradient(45deg,  rgba(0,26,255,.7) 1%,rgba(98,38,183,.7) 30%,rgba(140,40,99,.7) 69%,rgba(250,34,52,.7) 100%),url(".concat("images/background-image-hero.jpg",")");return l.a.createElement("header",{className:"App-hero",style:{minHeight:"100vh",backgroundImage:t,color:"white"}},l.a.createElement(K.Helmet,null,l.a.createElement("title",null,"Engin.AI - Pavement Damage Analysis |Pavement Inspection and Auditing"),l.a.createElement("meta",{name:"description",content:"Save money and increase accuracy of your pavement inspections using our AI -powered software to detect damages in pavement and its different categories."}),l.a.createElement("meta",{property:"og:title",content:"Engin.AI - AI Consulting | Data Strategy | AI Strategy"}),l.a.createElement("meta",{property:"og:type",content:"website"}),l.a.createElement("meta",{property:"og:url",content:"https://www.engin.ai"}),l.a.createElement("meta",{property:"og:description",content:"Save money and increase accuracy of your pavement inspections using our AI -powered software to detect damages in pavement and its different categories."}),l.a.createElement("meta",{name:"keywords",content:"engin ai, enginai, engin.ai, AI for civil engineering, computer vision, pavement inspection, pavement inspection with ai, pavement inspection machine learning"}),l.a.createElement("meta",{name:"robots",content:"index, follow"}),l.a.createElement("meta",{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"}),l.a.createElement("meta",{name:"language",content:"English"}),l.a.createElement("meta",{name:"author",content:"Javier Urbina"}),l.a.createElement("meta",{property:"og:image",content:"%PUBLIC_URL%/full-color-logo-only-01-01.png"})),l.a.createElement(p.a,{basic:!0,style:{width:"70%",zIndex:"10"},className:"cta-hero-section"},l.a.createElement(j.a,{stackable:!0},l.a.createElement(j.a.Row,{columns:2},l.a.createElement(j.a.Column,{style:{textAlign:"left"}},l.a.createElement("h1",{style:{textTransform:"uppercase"}},a?"An\xe1lisis de Da\xf1os en Pavimentos":"Analysis of Pavement Damage"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",{style:{lineHeight:"1.5"}},a?"\xbfTiene fotos de pavimentos para analizar? Con nuestros algoritmos de visi\xf3n computacional, nosotros podemos analizarlos con gran precisi\xf3n y a un tiempo r\xe9cord en tiempo r\xe9cord.":"Do you have photos pavements to analyze? With our computer vision algorithms, we can analyze them with great accuracy and in a record time."),l.a.createElement("br",null)),l.a.createElement(j.a.Column,null,l.a.createElement(p.a,null,l.a.createElement(Y.a,{action:"https://formspree.io/engin.ai.solutions@gmail.com",method:"POST",style:{color:"black"}},l.a.createElement("h2",null,a?"Cont\xe1ctenos para Hacer un Demo":"Request a Demo"),l.a.createElement(p.a,{basic:!0,style:{textAlign:"left"}},l.a.createElement(Y.a.Field,null,l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement(X.a,{name:"name",placeholder:"John Doe"})),l.a.createElement(Y.a.Field,null,l.a.createElement("label",{htmlFor:"name"},"Email"),l.a.createElement(X.a,{name:"name",placeholder:"jdoe@example.com"})),l.a.createElement(Y.a.Field,null,l.a.createElement("label",{htmlFor:"name"},"Company"),l.a.createElement(X.a,{name:"name",placeholder:"My Business"})),l.a.createElement(Y.a.Field,null,l.a.createElement("label",{htmlFor:"name"},"Comment"),l.a.createElement(Z.a,{name:"name"}))),l.a.createElement(L.a,{type:"submit",inverted:!0,color:"red",size:"huge",syle:{width:"50%"}},a?l.a.createElement("span",{className:"buttonText"},"Cont\xe1ctenos"):l.a.createElement("span",null,"Contact Us"),l.a.createElement("span",{className:"iconContainer",style:{display:"inline-block",width:"10px"}},l.a.createElement(O.a,{name:"chevron right"})))))))),l.a.createElement(f.HashLink,{to:"/#contact-us"})))},te=function(e){var a=e.browserLang.indexOf("es")>-1,t="linear-gradient(45deg,  rgba(0,26,255,.7) 1%,rgba(98,38,183,.7) 30%,rgba(140,40,99,.7) 69%,rgba(250,34,52,.7) 100%),url(".concat("images/background-image-hero.jpg",")");return l.a.createElement("header",{className:"App-hero",style:{minHeight:"100vh",backgroundImage:t,color:"white"}},l.a.createElement(K.Helmet,null,l.a.createElement("title",null,"Engin.AI - AI Consulting Services"),l.a.createElement("meta",{name:"description",content:"At Engin.AI we help clients at all levels of AI adoption. We provide consulting in data collection strategy, data curation, AI strategy, AI implementation and deployment"}),l.a.createElement("meta",{property:"og:title",content:"Engin.AI - AI Consulting | Data Strategy | AI Strategy"}),l.a.createElement("meta",{property:"og:type",content:"website"}),l.a.createElement("meta",{property:"og:url",content:"https://www.engin.ai"}),l.a.createElement("meta",{property:"og:description",content:"At Engin.AI we help clients at all levels of AI adoption. We provide consulting in data collection strategy, data curation, AI strategy, AI implementation and deployment"}),l.a.createElement("meta",{name:"keywords",content:"engin ai, enginai, engin.ai, AI consulting services, AI solutions, computer vision, deep learning, data collection, data strategy, ai strategy, ai deployment"}),l.a.createElement("meta",{name:"robots",content:"index, follow"}),l.a.createElement("meta",{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"}),l.a.createElement("meta",{name:"language",content:"English"}),l.a.createElement("meta",{name:"author",content:"Javier Urbina"}),l.a.createElement("meta",{property:"og:image",content:"%PUBLIC_URL%/full-color-logo-only-01-01.png"})),l.a.createElement(p.a,{basic:!0,style:{width:"70%",zIndex:"10"},className:"cta-hero-section"},l.a.createElement(j.a,{stackable:!0},l.a.createElement(j.a.Row,{columns:2},l.a.createElement(j.a.Column,{style:{textAlign:"left"}},l.a.createElement("h1",{style:{textTransform:"uppercase"}},a?"Consultor\xeda en AI":"AI Consulting"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",{style:{lineHeight:"1.5"}},a?"\xbfQuisiera potenciar su empresa con soluciones personalizads? Nuestros consultores le pueden ayudar a crear soluciones para sus necesidades operacionales y de negocios.":"Would you like to find custom AI solutions for your company? Our AI consultants will work with you to create taylor-made solutions to your business and operational needs."),l.a.createElement("br",null)),l.a.createElement(j.a.Column,null,l.a.createElement(p.a,null,l.a.createElement(Y.a,{style:{color:"black"},action:"https://formspree.io/engin.ai.solutions@gmail.com",method:"POST"},l.a.createElement("h2",null,a?"Solicite una Asesor\xeda Inicial Gratuita":"Request a Free Initial Assessment"),l.a.createElement(p.a,{basic:!0,style:{textAlign:"left"}},l.a.createElement(Y.a.Field,null,l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement(X.a,{name:"name",placeholder:"John Doe"})),l.a.createElement(Y.a.Field,null,l.a.createElement("label",{htmlFor:"name"},"Email"),l.a.createElement(X.a,{name:"name",placeholder:"jdoe@example.com"})),l.a.createElement(Y.a.Field,null,l.a.createElement("label",{htmlFor:"name"},"Company"),l.a.createElement(X.a,{name:"name",placeholder:"My Business"})),l.a.createElement(Y.a.Field,null,l.a.createElement("label",{htmlFor:"name"},"Comment"),l.a.createElement(Z.a,{name:"name"}))),l.a.createElement(L.a,{type:"submit",inverted:!0,color:"red",size:"huge",syle:{width:"50%"}},a?l.a.createElement("span",{className:"buttonText"},"Cont\xe1ctenos"):l.a.createElement("span",null,"Contact Us"),l.a.createElement("span",{className:"iconContainer",style:{display:"inline-block",width:"10px"}},l.a.createElement(O.a,{name:"chevron right"})))))))),l.a.createElement(f.HashLink,{to:"/#contact-us"})))},ne=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(N.HashRouter,null,l.a.createElement(I.d,{path:"/data-labeling",render:function(a){return l.a.createElement(ee,Object.assign({browserLang:e.props.browserLang},e.props))}}),l.a.createElement(I.d,{path:"/pavements-analysis",render:function(a){return l.a.createElement(ae,Object.assign({browserLang:e.props.browserLang},e.props))}}),l.a.createElement(I.d,{path:"/ai-consulting",render:function(a){return l.a.createElement(te,Object.assign({browserLang:e.props.browserLang},e.props))}}),l.a.createElement(I.d,{exact:!0,path:"/",render:function(a){return l.a.createElement(V,Object.assign({browserLang:e.props.browserLang},e.props))}}))}}]),a}(l.a.Component);var le=function(){var e=z()().toLowerCase();return l.a.createElement("div",{style:{overflow:"hidden"}},l.a.createElement("div",{className:"App"},l.a.createElement(N.HashRouter,null,l.a.createElement(x,{browserLang:e}),l.a.createElement(ne,{browserLang:e}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},94:function(e,a,t){e.exports=t.p+"static/media/white-logo-plus-name-final-01.ae4733f6.svg"}},[[197,1,2]]]);
//# sourceMappingURL=main.b49050b2.chunk.js.map