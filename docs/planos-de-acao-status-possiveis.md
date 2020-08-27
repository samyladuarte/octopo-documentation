---
id: planos-de-acao-status-possiveis
title: Status possíveis
---

Todo plano de ação possui um `status` para indicar o estado atual dele. 

Veja abaixos todos os `status` possíveis de um plano de ação.

## Aguardando criação de tarefas
A auditoria não tem nenhum tarefa criada.
## Em andamento
A auditoria tem uma ou mais tarefas criadas porém nem todas estão concluídas.
## Aguardando aprovação
Todas as tarefas criadas estão concluídas.
## Aprovado
Todas as tarefas foram concluídas e o `responsável do plano` aprovou.
## Cancelado
O plano de ação foi cancelado pelo `responsável do plano`.

## Como funciona a transição dos `status`?
A maioria das transições ocorrem de forma automática, por exemplo, o `status` `aguardando criação de tarefas` irá mudar para `em andamento` automaticamente assim que alguma tarefa for criada. Porém algumas transições devem ser feitas de forma manual, segue abaixo a relação de todas:

- **Aguardando criação de tarefas**: Automático.
- **Em andamento**: Automático.
- **Aguardando aprovação**: Automático.
- **Aprovado**: Manual.
- **Cancelado**: Manual.

> **ℹ️ Informação**: A alteração do `status` para `Aprovado` ou `Cancelado` será feita exclusivamente pelo **responsável do plano**. Para saber mais sobre as atribuições de responsabilidade que um plano pode ter [clique aqui](planos-de-acao-atribuicoes).