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

    /** 딤처리 팝업을 보여주는 메소드
     * @param {fairygui.GComponent} child 띄울 팝업 컴포넌트
     * @param {fairygui.GComponent} parent child 컴포넌트를 붙일 부모 컴포넌트, 비워둘 경우 SceneManager.ui.mainUI로 자동 설정
     */
    public static show(child: fairygui.GComponent, parent: fairygui.GComponent = null) {
        PopupManager.ME.show(child, parent);
    }
    private show(child: fairygui.GComponent, parent: fairygui.GComponent = null) {
        try {
            if (child) {
                PopupManager.ME.dim = new fairygui.GGraph();
                PopupManager.ME.dim.setSize(PangGlobal.gWidth, PangGlobal.gHeight);
                PopupManager.ME.dim.drawRect(0, 0x000000, 0.5, 0x000000, 0.5);
                if (parent) {
                    parent.addChild(PopupManager.ME.dim);
                    parent.addChild(child);
                } else {
                    SceneManager.ui.mainUI.addChild(PopupManager.ME.dim);
                    SceneManager.ui.mainUI.addChild(child);
                }
                child.visible = true;
            } else {
                console.log("child is null!! PopupManager.show");
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