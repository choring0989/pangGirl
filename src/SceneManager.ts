class SceneManager {
    public static dispatcher: egret.EventDispatcher = new egret.EventDispatcher();;
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
        await SceneManager.loader.loadMapResource("home");
        await SceneManager.loader.createMainPackage(PangGlobal.pkgNames);

        SceneManager.stage = new Stage(SceneManager.loader.createObj("TMX", "home"));
        SceneManager.mainScene.addChild(SceneManager.stage.field);

        SceneManager.ui = new UI(SceneManager.loader.createObj("UI", "lobby").asCom);
        SceneManager.mainScene.addChild(SceneManager.ui);

        SceneManager.player = new Character(SceneManager.loader.createObj("sprite", "hito").asCom);
        SceneManager.stage.field.addChild(SceneManager.player);
        
        SceneManager.player.onStart();
        SceneManager.stage.onStart();
    }

    public onProgress(current: number): void {
        //this.txtLoading.text = `Loading...${current}/${total}`;
    }
}