

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
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

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Character.ts":
/***/ (function(module, exports) {

var Character = /** @class */ (function (_super_1) {
    __extends(Character, _super_1);
    function Character(h) {
        var _this = _super_1.call(this) || this;
        _this.human = h;
        return _this;
    }
    Character.prototype.onStart = function () {
        this.initialize();
    };
    Character.prototype.initialize = function () {
        var _this = this;
        this.addChild(this.human.asCom.displayObject);
        this.human.x = 150;
        this.human.y = 150;
        window.addEventListener("keydown", function (e) {
            if (e.keyCode == 37 && _this.human.x > 0) {
                _this.human.getController("c1").selectedPage = "left";
                if (SceneManager.stage.blocked.has((_this.human.x - PangGlobal.interpol) + "," + _this.human.y))
                    return;
                _this.human.x -= PangGlobal.interpol;
            }
            if (e.keyCode == 38 && _this.human.y > 0) {
                _this.human.getController("c1").selectedPage = "back";
                if (SceneManager.stage.blocked.has(_this.human.x + "," + (_this.human.y - PangGlobal.interpol)))
                    return;
                _this.human.y -= PangGlobal.interpol;
            }
            if (e.keyCode == 39 && _this.human.x < (SceneManager.stage.field.width - PangGlobal.interpol * 4)) {
                _this.human.getController("c1").selectedPage = "right";
                if (SceneManager.stage.blocked.has((_this.human.x + PangGlobal.interpol) + "," + _this.human.y))
                    return;
                _this.human.x += PangGlobal.interpol;
            }
            if (e.keyCode == 40 && _this.human.y < (SceneManager.stage.field.height - PangGlobal.interpol * 4)) {
                _this.human.getController("c1").selectedPage = "front";
                if (SceneManager.stage.blocked.has(_this.human.x + "," + (_this.human.y + PangGlobal.interpol)))
                    return;
                _this.human.y += PangGlobal.interpol;
            }
        });
    };
    Character.prototype.isCollision = function (obj1, obj2) {
        var rect1 = obj1.getBounds();
        var rect2 = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.y = obj1.y;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        return rect1.intersects(rect2);
    };
    return Character;
}(egret.DisplayObjectContainer));
window["Character"] = Character;
__reflect(Character.prototype,"Character",[]); 


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/Character.ts");
__webpack_require__("./src/Main.ts");
__webpack_require__("./src/PangGlobal.ts");
__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/ResourceLoader.ts");
__webpack_require__("./src/SceneManager.ts");
__webpack_require__("./src/Stage.ts");
__webpack_require__("./src/UI.ts");
var Main = /** @class */ (function (_super_1) {
    __extends(Main, _super_1);
    function Main() {
        var _this = _super_1.call(this) || this;
        _this.gameSceneStart();
        return _this;
    }
    Main.prototype.gameSceneStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.scene = new SceneManager(this);
                this.scene.onStart();
                return [2 /*return*/];
            });
        });
    };
    return Main;
}(egret.DisplayObjectContainer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 


/***/ }),

