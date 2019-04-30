<template>
  <div class="content-bitorjs">
    <h1>脚手架</h1>
    <p>暂时没有脚手架,感觉脚手架太多是个负担, 所以希望接入vue的生态即可</p>
  </div>
</template>
<script>
class A {
  name = "";
  age = 1;
}
export default {
  data() {
    return new A();
  },
  mounted() {
    console.log(this);
  }
};
</script>
