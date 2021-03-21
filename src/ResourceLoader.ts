class ResourceLoader {

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

    public createPackage(pkgName) {
        fairygui.UIPackage.addPackage(pkgName);
        console.log("Package Created!! " + pkgName);
    }

    public createObj(pkgName, objName): fairygui.GObject {
        let obj: fgui.GComponent = fairygui.UIPackage.createObject(pkgName, objName).asCom;
        fairygui.GRoot.inst.addChild(obj);
        console.log("Object Created!! " + objName);
        return obj;
    }

}
