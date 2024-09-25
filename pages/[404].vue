<template>
  <div class="h-screen flex items-center justify-center">
    <div>
      <img
        src="../assets/not-found.svg"
        alt="#not_found"
        class="lg:w-[600px] w-[340px]"
      />
      <div class="flex items-center justify-center mt-14">
        <el-button type="primary" plain size="large" @click="$router.push('/')"
          >Bosh sahifaga qaytish</el-button
        >
      </div>
    </div>
  </div>
</template>
