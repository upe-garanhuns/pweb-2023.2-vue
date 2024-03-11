Template para Seminário sobre a tecnologia vue
# Guia Detalhado para Seminário de `Vue.js`

Este guia serve como um roteiro detalhado para alunos que estão preparando um seminário técnico e aprofundado sobre `Vue.js`, com foco na arquitetura e implementação.

# Seção 1: Introdução ao Vue.js

- Nesta seção, vocês devem abordar o que é `Vue.js`, por que ele é uma escolha popular entre os desenvolvedores, e como iniciar projetos usando este framework. 
- O objetivo é fornecer aos colegas que estão assitindo a apresentação uma visão geral com base sólida sobre o que vocês pesquisaram sobre o `Vue.js`. 
- Vocês devem destacar suas principais características, tecnologias associadas, aspectos arquiteturais marcantes e potenciais benefícios.

## 1.1 O que é Vue.js?

- Destaquem que o `Vue.js` é um `framework progressivo` para a construção de interfaces de usuário. Expliquem isso arqruiteturalmente falando. lembrem-se de conceitar e detalhar o que é `reatividade` neste framework e no paradigma de desenvolvimento.
- Abordem que ao contrário de outros frameworks monolíticos o `Vue.js` é projetado para ser adotado incrementalmente. Discutam o que significa isso de maneira prática com exemplos e mostre os impactos (benefícios/malefícios) desta característica.
- Destrinchem o núcleo da biblioteca, ressaltem o motivo e detalhem da parspectiva de uma arquitetura `MVC` e lembrem-se de ressaltar que ele se concentra apenas na camada de visualização e porquê.
- Detalhem os impactos disso como por exemplo a facilidade de integração com outras bibliotecas, o fato de tornar confusa a definição da arquitetura de um projeto com a escolha dessa tecnologia, ou até mesmo a possibilidade de integrar com projetos existentes.

**Orientações adicionais:**

- **Pesquisa:** Façam uma pesquisa sobre a origem do `Vue.js`, quem o criou, e qual problema ele visa resolver.
- **Explanação:** Descrevam como o `Vue.js` se posiciona entre outros frameworks e bibliotecas, como `React` e `Angular`, em termos de curva de aprendizado, performance e uso.

## 1.2 Por que Vue.js?

Aqui vocês podem destacar como `Vue.js` ganhou popularidade por sua facilidade de integração, reatividade, e a eficiente maneira de desenvolver componentes reutilizáveis.

**Orientações adicionais:**

- **Comparação:** Preparem uma comparação breve com outros `frameworks`, focando em pontos como tamanho do framework, velocidade, e flexibilidade.
- **Casos de Uso:** Identifiquem e discutam alguns casos de uso ideais para `Vue.js`, como `SPAs` (Single Page Applications), aplicativos móveis com `Vue Native`, e por que empresas escolhem `Vue` para seus projetos.

## 1.3 Primeiros Passos com Vue.js

Introduzam o `Vue.js` em um projeto surpreendentemente simples. Apresentem a flexibilidade e ao CLI (Command Line Interface) para a inicialização de novos projetos.

**Orientações adicionais:**

- **Instalação:** Demonstre como instalar o `Vue CLI` globalmente usando `npm`ou `yarn`. Inclua os comandos específicos e explique brevemente o que cada um faz. Exemplo
  ```bash
  npm install -g @vue/cli
  # ou
  yarn global add @vue/cli

- **Criação de um Novo Projeto:** Mostrem como criar um novo projeto `Vue` usando o `Vue CLI`. Expliquem as opções que podem ser selecionadas durante a criação do projeto, como a escolha de um linter, testes unitários, e configurações de CSS. Incluam os comandos bash, exemplo:
- ```bash
  vue create meu-projeto-vue
  
- **Criação de um Novo Projeto:**

- **Estrutura do Projeto:** Forneçam uma visão geral da estrutura de pastas de um projeto Vue criado pelo CLI e explique a finalidade de cada pasta e arquivo principal.

## 1.4 Primeiro Componente Vue
Abordem que o `Vue.js` utiliza um sistema baseado em componentes para construir a UI. Discutam como esses componentes são instâncias reutilizáveis do `Vue` com uma parte do template, lógica e estilos.

