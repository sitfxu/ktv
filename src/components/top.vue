<template>
  <div class="top">
    <!-- 用户头像 -->
    <!-- <div class="top_user">
      <img src="../assets/user.jpeg" alt="" />
    </div> -->
    <!-- 搜索框 -->
    <div class="top_search" @click="searchBox">
      <div class="icon_s">
        <van-icon name="search" color="#808082" size="22px" />
      </div>
      <div class="title">
        <span>搜歌曲</span>
      </div>
    </div>
    <!-- 已点列表 -->
    <div class="top_selected" @click="onAlready">
      <div class="music">
        <van-icon name="music-o" size="26px" color="#2f2f2f" />
      </div>
      <div class="title">
        <span>已点</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {};
  },
  methods:{
    searchBox(){
      this.$router.push('/search')
    },
    onAlready(){
      this.$router.push('/already')
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  padding-top: .6rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 100;
  background-color: #fff;
  top: 0;
  // .top_user {
  //   width: 2.5rem;
  //   height: 2.5rem;
  //   border: 1px;
  //   border-radius: 50%;
  //   overflow: hidden;
  //   img {
  //     height: 100%;
  //   }
  // }
  .top_search {
    width: 74%;
    height: 2rem;
    border: 1px;
    border-radius: 2rem;
    background-color: #f6f6f8;
    display: flex;
    align-items: center;
    .icon_s {
      margin-top: 0.2rem;
      margin-left: 0.6rem;
    }
    .title {
      margin-left: 0.8rem;
      font-size: 0.8rem;
      color: #7c7c7e;
    }
  }
  .top_selected {
    display: flex;
    align-items: center;
    .title {
      font-size: 0.6rem;
      color: #2f2f2f;
    }
  }
}
</style>
