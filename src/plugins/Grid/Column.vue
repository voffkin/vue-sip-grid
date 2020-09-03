<template>
  <div :class="classGeneral">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Col",
  data() {
    return {
      classGeneral: `${this.createClassSize()}`,
    }
  },
  props: {
    s: Number,
    m: Number,
    l: Number,
  },
  methods: {
    createClassSize() {
      let newClass = 'sip_col ';
      newClass += this.s ? `sip_col_s_${this.s} ` : '';
      newClass += this.m ? `sip_col_m_${this.m} ` : '';
      newClass += this.l ? `sip_col_l_${this.l} ` : '';
      return newClass;
    }
  }
};
</script>
<style lang="stylus">
$columns = 12
$maxWidth = 1360px
$gutter = 20px
$gutterPers = ($gutter / $maxWidth * 100) %

.sip_cont
  .sip_col
    margin-right 20px
    &:last-child
      margin-right 0

column(num)
  max-width ((num / $columns) * 100 + $gutterPers)% - $gutterPers
  width 100%

.sip_col_l_1
  column(1)
.sip_col_l_2
  column(2)
.sip_col_l_3
  column(3)
.sip_col_l_4
  column(4)
.sip_col_l_5
  column(5)
.sip_col_l_6
  column(6)
.sip_col_l_7
  column(7)
.sip_col_l_8
  column(8)
.sip_col_l_9
  column(9)
.sip_col_l_10
  column(10)
.sip_col_l_11
  column(11)
.sip_col_l_12
  column(12)

.sip_col_s_1
  @media screen and (max-width: 900px)
    column(1)
.sip_col_s_2
  @media screen and (max-width: 900px)
    column(2)
.sip_col_s_3
  @media screen and (max-width: 900px)
    column(3)
.sip_col_s_4
  @media screen and (max-width: 900px)
    column(4)
.sip_col_s_5
  @media screen and (max-width: 900px)
    column(5)
.sip_col_s_6
  @media screen and (max-width: 900px)
    column(6)
.sip_col_s_7
  @media screen and (max-width: 900px)
    column(7)
.sip_col_s_8
  @media screen and (max-width: 900px)
    column(8)
.sip_col_s_9
  @media screen and (max-width: 900px)
    column(9)
.sip_col_s_10
  @media screen and (max-width: 900px)
    column(10)
.sip_col_s_11
  @media screen and (max-width: 900px)
    column(11)
.sip_col_s_12
  @media screen and (max-width: 900px)
    column(12)


</style>