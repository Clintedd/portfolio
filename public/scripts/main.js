'use strict';

//TypeIt javascript starts//

var headerHello = new TypeIt('#typeHello', {
  strings: ["Hello! I'm"],
  speed: 150,
  cursor: false
});

var headerName = new TypeIt('#typeName', {
  strings: ['Clint Lee', 'Web Developer', 'Clint Lee'],
  speed: 150,
  breakLines: false,
  deleteSpeed: 100,
  cursor: false
});

headerHello();
headerName();

//TypeIt javascript ends//