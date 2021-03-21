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
        this.show(this.mainUI, this.inven);
    }

    public closeInven(){
        this.hide(this.inven);
    }

    /** 나중에 따로 빼서 클래스 만들기 */
    private dim: fairygui.GGraph;

    public show(parent: fairygui.GComponent, child: fairygui.GComponent) {
        try {
            if (parent && child) {
                this.dim = new fairygui.GGraph();
                this.dim.setSize(PangGlobal.gWidth, PangGlobal.gHeight);
                this.dim.drawRect(0, 0x000000, 0.5, 0x000000, 0.5);
                parent.addChild(this.dim);
                parent.addChild(child);
                child.visible = true;
            }
        } catch (e) { }
    }

    public hide(child: fairygui.GComponent, isDestroy: boolean = false) {
        try {
            if (this.dim && this.dim.parent) this.dim.removeFromParent();
            if (child && child.parent) isDestroy ? child.removeFromParent() : child.visible = false;
        } catch (e) { }
    }
}