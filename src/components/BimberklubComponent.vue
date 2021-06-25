<template>
  <main class="subpage">
    <!-- 컨텐츠 영역 -->
    <div class="sub_mainbanner sub_mainbanner_bimber"></div>
    <div class="wrap">
      <!-- 컨텐츠 본문 -->
      <div class="content">
        <div class="inner inner_sub1">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <p>
                  &nbsp;&nbsp;JOIN A WHISKY COMMUNITY THAT SHARES YOUR PASSION
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="inner klub_inner">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://static.wixstatic.com/media/3a70cd_1827030413054c29b59469094a98d7ab~mv2.jpg/v1/fill/w_449,h_449,al_c,q_90/3a70cd_1827030413054c29b59469094a98d7ab~mv2.webp"
              height="400px"
            ></v-img>

            <v-card-title>
              Going Global
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text>
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://static.wixstatic.com/media/2d643e_751232a21c6a4af6a6d864522adc455f~mv2.jpg/v1/fill/w_740,h_393,al_c,q_90/2d643e_751232a21c6a4af6a6d864522adc455f~mv2.webp"
              height="400px"
            ></v-img>

            <v-card-title>
              Prtability
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text>
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://static.wixstatic.com/media/2d643e_0f5dfd060bea4fff8fe0d731900c933c~mv2.jpg/v1/fill/w_740,h_493,al_c,q_90/2d643e_0f5dfd060bea4fff8fe0d731900c933c~mv2.webp"
              height="400px"
            ></v-img>

            <v-card-title>
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text>
                Explore
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
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
      msg: "this is bimberklub",
      show: true
    };
  }
};
</script>
