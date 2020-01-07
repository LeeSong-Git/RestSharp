(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{209:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"authenticators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authenticators"}},[t._v("#")]),t._v(" Authenticators")]),t._v(" "),a("p",[t._v("RestSharp includes authenticators for basic HTTP (Authorization header),\nNTLM and parameter-based systems.")]),t._v(" "),a("h2",{attrs:{id:"using-simpleauthenticator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-simpleauthenticator"}},[t._v("#")]),t._v(" Using SimpleAuthenticator")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("SimpleAuthenticator")]),t._v(" included allows you to pass a\nusername and password (or API and secret key) as GET or POST\nparameters depending on the method used for the request.\nYou pass it the username, password and the names of the\nparameters for each.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Authenticator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleAuthenticator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resource"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The URL generated for this request would be "),a("code",[t._v("http://example.com/resource?username=foo&password=bar")])]),t._v(" "),a("p",[t._v("Changing the above request to use a POST or PUT would send\nthe values as encoded form values instead.")]),t._v(" "),a("h2",{attrs:{id:"basic-authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-authentication"}},[t._v("#")]),t._v(" Basic Authentication")]),t._v(" "),a("h2",{attrs:{id:"oauth1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oauth1"}},[t._v("#")]),t._v(" OAuth1")]),t._v(" "),a("h2",{attrs:{id:"jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[t._v("#")]),t._v(" JWT")]),t._v(" "),a("h2",{attrs:{id:"custom-authenticator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-authenticator"}},[t._v("#")]),t._v(" Custom Authenticator")]),t._v(" "),a("p",[t._v("You can write your own implementation by implementing "),a("code",[t._v("IAuthenticator")]),t._v(" and\nregistering it with your RestClient:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Authenticator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SuperAuthenticator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// implements IAuthenticator")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("Authenticate")]),t._v(" method is the very first thing called upon calling\n"),a("code",[t._v("RestClient.Execute")]),t._v(" or "),a("code",[t._v("RestClient.Execute<T>")]),t._v(".\nThe "),a("code",[t._v("Authenticate")]),t._v(" method is passed the "),a("code",[t._v("RestRequest")]),t._v(" currently being executed giving\nyou access to  every part of the request data (headers, parameters, etc.)")])])}),[],!1,null,null,null);s.default=n.exports}}]);