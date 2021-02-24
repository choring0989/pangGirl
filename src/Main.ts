class Main extends egret.DisplayObjectContainer {

    public loader:ResourceLoader;

    public constructor() {
        super();
        this.gameSceneStart();
    }

    private gameSceneStart() {
        this.loader = new ResourceLoader();
        this.loader.loadResource("preload", "resource/default.res.json");
        this.loader.loadResource("preload", "resource/default.res.json");
        this.loader.createPackage("stage1");
        this.loader.createObj("stage1", "Component1");
        //this.createLoader();
        
        //this.createGameScene();
        //const result = await RES.getResAsync("description_json")
        //await platform.login();
        //const userInfo = await platform.getUserInfo();
        //console.log(userInfo);

    }

    private createLoader() {
        this.addChild(this.loader.createObj("loader", "loader_component").displayObject);
        this.loadMainResource();
    }

    private loadMainResource() {
        
    }

    private loadMainResourceComplete() {
        this.onProgress(40);
    }

    public onProgress(current:number):void {
        //this.txtLoading.text = `Loading...${current}/${total}`;
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private textfield: egret.TextField;
    protected createGameScene(): void {
        let sky = this.createBitmapByName("bg_jpg");
        this.addChild(sky);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        let topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, 172);
        topMask.graphics.endFill();
        topMask.y = 33;
        this.addChild(topMask);

        let icon: egret.Bitmap = this.createBitmapByName("egret_icon_png");
        this.addChild(icon);
        icon.x = 26;
        icon.y = 33;

        let line = new egret.Shape();
        line.graphics.lineStyle(2, 0xffffff);
        line.graphics.moveTo(0, 0);
        line.graphics.lineTo(0, 117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        this.addChild(line);


        let colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = stageW - 172;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello Egret";
        colorLabel.size = 24;
        colorLabel.x = 172;
        colorLabel.y = 80;
        this.addChild(colorLabel);

        let textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.alpha = 0;
        textfield.width = stageW - 172;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.size = 24;
        textfield.textColor = 0xffffff;
        textfield.x = 172;
        textfield.y = 135;
        this.textfield = textfield;
    }

    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}
