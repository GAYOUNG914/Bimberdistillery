# Bimber Distillery
Webpack환경에서 구축한 Vue.js를 이용한 프로젝트입니다.<br>
router형식으로 링크 전환을 합니다.<br>
Vue.js의 Meterial UI인 Vuetify를 사용하였습니다.<br>
SCSS function으로 만든 grid와(header, footer, main page), css 속성인 grid(sub pages)를 사용해보았습니다.<br>

기존의 사이트의 이미지에 호버효과를 넣고 레이아웃을 약간 변형시켜 좀 더 풍성한 느낌의 사이트로 제작해보았습니다.

## Link
* https://gayoung914.github.io/Bimber/#/
* subpapge
  - https://gayoung914.github.io/Bimber/#/ourcraft
  - https://gayoung914.github.io/Bimber/#/bimberklub
  - https://gayoung914.github.io/Bimber/#/tours
  - https://gayoung914.github.io/Bimber/#/blog

## Tool
* HTML5
* CSS3
* SCSS
* Vue.js
* Vuetify

## Skill
* Header, Footer, Main page<br>
  - **SCSS function Grid**<br>
    👉 변수를 정하고 @mixin에 function을 준 뒤 @import로 function을 불러왔습니다. for function을 이용하여 $count를 1~12까지 반복시켰습니다.
```
  //변수선언
$containerWidth: 100%;
$columWidth: 6.5%;
$gutterWidth: 2%;
// 그리드함수
@mixin col($count) {
  width: ($columWidth * $count) + ($gutterWidth * ($count - 1));
}
// for 구문 적용
@for $i from 1 through 12 {
  .col_#{$i} {
    @include col($i);
  }
}
```
* Header<br>
  - **V-for directive, V-bind directive**<br>
    👉 data는 메서드 형태로 작성하고, data의 값을 오브젝트(key: value)형태로 return 받을 수 있기때문에 v-for 디렉티브는 v-for="(parameter, index) in key"형식으로 사용 가능합니다.<br>
    v-bind 디렉티브는 태그의 속성을 변수화시킬 수 있고 :속성 ="값" 처럼 앞에 콜론만 쓸 수도 있습니다.
```
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
```
## License
* 개인 포트폴리오를 위해 만들어진 사이트입니다.

