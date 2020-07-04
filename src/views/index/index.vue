<template>
  <div class="index">
    <StatusTip status="success" @onClickOpt="onClickOpt" />
  </div>
</template>
<script>
//  常量声明

//  引入外部资源
// import someThing from 'SomeThing';
import Page from "@/components/Page/Page";
import RangeSelector from "@/components/RangeSelector/RangeSelector";
import StatusTip from "@/components/StatusTip/StatusTip";
export default {
  name: "index",
  mixins: [],
  components: {
    Page,
    RangeSelector,
    StatusTip,
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
    changeSelector(value) {
      console.log("value", value);
    },
    onClickOpt() {
      this.$router.push({
        name: "Phone",
      });
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