**Orientações adicionais:**
- **Criação de Componente:** Guiem a criação de um simples componente Vue, como um botão ou um cabeçalho. Mostrem o código do template, script e estilo.
- **Integração do Componente:** Expliquem como integrar o componente criado em uma aplicação Vue, demonstrando o uso de props para passar dados e eventos para comunicação entre componentes.

# Seção 2: Arquitetura do Vue.js

- Nesta seção explorem a arquitetura fundamental do `Vue.js`.
- Abordem sua estrutura de componentes, o sistema reativo e o que isso significa e a comunicação entre componentes.
- O objetivo é fornecer aos colegas um entendimento detalhado dos aspectos arquiteturais do `Vue.js`, permitindo uma apreciação mais profunda de como aplicativos são construídos e gerenciados.

## 2.1 Estrutura de Componentes do Vue.js

- Detalhem que `Vue.js` é construído em torno de uma arquitetura de componentes modulares.
- Destaquem que cada componente é uma instância que encapsula template, lógica e estilo de forma isolada.
- Lembrem-se de nesta seção detalhar como os componentes funcionam e como eles podem ser compostos para construir aplicações complexas.

### Orientações adicionais:

1. **Definição de Componente:** Iniciem explicando o que é um componente no contexto do Vue.js, incluindo a sintaxe básica para declarar um componente.
   
   ```vue
   <template>
     <div>{{ message }}</div>
   </template>

   <script>
   export default {
     data() {
       return {
         message: 'Olá Vue!'
       }
     }
   }
   </script>

2. **Composição de Componentes:** Discutam como os componentes podem ser usados para construir interfaces de usuário complexas, explicando o conceito de componentes pai e filho e como dados são passados entre eles usando props.

3. **Exemplo Prático:** Forneçam um exemplo detalhado da criação de um pequeno aplicativo Vue composto por vários componentes interligados, como uma lista de tarefas. Mostrem cada passo, desde a criação dos componentes individuais até a sua composição em um aplicativo funcional.

## 2.2 Sistema Reativo do Vue.js
- Destaquem que Vue.js utiliza um sistema reativo para rastrear mudanças em dados e atualizar a DOM de forma eficiente.
- Nesta seção explorem os fundamentos desse sistema reativo, incluindo o uso de observadores para detectar mudanças de dados e a virtual DOM para minimizar o impacto no desempenho.

### Orientações adicionais:
- Acrescentem uma seção `Entendendo a Reatividade`: Expliquem o conceito de reatividade no Vue.js. Discutam como o Vue rastreia as dependências dos dados e como as mudanças nesses dados desencadeiam a re-renderização dos componentes.

- Acrescentem uma seção `Observadores e Computadas`: Mostrem como usar propriedades computadas e observadores para criar lógica reativa em componentes Vue. Incluam exemplos de código que ilustrem como essas funcionalidades podem ser utilizadas para criar interfaces dinâmicas.
-```vue
<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
}
</script>

- Acrescentem uma seção `Virtual DOM e Atualizações Eficientes`: Descrevam como o Vue utiliza a virtual DOM para otimizar a atualização da DOM real. Expliquem o processo pelo qual o Vue compara a virtual DOM com a DOM real e aplica as mudanças necessárias de forma eficiente.

## 2.3 Comunicação Entre Componentes
- Reforcem que a comunicação eficaz entre componentes é crucial para o desenvolvimento de aplicações Vue.
- Procurem cobrir os diferentes métodos disponíveis para a comunicação entre componentes, incluindo props, eventos personalizados e a injeção de dependência.

### Orientações adicionais:
- Acrescentem uma seção `Props e Eventos Personalizados`: Expliquem como props são usadas para passar dados para componentes filhos e como eventos personalizados podem ser emitidos por componentes filhos para comunicar mudanças aos seus pais.

- Acrescentem uma seção `Slots e Escopos`: Introduzam o conceito de slots para distribuição de conteúdo e como eles podem ser usados para criar layouts flexíveis e reutilizáveis. Discutam também o uso de slots com escopo para acessar dados de componentes filhos dentro de um slot.

- Acrescentem uma seção `Provedores e Injetores (provide / inject)`: Descrevam como o mecanismo de provide e inject pode ser usado para passar dados diretamente de componentes ancestrais para descendentes, ultrapassando a necessidade de prop drilling.

