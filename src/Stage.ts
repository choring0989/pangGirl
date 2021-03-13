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
        let groups = this.field.getChild("blocked").asGroup;

        for (let i = 0; i < this.field.numChildren; i++) {
            if (this.field.getChildAt(i).group == groups) {
                for (let j = -(PangGlobal.interpol * 2); j < (PangGlobal.interpol * 2 + 1); j++) {
                    for (let k = -(PangGlobal.interpol * 3); k < (PangGlobal.interpol - 1); k++) {
                        this.blocked.add((this.field.getChildAt(i).x + j) + "," + (this.field.getChildAt(i).y + k));
                    }
                }
            }
        }
    }


}