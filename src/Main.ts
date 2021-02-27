class Main extends egret.DisplayObjectContainer {

    public loader: ResourceLoader;
    public stage1: fgui.GComponent;
    public hito: fgui.GComponent;

    public constructor() {
        super();
        this.gameSceneStart();
    }

    private async gameSceneStart() {
        this.createLoader();
    }

    private async createLoader() {
        this.loader = new ResourceLoader();
        await this.loadMainResource();
        await this.createMainPackage(["stage", "sprite"]);
        this.temp();
    }

    private async loadMainResource() {
        await this.loader.loadResource("ingame", "resource/default.res.json");
    }

    private loadMainResourceComplete() {
        //this.onProgress(40);
    }

    private async createMainPackage(pkgNames: Array<string>) {
        if (pkgNames.length < 1) {
            console.log("패키지 이름을 넣어");
            return;
        }
        await pkgNames.forEach((pkg) => { this.loader.createPackage(pkg); })
    }

    private temp() {
        this.stage1 = this.loader.createObj("stage", "stage1").asCom;
        this.addChild(this.stage1.displayObject);

        this.hito = this.loader.createObj("sprite", "hito").asCom;
        this.hito.x = this.width / 2;
        this.hito.y = this.height / 2;
        this.addChild(this.stage1.displayObject);
        this.addChild(this.hito.displayObject);
    }

    public onProgress(current: number): void {
        //this.txtLoading.text = `Loading...${current}/${total}`;
    }

}
