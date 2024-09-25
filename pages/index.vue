<script setup lang="ts">
import lottie from "lottie-web";
import TopTitle from "../components/top-title.vue";
import NavBar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import ScrollToTop from "../components/scroll-to-top.vue";

const { setLocale } = useI18n();

const lottieContainer = ref<any>(null);
const service = ref<HTMLElement | null>(null);
const logic = ref<HTMLElement | null>(null);
const about = ref<HTMLElement | null>(null);
const projects = ref<HTMLElement | null>(null);

function goToComponent(key: string) {
  if (key === "service" && service.value) {
    service.value.scrollIntoView({ behavior: "smooth" });
  } else if (key === "logic" && logic.value) {
    logic.value.scrollIntoView({ behavior: "smooth" });
  } else if (key === "about" && about.value) {
    about.value.scrollIntoView({ behavior: "smooth" });
  } else if (key === "projects" && projects.value) {
    projects.value.scrollIntoView({ behavior: "smooth" });
  }
}

definePageMeta({
  title: "Softvision - Innovative Software Solutions for Retail",
  meta: [
    // English Meta Tags
    {
      name: "description",
      content:
        "Softvision is a leading IT company specializing in innovative software solutions for the retail sector. We provide custom applications, inventory management systems, and effective e-commerce solutions to enhance your business performance.",
    },
    {
      name: "keywords",
      content:
        "Softvision, IT company, software solutions, retail software, inventory management, e-commerce solutions, custom applications, business automation, innovative technology",
    },

    // Uzbek Meta Tags
    {
      name: "description-uz",
      content:
        "Softvision — chakana savdo sohasida innovatsion dasturiy yechimlar taqdim etuvchi yetakchi IT kompaniyasi. Biz sizning biznesingiz samaradorligini oshirish uchun maxsus ilovalar, inventarizatsiya boshqaruvi tizimlari va samarali elektron tijorat yechimlari taqdim etamiz.",
    },
    {
      name: "keywords-uz",
      content:
        "Softvision, IT kompaniyasi, dasturiy yechimlar, chakana dasturiy ta'minot, inventarizatsiya boshqaruvi, elektron tijorat yechimlari, maxsus ilovalar, biznesni avtomatlashtirish, innovatsion texnologiya",
    },

    // Russian Meta Tags
    {
      name: "description-ru",
      content:
        "Softvision — ведущая IT-компания, специализирующаяся на инновационных программных решениях для розничного сектора. Мы предоставляем индивидуальные приложения, системы управления запасами и эффективные решения для электронной коммерции для повышения производительности вашего бизнеса.",
    },
    {
      name: "keywords-ru",
      content:
        "Softvision, IT компания, программные решения, розничное программное обеспечение, управление запасами, решения для электронной коммерции, индивидуальные приложения, автоматизация бизнеса, инновационные технологии",
    },

    // General Author Tag
    { name: "author", content: "Softvision Team" },
  ],
});

