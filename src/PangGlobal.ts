class PangGlobal {

    public static defaultResouceJson: string = "resource/default.res.json";
    public static grpNames: Array<string> = ["ingame", "ui"]; // 로드할 그룹 이름들 다 넣어요
    public static pkgNames: Array<string> = ["stage", "sprite", "UI"]; // 리소스 패키지 이름들 다 넣어요

    public static interpol: number = 16; // 캐릭터 보간
    public static gWidth: number = 750;
    public static gHeight: number = 1334;

    public constructor() {

    }

}