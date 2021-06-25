<template
  ><div>
    <main class="subpage">
      <!-- 컨텐츠 영역 -->
      <div class="container">
        <!-- 컨텐츠 본문 -->
        <div class="content">
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
            <div class="text-center">
              <v-pagination v-model="page" :length="4" circle></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "blog-component",
  data() {
    return {
      msg: "this is blog",
      page: 1
    };
  }
};
</script>