# Seção 3: Padrões de Projeto e Implementação Avançada no Vue.js

Os padrões de design são soluções confiáveis para problemas comuns enfrentados pelos desenvolvedores de software ao construir sistemas. Eles não são específicos para uma linguagem de programação ou estrutura, mas servem como ferramentas gerais para resolver problemas. Em desenvolvimento frontend, os padrões de design podem oferecer soluções reutilizáveis para problemas recorrentes na construção de interfaces de usuário e aplicativos web.

## 3.1 Padrões de Projeto no Vue.js

Vue.js é um framework baseado em componentes, onde o conceito de componentes já é um padrão de design por si só. Componentes são unidades de código autocontidas que podem ser reutilizadas em toda a aplicação, promovendo modularidade e manutenibilidade. Além da estrutura baseada em componentes, Vue utiliza o conceito de data binding reativo. Mudanças nos dados de um componente são automaticamente refletidas na interface do usuário, resultando em código mais conciso e legível. Vue também oferece suporte a diretivas personalizadas, que podem ser anexadas como funções JavaScript a elementos HTML para adicionar funcionalidades personalizadas. Essa flexibilidade permite a implementação de vários padrões de design, como o padrão observador e o padrão de gerenciamento de estado.

### 3.1.1 Padrões de Design no Vue podem:
- Oferecer uma abordagem estruturada para resolver problemas, reduzindo a probabilidade de erros e eliminando a necessidade de soluções personalizadas.
- Aprimorar a reutilização de código, evitando a reinvenção de soluções para problemas semelhantes. Os padrões ajudam a desacoplar vários componentes do sistema.
- Melhorar a comunicação, estabelecendo um vocabulário comum por meio de padrões de design que simplificam a colaboração e facilitam a compreensão do código entre os desenvolvedores.
- Promover práticas de codificação uniformes, garantindo que a base de código mantenha um estilo e estrutura consistentes, mesmo quando vários desenvolvedores contribuem para um projeto.
- Melhorar a escalabilidade, simplificando a distribuição e o gerenciamento, o que ajuda a lidar com a complexidade e garantir a adaptabilidade à medida que o projeto cresce e os requisitos mudam.
- Aprimorar a manutenção, pois o código estruturado com padrões de design geralmente é mais fácil de manter. Desenvolvedores podem consultar padrões estabelecidos ao lidar com problemas ou fazer alterações, evitando soluções personalizadas complexas e difíceis de entender.
- Elevar a qualidade do código, ao aplicar ou incentivar melhores práticas por meio de padrões de design, como encapsulamento, abstração e polimorfismo. Isso resulta em código mais legível, manutenível e extensível.
- Servir como uma forma de documentação integrada. O uso de padrões de design permite que qualquer pessoa revisando seu código reconheça os padrões utilizados, oferecendo insights sobre a arquitetura e o comportamento do sistema, mesmo quando a documentação é limitada.
- Esses benefícios economizam tempo e esforço para os desenvolvedores, destacando o papel crucial dos padrões de design na engenharia e desenvolvimento de software. Agora, avancemos para alguns padrões avançados que podem ser aplicados no Vue para resolver diferentes problemas.



### 3.1.2 Padrão Observer

O padrão observer é um padrão de design comportamental que permite criar sistemas pouco acoplados, fáceis de manter e estender. É especialmente útil em aplicações onde é necessário notificar vários objetos sobre mudanças de estado em um único objeto. Este padrão, também conhecido como padrão observável, permite que um objeto notifique seus dependentes ou observadores sobre quaisquer mudanças de estado. O sujeito, ou objeto observável, mantém uma lista de seus observadores e chama seus métodos de atualização sempre que há mudanças em seu estado. No contexto do Vue, o padrão observador é usado para gerenciar reatividade e lidar com atualizações dinâmicas na interface do usuário. Vejamos um exemplo que exibe uma notificação toda vez que uma caixa de seleção é marcada ou desmarcada.

