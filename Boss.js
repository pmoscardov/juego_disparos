
class Boss extends Opponent {

    constructor(game) {
        super(game);

        this.speed = OPPONENT_SPEED * 2;

        this.myImage = BOSS_PICTURE;
        this.myImageDead = BOSS_PICTURE_DEAD;

        this.image.src = this.myImage;
    }
}
