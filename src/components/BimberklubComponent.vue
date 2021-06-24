<template>
  <main class="subpage">
    <!-- 컨텐츠 영역 -->
    <div class="container">
      <!-- 왼쪽메뉴 -->
      <aside id="lnb">
        <ul>
          <li class="on">
            <router-link to="/bimberklub">bimberklub</router-link>
          </li>
        </ul>
      </aside>
      <!-- 컨텐츠 본문 -->
      <div class="content">
        <h2 class="sub_title"><span>bimberklub</span></h2>
        <div class="inner">
          <div class="box expand">
            <div class="items">
              <!--상단 영역-->
              <h3 class="title">funiture</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut laboreLorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut laboreLorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut laboreLorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
            <div class="items">
              <!--하단 영역-->
              <img
                src="../assets/img/company/company_img01.jpg"
                alt="company_img01"
              />
            </div>
          </div>
        </div>
        <div class="inner">
          <div class="box expand">
            <div class="items">
              <!--상단영역 영역-->
              <img
                src="../assets/img/company/company_img02.jpg"
                alt="company_img02"
              />
            </div>
            <div class="items">
              <!--하단 영역-->
              <h3 class="title">funiture</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut laboreLorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut laboreLorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut laboreLorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "bimberklub-component",
  data() {
    return {
      msg: "this is bimberklub"
    };
  }
};
</script>