### 3.1.3 Implementação do Vue.js
O Vue.js integra o padrão observer de forma transparente para gerenciar a reatividade dos dados em sua aplicação. Veja como funciona:
1. Dados como Sujeitos: Quando você declara propriedades de dados em um componente Vue, o Vue as transforma internamente em objetos reativos. Estes objetos reativos agem como sujeitos no padrão observer.
2. Rastreamento de Dependências: O Vue rastreia automaticamente as dependências entre os componentes e os dados dos quais eles dependem. Ele usa uma técnica chamada coleta de dependências para identificar quais componentes precisam ser renderizados novamente após a modificação dos dados.
3. Sistema de Reatividade: Quando um objeto reativo (sujeito) passa por uma mudança (mutação), o sistema de reatividade do Vue dispara um processo de notificação.
4. Atualizações de Componentes: Os componentes que se inscrevem (observam) os dados alterados são alertados pelo Vue. Eles recebem os dados atualizados e renderizam novamente seus templates, refletindo as mudanças na interface do usuário.

#### Exemplo Prático:
```javascript
class Subject {
    __value
    constructor(value) {
        this.__value = value
        this.__observers = []
    }
    set value(newValue) {
        this.__value = newValue
        for (const observer of this.__observers) {
            observer.update(this)
        }
    }
    get value() {
        return this.__value
    }
    subscribe(observer) {
        this.__observers.push(observer)
    }
}

class Observer {
    update(subject) {
        console.log(`new value: ${subject.value}`)
    }
}
```
### 3.1.3 Implementação do Vue.js
 No código, você pode observar que após cada definição de valor para nosso sujeito, o método update será executado para todos os seus observadores. Agora, vamos criar um sujeito e um observador para testar este código.

![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/ba57e3c5-22a2-4290-a6c3-c69dd15e36f1)

Agora, como você pode ver, nosso observador é notificado e registra o novo valor do sujeito no console.


### Sistema de Reatividade 
Um ref ou propriedade reativa (sujeito) armazena um objeto dep (dependência), que é essencialmente um conjunto de efeitos (observadores no código acima). Quando recuperamos um valor de um ref, o método track é chamado. Por outro lado, ao atribuir um valor a um ref, o método trigger é invocado, indicando que ocorreu uma alteração na propriedade reativa. Em breve, discutiremos sobre efeitos, tracks e triggers.
Efeito (Effect)
- Em termos simples, um efeito no Vue pode ser visto como um observador.
  
```class Effect {
  constructor(fn) {
    this.fn = fn
  }
  // for a computed it will update inner value and
  // for a component it will render needed part of that
  run() {
    return this.fn()
  }
  ...
}
```



 O objeto effect, quando instanciado, recebe uma função em seu construtor. A principal responsabilidade do efeito é observar quaisquer alterações nas propriedades reativas dentro dessa função. 
### Métodos Track e Trigger
- Quando o valor de uma propriedade reativa é acessado dentro de um novo escopo de código, como uma função de renderização ou método getter computado, a função track é acionada. O ActiveEffect é adicionado aos dependentes da propriedade reativa. Nesse cenário, o ActiveEffect é um efeito inicializado usado em um computado ou componente para detectar alterações nas propriedades reativas. Esse mecanismo garante que o computado ou componente esteja ciente de quaisquer modificações na propriedade reativa.

```
function track(target) {
  // component.effect or computed.effect is equal to activeEffect
  // it is actually a subscriber
  target.dep.add(activeEffect)
}
```

- Quando o valor de uma propriedade reativa é alterado, a função trigger é chamada. No entanto, a função trigger executa apenas os efeitos associados a ela se o novo valor for diferente do valor antigo. Dessa forma, o trigger garante que apenas os efeitos dependentes do valor alterado sejam executados.

```
function trigger(target) {
  const effects = [...target.dep]
  for (const effect of effects) {
    // we will run effect of our reactive property. one of this effects
    // are computed.effect. and now computed can update its inner value
    effect.run()
  }
}
```

## 4 Técnicas Avançadas de Implementação

### 4.1 - Gerenciamento de Estado com Vuex

-**Introdução ao Vuex**: 
 - O Vuex é um padrão de gerenciamento de estado + biblioteca para aplicações Vue.js. Ele serve como um store centralizado para todos os componentes em uma aplicação, com regras garantindo que o estado só possa ser mutado de forma previsível.Inspirado na arquitetura Flux, o Vuex proporciona uma estrutura organizada e previsível para lidar com o estado da aplicação.
