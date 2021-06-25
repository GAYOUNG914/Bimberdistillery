<template>
  <header id="header">
    <!-- 헤더 영역  -->
    <div class="wrap">
      <div class="row header_row">
        <div class="col_2 header_col">
          <h1 id="top_logo">
            <a href="/"><img src="../assets/img/main_logo.png" alt=""/></a>
            <router-link to="/"></router-link>
          </h1>
        </div>
        <div class="col_8 header_col">
          <nav id="top_nav">
            <ul>
              <li v-for="(list, index) in menuList">
                <router-link :to="list.alink">{{ list.text }}</router-link>
                <ul v-if="index == 0" class="sub_menu">
                  <li v-for="list in companySubmenuList">
                    <router-link :to="list.alink">{{ list.text }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col_2 header_col">
          <div class="login">
            <a href="#" class="klub_login">
              Login
            </a>
            <a href="#"><img src="../assets/img/BIMBER KLUB-07.png" alt=""/></a>
            <a href="#" class="bag">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22 19H2V21H22V19M4 15C4 15.5 4.2 16 4.6 16.4C5 16.8 5.5 17 6 17V6C5.5 6 5 6.2 4.6 6.6C4.2 7 4 7.5 4 8V15M13.5 6H10.5C10.5 5.6 10.6 5.2 10.9 4.9C11.2 4.6 11.5 4.5 12 4.5C12.4 4.5 12.8 4.6 13.1 4.9C13.3 5.2 13.5 5.6 13.5 6M7 6V17H17V6H15C15 5.2 14.7 4.5 14.1 3.9S12.8 3 12 3C11.2 3 10.5 3.3 9.9 3.9C9.3 4.5 9 5.2 9 6H7M18 17C18.5 17 19 16.8 19.4 16.4C19.8 16 20 15.5 20 15V8C20 7.5 19.8 7 19.4 6.6C19 6.2 18.5 6 18 6V17Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      menuList: [
        { text: "our craft", alink: "/ourcraft" },
        { text: "bimber klub", alink: "/bimberklub" },
        { text: "tours", alink: "/tours" },
        { text: "blog", alink: "/blog" },
        { text: "contact", alink: "/contact" }
      ],
      companySubmenuList: [
        { text: "our barley", alink: "/ourbarley" },
        { text: "floormalting", alink: "/floormalting" },
        { text: "fermentaion", alink: "/fermentaion" }
      ]
    };
  }
};
</script>
