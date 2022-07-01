<template>
  <el-card shadow="none">
    <div class="top-line">
      <div class="app-text">
        <i class="el-icon-plus"></i>
        <span>新建</span>
      </div>
      <div>
        <el-input placeholder="请输入内容" v-model="search">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>

    </div>

  </el-card>
</template>

<script>
export default {
  name: "TopLine",
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>
.top-line {
  display: flex;
}
.top-line :nth-child(1) {
  flex: 1;
}
.top-line :nth-child(2) {
  flex: 9;
}

.el-input {
  width: 25%;
  float: right;
}
.app-text {
  border-right: gray 2px solid;
}
span {
  height: 1ex;
  line-height: 40px;
  margin-left: 10px;
}
</style>