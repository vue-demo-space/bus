<template>
  <button @click="handleClick">点我</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('handleClick', '我被点了')

      // 全局的 bus
      this.$bus.$emit('handleBusClick', '我被点了 -- 全局的 bus 注册')
    }
  }
}
</script>
