<template>
  <!-- 备案信息 -->
  <div class="beian">
    <div class="footer">
      <a
        style="
          color: black;
          text-decoration: none;
          font-size: 12px;
          font-weight: normal;
        "
        href="http://beian.miit.gov.cn/"
        target="_blank"
        >湘ICP备2021006226号</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Beian",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.beian {
  .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
  }
}
</style>
