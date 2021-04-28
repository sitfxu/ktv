<template>
  <!-- 列表滑动加载 -->
  <div class="tabbar">
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
      :loading-text="loadText"
    >
      <div v-for="item in List" :key="item"></div>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      List: [],
      loading: false,
      finished: false,
      loadText: "加载中…",
      pageNum: 1,
    };
  },
  methods: {
    onLoad() {
      const loadNum = 8;
      console.log("上拉加载");
      // 异步更新数据，要看效果，官网的例子是通过setTimeOut进行延时模拟异步更新，把延时时间调大点效果就很明显。
      //这里我是向服务器发请求获得的数据,服务器端是分页的。
      let postInfoUp = {
        data: {
          //参数为每次访问的个数和页数
          limit: loadNum,
          page: ++this.pageNum,
        },
      };
      this.$api.HOME_LIST(postInfoUp).then((res) => {
        if (res.data.code === 200) {
          let re = res.data.data.list;
          if (re.length !== 0) {
            //新增数据拼接在后面
            this.List = this.List.concat(ss);
          }

          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.List.length >= this.totalNum) {
            this.finished = true;
            this.loadText = "加载完成";
            console.log("没数据要加载了");
          }
        } else {
          this.finished = true;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
