import Vue from "vue";
import Router from "vue-router";
import MainComponent from "@/components/MainComponent";
import OurcraftComponent from "@/components/OurcraftComponent";
import BlogComponent from "@/components/BlogComponent";
import BimberklubComponent from "@/components/BimberklubComponent";
import ToursComponent from "@/components/ToursComponent";
import ContactComponent from "@/components/ContactComponent";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main-component",
      component: MainComponent
    },
    {
      path: "/ourcraft",
      name: "ourcraft-component",
      component: OurcraftComponent
    },
    {
      path: "/bimberklub",
      name: "bimberklub-component",
      component: BimberklubComponent
    },
    {
      path: "/tours",
      name: "tours-component",
      component: ToursComponent
    },
    {
      path: "/blog",
      name: "blog-component",
      component: BlogComponent
    },
    {
      path: "/contact",
      name: "contact-component",
      component: ContactComponent
    }
  ]
});
