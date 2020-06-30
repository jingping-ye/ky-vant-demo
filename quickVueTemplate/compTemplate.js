/**
 * 组件模板
 */
const simpleVueComp = (componentName) => {
  const dashName = componentName.replace(/[A-Z]/g, function(word) {
    return "-" + word.toLowerCase();
  });
  const templateFile = `<template>
  <div class="${dashName}">
    ${componentName}组件
  </div>
</template>
<script>
//  常量声明
const value = {
  msg:"Hello World!"
}
export default {
  name: '${componentName}',
  components:{},
  props:{},
  data(){
    return {
      //  常量
      value,
      //  状态
      flag:true,
      //  变量
      list:[],
    }
  },
  computed:{},
  watch:{},
  methods:{
    test(){
      console.log("Hello World！")
    }
  },
  filters:{},
  mounted(){}
}
</script>
<style scoped>
.${dashName} {

}
</style>`;
  return templateFile;
};

//  全格式模板
const fullVueComp = (componentName) => {
  const dashName = componentName.replace(/[A-Z]/g, function(word) {
    return "-" + word.toLowerCase();
  });
  const templateFile = `<template>
  <div class="${dashName}">
    ${componentName}组件
  </div>
</template>
<script>
//  常量声明
const value = {msg:"Hello World!"};

//  引入外部资源
// import someThing from 'SomeThing';
export default {
  name: '${componentName}',
  mixins:[],
  components:{},
  props:{},
  data(){
    return {
      //  常量
      value,
      //  状态
      flag:true,
      //  变量
      list:[],
    }
  },
  computed:{},
  watch:{},
  methods:{
    test(){
      console.log("Hello World!")
    }
  },
  filters:{},
  created(){},
  mounted(){},
  destoryed(){}
}
</script>
<style scoped>
.${dashName} {

}
</style>`;
  return templateFile;
};
module.exports = { simpleVueComp, fullVueComp };
