class Character extends egret.Sprite {
    public human: fgui.GComponent;

    public constructor(h) {
        super();
        this.human = h;
    }

    public onStart() {
        this.initialize();
    }

    private initialize() {
        this.addChild(this.human.asCom.displayObject);
        this.human.x = 150;
        this.human.y = 150;

        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 37 && this.human.x > 0) {
                this.human.getController("c1").selectedPage = "left";
                this.human.x -= 8;
            }
            if (e.keyCode == 38 && this.human.y > 0) {
                this.human.getController("c1").selectedPage = "back";
                this.human.y -= 8;
            }
            if (e.keyCode == 39 && this.human.x < (Main.stage.field.width - 32)) {
                this.human.getController("c1").selectedPage = "right";
                this.human.x += 8;
            }
            if (e.keyCode == 40 && this.human.y < (Main.stage.field.height - 40)) {
                this.human.getController("c1").selectedPage = "front";
                this.human.y += 8;
            }
        });
    }
}