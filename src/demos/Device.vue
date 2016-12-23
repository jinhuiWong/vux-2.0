<template>
  <div>
    <group>
      <cell v-for="(val, key) in $device" :title="key">{{val}}</cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from '../components'

export default {
  components: {
    Group,
    Cell
  }
}
</script>