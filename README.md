<img width="762" alt="logoestaciodfs" src="https://user-images.githubusercontent.com/104142117/204535322-571ae0a5-b475-4441-83b2-06ba02d9930d.png">

---

-   Aluno: **Cleyton Isamu Muto**
-   Matricula: **202303110529**
-   Curso: **Desenvolvimento Full Stack**
-   Turma: **23.1**

---

**Missão Prática | Nível 5 | Mundo 5**

**RPG0035 - Software sem segurança não serve!**

Repo: [https://github.com/cleytonmuto/mundo-5-missao-pratica-5](https://github.com/cleytonmuto/mundo-5-missao-pratica-5 'https://github.com/cleytonmuto/mundo-5-missao-pratica-5')

## Tecnologias Utilizadas

-   Node.js
-   Express

## Pré-requisitos

-   Node.js
-   npm

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/cleytonmuto/mundo-5-missao-pratica-5
cd mundo-5-missao-pratica-5
```

2. Instale as dependências

```bash
    npm install
```

A aplicação estará disponível em http://localhost:3000

## Endpoints da API

### Autenticação de Usuário

Login

```bash
curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{
  "username": "admin",
  "password": "123456"
}'
```

Obter dados do usuário autenticado

```bash
 curl -X GET http://localhost:3000/api/users/profile -H "Authorization: Bearer <token>"
```

Rota exclusiva de administrador

```bash
 curl -X GET http://localhost:3000/api/users/admin-only -H "Authorization: Bearer <token>"
```

### Contratos

Listar contratos

```bash
curl -X POST http://localhost:3000/api/contracts/Estacio/2025-01-01 -H "Authorization: Bearer <token>"
```
