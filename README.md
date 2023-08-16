<img src="https://www.alura.com.br/artigos/assets/git-flow-o-que-e-como-quando-utilizar/imagem3.png" width="100%"/>


### Commands

    Iniciar o Git Flow no repositório:

bash

### Inicializa o Git Flow no repositório

```git
git flow init
or
git flow init -d
```


Isso inicializa o Git Flow no repositório com as configurações padrão, criando os ramos master e develop.

Criar e trabalhar em uma nova funcionalidade:

bash

### Cria uma nova branch de feature e muda para ela

```git
git flow feature start <nome-da-feature>
```

### Realize suas alterações e commits na branch da feature
### ...

### Conclui a feature e a mescla de volta para o ramo develop

```git
git flow feature finish <nome-da-feature>
```

Preparar uma nova versão:

bash

### Cria uma nova branch de release para a próxima versão

```git
git flow release start <versão>
```


### Realize ajustes finais, correções de bugs e atualizações de versão
### ...

### Conclui a release, mesclando para master e develop, e cria uma nova tag

```git
git flow release finish <versão>
```

Correção de emergência (Hotfix):

bash

### Cria uma nova branch de hotfix para corrigir um bug crítico

```git
git flow hotfix start <nome-do-hotfix>
```

### Corrija o bug, realize commits e finalize o hotfix

```git
git flow hotfix finish <nome-do-hotfix>
```

Suporte a uma versão anterior (Support):

bash

### Cria uma nova branch de suporte para dar suporte a uma versão específica

```git
git flow support start <versão>
```

### Realize ajustes e correções para suporte e finalize a branch

```git
git flow support finish <versão>
```

Enviar tudo para o GitHub:

bash

### Envia as alterações para o repositório remoto (GitHub)

```git
git push origin develop
git push origin master
git push --tags
```