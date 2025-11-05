# Estrutura do repositorio

## Raiz do Projeto

```md
.github/workflows/
Backend - Clean Architecture + DDD/
├── src/
Frontend - Arquitetura Modular
├── src/
Infrastructure/                  # Containers das ferramentas pré-definidas
├── src/
├── mongoDB/                      # Como banco principal
│   └── docker-compose.yml/       # Setup do mongoDB
├── keycloak/                     # Para autenticação e autorização
│   └── docker-compose.yml/       # Setup do keycloak
├── nginx/                        # Ccomo reverse proxy
│   └── docker-compose.yml/       # Setup do nginx
├── docker-compose && dockerfile  # Executa a infra completa
docs/                             # Documentação geral do Repositorio
package.json                      # somente para commitlint + husky
pnpm-lock.yaml
pnpm-workspace.yaml
commitlint.config.cjs
husky/                            # instalado via script
```

## Backend - Clean Architecture + DDD

```md
src/
├── Hypesoft.Domain/             # Camada de Domínio
│   ├── Entities/                # Entidades do domínio
│   ├── ValueObjects/            # Objetos de valor
│   ├── DomainEvents/            # Eventos de domínio
│   ├── Repositories/            # Interfaces dos repositórios
│   └── Services/                # Serviços de domínio
├── Hypesoft.Application/        # Camada de Aplicação
│   ├── Commands/                # Comandos CQRS
│   ├── Queries/                 # Consultas CQRS
│   ├── Handlers/                # Handlers MediatR
│   ├── DTOs/                    # Data Transfer Objects
│   ├── Validators/              # Validadores FluentValidation
│   └── Interfaces/              # Interfaces da aplicação
├── Hypesoft.Infrastructure/     # Camada de Infraestrutura
│   ├── Data/                    # Contexto e configurações EF
│   ├── Repositories/            # Implementação dos repositórios
│   ├── Services/                # Serviços externos
│   └── Configurations/          # Configurações de DI
└── Hypesoft.API/                # Camada de Apresentação
    ├── Controllers/             # Controllers da API
    ├── Middlewares/             # Middlewares customizados
    ├── Filters/                 # Filtros de ação
    └── Extensions/              # Extensões de configuração
```

## Frontend - Arquitetura Modular

```md
src/
├── components/                  # Componentes reutilizáveis
│   ├── ui/                      # Componentes base (shadcn/ui)
│   ├── forms/                   # Componentes de formulário
│   ├── charts/                  # Componentes de gráficos
│   └── layout/                  # Componentes de layout
├── pages/                       # Páginas da aplicação
├── hooks/                       # Custom hooks
├── services/                    # Serviços de API
├── stores/                      # Stores de estado global
├── types/                       # Definições de tipos
├── utils/                       # Funções utilitárias
└── lib/                         # Configurações de bibliotecas
```
