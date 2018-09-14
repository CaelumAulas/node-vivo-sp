## 00 - Aula introducao
// - Engine do Browser 
    // - Tipo a JVM

// Faz o JS rodar em qualquer coisa
    // https://github.com/v8/v8
    // 

// Node é uma plataforma
    // - V8
    // - Libuv
// https://nodejs.org/en/

// Node é JavaScript fora do Browser
// http://johnny-five.io/


## 01 - ...

## Dicas
- Baixar o autofilename do JerryHong
- Para servir imagens fodamente: https://github.com/thumbor/thumbor


npm install -g  projetox          // Global na máquina
npm install     projetox          //  Faz o mesmo do --save  
npm install --save projetox       // Gera o Package Lock e adiciona a dependencia no package.json
npm install --save-dev projetox

> Somente npm install // ele baixa TUDO o que ta no package.json


## 02 - Começando com Express

### Revisao de JavaScript: Arrays
```js
function forEach(funcaoDeCallBack) {
    const arr = this.myArray
    for(item of arr) {
        funcaoDeCallBack(item)
    }
}


function map(funcaoDeCallBack) {
    const newArray = []
    const arr = this.myArray
    for(item of arr) {
        newArray.push(funcaoDeCallBack(item))
    }
    return newArray
}

[1,2,3,4,5,6,7,8,9,10].filter(function(numeroAtual) {
	if(numeroAtual > 5) {
		return true
	}
})
// (5) [6, 7, 8, 9, 10]


// Sempre que criamos uma function
// O this dela é dinâmico!
    // Ele muda de acordo com o contexto do objeto que ela é executada
    function () {}

// Arrow function na verdade, tem o this fixo de onde ela foi criada
// O this dela NÃO é dinâmico!
    () => {}
```

## Brincando com o Event Loop
- http://latentflip.com/loupe/?code=CgoKZnVuY3Rpb24gbG9nZ2VyKCkgewogICAgY29uc29sZS5sb2coJ2FsbyBhbG8gdyBicmF6aWwnKQogICAgY29uc29sZS5sb2coJ3Rlc3RlJykKfQoKc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgIGxvZ2dlcigpICAgIAp9LCA1MDAwKQoKc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgIGxvZ2dlcigpICAgIAp9LCAyMDAwKQoKc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgIGxvZ2dlcigpICAgIAp9LCAzMDAwKQoKCmNvbnNvbGUubG9nKCdzYWR1ZGhhcycp!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

## Como debugar node no chrome
1 - nodemon --inspect-brk server.js
2 - chrome://inspect/
3 - Clica em "Open Dedicated Server..."

## Porque o body-parser existe?
- https://nodejs.org/api/stream.html

## Mensagens customizadas com Fluent Validations?
- https://github.com/coditorium/nodejs-fluent-validator/issues/2