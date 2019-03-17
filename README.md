# 组件之间通信

* 复杂场景直接上 Vuex
* 父子组件，props down，emit up
* 兄弟组件，利用父组件做轴，同样利用 props & emit
* 任意简单场景，可以利用全局 bus

在 **单个** 组件中，我们可以用 $on 监听事件，用 $emit 抛出事件（事件名叫 handleClick）：

```vue
<template>
  <div id="app">
    <button @click="handleClick">点我</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    handleClick() {
      this.$emit('handleClick', '我被点了')
    }
  },
  created() {
    this.$on('handleClick', msg => {
      console.log(msg)
    })
  }
}
</script>
```

父子组件利用 emit 传递数据也大同小异

假设父组件 App.vue：

```vue
<template>
  <div id="app">
    <a-button @handleClick="handleClick"/>
  </div>
</template>

<script>
import AButton from '@/components/AButton'

export default {
  name: 'app',
  components: {
    AButton
  },
  methods: {
    handleClick(msg) {
      console.log(msg)
    }
  }
}
</script>
```

子组件 AButton.vue：

```vue
<template>
  <button @click="$emit('handleClick', '我被点了')">点我</button>
</template>
```

**其实 $on 和 $emit 都是在子组件**，无非是 $on 的时候调用了一个父组件的方法

以上都是在同一个组件中做事件监听和传递，我们也可以定义一个全局的 bus，这样可以在任意组件之间传值

bus.js：

```js
import Vue from 'vue'
const Bus = new Vue()

export default Bus
```

main.js：

```vue
import Vue from 'vue'
import App from './App.vue'
import Bus from './bus'

Vue.config.productionTip = false
Vue.prototype.$bus = Bus 

new Vue({
  render: h => h(App),
}).$mount('#app')
```

然后就可以在任意组件内用 $bus.$on 和 $bus.$emit 进行通信了

