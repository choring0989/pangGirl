class Stage extends egret.Stage {
    public field: fgui.GComponent;
    public blocked: Map<number, number> = new Map();

    public constructor(f) {
        super();
        this.field = f;
    }

    public onStart() {
        this.initialize();
    }

    private initialize() {
        this.addChild(this.field.displayObject);

        let aGroup = this.field.getChild("blocked").asGroup;

        for (let i = 0; i < this.field.numChildren; i++) {
            if (this.field.getChildAt(i).group == aGroup) {
                for (let j = 0; j < 17; j++) this.blocked.set((this.field.getChildAt(i).x + j), (this.field.getChildAt(i).y + j));
            }
        }
    }
}