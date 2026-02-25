<div align="center">
  <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" alt="FrameStudio Banner" width="100%" style="border-radius: 12px; margin-bottom: 20px;" />
  
  # 📸 FrameStudio - Premium Photography Portfolio Template
  
  **O template definitivo para fotógrafos que buscam uma vitrine digital de altíssimo nível.**
  
  [Ver Demonstração Ao Vivo](https://vihisantos.github.io/portfolio-fotografo/) · [Reportar Bug](https://github.com/vihisantos/portfolio-fotografo/issues) · [Solicitar Feature](https://github.com/vihisantos/portfolio-fotografo/issues)
</div>

---

## ✨ Sobre o Template

O **FrameStudio** foi desenhado meticulosamente para fotógrafos, videomakers e artistas visuais. Com um foco brutal na estética (UI) e na experiência do usuário (UX), ele transforma visitantes em clientes de alto ticket.

Ao invés de designs genéricos, este template oferece um layout *dark mode* nativo, espaçamentos generosos, tipografia curada e animações suaves impulsionadas por `Framer Motion`.

### 🚀 Principais Features

* 🎨 **Design System Premium:** Cores neutras, contrastes perfeitos e uso elegante de tipografia *serif/sans-serif* para um tom de revista editorial.
* 🌠 **Animações Fluidas:** Reveal no scroll, transições de galeria (Masonry layout) e micro-interações em todos os botões e links.
* 📱 **100% Responsivo:** Otimizado desde o menor smartphone até monitores ultrawide 4K.
* ⚡ **Performance Absurda:** Desenvolvido com Vite + React, garantindo carregamentos instantâneos.
* 📸 **Galeria Inteligente:** Sistema de *Masonry Layout* com filtros rápidos integrados (Casamento, Retrato, Editorial, etc).
* 💸 **Landing Page de Alta Conversão:** Estrutura otimizada para captar leads: Hero atraente → Portfólio → Autoridade (Sobre) → Ancoragem de Preço (Pacotes) → Fechamento (Contato).

---

## ✨ Features (v2 - Premium Edition)

*   **Design Premium (Dark/Light Mode):** Paleta de cores sofisticada gerenciada por next-themes, focada em contraste e acessibilidade.
*   **Galeria Interativa & Lightbox:** Masonry layout e modal tela cheia com animações suaves (Framer Motion).
*   **Filtros Dinâmicos:** Classificação rápida de portfólio (Casamento, Retrato, Editorial).
*   **UX Cinematográfico:** Animações baseadas em scroll reveal (`whileInView`) e *glassmorphism* na navegação.
*   **Menu Mobile Imersivo:** Fullscreen de navegação com Backdrop Blur e entrada dinâmica de itens.
*   **Fully Responsive:** Otimizado desde o menor smartphone até displays ultrawide.
*   **Lead Generation Flow:** Formulário de contato integrado à landing page.

---

## 🛠 Tech Stack

Este projeto usa as stacks mais modernas, performáticas e amadas do mercado web atual:

* **Framework:** React 18 + Vite
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS v3
* **Animações:** Framer Motion
* **Iconografia:** Lucide React
* **Roteamento:** React Router Dom
* **Utilitários UI:** clsx + tailwind-merge (CVA)

---

## 💻 Como Instalar e Rodar Localmente

Siga o passo a passo abaixo para rodar o projeto em sua máquina em menos de 2 minutos:

```bash
# 1. Clone o repositório
git clone https://github.com/vihisantos/portfolio-fotografo.git

# 2. Entre na pasta do projeto
cd portfolio-fotografo

# 3. Instale as dependências (recomendamos npm ou pnpm)
npm install

# 4. Rode o ambiente de desenvolvimento
npm run dev
```

Pronto! Acesse `http://localhost:5173` no seu navegador.

---

## 🌎 Como Fazer o Deploy Fácil no GitHub Pages

Este template já vem configurado para o deploy no GitHub Pages. Siga os passos:

1. Modifique o arquivo `vite.config.ts`, alterando a propriedade `base` para o nome do seu repositório:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio-fotografo/', // MUDE ISSO PARA O SEU REPO
     //...
   })
   ```
2. (Opcional) Instale o pacote `gh-pages` para deploy automático:
   ```bash
   npm install gh-pages --save-dev
   ```
3. Adicione estes scripts no seu `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Rode `npm run deploy`. O seu portfólio estará online!

---

## 🎨 Customização e Design System

Se você quiser alterar a paleta de cores para se adequar à identidade da sua marca, basta editar as variáveis CSS no arquivo `src/index.css`.

O template usa a metodologia *CSS Variables* do Tailwind, tornando a alteração de todo o tema uma questão de trocar 2 ou 3 códigos hexadecimais de cor primária.

---

<div align="center">
  Criado com 🖤 por desenvolvedores apaixonados por interfaces excepcionais.
  <br />
  <br />
  <a href="#top">Voltar ao topo</a>
</div>
