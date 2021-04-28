<template>
  <!-- 歌曲列表 -->
  <div class="music">
    <Top></Top>
    <router-view />
    <div class="list_details">
      <div class="details_box" v-for="item in 4" :key="item">
        <div class="title">
          <span>十年</span>
          <span>陈奕迅</span>
        </div>
        <div class="icon_box" @click="onMore">
          <van-icon class="icon" name="plus" color="#000" size="1rem" />
          <span>点歌</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../components/top.vue";
export default {
  components: { Top },
  name: "Music",
  data() {
    return {};
  },
  methods:{
    onMore(){
      
    }
  }
};
</script>

<style lang="scss" scoped>
.music {
  .list_details {
    width: 100%;
    margin: auto;
    padding-top: 3rem;
    .details_box {
      width: 90%;
      margin: auto;
      border-top: 1px solid #f4f4f4;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: .8rem;
      .title {
        span {
          margin-top: 0.4rem;
          display: block;
        }
        span:last-child {
          font-size: 0.8rem;
          color: #c4c4c4;
        }
      }
      .icon_box {
        width: 4rem;
        height: 1.8rem;
        border: 1px solid pink;
        line-height: 1.8rem;
        .icon {
          margin-right: 1rem;
        }
        span {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
