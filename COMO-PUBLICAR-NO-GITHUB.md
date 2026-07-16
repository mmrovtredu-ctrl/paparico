# 🐾 Como publicar o site do Paparico Pet Shop no GitHub (Windows)

Guia passo a passo para subir os arquivos **de forma automática** e ainda deixar o
site no ar de graça (GitHub Pages).

> Você vai precisar do arquivo **`paparico-pet-shop.zip`** que recebeu no chat.

---

## ✅ Parte 1 — Instalar os programas (só na primeira vez)

1. **Git for Windows** → https://git-scm.com/download/win
   - Baixe, execute e vá clicando em **Next** até **Install** (pode aceitar tudo padrão).

2. **GitHub CLI (`gh`)** → https://cli.github.com
   - Baixe o instalador do Windows e instale (Next → Install).

> Depois de instalar os dois, **feche e abra novamente** qualquer janela de terminal.

---

## ✅ Parte 2 — Preparar a pasta

1. Encontre o arquivo **`paparico-pet-shop.zip`** (provavelmente na pasta **Downloads**).
2. Clique com o botão direito → **Extrair tudo…** → **Extrair**.
3. Vai aparecer uma pasta chamada **`paparico`** com os arquivos do site dentro
   (`index.html`, `servicos.html`, … e a subpasta `assets`).

---

## ✅ Parte 3 — Abrir o terminal na pasta certa

1. Abra a pasta **`paparico`** (a que tem o `index.html` dentro).
2. Clique na **barra de endereço** do Windows Explorer (onde mostra o caminho da pasta),
   apague o que estiver escrito, digite **`cmd`** e aperte **Enter**.
3. Vai abrir uma janela preta (o terminal) **já dentro da pasta certa**. 🎯

---

## ✅ Parte 4 — Publicar (o jeito automático com `gh`)

Copie e cole os comandos abaixo **um de cada vez**, apertando **Enter** após cada um.

### 1) Entrar na sua conta do GitHub
```
gh auth login
```
Responda as perguntas assim (use as setas ↑ ↓ e Enter):
- **What account?** → `GitHub.com`
- **Preferred protocol?** → `HTTPS`
- **Authenticate Git with your GitHub credentials?** → `Yes`
- **How would you like to authenticate?** → `Login with a web browser`

Ele vai mostrar um **código** (ex.: `AB12-CD34`) e abrir o navegador.
Digite/cole o código no navegador e confirme. Pronto, está logado.

### 2) Criar o repositório e enviar TUDO de uma vez
```
gh repo create paparico-pet-shop --public --source=. --remote=origin --push
```
Esse comando sozinho:
- cria o repositório **`paparico-pet-shop`** (público) na sua conta,
- envia todos os arquivos do site.

### 3) Deixar o site no ar (GitHub Pages)
```
gh api -X POST repos/{owner}/paparico-pet-shop/pages -f "source[branch]=main" -f "source[path]=/"
```
Em ~1 minuto seu site estará disponível em:
**https://SEU-USUARIO.github.io/paparico-pet-shop/**
(troque `SEU-USUARIO` pelo seu nome de usuário do GitHub — no seu caso, provavelmente
`mmrovtredu-ctrl`.)

---

## 🔁 Alternativa sem o `gh` (usando só o Git)

Se preferir não instalar o GitHub CLI:

1. Crie primeiro o repositório vazio no site: **https://github.com/new**
   → nome **`paparico-pet-shop`**, deixe **Public**, clique em **Create repository**.
2. No terminal aberto dentro da pasta `paparico`, rode:
```
git init
git add .
git commit -m "Site do Paparico Pet Shop"
git branch -M main
git remote add origin https://github.com/mmrovtredu-ctrl/paparico-pet-shop.git
git push -u origin main
```
   (Na primeira vez o Git vai pedir para você fazer login no GitHub — é só seguir a janela.)
3. Ative o site em **Settings → Pages** do repositório: em **Branch** escolha
   **main** e **/ (root)**, clique em **Save**.

---

## ❓ Deu algum erro?

- **`'git' não é reconhecido…`** ou **`'gh' não é reconhecido…`** → o programa não foi
  instalado ou o terminal não foi reaberto. Feche o terminal, confirme a instalação e
  abra de novo.
- **Pediu usuário e senha e a senha não funciona** → o GitHub não aceita mais a senha
  normal no terminal; use o caminho do `gh auth login` (Parte 4) que resolve isso.
- Qualquer dúvida, me manda um print do erro que eu te ajudo.

---

Feito com ❤️ para o Paparico Pet Shop — Cabo Frio/RJ
