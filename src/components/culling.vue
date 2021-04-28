<template>
  <!-- 精选歌单详情页 -->
  <div class="culling">
    <Top></Top>
    <router-view />
    <div class="selected">
      <div class="selected_top">
        <div class="title">
          <span>精选歌单</span>
        </div>
      </div>
      <div class="content">
        <div class="module" v-for="item in 6" :key="item" @click="moduleMusic">
          <div class="img">
            <img src="../assets/ys.jpeg" alt="" />
          </div>
          <div class="show">
            <span>唱首俗歌给你听</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../components/top";
export default {
  name: "Culling",
  components: { Top },
  data() {
    return {};
  },
  methods:{
    moduleMusic(){
      this.$router.push('/music')
    }
  }
};
</script>

<style lang="scss" scoped>
.culling {
  .selected {
    width: 90%;
    margin: auto;
    padding-top: 4rem;
    .selected_top {
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 1.4rem;
        color: #434343;
      }
    }
    .content {
      width: 100%;
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .module {
        width: 30%;
        margin-bottom: 1rem;
        .img {
          width: 100%;
          height: 6rem;
          overflow: hidden;
          border-radius: 5%;
          img {
            width: 100%;
          }
        }
        .show {
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          margin-top: 0.6rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
