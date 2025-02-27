# CONTRIBUTION

### **1. Aceitar o Convite de Colaborador**

- O colaborador deve acessar o e-mail com o convite ou verificar a aba de convites pendentes no GitHub.
- Aceitar o convite para obter permissões de contribuição no repositório.

---

### **2. Configurar o Ambiente Local**

#### **Clonar o Repositório:**
- Se for usar HTTPS:
```bash
$    git clone https://github.com/CarlosDanielDev/javascript-light-bulb.git
```

- Se for usar SSH (recomendado):
- Configurar a chave SSH (se ainda não estiver configurada):

#### Gerando Sua Chave Pública SSH

Dito isto, muitos servidores de Git efetuam autenticação utilizando chaves públicas SSH. 
Para prover uma chave pública, cada usuário do seu sistema deve gerar uma chave se ainda não possui uma. 
Este processo é similar em todos os sistemas operacionais. Primeiro, você deve verificar e se certificar de que ainda não tem uma chave. 
Por padrão, as chaves de SSH de um determinado usuário são armazenadas no diretório `~/.ssh` daquele usuário. 
Você pode facilmente verificar se não já possui uma chave indo neste diretório e listando seu conteúdo:

```bash
$ cd ~/.ssh
$ ls
authorized_keys2  id_dsa       known_hosts
config            id_dsa.pub
```

O que você precisa encontrar é um par de arquivos, um com o nome parecido com `id_dsa` ou `id_rsa`, e o outro de nome correspondente, porém com a extensão `.pub` no final. 
O arquivo de extensão `.pub` é sua chave pública, e o outro arquivo é sua chave privada. 
Caso você não tenha estes arquivos (ou sequer um diretório `.ssh`), você pode criá-los rodando um programa chamado `ssh-keygen`, que vem incluído no pacote SSH em sistemas Linux/Mac, e também no Git para Windows:

```bash
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/schacon/.ssh/id_rsa):
Created directory '/home/schacon/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/schacon/.ssh/id_rsa.
Your public key has been saved in /home/schacon/.ssh/id_rsa.pub.
The key fingerprint is:
d0:82:24:8e:d7:f1:bb:9b:33:53:96:93:49:da:9b:e3 schacon@mylaptop.local

```
Primeiro, o programa confirma onde você deseja salvar a chave (`.ssh/id_rsa`), e então pede duas vezes por uma frase secreta, 
a qual você pode deixar vazia se não deseja digitar uma senha quando utiliza as chaves. Entretanto, se você utilizar uma senha, 
lembre-se de adicionar a opção `-o`; ela salva a chave privada em um formato que é mais resistente a ataques de força bruta do que o formato padrão. 
Você também pode utilizar a ferramenta ssh-agent para não ter de entrar com sua senha toda vez. 
Agora, cada usuário que tenha feito os passos acima deve enviar sua chave pública a você ou a quem estiver administrando o servidor de `Git` 
(assumindo que um servidor `SSH` que requeira chaves públicas esteja sendo utilizado). 
Tudo que o administrador precisa fazer é copiar o conteúdo do arquivo `.pub` e enviá-lo por e-mail. A chave tem mais ou menos esta aparência:

```bash
$ cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSU
GPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3
Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XA
t3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/En
mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbx
NrRFi9wrf+M7Q== schacon@mylaptop.local
```

Para ver um tutorial mais detalhado sobre a criação de chaves `SSH` em diversos sistemas operacionais, 
veja o guia do GitHub sobre chaves SSH em [CONECTANDO NO GITHUB COM SSH](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh).

- Adicionar a chave pública ao GitHub em **Settings > SSH and GPG keys**.

- Clonar com SSH:
```bash
$ git clone git@github.com:CarlosDanielDev/javascript-light-bulb.git
```

2. **Entrar na pasta o repositório:**
```bash
$ cd javascript-light-bulb
```

---

### **3. Criar uma Nova Branch**

- Certificar-se de estar na branch `main`:
```bash
$ git checkout main
```

- Atualizar a branch local com as últimas mudanças:
```bash
$ git pull origin main
```

- Criar uma nova branch para as alterações:
```bash
$ git checkout -b nome-da-branch
```

---

### **4. Fazer as Alterações**

- Editar os arquivos necessários no editor de código.

---

### **5. Comitar as Alterações**

1. **Adicionar as alterações ao staging:**
```bash
$ git add .
```

2. **Criar um commit com uma mensagem descritiva:**
```bash
$ git commit -m "minha feature" 
```

---
### **6. Enviar as Alterações para o Repositório**

- Fazer o push da branch para o repositório remoto:
```bash
$ git push origin nome-da-branch
```
---

### **7. Criar uma Pull Request (PR)**

1. Acessar o repositório no GitHub.
2. Ir na aba **Pull Requests** e clicar em **New Pull Request**.
3. Selecionar a branch criada (`nome-da-branch`) como base e a branch `main` como destino.
4. Adicionar uma descrição detalhada da alteração feita.
5. Enviar a Pull Request para revisão.

---

### **8. Aguardar a Revisão**

- Aguardar revisão do código.
- Realizar ajustes, se necessário, com novos `commits` na mesma branch e atualizar a PR automaticamente.

---

### **9. Após o Merge**

- Após o `merge`, o colaborador pode deletar a `branch` local e `remota`:
```bash
$ git branch -d nome-da-branch
$ git push origin --delete nome-da-branch
```
---

Esse processo garante que o colaborador contribua de forma organizada, rastreável e segura para o seu projeto.
