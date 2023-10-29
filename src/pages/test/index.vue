<template>
  <design-table
    :request="request"
    :columns="columns"
    :items="search"
  >
  </design-table>
</template>

<script setup>
// 1. 分页请求
const request = params => {
  console.log(params)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        list: [
          { id: 1, name: '张三' },
          { id: 2, name: '李四' },
          { id: 3, name: '王五' }
        ]
      })
    }, 100)
  })
}

// 2. 列
const columns = [
  {
    title: 'id',
    dataIndex: 'id'
  },
  {
    title: '姓名',
    dataIndex: 'name'
  }
]

// 3. 搜索条件
const search = [{ name: 'name', label: '姓名', element: { type: 'input' } }]
</script>

<style scoped lang="less"></style>
