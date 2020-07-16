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
    /**
     * HTTP REQUEST
     * 请求列表
     */
    getAddressListRequest() {
      this.$http
        .get(`/api/address/list`, {
          params: {
            pageNum: 1,
            pageSize: 10,
            searchStr: "",
          },
        })
        .then((res) => {
          console.log("res===", res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /**
     * HTTP REQUEST
     * 新增地址
     */
    addAddressListRequest() {
      this.$http
        .post(`/api/address/add`, {
          phone: "13412341235",
          address: "xx地址",
          detailAddress: "xx地址",
          isDefault: 0,
          name: "张先生",
        })
        .then((res) => {
          this.getAddressListRequest();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /**
     * HTTP REQUEST
     * 删除地址
     */
    deleteAddressRequest() {
      this.$http
        .delete(`/api/address/delete`, {
          data: {
            id: "ADDRESS_2020_01",
          },
        })
        .then((res) => {
          this.getAddressListRequest();
        });
    },
    /**
     * HTTP REQUEST
     * 更新地址
     */
    updateAddressRequest() {
      this.$http
        .put(`/api/address/update`, {
          id: "ADDRESS_2020_01",
          name: "徐小姐的猫",
          address: "上海市浦东新区",
          detailAddress: "上海市浦东新区张江镇亮景路210号金仕达大厦",
          isDefault: 0,
          phone: "13412341234",
        })
        .then((res) => {
          this.getAddressListRequest();
        });
    },
  },
  filters: {},
  created() {},
  mounted() {
    this.getAddressListRequest();
  },
  destoryed() {},
};
</script>
<style scoped>
.index {
}
</style>
