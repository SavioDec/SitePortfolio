# Site Portfolio - Sávio Decaro

Este é o repositório do meu portfólio pessoal e profissional, desenvolvido para consolidar minhas entregas e demonstrar minhas competências em arquitetura front-end e integrações web.

## 🚀 Tecnologias e Stack

O projeto foi construído utilizando as melhores práticas do ecossistema moderno de desenvolvimento web, garantindo alta performance, tipagem forte e escalabilidade:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) com tipagem estrita (`strict: true`)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) & CSS Modules
- **Componentização**: React.js

## 📂 Arquitetura do Projeto

A estrutura de pastas segue as diretrizes recomendadas do Next.js e princípios de *Separation of Concerns* (Separação de Responsabilidades):

- `app/`: Contém as rotas da aplicação, layouts e páginas, focando exclusivamente na camada de roteamento e renderização.
- `src/components/`: Componentes de interface (UI) reutilizáveis, isolados da lógica de roteamento.
- `src/data/`: Camada de domínio contendo a estruturação de dados estáticos do portfólio.

## 💻 Como Rodar o Projeto Localmente

Siga os passos abaixo para testar a aplicação no seu ambiente de desenvolvimento:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SavioDec/SitePortfolio.git
   cd SitePortfolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação:**
   Abra o seu navegador e acesse [http://localhost:3000](http://localhost:3000). O servidor recarregará automaticamente caso você altere o código.
