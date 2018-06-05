const app = {};


//TypeIt javascript starts//

app.headerHello = new TypeIt('#typeHello', {
  strings: ["Hello! I'm"],
  speed: 150,
  cursor: false
});

app.headerName = new TypeIt('#typeName', {
  strings: ['Clint Lee', 'Web Developer'],
  speed: 150,
  deleteSpeed: 100,
  cursor: false,
  startDelay: 2000
});

app.headerNameKo = new TypeIt('#typeNameKo', {
  strings: ['웹 프로그래머'],
  speed: 230,
  deleteSpeed: 100,
  cursor: false,
  startDelay: 4120
});

//TypeIt javascript ends//

app.smooth = () => {
  $('a').smoothScroll();
}

app.init = function() {
  // app.headerHello();
  // app.headerName();
  // app.headerNameKo();
  console.log('hi');
  app.smooth();
}

$(function() {
  app.init();
})