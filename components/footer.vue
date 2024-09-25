<script setup lang="ts">
const technologies = [
  {
    name: "iOS",
  },
  {
    name: "Android",
  },
  {
    name: "Web development",
  },
  {
    name: "Desktop development",
  },
];
</script>

<template>
  <div class="footer flex items-center justify-center">
    <div class="w-full container m-auto">
      <el-row justify="space-between" class="pt-64 md:text-left p-6">
        <el-col :xs="24" :sm="12" :lg="6" :xl="4">
          <div class="text-[20px] font-semibold">Ijtimoiy tarmoq</div>
          <div class="text-[16px] px-4 py-1 cursor-pointer select-none">
            Linkedin
          </div>
          <div class="text-[16px] px-4 py-1 cursor-pointer select-none">
            Instagram
          </div>
          <div class="text-[16px] px-4 py-1 cursor-pointer select-none">
            Telegram
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :xl="4">
          <div class="text-[20px] font-semibold md:m-0 mt-6">Xizmatlarimiz</div>
          <div class="text-[16px] px-4 py-1" v-for="technology of technologies">
            {{ technology.name }}
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :xl="4">
          <div class="text-[20px] font-semibold md:m-0 mt-6">Dasturlar</div>
          <div class="text-[16px] px-4 py-1">Store master</div>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="6" :xl="4">
          <div class="text-[20px] font-semibold md:m-0 mt-6">Biz haqimizda</div>
          <div class="text-[16px] px-4 py-1">Bog'lanish</div>
          <div class="text-[16px] px-4 py-1">Jamoa</div>
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="lg:px-[125px] text-center">
    © 2024 - Softvision. Barcha huquqlar himoyalangan
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  min-height: 600px;
  background-image: url("../assets/footer-1.svg");
  background-position: right top;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
}
</style>
