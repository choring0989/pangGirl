class Stage extends egret.DisplayObjectContainer {
    public field: tiled.TMXTilemap;

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
        this.setSpawn();
    }

    private setSpawn() {
        let spawnObj = TmxUtil.getObjectByName(this.field, "trigger", "spawn");
        PangGlobal.cPositionX = spawnObj ? spawnObj.x : 0;
        PangGlobal.cPositionY = spawnObj ? spawnObj.y : 0;
    }

    private zoomScale() {
        this.field.scaleX = this.fScale;
        this.field.scaleY = this.fScale;

        SceneManager.stage.field.x = -(SceneManager.player.human.x * this.fScale) + 128 * this.fScale;
        SceneManager.stage.field.y = -(SceneManager.player.human.y * this.fScale) + 128 * this.fScale;
    }

}