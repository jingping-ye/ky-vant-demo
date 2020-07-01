<template>
  <div class="page">
    <van-nav-bar v-if="showNav" :title="title" fixed @click-left="onClickLeft" @click-right="onClickRight" placeholder>
      <template #left v-if="isNeedLeft">
        <van-icon name="arrow-left" size="18" /><span>{{ leftText }}</span>
      </template>
      <template #right v-if="isNeedRight">
        <van-icon name="service" size="20" class="right-icon" />
        <van-icon name="more-o" size="20" class="right-icon" />
        {{ rightText }}
      </template>
    </van-nav-bar>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>
<script>
//  常量声明
//  引入外部资源
import { NavBar, Icon } from "vant";
export default {
  name: "Page",
  mixins: [],
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
  props: {
    title: {
      type: String,
      default: "默认标题",
    },
    leftText: {
      type: String,
      default: "",
    },
    rightText: {
      type: String,
      default: "",
    },
    showNav: {
      type: Boolean,
      default: true,
    },
    isNeedRight: {
      type: Boolean,
      default: false,
    },
    isNeedLeft: {
      type: Boolean,
      default: true,
    },
    backNav: {
      type: Function,
      default: function() {
        this.$router.go(-1);
      },
    },
  },

  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    onClickLeft() {
      this.backNav();
      this.$emit("onClickLeft");
    },
    onClickRight() {
      this.$emit("onClickRight");
    },
  },
  created() {},
  mounted() {},
  destoryed() {},
};
</script>
<style scoped lang="less">
.page {
  background-color: #f7f8fa;
}
.container {
  height: 100vh;
  font-size: 14px;
}
.right-icon {
  padding-right: 5px;
}
::v-deep .van-nav-bar .van-icon {
  color: #000;
}
::v-deep .van-nav-bar__text {
  color: #000;
}
</style>
