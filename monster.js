"use strict";

module.exports = exports = Monster;

function Monster(position) {
  this.x = position.x;
  this.y = position.y;
  this.timer = 0;
  this.width  = 16;
  this.height = 16;
  this.spritesheet  = new Image();
  this.spritesheet.src = encodeURI('assets/bat/bat.png');
  this.frame = 0;
  this.state = "waiting";
  this.moving = "right";
  this.maxRightX = this.x + 20;
  this.maxLeftX = this.x - 20;

  var self = this;

  window.onload = function(event){
    move(this.position);
  }
}

function move(position){
  if(self.moving == "right"){
      self.x++;
      if(self.x == self.maxRightX){
        self.moving = "left";
      }
  }
  else if(self.moving == "left"){
      self.x--;
      if(self.x == self.maxLeftX){
        self.moving = "left";
      }
  }

  Monster.prototype.render = function(time, ctx) {
    ctx.drawImage(
      // image
      this.spritesheet,
      // source rectangle
      this.frame * this.width, 0, this.width, this.height,
      // destination rectangle
      this.x, this.y, this.width, this.height
    );
  }
}
