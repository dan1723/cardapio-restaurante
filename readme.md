 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
new file mode 100644
index 0000000000000000000000000000000000000000..de64f8954aace150ecd175113da13a01105c9477
--- /dev/null
+++ b/README.md
@@ -0,0 +1,85 @@
+# Cardápio de Restaurante
+
+O Cardápio de Restaurante é uma aplicação web feita em React que apresenta um cardápio dinâmico para restaurantes. O projeto simula a experiência de um cardápio digital com categorias filtráveis, cards ilustrados e preços sempre visíveis, tornando simples explorar as opções do menu.
+
+## Funcionalidades
+
+- **Banner de destaque** com a identidade visual do restaurante logo no topo da página.
+- **Categorias interativas** (Pratos Principais, Sobremesas e Bebidas) controladas por estado, permitindo filtrar os itens do cardápio com um clique.
+- **Listagem dinâmica de cards**, montada a partir de dados estruturados e enriquecidos com imagens, descrições e preços.
+- **Interface responsiva** que reorganiza o grid de cards e categorias para telas menores, garantindo boa experiência em dispositivos móveis.
+
+## Tecnologias utilizadas
+
+- [React 19](https://react.dev/) com hooks para controle de estado (`useState`).
+- [Vite](https://vitejs.dev/) para desenvolvimento rápido e empacotamento.
+- CSS moderno, com uso de grid e flexbox para o layout e media queries para responsividade.
+
+## Estrutura de pastas
+
+```
+cardapio-restaurante/
+├── src/
+│   ├── App.jsx          # Componente raiz que organiza o banner, categorias e cards
+│   ├── App.css          # Estilos globais da aplicação
+│   ├── main.jsx         # Ponto de entrada que renderiza o App no DOM
+│   ├── assets/
+│   │   ├── cardapio.js  # Dados estruturados do cardápio (pratos, sobremesas e bebidas)
+│   │   └── ...          # Imagens utilizadas nos cards e no banner
+│   └── components/
+│       ├── Banner.jsx   # Componente responsável pela imagem de destaque
+│       ├── Categorias.jsx # Lista e controla a categoria selecionada
+│       ├── Cards.jsx    # Recebe os itens filtrados e renderiza uma grade de cards
+│       └── Card.jsx     # Estrutura visual de cada item do cardápio
+├── index.html           # Template HTML servido pelo Vite
+└── vite.config.js       # Configuração do Vite
+```
+
+## Executando o projeto localmente
+
+1. Instale as dependências:
+   ```bash
+   npm install
+   ```
+2. Inicie o servidor de desenvolvimento:
+   ```bash
+   npm run dev
+   ```
+   O Vite exibirá a URL (por padrão `http://localhost:5173/`). A aplicação suporta hot-reload, permitindo visualizar alterações em tempo real.
+3. Para gerar a versão de produção, utilize:
+   ```bash
+   npm run build
+   ```
+4. Para analisar o bundle construído, execute o preview em produção:
+   ```bash
+   npm run preview
+   ```
+
+## Personalização do cardápio
+
+- Os itens exibidos são definidos no arquivo [`src/assets/cardapio.js`](src/assets/cardapio.js). Cada item contém `nome`, `preco`, `imagem` e `descricao`.
+- As imagens estão organizadas em subpastas (`pratos`, `sobremesas`, `bebidas`) dentro de `src/assets/`.
+- Para adicionar uma nova categoria, crie o array correspondente em `cardapio.js`, importe-o em [`src/components/Cards.jsx`](src/components/Cards.jsx) e ajuste o componente [`src/components/Categorias.jsx`](src/components/Categorias.jsx) para incluir a nova opção e atualizar o índice de seleção.
+
+## Estilos e responsividade
+
+- O layout principal utiliza CSS Grid para organizar as categorias e os cards, garantindo espaçamento consistente.
+- Os cards exibem informações textuais e imagens lado a lado em telas largas e se adaptam para uma coluna em telas abaixo de 900px.
+- Media queries adicionais reduzem o espaçamento geral e reorganizam as categorias em uma única coluna em telas menores que 640px.
+
+## Scripts disponíveis
+
+- `npm run dev`: executa o ambiente de desenvolvimento com hot-reload.
+- `npm run build`: gera a versão otimizada para produção.
+- `npm run preview`: serve a build de produção localmente.
+- `npm run lint`: roda o ESLint para garantir a qualidade do código.
+
+## Próximos passos sugeridos
+
+- Integrar um backend ou serviço de CMS para atualizar o cardápio sem alterar o código fonte.
+- Adicionar controle de acessibilidade (ex.: navegação por teclado e textos alternativos mais descritivos).
+- Disponibilizar informações adicionais para cada item, como restrições alimentares ou calorias.
+
+---
+
+Este projeto foi desenvolvido como um cardápio digital dinâmico, servindo de base para restaurantes que desejam apresentar seus produtos de forma clara, atrativa e responsiva. 
EOF
)