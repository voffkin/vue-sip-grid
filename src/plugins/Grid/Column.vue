<template>
  <div :class="classGeneral" >
    <slot />
  </div>
</template>

<script>
// import './Column.styl'


export default {
  name: "Col",
  data() {
    return {
      classGeneral: `${this.createClassSize()}`,
    }
  },
  props: {
    fixed: Boolean,
    s: Number,
    m: Number,
    l: Number,
  },
  mounted() {

    if(true) {
      // console.log('...', this)
      // let stylus = require('./Column.styl')
      // console.log(stylus)
    }

  },
  methods: {
    createClassSize() {
      let newClass = 'sip_col ';
      let fixed = ''
      if(this.fixed) {
        fixed = this.fixed? 'fixed_' : ''
      }
      newClass += this.s ? `sip_${fixed}col_s_${this.s} ` : '';
      newClass += this.m ? `sip_${fixed}col_m_${this.m} ` : '';
      newClass += this.l ? `sip_${fixed}col_l_${this.l} ` : '';

      return newClass;
    }
  }
};

</script>
