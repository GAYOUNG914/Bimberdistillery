// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

//실제사용하는 것
import $ from "jquery";
import jquery from "./assets/js/jquery-3.6.0";
import commonJs from "./assets/js/common";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import OurcraftComponent from "./components/OurcraftComponent";
import BimberklubComponent from "./components/BimberklubComponent";
import ToursComponent from "./components/ToursComponent";
import BlogComponent from "./components/BlogComponent";
import ContactComponent from "./components/ContactComponent";

Vue.config.productionTip = false;
Vue.component("header-component", HeaderComponent);
Vue.component("footer-component", FooterComponent);
Vue.component("ourcraft-component", OurcraftComponent);
Vue.component("bimberklub-component", BimberklubComponent);
Vue.component("tours-component", ToursComponent);
Vue.component("blog-component", BlogComponent);
Vue.component("contact-component", ContactComponent);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  $,
  jquery,
  commonJs,
  router,
  components: { App },
  template: "<App/>"
});
