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
        this.human.x = PangGlobal.cPositionX;
        this.human.y = PangGlobal.cPositionY;

        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 37 && this.human.x > PangGlobal.sPositionX) {
                this.human.getController("c1").selectedPage = "left";
                if (this.isNotPassBlock(this.human.x - PangGlobal.interpol, this.human.y)) return;
                this.human.x -= PangGlobal.interpol;
            }
            if (e.keyCode == 38 && this.human.y > PangGlobal.sPositionY) {
                this.human.getController("c1").selectedPage = "back";
                if (this.isNotPassBlock(this.human.x, this.human.y - PangGlobal.interpol)) return;
                this.human.y -= PangGlobal.interpol;
            }
            if (e.keyCode == 39 && this.human.x < (PangGlobal.sWidth + PangGlobal.sPositionX - PangGlobal.interpol * 4)) {
                this.human.getController("c1").selectedPage = "right";
                if (this.isNotPassBlock(this.human.x + PangGlobal.interpol, this.human.y)) return;
                this.human.x += PangGlobal.interpol;
            }
            if (e.keyCode == 40 && this.human.y < (PangGlobal.sHeight + PangGlobal.sPositionY - PangGlobal.interpol * 4)) {
                this.human.getController("c1").selectedPage = "front";
                if (this.isNotPassBlock(this.human.x, this.human.y + PangGlobal.interpol)) return;
                this.human.y += PangGlobal.interpol;
            }
        });
    }

    private isNotPassBlock(humanNewX: number, humanNewY: number) {
        let human = this.human.displayObject;
        let blockObj = TmxUtil.getObjectArrayByType(SceneManager.stage.field, "trigger", "block");
        human.x = humanNewX;
        human.y = humanNewY;

        for (let i = 0; i < blockObj.length; i++) {
            if (this.isCollision(human, blockObj[i])) return true;
        }
        return false;
    }

    private isCollision(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean {
        let rect1: egret.Rectangle = obj1.getBounds();
        let rect2: egret.Rectangle = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.y = obj1.y;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        return rect1.intersects(rect2);
    }

}