/***/ "./src/PangGlobal.ts":
/***/ (function(module, exports) {

var PangGlobal = /** @class */ (function () {
    function PangGlobal() {
    }
    PangGlobal.defaultResouceJson = "resource/default.res.json";
    PangGlobal.grpNames = ["ingame", "ui"]; // 로드할 그룹 이름들 다 넣어요
    PangGlobal.pkgNames = ["stage", "sprite", "UI"]; // 리소스 패키지 이름들 다 넣어요
    PangGlobal.interpol = 8; // 캐릭터 보간
    PangGlobal.gWidth = 640;
    PangGlobal.gHeight = 480;
    return PangGlobal;
}());
window["PangGlobal"] = PangGlobal;
__reflect(PangGlobal.prototype,"PangGlobal",[]); 


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/ResourceLoader.ts":
/***/ (function(module, exports) {

var ResourceLoader = /** @class */ (function () {
    function ResourceLoader() {
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
        var obj = fairygui.UIPackage.createObject(pkgName, objName).asCom;
        fairygui.GRoot.inst.addChild(obj);
        console.log("Object Created!! " + objName);
        return obj;
    };
    return ResourceLoader;
}());
window["ResourceLoader"] = ResourceLoader;
__reflect(ResourceLoader.prototype,"ResourceLoader",[]); 


/***/ }),

/***/ "./src/SceneManager.ts":
/***/ (function(module, exports) {

var SceneManager = /** @class */ (function () {
    function SceneManager(main) {
        SceneManager.mainScene = main;
        this.createLoader();
    }
    SceneManager.prototype.onStart = function () {
        this.createInitScene();
    };
    SceneManager.prototype.createLoader = function () {
        if (!SceneManager.loader)
            SceneManager.loader = new ResourceLoader();
    };
    SceneManager.prototype.createInitScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SceneManager.loader.loadMainResource(PangGlobal.grpNames, PangGlobal.defaultResouceJson)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, SceneManager.loader.createMainPackage(PangGlobal.pkgNames)];
                    case 2:
                        _a.sent();
                        SceneManager.stage = new Stage(SceneManager.loader.createObj("stage", "stage1").asCom);
                        SceneManager.mainScene.addChild(SceneManager.stage);
                        SceneManager.stage.onStart();
                        SceneManager.ui = new UI(SceneManager.loader.createObj("UI", "lobby").asCom);
                        SceneManager.mainScene.addChild(SceneManager.ui);
                        SceneManager.player = new Character(SceneManager.loader.createObj("sprite", "hito").asCom);
                        SceneManager.stage.addChild(SceneManager.player);
                        SceneManager.player.onStart();
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneManager.prototype.onProgress = function (current) {
        //this.txtLoading.text = `Loading...${current}/${total}`;
    };
    return SceneManager;
}());
window["SceneManager"] = SceneManager;
__reflect(SceneManager.prototype,"SceneManager",[]); 


/***/ }),

/***/ "./src/Stage.ts":
/***/ (function(module, exports) {

var Stage = /** @class */ (function (_super_1) {
    __extends(Stage, _super_1);
    function Stage(f) {
        var _this = _super_1.call(this) || this;
        _this.blocked = new Set();
        _this.field = f;
        return _this;
    }
    Stage.prototype.onStart = function () {
        this.initialize();
    };
    Stage.prototype.initialize = function () {
        this.addChild(this.field.displayObject);
        this.setBlockObj();
    };
    Stage.prototype.setBlockObj = function () {
        var groups = this.field.getChild("blocked").asGroup;
        for (var i = 0; i < this.field.numChildren; i++) {
            if (this.field.getChildAt(i).group == groups) {
                for (var j = -(PangGlobal.interpol * 2); j < (PangGlobal.interpol * 2 + 1); j++) {
                    for (var k = -(PangGlobal.interpol * 3); k < (PangGlobal.interpol - 1); k++) {
                        this.blocked.add((this.field.getChildAt(i).x + j) + "," + (this.field.getChildAt(i).y + k));
                    }
                }
            }
        }
    };
    return Stage;
}(egret.Stage));
window["Stage"] = Stage;
__reflect(Stage.prototype,"Stage",[]); 


/***/ }),

/***/ "./src/UI.ts":
/***/ (function(module, exports) {

var UI = /** @class */ (function (_super_1) {
    __extends(UI, _super_1);
    function UI(u) {
        var _this = _super_1.call(this) || this;
        _this.mainUI = u;
        _this.addChild(_this.mainUI.displayObject);
        _this.addBtnEvent();
        return _this;
    }
    UI.prototype.addBtnEvent = function () {
        this.btnInven = this.mainUI.getChild("btn_inven").asButton;
        this.btnInven.addClickListener(this.openInven, this);
    };
    UI.prototype.createInven = function () {
        this.inven = SceneManager.loader.createObj("UI", "inven").asCom;
        this.inven.getChild("btn_close").asCom.addClickListener(this.closeInven, this);
    };
    UI.prototype.openInven = function () {
        if (!this.inven)
            this.createInven();
        PopupManager.show(this.mainUI, this.inven);
    };
    UI.prototype.closeInven = function () {
        PopupManager.hide(this.inven);
    };
    return UI;
}(egret.DisplayObjectContainer));
window["UI"] = UI;
__reflect(UI.prototype,"UI",[]); 
var PopupManager = /** @class */ (function () {
    function PopupManager() {
    }
    PopupManager.show = function (parent, child) {
        var pm = new PopupManager();
        pm.show(parent, child);
    };
    PopupManager.prototype.show = function (parent, child) {
        try {
            if (parent && child) {
                PopupManager.dim = new fairygui.GGraph();
                PopupManager.dim.setSize(PangGlobal.gWidth, PangGlobal.gHeight);
                PopupManager.dim.drawRect(0, 0x000000, 0.5, 0x000000, 0.5);
                parent.addChild(PopupManager.dim);
                parent.addChild(child);
                child.visible = true;
            }
        }
        catch (e) { }
    };
    PopupManager.hide = function (child, isDestroy) {
        if (isDestroy === void 0) { isDestroy = false; }
        var pm = new PopupManager();
        pm.hide(child, isDestroy);
    };
    PopupManager.prototype.hide = function (child, isDestroy) {
        if (isDestroy === void 0) { isDestroy = false; }
        try {
            if (PopupManager.dim && PopupManager.dim.parent)
                PopupManager.dim.removeFromParent();
            if (child && child.parent)
                isDestroy ? child.removeFromParent() : child.visible = false;
        }
        catch (e) { }
    };
    return PopupManager;
}());
window["PopupManager"] = PopupManager;
__reflect(PopupManager.prototype,"PopupManager",[]); 


/***/ })

/******/ });