De acordo com a documentação oficial do Vuex (2019), trata-se de “um padrão de gerenciamento de estado + biblioteca para aplicativos Vue.js”. Segundo Schmitz e Georgii (2016), uma forma simples de compreender o Vuex dentro do um projeto é através de seu conceito de store. A Vuex serve como uma “loja” de dados para sua aplicação, permitindo que todos os componentes tenham acesso a um determinado estado (ou state), pois todos os estados ficam centralizados dentro dessa loja. Vuex também permite uma boa organização do projeto, permitindo ainda modularizar a store, para organizar quais estados pertencem a uma determinada entidade da aplicação. Vuex também se integra com a extensão para navegadores do Vue.js, chamada Vue DevTools, exibida na Figura, oferecendo recursos interessantes, como a depuração através do histórico de estado, também conhecida como time travel (VUEX, 2019).

![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/7dbf5511-2273-4b2d-a77b-a23c72b10c0b)

- Segundo Vuex (2019), a arquitetura empregada pelo Vuex possui o seguinte fluxo: os componentes podem disparar ações (actions), que por sua vez podem ou não fazer requisições a APIs no back-end (opcionalmente, dependendo da aplicação). Tal ação pode realizar um commit nos dados, o que irá chamar uma mutação (mutation). Neste momento, o evento é lançado no Vue DevTools e poderá ser observado. Por fim, a mutation efetivamente armazena 60 o dado no state. Esse state poderá ser acessado por meio de um getter em qualquer componente da aplicação.

![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/77b205be-213e-4d67-8975-2c0d4f21b798)

### 4.2 - Mas o que é um Padrão de Gerenciamento do Estado?

![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/e9f75741-aede-445d-a308-97b712c350ed)

É uma aplicação independente com as seguintes partes:
- O estado (state), que é a fonte da verdade que direciona nossa aplicação;
- A view, que é apenas um mapeamento declarativo do estado;
- As ações (actions), que são as possíveis maneiras pelas quais o estado pode mudar em reação às interações dos usuários da view.
- Esta é uma representação simples do conceito de "fluxo de dados unidirecional" (one-way):
  
  ![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/32ad8ed1-103f-4777-b37d-720e313b150f)

 A simplicidade é quebrada rapidamente quando temos vários componentes que compartilham um estado em comum. Vamos imaginar que múltiplos componentes dependam do mesmo pedaço de estado do exemplo acima: neste caso, estariam dependendo do count. E ações de diferentes views podem precisar mudar o mesmo pedaço de estado. Já notamos rapidamente algumas dificuldades como, por exemplo, passar propriedades (props) para componentes profundamente aninhados. Porém, essa estratégia não funcionaria para componentes irmãos. Já falando das ações para mudanças do estado, a solução seria alcançar referências diretas da instância pai/filho ou tentar alterar e sincronizar várias cópias do estado por meio de eventos.

### 4.3 - E então, surge o Vuex
O Vuex extrai o estado compartilhado dos componentes e o gerencia em um singleton global. Com isso, a árvore de componentes se torna uma grande “view”, e qualquer componente pode acessar o estado ou acionar ações, não importando onde elas estejam na árvore.

Com tal separação e definição, os conceitos envolvidos no gerenciamento do estado, com a aplicação de certas regras, transforma nosso código em algo mais estruturado e com sustentabilidade. Esta é a ideia básica por trás do Vuex, inspirado no Flux, Redux e The Elm Architecture. Ao contrário dos outros padrões, o Vuex também é uma implementação da biblioteca adaptada especificamente para o Vue.js aproveitar as vantagens de seu sistema de reatividade granular para atualizações eficientes.

