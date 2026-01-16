<p align="center">
<img alig src="https://raw.githubusercontent.com/Grupo-02-Turma-JavaScript-12/AplicativoFitnessPersonalizado-backend/refs/heads/main/src/assets/MoveUp.png" width="300" alt="MoveUP Logo" />
</p>

<p>O MoveUP é um back-end robusto e escalável desenvolvido para dar suporte a um aplicativo fitness. Ele foi projetado para atender profissionais de educação física que precisam gerenciar treinos e acompanhar a evolução dos seus alunos de forma prática e segura.</p>

## Principais Características

<p>API REST completo:</p>

<ul>
<li>FindAll() → retorna todos os treinos cadastrados</li>
<li>FindById(id) → busca treino específico com validação de existência</li>
<li>FindAllByName(name) → pesquisa treinos por nome com suporte a filtros (ILike)</li>
<li>Create(treino) → cria novos treinos personalizados</li>
<li>Update(treino) → atualiza treinos existentes com verificação prévia</li>
<li>Delete(id) → remove treinos com validação de integridade</li>
</ul>
<p>Escalabilidade e Organização:</p>

<ul>
<li>Arquitetura modular do NestJS, facilitando expansão futura (ex.: entidade Aluno, Avaliação Física).</li>
<li>Repositórios do TypeORM para abstração de banco de dados e consultas otimizadas.</li>
</ul>

<p>Personalização:</p>

<ul>
<li>Cada treino pode ser configurado com atributos como Nome, Nível, Duração, Tipo e Descrição.</li>
<li>Flexibilidade para que profissionais adaptem treinos conforme evolução dos alunos.</li>
</ul>
## Entidade e Atributos da Entidade
<h3></h3>
<P>Tendo como principal entidade Treino, mapeada para a tabela tb_treino.</P>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Atributo</th>
      <th>Tipo</th>
      <th>Descrição</th>
      <th>Regras</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>Int</td>
      <td>Identificador único.</td>
      <td>Chave Primária (Auto Increment).</td>
    </tr>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>Nome do exercício.</td>
      <td>Não nulo. Max 100 caracteres.</td>
    </tr>
    <tr>
      <td>level</td>
      <td>String</td>
      <td>Nível de dificuldade.</td>
      <td>Não nulo. Max 100 caracteres.</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>Int</td>
      <td>Duração em minutos.</td>
      <td>Não nulo.</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Categoria (ex: Cardio).</td>
      <td>Não nulo. Max 100 caracteres.</td>
    </tr>
    <tr>
      <td>description</td>
      <td>String</td>
      <td>Instruções detalhadas.</td>
      <td>Não nulo. Max 500 caracteres.</td>
    </tr>
  </tbody>
</table>


## Instalação do Projeto

```bash
$ npm install
```

## Compilação do projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Autores do Projeto

- [Allyson Gonçalves](https://twitter.com/kammysliwiec)
- [Alexandre Julio](https://twitter.com/kammysliwiec)
- [Juliermes Mendes](https://twitter.com/kammysliwiec)
- [Marcos Ribeiro](https://twitter.com/kammysliwiec)
- [Matheus Carvalho](https://twitter.com/kammysliwiec)
- [Matheus Lins](https://twitter.com/kammysliwiec)

## Licença

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
