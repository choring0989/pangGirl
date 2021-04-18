class PangGlobal {

    public static defaultResouceJson: string = "resource/default.res.json";
    public static urlTML: string = "resource/tmx/";
    public static grpNames: Array<string> = ["ingame", "ui"]; // 로드할 그룹 이름들 다 넣어요
    public static pkgNames: Array<string> = ["stage", "sprite", "UI"]; // 리소스 패키지 이름들 다 넣어요

    // 게임 UI 설정값
    public static interpol: number = 16; // 캐릭터 보간
    public static gWidth: number = 750;
    public static gHeight: number = 1334;

    // 스테이지 포지션 관련 값
    public static sPositionX: number = 0;
    public static sPositionY: number = 92;
    public static sWidth: number = 1536;
    public static sHeight: number = 1536;

    public constructor() {

    }

}