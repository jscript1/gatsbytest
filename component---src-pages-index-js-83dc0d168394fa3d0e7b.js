(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,a,t){"use strict";t.r(a);var n=t(6),r=t.n(n),l=t(0),i=t.n(l),c=t(147),o=t.n(c),s=t(146),u=t.n(s),m=(t(215),t(145)),p=t.n(m),d=t(159),f=t.n(d),h=function(e){var a=e.data;return i.a.createElement("div",{className:f.a.hero},i.a.createElement(p.a,{className:f.a.heroImage,alt:a.name,fluid:a.heroImage.fluid}),i.a.createElement("div",{className:f.a.heroDetails},i.a.createElement("h3",{className:f.a.heroHeadline},a.name),i.a.createElement("p",{className:f.a.heroTitle},a.title),i.a.createElement("p",null,a.shortBio.shortBio)))},E=t(141),g=t(154);t.d(a,"pageQuery",function(){return y});var v=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=o()(this,"props.data.site.siteMetadata.title"),a=o()(this,"props.data.allContentfulBlogPost.edges"),t=o()(this,"props.data.allContentfulPerson.edges")[0];return i.a.createElement(E.a,{location:this.props.location},i.a.createElement("div",{style:{background:"#fff"}},i.a.createElement(u.a,{title:e}),i.a.createElement(h,{data:t.node}),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h2",{className:"section-headline"},"Recent articles"),i.a.createElement("ul",{className:"article-list"},a.map(function(e){var a=e.node;return i.a.createElement("li",{key:a.slug},i.a.createElement(g.a,{article:a}))})))))},a}(i.a.Component),y=(a.default=v,"1561776064")},138:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(4),i=t.n(l),c=t(28),o=t.n(c);t.d(a,"a",function(){return o.a});t(139),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},139:function(e,a,t){var n;e.exports=(n=t(140))&&n.default||n},140:function(e,a,t){"use strict";t.r(a);t(29);var n=t(0),r=t.n(n),l=t(4),i=t.n(l),c=t(51),o=t(2),s=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=s},141:function(e,a,t){"use strict";var n=t(6),r=t.n(n),l=t(0),i=t.n(l),c=t(138),o=(t(152),function(e){var a=e.children;return i.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},a)}),s=t(153),u=t.n(s),m=function(){return i.a.createElement("nav",{role:"navigation"},i.a.createElement("ul",{className:u.a.navigation},i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/"},"Home")),i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/blog/"},"Blog"))))},p=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props,a=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/",i.a.createElement(o,null,i.a.createElement(m,null),a)},a}(i.a.Component);a.a=p},154:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(138),i=t(145),c=t.n(i),o=t(160),s=t.n(o);a.a=function(e){var a=e.article;return r.a.createElement("div",{className:s.a.preview},r.a.createElement(c.a,{alt:"",fluid:a.heroImage.fluid}),r.a.createElement("h3",{className:s.a.previewTitle},r.a.createElement(l.a,{to:"/blog/"+a.slug},a.title)),r.a.createElement("small",null,a.publishDate),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.description.childMarkdownRemark.html}}),a.tags.map(function(e){return r.a.createElement("p",{className:s.a.tag,key:e},e)}))}},215:function(e,a,t){var n=t(22).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||t(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-83dc0d168394fa3d0e7b.js.map