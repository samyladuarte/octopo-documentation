---
id: planos-de-acao-introducao
title: Plano de ação
---
Um plano de ação é um plano com ações na forma de `tarefas` que servem para corrigir um problema identificado de uma forma geral em uma auditoria ou de uma forma específica em alguma pergunta da auditoria.

## Quais planos aparecem para mim no app?
Você terá acesso aos planos de ação em que você é:
- O criador do plano.
- O responsável pelo plano.
- O executante do plano.
- O responsável por uma ou mais tarefas do plano.

## Quem pode interagir com um plano de ação?
Um plano de ação tem duas atribuições de responsabilidades, que são:

### Responsável
- Reabrir uma tarefa concluída caso ele ache que ela não foi realmente concluída (Ao reabrir ele obrigatóriamente deve deixar um comentário do por que a tarefa está senda reaberta).
- Aprovar ou Cancelar o plano.
- Reativar um plano que já foi aprovado ou cancelado.
### Executante 
- Criar tarefas e delegar para que o problema ou parte do problema do plano de ação seja solucionado.


## Tarefas
As tarefas são ações necessárias para que a o problema do plano seja resolvido.

O plano deverá ter no mínimo uma tarefa e não tem nenhum limite máximo.

## Quem pode criar as tarefas?
Tanto o **responsável do plano** quanto o **executante do plano** podem criar tarefas.

## Dados necessários para criar uma tarefa
- **Descrição**: Explicação da tarefa a ser executada.
- **Responsável**: O usuário que deverá acompanhar a execução da tarefa e marcar sua conclusão quando achar necessário.
> **❗ Importante**: Não confundir o **responsável da tarefa** com o **responável do plano**.
- **Prazo**: A data limite para que a tarefa seja concluída.

## Permissões para interagir com a tarefa
||Editar/Deletar|Marcar como concluída|Reabrir|Comentar|
|---|---|---|---|---|
|Criador **da tarefa**|✔️|❌|✔️|✔️|
|Responsável **da tarefa**|❌|✔️|✔️|✔️|
|Responsável **do plano**|❌|✔️|✔️|✔️|
|Executante **do plano**|❌|❌|❌|✔️|

## Status possíveis
Todo plano de ação possui um `status` para indicar o estado atual dele. 

Veja abaixos todos os `status` possíveis de um plano de ação.

### Aguardando criação de tarefas
A auditoria não tem nenhum tarefa criada.
### Em andamento
A auditoria tem uma ou mais tarefas criadas porém nem todas estão concluídas.
### Aguardando aprovação
Todas as tarefas criadas estão concluídas.
### Aprovado
Todas as tarefas foram concluídas e o `responsável do plano` aprovou.
### Cancelado
O plano de ação foi cancelado pelo `responsável do plano`.

## Como funciona a transição dos `status`?
A maioria das transições ocorrem de forma automática, por exemplo, o `status` `aguardando criação de tarefas` irá mudar para `em andamento` automaticamente assim que alguma tarefa for criada. Porém algumas transições devem ser feitas de forma manual, segue abaixo a relação de todas:

- **Aguardando criação de tarefas**: Automático.
- **Em andamento**: Automático.
- **Aguardando aprovação**: Automático.
- **Aprovado**: Manual.
- **Cancelado**: Manual.

> **ℹ️ Informação**: A alteração do `status` para `Aprovado` ou `Cancelado` será feita exclusivamente pelo **responsável do plano**. Para saber mais sobre as atribuições de responsabilidade que um plano pode ter [clique aqui](planos-de-acao-atribuicoes).

## Concluindo um plano de ação
Para concluir um plano todas as tarefas criadas para ele deverão estar concluídas. O `responsável do plano` deverá verifiar se todas as tarefas resultaram na solução do problema do plano de ação.