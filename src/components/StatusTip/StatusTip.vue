<template>
  <Page :title="pageTitle" :showNav="true" :isNeedLeft="false">
    <div class="pay-status">
      <div class="pay-box">
        <div class="successimg">
          <van-icon name="checked" :color="successColor" size="40" v-if="execResult == 'success'" />
          <van-icon name="clear" :color="failColor" size="40" v-if="execResult == 'fail'" />
          <div>{{ execResult === "success" ? successTip : failTip }}</div>
        </div>

        <div class="redirect">
          <div class="opt" @click="clickOpt">{{ optTip }}</div>
        </div>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </Page>
</template>
<script>
//  常量声明

//  引入外部资源
import Page from "@/components/Page/Page";
import { Button, Icon } from "vant";
export default {
  name: "StatusTip",
  mixins: [],
  components: {
    Page,
    [Icon.name]: Icon,
    [Button.name]: Button,
  },
  props: {
    status: {
      type: String,
      default: "success",
      validator: function(value) {
        const validStatus = ["success", "fail"];
        return validStatus.includes(value);
      },
    },
    optTip: {
      type: String,
      default: "确认",
    },
    successTip: {
      type: String,
      default: "执行成功",
    },
    successColor: {
      type: String,
      default: "#E30012",
    },
    failColor: {
      type: String,
      default: "#666",
    },
    failTip: {
      type: String,
      default: "执行失败",
    },
    pageTitle: {
      type: String,
      default: "操作结果",
    },
  },
  data() {
    return {
      execResult: "success", // 执行结果
    };
  },
  computed: {},
  watch: {},
  methods: {
    clickOpt() {
      this.$emit("onClickOpt");
    },
  },

  filters: {},

  created() {},

  mounted() {
    this.execResult = this.status;
  },

  destoryed() {},
};
</script>
<style scoped>
.pay-status {
  margin-top: 1px;
}
.successimg {
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 15px;
}
.redirect {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}
.index {
  width: 100%;
  margin-right: 12px;
  margin-left: 12px;
  height: 32px;
}
.order {
  width: 35%;
  margin-left: 12px;
  height: 32px;
}
.box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
}
.box .good-card {
  margin-bottom: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
}
.content {
  margin-top: 10px;
}
.recommend {
  font-size: 15px;
  padding-left: 10px;
  padding-bottom: 12px;
}
.pay-box {
  background: #fff;
}
.opt {
  width: 96%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 8px 0px;
  text-align: center;
  background: #e30012;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
}
</style>
