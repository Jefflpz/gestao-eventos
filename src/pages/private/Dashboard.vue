<template>
  <div class="container">
    <div class="card">
      <h1>Área Interna (Dashboard)</h1>
      <p>Bem-vindo à área protegida do sistema.</p>
      <p>Esta página só pode ser acessada se você estiver autenticado. O código JavaScript desta rota foi carregado sob demanda (Lazy Loading).</p>
      
      <div class="info-box">
        <h3>Boas práticas aplicadas:</h3>
        <ul>
          <li><strong>Guards de Rota:</strong> Bloqueia usuários não logados.</li>
          <li><strong>Lazy Loading:</strong> O bundle desta página não é enviado para visitantes anônimos.</li>
          <li><strong>Interceptors Axios:</strong> Prontos para renovar sessão silenciosamente se a API retornar 401.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style src="../../styles/pages/dashboard.css" scoped></style>
