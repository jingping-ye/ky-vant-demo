<template>
  <div class="range-stepper">
    <button type="button" class="icon minus-icon" @click="handleMinus"></button>
    <input type="text" class="stepper-input" :value="stepperValue" />
    <button type="button" class="icon plus-icon" @click="handlePlus"></button>
  </div>
</template>
<script>
export default {
  name: "rangeStepper",
  mixins: [],
  components: {},
  props: {
    range: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      //  变量
      stepperValue: "",
    };
  },
  computed: {},
  watch: {
    value: {
      handler(newV) {
        this.stepperValue = newV;
      },
      immediate: true,
    },
  },
  methods: {
    handleMinus() {
      this.handleChangeStep("minus");
    },
    handlePlus() {
      this.handleChangeStep("plus");
    },
    handleChangeStep(type) {
      if (this.range.length > 0) {
        let curValueIndex = this.range.indexOf(this.stepperValue);
        if (type === "minus") {
          if (curValueIndex === 0) {
            this.stepperValue = this.range[this.range.length - 1];
          } else {
            this.stepperValue = this.range[curValueIndex - 1];
          }
        } else {
          if (curValueIndex === this.range.length - 1) {
            this.stepperValue = this.range[0];
          } else {
            this.stepperValue = this.range[curValueIndex + 1];
          }
        }
        this.$emit("onChange", this.stepperValue);
      } else {
        return false;
      }
    },
  },
  created() {},
  mounted() {},
  destoryed() {},
};
</script>
<style scoped>
.range-stepper {
  font-size: 12px;
}

.minus-icon {
  border-radius: 4px 0 0 4px;
}

.icon {
  position: relative;
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  margin: 0;
  padding: 0;
  color: #323233;
  vertical-align: middle;
  background-color: #f2f3f5;
  border: 0;
  cursor: pointer;
}

.icon::before,
.icon::after {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: currentColor;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  content: "";
}
.icon::before {
  width: 50%;
  height: 1px;
}
.plus-icon::after {
  width: 1px;
  height: 50%;
}
.stepper-input {
  box-sizing: border-box;
  width: 32px;
  height: 28px;
  margin: 0 2px;
  padding: 0;
  color: #323233;
  font-size: 14px;
  line-height: normal;
  text-align: center;
  vertical-align: middle;
  background-color: #f2f3f5;
  border: 0;
  border-width: 1px 0;
  border-radius: 0;
  -webkit-appearance: none;
}
.plus-icon {
  border-radius: 0 4px 4px 0;
}

.disabled {
  color: #dedede;
}
.icon:active {
  background-color: #e8e8e8;
}
</style>
