# Configuração do EmailJS

Para fazer o formulário de contato funcionar, você precisa configurar o EmailJS:

## Passo 1: Criar conta no EmailJS

1. Acesse https://www.emailjs.com/
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

## Passo 2: Adicionar um serviço de email

1. No dashboard do EmailJS, vá para "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de email (ex: Outlook/Hotmail)
4. Conecte sua conta gabrielfreitas3010@outlook.com
5. Anote o **Service ID** gerado

## Passo 3: Criar um template de email

1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com as seguintes variáveis:
   - `{{from_name}}` - Nome do remetente
   - `{{from_email}}` - Email do remetente
   - `{{message}}` - Mensagem
   - `{{to_email}}` - gabrielfreitas3010@outlook.com

4. Exemplo de template:

**Subject:** Nova mensagem do portfólio - {{from_name}}

**Content:**
```
Você recebeu uma nova mensagem através do seu portfólio!

De: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}
```

5. Clique em "Save" e anote o **Template ID**

## Passo 4: Obter a Public Key

1. Vá para "Account" > "General"
2. Copie sua **Public Key**

## Passo 5: Configurar as variáveis de ambiente

1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione as seguintes variáveis com seus valores reais:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

3. Salve o arquivo

## Passo 6: Reiniciar o servidor

```bash
npm run dev
```

Agora o formulário de contato está funcionando! Quando alguém enviar uma mensagem, você receberá um email em gabrielfreitas3010@outlook.com.

## Plano Gratuito

O plano gratuito do EmailJS permite:
- 200 emails por mês
- 2 templates de email
- 1 serviço de email

Isso é mais do que suficiente para um portfólio pessoal!

## Importante

⚠️ **NÃO** commite o arquivo `.env.local` para o Git!
Ele já está no `.gitignore` por padrão.

Para o deploy na Vercel, adicione as variáveis de ambiente no painel da Vercel:
Settings > Environment Variables
