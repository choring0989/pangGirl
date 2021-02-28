class Main extends egret.DisplayObjectContainer {

    public static loader: ResourceLoader;
    public static stage: Stage;
    public static hito: Character;

    public constructor() {
        super();
        this.gameSceneStart();
    }

    private async gameSceneStart() {
        this.createLoader();
    }

    private async createLoader() {
        Main.loader = new ResourceLoader();
        await this.loadMainResource();
        await this.createMainPackage(["stage", "sprite", "UI"]);
        this.temp();
    }

    private async loadMainResource() {
        await Main.loader.loadResource("ui", "resource/default.res.json");
        await Main.loader.loadResource("ingame", "resource/default.res.json");
    }

    private loadMainResourceComplete() {
        //this.onProgress(40);
    }

    private async createMainPackage(pkgNames: Array<string>) {
        if (pkgNames.length < 1) {
            console.log("패키지 이름을 넣어");
            return;
        }
        await pkgNames.forEach((pkg) => { Main.loader.createPackage(pkg); })
    }

    private temp() {
        // this.scaleX *= 2;
        // this.scaleY *= 2;

        Main.stage = new Stage(Main.loader.createObj("stage", "stage1").asCom);
        this.addChild(Main.stage);
        Main.stage.onStart();

        Main.hito = new Character(Main.loader.createObj("sprite", "hito").asCom);
        Main.stage.addChild(Main.hito);
        Main.hito.onStart();

        this.addChild(Main.loader.createObj("UI", "inven").asCom.displayObject);
    }

    public onProgress(current: number): void {
        //this.txtLoading.text = `Loading...${current}/${total}`;
    }

}
