<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const technologies = computed(() => [
  {
    name: t("index.our_service.ios"),
  },
  {
    name: t("index.our_service.android"),
  },
  {
    name: t("index.our_service.web"),
  },
  {
    name: t("index.our_service.desktop"),
  },
]);
</script>

<template>
  <div class="footer flex items-center justify-center bg-white">
    <div class="w-full container m-auto">
      <el-row justify="space-between" class="pt-64 md:text-left p-6">
        <el-col :xs="24" :sm="12" :lg="6" :xl="4">
          <div class="text-[20px] font-semibold">
            {{ $t("footer.social_media") }}
          </div>
          <div class="text-[16px] px-4 py-1 cursor-pointer select-none">
            {{ $t("footer.linkedin") }}
          </div>
          <div class="text-[16px] px-4 py-1 cursor-pointer select-none">
            {{ $t("footer.instagram") }}
          </div>
          <div class="text-[16px] px-4 py-1 cursor-pointer select-none">
            {{ $t("footer.telegram") }}
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :xl="4">
          <div class="text-[20px] font-semibold md:m-0 mt-6">
            {{ $t("footer.our_service") }}
          </div>
          <div class="text-[16px] px-4 py-1" v-for="technology of technologies">
            {{ technology.name }}
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :xl="4">
          <div class="text-[20px] font-semibold md:m-0 mt-6">
            {{ $t("footer.software") }}
          </div>
          <div class="text-[16px] px-4 py-1">Store master</div>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :xl="4">
          <div class="text-[20px] font-semibold md:m-0 mt-6">
            {{ $t("footer.about") }}
          </div>
          <div class="text-[16px] px-4 py-1">{{ $t("footer.connect") }}</div>
          <div class="text-[16px] px-4 py-1">{{ $t("footer.group") }}</div>
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="lg:px-[125px] text-center bg-white">
    © {{new Date().getFullYear()}} {{ $t("footer.certificate") }}
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  min-height: 600px;
  background-image: url("../assets/footer-1.svg");
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;
  color: #fff;
}
</style>
