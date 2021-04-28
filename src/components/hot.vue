<template>
  <!-- 热门排行详情页 -->
  <div class="hot_box">
    <Top></Top>
    <router-view />
    <div class="hot">
      <div class="hot_top">
        <div class="title">
          <span>热门排行</span>
        </div>
      </div>
      <div class="sheet" v-for="item in 3" :key="item" @click="sheetMusic">
        <div class="title">
          <span>最新慢歌</span>
        </div>
        <div class="content">
          <div class="img">
            <img src="../assets/zly.jpeg" alt="" />
          </div>
          <div class="list">
            <ul>
              <li><span>1</span><span>远走高飞——金志文、徐佳莹</span></li>
              <li><span>2</span><span>傲寒[HD]——马頔</span></li>
              <li><span>3</span><span>天下无双[HD]——陈奕迅</span></li>
            </ul>
          </div>
          <div class="icon">
            <van-icon name="arrow" size="30px" color="#949494" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../components/top";
export default {
  name: "Hot",
  components: { Top },
  data() {
    return {};
  },
  methods: {
    sheetMusic(){
      this.$router.push('/music')
    }
  }
};
</script>

<style lang="scss" scoped>
.hot_box {
    width: 100%;
    height: 100%;
  .hot {
    width: 90%;
    margin: auto;
    padding-top: 4rem;
    .hot_top {
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 1.4rem;
        color: #434343;
      }
    }
    .sheet {
      margin-top: 1rem;
      .title {
        letter-spacing: 0.2em;
        font-size: 0.9rem;
        margin-left: 0.4rem;
      }
      .content {
        margin-top: 0.4rem;
        display: flex;
        .img {
          width: 6rem;
          height: 6rem;
          overflow: hidden;
          border-radius: 5%;
          img {
            height: 100%;
          }
        }
        .list {
          margin-left: 1rem;
          ul li {
            margin-top: 0.6rem;
            font-size: 0.9rem;
            span {
              margin-right: 1rem;
              font-size: .7rem;
            }
          }
        }
        .icon {
          margin-top: 2rem;
        }
      }
    }
  }
}
</style>
