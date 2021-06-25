// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

//실제사용하는 것
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import OurcraftComponent from "./components/OurcraftComponent";
import BimberklubComponent from "./components/BimberklubComponent";
import ToursComponent from "./components/ToursComponent";
import BlogComponent from "./components/BlogComponent";
import ContactComponent from "./components/ContactComponent";

Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.component("header-component", HeaderComponent);
Vue.component("footer-component", FooterComponent);
Vue.component("ourcraft-component", OurcraftComponent);
Vue.component("bimberklub-component", BimberklubComponent);
Vue.component("tours-component", ToursComponent);
Vue.component("blog-component", BlogComponent);
Vue.component("contact-component", ContactComponent);

const opts = {};

export default new Vuetify(opts);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
