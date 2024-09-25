<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Icon } from "@iconify/vue";

const isVisible = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const checkScrollPosition = () => {
  isVisible.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener("scroll", checkScrollPosition);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScrollPosition);
});
</script>
<template>
  <div>
    <!-- Scroll to top button -->
    <button v-if="isVisible" @click="scrollToTop" class="scroll-to-top">
      <Icon icon="ri-arrow-up-s-line" class="lg:text-2xl text-lg" />
    </button>
  </div>
</template>
<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 15px;
  background-color: #409eff;
  border: 1px solid #fff;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.3s;
  z-index: 1;
}

.scroll-to-top:hover {
  background-color: #40a0ffbd;
}
.scroll-to-top:click {
  background-color: #40a0ffbd;
}
</style>
