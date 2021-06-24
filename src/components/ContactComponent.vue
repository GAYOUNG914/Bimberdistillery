<template>
  <main class="subpage">
    <!-- 컨텐츠 영역 -->
    <div class="container">
      <!-- 왼쪽메뉴 -->
      <aside id="lnb">
        <ul>
          <li class="on">
            <router-link to="/contact">Location</router-link>
          </li>
        </ul>
      </aside>
      <!-- 컨텐츠 본문 -->
      <div class="content">
        <h2 class="sub_title"><span>Location</span></h2>
        <div class="inner"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "contact-component",
  data() {
    return {
      msg: "this is contact"
    };
  }
};
</script>
