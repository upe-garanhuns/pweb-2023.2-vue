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

## Padrões de Design no Vue podem:
- Oferecer uma abordagem estruturada para resolver problemas, reduzindo a probabilidade de erros e eliminando a necessidade de soluções personalizadas.
- Aprimorar a reutilização de código, evitando a reinvenção de soluções para problemas semelhantes. Os padrões ajudam a desacoplar vários componentes do sistema.
- Melhorar a comunicação, estabelecendo um vocabulário comum por meio de padrões de design que simplificam a colaboração e facilitam a compreensão do código entre os desenvolvedores.
- Promover práticas de codificação uniformes, garantindo que a base de código mantenha um estilo e estrutura consistentes, mesmo quando vários desenvolvedores contribuem para um projeto.
- Melhorar a escalabilidade, simplificando a distribuição e o gerenciamento, o que ajuda a lidar com a complexidade e garantir a adaptabilidade à medida que o projeto cresce e os requisitos mudam.
- Aprimorar a manutenção, pois o código estruturado com padrões de design geralmente é mais fácil de manter. Desenvolvedores podem consultar padrões estabelecidos ao lidar com problemas ou fazer alterações, evitando soluções personalizadas complexas e difíceis de entender.
- Elevar a qualidade do código, ao aplicar ou incentivar melhores práticas por meio de padrões de design, como encapsulamento, abstração e polimorfismo. Isso resulta em código mais legível, manutenível e extensível.
- Servir como uma forma de documentação integrada. O uso de padrões de design permite que qualquer pessoa revisando seu código reconheça os padrões utilizados, oferecendo insights sobre a arquitetura e o comportamento do sistema, mesmo quando a documentação é limitada.
- Esses benefícios economizam tempo e esforço para os desenvolvedores, destacando o papel crucial dos padrões de design na engenharia e desenvolvimento de software. Agora, avancemos para alguns padrões avançados que podem ser aplicados no Vue para resolver diferentes problemas.



### 3.1.1 Padrão Observer

O padrão observer é um padrão de design comportamental que permite criar sistemas pouco acoplados, fáceis de manter e estender. É especialmente útil em aplicações onde é necessário notificar vários objetos sobre mudanças de estado em um único objeto. Este padrão, também conhecido como padrão observável, permite que um objeto notifique seus dependentes ou observadores sobre quaisquer mudanças de estado. O sujeito, ou objeto observável, mantém uma lista de seus observadores e chama seus métodos de atualização sempre que há mudanças em seu estado. No contexto do Vue, o padrão observador é usado para gerenciar reatividade e lidar com atualizações dinâmicas na interface do usuário. Vejamos um exemplo que exibe uma notificação toda vez que uma caixa de seleção é marcada ou desmarcada.

## Implementação do Vue.js
O Vue.js integra o padrão observer de forma transparente para gerenciar a reatividade dos dados em sua aplicação. Veja como funciona:
1. Dados como Sujeitos: Quando você declara propriedades de dados em um componente Vue, o Vue as transforma internamente em objetos reativos. Estes objetos reativos agem como sujeitos no padrão observer.
2. Rastreamento de Dependências: O Vue rastreia automaticamente as dependências entre os componentes e os dados dos quais eles dependem. Ele usa uma técnica chamada coleta de dependências para identificar quais componentes precisam ser renderizados novamente após a modificação dos dados.
3. Sistema de Reatividade: Quando um objeto reativo (sujeito) passa por uma mudança (mutação), o sistema de reatividade do Vue dispara um processo de notificação.
4. Atualizações de Componentes: Os componentes que se inscrevem (observam) os dados alterados são alertados pelo Vue. Eles recebem os dados atualizados e renderizam novamente seus templates, refletindo as mudanças na interface do usuário.

