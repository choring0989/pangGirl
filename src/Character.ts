class Character extends egret.Sprite {
    public interpol: number = 8;
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
                if (Main.stage.blocked.has((this.human.x - this.interpol) + "," + this.human.y)) return;
                    this.human.x -= this.interpol;
            }
            if (e.keyCode == 38 && this.human.y > 0) {
                this.human.getController("c1").selectedPage = "back";
                if (Main.stage.blocked.has(this.human.x + "," + (this.human.y - this.interpol))) return;
                this.human.y -= this.interpol;
            }
            if (e.keyCode == 39 && this.human.x < (Main.stage.field.width - this.interpol * 4)) {
                this.human.getController("c1").selectedPage = "right";
                if (Main.stage.blocked.has((this.human.x + this.interpol) + "," + this.human.y)) return;
                this.human.x += this.interpol;
            }
            if (e.keyCode == 40 && this.human.y < (Main.stage.field.height - this.interpol * 4)) {
                this.human.getController("c1").selectedPage = "front";
                if (Main.stage.blocked.has(this.human.x + "," + (this.human.y + this.interpol))) return;
                this.human.y += this.interpol;
            }
        });
    }
}