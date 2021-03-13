class Character extends egret.DisplayObjectContainer {
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
                if (SceneManager.stage.blocked.has((this.human.x - PangGlobal.interpol) + "," + this.human.y)) return;
                this.human.x -= PangGlobal.interpol;
            }
            if (e.keyCode == 38 && this.human.y > 0) {
                this.human.getController("c1").selectedPage = "back";
                if (SceneManager.stage.blocked.has(this.human.x + "," + (this.human.y - PangGlobal.interpol))) return;
                this.human.y -= PangGlobal.interpol;
            }
            if (e.keyCode == 39 && this.human.x < (SceneManager.stage.field.width - PangGlobal.interpol * 4)) {
                this.human.getController("c1").selectedPage = "right";
                if (SceneManager.stage.blocked.has((this.human.x + PangGlobal.interpol) + "," + this.human.y)) return;
                this.human.x += PangGlobal.interpol;
            }
            if (e.keyCode == 40 && this.human.y < (SceneManager.stage.field.height - PangGlobal.interpol * 4)) {
                this.human.getController("c1").selectedPage = "front";
                if (SceneManager.stage.blocked.has(this.human.x + "," + (this.human.y + PangGlobal.interpol))) return;
                this.human.y += PangGlobal.interpol;
            }
        });
    }

    private isCollision(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean {
        var rect1: egret.Rectangle = obj1.getBounds();
        var rect2: egret.Rectangle = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.y = obj1.y;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        return rect1.intersects(rect2);
    }

}