document.addEventListener('DOMContentLoaded', () => {

    const lines = [
        `<span class="syntax-comment">/**`,
        `<span class="syntax-comment"> * Olá! Eu sou o Ageu Silva.`,
        `<span class="syntax-comment"> * Bem-vindo ao meu portfólio interativo.`,
        `<span class="syntax-comment"> */</span>`,
        ``,
        `<span class="syntax-keyword">const</span> <span class="syntax-variable">ageuSilva</span> = {`,
        `  <span class="syntax-prop">nome</span>: <span class="syntax-string">'Ageu Silva'</span>,`,
        `  <span class="syntax-prop">titulo</span>: <span class="syntax-string">'Desenvolvedor de Software'</span>,`,
        `  <span class="syntax-prop">sobreMim</span>: <span class="syntax-string">'Sou apaixonado por tecnologia e sempre em busca de aprender. Atualmente, trabalho na TOTVS como analista de suporte.'</span>,`,
        ``,
        `  <span class="syntax-prop">social</span>: {`,
        `    <span class="syntax-prop">github</span>: <span class="syntax-string">'<a href="https://github.com/Ageursilva" target="_blank" class="hover:underline">https://github.com/Ageursilva</a>'</span>,`,
        `    <span class="syntax-prop">linkedin</span>: <span class="syntax-string">'<a href="https://linkedin.com/in/ageursilva" target="_blank" class="hover:underline">https://linkedin.com/in/ageursilva</a>'</span>,`,
        `    <span class="syntax-prop">blog</span>: <span class="syntax-string">'<a href="https://ageu.blog/" target="_blank" class="hover:underline">https://ageu.tech/</a>'</span>`,
        `  },`,
        ``,
        `  <span class="syntax-prop">stackPrincipal</span>: [`,
        `    <span class="syntax-string">'Python'</span>, <span class="syntax-string">'JavaScript'</span>, <span class="syntax-string">'SQL'</span>, <span class="syntax-string">'Node.js'</span>,`,
        `    <span class="syntax-string">'Flask'</span>, <span class="syntax-string">'Linux'</span>, <span class="syntax-string">'Git'</span>, <span class="syntax-string">'APIs'</span>`,
        `  ],`,
        ``,
        `  <span class="syntax-prop">projetos</span>: [`,
        `    {`,
        `      <span class="syntax-prop">nome</span>: <span class="syntax-string">'AgeuBlog - Jardim Digital'</span>,`,
        `      <span class="syntax-prop">desc</span>: <span class="syntax-string">'Blog seguro com proteção CSRF/XSS, SEO (Sitemap/RSS) e editor QuillJS.'</span>,`,
        `      <span class="syntax-prop">tech</span>: [<span class="syntax-string">'Python'</span>, <span class="syntax-string">'Flask'</span>, <span class="syntax-string">'SQLAlchemy'</span>, <span class="syntax-string">'JS'</span>],`,
        `      <span class="syntax-prop">links</span>: {`,
        `        <span class="syntax-prop">codigo</span>: <span class="syntax-string">'<a href="https://github.com/Ageursilva/ageublog" target="_blank" class="hover:underline">Ver Código</a>'</span>,`,
        `        <span class="syntax-prop">demo</span>: <span class="syntax-string">'<a href="https://ageu.blog/" target="_blank" class="hover:underline">Ver Blog</a>'</span>`,
        `      }`,
        `    },`,
        `    {`,
        `      <span class="syntax-prop">nome</span>: <span class="syntax-string">'Aplicativo de Jogo "Eu Nunca"'</span>,`,
        `      <span class="syntax-prop">desc</span>: <span class="syntax-string">'App desktop divertido e interativo. Carrega frases de um JSON externo.'</span>,`,
        `      <span class="syntax-prop">tech</span>: [<span class="syntax-string">'Python'</span>, <span class="syntax-string">'Kivy'</span>, <span class="syntax-string">'KivyMD'</span>],`,
        `      <span class="syntax-prop">links</span>: {`,
        `        <span class="syntax-prop">codigo</span>: <span class="syntax-string">'<a href="https://github.com/Ageursilva/EuNunca" target="_blank" class="hover:underline">Ver Código</a>'</span>`,
        `      }`,
        `    }`,
        `  ]`,
        `};`,
        ``,
        `<span class="syntax-keyword">function</span> <span class="syntax-function">entrarEmContato</span>() {`,
        `  <span class="syntax-comment">// Estou sempre aberto a novas oportunidades e colaborações.</span>`,
        `  window.location.href = <span class="syntax-string">'mailto:ageu@duck.com'</span>;`,
        `}`,
        ``,
        `<span class="syntax-comment">// Vamos conversar?</span>`,
        `<button onclick="entrarEmContato()">`,
        `  Enviar um E-mail`,
        `</button>`
    ];

    const lineNumbersEl = document.getElementById('line-numbers');
    const codeEl = document.getElementById('code-content');

    let lineIndex = 0;
    let charIndex = 0;
    const charTypingSpeed = 15;
    const lineDelay = 75;

    let currentLineNumEl;
    let currentCodeLineEl;

    function type() {
        if (lineIndex >= lines.length) return;

        if (charIndex === 0) {
            currentLineNumEl = document.createElement('div');
            currentLineNumEl.textContent = lineIndex + 1;
            lineNumbersEl.appendChild(currentLineNumEl);

            currentCodeLineEl = document.createElement('div');
            currentCodeLineEl.innerHTML = ' ';
            codeEl.appendChild(currentCodeLineEl);
        }

        const lineText = lines[lineIndex];

        if (charIndex < lineText.length) {
            currentCodeLineEl.innerHTML = lineText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, charTypingSpeed);
        } else {
            lineIndex++;
            charIndex = 0;

            window.scrollTo(0, document.body.scrollHeight);

            setTimeout(type, lineDelay);
        }
    }

    type();
});
