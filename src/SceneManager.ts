class SceneManager {
    public static loader: ResourceLoader;

    public static mainScene: Main;
    public static stage: Stage;
    public static player: Character;
    public static ui: UI;

    public constructor(main) {
        SceneManager.mainScene = main;
        this.createLoader();
    }

    public onStart() {
        this.createInitScene();
    }

    private createLoader() {
        if (!SceneManager.loader) SceneManager.loader = new ResourceLoader();
    }

    private async createInitScene() {
        await SceneManager.loader.loadMainResource(PangGlobal.grpNames, PangGlobal.defaultResouceJson);
        await SceneManager.loader.createMainPackage(PangGlobal.pkgNames);

        SceneManager.stage = new Stage(SceneManager.loader.createObj("stage", "stage1").asCom);
        SceneManager.mainScene.addChild(SceneManager.stage);
        SceneManager.stage.onStart();

        SceneManager.ui = new UI(SceneManager.loader.createObj("UI", "lobby").asCom);
        SceneManager.mainScene.addChild(SceneManager.ui);

        SceneManager.player = new Character(SceneManager.loader.createObj("sprite", "hito").asCom);
        SceneManager.stage.addChild(SceneManager.player);
        SceneManager.player.onStart();
    }

    public onProgress(current: number): void {
        //this.txtLoading.text = `Loading...${current}/${total}`;
    }
}