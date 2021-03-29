class UI extends egret.DisplayObjectContainer {
    public mainUI: fgui.GComponent;
    public inven: fgui.GComponent;

    private btnInven: fgui.GButton;

    public constructor(u) {
        super();
        this.mainUI = u;
        this.addChild(this.mainUI.displayObject);
        this.addBtnEvent();
    }

    private addBtnEvent() {
        this.btnInven = this.mainUI.getChild("btn_inven").asButton;
        this.btnInven.addClickListener(this.openInven, this);
    }

    private createInven() {
        this.inven = SceneManager.loader.createObj("UI", "inven").asCom;
        this.inven.getChild("btn_close").asCom.addClickListener(this.closeInven, this);
    }

    public openInven() {
        if (!this.inven) this.createInven();
        PopupManager.show(this.mainUI, this.inven);
    }

    public closeInven() {
        PopupManager.hide(this.inven);
    }
}

class PopupManager {
    public static dim: fairygui.GGraph;

    public static show(parent: fairygui.GComponent, child: fairygui.GComponent) {
        let pm = new PopupManager();
        pm.show(parent, child);
    }
    public show(parent: fairygui.GComponent, child: fairygui.GComponent) {
        try {
            if (parent && child) {
                PopupManager.dim = new fairygui.GGraph();
                PopupManager.dim.setSize(PangGlobal.gWidth, PangGlobal.gHeight);
                PopupManager.dim.drawRect(0, 0x000000, 0.5, 0x000000, 0.5);
                parent.addChild(PopupManager.dim);
                parent.addChild(child);
                child.visible = true;
            }
        } catch (e) { }
    }

    public static hide(child: fairygui.GComponent, isDestroy: boolean = false) {
        let pm = new PopupManager();
        pm.hide(child, isDestroy);
    }
    public hide(child: fairygui.GComponent, isDestroy: boolean = false) {
        try {
            if (PopupManager.dim && PopupManager.dim.parent) PopupManager.dim.removeFromParent();
            if (child && child.parent) isDestroy ? child.removeFromParent() : child.visible = false;
        } catch (e) { }
    }
}