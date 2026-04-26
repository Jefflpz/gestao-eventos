# Arquitetura Base Frontend - Vue 3

Esta é a estrutura base de uma aplicação frontend escalável e segura construída com Vue 3, Vite, TypeScript, Pinia e Vue Router. O projeto segue uma arquitetura baseada em features (Domain-Driven Design no frontend), visando alto grau de organização, reutilização e baixo acoplamento.

## 📚 Tecnologias Utilizadas
- **Vue 3 (Composition API):** Framework UI.
- **Vite:** Build tool extremamente rápido.
- **TypeScript:** Tipagem estática para maior segurança e previsibilidade do código.
- **Pinia:** Gerenciamento de estado global.
- **Vue Router:** Roteamento com Lazy Loading e guards de segurança.
- **Axios:** Cliente HTTP com interceptors centralizados.
- **CSS Vanilla (Custom Properties):** Sistema de design sem dependência de frameworks de estilo, garantindo total flexibilidade e performance.
- **Fluid Design:** Uso de `clamp()` para tipografia e espaçamentos que se adaptam perfeitamente a qualquer resolução sem excesso de media queries.
- **Aesthetics:** Implementação de efeitos modernos como Glassmorphism (translucidez) e gradientes complexos.

## 📂 Estrutura de Diretórios

A estrutura da aplicação é orientada a domínio (feature-based):

```text
src/
├── app/                  # Bootstrap: main.ts, App.vue
├── core/                 # Códigos essenciais globais/singleton
│   ├── api/              # Configuração do Axios e interceptors
│   ├── auth/             # Core de gerenciamento de sessão
│   ├── config/           # Tratamento de variáveis de ambiente seguras
│   └── errors/           # (Futuro) Tratamento de erros
├── features/             # Domínios de negócio (ex: auth, dashboard, users)
│   ├── [feature-name]/   
│   │   ├── components/   # UI específica da feature
│   │   ├── composables/  # Lógica reativa local (Hooks)
│   │   ├── services/     # Comunicação com a API desta feature
│   │   └── store/        # Estado Pinia isolado da feature
├── pages/                # Views roteáveis
│   ├── public/           # Acessível sem login
│   └── private/          # Acessível apenas com login
├── router/               # Roteamento central e Navigation Guards
├── shared/               # UI, Hooks e Helpers genéricos e reutilizáveis
│   └── components/       # Design System (Button, Header, Footer, Steps, etc.)
├── stores/               # Stores Pinia globais (não presas a um domínio específico)
└── styles/               # CSS global e Design Tokens
    ├── components/       # Estilos isolados para componentes compartilhados
    ├── pages/            # Estilos específicos para páginas (Home, Login)
    └── theme.css         # Abstração semântica e tokens fluidos
```

### Por que "Feature-Based"?
Ao invés de separar por tipos técnicos (todos os componentes juntos, todos os services juntos), separamos por domínio (`features/auth`, `features/produtos`). Isso garante que ao deletar uma funcionalidade, você deleta a pasta inteira, e não precisa caçar arquivos espalhados.

## 🛡️ Estratégia de Segurança Aplicada

A aplicação conta com uma infraestrutura pensada para mitigação de vulnerabilidades comuns do Client-Side:

### 1. Separação de Rotas e Lazy Loading
Rotas internas (`/dashboard`) são importadas sob demanda via Lazy Loading. Visitantes anônimos não farão sequer o download do bundle que contém a lógica interna da aplicação. 

### 2. Guards de Autenticação
O `vue-router` possui regras (`src/router/guards.ts`) que inspecionam todas as navegações, redirecionando usuários deslogados para a página de Login e impedindo usuários logados de acessar a tela de Login novamente.

### 3. Gerenciamento Seguro de Token e API
O `Axios` está centralizado na camada `core/api/index.ts`. 
- **Request Interceptor:** Injeta automaticamente o token nas requisições.
- **Response Interceptor (Refresh Token Strategy):** Caso a API retorne HTTP 401 (Unauthorized), a aplicação fará um pause nas requisições, tentará obter um novo token silenciosamente (`/refresh`) e refará as requisições que falharam, de forma transparente para o usuário.

**Nota de Armazenamento:** Esta base provê uma implementação simples via localStorage para demonstração. Num cenário de produção de alta criticidade, considere que o backend defina um cookie `HttpOnly` e `Secure`, reduzindo massivamente a superfície de ataque para roubo de token (XSS).

### 4. Configuração Segura
Nunca exponha segredos no frontend. Utilize o `src/core/config/env.ts` para mapear variáveis com segurança usando `import.meta.env.VITE_NOME_DA_VAR`. Este arquivo centraliza o acesso e garante que a configuração flua corretamente.

### 5. Estilos e Sistema de Cores (Design Tokens)
A pasta `src/styles/` conta com variáveis CSS distribuídas de forma semântica:
- **`colors.css`**: Define as cores brutas absolutas do projeto na raiz. Nunca use Hexadecimais diretamente no seu código. Use os tokens!
- **`theme.css`**: Abstração semântica das cores e tokens fluídos. Em vez de colorir um botão de `--color-primary-blue`, nós usamos a abstração `--button-primary-bg`.
- **`variables.css`**: Contém o restante dos tokens escaláveis como espaçamentos (`--spacing-md`), bordas e definição da tipografia base usando lógica de `clamp()` para responsividade fluida.
- **`components/` & `pages/`**: Os estilos são modularizados por arquivo para evitar conflitos e facilitar a manutenção.

### 6. Gerenciamento de Fontes Customizadas
A aplicação está preparada para performance extrema no carregamento das fontes:
- Os arquivos `.ttf` ou `.woff2` vivem em `src/assets/fonts/`.
- A declaração `@font-face` acontece exclusivamente no arquivo `src/styles/fonts.css`, priorizando a diretiva `font-display: swap` para mitigar o FOUT e garantir pontuação máxima de performance.
- Fontes críticas (como pesos *Regular* e *Bold*) contam com tags `<link rel="preload">` diretas no `<head>` do `index.html`.

## 🚀 Como Rodar o Projeto

1. **Instalar Dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build para Produção:**
   ```bash
   npm run build
   ```
