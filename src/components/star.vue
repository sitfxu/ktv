<template>
  <!-- 明星列表 -->
  <div class="star">
    <Top></Top>
    <router-view />
    <div class="star_list">
      <div class="star_box" v-for="item in 4" :key="item" @click="starMusic">
        <div class="layout">
          <div class="img">
            <div class="img_box">
              <img src="../assets/zxc.jpeg" alt="" />
            </div>
            <div class="starN">
              <span>周星驰</span>
            </div>
          </div>
          <div class="icon">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../components/top";
export default {
  name: "Star",
  components: { Top },
  data() {
    return {};
  },
  methods: {
    starMusic() {
      this.$router.replace("./music");
    },
  },
};
</script>

<style lang="scss" scoped>
.star {
  width: 100%;
  height: 100%;
  .star_list {
    padding-top: 2rem;
    .star_box {
      width: 100%;
      border-bottom: 1px solid #ebebeb;
      padding-top: 1rem;
      padding-bottom: 0.6rem;
      .layout {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        .img {
          display: flex;
          .img_box {
            width: 4rem;
            height: 4rem;
            overflow: hidden;
            img {
              height: 100%;
            }
          }
          .starN {
            span {
              font-size: 0.8rem;
              letter-spacing: 0.2em;
              line-height: 4rem;
              margin-left: 1rem;
            }
          }
        }
        .icon {
          line-height: 4rem;
        }
      }
    }
  }
}
</style>
