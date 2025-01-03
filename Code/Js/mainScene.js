import player from "./player.js";

export default class MainScene extends Phaser.Scene{
    constructor()
    {
        super("MainScene");
    }

    preload(){
        console.log("Preload");
        player.preload(this);
    }

    create(){
        console.log("Create");
        this.player = new player({scene:this,x:0,y:0,texture:'male',frame:'townsfolk_m_idle_1'});
        this.player.inputKeys = this.input.keyboard.addKeys({
            up : Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
        })
    }
   update()
   {
    this.player.update();
   }
}
