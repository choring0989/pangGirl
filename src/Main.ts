class Main extends egret.DisplayObjectContainer {

    private scene: SceneManager;

    public constructor() {
        super();
        this.gameSceneStart();
    }

    private async gameSceneStart() {
        this.scene = new SceneManager(this);
        this.scene.onStart();
    }

}
