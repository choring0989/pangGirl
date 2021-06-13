class TmxUtil {

    /** tiled Map에서 특정 오브젝트 찾아 그대로 반환
     * @param {tiled.TMXTilemap} tiledMap 랜더된 하나의 타일맵 파일 (랜더는 ResourceLoader loadMapResource()에서 수행)
     * @param {string} objLayerName 찾을 오브젝트를 포함하고 있는 레이어 이름
     * @param {string} objName 찾을 오브젝트 이름
     */
    public static getObjectByName(tiledMap: tiled.TMXTilemap, objLayerName: string, objName: string): egret.DisplayObject {
        if (!tiledMap) return undefined;

        let findObj;
        let layer = tiledMap.getChildByName(objLayerName).$children;

        layer.forEach(tmxObj => {
            if (tmxObj.name == objName) {
                findObj = tmxObj;
            }
        });

        return findObj;
    }
}