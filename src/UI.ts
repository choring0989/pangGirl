class UI extends egret.DisplayObjectContainer {
    public mainUI: fgui.GComponent;

    private btnInven: fgui.GButton;

    public constructor(u) {
        super();
        this.mainUI = u;
        this.addChild(this.mainUI.displayObject);
        this.addBtnEvent();
    }

    private addBtnEvent(){
        this.btnInven = this.mainUI.getChild("btn_inven").asButton;
        this.btnInven.addClickListener(this.openInven, this);
    }

    public openInven(){
        alert("!!");
    }
}