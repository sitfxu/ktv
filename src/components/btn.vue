<template>
  <!-- 遥控按钮 -->
  <div class="control_btn">
    <div class="control_btn_box" @click="onBtn">
      <span>遥控</span>
    </div>
    <!-- 遥控图层 -->
    <van-popup class="popup" v-model="show" close-on-popstate>
      <!-- <Control></Control>
      <router-view /> -->

      <div class="control">
        <!-- <div class="btn">
          <div class="btn_box" v-for="item in 4" :key="item">
            <div class="img">
              <van-icon
                class="icon"
                name="chat"
                size="2.4rem"
                color="#ffffff"
              />
            </div>
            <div class="show">
              <span>发弹幕</span>
            </div>
          </div>
        </div> -->

        <div class="control_box">
          <div class="box_top">
            <div class="top1">
              <div class="img">
                <div class="icon">
                  <van-icon name="manager" color="#f97183" />
                  <span style="color: #f97183">/</span>
                  <van-icon name="audio" color="#f97183" />
                </div>
              </div>
              <div class="show">
                <span>原/伴</span>
              </div>
            </div>
            <div class="top2">
              <div class="img">
                <div class="icon">
                  <van-icon name="play" color="#6b7efc" size="1.4rem" />
                  <!-- <span style="color: #6b7efc">/</span> -->
                  <van-icon name="pause" color="#765dea" size="1.4rem" />
                </div>
              </div>
              <div class="show">
                <span>播/停</span>
              </div>
            </div>
            <div class="top3">
              <div class="img">
                <van-icon
                  class="icon"
                  name="share"
                  color="#765dea"
                  size="2.8rem"
                />
              </div>
              <div class="show">
                <span>切歌</span>
              </div>
            </div>
            <div class="top4">
              <div class="img">
                <van-icon class="icon" name="sort" color="#eebb22" />
              </div>
              <div class="show">
                <span>重唱</span>
              </div>
            </div>
          </div>
          <div class="box_bottom">
            <div class="left">
              <div class="left_btn">评分(开/关)</div>
              <div class="left_btn">切换音效</div>
            </div>
            <div class="right">
              <div class="mike">
                <div class="show">
                  <span>麦克风</span>
                </div>
                <div class="add">+</div>
                <div class="cut">-</div>
              </div>
              <div class="music">
                <div class="show">
                  <span>音乐</span>
                </div>
                <div class="add">+</div>
                <div class="cut">-</div>
              </div>
            </div>
          </div>
        </div>

        <div class="foot" @click="onClose">
          <span>关闭</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
// 子组件
// import Control from "../views/control";

export default {
  name: "Btn",
  // components: { Control },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onBtn() {
      // this.$router.replace('/control')
      this.show = true;
    },
    onClose() {
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.control_btn {
  .control_btn_box {
    width: 3rem;
    height: 3rem;
    background-color: pink;
    border-radius: 50%;
    position: fixed;
    bottom: 20%;
    text-align: center;
    line-height: 3rem;
  }
  .popup {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    .control {
      width: 100%;
      height: 100%;
      
      position: relative;
      // .btn {
      //   width: 80%;
      //   margin: auto;
      //   padding-top: 1rem;
      //   display: flex;
      //   justify-content: space-between;
      //   .btn_box {
      //     width: 20%;
      //     .img {
      //       width: 100%;
      //       height: 4rem;
      //       background-color: #ff8ea3;
      //       text-align: center;
      //       border-radius: 10%;
      //       .icon {
      //         line-height: 4rem;
      //       }
      //     }
      //     .show {
      //       font-size: 0.8rem;
      //       text-align: center;
      //       margin-top: 0.8rem;
      //     }
      //   }
      // }
      .control_box {
        width: 80%;
        margin: auto;
        padding-top: 3rem;
        .box_top {
          display: flex;
          justify-content: space-between;
          // align-items: center;
          .top1,
          .top2,
          .top3,
          .top4 {
            height: 8rem;
            .img {
              border-radius: 50%;
              background-color: #ffffff;
              text-align: center;
            }
            .show {
              text-align: center;
              font-size: 0.8rem;
            }
          }
          .top1,
          .top4 {
            .img {
              width: 3rem;
              height: 3rem;
              margin-top: 1rem;
              .icon {
                line-height: 3rem;
              }
            }
            .show {
              margin-top: 2rem;
            }
          }
          .top2 {
            .img {
              width: 3.8rem;
              height: 3.8rem;
              margin-top: 0.8rem;
              .icon {
                line-height: 4.4rem;
              }
            }
            .show {
              margin-top: 1.4rem;
            }
          }
          .top3 {
            .img {
              width: 5rem;
              height: 5rem;
              .icon {
                line-height: 5rem;
              }
            }
            .show {
              margin-top: 1rem;
            }
          }
        }
        .box_bottom {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
          .left {
            width: 45%;
            .left_btn {
              width: 8rem;
              height: 2rem;
              background-color: #ffffff;
              border-radius: 4rem;
              margin-bottom: 1rem;
              font-size: 0.6rem;
              text-align: center;
              line-height: 2rem;
              letter-spacing: 0.1em;
            }
            .left_btn:first-child {
              margin-top: 3.6rem;
            }
          }
          .right {
            width: 45%;
            display: flex;
            justify-content: space-around;
            .mike,
            .music {
              .show {
                font-size: 0.6rem;
                text-align: center;
                margin-bottom: 1rem;
              }
              .add,
              .cut {
                width: 2.2rem;
                height: 3.6rem;
                background-color: #ffffff;
                text-align: center;
                line-height: 3.6rem;
              }
              .add {
                border-radius: 1rem 1rem 0 0;
              }
              .cut {
                margin-top: 1px;
                border-radius: 0 0 1rem 1rem;
              }
            }
          }
        }
      }
      .foot {
        width: 100%;
        height: 3rem;
        background-color: #dedede;
        text-align: center;
        position: fixed;
        bottom: 0;
        span {
          line-height: 3rem;
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
