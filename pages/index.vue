<script setup lang="ts">
import lottie from "lottie-web";
import TopTitle from "../components/top-title.vue";
import NavBar from "../components/navbar.vue";
import Footer from "../components/footer.vue";

const lottieContainer = ref<any>(null);

onMounted(() => {
  lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../animation-1727189793227.json",
  });
});
</script>
<template>
  <div>
    <TopTitle />
  </div>
  <div class="border-b border-[#40a0ff34]">
    <NavBar />
  </div>
  <div class="h-screen screen container m-auto">
    <div class="md:p-0 p-6">
      <div class="top-side">
        <el-row
          justify="space-between"
          align="middle"
          class="pt-44 md:text-left text-center"
          :gutter="10"
        >
          <el-col :sm="12" :lg="12">
            <div
              class="lg:text-[44px] text-[24px] font-semibold lg:leading-[3.3rem]"
            >
              Biznesingizni zamonaviy avtomatlashtirish yechimlari bilan
              rivojlantiring!
            </div>
            <div class="mt-4 text-[16px]">
              Biznesingizni innovatsiyalar bilan quvvatlang! Avtomatlashtirish
              orqali ish jarayonlaringizni samarali ravishda boshqaring va
              vaqtni tejang. Bizning tajribali jamoamiz sizga zamonaviy
              yechimlar taklif etadi, bu esa raqobatbardosh bo‘lishingizni
              ta'minlaydi.
            </div>
            <div class="mt-4">
              <el-button type="primary" plain size="large"
                >Bog'lanish</el-button
              >
            </div>
          </el-col>
          <el-col :sm="12" :lg="12">
            <div ref="lottieContainer"></div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  <div>
    <Footer />
  </div>
</template>
