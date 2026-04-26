<template>
  <footer class="footer" id="contato">
    <div class="footer-main">
      <!-- Logo -->
      <div class="footer-logo">
        <router-link to="/">
          <img
            src="@/assets/icons/JBS-Logo.svg"
            alt="JBS Logo"
            class="footer-logo-img"
          />
        </router-link>
      </div>

      <!-- Plataforma -->
      <div class="footer-col">
        <p class="footer-col-title">Plataforma</p>
        <a href="#funcionalidades" @click.prevent="scrollTo('funcionalidades')"
          >Funcionalidades</a
        >
        <a href="#seguranca" @click.prevent="scrollTo('funcionalidades')"
          >Segurança</a
        >
      </div>

      <!-- Suporte -->
      <div class="footer-col">
        <p class="footer-col-title">Suporte</p>
        <div class="footer-contact-item">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
            />
          </svg>
          <span>0800 123 4567</span>
        </div>
        <div class="footer-contact-item">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>jbs.marketing@gmail.com</span>
        </div>
        <div class="footer-contact-item">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>São Paulo, SP</span>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <p class="footer-copyright">© 2026</p>
      <div class="footer-legal">
        <a href="#">Termos de Uso</a>
        <a href="#">LGPD</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style src="@/styles/components/footer.css" scoped></style>
