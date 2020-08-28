---
id: planos-de-acao
title: Plano de ação
description: 'Explicação de como funciona um plano de ação.'
---

## Introdução
Um plano de ação é um conjunto de tarefas que servem para corrigir um problema identificado. Esse problema pode ser geral em uma auditoria ou específico de alguma pergunta da auditoria.

<!-- Uma ou mais tarefas deverão ser criadas para que o problema do plano de ação seja solucionado.  -->

O plano irá transitar por diversos `status` até ser `aprovado`.

## Quem pode interagir com um plano de ação?
Um plano possui duas atribuições de responsabilidades que são:
- Responsável
- Executante

### Permissões de cada responsabilidade

||Criar tarefa|Aprovar o plano|Cancelar o plano|Reabrir o plano|
|---|---|---|---|---|
|Responsável **do plano**|✔️|✔️|✔️|✔️|
|Executante **do plano**|✔️|❌|❌|❌|

## Quais planos aparecem para mim no app?
Você terá acesso aos planos de ação em que você é:
- O criador do plano.
- O responsável pelo plano.
- O executante do plano.
- O responsável por uma ou mais tarefas do plano.

## Status possíveis
Todo plano de ação possui um `status` para indicar o seu estado atual. Os `status` possíveis são:

### Cancelado
O plano de ação foi cancelado pelo `responsável do plano`.
### Aguardando criação de tarefas
A auditoria não tem nenhuma tarefa criada.
### Em andamento
A auditoria tem uma ou mais tarefas criadas porém nem todas estão concluídas.
### Aguardando aprovação
Todas as tarefas criadas estão concluídas.
### Aprovado
Todas as tarefas foram concluídas e o `responsável do plano` aprovou.

## Como funciona a transição dos `status`?
A maioria das transições ocorrem de forma automática, por exemplo, o `status` `aguardando criação de tarefas` irá mudar para `em andamento` automaticamente assim que alguma tarefa for criada. A   lgumas transições devem ser feitas de forma manual, segue abaixo a relação de todas:

- **Cancelado**: Manual.
- **Aguardando criação de tarefas**: Automático.
- **Em andamento**: Automático.
- **Aguardando aprovação**: Automático.
- **Aprovado**: Manual.

> **ℹ️ Informação**: A alteração do `status` para `Aprovado` ou `Cancelado` será feita exclusivamente pelo **responsável do plano** que foi explicado na seção "[quem pode integrir com o plano](planos-de-acao-introducao#quem-pode-interagir-com-um-plano-de-ação)".

## Aprovando um plano de ação
Após `responsável do plano` deverá verifiar se todas as tarefas resultaram na solução do problema do plano de ação e então alterar o o `status` para `aprovado`.
> **ℹ️ Informação**: Só é possível alterar o `status` para `aprovado` se o `status` atual for `aguardando aprovação`.

## Reabrindo um plano de ação
É possível reabrir um plano que já tenha sido aprovado caso o `responsável do plano` tenha aprovado ou cancelado por engado ou até mesmo tenha mudado de ideia.

## 🤔 Dúvidas frequentes

- **Se eu aprovar um plano e voltar atrás eu consigo reabrí-lo?**
    - Sim. O `responsável do plano` tem o poder de reabrir um plano.
- **Eu consigo cancelar um plano se ele não tiver nenhuma tarefa criada ou tarefas criadas porém pendentes?**
    - Sim. O plano pode ser cancelado a qualquer momento.