(i=>{window.qodeQuickViewForWooCommerce={},qodeQuickViewForWooCommerce.shortcodes={},qodeQuickViewForWooCommerce.body=i("body"),qodeQuickViewForWooCommerce.html=i("html"),qodeQuickViewForWooCommerce.windowWidth=i(window).width(),qodeQuickViewForWooCommerce.windowHeight=i(window).height(),qodeQuickViewForWooCommerce.scroll=0,i(document).ready(function(){qodeQuickViewForWooCommerce.scroll=i(window).scrollTop()}),i(window).resize(function(){qodeQuickViewForWooCommerce.windowWidth=i(window).width(),qodeQuickViewForWooCommerce.windowHeight=i(window).height()}),i(window).scroll(function(){qodeQuickViewForWooCommerce.scroll=i(window).scrollTop()}),i(window).on("load",function(){}),qodeQuickViewForWooCommerce.qodeQuickViewForWooCommerceAppear={init:function(){this.holder=i(".qqvfw--has-appear:not(.qwfw--appeared)"),this.holder.length&&this.holder.each(function(){var e=i(this);qodeQuickViewForWooCommerce.qodeQuickViewForWooCommerceIsInViewport.check(e,function(){qodeQuickViewForWooCommerce.qodeQuickViewForWooCommerceWaitForImages.check(e,function(){e.addClass("qqvfw--appeared")})})})}},qodeQuickViewForWooCommerce.qodeQuickViewForWooCommerceIsInViewport={check:function(o,i,t,n){var e,r;o.length&&(e=void 0!==o.data("viewport-offset")?o.data("viewport-offset"):.15,(r=new IntersectionObserver(function(e){!0===e[0].isIntersecting?(i.call(o),!1!==t&&r.disconnect()):n&&!1===t&&n.call(o)},{threshold:[e]})).observe(o[0]))}},qodeQuickViewForWooCommerce.qodeQuickViewForWooCommerceWaitForImages={check:function(e,o){if(e.length){var i=e.find("img"),t=i.length;if(i.length)for(var n=0,r=0;r<t;r++){var c,d=i[r];d.complete?++n===i.length&&o.call(e):((c=new Image).addEventListener("load",function(){if(++n===i.length)return o.call(e),!1},!1),c.src=d.src)}else o.call(e)}}};var t={disable:function(){window.addEventListener&&window.addEventListener("wheel",t.preventDefaultValue,{passive:!1}),document.onkeydown=t.keyDown},enable:function(){window.removeEventListener&&window.removeEventListener("wheel",t.preventDefaultValue,{passive:!1}),window.onmousewheel=document.onmousewheel=document.onkeydown=null},preventDefaultValue:function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1},keyDown:function(e){for(var o=[37,38,39,40],i=o.length;i--;)if(e.keyCode===o[i])return void t.preventDefaultValue(e)}},o=(qodeQuickViewForWooCommerce.qodeQuickViewForWooCommerceScroll=t,{init:function(e){e.length&&o.initScroll(e)},initScroll:function(e){var o=new PerfectScrollbar(e[0],{wheelSpeed:.6,suppressScrollX:!0});o.element.classList.add("qqvfw-ps"),i(window).resize(function(){o.update()})}});qodeQuickViewForWooCommerce.qodeQuickViewForWooCommercePerfectScrollbar=o})(jQuery),(s=>{var w={init:function(e){e.length&&w.setEventsAction(e)},setEventsAction:function(o){s(document.body).on("qode_quick_view_for_woocommerce_trigger_quick_view",function(e,o){w.showQuickView(o)}),o.find(".qqvfw-m-close").on("click",function(e){e.preventDefault(),w.hideQuickView(o)})},showQuickView:function(e){e.hasClass("qqvfw--opened")||(e.addClass("qqvfw--opened"),e.is("#qode-quick-view-for-woocommerce-drop"))||(qodeQuickViewForWooCommerce.body=qodeQuickViewForWooCommerce.body.length?qodeQuickViewForWooCommerce.body:s("body"),qodeQuickViewForWooCommerce.body.addClass("qqvfw-quick-view--opened"))},hideQuickView:function(e){e.hasClass("qqvfw--opened")&&(e.removeClass("qqvfw--opened"),e.is("#qode-quick-view-for-woocommerce-drop")||(qodeQuickViewForWooCommerce.body=qodeQuickViewForWooCommerce.body.length?qodeQuickViewForWooCommerce.body:s("body"),qodeQuickViewForWooCommerce.body.removeClass("qqvfw-quick-view--opened")),w.cleanProductContent(e))},addItem:function(o,i){var t=o.find(".qqvfw-m-product"),n=i.parents(".product"),e=parseInt(i.data("item-id"),10),r=s(".qqvfw-hidden-type"),r=parseInt(r.data("quick-view-page-id"),10),c=0,d=0,a=1024<window.innerWidth?i.data("quick-view-type"):i.data("quick-view-type-mobile"),u=["simple","variable","variation","grouped"];n.length&&n.prev().hasClass("product")&&(c=parseInt(n.prev().find(".qqvfw-quick-view-button").data("item-id"),10)),n.length&&n.next().hasClass("product")&&(d=parseInt(n.next().find(".qqvfw-quick-view-button").data("item-id"),10)),s.ajax({type:"GET",url:qodeQuickViewForWooCommerceGlobal.restUrl+qodeQuickViewForWooCommerceGlobal.quickViewRestRoute,data:{item_id:e,page_id:r,prev_item_id:c,next_item_id:d,quick_view_type:a,route:qodeQuickViewForWooCommerceGlobal.quickViewRestRouteName,security_token:qodeQuickViewForWooCommerceGlobal.restNonce},beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",qodeQuickViewForWooCommerceGlobal.restNonce),i.addClass("qqvfw--loading")},complete:function(){o.removeClass("qqvfw--loading"),i.removeClass("qqvfw--loading")},success:function(e){"success"===e.status&&""!==e.data.html?(w.updateProductContent(t,e.data.html),w.setNavigationEvents(o,n.parent(),".qqvfw-m-nav",".qqvfw-m-nav-item"),w.setSuggestedProductsEvents(o,n.parent(),".qqvfw-m-suggested-products",".qqvfw-e-quick-view-link"),s(document.body).trigger("qode_quick_view_for_woocommerce_trigger_quick_view",[o,i]),w.reInitProductVariationScripts(t),w.reInitProductGalleryScripts(t),w.initPerfectScrollbar(o),w.initProductTabs(o),w.initSuggestedProductsSlider(o),w.includeAjaxAddToCart(o,e,u),o.is("#qode-quick-view-for-woocommerce-drop")||w.calculateScrollContentBottomSpace(o)):"error"===e.status&&console.log(e.message)}})},updateProductContent:function(e,o){e.empty().html(o)},cleanProductContent:function(e){e.find(".qqvfw-m-product").empty()},setNavigationEvents:function(o,i,e,t){e=o.find(e);e.length&&i.length&&e.find(t).off().on("click",function(e){e.preventDefault(),o.addClass("qqvfw--loading");e=i.find('.qqvfw-quick-view-button[data-item-id="'+parseInt(s(this).data("item-id"),10)+'"]');e.length?e.trigger("click"):(alert(qodeQuickViewForWooCommerceGlobal.protectedDataMessage),o.removeClass("qqvfw--loading"))})},setSuggestedProductsEvents:function(e,o,i,t){w.setNavigationEvents(e,o,i,t)},reInitProductVariationScripts:function(e){var o=e.find(".variations_form"),i=e.find(".product_meta .stock_wrapper");o.each(function(){s(this).wc_variation_form(),s(this).on("hide_variation",function(e){s(this).find(".single_add_to_cart_button").hasClass("wc-variation-selection-needed")&&i.hide()}),s(this).on("show_variation",function(e,o){o=o.availability_html||'<p class="stock in-stock">'+qodeQuickViewForWooCommerceGlobal.inStockText+"</p>";i.show(),i.find(".stock").remove(),i.append(o)})}),o.trigger("check_variations"),o.trigger("reset_image")},reInitProductGalleryScripts:function(e){void 0!==s.fn.wc_product_gallery&&e.find(".woocommerce-product-gallery").each(function(){s(this).wc_product_gallery()})},setVariationsAttributes:function(e){var o,e=e.find(".variations_form");if(e.length)return o={},e.find("select[name^=attribute]").each(function(){var e=s(this).attr("name");o[e]=s(this).val()}),o},validateVariationsAttributes:function(e){return!e.is(".disabled")||!e.is(".wc-variation-is-unavailable")&&!e.is(".wc-variation-selection-needed")},setGroupedOptions:function(e){var o,e=e.find(".grouped_form");if(e.length)return o={},e.find(".product").each(function(){var e=s(this).attr("id");o[e]=s(this).find("input").val()}),o},validateGroupedOptions:function(e){e=w.setGroupedOptions(e);if(void 0!==e&&Object.values(e).every(e=>""===e||"0"===e))return!1;return!0},includeAjaxAddToCart:function(e,o,i){e.hasClass("qqvfw-ajax-add-to-cart--enabled")&&0<=s.inArray(o.data.product_type,i)&&w.ajaxAddToCart(e)},ajaxAddToCart:function(r){r.find(".single_add_to_cart_button").on("click",function(e){e.preventDefault();var o=s(this),e=o.closest("form.cart"),i=o.val(),t=e.find("input[name=quantity]").val()||1,i=e.find("input[name=add-to-cart]").val()||i,n=e.find("input[name=variation_id]").val()||0,e=e.find("#qode-quick-view-for-woocommerce-add-to-cart-nonce"),i={action:"qode_quick_view_for_woocommerce_premium_ajax_add_to_cart",product_id:i,product_sku:"",quantity:t,variation_id:n,variations:w.setVariationsAttributes(r),options:w.setGroupedOptions(r),nonce_value:e.val()};if(w.validateVariationsAttributes(o)){if(w.validateGroupedOptions(r))return s(document.body).trigger("adding_to_cart",[o,i]),s.ajax({type:"POST",url:wc_add_to_cart_params.ajax_url,data:i,beforeSend:function(){o.removeClass("added").addClass("loading")},complete:function(){o.addClass("added").removeClass("loading")},success:function(e){e.error&&e.product_url?window.location=e.product_url:(s(document.body).trigger("added_to_cart",[e.fragments,e.cart_hash,o]),w.autoCloseAfterAjaxAddToCart(r),w.redirectToCheckoutAfterAjaxAddToCart(r))}}),!1;window.alert(qodeQuickViewForWooCommerceGlobal.emptyQuantityText)}})},autoCloseAfterAjaxAddToCart:function(e){e.is(".qqvfw-auto-close--enabled")&&setTimeout(function(){w.hideQuickView(e)},1e3)},redirectToCheckoutAfterAjaxAddToCart:function(e){e.is(".qqvfw-redirect-to-checkout--enabled")&&(window.location=qodeQuickViewForWooCommerceGlobal.checkoutUrl)},centerSuggestedProductsSliderArrows:function(e){var o,i=e.find(".flex-prev"),t=e.find(".flex-next");i.length&&t.length&&(e=e.find(".qqvfw-e-suggested-product-image"),o=0,e.length)&&(e.each(function(){s(this).outerHeight()>o&&(o=s(this).outerHeight())}),i.css("top",o/2),t.css("top",o/2))},initSuggestedProductsSlider:function(e){var o,i,e=e.find(".qqvfw-m-suggested-products");e.length&&(o=e.find(".flexslider"),i=680<window.innerWidth?3:2,e=e.width()/i-7.5,o.length)&&o.flexslider({animation:"slide",animationLoop:!1,slideshow:!1,controlNav:!1,prevText:qodeQuickViewForWooCommerceGlobal.arrowLeft,nextText:qodeQuickViewForWooCommerceGlobal.arrowRight,itemWidth:e,itemMargin:15,start:function(){w.centerSuggestedProductsSliderArrows(o)}})},calculateScrollContentBottomSpace:function(e){var o=e.find(".summary"),i=e.find(".qqvfw-m-product-view-details"),i=i.length?i.outerHeight():0,i=0<i?i+(i/2+18):parseInt(o.css("padding-bottom"),10),t=qodeQuickViewForWooCommerce.body.find("#wpadminbar"),e=e.is(".qqvfw-type--sidebar")&&t.length?t.outerHeight():0;o.css("padding-bottom",e+i)},initPerfectScrollbar:function(e){e.hasClass("qqvfw-type--drop")||(e=e.find(e.is("#qode-quick-view-for-woocommerce-sidebar")||e.is("#qode-quick-view-for-woocommerce-pop-up")&&window.innerWidth<=880?".qqvfw-m-product > .product":".summary"),"object"==typeof qodeQuickViewForWooCommerce.qodeQuickViewForWooCommercePerfectScrollbar&&qodeQuickViewForWooCommerce.qodeQuickViewForWooCommercePerfectScrollbar.init(e))},initProductTabs:function(e){var o=e.find(".woocommerce-tabs"),e=e.find(".qqvfw-m-accordion-tabs");e.length&&e.accordion({active:!1,collapsible:!0,heightStyle:"content"}),o.length&&o.find("li").first().addClass("active")},attachQuickView:function(e){var o=s(".qqvfw-hidden-type"),i=window.innerWidth<=1024,t=o.data("quick-view-type"),o=o.data("quick-view-type-mobile");return i&&o===e||!i&&t===e}};qodeQuickViewForWooCommerce.qqvfwInitQuickView=w})(jQuery),(c=>{c(document).on("qode_quick_view_for_woocommerce_trigger_quick_view",function(e,o){t.reInit(o)});var t={init:function(o){var e=".qqvfw-quick-view-button",i=c(e);o.length&&(t.addItemOnCart(o),i.length&&c(document).on("click",e,function(e){e.preventDefault(),c(this).is(".qqvfw--loading")||qodeQuickViewForWooCommerce.qqvfwInitQuickView.addItem(o,c(this))}),qodeQuickViewForWooCommerce.qqvfwInitQuickView.init(o))},reInit:function(e){var o=e.find(".qqvfw-quick-view-button");o.length&&this.addItem(e,o)},addItem:function(o,i){i.length&&c(i).off().on("click",function(e){e.preventDefault(),i.is(".qqvfw--loading")||qodeQuickViewForWooCommerce.qqvfwInitQuickView.addItem(o,c(this))})},addItemOnCart:function(n){var r=c('<span class="qqvfw-m-spinner"><svg class="qqvfw-svg--spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path></svg></span>');c(document).on("click touch",'[href*="#qqvfw-"]',function(e){var o,i=c(this).attr("href"),i=/#qqvfw-([0-9]+)/g.exec(i),t=c(this).find(r);void 0!==i[1]&&(o=n.is("#qode-quick-view-for-woocommerce-sidebar")?"sidebar":"pop-up",c(this).addClass("qqvfw-quick-view-button"),c(this).attr("data-item-id",parseInt(i[1],10)),c(this).attr("data-quick-view-type",o),t.length||c(this).append(r),qodeQuickViewForWooCommerce.qqvfwInitQuickView.addItem(n,c(this)),e.preventDefault())})}};qodeQuickViewForWooCommerce.qqvfwInitQuickViewButton=t})(jQuery),(i=>{i(document).ready(function(){o.init()}),i(document).on("qode_wishlist_for_woocommerce_trigger_wishlist_table_updated",function(){o.init()});var o={init:function(){var e=i("#qode-quick-view-for-woocommerce-pop-up");e.length&&(qodeQuickViewForWooCommerce.qqvfwInitQuickView.attachQuickView("pop-up")?(qodeQuickViewForWooCommerce.qqvfwInitQuickViewButton.init(e),o.setEventsAction(e)):e.detach())},setEventsAction:function(o){o.children(".qqvfw-m-overlay").on("click",function(){qodeQuickViewForWooCommerce.qqvfwInitQuickView.hideQuickView(o)}),i(window).on("keyup",function(e){27===e.keyCode&&qodeQuickViewForWooCommerce.qqvfwInitQuickView.hideQuickView(o)})}}})(jQuery);