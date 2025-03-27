# Back-end - Angular

Essa é a parte do meu projeto que remete ao back-end, uma API feita usando Java com Spring Boot

## Servidor de desenvolvimento

Para iniciar o servidor da API, primeiro sertifique-se de ter o banco de dados já criado, nesse projeto ele usa um banco com o nome de "agenda";

Porém, em "src/main/resources/application.properties" é possível personalzar tudo, como url do banco, username e password.

Para iniciar o servidor da API, vá em "src/main/java/com/agenda/back-end/BackEndApplication.java" e rode o projeto.

## URLs para requisições

### GET:

Pegar todos os contatos:
```bash
http://localhost:8282/contato/pegarTodosOsContatos
```

Pegar um contato pelo id:
```bash
http://localhost:8282/contato/pegarContatoPorId/[ID_AQUI]
```

Pegar os contatos pelo nome (para barra de pesquisa):
```bash
http://localhost:8282/contato/pegarContatoPorNome[NOME_AQUI]
```

### POST
Enviar um usuário para o banco (enviar o body com json):
```bash
http://localhost:8282/contato
```

### PUT
Editar um usuário referenciando ele pelo id:
```bash
http://localhost:8282/contato/editarContato/[ID_AQUI]
```

### DELETE
Deletar um usuário referenciando ele pelo id:
```bash
http://localhost:8282/contato/deletarContato/[ID_AQUI]
```