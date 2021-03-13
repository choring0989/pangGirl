class SceneManager {
    public static mainScene: Main;
    public static stage: Stage;
    public static player: Character;
    public static ui: UI;

    private loader: ResourceLoader;

    public constructor(main) {
        SceneManager.mainScene = main;
        this.createLoader();
    }

    public onStart() {
        this.createInitScene();
    }

    private createLoader() {
        if (!this.loader) this.loader = new ResourceLoader();
    }

    private async createInitScene() {
        await this.loader.loadMainResource(PangGlobal.grpNames, PangGlobal.defaultResouceJson);
        await this.loader.createMainPackage(PangGlobal.pkgNames);

        SceneManager.stage = new Stage(this.loader.createObj("stage", "stage1").asCom);
        SceneManager.mainScene.addChild(SceneManager.stage);
        SceneManager.stage.onStart();

        SceneManager.ui = new UI(this.loader.createObj("UI", "lobby").asCom);
        SceneManager.mainScene.addChild(SceneManager.ui);

        SceneManager.player = new Character(this.loader.createObj("sprite", "hito").asCom);
        SceneManager.stage.addChild(SceneManager.player);
        SceneManager.player.onStart();
    }

    public onProgress(current: number): void {
        //this.txtLoading.text = `Loading...${current}/${total}`;
    }
}