# factory-management

# Etapas de execução da aplicação

No diretório do backend, dê build para instalar as dependências do Spring para essa aplicação.

```sh
  ./gradlew build
```

No diretório do frontend, realize a instalação das dependências com:

npm:
```sh
  npm i
```
ou
yarn:
```sh
  yarn
```

Não há uma migration presente para montar o banco de dados, portanto, é importante executar o SQL no banco de dados PostgreSQL e preencher as variáveis de ambientes conforme modelo para executar corretamente. Dentro o backend irá conter o arquivo .sql contendo o modelo exato da estrutura relacional.

modelo:
```sh
  DB_URL=
  DB_USER=
  DB_PASSWORD=
```

Caso nenhum erro surja até aqui, basta executar a aplicação com:

Todos:
```sh
  ./run.sh
```
obs.: eventualmente, ao encerrar o processo no terminal com Cntrl + C, há possibilidde dos processos permanecerem em executação e terem que ser fechados manualmente no gerênciador de tarefas para liberar a porta.

- Frontend
npm:
```sh
  npm run dev
```
ou
yarn:
```sh
  yarn dev
```

- Backend
```sh
  ./gradlew bootRun
```