<template>
  <h2>是否{{ msg }}</h2>
  <el-table :data="tableData">
    <el-table-column
      prop="date"
      label="Date"
      width="180"
    />
    <el-table-column
      prop="name"
      label="Name"
      width="180"
    />
    <el-table-column
      prop="address"
      label="Address"
    />
  </el-table>
  <el-pagination
    v-model:current-page="formInline.page.currentPage"
    small
    layout="total, prev, pager, next"
    :page-size="formInline.page.pageSize"
    :total="formInline.page.total"
    :page-sizes="[10, 20, 50]"
    @size-change="toPage(1, $event)"
    @current-change="toPage"
  />
</template>

<script setup lang="ts">
import { getTalentList } from '../api/mock'
import { ref, onMounted } from 'vue'
import type { ResultData } from '../api/interface'
import { Page } from '../api/interface'
import config from '../config'

const tableData = ref([])
const msg = ref('这是列表的测试数据1')
const formInline = ref({
  page: new Page()
})

const toPage = (page = 1, size = formInline.value.page.pageSize): void => {
  formInline.value.page.currentPage = page
  formInline.value.page.pageSize = size
  getTalentList({
    pageNum: page,
    pageSize: formInline.value.page.pageSize
  }).then((res: ResultData) => {
    tableData.value = res.data.data.map(() => {
      return {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }
    })
    formInline.value.page.total = res.data.total
  })
}

onMounted(() => {
  console.log('config', config)
  toPage(2, 5)
})
</script>

<style scoped></style>
