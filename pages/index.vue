<script setup lang="ts">
import lottie from "lottie-web";
import TopTitle from "../components/top-title.vue";
import NavBar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import ScrollToTop from "../components/scroll-to-top.vue";

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
      <div class="main-side">
        <div
          class="lg:mt-[120px] lg:text-[36px] text-[22px] mt-[54px] text-center text-[#409eff]"
          ref="service"
        >
          Bizning xizmatlar
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
              iOS
            </div>
            <div class="mt-4 text-[16px]">
              Softvision IT kompaniyasi sifatida, iOS platformasi uchun sifatli
              va funksional mobil ilovalar ishlab chiqamiz. Bizning jamoamiz iOS
              dasturlarini yaratishda zamonaviy texnologiyalarni qo'llaydi va
              foydalanuvchilar uchun mukammal tajriba taqdim etishga intiladi.
              Ilovalaringiz tez, xavfsiz va doimiy ishlashini ta'minlash bilan
              birga, ularning foydalanuvchilar talablariga mos ravishda
              optimallashtirilishini kafolatlaymiz. Agar siz biznesingizni
              raqamli platformada rivojlantirishni istasangiz, Softvision siz
              uchun ajoyib yechim bo'ladi.
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
              Android
            </div>
            <div class="mt-4 text-[16px]">
              Softvision jamoasi Android platformasi uchun yuqori sifatli va
              innovatsion mobil ilovalar yaratadi. Bizning mutaxassislarimiz
              sizning biznesingizga moslashgan, tezkor va foydalanuvchi
              ehtiyojlarini inobatga olgan ilovalarni ishlab chiqishga tayyor.
              Android ilovalari keng doiradagi qurilmalarda barqaror ishlashini
              ta'minlaymiz va zamonaviy texnologiyalar orqali maksimal
              unumdorlikka erishamiz. Softvision bilan siz biznesingiz uchun
              samarali va raqamli rivojlanish yo'lini topasiz!
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
              Web development
            </div>
            <div class="mt-4 text-[16px]">
              Softvision IT kompaniyasi sifatida, biznesingizni onlayn
              muvaffaqiyatga yetaklash uchun sifatli va zamonaviy veb-saytlar
              yaratamiz. Bizning web development xizmatlarimiz samaradorlik,
              tezkorlik va foydalanuvchi tajribasini birlashtiradi.
              Mutaxassislarimiz sizning talablaringiz va maqsadlaringizga
              moslashgan veb-saytlarni ishlab chiqishadi, ular mobil va desktop
              qurilmalarda birdek a'lo darajada ishlaydi. E-tijorat, korporativ
              saytlar yoki murakkab web dasturlar – Softvision jamoasi har
              qanday loyihani yuqori sifat bilan amalga oshirishga tayyor!
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
              Desktop development
            </div>
            <div class="mt-4 text-[16px]">
              Softvision jamoasi sizning biznesingiz uchun kuchli va samarali
              desktop dasturlarni ishlab chiqishga ixtisoslashgan. Biz Windows,
              macOS va Linux platformalarida yuqori darajadagi foydalanuvchi
              tajribasini taqdim etadigan, tezkor va barqaror dasturlar
              yaratamiz. Desktop dasturlarimiz sizning ish jarayonlaringizni
              avtomatlashtirish, unumdorlikni oshirish va ma'lumotlar
              xavfsizligini ta'minlashga qaratilgan. Agar biznesingizga maxsus
              yechimlar kerak bo'lsa, Softvision sizga ishonchli va innovatsion
              dasturiy ta'minotni taklif etadi.
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
          Innovatsion yechimlar
        </div>
        <div
          class="md:text-left text-center lg:mt-[60px] mt-[40px] border rounded-md p-8 border-[#40a0ff60] select-none"
        >
          Softvision IT kompaniyasi sifatida, biz innovatsion yechimlar orqali
          sizning biznesingizni yangi bosqichga olib chiqamiz. Bizning
          mutaxassislarimiz zamonaviy texnologiyalar va ilg‘or dasturlash
          uslublaridan foydalangan holda, biznesingiz uchun moslashtirilgan
          raqamli yechimlarni ishlab chiqadilar. Innovatsiyalar orqali siz
          jarayonlarni avtomatlashtirishingiz, unumdorlikni oshirishingiz va
          yangi imkoniyatlarni kashf qilishingiz mumkin. Softvision bilan
          ishlash — bu kelajak texnologiyalari bilan birga rivojlanish demakdir!
        </div>
      </div>

      <div
        class="lg:mt-[120px] lg:text-[36px] text-[22px] mt-[54px] text-center text-[#409eff]"
        ref="about"
      >
        Biz haqimizda
      </div>
      <div
        class="md:text-left text-center lg:mt-[60px] mt-[40px] border rounded-md p-8 border-[#40a0ff60] select-none"
      >
        Softvision — tadbirkorlar uchun zamonaviy dasturiy ta’minot yechimlarini
        taqdim etuvchi IT kompaniya. Bizning asosiy maqsadimiz — biznes
        jarayonlarini avtomatlashtirish va raqamli rivojlanishni tezlashtirish
        orqali mijozlarimizga samarali va innovatsion dasturiy ta’minot
        yaratish. Jamoamiz yuqori malakali mutaxassislardan iborat bo‘lib, turli
        sohalarda chuqur tajribaga ega. Har bir loyiha uchun biz mijozning
        ehtiyojlarini chuqur tushunib, optimal yechimlarni taklif etamiz.
        Softvision bilan siz ishonchli, barqaror va ilg‘or texnologiyalarga
        asoslangan dasturiy yechimlarga ega bo‘lasiz.
      </div>

      <div
        class="lg:mt-[120px] lg:text-[36px] text-[22px] mt-[54px] text-center text-[#409eff]"
        ref="projects"
      >
        Loyihalar
      </div>
      <div
        class="md:text-left text-center lg:mt-[60px] mt-[40px] border rounded-md p-8 border-[#40a0ff60] select-none"
      >
        <span class="font-semibold">StoreMaster:</span> Softvision tomonidan
        ishlab chiqilgan StoreMaster dasturi – savdo yo‘nalishidagi biznesingiz
        uchun professional va zamonaviy yechim. StoreMaster orqali siz
        tovarlarni boshqarish, mijozlar bilan ishlash, sotuvlar va ombor
        nazoratini bir joyda samarali tarzda boshqarishingiz mumkin. Dastur
        kassa boshqaruvini ham to‘liq avtomatlashtiradi, bu esa sotuvlar
        jarayonini soddalashtiradi va xatolarni kamaytiradi. Kassa
        operatsiyalarini nazorat qilish, hisobotlarni tahlil qilish va real
        vaqtda moliyaviy ko‘rsatkichlarni kuzatib borish imkoniyati bilan
        biznesingizni yanada samarali boshqarasiz. Tezkor, xavfsiz va intuitiv
        interfeys orqali StoreMaster biznesingizni yangi bosqichga olib chiqadi.
        Savdoni va kassa boshqaruvini avtomatlashtirishni istaysizmi?
        StoreMaster siz uchun yaxshi yechim bo'laoladi!
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
