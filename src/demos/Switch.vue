<template>
  <div>
    <group title="default">
      <x-switch title="default setting"></x-switch>
      <x-switch title="default true" :value="true"></x-switch>
    </group>
    <group title="disabled">
      <x-switch title="default setting" disabled></x-switch>
      <x-switch title="default true" :value="true" disabled></x-switch>
    </group>
    <group title="html title">
      <x-switch title="<span style='color:red'>I'm Red.</span>">I'm red</span>" disabled></x-switch>
    </group>
  </div>
</template>

<script>
import { XSwitch, Group } from '../components'

export default {
  components: {
    XSwitch,
    Group
  }
}
</script>
