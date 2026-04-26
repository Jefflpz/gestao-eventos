<template>
  <div class="Initial">
    <!-- FIRST PAGE -->
    <section class="initial-page" id="inicio">
      <Header />
      <div class="content">
        <div class="texts">
          <p class="head-text text-display">
            Gestão de
            <span class="highlight">Eventos e Stakeholders</span>
          </p>
          <p class="text-body-lg">
            A área de marketing é um dos pilares para o coração da empresa
            bombear, a plataforma facilita a visão, gerenciamento e as tomadas
            de decisões.
          </p>
          <div class="buttons">
            <Button
              title="Acessar Sistema"
              variant="solid"
              size="lg"
              @click="goToLogin"
            />
            <Button
              title="Saiba Mais"
              variant="ghost"
              size="lg"
              @click="scrollToFeatures"
            />
          </div>
        </div>

        <img
          src="../../assets/images/JBS-Matriz-Ilustracao.png"
          alt="Ilustração JBS"
          class="first-image"
        />
      </div>
    </section>

    <!-- COMO FUNCIONA -->
    <section class="third-page" id="funcionalidades">
      <p class="title">Como Funciona</p>
      <div class="steps-wrapper">
        <Steps
          number="01"
          title="Faça seu Login"
          step="Acesse com suas credenciais seguras em qualquer dispositivo."
        />
        <Steps
          number="02"
          title="Acesse a plataforma"
          step="Tenha uma visão panorâmica dos eventos relacionados a você."
        />
        <Steps
          number="03"
          title="Gerencie e Visualize"
          step="Dependendo do nível de acesso, é possível editar, ajustar, alterar e gerenciar informações dentro da plataforma."
        />
      </div>
    </section>

    <!-- EXPERIÊNCIAS PERSONALIZADAS -->
    <section class="last-page">
      <div class="head-title">
        <p class="title">Experiências Personalizadas</p>
        <p class="subtitle">
          Ferramentas focadas nas necessidades reais de cada usuário.
        </p>
      </div>
      <div class="cards">
        <div class="exp-card">
          <div class="exp-card-header">
            <div class="exp-icon admin-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <p class="exp-card-title">Administradores da plataforma</p>
          </div>
          <div class="exp-benefits">
            <div v-for="b in adminBenefits" :key="b.title" class="exp-check">
              <svg
                class="check-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <div>
                <p class="exp-benefit-title">{{ b.title }}</p>
                <p class="exp-benefit-desc">{{ b.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="exp-card">
          <div class="exp-card-header">
            <div class="exp-icon stakeholder-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M20 21a8 8 0 1 0-16 0" />
              </svg>
            </div>
            <p class="exp-card-title">Para Donos de Stakeholders</p>
          </div>
          <div class="exp-benefits">
            <div
              v-for="b in stakeholderBenefits"
              :key="b.title"
              class="exp-check"
            >
              <svg
                class="check-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <div>
                <p class="exp-benefit-title">{{ b.title }}</p>
                <p class="exp-benefit-desc">{{ b.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import Header from "@/shared/components/Header/Header.vue";
import Button from "@/shared/components/Buttons/Button.vue";
import Steps from "@/shared/components/Steps/Steps.vue";
import Footer from "@/shared/components/Footer/Footer.vue";

const router = useRouter();

const goToLogin = () => router.push("/login");

const scrollToFeatures = () => {
  document
    .getElementById("funcionalidades")
    ?.scrollIntoView({ behavior: "smooth" });
};

const adminBenefits = [
  {
    title: "Eventos",
    desc: "Controle total sobre eventos, pode criar, editar e apagar.",
  },
  {
    title: "Visualização Geral",
    desc: "Pode ver todos os resultados e acessar todos os números e informações sobre cada registro já feito.",
  },
  {
    title: "Gestão de usuários",
    desc: "Consegue criar, editar e excluir Donos de stakeholders. Podem gerenciar qualquer tipo de perfil existente.",
  },
];

const stakeholderBenefits = [
  {
    title: "Visualização",
    desc: "Consegue ver todos os eventos relacionados a ele.",
  },
  {
    title: "Gerenciamento de stakeholders",
    desc: "Consegue criar, editar e excluir stakeholders relacionados a ele.",
  },
];
</script>

<style src="../../styles/pages/home.css" scoped></style>
