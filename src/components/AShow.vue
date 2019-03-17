<template>
  <p>{{ content }}</p>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  created() {
    this.$bus.$on('handleBusClick', msg => {
      console.log(msg)
      this.content = msg
    })
  }
}
</script>

<style>

</style>
