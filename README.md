# Instalattion and run <a name="installation"></a>

Install Node Packgage Manager in your machine Node installation and run the following commands in terminal:

```cmd

npm install
npm run dev

```

# Running Tests 

After your complete [Installation and run](#instalattion-and-run)

Depois de voce ter completado a fase de [Instalacao](#instalattion-and-run) basta voce rodar os comandos a seguir no terminal certificando-se de que esta no repositorio raiz:

```cmd
  npm run test
```

# Requisitos Funcionais

- Listagem de Criptomoedas: A aplicação deve consumir uma API pública de criptomoedas (como a CoinGecko API) para exibir uma lista das top 10 criptomoedas por capitalização de mercado. Cada item da lista deve incluir o nome da criptomoeda, o símbolo e o preço atual.

- Detalhes da Criptomoeda: Ao clicar em uma criptomoeda, o usuário deve ser redirecionado para uma página de detalhes, que inclui informações mais profundas sobre a criptomoeda selecionada, como variação de preço nas últimas 24 horas, alta/baixa de 24h, volume de mercado e gráfico de preço (se possível).

- Integração com Wallet: Implemente um botão que permita ao usuário conectar a aplicação a uma wallet Metamask. Não é necessário executar transações, mas a aplicação deve ser capaz de mostrar se a wallet está conectada e exibir o saldo atual de Ethereum do usuário.

- Responsividade: A aplicação deve ser responsiva, garantindo uma boa experiência de usuário em dispositivos móveis e desktops.