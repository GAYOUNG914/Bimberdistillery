<template>
  <footer id="footer">
    <div class="footer_top">
      <!-- footer 상단 영역 -->
      <div class="wrap">
        <div class="row">
          <div class="col_12">
            <div class="foot_title">LET'S STAY IN TOUCH</div>
            <p class="foot_p">
              Subscribe for news updates, special offers and more
            </p>
          </div>
        </div>
        <div class="row">
          <template>
            <div>
              <v-text-field
                label="Name"
                :rules="rules"
                hide-details="auto"
              ></v-text-field>
              <v-text-field label="E-mail"></v-text-field>
            </div>
          </template>
          <div class="col_4"><a href="#" class="gbtn">Subscribe</a></div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <!-- footer 하단 영역 -->
      <div class="coypyright">
        ⓒcopryright.All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 3) || "Min 3 characters"
    ]
  })
};
</script>