### 4.4 - Introdução ao Flux
A arquitetura Flux é um padrão de arquitetura de software desenvolvido pelo Facebook para criar aplicações web robustas e escaláveis. Ela foi projetada para resolver desafios específicos encontrados na construção de interfaces de usuário (UI) complexas, especialmente em ambientes onde o estado da aplicação é difícil de gerenciar.
O Flux traz um conceito de fluxo unidirecional de dados onde a interação do usuário vai provocar um evento no formato de uma action específica. Essa ação vai despachar o evento para a modificação de um dados, que vai modificar o store de dados e, por fim, este vai enviar um evento de atualização da visualização. Ao final a visualização vai consumir os dados das mais variadas formas.A arquitetura Flux é composta por quatro partes principais:
- Actions (Ações):
As ações são eventos que descrevem uma intenção de modificar o estado da aplicação. Elas são criadas pelos componentes da UI em resposta a interações do usuário ou a outros eventos. Cada ação possui um tipo que descreve a natureza da mudança no estado.
- Dispatcher (Despachante):
O despachante é responsável por receber ações e garantir que elas sejam enviadas para todos os "stores" da aplicação. Ele atua como um hub central que distribui as ações para os devidos "stores" registrados.
- Stores (Armazéns):
Os "stores" contêm o estado da aplicação e lógica de negócios relacionada. Eles respondem a ações específicas e atualizam seu estado interno de acordo. Os "stores" emitem um evento sempre que seu estado é modificado.
- Views (Visões):
As visões são componentes da UI que reagem às mudanças no estado da aplicação. Elas se registram nos "stores" relevantes para receber atualizações quando o estado muda. Quando uma visão detecta uma mudança, ela atualiza a interface do usuário para refletir o novo estado.

![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/87c056db-e05b-4eec-8c9a-f221d31b0e2b)

-**Escalando a arquitetura Flux**
Expandindo o conceito sobre o store ele possui toda a lógica de neǵocio da aplicação e pode ser composto por vários stores onde cada store é responsável por um domínio específico da aplicação. Além disso, a visualização já consegue ser composta por vários níveis de visualização que irão para o cliente e, talvez, em somente uma parcela exista um ponto passível de chamar uma ação.
Escalando essa aplicação conseguimos ter uma visão singular de como funcionam os possíveis caminhos que os dados percorrem para formar uma visualização para o usuário final. Acho que vale a pena destacar como fica claro a reusabilidade de código e a separação lógica tanto dos domínios quanto dos componentes visuais.

![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/70e654d7-eb94-4a75-93aa-87b4636e1406)

-**Sincronia**
Toda as modificações de dados são dadas de forma síncrona e quando acontece alguma operação assíncrona, como por exemplo ajax, estas disparam uma action que executa todo o fluxo previsto pela arquitetura. Além disso, é possível que suas ações ainda disparem ações assíncronas da API (do browser ou do node). Em resumo, quando há uma chamada tanto síncrona quanto assíncrona o fluxo dos dados fica bem explícito dentro da aplicação e fácil de ser depurado quando há lógica incorretas no seu código.

-**Inversão de controle**
Nenhuma outra parte do código precisa conhecer como modificar o estado da aplicação pois os stores fazer isso internamente através das ações, ou seja, toda a lógica de atualizar os dados está contida no store. Além disso, como as atualizações dos stores só acontecem em resposta às ações, isso sincronamente, testar stores se torna demasiadamente simples pois você terá um “estado inicial”, uma ação e um “estado final”.

-**Ações mais semânticas**
Como os stores atualizam a si mesmos em resposta às ações, as ações tendem a ser semanticamente mais descritivas. Por exemplo, em uma aplicação flux de notas fiscais eletrônicas você poderá abrir a visualização de uma nota através de uma ação “TOGGLE_VIEW_NFE”, passando o identificador da nota fiscal como argumento. A ação em si não sabe como efetuar a atualização mas descreve plenamente o que espera que seja feito.
Por causa desta propriedade você raramente terá que trocar as suas ações, apenas como o store responde a essas ações. Quanto mais a sua aplicação se aproxima de um conceito de um Saas, quanto mais pontos de interação essa aplicação tenha tenha, a ação “TOGGLE_VIEW_NFE” se tornará semanticamente válida.
- O Vuex simplifica a implementação do padrão Flux em aplicações Vue.js, fornecendo uma estrutura clara e previsível para o gerenciamento de estado. A união do Vue.js e do Vuex oferece um ecossistema poderoso para o desenvolvimento de aplicações web reativas e escaláveis. O conceito de fluxo unidirecional de dados promovido pela arquitetura Flux, e implementado pelo Vuex, contribui significativamente para a organização e manutenção de projetos de larga escala.

