# 🎨 Guia de Estilos e Padrões (Styleguide)

Este documento serve como referência técnica para desenvolvedores que irão atuar na manutenção e evolução da interface deste projeto.

## 1. Sistema de Cores (Design Tokens)

As cores não devem ser aplicadas via valores hexadecimais ou RGB diretamente. Utilize as **Custom Properties** definidas em `src/styles/colors.css`.

### Cores Base (Paleta Absoluta)
- `--color-primary-blue`: `#0046b5` (Principal JBS)
- `--color-secondary-royal-blue`: `#232378` (Azul Profundo)
- `--color-secondary-sky-blue`: `#e0f0ff` (Azul Suave)
- `--color-secondary-leaf-green`: `#61c58d` (Verde para gradientes)
- `--color-primary-white`: `#ffffff`

### Abstração Semântica (`theme.css`)
Sempre prefira usar as variáveis semânticas para garantir consistência:
- `var(--bg-primary)`: Cor de fundo de cards e seções brancas.
- `var(--text-primary)`: Cor padrão de títulos e textos fortes.
- `var(--text-secondary)`: Cor para descrições e legendas.

### Gradientes Padronizados
- `--gradient-primary`: Azul JBS -> Azul Royal.
- `--gradient-accent`: Azul Royal -> Verde Folha (Usado em destaques e logos).

---

## 2. Tipografia Fluida

O projeto utiliza **Fluid Typography**. Em vez de usar media queries para cada tamanho de tela, usamos a função `clamp()` em `src/styles/typography.css`:

```css
/* Exemplo de título que escala sozinho */
.text-display {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
}
```
**Regra:** Não altere tamanhos de fonte em componentes específicos sem verificar os tokens globais primeiro.

---

## 3. Layout e Grid

- **Contenção**: Todo conteúdo principal deve ser envolvido em containers com `max-width: 90rem` (1440px) para evitar que a interface se "espalhe" em monitores Ultra-Wide.
- **Espaçamento**: Use a variável `rem` baseada em múltiplos de 4px ou 8px para manter o ritmo vertical.

---

## 4. Componentes Compartilhados (`src/shared/components`)

### Botões (`Button.vue`)
Não crie botões manuais. Use o componente `Button`:
- `variant="solid"`: Botão principal preenchido.
- `variant="ghost"`: Botão vazado com borda.
- `variant="gradient"`: Botão com o gradiente de destaque.

### Header & Footer
Ambos são centralizados em `shared/` e utilizam o sistema de **Smooth Scroll** via `id` (ex: `href="#contato"`).

---

## 5. Boas Práticas de CSS

1. **Modulariade**: Estilos de páginas específicas devem morar em `src/styles/pages/[nome].css`.
2. **Glassmorphism**: Para efeitos de vidro, utilize:
   ```css
   background: rgba(255, 255, 255, 0.4);
   backdrop-filter: blur(12px);
   border: 1px solid rgba(255, 255, 255, 0.6);
   ```
3. **Transparências**: Use `color-mix(in srgb, var(--cor) 40%, transparent)` em vez de criar novas cores com opacidade fixa.

---

## 🚀 Como contribuir com a UI?
Antes de criar uma nova seção, verifique se os tokens em `variables.css` atendem a sua necessidade. Se precisar de uma nova cor, adicione primeiro em `colors.css` e depois crie o token semântico em `theme.css`.
