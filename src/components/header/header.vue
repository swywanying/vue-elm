<template>
  <div class="header">
    <div class="info">
      <img :src={logo} alt="">
      <div class="sell_info">
        <div class="name">
          <img :src={sign1} alt="">{{seller.name}}</div>
        <div class="type">{seller.type}}</div>
        <div class="preferential">
          <img :src={sign2} alt="">
          <span>{seller.preferential}}</span>
          <div class="p_type"><span>{{p_type}}</span><img :src={sign3} alt=""></div>
        </div>
      </div>
    </div>
    <div class="notice">
      <img :src={sign4} alt="">
      <span>{{notice}}</span>
      <img :src={sign3} alt="">
    </div>
  </div>
</template>

<script>
export default{
  name: 'header',
  data:{
    seller:{

    }
  },

}
</script>

<style scoped>

</style>
