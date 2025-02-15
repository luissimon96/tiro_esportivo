# Melhores Regras de Arquitetura de Software - Nubank

Este documento contém as melhores práticas e padrões de arquitetura de software utilizados na Nubank.

## Padrões de Projeto

### 1. Single Responsibility Principle (SRP)
Cada classe deve ter uma única responsabilidade ou propósito.

### 2. Open/Closed Principle (OCP)
Os módulos de software devem estar abertos para extensão, mas fechados para modificação.

### 3. Liskov Substitution Principle (LSP)
Os objetos de uma classe derivada devem poder substituir objetos da classe base sem alterar o comportamento do programa.

### 4. Interface Segregation Principle (ISP)
Os clientes não devem ser forçados a depender de interfaces que não utilizam.

### 5. Dependency Inversion Principle (DIP)
Os módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.

## Padrões Arquiteturais

### 1. Microservices
Dividir a aplicação em serviços pequenos e independentes que se comunicam entre si.

### 2. Event-Driven Architecture
Utilizar eventos para comunicação entre diferentes partes do sistema.

### 3. Domain-Driven Design (DDD)
Focar no domínio central e na lógica de negócios, criando um modelo de domínio rico.

### 4. Clean Architecture
Organizar o código de forma que a lógica de negócios seja independente de frameworks, interfaces de usuário, bancos de dados ou qualquer outro agente externo.

## Boas Práticas

### 1. Testes Automatizados
Escrever testes automatizados para garantir a qualidade do código.

### 2. Code Reviews
Realizar revisões de código para manter a qualidade e a consistência do código.

### 3. Continuous Integration/Continuous Deployment (CI/CD)
Automatizar o processo de integração e entrega contínua para acelerar o desenvolvimento e a entrega de software.

### 4. Separation of Concerns
Manter a separação clara entre diferentes partes do sistema, como lógica de negócios, lógica de apresentação e acesso a dados.

### 5. Dependency Injection
Utilizar injeção de dependência para gerenciar dependências e facilitar o teste e a manutenção do código.

### 6. Use Cases
Definir casos de uso claros e específicos para guiar o desenvolvimento e garantir que o software atenda aos requisitos do negócio.

## Conclusão

Seguir estas regras e padrões ajudará a manter a qualidade e a escalabilidade do software desenvolvido.
