---
title: MsrpConfigurableProduct
description: README.md contents of the module from the source code
---

# Magento_MsrpConfigurableProduct module

The **Magento_MsrpConfigurableProduct** module provides type and resolver information for the Magento_Msrp module from the ConfigurableProduct module.
Provides implementation of msrp price calculation for Configurable Product.

## Installation

For information about a module installation in Magento 2, see [Enable or disable modules](https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html)

## Structure

`Pricing\` - directory contains implementation of msrp price calculation 
for Grouped Product (`Magento\MsrpGroupedProduct\Pricing\MsrpPriceCalculator` class). 

For information about a typical file structure of a module in Magento 2,
 see [Module file structure](https://developer.adobe.com/commerce/php/development/build/component-file-structure/#module-file-structure).

## Extensibility

 Extension developers can interact with the Magento_Msrp module. For more information about the Magento extension mechanism, see [Magento plug-ins](https://developer.adobe.com/commerce/php/development/components/plugins/).

[The Magento dependency injection mechanism](https://developer.adobe.com/commerce/php/development/components/dependency-injection/) enables you to override the functionality of the Magento_Msrp module.

### Layouts

For more information about a layout in Magento 2, see the [Layout documentation](http://devdocs.magento.com/guides/v2.3/frontend-dev-guide/layouts/layout-overview.html).

### UI components

For information about a UI component in Magento 2, see [Overview of UI components](http://devdocs.magento.com/guides/v2.3/ui_comp_guide/bk-ui_comps.html).

## Additional information

For information about significant changes in patch releases, see [2.4.x Release information](https://devdocs.magento.com/guides/v2.4/release-notes/bk-release-notes.html).
