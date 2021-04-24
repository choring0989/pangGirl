class Stage extends egret.DisplayObjectContainer {
    public field: tiled.TMXTilemap;
    public blocked: Set<string> = new Set();
    
    private fTriggers;
    
    public fScale: number;

    constructor(f) {
        super();
        this.field = f;
    }

    public onStart() {
        this.initialize();
    }

    private initialize() {
        this.fScale = this.field.scaleX;

        SceneManager.dispatcher.addEventListener("zoomScale", this.zoomScale, this);
        // this.setBlockObj();
        this.setSpon();
    }

    private setSpon(){
        // 수정중 ...ㅎ;
        // let triggers = this.field.getChildByName("trigger").$children;
        // console.log(triggers);
        // console.log(SceneManager.stage.field.getChildByName("trigger").$children[0]);
    }

    private zoomScale(){
        this.field.scaleX = this.fScale;
        this.field.scaleY = this.fScale;

        SceneManager.stage.field.x = -(SceneManager.player.human.x * this.fScale) + 128 * this.fScale;
        SceneManager.stage.field.y = -(SceneManager.player.human.y * this.fScale) + 128 * this.fScale;
    }

    // public setBlockObj() {
    //     let groups = this.field.getChild("blocked").asGroup;

    //     for (let i = 0; i < this.field.numChildren; i++) {
    //         if (this.field.getChildAt(i).group == groups) {
    //             for (let j = -(PangGlobal.interpol * 2); j < (PangGlobal.interpol * 2 + 1); j++) {
    //                 for (let k = -(PangGlobal.interpol * 3); k < (PangGlobal.interpol - 1); k++) {
    //                     this.blocked.add((this.field.getChildAt(i).x + j) + "," + (this.field.getChildAt(i).y + k));
    //                 }
    //             }
    //         }
    //     }
    // }


}