<template>
  <el-card shadow="none">
    <div class="top-line">
      <div class="app-text" v-if="add" @click="ReqDialog">
        <i class="el-icon-plus"></i>
        <span>{{ title || '新建' }}</span>
      </div>
      <div class="app-text" v-else @click="ReqDialog">
        <i class="el-icon-caret-right"></i>
        <span>{{ title }}</span>
      </div>
      <div>
        <el-input placeholder="请输入内容" v-model="search" @input="searchChange">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>

    </div>

  </el-card>
</template>

<script>
export default {
  name: "TopLine",
  props: {
    add: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
    }
  },
  data() {
    return {
      search: '',
      dialogMsg: true
    }
  },
  methods: {
    searchChange() {
      this.$emit('searchChange', this.search)
    },
    ReqDialog() {
      this.$emit('dialogMsg', this.dialogMsg)
    }
  },
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