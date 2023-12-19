<script setup>

defineProps({
  age: Number
})

</script>

<template>
  <div class="content">
    <div class="scss-row">
      <div class="global">
        <div class="command">@import</div>
        <div class="value">'head/brain';</div>
      </div>
    </div>
    <div class="scss-row">
      <div class="global">
        <div class="command">@import</div>
        <div class="value">git, yarn, npm, vite, webpack, gulp;</div>
      </div>
    </div>
    <div class="scss-row">
      <div class="global">
        <div class="command">@import</div>
        <div class="value">'humility';</div>
      </div>
    </div>
    <hr class="divider" />
    <div class="scss-row">
      <div class="selector">
        #objective <i class="brace">{</i>
      </div>
      <div class="declaration">
        <div class="property">employment<i class="colon">:</i></div>
        <div class="property-value">'remote job'<i class="comma">,</i> full-time<i class="comma">,</i> part-time<i class="comma">,</i> freelance<i class="semicolon">;</i></div>
      </div>
      <i class="brace">}</i>
    </div>
    <div class="scss-row">
      <div class="selector">
        #skills <i class="brace">{</i>
      </div>
      <div class="declaration">
        <div class="property">language<i class="colon">:</i></div>
        <div class="property-value">HTML/HAML<i class="comma">,</i> SASS/SCSS<i class="comma">,</i> JS<i class="semicolon">;</i></div>
      </div>
      <div class="declaration">
        <div class="property">software<i class="colon">:</i></div>
        <div class="property-value">
          Ubuntu Linux<i class="comma">,</i>
          WebStorm<i class="comma">,</i>
          Photoshop/Figma<i class="comma">,</i>&nbsp;
          <i class="semicolon">etc.;</i></div>
      </div>
      <div class="declaration">
        <div class="property">frameworks<i class="colon">:</i></div>
        <div class="property-value">
          vue.js<i class="comma">,</i>
          react native<i class="comma">,</i>
          vuetify<i class="comma">,</i>
          bulma<i class="comma">,</i>
          bootstrap<i class="semicolon">;</i>
        </div>
      </div>
      <i class="brace">}</i>
    </div>
    <div class="scss-row">
      <div class="selector">
        #experience <i class="brace">{</i>
      </div>
      <div class="declaration">
        <div class="selector">
          .fourth <i class="brace">{</i>
        </div>
        <div class="declaration">
          <div class="property">year<i class="colon">:</i></div>
          <div class="property-value">
            <div class="num">06.2019-08.2023</div>
            <i class="semicolon">;</i></div>
        </div>
        <div class="declaration">
          <div class="property">employer<i class="colon">:</i></div>
          <div class="property-value">
            <a href="https://Chrono.tech/" target="_blank" rel="nofollow">Chrono.tech</a>
            <i class="semicolon">;</i></div>
        </div>
        <div class="declaration">
          <div class="property">position<i class="colon">:</i></div>
          <div class="property-value">
            <div class="command">@include</div>&nbsp;
            <div class="property">position</div><i class="comma">(</i>
            <div class="var">$frontend developer</div>
            <i class="comma">)</i>
            <i class="semicolon">;</i></div>
        </div>
        <div class="declaration two-row">
          <div class="property">job-responsibilities<i class="colon">:</i></div>
          <div class="property-value">
            Frontend for the timex.io crypto exchange and for the management system of this exchange<br />
            Development of a mobile application for the exchange using React Native
            <i class="semicolon">;</i></div>
        </div>
        <i class="brace">}</i>
      </div>

      <div class="declaration">
        <div class="selector">
          .third <i class="brace">{</i>
        </div>
        <div class="declaration">
          <div class="property">year<i class="colon">:</i></div>
          <div class="property-value">
            <div class="num">07.2018-06.2019</div>
            <i class="semicolon">;</i></div>
        </div>
        <div class="declaration">
          <div class="property">employer<i class="colon">:</i></div>
          <div class="property-value">
            P&B Stratwork
            <i class="semicolon">;</i></div>
        </div>
        <div class="declaration">
          <div class="property">position<i class="colon">:</i></div>
          <div class="property-value">
            <div class="command">@include</div>&nbsp;
            <div class="property">position</div><i class="comma">(</i>
            <div class="var">$frontend developer</div>
            <i class="comma">)</i>
            <i class="semicolon">;</i></div>
        </div>
        <i class="brace">}</i>
      </div>


      <div class="declaration">
        <div class="selector">
          .second <i class="brace">{</i>
        </div>
        <div class="declaration">
          <div class="property">year<i class="colon">:</i></div>
          <div class="property-value">
            <div class="num">07.2017-12.2017</div>
            <i class="semicolon">;</i></div>
        </div>
        <div class="declaration">
          <div class="property">employer<i class="colon">:</i></div>
          <div class="property-value">
            D-Element Internet Agency
            <i class="semicolon">;</i></div>
        </div>
        <div class="declaration">
          <div class="property">position<i class="colon">:</i></div>
          <div class="property-value">
            <div class="command">@include</div>&nbsp;
            <div class="property">position</div><i class="comma">(</i>
            <div class="var">$frontend developer</div>
            <i class="comma">)</i>
            <i class="semicolon">;</i></div>
        </div>
        <i class="brace">}</i>
      </div>

      <div class="declaration">
        <div class="selector">
          .first <i class="brace">{</i>
        </div>
        <div class="declaration">
          <div class="property">year<i class="colon">:</i></div>
          <div class="property-value">
            <div class="num">2016-2017</div>
            <i class="semicolon">;</i></div>
        </div>
        <div class="declaration">
          <div class="property">employer<i class="colon">:</i></div>
          <div class="property-value">
            <a href="https://radar-online.ru/" target="_blank" rel="nofollow">Radar Advertising</a>
            <i class="semicolon">;</i></div>
        </div>
        <div class="declaration">
          <div class="property">position<i class="colon">:</i></div>
          <div class="property-value">
            <div class="command">@include</div>&nbsp;
            <div class="property">position</div><i class="comma">(</i>
            <div class="var">$frontend developer</div>
            <i class="comma">)</i>
            <i class="semicolon">;</i></div>
        </div>
        <i class="brace">}</i>
      </div>

      <div class="declaration">
        <div class="selector">
          .zero <i class="brace">{</i>
        </div>
        <div class="declaration">
          <div class="property">year<i class="colon">:</i></div>
          <div class="property-value">
            <div class="num">2005-2016</div>
            <i class="semicolon">;</i></div>
        </div>
        <div class="declaration">
          <div class="property">employer<i class="colon">:</i></div>
          <div class="property-value">
            several companies and studios involved in website development
            <i class="semicolon">;</i></div>
        </div>
        <div class="declaration">
          <div class="property">position<i class="colon">:</i></div>
          <div class="property-value">
            <div class="command">@include</div>&nbsp;
            <div class="property">position</div><i class="comma">(</i>
            <div class="var">$content-manager</div><i class="comma">,</i>
            <div class="var">$designer</div><i class="comma">,</i>
            <div class="var">$xhtml/css coder</div><i class="comma">,</i>
            <div class="var">$frontend developer</div>
            <i class="comma">)</i>
            <i class="semicolon">;</i></div>
        </div>
        <i class="brace">}</i>
      </div>
      <i class="brace">}</i>
    </div>

    <div class="scss-row">
      <div class="selector">
        #education <i class="brace">{</i>
      </div>
      <div class="declaration">
        <div class="property">college<i class="colon">:</i></div>
        <div class="property-value">komitent<i class="semicolon">;</i></div>
      </div>
      <div class="declaration">
        <div class="property">specialty<i class="colon">:</i></div>
        <div class="property-value">
          software development and automated systems
          <i class="semicolon">;</i></div>
      </div>
      <i class="brace">}</i>
    </div>

    <div class="scss-row">
      <div class="selector">
        #contacts <i class="brace">{</i>
      </div>
      <div class="declaration">
        <div class="property">name<i class="colon">:</i></div>
        <div class="property-value">'Vladimir Glushkov'<i class="semicolon">;</i></div>
      </div>
      <div class="declaration">
        <div class="property">age<i class="colon">:</i></div>
        <div class="property-value">
          {{ age }} years
          <i class="semicolon">;</i></div>
      </div>
      <div class="declaration">
        <div class="property">phone-number<i class="colon">:</i></div>
        <div class="property-value">
          <div class="num">8.906.863.50.88</div>
          <i class="semicolon">;</i></div>
      </div>
      <div class="declaration">
        <div class="property">email<i class="colon">:</i></div>
        <div class="property-value">
          <a href="mailto:xhtmlblog@mail.com" target="_blank">xhtmlblog@mail.com</a><i class="comma">,</i>
          <a href="mailto:fenrirheimr@mail.com" target="_blank">fenrirheimr@mail.com</a><i class="semicolon">;</i></div>
      </div>
      <i class="brace">}</i>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  @include scrollable(#d16daa, transparent);
  @include font-style($font-size: 1vw, $font-weight: 300, $line-height: 120%, $color: #F8F8F2);
  padding: 30px;
  .divider {
    border: none;
    margin: 20px 0;
  }
  .scss-row {
    @include flex(row, flex-start, center);
    flex-wrap: wrap;
    margin-bottom: 1.5vh;
    & > .selector {
      margin-bottom: 10px;
    }
    .brace {
      font-style: normal;
      color: #F8F8F2;
    }
    .colon {
      font-style: normal;
      color: #FF79C6;
    }
    .comma {
      margin-right: 5px;
    }
    .comma,
    .semicolon {
      font-style: normal;
      color: #F8F8F2;
    }
    .global {
      @include flex(row, flex-start, center);
      .value {
        @include font-style($font-size: 1vw, $font-weight: 400, $line-height: 120%, $color: #F1FA8C);
        margin-left: 10px;
      }
    }
    .command {
      @include font-style($font-size: 1vw, $font-weight: 400, $line-height: 120%, $color: #FF79C6);
      & + .property {
        font-style: normal !important;
      }
    }
    .selector {
      @include font-style($font-size: 1vw, $font-weight: 400, $line-height: 120%, $color: #50FA78);
      width: 100%;
    }
    .declaration {
      @include flex(row, flex-start, center);
      margin-left: 15px;
      width: 100%;
      margin-bottom: 10px;
      &:last-of-type {
        margin-bottom: 0;
      }
      flex-wrap: wrap;
      .property {
        @include font-style($font-size: 1vw, $font-weight: 400, $line-height: 120%, $color: #8BE9FD);
        font-style: italic;
      }
      .property-value {
        @include flex(row, flex-start, center);
        @include font-style($font-size: 1vw, $font-weight: 400, $line-height: 120%, $color: #F1FA8C);
        margin-left: 10px;
        .num {
          color: #9580FF;
        }
        .text {
          color: #F1FA8C;
        }
        a {
          color: #F1FA8C;
        }
      }
      & > .selector {
        margin-left: 15px;
      }
      & > .declaration {
        margin-left: 30px;
        align-items: flex-start;
        &.two-row {
          .property-value {
            display: block;
          }
        }
      }
      & > .brace {
        margin-left: 15px;
      }
      .var {
        @include font-style($font-size: 1vw, $font-weight: 400, $line-height: 120%, $color: #FFB86C);
      }
    }
  }
}
</style>
