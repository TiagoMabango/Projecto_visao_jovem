# Issues Propostas

Aqui estão as issues propostas para melhorar o projeto. Pode copiar e colar este conteúdo para criar as issues no repositório do GitHub.

---

### Issue 1: Melhorar a Acessibilidade

**Título:** Melhorar a Acessibilidade com `aria-label` e Ícones SVG

**Descrição:**

Atualmente, o site tem algumas lacunas de acessibilidade que podem ser melhoradas:

*   **Links de redes sociais:** Os links de redes sociais no rodapé não têm contexto para os leitores de tela. Adicionar o atributo `aria-label` irá descrever claramente o propósito de cada link (por exemplo, `aria-label="O nosso Facebook"`).
*   **Ícones de funcionalidades:** Os ícones na seção de funcionalidades são emojis, que podem não ser interpretados de forma consistente por todos os dispositivos e leitores de tela. A substituição dos emojis por ícones SVG com a `role="img"` e um elemento `<title>` proporcionará uma experiência mais robusta e acessível.

**Tarefas:**

*   [ ] Adicionar `aria-label` a todos os links de redes sociais no rodapé.
*   [ ] Substituir todos os ícones de emoji por SVGs.
*   [ ] Assegurar que cada SVG inclui um elemento `<title>` para fins de acessibilidade.

---

### Issue 2: Refatorar o CSS

**Título:** Refatorar o CSS para Melhorar a Manutenibilidade e o Desempenho

**Descrição:**

O CSS do projeto pode ser otimizado para facilitar a manutenção e melhorar o desempenho das animações:

*   **CSS em linha:** Atualmente, existem muitos estilos definidos na tag `<style>` do `index.html`. Mover este CSS para o arquivo `modern-design.css` irá centralizar todos os estilos, tornando o código mais limpo e fácil de gerir.
*   **Desempenho da animação:** As animações de translação (`translateX`) podem ser otimizadas para tirar partido da aceleração por hardware. A utilização de `transform: translate3d()` irá garantir animações mais suaves, especialmente em dispositivos com menos recursos.

**Tarefas:**

*   [ ] Mover todo o CSS da tag `<style>` do `index.html` para `modern-design.css`.
*   [ ] Substituir `transform: translateX(-100%)` por `transform: translate3d(-100%, 0, 0)` nas animações.

---

### Issue 3: Otimizar o JavaScript

**Título:** Otimizar o JavaScript para Melhorar o Desempenho

**Descrição:**

O script de animação (`animations.js`) pode ser otimizado para um melhor desempenho:

*   **Intersection Observer:** O Intersection Observer continua a observar os elementos mesmo depois de estes se tornarem visíveis. Ao chamar `observer.unobserve(entry.target)` depois de a classe `.show` ser adicionada, podemos poupar recursos e evitar cálculos desnecessários.
*   **Reutilização de código:** A função `staggerChildren` pode ser tornada mais genérica para ser reutilizada com diferentes tipos de animações e seletores.

**Tarefas:**

*   [ ] Modificar o Intersection Observer para parar de observar os elementos depois de se tornarem visíveis.
*   [ ] Refatorar a função `staggerChildren` para maior reutilização.

---

### Issue 4: Melhorar a Semântica do HTML

**Título:** Melhorar a Semântica do HTML

**Descrição:**

A utilização de tags HTML5 mais semânticas pode melhorar a estrutura e a acessibilidade do site:

*   **Ícones de funcionalidades:** Os ícones na seção de funcionalidades podem ser envolvidos em tags `<figure>`, que são mais apropriadas para conteúdo visual como ícones.
*   **Datas da timeline:** As datas na seção da timeline podem ser envolvidas em tags `<time>`, que fornecem um significado semântico às datas.

**Tarefas:**

*   [ ] Usar tags `<figure>` para os ícones na seção de funcionalidades.
*   [ ] Usar tags `<time>` para as datas na seção da timeline.
