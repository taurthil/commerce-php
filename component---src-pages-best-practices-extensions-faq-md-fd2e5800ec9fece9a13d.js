"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[14522],{19072:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return c}});var a=n(87462),i=n(63366),o=(n(15007),n(64983)),r=n(91515),m=["components"],d={},p={_frontmatter:d},l=r.Z;function c(e){var t=e.components,n=(0,i.Z)(e,m);return(0,o.mdx)(l,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"coding-faq"},"Coding FAQ"),(0,o.mdx)("p",null,"This page is a compilation of frequently asked coding questions by the Magento Open Source Community."),(0,o.mdx)("h2",{id:"what-do-i-need-to-know-to-work-with-the-framework"},"What do I need to know to work with the framework?"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)"},"SOLID principles")," - The essential principles needed to create maintainable and extendable code."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"http://php.net/"},"PHP")," - This is the programming language used for developing application code."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/HTML"},"HTML"),", ",(0,o.mdx)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cascading_Style_Sheets"},"CSS"),", and ",(0,o.mdx)("a",{parentName:"li",href:"https://www.javascript.com/"},"JavaScript")," - Languages used for ",(0,o.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/frontend-core/guide/"},"frontend development"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../architecture/basics/index.md"},"Architecture basics overview")," - Developers should be familiar with the architectural concepts, such as the ",(0,o.mdx)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"},"Model-View-Controller")," pattern and the ",(0,o.mdx)("a",{parentName:"li",href:"http://martinfowler.com/bliki/CQRS.html"},"Command Query Responsibility Segregation")," principle."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../../development/components/dependency-injection.md"},"Dependency Injection")," - An important ",(0,o.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/design-pattern"},"design pattern")," used to handle dependencies across classes and modules.")),(0,o.mdx)("h2",{id:"how-can-my-extension-distinguish-between-the-magento-open-source-and-the-adobe-commerce"},"How can my extension distinguish between the Magento Open Source and the Adobe Commerce?"),(0,o.mdx)("p",null,"The correct edition can be obtained through ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\App\\ProductMetadataInterface::getEdition"),"."),(0,o.mdx)("p",null,"In Magento Open Source that interface maps to the concrete implementation ",(0,o.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\AppInterface\\ProductMetadata"),".\nHowever, in Adobe Commerce, the Commerce ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," will override that mapping and the interface will be implemented by ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Enterprise\\Model\\ProductMetadata"),"."),(0,o.mdx)("p",null,"Just relying on the interface through ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/dependency-injection"},"dependency injection"),' will get you the right class, and calling "getEdition" will return the right answer.'),(0,o.mdx)("h2",{id:"how-do-i-configure-my-module-so-that-it-appears-in-a-specific-place-on-the-admin"},"How do I configure my module so that it appears in a specific place on the Admin?"),(0,o.mdx)("p",null,"Use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Module Directory>/etc/adminhtml/menu.xml")," file to configure from where on the ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/admin"},"Admin")," your ",(0,o.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/extension"},"extension")," is accessible."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-best-practices-extensions-faq-md-fd2e5800ec9fece9a13d.js.map