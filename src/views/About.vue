<template>
  <div class="index">
    <Page title="about页面" @onClickLeft="onClickLeft" :routerNav="goBack">
      index组件
      <button @click="clickMe">click me!</button>
    </Page>
  </div>
</template>
<script>
//  常量声明
const value = { msg: "Hello World!" };

//  引入外部资源
// import someThing from 'SomeThing';
import Page from "@/components/Page/Page";
export default {
  name: "index",
  mixins: [],
  components: {
    Page,
  },
  props: {},
  data() {
    return {
      //  常量
      value,
      //  状态
      flag: true,
      //  变量
      list: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    clickMe() {
      this.$router.push({
        name: "TestCom",
      });
    },
    onClickLeft() {
      console.log("点击了右侧！");
    },
    goBack() {
      this.$router.go({
        name: "Index",
      });
    },
    test() {
      console.log("Hello World!");
    },
  },
  filters: {},
  created() {},
  mounted() {},
  destoryed() {},
};
</script>
<style scoped>
.index {
}
</style>
