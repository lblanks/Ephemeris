define(["app/config", "Phaser", "app/unit", "app/player"],
function(config, Phaser, Unit, player){
    "use strict"

    var Bomber = function(game, handler, x, y, config){
        this.spriteKey = "bomber";
        this.backgroundKey = "20empty";
        this.selectKey = "20select";
        this.selectSound = "bomberSelect";
        this.speed = 3;
        this.range = 180;
        this.view = 300;
        this.attackRate = 400;
        this.attackPower = 5;
        this.maxHealth = 100;
        this.fadeDirection = 0.02;

        this.init(game, handler, x, y, config);
    }

    Bomber.prototype = new Unit();
    Bomber.prototype.buildFraction = 0.9;
    Bomber.prototype.name = "Bomber";
    Bomber.prototype.weakness = "Fighter";
    Bomber.prototype.iconKey = "bomberIcon"

    Bomber.prototype.update = function() {
        this.unitUpdate();
    }

    return Bomber;
});
