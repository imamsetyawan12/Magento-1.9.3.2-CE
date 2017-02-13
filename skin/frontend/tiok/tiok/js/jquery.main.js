/*
    JQuery project main widget.
 */

(function ($) {
    'use strict';
    $.widget('icube.main', {

        _create: function () {
            this.initAllPages();
            this.initHomePage();
            this.initCategoryPage();
            this.initProductPage();
            this.initSearchPage();
            this.initShoppingCartPage();
            this.initCmsPage();
        },

        initAllPages: function() {
        },

        initHomePage: function() {

            if ($('body.cms-index-index').length) {
            }
        },

        initCategoryPage: function() {

            if ($('body.catalog-category-view').length) {
            }
        },

        initProductPage: function() {

            if ($('body.catalog-product-view').length) {
            }
        },

        initSearchPage: function() {

            if ($('body.catalogsearch-result-index, body.wordpress-search-index').length) {
            }
        },

        initShoppingCartPage: function() {

            if ($('body.checkout-cart-index').length) {
            }
        },

        initCmsPage: function() {

            if ($('body.cms-page-view').length) {
            }
        }
    });
}(jQuery));