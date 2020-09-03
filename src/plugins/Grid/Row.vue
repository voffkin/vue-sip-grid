<template>
  <div class="sip_cont">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Row',
  data() {
    return {
      // styleGeneral: this.createGutter(this.gutter)
    };
  },
  props: {
    justifyContent: String,
    alignItems: String,
    alignContent: String,
  }
}
</script>

<style lang="stylus">
.sip_cont
  display flex
</style>