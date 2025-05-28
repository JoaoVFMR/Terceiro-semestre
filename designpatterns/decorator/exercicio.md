// Criando notificação simples
```typescript
let notificacao: Notificacao = new NotificacaoSimples();
// Adicionando envio por e-mail
notificacao = new NotificacaoEmail(notificacao);
// Adicionando envio por SMS
notificacao = new NotificacaoSMS(notificacao);
// Adicionando envio por push notification
notificacao = new NotificacaoPush(notificacao);
// Enviando mensagem
notificacao.enviar("Seu pedido foi enviado!");
```
Saída esperada
```bash
Notificação simples: Seu pedido foi enviado!
Enviando email: Seu pedido foi enviado!
Enviando SMS: Seu pedido foi enviado!
Enviando push notification: Seu pedido foi enviado!
```