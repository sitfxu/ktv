<template>
  <!-- 榜单 -->
  <div class="listSort">
    <!-- 专属歌单 -->
    <div class="exclusive">
      <div class="title">
        <span>专属歌单</span>
      </div>
      <div class="content">
        <div class="module" @click="myOften">
          <div class="icon">
            <van-icon
              class="service"
              name="service"
              size="40px"
              color="#ffffff"
            />
          </div>
          <div class="show">
            <span>我的常唱</span>
          </div>
        </div>
        <div class="module">
          <div class="icon">
            <van-icon
              class="service"
              name="music"
              size="40px"
              color="#ffffff"
            />
          </div>
          <div class="show">
            <span>拿手曲目</span>
          </div>
        </div>
        <div class="module">
          <div class="icon">
            <van-icon
              class="service"
              name="add-square"
              size="40px"
              color="#ffffff"
            />
          </div>
          <div class="show">
            <span>导入歌单</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐分类 -->
    <div class="recommend">
      <div class="title">
        <span>推荐分类</span>
      </div>
      <div class="module">
        <div class="btn" v-for="item in 11" :key="item" @click="btnMusic">
          <span>KTV必点</span>
        </div>
      </div>
    </div>
    <!-- 热门排行 -->
    <div class="hot">
      <div class="hot_top">
        <div class="title">
          <span>热门排行</span>
        </div>
        <div class="see" @click="hotMore">
          <span>查看全部</span>
          <van-icon class="icon" name="arrow" color="#8d8d8d" size="20px" />
        </div>
      </div>
      <div class="sheet" v-for="item in 3" :key="item" @click="sheetMusic">
        <div class="title">
          <span>最新慢歌</span>
        </div>
        <div class="content">
          <div class="img">
            <img src="../../assets/zly.jpeg" alt="" />
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
    <!-- 精选歌单 -->
    <div class="selected">
      <div class="selected_top">
        <div class="title">
          <span>精选歌单</span>
        </div>
        <div class="see" @click="cullingMore">
          <span>查看全部</span>
          <van-icon class="icon" name="arrow" color="#8d8d8d" size="20px" />
        </div>
      </div>
      <div class="content">
        <div class="module" v-for="item in 6" :key="item" @click="moduleMusic">
          <div class="img">
            <img src="../../assets/ys.jpeg" alt="" />
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
export default {
  name: "ListSort",
  data() {
    return {};
  },
  methods:{
    myOften(){
      this.$router.push('/control')
    },
    btnMusic(){
      this.$router.push('/music')
    },
    hotMore(){
      this.$router.push('/hot')
    },
    sheetMusic(){
      this.$router.push('/music')
    },
    cullingMore(){
      this.$router.push('/culling')
    },
    moduleMusic(){
      this.$router.push('/music')
    }
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  width: 100%;
  height: 100%;
}
.listSort {
  .exclusive {
    width: 90%;
    margin: auto;
    margin-top: 1rem;
    .title {
      font-size: 1.4rem;
      color: #434343;
    }
    .content {
      width: 100%;
      margin-top: 1rem;
      display: flex;
      justify-content: space-around;
      .module {
        width: 30%;
        .icon {
          margin: auto;
          width: 3.6rem;
          height: 3.6rem;
          border: none;
          border-radius: 50%;
          background-color: pink;
          text-align: center;
          .service {
            line-height: 3.6rem;
          }
        }
        .show {
          text-align: center;
          margin-top: 1rem;
          letter-spacing: 0.1em;
        }
      }
    }
  }
  .recommend {
    width: 90%;
    margin: auto;
    margin-top: 1rem;
    .title {
      font-size: 1.4rem;
      color: #434343;
    }
    .module {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1rem;
      .btn {
        width: 30%;
        height: 3rem;
        background-color: #f6f6f6;
        border-radius: 5%;
        text-align: center;
        margin-bottom: 0.8rem;
        margin-right: 3.3%;
        span {
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          line-height: 3rem;
        }
      }
    }
  }
  .hot {
    width: 90%;
    margin: auto;
    margin-top: 1rem;
    .hot_top {
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 1.4rem;
        color: #434343;
      }
      .see {
        display: flex;
        span {
          display: block;
          margin-top: 0.4rem;
          margin-right: 0.6rem;
        }
        .icon {
          display: block;
          margin-top: 0.5rem;
        }
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
  .selected {
    width: 90%;
    margin: auto;
    margin-top: 1rem;
    .selected_top {
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 1.4rem;
        color: #434343;
      }
      .see {
        display: flex;
        span {
          display: block;
          margin-top: 0.4rem;
          margin-right: 0.6rem;
        }
        .icon {
          display: block;
          margin-top: 0.5rem;
        }
      }
    }
    .content{
      width: 100%;
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .module{
        width: 30%;
        margin-bottom: 1rem;
        .img{
          width: 100%;
          height: 6rem;
          overflow: hidden;
          border-radius: 5%;
          img{
            width: 100%;
          }
        }
        .show{
          font-size: .6rem;
          letter-spacing: 0.15em;
          margin-top: .6rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
