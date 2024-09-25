<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ElDrawer } from "element-plus";

const links = [
  {
    name: "Bizning xizmatlar",
    key: "service",
  },
  {
    name: "Innovatsion yechimlar",
    key: "logic",
  },
  {
    name: "Biz haqimizda",
    key: "about",
  },
  {
    name: "Loyihalar",
    key: "projects",
  },
];
const drawer = ref<boolean>(false);

const emit = defineEmits(["go-to-component"]);

function goToComponent(key: string, is_mobile: boolean) {
  is_mobile && (drawer.value = false);
  emit("go-to-component", key);
}
</script>

<template>
  <div class="p-container bg-white">
    <div class="md:py-4 top-bar container m-auto">
      <div class="md:block hidden">
        <div class="flex items-center justify-between gap-6">
          <div>
            <div
              class="text-4xl font-semibold cursor-pointer select-none text-[#409eff]"
            >
              Softvision
            </div>
          </div>
          <div class="flex items-center gap-8 select-none">
            <div
              v-for="menu of links"
              class="cursor-pointer hover:text-[#409eff] transition-all text-[16px]"
              @click="goToComponent(menu.key, false)"
            >
              {{ menu.name }}
            </div>
          </div>
          <div>
            <el-button type="primary" plain size="large">Uz</el-button>
          </div>
        </div>
      </div>

      <div class="md:hidden p-6 flex items-center justify-between">
        <div
          class="text-2xl font-semibold cursor-pointer select-none text-[#409eff]"
        >
          Softvision
        </div>
        <div>
          <Icon
            icon="ri-menu-line"
            class="select-none cursor-pointer text-2xl"
            @click="drawer = true"
          />
        </div>
      </div>
    </div>
  </div>
  <el-drawer v-model="drawer" size="100%" v-if="drawer">
    <div>
      <div>
        <div
          class="text-4xl font-semibold cursor-pointer select-none text-[#409eff]"
        >
          Softvision
        </div>
      </div>
      <div class="select-none mt-4">
        <div
          v-for="menu of links"
          class="cursor-pointer hover:text-[#409eff] transition-all text-[16px] mt-2"
          @click="goToComponent(menu.key, true)"
        >
          {{ menu.name }}
        </div>
      </div>
      <div class="mt-4">
        <el-button type="primary" plain size="large">Uz</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<style scoped>
.top-bar {
  background-color: #ffffff10;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>
