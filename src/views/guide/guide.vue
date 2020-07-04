<template>
  <div>Loading...</div>
</template>
<script>
export default {
  name: "guide",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {
    if (process && process.env.NODE_ENV === "development") {
      this.$router.push({
        name: "Index",
      });
    } else {
      const mobileDevice = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
      const curUserAgent = navigator.userAgent;
      const isMobile = mobileDevice.filter((item) => curUserAgent.includes(item)).length > 0;
      if (isMobile) {
        this.$router.push({
          name: "Index",
        });
      } else {
        this.$router.push({
          name: "Phone",
        });
      }
    }
  },
};
</script>