- ### 4.5 Quando usar o Vuex?
Embora o Vuex nos ajude a lidar com o gerenciamento de estado compartilhado, ele também vem com o custo de mais conceitos e códigos repetitivos. É uma escolha de prós e contras entre produtividade de curto e longo prazo. Se você nunca construiu um SPA em grande escala e for direto para o Vuex, ele pode parecer verboso e desanimador. Isso é perfeitamente normal - se a sua aplicação é simples, você provavelmente ficará bem sem o Vuex. Um simples store pattern pode ser tudo que você precisa. Mas, se você está criando um SPA de médio a grande porte, é provável que tenha encontrado situações que fazem você pensar em como lidar melhor com o estado fora de seus componentes Vue, e o Vuex será naturalmente o próximo passo para você. Há uma boa citação de Dan Abramov, o autor do Redux:
As bibliotecas Flux são como óculos: você saberá quando precisar delas.
A decisão de usar o Vuex depende da complexidade da aplicação. Para aplicações simples, um padrão de gerenciamento de estado básico pode ser suficiente. No entanto, à medida que a aplicação cresce em escala e complexidade, o Vuex torna-se uma escolha valiosa.
O Vuex oferece benefícios significativos no gerenciamento de estados compartilhados, mesmo que isso venha acompanhado de conceitos adicionais e algum código repetitivo. A escolha entre produtividade de curto e longo prazo depende do tamanho e escopo da aplicação em questão.

-**Benefícios do Vuex:**
- Centralização do Estado: O Vuex centraliza o estado da aplicação, evitando estados dispersos e facilitando a manutenção.
- Rastreabilidade e Preditibilidade: A arquitetura Flux do Vuex oferece um fluxo de dados unidirecional, tornando as mudanças de estado previsíveis e rastreáveis.
- Facilita a Colaboração entre Componentes: Componentes podem acessar e modificar o estado de forma clara e organizada, simplificando a colaboração entre diferentes partes da aplicação.
- Suporte para Ações Assíncronas: O Vuex facilita a execução de ações assíncronas, mantendo a coesão na manipulação do estado


-**Exemplo de Uso**:
Veja como fica o arquivo "/src/main.js":

![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/662dcf1d-67d3-4104-aff0-78a55f97bcec)

Arquivo "/src/store/index.js":

![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/cfcb33af-7278-4219-bd31-909387d97ddd)

Arquivo "/src/App.vue":

![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/9d0a8c2b-1abc-45bf-8f5e-803a5570e573)

Arquivo "/src/components/Todo.vue":

![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/eb839e5f-e3be-4c46-818b-5f0dbdac1774)

Arquivo "/src/components/Todos.vue":

![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/e4116cb6-9314-48b8-9c43-ed0213d72a75)


### 4.2 Renderização Condicional e Listas

A renderização condicional e manipulação de listas são aspectos cruciais na construção de interfaces de usuário dinâmicas e interativas em Vue.js. Nesta seção, exploraremos técnicas avançadas, destacando o uso de diretivas Vue específicas, como v-if, v-show e v-for, e apresentaremos práticas recomendadas para otimizar o desempenho ao lidar com renderização condicional e listas.

-**Diretivas Vue**: 

-**v-if:**  
- Utilizado para renderização condicional com base em uma expressão verdadeira ou falsa
- A diretiva v-if é usada para interpretar um bloco condicionalmente. O bloco apenas será interpretado se a expressão da diretiva retornar um valor verdadeiro

![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/51de6cb7-aa83-4d06-ac18-97155e3f22b0)

-**v-else:**

​- Nós podemos usar a diretiva v-else para indicar um "bloco else" à v-if:
- Um elemento v-else deve seguir imediatamente um elemento v-if ou v-else-if - de outro modo não será reconhecido
  
![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/eed4b408-f09a-4bd6-bf7b-0786308a9729)

-**v-else-if:**

- ​A diretiva v-else-if, como o nome sugere, serve como um "bloco else if" à v-if. Esta também pode ser encadeada várias vezes
- Semelhante à v-else, um elemento v-else-if deve seguir imediatamente um elemento v-if ou um v-else-if
  
![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/cffaf3ef-a8d8-494b-87e1-244364e10fee)

-**v-show:** 

- Alterna a visibilidade de um elemento com base em uma expressão verdadeira ou falsa. 
- A diferença é que um elemento com a v-show sempre será interpretado e permanecerá no DOM; A v-show apenas alterna a propriedade de CSS display do elemento.
- A v-show não suporta o elemento <template>, nem funciona com a v-else.

  ![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/b231e34a-46b0-49b8-97c1-78b7b05a6612)


