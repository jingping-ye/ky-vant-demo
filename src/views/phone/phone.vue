<template>
  <div class="phone-mock">
    <div class="phone-mock-iframe" style="width:380px;height:768px;">
      <iframe :src="iframeSrc" frameborder="0" height="768" width="380" scrolling="auto"></iframe>
    </div>
  </div>
</template>
<script>
//  常量声明

//  引入外部资源
export default {
  name: "phoneMock",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      iframeSrc: "",
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    this.iframeSrc = `${window.location.href.split("/phone")[0]}/index`;
    console.log("this.iframeSrc", this.iframeSrc);
  },
  destoryed() {},
};
</script>
<style scoped>
.phone-mock {
  background: #191919;
  width: 100vw;
  height: 100vh;
}
.phone-mock-iframe {
  margin: 0 auto;
  padding-top: 20px;
}
</style>
