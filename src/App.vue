<template>
  <div class="app">

    <column :s="12" :l="1">1</column>
    <column :s="12" :l="2">2</column>
    <column :s="12" :l="3">3</column>
    <column :s="12" :l="4">4</column>
    <column :s="12" :l="5">5</column>
    <column :s="12" :l="6">6</column>
    <column :s="12" :l="7">7</column>
    <column :s="12" :l="8">8</column>
    <column :s="12" :l="9">9</column>
    <column :s="12" :l="10">10</column>
    <column :s="12" :l="11">11</column>
    <column :s="12" :l="12">12</column>

    <hr>

    <row>
      <column :l="1">1</column>
      <column :l="11">11</column>
    </row>
    <row>
      <column :l="2">2</column>
      <column :l="10">10</column>
    </row>
    <row>
      <column :l="3">3</column>
      <column :l="9">9</column>
    </row>
    <row>
      <column :l="4">4</column>
      <column :l="8">8</column>
    </row>
    <row>
      <column :l="5">5</column>
      <column :l="7">7</column>
    </row>
    <row>
      <column :l="6">6</column>
      <column :l="6">6</column>
    </row>
    <row>
      <column :l="7">7</column>
      <column :l="5">5</column>
    </row>
    <row>
      <column :l="8">8</column>
      <column :l="4">4</column>
    </row>
    <row>
      <column :l="9">9</column>
      <column :l="3">3</column>
    </row>
    <row>
      <column :l="10">10</column>
      <column :l="2">2</column>
    </row>
    <row>
      <column :l="11">11</column>
      <column :l="1">1</column>
    </row>
    <row>
      <column :l="12">12</column>
    </row>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
<style lang="stylus">
@import '../node_modules/normalize.css/normalize.css'

*
  box-sizing border-box

.app
  max-width 1440px
  width 100%
  margin 0 auto
  border 1px solid #ddd
.sip_col
  border 1px solid #e67e22
  background rgba(#e67e22, 10%)
  margin-bottom 5px
  text-align center
  color #34495e
  padding 10px

</style>