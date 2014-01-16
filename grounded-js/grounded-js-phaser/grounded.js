var game = new Phaser.Game(480, 640, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.spritesheet('tiles', '/common/img/tiles.png', 32, 32);
}

function create() {
}
   
function update () {
}