# PayCine

Aplicação web para descoberta de filmes construída com React, JavaScript, TailwindCSS, integrada com a API do TMDB e backend com Appwrite.

Explore milhares de filmes, veja lançamentos, avaliações e descubra o que assistir hoje com uma busca rápida e recomendações inteligentes.

## Funcionalidades

1. Busca de filmes em tempo real
2. Listagem de filmes populares e lançamentos
3. Exibição de avaliações
4. Interface rápida e responsiva
5. UI moderna com TailwindCSS

## Tecnologias utilizadas

1. Front-end
1.1. React
1.2. JavaScript (ES6+)
1.3. TailwindCSS

2. APIs e Backend
2.1. TMDB (The Movie Database API)
2.2. Appwrite (backend-as-a-service)

## Instalação

1. Clonar o repositório
git clone https://github.com/MadrugadaGunza/playcine.git

2. Entrar no diretório
cd playcine

3. Instalar dependências
npm install

4. Rodar o projeto
npm run dev

## Configuração

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id

## Estrutura do Projecto

src/
 ├── assets/       # Midias
 ├── components/   # Componentes reutilizáveis
 ├── services/     # Integrações com APIs
 ├── appwrite      # Configurações de integração com Appwrite
 └── App.jsx       # Componente principal

 ## SEO

O projecto foi optimizado com boas práticas de SEO:
<title>PlayCine | Buscar filmes, Ver lançamentos e Descobrir o que assistir</title>
<meta name="description" content="Explore milhares de filmes, veja lançamentos, avaliações e descubra o que assistir hoje. Busca rápida e recomendações inteligentes no PlayCine." />

## Melhorias futuras

Autenticação de usuários
Lista de favoritos
Recomendações personalizadas
Melhorias de responsividade

## Contribuição

Contribuições são bem-vindas.

1. Fork o projecto
2. Crie uma branch (git checkout -b feature/minha-feature)
3. Commit suas mudanças (git commit -m 'feat: minha feature')
4. Push para a branch (git push origin feature/minha-feature)
5. Abra um Pull Request

## Autor

Madrugada de Carvalho
