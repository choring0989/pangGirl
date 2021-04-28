class ResourceLoader {
    public tiles = {};
    
    public constructor() {
        egret.MainContext.instance.stage.addChild(fairygui.GRoot.inst.displayObject);
    }

    public async loadMainResource(grpNames: Array<string>, path: string) {
        for (let grp of grpNames) await this.loadResource(grp, path);
    }

    public async createMainPackage(pkgNames: Array<string>) {
        for (let pkg of pkgNames) await this.createPackage(pkg);
    }

    public async loadResource(key: string, path: string) {
        try {
            //RES.addEventListener(egret.ProgressEvent.PROGRESS, this.onProgress, this);
            await RES.loadConfig(path, "resource/");
            await RES.loadGroup(key, 0);
            console.log("Load Complete!! [" + path + "]" + key);
            //RES.removeEventListener(egret.ProgressEvent.PROGRESS, this.onProgress, this);
        }
        catch (e) {
            console.error(e);
        }
    }

    public createPackage(pkgName: string) {
        fairygui.UIPackage.addPackage(pkgName);
        console.log("Package Created!! " + pkgName);
    }

    public createObj(pkgName: string, objName: string): fairygui.GObject {
        if (pkgName == "TMX") {
            if (!this.tiles[objName]) return null;
            console.log("TMX Created!! " + objName);
            return this.tiles[objName];
        } else {
            let obj: fgui.GComponent = fairygui.UIPackage.createObject(pkgName, objName).asCom;
            fairygui.GRoot.inst.addChild(obj);
            console.log("Object Created!! " + objName);
            return obj;
        }
    }

    public async loadMapResource(mapName: string) {
        let tmxMap: tiled.TMXTilemap;
        let urlLoader: egret.URLLoader = new egret.URLLoader();

        urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        let path = PangGlobal.urlTML + mapName + ".tmx";

        let that = this;
        return new Promise((resolve, reject) => {
            urlLoader.addEventListener(egret.Event.COMPLETE, function (event: egret.Event): void {
                let data: any = egret.XML.parse(event.target.data);
                tmxMap = new tiled.TMXTilemap(PangGlobal.sWidth, PangGlobal.sHeight, data, path);
                tmxMap.render();
                tmxMap.addEventListener(tiled.TMXImageLoadEvent.ALL_IMAGE_COMPLETE,
                    () => {
                        that.tiles[mapName] = tmxMap;
                        resolve(tmxMap);
                    }, this);
            }, path);
            urlLoader.load(new egret.URLRequest(path));
        })
    }

}
