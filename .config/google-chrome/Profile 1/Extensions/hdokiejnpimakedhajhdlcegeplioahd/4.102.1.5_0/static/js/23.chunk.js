(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[23,45],{1062:function(e,t,n){"use strict";n.r(t);var o=n(1),l=(n(0),n(796)),r=n.n(l),a=n(801),i=n(1352),c=n(867),u=n(34),s=n(7),d={id:0,type:"TourTheVault",visible:!0,completed:null,seenAt:null,color:i.a.PURPLE},f={complete:jest.fn(),hideExpandedSkillInDrawer:jest.fn(),hideSkillDetailsDialog:jest.fn(),toggleShowAllSkills:jest.fn(),openVaultTour:jest.fn()};jest.mock("../../hooks/use-secondary-onboarding-actions",function(){return{useSecondaryOnboardingActions:function(){return f}}});var p=r()([])({secondaryOnboarding:{isHowToOpen:!1},user:{type:u.a.ENTERPRISE_TRIAL}});it("should shallow render the TourTheVault ad component without crashing",function(){var e=Object(a.shallow)(Object(o.jsx)(s.a,{store:p},Object(o.jsx)(c.default,{skill:d,expanded:!0,fromAllSkillsDialog:!1})));expect(e).toHaveLength(1)}),it("should invoke the openTour function when clicking the TourTheVault action button",function(){var e=Object(a.mount)(Object(o.jsx)(s.a,{store:p},Object(o.jsx)(c.default,{skill:d,expanded:!0,fromAllSkillsDialog:!1})));e.find("button.action-cta").simulate("click"),e.unmount(),expect(f.openVaultTour).toHaveBeenCalled(),expect(f.complete).toHaveBeenCalled(),expect(f.hideExpandedSkillInDrawer).toHaveBeenCalled()}),it("should close the TourTheVault skill from all skills when the action button is clicked",function(){var e=Object(a.mount)(Object(o.jsx)(s.a,{store:p},Object(o.jsx)(c.default,{skill:d,expanded:!0,fromAllSkillsDialog:!0})));e.find("button.action-cta").simulate("click"),e.unmount(),expect(f.openVaultTour).toHaveBeenCalled(),expect(f.hideSkillDetailsDialog).toHaveBeenCalled(),expect(f.toggleShowAllSkills).toHaveBeenCalled()})},796:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var n=l.applyMiddleware.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e))(function(){var e=[],n=[];return{getState:function(){return i(t)?t(e):t},getActions:function(){return e},dispatch:function(t){if(!(0,a.default)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(t));e.push(t);for(var o=0;o<n.length;o++)n[o]();return t},clearActions:function(){e=[]},subscribe:function(e){return i(e)&&n.push(e),function(){var t=n.indexOf(e);t<0||n.splice(t,1)}},replaceReducer:function(e){if(!i(e))throw new Error("Expected the nextReducer to be a function.")}}});return n()}};var o,l=n(64),r=n(797),a=(o=r)&&o.__esModule?o:{default:o};var i=function(e){return"function"===typeof e}},797:function(e,t){var n="[object Object]";var o,l,r=Function.prototype,a=Object.prototype,i=r.toString,c=a.hasOwnProperty,u=i.call(Object),s=a.toString,d=(o=Object.getPrototypeOf,l=Object,function(e){return o(l(e))});e.exports=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||s.call(e)!=n||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e))return!1;var t=d(e);if(null===t)return!0;var o=c.call(t,"constructor")&&t.constructor;return"function"==typeof o&&o instanceof o&&i.call(o)==u}},802:function(e,t){},803:function(e,t){},804:function(e,t){},805:function(e,t){},867:function(e,t,n){"use strict";n.r(t);var o=n(2),l=n(1),r=n(3),a=n(0),i=n.n(a),c=n(1351),u=n(798),s=n(91),d=n(22),f=n(871),p=n(872),j=Object(o.a)("p",{target:"elcmypq0"})({name:"1byxoow",styles:"font-size:12px;line-height:24px;color:#1d3049;margin-bottom:24px;"}),b=Object(o.a)(j,{target:"elcmypq1"})({name:"1qm1lh",styles:"margin-bottom:16px;"}),h=Object(o.a)(s.a,{target:"elcmypq2"})({name:"wayys6",styles:"width:100%;border-radius:4px;"});t.default=function(e){var t=e.skill,n=e.expanded,o=e.fromAllSkillsDialog,a=Object(c.a)();return Object(l.jsx)(u.a,{"data-component":"TourTheVault",skill:t,icon:t.completed&&Object(l.jsx)(f.a,null)||Object(l.jsx)(p.a,null),title:Object(l.jsx)(r.Trans,{id:"Tour your LastPass vault"}),description:Object(l.jsx)(r.Trans,{id:"Explore your safe place"}),expanded:n,fromAllSkillsDialog:o,bodyTitle:Object(l.jsx)(r.Trans,{id:"Vault = Safety"}),automationId:"so-tour-the-vault",bodyContent:Object(l.jsx)(i.a.Fragment,null,Object(l.jsx)(j,null,Object(l.jsx)(r.Trans,{id:"The vault is your place to store passwords, notes, profiles for online shopping, documents, and more."})),Object(l.jsx)(b,null,Object(l.jsx)(r.Trans,{id:"Everything you need to keep your online life rolling along smoothly and securely."})),Object(l.jsx)(h,{red:!0,theme:d.a,onClick:function(){a.openVaultTour(),a.complete(t.type),a.hideExpandedSkillInDrawer(),o&&(a.hideSkillDetailsDialog(),a.toggleShowAllSkills())},className:"action-cta","data-automation-id":"so-start-vault-tour-btn"},Object(l.jsx)(r.Trans,{id:"Start the vault tour"})))})}}}]);