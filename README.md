# githubRanking


![Alt](./app/src/assets/Github_Ranking.gif)



### Aplicativo web para encontrar os destaques do Github

o Github Ranking  foi desenvolvido para facilitar a busca por usuários e repositórios,
o ranqueamento dos usuários é referenciado pelo score fornecido pela API, de forma que ordenei a busca para que traga de forma decrescente. Já o ranking dos repositórios ´w feito pelo número de estrelas, e também é ordenado de forma decrescente.


[Protótipo do projeto](https://www.figma.com/file/pSPYZ54UDt8YyPhvkCAhol/GithubRanking?node-id=11%3A3 "figma - Github Ranking")

## As funcionalidades que foram desenvolvidas:

> *  Tela inicial, onde pode ser feita busca por usuário e repositórios;
> *  Tela de busca por usuário; 
> *  Tela de busca por repositório;
> *  Integração com a API do github fazendo a requizição via GET para: search/users e search/repositories 

[Usuários](https://developer.github.com/v3/search/#search-users " Documentação Github API")
[Repositórios](https://developer.github.com/v3/search/#search-repositories " Documentação Github API")


## Funcionalidades futuras:

> * Menu lateral
> * Botão voltar para tela inicial



Para rodar o projeto na sua máquina é preciso que você digite
no seu terminal, de preferencia numa pasta a sua escolha.

> `$ git clone https://github.com/yankasantos/githubRanking.git`

depois de dar enter e ele baixar todos os arquivos, [installe o node](https://nodejs.org/en/) no seu computador, após isso pode digitar:


 **front-end**
> `$ cd ../app`
> `$ npm install`

ele vai fazer o download de todas as dependências do projeto;

Feito isso para dar o start no servidor  é preciso digitar:

> `$ npm start`

ele vai mostrar que a aplicação está rodando no terminal ou caso acesse a url 
> http://localhost:3000/



