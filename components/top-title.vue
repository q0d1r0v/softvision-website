<script setup lang="ts"></script>
<template>
  <div class="bg-[#409eff] text-white" id="scroll-container">
    <div id="scroll-text">
      <div>{{ $t("top_title_bar") }}</div>
    </div>
  </div>
</template>

<style scoped>
#scroll-container {
  overflow: hidden;
}

#scroll-text {
  /* animation properties */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);

  -moz-animation: my-animation 22s linear infinite;
  -webkit-animation: my-animation 22s linear infinite;
  animation: my-animation 22s linear infinite;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
}

/* for Firefox */
@-moz-keyframes my-animation {
  from {
    -moz-transform: translateX(100%);
  }

  to {
    -moz-transform: translateX(-100%);
  }
}

/* for Chrome */
@-webkit-keyframes my-animation {
  from {
    -webkit-transform: translateX(100%);
  }

  to {
    -webkit-transform: translateX(-100%);
  }
}

@keyframes my-animation {
  from {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }

  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>