2. **Exemplo Prático:**
   Dê uma olhada em uma implementação simples do padrão observador:
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
no código, você pode observar que após cada definição de valor para nosso sujeito, o método update será executado para todos os seus observadores. Agora, vamos criar um sujeito e um observador para testar este código.
![image](https://github.com/upe-garanhuns/pweb-2023.2-vue/assets/104845006/ba57e3c5-22a2-4290-a6c3-c69dd15e36f1)
Agora, como você pode ver, nosso observador é notificado e registra o novo valor do sujeito no console.
## Sistema de Reatividade 
Um ref ou propriedade reativa (sujeito) armazena um objeto dep (dependência), que é essencialmente um conjunto de efeitos (observadores no código acima). Quando recuperamos um valor de um ref, o método track é chamado. Por outro lado, ao atribuir um valor a um ref, o método trigger é invocado, indicando que ocorreu uma alteração na propriedade reativa. Em breve, discutiremos sobre efeitos, tracks e triggers.
Efeito (Effect)
Em termos simples, um efeito no Vue pode ser visto como um observador.
class Effect {

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
O objeto effect, quando instanciado, recebe uma função em seu construtor. A principal responsabilidade do efeito é observar quaisquer alterações nas propriedades reativas dentro dessa função. 
Métodos Track e Trigger
Quando o valor de uma propriedade reativa é acessado dentro de um novo escopo de código, como uma função de renderização ou método getter computado, a função track é acionada. O ActiveEffect é adicionado aos dependentes da propriedade reativa. Nesse cenário, o ActiveEffect é um efeito inicializado usado em um computado ou componente para detectar alterações nas propriedades reativas. Esse mecanismo garante que o computado ou componente esteja ciente de quaisquer modificações na propriedade reativa.

function track(target) {
  // component.effect or computed.effect is equal to activeEffect
  // it is actually a subscriber
  target.dep.add(activeEffect)
}

Quando o valor de uma propriedade reativa é alterado, a função trigger é chamada. No entanto, a função trigger executa apenas os efeitos associados a ela se o novo valor for diferente do valor antigo. Dessa forma, o trigger garante que apenas os efeitos dependentes do valor alterado sejam executados.

function trigger(target) {
  const effects = [...target.dep]
  for (const effect of effects) {
    // we will run effect of our reactive property. one of this effects
    // are computed.effect. and now computed can update its inner value
    effect.run()
  }
}

## 4 Técnicas Avançadas de Implementação

- Apresentem exemplos de técnicas avançadas de implementação que podem significativamente melhorar a qualidade e a performance das aplicações Vue.
- Utilizem subseções para isso como no exemplo abaixo:

### 4.1 Gerenciamento de Estado com Vuex
- Citem por exemplo que Vuex é uma biblioteca para gerenciamento de estado em aplicações Vue.js, seguindo o padrão de arquitetura Flux.
- Vocês podem, por exemplo, utilizar subtópicos como a sugestão abaixo:

-**Introdução ao Vuex**: Expliquem o conceito de gerenciamento de estado e por que Vuex é uma ferramenta essencial para aplicações complexas. Discutam a arquitetura Flux e como Vuex se encaixa nesse modelo.

-**Exemplo de Uso**: Guiem a criação de um store Vuex em um projeto Vue, mostrando como definir estados, mutações, ações e getters. Demonstrem como o estado gerenciado pelo Vuex pode ser usado em componentes Vue.
- ```javascript
  const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
});

### 4.2 Renderização Condicional e Listas
- Explorarem como técnicas avançadas para controlar a renderização de componentes e listas pode ajudar a criar interfaces de usuário dinâmicas e interativas.
- Vocês podem, por exemplo, utilizar subtópicos como a sugestão abaixo:

-**Diretivas Vue**: Discutam como usar diretivas como v-if, v-show e v-for para implementar renderização condicional e renderizar listas dinâmicas. Incluam exemplos de código que mostrem essas diretivas em ação.

-**Práticas Recomendadas**: Forneçam dicas sobre quando usar v-if versus v-show e como otimizar loops com v-for, especialmente ao trabalhar com listas grandes.

## 5 Conclusão e Reflexão
- **Preparem uma Demonstração**: Certifiquem-se de que o projeto final esteja totalmente funcional e pronto para ser demonstrado. Revisem todos os requisitos do projeto para garantir que nada foi esquecido.

- **Organizem a Apresentação**: Criem uma sequência lógica para apresentar o projeto. Iniciem com uma visão geral da aplicação, seguida por uma demonstração das funcionalidades principais e dos aspectos técnicos destacados.

- ** Aproveitem para Destacar Desafios e Soluções**: Identifiquem os principais desafios enfrentados durante o desenvolvimento do projeto e discutam como resolveram esses problemas. Isso pode incluir desafios de codificação, decisões de design ou a integração de tecnologias.

- ** Screencasts ou Vídeos** : Considerem a utilização de screencasts para demonstrar a funcionalidade da aplicação ou vídeos para explicar conceitos complexos. Isso pode ajudar a tornar a apresentação mais dinâmica e compreensível.
  
- **Discutam as Lições Aprendidas**: Reflitam sobre o que aprenderam durante o processo de desenvolvimento do projeto. Isso pode incluir novas habilidades técnicas, insights sobre design de software ou aperfeiçoamento de habilidades de trabalho em equipe.

- **Avaliem o Uso do Vue.js**: Avaliem como o Vue.js facilitou ou complicou o desenvolvimento do projeto. Discutam os pontos fortes e fracos do Vue.js com base na experiência prática adquirida.

- **Considerem Melhorias Futuras** : Pensem em como o projeto pode ser expandido ou melhorado. Discutam funcionalidades adicionais que poderiam ser implementadas ou como a arquitetura poderia ser otimizada para maior eficiência e escalabilidade.

- **Compartilhem Recursos Úteis**: Finalizem a apresentação compartilhando recursos que foram particularmente úteis durante o desenvolvimento do projeto. Isso pode incluir documentação, tutoriais, bibliotecas ou ferramentas.
  
