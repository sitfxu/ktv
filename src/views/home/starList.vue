<template>
<!-- 歌星 -->
  <div class="starList">
    <Top></Top>
    <router-view></router-view>

    <div class="nav" @click="onMusic">
      <div class="nav_content" v-for="item in 8" :key="item">
        <div class="img">
          <img src="../../assets/zxc.jpeg" alt="">
        </div>
        <div class="name">
          <span>周星驰</span>
        </div>
      </div>
    </div>

    <div class="sort">
      <div class="sort_content" v-for="item in 5" :key="item" @click="onStar">
        <div class="sort_star">
          <span>华语男歌手</span>
        </div>
        <div class="sort_icon">
          <van-icon name="arrow" color="#d6d6d6" size="20px"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Top from '../../components/top.vue'

export default {
  name: "StarList",
  components: { Top },
  data() {
    return {
      
    };
  },
  methods:{
    onMusic(){
      this.$router.push('/music')
    },
    onStar(){
      this.$router.push('./star')
    }
  }
};
</script>

<style lang="scss" scoped>
.starList{
  .nav{
    padding-top: 4rem;
    margin-left: .6rem;
    display: flex;
    overflow: auto;
    .nav_content{
      width: 4.6rem;
      height: 7rem;
      padding-right: .6rem;
      .img{
        width: 4rem;
        height: 4rem;
        overflow: hidden;
        img{
          height: 100%;
        }
      }
      .name{
        text-align: center;
        line-height: 2rem;
        font-size: .9rem;
      }
    }
  }
  .nav::-webkit-scrollbar {
    display: none;
  }
  .sort{
    width: 95%;
    margin: auto;
    .sort_content{
      width: 100%;
      height: 3rem;
      border-top: 1px solid #e8e8e8;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .sort_star{
        margin-left: 1rem;
        font-size: .8rem;
        color: #676767;
      }
      .sort_icon{
        margin-right: 1rem;
      }
    }
    .sort_content:first-child{
      border: none;
    }
  }
}
</style>
