const app = {};


//TypeIt javascript starts//

app.headerHello = new TypeIt('#typeHello', {
  strings: ["Hello! I'm"],
  speed: 150,
  cursor: false
});

app.headerName = new TypeIt('#typeName', {
  strings: ['Clint Lee', 'Web Developer', '웹 디자이너', 'Clint Lee'],
  speed: 150,
  breakLines: false,
  deleteSpeed: 100,
  cursor: false,
  startDelay: 2000
});

//TypeIt javascript ends//

app.init = function() {
  app.headerHello();
  app.headerName();
}

$(function() {
  app.init();
})