class Inventory {
    public clip: fairygui.GComponent;

    constructor() {
        this.createClip();
    }

    private createClip() {
        this.clip = SceneManager.loader.createObj("UI", "inven").asCom;
        this.clip.getChild("btn_close").asCom.addClickListener(this.closeInven, this);
    }

    public openInven() {
        if (!this.clip) {
            console.log("Unborn!! Inventory");
            return;
        }
        PopupManager.show(this.clip);
    }

    public closeInven() {
        PopupManager.hide(this.clip);
    }
}