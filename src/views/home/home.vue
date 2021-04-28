<template>
  <!-- 主页 -->
  <div class="home">
    <Top></Top>
    <Beian></Beian>
    <router-view />
    <!-- 歌星和榜单按钮 -->
    <div class="btn">
      <div class="btn_top">
        <div class="star" @click="onStar">
          <div class="star_icon">
            <van-icon name="manager" size="2.5rem" />
          </div>
          <div class="title">
            <span>歌星</span>
          </div>
        </div>
        <div class="listsort" @click="onListSort">
          <div class="star_icon">
            <van-icon name="hot" size="2.5rem" />
          </div>
          <div class="title">
            <span>榜单</span>
          </div>
        </div>
      </div>
      <!-- 互动按钮 -->
      <div class="btn_bottom"></div>
    </div>
    <!-- 列表模块 -->
    <div class="list">
      <van-tabs swipeable animated color="#f5731f">
        <van-tab v-for="(index, indexs) in list" :title="index.title" :key="index.id">
          <div class="list_details">
            <div
              class="details_box"
              v-for="(item, items) in index.history"
              :key="item.id"
              @click="onAdd"
            >
              <div class="title">
                <span>{{ item.musicName }}</span>
                <span>{{ item.starName }}</span>
              </div>
              <div class="icon_box" @click="onPlus(indexs, items)">
                <van-icon class="icon" name="plus" color="#000" size="1rem" />
                <span>点歌</span>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
      <!-- 查看更多按钮 -->
      <!-- <div class="list_more" @click="onMore">
        <span>查看更多歌曲</span>
      </div> -->
    </div>
  </div>
</template>

<script>
import Top from "../../components/top.vue";
import Beian from "../../components/beian.vue";

// import eventBus from "../../utils/eventBus.js";

// import api from "../../utils/api"
// import Http from "../../utils/Http"

export default {
  name: "Home",
  components: { Top, Beian },
  data() {
    return {
      list: [
        {
          id: 1,
          title: "我的常唱",
          history: [
            {
              id: 1,
              musicName: "孤独患者",
              starName: "陈奕迅",
            },
            {
              id: 2,
              musicName: "爱与诚",
              starName: "古巨基",
            },
            {
              id: 3,
              musicName: "消愁",
              starName: "毛不易",
            },
            {
              id: 4,
              musicName: "盛夏",
              starName: "毛不易",
            },
            {
              id: 5,
              musicName: "一程山路",
              starName: "毛不易",
            },
          ],
        },
        {
          id: 2,
          title: "排行榜",
          history: [
            {
              id: 1,
              musicName: "红色高跟鞋",
              starName: "喜喜",
            },
            {
              id: 2,
              musicName: "爱与诚",
              starName: "古巨基",
            },
            {
              id: 3,
              musicName: "消愁",
              starName: "毛不易",
            },
            {
              id: 4,
              musicName: "盛夏",
              starName: "毛不易",
            },
            {
              id: 5,
              musicName: "一程山路",
              starName: "毛不易",
            },
          ],
        },
        {
          id: 3,
          title: "新歌榜",
          history: [
            {
              id: 1,
              musicName: "十年",
              starName: "陈奕迅",
            },
            {
              id: 2,
              musicName: "爱与诚",
              starName: "古巨基",
            },
            {
              id: 3,
              musicName: "消愁",
              starName: "毛不易",
            },
            {
              id: 4,
              musicName: "盛夏",
              starName: "毛不易",
            },
            {
              id: 5,
              musicName: "一程山路",
              starName: "毛不易",
            },
          ],
        },
        {
          id: 4,
          title: "KTV麦霸榜",
          history: [
            {
              id: 1,
              musicName: "年少有为",
              starName: "李荣浩",
            },
            {
              id: 2,
              musicName: "爱与诚",
              starName: "古巨基",
            },
            {
              id: 3,
              musicName: "消愁",
              starName: "毛不易",
            },
            {
              id: 4,
              musicName: "盛夏",
              starName: "毛不易",
            },
            {
              id: 5,
              musicName: "一程山路",
              starName: "毛不易",
            },
          ],
        },
      ],
      show: false,
      msg: "东邪"
    };
  },
  created(){
    
  },
  methods: {
    onStar() {
      this.$router.push("/starList");
    },
    onListSort() {
      this.$router.push("/listSort");
    },
    onTitle() {},
    onPlus(i, j) {
      // this.$router.push({
      //   path: '/already',
      //   name: 'Already', 
      //   params: { list: this.list }
      // })
      // console.log("点歌");
      // eventBus.$emit('plus', this.list)
      // this.$router.push('/already')
      this.$toast.success('已成功加入点歌列表');
      const plusData = this.list[i].history[j];
      sessionStorage.setItem('点歌', JSON.stringify(plusData))
    },
    onAdd() {},
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .btn {
    margin: auto;
    padding-top: 3.4rem;
    width: 90%;
    .btn_top {
      display: flex;
      justify-content: space-around;
      .star,
      .listsort {
        display: flex;
        align-items: center;
        width: 40%;
        height: 4rem;
        border: 1px;
        border-radius: 0.2rem;
        .star_icon {
          margin-left: 0.8rem;
        }
        .title {
          margin-left: 1.6rem;
        }
      }
      .star {
        background-color: #feeeef;
      }
      .listsort {
        background-color: #f3effe;
      }
    }
  }
  .list {
    margin: auto;
    margin-top: 2rem;
    width: 94%;
    .list_details {
      width: 100%;
      margin: auto;
      margin-top: 0.2rem;
      .details_box {
        width: 100%;
        border-top: 1px solid #f4f4f4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          margin-top: 0.8rem;
          span {
            margin-top: 0.4rem;
            display: block;
          }
          span:last-child {
            font-size: 0.7rem;
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
          span{
            font-size: .8rem;
          }
        }
      }
    }
    // .list_more {
    //   width: 50%;
    //   height: 2rem;
    //   margin: auto;
    //   margin-top: 2rem;
    //   border: 1px solid pink;
    //   border-radius: 3rem;
    //   text-align: center;
    //   line-height: 2rem;
    // }
  }
}
</style>