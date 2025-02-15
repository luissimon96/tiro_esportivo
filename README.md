# Projeto em NodeJs HTML e CSS 

## Descrição
Este projeto é uma aplicação web para gerenciamento de eventos de tiro esportivo. Ele utiliza Node.js para o backend e HTML/CSS para o frontend.

## Estrutura do Projeto
O projeto segue os princípios da Clean Architecture, dividindo o código em diferentes camadas:

- **Presentation**: Contém os controladores e as views.
- **Domain**: Contém a lógica de negócios.
- **Infrastructure**: Contém a configuração do servidor e as rotas.

## Instalação
Para executar o projeto em live-server, execute no terminal:
```
nodemon index.js
```

Para instalar novos módulos, execute:
```
npm install <nome-do-pacote>
```

## Uso
1. Clone o repositório:
```
git clone <URL-do-repositório>
```
2. Navegue até o diretório do projeto:
```
cd Tiro_Esportivo
```
3. Instale as dependências:
```
npm install
```
4. Inicie o servidor:
```
nodemon index.js
```
5. Abra o navegador e acesse:
```
http://localhost:3000
```

## Dependências
- Node.js
- Express
- Nodemon

## Configuração do VS Code para evitar avisos de fim de linha
Para evitar os avisos de fim de linha no VS Code, adicione a seguinte configuração ao seu arquivo de configurações do VS Code (`settings.json`):
```
"files.eol": "\n",
"git.autofetch": true
```

## Regras de Negócio

### Autenticação de Usuários
1. Usuários podem se cadastrar utilizando um email e senha.
2. Usuários podem se autenticar utilizando suas credenciais (email e senha).
3. Integração com Google OAuth para permitir login com contas Google.
4. Sessões de usuário devem expirar após um período de inatividade.

### Relatórios
1. Relatórios de eventos podem ser gerados em formato PDF.
2. Relatórios devem incluir informações detalhadas sobre os eventos, participantes e resultados.
3. Relatórios de uso do sistema, incluindo número de logins, eventos criados e outras métricas relevantes.

### Funcionalidades do Sistema
1. Cadastro e gerenciamento de eventos de tiro esportivo.
2. Cadastro e gerenciamento de participantes.
3. Sistema de pontuação e ranking para eventos.
4. Notificações por email para eventos e atualizações importantes.
5. Dashboard administrativo para visualização de métricas e relatórios.

### Valores de Mensalidade para Clubes
1. Mensalidade básica: R$ 100,00 por mês.
2. Pacote trimestral: R$ 270,00 (10% de desconto).
3. Pacote semestral: R$ 510,00 (15% de desconto).
4. Pacote anual: R$ 960,00 (20% de desconto).

## SEO (Search Engine Optimization)

### Palavras-chave
- Gerenciamento de eventos de tiro esportivo
- Software de tiro esportivo
- Aplicação web de tiro esportivo
- Eventos de tiro esportivo
- Sistema de pontuação de tiro esportivo

### Descrição Meta
Este software oferece uma solução completa para o gerenciamento de eventos de tiro esportivo, incluindo cadastro de participantes, sistema de pontuação, notificações por email e geração de relatórios detalhados.

### Estratégias de SEO
1. **Conteúdo de Qualidade**: Produzir conteúdo relevante e de alta qualidade sobre tiro esportivo e gerenciamento de eventos.
2. **Palavras-chave**: Utilizar palavras-chave relevantes em todo o site, incluindo títulos, descrições e conteúdo.
3. **Backlinks**: Obter backlinks de sites respeitáveis e relacionados ao tiro esportivo.
4. **Redes Sociais**: Promover o software em redes sociais para aumentar a visibilidade e atrair tráfego.
5. **Blog**: Manter um blog atualizado com dicas, notícias e tutoriais sobre tiro esportivo e uso do software.
6. **SEO Técnico**: Garantir que o site seja rápido, responsivo e fácil de navegar, além de otimizar para dispositivos móveis.
