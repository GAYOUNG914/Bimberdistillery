<template>
  <main class="subpage">
    <!-- 컨텐츠 영역 -->
    <div class="container">
      <!-- 왼쪽메뉴 -->
      <aside id="lnb">
        <ul>
          <li class="on">
            <router-link to="/blog">Blog</router-link>
          </li>
        </ul>
      </aside>
      <!-- 컨텐츠 본문 -->
      <div class="content">
        <h2 class="sub_title"><span>Blog</span></h2>
        <div class="inner">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Code</th>
                <th>Company</th>
                <th>Price</th>
                <th>Change</th>
                <th>Change %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AAC</td>
                <td>AUSTAIAN COMPANY</td>
                <td>$1.38</td>
                <td>2.01</td>
                <td>-0.36</td>
              </tr>
              <tr>
                <td>AAC</td>
                <td>AUSTAIAN COMPANY</td>
                <td>$1.38</td>
                <td>2.01</td>
                <td>-0.36</td>
              </tr>
              <tr>
                <td>AAC</td>
                <td>AUSTAIAN COMPANY</td>
                <td>$1.38</td>
                <td>2.01</td>
                <td>-0.36</td>
              </tr>
              <tr>
                <td>AAC</td>
                <td>AUSTAIAN COMPANY</td>
                <td>$1.38</td>
                <td>2.01</td>
                <td>-0.36</td>
              </tr>
              <tr>
                <td>AAC</td>
                <td>AUSTAIAN COMPANY</td>
                <td>$1.38</td>
                <td>2.01</td>
                <td>-0.36</td>
              </tr>
              <tr>
                <td>AAC</td>
                <td>AUSTAIAN COMPANY</td>
                <td>$1.38</td>
                <td>2.01</td>
                <td>-0.36</td>
              </tr>
              <tr>
                <td>AAC</td>
                <td>AUSTAIAN COMPANY</td>
                <td>$1.38</td>
                <td>2.01</td>
                <td>-0.36</td>
              </tr>
              <tr>
                <td>AAC</td>
                <td>AUSTAIAN COMPANY</td>
                <td>$1.38</td>
                <td>2.01</td>
                <td>-0.36</td>
              </tr>
            </tbody>
          </table>
          <a href="#" class="gbtn">write</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "blog-component",
  data() {
    return {
      msg: "this is blog"
    };
  }
};
</script>
