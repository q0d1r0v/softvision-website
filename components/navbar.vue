<script setup lang="ts">
import { Icon } from "@iconify/vue";
const { locale, setLocale } = useI18n();
import { onClickOutside } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const links = computed(() => [
  {
    name: t("navbar.service"),
    key: "service",
  },
  {
    name: t("navbar.logic"),
    key: "logic",
  },
  {
    name: t("navbar.about"),
    key: "about",
  },
  {
    name: t("navbar.projects"),
    key: "projects",
  },
]);
const drawer = ref<boolean>(false);
const languages = [
  {
    lang: "uz",
  },
  {
    lang: "ru",
  },
  {
    lang: "en",
  },
];
const visible = ref(false);
const second_visible = ref(false);
const lang_container = ref(null);

const emit = defineEmits(["go-to-component"]);

function goToComponent(key: string, is_mobile: boolean) {
  is_mobile && (drawer.value = false);
  emit("go-to-component", key);
}
function changeLang(lang: string) {
  setLocale(lang);
  visible.value = false;
  second_visible.value = false;
  drawer.value = false;
}
onClickOutside(lang_container, (event) => {
  visible.value = false;
  second_visible.value = false;
});
</script>

<template>
  <div class="p-container">
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
            <ClientOnly>
              <el-popover
                placement="bottom"
                :width="200"
                trigger="click"
                :visible="visible"
              >
                <template #reference>
                  <el-button
                    class="m-2"
                    @click="visible = true"
                    ref="lang_container"
                    >{{
                      locale === "uz"
                        ? "Uz"
                        : locale === "ru"
                        ? "Ru"
                        : locale === "en"
                        ? "En"
                        : ""
                    }}</el-button
                  >
                </template>
                <template #default>
                  <div>
                    <div
                      v-for="language of languages"
                      :class="
                        language.lang === locale
                          ? 'bg-[#409eff] text-white rounded mt-2 cursor-pointer select-none px-2 py-1'
                          : 'hover:bg-[#409eff] hover:text-white rounded mt-2 cursor-pointer select-none px-2 py-1'
                      "
                      @click="changeLang(language.lang)"
                    >
                      {{
                        language.lang === "uz"
                          ? "Uz"
                          : language.lang === "ru"
                          ? "Ru"
                          : language.lang === "en"
                          ? "En"
                          : ""
                      }}
                    </div>
                  </div>
                </template>
              </el-popover>
            </ClientOnly>
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
        <ClientOnly>
          <el-popover
            placement="bottom"
            :width="200"
            trigger="click"
            :visible="second_visible"
          >
            <template #reference>
              <el-button
                class="m-2"
                @click="second_visible = true"
                ref="lang_container"
              >
                {{
                  locale === "uz"
                    ? "Uz"
                    : locale === "ru"
                    ? "Ru"
                    : locale === "en"
                    ? "En"
                    : ""
                }}
              </el-button>
            </template>
            <template #default>
              <div>
                <div
                  v-for="language of languages"
                  :class="
                    language.lang === locale
                      ? 'bg-[#409eff] text-white rounded mt-2 cursor-pointer select-none px-2 py-1'
                      : 'hover:bg-[#409eff] hover:text-white rounded mt-2 cursor-pointer select-none px-2 py-1'
                  "
                  @click="changeLang(language.lang)"
                >
                  {{
                    language.lang === "uz"
                      ? "Uz"
                      : language.lang === "ru"
                      ? "Ru"
                      : language.lang === "en"
                      ? "En"
                      : ""
                  }}
                </div>
              </div>
            </template>
          </el-popover>
        </ClientOnly>
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
