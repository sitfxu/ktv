<template>
  <!-- 搜索 -->
  <div class="search">
    <!-- 搜索框 -->
    <div class="input">
      <van-search
        v-model="value"
        shape="round"
        show-action
        placeholder="last dance"
        @search="onSearch"
      >
        <template #action>
        <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
    <div class="content">
      <div class="lately">
        <div class="icon1">
          <van-icon name="clock-o" color="#dda765" size="1.4rem" />
        </div>
        <div class="show">
          <span>最近常唱</span>
        </div>
        <div class="icon2">
          <van-icon name="arrow" color="#dda765" />
        </div>
      </div>
      <div class="tips">
        <div class="line1">
          <span>输入搜索内容首字母即可查询嗷~</span>
        </div>
        <div class="line2">
          <span>陈奕迅</span>&nbsp;<span>输入"</span><span>cyx</span><span>"</span>
        </div>
        <div class="line3">
          <span>小苹果</span>&nbsp;<span>输入"</span><span>xpg</span><span>"</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {};
  },
  methods: {
    onSearch(){}
  }
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100%;
  .content {
    width: 100%;
    text-align: center;
    .lately {
      margin: auto;
      width: 40%;
      height: 3rem;
      display: flex;
      .icon1{
        line-height: 3.6rem;
      }
      .icon2{
        line-height: 3.4rem;
      }
      .show{
        margin-left: .4rem;
        color: #dda765;
        line-height: 3rem;
      }
    }
    .tips{
      margin-top: 1rem;
      .line1{
        color: #d3d3d3;
      }
      .line2{
        margin-top: .4rem;
        span:nth-child(2){
          color: #d3d3d3;
        }
        span:nth-child(3){
          color: #dda765;
        }
        span:nth-child(4){
          color: #d3d3d3;
        }
      }
      .line3{
        margin-top: .2rem;
        span:nth-child(2){
          color: #d3d3d3;
        }
        span:nth-child(3){
          color: #dda765;
        }
        span:nth-child(4){
          color: #d3d3d3;
        }
      }
    }
  }
}
</style>
