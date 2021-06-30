class Inventory {
    public clip: fairygui.GComponent;

    constructor() {
        this.clip = SceneManager.loader.createObj("UI", "inven").asCom;
        this.setClip();
    }

    private setClip() {
        if (!this.clip) {
            console.log("Unborn! Inventory");
            return;
        }
        this.clip.getChild("btn_close").asCom.addClickListener(this.closeInven, this);
    }

    public openInven() {
        if (!this.clip) return;
        PopupManager.show(SceneManager.ui.mainUI, this.clip);
    }

    public closeInven() {
        PopupManager.hide(this.clip);
    }
}