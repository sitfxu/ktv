<template>
  <!-- 已点歌曲 -->
  <div class="already">
    <div class="already_box" v-for="item in alreadyList" :key="item.id">
      <div class="title">
        <span>{{item.musicName}}</span>
        <span>{{item.starName}}</span>
      </div>
      <div class="btn">
        <div class="top" @click="onTop">
          <span>置顶</span>
        </div>
        <div class="delete" @click="onDelete">
          <span>移除</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import eventBus from "../utils/eventBus.js";

export default {
  name: "Already",
  data() {
    return {
      alreadyList: [],
    };
  },
  created() {
    console.log("初始化");
    // $emit $on 传值
    // eventBus.$on("plus", (data) => {
    //   console.log("传过来的值", data);
    //   this.Msg = data;
    // });
    // console.log(this.Msg);
    // 路由传值
    // var List = this.$route.params.list;
    // console.log(List);
    // console.log("++++++++++++++");
    const plusDataA = JSON.parse(sessionStorage.getItem('点歌'))
    console.log(plusDataA);
    this.alreadyList.push(plusDataA);
    console.log(this.alreadyList);
    
  },
  methods: {
    onTop() {},
    onDelete() {},
  },
};
</script>

<style lang="scss" scoped>
.already {
  width: 100%;
  .already_box {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #f4f4f4;
    padding-top: 0.8rem;
    .title {
      width: 40%;
      span {
        margin-top: 0.4rem;
        display: block;
      }
      span:last-child {
        font-size: 0.7rem;
        color: #c4c4c4;
      }
    }
    .btn {
      width: 40%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 0.8rem;
      .top {
        span {
          border: 1px solid rgb(68, 233, 142);
          padding: 1px;
        }
      }
      .delete {
        span {
          border: 1px solid rgb(216, 100, 120);
          padding: 1px;
        }
      }
    }
  }
}
</style>