(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{212:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"serialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serialization"}},[t._v("#")]),t._v(" Serialization")]),t._v(" "),a("p",[t._v("RestSharp has JSON and XML serializers built in without any additional packages\nor configuration. There are also a few JSON serializers provided as additional packages.")]),t._v(" "),a("h2",{attrs:{id:"default-serializers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-serializers"}},[t._v("#")]),t._v(" Default Serializers")]),t._v(" "),a("p",[t._v("The default JSON serializer uses the forked version of "),a("code",[t._v("SimpleJson")]),t._v(". It is very simplistic and\ndoesn't handle advanced scenarios in many cases. We do not plan to fix or add new features\nto the default JSON serializer, since it handles a lot of cases already and when you need\nto handle more complex objects, please consider using alternative JSON serializers mentioned below.")]),t._v(" "),a("p",[t._v("You can use either the default XML serializer or the "),a("code",[t._v("DotNetXmlSerializer")]),t._v(", which uses "),a("code",[t._v("System.Xml.Serialization")]),t._v(" library\nfrom .NET. To use the "),a("code",[t._v("DotNetXmlSerializer")]),t._v(" you need to configure the REST client instance:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseDotNetXmlSerializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"newtonsoftjson-aka-json-net"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#newtonsoftjson-aka-json-net"}},[t._v("#")]),t._v(" NewtonsoftJson (aka Json.Net)")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("NewtonsoftJson")]),t._v(" package is the most popular JSON serializer for .NET.\nIt handles all possible scenarios and is very configurable. Such a flexibility\ncomes with the cost of performance. If you need something faster, please check\n"),a("code",[t._v("Utf8Json")]),t._v(" or "),a("code",[t._v("System.Text.Json")]),t._v(" serializers (below).")]),t._v(" "),a("p",[t._v("RestSharp support Json.Net serializer via a separate package. You can install it\nfrom NuGet:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dotnet add package RestSharp.Serializers.NewtonsoftJson\n")])])]),a("p",[t._v("Use the extension method provided by the package to configure the client:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseNewtonsoftJson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The serializer configures some options by default:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsonSerializerSettings")]),t._v(" DefaultSettings "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsonSerializerSettings")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ContractResolver     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CamelCasePropertyNamesContractResolver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    DefaultValueHandling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DefaultValueHandling"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Include"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    TypeNameHandling     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TypeNameHandling"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("None"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    NullValueHandling    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NullValueHandling"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Ignore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Formatting           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Formatting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("None"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ConstructorHandling  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ConstructorHandling"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AllowNonPublicDefaultConstructor\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("If you need to use different settings, you can supply your instance of\n"),a("code",[t._v("JsonSerializerSettings")]),t._v(" as a parameter for the extension method.")]),t._v(" "),a("h2",{attrs:{id:"utf8json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utf8json"}},[t._v("#")]),t._v(" Utf8Json")]),t._v(" "),a("p",[t._v("The 'Utf8Json' package is known to be the fastest JSON serializer for .NET.")]),t._v(" "),a("p",[t._v("RestSharp supports "),a("code",[t._v("Utf8Json")]),t._v(" serializer via a separate package. You can install it\nfrom NuGet:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dotnet add package RestSharp.Serializers.Utf8Json\n")])])]),a("p",[t._v("Configure your REST client using the extension method:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseUtf8Json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("When the extension method is called without parameters, it will configure\nthe default options:")]),t._v(" "),a("ul",[a("li",[t._v("Allow private properties")]),t._v(" "),a("li",[t._v("Exclude null values")]),t._v(" "),a("li",[t._v("Use camel-case")])]),t._v(" "),a("p",[t._v("If you need to use different options, you can provide the instance of\n"),a("code",[t._v("IJsonFormatterResolver")]),t._v(" as a parameter for the extension method.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Keep in mind that this serializer is case-sensitive by default.")])]),t._v(" "),a("h2",{attrs:{id:"system-text-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-text-json"}},[t._v("#")]),t._v(" System.Text.Json")]),t._v(" "),a("p",[t._v("Microsoft included the new JSON serializer package "),a("code",[t._v("System.Text.Json")]),t._v(" together with .NET Core 3.\nIt is a small and fast serializer that is used in the WebApi version for .NET Core 3\nand beyond by default. The package is also available for .NET Standard 2.0 and .NET Framework 4.6.1 and higher.")]),t._v(" "),a("p",[t._v("RestSharp supports "),a("code",[t._v("System.Text.Json")]),t._v(" serializer via a separate package. You can install it\nfrom NuGet:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dotnet add package RestSharp.Serializers.SystemTextJson\n")])])]),a("p",[t._v("Configure your REST client using the extension method:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseSystemTextJson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The serializer will use default options, unless you provide your\nown instance of "),a("code",[t._v("JsonSerializerOptions")]),t._v(" to the extension method.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Keep in mind that this serializer is case-sensitive by default.")])]),t._v(" "),a("h2",{attrs:{id:"custom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom"}},[t._v("#")]),t._v(" Custom")]),t._v(" "),a("p",[t._v("You can also implement your custom serializer. To support both serialization and\ndeserialization, you must implement the "),a("code",[t._v("IRestSerializer")]),t._v(" interface.")]),t._v(" "),a("p",[t._v("Here is an example of a custom serializer that uses "),a("code",[t._v("System.Text.Json")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleJsonSerializer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IRestSerializer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Serialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("object")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" JsonSerializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Serialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Serialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parameter")]),t._v(" bodyParameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Serialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bodyParameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" T "),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Deserialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IRestResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" JsonSerializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Deserialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" SupportedContentTypes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/x-json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/javascript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*+json"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" ContentType "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DataFormat")]),t._v(" DataFormat "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DataFormat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The value of the "),a("code",[t._v("SupportedContentTypes")]),t._v(" property will be used to match the\nserializer with the response "),a("code",[t._v("Content-Type")]),t._v(" headers.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("ContentType")]),t._v(" property will be used when making a request so the\nserver knows how to handle the payload.")])])}),[],!1,null,null,null);s.default=n.exports}}]);