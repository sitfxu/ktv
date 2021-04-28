<template>
  <!-- 已点歌曲 -->
  <div class="already">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item, index) in itemArr" :key="index">
        <!--   <el-input v-model="item.content"></el-input> -->
        <div>{{ item.content }}</div>
      </li>
    </ul>
    <button @click="deleteEle()">删除</button>
    <button @click="addEle">+添加元素</button>
    <div @click="Send()">点我进行路由跳转</div>

    <div @mouseover="mouseOver" @mouseleave="mouseLeave" :style="active">
      Hover over me!
    </div>
  </div>
</template>

<script>
export default {
  name: "Control",
  data() {
    return {
      msg: "this a good ",
      itemArr: [
        {
          content: "good",
        },
      ],
      active: "",
    };
  },
  created() {
    // this init loading function
  },
  methods: {
    Send() {
      this.$router.push({
        path: "/control",
        query: { name: "我是传递数值" },
      });
    },
    // 点击添加
    addEle() {
      this.itemArr.push({ 
        content: "good",
      });
    },
    // 删除一项
    deleteEle(index) {
      this.itemArr.splice(index, 1);
    },
    mouseOver() {
      this.active = "background-color: #cccccc";
    },
    mouseLeave() {
      this.active = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>