onMounted(() => {
  lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../animation-1727189793227.json",
  });
  setLocale(localStorage.getItem("lang") || "uz");
});
</script>
<template>
  <div>
    <TopTitle />
  </div>
  <div class="border-b border-[#40a0ff34]">
    <NavBar @go-to-component="goToComponent" />
  </div>
  <div class="container m-auto bg-white">
    <div class="md:p-0 p-6">
      <div class="top-side">
        <el-row
          justify="space-between"
          align="middle"
          class="md:pt-44 pt-10 md:text-left text-center"
          :gutter="10"
        >
          <el-col :sm="12" :lg="12">
            <div
              class="lg:text-[44px] text-[24px] font-semibold lg:leading-[3.3rem]"
            >
              {{ $t("index.main.title") }}
            </div>
            <div class="mt-4 text-[16px]">
              {{ $t("index.main.text") }}
            </div>
            <div class="mt-4">
              <el-button type="primary" plain size="large">{{
                $t("index.main.btn_text")
              }}</el-button>
            </div>
          </el-col>
          <el-col :sm="12" :lg="12">
            <div ref="lottieContainer"></div>
          </el-col>
        </el-row>
      </div>
      <div class="main-side">
        <div
          class="lg:mt-[120px] lg:text-[36px] text-[22px] mt-[54px] text-center text-[#409eff]"
          ref="service"
        >
          {{ $t("index.our_service.title") }}
        </div>
        <el-row
          justify="space-between"
          align="middle"
          class="md:text-left text-center lg:mt-[60px] mt-[40px]"
          :gutter="10"
        >
          <el-col :sm="12" :lg="12">
            <div
              class="lg:text-[24px] text-[18px] font-semibold lg:leading-[3.3rem]"
            >
              {{ $t("index.our_service.ios") }}
            </div>
            <div class="mt-4 text-[16px]">
              {{ $t("index.our_service.info_of_ios") }}
            </div>
            <div class="flex items-center justify-center mt-6 md:hidden">
              <img
                src="../assets/iOS.svg"
                alt="#ios"
                class="lg:w-[380px] w-[300px]"
              />
            </div>
          </el-col>
          <el-col :sm="12" :lg="12">
            <div class="md:flex items-center justify-center mt-6 hidden">
              <img
                src="../assets/iOS.svg"
                alt="#ios"
                class="lg:w-[380px] w-[300px]"
              />
            </div>
          </el-col>
        </el-row>

        <el-row
          justify="space-between"
          align="middle"
          class="md:text-left text-center lg:mt-[100px] mt-[40px]"
          :gutter="10"
        >
          <el-col :sm="12" :lg="12">
            <div class="md:flex items-center justify-center mt-6 hidden">
              <img
                src="../assets/android.svg"
                alt="#ios"
                class="lg:w-[260px] w-[180px]"
              />
            </div>
          </el-col>
          <el-col :sm="12" :lg="12">
            <div
              class="lg:text-[24px] text-[18px] font-semibold lg:leading-[3.3rem] lg:mt-[70px] mt-[50px]"
            >
              {{ $t("index.our_service.android") }}
            </div>
            <div class="mt-4 text-[16px]">
              {{ $t("index.our_service.info_of_android") }}
            </div>
            <div class="flex items-center justify-center mt-6 md:hidden">
              <img
                src="../assets/android.svg"
                alt="#ios"
                class="lg:w-[380px] w-[200px]"
              />
            </div>
          </el-col>
        </el-row>

        <el-row
          justify="space-between"
          align="middle"
          class="md:text-left text-center lg:mt-[100px] mt-[40px]"
          :gutter="10"
        >
          <el-col :sm="12" :lg="12">
            <div
              class="lg:text-[24px] text-[18px] font-semibold lg:leading-[3.3rem] lg:mt-[70px] mt-[50px]"
            >
              {{ $t("index.our_service.web") }}
            </div>
            <div class="mt-4 text-[16px]">
              {{ $t("index.our_service.info_of_web_development") }}
            </div>
            <div class="flex items-center justify-center mt-6 md:hidden">
              <img
                src="../assets/web-development.svg"
                alt="#ios"
                class="w-[280px]"
              />
            </div>
          </el-col>

          <el-col :sm="12" :lg="12">
            <div class="md:flex items-center justify-center mt-6 hidden">
              <img
                src="../assets/web-development.svg"
                alt="#ios"
                class="lg:w-[350px]"
              />
            </div>
          </el-col>
        </el-row>

        <el-row
          justify="space-between"
          align="middle"
          class="md:text-left text-center lg:mt-[100px] mt-[40px]"
          :gutter="10"
        >
          <el-col :sm="12" :lg="12">
            <div class="md:flex items-center justify-center mt-6 hidden">
              <img
                src="../assets/desktop-development.svg"
                alt="#ios"
                class="lg:w-[440px]"
              />
            </div>
          </el-col>
          <el-col :sm="12" :lg="12">
            <div
              class="lg:text-[24px] text-[18px] font-semibold lg:leading-[3.3rem] lg:mt-[70px] mt-[50px]"
            >
              {{ $t("index.our_service.desktop") }}
            </div>
            <div class="mt-4 text-[16px]">
              {{ $t("index.our_service.info_of_desktop_development") }}
            </div>
            <div class="flex items-center justify-center mt-6 md:hidden">
              <img
                src="../assets/desktop-development.svg"
                alt="#ios"
                class="w-[360px]"
              />
            </div>
          </el-col>
        </el-row>

        <div
          class="lg:mt-[120px] lg:text-[36px] text-[22px] mt-[54px] text-center text-[#409eff]"
          ref="logic"
        >
          {{ $t("index.our_service.innovation_title") }}
        </div>
        <div
          class="md:text-left text-center lg:mt-[60px] mt-[40px] border rounded-md p-8 border-[#40a0ff60] select-none"
        >
          {{ $t("index.our_service.innovation_text") }}
        </div>
      </div>

      <div
        class="lg:mt-[120px] lg:text-[36px] text-[22px] mt-[54px] text-center text-[#409eff]"
        ref="about"
      >
        {{ $t("index.our_service.about_title") }}
      </div>
      <div
        class="md:text-left text-center lg:mt-[60px] mt-[40px] border rounded-md p-8 border-[#40a0ff60] select-none"
      >
        {{ $t("index.our_service.about_text") }}
      </div>

      <div
        class="lg:mt-[120px] lg:text-[36px] text-[22px] mt-[54px] text-center text-[#409eff]"
        ref="projects"
      >
        {{ $t("index.our_service.projects_title") }}
      </div>
      <div
        class="md:text-left text-center lg:mt-[60px] mt-[40px] border rounded-md p-8 border-[#40a0ff60] select-none"
      >
        <span class="font-semibold">"StoreMaster":</span
        >{{ $t("index.our_service.projects_text") }}
      </div>
    </div>
  </div>
  <div>
    <ScrollToTop />
  </div>
  <div>
    <Footer />
  </div>
</template>
