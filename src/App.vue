<template>
  <div id="app">
    <a-button @handleClick="handleClick"/>
    <a-show/>
  </div>
</template>

<script>
import AButton from '@/components/AButton'
import AShow from '@/components/AShow'

export default {
  name: 'app',
  components: {
    AButton, AShow
  },
  methods: {
    handleClick(msg) {
      console.log(msg)
    }
  }
}
</script>
