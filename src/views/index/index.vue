<template>
  <div class="index">
    <Page title="index首页">
      index组件
      <button @click="clickMe">click me!</button>
    </Page>
  </div>
</template>
<script>
//  常量声明

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
    return {};
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
