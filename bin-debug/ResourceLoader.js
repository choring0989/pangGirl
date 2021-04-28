var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ResourceLoader = (function () {
    function ResourceLoader() {
        this.tiles = {};
        egret.MainContext.instance.stage.addChild(fairygui.GRoot.inst.displayObject);
    }
    ResourceLoader.prototype.loadMainResource = function (grpNames, path) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, grpNames_1, grp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, grpNames_1 = grpNames;
                        _a.label = 1;
                    case 1:
                        if (!(_i < grpNames_1.length)) return [3 /*break*/, 4];
                        grp = grpNames_1[_i];
                        return [4 /*yield*/, this.loadResource(grp, path)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ResourceLoader.prototype.createMainPackage = function (pkgNames) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, pkgNames_1, pkg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, pkgNames_1 = pkgNames;
                        _a.label = 1;
                    case 1:
                        if (!(_i < pkgNames_1.length)) return [3 /*break*/, 4];
                        pkg = pkgNames_1[_i];
                        return [4 /*yield*/, this.createPackage(pkg)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ResourceLoader.prototype.loadResource = function (key, path) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        //RES.addEventListener(egret.ProgressEvent.PROGRESS, this.onProgress, this);
                        return [4 /*yield*/, RES.loadConfig(path, "resource/")];
                    case 1:
                        //RES.addEventListener(egret.ProgressEvent.PROGRESS, this.onProgress, this);
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup(key, 0)];
                    case 2:
                        _a.sent();
                        console.log("Load Complete!! [" + path + "]" + key);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ResourceLoader.prototype.createPackage = function (pkgName) {
        fairygui.UIPackage.addPackage(pkgName);
        console.log("Package Created!! " + pkgName);
    };
    ResourceLoader.prototype.createObj = function (pkgName, objName) {
        if (pkgName == "TMX") {
            if (!this.tiles[objName])
                return null;
            console.log("TMX Created!! " + objName);
            return this.tiles[objName];
        }
        else {
            var obj = fairygui.UIPackage.createObject(pkgName, objName).asCom;
            fairygui.GRoot.inst.addChild(obj);
            console.log("Object Created!! " + objName);
            return obj;
        }
    };
    ResourceLoader.prototype.loadMapResource = function (mapName) {
        return __awaiter(this, void 0, void 0, function () {
            var tmxMap, urlLoader, path, that;
            return __generator(this, function (_a) {
                urlLoader = new egret.URLLoader();
                urlLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
                path = PangGlobal.urlTML + mapName + ".tmx";
                that = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        urlLoader.addEventListener(egret.Event.COMPLETE, function (event) {
                            var data = egret.XML.parse(event.target.data);
                            tmxMap = new tiled.TMXTilemap(PangGlobal.sWidth, PangGlobal.sHeight, data, path);
                            tmxMap.render();
                            tmxMap.addEventListener(tiled.TMXImageLoadEvent.ALL_IMAGE_COMPLETE, function () {
                                that.tiles[mapName] = tmxMap;
                                resolve(tmxMap);
                            }, this);
                        }, path);
                        urlLoader.load(new egret.URLRequest(path));
                    })];
            });
        });
    };
    return ResourceLoader;
}());
__reflect(ResourceLoader.prototype, "ResourceLoader");
//# sourceMappingURL=ResourceLoader.js.map