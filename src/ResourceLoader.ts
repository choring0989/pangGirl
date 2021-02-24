class ResourceLoader implements RES.PromiseTaskReporter{
    
    public constructor() {

    }

    public async loadResource(key:string, path:string) {
        try {
            //RES.addEventListener(egret.ProgressEvent.PROGRESS, this.onProgress, this);
            await RES.loadConfig(path, "/resource");
            await RES.loadGroup(key, 0);
            //RES.removeEventListener(egret.ProgressEvent.PROGRESS, this.onProgress, this);
        }
        catch (e) {
            console.error(e);
        }
    }   

    public onProgress(current: number, total: number): void {
       console.log(`Loading...${current}/${total}`);
    }

    public createPackage(pkgName) {
        //if (fgui.GRoot.inst.displayObject.parent == null) fairygui.GRoot.inst.displayObject;
        fgui.UIPackage.addPackage(pkgName);
        console.log("Package Created!! @" + pkgName);
    }

    public createObj(pkgName, objName):fairygui.GObject {
        var obj = fairygui.UIPackage.createObject(pkgName, objName).asCom;
        fairygui.GRoot.inst.addChild(obj);
        console.log("Object Created!! @" + objName);
        return obj;
    }
}
