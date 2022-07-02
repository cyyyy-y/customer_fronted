<template>
  <div>
    <top-line @searchChange="deSearchChange" :title="'违约原因'"/>
    <reason-table :table-data="reasonList.filter(data => data.type === 0 && (!deSearch ||
    data.reason.toLowerCase().includes(deSearch.toLowerCase())))"/>

    <top-line class="re-top" @searchChange="reSearchChange" :title="'重生原因'"/>
    <reason-table :table-data="reasonList.filter(data => data.type === 1 && (!reSearch ||
    data.reason.toLowerCase().includes(reSearch.toLowerCase())))"/>
  </div>
</template>

<script>
import TopLine from "../../common/TopLine/TopLine";
import ReasonTable from "./children/ReasonTable";

export default {
  name: "ReasonManagement",
  components: {ReasonTable, TopLine},
  mounted() {
    this.reasonList = [
      {
        id: 0, reason: 'reasonreasonreasonreason', type: 0, is_used: 0,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 1, reason: 'reasonreasonreasonreason', type: 1, is_used: 0,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 2, reason: 'reasonreasonreasonreason', type: 0, is_used: 1,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 3, reason: 'reasonreasonreasonreason', type: 0, is_used: 1,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 4, reason: 'reasonreasonreasonreason', type: 1, is_used: 0,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 5, reason: 'reasonreasonreasonreason', type: 1, is_used: 1,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 6, reason: 'reasonreasonreasonreason', type: 1, is_used: 1,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 0, reason: 'reasonreasonreasonreason', type: 0, is_used: 0,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 1, reason: 'reasonreasonreasonreason', type: 1, is_used: 0,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 2, reason: 'reasonreasonreasonreason', type: 0, is_used: 1,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 3, reason: 'reasonreasonreasonreason', type: 0, is_used: 1,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 4, reason: 'reasonreasonreasonreason', type: 1, is_used: 0,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 5, reason: 'reasonreasonreasonreason', type: 1, is_used: 1,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
      {
        id: 6, reason: 'reasonreasonreasonreason', type: 1, is_used: 1,
        create_time: '2022-07-02 12:34:56', update_time: '2022-07-02 12:34:56'
      },
    ]
  },
  data() {
    return {
      deSearch: '',
      reSearch: '',
      reasonList: [],
    }
  },
  methods: {
    deSearchChange(search) {
      this.deSearch = search
    },
    reSearchChange(search) {
      this.reSearch = search
    }
  }
}
</script>

<style scoped>
.re-top {
  margin-top: 20px;
}
</style>