<template>
  <div class="sip_cont" :class="classGeneral">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Row',
  data() {
    return {
      classGeneral: `${this.createClassSize()}`,
    }
  },
  props: {
    gutter: Boolean,
    justifyContent: String,
    alignItems: String,
    alignContent: String,
  },
  methods: {
    createClassSize() {
      let newClass = 'sip_cont ';
      newClass += this.gutter ? `sip_cont_gutter ` : 'sip_cont_nogutter ';

      return newClass;
    }
  }
}
</script>
