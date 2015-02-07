define(["app/config", "Phaser", "app/unit"], function(config, Phaser, Unit){
    "use strict"

    var Ship = function(game, x, y, config){
        this.init(game, config);

        this.sprite = game.add.sprite(x, y, "ship");
        this.sprite.anchor = {x: 0.5, y:0.5};
        this.sprite.inputEnabled = true;
        this.sprite.events.onInputDown.add(this.onClick, this);
        this.speed = 2;
        this.sprite.update = this.update.bind(this);
    }

    Ship.prototype = new Unit();

    Ship.prototype.update = function() {
        this.moveTowardDestination();
    }

    return Ship;
});