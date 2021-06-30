class UI extends egret.DisplayObjectContainer {
    public mainUI: fgui.GComponent;
    public inven: Inventory;

    private btnInven: fgui.GButton;
    private btnPlus: fgui.GComponent;
    private btnMinus: fgui.GComponent;
    private txtSceneSize: fgui.GTextField;

    public constructor(u) {
        super();
        this.mainUI = u;

        this.addChild(this.mainUI.displayObject);
        this.createInven();
        this.addBtnEvent();
    }

    private addBtnEvent() {
        this.btnInven = this.mainUI.getChild("btn_inven").asButton;
        this.btnPlus = this.mainUI.getChild("btn_plus").asCom;
        this.btnMinus = this.mainUI.getChild("btn_minus").asCom;
        this.txtSceneSize = this.mainUI.getChild("txt_size").asTextField;

        if (this.inven) this.btnInven.addClickListener(this.inven.openInven, this.inven);
        this.btnPlus.addClickListener(this.zoomInScene, this);
        this.btnMinus.addClickListener(this.zoomOutScene, this);
    }

    private setInit() {
        this.txtSceneSize.text = SceneManager.stage.field.scaleX.toString();
    }

    private createInven() {
        this.inven = new Inventory();
    }

    private zoomInScene() {
        if (SceneManager.stage.fScale == 3) return;
        SceneManager.stage.fScale += 1;

        let event = new egret.Event("zoomScale");
        SceneManager.dispatcher.dispatchEvent(event);

        this.setInit();
    }

    private zoomOutScene() {
        if (SceneManager.stage.fScale == 1) return;
        SceneManager.stage.fScale -= 1;

        let event = new egret.Event("zoomScale");
        SceneManager.dispatcher.dispatchEvent(event);

        this.setInit();
    }
}

class PopupManager {
    private static instance: PopupManager;
    private dim: fairygui.GGraph;

    public static get ME() {
        if (!this.instance) this.instance = new PopupManager();
        return this.instance;
    }

    public static show(parent: fairygui.GComponent, child: fairygui.GComponent) {
        PopupManager.ME.show(parent, child);
    }
    private show(parent: fairygui.GComponent, child: fairygui.GComponent) {
        try {
            if (parent && child) {
                PopupManager.ME.dim = new fairygui.GGraph();
                PopupManager.ME.dim.setSize(PangGlobal.gWidth, PangGlobal.gHeight);
                PopupManager.ME.dim.drawRect(0, 0x000000, 0.5, 0x000000, 0.5);
                parent.addChild(PopupManager.ME.dim);
                parent.addChild(child);
                child.visible = true;
            }
        } catch (e) { }
    }

    public static hide(child: fairygui.GComponent, isDestroy: boolean = false) {
        PopupManager.ME.hide(child, isDestroy);
    }
    private hide(child: fairygui.GComponent, isDestroy: boolean = false) {
        try {
            if (PopupManager.ME.dim && PopupManager.ME.dim.parent) PopupManager.ME.dim.removeFromParent();
            if (child && child.parent) isDestroy ? child.removeFromParent() : child.visible = false;
        } catch (e) { }
    }
}