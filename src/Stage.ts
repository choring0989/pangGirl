class Stage extends egret.Stage {
    public field: fgui.GComponent;
    public blocked: Set<string> = new Set();

    public constructor(f) {
        super();
        this.field = f;
    }

    public onStart() {
        this.initialize();
    }

    private initialize() {
        this.addChild(this.field.displayObject);
        this.setBlockObj();
    }

    public setBlockObj() {
        let aGroup = this.field.getChild("blocked").asGroup;

        for (let i = 0; i < this.field.numChildren; i++) {
            if (this.field.getChildAt(i).group == aGroup) {
                for (let j = -18; j < 19; j++) {
                    for (let k = -24; k < 9; k++) {
                        this.blocked.add((this.field.getChildAt(i).x + j) + "," + (this.field.getChildAt(i).y + k));
                    }
                }
            }
        }
    }


}