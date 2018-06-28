---
title: Como criar um submodule de um diretório existente em um projeto.
categories: [Series, Series Trabalhando com o Git]
tags: [Series, GIT, Programação, Gestão, Controle de Versao]
layout: article
share: true
comments: true
feature:
 index: true
 category: true
ads: 
 show: true
coinbase:
  show: true
toc: true
image:
  teaser: frameworks/react_redux.png
---
Muitas vezes nosso projeto vai tomando corpo e começamos a criar subdiretórios com novos grupos de arquivos uteis, mas ai descobrimos que estes mesmos arquivos são uteis para diveros projetos e precisamos multiplica-los, como mante-los atualizados em todos os projetos?

<!--more-->

A melhor forma de se manter um grupo de arquivos atualizado em todos os projetos é transforma-los em uma biblioteca e instala-los no diretório apropriado de bibliotecas, seja do Arduino ou de outra IDE de desenvolvimeto que esteja usando, isso vai variar muito com o ToolKit que estiver usando para desenvolvimento.

Vamos de vagar, apenas vamos considerar que temos vários projetos, e compartilhamos os mesmos arquivos entre eles, e não queremos ainda transformar este grupo de arquivos numa bibliotéca. Portando se você já estiver usando o GIT e quiser preservar a histórico de amadureccimento do seu código, você pode transformar este diretório em um submodulo.

## O primeiro passo

Copie a pasta do seu projeto para uma basta de backup que será seu ambiente de trabalho temporário. Entre nesta pasta de trabalho e remova do git as referencias aos repositórios remotos, fazendo assim você evita qualquer erro.

```shell
cp -r meu-projeto-base meu-projeto-base-bck
cd meu-projeto-base-bck
```

### Removendo referências aos repositórios originais

```shell
$ git remote -v
=> origin git@github.com:arduinominas/meu-projeto-base
```

No exemplo acima nosso projeto apontava apenas para arduinominas/meu-projeto-base no GitHub, que é o origin de nosso projeto, então removemos esta referência. 

```shell
$ git remote remove origin
```

## Filtrando o diretório que será o novo submodulo

```shell
$ git filter-branch --subdirectory-filter apoio/arquivos-compartilhados HEAD -- --all
$ git reset --hard
$ git gc --aggressive
$ git prune
```

Com os comando acima você removeu do log do git todos os demais diretórios e manteve apenas informações relativas ao diretório `apoio/aquivos-compartilhados`.

## envie para o servidor o novo submodulo

Você precisa ter no GitHub ou outro servidor de respositórios um repositório vasio já criado e com acesso para você gravar nele os novos arquivos, vamos supor que seja "arduinominas/arquivos-compartilhados"

```shell
$ git remote add origin git@github.com:arduinominas/arquivos-compartilhados
``` 

Agora adicione qualquer alteração que tenha feita e faça o commit normalmente.
```shell
$ git add suas alteracoes
$ git commit
```

e agora envie seu novo repositório para o servidor.

```shell
$ git push origin master
```


## Voltemos ao projeto original e adicionemos o novo repositório

```shell
$ cd ../meu-projeto-base
``` 

Lembrando que você estava no diretório do projeto de trabalho `meu-porjeto-base-bck`.

### Primeiro vamos remover o diretório antigo.

```shell
$ git rm -rf apoio/aquivos-compartilhados
```

Você pode fazer o commit deste passo para manter o histório do que está fazendo.

Atenção use o comando `git rm -r` para remover recursivamente o diretório, e use o `-f` para forçar esta remoção, tenha certeza do que está fazendo.


## Adicione ao projeto original o novo submdoulo

Vamos então adicionar o novo submodulo com o comando:

```shell
$ git submodule add git@github.com:arduinominas/arquivos-compartilhados.git apoio/aquivos-compartilhados
```

Observe que o novo submodulo vai ficar no mesmo diretório que os arquivos ficavam antes, portanto você não terá que fazer alerações em seu código.

Agora inicialize e atualize o submodulo com o material que está no servidor:

```shell
$ git submodule init
$ git submodule update
``` 
E finalize adicionando ao histórico do git o novo submodule para que fique registrado no servidor.

```shell
$ git add .gitmodules apoio/arquivos-compartilhados
$ git commit -m "Novos submodulos adicionados referente a pasta de arquivos compartilhados"
```

## Conclusão.

Como vimos o processo é muito simples quando se conhece os comandos certos, em grandes projetos o tempo de espera é grande, mas o que precisa ser feito é muito pouco, e você pode fazer isso para todas as pastas que deseja reaproveitar em outros projetos, pode até usar como um template (um modelo) para as pastas mais usadas.

Mas lembre-se há mecanismos mais adequados para se usar com bibliotecas, procure se informar sobre eles no manual da lingaugem, do ToolKit/Framework e/ou IDE que usa.