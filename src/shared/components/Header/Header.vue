<template>
  <header class="app-header">
    <nav class="nav-container">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/icons/JBS-Logo.svg" alt="JBS Logo" class="logo-img" />
        </router-link>
      </div>

      <!-- Links de navegação -->
      <div class="nav-links">
        <a href="#inicio" @click.prevent="scrollTo('inicio')">Início</a>
        <a href="#funcionalidades" @click.prevent="scrollTo('funcionalidades')">Funcionalidades</a>
        <a href="#contato" @click.prevent="scrollTo('contato')">Contato</a>
      </div>

      <!-- Ação -->
      <div class="nav-action">
        <Button
          v-if="!isAuth"
          title="Login"
          variant="solid"
          size="md"
          @click="router.push('/login')"
        />
        <Button
          v-if="isAuth"
          title="Sair"
          variant="ghost"
          size="md"
          @click="handleLogout"
        />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { isAuthenticated, removeTokens } from "@/core/auth";
import Button from "@/shared/components/Buttons/Button.vue";

const router = useRouter();
const isAuth = ref(isAuthenticated());

watchEffect(() => {
  router.currentRoute.value;
  isAuth.value = isAuthenticated();
});

const handleLogout = () => {
  removeTokens();
  isAuth.value = false;
  router.push("/login");
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style src="@/styles/components/header.css" scoped></style>
