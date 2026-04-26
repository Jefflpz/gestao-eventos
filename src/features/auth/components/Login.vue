<template>
  <div class="login-page">
    <div class="login-wrapper">
      <!-- Lado Esquerdo: Formulário -->
      <div class="login-content">
        <button class="back-button" @click="router.push('/')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#232378" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>

        <img src="@/assets/icons/JBS-Logo.svg" alt="JBS Logo" class="login-logo" />

        <div class="login-header">
          <h1>Bem-vindo!</h1>
          <p>Gerencie as informações e campanhas aqui.</p>
        </div>

        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">E-mail</label>
            <div class="input-wrapper">
              <span class="input-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              <input 
                type="email" 
                id="email" 
                v-model="email" 
                class="form-control" 
                placeholder="E-mail de acesso"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label for="password">Senha</label>
            <div class="input-wrapper">
              <span class="input-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </span>
              <input 
                type="password" 
                id="password" 
                v-model="password" 
                class="form-control" 
                placeholder="Informe a senha"
                required
              />
            </div>
            <a href="#" class="forgot-password">Esqueceu a senha?</a>
          </div>
          
          <Button 
            title="Entrar" 
            variant="solid" 
            size="lg" 
            style="width: 100%"
            :disabled="isLoading"
            type="submit"
          />

          <p class="login-footer-text">
            Não tem uma conta? <span @click="scrollToSupport">Entre em contato com o time de administradores.</span>
          </p>
        </form>
      </div>

      <!-- Lado Direito: Card de Imagem -->
      <div class="login-image-card">
        <img src="@/assets/images/JBS-Matriz-Ilustracao.png" alt="Eventos" class="illustration" />
        <div class="glass-overlay">
          <h3>Eventos</h3>
          <p>Acesse o portal com todas as informações organizadas e otimizadas na plataforma de gestão de eventos JBS.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { setAccessToken } from '@/core/auth';
import Button from '@/shared/components/Buttons/Button.vue';

const router = useRouter();
const route = useRoute();

const email = ref('');
const password = ref('');
const isLoading = ref(false);

const handleLogin = async () => {
  isLoading.value = true;
  try {
    // Simulação
    await new Promise(resolve => setTimeout(resolve, 800));
    const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
    setAccessToken(fakeToken);

    const redirectPath = route.query.redirect as string || '/dashboard';
    router.push(redirectPath);
  } catch (error) {
    console.error('Erro no login', error);
  } finally {
    isLoading.value = false;
  }
};

const scrollToSupport = () => {
  // Como o suporte está no footer da Home, poderíamos redirecionar pra lá
  router.push('/#contato');
};
</script>

<style src="@/styles/features/auth/login.css" scoped></style>
