<template>
  <div class="index">
    <Page title="index首页" @onClickLeft="goBack">
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
        name: "About",
      });
    },
    goBack() {
      this.$router.go(-1);
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
