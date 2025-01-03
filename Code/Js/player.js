export default class player extends Phaser.Physics.Matter.Sprite{
    constructor(data)
    {
        let {scene,x,y,texture,frame} = data;
        super(scene.matter.world,x,y,texture,frame)
        this.scene.add.existing(this);
    }

    static preload(scene)
    {
        scene.load.atlas('male','assets/images/male.png','assets/images/male_atlas.json');
        scene.load.animation('male_anim','assets/images/male_anim.json');
    }
    get velocity()
    {
        return this.body.velocity;
    }

    update(){
        console.log("Update");
        // this.player.anims.play('male_walk',true)
        const speed = 1.5;
        let playerVelocity = new Phaser.Math.Vector2();
        if(this.inputKeys.left.isDown){
            playerVelocity.x = -1;
        }else if(this.inputKeys.right.isDown)
        {
            playerVelocity.x = 1;
        }
        if(this.inputKeys.up.isDown){
            playerVelocity.y = -1;
        }else if(this.inputKeys.down.isDown)
        {
            playerVelocity.y = 1;
        }
        playerVelocity.normalize();
        playerVelocity.scale(speed);
        this.setVelocity(playerVelocity.x,playerVelocity.y);

        /* This New Movement Function Is Added: 
        if (playerVelocity.length() > 0) {
            // Always play the walking animation when the player is moving
            this.anims.play('male_walk', true);
        }else if(playerVelocity.length()== 0 )
        {
            this.setFrame('male_idle',true);
        } */

        if(Math.abs(this.velocity.x)>0.1 || Math.abs(this.velocity.y)>0.1)
        {
            this.anims.play('male_walk', true);
        }
        else
        {
            this.anims.play('male_idle', true);
        }
    }
}