-**v-if vs v-show:** ​
- A v-if é a interpretação condicional "verdadeira" porque esta garante que os ouvintes de evento e componentes filhos dentro do bloco condicional sejam destruídos corretamente e recriados durante as alternâncias.
- A v-if também é preguiçosa: se a condição for falsa na interpretação inicial, esta não fará nada - o bloco condicional não será interpretado até a condição tornar-se verdadeira pela primeira vez.
- Em comparação, a v-show é muito mais simples - o elemento é sempre interpretado independentemente da condição inicial, com alternância baseada em CSS.
- De um modo geral, a v-if tem custos de alternância mais elevados enquanto a v-show tem custos de interpretação inicial mais elevados. Então devemos preferir a v-show se precisarmos de alterar algo com muita frequência, e devemos preferir v-if se for pouco provável que a condição se altere em execução.

### Interpretação de Lista

-**v-for​** 

- Nós podemos utilizar a diretiva v-for para interpretar uma lista de itens baseados em um arranjo. A diretiva v-for exije uma sintaxe especial na forma de item in items, onde items é o arranjo de dados de origem e o item é um pseudónimo para o elemento do arranjo sobre qual é interado. Dentro do escopo de v-for, as expressões do modelo de marcação tem acesso a todas propriedades do escopo do pai. 

![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/7c45a808-2b9e-489a-94f0-5ce171736f19)

-**v-for com v-if**
- Não é recomendado utilizar v-if e v-for no mesmo elemento devido a precedência implicita.Quando elas existem no mesmo nó, a v-if tem uma prioridade mais alta do que a v-for. Que significa que a condição v-if não terá acesso as variáveis do escope do v-for

![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/175e269b-c7e8-4960-8a20-4babd6b465c2)


-**Práticas Recomendadas**: 
- v-if: Use quando a renderização do elemento é raramente alterada ou depende de condições complexas, pois o elemento é removido do DOM quando a condição é falsa.
- v-show: Indicado para alternar a visibilidade rápida de elementos, especialmente quando a alteração é frequente, pois o elemento permanece no DOM, apenas sua propriedade display é manipulada.


## 5 Conclusão e Reflexão
- **Preparem uma Demonstração**: Certifiquem-se de que o projeto final esteja totalmente funcional e pronto para ser demonstrado. Revisem todos os requisitos do projeto para garantir que nada foi esquecido.

- **Organizem a Apresentação**: Criem uma sequência lógica para apresentar o projeto. Iniciem com uma visão geral da aplicação, seguida por uma demonstração das funcionalidades principais e dos aspectos técnicos destacados.

- ** Aproveitem para Destacar Desafios e Soluções**: Identifiquem os principais desafios enfrentados durante o desenvolvimento do projeto e discutam como resolveram esses problemas. Isso pode incluir desafios de codificação, decisões de design ou a integração de tecnologias.

- ** Screencasts ou Vídeos** : Considerem a utilização de screencasts para demonstrar a funcionalidade da aplicação ou vídeos para explicar conceitos complexos. Isso pode ajudar a tornar a apresentação mais dinâmica e compreensível.
  
- **Discutam as Lições Aprendidas**: Reflitam sobre o que aprenderam durante o processo de desenvolvimento do projeto. Isso pode incluir novas habilidades técnicas, insights sobre design de software ou aperfeiçoamento de habilidades de trabalho em equipe.

- **Avaliem o Uso do Vue.js**: Avaliem como o Vue.js facilitou ou complicou o desenvolvimento do projeto. Discutam os pontos fortes e fracos do Vue.js com base na experiência prática adquirida.

- **Considerem Melhorias Futuras** : Pensem em como o projeto pode ser expandido ou melhorado. Discutam funcionalidades adicionais que poderiam ser implementadas ou como a arquitetura poderia ser otimizada para maior eficiência e escalabilidade.

- **Compartilhem Recursos Úteis**: Finalizem a apresentação compartilhando recursos que foram particularmente úteis durante o desenvolvimento do projeto. Isso pode incluir documentação, tutoriais, bibliotecas ou ferramentas.
  
