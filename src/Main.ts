class Main extends egret.DisplayObjectContainer {

    public loader:ResourceLoader;

    public constructor() {
        super();
        this.gameSceneStart();
    }

    private async gameSceneStart() {
        this.createLoader();
    }

    private async createLoader() {
        this.loader = new ResourceLoader();

        await this.loader.loadResource("ingame", "resource/default.res.json");
        this.loader.createPackage("stage");
        this.addChild(this.loader.createObj("stage", "stage1").displayObject);

        this.loadMainResource();
    }

    private loadMainResource() {
        
    }

    private loadMainResourceComplete() {
        //this.onProgress(40);
    }

    public onProgress(current:number):void {
        //this.txtLoading.text = `Loading...${current}/${total}`;
    }
    
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}
