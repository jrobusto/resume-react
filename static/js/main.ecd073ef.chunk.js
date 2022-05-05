(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(26)},20:function(e,n,t){},21:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(7),l=t.n(o),i=(t(20),t(1)),c=t(3),u=(t(21),{headerFont:"'Work Sans', sans- serif",bodyFont:"'Taviraj', serif",monoFont:"'Space Mono', monospace",primaryColor:"#8789C0",secondaryColor:"#545E75",mutedColor:"#D8DDF0",white:"#FFFFFF"}),m=c.b;function d(){var e=Object(i.a)(["\n    font-family: ",";\n    margin-top: 0;\n    margin-bottom: 0;\n"]);return d=function(){return e},e}function f(){var e=Object(i.a)(["\n    /* font-family: ","; */\n    font-size: 16px;\n"]);return f=function(){return e},e}function s(){var e=Object(i.a)(["\n    font-family: ",";\n    margin-top: 0;\n    margin-bottom: 0;\n"]);return s=function(){return e},e}var p=m.h1(s(),function(e){return e.theme.headerFont}),g=m.span(f(),function(e){return e.theme.bodyFont}),h=m.h2(d(),function(e){return e.theme.headerFont});function y(e){return r.createElement("div",null,r.createElement(p,null,e.fullName," ",r.createElement(g,null,"(they/them)")),r.createElement(h,null,e.jobTitle))}function b(){var e=Object(i.a)(["\n    /* vertical-align: middle; */\n"]);return b=function(){return e},e}var v=m.span(b());function E(e){var n=e.type;return n.includes("logo")||(n="md-".concat(n)),r.createElement(v,{className:"icon ion-".concat(n)})}var w,j=t(11);function S(){var e=Object(i.a)(["\n    text-decoration: none;\n    color: ",";\n    :hover {\n        color: ","\n    }\n"]);return S=function(){return e},e}!function(e){e.PHONE="PHONE",e.EMAIL="EMAIL",e.OTHER="OTHER"}(w||(w={}));var O=m.a(S(),function(e){return e.theme.mutedColor},function(e){return e.theme.secondaryColor});function F(e){var n=e.value,t=e.value;if(e.type===w.EMAIL)n="mailto:".concat(e.value);else if(e.type===w.PHONE){var a=Object(j.a)(e.value);a&&(n=a.getURI(),t=a.formatNational())}else n=e.value,t=t.replace(/https:\/\/|www\./,"");return r.createElement(O,{href:n},t)}function D(){var e=Object(i.a)(["\n    margin-top: 0.5em;\n"]);return D=function(){return e},e}function k(){var e=Object(i.a)(["\n    font-family: ",";\n    list-style: none;\n    padding-left: 0;\n    margin-top: 0;\n    margin-bottom: 0;\n    text-align: right;\n    padding-right: 1em;\n"]);return k=function(){return e},e}var C=m.ul(k(),function(e){return e.theme.monoFont}),A=m.li(D());function T(e){return r.createElement(C,null,r.createElement(A,null,r.createElement(E,{type:"mail"}),"\xa0",r.createElement(F,{type:w.EMAIL,value:e.email})),r.createElement(A,null,r.createElement(E,{type:"call"}),"\xa0",r.createElement(F,{type:w.PHONE,value:e.phone})))}var N=c.b.div.withConfig({displayName:"PageHeader__HeaderGrid",componentId:"sc-1r8y1ug-0"})(["display:grid;grid-template-columns:1fr 1fr;background-color:",";border-bottom:2px dotted ",";color:",";padding-top:1em;padding-left:1em;padding-bottom:1em;"],function(e){return e.theme.primaryColor},function(e){return e.theme.primaryColor},function(e){return e.theme.white});function x(e){return r.createElement(N,null,r.createElement(y,{fullName:"Wren Hawthorne",jobTitle:"software engineer"}),r.createElement(T,{email:"wrenhawth@gmail.com",phone:"+14438676452",github:"https://github.com/wrenhawth"}))}var M=t(2),R=t.n(M);function z(){var e=Object(i.a)(["\n    font-family: ",";\n    color: ",";\n    border-bottom: ",";\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    margin-top: 0.5em;\n    display: inline-block;\n    padding-right: 0.5em;\n    margin-bottom: 0.5em;\n\n"]);return z=function(){return e},e}var P=m.h2(z(),function(e){return e.theme.headerFont},function(e){return e.theme.primaryColor},function(e){return e.theme.primaryColor});function W(){var e=Object(i.a)(["\n    font-family: ",";\n    font-weight: 300;\n    font-size: .9em;\n    color: ",";\n    margin-top: 0;\n"]);return W=function(){return e},e}var H=m.p(W(),function(e){return e.theme.headerFont},function(e){return e.theme.secondaryColor});function I(){var e=Object(i.a)(["\n    margin-top: 0;\n    margin-bottom: 0.5em;\n    font-family: ",";\n    font-weight: 400;\n"]);return I=function(){return e},e}var L=m.h3(I(),function(e){return e.theme.headerFont});function J(){var e=Object(i.a)(["\n    font-family: ",";\n    margin-top: 0;\n    margin-bottom: 0.5em;\n"]);return J=function(){return e},e}var Q=m.h4(J(),function(e){return e.theme.headerFont});function q(){var e=Object(i.a)(["\n    margin-top: 0;\n    font-size: .7em;\n    list-style-type: square;\n    list-style-position: inside;\n    padding-left: 0.25em;\n"]);return q=function(){return e},e}function G(){var e=Object(i.a)(["\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n"]);return G=function(){return e},e}var B=m.div(G()),U=m.ul(q());function Y(e){var n=R()(e.job.startDate).format("MMM Y"),t=e.job.bullets.map(function(e,n){return r.createElement("li",{key:"bullet-".concat(n)},e)}),a=e.job.endDate?R()(e.job.endDate).format("MMM Y"):"Present";return r.createElement(B,null,r.createElement("div",null,r.createElement(L,null,e.job.companyName),r.createElement(H,null,n," - ",a)),r.createElement("div",null,r.createElement(Q,null,e.job.jobTitle),r.createElement(U,null,t)))}function _(){var e=Object(i.a)(["\n    font-family: ",";\n    font-size: 1em;\n"]);return _=function(){return e},e}var K=m.code(_(),function(e){return e.theme.monoFont});function V(){var e=Object(i.a)(["\n    font-style: italic;\n    color: ",";\n    white-space: nowrap;\n    margin-left: 0.5em;\n"]);return V=function(){return e},e}var $=m(K)(V(),function(e){return e.theme.secondaryColor}),X=[{companyName:"98point6",startDate:R()().year(2019).month("August").toDate(),jobTitle:"Senior Software Enginner",bullets:[r.createElement(r.Fragment,null,"Developed the React/Redux-based Clinician Console app used by medical professionals to interact with, diagnose, and treat patients in a telehealth setting. Worked to shape the development of the app to leverage development best practices for performance, maintainability, reliability, and usability.",r.createElement($,null,"(Typescript, React, Redux, styled-components) ")),r.createElement(r.Fragment,null,"Transitioned the type-checking system for three large web clients from Flow to Typescript. This change of type-checking systems significantly improved type safety, reduced build times by 50%, and increased developer ability to deliver features for the company's Clinician Console, Patient Web App, and Internal Commercial tools. A focus on mentoring and education, alongside automated tooling, empowered other developers to smoothly transition and more efficiently use the new language features.",r.createElement($,null,"(Typescript, Flow)")),r.createElement(r.Fragment,null,"Created utilities to integrate the Clinician Console with a new GraphQL-based back-end, creating a bridge between the front-end console and the queries and mutations needed to retrieve and manipulate medical data.",r.createElement($,null,"(GraphQL, react-query, urql, graphql-codegen)"))]},{companyName:"Polly",startDate:R()().year(2017).month("August").toDate(),endDate:R()().year(2019).month("August").toDate(),jobTitle:"Software Enginner",bullets:[r.createElement(r.Fragment,null,"Developed front-end application in React for managing and analyzing the results of surveys. Coordinated, maintained , and documented code standards for the component library, improving developer output, component performance, and the consistency of the user experience. These component performance optimizations, ombined with other front-end optimizations, reduced average load time by 50%. ",r.createElement($,null," (TypeScript, React, SCSS, MongoDB)")),r.createElement(r.Fragment,null,"Developed large-scale back end software for processing user events from Slack integration. Wrote back-end web-application software to process millions of AWS SQS events each month to quickly respond to user input in Slack. Refactored code to improve throughput and reduce customer wait time due to API rate limiting.",r.createElement($,null," (Node.js, MongoDB, AWS SQS, AWS Lambda)"))]},{companyName:"CSRA",startDate:R()().year(2017).month("January").toDate(),endDate:R()().year(2017).month("August").toDate(),jobTitle:"Software Engineer",bullets:[r.createElement(r.Fragment,null,"Developed and maintained case-management system web-app for processing refugee applications. Hardened security within the application to better protect data of applicants and employees.",r.createElement($,null,"(Java, C#, T-SQL)"))]},{companyName:"42Six Solutions",startDate:R()().year(2014).month("October").toDate(),endDate:R()().year(2017).month("January").toDate(),jobTitle:"Software Engineer",bullets:[r.createElement(r.Fragment,null,"Created Angular.js webapp that pulled data from a RESTful JSON service and presented the results in a user-friendly and customizable format, resulting in a strong and competitive proposal for the company. ",r.createElement($,null,"(Node.js, ES5, AngularJS)")),r.createElement(r.Fragment,null,"Modified machine learning workflows to properly use Apache Spark features for more reliable and efficient distributed processing, increasing performance. Increased configurability of the workflows through modifying the front-end used for launching and viewing the results of jobs. ",r.createElement($,null,"(Python, Spark, Django, AngularJS)"))]}];function Z(e){var n=X.map(function(e){return r.createElement(Y,{key:e.companyName,job:e})});return r.createElement("div",null,r.createElement(P,null,r.createElement(E,{type:"briefcase"})," Experience"),n)}function ee(){var e=Object(i.a)(["\n    margin: 0;\n    font-family: ",";\n    font-style: italic;\n"]);return ee=function(){return e},e}function ne(){var e=Object(i.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: space-around;\n"]);return ne=function(){return e},e}function te(){var e=Object(i.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-auto-rows: auto;\n    grid-row-gap: 1em;\n"]);return te=function(){return e},e}var re=m.div(te()),ae=m.div(ne()),oe=m.p(ee(),function(e){return e.theme.bodyFont});function le(e){return r.createElement("div",null,r.createElement(P,null,r.createElement(E,{type:"school"})," Education"),r.createElement(re,null,r.createElement("div",null,r.createElement(L,null,"Georgia Tech"),r.createElement(H,null,"2017 - 2018")),r.createElement("div",null,r.createElement(oe,null,"Graduate coursework in Artificial Intelligence, Robotics, & Data Visualization")),r.createElement("div",null,r.createElement(L,null,"University of Maryland"),r.createElement(H,null,"2010 - 2013")),r.createElement(ae,null,r.createElement(Q,null,"B.S. in Psychology"),r.createElement(oe,null,"Minor in Computer Science"))))}function ie(){var e=Object(i.a)(["\n    font-weight: normal;\n"]);return ie=function(){return e},e}function ce(){var e=Object(i.a)(["\n    margin-top: 0.5em;\n    margin-bottom: 0.5em;\n"]);return ce=function(){return e},e}function ue(){var e=Object(i.a)(["\n    font-family: ","\n"]);return ue=function(){return e},e}var me=m.div(ue(),function(e){return e.theme.headerFont}),de=m.p(ce()),fe=m.span(ie());function se(){return r.createElement("div",null,r.createElement(P,null,r.createElement(E,{type:"construct"})," Skills"),r.createElement(me,null,r.createElement(de,null,r.createElement(fe,null,"Experienced"),": React, Redux, TypeScript, Node.js, HTML, Styled-Components"),r.createElement(de,null,r.createElement(fe,null,"Working Knowledge"),":GraphQL, Docker, Amazon SQS, Amazon Labmda"),r.createElement(de,null,r.createElement(fe,null,"Previous Exposure"),": D3.js, AngularJS, Storybook, Webpack, Express")))}function pe(){var e=Object(i.a)(["\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-column-gap: 1em;\n"]);return pe=function(){return e},e}function ge(){var e=Object(i.a)(["\n    padding-left: 1em;\n"]);return ge=function(){return e},e}var he=m.div(ge()),ye=m.div(pe());function be(e){return r.createElement(he,null,r.createElement(Z,null),r.createElement(ye,null,r.createElement(le,null),r.createElement(se,null)))}function ve(){var e=Object(i.a)(["\n  font-family: ",";\n  font-weight: 300;\n  font-size: 16px;\n"]);return ve=function(){return e},e}var Ee=m.div(ve(),function(e){return e.theme.bodyFont});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(function(){return a.a.createElement(c.a,{theme:u},a.a.createElement(Ee,{className:"resume"},a.a.createElement(x,null),a.a.createElement(be,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.ecd073ef.chunk.js.map