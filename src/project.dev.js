require = function() {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function(r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }
      return n[i].exports;
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
}()({
  GameCode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e792cXgBM5LCahSDi2+a80f", "GameCode");
    var game;
    (function(game) {
      var common;
      (function(common) {
        var Command = function() {
          function Command() {}
          Command.INIT_MODULE = "init_module";
          Command.CHANGE_SCENE = "change_scene";
          Command.ENTER_GAME_LOADING = "enter_game_loading";
          Command.OPEN_VIEW = "open_view";
          Command.CLOSE_VIEW = "close_view";
          Command.CLOSE_SCENE = "close_scene";
          Command.REGISTER_NET = "register_net";
          Command.AI_CONTROLLER = "ai_controller";
          return Command;
        }();
        common.Command = Command;
      })(common = game.common || (game.common = {}));
    })(game || (game = {}));
    (function(game) {
      var common;
      (function(common) {
        var OpenViewNB = function() {
          function OpenViewNB(name, data) {
            void 0 === data && (data = null);
            this._name = name;
            this._data = data;
          }
          Object.defineProperty(OpenViewNB.prototype, "name", {
            get: function() {
              return this._name;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(OpenViewNB.prototype, "data", {
            get: function() {
              return this._data;
            },
            enumerable: true,
            configurable: true
          });
          return OpenViewNB;
        }();
        common.OpenViewNB = OpenViewNB;
      })(common = game.common || (game.common = {}));
    })(game || (game = {}));
    (function(game) {
      var common;
      (function(common) {
        var CloseViewNB = function() {
          function CloseViewNB(name) {
            this._name = name;
          }
          Object.defineProperty(CloseViewNB.prototype, "name", {
            get: function() {
              return this._name;
            },
            enumerable: true,
            configurable: true
          });
          return CloseViewNB;
        }();
        common.CloseViewNB = CloseViewNB;
      })(common = game.common || (game.common = {}));
    })(game || (game = {}));
    (function(game) {
      var common;
      (function(common) {
        var InitModuleNB = function() {
          function InitModuleNB(rootView, progress) {
            this._rootView = rootView;
            this._progress = progress;
          }
          Object.defineProperty(InitModuleNB.prototype, "rootView", {
            get: function() {
              return this._rootView;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(InitModuleNB.prototype, "progress", {
            get: function() {
              return this._progress;
            },
            enumerable: true,
            configurable: true
          });
          return InitModuleNB;
        }();
        common.InitModuleNB = InitModuleNB;
      })(common = game.common || (game.common = {}));
    })(game || (game = {}));
    (function(game) {
      var common;
      (function(common) {
        var ChangeSceneNB = function() {
          function ChangeSceneNB(sceneName, data) {
            void 0 === data && (data = null);
            this._sceneName = sceneName;
            this._data = data;
          }
          Object.defineProperty(ChangeSceneNB.prototype, "sceneName", {
            get: function() {
              return this._sceneName;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(ChangeSceneNB.prototype, "data", {
            get: function() {
              return this._data;
            },
            enumerable: true,
            configurable: true
          });
          return ChangeSceneNB;
        }();
        common.ChangeSceneNB = ChangeSceneNB;
      })(common = game.common || (game.common = {}));
    })(game || (game = {}));
    (function(game) {
      var common;
      (function(common) {
        var CloseSceneNB = function() {
          function CloseSceneNB(sceneName, data) {
            void 0 === data && (data = null);
            this._sceneName = sceneName;
            this._data = data;
          }
          Object.defineProperty(CloseSceneNB.prototype, "sceneName", {
            get: function() {
              return this._sceneName;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(CloseSceneNB.prototype, "data", {
            get: function() {
              return this._data;
            },
            enumerable: true,
            configurable: true
          });
          return CloseSceneNB;
        }();
        common.CloseSceneNB = CloseSceneNB;
      })(common = game.common || (game.common = {}));
    })(game || (game = {}));
    (function(game) {
      var ui;
      (function(ui) {
        var SettingProxy = function() {
          function SettingProxy() {}
          return SettingProxy;
        }();
        ui.SettingProxy = SettingProxy;
      })(ui = game.ui || (game.ui = {}));
    })(game || (game = {}));
    (function(game) {
      var ui;
      (function(ui) {
        var Panel = function(_super) {
          __extends(Panel, _super);
          function Panel(scaleMode) {
            void 0 === scaleMode && (scaleMode = 1);
            var _this = _super.call(this) || this;
            _this._scaleMode = scaleMode;
            return _this;
          }
          Object.defineProperty(Panel.prototype, "scaleMode", {
            get: function() {
              return this._scaleMode;
            },
            set: function(val) {
              this._scaleMode = ~~val;
            },
            enumerable: true,
            configurable: true
          });
          Panel.prototype.onLoad = function() {
            var size = lib.data.system.screen.value;
            var width = this.node.width || ui.SettingProxy.designWidth;
            var height = this.node.height || ui.SettingProxy.designHeight;
            var scaleMode = this.scaleMode;
            if (width && height && scaleMode) {
              var scaleX = size.width / width;
              var scaleY = size.height / height;
              if (1 == scaleMode) {
                this.node.scaleX = scaleX < scaleY ? scaleX : scaleY;
                this.node.scaleY = scaleX < scaleY ? scaleX : scaleY;
              } else if (2 == scaleMode) {
                this.node.scaleX = scaleX > scaleY ? scaleX : scaleY;
                this.node.scaleY = scaleX > scaleY ? scaleX : scaleY;
              } else if (3 == scaleMode) {
                this.node.scaleX = scaleX;
                this.node.scaleY = scaleX;
              } else if (4 == scaleMode) {
                this.node.scaleX = scaleY;
                this.node.scaleY = scaleY;
              }
            }
          };
          return Panel;
        }(cc.Component);
        ui.Panel = Panel;
      })(ui = game.ui || (game.ui = {}));
    })(game || (game = {}));
    (function(game) {
      var layer;
      (function(layer) {
        var LayerModule = function(_super) {
          __extends(LayerModule, _super);
          function LayerModule() {
            return _super.call(this, LayerModule.NAME) || this;
          }
          LayerModule.prototype.listNotificationInterests = function() {
            return [ game.common.Command.INIT_MODULE ];
          };
          LayerModule.prototype.handleNotification = function(note) {
            return __awaiter(this, void 0, void 0, function() {
              var data;
              return __generator(this, function(_a) {
                switch (note.name) {
                 case game.common.Command.INIT_MODULE:
                  data = note.body;
                  this.rootNode = new cc.Node();
                  data.rootView.addChild(this.rootNode);
                  this.rootNode.addChild(new layer.GameLayer());
                  this.rootNode.addChild(new layer.MainUILayer());
                  this.rootNode.addChild(new layer.PopLayer());
                  this.rootNode.addChild(new layer.TopLayer());
                }
                return [ 2 ];
              });
            });
          };
          LayerModule.NAME = "layer";
          return LayerModule;
        }(mvc.Module);
        layer.LayerModule = LayerModule;
      })(layer = game.layer || (game.layer = {}));
    })(game || (game = {}));
    (function(game) {
      var layer;
      (function(layer) {
        var GameLayer = function(_super) {
          __extends(GameLayer, _super);
          function GameLayer() {
            var _this = _super.call(this) || this;
            GameLayer.instance = _this;
            return _this;
          }
          GameLayer.show = function(node) {
            node.parent != GameLayer.instance && GameLayer.instance.addChild(node);
          };
          return GameLayer;
        }(cc.Node);
        layer.GameLayer = GameLayer;
      })(layer = game.layer || (game.layer = {}));
    })(game || (game = {}));
    (function(game) {
      var layer;
      (function(layer) {
        var MainUILayer = function(_super) {
          __extends(MainUILayer, _super);
          function MainUILayer() {
            var _this = _super.call(this) || this;
            MainUILayer.instance = _this;
            return _this;
          }
          MainUILayer.show = function(node) {
            node.parent != MainUILayer.instance && MainUILayer.instance.addChild(node);
          };
          return MainUILayer;
        }(cc.Node);
        layer.MainUILayer = MainUILayer;
      })(layer = game.layer || (game.layer = {}));
    })(game || (game = {}));
    (function(game) {
      var layer;
      (function(layer) {
        var PopLayer = function(_super) {
          __extends(PopLayer, _super);
          function PopLayer() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return PopLayer;
        }(cc.Node);
        layer.PopLayer = PopLayer;
      })(layer = game.layer || (game.layer = {}));
    })(game || (game = {}));
    (function(game) {
      var layer;
      (function(layer) {
        var TopLayer = function(_super) {
          __extends(TopLayer, _super);
          function TopLayer() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return TopLayer;
        }(cc.Node);
        layer.TopLayer = TopLayer;
      })(layer = game.layer || (game.layer = {}));
    })(game || (game = {}));
    (function(game) {
      game.data = {};
      game.net = null;
      var startup;
      (function(startup) {
        startup.ModuleName = "startup";
        startup.ModuleNone = "";
        var AppFacade = function(_super) {
          __extends(AppFacade, _super);
          function AppFacade() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          AppFacade.prototype.initializeController = function() {
            _super.prototype.initializeController.call(this);
            this.registerCommand(startup.Command.IN.START_UP, startup.StartupCommand);
          };
          AppFacade.prototype.start = function(rootView) {
            this.sendNotification(startup.Command.IN.START_UP, new game.common.InitModuleNB(rootView, lib.DataManager.createData("ProgressData")));
          };
          AppFacade.start = function(rootView) {
            if (!AppFacade.instance) {
              AppFacade.instance = new AppFacade(AppFacade.NAME);
              AppFacade.instance.start(rootView);
            }
          };
          AppFacade.NAME = "gameApp";
          return AppFacade;
        }(mvc.Facade);
        startup.AppFacade = AppFacade;
      })(startup = game.startup || (game.startup = {}));
    })(game || (game = {}));
    (function(game) {
      var startup;
      (function(startup) {
        var Command = function() {
          function Command() {}
          Command.IN = {
            START_UP: "startup.start_up"
          };
          Command.OUT = {};
          Command.INTERFACE = {
            EXIT: "exit"
          };
          return Command;
        }();
        startup.Command = Command;
      })(startup = game.startup || (game.startup = {}));
    })(game || (game = {}));
    (function(game) {
      var startup;
      (function(startup) {
        var StartupCommand = function(_super) {
          __extends(StartupCommand, _super);
          function StartupCommand() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          StartupCommand.prototype.initializeMacroCommand = function() {
            this.addSubCommand(startup.InitModuleCommand);
          };
          return StartupCommand;
        }(mvc.MacroCommand);
        startup.StartupCommand = StartupCommand;
      })(startup = game.startup || (game.startup = {}));
    })(game || (game = {}));
    (function(game) {
      var startup;
      (function(startup) {
        var InitModuleCommand = function(_super) {
          __extends(InitModuleCommand, _super);
          function InitModuleCommand() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          InitModuleCommand.prototype.execute = function(note) {
            return __awaiter(this, void 0, void 0, function() {
              var progress, max;
              return __generator(this, function(_a) {
                switch (_a.label) {
                 case 0:
                  this.facade.registerModule(new game.layer.LayerModule());
                  this.facade.registerModule(new game.circleStart.CircleStartModule());
                  this.facade.registerModule(new game.circleGame.CircleGameModule());
                  progress = note.body.progress;
                  progress.current = progress.max = 1;
                  this.sendNotification(game.common.Command.INIT_MODULE, note.body);
                  max = 1;
                  if (!(progress.percent != max)) return [ 3, 2 ];
                  return [ 4, progress.percentValue.valueEqual(max) ];

                 case 1:
                  _a.sent();
                  _a.label = 2;

                 case 2:
                  this.sendNotification(game.common.Command.CHANGE_SCENE, new game.common.ChangeSceneNB("circleStart"));
                  return [ 2 ];
                }
              });
            });
          };
          return InitModuleCommand;
        }(mvc.SimpleCommand);
        startup.InitModuleCommand = InitModuleCommand;
      })(startup = game.startup || (game.startup = {}));
    })(game || (game = {}));
    (function(game) {
      var startup;
      (function(startup) {
        var AppFacade = game.startup.AppFacade;
        var RestartCommand = function(_super) {
          __extends(RestartCommand, _super);
          function RestartCommand() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          RestartCommand.prototype.initializeMacroCommand = function() {
            this.addSubCommand(startup.ClearMVCCommand);
            this.addSubCommand(startup.ClearDataCommand);
            this.addSubCommand(startup.ClearLibCommand);
            AppFacade.start();
          };
          return RestartCommand;
        }(mvc.MacroCommand);
        startup.RestartCommand = RestartCommand;
      })(startup = game.startup || (game.startup = {}));
    })(game || (game = {}));
    (function(game) {
      var startup;
      (function(startup) {
        var ClearMVCCommand = function(_super) {
          __extends(ClearMVCCommand, _super);
          function ClearMVCCommand() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          ClearMVCCommand.prototype.execute = function(note) {
            mvc.Facade.remove(startup.AppFacade.NAME);
            mvc.Model.remove(startup.AppFacade.NAME);
            mvc.View.remove(startup.AppFacade.NAME);
            mvc.Controller.remove(startup.AppFacade.NAME);
          };
          return ClearMVCCommand;
        }(mvc.SimpleCommand);
        startup.ClearMVCCommand = ClearMVCCommand;
      })(startup = game.startup || (game.startup = {}));
    })(game || (game = {}));
    (function(game) {
      var startup;
      (function(startup) {
        var ClearDataCommand = function(_super) {
          __extends(ClearDataCommand, _super);
          function ClearDataCommand() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          ClearDataCommand.prototype.execute = function(note) {
            game.data = null;
          };
          return ClearDataCommand;
        }(mvc.SimpleCommand);
        startup.ClearDataCommand = ClearDataCommand;
      })(startup = game.startup || (game.startup = {}));
    })(game || (game = {}));
    (function(game) {
      var startup;
      (function(startup) {
        var ClearLibCommand = function(_super) {
          __extends(ClearLibCommand, _super);
          function ClearLibCommand() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          ClearLibCommand.prototype.execute = function(note) {};
          return ClearLibCommand;
        }(mvc.SimpleCommand);
        startup.ClearLibCommand = ClearLibCommand;
      })(startup = game.startup || (game.startup = {}));
    })(game || (game = {}));
    (function(game) {
      var loading;
      (function(loading) {
        var LoadingModule = function(_super) {
          __extends(LoadingModule, _super);
          function LoadingModule() {
            return _super.call(this, LoadingModule.NAME) || this;
          }
          LoadingModule.prototype.listNotificationInterests = function() {
            return [ game.common.Command.INIT_MODULE ];
          };
          LoadingModule.prototype.handleNotification = function(note) {
            switch (note.name) {
             case game.common.Command.INIT_MODULE:
              this.facade.registerMediator(new loading.MainMediator());
            }
          };
          LoadingModule.NAME = "loading";
          return LoadingModule;
        }(mvc.Module);
        loading.LoadingModule = LoadingModule;
      })(loading = game.loading || (game.loading = {}));
    })(game || (game = {}));
    (function(game) {
      var loading;
      (function(loading) {
        var MainMediator = function(_super) {
          __extends(MainMediator, _super);
          function MainMediator() {
            return _super.call(this, MainMediator.NAME, null) || this;
          }
          MainMediator.prototype.initUI = function() {
            this.viewComponent = new loading.LoadingView();
          };
          MainMediator.prototype.asyncLoad = function(resolve) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                _super.prototype.asyncLoad.call(this, resolve);
                this.initUI();
                this.loadComplete();
                return [ 2 ];
              });
            });
          };
          MainMediator.prototype.listNotificationInterests = function() {
            return [ game.common.Command.OPEN_VIEW, game.common.Command.CLOSE_VIEW ];
          };
          MainMediator.prototype.handleNotification = function(note) {
            return __awaiter(this, void 0, void 0, function() {
              var _a;
              return __generator(this, function(_b) {
                switch (_b.label) {
                 case 0:
                  _a = note.name;
                  switch (_a) {
                   case game.common.Command.OPEN_VIEW:
                    return [ 3, 1 ];

                   case game.common.Command.CLOSE_VIEW:
                    return [ 3, 4 ];
                  }
                  return [ 3, 5 ];

                 case 1:
                  if (note.body.name != MainMediator.NAME) return [ 2 ];
                  this.data = note.body.data;
                  if (!!this.viewComponent) return [ 3, 3 ];
                  return [ 4, this.load() ];

                 case 2:
                  _b.sent();
                  _b.label = 3;

                 case 3:
                  if (this.viewComponent) {
                    game.layer.MainUILayer.show(this.viewComponent);
                    this.viewComponent.text = note.body.data.text;
                  }
                  return [ 3, 5 ];

                 case 4:
                  if (note.body.name != MainMediator.NAME) return [ 2 ];
                  if (this.viewComponent) {
                    this.viewComponent.destroy();
                    this.viewComponent = null;
                  }
                  cc.audioEngine.stop(this.bgm);
                  return [ 3, 5 ];

                 case 5:
                  return [ 2 ];
                }
              });
            });
          };
          MainMediator.NAME = "loading.MainMediator";
          return MainMediator;
        }(mvc.Mediator);
        loading.MainMediator = MainMediator;
      })(loading = game.loading || (game.loading = {}));
    })(game || (game = {}));
    (function(game) {
      var loading;
      (function(loading) {
        var LoadingView = function(_super) {
          __extends(LoadingView, _super);
          function LoadingView() {
            var _this = _super.call(this) || this;
            _this.addComponent(cc.Label);
            _this.label = _this.getComponent(cc.Label);
            _this.label.fontSize = 20;
            _this.color = new cc.Color(255, 255, 255);
            return _this;
          }
          Object.defineProperty(LoadingView.prototype, "text", {
            set: function(val) {
              this.label.string = val;
            },
            enumerable: true,
            configurable: true
          });
          return LoadingView;
        }(cc.Node);
        loading.LoadingView = LoadingView;
      })(loading = game.loading || (game.loading = {}));
    })(game || (game = {}));
    (function(game) {
      var circleStart;
      (function(circleStart) {
        var Resource = function() {
          function Resource() {
            this.loadList = [ {
              name: "ui",
              data: game.prefab.ui1,
              url: "resources/circleStart/circleStart.prefab"
            } ];
          }
          Resource.configLoadComplete = function() {
            ConfigProxy.init();
            var len = ConfigProxy.levelCount;
            for (var i = 0; i < len; i++) {
              var cfg = ConfigProxy.getLevelAt(i);
              Resource.instance.loadList.push({
                name: "levelBackground" + cfg.level,
                url: "resources/baMaoStart/res/textures/" + cfg.background
              });
              Resource.instance.loadList.push({
                name: "levelBgm" + cfg.level,
                url: "resources/baMaoStart/res/bgm/" + cfg.music
              });
            }
          };
          Resource.loadResources = function() {
            return __awaiter(this, void 0, void 0, function() {
              var list;
              return __generator(this, function(_a) {
                Resource.instance = new Resource();
                list = Resource.instance.loadList;
                return [ 2, new Promise(function(resolve) {
                  var index = 0;
                  function load() {
                    return __awaiter(this, void 0, void 0, function() {
                      var res, loader, result;
                      return __generator(this, function(_a) {
                        switch (_a.label) {
                         case 0:
                          if (index >= list.length) {
                            circleStart.mainMediator.sendNotification(game.common.Command.CLOSE_VIEW, new game.common.CloseViewNB("loading.MainMediator"));
                            resolve();
                            return [ 2 ];
                          }
                          res = list[index];
                          circleStart.mainMediator.sendNotification(game.common.Command.OPEN_VIEW, new game.common.OpenViewNB("loading.MainMediator", {
                            text: "Loading " + ~~(index / list.length * 100) + "%  " + res.name
                          }));
                          if (!res.data) return [ 3, 1 ];
                          index++;
                          load();
                          return [ 3, 4 ];

                         case 1:
                          if (!("URLLoader" == res.type)) return [ 3, 3 ];
                          loader = new lib.URLLoader(res.url);
                          return [ 4, loader.load() ];

                         case 2:
                          result = _a.sent();
                          res.data = result.data;
                          index++;
                          load();
                          return [ 3, 4 ];

                         case 3:
                          cc.loader.load(cc.url.raw(res.url), function(e, data) {
                            res.data = data;
                            index++;
                            res.execute && res.execute();
                            load();
                          });
                          _a.label = 4;

                         case 4:
                          return [ 2 ];
                        }
                      });
                    });
                  }
                  load();
                }.bind(this)) ];
              });
            });
          };
          Resource.getResource = function(name) {
            for (var i = 0; i < Resource.instance.loadList.length; i++) if (Resource.instance.loadList[i].name == name) return Resource.instance.loadList[i].data;
            return null;
          };
          return Resource;
        }();
        circleStart.Resource = Resource;
      })(circleStart = game.circleStart || (game.circleStart = {}));
    })(game || (game = {}));
    (function(game) {
      var circleStart;
      (function(circleStart) {
        var CircleStartModule = function(_super) {
          __extends(CircleStartModule, _super);
          function CircleStartModule() {
            return _super.call(this, CircleStartModule.NAME) || this;
          }
          CircleStartModule.prototype.listNotificationInterests = function() {
            return [ game.common.Command.INIT_MODULE, game.common.Command.CHANGE_SCENE, game.common.Command.REGISTER_NET ];
          };
          CircleStartModule.prototype.handleNotification = function(note) {
            switch (note.name) {
             case game.common.Command.INIT_MODULE:
              this.facade.registerMediator(new circleStart.MainMediator());
              break;

             case game.common.Command.CHANGE_SCENE:
              note.body.sceneName == CircleStartModule.NAME && this.sendNotification(game.common.Command.OPEN_VIEW, new game.common.OpenViewNB(circleStart.MainMediator.NAME));
              break;

             case game.common.Command.REGISTER_NET:
            }
          };
          CircleStartModule.NAME = "circleStart";
          return CircleStartModule;
        }(mvc.Module);
        circleStart.CircleStartModule = CircleStartModule;
      })(circleStart = game.circleStart || (game.circleStart = {}));
    })(game || (game = {}));
    (function(game) {
      var circleStart;
      (function(circleStart) {
        var MainMediator = function(_super) {
          __extends(MainMediator, _super);
          function MainMediator() {
            var _this = _super.call(this, MainMediator.NAME, null) || this;
            circleStart.mainMediator = _this;
            return _this;
          }
          MainMediator.prototype.initUI = function() {
            this.viewComponent = new cc.Node();
            this.viewComponent.addComponent(circleStart.MainComponent);
          };
          MainMediator.prototype.asyncLoad = function(resolve) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                switch (_a.label) {
                 case 0:
                  _super.prototype.asyncLoad.call(this, resolve);
                  return [ 4, circleStart.Resource.loadResources() ];

                 case 1:
                  _a.sent();
                  this.initUI();
                  this.loadComplete();
                  return [ 2 ];
                }
              });
            });
          };
          MainMediator.prototype.listNotificationInterests = function() {
            return [ game.common.Command.OPEN_VIEW, game.common.Command.CLOSE_VIEW ];
          };
          MainMediator.prototype.handleNotification = function(note) {
            return __awaiter(this, void 0, void 0, function() {
              var _a;
              return __generator(this, function(_b) {
                switch (_b.label) {
                 case 0:
                  _a = note.name;
                  switch (_a) {
                   case game.common.Command.OPEN_VIEW:
                    return [ 3, 1 ];

                   case game.common.Command.CLOSE_VIEW:
                    return [ 3, 4 ];
                  }
                  return [ 3, 5 ];

                 case 1:
                  if (note.body.name != MainMediator.NAME) return [ 2 ];
                  if (!!this.viewComponent) return [ 3, 3 ];
                  return [ 4, this.load() ];

                 case 2:
                  _b.sent();
                  _b.label = 3;

                 case 3:
                  if (this.viewComponent) {
                    game.layer.MainUILayer.show(this.viewComponent);
                    lib.Tween.to(this.viewComponent, 1, {
                      opacity: 255
                    }, null, {
                      opacity: 0
                    });
                  }
                  return [ 3, 5 ];

                 case 4:
                  if (note.body.name != MainMediator.NAME) return [ 2 ];
                  if (this.viewComponent && this.viewComponent.parent) {
                    this.viewComponent.parent.removeChild(this.viewComponent);
                    this.viewComponent.destroy();
                    this.viewComponent = null;
                  }
                  return [ 3, 5 ];

                 case 5:
                  return [ 2 ];
                }
              });
            });
          };
          MainMediator.NAME = "circleStart.MainMediator";
          return MainMediator;
        }(mvc.Mediator);
        circleStart.MainMediator = MainMediator;
      })(circleStart = game.circleStart || (game.circleStart = {}));
    })(game || (game = {}));
    (function(game) {
      var circleStart;
      (function(circleStart) {
        var MainComponent = function(_super) {
          __extends(MainComponent, _super);
          function MainComponent() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            _this.levelIndex = 0;
            return _this;
          }
          MainComponent.prototype.start = function() {
            var ui = cc.instantiate(circleStart.Resource.getResource("ui"));
            this.node.addChild(ui);
            ui.getChildByName("startBtn").on(cc.Node.EventType.TOUCH_END, this.onClickStart, this);
          };
          MainComponent.prototype.onClickStart = function() {
            this.destroy();
            circleStart.mainMediator.sendNotification(game.common.Command.CLOSE_VIEW, new game.common.CloseViewNB(circleStart.MainMediator.NAME));
            circleStart.mainMediator.sendNotification(game.common.Command.CHANGE_SCENE, new game.common.ChangeSceneNB("circleGame"));
          };
          return MainComponent;
        }(cc.Component);
        circleStart.MainComponent = MainComponent;
      })(circleStart = game.circleStart || (game.circleStart = {}));
    })(game || (game = {}));
    (function(game) {
      var circleGame;
      (function(circleGame) {
        var Resource = function() {
          function Resource() {
            this.loadList = [ {
              name: "ui",
              data: game.prefab.ui2
            }, {
              name: "center",
              url: "resources/circleGame/res/image/center.png"
            }, {
              name: "line0",
              url: "resources/circleGame/res/image/line0.png"
            }, {
              name: "line1",
              url: "resources/circleGame/res/image/line1.png"
            }, {
              name: "line2",
              url: "resources/circleGame/res/image/line2.png"
            }, {
              name: "line3",
              url: "resources/circleGame/res/image/line3.png"
            }, {
              name: "line4",
              url: "resources/circleGame/res/image/line4.png"
            }, {
              name: "line5",
              url: "resources/circleGame/res/image/line5.png"
            }, {
              name: "pao0",
              url: "resources/circleGame/res/image/pao0.png"
            }, {
              name: "pao1",
              url: "resources/circleGame/res/image/pao1.png"
            }, {
              name: "pao2",
              url: "resources/circleGame/res/image/pao2.png"
            }, {
              name: "pao3",
              url: "resources/circleGame/res/image/pao3.png"
            }, {
              name: "pao4",
              url: "resources/circleGame/res/image/pao4.png"
            }, {
              name: "pao5",
              url: "resources/circleGame/res/image/pao5.png"
            }, {
              name: "color0_0",
              url: "resources/circleGame/res/image/color0_0.png"
            }, {
              name: "color0_1",
              url: "resources/circleGame/res/image/color0_1.png"
            }, {
              name: "color0_2",
              url: "resources/circleGame/res/image/color0_2.png"
            }, {
              name: "color1_0",
              url: "resources/circleGame/res/image/color1_0.png"
            }, {
              name: "color1_1",
              url: "resources/circleGame/res/image/color1_1.png"
            }, {
              name: "color1_2",
              url: "resources/circleGame/res/image/color1_2.png"
            }, {
              name: "color2_0",
              url: "resources/circleGame/res/image/color2_0.png"
            }, {
              name: "color2_1",
              url: "resources/circleGame/res/image/color2_1.png"
            }, {
              name: "color2_2",
              url: "resources/circleGame/res/image/color2_2.png"
            }, {
              name: "color3_0",
              url: "resources/circleGame/res/image/color3_0.png"
            }, {
              name: "color3_1",
              url: "resources/circleGame/res/image/color3_1.png"
            }, {
              name: "color3_2",
              url: "resources/circleGame/res/image/color3_2.png"
            }, {
              name: "color4_0",
              url: "resources/circleGame/res/image/color4_0.png"
            }, {
              name: "color4_1",
              url: "resources/circleGame/res/image/color4_1.png"
            }, {
              name: "color4_2",
              url: "resources/circleGame/res/image/color4_2.png"
            }, {
              name: "color5_0",
              url: "resources/circleGame/res/image/color5_0.png"
            }, {
              name: "color5_1",
              url: "resources/circleGame/res/image/color5_1.png"
            }, {
              name: "color5_2",
              url: "resources/circleGame/res/image/color5_2.png"
            } ];
          }
          Resource.loadResources = function() {
            return __awaiter(this, void 0, void 0, function() {
              var list;
              return __generator(this, function(_a) {
                Resource.instance = new Resource();
                list = Resource.instance.loadList;
                return [ 2, new Promise(function(resolve) {
                  var index = 0;
                  function load() {
                    return __awaiter(this, void 0, void 0, function() {
                      var res, loader, result;
                      return __generator(this, function(_a) {
                        switch (_a.label) {
                         case 0:
                          if (index >= list.length) {
                            circleGame.mainMediator.sendNotification(game.common.Command.CLOSE_VIEW, new game.common.CloseViewNB("loading.MainMediator"));
                            resolve();
                            return [ 2 ];
                          }
                          res = list[index];
                          circleGame.mainMediator.sendNotification(game.common.Command.OPEN_VIEW, new game.common.OpenViewNB("loading.MainMediator", {
                            text: "Loading " + ~~(index / list.length * 100) + "%  " + res.name
                          }));
                          if (!res.data) return [ 3, 1 ];
                          index++;
                          load();
                          return [ 3, 4 ];

                         case 1:
                          if (!("URLLoader" == res.type)) return [ 3, 3 ];
                          loader = new lib.URLLoader(res.url);
                          return [ 4, loader.load() ];

                         case 2:
                          result = _a.sent();
                          res.data = result.data;
                          index++;
                          load();
                          return [ 3, 4 ];

                         case 3:
                          cc.loader.load(cc.url.raw(res.url), function(e, data) {
                            res.data = data;
                            index++;
                            res.execute && res.execute();
                            load();
                          });
                          _a.label = 4;

                         case 4:
                          return [ 2 ];
                        }
                      });
                    });
                  }
                  load();
                }.bind(this)) ];
              });
            });
          };
          Resource.getResource = function(name) {
            if (!Resource.instance || !Resource.instance.loadList) return null;
            for (var i = 0; i < Resource.instance.loadList.length; i++) if (Resource.instance.loadList[i].name == name) return Resource.instance.loadList[i].data;
            return null;
          };
          return Resource;
        }();
        circleGame.Resource = Resource;
      })(circleGame = game.circleGame || (game.circleGame = {}));
    })(game || (game = {}));
    (function(game) {
      var circleGame;
      (function(circleGame) {
        var CircleGameModule = function(_super) {
          __extends(CircleGameModule, _super);
          function CircleGameModule() {
            return _super.call(this, CircleGameModule.NAME) || this;
          }
          CircleGameModule.prototype.listNotificationInterests = function() {
            return [ game.common.Command.INIT_MODULE, game.common.Command.CHANGE_SCENE, game.common.Command.REGISTER_NET ];
          };
          CircleGameModule.prototype.handleNotification = function(note) {
            switch (note.name) {
             case game.common.Command.INIT_MODULE:
              this.facade.registerMediator(new circleGame.MainMediator());
              break;

             case game.common.Command.CHANGE_SCENE:
              note.body.sceneName == CircleGameModule.NAME && this.sendNotification(game.common.Command.OPEN_VIEW, new game.common.OpenViewNB(circleGame.MainMediator.NAME));
              break;

             case game.common.Command.REGISTER_NET:
            }
          };
          CircleGameModule.NAME = "circleGame";
          return CircleGameModule;
        }(mvc.Module);
        circleGame.CircleGameModule = CircleGameModule;
      })(circleGame = game.circleGame || (game.circleGame = {}));
    })(game || (game = {}));
    (function(game) {
      var circleGame;
      (function(circleGame) {
        var MainMediator = function(_super) {
          __extends(MainMediator, _super);
          function MainMediator() {
            var _this = _super.call(this, MainMediator.NAME, null) || this;
            circleGame.mainMediator = _this;
            return _this;
          }
          MainMediator.prototype.initUI = function() {
            this.viewComponent = new cc.Node();
            this.viewComponent.addComponent(circleGame.MainComponent);
          };
          MainMediator.prototype.asyncLoad = function(resolve) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                switch (_a.label) {
                 case 0:
                  _super.prototype.asyncLoad.call(this, resolve);
                  return [ 4, circleGame.Resource.loadResources() ];

                 case 1:
                  _a.sent();
                  this.initUI();
                  this.loadComplete();
                  return [ 2 ];
                }
              });
            });
          };
          MainMediator.prototype.listNotificationInterests = function() {
            return [ game.common.Command.OPEN_VIEW, game.common.Command.CLOSE_VIEW ];
          };
          MainMediator.prototype.handleNotification = function(note) {
            return __awaiter(this, void 0, void 0, function() {
              var _a;
              return __generator(this, function(_b) {
                switch (_b.label) {
                 case 0:
                  _a = note.name;
                  switch (_a) {
                   case game.common.Command.OPEN_VIEW:
                    return [ 3, 1 ];

                   case game.common.Command.CLOSE_VIEW:
                    return [ 3, 4 ];
                  }
                  return [ 3, 5 ];

                 case 1:
                  if (note.body.name != MainMediator.NAME) return [ 2 ];
                  if (!!this.viewComponent) return [ 3, 3 ];
                  return [ 4, this.load() ];

                 case 2:
                  _b.sent();
                  _b.label = 3;

                 case 3:
                  if (this.viewComponent) {
                    game.layer.MainUILayer.show(this.viewComponent);
                    lib.Tween.to(this.viewComponent, 1, {
                      opacity: 255
                    }, null, {
                      opacity: 0
                    });
                  }
                  return [ 3, 5 ];

                 case 4:
                  if (note.body.name != MainMediator.NAME) return [ 2 ];
                  if (this.viewComponent && this.viewComponent.parent) {
                    this.viewComponent.parent.removeChild(this.viewComponent);
                    this.viewComponent.destroy();
                    this.viewComponent = null;
                  }
                  return [ 3, 5 ];

                 case 5:
                  return [ 2 ];
                }
              });
            });
          };
          MainMediator.NAME = "circleGame.MainMediator";
          return MainMediator;
        }(mvc.Mediator);
        circleGame.MainMediator = MainMediator;
      })(circleGame = game.circleGame || (game.circleGame = {}));
    })(game || (game = {}));
    (function(game) {
      var circleGame;
      (function(circleGame) {
        var MainComponent = function(_super) {
          __extends(MainComponent, _super);
          function MainComponent() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          MainComponent.prototype.start = function() {
            var node = new cc.Node();
            this.node.addChild(node);
            node.addComponent(circleGame.GameMain);
            var ui = cc.instantiate(circleGame.Resource.getResource("ui"));
            this.node.addChild(ui);
            this.ui = ui;
            ui.getChildByName("color4Btn").on(cc.Node.EventType.TOUCH_END, this.onChangeColor4, this);
            ui.getChildByName("color5Btn").on(cc.Node.EventType.TOUCH_END, this.onChangeColor5, this);
            ui.getChildByName("color6Btn").on(cc.Node.EventType.TOUCH_END, this.onChangeColor6, this);
            ui.getChildByName("txt").getComponent(cc.Label).string = "当前颜色：" + circleGame.GameMain.MAX_COUNT + "种";
          };
          MainComponent.prototype.onChangeColor4 = function() {
            circleGame.GameMain.MAX_COUNT = 4;
            this.ui.getChildByName("txt").getComponent(cc.Label).string = "当前颜色：" + circleGame.GameMain.MAX_COUNT + "种";
          };
          MainComponent.prototype.onChangeColor5 = function() {
            circleGame.GameMain.MAX_COUNT = 5;
            this.ui.getChildByName("txt").getComponent(cc.Label).string = "当前颜色：" + circleGame.GameMain.MAX_COUNT + "种";
          };
          MainComponent.prototype.onChangeColor6 = function() {
            circleGame.GameMain.MAX_COUNT = 6;
            this.ui.getChildByName("txt").getComponent(cc.Label).string = "当前颜色：" + circleGame.GameMain.MAX_COUNT + "种";
          };
          return MainComponent;
        }(cc.Component);
        circleGame.MainComponent = MainComponent;
      })(circleGame = game.circleGame || (game.circleGame = {}));
    })(game || (game = {}));
    (function(game) {
      var circleGame;
      (function(circleGame) {
        var GameMain = function(_super) {
          __extends(GameMain, _super);
          function GameMain() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            _this.xGap = 200;
            _this.yGap = 200;
            return _this;
          }
          GameMain.prototype.start = function() {
            this.list = [];
            for (var y = 0; y < 3; y++) for (var x = 0; x < 3; x++) {
              var node = new cc.Node();
              this.node.addChild(node);
              node.x = x * this.xGap - this.xGap;
              node.y = y * this.yGap - this.yGap;
              var stageCircle = node.addComponent(circleGame.StageCircle);
              this.list.push(stageCircle);
              stageCircle.addPoint();
            }
            this.list2 = [];
            for (var x = 0; x < 3; x++) {
              var node = new cc.Node();
              this.node.addChild(node);
              node.x = x * this.xGap - this.xGap;
              node.y = 2 * -this.yGap - 50;
              var stageCircle = node.addComponent(circleGame.StageCircle);
              this.list2.push(stageCircle);
              stageCircle.addCircle(this.createRandomCircle());
              stageCircle.addTouchEvent();
              stageCircle.dispatcher.addListener("Check", this.checkStageCircle, this);
            }
          };
          GameMain.prototype.checkStageCircle = function(e) {
            var stageCircle = e.data;
            for (var i = 0; i < this.list.length; i++) if ((this.list[i].node.x - stageCircle.node.x - stageCircle.circle.node.x) * (this.list[i].node.x - stageCircle.node.x - stageCircle.circle.node.x) + (this.list[i].node.y - stageCircle.node.y - stageCircle.circle.node.y) * (this.list[i].node.y - stageCircle.node.y - stageCircle.circle.node.y) < 1e4) {
              var has = false;
              for (var c = 0; c < stageCircle.circle.sizes.length; c++) if (this.list[i].hasSize(stageCircle.circle.sizes[c])) {
                has = true;
                break;
              }
              if (!has) {
                this.list[i].addCircle(stageCircle.circle);
                stageCircle.checkComplete(true);
                stageCircle.addCircle(this.createRandomCircle());
                this.checkDelete();
                return;
              }
            }
            stageCircle.checkComplete(false);
          };
          GameMain.prototype.checkDelete = function() {
            for (var i = 0; i < this.list.length; i++) {
              var circle = this.list[i].circle;
              if (circle && circle.colors.length == GameMain.MAX_COUNT) {
                var flag = true;
                for (var c = 1; c < circle.colors.length; c++) if (circle.colors[c] != circle.colors[0]) {
                  flag = false;
                  break;
                }
                if (flag) for (var c = 0; c < circle.colors.length; c++) circle.setDeleteFlag(c);
              }
            }
            for (var y = 0; y < 3; y++) for (var c = 0; c < GameMain.MAX_COUNT; c++) {
              var flag = true;
              for (var x = 0; x < 3; x++) {
                var index = 3 * y + x;
                if (false == this.list[index].hasColor(c)) {
                  flag = false;
                  break;
                }
              }
              if (flag) {
                for (var x = 0; x < 3; x++) {
                  var index = 3 * y + x;
                  this.list[index].circle.setDeleteFlag(c);
                }
                var node = circleGame.Buffer.instance.createImage("line" + c);
                this.node.addChild(node);
                node.rotation = 90;
                node.y = this.list[3 * y].node.y;
                node.scaleX = 0;
                lib.Tween.to(node, .1, {
                  scaleX: 1
                }).call(function(node) {
                  lib.Tween.to(node, .1, {
                    scaleX: 0
                  }).call(function(node) {
                    circleGame.Buffer.instance.release(node);
                  }, null, node);
                }, null, node);
                var count = ~~(15 + 15 * Math.random());
                for (var p = 0; p < count; p++) {
                  var node_1 = circleGame.Buffer.instance.createImage("pao" + c);
                  this.node.addChild(node_1);
                  node_1.x = this.xGap * (2 * (Math.random() - .5));
                  node_1.y = this.list[3 * y].node.y + 200 * (Math.random() - .5);
                  var dis = 200 + 300 * Math.random();
                  var centerX = 0;
                  var centerY = this.list[3 * y].node.y;
                  var endx = node_1.x + dis * (node_1.x - centerX) / Math.sqrt((node_1.x - centerX) * (node_1.x - centerX) + (node_1.y - centerY) * (node_1.y - centerY));
                  var endy = node_1.y + dis * (node_1.y - centerY) / Math.sqrt((node_1.x - centerX) * (node_1.x - centerX) + (node_1.y - centerY) * (node_1.y - centerY));
                  node_1.scaleX = node_1.scaleY = .6 + .6 * Math.random();
                  node_1.opacity = 255;
                  lib.Tween.to(node_1, .2 + .2 * Math.random(), {
                    x: endx,
                    y: endy,
                    scaleX: .1,
                    scaleY: .1,
                    opacity: 255 * (.2 + .3 * Math.random())
                  }).call(function(node) {
                    circleGame.Buffer.instance.release(node);
                  }, null, node_1);
                }
              }
            }
            for (var x = 0; x < 3; x++) for (var c = 0; c < GameMain.MAX_COUNT; c++) {
              var flag = true;
              for (var y = 0; y < 3; y++) {
                var index = 3 * y + x;
                if (false == this.list[index].hasColor(c)) {
                  flag = false;
                  break;
                }
              }
              if (flag) {
                for (var y = 0; y < 3; y++) {
                  var index = 3 * y + x;
                  this.list[index].circle.setDeleteFlag(c);
                }
                var node = circleGame.Buffer.instance.createImage("line" + c);
                this.node.addChild(node);
                node.x = this.list[x].node.x;
                node.scaleX = 0;
                lib.Tween.to(node, .1, {
                  scaleX: 1
                }).call(function(node) {
                  lib.Tween.to(node, .1, {
                    scaleX: 0
                  }).call(function(node) {
                    circleGame.Buffer.instance.release(node);
                  }, null, node);
                }, null, node);
                var count = ~~(15 + 15 * Math.random());
                for (var p = 0; p < count; p++) {
                  var node_2 = circleGame.Buffer.instance.createImage("pao" + c);
                  this.node.addChild(node_2);
                  node_2.x = this.list[x].node.x + 200 * (Math.random() - .5);
                  node_2.y = this.yGap * (2 * (Math.random() - .5));
                  var dis = 200 + 300 * Math.random();
                  var centerX = this.list[x].node.x;
                  var centerY = 0;
                  var endx = node_2.x + dis * (node_2.x - centerX) / Math.sqrt((node_2.x - centerX) * (node_2.x - centerX) + (node_2.y - centerY) * (node_2.y - centerY));
                  var endy = node_2.y + dis * (node_2.y - centerY) / Math.sqrt((node_2.x - centerX) * (node_2.x - centerX) + (node_2.y - centerY) * (node_2.y - centerY));
                  node_2.scaleX = node_2.scaleY = .6 + .6 * Math.random();
                  node_2.opacity = 255;
                  lib.Tween.to(node_2, .2 + .2 * Math.random(), {
                    x: endx,
                    y: endy,
                    scaleX: .1,
                    scaleY: .1,
                    opacity: 255 * (.2 + .3 * Math.random())
                  }).call(function(node) {
                    circleGame.Buffer.instance.release(node);
                  }, null, node_2);
                }
              }
            }
            var lines = [ [ 0, 4, 8 ], [ 2, 4, 6 ] ];
            for (var i = 0; i < lines.length; i++) {
              var _loop_1 = function() {
                flag = true;
                for (var j = 0; j < lines[i].length; j++) {
                  index = lines[i][j];
                  if (false == this_1.list[index].hasColor(c)) {
                    flag = false;
                    break;
                  }
                }
                if (flag) {
                  for (var j = 0; j < lines[i].length; j++) {
                    index = lines[i][j];
                    this_1.list[index].circle.setDeleteFlag(c);
                  }
                  var node_3 = circleGame.Buffer.instance.createImage("line" + c);
                  this_1.node.addChild(node_3);
                  node_3.rotation = 0 == i ? 45 : 135;
                  node_3.scaleX = 0;
                  lib.Tween.to(node_3, .1, {
                    scaleX: 1
                  }).call(function() {
                    lib.Tween.to(node_3, .1, {
                      scaleX: 0
                    }).call(function() {
                      circleGame.Buffer.instance.release(node_3);
                    });
                  });
                  var count = ~~(15 + 15 * Math.random());
                  for (var p = 0; p < count; p++) {
                    var node_4 = circleGame.Buffer.instance.createImage("pao" + c);
                    this_1.node.addChild(node_4);
                    node_4.x = this_1.xGap * (2 * (Math.random() - .5));
                    node_4.y = 200 * (Math.random() - .5);
                    var dis = 200 + 300 * Math.random();
                    var centerX = 0;
                    var centerY = 0;
                    var endx = node_4.x + dis * (node_4.x - centerX) / Math.sqrt((node_4.x - centerX) * (node_4.x - centerX) + (node_4.y - centerY) * (node_4.y - centerY));
                    var endy = node_4.y + dis * (node_4.y - centerY) / Math.sqrt((node_4.x - centerX) * (node_4.x - centerX) + (node_4.y - centerY) * (node_4.y - centerY));
                    node_4.scaleX = node_4.scaleY = .6 + .6 * Math.random();
                    node_4.opacity = 255;
                    lib.Tween.to(node_4, .2 + .2 * Math.random(), {
                      x: endx,
                      y: endy,
                      scaleX: .1,
                      scaleY: .1,
                      opacity: 255 * (.2 + .3 * Math.random())
                    }).call(function(node) {
                      circleGame.Buffer.instance.release(node);
                    }, null, node_4);
                  }
                }
              };
              var this_1 = this, flag, index, index;
              for (var c = 0; c < GameMain.MAX_COUNT; c++) _loop_1();
            }
            for (var i = 0; i < this.list.length; i++) this.list[i].deleteItem();
          };
          GameMain.prototype.createRandomCircle = function() {
            var colors = [];
            var sizes = [];
            var weights = [ .7, .3 ];
            var r = Math.random();
            var index = 0;
            for (var i = 0; i < weights.length; i++) {
              if (r < weights[i]) {
                index = i;
                break;
              }
              r -= weights[i];
            }
            var itemSizes = [ 0, 1, 2 ];
            for (var i = 0; i < index + 1; i++) {
              var sizeIndex = ~~(Math.random() * itemSizes.length);
              var color = ~~(Math.random() * GameMain.MAX_COUNT);
              console.log("当前颜色：", color);
              var size = itemSizes.splice(sizeIndex, 1)[0];
              colors.push(color);
              sizes.push(size);
            }
            return this.createCircle(colors, sizes);
          };
          GameMain.prototype.createCircle = function(colors, sizes) {
            var node = new cc.Node();
            var circle = node.addComponent(circleGame.Circle);
            for (var i = 0; i < colors.length; i++) circle.addItem(colors[i], sizes[i]);
            return circle;
          };
          GameMain.MAX_COUNT = 4;
          return GameMain;
        }(cc.Component);
        circleGame.GameMain = GameMain;
      })(circleGame = game.circleGame || (game.circleGame = {}));
    })(game || (game = {}));
    (function(game) {
      var circleGame;
      (function(circleGame) {
        var StageCircle = function(_super) {
          __extends(StageCircle, _super);
          function StageCircle() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            _this.dispatcher = new lib.EventDispatcher();
            return _this;
          }
          StageCircle.prototype.addPoint = function() {
            var node = new cc.Node();
            var sprite = node.addComponent(cc.Sprite);
            sprite.spriteFrame = new cc.SpriteFrame();
            sprite.spriteFrame.setTexture(circleGame.Resource.getResource("center"));
            this.node.addChild(node);
          };
          StageCircle.prototype.addTouchEvent = function() {
            this.node.setContentSize(130, 130);
            this.node.on(cc.Node.EventType.TOUCH_START, this.onDragStart, this);
            this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onDragMove, this);
            this.node.on(cc.Node.EventType.TOUCH_END, this.onDragEnd, this);
            this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onDragEnd, this);
          };
          StageCircle.prototype.onDragStart = function() {};
          StageCircle.prototype.onDragMove = function(event) {
            if (this.circle) {
              var delta = event.touch.getDelta();
              this.circle.node.x += delta.x;
              this.circle.node.y += delta.y;
            }
          };
          StageCircle.prototype.onDragEnd = function() {
            this.circle && this.dispatcher.dispatchWith("Check", this);
          };
          StageCircle.prototype.checkComplete = function(flag) {
            flag ? this.removeAll() : lib.Tween.to(this.circle.node, .5, {
              x: 0,
              y: 0
            }, lib.Ease.BACK_EASE_OUT);
          };
          StageCircle.prototype.setDeleteFlag = function(index) {
            if (!this.circle) return;
            this.circle.setDeleteFlag(index);
          };
          StageCircle.prototype.deleteItem = function() {
            if (!this.circle) return;
            this.circle.deleteItem();
          };
          StageCircle.prototype.addCircle = function(circle) {
            if (null == this.circle) {
              var node = new cc.Node();
              this.circle = node.addComponent(circleGame.Circle);
              this.node.addChild(node);
            }
            for (var i = 0; i < circle.colors.length; i++) this.circle.addItem(circle.colors[i], circle.sizes[i]);
          };
          StageCircle.prototype.hasItem = function(color, size) {
            if (!this.circle) return false;
            return this.circle.hasItem(color, size);
          };
          StageCircle.prototype.hasColor = function(color) {
            if (!this.circle) return false;
            return this.circle.hasColor(color);
          };
          StageCircle.prototype.hasSize = function(size) {
            if (!this.circle) return false;
            return this.circle.hasSize(size);
          };
          StageCircle.prototype.removeItem = function(color, size) {
            if (!this.circle) return;
            this.circle.removeItem(color, size);
          };
          StageCircle.prototype.removeAll = function() {
            if (!this.circle) return;
            this.circle.removeAll();
            this.circle.node.destroy();
            this.circle = null;
          };
          return StageCircle;
        }(cc.Component);
        circleGame.StageCircle = StageCircle;
      })(circleGame = game.circleGame || (game.circleGame = {}));
    })(game || (game = {}));
    (function(game) {
      var circleGame;
      (function(circleGame) {
        var Circle = function(_super) {
          __extends(Circle, _super);
          function Circle() {
            var _this = null !== _super && _super.apply(this, arguments) || this;
            _this.colors = [];
            _this.sizes = [];
            _this.images = [];
            _this.deleteFlags = [];
            return _this;
          }
          Circle.prototype.setDeleteFlag = function(color) {
            for (var i = 0; i < this.colors.length; i++) this.colors[i] == color && (this.deleteFlags[i] = true);
          };
          Circle.prototype.deleteItem = function() {
            for (var i = 0; i < this.deleteFlags.length; i++) if (this.deleteFlags[i]) {
              this.colors.splice(i, 1);
              this.sizes.splice(i, 1);
              this.deleteFlags.splice(i, 1);
              var node = this.images.splice(i, 1)[0];
              node.destroy();
              i--;
            }
          };
          Circle.prototype.addItem = function(color, size) {
            this.colors.push(color);
            this.sizes.push(size);
            this.deleteFlags.push(false);
            var node = this.createItem(color, size);
            this.node.addChild(node);
            this.images.push(node);
          };
          Circle.prototype.hasItem = function(color, size) {
            for (var i = 0; i < this.colors.length; i++) if (this.colors[i] == color && this.sizes[i] == size) return true;
            return false;
          };
          Circle.prototype.hasColor = function(color) {
            for (var i = 0; i < this.colors.length; i++) if (this.colors[i] == color) return true;
            return false;
          };
          Circle.prototype.hasSize = function(size) {
            for (var i = 0; i < this.colors.length; i++) if (this.sizes[i] == size) return true;
            return false;
          };
          Circle.prototype.removeItem = function(color, size) {
            for (var i = 0; i < this.colors.length; i++) if (this.colors[i] == color && this.sizes[i] == size) {
              this.colors.splice(i, 1);
              this.sizes.splice(i, 1);
              this.deleteFlags.splice(i, 1);
              var node = this.images.splice(i, 1)[0];
              node.destroy();
              break;
            }
          };
          Circle.prototype.removeAll = function() {
            while (this.colors.length) {
              this.colors.pop();
              this.sizes.pop();
              this.deleteFlags.pop();
              this.images.pop().destroy();
            }
          };
          Circle.prototype.createItem = function(color, size) {
            var node = new cc.Node();
            var sprite = node.addComponent(cc.Sprite);
            sprite.spriteFrame = new cc.SpriteFrame();
            sprite.spriteFrame.setTexture(circleGame.Resource.getResource("color" + color + "_" + size));
            return node;
          };
          return Circle;
        }(cc.Component);
        circleGame.Circle = Circle;
      })(circleGame = game.circleGame || (game.circleGame = {}));
    })(game || (game = {}));
    (function(game) {
      var circleGame;
      (function(circleGame) {
        var Buffer = function() {
          function Buffer() {
            this.buffers = {};
            this.first = true;
            lib.EnterFrame.add(this.update, this);
          }
          Buffer.prototype.update = function() {
            for (var i = 0; i < 10; i++) {
              var name = "pao" + i;
              if (null != circleGame.Resource.getResource(name)) {
                null == this.buffers[name] && (this.buffers[name] = []);
                if (this.buffers[name].length < 30) {
                  this.release(this.realCreateImage(name));
                  return;
                }
                this.first && (this.first = false);
              }
            }
          };
          Buffer.prototype.createImage = function(name) {
            null == this.buffers[name] && (this.buffers[name] = []);
            return this.buffers[name].length ? this.buffers[name].pop() : this.realCreateImage(name);
          };
          Buffer.prototype.realCreateImage = function(name) {
            var node = new cc.Node();
            node.name = name;
            var sprite = node.addComponent(cc.Sprite);
            sprite.spriteFrame = new cc.SpriteFrame();
            sprite.spriteFrame.setTexture(circleGame.Resource.getResource(name));
            return node;
          };
          Buffer.prototype.release = function(node) {
            node.x = node.y = node.rotation = 0;
            node.scaleX = node.scaleY = 1;
            node.opacity = 255;
            var name = node.name;
            node.parent && (node.parent = null);
            null == this.buffers[name] && (this.buffers[name] = []);
            this.buffers[name].push(node);
          };
          Buffer.instance = new Buffer();
          return Buffer;
        }();
        circleGame.Buffer = Buffer;
      })(circleGame = game.circleGame || (game.circleGame = {}));
    })(game || (game = {}));
    window.game = game;
    cc._RF.pop();
  }, {} ],
  Go: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "618942uJOJBO4zcaYdXmNzK", "Go");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    require("mvc");
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.ui1 = null;
        _this.ui2 = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        cc.director.setDisplayStats(false);
        game.prefab = {
          ui1: this.ui1,
          ui2: this.ui2
        };
        lib.start();
        game.startup.AppFacade.start(this.node);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "ui1", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "ui2", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    mvc: "mvc"
  } ],
  Panel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1eb17fWr/BH+al9jGwj2ZNI", "Panel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _scaleMode: 1,
        scaleMode: {
          get: function get() {
            return this._scaleMode;
          },
          set: function set(val) {
            this._scaleMode = val;
          },
          type: cc.Enum({
            NO_SCALE: 0,
            SHOW_ALL: 1,
            NO_BORDER: 2,
            SCALE_WIDTH: 3,
            SCALE_HEIGHT: 4
          })
        }
      },
      onLoad: function onLoad() {
        var size = lib.data.system.screen.value;
        var width = this.node.width;
        var height = this.node.height;
        var scaleMode = this.scaleMode;
        if (width && height && scaleMode) {
          var scaleX = size.width / width;
          var scaleY = size.height / height;
          if (1 == scaleMode) {
            this.node.scaleX = scaleX < scaleY ? scaleX : scaleY;
            this.node.scaleY = scaleX < scaleY ? scaleX : scaleY;
          } else if (2 == scaleMode) {
            this.node.scaleX = scaleX > scaleY ? scaleX : scaleY;
            this.node.scaleY = scaleX > scaleY ? scaleX : scaleY;
          } else if (3 == scaleMode) {
            this.node.scaleX = scaleX;
            this.node.scaleY = scaleX;
          } else if (4 == scaleMode) {
            this.node.scaleX = scaleY;
            this.node.scaleY = scaleY;
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  mvc: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d3c50vn5pAPrKqoEMSUnPa", "mvc");
    var $math = Math;
    var LocalWebSocket = WebSocket;
    var lib;
    (function(lib) {
      lib.math = $math;
      var DEBUG = false;
      var TIP = false;
      lib.$language = "zh_CN";
      var NATIVE = true;
      var LANGUAGE = "";
      var SCALE = null;
      lib.CACHE = true;
      var UPDATE_RESOURCE = true;
      var RETINA = false;
      var programmers = {};
      var config = {};
      var params = {};
      var hasStart = false;
      var startBacks = [];
      lib.data = {};
      function start(completeFunc, params) {
        if (hasStart) {
          completeFunc && completeFunc();
          return;
        }
        params = params || {};
        if (params.TIP) {
          TIP = params.TIP;
          lib.sys.TIP = params.TIP;
        }
        if (params.DEBUG) {
          DEBUG = params.DEBUG;
          lib.sys.DEBUG = params.DEBUG;
        }
        params.language && (lib.$language = params.language);
        hasStart = true;
        lib.Platform._runBack = lib.CoreTime.$run;
        if ("creator" == lib.Platform.type) {
          lib.data = lib.DataManager.getInstance()._root.black;
          lib.Platform.start();
          null != completeFunc && completeFunc();
        }
      }
      lib.start = start;
      function addStartBack(func) {
        startBacks.push(func);
      }
      function $error(errorCode) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var msg;
        msg = "string" == typeof errorCode ? errorCode : lib.getLanguage.apply(null, [ errorCode ].concat(args));
        console.log(msg);
        throw msg;
      }
      lib.$error = $error;
      function $warn(errorCode) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var msg;
        msg = "string" == typeof errorCode ? errorCode : lib.getLanguage.apply(null, [ errorCode ].concat(args));
        console.log("[警告] " + msg);
      }
      lib.$warn = $warn;
      function $tip(errorCode) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        console.log(lib.getLanguage(errorCode, args));
      }
      lib.$tip = $tip;
      function isNaN(value) {
        value = +value;
        return value !== value;
      }
      lib.isNaN = isNaN;
      function clampRotation(value) {
        value %= 360;
        value > 180 ? value -= 360 : value < -180 && (value += 360);
        return value;
      }
      lib.clampRotation = clampRotation;
      function trace() {
        var str = "";
        for (var i = 0; i < arguments.length; i++) str += arguments[i] + "\t\t";
        console.log(str);
      }
      lib.trace = trace;
      function breakPoint(name) {
        trace("breakPoint:", name);
      }
      lib.breakPoint = breakPoint;
      function dispose() {
        lib.EnterFrame.$dispose();
        lib.CallLater.$dispose();
        lib.DelayCall.$dispose();
        hasStart = false;
      }
      lib.dispose = dispose;
      lib.sys = {
        config: config,
        DEBUG: DEBUG,
        TIP: TIP,
        $tip: $tip,
        $warn: $warn,
        $error: $error,
        getLanguage: lib.getLanguage
      };
      lib.system = {};
    })(lib || (lib = {}));
    lib.math = Math;
    (function(lib) {
      var Platform = function() {
        function Platform() {}
        Platform.start = function() {
          lib.data.system.screen.width = cc.director.getWinSize().width;
          lib.data.system.screen.height = cc.director.getWinSize().height;
          setInterval(Platform._run, 1e3 / 60);
          lib.CoreTime.$playEnterFrame = false;
        };
        Platform._run = function() {
          Platform.frame++;
          var now = new Date().getTime();
          Platform._runBack(now - Platform.lastTime);
          Platform.lastTime = now;
          lib.PlatformURLLoader.run();
        };
        Platform.create = function(name) {
          var pools = Platform.pools;
          return null;
        };
        Platform.release = function(name, object) {
          object.release();
          var pools = Platform.pools;
          pools[name] || (pools[name] = []);
          pools[name].push(object);
        };
        Platform.type = "creator";
        Platform.native = cc.sys.isNative;
        Platform.lastTime = new Date().getTime();
        Platform.frame = 0;
        Platform.pools = {};
        return Platform;
      }();
      lib.Platform = Platform;
    })(lib || (lib = {}));
    (function(lib) {
      var PlatformURLLoader = function() {
        function PlatformURLLoader() {}
        PlatformURLLoader.loadText = function(url, back, errorBack, thisObj, method, params, contentType) {
          if (PlatformURLLoader.isLoading) {
            PlatformURLLoader.loadingList.push([ PlatformURLLoader.loadText, url, back, errorBack, thisObj, method, params, contentType ]);
            return;
          }
          PlatformURLLoader.isLoading = true;
          PlatformURLLoader.loadingFunc = PlatformURLLoader.realLoadText;
          PlatformURLLoader.loadingArgs = arguments;
          PlatformURLLoader.loadingFunc.apply(null, arguments);
        };
        PlatformURLLoader.realLoadText = function(url, back, errorBack, thisObj, method, params, contentType) {
          PlatformURLLoader.loadingFrame = lib.Platform.frame;
          PlatformURLLoader.loadingId++;
          var id = PlatformURLLoader.loadingId;
          if ("http://" == url.slice(0, "http://".length)) {
            PlatformURLLoader.checkFrame = lib.Platform.frame + 120;
            var pstr = "?";
            for (var key in params) pstr += key + "=" + params[key] + "&";
            "&" == pstr.charAt(pstr.length - 1) && (pstr = pstr.slice(0, pstr.length - 1));
            "?" != pstr && (url += pstr);
            var xhr = cc.loader.getXMLHttpRequest();
            null != method && "" != method || (method = "GET");
            if ("GET" == method) xhr.open("GET", url, true); else if ("POST" == method) {
              xhr.open("POST", url, true);
              contentType || (contentType = "application/x-www-form-urlencoded");
              xhr.setRequestHeader("Content-Type", contentType);
            } else if ("HEAD" == method) {
              xhr.open("HEAD", url, true);
              xhr.open("HEAD", url, true);
            }
            xhr.onloadend = function() {
              if (id != PlatformURLLoader.loadingId) return;
              200 != xhr.status ? errorBack.call(thisObj) : "HEAD" == method ? back.call(thisObj, xhr.getAllResponseHeaders()) : back.call(thisObj, xhr.responseText);
              PlatformURLLoader.isLoading = false;
              PlatformURLLoader.loadingId++;
            };
            xhr.send();
          } else {
            PlatformURLLoader.checkFrame = lib.Platform.frame + 3;
            var res;
            var end = url.split(".")[url.split(".").length - 1];
            if (res) {
              if (id != PlatformURLLoader.loadingId) return;
              back.call(thisObj, res);
              PlatformURLLoader.isLoading = false;
              PlatformURLLoader.loadingId++;
            } else cc.loader.loadRes(url, function(error, data) {
              if (id != PlatformURLLoader.loadingId) return;
              if (error) errorBack.call(thisObj); else {
                cc.loader.release(url);
                data instanceof Array && (data = JSON.stringify(data[0]));
                back.call(thisObj, data);
              }
              PlatformURLLoader.isLoading = false;
              PlatformURLLoader.loadingId++;
            });
          }
        };
        PlatformURLLoader.loadTexture = function(url, back, errorBack, thisObj, params) {
          if (PlatformURLLoader.isLoading) {
            PlatformURLLoader.loadingList.push([ PlatformURLLoader.loadTexture, url, back, errorBack, thisObj, params ]);
            return;
          }
          PlatformURLLoader.isLoading = true;
          PlatformURLLoader.loadingFunc = PlatformURLLoader.realLoadTexture;
          PlatformURLLoader.loadingArgs = arguments;
          PlatformURLLoader.loadingFunc.apply(null, arguments);
        };
        PlatformURLLoader.realLoadTexture = function(url, back, errorBack, thisObj, params) {
          PlatformURLLoader.loadingFrame = lib.Platform.frame;
          "http://" == url.slice(0, "http://".length) ? PlatformURLLoader.checkFrame = lib.Platform.frame + 120 : PlatformURLLoader.checkFrame = lib.Platform.frame + 3;
          PlatformURLLoader.loadingId++;
          var id = PlatformURLLoader.loadingId;
          cc.loader.loadImg(url, {
            isCrossOrigin: true
          }, function(err, img) {
            if (id != PlatformURLLoader.loadingId) return;
            if (err) errorBack.call(thisObj); else {
              lib.CACHE || cc.loader.release(url);
              var texture;
              if (lib.Platform.native) texture = img; else {
                texture = new cc.Texture2D();
                texture.initWithElement(img);
                texture.handleLoadedTexture();
              }
              back.call(thisObj, texture, texture.getContentSize().width, texture.getContentSize().height);
            }
            PlatformURLLoader.isLoading = false;
            PlatformURLLoader.loadingId++;
          });
        };
        PlatformURLLoader.run = function() {
          if (false == PlatformURLLoader.isLoading) {
            if (PlatformURLLoader.loadingList.length) {
              var item = PlatformURLLoader.loadingList.shift();
              item[0].apply(null, item.slice(1, item.length));
            }
          } else if (lib.Platform.frame >= PlatformURLLoader.checkFrame) {
            console.log("Try load again: " + PlatformURLLoader.loadingArgs[0]);
            PlatformURLLoader.loadingFunc.apply(null, PlatformURLLoader.loadingArgs);
          }
        };
        PlatformURLLoader.isLoading = false;
        PlatformURLLoader.loadingId = 0;
        PlatformURLLoader.loadingList = [];
        return PlatformURLLoader;
      }();
      lib.PlatformURLLoader = PlatformURLLoader;
    })(lib || (lib = {}));
    (function(lib) {
      var PlatformWebSocket = function() {
        function PlatformWebSocket() {}
        PlatformWebSocket.prototype.bindWebSocket = function(ip, port, path, thisObj, onConnect, onReceiveMessage, onError, onClose) {
          var websocket = new LocalWebSocket("ws://" + ip + ":" + port + path);
          this.webSocket = websocket;
          var openFunc = function() {
            onConnect.call(thisObj);
          };
          websocket.onopen = openFunc;
          var receiveFunc = function(event) {
            if (!cc.sys.isNative && event.data instanceof Blob) {
              var reader = new FileReader();
              reader.onloadend = function() {
                var list = [];
                var data = new Uint8Array(this.result);
                for (var i = 0; i < data.length; i++) list.push(data[i]);
                onReceiveMessage.call(thisObj, {
                  type: "binary",
                  binaryData: list
                });
              };
              reader.readAsArrayBuffer(event.data);
            } else if (cc.sys.isNative && event.data instanceof ArrayBuffer) {
              var list = [];
              var data = new Uint8Array(event.data);
              for (var i = 0; i < data.length; i++) list.push(data[i]);
              onReceiveMessage.call(thisObj, {
                type: "binary",
                binaryData: list
              });
            } else onReceiveMessage.call(thisObj, {
              type: "utf8",
              utf8Data: event.data
            });
          };
          websocket.onmessage = receiveFunc;
          var errorFunc = function() {
            onError.call(thisObj);
          };
          websocket.onerror = errorFunc;
          var closeFunc = function() {
            onClose.call(thisObj);
          };
          websocket.onclose = closeFunc;
          PlatformWebSocket.webSockets.push({
            webSocket: websocket
          });
          return websocket;
        };
        PlatformWebSocket.prototype.sendWebSocketUTF = function(data) {
          this.webSocket.send(data);
        };
        PlatformWebSocket.prototype.sendWebSocketBytes = function(data) {
          this.webSocket.send(new Uint8Array(data));
        };
        PlatformWebSocket.prototype.releaseWebSocket = function() {
          var item = null;
          var list = PlatformWebSocket.webSockets;
          var webSocket = this.webSocket;
          for (var i = 0; i < list.length; i++) if (websocket == list[i].webSocket) {
            websocket.close();
            websocket.onopen = null;
            websocket.onmessage = null;
            websocket.onerror = null;
            websocket.onclose = null;
            this.webSocket = null;
            list.splice(i, 1);
            break;
          }
        };
        PlatformWebSocket.webSockets = [];
        return PlatformWebSocket;
      }();
      lib.PlatformWebSocket = PlatformWebSocket;
    })(lib || (lib = {}));
    (function(lib) {
      var CoreTime = function() {
        function CoreTime() {}
        CoreTime.$run = function(gap) {
          CoreTime.lastTimeGap = gap;
          CoreTime.currentTime += gap;
          lib.EnterFrame.$update(CoreTime.currentTime, gap);
        };
        CoreTime.getTime = function() {
          return CoreTime.currentTime;
        };
        CoreTime.currentTime = 0;
        CoreTime.$playEnterFrame = true;
        return CoreTime;
      }();
      lib.CoreTime = CoreTime;
    })(lib || (lib = {}));
    (function(lib) {
      var Event = function() {
        function Event(type, bubbles) {
          void 0 === bubbles && (bubbles = false);
          this.$cycle = false;
          this.$target = null;
          this.$currentTarget = null;
          this._isPropagationStopped = false;
          this.$type = type;
          this.$bubbles = bubbles;
        }
        Event.prototype.stopPropagation = function() {
          this._isPropagationStopped = true;
        };
        Object.defineProperty(Event.prototype, "isPropagationStopped", {
          get: function() {
            return this._isPropagationStopped;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Event.prototype, "type", {
          get: function() {
            return this.$type;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Event.prototype, "bubbles", {
          get: function() {
            return this.$bubbles;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Event.prototype, "target", {
          get: function() {
            return this.$target;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Event.prototype, "currentTarget", {
          get: function() {
            return this.$currentTarget;
          },
          enumerable: true,
          configurable: true
        });
        Event.create = function(type, data, bubbles) {
          void 0 === data && (data = null);
          void 0 === bubbles && (bubbles = false);
          var e;
          if (lib.Event._eventPool.length) {
            e = lib.Event._eventPool.pop();
            e.$cycle = false;
          } else e = new lib.Event(type);
          e.$type = type;
          e.$bubbles = bubbles;
          e.data = data;
          return e;
        };
        Event.release = function(e) {
          if (e.$cycle) return;
          e.$cycle = true;
          e.data = null;
          lib.Event._eventPool.push(e);
        };
        Event.READY = "ready";
        Event.COMPLETE = "complete";
        Event.ADDED = "added";
        Event.REMOVED = "removed";
        Event.ADD = "add";
        Event.REMOVE = "remove";
        Event.ADDED_TO_STAGE = "added_to_stage";
        Event.REMOVED_FROM_STAGE = "removed_from_stage";
        Event.CONNECT = "connect";
        Event.CLOSE = "close";
        Event.CHANGE = "change";
        Event.ERROR = "error";
        Event.FOCUS_IN = "focus_in";
        Event.FOCUS_OUT = "focus_out";
        Event.CONFIRM = "confirm";
        Event.CANCEL = "cancel";
        Event.START_INPUT = "start_input";
        Event.STOP_INPUT = "stop_input";
        Event.DISTORT = "distort";
        Event.CREATION_COMPLETE = "creation_complete";
        Event.SELECTED_ITEM_CHANGE = "selected_item_change";
        Event.CLICK_ITEM = "click_item";
        Event.TOUCH_BEGIN_ITEM = "touch_begin_item";
        Event._eventPool = [];
        return Event;
      }();
      lib.Event = Event;
    })(lib || (lib = {}));
    (function(lib) {
      var EventDispatcher = function() {
        function EventDispatcher(target) {
          this.__hasDispose = false;
          this.__EventDispatcher = {
            0: target || this,
            1: {}
          };
        }
        Object.defineProperty(EventDispatcher.prototype, "isDispose", {
          get: function() {
            return this.__hasDispose;
          },
          enumerable: true,
          configurable: true
        });
        EventDispatcher.prototype.dispose = function() {
          this.__EventDispatcher = null;
          this.__hasDispose = true;
        };
        EventDispatcher.prototype.$release = function() {
          this.__EventDispatcher = {
            0: this,
            1: {}
          };
        };
        EventDispatcher.prototype.once = function(type, listener, thisObject, priority, args) {
          void 0 === thisObject && (thisObject = null);
          void 0 === priority && (priority = 0);
          void 0 === args && (args = null);
          this.__addListener(type, listener, thisObject, priority, true, args);
        };
        EventDispatcher.prototype.addListener = function(type, listener, thisObject, priority, args) {
          void 0 === thisObject && (thisObject = null);
          void 0 === priority && (priority = 0);
          void 0 === args && (args = null);
          this.__addListener(type, listener, thisObject, priority, false, args);
        };
        EventDispatcher.prototype.__addListener = function(type, listener, thisObject, priority, once, args) {
          var values = this.__EventDispatcher;
          var events = values[1];
          var list = events[type];
          list || (list = values[1][type] = []);
          for (var i = 0, len = list.length; i < len; i++) {
            var item = list[i];
            var agrsame = item.args == args;
            if (!agrsame && item.args && args) {
              var arg1 = item.args.length ? item.args : [ item.args ];
              var arg2 = args.length ? args : [ args ];
              if (arg1.length == arg2.length) {
                agrsame = true;
                for (var a = 0; a < arg1.length; a++) if (arg1[a] != arg2[a]) {
                  agrsame = false;
                  break;
                }
              }
            }
            if (item.listener == listener && item.thisObject == thisObject && false == item.del && agrsame) return;
          }
          list.push({
            listener: listener,
            thisObject: thisObject,
            once: once,
            del: false,
            args: args
          });
        };
        EventDispatcher.prototype.removeListener = function(type, listener, thisObject) {
          if (this.__hasDispose) return;
          var values = this.__EventDispatcher;
          var events = values[1];
          var list = events[type];
          if (!list) return;
          for (var i = 0, len = list.length; i < len; i++) if (list[i].listener == listener && list[i].thisObject == thisObject && false == list[i].del) {
            list[i].listener = null;
            list[i].thisObject = null;
            list[i].del = true;
            break;
          }
        };
        EventDispatcher.prototype.removeAllListener = function() {
          if (this.__hasDispose) return;
          var values = this.__EventDispatcher;
          var events = values[1];
          events = {};
        };
        EventDispatcher.prototype.hasListener = function(type) {
          var events = this.__EventDispatcher[1];
          var list = events[type];
          if (!list) return false;
          for (var i = 0, len = list.length; i < len; i++) if (false == list[i].del) return true;
          return false;
        };
        EventDispatcher.prototype.dispatch = function(event) {
          if (!this.__EventDispatcher) return;
          var list = this.__EventDispatcher[1][event.type];
          if (!list) return;
          for (var i = 0, len = list.length; i < len; i++) if (false == list[i].del) {
            var listener = list[i].listener;
            var thisObj = list[i].thisObject;
            null == event.$target && (event.$target = this);
            event.$currentTarget = this;
            var args = [ event ];
            list[i].args && (args = args.concat(list[i].args));
            if (list[i].once) {
              list[i].listener = null;
              list[i].thisObject = null;
              list[i].del = true;
            }
            listener.apply(thisObj, args);
          }
          for (i = 0; i < list.length; i++) if (true == list[i].del) {
            list.splice(i, 1);
            i--;
          }
        };
        EventDispatcher.prototype.dispatchWith = function(type, data, bubbles) {
          void 0 === data && (data = null);
          void 0 === bubbles && (bubbles = false);
          var e = lib.Event.create(type, data, bubbles);
          e.$target = this;
          this.dispatch(e);
          lib.Event.release(e);
        };
        return EventDispatcher;
      }();
      lib.EventDispatcher = EventDispatcher;
    })(lib || (lib = {}));
    (function(lib) {
      var Language = function() {
        function Language() {}
        Language.currentLanguage = "";
        Language.__languages = [];
        return Language;
      }();
      var $locale_strings = {};
      var $game_strings = {};
      function getLanguage(code) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var language = lib.$language;
        $locale_strings[language] || (language = "zh_CN");
        var text = $locale_strings[language][code];
        if (!text) return "{" + code + "}";
        var length = args.length;
        for (var i = 0; i < length; i++) text = lib.StringDo.replaceString(text, "{" + i + "}", args[i]);
        return text;
      }
      lib.getLanguage = getLanguage;
      function setGameLanguage(language, code, content) {
        $game_strings[language] || ($game_strings[language] = {});
        $game_strings[language][code] = content;
      }
      lib.setGameLanguage = setGameLanguage;
      function getGameLanguage(code) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        if (!$game_strings[lib.$language]) return "";
        var text = $game_strings[lib.$language][code];
        if (!text) return "{" + code + "}";
        var length = args.length;
        for (var i = 0; i < length; i++) text = lib.StringDo.replaceString(text, "{" + i + "}", args[i]);
        return text;
      }
      lib.getGameLanguage = getGameLanguage;
    })(lib || (lib = {}));
    (function(lib) {
      lib.$locale_strings = {};
      lib.$locale_strings["zh_CN"] = lib.$locale_strings["zh_CN"] || {};
      var locale_strings = lib.$locale_strings["zh_CN"];
      var docsWebSite = "github.com/mengjieli/flower/blob/UI/";
      locale_strings[1001] = "对象已经回收。";
      locale_strings[1002] = "对象已释放，对象名称:{0}";
      locale_strings[1003] = "重复创建纹理:{0}";
      locale_strings[1004] = "创建纹理:{0}";
      locale_strings[1005] = "释放纹理:{0}";
      locale_strings[1006] = "纹理已释放:{0} ，关于纹理释放可访问 http://" + docsWebSite + "docs/class/texture.md?dispose";
      locale_strings[1007] = "{0} 超出索引: {1}，索引范围为 0 ~ {2}";
      locale_strings[1008] = "错误的参数类型：{0} ，请参考 http://" + docsWebSite + "docs/class/{1}.md?f{2}";
      locale_strings[1020] = "开始标签和结尾标签不一致，开始标签：{0} ，结尾标签：{1}";
      locale_strings[1030] = "目标显示对象不在同一个显示列表中";
      locale_strings[1100] = "监听事件类型不能为空";
      locale_strings[1101] = "监听事件回调函数不能为空";
      locale_strings[2001] = "[loadText] {0}";
      locale_strings[2002] = "[loadTexture] {0}";
      locale_strings[2003] = "[加载失败] {0}";
      locale_strings[2004] = "[加载Plist失败] {0}";
    })(lib || (lib = {}));
    (function(lib) {
      var Error = function() {
        function Error() {}
        Error.$SOCKET_CLOSED = -1;
        return Error;
      }();
      lib.Error = Error;
    })(lib || (lib = {}));
    (function(lib) {
      var Help = function() {
        function Help() {}
        Help.getuuid = function() {
          return "xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = 16 * Math.random() | 0, v = "x" == c ? r : 3 & r | 8;
            return v.toString(16);
          });
        };
        Help.sleep = function(time) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              return [ 2, new Promise(function(resolve) {
                setTimeout(resolve, time);
              }) ];
            });
          });
        };
        return Help;
      }();
      lib.Help = Help;
    })(lib || (lib = {}));
    (function(lib) {
      var UTFChange = function() {
        function UTFChange() {}
        UTFChange.bytesToString = function(arr) {
          for (var i = 0; i < arr.length; i++) arr[i] < 0 && (arr[i] += 256);
          var res = [];
          for (var i_1 = 0; i_1 < arr.length; i_1++) {
            if (0 == arr[i_1]) continue;
            if (0 == (128 & arr[i_1])) res.push(arr[i_1]); else if (0 == (64 & arr[i_1])) res.push(arr[i_1] % 128); else if (0 == (32 & arr[i_1])) {
              res.push(arr[i_1] % 32 * 64 + arr[i_1 + 1] % 64);
              i_1++;
            } else if (0 == (16 & arr[i_1])) {
              res.push(arr[i_1] % 16 * 64 * 64 + arr[i_1 + 1] % 64 * 64 + arr[i_1 + 2] % 64);
              i_1++;
              i_1++;
            } else if (0 == (8 & arr[i_1])) {
              res.push(arr[i_1] % 8 * 64 * 64 * 64 + arr[i_1 + 1] % 64 * 64 * 64 + arr[i_1 + 2] % 64 * 64 + arr[i_1 + 2] % 64);
              i_1++;
              i_1++;
              i_1++;
            }
          }
          var str = "";
          for (i = 0; i < res.length; i++) str += String.fromCharCode(res[i]);
          return str;
        };
        UTFChange.stringToBytes = function(str) {
          var res = [];
          var num;
          for (var i = 0; i < str.length; i++) {
            num = str.charCodeAt(i);
            if (num < 128) res.push(num); else if (num < 2048) {
              res.push(128 + ~~(num / 64) + 64);
              res.push(num % 64 + 128);
            } else if (num < 65536) {
              res.push(128 + ~~(num / 4096) + 64 + 32);
              res.push(128 + ~~(num % 4096 / 64));
              res.push(num % 64 + 128);
            } else {
              res.push(128 + ~~(num / 262144) + 64 + 32 + 16);
              res.push(128 + ~~(num % 262144 / 4096));
              res.push(128 + ~~(num % 4096 / 64));
              res.push(num % 64 + 128);
            }
          }
          return res;
        };
        return UTFChange;
      }();
      lib.UTFChange = UTFChange;
    })(lib || (lib = {}));
    (function(lib) {
      var CallLater = function() {
        function CallLater(func, thisObj, args) {
          void 0 === args && (args = null);
          this._func = func;
          this._thisObj = thisObj;
          this._data = args || [];
          CallLater._next.push(this);
        }
        CallLater.prototype.$call = function() {
          this._func.apply(this._thisObj, this._data);
          this._func = null;
          this._thisObj = null;
          this._data = null;
        };
        CallLater.add = function(func, thisObj, args) {
          void 0 === args && (args = null);
          for (var i = 0, len = CallLater._next.length; i < len; i++) if (CallLater._next[i]._func == func && CallLater._next[i]._thisObj == thisObj) {
            CallLater._next[i]._data = args || [];
            return;
          }
          new CallLater(func, thisObj, args);
        };
        CallLater.$run = function() {
          if (!CallLater._next.length) return;
          CallLater._list = CallLater._next;
          CallLater._next = [];
          var list = CallLater._list;
          while (list.length) list.pop().$call();
        };
        CallLater.$dispose = function() {
          CallLater._list = [];
          CallLater._next = [];
        };
        CallLater._next = [];
        CallLater._list = [];
        return CallLater;
      }();
      lib.CallLater = CallLater;
    })(lib || (lib = {}));
    (function(lib) {
      var DelayCall = function() {
        function DelayCall(time, count, func, thisObj) {
          var args = [];
          for (var _i = 4; _i < arguments.length; _i++) args[_i - 4] = arguments[_i];
          this._func = func;
          this._thisObj = thisObj;
          this._data = args || [];
          this._time = time;
          this._start = lib.CoreTime.currentTime;
          this._count = count || 1e9;
          this.$complete = false;
          DelayCall._next.push(this);
        }
        DelayCall.prototype.$update = function() {
          if (!this.$complete && lib.CoreTime.currentTime - this._start > this._time) {
            this._func.apply(this._thisObj, this._data);
            this._count--;
            if (!this.$complete && this._count > 0) this._start = lib.CoreTime.currentTime; else {
              this._func = null;
              this._thisObj = null;
              this._data = null;
              this.$complete = true;
            }
          }
        };
        DelayCall.prototype.dispose = function() {
          this.$complete = true;
        };
        DelayCall.$run = function() {
          DelayCall._list = DelayCall._list.concat(DelayCall._next);
          DelayCall._next.length = 0;
          var list = DelayCall._list;
          for (var i = 0; i < list.length; i++) list[i].$update();
          for (var i = 0; i < list.length; i++) if (list[i].$complete) {
            list.splice(i, 1);
            i--;
          }
        };
        DelayCall.$dispose = function() {
          DelayCall._list.length = 0;
          DelayCall._next.length = 0;
        };
        DelayCall._list = [];
        DelayCall._next = [];
        return DelayCall;
      }();
      lib.DelayCall = DelayCall;
    })(lib || (lib = {}));
    (function(lib) {
      var EnterFrame = function() {
        function EnterFrame() {}
        EnterFrame.add = function(call, owner) {
          for (var i = 0; i < EnterFrame.enterFrames.length; i++) if (EnterFrame.enterFrames[i].call == call && EnterFrame.enterFrames[i].owner == owner) return;
          for (i = 0; i < EnterFrame.waitAdd.length; i++) if (EnterFrame.waitAdd[i].call == call && EnterFrame.waitAdd[i].owner == owner) return;
          EnterFrame.waitAdd.push({
            call: call,
            owner: owner
          });
        };
        EnterFrame.remove = function(call, owner) {
          for (var i = 0; i < EnterFrame.enterFrames.length; i++) if (EnterFrame.enterFrames[i].call == call && EnterFrame.enterFrames[i].owner == owner) {
            EnterFrame.enterFrames.splice(i, 1);
            return;
          }
          for (i = 0; i < EnterFrame.waitAdd.length; i++) if (EnterFrame.waitAdd[i].call == call && EnterFrame.waitAdd[i].owner == owner) {
            EnterFrame.waitAdd.splice(i, 1);
            return;
          }
        };
        EnterFrame.$update = function(now, gap) {
          EnterFrame.frame++;
          var st = new Date().getTime();
          var et;
          lib.CallLater.$run();
          et = new Date().getTime();
          st = et;
          lib.DelayCall.$run();
          et = new Date().getTime();
          st = et;
          if (EnterFrame.waitAdd.length) {
            EnterFrame.enterFrames = EnterFrame.enterFrames.concat(EnterFrame.waitAdd);
            EnterFrame.waitAdd = [];
          }
          var copy = EnterFrame.enterFrames;
          for (var i = 0; i < copy.length; i++) copy[i].call.apply(copy[i].owner, [ now, gap ]);
          et = new Date().getTime();
          if (now - EnterFrame.__lastFPSTime > 500) {
            EnterFrame.__lastFPSTime = now;
            EnterFrame.__lastFPSFrame = EnterFrame.frame;
          }
        };
        EnterFrame.$dispose = function() {
          EnterFrame.enterFrames = [];
          EnterFrame.waitAdd = [];
        };
        EnterFrame.enterFrames = [];
        EnterFrame.waitAdd = [];
        EnterFrame.frame = 0;
        EnterFrame.updateFactor = 1;
        EnterFrame.__lastFPSTime = 0;
        EnterFrame.__lastFPSFrame = 0;
        return EnterFrame;
      }();
      lib.EnterFrame = EnterFrame;
    })(lib || (lib = {}));
    (function(lib) {
      var StringDo = function() {
        function StringDo() {}
        StringDo.isNumberString = function(str) {
          var hasDot = false;
          for (var i = 0; i < str.length; i++) if (0 == i && "+" == str.charAt(0) || "-" == str.charAt(0)) ; else if ("." == str.charAt(i)) {
            if (hasDot) return false;
            hasDot = true;
          } else {
            var code = str.charCodeAt(i);
            if (code < 48 || code > 57) return false;
          }
          return true;
        };
        StringDo.changeStringToInner = function(content) {
          var len = content.length;
          for (var i = 0; i < len; i++) if ("\t" == content.charAt(i)) {
            content = content.slice(0, i) + "\\t" + content.slice(i + 1, len);
            i++;
            len++;
          } else if ("\n" == content.charAt(i)) {
            content = content.slice(0, i) + "\\n" + content.slice(i + 1, len);
            i++;
            len++;
          } else if ("\r" == content.charAt(i)) {
            content = content.slice(0, i) + "\\r" + content.slice(i + 1, len);
            i++;
            len++;
          } else if ('"' == content.charAt(i)) {
            content = content.slice(0, i) + '\\"' + content.slice(i + 1, len);
            i++;
            len++;
          }
          return content;
        };
        StringDo.findString = function(content, findString, begin) {
          begin = begin || 0;
          for (var i = begin; i < content.length; i++) if (content.slice(i, i + findString.length) == findString) return i;
          return -1;
        };
        StringDo.findStrings = function(content, findStrings, begin) {
          begin = begin || 0;
          for (var i = begin; i < content.length; i++) for (var j = 0; j < findStrings.length; j++) if (content.slice(i, i + findStrings[j].length) == findStrings[j]) return i;
          return -1;
        };
        StringDo.jumpStrings = function(content, start, jumps) {
          var pos = start;
          while (true) {
            var find = false;
            for (var i = 0; i < jumps.length; i++) if (jumps[i] == content.slice(pos, pos + jumps[i].length)) {
              find = true;
              pos += jumps[i].length;
              break;
            }
            if (false == find) break;
          }
          return pos;
        };
        StringDo.replaceString = function(str, findStr, tstr) {
          for (var i = 0; i < str.length; i++) if (StringDo.hasStringAt(str, [ findStr ], i)) {
            str = str.slice(0, i) + tstr + str.slice(i + findStr.length, str.length);
            i--;
          }
          return str;
        };
        StringDo.hasStringAt = function(str, hstrs, pos) {
          for (var i = 0; i < hstrs.length; i++) {
            var hstr = hstrs[i];
            if (str.length - pos >= hstr.length && str.slice(pos, pos + hstr.length) == hstr) return true;
          }
          return false;
        };
        StringDo.findId = function(str, pos) {
          if (str.length <= pos) return "";
          var id = "";
          var code;
          for (var j = pos, len = str.length; j < len; j++) {
            code = str.charCodeAt(j);
            if (!(code >= 65 && code <= 90 || code >= 97 && code <= 122 || 36 == code || 95 == code || j != pos && code >= 48 && code <= 57)) break;
            id += str.charAt(j);
          }
          return id;
        };
        StringDo.findFunctionContent = function(str, pos) {
          if (str.length <= pos) return "";
          pos = StringDo.jumpProgramSpace(str, pos);
          if ("{" != str.charAt(pos)) return "";
          var end = pos + 1;
          var startPos;
          var endPos;
          var count = 0;
          while (true) {
            var startPos = StringDo.findString(str, "{", end);
            var endPos = StringDo.findString(str, "}", end);
            if (-1 != startPos && -1 != endPos) if (startPos < endPos) {
              count++;
              end = startPos + 1;
            } else {
              count--;
              end = endPos + 1;
              if (count < 0) break;
            } else {
              if (-1 != startPos) return "";
              if (-1 == endPos) return "";
              end = endPos + 1;
              count--;
              if (count < 0) break;
            }
          }
          return str.slice(pos, end);
        };
        StringDo.deleteProgramNote = function(str, pos) {
          var end;
          for (var len = str.length; pos < len; pos++) if ("//" == str.slice(pos, pos + 2)) {
            end = StringDo.findStrings(str, [ "\r", "\n" ], pos);
            str = str.slice(0, pos) + str.slice(end, str.length);
            len = str.length;
            pos--;
          } else if ("/*" == str.slice(pos, pos + 2)) {
            end = StringDo.findString(str, "*/", pos);
            if (-1 == end) return len;
            end += 2;
            while (true) {
              var nextStart = StringDo.findString(str, "/*", end);
              -1 == nextStart && (nextStart = len);
              var nextEnd = StringDo.findString(str, "*/", end);
              if (-1 == nextEnd || nextEnd > nextStart) break;
              end = nextEnd + 2;
            }
            str = str.slice(0, pos) + str.slice(end, str.length);
            len = str.length;
          }
          return str;
        };
        StringDo.jumpProgramSpace = function(str, pos) {
          for (var len = str.length; pos < len; pos++) {
            var char = str.charAt(pos);
            if (" " != char && "　" != char && "\t" != char && "\r" != char && "\n" != char) break;
          }
          return pos;
        };
        StringDo.numberToString = function(arr) {
          for (var i = 0; i < arr.length; i++) arr[i] < 0 && (arr[i] += 256);
          var res = [];
          for (i = 0; i < arr.length; i++) {
            if (0 == arr[i]) break;
            if (0 == (128 & arr[i])) res.push(arr[i]); else if (0 == (64 & arr[i])) res.push(arr[i] % 128); else if (0 == (32 & arr[i])) {
              res.push(arr[i] % 32 * 64 + arr[i + 1] % 64);
              i++;
            } else if (0 == (16 & arr[i])) {
              res.push(arr[i] % 16 * 64 * 64 + arr[i + 1] % 64 * 64 + arr[i + 2] % 64);
              i++;
              i++;
            } else if (0 == (8 & arr[i])) {
              res.push(arr[i] % 8 * 64 * 64 * 64 + arr[i + 1] % 64 * 64 * 64 + arr[i + 2] % 64 * 64 + arr[i + 2] % 64);
              i++;
              i++;
              i++;
            }
          }
          var str = "";
          for (i = 0; i < res.length; i++) str += String.fromCharCode(res[i]);
          return str;
        };
        StringDo.stringToBytes = function(str) {
          var res = [];
          var num;
          for (var i = 0; i < str.length; i++) {
            num = str.charCodeAt(i);
            if (num < 128) res.push(num); else if (num < 2048) {
              res.push(lib.math.floor(num / 64) + 128 + 64);
              res.push(num % 64 + 128);
            } else if (num < 65536) {
              res.push(lib.math.floor(num / 4096) + 128 + 64 + 32);
              res.push(lib.math.floor(num % 4096 / 64) + 128);
              res.push(num % 64 + 128);
            } else {
              res.push(lib.math.floor(num / 262144) + 128 + 64 + 32 + 16);
              res.push(lib.math.floor(num % 262144 / 4096) + 128);
              res.push(lib.math.floor(num % 4096 / 64) + 128);
              res.push(num % 64 + 128);
            }
          }
          return res;
        };
        StringDo.parseNumber = function(value) {
          if ("number" == typeof value) return value;
          if ("string" != typeof value) return null;
          var code0 = "0".charCodeAt(0);
          var code9 = "9".charCodeAt(0);
          var codeP = ".".charCodeAt(0);
          var isNumber;
          var hasPoint = false;
          var before = "";
          var end = "";
          var code;
          var flag = true;
          for (var p = 0; p < value.length; p++) {
            code = value.charCodeAt(p);
            if (hasPoint) {
              if (!(code >= code0 && code <= code9)) {
                flag = false;
                break;
              }
              end += value.charAt(p);
            } else if (code == codeP) hasPoint = true; else {
              if (!(code >= code0 && code <= code9)) {
                flag = false;
                break;
              }
              before += value.charAt(p);
            }
          }
          if (flag) return parseInt(before) + ("" != end ? parseInt(end) / Math.pow(10, end.length) : 0);
          return null;
        };
        StringDo.split = function(text, array) {
          if (!array) return [ text ];
          "string" == typeof array && (array = [ array ]);
          var list = [];
          var start = 0;
          for (var i = 0, len = text.length; i < len; i++) for (var a = 0; a < array.length; a++) if (text.slice(i, i + array[a].length) == array[a]) {
            list.push(text.slice(start, i));
            i += array[a].length - 1;
            start = i + 1;
            break;
          }
          return list;
        };
        StringDo.intTo16 = function(num) {
          var str = "";
          while (num) {
            var n = 15 & num;
            num >>= 4;
            n < 10 ? str = n + str : 10 == n ? str = "a" + str : 11 == n ? str = "b" + str : 12 == n ? str = "c" + str : 13 == n ? str = "d" + str : 14 == n ? str = "e" + str : 15 == n && (str = "f" + str);
          }
          str = "0x" + str;
          return str;
        };
        return StringDo;
      }();
      lib.StringDo = StringDo;
    })(lib || (lib = {}));
    (function(lib) {
      var ObjectDo = function() {
        function ObjectDo() {}
        ObjectDo.toString = function(obj, maxDepth, before, depth) {
          void 0 === maxDepth && (maxDepth = 4);
          void 0 === before && (before = "");
          void 0 === depth && (depth = 0);
          before = before || "";
          depth = depth || 0;
          maxDepth = maxDepth || 4;
          var str = "";
          if ("string" == typeof obj) str += '"' + obj + '"'; else if ("number" == typeof obj) str += obj; else if (obj instanceof Array) {
            if (depth > maxDepth) return "...";
            str = "[\n";
            for (var i = 0; i < obj.length; i++) str += before + " " + ObjectDo.toString(obj[i], maxDepth, before + " ", depth + 1) + (i < obj.length - 1 ? ",\n" : "\n");
            str += before + "]";
          } else if (obj instanceof Object) {
            if (depth > maxDepth) return "...";
            str = "{\n";
            for (var key in obj) {
              str += before + ' "' + key + '": ' + ObjectDo.toString(obj[key], maxDepth, before + " ", depth + 1);
              str += ",\n";
            }
            ",\n" == str.slice(str.length - 2, str.length) && (str = str.slice(0, str.length - 2) + "\n");
            str += before + "}";
          } else str += obj;
          return str;
        };
        ObjectDo.keys = function(obj) {
          var list = [];
          for (var key in obj) list.push(key);
          return list;
        };
        ObjectDo.clone = function(obj) {
          var res = "";
          if ("string" == typeof obj || "number" == typeof obj) res = obj; else if (obj instanceof Array) res = obj.concat(); else if (obj instanceof Object) {
            res = {};
            for (var key in obj) res[key] = ObjectDo.clone(obj[key]);
          } else res = obj.hasOwnProperty("clone") ? obj.clone() : obj;
          return res;
        };
        return ObjectDo;
      }();
      lib.ObjectDo = ObjectDo;
    })(lib || (lib = {}));
    (function(lib) {
      var ByteArray = function() {
        function ByteArray() {
          this.bytes = [];
          this.position = 0;
          this.length = 0;
        }
        Object.defineProperty(ByteArray.prototype, "length", {
          get: function() {
            return this._length;
          },
          set: function(val) {
            this._length = val;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ByteArray.prototype, "bytesAvailable", {
          get: function() {
            return this._length - this.position;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ByteArray.prototype, "arrayData", {
          get: function() {
            return this.bytes;
          },
          enumerable: true,
          configurable: true
        });
        ByteArray.prototype.writeByte = function(val) {
          val &= 255;
          this.bytes.splice(this.position, 0, val);
          this.length += 1;
          this.position += 1;
        };
        ByteArray.prototype.writeBoolean = function(val) {
          this.bytes.splice(this.position, 0, true == val ? 1 : 0);
          this.length += 1;
          this.position += 1;
        };
        ByteArray.prototype.writeInt = function(val) {
          if (val >= 0) val *= 2; else {
            val = ~val;
            val *= 2;
            val++;
          }
          this.writeUInt(val);
        };
        ByteArray.prototype.writeUInt = function(val) {
          var flag = false;
          val = val < 0 ? -val : val;
          var val2 = 0;
          if (val >= 268435456) {
            val2 = val / 268435456;
            val &= 268435455;
            flag = true;
          }
          if (flag || val >> 7) {
            this.bytes.splice(this.position, 0, 128 | 127 & val);
            this.position++;
            this.length++;
          } else {
            this.bytes.splice(this.position, 0, 127 & val);
            this.position++;
            this.length++;
          }
          if (flag || val >> 14) {
            this.bytes.splice(this.position, 0, 128 | val >> 7 & 127);
            this.position++;
            this.length++;
          } else if (val >> 7) {
            this.bytes.splice(this.position, 0, val >> 7 & 127);
            this.position++;
            this.length++;
          }
          if (flag || val >> 21) {
            this.bytes.splice(this.position, 0, 128 | val >> 14 & 127);
            this.position++;
            this.length++;
          } else if (val >> 14) {
            this.bytes.splice(this.position, 0, val >> 14 & 127);
            this.position++;
            this.length++;
          }
          if (flag || val >> 28) {
            this.bytes.splice(this.position, 0, 128 | val >> 21 & 127);
            this.position++;
            this.length++;
          } else if (val >> 21) {
            this.bytes.splice(this.position, 0, val >> 21 & 127);
            this.position++;
            this.length++;
          }
          flag && this.writeUInt(Math.floor(val2));
        };
        ByteArray.prototype.writeUTF = function(val) {
          var arr = lib.UTFChange.stringToBytes(val);
          this.writeUInt(arr.length);
          for (var i = 0; i < arr.length; i++) {
            this.bytes.splice(this.position, 0, arr[i]);
            this.position++;
          }
          this.length += arr.length;
        };
        ByteArray.prototype.writeUTFBytes = function(val, len) {
          var arr = lib.UTFChange.stringToBytes(val);
          for (var i = 0; i < len; i++) {
            i < arr.length ? this.bytes.splice(this.position, 0, arr[i]) : this.bytes.splice(this.position, 0, 0);
            this.position++;
          }
          this.length += len;
        };
        ByteArray.prototype.writeByteArray = function(byteArray, start, len) {
          void 0 === start && (start = 0);
          void 0 === len && (len = 0);
          var copy = byteArray.bytes;
          for (var i = start; i < copy.length && i < start + len; i++) {
            this.bytes.splice(this.position, 0, copy[i]);
            this.position++;
          }
          this.length += len;
        };
        ByteArray.prototype.writeArray = function(array) {
          var bytes = this.bytes;
          for (var i = 0, len = array.length; i < len; i++) bytes.push(array[i]);
          this.length += this.bytes.length;
        };
        ByteArray.prototype.readByte = function() {
          this.position++;
          return this.bytes[this.position - 1];
        };
        ByteArray.prototype.readBoolean = function() {
          this.position++;
          return !!this.bytes[this.position - 1];
        };
        ByteArray.prototype.readUInt = function() {
          var bytes = this.bytes;
          var val = 0;
          var position = this.position;
          val += 127 & bytes[position];
          if (bytes[position] >> 7) {
            position++;
            val += (127 & bytes[position]) << 7;
            if (bytes[position] >> 7) {
              position++;
              val += (127 & bytes[position]) << 14;
              if (bytes[position] >> 7) {
                position++;
                val += (127 & bytes[position]) << 21;
                if (bytes[position] >> 7) {
                  position++;
                  val += 16 * ((127 & bytes[position]) << 24);
                  if (bytes[position] >> 7) {
                    position++;
                    val += 2048 * ((127 & bytes[position]) << 24);
                    if (bytes[position] >> 7) {
                      position++;
                      val += 262144 * (bytes[position] << 24);
                    }
                  }
                }
              }
            }
          }
          position++;
          this.position = position;
          return val;
        };
        ByteArray.prototype.readInt = function() {
          var val = this.readUInt();
          if (val % 2 == 1) {
            val = Math.floor(val / 2);
            val = ~val;
          } else val = Math.floor(val / 2);
          return val;
        };
        ByteArray.prototype.readUTF = function() {
          var len = this.readUInt();
          var val = lib.UTFChange.bytesToString(this.bytes.slice(this.position, this.position + len));
          this.position += len;
          return val;
        };
        ByteArray.prototype.readUTFBytes = function(len) {
          var val = lib.UTFChange.bytesToString(this.bytes.slice(this.position, this.position + len));
          this.position += len;
          return val;
        };
        ByteArray.prototype.toString = function() {
          return JSON.stringify(this.bytes);
        };
        return ByteArray;
      }();
      lib.ByteArray = ByteArray;
    })(lib || (lib = {}));
    (function(lib) {
      var RequestHead = function() {
        function RequestHead(cmd, uuid) {
          void 0 === cmd && (cmd = 0);
          void 0 === uuid && (uuid = "");
          this.version = 1;
          this.headVersion = RequestHead.VERSION;
          this._cmd = cmd;
          this.$uuid = uuid;
        }
        RequestHead.prototype.decode = function(bytes) {
          this.version = bytes.readUInt();
          this._cmd = bytes.readUInt();
          this.$uuid = bytes.readUTF();
        };
        RequestHead.prototype.encode = function(bytes) {
          bytes.writeUInt(this.headVersion);
          bytes.writeUInt(this.version);
          bytes.writeUInt(this._cmd);
          bytes.writeUTF(this.$uuid);
        };
        RequestHead.prototype.readFrom = function(head) {
          this.headVersion = head.headVersion;
          this.version = head.version;
          this._cmd = head.cmd;
          this.$uuid = head.$uuid;
        };
        Object.defineProperty(RequestHead.prototype, "cmd", {
          get: function() {
            return this._cmd;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(RequestHead.prototype, "remoteId", {
          get: function() {
            return this.$uuid;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(RequestHead.prototype, "isRequest", {
          get: function() {
            return true;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(RequestHead.prototype, "value", {
          get: function() {
            return {
              headVersion: this.headVersion,
              version: this.version,
              cmd: this.cmd,
              uuid: this.$uuid
            };
          },
          enumerable: true,
          configurable: true
        });
        RequestHead.VERSION = 1;
        return RequestHead;
      }();
      lib.RequestHead = RequestHead;
    })(lib || (lib = {}));
    (function(lib) {
      var ResponseHead = function() {
        function ResponseHead(cmd, uuid, processTime) {
          void 0 === cmd && (cmd = 0);
          void 0 === uuid && (uuid = "");
          void 0 === processTime && (processTime = 0);
          this.version = 1;
          this.headVersion = ResponseHead.VERSION;
          this._cmd = cmd;
          this.$uuid = uuid;
          this._processTime = processTime;
        }
        ResponseHead.prototype.decode = function(bytes) {
          this.version = bytes.readUInt();
          this._cmd = bytes.readUInt();
          this.$uuid = bytes.readUTF();
          this._processTime = bytes.readUInt();
        };
        ResponseHead.prototype.encode = function(bytes) {
          bytes.writeUInt(this.headVersion);
          bytes.writeUInt(this.version);
          bytes.writeUInt(this._cmd);
          bytes.writeUTF(this.$uuid);
          bytes.writeUInt(this._processTime);
        };
        ResponseHead.prototype.readFrom = function(head) {
          this.headVersion = head.headVersion;
          this.version = head.version;
          this._cmd = head.cmd;
          this.$uuid = head.remoteId;
          this._processTime = head.processTime;
        };
        Object.defineProperty(ResponseHead.prototype, "cmd", {
          get: function() {
            return this._cmd;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ResponseHead.prototype, "remoteId", {
          get: function() {
            return this.$uuid;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ResponseHead.prototype, "processTime", {
          get: function() {
            return this._processTime;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ResponseHead.prototype, "isRequest", {
          get: function() {
            return false;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ResponseHead.prototype, "value", {
          get: function() {
            return {
              headVersion: this.headVersion,
              version: this.version,
              cmd: this.cmd,
              remoteId: this.remoteId,
              processTime: this.processTime
            };
          },
          enumerable: true,
          configurable: true
        });
        ResponseHead.VERSION = 2;
        return ResponseHead;
      }();
      lib.ResponseHead = ResponseHead;
    })(lib || (lib = {}));
    (function(lib) {
      var Request = function(_super) {
        __extends(Request, _super);
        function Request(cmd) {
          void 0 === cmd && (cmd = -1);
          var _this = _super.call(this) || this;
          -1 != cmd && (_this.head = new lib.RequestHead(cmd, lib.Help.getuuid()));
          return _this;
        }
        Request.prototype.setHead = function(head) {
          this.head ? this.head.readFrom(head) : this.head = head;
        };
        Request.prototype.send = function(net) {
          this.head.encode(this);
          this.encode(this);
          net.addRemote(this);
          net.send(this);
          var __ = this;
          return new Promise(function(resolve) {
            __.resolve = resolve;
          }.bind(this));
        };
        Request.prototype.encode = function(bytes) {};
        Request.prototype.decode = function(bytes) {};
        Request.prototype.onReceive = function(head, bytes) {};
        Request.prototype.onBack = function(head) {
          var func = this.resolve;
          this.resolve = null;
          func(head);
        };
        Object.defineProperty(Request.prototype, "remoteId", {
          get: function() {
            return this.head.remoteId;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Request.prototype, "value", {
          get: function() {
            return {
              head: this.head.value
            };
          },
          enumerable: true,
          configurable: true
        });
        return Request;
      }(lib.ByteArray);
      lib.Request = Request;
    })(lib || (lib = {}));
    (function(lib) {
      var Response = function(_super) {
        __extends(Response, _super);
        function Response(cmd, uuid, processTime) {
          void 0 === cmd && (cmd = -1);
          void 0 === uuid && (uuid = "");
          void 0 === processTime && (processTime = 0);
          var _this = _super.call(this) || this;
          -1 != cmd && (_this.head = new lib.ResponseHead(cmd, uuid, processTime));
          return _this;
        }
        Response.prototype.setHead = function(head) {
          this.head ? this.head.readFrom(head) : this.head = head;
        };
        Response.prototype.send = function(net) {
          this.head.encode(this);
          this.encode(this);
          net.send(this);
        };
        Response.prototype.encode = function(bytes) {};
        Response.prototype.decode = function(bytes) {};
        Object.defineProperty(Response.prototype, "value", {
          get: function() {
            return {
              head: this.head.value
            };
          },
          enumerable: true,
          configurable: true
        });
        return Response;
      }(lib.ByteArray);
      lib.Response = Response;
    })(lib || (lib = {}));
    (function(lib) {
      var ZeroResponse = function(_super) {
        __extends(ZeroResponse, _super);
        function ZeroResponse(uuid, processTime, errorCode, requestCmd, message) {
          void 0 === uuid && (uuid = "");
          void 0 === processTime && (processTime = 0);
          void 0 === errorCode && (errorCode = 0);
          void 0 === requestCmd && (requestCmd = 0);
          void 0 === message && (message = "");
          var _this = _super.call(this, 0, uuid, processTime) || this;
          _this.message = "";
          _this.errorCode = errorCode;
          _this.requestCmd = requestCmd;
          _this.message = message;
          return _this;
        }
        ZeroResponse.prototype.encode = function(bytes) {
          bytes.writeInt(this.errorCode);
          bytes.writeUInt(this.requestCmd);
          bytes.writeUTF(this.message);
        };
        ZeroResponse.prototype.decode = function(bytes) {
          this.errorCode = bytes.readInt();
          this.requestCmd = bytes.readUInt();
          this.message = bytes.readUTF();
        };
        Object.defineProperty(ZeroResponse.prototype, "value", {
          get: function() {
            return {
              head: this.head.value,
              errorCode: this.errorCode,
              requestCmd: this.requestCmd,
              message: this.message
            };
          },
          enumerable: true,
          configurable: true
        });
        return ZeroResponse;
      }(lib.Response);
      lib.ZeroResponse = ZeroResponse;
    })(lib || (lib = {}));
    (function(lib) {
      var SocketBase = function() {
        function SocketBase() {
          this.remotes = {};
          this.backs = {};
          this.zbacks = {};
          this.isClient = false;
          this.awaitCloseFunctions = [];
          this.awaitConnectFunctions = [];
        }
        SocketBase.prototype.addRemote = function(remote) {
          this.remotes[remote.remoteId] = remote;
        };
        SocketBase.prototype.onReceive = function(message) {};
        SocketBase.prototype.add = function(cmd, back, thisObj) {
          null == this.backs[cmd] && (this.backs[cmd] = []);
          this.backs[cmd].push({
            func: back,
            thisObj: thisObj,
            id: SocketBase.id++
          });
        };
        SocketBase.prototype.addOnce = function(cmd, back, thisObj) {
          null == this.backs[cmd] && (this.backs[cmd] = []);
          this.backs[cmd].push({
            func: back,
            thisObj: thisObj,
            once: true,
            id: SocketBase.id++
          });
        };
        SocketBase.prototype.remove = function(cmd, back, thisObj) {
          var list = this.backs[cmd];
          if (list) for (var i = 0; i < list.length; i++) if (list[i].func == back && list[i].thisObj == thisObj) {
            list.splice(i, 1);
            i--;
          }
        };
        SocketBase.prototype.addZero = function(cmd, back, thisObj) {
          null == this.zbacks[cmd] && (this.zbacks[cmd] = []);
          this.zbacks[cmd].push({
            func: back,
            thisObj: thisObj,
            id: SocketBase.id++
          });
        };
        SocketBase.prototype.removeZero = function(cmd, back, thisObj) {
          var list = this.zbacks[cmd];
          if (list) for (var i = 0; i < list.length; i++) if (list[i].func == back && list[i].thisObj == thisObj) {
            list.splice(i, 1);
            i--;
          }
        };
        SocketBase.prototype.addZeroOnce = function(cmd, back, thisObj) {
          null == this.zbacks[cmd] && (this.zbacks[cmd] = []);
          this.zbacks[cmd].push({
            func: back,
            thisObj: thisObj,
            once: true,
            id: SocketBase.id++
          });
        };
        SocketBase.prototype.dispatchMessage = function(bytes) {
          var pos;
          var head = SocketBase.readHead(bytes);
          var buffers = lib.SocketBuffer.getMessage(head.remoteId);
          if (head.isRequest && buffers) {
            for (var i_2 = 0; i_2 < buffers.length; i_2++) {
              var bhead = SocketBase.readHead(buffers[i_2]);
              this.send(buffers[i_2]);
            }
            lib.SocketBuffer.removeMessage(head.remoteId);
            return;
          }
          var cmd = head.cmd;
          var removeList;
          var a;
          var i;
          var f;
          var backList;
          var remoteId = head.remoteId;
          if ("" != remoteId && this.remotes[remoteId]) {
            var remote = this.remotes[remoteId];
            if (0 == cmd) {
              var zp = new lib.ZeroResponse();
              zp.head = head;
              zp.decode(bytes);
              remote.onBack(zp);
              delete this.remotes[remoteId];
            } else remote.onReceive(head, bytes);
          } else if (0 == cmd) {
            var zp = new lib.ZeroResponse();
            zp.head = head;
            zp.decode(bytes);
            var backCmd = zp.requestCmd;
            var zbackList = this.zbacks[backCmd];
            if (zbackList) {
              removeList = [];
              a = zbackList.concat();
              for (i = 0; i < a.length; i++) {
                a[i].func.call(a[i].thisObj, zp);
                a[i].once && removeList.push(a[i].id);
              }
              for (i = 0; i < removeList.length; i++) for (f = 0; f < this.zbacks[backCmd].length; f++) if (this.zbacks[backCmd][f].id == removeList[i]) {
                this.zbacks[backCmd].splice(f, 1);
                break;
              }
            }
            backList = this.backs[cmd];
            if (backList) {
              removeList = [];
              a = backList.concat();
              for (i = 0; i < a.length; i++) {
                bytes.position = pos;
                a[i].func.call(a[i].thisObj, head, bytes);
                a[i].once && removeList.push(a[i].id);
              }
              for (i = 0; i < removeList.length; i++) for (f = 0; f < this.backs[cmd].length; f++) if (this.backs[cmd][f].id == removeList[i]) {
                this.backs[cmd].splice(f, 1);
                break;
              }
            }
          } else {
            pos = bytes.position;
            backList = this.backs[cmd];
            if (backList) {
              removeList = [];
              a = backList.concat();
              for (i = 0; i < a.length; i++) {
                bytes.position = pos;
                a[i].func.call(a[i].thisObj, head, bytes);
                a[i].once && removeList.push(a[i].id);
              }
              for (i = 0; i < removeList.length; i++) for (f = 0; f < this.backs[cmd].length; f++) if (this.backs[cmd][f].id == removeList[i]) {
                this.backs[cmd].splice(f, 1);
                break;
              }
            }
          }
        };
        SocketBase.prototype.send = function(bytes) {};
        SocketBase.prototype.awaitClose = function() {
          var __ = this;
          return new Promise(function(resolve) {
            __.awaitCloseFunctions.push(resolve);
          });
        };
        SocketBase.prototype.onAwaitClose = function(code) {
          for (var key in this.remotes) this.remotes[key].onBack(new lib.ZeroResponse("", 0, lib.Error.$SOCKET_CLOSED, 0));
          this.remotes = {};
          if (this.awaitCloseFunctions) {
            var funcs = this.awaitCloseFunctions.concat();
            this.awaitCloseFunctions = [];
            while (funcs.length) funcs.shift()(code);
          }
        };
        SocketBase.prototype.awaitConnect = function() {
          var __ = this;
          return new Promise(function(resolve) {
            __.awaitConnectFunctions.push(resolve);
          });
        };
        SocketBase.prototype.connectComplete = function() {
          if (this.awaitConnectFunctions) {
            var funcs = this.awaitConnectFunctions.concat();
            while (funcs.length) {
              var func = funcs.shift();
              func();
            }
          }
        };
        SocketBase.prototype.close = function() {};
        Object.defineProperty(SocketBase.prototype, "isConnect", {
          get: function() {
            return false;
          },
          enumerable: true,
          configurable: true
        });
        SocketBase.readHead = function(bytes) {
          bytes.position = 0;
          var headVersion = bytes.readUInt();
          var head;
          if (headVersion % 2) {
            head = new lib.RequestHead();
            head.headVersion = headVersion;
            head.decode(bytes);
          } else {
            head = new lib.ResponseHead();
            head.headVersion = headVersion;
            head.decode(bytes);
          }
          return head;
        };
        SocketBase.id = 1;
        return SocketBase;
      }();
      lib.SocketBase = SocketBase;
    })(lib || (lib = {}));
    (function(lib) {
      var SocketBuffer = function() {
        function SocketBuffer() {}
        SocketBuffer.addMessage = function(remoteId, bytes) {
          SocketBuffer.buffers[remoteId] || (SocketBuffer.buffers[remoteId] = []);
          SocketBuffer.buffers[remoteId].push(bytes);
        };
        SocketBuffer.getMessage = function(remoteId) {
          return SocketBuffer.buffers[remoteId];
        };
        SocketBuffer.removeMessage = function(remoteId) {
          delete SocketBuffer.buffers[remoteId];
        };
        SocketBuffer.buffers = [];
        return SocketBuffer;
      }();
      lib.SocketBuffer = SocketBuffer;
    })(lib || (lib = {}));
    (function(lib) {
      var URLLoader = function() {
        function URLLoader(res) {
          this._createRes = false;
          this._isLoading = false;
          this._selfDispose = false;
          this.$setResource(res);
          this._language = "cn";
          this._scale = null;
        }
        URLLoader.prototype.$setResource = function(res) {
          if ("string" == typeof res) {
            var resItem = lib.Res.getRes(res);
            if (resItem) res = resItem; else {
              this._createRes = true;
              res = lib.ResItem.create(res);
            }
          }
          this._res = res;
          this._type = this._res.type;
        };
        Object.defineProperty(URLLoader.prototype, "url", {
          get: function() {
            return this._res ? this._res.url : "";
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URLLoader.prototype, "loadURL", {
          get: function() {
            return this._loadInfo ? this._loadInfo.url : "";
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URLLoader.prototype, "type", {
          get: function() {
            return this._res ? this._res.type : "";
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URLLoader.prototype, "language", {
          set: function(val) {
            this._language = val;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URLLoader.prototype, "scale", {
          set: function(val) {},
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URLLoader.prototype, "method", {
          get: function() {
            return this._method;
          },
          set: function(val) {
            this._method = val;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URLLoader.prototype, "params", {
          get: function() {
            return this._params;
          },
          set: function(val) {
            this._params = val;
          },
          enumerable: true,
          configurable: true
        });
        URLLoader.prototype.$addLink = function(loader) {
          this._links || (this._links = []);
          this._links.push(loader);
        };
        URLLoader.prototype.load = function(res) {
          res && this.$setResource(res);
          if (this._isLoading) return;
          this._loadInfo = this._res.getLoadInfo(this._language, this._scale);
          this._isLoading = true;
          if (this.type != lib.ResType.TEXT) for (var i = 0; i < URLLoader.list.length; i++) if (URLLoader.list[i].loadURL == this.loadURL && URLLoader.list[i].type == this.type) {
            this._linkLoader = URLLoader.list[i];
            break;
          }
          if (this._linkLoader) {
            this._linkLoader.$addLink(this);
            return;
          }
          URLLoader.list.push(this);
          this.type == lib.ResType.IMAGE || this.type == lib.ResType.PLIST || this.loadText();
          return new Promise(this.asyncFunction.bind(this));
        };
        URLLoader.prototype.asyncFunction = function(resolve, reject) {
          this.resolve = resolve;
          this.reject = reject;
        };
        URLLoader.prototype.__concatURLHead = function(head, url) {
          if ("http://" == url.slice(0, 7)) return url;
          return head + url;
        };
        URLLoader.prototype.onLoadTexturePlistComplete = function(e) {
          var plist = e.data;
          this._data = plist.getFrameTexture(this.url);
          this._data.$addCount();
          this.loadComplete();
        };
        URLLoader.prototype.loadTextureSplitComplete = function(e) {
          this._data.$setSplitInfo(e.data);
          this.loadComplete();
        };
        URLLoader.prototype.setTextureByLink = function(texture) {
          texture.$addCount();
          this._data = texture;
          this.loadComplete();
        };
        URLLoader.prototype.setPlistByLink = function(plist) {
          this._data = plist;
          this.loadComplete();
        };
        URLLoader.prototype.loadText = function() {
          var params = {};
          params.r = lib.math.random();
          for (var key in this._params) params[key] = this._params[key];
          lib.PlatformURLLoader.loadText(this.__concatURLHead(URLLoader.urlHead, this._loadInfo.url), this.loadTextComplete, this.loadError, this, this._method, params);
        };
        URLLoader.prototype.loadTextComplete = function(content) {
          this._type == lib.ResType.TEXT ? this._data = content : this._type == lib.ResType.JSON && (this._data = JSON.parse(content));
          new lib.CallLater(this.loadComplete, this);
        };
        URLLoader.prototype.setTextByLink = function(content) {
          this._type == lib.ResType.TEXT ? this._data = content : this._type == lib.ResType.JSON && (this._data = JSON.parse(content));
          this.loadComplete();
        };
        URLLoader.prototype.setJsonByLink = function(content) {
          this._data = content;
          this.loadComplete();
        };
        URLLoader.prototype.loadComplete = function() {
          if (this._links) for (var i = 0; i < this._links.length; i++) this._type == lib.ResType.IMAGE ? this._links[i].setTextureByLink(this._data) : this._type == lib.ResType.TEXT ? this._links[i].setTextByLink(this._data) : this._type == lib.ResType.JSON ? this._links[i].setJsonByLink(this._data) : this._type == lib.ResType.PLIST && this._links[i].setPlistByLink(this._data);
          this._links = null;
          this._isLoading = false;
          if (null == this._res || null == this._data) {
            this._selfDispose = true;
            this.dispose();
            this._selfDispose = false;
            return;
          }
          for (var i = 0; i < URLLoader.list.length; i++) if (URLLoader.list[i] == this) {
            URLLoader.list.splice(i, 1);
            break;
          }
          if (this.isDispose) {
            if (this._data && this._type == lib.ResType.IMAGE) {
              this._recordUse && (this._data.$use = true);
              this._data.$delCount();
              this._data = null;
            }
            return;
          }
          this.resolve && this.resolve(new lib.URLLoaderResult(0, this._data));
          this._selfDispose = true;
          this.dispose();
          this._selfDispose = false;
        };
        URLLoader.prototype.loadError = function(e) {
          this.resolve && this.resolve(new lib.URLLoaderResult(-1));
          if (this._links) for (var i = 0; i < this._links.length; i++) this._links[i].loadError();
          this.dispose();
        };
        URLLoader.prototype.$useImage = function() {
          if (!this._data) {
            this._recordUse = true;
            return;
          }
          this._data.$use = true;
        };
        URLLoader.prototype.dispose = function() {
          if (!this._selfDispose) return;
          if (this._data && this._type == lib.ResType.IMAGE) {
            this._data.$delCount();
            this._data = null;
          }
          this._createRes && this._res && lib.ResItem.release(this._res);
          this._res = null;
          this._data = null;
          for (var i = 0; i < URLLoader.list.length; i++) if (URLLoader.list[i] == this) {
            URLLoader.list.splice(i, 1);
            break;
          }
        };
        URLLoader.clear = function() {
          while (URLLoader.list.length) {
            var loader = URLLoader.list.pop();
            loader.dispose();
          }
        };
        URLLoader.urlHead = "";
        URLLoader.list = [];
        return URLLoader;
      }();
      lib.URLLoader = URLLoader;
    })(lib || (lib = {}));
    (function(lib) {
      var URLLoaderResult = function() {
        function URLLoaderResult(result, data) {
          void 0 === data && (data = null);
          this.result = result;
          this.data = data;
        }
        return URLLoaderResult;
      }();
      lib.URLLoaderResult = URLLoaderResult;
    })(lib || (lib = {}));
    (function(lib) {
      var URLLoaderList = function(_super) {
        __extends(URLLoaderList, _super);
        function URLLoaderList(list) {
          var _this = _super.call(this) || this;
          _this.__list = list;
          _this.__dataList = [];
          _this.__index = 0;
          return _this;
        }
        Object.defineProperty(URLLoaderList.prototype, "language", {
          set: function(val) {
            this.__language = val;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(URLLoaderList.prototype, "scale", {
          set: function(val) {
            this.__scale = val;
          },
          enumerable: true,
          configurable: true
        });
        URLLoaderList.prototype.load = function() {
          this.__loadNext();
        };
        URLLoaderList.prototype.__loadNext = function() {
          if (this.__index >= this.__list.length) {
            this.dispatchWith(lib.Event.COMPLETE, this.__dataList);
            this.__list = null;
            this.__dataList = null;
            this.dispose();
            return;
          }
          var item = this.__list[this.__index];
          var load = new lib.URLLoader(item);
          null != this.__language && (load.language = this.__language);
          null != this.__scale && (load.scale = this.__scale);
          load.addListener(lib.Event.COMPLETE, this.__onComplete, this);
          load.addListener(lib.Event.ERROR, this.__onError, this);
          load.load();
        };
        URLLoaderList.prototype.__onError = function(e) {
          this.hasListener(lib.Event.ERROR) ? this.dispatch(e) : lib.$error(e.message);
        };
        URLLoaderList.prototype.__onComplete = function(e) {
          this.__dataList[this.__index] = e.data;
          this.__index++;
          this.__loadNext();
        };
        return URLLoaderList;
      }(lib.EventDispatcher);
      lib.URLLoaderList = URLLoaderList;
    })(lib || (lib = {}));
    (function(lib) {
      var URLLoaderMethod = function() {
        function URLLoaderMethod() {}
        URLLoaderMethod.GET = "GET";
        URLLoaderMethod.POST = "POST";
        URLLoaderMethod.HEAD = "HEAD";
        return URLLoaderMethod;
      }();
      lib.URLLoaderMethod = URLLoaderMethod;
    })(lib || (lib = {}));
    (function(lib) {
      var WebSocketClient = function(_super) {
        __extends(WebSocketClient, _super);
        function WebSocketClient(type) {
          void 0 === type && (type = "binary");
          var _this = _super.call(this) || this;
          _this._isConnect = false;
          _this._isClosed = true;
          _this.autoLinkServer = true;
          _this.connectSleep = 100;
          _this.isClient = true;
          _this._type = type;
          _this._autoLink();
          return _this;
        }
        WebSocketClient.prototype._autoLink = function() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                if (!this.autoLinkServer) return [ 3, 3 ];
                return [ 4, this.awaitConnect() ];

               case 1:
                _a.sent();
                return [ 4, this.awaitClose() ];

               case 2:
                _a.sent();
                this.autoLinkServer && this.connect(this.serverIp, this.serverPort);
                return [ 3, 0 ];

               case 3:
                return [ 2 ];
              }
            });
          });
        };
        Object.defineProperty(WebSocketClient.prototype, "type", {
          get: function() {
            return this._type;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(WebSocketClient.prototype, "isConnect", {
          get: function() {
            return this._isConnect;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(WebSocketClient.prototype, "isClosed", {
          get: function() {
            return this._isClosed;
          },
          enumerable: true,
          configurable: true
        });
        WebSocketClient.prototype.connect = function(ip, port, path) {
          void 0 === path && (path = "");
          this.serverIp = ip;
          this.serverPort = port;
          this.client = new lib.PlatformWebSocket();
          this.client.bindWebSocket(ip, port, path, this, this.onConnect, this.onReceive, this.onError, this.onClose);
          this._isConnect = false;
          this._isClosed = true;
        };
        WebSocketClient.prototype.awaitConnect = function(ip, port) {
          void 0 === ip && (ip = "");
          void 0 === port && (port = 0);
          port && this.connect(ip, port);
          return _super.prototype.awaitConnect.call(this);
        };
        WebSocketClient.prototype.onConnect = function() {
          this._isConnect = true;
          this._isClosed = false;
          this.connectComplete();
        };
        WebSocketClient.prototype.onConnectError = function(e) {
          var __ = this;
          setTimeout(function() {
            __.connect(__.serverIp, __.serverPort);
          }, this.connectSleep);
        };
        WebSocketClient.prototype.onError = function(e) {};
        WebSocketClient.prototype.onClose = function(code, desc) {
          void 0 === desc && (desc = "");
          this._isConnect = false;
          this._isClosed = true;
          this.onAwaitClose(code);
        };
        WebSocketClient.prototype.onReceive = function(message) {
          var data;
          "utf8" == this.type ? data = JSON.parse(message.utf8Data) : "binary" == this.type && (data = message.binaryData);
          var bytes = new lib.ByteArray();
          bytes.writeArray(data);
          this.dispatchMessage(bytes);
        };
        WebSocketClient.prototype.send = function(data) {
          if (!this._isConnect) {
            console.log("send fail, please check the net state 'isConnect'!");
            return;
          }
          data instanceof lib.ByteArray ? this.client.sendWebSocketBytes(data.arrayData) : this.client.sendWebSocketBytes(data);
        };
        WebSocketClient.prototype.close = function() {
          if (this.client && !this._isClosed) {
            this.client.releaseWebSocket();
            this.onClose(0);
          }
        };
        return WebSocketClient;
      }(lib.SocketBase);
      lib.WebSocketClient = WebSocketClient;
    })(lib || (lib = {}));
    (function(lib) {
      var ConnectResult = function() {
        function ConnectResult(result) {
          this.result = result;
        }
        ConnectResult.SUCCESS = 0;
        ConnectResult.FAIL = -1;
        return ConnectResult;
      }();
      lib.ConnectResult = ConnectResult;
    })(lib || (lib = {}));
    (function(lib) {
      var Res = function() {
        function Res() {}
        Res.getRes = function(url) {
          var list = Res.__resItems;
          for (var i = 0, len = list.length; i < len; i++) if (list[i].url == url) return list[i];
          return null;
        };
        Res.addRes = function(res) {
          var list = Res.__resItems;
          for (var i = 0, len = list.length; i < len; i++) if (list[i].url == res.url) {
            list.splice(i, 1);
            break;
          }
          list.push(res);
        };
        Res.__resItems = [];
        return Res;
      }();
      lib.Res = Res;
    })(lib || (lib = {}));
    (function(lib) {
      var ResItem = function() {
        function ResItem(url, type) {
          this.__loadList = [];
          this.__url = url;
          this.__type = type || lib.ResType.getURLType(url);
        }
        ResItem.prototype.addURL = function(url) {
          var info = lib.ResItemInfo.create();
          var plist = null;
          var splitURL = null;
          var array = url.split("#PLIST#");
          if (2 == array.length) {
            url = array[0];
            plist = array[1];
          }
          array = url.split("#SPLIT#");
          if (2 == array.length) {
            url = array[0];
            splitURL = array[1];
          }
          if (plist && !splitURL) {
            array = plist.split("#SPLIT#");
            if (2 == array.length) {
              plist = array[0];
              splitURL = array[1];
            }
          }
          array = url.split("/");
          var last = array.pop();
          var nameArray = last.split(".");
          var name = "";
          var end = "";
          if (1 == nameArray.length) name = nameArray[0]; else {
            end = nameArray[nameArray.length - 1];
            name = last.slice(0, last.length - end.length - 1);
          }
          nameArray = name.split("@");
          var settingWidth;
          var settingHeight;
          var scale;
          var language;
          for (var i = 1; i < nameArray.length; i++) {
            var content = nameArray[i];
            var code = content.charCodeAt(0);
            if (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0) || code == ".".charCodeAt(0)) {
              var nums = content.split("x");
              if (1 == nums.length) scale = parseFloat(content); else if (2 == nums.length) {
                settingWidth = parseInt(nums[0]);
                settingHeight = parseInt(nums[1]);
              }
            } else language = content;
          }
          info.url = url;
          info.plist = plist;
          info.settingWidth = settingWidth;
          info.settingHeight = settingHeight;
          info.scale = scale || 1;
          info.language = language;
          info.update = false;
          info.splitURL = splitURL;
          this.__loadList.push(info);
        };
        ResItem.prototype.addInfo = function(url, plist, settingWidth, settingHeight, scale, language, update, splitURL) {
          void 0 === update && (update = false);
          void 0 === splitURL && (splitURL = null);
          var info = lib.ResItemInfo.create();
          info.url = url;
          info.plist = plist;
          info.settingWidth = settingWidth;
          info.settingHeight = settingHeight;
          info.scale = scale || 1;
          info.language = language;
          info.update = update;
          info.splitURL = splitURL;
          this.__loadList.push(info);
          return info;
        };
        ResItem.prototype.getLoadInfo = function(language, scale) {
          var loadList = this.__loadList;
          if (1 == loadList.length) return loadList[0];
          var info;
          for (var i = 0; i < loadList.length; i++) {
            if (language && language != loadList[i].language) continue;
            info ? null != scale && null != loadList[i].scale && lib.math.abs(loadList[i].scale - scale) < lib.math.abs(info.scale - scale) && (info = loadList[i]) : info = loadList[i];
          }
          info || (info = loadList[0]);
          return info;
        };
        Object.defineProperty(ResItem.prototype, "type", {
          get: function() {
            return this.__type;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ResItem.prototype, "url", {
          get: function() {
            return this.__url;
          },
          enumerable: true,
          configurable: true
        });
        ResItem.create = function(url) {
          var plist = null;
          var splitURL = null;
          var array = url.split("#PLIST#");
          if (2 == array.length) {
            url = array[0];
            plist = array[1];
          }
          array = url.split("#SPLIT#");
          if (2 == array.length) {
            url = array[0];
            splitURL = array[1];
          }
          if (plist && !splitURL) {
            array = plist.split("#SPLIT#");
            if (2 == array.length) {
              plist = array[0];
              splitURL = array[1];
            }
          }
          array = url.split("/");
          var last = array.pop();
          var nameArray = last.split(".");
          var name = "";
          var end = "";
          if (1 == nameArray.length) name = nameArray[0]; else {
            end = nameArray[nameArray.length - 1];
            name = last.slice(0, last.length - end.length - 1);
          }
          nameArray = name.split("@");
          var settingWidth;
          var settingHeight;
          var scale;
          var language;
          for (var i = 1; i < nameArray.length; i++) {
            var content = nameArray[i];
            var code = content.charCodeAt(0);
            if (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0) || code == ".".charCodeAt(0)) {
              var nums = content.split("x");
              if (1 == nums.length) scale = parseFloat(content); else if (2 == nums.length) {
                settingWidth = parseInt(nums[0]);
                settingHeight = parseInt(nums[1]);
              }
            } else language = content;
          }
          var useURL = "";
          for (var i = 0; i < array.length; i++) useURL += array[i] + "/";
          useURL += nameArray[0] + ("" != end ? "." + end : "");
          var res;
          if (ResItem.$pools.length) {
            res = ResItem.$pools.pop();
            res.__url = useURL;
            res.__type = lib.ResType.getType(end);
            res.__loadList.length = 0;
          } else res = new ResItem(useURL, lib.ResType.getType(end));
          res.addInfo(url, plist, settingWidth, settingHeight, scale, language, false, splitURL);
          return res;
        };
        ResItem.release = function(item) {
          while (item.__loadList.length) lib.ResItemInfo.release(item.__loadList.pop());
          ResItem.$pools.push(item);
        };
        ResItem.$pools = [];
        return ResItem;
      }();
      lib.ResItem = ResItem;
    })(lib || (lib = {}));
    (function(lib) {
      var ResItemInfo = function() {
        function ResItemInfo() {
          this.update = false;
        }
        ResItemInfo.create = function() {
          return ResItemInfo.$pools.length ? ResItemInfo.$pools.pop() : new ResItemInfo();
        };
        ResItemInfo.release = function(info) {
          info.update = false;
          ResItemInfo.$pools.push(info);
        };
        ResItemInfo.$pools = [];
        return ResItemInfo;
      }();
      lib.ResItemInfo = ResItemInfo;
    })(lib || (lib = {}));
    (function(lib) {
      var ResType = function() {
        function ResType() {}
        ResType.getURLType = function(url) {
          if (1 == url.split(".").length) return ResType.TEXT;
          var end = url.split(".")[url.split(".").length - 1];
          return ResType.getType(end);
        };
        ResType.getType = function(end) {
          if ("json" == end) return ResType.JSON;
          if ("png" == end || "jpg" == end || "PNG" == end || "JPG" == end) return ResType.IMAGE;
          if ("plist" == end) return ResType.PLIST;
          return ResType.TEXT;
        };
        ResType.TEXT = 1;
        ResType.JSON = 2;
        ResType.IMAGE = 3;
        ResType.PLIST = 4;
        return ResType;
      }();
      lib.ResType = ResType;
    })(lib || (lib = {}));
    (function(lib) {
      var Matrix = function() {
        function Matrix() {
          this.a = 1;
          this.b = 0;
          this.c = 0;
          this.d = 1;
          this.tx = 0;
          this.ty = 0;
          this._storeList = [];
        }
        Matrix.prototype.identity = function() {
          this.a = 1;
          this.b = 0;
          this.c = 0;
          this.d = 1;
          this.tx = 0;
          this.ty = 0;
        };
        Matrix.prototype.setTo = function(a, b, c, d, tx, ty) {
          this.a = a;
          this.b = b;
          this.c = c;
          this.d = d;
          this.tx = tx;
          this.ty = ty;
        };
        Matrix.prototype.translate = function(x, y) {
          this.tx += x;
          this.ty += y;
        };
        Matrix.prototype.rotate = function(angle) {
          var sin = lib.math.sin(angle);
          var cos = lib.math.cos(angle);
          this.setTo(this.a * cos - this.c * sin, this.a * sin + this.c * cos, this.b * cos - this.d * sin, this.b * sin + this.d * cos, this.tx * cos - this.ty * sin, this.tx * sin + this.ty * cos);
        };
        Matrix.prototype.scale = function(scaleX, scaleY) {
          this.a *= scaleX;
          this.d *= scaleY;
          this.tx *= scaleX;
          this.ty *= scaleY;
        };
        Matrix.prototype.transformPoint = function(pointX, pointY, resultPoint) {
          var x = this.a * pointX + this.c * pointY + this.tx;
          var y = this.b * pointX + this.d * pointY + this.ty;
          if (resultPoint) {
            resultPoint.setTo(x, y);
            return resultPoint;
          }
          return new lib.Point(x, y);
        };
        Matrix.prototype.$updateSR = function(scaleX, scaleY, rotation) {
          var sin = 0;
          var cos = 1;
          if (rotation) {
            sin = lib.math.sin(rotation);
            cos = lib.math.cos(rotation);
          }
          this.a = cos * scaleX;
          this.b = sin * scaleY;
          this.c = -sin * scaleX;
          this.d = cos * scaleY;
        };
        Matrix.prototype.$updateRST = function(rotation, scaleX, scaleY, tx, ty) {
          var sin = 0;
          var cos = 1;
          if (rotation) {
            sin = lib.math.sin(rotation);
            cos = lib.math.cos(rotation);
          }
          this.a = cos * scaleX;
          this.b = sin * scaleX;
          this.c = -sin * scaleY;
          this.d = cos * scaleY;
          this.tx = cos * scaleX * tx - sin * scaleY * ty;
          this.ty = sin * scaleX * tx + cos * scaleY * ty;
        };
        Matrix.prototype.$transformRectangle = function(rect) {
          var a = this.a;
          var b = this.b;
          var c = this.c;
          var d = this.d;
          var tx = this.tx;
          var ty = this.ty;
          var x = rect.x;
          var y = rect.y;
          var xMax = x + rect.width;
          var yMax = y + rect.height;
          var x0 = a * x + c * y + tx;
          var y0 = b * x + d * y + ty;
          var x1 = a * xMax + c * y + tx;
          var y1 = b * xMax + d * y + ty;
          var x2 = a * xMax + c * yMax + tx;
          var y2 = b * xMax + d * yMax + ty;
          var x3 = a * x + c * yMax + tx;
          var y3 = b * x + d * yMax + ty;
          var tmp = 0;
          if (x0 > x1) {
            tmp = x0;
            x0 = x1;
            x1 = tmp;
          }
          if (x2 > x3) {
            tmp = x2;
            x2 = x3;
            x3 = tmp;
          }
          rect.x = lib.math.floor(x0 < x2 ? x0 : x2);
          rect.width = lib.math.ceil((x1 > x3 ? x1 : x3) - rect.x);
          if (y0 > y1) {
            tmp = y0;
            y0 = y1;
            y1 = tmp;
          }
          if (y2 > y3) {
            tmp = y2;
            y2 = y3;
            y3 = tmp;
          }
          rect.y = lib.math.floor(y0 < y2 ? y0 : y2);
          rect.height = lib.math.ceil((y1 > y3 ? y1 : y3) - rect.y);
        };
        Object.defineProperty(Matrix.prototype, "deformation", {
          get: function() {
            if (1 != this.a || 0 != this.b || 0 != this.c || 1 != this.d) return true;
            return false;
          },
          enumerable: true,
          configurable: true
        });
        Matrix.prototype.save = function() {
          var matrix = Matrix.create();
          matrix.a = this.a;
          matrix.b = this.b;
          matrix.c = this.c;
          matrix.d = this.d;
          matrix.tx = this.tx;
          matrix.ty = this.ty;
          this._storeList.push(matrix);
        };
        Matrix.prototype.restore = function() {
          var matrix = this._storeList.pop();
          this.setTo(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
          Matrix.release(matrix);
        };
        Matrix.release = function(matrix) {
          if (!matrix) return;
          matrix._storeList.length = 0;
          Matrix.matrixPool.push(matrix);
        };
        Matrix.create = function() {
          var matrix = Matrix.matrixPool.pop();
          matrix || (matrix = new Matrix());
          return matrix;
        };
        Matrix.$matrix = new Matrix();
        Matrix.matrixPool = [];
        return Matrix;
      }();
      lib.Matrix = Matrix;
    })(lib || (lib = {}));
    (function(lib) {
      var Point = function() {
        function Point(x, y) {
          this.x = +x || 0;
          this.y = +y || 0;
        }
        Point.prototype.setTo = function(x, y) {
          this.x = x;
          this.y = y;
          return this;
        };
        Object.defineProperty(Point.prototype, "length", {
          get: function() {
            return lib.math.sqrt(this.x * this.x + this.y * this.y);
          },
          enumerable: true,
          configurable: true
        });
        Point.distance = function(p1, p2) {
          return lib.math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
        };
        Point.release = function(point) {
          if (!point) return;
          Point.pointPool.push(point);
        };
        Point.create = function(x, y) {
          var point = Point.pointPool.pop();
          if (point) {
            point.x = +x || 0;
            point.y = +y || 0;
          } else point = new Point(x, y);
          return point;
        };
        Point.$TempPoint = new Point();
        Point.pointPool = [];
        return Point;
      }();
      lib.Point = Point;
    })(lib || (lib = {}));
    (function(lib) {
      var Rectangle = function() {
        function Rectangle(x, y, width, height) {
          this.x = +x || 0;
          this.y = +y || 0;
          this.width = +width || 0;
          this.height = +height || 0;
        }
        Object.defineProperty(Rectangle.prototype, "right", {
          get: function() {
            return this.x + this.width;
          },
          set: function(value) {
            this.width = value - this.x;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "bottom", {
          get: function() {
            return this.y + this.height;
          },
          set: function(value) {
            this.height = value - this.y;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "left", {
          get: function() {
            return this.x;
          },
          set: function(value) {
            this.width += this.x - value;
            this.x = value;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Rectangle.prototype, "top", {
          get: function() {
            return this.y;
          },
          set: function(value) {
            this.height += this.y - value;
            this.y = value;
          },
          enumerable: true,
          configurable: true
        });
        Rectangle.prototype.copyFrom = function(sourceRect) {
          this.x = sourceRect.x;
          this.y = sourceRect.y;
          this.width = sourceRect.width;
          this.height = sourceRect.height;
          return this;
        };
        Rectangle.prototype.setTo = function(x, y, width, height) {
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
          return this;
        };
        Rectangle.prototype.contains = function(x, y) {
          return this.x <= x && this.x + this.width >= x && this.y <= y && this.y + this.height >= y;
        };
        Rectangle.prototype.intersection = function(toIntersect) {
          return this.clone().$intersectInPlace(toIntersect);
        };
        Rectangle.prototype.$intersectInPlace = function(clipRect) {
          var x0 = this.x;
          var y0 = this.y;
          var x1 = clipRect.x;
          var y1 = clipRect.y;
          var l = lib.math.max(x0, x1);
          var r = lib.math.min(x0 + this.width, x1 + clipRect.width);
          if (l <= r) {
            var t = lib.math.max(y0, y1);
            var b = lib.math.min(y0 + this.height, y1 + clipRect.height);
            if (t <= b) {
              this.setTo(l, t, r - l, b - t);
              return this;
            }
          }
          this.setEmpty();
          return this;
        };
        Rectangle.prototype.intersects = function(toIntersect) {
          return lib.math.max(this.x, toIntersect.x) <= lib.math.min(this.right, toIntersect.right) && lib.math.max(this.y, toIntersect.y) <= lib.math.min(this.bottom, toIntersect.bottom);
        };
        Rectangle.prototype.isEmpty = function() {
          return this.width <= 0 || this.height <= 0;
        };
        Rectangle.prototype.setEmpty = function() {
          this.x = 0;
          this.y = 0;
          this.width = 0;
          this.height = 0;
        };
        Rectangle.prototype.clone = function() {
          return new Rectangle(this.x, this.y, this.width, this.height);
        };
        Rectangle.prototype._getBaseWidth = function(angle) {
          var u = lib.math.abs(lib.math.cos(angle));
          var v = lib.math.abs(lib.math.sin(angle));
          return u * this.width + v * this.height;
        };
        Rectangle.prototype._getBaseHeight = function(angle) {
          var u = lib.math.abs(lib.math.cos(angle));
          var v = lib.math.abs(lib.math.sin(angle));
          return v * this.width + u * this.height;
        };
        Rectangle.release = function(rect) {
          if (!rect) return;
          Rectangle.rectanglePool.push(rect);
        };
        Rectangle.create = function(x, y, width, height) {
          var rect = Rectangle.rectanglePool.pop();
          if (rect) {
            rect.x = +x || 0;
            rect.y = +y || 0;
            rect.width = +width || 0;
            rect.height = +height || 0;
          } else rect = new Rectangle(x, y, width, height);
          return rect;
        };
        Rectangle.rectanglePool = [];
        Rectangle.$TempRectangle = new Rectangle();
        return Rectangle;
      }();
      lib.Rectangle = Rectangle;
    })(lib || (lib = {}));
    (function(lib) {
      var Size = function() {
        function Size(width, height) {
          this.width = +width || 0;
          this.height = +height || 0;
        }
        Size.prototype.setTo = function(width, height) {
          this.width = width;
          this.height = height;
          return this;
        };
        Object.defineProperty(Size.prototype, "area", {
          get: function() {
            return this.width * this.height;
          },
          enumerable: true,
          configurable: true
        });
        Size.release = function(size) {
          if (!size) return;
          Size.sizePool.push(size);
        };
        Size.create = function(width, height) {
          var size = Size.sizePool.pop();
          if (size) {
            size.width = +width || 0;
            size.height = +height || 0;
          } else size = new Size(width, height);
          return size;
        };
        Size.$TempSize = new Size();
        Size.sizePool = [];
        return Size;
      }();
      lib.Size = Size;
    })(lib || (lib = {}));
    (function(lib) {
      var BasicPlugin = function() {
        function BasicPlugin() {}
        BasicPlugin.prototype.init = function(tween, propertiesTo, propertiesFrom) {
          this.tween = tween;
          this._attributes = propertiesTo;
          this.keys = lib.ObjectDo.keys(propertiesTo);
          var target = tween.target;
          var startAttributes = {};
          var keys = this.keys;
          var length = keys.length;
          for (var i = 0; i < length; i++) {
            var key = keys[i];
            startAttributes[key] = propertiesFrom && key in propertiesFrom ? propertiesFrom[key] : target[key];
          }
          this.startAttributes = startAttributes;
          return null;
        };
        BasicPlugin.prototype.update = function(value) {
          var target = this.tween.target;
          var keys = this.keys;
          var length = keys.length;
          var startAttributes = this.startAttributes;
          for (var i = 0; i < length; i++) {
            var key = keys[i];
            target[key] = (this._attributes[key] - startAttributes[key]) * value + startAttributes[key];
          }
        };
        return BasicPlugin;
      }();
      lib.BasicPlugin = BasicPlugin;
    })(lib || (lib = {}));
    (function(lib) {
      var Ease = function() {
        function Ease() {}
        Ease.registerEaseFunction = function(name, ease) {
          lib.EaseFunction[name] = ease;
        };
        Ease.NONE = "None";
        Ease.SINE_EASE_IN = "SineEaseIn";
        Ease.SineEaseOut = "SineEaseOut";
        Ease.SINE_EASE_IN_OUT = "SineEaseInOut";
        Ease.SineEaseOutIn = "SineEaseOutIn";
        Ease.QUAD_EASE_IN = "QuadEaseIn";
        Ease.QUAD_EASE_OUT = "QuadEaseOut";
        Ease.QUAD_EASE_IN_OUT = "QuadEaseInOut";
        Ease.QUAD_EASE_OUT_IN = "QuadEaseOutIn";
        Ease.CUBIC_EASE_IN = "CubicEaseIn";
        Ease.CUBIC_EASE_OUT = "CubicEaseOut";
        Ease.CUBIC_EASE_IN_OUT = "CubicEaseInOut";
        Ease.CUBIC_EASE_OUT_IN = "CubicEaseOutIn";
        Ease.QUART_EASE_IN = "QuartEaseIn";
        Ease.QUART_EASE_OUT = "QuartEaseOut";
        Ease.QUART_EASE_IN_OUT = "QuartEaseInOut";
        Ease.QUART_EASE_OUT_IN = "QuartEaseOutIn";
        Ease.QUINT_EASE_IN = "QuintEaseIn";
        Ease.QUINT_EASE_OUT = "QuintEaseOut";
        Ease.QUINT_EASE_IN_OUT = "QuintEaseInOut";
        Ease.QUINT_EASE_OUT_IN = "QuintEaseOutIn";
        Ease.EXPO_EASE_IN = "ExpoEaseIn";
        Ease.EXPO_EASE_OUT = "ExpoEaseOut";
        Ease.EXPO_EASE_IN_OUT = "ExpoEaseInOut";
        Ease.EXPO_EASE_OUT_IN = "ExpoEaseOutIn";
        Ease.CIRC_EASE_IN = "CircEaseIn";
        Ease.CIRC_EASE_OUT = "CircEaseOut";
        Ease.CIRC_EASE_IN_OUT = "CircEaseInOut";
        Ease.CIRC_EASE_OUT_IN = "CircEaseOutIn";
        Ease.BACK_EASE_IN = "BackEaseIn";
        Ease.BACK_EASE_OUT = "BackEaseOut";
        Ease.BACK_EASE_IN_OUT = "BackEaseInOut";
        Ease.BACK_EASE_OUT_IN = "BackEaseOutIn";
        Ease.ELASTIC_EASE_IN = "ElasticEaseIn";
        Ease.ELASTIC_EASE_OUT = "ElasticEaseOut";
        Ease.ELASTIC_EASE_IN_OUT = "ElasticEaseInOut";
        Ease.ELASTIC_EASE_OUT_IN = "ElasticEaseOutIn";
        Ease.BOUNCE_EASE_IN = "BounceEaseIn";
        Ease.BounceEaseOut = "BounceEaseOut";
        Ease.BOUNCE_EASE_IN_OUT = "BounceEaseInOut";
        Ease.BOUNCE_EASE_OUT_IN = "BounceEaseOutIn";
        return Ease;
      }();
      lib.Ease = Ease;
    })(lib || (lib = {}));
    (function(lib) {
      var EaseFunction = function() {
        function EaseFunction() {}
        EaseFunction.None = function(t) {
          return t;
        };
        EaseFunction.SineEaseIn = function(t) {
          return lib.math.sin((t - 1) * lib.math.PI * .5) + 1;
        };
        EaseFunction.SineEaseOut = function(t) {
          return lib.math.sin(t * lib.math.PI * .5);
        };
        EaseFunction.SineEaseInOut = function(t) {
          return .5 * lib.math.sin((t - .5) * lib.math.PI) + .5;
        };
        EaseFunction.SineEaseOutIn = function(t) {
          if (t < .5) return .5 * lib.math.sin(t * lib.math.PI);
          return .5 * lib.math.sin((t - 1) * lib.math.PI) + 1;
        };
        EaseFunction.QuadEaseIn = function(t) {
          return t * t;
        };
        EaseFunction.QuadEaseOut = function(t) {
          return -(t - 1) * (t - 1) + 1;
        };
        EaseFunction.QuadEaseInOut = function(t) {
          if (t < .5) return t * t * 2;
          return -(t - 1) * (t - 1) * 2 + 1;
        };
        EaseFunction.QuadEaseOutIn = function(t) {
          var s = (t - .5) * (t - .5) * 2;
          if (t < .5) return .5 - s;
          return .5 + s;
        };
        EaseFunction.CubicEaseIn = function(t) {
          return t * t * t;
        };
        EaseFunction.CubicEaseOut = function(t) {
          return (t - 1) * (t - 1) * (t - 1) + 1;
        };
        EaseFunction.CubicEaseInOut = function(t) {
          if (t < .5) return t * t * t * 4;
          return (t - 1) * (t - 1) * (t - 1) * 4 + 1;
        };
        EaseFunction.CubicEaseOutIn = function(t) {
          return (t - .5) * (t - .5) * (t - .5) * 4 + .5;
        };
        EaseFunction.QuartEaseIn = function(t) {
          return t * t * t * t;
        };
        EaseFunction.QuartEaseOut = function(t) {
          var a = t - 1;
          return -a * a * a * a + 1;
        };
        EaseFunction.QuartEaseInOut = function(t) {
          if (t < .5) return t * t * t * t * 8;
          var a = t - 1;
          return -a * a * a * a * 8 + 1;
        };
        EaseFunction.QuartEaseOutIn = function(t) {
          var s = (t - .5) * (t - .5) * (t - .5) * (t - .5) * 8;
          if (t < .5) return .5 - s;
          return .5 + s;
        };
        EaseFunction.QuintEaseIn = function(t) {
          return t * t * t * t * t;
        };
        EaseFunction.QuintEaseOut = function(t) {
          var a = t - 1;
          return a * a * a * a * a + 1;
        };
        EaseFunction.QuintEaseInOut = function(t) {
          if (t < .5) return t * t * t * t * t * 16;
          var a = t - 1;
          return a * a * a * a * a * 16 + 1;
        };
        EaseFunction.QuintEaseOutIn = function(t) {
          var a = t - .5;
          return a * a * a * a * a * 16 + .5;
        };
        EaseFunction.ExpoEaseIn = function(t) {
          return lib.math.pow(2, 10 * (t - 1));
        };
        EaseFunction.ExpoEaseOut = function(t) {
          return 1 - lib.math.pow(2, -10 * t);
        };
        EaseFunction.ExpoEaseInOut = function(t) {
          if (t < .5) return .5 * lib.math.pow(2, 10 * (2 * t - 1));
          return .5 * -lib.math.pow(2, -10 * (t - .5) * 2) + 1.00048828125;
        };
        EaseFunction.ExpoEaseOutIn = function(t) {
          if (t < .5) return .5 * -lib.math.pow(2, -20 * t) + .5;
          return .5 * lib.math.pow(2, 10 * (2 * (t - .5) - 1)) + .5;
        };
        EaseFunction.CircEaseIn = function(t) {
          return 1 - lib.math.sqrt(1 - t * t);
        };
        EaseFunction.CircEaseOut = function(t) {
          return lib.math.sqrt(1 - (1 - t) * (1 - t));
        };
        EaseFunction.CircEaseInOut = function(t) {
          if (t < .5) return .5 - lib.math.sqrt(.25 - t * t);
          return lib.math.sqrt(.25 - (1 - t) * (1 - t)) + .5;
        };
        EaseFunction.CircEaseOutIn = function(t) {
          var s = lib.math.sqrt(.25 - (.5 - t) * (.5 - t));
          if (t < .5) return s;
          return 1 - s;
        };
        EaseFunction.BackEaseIn = function(t) {
          return 2.70158 * t * t * t - 1.70158 * t * t;
        };
        EaseFunction.BackEaseOut = function(t) {
          var a = t - 1;
          return 2.70158 * a * a * a + 1.70158 * a * a + 1;
        };
        EaseFunction.BackEaseInOut = function(t) {
          var a = t - 1;
          if (t < .5) return 10.80632 * t * t * t - 3.40316 * t * t;
          return 10.80632 * a * a * a + 3.40316 * a * a + 1;
        };
        EaseFunction.BackEaseOutIn = function(t) {
          var a = t - .5;
          if (t < .5) return 10.80632 * a * a * a + 3.40316 * a * a + .5;
          return 10.80632 * a * a * a - 3.40316 * a * a + .5;
        };
        EaseFunction.ElasticEaseIn = function(t) {
          if (0 == t || 1 == t) return t;
          return -lib.math.pow(2, 10 * (t - 1)) * lib.math.sin(2 * (t - 1.075) * lib.math.PI / .3);
        };
        EaseFunction.ElasticEaseOut = function(t) {
          if (0 == t || .5 == t || 1 == t) return t;
          return lib.math.pow(2, 10 * -t) * lib.math.sin(2 * (-t - .075) * lib.math.PI / .3) + 1;
        };
        EaseFunction.ElasticEaseInOut = function(t) {
          if (0 == t || .5 == t || 1 == t) return t;
          if (t < .5) return -lib.math.pow(2, 10 * t - 10) * lib.math.sin((2 * t - 2.15) * lib.math.PI / .3);
          return lib.math.pow(2, 10 - 20 * t) * lib.math.sin((-4 * t + 1.85) * lib.math.PI / .3) * .5 + 1;
        };
        EaseFunction.ElasticEaseOutIn = function(t) {
          if (0 == t || .5 == t || 1 == t) return t;
          if (t < .5) return lib.math.pow(2, -20 * t) * lib.math.sin((4 * -t - .15) * lib.math.PI / .3) * .5 + .5;
          return -lib.math.pow(2, 20 * (t - 1)) * lib.math.sin((4 * t - 4.15) * lib.math.PI / .3) * .5 + .5;
        };
        EaseFunction.bounceEaseIn = function(t) {
          return 1 - EaseFunction.bounceEaseOut(1 - t);
        };
        EaseFunction.bounceEaseOut = function(t) {
          var s;
          var a = 7.5625;
          var b = 2.75;
          s = t < 1 / 2.75 ? a * t * t : t < 2 / b ? a * (t - 1.5 / b) * (t - 1.5 / b) + .75 : t < 2.5 / b ? a * (t - 2.25 / b) * (t - 2.25 / b) + .9375 : a * (t - 2.625 / b) * (t - 2.625 / b) + .984375;
          return s;
        };
        EaseFunction.BounceEaseInOut = function(t) {
          return t < .5 ? .5 * EaseFunction.bounceEaseIn(2 * t) : .5 * EaseFunction.bounceEaseOut(2 * t - 1) + .5;
        };
        EaseFunction.BounceEaseOutIn = function(t) {
          return t < .5 ? .5 * EaseFunction.bounceEaseOut(2 * t) : .5 * EaseFunction.bounceEaseIn(2 * t - 1) + .5;
        };
        EaseFunction.BounceEaseIn = EaseFunction.bounceEaseIn;
        EaseFunction.BounceEaseOut = EaseFunction.bounceEaseOut;
        return EaseFunction;
      }();
      lib.EaseFunction = EaseFunction;
    })(lib || (lib = {}));
    (function(lib) {
      var Tween = function() {
        function Tween(target, time, propertiesTo, ease, propertiesFrom) {
          void 0 === ease && (ease = "None");
          void 0 === propertiesFrom && (propertiesFrom = null);
          this.invalidProperty = false;
          this.$startTime = 0;
          this._currentTime = 0;
          this._startEvent = "";
          this.pugins = [];
          if (null == Tween.plugins) {
            Tween.registerPlugin("center", lib.TweenCenter);
            Tween.registerPlugin("path", lib.TweenPath);
            Tween.registerPlugin("physicMove", lib.TweenPhysicMove);
          }
          time = +time;
          time < 0 && (time = 0);
          this.$time = 1e3 * time;
          this._target = target;
          this._propertiesTo = propertiesTo;
          this._propertiesFrom = propertiesFrom;
          this.ease = ease || "None";
          var timeLine = new lib.TimeLine();
          timeLine.addTween(this);
        }
        Object.defineProperty(Tween.prototype, "propertiesTo", {
          set: function(value) {
            if (value == this._propertiesTo) return;
            this._propertiesTo = value;
            this.invalidProperty = false;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Tween.prototype, "propertiesFrom", {
          set: function(value) {
            if (value == this._propertiesFrom) return;
            this._propertiesFrom = value;
            this.invalidProperty = false;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Tween.prototype, "time", {
          get: function() {
            return this.$time / 1e3;
          },
          set: function(value) {
            value = 0 | +value;
            this.$time = 1e3 * +value;
            this._timeLine && this._timeLine.$invalidateTotalTime();
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Tween.prototype, "startTime", {
          get: function() {
            return this.$startTime / 1e3;
          },
          set: function(value) {
            value = 0 | +value;
            value < 0 && (value = 0);
            if (value == this.$startTime) return;
            this.$startTime = 1e3 * value;
            this._timeLine && this._timeLine.$invalidateTotalTime();
            this.invalidProperty = false;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Tween.prototype, "target", {
          get: function() {
            return this._target;
          },
          set: function(value) {
            if (value == this.target) return;
            this.removeTargetEvent();
            this._target = value;
            this.invalidProperty = false;
            this.addTargetEvent();
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Tween.prototype, "ease", {
          get: function() {
            return this._ease;
          },
          set: function(val) {
            if (!Tween.easeCache[val]) {
              var func = lib.EaseFunction[val];
              if (null == func) return;
              var cache = [];
              for (var i = 0; i <= 2e3; i++) cache[i] = func(i / 2e3);
              Tween.easeCache[val] = cache;
            }
            this._ease = val;
            this._easeData = Tween.easeCache[val];
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Tween.prototype, "startEvent", {
          get: function() {
            return this._startEvent;
          },
          set: function(type) {
            this.removeTargetEvent();
            this._startEvent = type;
            this.addTargetEvent();
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Tween.prototype, "startTarget", {
          get: function() {
            return this._startTarget;
          },
          set: function(value) {
            this.removeTargetEvent();
            this._startTarget = value;
            this.addTargetEvent();
          },
          enumerable: true,
          configurable: true
        });
        Tween.prototype.removeTargetEvent = function() {
          var target;
          target = this._startTarget ? this._startTarget : this._target;
          target && this._startEvent && "" != this._startEvent && target.removeListener(this._startEvent, this.startByEvent, this);
        };
        Tween.prototype.addTargetEvent = function() {
          var target;
          target = this._startTarget ? this._startTarget : this._target;
          target && this._startEvent && "" != this._startEvent && target.addListener(this._startEvent, this.startByEvent, this);
        };
        Tween.prototype.play = function() {
          this.timeLine.play();
        };
        Tween.prototype.stop = function() {
          this.timeLine.stop();
        };
        Tween.prototype.startByEvent = function() {
          this._timeLine.gotoAndPlay(0);
        };
        Object.defineProperty(Tween.prototype, "timeLine", {
          get: function() {
            if (!this._timeLine) {
              this._timeLine = new lib.TimeLine();
              this._timeLine.addTween(this);
            }
            return this._timeLine;
          },
          enumerable: true,
          configurable: true
        });
        Tween.prototype.$setTimeLine = function(value) {
          this._timeLine && this._timeLine.removeTween(this);
          this._timeLine = value;
        };
        Tween.prototype.initParmas = function() {
          var controller;
          var params = this._propertiesTo;
          var allPlugins = Tween.plugins;
          if (params) {
            var keys = lib.ObjectDo.keys(allPlugins);
            var deletes = [];
            for (var i = 0, len = keys.length; i < len; i++) if (keys[i] in params) {
              var plugin = allPlugins[keys[i]];
              controller = new plugin();
              deletes = deletes.concat(controller.init(this, params, this._propertiesFrom));
              this.pugins.push(controller);
            }
            for (i = 0; i < deletes.length; i++) delete params[deletes[i]];
            keys = lib.ObjectDo.keys(params);
            for (i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (!("string" == typeof key)) {
                delete params[key];
                keys.splice(i, 1);
                i--;
                continue;
              }
              var attribute = params[key];
              if (!("number" == typeof attribute) || !(key in this._target)) {
                delete params[key];
                keys.splice(i, 1);
                i--;
                continue;
              }
            }
            if (keys.length) {
              controller = new lib.BasicPlugin();
              controller.init(this, params, this._propertiesFrom);
              this.pugins.push(controller);
            }
          }
          this.invalidProperty = true;
        };
        Tween.prototype.invalidate = function() {
          this.invalidProperty = false;
        };
        Tween.prototype.call = function(callBack, thisObj) {
          void 0 === thisObj && (thisObj = null);
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
          this._complete = callBack;
          this._completeThis = thisObj;
          this._completeParams = args;
          return this;
        };
        Tween.prototype.update = function(callBack, thisObj) {
          void 0 === thisObj && (thisObj = null);
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
          this._update = callBack;
          this._updateThis = thisObj;
          this._updateParams = args;
          return this;
        };
        Tween.prototype.$update = function(time) {
          this.invalidProperty || this.initParmas();
          this._currentTime = time - this.$startTime;
          this._currentTime > this.$time && (this._currentTime = this.$time);
          var length = this.pugins.length;
          var s = this._easeData[this._currentTime / this.$time * 2e3 | 0];
          for (var i = 0; i < length; i++) this.pugins[i].update(s);
          null != this._update && this._update.apply(this._updateThis, this._updateParams);
          this._currentTime == this.$time && null != this._complete && this._complete.apply(this._completeThis, this._completeParams);
          return true;
        };
        Tween.prototype.dispose = function() {
          this.timeLine && this.timeLine.removeTween(this);
        };
        Tween.to = function(target, time, propertiesTo, ease, propertiesFrom) {
          void 0 === ease && (ease = "None");
          void 0 === propertiesFrom && (propertiesFrom = null);
          var tween = new Tween(target, time, propertiesTo, ease, propertiesFrom);
          tween.timeLine.play();
          return tween;
        };
        Tween.registerPlugin = function(paramName, plugin) {
          null == Tween.plugins && (Tween.plugins = {});
          Tween.plugins[paramName] = plugin;
        };
        Tween.hasPlugin = function(paramName) {
          return !!Tween.plugins[paramName];
        };
        Tween.easeCache = {};
        return Tween;
      }();
      lib.Tween = Tween;
    })(lib || (lib = {}));
    (function(lib) {
      var TimeLine = function() {
        function TimeLine() {
          this.lastTime = -1;
          this._currentTime = 0;
          this._totalTime = 0;
          this.invalidTotalTime = true;
          this._loop = false;
          this._isPlaying = false;
          this.calls = [];
          this.tweens = [];
        }
        Object.defineProperty(TimeLine.prototype, "totalTime", {
          get: function() {
            return this.getTotalTime();
          },
          enumerable: true,
          configurable: true
        });
        TimeLine.prototype.getTotalTime = function() {
          if (true == this.invalidTotalTime) return this._totalTime;
          this.invalidTotalTime = true;
          var tweens = this.tweens;
          var endTime = 0;
          var time;
          for (var i = 0, len = tweens.length; i < len; i++) {
            time = tweens[i].startTime + tweens[i].time;
            time > endTime && (endTime = time);
          }
          this._totalTime = 1e3 * endTime;
          return this._totalTime;
        };
        TimeLine.prototype.$invalidateTotalTime = function() {
          if (false == this.invalidTotalTime) return;
          this.invalidTotalTime = false;
        };
        Object.defineProperty(TimeLine.prototype, "loop", {
          get: function() {
            return this._loop;
          },
          set: function(value) {
            this._loop = value;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(TimeLine.prototype, "isPlaying", {
          get: function() {
            return this._isPlaying;
          },
          enumerable: true,
          configurable: true
        });
        TimeLine.prototype.update = function(timeStamp, gap) {
          var totalTime = this.getTotalTime();
          var lastTime = this._currentTime;
          this._currentTime += timeStamp - this.lastTime;
          var currentTime = -1;
          var loopTime = 0;
          if (this._currentTime >= totalTime) {
            currentTime = this._currentTime % totalTime;
            loopTime = lib.math.floor(this._currentTime / totalTime);
            this._loop || this.$setPlaying(false);
          }
          while (loopTime > -1) {
            loopTime && -1 != currentTime && (this._currentTime = totalTime);
            var calls = this.calls;
            var call;
            var len = calls.length;
            for (i = 0; i < len; i++) {
              call = calls[i];
              (call.time > lastTime && call.time <= this._currentTime || 0 == call.time && 0 == lastTime && this._currentTime) && call.callBack.apply(call.thisObj, call.args);
            }
            var tweens = this.tweens;
            var tween;
            len = tweens.length;
            for (var i = 0; i < len; i++) {
              tween = tweens[i];
              (tween.$startTime + tween.$time > lastTime && tween.$startTime <= this._currentTime || 0 == tween.$startTime && 0 == lastTime && this._currentTime) && tween.$update(this._currentTime);
            }
            loopTime--;
            if (0 == loopTime) {
              if (-1 != currentTime) {
                lastTime = 0;
                this._currentTime = currentTime;
              }
            } else loopTime && (lastTime = 0);
            if (false == this._loop) break;
          }
          this.lastTime = timeStamp;
          return true;
        };
        TimeLine.prototype.play = function() {
          var now = lib.CoreTime.currentTime;
          this.$setPlaying(true, now);
        };
        TimeLine.prototype.stop = function() {
          this.$setPlaying(false);
        };
        TimeLine.prototype.$setPlaying = function(value, time) {
          void 0 === time && (time = 0);
          value && (this.lastTime = time);
          if (this._isPlaying == value) return;
          this._isPlaying = value;
          if (value) {
            lib.EnterFrame.add(this.update, this);
            this.update(lib.CoreTime.currentTime, 0);
          } else lib.EnterFrame.remove(this.update, this);
        };
        TimeLine.prototype.gotoAndPlay = function(time) {
          if (!this.tweens.length) return;
          time = 0 | +time;
          time = time < 0 ? 0 : time;
          time > this.totalTime && (time = this.totalTime);
          this._currentTime = time;
          var now = lib.CoreTime.currentTime;
          this.$setPlaying(true, now);
        };
        TimeLine.prototype.gotoAndStop = function(time) {
          if (!this.tweens.length) return;
          time = 0 | +time;
          time = time < 0 ? 0 : time;
          time > this.totalTime && (time = this.totalTime);
          this._currentTime = time;
          var now = lib.CoreTime.currentTime;
          this.$setPlaying(false);
        };
        TimeLine.prototype.addTween = function(tween) {
          this.tweens.push(tween);
          tween.$setTimeLine(this);
          this.$invalidateTotalTime();
          return tween;
        };
        TimeLine.prototype.removeTween = function(tween) {
          var tweens = this.tweens;
          for (var i = 0, len = tweens.length; i < len; i++) if (tweens[i] == tween) {
            tweens.splice(i, 1)[0].$setTimeLine(null);
            this.$invalidateTotalTime();
            break;
          }
          0 == tweens.length && this.$setPlaying(false);
        };
        TimeLine.prototype.call = function(time, callBack, thisObj) {
          void 0 === thisObj && (thisObj = null);
          var args = [];
          for (var _i = 3; _i < arguments.length; _i++) args[_i - 3] = arguments[_i];
          this.calls.push({
            time: time,
            callBack: callBack,
            thisObj: thisObj,
            args: args
          });
        };
        return TimeLine;
      }();
      lib.TimeLine = TimeLine;
    })(lib || (lib = {}));
    (function(lib) {
      var TweenCenter = function() {
        function TweenCenter() {}
        TweenCenter.prototype.init = function(tween, propertiesTo, propertiesFrom) {
          this.tween = tween;
          var target = tween.target;
          this.centerX = target.width / 2;
          this.centerY = target.height / 2;
          this.centerLength = .5 * lib.math.sqrt(target.width * target.width + target.height * target.height);
          this.rotationStart = 180 * lib.math.atan2(target.height, target.width) / lib.math.PI;
          if (target.rotation) {
            this.lastMoveX = this.centerX - this.centerLength * lib.math.cos((target.rotation + this.rotationStart) * lib.math.PI / 180);
            this.lastMoveY = this.centerY - this.centerLength * lib.math.sin((target.rotation + this.rotationStart) * lib.math.PI / 180);
          } else {
            this.lastMoveX = 0;
            this.lastMoveY = 0;
          }
          var useAttributes = [];
          useAttributes.push("center");
          if ("scaleX" in propertiesTo) {
            this.scaleXTo = +propertiesTo["scaleX"];
            useAttributes.push("scaleX");
            this.scaleXFrom = propertiesFrom && "scaleX" in propertiesFrom ? +propertiesFrom["scaleX"] : target["scaleX"];
          }
          if ("scaleY" in propertiesTo) {
            this.scaleYTo = +propertiesTo["scaleY"];
            useAttributes.push("scaleY");
            this.scaleYFrom = propertiesFrom && "scaleY" in propertiesFrom ? +propertiesFrom["scaleY"] : target["scaleY"];
          }
          if ("rotation" in propertiesTo) {
            this.rotationTo = +propertiesTo["rotation"];
            useAttributes.push("rotation");
            this.rotationFrom = propertiesFrom && "rotation" in propertiesFrom ? +propertiesFrom["rotation"] : target["rotation"];
          }
          return useAttributes;
        };
        TweenCenter.prototype.update = function(value) {
          var target = this.tween.target;
          var moveX = 0;
          var moveY = 0;
          if (this.scaleXTo) {
            target.scaleX = this.scaleXFrom + (this.scaleXTo - this.scaleXFrom) * value;
            target.x = this.centerX - target.width / 2;
          }
          if (this.scaleYTo) {
            target.scaleY = this.scaleYFrom + (this.scaleYTo - this.scaleYFrom) * value;
            target.y = this.centerY - target.height / 2;
          }
          if (this.rotationTo) {
            target.rotation = this.rotationFrom + (this.rotationTo - this.rotationFrom) * value;
            moveX += this.centerX - this.centerLength * lib.math.cos((target.rotation + this.rotationStart) * lib.math.PI / 180);
            moveY += this.centerY - this.centerLength * lib.math.sin((target.rotation + this.rotationStart) * lib.math.PI / 180);
            target.x += moveX - this.lastMoveX;
            target.y += moveY - this.lastMoveY;
          }
          this.lastMoveX = moveX;
          this.lastMoveY = moveY;
        };
        TweenCenter.scaleTo = function(target, time, scaleTo, scaleFrom, ease) {
          void 0 === scaleFrom && (scaleFrom = null);
          void 0 === ease && (ease = "None");
          return lib.Tween.to(target, time, {
            center: true,
            scaleX: scaleTo,
            scaleY: scaleTo
          }, ease, null == scaleFrom ? null : {
            scaleX: scaleFrom,
            scaleY: scaleFrom
          });
        };
        TweenCenter.rotationTo = function(target, time, rotationTo, rotationFrom, ease) {
          void 0 === rotationFrom && (rotationFrom = null);
          void 0 === ease && (ease = "None");
          return lib.Tween.to(target, time, {
            center: true,
            rotation: rotationTo
          }, ease, null == rotationFrom ? null : {
            rotation: rotationFrom
          });
        };
        return TweenCenter;
      }();
      lib.TweenCenter = TweenCenter;
    })(lib || (lib = {}));
    (function(lib) {
      var TweenPath = function() {
        function TweenPath() {}
        TweenPath.prototype.init = function(tween, propertiesTo, propertiesFrom) {
          this.tween = tween;
          var useAttributes = [];
          useAttributes.push("path");
          var path = propertiesTo["path"];
          var target = tween.target;
          var start = lib.Point.create(target.x, target.y);
          path.splice(0, 0, start);
          if (propertiesFrom) {
            "x" in propertiesFrom && (start.x = +propertiesFrom["x"]);
            "y" in propertiesFrom && (start.y = +propertiesFrom["y"]);
          }
          if ("x" in propertiesTo && "y" in propertiesTo) {
            useAttributes.push("x");
            useAttributes.push("y");
            path.push(lib.Point.create(+propertiesTo["x"], +propertiesTo["y"]));
          }
          this.path = path;
          this.pathSum = [];
          this.pathSum.push(0);
          for (var i = 1, len = path.length; i < len; i++) this.pathSum[i] = this.pathSum[i - 1] + lib.math.sqrt((path[i].x - path[i - 1].x) * (path[i].x - path[i - 1].x) + (path[i].y - path[i - 1].y) * (path[i].y - path[i - 1].y));
          var sum = this.pathSum[len - 1];
          for (i = 1; i < len; i++) this.pathSum[i] = this.pathSum[i] / sum;
          return useAttributes;
        };
        TweenPath.prototype.update = function(value) {
          var path = this.path;
          var target = this.tween.target;
          var pathSum = this.pathSum;
          var i, len = pathSum.length;
          for (i = 1; i < len; i++) if (value > pathSum[i - 1] && value <= pathSum[i]) break;
          value <= 0 ? i = 1 : value >= 1 && (i = len - 1);
          value = (value - pathSum[i - 1]) / (pathSum[i] - pathSum[i - 1]);
          target.x = value * (path[i].x - path[i - 1].x) + path[i - 1].x;
          target.y = value * (path[i].y - path[i - 1].y) + path[i - 1].y;
        };
        TweenPath.to = function(target, time, path, ease) {
          void 0 === ease && (ease = "None");
          return lib.Tween.to(target, time, {
            path: path
          }, ease);
        };
        TweenPath.vto = function(target, v, path, ease) {
          void 0 === ease && (ease = "None");
          var sum = 0;
          for (var i = 1, len = path.length; i < len; i++) sum += lib.math.sqrt((path[i].x - path[i - 1].x) * (path[i].x - path[i - 1].x) + (path[i].y - path[i - 1].y) * (path[i].y - path[i - 1].y));
          var time = sum / v;
          return lib.Tween.to(target, time, {
            path: path
          }, ease);
        };
        return TweenPath;
      }();
      lib.TweenPath = TweenPath;
    })(lib || (lib = {}));
    (function(lib) {
      var TweenPhysicMove = function() {
        function TweenPhysicMove() {
          lib.Tween.hasPlugin("physicMove") || lib.Tween.registerPlugin("physicMove", TweenPhysicMove);
        }
        TweenPhysicMove.prototype.init = function(tween, propertiesTo, propertiesFrom) {
          this.tween = tween;
          var useAttributes = [];
          useAttributes.push("physicMove");
          var target = tween.target;
          var startX = target.x;
          var startY = target.y;
          if (propertiesFrom) {
            "x" in propertiesFrom && (startX = +propertiesFrom["x"]);
            "y" in propertiesFrom && (startY = +propertiesFrom["y"]);
          }
          this.startX = startX;
          this.startY = startY;
          var endX = startX;
          var endY = startY;
          if ("x" in propertiesTo) {
            endX = +propertiesTo["x"];
            useAttributes.push("x");
          }
          if ("y" in propertiesTo) {
            endY = +propertiesTo["y"];
            useAttributes.push("y");
          }
          var vx = 0;
          var vy = 0;
          var t = tween.time;
          if ("vx" in propertiesTo) {
            vx = +propertiesTo["vx"];
            useAttributes.push("vx");
            "x" in propertiesTo || (endX = startX + t * vx);
          }
          if ("vy" in propertiesTo) {
            vy = +propertiesTo["vy"];
            useAttributes.push("vy");
            "y" in propertiesTo || (endY = startY + t * vy);
          }
          this.vx = vx;
          this.vy = vy;
          this.ax = 2 * (endX - startX - vx * t) / (t * t);
          this.ay = 2 * (endY - startY - vy * t) / (t * t);
          this.time = t;
          return useAttributes;
        };
        TweenPhysicMove.prototype.update = function(value) {
          var target = this.tween.target;
          var t = this.time * value;
          target.x = this.startX + this.vx * t + .5 * this.ax * t * t;
          target.y = this.startY + this.vy * t + .5 * this.ay * t * t;
        };
        TweenPhysicMove.freeFallTo = function(target, time, groundY) {
          return lib.Tween.to(target, time, {
            y: groundY,
            physicMove: true
          });
        };
        TweenPhysicMove.freeFallToWithG = function(target, g, groundY) {
          return lib.Tween.to(target, lib.math.sqrt(2 * (groundY - target.y) / g), {
            y: groundY,
            physicMove: true
          });
        };
        TweenPhysicMove.fallTo = function(target, time, groundY, vX, vY) {
          void 0 === vX && (vX = null);
          void 0 === vY && (vY = null);
          return lib.Tween.to(target, time, {
            y: groundY,
            physicMove: true,
            vx: vX,
            vy: vY
          });
        };
        TweenPhysicMove.fallToWithG = function(target, g, groundY, vX, vY) {
          void 0 === vX && (vX = null);
          void 0 === vY && (vY = null);
          vX = +vX;
          vY = +vY;
          return lib.Tween.to(target, lib.math.sqrt(2 * (groundY - target.y) / g + vY * vY / (g * g)) - vY / g, {
            y: groundY,
            physicMove: true,
            vx: vX,
            vy: vY
          });
        };
        TweenPhysicMove.to = function(target, time, xTo, yTo, vX, vY) {
          void 0 === vX && (vX = 0);
          void 0 === vY && (vY = 0);
          return lib.Tween.to(target, time, {
            x: xTo,
            y: yTo,
            vx: vX,
            vy: vY,
            physicMove: true
          });
        };
        return TweenPhysicMove;
      }();
      lib.TweenPhysicMove = TweenPhysicMove;
    })(lib || (lib = {}));
    (function(lib) {
      var DataManager = function() {
        function DataManager() {
          this._defines = {};
          this._root = {};
          if (DataManager.instance) return;
          DataManager.instance = this;
          this.addDefine({
            name: "Attribute",
            members: {
              name: {
                type: "string"
              },
              content: {
                type: "string"
              }
            }
          });
          this.addDefine({
            name: "Size",
            members: {
              width: {
                type: "int"
              },
              height: {
                type: "int"
              }
            }
          });
          this.addDefine({
            name: "Point",
            members: {
              x: {
                type: "int"
              },
              y: {
                type: "int"
              }
            }
          });
          this.addDefine({
            name: "RGB",
            members: {
              r: {
                type: "uint"
              },
              g: {
                type: "uint"
              },
              b: {
                type: "uint"
              }
            }
          });
          this.addDefine({
            name: "ARGB",
            members: {
              a: {
                type: "uint"
              },
              r: {
                type: "uint"
              },
              g: {
                type: "uint"
              },
              b: {
                type: "uint"
              }
            }
          });
          this.addDefine({
            name: "Rectangle",
            members: {
              x: {
                type: "int"
              },
              y: {
                type: "int"
              },
              width: {
                type: "int"
              },
              height: {
                type: "int"
              }
            }
          });
          this.addDefine({
            name: "ProgressData",
            members: {
              current: {
                type: "number"
              },
              max: {
                type: "number"
              },
              percent: {
                type: "number",
                bind: "{max==0?1:current/max}"
              },
              tip: {
                type: "string"
              }
            }
          });
          this.addDefine({
            name: "System",
            members: {
              screen: {
                type: "Size"
              }
            }
          });
          this.addDefine({
            name: "BlackData",
            members: {
              system: {
                type: "System"
              }
            }
          });
          this.addRootData("black", "BlackData");
        }
        DataManager.prototype.addRootData = function(name, className, init) {
          void 0 === init && (init = null);
          this[name] = this.createData(className, init);
          return this._root[name] = this[name];
        };
        DataManager.prototype.addDefine = function(config) {
          var className = config.name;
          if (!className) {
            lib.sys.$error(3010, lib.ObjectDo.toString(config));
            return;
          }
          this._defines[className] || (this._defines[className] = {
            id: 0,
            className: "",
            define: null
          });
          var item = this._defines[className];
          var packages = className.split(".");
          className = packages.splice(packages.length - 1, 1)[0];
          var defineClass = "" + className + (0 != item.id ? item.id : "");
          item.className = defineClass;
          var extendClassName = "ObjectValue";
          if (config.extends) {
            var extendsItem = this.getClass(config.extends);
            if (extendsItem) extendClassName = 'DataManager.getInstance().getClass("' + config.extends + '")'; else {
              var extendPakcages = config.extends.split(".");
              extendsItem = window;
              for (var i = 0; i < extendPakcages.length; i++) extendsItem = extendsItem[extendPakcages[i]];
              extendsItem && (extendClassName = config.extends);
            }
            if (!extendsItem) {
              lib.sys.$error(3013, config.extends, lib.ObjectDo.toString(config));
              return;
            }
          }
          this.staticScript = "";
          this.scriptContent = config.script;
          var content = this.__getImportContent();
          var script = {
            content: "",
            ctor: ""
          };
          this.decodeScript("\n\n", defineClass, script);
          content += "var " + defineClass + " = (function (_super) {\n\t__extends(" + defineClass + ", _super);\n\tfunction " + defineClass + "(init) {\n\t\t_super.call(this,null);\n";
          content += '\t\tthis.className = "' + config.name + '";\n';
          var defineMember = "";
          var members = config.members;
          var bindContent = "";
          var subContent = "";
          if (members) {
            var member;
            for (var key in members) {
              member = members[key];
              if (member.init && "object" == typeof member.init && member.init.__className) {
                content += '\t\tthis.$setMember("' + key + '" , DataManager.getInstance().createData("' + member.init.__className + '",' + (null != member.init ? JSON.stringify(member.init) : "null") + "," + member.checkDistort + "));\n";
                content += '\t\tthis.$setMemberSaveClass("' + key + '" ,' + !!member.saveClass + ");\n";
              } else {
                if ("number" === member.type || "Number" === member.type) content += '\t\tthis.$setMember("' + key + '" , new NumberValue(' + (null != member.init ? member.init : "null") + "," + (member.enumList ? JSON.stringify(member.enumList) : "null") + "," + member.checkDistort + "));\n"; else if ("int" === member.type || "Int" === member.type) content += '\t\tthis.$setMember("' + key + '" , new IntValue(' + (null != member.init ? member.init : "null") + "," + (member.enumList ? JSON.stringify(member.enumList) : "null") + "," + member.checkDistort + "));\n"; else if ("uint" === member.type || "Uint" === member.type) content += '\t\tthis.$setMember("' + key + '" , new UIntValue(' + (null != member.init ? member.init : "null") + "," + (member.enumList ? JSON.stringify(member.enumList) : "null") + "," + member.checkDistort + "));\n"; else if ("string" === member.type || "String" === member.type) content += '\t\tthis.$setMember("' + key + '" , new StringValue(' + (null != member.init ? '"' + member.init + '"' : "null") + "," + (member.enumList ? JSON.stringify(member.enumList) : "null") + "));\n"; else if ("boolean" === member.type || "Boolean" === member.type || "bool" === member.type) content += '\t\tthis.$setMember("' + key + '" , new BooleanValue(' + (null != member.init ? member.init : "null") + "," + (member.enumList ? JSON.stringify(member.enumList) : "null") + "));\n"; else if ("array" === member.type || "Array" === member.type) content += '\t\tthis.$setMember("' + key + '" , new ArrayValue(' + (null != member.init ? JSON.stringify(member.init) : "null") + ',"' + member.typeValue + '"));\n'; else if ("*" === member.type) {
                  content += '\t\tthis.$setMember("' + key + '" , ' + (null != member.init ? member.init : "null") + ");\n";
                  content += '\t\tthis.$setMemberSaveClass("' + key + '" ,' + !!member.saveClass + ");\n";
                } else {
                  member.hasOwnProperty("init") && null == member.init ? content += '\t\tthis.$setMember("' + key + '" , null);\n' : content += '\t\tthis.$setMember("' + key + '" , DataManager.getInstance().createData("' + member.type + '",' + (null != member.init ? JSON.stringify(member.init) : "null") + "));\n";
                  content += '\t\tthis.$setMemberSaveClass("' + key + '" ,' + !!member.saveClass + ");\n";
                }
                content += "\t\tthis." + key + 'Value = this.__value["' + key + '"];\n';
              }
              true !== member.save && false !== member.save || (content += '\t\tthis.$setMemberSaveFlag("' + key + '" ,' + member.save + ");\n");
              member.bind && (bindContent += "\t\tnew Binding(this." + key + 'Value,[this],"value","' + member.bind + '");\n');
              if (member.sub) {
                subContent += "\t\tthis." + member.sub.source + ".linkSubArrayValue(this." + key + ",";
                if ("string" == typeof member.sub.type) subContent += '"' + member.sub.type + '",' + ("string" == typeof member.sub.value ? '"' + member.sub.value + '"' : member.sub.value) + ");\n"; else for (var s = 0; s < member.sub.type.length; s++) subContent += '"' + member.sub.type[s] + '",' + ("string" == typeof member.sub.value[s] ? '"' + member.sub.value[s] + '"' : member.sub.value[s]) + (s < member.sub.type.length - 1 ? "," : ");\n");
              }
              defineMember += "\tObject.defineProperty(" + defineClass + '.prototype,"' + key + '", {\n';
              defineMember += "\t\tget: function () {\n";
              "number" === member.type || "Number" === member.type || "int" === member.type || "Int" === member.type || "uint" === member.type || "Uint" === member.type || "string" === member.type || "String" === member.type || "boolean" === member.type || "Boolean" === member.type || "bool" === member.type ? defineMember += '\t\t\treturn this.__value["' + key + '"].value;\n' : defineMember += '\t\t\treturn this.__value["' + key + '"];\n';
              defineMember += "\t\t},\n";
              defineMember += "\t\tset: function (val) {\n";
              defineMember += '\t\t\tthis.setValue("' + key + '", val);\n';
              defineMember += "\t\t},\n";
              defineMember += "\t\tenumerable: true,\n";
              defineMember += "\t\tconfigurable: true\n";
              defineMember += "\t});\n\n";
            }
          }
          config.init && (content += "\t\tthis.value = " + JSON.stringify(config.init) + ";\n");
          content += "\t\tif(init) this.value = init;\n";
          content += bindContent;
          content += subContent;
          content += script.ctor;
          content += "\t}\n\nvar p = " + defineClass + ".prototype;\n\n" + script.content + "\n" + defineMember + "\treturn " + defineClass + ";\n})(" + extendClassName + ");\n";
          content += "DataManager.getInstance().$addClassDefine(" + defineClass + ', "' + config.name + '");\n';
          if (config.exports) {
            var name = "";
            for (var i = 0; i < packages.length; i++) {
              name += packages[i];
              content += "$root." + name + " = $root." + name + " || {}\n";
              name += ".";
            }
            name += className;
            content += "$root." + name + " = " + defineClass + ";\n";
          }
          lib.sys.TIP && console.log("数据结构:\n" + content);
          if (lib.sys.DEBUG) try {
            eval(content);
          } catch (e) {
            lib.sys.$error(3011, e, content);
          } else eval(content);
          item.id++;
          return this.getClass(config.name);
        };
        DataManager.prototype.__getImportContent = function() {
          return "var DataManager = lib.DataManager;\nvar ArrayValue = lib.ArrayValue;\nvar BooleanValue = lib.BooleanValue;\nvar IntValue = lib.IntValue;\nvar NumberValue = lib.NumberValue;\nvar ObjectValue = lib.ObjectValue;\nvar StringValue = lib.StringValue;\nvar UIntValue = lib.UIntValue;\nvar Value = lib.Value;\nvar Binding = lib.Binding;\n";
        };
        DataManager.prototype.$addClassDefine = function(clazz, className) {
          var item = this._defines[className];
          item.define = clazz;
        };
        DataManager.prototype.getClass = function(className) {
          var item = this._defines[className];
          if (!item) return null;
          return item.define;
        };
        DataManager.prototype.createData = function(className, init, distort) {
          void 0 === init && (init = null);
          void 0 === distort && (distort = null);
          if ("number" === className || "Number" === className) return new lib.NumberValue(init, null, distort);
          if ("int" === className || "Int" === className) return new lib.IntValue(init, null, distort);
          if ("uint" === className || "Uint" === className) return new lib.UIntValue(init, null, distort);
          if ("string" === className || "String" === className) return new lib.StringValue(init);
          if ("boolean" === className || "Boolean" === className || "bool" === className) return new lib.BooleanValue(init);
          if ("array" === className || "Array" === className) return new lib.ArrayValue(init);
          if ("*" === className) return init;
          var item = this._defines[className];
          if (!item) {
            lib.sys.$error(3012, className);
            return;
          }
          return new item.define(init);
        };
        DataManager.prototype.decodeScript = function(before, className, script) {
          if (this.scriptContent && "" != this.scriptContent) {
            var scriptContent = this.scriptContent;
            scriptContent = lib.StringDo.deleteProgramNote(scriptContent, 0);
            var i = 0;
            var len = scriptContent.length;
            var pos = 0;
            var list = [];
            this.staticScript = "";
            while (true) {
              var nextFunction = this.findNextFunction(scriptContent, pos);
              if (!nextFunction) break;
              this.staticScript += nextFunction.staticScript;
              pos = nextFunction.endIndex;
              list.push(nextFunction);
            }
            for (var i = 0; i < list.length; i++) {
              var func = list[i];
              if ("constructor" == func.name) script.ctor = before + func.content + "\n"; else if (0 == func.gset) script.content += before + "\t" + className + (func.isStatic ? "." : ".prototype.") + func.name + " = function(" + func.params + ") " + func.content + "\n"; else {
                var setContent = 1 == func.gset ? "" : func.content;
                var getContent = 1 == func.gset ? func.content : "";
                var prams = 1 == func.gset ? "" : func.params;
                for (var f = 0; f < list.length; f++) if (f != i && list[f].name == func.name && list[f].gset && list[f].gset != func.gset) {
                  if (1 == list[f].gset) getContent = list[f].content; else {
                    setContent = list[f].content;
                    prams = list[f].params;
                  }
                  list.splice(f, 1);
                  break;
                }
                script.content += before + "\tObject.defineProperty(" + className + '.prototype, "' + func.name + '", {\n';
                "" != getContent && (script.content += before + "\t\tget: function () " + getContent + ",\n");
                "" != setContent && (script.content += before + "\t\tset: function (" + prams + ") " + setContent + ",\n");
                script.content += before + "\t\tenumerable: true,\n";
                script.content += before + "\t\tconfigurable: true\n";
                script.content += before + "\t\t});\n\n";
              }
            }
          }
        };
        DataManager.prototype.findNextFunction = function(content, start) {
          var len = "function".length;
          var flag;
          var name;
          var params;
          var char;
          var pos, pos2, i;
          var res;
          var gset = 0;
          var funcName;
          var isStatic = false;
          i = lib.StringDo.jumpProgramSpace(content, start);
          if (i == content.length) return null;
          var j = i;
          while (j < content.length) {
            if ("static" == content.slice(j, j + "static".length) || "function" == content.slice(j, j + len)) break;
            j++;
          }
          if (j == content.length) {
            this.staticScript += content.slice(i, j);
            return null;
          }
          var staticScript = content.slice(i, j);
          i = j;
          if ("static" == content.slice(i, i + "static".length)) {
            isStatic = true;
            i += "static".length;
            i = lib.StringDo.jumpProgramSpace(content, i);
          }
          if ("function" == content.slice(i, i + len)) {
            if (0 != i) {
              char = content.charAt(i - 1);
              "\t" != char && " " != char && "\r" != char && "\n" != char && lib.sys.$error(3007, "", this.scriptContent);
            }
            i = pos = i + len;
            pos2 = lib.StringDo.jumpProgramSpace(content, pos);
            pos2 == pos && lib.sys.$error(3007, "", this.scriptContent);
            pos = pos2;
            name = lib.StringDo.findId(content, pos);
            if ("" == name) {
              i = pos;
              lib.sys.$error(3007, "", this.scriptContent);
            }
            if ("get" == name || "set" == name) {
              pos += name.length;
              gset = "get" == name ? 1 : 2;
              pos2 = lib.StringDo.jumpProgramSpace(content, pos);
              pos2 == pos && lib.sys.$error(3007, "", this.scriptContent);
              pos = pos2;
              name = lib.StringDo.findId(content, pos);
              if ("" == name) {
                i = pos;
                lib.sys.$error(3007, "", this.scriptContent);
              }
            }
            funcName = name;
            i = pos = lib.StringDo.jumpProgramSpace(content, pos + name.length);
            char = content.charAt(pos);
            "(" != char && lib.sys.$error(3007, "", this.scriptContent);
            pos++;
            params = "";
            flag = true;
            while (true) {
              pos = lib.StringDo.jumpProgramSpace(content, pos);
              name = lib.StringDo.findId(content, pos);
              if ("" == name) {
                if (")" == content.charAt(pos)) {
                  i = pos + 1;
                  break;
                }
                flag = false;
                break;
              }
              params += name;
              pos += name.length;
              pos = lib.StringDo.jumpProgramSpace(content, pos);
              char = content.charAt(pos);
              if ("," == char) {
                params += ",";
                pos++;
              }
            }
            flag || lib.sys.$error(3007, "", this.scriptContent);
            res = {
              name: funcName,
              gset: gset,
              params: params
            };
          }
          res || lib.sys.$error(3007, "", this.scriptContent);
          content = lib.StringDo.findFunctionContent(content, i);
          "" == content && lib.sys.$error(3007, "", this.scriptContent);
          res.staticScript = staticScript || "";
          res.content = content;
          res.endIndex = i + content.length + 1;
          res.isStatic = isStatic;
          return res;
        };
        DataManager.prototype.clear = function() {
          for (var key in this._root) {
            delete this._root[key];
            delete this[key];
          }
          this._defines = {};
        };
        DataManager.getInstance = function() {
          null == DataManager.instance && new DataManager();
          return DataManager.instance;
        };
        DataManager.addRootData = function(name, className, init) {
          void 0 === init && (init = null);
          return DataManager.getInstance().addRootData(name, className, init);
        };
        DataManager.getClass = function(className) {
          return DataManager.getInstance().getClass(className);
        };
        DataManager.addDefine = function(config) {
          return DataManager.getInstance().addDefine(config);
        };
        DataManager.createData = function(className, init) {
          void 0 === init && (init = null);
          return DataManager.getInstance().createData(className, init);
        };
        DataManager.clear = function() {
          DataManager.getInstance().clear();
        };
        DataManager.Attribute = "Attribute";
        DataManager.Size = "Size";
        DataManager.Point = "Point";
        DataManager.RGB = "RGB";
        DataManager.ARGB = "ARGB";
        DataManager.Rectangle = "Rectangle";
        DataManager.ProgressData = "ProgressData";
        DataManager.System = "System";
        DataManager.BlackData = "BlackData";
        return DataManager;
      }();
      lib.DataManager = DataManager;
    })(lib || (lib = {}));
    (function(lib) {
      var Value = function(_super) {
        __extends(Value, _super);
        function Value(checkDistort) {
          void 0 === checkDistort && (checkDistort = null);
          var _this = _super.call(this) || this;
          _this.__old = null;
          _this.__value = null;
          _this.__list = null;
          _this.__checkDistort = null == checkDistort ? Value.Default_Check_Distort : checkDistort;
          return _this;
        }
        Value.prototype.valueEqual = function(val) {
          this.equalValue = val;
          return new Promise(this.asyncFunction.bind(this));
        };
        Value.prototype.asyncFunction = function(resolve) {
          this.valueEqualResolve = resolve;
        };
        Value.prototype.$setValue = function(val) {
          if (val == this.__value) return;
          this.__old = this.__value;
          this.__value = val;
        };
        Value.prototype.$getValue = function() {
          return this.__value;
        };
        Value.prototype.push = function(val) {
          this.__list || (this.__list = []);
          this.__list.push(val);
        };
        Value.prototype.pop = function() {
          if (this.__list) return this.__list.pop();
          return null;
        };
        Object.defineProperty(Value.prototype, "value", {
          get: function() {
            if (this.__checkDistort) return this.$getValue();
            return this.__value;
          },
          set: function(val) {
            this.$setValue(val);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Value.prototype, "old", {
          get: function() {
            return this.__old;
          },
          enumerable: true,
          configurable: true
        });
        Value.Default_Check_Distort = false;
        return Value;
      }(lib.EventDispatcher);
      lib.Value = Value;
    })(lib || (lib = {}));
    (function(lib) {
      var ArrayValue = function(_super) {
        __extends(ArrayValue, _super);
        function ArrayValue(init, itemType) {
          void 0 === init && (init = null);
          void 0 === itemType && (itemType = "*");
          var _this = _super.call(this) || this;
          _this._key = "";
          _this._rangeMinKey = "";
          _this._rangeMaxKey = "";
          _this._selectedItem = null;
          _this._itemType = null;
          _this._subs = null;
          _this.$sub = false;
          _this._itemType = itemType;
          _this.list = init || [];
          _this._length = _this.list.length;
          _this.__value = _this;
          _this._lengthValue = new lib.IntValue();
          return _this;
        }
        ArrayValue.prototype.push = function(item) {
          this.list.push(item);
          this._length = this._length + 1;
          this._lengthValue.value = this._length;
          if (this._subs) {
            this.__checkSubPush(item);
            this.__addItemChange(item);
          }
          this.dispatchWith(lib.Event.ADD, item);
          this.dispatchWith(lib.Event.CHANGE, this);
        };
        ArrayValue.prototype.addItemAt = function(item, index) {
          index = -1 & +index;
          if (index < 0 || index > this.list.length) {
            lib.sys.$error(3101, index, this.list.length);
            return;
          }
          this.list.splice(index, 0, item);
          this._length = this._length + 1;
          this._lengthValue.value = this._length;
          if (this._subs) {
            this.__checkSubAddItemAt(item, index);
            this.__addItemChange(item);
          }
          this.dispatchWith(lib.Event.ADD, item);
          this.dispatchWith(lib.Event.CHANGE, this);
        };
        ArrayValue.prototype.shift = function() {
          if (!this.list.length) return;
          var item = this.list.shift();
          this._length = this._length - 1;
          this._lengthValue.value = this._length;
          if (this._subs) {
            this.__checkSubRemoveItem(item);
            this.__removeItemChange(item);
          }
          this.dispatchWith(lib.Event.REMOVE, item);
          this.dispatchWith(lib.Event.CHANGE, this);
          return item;
        };
        ArrayValue.prototype.splice = function(startIndex, delCount) {
          void 0 === delCount && (delCount = 0);
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
          var i;
          startIndex = -1 & +startIndex;
          delCount = -1 & +delCount;
          var list;
          if (delCount <= 0) {
            list = [];
            for (i = 0; i < args.length; i++) {
              list[i] = args[i];
              this.list.splice(startIndex, 0, args[i]);
            }
            this._length = this._length + 1;
            this._lengthValue.value = this._length;
            for (i = 0; i < args.length; i++) {
              if (this._subs) {
                this.__checkSubAddItemAt(args[i], startIndex + i);
                this.__addItemChange(args[i]);
              }
              this.dispatchWith(lib.Event.ADD, args[i]);
            }
            this.dispatchWith(lib.Event.CHANGE, this);
          } else {
            list = this.list.splice(startIndex, delCount);
            this._length = this._length - delCount;
            this._lengthValue.value = this._length;
            for (i = 0; i < list.length; i++) {
              if (this._subs) {
                this.__checkSubRemoveItem(list[i]);
                this.__removeItemChange(list[i]);
              }
              this.dispatchWith(lib.Event.REMOVE, list[i]);
            }
            this.dispatchWith(lib.Event.CHANGE, this);
          }
          return list;
        };
        ArrayValue.prototype.slice = function(startIndex, end) {
          startIndex = -1 & +startIndex;
          end = -1 & +end;
          return new ArrayValue(this.list.slice(startIndex, end));
        };
        ArrayValue.prototype.pop = function() {
          if (!this.list.length) return;
          var item = this.list.pop();
          this._length = this._length - 1;
          this._lengthValue.value = this._length;
          if (this._subs) {
            this.__checkSubRemoveItem(item);
            this.__removeItemChange(item);
          }
          this.dispatchWith(lib.Event.REMOVE, item);
          this.dispatchWith(lib.Event.CHANGE, this);
          return item;
        };
        ArrayValue.prototype.removeAll = function() {
          if (!this.list.length) return;
          this._subs && this.__subRemoveAll();
          while (this.list.length) {
            var item = this.list.pop();
            this._length = this._length - 1;
            this._lengthValue.value = this._length;
            this._subs && this.__removeItemChange(item);
            this.dispatchWith(lib.Event.REMOVE, item);
          }
          this.dispatchWith(lib.Event.CHANGE, this);
        };
        ArrayValue.prototype.removeItem = function(item) {
          for (var i = 0, len = this.list.length; i < len; i++) if (this.list[i] == item) {
            this.list.splice(i, 1);
            this._length = this._length - 1;
            this._lengthValue.value = this._length;
            if (this._subs) {
              this.__checkSubRemoveItem(item);
              this.__removeItemChange(item);
            }
            this.dispatchWith(lib.Event.REMOVE, item);
            this.dispatchWith(lib.Event.CHANGE, this);
            return item;
          }
          return null;
        };
        ArrayValue.prototype.removeItemAt = function(index) {
          index = -1 & +index;
          if (index < 0 || index >= this.list.length) {
            lib.sys.$error(3101, index, this.list.length);
            return;
          }
          var item = this.list.splice(index, 1)[0];
          this._length = this._length - 1;
          this._lengthValue.value = this._length;
          if (this._subs) {
            this.__checkSubRemoveItem(item);
            this.__removeItemChange(item);
          }
          this.dispatchWith(lib.Event.REMOVE, item);
          this.dispatchWith(lib.Event.CHANGE, this);
          return item;
        };
        ArrayValue.prototype.removeItemWith = function(key, value, key2, value2) {
          void 0 === key2 && (key2 = "");
          void 0 === value2 && (value2 = null);
          var item;
          var i;
          if ("" == key2) for (i = 0; i < this.list.length; i++) {
            var val = this.list[i][key];
            !(val instanceof lib.Value) || val instanceof lib.ObjectValue || val instanceof ArrayValue || (val = val.value);
            if (val == value) {
              item = this.list.splice(i, 1)[0];
              break;
            }
          } else for (i = 0; i < this.list.length; i++) {
            var val1 = this.list[i][key];
            !(val1 instanceof lib.Value) || val1 instanceof lib.ObjectValue || val1 instanceof ArrayValue || (val1 = val1.value);
            var val2 = this.list[i][key2];
            !(val2 instanceof lib.Value) || val2 instanceof lib.ObjectValue || val2 instanceof ArrayValue || (val2 = val2.value);
            if (val == value && val2 == value2) {
              item = this.list.splice(i, 1)[0];
              break;
            }
          }
          if (!item) return;
          this._length = this._length - 1;
          this._lengthValue.value = this._length;
          if (this._subs) {
            this.__checkSubRemoveItem(item);
            this.__removeItemChange(item);
          }
          this.dispatchWith(lib.Event.REMOVE, item);
          this.dispatchWith(lib.Event.CHANGE, this);
          return item;
        };
        ArrayValue.prototype.getItemIndex = function(item) {
          for (var i = 0, len = this.list.length; i < len; i++) if (this.list[i] == item || !(item instanceof lib.Value) && this.list[i] instanceof lib.Value && this.list[i].value == item) return i;
          return -1;
        };
        ArrayValue.prototype.getItemWith = function(key, value, key2, value2) {
          void 0 === key2 && (key2 = "");
          void 0 === value2 && (value2 = null);
          var i;
          if ("" == key2) for (i = 0; i < this.list.length; i++) {
            var keys = key.split(".");
            var val1 = this.list[i];
            for (var k = 0; k < keys.length; k++) val1 = val1[keys[k]];
            !(val1 instanceof lib.Value) || val1 instanceof lib.ObjectValue || val1 instanceof ArrayValue || (val1 = val1.value);
            if (val1 == value) return this.list[i];
          } else for (i = 0; i < this.list.length; i++) {
            var keys = key.split(".");
            var val1 = this.list[i];
            for (var k = 0; k < keys.length; k++) val1 = val1[keys[k]];
            !(val1 instanceof lib.Value) || val1 instanceof lib.ObjectValue || val1 instanceof ArrayValue || (val1 = val1.value);
            keys = key2.split(".");
            var val2 = this.list[i];
            for (var k = 0; k < keys.length; k++) val2 = val2[keys[k]];
            !(val2 instanceof lib.Value) || val2 instanceof lib.ObjectValue || val2 instanceof ArrayValue || (val2 = val2.value);
            if (val1 == value && val2 == value2) return this.list[i];
          }
          return null;
        };
        ArrayValue.prototype.getItemFunction = function(func, thisObj) {
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
          for (var i = 0; i < this.list.length; i++) {
            args.push(this.list[i]);
            var r = func.apply(thisObj, args);
            args.pop();
            if (true == r) return this.list[i];
          }
          return null;
        };
        ArrayValue.prototype.getItemsWith = function(key, value, key2, value2) {
          void 0 === key2 && (key2 = "");
          void 0 === value2 && (value2 = null);
          var result = [];
          var i;
          if ("" == key2) for (i = 0; i < this.list.length; i++) {
            var keys = key.split(".");
            var val1 = this.list[i];
            for (var k = 0; k < keys.length; k++) val1 = val1[keys[k]];
            !(val1 instanceof lib.Value) || val1 instanceof lib.ObjectValue || val1 instanceof ArrayValue || (val1 = val1.value);
            val1 == value && result.push(this.list[i]);
          } else for (i = 0; i < this.list.length; i++) {
            var keys = key.split(".");
            var val1 = this.list[i];
            for (var k = 0; k < keys.length; k++) val1 = val1[keys[k]];
            !(val1 instanceof lib.Value) || val1 instanceof lib.ObjectValue || val1 instanceof ArrayValue || (val1 = val1.value);
            keys = key2.split(".");
            var val2 = this.list[i];
            for (var k = 0; k < keys.length; k++) val2 = val2[keys[k]];
            !(val2 instanceof lib.Value) || val2 instanceof lib.ObjectValue || val2 instanceof ArrayValue || (val2 = val2.value);
            val1 == value && val2 == value2 && result.push(this.list[i]);
          }
          return result;
        };
        ArrayValue.prototype.setItemsAttributeWith = function(findKey, findValue, setKey, setValue) {
          void 0 === setKey && (setKey = "");
          void 0 === setValue && (setValue = null);
          for (var i = 0; i < this.list.length; i++) this.list[i][findKey] instanceof lib.Value && this.list[i][findKey].value == findValue ? this.list[i][setKey].value = setValue : this.list[i][findKey] == findValue && (this.list[i][setKey] = setValue);
        };
        ArrayValue.prototype.getItemsFunction = function(func, thisObj) {
          void 0 === thisObj && (thisObj = null);
          var _arguments__ = [];
          for (var argumentsLength = 0; argumentsLength < arguments.length; argumentsLength++) _arguments__ = arguments[argumentsLength];
          var result = [];
          var args = [];
          if (_arguments__.length && _arguments__.length > 2) {
            args = [];
            for (var a = 2; a < _arguments__.length; a++) args.push(_arguments__[a]);
          }
          for (var i = 0; i < this.list.length; i++) {
            args.push(this.list[i]);
            var r = func.apply(thisObj, args);
            args.pop();
            true == r && result.push(this.list[i]);
          }
          return result;
        };
        ArrayValue.prototype.sort = function() {
          this.list.sort.apply(this.list, arguments);
          this.dispatchWith(lib.Event.CHANGE, this);
        };
        ArrayValue.prototype.setItemIndex = function(item, index) {
          var itemIndex = this.getItemIndex(item);
          if (itemIndex < 0 || itemIndex == index) return;
          this.list.splice(itemIndex, 1);
          this.list.splice(index, 0, item);
          this.dispatchWith(lib.Event.CHANGE, this);
        };
        ArrayValue.prototype.getItemAt = function(index) {
          index = -1 & +index;
          if (index < 0 || index >= this.list.length) {
            lib.sys.$error(3101, index, this.list.length);
            return;
          }
          return this.list[index];
        };
        ArrayValue.prototype.setItemAt = function(index, item) {
          this.splice(index, 1);
          this.splice(index, 0, item);
        };
        ArrayValue.prototype.getItemByValue = function(value) {
          if ("" == this.key) return null;
          for (var i = 0; i < this.list.length; i++) if (this.list[i][this.key] instanceof lib.Value && this.list[i][this.key].value == value || this.list[i][this.key] == value) return this.list[i];
          return null;
        };
        ArrayValue.prototype.getItemByRange = function(value) {
          if ("" == this.key || "" == this.rangeMinKey || "" == this.rangeMaxKey) return null;
          for (var i = 0; i < this.list.length; i++) {
            var min = this.list[i][this.rangeMinKey];
            var max = this.list[i][this.rangeMaxKey];
            if (value >= min && value <= max) return this.list[i];
          }
          return null;
        };
        ArrayValue.prototype.getItemsByRange = function(value) {
          if ("" == this.key || "" == this.rangeMinKey || "" == this.rangeMaxKey) return null;
          var list = [];
          for (var i = 0; i < this.list.length; i++) {
            var min = this.list[i][this.rangeMinKey];
            var max = this.list[i][this.rangeMaxKey];
            value >= min && value <= max && list.push(this.list[i]);
          }
          return list;
        };
        ArrayValue.prototype.createSubArrayValue = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
          this._subs || (this._subs = []);
          var init = [];
          var list = this.list;
          for (var i = 0; i < list.length; i++) {
            var item = this.list[i];
            var flag = true;
            for (var a = 0; a < arguments.length; a++, a++) if (item instanceof lib.Value) {
              if (item[arguments[a]].value != arguments[a + 1]) {
                flag = false;
                break;
              }
            } else if (item[arguments[a]] != arguments[a + 1]) {
              flag = false;
              break;
            }
            flag && init.push(item);
          }
          var sub = new ArrayValue(init, this._itemType);
          sub.$sub = true;
          this._subs.push([ sub, arguments ]);
          this.__addAllItemChange();
          return sub;
        };
        ArrayValue.prototype.linkSubArrayValue = function(sub) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
          this._subs || (this._subs = []);
          sub.$sub = true;
          sub.removeAll();
          this._subs.push([ sub, args ]);
          var list = this.list;
          for (var i = 0; i < list.length; i++) {
            var item = this.list[i];
            var flag = true;
            for (var a = 1; a < args.length; a++, a++) if (item instanceof lib.Value) {
              if (item[args[a]].value != args[a + 1]) {
                flag = false;
                break;
              }
            } else if (item[args[a]] != args[a + 1]) {
              flag = false;
              break;
            }
            flag && sub.push(item);
          }
          this.__addAllItemChange();
        };
        ArrayValue.prototype.__addAllItemChange = function() {
          var list = this.list;
          var subs = this._subs;
          for (var i = 0; i < list.length; i++) {
            var item = this.list[i];
            for (var s = 0; s < subs.length; s++) {
              var args = subs[s][1];
              for (var a = 0; a < args.length; a++, a++) {
                var key = args[a];
                item[key] instanceof lib.Value && item[key].addListener(lib.Event.CHANGE, this.__onItemChange, this, 0, item);
              }
            }
          }
        };
        ArrayValue.prototype.__addItemChange = function(item) {
          var subs = this._subs;
          for (var s = 0; s < subs.length; s++) {
            var args = subs[s][1];
            for (var a = 0; a < args.length; a++, a++) {
              var key = args[a];
              item[key] instanceof lib.Value && item[key].addListener(lib.Event.CHANGE, this.__onItemChange, this, 0, item);
            }
          }
        };
        ArrayValue.prototype.__removeItemChange = function(item) {
          var keys = item.membersKey;
          for (var i = 0; i < keys.length; i++) item[keys[i]] instanceof lib.Value && item[keys[i]].removeListener(lib.Event.CHANGE, this.__onItemChange, this);
        };
        ArrayValue.prototype.__onItemChange = function(e, item) {
          var subs = this._subs;
          for (var s = 0; s < subs.length; s++) {
            var sub = subs[s][0];
            var args = subs[s][1];
            var oldIndex = sub.getItemIndex(item);
            var flag = true;
            for (var a = 0; a < args.length; a++, a++) {
              var key = args[a];
              var value = args[a + 1];
              if (item[key] instanceof lib.Value) {
                if (item[key].value != value) {
                  flag = false;
                  break;
                }
              } else if (item[key] != value) {
                flag = false;
                break;
              }
            }
            if (-1 == oldIndex && flag) {
              var index = this.getItemIndex(item);
              var ind = -1;
              for (var f = index - 1; f >= 0; f++) {
                ind = sub.getItemIndex(this.list[f]);
                if (-1 != ind) {
                  ind++;
                  break;
                }
              }
              -1 == ind && (ind = 0);
              sub.addItemAt(item, ind);
            } else -1 == oldIndex || flag || sub.removeItem(item);
          }
        };
        ArrayValue.prototype.__checkSubPush = function(item) {
          for (var s = 0; s < this._subs.length; s++) {
            var sub = this._subs[s][0];
            var args = this._subs[s][1];
            var flag = true;
            for (var a = 0; a < args.length; a++, a++) {
              var key = args[a];
              var value = args[a + 1];
              if (item[key] instanceof lib.Value) {
                if (item[key].value != value) {
                  flag = false;
                  break;
                }
              } else if (item[key] != value) {
                flag = false;
                break;
              }
            }
            flag && sub.push(item);
          }
        };
        ArrayValue.prototype.__checkSubAddItemAt = function(item, index) {
          for (var s = 0; s < this._subs.length; s++) {
            var sub = this._subs[s][0];
            var args = this._subs[s][1];
            var flag = true;
            for (var a = 0; a < args.length; a++, a++) {
              var key = args[a];
              var value = args[a + 1];
              if (item[key] instanceof lib.Value) {
                if (item[key].value != value) {
                  flag = false;
                  break;
                }
              } else if (item[key] != value) {
                flag = false;
                break;
              }
            }
            if (flag) {
              var ind = -1;
              for (var f = index - 1; f >= 0; f++) {
                ind = sub.getItemIndex(this.list[f]);
                if (-1 != ind) {
                  ind++;
                  break;
                }
              }
              -1 == ind && (ind = 0);
              sub.addItemAt(item, ind);
            }
          }
        };
        ArrayValue.prototype.__checkSubRemoveItem = function(item) {
          for (var s = 0; s < this._subs.length; s++) {
            var sub = this._subs[s][0];
            var ind = sub.getItemIndex(item);
            -1 != ind && sub.removeItemAt(ind);
          }
        };
        ArrayValue.prototype.__subRemoveAll = function() {
          for (var s = 0; s < this._subs.length; s++) {
            var sub = this._subs[s][0];
            sub.removeAll();
          }
        };
        ArrayValue.prototype.dispose = function() {
          var list = this.list;
          for (var i = 0; i < list.length; i++) {
            var value = this.list[i];
            value instanceof lib.Value && value.dispose();
          }
          if (this._subs) {
            while (this._subs) {
              var sub = this._subs.pop()[0];
              sub.removeAll();
              sub.dispose();
            }
            this._subs = null;
          }
          _super.prototype.dispose.call(this);
        };
        ArrayValue.prototype.$setValue = function(val) {
          this.removeAll();
          var itemType = this._itemType;
          for (var i = 0; i < val.length; i++) this.push(lib.DataManager.createData(itemType, val[i]));
        };
        Object.defineProperty(ArrayValue.prototype, "value", {
          get: function() {
            var res = [];
            var list = this.list;
            for (var i = 0, len = list.length; i < len; i++) {
              var item = list[i];
              item instanceof lib.Value ? res.push(item.value) : res.push(item);
            }
            return res;
          },
          set: function(val) {
            this.$setValue(val);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ArrayValue.prototype, "key", {
          get: function() {
            return this._key;
          },
          set: function(val) {
            this._key = val;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ArrayValue.prototype, "rangeMinKey", {
          get: function() {
            return this._rangeMinKey;
          },
          set: function(val) {
            this._rangeMinKey = val;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ArrayValue.prototype, "rangeMaxKey", {
          get: function() {
            return this._rangeMaxKey;
          },
          set: function(val) {
            this._rangeMaxKey = val;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ArrayValue.prototype, "length", {
          get: function() {
            return this._length;
          },
          set: function(val) {
            val = -1 & +val;
            if (this._length == val) ; else {
              while (this.list.length > val) {
                var item = this.list.pop();
                this._length = this._length - 1;
                this._lengthValue.value = this._length;
                this.dispatchWith(lib.Event.REMOVE, item);
              }
              this.dispatchWith(lib.Event.CHANGE, this);
            }
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ArrayValue.prototype, "lengthIntValue", {
          get: function() {
            return this._lengthValue;
          },
          enumerable: true,
          configurable: true
        });
        return ArrayValue;
      }(lib.Value);
      lib.ArrayValue = ArrayValue;
      for (var i = 0; i < 1e5; i++) Object.defineProperty(ArrayValue.prototype, "" + i, {
        get: function(index) {
          return function() {
            return this.list[index];
          };
        }(i),
        set: function(index) {
          return function(val) {
            this.setItemAt(index, val);
          };
        }(i),
        enumerable: true,
        configurable: true
      });
    })(lib || (lib = {}));
    (function(lib) {
      var BooleanValue = function(_super) {
        __extends(BooleanValue, _super);
        function BooleanValue(init, enumList) {
          void 0 === init && (init = false);
          void 0 === enumList && (enumList = null);
          var _this = _super.call(this) || this;
          "false" === init && (init = false);
          _this.__enumList = enumList;
          _this.__old = _this.__value = !!init;
          return _this;
        }
        BooleanValue.prototype.$setValue = function(val) {
          "false" == val && (val = false);
          val = !!val;
          if (val == this.__value) return;
          this.__old = this.__value;
          this.__value = val;
          this.dispatchWith(lib.Event.CHANGE, this, val);
          if (this.valueEqualResolve && val == this.equalValue) {
            var func = this.valueEqualResolve;
            this.valueEqualResolve = null;
            this.equalValue = null;
            func();
          }
        };
        BooleanValue.prototype.$setEnumList = function(val) {
          if (this.__enumList == val) return;
          this.__enumList = val;
        };
        Object.defineProperty(BooleanValue.prototype, "enumList", {
          get: function() {
            return this.__enumList;
          },
          set: function(val) {
            this.$setEnumList(val);
          },
          enumerable: true,
          configurable: true
        });
        return BooleanValue;
      }(lib.Value);
      lib.BooleanValue = BooleanValue;
    })(lib || (lib = {}));
    (function(lib) {
      var IntValue = function(_super) {
        __extends(IntValue, _super);
        function IntValue(init, enumList, checkDistort) {
          void 0 === init && (init = 0);
          void 0 === enumList && (enumList = null);
          void 0 === checkDistort && (checkDistort = null);
          var _this = _super.call(this, checkDistort) || this;
          _this.__old = _this.__value = -1 & +init || 0;
          _this.__enumList = enumList;
          _this.__valueCheck = [ 48 ];
          return _this;
        }
        IntValue.prototype.$setValue = function(val) {
          val = -1 & +val || 0;
          if (val == this.__value) return;
          this.__old = this.__value;
          this.__value = val;
          if (this.__checkDistort) {
            var str = val + "";
            this.__valueCheck.length = 0;
            for (var i = 0; i < str.length; i++) this.__valueCheck.push(str.charCodeAt(i));
          }
          this.dispatchWith(lib.Event.CHANGE, this, val);
          if (this.valueEqualResolve && val == this.equalValue) {
            var func = this.valueEqualResolve;
            this.valueEqualResolve = null;
            this.equalValue = null;
            func();
          }
        };
        IntValue.prototype.$getValue = function() {
          if (this.__checkDistort) {
            var str = this.__value + "";
            var compare = "";
            for (var i = 0; i < this.__valueCheck.length; i++) compare += String.fromCharCode(this.__valueCheck[i]);
            if (str != compare) {
              this.dispatchWith(lib.Event.DISTORT, this);
              this.__value = parseFloat(compare);
            }
          }
          return this.__value;
        };
        IntValue.prototype.$setEnumList = function(val) {
          if (this.__enumList == val) return;
          this.__enumList = val;
        };
        Object.defineProperty(IntValue.prototype, "enumList", {
          get: function() {
            return this.__enumList;
          },
          set: function(val) {
            this.$setEnumList(val);
          },
          enumerable: true,
          configurable: true
        });
        return IntValue;
      }(lib.Value);
      lib.IntValue = IntValue;
    })(lib || (lib = {}));
    (function(lib) {
      var NumberValue = function(_super) {
        __extends(NumberValue, _super);
        function NumberValue(init, enumList, checkDistort) {
          void 0 === init && (init = 0);
          void 0 === enumList && (enumList = null);
          void 0 === checkDistort && (checkDistort = null);
          var _this = _super.call(this, checkDistort) || this;
          _this.__enumList = enumList;
          _this.__old = _this.__value = +init || 0;
          _this.__precision = 2;
          _this.__multiplier = Math.pow(10, _this.__precision);
          _this.__valueCheck = [ 48 ];
          return _this;
        }
        NumberValue.prototype.$setValue = function(val) {
          val = +val || 0;
          if (val > 0) {
            var smallNumber = val - Math.floor(val);
            smallNumber = Math.floor(smallNumber * this.__multiplier) / this.__multiplier;
            val = Math.floor(val) + smallNumber;
          } else {
            val = -val;
            var smallNumber = val - Math.floor(val);
            smallNumber = Math.floor(smallNumber * this.__multiplier) / this.__multiplier;
            val = Math.floor(val) + smallNumber;
            val = -val;
          }
          if (val == this.__value) return;
          this.__old = this.__value;
          this.__value = val;
          if (this.__checkDistort) {
            var str = val + "";
            this.__valueCheck.length = 0;
            for (var i = 0; i < str.length; i++) this.__valueCheck.push(str.charCodeAt(i));
          }
          this.dispatchWith(lib.Event.CHANGE, this, val);
          if (this.valueEqualResolve && val == this.equalValue) {
            var func = this.valueEqualResolve;
            this.valueEqualResolve = null;
            this.equalValue = null;
            func();
          }
        };
        NumberValue.prototype.$getValue = function() {
          if (this.__checkDistort) {
            var str = this.__value + "";
            var compare = "";
            for (var i = 0; i < this.__valueCheck.length; i++) compare += String.fromCharCode(this.__valueCheck[i]);
            if (str != compare) {
              this.dispatchWith(lib.Event.DISTORT, this);
              this.__value = parseFloat(compare);
            }
          }
          return this.__value;
        };
        NumberValue.prototype.$setEnumList = function(val) {
          if (this.__enumList == val) return;
          this.__enumList = val;
        };
        Object.defineProperty(NumberValue.prototype, "enumList", {
          get: function() {
            return this.__enumList;
          },
          set: function(val) {
            this.$setEnumList(val);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(NumberValue.prototype, "precision", {
          get: function() {
            return this.__precision;
          },
          set: function(val) {
            this.__precision = val;
            this.__multiplier = Math.pow(10, this.__precision);
            this.$setValue(this.__value);
          },
          enumerable: true,
          configurable: true
        });
        return NumberValue;
      }(lib.Value);
      lib.NumberValue = NumberValue;
    })(lib || (lib = {}));
    (function(lib) {
      var ObjectValue = function(_super) {
        __extends(ObjectValue, _super);
        function ObjectValue(init) {
          void 0 === init && (init = null);
          var _this = _super.call(this) || this;
          _this.__old = _this.__value = {};
          init && (_this.value = init);
          _this.__saveClass = {};
          _this.__nosave = {};
          return _this;
        }
        ObjectValue.prototype.$setMember = function(name, value) {
          var old = this.__value[name];
          this.__value[name] = value;
          this.dispatchWith(name, {
            name: name,
            old: old,
            value: value
          });
        };
        ObjectValue.prototype.$setMemberSaveClass = function(name, saveClass) {
          void 0 === saveClass && (saveClass = false);
          this.__saveClass[name] = saveClass;
        };
        ObjectValue.prototype.$setMemberSaveFlag = function(name, save) {
          void 0 === save && (save = false);
          false == save ? this.__nosave[name] = true : delete this.__nosave[name];
        };
        ObjectValue.prototype.hasMember = function(name) {
          return this.__value.hasOwnProperty(name);
        };
        ObjectValue.prototype.getValue = function(name) {
          return this.__value[name];
        };
        ObjectValue.prototype.setValue = function(name, value) {
          if (!this.__value.hasOwnProperty(name)) {
            lib.sys.$error(3014, name);
            return;
          }
          if (null == value) this.$setMember(name, null); else {
            !value || value instanceof lib.Value || "object" != typeof value || !value.__className || (value = lib.DataManager.createData(value.__className, value));
            if (value instanceof lib.Value) this.$setMember(name, value); else {
              var val = this.__value[name];
              var old = val;
              if (val instanceof lib.Value) val.value = value; else {
                this.__value[name] = value;
                this.dispatchWith(name, {
                  name: name,
                  old: old,
                  value: value
                });
              }
            }
          }
        };
        ObjectValue.prototype.$setValue = function(val) {
          if (null == val) {
            lib.sys.$error(3015);
            return;
          }
          var list = Object.keys(val);
          for (var i = 0; i < list.length; i++) {
            var key = list[i];
            var value = val[key];
            this.__value.hasOwnProperty(key) ? this.setValue(key, value) : this.$setMember(key, value);
          }
        };
        ObjectValue.prototype.$getValue = function(saveClass) {
          void 0 === saveClass && (saveClass = false);
          var val = this.__value;
          var list = Object.keys(val);
          var config = {};
          for (var i = 0; i < list.length; i++) {
            var key = list[i];
            if (this.__nosave[key]) continue;
            var member = val[key];
            member instanceof lib.Value ? config[key] = member instanceof ObjectValue ? member.$getValue(this.__saveClass[key]) : member.value : config[key] = member;
          }
          this.__className && saveClass && (config.__className = this.__className.value);
          return config;
        };
        Object.defineProperty(ObjectValue.prototype, "value", {
          get: function() {
            return this.$getValue();
          },
          set: function(val) {
            this.$setValue(val);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ObjectValue.prototype, "className", {
          get: function() {
            return this.__className ? this.__className.value : "";
          },
          set: function(val) {
            this.__className = val ? new lib.StringValue(val) : null;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(ObjectValue.prototype, "membersKey", {
          get: function() {
            return Object.keys(this.__value);
          },
          enumerable: true,
          configurable: true
        });
        ObjectValue.prototype.dispose = function() {
          var val = this.__value;
          var list = Object.keys(val);
          for (var i = 0; i < list.length; i++) {
            var key = list[i];
            val[key] instanceof lib.Value && val[key].dispose();
          }
          _super.prototype.dispose.call(this);
        };
        return ObjectValue;
      }(lib.Value);
      lib.ObjectValue = ObjectValue;
    })(lib || (lib = {}));
    (function(lib) {
      var StringValue = function(_super) {
        __extends(StringValue, _super);
        function StringValue(init, enumList) {
          void 0 === init && (init = "");
          void 0 === enumList && (enumList = null);
          var _this = _super.call(this) || this;
          _this.__old = _this.__value = "" + (null == init ? "" : init);
          _this.__enumList = enumList;
          return _this;
        }
        StringValue.prototype.$setValue = function(val) {
          val = "" + (null == val ? "" : val);
          if (val == this.__value) return;
          this.__old = this.__value;
          this.__value = val;
          this.dispatchWith(lib.Event.CHANGE, this, val);
          if (this.valueEqualResolve && val == this.equalValue) {
            var func = this.valueEqualResolve;
            this.valueEqualResolve = null;
            this.equalValue = null;
            func();
          }
        };
        StringValue.prototype.$setEnumList = function(val) {
          if (this.__enumList == val) return;
          this.__enumList = val;
        };
        Object.defineProperty(StringValue.prototype, "enumList", {
          get: function() {
            return this.__enumList;
          },
          set: function(val) {
            this.$setEnumList(val);
          },
          enumerable: true,
          configurable: true
        });
        return StringValue;
      }(lib.Value);
      lib.StringValue = StringValue;
    })(lib || (lib = {}));
    (function(lib) {
      var UIntValue = function(_super) {
        __extends(UIntValue, _super);
        function UIntValue(init, enumList, checkDistort) {
          void 0 === init && (init = 0);
          void 0 === enumList && (enumList = null);
          void 0 === checkDistort && (checkDistort = null);
          var _this = _super.call(this, checkDistort) || this;
          init = -1 & +init || 0;
          init < 0 && (init = 0);
          _this.__enumList = enumList;
          _this.__old = _this.__value = init;
          _this.__valueCheck = [ 48 ];
          return _this;
        }
        UIntValue.prototype.$setValue = function(val) {
          val = -1 & +val || 0;
          val < 0 && (val = 0);
          if (val == this.__value) return;
          this.__old = this.__value;
          this.__value = val;
          if (this.__checkDistort) {
            var str = val + "";
            this.__valueCheck.length = 0;
            for (var i = 0; i < str.length; i++) this.__valueCheck.push(str.charCodeAt(i));
          }
          this.dispatchWith(lib.Event.CHANGE, this, val);
          if (this.valueEqualResolve && val == this.equalValue) {
            var func = this.valueEqualResolve;
            this.valueEqualResolve = null;
            this.equalValue = null;
            func();
          }
        };
        UIntValue.prototype.$getValue = function() {
          if (this.__checkDistort) {
            var str = this.__value + "";
            var compare = "";
            for (var i = 0; i < this.__valueCheck.length; i++) compare += String.fromCharCode(this.__valueCheck[i]);
            if (str != compare) {
              this.dispatchWith(lib.Event.DISTORT, this);
              this.__value = parseFloat(compare);
            }
          }
          return this.__value;
        };
        UIntValue.prototype.$setEnumList = function(val) {
          if (this.__enumList == val) return;
          this.__enumList = val;
        };
        Object.defineProperty(UIntValue.prototype, "enumList", {
          get: function() {
            return this.__enumList;
          },
          set: function(val) {
            this.$setEnumList(val);
          },
          enumerable: true,
          configurable: true
        });
        return UIntValue;
      }(lib.Value);
      lib.UIntValue = UIntValue;
    })(lib || (lib = {}));
    (function(lib) {
      var Binding = function() {
        function Binding(thisObj, checks, property, content) {
          this.hasDispose = false;
          this.thisObj = thisObj;
          this.checks = checks = checks || [];
          this.property = property;
          this.content = content;
          if (checks && -1 != content.search("data")) for (var i = 0; i < checks.length; i++) {
            var display = checks[i];
            if (display.id) {
              Binding.changeList[display.id] || (Binding.changeList[display.id] = []);
              Binding.changeList[display.id].push(this);
            }
          }
          this.__bind(thisObj, checks.concat(), property, content);
        }
        Binding.prototype.$reset = function() {
          for (var i = 0; i < this.list.length; i++) this.list[i].removeListener(lib.Event.CHANGE, this.update, this);
          this.__bind(this.thisObj, this.checks.concat(), this.property, this.content);
        };
        Binding.prototype.__bind = function(thisObj, checks, property, content) {
          this.list = [];
          this.stmts = [];
          this.singleValue = false;
          var i;
          if (null == checks) checks = Binding.bindingChecks.concat(); else for (i = 0; i < Binding.bindingChecks.length; i++) checks.push(Binding.bindingChecks[i]);
          checks.push(thisObj);
          var lastEnd = 0;
          var parseError = false;
          for (i = 0; i < content.length; i++) if ("{" == content.charAt(i)) for (var j = i + 1; j < content.length; j++) {
            if ("{" == content.charAt(j)) break;
            if ("}" == content.charAt(j)) {
              var bindContent = content.slice(i + 1, j);
              0 == i && j == content.length - 1 && (this.singleValue = true);
              lastEnd < i && this.stmts.push(content.slice(lastEnd, i));
              lastEnd = j + 1;
              var stmt = lib.Compiler.parserExpr(bindContent, checks, {
                this: thisObj
              }, {
                lib: lib,
                Tween: lib.Tween,
                Ease: lib.Ease,
                Math: Math
              }, this.list, this);
              if (null == stmt) {
                parseError = true;
                break;
              }
              this.stmts.push(stmt);
              i = j;
              break;
            }
          }
          if (parseError) {
            thisObj[property] = content;
            return;
          }
          lastEnd < content.length && this.stmts.push(content.slice(lastEnd, content.length));
          this.thisObj = thisObj;
          this.property = property;
          for (i = 0; i < this.list.length; i++) for (var j = 0; j < this.list.length; j++) if (i != j && this.list[i] == this.list[j]) {
            this.list.splice(j, 1);
            i = -1;
            break;
          }
          for (i = 0; i < this.list.length; i++) this.list[i].addListener(lib.Event.CHANGE, this.update, this);
          this.update();
        };
        Binding.prototype.$addValueListener = function(value) {
          value.addListener(lib.Event.CHANGE, this.update, this);
        };
        Binding.prototype.$removeValueListener = function(value) {
          value.removeListener(lib.Event.CHANGE, this.update, this);
        };
        Binding.prototype.update = function(value, old) {
          void 0 === value && (value = null);
          void 0 === old && (old = null);
          var value;
          if (this.singleValue) {
            try {
              value = this.stmts[0].getValue();
            } catch (e) {
              value = null;
            }
            this.thisObj[this.property] = value;
          } else {
            var str = "";
            for (var i = 0; i < this.stmts.length; i++) {
              var expr = this.stmts[i];
              if (expr instanceof lib.Stmts) try {
                str += expr.getValue();
              } catch (e) {
                str += "null";
              } else str += expr;
            }
            this.thisObj[this.property] = str;
          }
        };
        Binding.prototype.dispose = function() {
          this.hasDispose = true;
          for (var i = 0; i < this.list.length; i++) this.list[i].removeListener(lib.Event.CHANGE, this.update, this);
        };
        Binding.addBindingCheck = function(check) {
          for (var i = 0; i < Binding.bindingChecks.length; i++) if (Binding.bindingChecks[i] == check) return;
          Binding.bindingChecks.push(check);
        };
        Binding.changeData = function(display) {
          var id = display.id;
          var list = Binding.changeList[id];
          if (list) for (var i = 0; i < list.length; i++) list[i].$reset();
        };
        Binding.removeChangeObject = function(display) {
          var id = display.id;
          delete Binding.changeList[id];
        };
        Binding.clearBindingChecks = function() {
          Binding.bindingChecks = null;
          Binding.changeList = [];
        };
        Binding.bindingChecks = [];
        Binding.changeList = {};
        return Binding;
      }();
      lib.Binding = Binding;
    })(lib || (lib = {}));
    (function(lib) {
      var Compiler = function() {
        function Compiler() {
          this._scanner = new lib.Scanner();
          this._parser = new lib.Parser();
        }
        Compiler.prototype.parserExpr = function(content, checks, objects, classes, result, binding) {
          var scanner = new lib.Scanner();
          var common = {
            content: content,
            objects: objects,
            classes: classes,
            checks: checks,
            ids: {},
            tokenValue: null,
            scanner: this._scanner,
            nodeStack: null,
            bindList: [],
            binding: binding
          };
          this._scanner.setCommonInfo(common);
          this._parser.setCommonInfo(common);
          this._parser.parser(content);
          if (common.parserError) return null;
          common.result = result;
          common.expr = common.newNode.expval;
          common.expr.checkPropertyBinding(common);
          return common.expr;
        };
        Compiler.parserExpr = function(content, checks, objects, classes, result, binding) {
          Compiler.ist || (Compiler.ist = new Compiler());
          return Compiler.ist.parserExpr(content, checks, objects, classes, result, binding);
        };
        return Compiler;
      }();
      lib.Compiler = Compiler;
    })(lib || (lib = {}));
    (function(lib) {
      var Parser = function() {
        function Parser() {
          this.action = lib.ParserTable.action;
          this.go = lib.ParserTable.go;
          this.commonInfo = null;
        }
        Parser.prototype.setCommonInfo = function(info) {
          this.commonInfo = info;
          this.commonInfo.tokenCount = 0;
        };
        Parser.prototype.parser = function(content) {
          var commonInfo = this.commonInfo;
          var scanner = this.commonInfo.scanner;
          scanner.setTokenContent(content);
          var token;
          commonInfo.lastTokenPos = 0;
          token = scanner.getNextToken();
          var newNode = {
            type: "leaf",
            token: token,
            value: commonInfo.tokenValue
          };
          lib.TokenType.TokenTrans[token] && (token = commonInfo.tokenValue);
          commonInfo.tokenCount++;
          if (null == token) return null;
          var state = 1;
          var stack = [ state ];
          var nodeStack = [];
          commonInfo.nodeStack = nodeStack;
          var i;
          var action;
          var popNodes;
          var commonDebug = {
            file: content
          };
          while (true) {
            if (void 0 == this.action[state][token]) {
              lib.sys.$error(3008, content, this.getFilePosInfo(content, commonInfo.lastTokenPos));
              commonInfo.parserError = true;
              return false;
            }
            action = this.action[state][token];
            if (0 == action.a) break;
            if (1 == action.a) {
              popNodes = [];
              i = action.c.exp;
              while (i) {
                stack.pop();
                popNodes.push(nodeStack.pop());
                i--;
              }
              popNodes.reverse();
              commonInfo.newNode = {
                type: "node",
                create: action.c.id,
                nodes: popNodes,
                tokenPos: popNodes[0].tokenPos,
                debug: popNodes[0].debug
              };
              action.c.code && this.runProgrammer(action.c.id, commonInfo.newNode, popNodes);
              state = stack[stack.length - 1];
              state = this.go[state][action.c.head];
              stack.push(state);
              nodeStack.push(commonInfo.newNode);
            } else {
              state = this.action[state][token].to;
              stack.push(state);
              nodeStack.push(newNode);
              token = null;
              newNode = null;
            }
            if (null == token && "$" != token) {
              commonInfo.lastTokenPos = commonInfo.tokenPos;
              token = scanner.getNextToken();
              commonInfo.tokenCount++;
              if (null == token) return false;
              newNode = {
                type: "leaf",
                token: token,
                value: commonInfo.tokenValue,
                tokenPos: commonInfo.tokenPos,
                debug: commonDebug
              };
              lib.TokenType.TokenTrans[token] && (token = commonInfo.tokenValue);
            }
          }
          return true;
        };
        Parser.prototype.getFilePosInfo = function(content, pos) {
          var line = 1;
          var charPos = 1;
          for (var i = 0; i < content.length && pos > 0; i++) {
            charPos++;
            if (13 == content.charCodeAt(i)) {
              if (10 == content.charCodeAt(i + 1)) {
                i++;
                pos--;
              }
              charPos = 1;
              line++;
            } else if (10 == content.charCodeAt(i + 1)) {
              if (13 == content.charCodeAt(i)) {
                i++;
                pos--;
              }
              charPos = 1;
              line++;
            }
            pos--;
          }
          return "第" + line + "行，第" + charPos + "个字符(后面10个):" + content.slice(charPos, charPos + 10);
        };
        Parser.prototype.runProgrammer = function(id, node, nodes) {
          var common = this.commonInfo;
          switch (id) {
           case 1:
            node.expval = nodes[0].expval;
            break;

           case 3:
            node.expval = new lib.Stmts();
            node.expval.addStmt(nodes[0].expval);
            break;

           case 4:
            node.expval = new lib.ExprStmt(nodes[0].expval);
            break;

           case 5:
            node.expval = new lib.DeviceStmt();
            break;

           case 46:
            node.expval = new lib.Expr("Atr", nodes[0].expval);
            break;

           case 47:
           case 67:
            node.expval = new lib.Expr("int", nodes[0].value);
            break;

           case 48:
           case 68:
            node.expval = new lib.Expr("0xint", nodes[0].value);
            break;

           case 49:
           case 69:
            node.expval = new lib.Expr("number", nodes[0].value);
            break;

           case 50:
           case 70:
            node.expval = new lib.Expr("string", nodes[0].value);
            break;

           case 55:
            node.expval = new lib.ExprAtr();
            node.expval.addItem(new lib.ExprAtrItem("string", nodes[0].value));
            break;

           case 51:
            node.expval = new lib.Expr("boolean", "true");
            break;

           case 52:
            node.expval = new lib.Expr("boolean", "false");
            break;

           case 53:
            node.expval = new lib.Expr("null");
            break;

           case 56:
            node.expval = new lib.ExprAtr();
            node.expval.addItem(new lib.ExprAtrItem("id", nodes[0].value.name));
            break;

           case 57:
            node.expval = new lib.ExprAtr();
            node.expval.addItem(new lib.ExprAtrItem("object", nodes[0].expval));
            break;

           case 2:
            node.expval = nodes[1].expval;
            node.expval.addStmtAt(nodes[0].expval, 0);
            break;

           case 6:
            node.expval = new lib.Expr("-a", nodes[1].expval);
            break;

           case 7:
            node.expval = new lib.Expr("+a", nodes[1].expval);
            break;

           case 8:
            node.expval = new lib.Expr("!", nodes[1].expval);
            break;

           case 27:
            node.expval = new lib.Expr("~", nodes[1].expval);
            break;

           case 60:
            node.expval = nodes[0].expval;
            node.expval.addItem(new lib.ExprAtrItem("call", nodes[1].expval));
            break;

           case 61:
            node.expval = new lib.ExprAtr();
            node.expval.addItem(new lib.ExprAtrItem("id", nodes[1].value.name, true));
            break;

           case 66:
            node.expval = new lib.Expr("string", nodes[0].value.name);
            break;

           case 84:
           case 62:
            node.expval = new lib.ObjectAtr(2 == nodes.length ? [] : nodes[1].expval);
            break;

           case 13:
            node.expval = new lib.Expr("-", nodes[0].expval, nodes[2].expval);
            break;

           case 12:
            node.expval = new lib.Expr("+", nodes[0].expval, nodes[2].expval);
            break;

           case 9:
            node.expval = new lib.Expr("*", nodes[0].expval, nodes[2].expval);
            break;

           case 10:
            node.expval = new lib.Expr("/", nodes[0].expval, nodes[2].expval);
            break;

           case 11:
            node.expval = new lib.Expr("%", nodes[0].expval, nodes[2].expval);
            break;

           case 14:
            node.expval = new lib.Expr("<<", nodes[0].expval, nodes[2].expval);
            break;

           case 15:
            node.expval = new lib.Expr(">>", nodes[0].expval, nodes[2].expval);
            break;

           case 16:
            node.expval = new lib.Expr("<<<", nodes[0].expval, nodes[2].expval);
            break;

           case 17:
            node.expval = new lib.Expr(">>>", nodes[0].expval, nodes[2].expval);
            break;

           case 18:
            node.expval = new lib.Expr(">", nodes[0].expval, nodes[2].expval);
            break;

           case 19:
            node.expval = new lib.Expr("<", nodes[0].expval, nodes[2].expval);
            break;

           case 32:
            node.expval = new lib.Expr("=", nodes[0].expval, nodes[2].expval);
            break;

           case 26:
            node.expval = new lib.Expr("&", nodes[0].expval, nodes[2].expval);
            break;

           case 28:
            node.expval = new lib.Expr("^", nodes[0].expval, nodes[2].expval);
            break;

           case 29:
            node.expval = new lib.Expr("|", nodes[0].expval, nodes[2].expval);
            break;

           case 30:
            node.expval = new lib.Expr("&&", nodes[0].expval, nodes[2].expval);
            break;

           case 31:
            node.expval = new lib.Expr("||", nodes[0].expval, nodes[2].expval);
            break;

           case 54:
            node.expval = new lib.ExprAtr();
            node.expval.addItem(new lib.ExprAtrItem("()", nodes[1].expval));
            break;

           case 73:
            node.expval = new lib.CallParams();
            node.expval.addParam(nodes[0].expval);
            break;

           case 85:
           case 71:
            node.expval = 2 == nodes.length ? new lib.CallParams() : nodes[1].expval;
            break;

           case 58:
            node.expval = nodes[0].expval;
            node.expval.addItem(new lib.ExprAtrItem(".", nodes[2].value.name));
            break;

           case 38:
            node.expval = new lib.Expr("-=", nodes[0].expval, nodes[3].expval);
            break;

           case 37:
            node.expval = new lib.Expr("+=", nodes[0].expval, nodes[3].expval);
            break;

           case 25:
            node.expval = new lib.Expr("!=", nodes[0].expval, nodes[3].expval);
            break;

           case 33:
            node.expval = new lib.Expr("*=", nodes[0].expval, nodes[3].expval);
            break;

           case 34:
            node.expval = new lib.Expr("/=", nodes[0].expval, nodes[3].expval);
            break;

           case 35:
            node.expval = new lib.Expr("%=", nodes[0].expval, nodes[3].expval);
            break;

           case 40:
            node.expval = new lib.Expr("<<=", nodes[0].expval, nodes[3].expval);
            break;

           case 41:
            node.expval = new lib.Expr(">>=", nodes[0].expval, nodes[3].expval);
            break;

           case 20:
            node.expval = new lib.Expr(">=", nodes[0].expval, nodes[3].expval);
            break;

           case 21:
            node.expval = new lib.Expr("<=", nodes[0].expval, nodes[3].expval);
            break;

           case 22:
            node.expval = new lib.Expr("==", nodes[0].expval, nodes[3].expval);
            break;

           case 36:
            node.expval = new lib.Expr("&=", nodes[0].expval, nodes[3].expval);
            break;

           case 42:
            node.expval = new lib.Expr("^=", nodes[0].expval, nodes[3].expval);
            break;

           case 43:
            node.expval = new lib.Expr("|=", nodes[0].expval, nodes[3].expval);
            break;

           case 39:
            node.expval = new lib.Expr("||=", nodes[0].expval, nodes[3].expval);
            break;

           case 86:
           case 72:
            node.expval = nodes[2].expval;
            node.expval.addParamAt(nodes[0].expval, 0);
            break;

           case 59:
            node.expval = nodes[0].expval;
            node.expval.addItem(new lib.ExprAtrItem(".", nodes[3].value.name, true));
            break;

           case 64:
            node.expval = [ [ nodes[0].expval, nodes[2].expval ] ];
            break;

           case 24:
            node.expval = new lib.Expr("!==", nodes[0].expval, nodes[4].expval);
            break;

           case 23:
            node.expval = new lib.Expr("===", nodes[0].expval, nodes[4].expval);
            break;

           case 44:
            node.expval = new lib.Expr("?:", nodes[0].expval, nodes[2].expval, nodes[4].expval);
            break;

           case 87:
           case 63:
            node.expval = [ [ nodes[0].expval, nodes[2].expval ] ];
            node.expval = node.expval.concat(4 == nodes.length ? [ null ] : nodes[4].expval);
            break;

           case 45:
            node.expval = new lib.Expr("spfor", nodes[2].expval, nodes[4].expval);
          }
        };
        return Parser;
      }();
      lib.Parser = Parser;
    })(lib || (lib = {}));
    (function(lib) {
      var ParserTable = function() {
        function ParserTable() {}
        ParserTable.action = {
          1: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            ",": {
              a: 2,
              to: 13
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            },
            ";": {
              a: 2,
              to: 25
            }
          },
          2: {
            $: {
              a: 1,
              c: {
                id: 1,
                head: "start",
                code: true,
                exp: 1
              }
            }
          },
          3: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            ",": {
              a: 2,
              to: 13
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            },
            ";": {
              a: 2,
              to: 25
            },
            $: {
              a: 1,
              c: {
                id: 3,
                head: "stmts",
                code: true,
                exp: 1
              }
            }
          },
          4: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            "~": {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            for: {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            "(": {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            CString: {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            id: {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            "{": {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            "@": {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            true: {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            false: {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            null: {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            ";": {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            ",": {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            $: {
              a: 1,
              c: {
                id: 4,
                head: "stmt",
                code: true,
                exp: 1
              }
            }
          },
          5: {
            "-": {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            "+": {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            "!": {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            "~": {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            for: {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            "(": {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            CString: {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            id: {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            "{": {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            "@": {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            true: {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            false: {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            null: {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            ";": {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            ",": {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            },
            $: {
              a: 1,
              c: {
                id: 5,
                head: "stmt",
                code: true,
                exp: 1
              }
            }
          },
          6: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          7: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          8: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          9: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          10: {
            "(": {
              a: 2,
              to: 51
            }
          },
          11: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          12: {
            "(": {
              a: 2,
              to: 53
            },
            ".": {
              a: 2,
              to: 54
            },
            "-": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "+": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "!": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "~": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            for: {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CString: {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            id: {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "{": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "@": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            true: {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            false: {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            null: {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ";": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ",": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            $: {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "*": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "/": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "%": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "=": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "^": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "|": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "||": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "?": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ")": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ":": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "}": {
              a: 1,
              c: {
                id: 46,
                head: "expr",
                code: true,
                exp: 1
              }
            }
          },
          13: {
            "-": {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            "+": {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            "!": {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            "~": {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            for: {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            "(": {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            CString: {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            id: {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            "{": {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            "@": {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            true: {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            false: {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            null: {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            ";": {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            ",": {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            },
            $: {
              a: 1,
              c: {
                id: 76,
                head: "device",
                code: false,
                exp: 1
              }
            }
          },
          14: {
            "-": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "+": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "!": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "~": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            for: {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "(": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CString: {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            id: {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "{": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "@": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            true: {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            false: {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            null: {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ";": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ",": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            $: {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "*": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "/": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "%": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "=": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "^": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "|": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "||": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "?": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ")": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ":": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "}": {
              a: 1,
              c: {
                id: 47,
                head: "expr",
                code: true,
                exp: 1
              }
            }
          },
          15: {
            "-": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "+": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "!": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "~": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            for: {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "(": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CString: {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            id: {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "{": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "@": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            true: {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            false: {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            null: {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ";": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ",": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            $: {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "*": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "/": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "%": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "=": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "^": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "|": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "||": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "?": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ")": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ":": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "}": {
              a: 1,
              c: {
                id: 48,
                head: "expr",
                code: true,
                exp: 1
              }
            }
          },
          16: {
            "-": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "+": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "!": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "~": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            for: {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "(": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CString: {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            id: {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "{": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "@": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            true: {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            false: {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            null: {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ";": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ",": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            $: {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "*": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "/": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "%": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "=": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "^": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "|": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "||": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "?": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ")": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ":": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "}": {
              a: 1,
              c: {
                id: 49,
                head: "expr",
                code: true,
                exp: 1
              }
            }
          },
          17: {
            "-": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "+": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "!": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "~": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            for: {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "(": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CString: {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            id: {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "{": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "@": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            true: {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            false: {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            null: {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ";": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ",": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            $: {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "*": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "/": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "%": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "=": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "^": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "|": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "||": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "?": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ")": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ":": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "}": {
              a: 1,
              c: {
                id: 50,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ".": {
              a: 1,
              c: {
                id: 55,
                head: "atr",
                code: true,
                exp: 1
              }
            }
          },
          18: {
            "-": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "+": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "!": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "~": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            for: {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "(": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CString: {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            id: {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "{": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "@": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            true: {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            false: {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            null: {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ";": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ",": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            $: {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "*": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "/": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "%": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "=": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "^": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "|": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "||": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "?": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ")": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ":": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "}": {
              a: 1,
              c: {
                id: 51,
                head: "expr",
                code: true,
                exp: 1
              }
            }
          },
          19: {
            "-": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "+": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "!": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "~": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            for: {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "(": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CString: {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            id: {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "{": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "@": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            true: {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            false: {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            null: {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ";": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ",": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            $: {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "*": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "/": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "%": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "=": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "^": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "|": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "||": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "?": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ")": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ":": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "}": {
              a: 1,
              c: {
                id: 52,
                head: "expr",
                code: true,
                exp: 1
              }
            }
          },
          20: {
            "-": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "+": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "!": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "~": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            for: {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "(": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CString: {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            id: {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "{": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "@": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            true: {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            false: {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            null: {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ";": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ",": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            $: {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "*": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "/": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "%": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ">": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "<": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "=": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "^": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "|": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "||": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "?": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ")": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            ":": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            },
            "}": {
              a: 1,
              c: {
                id: 53,
                head: "expr",
                code: true,
                exp: 1
              }
            }
          },
          21: {
            "-": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "+": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "!": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "~": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            for: {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "(": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            CString: {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            id: {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "{": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "@": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            true: {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            false: {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            null: {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ";": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ",": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            $: {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "*": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "/": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "%": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ">": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "<": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "=": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "&": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "^": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "|": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "||": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "?": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ".": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ")": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ":": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "}": {
              a: 1,
              c: {
                id: 56,
                head: "atr",
                code: true,
                exp: 1
              }
            }
          },
          22: {
            "-": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "+": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "!": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "~": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            for: {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "(": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            CString: {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            id: {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "{": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "@": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            true: {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            false: {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            null: {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ";": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ",": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            $: {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "*": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "/": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "%": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ">": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "<": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "=": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "&": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "^": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "|": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "||": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "?": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ".": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ")": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ":": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "}": {
              a: 1,
              c: {
                id: 57,
                head: "atr",
                code: true,
                exp: 1
              }
            }
          },
          23: {
            id: {
              a: 2,
              to: 56
            }
          },
          24: {
            CInt: {
              a: 2,
              to: 57
            },
            OXCInt: {
              a: 2,
              to: 58
            },
            CNumber: {
              a: 2,
              to: 59
            },
            CString: {
              a: 2,
              to: 60
            },
            id: {
              a: 2,
              to: 61
            },
            "}": {
              a: 2,
              to: 63
            }
          },
          25: {
            "-": {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            "+": {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            "!": {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            "~": {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            for: {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            "(": {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            CString: {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            id: {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            "{": {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            "@": {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            true: {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            false: {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            null: {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            ";": {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            ",": {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            },
            $: {
              a: 1,
              c: {
                id: 75,
                head: "device",
                code: false,
                exp: 1
              }
            }
          },
          26: {
            $: {
              a: 0
            }
          },
          27: {
            $: {
              a: 1,
              c: {
                id: 2,
                head: "stmts",
                code: true,
                exp: 2
              }
            }
          },
          28: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 66
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          29: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 68
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          30: {
            "=": {
              a: 2,
              to: 69
            }
          },
          31: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 71
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          32: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 73
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          33: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 75
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          34: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 77
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          35: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 79
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          36: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          37: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          38: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 83
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          39: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 85
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          40: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 87
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          41: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 89
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          42: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 91
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          43: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 93
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          44: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          45: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 96
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          46: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          47: {
            "-": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "+": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "!": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "*": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "/": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "%": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ">": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "<": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "=": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "&": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "^": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "|": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "||": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "?": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "~": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            for: {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "(": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            CString: {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            id: {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "{": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "@": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            true: {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            false: {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            null: {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ";": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ",": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            $: {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ")": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ":": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "}": {
              a: 1,
              c: {
                id: 6,
                head: "expr",
                code: true,
                exp: 2
              }
            }
          },
          48: {
            "-": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "+": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "!": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "*": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "/": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "%": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ">": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "<": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "=": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "&": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "^": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "|": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "||": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "?": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "~": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            for: {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "(": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            CString: {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            id: {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "{": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "@": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            true: {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            false: {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            null: {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ";": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ",": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            $: {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ")": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ":": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "}": {
              a: 1,
              c: {
                id: 7,
                head: "expr",
                code: true,
                exp: 2
              }
            }
          },
          49: {
            "-": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "+": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "!": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "*": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "/": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "%": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ">": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "<": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "=": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "&": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "^": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "|": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "||": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "?": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "~": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            for: {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "(": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            CString: {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            id: {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "{": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "@": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            true: {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            false: {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            null: {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ";": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ",": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            $: {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ")": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ":": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "}": {
              a: 1,
              c: {
                id: 8,
                head: "expr",
                code: true,
                exp: 2
              }
            }
          },
          50: {
            "-": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "+": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "!": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "*": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "/": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "%": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ">": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "<": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "=": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "&": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "^": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "|": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "||": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "?": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "~": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            for: {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "(": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            CString: {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            id: {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "{": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "@": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            true: {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            false: {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            null: {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ";": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ",": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            $: {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ")": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            ":": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            },
            "}": {
              a: 1,
              c: {
                id: 27,
                head: "expr",
                code: true,
                exp: 2
              }
            }
          },
          51: {
            "(": {
              a: 2,
              to: 11
            },
            CString: {
              a: 2,
              to: 99
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          52: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            ")": {
              a: 2,
              to: 100
            }
          },
          53: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            ")": {
              a: 2,
              to: 102
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          54: {
            id: {
              a: 2,
              to: 104
            },
            "@": {
              a: 2,
              to: 105
            }
          },
          55: {
            "-": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "+": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "!": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "~": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            for: {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "(": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            CString: {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            id: {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "{": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "@": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            true: {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            false: {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            null: {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ";": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ",": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            $: {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "*": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "/": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "%": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ">": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "<": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "=": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "&": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "^": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "|": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "||": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "?": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ".": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ")": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ":": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "}": {
              a: 1,
              c: {
                id: 60,
                head: "atr",
                code: true,
                exp: 2
              }
            }
          },
          56: {
            "-": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "+": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "!": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "~": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            for: {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "(": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            CString: {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            id: {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "{": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "@": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            true: {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            false: {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            null: {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ";": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ",": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            $: {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "*": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "/": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "%": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ">": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "<": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "=": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "&": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "^": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "|": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "||": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "?": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ".": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ")": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            ":": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            },
            "}": {
              a: 1,
              c: {
                id: 61,
                head: "atr",
                code: true,
                exp: 2
              }
            }
          },
          57: {
            ":": {
              a: 1,
              c: {
                id: 67,
                head: "objectKey",
                code: true,
                exp: 1
              }
            }
          },
          58: {
            ":": {
              a: 1,
              c: {
                id: 68,
                head: "objectKey",
                code: true,
                exp: 1
              }
            }
          },
          59: {
            ":": {
              a: 1,
              c: {
                id: 69,
                head: "objectKey",
                code: true,
                exp: 1
              }
            }
          },
          60: {
            ":": {
              a: 1,
              c: {
                id: 70,
                head: "objectKey",
                code: true,
                exp: 1
              }
            }
          },
          61: {
            ":": {
              a: 1,
              c: {
                id: 66,
                head: "objectKey",
                code: true,
                exp: 1
              }
            }
          },
          62: {
            "}": {
              a: 2,
              to: 106
            }
          },
          63: {
            "-": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "+": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "!": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "~": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            for: {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "(": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            CString: {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            id: {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "{": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "@": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            true: {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            false: {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            null: {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            ";": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            ",": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            $: {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "*": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "/": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "%": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            ">": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "<": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "=": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "&": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "^": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "|": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "||": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "?": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            ".": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            ")": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            ":": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            },
            "}": {
              a: 1,
              c: {
                id: 84,
                head: "objValue",
                code: true,
                exp: 2
              }
            }
          },
          64: {
            ":": {
              a: 2,
              to: 107
            }
          },
          65: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "=": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 13,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          66: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          67: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "=": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 12,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          68: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          69: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 111
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          70: {
            "-": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "+": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "!": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "=": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 9,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          71: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          72: {
            "-": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "+": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "!": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "=": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 10,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          73: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          74: {
            "-": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "+": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "!": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "=": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 11,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          75: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          76: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "=": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 14,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          77: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          78: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "=": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 15,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          79: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          80: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "=": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 16,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          81: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "=": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 17,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          82: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 18,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          83: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          84: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 19,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          85: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          86: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            "~": {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 32,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          87: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "=": {
              a: 2,
              to: 120
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          88: {
            "-": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "+": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "!": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "/": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "%": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ">": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "<": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "=": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "^": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 26,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          89: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          90: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 28,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          91: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          92: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 29,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          93: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          94: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 30,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          95: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 31,
                head: "expr",
                code: true,
                exp: 3
              }
            }
          },
          96: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          97: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            ":": {
              a: 2,
              to: 125
            }
          },
          98: {
            "(": {
              a: 2,
              to: 53
            },
            ",": {
              a: 2,
              to: 126
            },
            ".": {
              a: 2,
              to: 54
            }
          },
          99: {
            ",": {
              a: 1,
              c: {
                id: 55,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            ".": {
              a: 1,
              c: {
                id: 55,
                head: "atr",
                code: true,
                exp: 1
              }
            },
            "(": {
              a: 1,
              c: {
                id: 55,
                head: "atr",
                code: true,
                exp: 1
              }
            }
          },
          100: {
            "-": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "+": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "!": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "/": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "%": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ">": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "<": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "=": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "^": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ".": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 54,
                head: "atr",
                code: true,
                exp: 3
              }
            }
          },
          101: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            ",": {
              a: 2,
              to: 127
            },
            ")": {
              a: 1,
              c: {
                id: 73,
                head: "callParams",
                code: true,
                exp: 1
              }
            }
          },
          102: {
            "-": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "+": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "!": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "~": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            for: {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "(": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            CString: {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            id: {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "{": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "@": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            true: {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            false: {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            null: {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            ";": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            ",": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            $: {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "*": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "/": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "%": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            ">": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "<": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "=": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "&": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "^": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "|": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "||": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "?": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            ".": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            ")": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            ":": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            },
            "}": {
              a: 1,
              c: {
                id: 85,
                head: "funcCallEnd",
                code: true,
                exp: 2
              }
            }
          },
          103: {
            ")": {
              a: 2,
              to: 128
            }
          },
          104: {
            "-": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "+": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "!": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "/": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "%": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ">": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "<": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "=": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "^": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ".": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 58,
                head: "atr",
                code: true,
                exp: 3
              }
            }
          },
          105: {
            id: {
              a: 2,
              to: 129
            }
          },
          106: {
            "-": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "+": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "!": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "/": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "%": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            ">": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "<": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "=": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "^": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            ".": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 62,
                head: "objValue",
                code: true,
                exp: 3
              }
            }
          },
          107: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          108: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            "~": {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 38,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          109: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            "~": {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 37,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          110: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "|": {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "||": {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "?": {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "~": {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 25,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          111: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          112: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            "~": {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 33,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          113: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            "~": {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 34,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          114: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            "~": {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 35,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          115: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            "~": {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 40,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          116: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            "~": {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 41,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          117: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "|": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "||": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "?": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "~": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 20,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          118: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "|": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "||": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "?": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "~": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 21,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          119: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "|": {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "||": {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "?": {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "~": {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 22,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          120: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          121: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            "~": {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 36,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          122: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            "~": {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 42,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          123: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            "~": {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 43,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          124: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            "~": {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 39,
                head: "expr",
                code: true,
                exp: 4
              }
            }
          },
          125: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          126: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          127: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            },
            ")": {
              a: 1,
              c: {
                id: 86,
                head: "callParams",
                code: true,
                exp: 2
              }
            }
          },
          128: {
            "-": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "+": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "!": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "~": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            for: {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "(": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            CString: {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            id: {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "{": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "@": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            true: {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            false: {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            null: {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            ";": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            ",": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            $: {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "*": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "/": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "%": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            ">": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "<": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "=": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "&": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "^": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "|": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "||": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "?": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            ".": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            ")": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            ":": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            },
            "}": {
              a: 1,
              c: {
                id: 71,
                head: "funcCallEnd",
                code: true,
                exp: 3
              }
            }
          },
          129: {
            "-": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "+": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "!": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "~": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            for: {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "(": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            CString: {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            id: {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "{": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "@": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            true: {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            false: {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            null: {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            ";": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            ",": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            $: {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "*": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "/": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "%": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            ">": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "<": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "=": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "&": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "^": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "|": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "||": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "?": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            ".": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            ")": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            ":": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            },
            "}": {
              a: 1,
              c: {
                id: 59,
                head: "atr",
                code: true,
                exp: 4
              }
            }
          },
          130: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            ",": {
              a: 2,
              to: 137
            },
            "}": {
              a: 1,
              c: {
                id: 64,
                head: "objValueItems",
                code: true,
                exp: 3
              }
            }
          },
          131: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "|": {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "||": {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "?": {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "~": {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            for: {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "(": {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            CString: {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            id: {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "{": {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "@": {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            true: {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            false: {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            null: {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            ";": {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            ",": {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            $: {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            ")": {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            ":": {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "}": {
              a: 1,
              c: {
                id: 24,
                head: "expr",
                code: true,
                exp: 5
              }
            }
          },
          132: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "|": {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "||": {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "?": {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "~": {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            for: {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "(": {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            CString: {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            id: {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "{": {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "@": {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            true: {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            false: {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            null: {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            ";": {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            ",": {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            $: {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            ")": {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            ":": {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "}": {
              a: 1,
              c: {
                id: 23,
                head: "expr",
                code: true,
                exp: 5
              }
            }
          },
          133: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "~": {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            for: {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "(": {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            CString: {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            id: {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "{": {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "@": {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            true: {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            false: {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            null: {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            ";": {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            ",": {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            $: {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            ")": {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            ":": {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            },
            "}": {
              a: 1,
              c: {
                id: 44,
                head: "expr",
                code: true,
                exp: 5
              }
            }
          },
          134: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            ")": {
              a: 2,
              to: 138
            }
          },
          135: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            ",": {
              a: 2,
              to: 127
            },
            ")": {
              a: 1,
              c: {
                id: 73,
                head: "callParams",
                code: true,
                exp: 1
              }
            }
          },
          136: {
            ")": {
              a: 1,
              c: {
                id: 72,
                head: "callParams",
                code: true,
                exp: 3
              }
            }
          },
          137: {
            CInt: {
              a: 2,
              to: 57
            },
            OXCInt: {
              a: 2,
              to: 58
            },
            CNumber: {
              a: 2,
              to: 59
            },
            CString: {
              a: 2,
              to: 60
            },
            id: {
              a: 2,
              to: 61
            },
            "}": {
              a: 1,
              c: {
                id: 87,
                head: "objValueItems",
                code: true,
                exp: 4
              }
            }
          },
          138: {
            "-": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "+": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "!": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "~": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            for: {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "(": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            CString: {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            id: {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "{": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "@": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            CInt: {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            OXCInt: {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            CNumber: {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            true: {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            false: {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            null: {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            ";": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            ",": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            $: {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "*": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "/": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "%": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "<<": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            ">>": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "<<<": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            ">>>": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            ">": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "<": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "=": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "&": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "^": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "|": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "&&": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "||": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "?": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            ")": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            ":": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            },
            "}": {
              a: 1,
              c: {
                id: 45,
                head: "expr",
                code: true,
                exp: 6
              }
            }
          },
          139: {
            "}": {
              a: 1,
              c: {
                id: 63,
                head: "objValueItems",
                code: true,
                exp: 5
              }
            }
          },
          140: {
            ":": {
              a: 2,
              to: 141
            }
          },
          141: {
            "-": {
              a: 2,
              to: 6
            },
            "+": {
              a: 2,
              to: 7
            },
            "!": {
              a: 2,
              to: 8
            },
            "~": {
              a: 2,
              to: 9
            },
            for: {
              a: 2,
              to: 10
            },
            "(": {
              a: 2,
              to: 11
            },
            CInt: {
              a: 2,
              to: 14
            },
            OXCInt: {
              a: 2,
              to: 15
            },
            CNumber: {
              a: 2,
              to: 16
            },
            CString: {
              a: 2,
              to: 17
            },
            true: {
              a: 2,
              to: 18
            },
            false: {
              a: 2,
              to: 19
            },
            null: {
              a: 2,
              to: 20
            },
            id: {
              a: 2,
              to: 21
            },
            "@": {
              a: 2,
              to: 23
            },
            "{": {
              a: 2,
              to: 24
            }
          },
          142: {
            "-": {
              a: 2,
              to: 28
            },
            "+": {
              a: 2,
              to: 29
            },
            "!": {
              a: 2,
              to: 30
            },
            "*": {
              a: 2,
              to: 31
            },
            "/": {
              a: 2,
              to: 32
            },
            "%": {
              a: 2,
              to: 33
            },
            "<<": {
              a: 2,
              to: 34
            },
            ">>": {
              a: 2,
              to: 35
            },
            "<<<": {
              a: 2,
              to: 36
            },
            ">>>": {
              a: 2,
              to: 37
            },
            ">": {
              a: 2,
              to: 38
            },
            "<": {
              a: 2,
              to: 39
            },
            "=": {
              a: 2,
              to: 40
            },
            "&": {
              a: 2,
              to: 41
            },
            "^": {
              a: 2,
              to: 42
            },
            "|": {
              a: 2,
              to: 43
            },
            "&&": {
              a: 2,
              to: 44
            },
            "||": {
              a: 2,
              to: 45
            },
            "?": {
              a: 2,
              to: 46
            },
            ",": {
              a: 2,
              to: 137
            },
            "}": {
              a: 1,
              c: {
                id: 64,
                head: "objValueItems",
                code: true,
                exp: 3
              }
            }
          }
        };
        ParserTable.go = {
          1: {
            stmts: 2,
            stmt: 3,
            expr: 4,
            device: 5,
            atr: 12,
            objValue: 22,
            start: 26
          },
          2: {},
          3: {
            stmts: 27,
            stmt: 3,
            expr: 4,
            device: 5,
            atr: 12,
            objValue: 22
          },
          4: {},
          5: {},
          6: {
            expr: 47,
            atr: 12,
            objValue: 22
          },
          7: {
            expr: 48,
            atr: 12,
            objValue: 22
          },
          8: {
            expr: 49,
            atr: 12,
            objValue: 22
          },
          9: {
            expr: 50,
            atr: 12,
            objValue: 22
          },
          10: {},
          11: {
            expr: 52,
            atr: 12,
            objValue: 22
          },
          12: {
            funcCallEnd: 55
          },
          13: {},
          14: {},
          15: {},
          16: {},
          17: {},
          18: {},
          19: {},
          20: {},
          21: {},
          22: {},
          23: {},
          24: {
            objValueItems: 62,
            objectKey: 64
          },
          25: {},
          26: {},
          27: {},
          28: {
            expr: 65,
            atr: 12,
            objValue: 22
          },
          29: {
            expr: 67,
            atr: 12,
            objValue: 22
          },
          30: {},
          31: {
            expr: 70,
            atr: 12,
            objValue: 22
          },
          32: {
            expr: 72,
            atr: 12,
            objValue: 22
          },
          33: {
            expr: 74,
            atr: 12,
            objValue: 22
          },
          34: {
            expr: 76,
            atr: 12,
            objValue: 22
          },
          35: {
            expr: 78,
            atr: 12,
            objValue: 22
          },
          36: {
            expr: 80,
            atr: 12,
            objValue: 22
          },
          37: {
            expr: 81,
            atr: 12,
            objValue: 22
          },
          38: {
            expr: 82,
            atr: 12,
            objValue: 22
          },
          39: {
            expr: 84,
            atr: 12,
            objValue: 22
          },
          40: {
            expr: 86,
            atr: 12,
            objValue: 22
          },
          41: {
            expr: 88,
            atr: 12,
            objValue: 22
          },
          42: {
            expr: 90,
            atr: 12,
            objValue: 22
          },
          43: {
            expr: 92,
            atr: 12,
            objValue: 22
          },
          44: {
            expr: 94,
            atr: 12,
            objValue: 22
          },
          45: {
            expr: 95,
            atr: 12,
            objValue: 22
          },
          46: {
            expr: 97,
            atr: 12,
            objValue: 22
          },
          47: {},
          48: {},
          49: {},
          50: {},
          51: {
            atr: 98,
            objValue: 22
          },
          52: {},
          53: {
            expr: 101,
            atr: 12,
            objValue: 22,
            callParams: 103
          },
          54: {},
          55: {},
          56: {},
          57: {},
          58: {},
          59: {},
          60: {},
          61: {},
          62: {},
          63: {},
          64: {},
          65: {},
          66: {
            expr: 108,
            atr: 12,
            objValue: 22
          },
          67: {},
          68: {
            expr: 109,
            atr: 12,
            objValue: 22
          },
          69: {
            expr: 110,
            atr: 12,
            objValue: 22
          },
          70: {},
          71: {
            expr: 112,
            atr: 12,
            objValue: 22
          },
          72: {},
          73: {
            expr: 113,
            atr: 12,
            objValue: 22
          },
          74: {},
          75: {
            expr: 114,
            atr: 12,
            objValue: 22
          },
          76: {},
          77: {
            expr: 115,
            atr: 12,
            objValue: 22
          },
          78: {},
          79: {
            expr: 116,
            atr: 12,
            objValue: 22
          },
          80: {},
          81: {},
          82: {},
          83: {
            expr: 117,
            atr: 12,
            objValue: 22
          },
          84: {},
          85: {
            expr: 118,
            atr: 12,
            objValue: 22
          },
          86: {},
          87: {
            expr: 119,
            atr: 12,
            objValue: 22
          },
          88: {},
          89: {
            expr: 121,
            atr: 12,
            objValue: 22
          },
          90: {},
          91: {
            expr: 122,
            atr: 12,
            objValue: 22
          },
          92: {},
          93: {
            expr: 123,
            atr: 12,
            objValue: 22
          },
          94: {},
          95: {},
          96: {
            expr: 124,
            atr: 12,
            objValue: 22
          },
          97: {},
          98: {
            funcCallEnd: 55
          },
          99: {},
          100: {},
          101: {},
          102: {},
          103: {},
          104: {},
          105: {},
          106: {},
          107: {
            expr: 130,
            atr: 12,
            objValue: 22
          },
          108: {},
          109: {},
          110: {},
          111: {
            expr: 131,
            atr: 12,
            objValue: 22
          },
          112: {},
          113: {},
          114: {},
          115: {},
          116: {},
          117: {},
          118: {},
          119: {},
          120: {
            expr: 132,
            atr: 12,
            objValue: 22
          },
          121: {},
          122: {},
          123: {},
          124: {},
          125: {
            expr: 133,
            atr: 12,
            objValue: 22
          },
          126: {
            expr: 134,
            atr: 12,
            objValue: 22
          },
          127: {
            expr: 135,
            atr: 12,
            objValue: 22,
            callParams: 136
          },
          128: {},
          129: {},
          130: {},
          131: {},
          132: {},
          133: {},
          134: {},
          135: {},
          136: {},
          137: {
            objValueItems: 139,
            objectKey: 140
          },
          138: {},
          139: {},
          140: {},
          141: {
            expr: 142,
            atr: 12,
            objValue: 22
          },
          142: {}
        };
        return ParserTable;
      }();
      lib.ParserTable = ParserTable;
    })(lib || (lib = {}));
    (function(lib) {
      var Scanner = function() {
        function Scanner() {
          this.start = lib.ScannerTable.start;
          this.moves = lib.ScannerTable.moves;
          this.endInfos = lib.ScannerTable.endInfos;
          this.befores = lib.ScannerTable.befores;
          this.inputs = lib.ScannerTable.inputs;
          this.tokenPos = 0;
          this.tokenContent = null;
          this.tokenContentLength = 0;
          this.commonInfo = null;
          this.lastToken = null;
        }
        Scanner.prototype.setCommonInfo = function(info) {
          this.commonInfo = info;
        };
        Scanner.prototype.setTokenContent = function(content) {
          content += "\r\n";
          this.tokenContent = content;
          this.tokenPos = 0;
          this.tokenContentLength = content.length;
          this.lastToken = null;
        };
        Scanner.prototype.getNextToken = function() {
          if (0 == this.tokenContentLength) return null;
          var recordPos = this.tokenPos;
          var ch;
          var findStart = this.tokenPos;
          var state = this.start;
          var receiveStack = [];
          var lastEndPos = -1;
          var lastEndState = -1;
          while (this.tokenPos < this.tokenContentLength) {
            ch = this.tokenContent.charCodeAt(this.tokenPos);
            92 == ch && this.tokenPos < this.tokenContent.length && this.tokenPos++;
            void 0 == this.inputs[ch] && (ch = 20013);
            if (void 0 == this.moves[state] || void 0 == this.moves[state][ch]) break;
            state = this.moves[state][ch];
            if (void 0 != this.endInfos[state]) {
              lastEndPos = this.tokenPos;
              lastEndState = state;
              receiveStack.push([ this.tokenPos, state ]);
              if (true == this.endInfos[state]) break;
            }
            this.tokenPos++;
          }
          var last;
          if (receiveStack.length) while (receiveStack.length) {
            last = receiveStack.pop();
            lastEndPos = last[0];
            lastEndState = last[1];
            if (null == this.lastToken || void 0 == this.befores[lastEndState] || void 0 != this.befores[lastEndState] && void 0 != this.befores[lastEndState][this.lastToken]) {
              this.tokenPos = lastEndPos + 1;
              var str = this.tokenContent.slice(findStart, this.tokenPos);
              var result = this.getTokenComplete(lastEndState, str);
              if (null == result) return this.getNextToken();
              this.commonInfo.tokenPos = findStart;
              void 0 != lib.TokenType.TokenTrans[result] ? this.lastToken = this.commonInfo.tokenValue : this.lastToken = result;
              return result;
            }
          }
          if (!(this.tokenPos < this.tokenContent.length)) {
            this.commonInfo.tokenValue = null;
            return lib.TokenType.Type.endSign;
          }
          return null;
        };
        Scanner.prototype.getFilePosInfo = function(content, pos) {
          var line = 1;
          var charPos = 1;
          for (var i = 0; i < content.length && pos > 0; i++) {
            charPos++;
            if (13 == content.charCodeAt(i)) {
              if (10 == content.charCodeAt(i + 1)) {
                i++;
                pos--;
              }
              charPos = 1;
              line++;
            } else if (10 == content.charCodeAt(i + 1)) {
              if (13 == content.charCodeAt(i)) {
                i++;
                pos--;
              }
              charPos = 1;
              line++;
            }
            pos--;
          }
          return "第" + line + "行，第" + charPos + "个字符(后面10个):" + content.slice(charPos, charPos + 10);
        };
        Scanner.prototype.installId = function(commonInfo, content) {
          if (commonInfo.ids[content]) return commonInfo.ids[content];
          var id = {
            name: content
          };
          commonInfo.ids[content] = id;
          return id;
        };
        Scanner.prototype.getTokenComplete = function(token, content) {
          this.commonInfo.tokenValue = null;
          switch (token) {
           case 1:
            return null;

           case 39:
            return lib.TokenType.Type["null"];

           case 27:
            return lib.TokenType.Type["as"];

           case 28:
            return lib.TokenType.Type["is"];

           case 40:
            return lib.TokenType.Type["true"];

           case 41:
            return lib.TokenType.Type["false"];

           case 36:
            return lib.TokenType.Type["for"];

           case 3:
           case 4:
           case 5:
           case 6:
           case 7:
           case 8:
           case 9:
           case 10:
           case 11:
           case 12:
           case 13:
           case 14:
           case 15:
           case 16:
           case 31:
           case 32:
           case 19:
           case 17:
           case 18:
           case 20:
           case 30:
           case 29:
           case 38:
           case 37:
           case 21:
           case 22:
           case 23:
           case 24:
           case 25:
            this.commonInfo.tokenValue = content;
            return lib.TokenType.Type["op"];

           case 26:
           case 44:
            this.commonInfo.tokenValue = content;
            return lib.TokenType.Type["valueInt"];

           case 34:
            this.commonInfo.tokenValue = content;
            return lib.TokenType.Type["valueOxInt"];

           case 33:
            this.commonInfo.tokenValue = content;
            return lib.TokenType.Type["valueNumber"];

           case 35:
            this.commonInfo.tokenValue = content;
            return lib.TokenType.Type["valueString"];

           case 2:
           case 43:
           case 46:
           case 47:
           case 48:
           case 49:
           case 50:
           case 51:
           case 53:
           case 54:
           case 55:
           case 56:
           case 57:
           case 58:
            this.commonInfo.tokenValue = this.installId(this.commonInfo, content);
            return lib.TokenType.Type["id"];
          }
          return null;
        };
        return Scanner;
      }();
      lib.Scanner = Scanner;
    })(lib || (lib = {}));
    (function(lib) {
      var ScannerTable = function() {
        function ScannerTable() {}
        ScannerTable.moves = {
          0: {
            9: 1,
            10: 1,
            13: 1,
            32: 1,
            33: 16,
            34: 42,
            36: 43,
            37: 12,
            38: 18,
            39: 45,
            40: 5,
            41: 6,
            42: 9,
            43: 7,
            44: 25,
            45: 8,
            46: 22,
            47: 10,
            48: 26,
            49: 44,
            50: 44,
            51: 44,
            52: 44,
            53: 44,
            54: 44,
            55: 44,
            56: 44,
            57: 44,
            58: 23,
            59: 24,
            60: 15,
            61: 11,
            62: 14,
            63: 21,
            64: 13,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            94: 19,
            95: 43,
            97: 49,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 48,
            103: 43,
            104: 43,
            105: 54,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 2,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 50,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43,
            123: 3,
            124: 17,
            125: 4,
            126: 20,
            12288: 1
          },
          1: {
            9: 1,
            10: 1,
            13: 1,
            32: 1,
            12288: 1
          },
          2: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 47,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          3: {},
          4: {},
          5: {},
          6: {},
          7: {},
          8: {},
          9: {},
          10: {},
          11: {},
          12: {},
          13: {},
          14: {
            62: 29
          },
          15: {
            60: 30
          },
          16: {},
          17: {
            124: 31
          },
          18: {
            38: 32
          },
          19: {},
          20: {},
          21: {},
          22: {
            48: 33,
            49: 33,
            50: 33,
            51: 33,
            52: 33,
            53: 33,
            54: 33,
            55: 33,
            56: 33,
            57: 33
          },
          23: {},
          24: {},
          25: {},
          26: {
            46: 52,
            48: 44,
            49: 44,
            50: 44,
            51: 44,
            52: 44,
            53: 44,
            54: 44,
            55: 44,
            56: 44,
            57: 44,
            88: 34,
            120: 34
          },
          27: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          28: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          29: {
            62: 37
          },
          30: {
            60: 38
          },
          31: {},
          32: {},
          33: {
            48: 33,
            49: 33,
            50: 33,
            51: 33,
            52: 33,
            53: 33,
            54: 33,
            55: 33,
            56: 33,
            57: 33
          },
          34: {
            48: 34,
            49: 34,
            50: 34,
            51: 34,
            52: 34,
            53: 34,
            54: 34,
            55: 34,
            56: 34,
            57: 34,
            65: 34,
            66: 34,
            67: 34,
            68: 34,
            69: 34,
            70: 34,
            97: 34,
            98: 34,
            99: 34,
            100: 34,
            101: 34,
            102: 34
          },
          35: {},
          36: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          37: {},
          38: {},
          39: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          40: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          41: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          42: {
            9: 42,
            10: 42,
            13: 42,
            32: 42,
            33: 42,
            34: 35,
            36: 42,
            37: 42,
            38: 42,
            39: 42,
            40: 42,
            41: 42,
            42: 42,
            43: 42,
            44: 42,
            45: 42,
            46: 42,
            47: 42,
            48: 42,
            49: 42,
            50: 42,
            51: 42,
            52: 42,
            53: 42,
            54: 42,
            55: 42,
            56: 42,
            57: 42,
            58: 42,
            59: 42,
            60: 42,
            61: 42,
            62: 42,
            63: 42,
            64: 42,
            65: 42,
            66: 42,
            67: 42,
            68: 42,
            69: 42,
            70: 42,
            71: 42,
            72: 42,
            73: 42,
            74: 42,
            75: 42,
            76: 42,
            77: 42,
            78: 42,
            79: 42,
            80: 42,
            81: 42,
            82: 42,
            83: 42,
            84: 42,
            85: 42,
            86: 42,
            87: 42,
            88: 42,
            89: 42,
            90: 42,
            94: 42,
            95: 42,
            97: 42,
            98: 42,
            99: 42,
            100: 42,
            101: 42,
            102: 42,
            103: 42,
            104: 42,
            105: 42,
            106: 42,
            107: 42,
            108: 42,
            109: 42,
            110: 42,
            111: 42,
            112: 42,
            113: 42,
            114: 42,
            115: 42,
            116: 42,
            117: 42,
            118: 42,
            119: 42,
            120: 42,
            121: 42,
            122: 42,
            123: 42,
            124: 42,
            125: 42,
            126: 42,
            12288: 42,
            20013: 42
          },
          43: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          44: {
            46: 52,
            48: 44,
            49: 44,
            50: 44,
            51: 44,
            52: 44,
            53: 44,
            54: 44,
            55: 44,
            56: 44,
            57: 44
          },
          45: {
            9: 45,
            10: 45,
            13: 45,
            32: 45,
            33: 45,
            34: 45,
            36: 45,
            37: 45,
            38: 45,
            39: 35,
            40: 45,
            41: 45,
            42: 45,
            43: 45,
            44: 45,
            45: 45,
            46: 45,
            47: 45,
            48: 45,
            49: 45,
            50: 45,
            51: 45,
            52: 45,
            53: 45,
            54: 45,
            55: 45,
            56: 45,
            57: 45,
            58: 45,
            59: 45,
            60: 45,
            61: 45,
            62: 45,
            63: 45,
            64: 45,
            65: 45,
            66: 45,
            67: 45,
            68: 45,
            69: 45,
            70: 45,
            71: 45,
            72: 45,
            73: 45,
            74: 45,
            75: 45,
            76: 45,
            77: 45,
            78: 45,
            79: 45,
            80: 45,
            81: 45,
            82: 45,
            83: 45,
            84: 45,
            85: 45,
            86: 45,
            87: 45,
            88: 45,
            89: 45,
            90: 45,
            94: 45,
            95: 45,
            97: 45,
            98: 45,
            99: 45,
            100: 45,
            101: 45,
            102: 45,
            103: 45,
            104: 45,
            105: 45,
            106: 45,
            107: 45,
            108: 45,
            109: 45,
            110: 45,
            111: 45,
            112: 45,
            113: 45,
            114: 45,
            115: 45,
            116: 45,
            117: 45,
            118: 45,
            119: 45,
            120: 45,
            121: 45,
            122: 45,
            123: 45,
            124: 45,
            125: 45,
            126: 45,
            12288: 45,
            20013: 45
          },
          46: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 51,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          47: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 57,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          48: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 53,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 55,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          49: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 27,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          50: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 46,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          51: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 40,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          52: {
            48: 33,
            49: 33,
            50: 33,
            51: 33,
            52: 33,
            53: 33,
            54: 33,
            55: 33,
            56: 33,
            57: 33
          },
          53: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 58,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          54: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 28,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          55: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 36,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          56: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 41,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          57: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 39,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 43,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          },
          58: {
            48: 43,
            49: 43,
            50: 43,
            51: 43,
            52: 43,
            53: 43,
            54: 43,
            55: 43,
            56: 43,
            57: 43,
            65: 43,
            66: 43,
            67: 43,
            68: 43,
            69: 43,
            70: 43,
            71: 43,
            72: 43,
            73: 43,
            74: 43,
            75: 43,
            76: 43,
            77: 43,
            78: 43,
            79: 43,
            80: 43,
            81: 43,
            82: 43,
            83: 43,
            84: 43,
            85: 43,
            86: 43,
            87: 43,
            88: 43,
            89: 43,
            90: 43,
            95: 43,
            97: 43,
            98: 43,
            99: 43,
            100: 43,
            101: 43,
            102: 43,
            103: 43,
            104: 43,
            105: 43,
            106: 43,
            107: 43,
            108: 43,
            109: 43,
            110: 43,
            111: 43,
            112: 43,
            113: 43,
            114: 43,
            115: 56,
            116: 43,
            117: 43,
            118: 43,
            119: 43,
            120: 43,
            121: 43,
            122: 43
          }
        };
        ScannerTable.start = 0;
        ScannerTable.endInfos = {
          1: false,
          2: false,
          3: false,
          4: false,
          5: false,
          6: false,
          7: false,
          8: false,
          9: false,
          10: false,
          11: false,
          12: false,
          13: false,
          14: false,
          15: false,
          16: false,
          17: false,
          18: false,
          19: false,
          20: false,
          21: false,
          22: false,
          23: false,
          24: false,
          25: false,
          26: false,
          27: false,
          28: false,
          29: false,
          30: false,
          31: false,
          32: false,
          33: false,
          34: false,
          35: false,
          36: false,
          37: false,
          38: false,
          39: false,
          40: false,
          41: false,
          43: false,
          44: false,
          46: false,
          47: false,
          48: false,
          49: false,
          50: false,
          51: false,
          53: false,
          54: false,
          55: false,
          56: false,
          57: false,
          58: false
        };
        ScannerTable.befores = {};
        ScannerTable.inputs = {
          9: true,
          10: true,
          13: true,
          32: true,
          33: true,
          34: true,
          36: true,
          37: true,
          38: true,
          39: true,
          40: true,
          41: true,
          42: true,
          43: true,
          44: true,
          45: true,
          46: true,
          47: true,
          48: true,
          49: true,
          50: true,
          51: true,
          52: true,
          53: true,
          54: true,
          55: true,
          56: true,
          57: true,
          58: true,
          59: true,
          60: true,
          61: true,
          62: true,
          63: true,
          64: true,
          65: true,
          66: true,
          67: true,
          68: true,
          69: true,
          70: true,
          71: true,
          72: true,
          73: true,
          74: true,
          75: true,
          76: true,
          77: true,
          78: true,
          79: true,
          80: true,
          81: true,
          82: true,
          83: true,
          84: true,
          85: true,
          86: true,
          87: true,
          88: true,
          89: true,
          90: true,
          94: true,
          95: true,
          97: true,
          98: true,
          99: true,
          100: true,
          101: true,
          102: true,
          103: true,
          104: true,
          105: true,
          106: true,
          107: true,
          108: true,
          109: true,
          110: true,
          111: true,
          112: true,
          113: true,
          114: true,
          115: true,
          116: true,
          117: true,
          118: true,
          119: true,
          120: true,
          121: true,
          122: true,
          123: true,
          124: true,
          125: true,
          126: true,
          12288: true,
          20013: true
        };
        return ScannerTable;
      }();
      lib.ScannerTable = ScannerTable;
    })(lib || (lib = {}));
    (function(lib) {
      var TokenType = function() {
        function TokenType() {}
        TokenType.Type = {
          endSign: "$",
          public: "public",
          private: "private",
          protected: "protected",
          final: "final",
          dynamic: "dynamic",
          internal: "internal",
          class: "class",
          interface: "interface",
          extends: "extends",
          implements: "implements",
          import: "import",
          var: "var",
          static: "static",
          const: "const",
          function: "function",
          override: "override",
          void: "void",
          return: "return",
          package: "package",
          flashProxy: "flash_proxy",
          namespace: "namespace",
          finally: "finally",
          new: "new",
          as: "as",
          is: "is",
          get: "get",
          set: "set",
          Vector: "Vector",
          op: "op",
          id: "id",
          valueInt: "CInt",
          valueOxInt: "OXCInt",
          valueNumber: "CNumber",
          valueString: "CString",
          valueRegExp: "RegExp",
          null: "null",
          true: "true",
          false: "false",
          if: "if",
          else: "else",
          for: "for",
          each: "each",
          in: "in",
          do: "do",
          while: "while",
          switch: "switch",
          case: "case",
          default: "default",
          continue: "continue",
          break: "break"
        };
        TokenType.TokenTrans = {
          op: true
        };
        return TokenType;
      }();
      lib.TokenType = TokenType;
    })(lib || (lib = {}));
    (function(lib) {
      var CallParams = function() {
        function CallParams() {
          this.type = "callParams";
          this.list = [];
        }
        CallParams.prototype.addParam = function(expr) {
          this.list.push(expr);
        };
        CallParams.prototype.addParamAt = function(expr, index) {
          this.list.splice(index, 0, expr);
        };
        CallParams.prototype.checkPropertyBinding = function(commonInfo) {
          for (var i = 0; i < this.list.length; i++) this.list[i].checkPropertyBinding(commonInfo);
        };
        CallParams.prototype.getValueList = function() {
          var params = [];
          for (var i = 0; i < this.list.length; i++) params.push(this.list[i].getValue());
          return params;
        };
        return CallParams;
      }();
      lib.CallParams = CallParams;
    })(lib || (lib = {}));
    (function(lib) {
      var DeviceStmt = function() {
        function DeviceStmt() {}
        DeviceStmt.prototype.checkPropertyBinding = function(commonInfo) {};
        DeviceStmt.prototype.getValue = function() {
          return null;
        };
        return DeviceStmt;
      }();
      lib.DeviceStmt = DeviceStmt;
    })(lib || (lib = {}));
    (function(lib) {
      var Expr = function() {
        function Expr(type, expr1, expr2, expr3) {
          void 0 === expr1 && (expr1 = null);
          void 0 === expr2 && (expr2 = null);
          void 0 === expr3 && (expr3 = null);
          this.type = type;
          this.expr1 = expr1;
          this.expr2 = expr2;
          this.expr3 = expr3;
          "int" == type && (this.expr1 = parseInt(expr1));
          "string" == type && (this.expr1 = this.expr1.slice(1, this.expr1.length - 1));
        }
        Expr.prototype.checkPropertyBinding = function(commonInfo) {
          "Atr" == this.type ? this.expr1.checkPropertyBinding(commonInfo) : this.expr1 && (this.expr1 instanceof Expr || this.expr1 instanceof lib.ExprAtr) && this.expr1.checkPropertyBinding(commonInfo);
          "spfor" == this.type && (commonInfo.specialFor = this.expr1.getValue());
          this.expr2 && (this.expr2 instanceof Expr || this.expr2 instanceof lib.ExprAtr) && this.expr2.checkPropertyBinding(commonInfo);
          this.expr3 && (this.expr3 instanceof Expr || this.expr3 instanceof lib.ExprAtr) && this.expr3.checkPropertyBinding(commonInfo);
          "spfor" == this.type && (commonInfo.specialFor = null);
        };
        Expr.prototype.getValue = function(params) {
          if ("Atr" == this.type) return this.expr1.getValue(params);
          if ("int" == this.type) return this.expr1;
          if ("0xint" == this.type) return this.expr1;
          if ("number" == this.type) return this.expr1;
          if ("boolean" == this.type) return this.expr1;
          if ("string" == this.type) return this.expr1;
          if ("+a" == this.type) return this.expr1.getValue(params);
          if ("-a" == this.type) return -this.expr1.getValue(params);
          if ("!" == this.type) return !this.expr1.getValue(params);
          if ("*" == this.type) return this.expr1.getValue(params) * this.expr2.getValue(params);
          if ("/" == this.type) return this.expr1.getValue(params) / this.expr2.getValue(params);
          if ("%" == this.type) return this.expr1.getValue(params) % this.expr2.getValue(params);
          if ("+" == this.type) return this.expr1.getValue(params) + this.expr2.getValue(params);
          if ("-" == this.type) return this.expr1.getValue(params) - this.expr2.getValue(params);
          if ("<<" == this.type) return this.expr1.getValue(params) << this.expr2.getValue(params);
          if (">>" == this.type) return this.expr1.getValue(params) >> this.expr2.getValue(params);
          if (">>>" == this.type) return this.expr1.getValue(params) >>> this.expr2.getValue(params);
          if (">" == this.type) return this.expr1.getValue(params) > this.expr2.getValue(params);
          if ("<" == this.type) return this.expr1.getValue(params) < this.expr2.getValue(params);
          if (">=" == this.type) return this.expr1.getValue(params) >= this.expr2.getValue(params);
          if ("<=" == this.type) return this.expr1.getValue(params) <= this.expr2.getValue(params);
          if ("==" == this.type) return this.expr1.getValue(params) == this.expr2.getValue(params);
          if ("===" == this.type) return this.expr1.getValue(params) === this.expr2.getValue(params);
          if ("!==" == this.type) return this.expr1.getValue(params) !== this.expr2.getValue(params);
          if ("!=" == this.type) return this.expr1.getValue(params) != this.expr2.getValue(params);
          if ("&" == this.type) return this.expr1.getValue(params) & this.expr2.getValue(params);
          if ("~" == this.type) return ~this.expr1.getValue(params);
          if ("^" == this.type) return this.expr1.getValue(params) ^ this.expr2.getValue(params);
          if ("|" == this.type) return this.expr1.getValue(params) | this.expr2.getValue(params);
          if ("&&" == this.type) return this.expr1.getValue(params) && this.expr2.getValue(params);
          if ("||" == this.type) return this.expr1.getValue(params) || this.expr2.getValue(params);
          if ("=" == this.type) {
            this.expr1.setValue(this.expr2.getValue(params), params);
            return this.expr1.getValue(params);
          }
          if ("*=" == this.type) {
            this.expr1.setValue(this.expr1.getValue(params) * this.expr2.getValue(params), params);
            return this.expr1.getValue(params);
          }
          if ("/=" == this.type) {
            this.expr1.setValue(this.expr1.getValue(params) / this.expr2.getValue(params), params);
            return this.expr1.getValue(params);
          }
          if ("%=" == this.type) {
            this.expr1.setValue(this.expr1.getValue(params) % this.expr2.getValue(params), params);
            return this.expr1.getValue(params);
          }
          if ("&=" == this.type) {
            this.expr1.setValue(this.expr1.getValue(params) & this.expr2.getValue(params), params);
            return this.expr1.getValue(params);
          }
          if ("+=" == this.type) {
            this.expr1.setValue(this.expr1.getValue(params) + this.expr2.getValue(params), params);
            return this.expr1.getValue(params);
          }
          if ("-=" == this.type) {
            this.expr1.setValue(this.expr1.getValue(params) - this.expr2.getValue(params), params);
            return this.expr1.getValue(params);
          }
          if ("||=" == this.type) {
            this.expr1.setValue(this.expr1.getValue(params) || this.expr2.getValue(params), params);
            return this.expr1.getValue(params);
          }
          if ("<<=" == this.type) {
            this.expr1.setValue(this.expr1.getValue(params) << this.expr2.getValue(params), params);
            return this.expr1.getValue(params);
          }
          if (">>=" == this.type) {
            this.expr1.setValue(this.expr1.getValue(params) >> this.expr2.getValue(params), params);
            return this.expr1.getValue(params);
          }
          if ("^=" == this.type) {
            this.expr1.setValue(this.expr1.getValue(params) ^ this.expr2.getValue(params), params);
            return this.expr1.getValue(params);
          }
          if ("|=" == this.type) {
            this.expr1.setValue(this.expr1.getValue(params) | this.expr2.getValue(params), params);
            return this.expr1.getValue(params);
          }
          if ("?:" == this.type) return this.expr1.getValue(params) ? this.expr2.getValue(params) : this.expr3.getValue(params);
          if ("spfor" == this.type) {
            var info = params || {};
            info["$s"] = 0;
            info["$len"] = this.expr1.getAttribute("length");
            info["$i"] = null;
            for (var i = 0; i < info["$len"]; i++) {
              info["$i"] = this.expr1.getAttribute(i);
              this.expr2.getValue(info);
            }
            return info.$s;
          }
          return null;
        };
        Expr.prototype.setValue = function(val, params) {
          "Atr" == this.type && this.expr1.setValue(val, params);
        };
        return Expr;
      }();
      lib.Expr = Expr;
    })(lib || (lib = {}));
    (function(lib) {
      var ExprAtr = function() {
        function ExprAtr() {
          this.type = "attribute";
          this.list = [];
          this.equalBefore = false;
        }
        ExprAtr.prototype.addItem = function(item) {
          if (0 == this.list.length && "id" == item.type && "this" == item.val) return;
          0 == this.list.length && "." == item.type && (item.type = "id");
          this.list.push(item);
        };
        ExprAtr.prototype.checkPropertyBinding = function(commonInfo) {
          var atr;
          var getValue = false;
          if ("()" == this.list[0].type) this.list[0].val.checkPropertyBinding(commonInfo); else if ("object" == this.list[0].type) this.list[0].val.checkPropertyBinding(commonInfo); else if ("id" == this.list[0].type) {
            commonInfo.specialFor && "$i" == this.list[0].val && this.checkSpecialFor(commonInfo.specialFor, commonInfo.binding);
            getValue = this.list[0].getValue;
            var name = this.list[0].val;
            "this" == name && this.list.shift();
            if (commonInfo.objects["this"] && null != commonInfo.objects["this"][name]) {
              atr = commonInfo.objects["this"][name];
              this.before = commonInfo.objects["this"];
            } else if (null != commonInfo.objects[name]) {
              this.before = commonInfo.objects[name];
              this.beforeClass = false;
              this.equalBefore = true;
            } else if (null != commonInfo.classes[name]) {
              this.before = commonInfo.classes[name];
              this.beforeClass = true;
              this.equalBefore = true;
            } else if (commonInfo.checks) for (var c = 0; c < commonInfo.checks.length; c++) {
              try {
                commonInfo.checks[c] instanceof lib.ObjectValue ? null !== commonInfo.checks[c][name + "Value"] && commonInfo.checks[c][name + "Value"] instanceof lib.Value && (atr = commonInfo.checks[c][name + "Value"]) : atr = commonInfo.checks[c][name];
                atr && (this.before = commonInfo.checks[c]);
              } catch (e) {
                atr = null;
                this.before = null;
              }
              if (atr) break;
            }
          }
          for (var i = 1; i < this.list.length; i++) if ("." == this.list[i].type) {
            if (atr) {
              var atrName = this.list[i].val;
              getValue = this.list[i].getValue;
              try {
                atr = null !== atr[atrName + "Value"] && atr[atrName + "Value"] instanceof lib.Value ? atr[atrName + "Value"] : atr[atrName];
              } catch (e) {
                try {
                  atr = atr[atrName];
                } catch (e) {}
                atr = null;
              }
            }
          } else if ("call" == this.list[i].type) {
            atr = null;
            this.list[i].val.checkPropertyBinding(commonInfo);
          }
          if (atr && atr instanceof lib.Value && !getValue) {
            this.value = atr;
            commonInfo.result.push(atr);
          }
        };
        ExprAtr.prototype.getValue = function(params) {
          void 0 === params && (params = null);
          if (this.value) return this.value instanceof lib.ArrayValue || this.value instanceof lib.ObjectValue ? this.value : this.value.value;
          var getValue = false;
          var atr;
          var lastAtr = null;
          if ("()" == this.list[0].type) atr = this.list[0].val.getValue(params); else if ("object" == this.list[0].type) atr = this.list[0].val.getValue(params); else if ("id" == this.list[0].type) {
            params && null != params[this.list[0].val] && (this.before = params);
            getValue = this.list[0].getValue;
            atr = this.before;
            lastAtr = this.before;
            if (!this.equalBefore) try {
              atr = atr[this.list[0].val];
            } catch (e) {
              return null;
            }
          }
          for (var i = 1; i < this.list.length; i++) try {
            if ("." == this.list[i].type) {
              atr = null !== atr[this.list[i].val] && atr[this.list[i].val + "Value"] instanceof lib.Value ? atr[this.list[i].val + "Value"] : atr[this.list[i].val];
              getValue = this.list[i].getValue;
            } else "call" == this.list[i].type && (atr = 2 == i && this.beforeClass ? atr.apply(null, this.list[i].val.getValueList()) : atr.apply(lastAtr, this.list[i].val.getValueList()));
            if (i < this.list.length - 1 && "call" == this.list[i + 1].type) continue;
            lastAtr = atr;
          } catch (e) {
            return null;
          }
          !getValue && atr instanceof lib.Value && (atr = atr.value);
          return atr;
        };
        ExprAtr.prototype.setValue = function(val, params) {
          if (this.value) {
            this.value.value = val;
            return;
          }
          var atr;
          if (!(this.list.length > 1)) {
            if ("id" == this.list[0].type) if (params && null != params[this.list[0].val]) params[this.list[0].val] = val; else try {
              this.before[this.list[0].val] = val;
            } catch (e) {
              return null;
            }
            return;
          }
          if ("id" == this.list[0].type) if (params && null != params[this.list[0].val]) atr = params[this.list[0].val]; else try {
            atr = this.before[this.list[0].val];
          } catch (e) {
            return null;
          }
          for (var i = 1; i < this.list.length; i++) try {
            "." == this.list[i].type && (i == this.list.length - 1 ? atr[this.list[i].val] = val : atr = atr[this.list[i].val]);
          } catch (e) {
            return;
          }
        };
        ExprAtr.prototype.getAttribute = function(name) {
          var val = this.getValue();
          return val[name];
        };
        ExprAtr.prototype.checkSpecialFor = function(list, binding) {
          var checkItemListener = function(item, type) {
            if (binding.hasDispose) return;
            var atr = item;
            var lastAtr = null;
            for (var i = 1; i < this.list.length; i++) try {
              "." == this.list[i].type ? atr = atr[this.list[i].val] : "call" == this.list[i].type && (atr = 2 == i && this.beforeClass ? atr.apply(null, this.list[i].val.getValueList()) : atr.apply(lastAtr, this.list[i].val.getValueList()));
              if (i < this.list.length - 1 && "call" == this.list[i + 1].type) continue;
            } catch (e) {
              return null;
            }
            atr instanceof lib.Value && binding["$" + type + "ValueListener"](atr);
          };
          if (this.list.length > 1) for (var i = 0; i < list.length; i++) checkItemListener.call(this, list[i], "add");
          list.addListener(lib.Event.ADD, function(e) {
            checkItemListener.call(this, e.data, "add");
          }, this);
          list.addListener(lib.Event.REMOVE, function(e) {
            checkItemListener.call(this, e.data, "remove");
          }, this);
        };
        ExprAtr.prototype.print = function() {
          var content = "";
          for (var i = 0; i < this.list.length; i++) content += this.list[i].val;
          return content;
        };
        return ExprAtr;
      }();
      lib.ExprAtr = ExprAtr;
    })(lib || (lib = {}));
    (function(lib) {
      var ExprAtrItem = function() {
        function ExprAtrItem(type, val, getValue) {
          void 0 === getValue && (getValue = false);
          this.type = type;
          this.val = val;
          this.getValue = getValue;
        }
        return ExprAtrItem;
      }();
      lib.ExprAtrItem = ExprAtrItem;
    })(lib || (lib = {}));
    (function(lib) {
      var ExprStmt = function() {
        function ExprStmt(expr) {
          this.type = "stmt_expr";
          this.expr = expr;
        }
        ExprStmt.prototype.checkPropertyBinding = function(commonInfo) {
          this.expr.checkPropertyBinding(commonInfo);
        };
        ExprStmt.prototype.getValue = function() {
          return this.expr.getValue();
        };
        return ExprStmt;
      }();
      lib.ExprStmt = ExprStmt;
    })(lib || (lib = {}));
    (function(lib) {
      var ObjectAtr = function() {
        function ObjectAtr(list) {
          this.list = list;
          for (var i = 0; i < list.length; i++) list[i][0] = list[i][0].getValue();
        }
        ObjectAtr.prototype.checkPropertyBinding = function(commonInfo) {
          for (var i = 0; i < this.list.length; i++) this.list[i][1].checkPropertyBinding(commonInfo);
        };
        ObjectAtr.prototype.getValue = function() {
          var val = {};
          for (var i = 0; i < this.list.length; i++) val[this.list[i][0]] = this.list[i][1].getValue();
          return val;
        };
        return ObjectAtr;
      }();
      lib.ObjectAtr = ObjectAtr;
    })(lib || (lib = {}));
    (function(lib) {
      var ParserItem = function() {
        function ParserItem() {}
        return ParserItem;
      }();
      lib.ParserItem = ParserItem;
    })(lib || (lib = {}));
    (function(lib) {
      var Stmts = function() {
        function Stmts() {
          this.type = "stmts";
          this.list = [];
        }
        Stmts.prototype.addStmt = function(stmt) {
          this.list.push(stmt);
        };
        Stmts.prototype.addStmtAt = function(stmt, index) {
          this.list.splice(index, 0, stmt);
        };
        Stmts.prototype.checkPropertyBinding = function(commonInfo) {
          for (var i = 0; i < this.list.length; i++) this.list[i].checkPropertyBinding(commonInfo);
        };
        Stmts.prototype.getValue = function() {
          var value;
          for (var i = 0; i < this.list.length; i++) 0 == i ? value = this.list[i].getValue() : this.list[i].getValue();
          return value;
        };
        return Stmts;
      }();
      lib.Stmts = Stmts;
    })(lib || (lib = {}));
    window.lib = lib;
    var mvc;
    (function(mvc) {
      var Controller = function() {
        function Controller(key) {
          if (null != Controller.instanceMap[key]) throw new Error(Controller.MULTITON_MSG);
          this._multitonKey = key;
          Controller.instanceMap[this._multitonKey] = this;
          this.commandMap = {};
          this.initializeController();
        }
        Object.defineProperty(Controller.prototype, "multitonKey", {
          get: function() {
            return this._multitonKey;
          },
          enumerable: true,
          configurable: true
        });
        Controller.prototype.initializeController = function() {
          this.view = mvc.View.getInstance(this._multitonKey);
        };
        Controller.prototype.registerCommand = function(notificationName, commandClass) {
          if (this.commandMap[notificationName]) throw new Error(Controller.CONTROLLER_MSG);
          this.view.registerObserver(notificationName, new mvc.Observer(this.executeCommand, this));
          this.commandMap[notificationName] = commandClass;
        };
        Controller.prototype.hasCommand = function(notificationName) {
          return !!this.commandMap[notificationName];
        };
        Controller.prototype.removeCommand = function(notificationName) {
          if (this.commandMap[notificationName]) {
            this.view.removeObserver(notificationName, this);
            delete this.commandMap[notificationName];
          }
        };
        Controller.prototype.executeCommand = function(notification) {
          if (!this.commandMap[notification.name]) return;
          var commandClass = this.commandMap[notification.name];
          var command = new commandClass();
          command.initializeNotifier(this._multitonKey);
          command.execute(notification);
        };
        Controller.getInstance = function(key) {
          if (null == key) return null;
          null == Controller.instanceMap[key] && new Controller(key);
          return Controller.instanceMap[key];
        };
        Controller.remove = function(key) {
          var controller = Controller.instanceMap[key];
          delete Controller.instanceMap[key];
          return controller;
        };
        Controller.MULTITON_MSG = "controller key for this Multiton key already constructed";
        Controller.CONTROLLER_MSG = "the notification has been registered with another command.";
        Controller.instanceMap = {};
        return Controller;
      }();
      mvc.Controller = Controller;
    })(mvc || (mvc = {}));
    (function(mvc) {
      var Model = function() {
        function Model(key) {
          if (Model.instanceMap[key]) throw new Error(Model.MULTITON_MSG);
          this._multitonKey = key;
          Model.instanceMap[key] = this;
          this.proxyMap = {};
          this.initializeModel();
        }
        Object.defineProperty(Model.prototype, "multitonKey", {
          get: function() {
            return this._multitonKey;
          },
          enumerable: true,
          configurable: true
        });
        Model.prototype.initializeModel = function() {};
        Model.prototype.registerProxy = function(proxy) {
          proxy.initializeNotifier(this._multitonKey);
          this.proxyMap[proxy.name] = proxy;
          proxy.onRegister();
        };
        Model.prototype.getProxy = function(proxyName) {
          return this.proxyMap[proxyName];
        };
        Model.prototype.hasProxy = function(proxyName) {
          return !!this.proxyMap[proxyName];
        };
        Model.prototype.removeProxy = function(proxyName) {
          var proxy = this.proxyMap[proxyName];
          if (proxy) {
            delete this.proxyMap[proxyName];
            proxy.onRemove();
          }
          return proxy;
        };
        Model.getInstance = function(key) {
          if (null == key) return null;
          null == Model.instanceMap[key] && new Model(key);
          return Model.instanceMap[key];
        };
        Model.remove = function(key) {
          var model = Model.instanceMap[key];
          delete Model.instanceMap[key];
          return model;
        };
        Model.MULTITON_MSG = "Model instance for this Multiton key already constructed!";
        Model.instanceMap = {};
        return Model;
      }();
      mvc.Model = Model;
    })(mvc || (mvc = {}));
    (function(mvc) {
      var View = function() {
        function View(key) {
          if (null != View.instanceMap[key]) throw new Error(View.MULTITON_MSG);
          this._multitonKey = key;
          View.instanceMap[this.multitonKey] = this;
          this.moduleMap = {};
          this.mediatorMap = {};
          this.observerMap = {};
          this.initializeView();
        }
        View.prototype.initializeView = function() {};
        View.prototype.registerObserver = function(notificationName, observer) {
          this.observerMap[notificationName] || (this.observerMap[notificationName] = []);
          this.observerMap[notificationName].push(observer);
        };
        View.prototype.removeObserver = function(notificationName, context) {
          if (!this.observerMap[notificationName]) return;
          var observers = this.observerMap[notificationName];
          for (var i = 0, len = observers.length; i < len; i++) if (observers[i].compareNotifyContext(context)) {
            observers.splice(i, 1);
            break;
          }
          observers.length || delete this.observerMap[notificationName];
        };
        View.prototype.notifyObservers = function(notification) {
          if (this.observerMap[notification.name]) {
            var observers_ref = this.observerMap[notification.name];
            var observers = observers_ref.concat();
            for (var i = 0, len = observers.length; i < len; i++) observers[i].notifyObserver(notification);
          }
        };
        View.prototype.registerMediator = function(mediator) {
          if (this.mediatorMap[mediator.name]) return;
          mediator.initializeNotifier(this._multitonKey);
          this.mediatorMap[mediator.name] = mediator;
          var interests = mediator.listNotificationInterests();
          if (interests.length) {
            var observer = new mvc.Observer(mediator.handleNotification, mediator);
            for (var i = 0, len = interests.length; i < len; i++) this.registerObserver(interests[i], observer);
          }
          mediator.onRegister();
        };
        View.prototype.getMediator = function(name) {
          return this.mediatorMap[name];
        };
        View.prototype.removeMediator = function(mediatorName) {
          var mediator = this.mediatorMap[mediatorName];
          if (mediator) {
            var interests = mediator.listNotificationInterests();
            for (var i = 0, len = interests.length; i < len; i++) this.removeObserver(interests[i], mediator);
            delete this.mediatorMap[mediatorName];
            mediator.onRemove();
          }
          return mediator;
        };
        View.prototype.hasMediator = function(mediatorName) {
          return !!this.mediatorMap[mediatorName];
        };
        View.prototype.registerModule = function(module) {
          if (this.moduleMap[module.name]) return;
          module.initializeNotifier(this._multitonKey);
          this.moduleMap[module.name] = module;
          var interests = module.listNotificationInterests();
          if (interests.length) {
            var observer = new mvc.Observer(module.handleNotification, module);
            for (var i = 0, len = interests.length; i < len; i++) this.registerObserver(interests[i], observer);
          }
          module.onRegister();
        };
        View.prototype.getModule = function(moduleName) {
          return this.moduleMap[moduleName];
        };
        View.prototype.removeModule = function(moduleName) {
          var module = this.moduleMap[moduleName];
          if (module) {
            var interests = module.listNotificationInterests();
            for (var i = 0, len = interests.length; i < len; i++) this.removeObserver(interests[i], module);
            delete this.moduleMap[moduleName];
            module.onRemove();
          }
          return module;
        };
        View.prototype.hasModule = function(moduleName) {
          return !!this.moduleMap[moduleName];
        };
        Object.defineProperty(View.prototype, "multitonKey", {
          get: function() {
            return this._multitonKey;
          },
          enumerable: true,
          configurable: true
        });
        View.getInstance = function(key) {
          if (null == key) return null;
          null == View.instanceMap[key] && new View(key);
          return View.instanceMap[key];
        };
        View.remove = function(key) {
          var view = View.instanceMap[key];
          delete View.instanceMap[key];
          return view;
        };
        View.instanceMap = {};
        View.MULTITON_MSG = "View instance for this Multiton key already constructed!";
        return View;
      }();
      mvc.View = View;
    })(mvc || (mvc = {}));
    (function(mvc) {
      var Notification = function() {
        function Notification(name, body, type) {
          void 0 === type && (type = "");
          this._name = name;
          this._body = body;
          this._type = type;
        }
        Object.defineProperty(Notification.prototype, "name", {
          get: function() {
            return this._name;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Notification.prototype, "body", {
          get: function() {
            return this._body;
          },
          set: function(val) {
            this._body = val;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Notification.prototype, "type", {
          get: function() {
            return this._type;
          },
          set: function(val) {
            this._type = val;
          },
          enumerable: true,
          configurable: true
        });
        Notification.prototype.toString = function() {
          var msg = "Notification Name: " + this.name;
          msg += "\nBody:" + (null == this.body ? "null" : this.body.toString());
          msg += "\nType:" + (null == this.type ? "null" : this.type);
          return msg;
        };
        return Notification;
      }();
      mvc.Notification = Notification;
    })(mvc || (mvc = {}));
    (function(mvc) {
      var Notifier = function() {
        function Notifier() {}
        Object.defineProperty(Notifier.prototype, "multitonKey", {
          get: function() {
            return this._multitonKey;
          },
          enumerable: true,
          configurable: true
        });
        Notifier.prototype.initializeNotifier = function(key) {
          this._multitonKey = key + "";
          this._facade = this.facade;
        };
        Notifier.prototype.sendNotification = function(name, body, type) {
          void 0 === type && (type = "");
          var facade = this.facade;
          facade && facade.sendNotification(name, body, type);
        };
        Object.defineProperty(Notifier.prototype, "facade", {
          get: function() {
            if (null == this._multitonKey) throw new Error(Notifier.MULTITON_MSG);
            return mvc.Facade.getInstance(this._multitonKey);
          },
          enumerable: true,
          configurable: true
        });
        Notifier.MULTITON_MSG = "multitonKey for this Notifier not yet initialized!";
        return Notifier;
      }();
      mvc.Notifier = Notifier;
    })(mvc || (mvc = {}));
    (function(mvc) {
      var Observer = function() {
        function Observer(notify, context) {
          this._notify = notify;
          this._context = context;
        }
        Object.defineProperty(Observer.prototype, "notify", {
          get: function() {
            return this._notify;
          },
          set: function(val) {
            this._notify = val;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Observer.prototype, "context", {
          get: function() {
            return this._context;
          },
          set: function(val) {
            this._context = val;
          },
          enumerable: true,
          configurable: true
        });
        Observer.prototype.notifyObserver = function(notification) {
          this._notify.call(this._context, notification);
        };
        Observer.prototype.compareNotifyContext = function(context) {
          return this._context === context;
        };
        return Observer;
      }();
      mvc.Observer = Observer;
    })(mvc || (mvc = {}));
    (function(mvc) {
      var MacroCommand = function(_super) {
        __extends(MacroCommand, _super);
        function MacroCommand() {
          var _this = _super.call(this) || this;
          _this._subCommands = [];
          _this.initializeMacroCommand();
          return _this;
        }
        MacroCommand.prototype.addSubCommand = function(commandClassRef) {
          this._subCommands.push(commandClassRef);
        };
        MacroCommand.prototype.execute = function(notification) {
          var subCommands = this._subCommands;
          while (subCommands.length > 0) {
            var ref = subCommands.shift();
            var cmd = new ref();
            cmd.initializeNotifier(this.multitonKey);
            cmd.execute(notification);
          }
        };
        return MacroCommand;
      }(mvc.Notifier);
      mvc.MacroCommand = MacroCommand;
    })(mvc || (mvc = {}));
    (function(mvc) {
      var SimpleCommand = function(_super) {
        __extends(SimpleCommand, _super);
        function SimpleCommand() {
          return _super.call(this) || this;
        }
        SimpleCommand.prototype.execute = function(notification) {};
        return SimpleCommand;
      }(mvc.Notifier);
      mvc.SimpleCommand = SimpleCommand;
    })(mvc || (mvc = {}));
    (function(mvc) {
      var Facade = function() {
        function Facade(key) {
          if (null != Facade.instanceMap[key]) throw new Error(Facade.MULTITON_MSG);
          this.initializeNotifier(key);
          Facade.instanceMap[key] = this;
          this.initializeFacade();
        }
        Object.defineProperty(Facade.prototype, "multitonKey", {
          get: function() {
            return this._multitonKey;
          },
          enumerable: true,
          configurable: true
        });
        Facade.prototype.initializeNotifier = function(key) {
          this._multitonKey = key;
        };
        Facade.prototype.initializeFacade = function() {
          this.initializeModel();
          this.initializeController();
          this.initializeView();
        };
        Facade.prototype.initializeModel = function() {
          if (null != this.model) return;
          this.model = mvc.Model.getInstance(this.multitonKey);
        };
        Facade.prototype.initializeController = function() {
          if (null != this.controller) return;
          this.controller = mvc.Controller.getInstance(this.multitonKey);
        };
        Facade.prototype.initializeView = function() {
          if (null != this.view) return;
          this.view = mvc.View.getInstance(this.multitonKey);
        };
        Facade.prototype.registerCommand = function(notificationName, commandClassRef) {
          this.controller.registerCommand(notificationName, commandClassRef);
        };
        Facade.prototype.removeCommand = function(notificationName) {
          this.controller.removeCommand(notificationName);
        };
        Facade.prototype.hasCommand = function(notificationName) {
          return this.controller.hasCommand(notificationName);
        };
        Facade.prototype.registerProxy = function(proxy) {
          this.model.registerProxy(proxy);
        };
        Facade.prototype.getProxy = function(proxyName) {
          return this.model.getProxy(proxyName);
        };
        Facade.prototype.removeProxy = function(proxyName) {
          var proxy = null;
          null != this.model && (proxy = this.model.removeProxy(proxyName));
          return proxy;
        };
        Facade.prototype.hasProxy = function(proxyName) {
          return this.model.hasProxy(proxyName);
        };
        Facade.prototype.registerMediator = function(mediator) {
          null != this.view && this.view.registerMediator(mediator);
        };
        Facade.prototype.getMediator = function(mediatorName) {
          return this.view.getMediator(mediatorName);
        };
        Facade.prototype.removeMediator = function(mediatorName) {
          var mediator = null;
          null != this.view && (mediator = this.view.removeMediator(mediatorName));
          return mediator;
        };
        Facade.prototype.hasMediator = function(mediatorName) {
          return this.view.hasMediator(mediatorName);
        };
        Facade.prototype.registerModule = function(module) {
          null != this.view && this.view.registerModule(module);
        };
        Facade.prototype.getModule = function(moduleName) {
          return this.view.getModule(moduleName);
        };
        Facade.prototype.removeModule = function(moduleName) {
          var module = null;
          null != this.view && (module = this.view.removeModule(moduleName));
          return module;
        };
        Facade.prototype.hasModule = function(moduleName) {
          return this.view.hasModule(moduleName);
        };
        Facade.prototype.sendNotification = function(notificationName, body, type) {
          void 0 === type && (type = "");
          this.notifyObservers(new mvc.Notification(notificationName, body, type));
        };
        Facade.prototype.notifyObservers = function(notification) {
          null != this.view && this.view.notifyObservers(notification);
        };
        Facade.getInstance = function(key) {
          if (null == key) return null;
          null == Facade.instanceMap[key] && (Facade.instanceMap[key] = new Facade(key));
          return Facade.instanceMap[key];
        };
        Facade.prototype.has = function(key) {
          return !!Facade.instanceMap[key];
        };
        Facade.remove = function(key) {
          if (null == Facade.instanceMap[key]) return;
          mvc.Model.remove(key);
          mvc.View.remove(key);
          mvc.Controller.remove(key);
          delete Facade.instanceMap[key];
        };
        Facade.MULTITON_MSG = "Facade instance for this Multiton key already constructed!";
        Facade.instanceMap = {};
        return Facade;
      }();
      mvc.Facade = Facade;
    })(mvc || (mvc = {}));
    (function(mvc) {
      var Mediator = function(_super) {
        __extends(Mediator, _super);
        function Mediator(name, viewComponent) {
          var _this = _super.call(this) || this;
          _this._name = name || Mediator.NAME;
          _this._viewComponent = viewComponent;
          return _this;
        }
        Object.defineProperty(Mediator.prototype, "name", {
          get: function() {
            return this._name;
          },
          enumerable: true,
          configurable: true
        });
        Mediator.prototype.load = function() {
          return new Promise(this.asyncLoad.bind(this));
        };
        Mediator.prototype.asyncLoad = function(resolve) {
          this._loadResolve = resolve;
        };
        Mediator.prototype.loadComplete = function() {
          this._loadResolve();
          this._loadResolve = null;
        };
        Object.defineProperty(Mediator.prototype, "viewComponent", {
          get: function() {
            return this._viewComponent;
          },
          set: function(val) {
            this._viewComponent = val;
          },
          enumerable: true,
          configurable: true
        });
        Mediator.prototype.listNotificationInterests = function() {
          return [];
        };
        Mediator.prototype.handleNotification = function(notification) {};
        Mediator.prototype.onRegister = function() {};
        Mediator.prototype.onRemove = function() {};
        Mediator.NAME = "Mediator";
        return Mediator;
      }(mvc.Notifier);
      mvc.Mediator = Mediator;
    })(mvc || (mvc = {}));
    (function(mvc) {
      var Module = function(_super) {
        __extends(Module, _super);
        function Module(name, config) {
          void 0 === config && (config = null);
          var _this = _super.call(this) || this;
          _this._name = name || mvc.Mediator.NAME;
          _this._config = config;
          return _this;
        }
        Object.defineProperty(Module.prototype, "name", {
          get: function() {
            return this._name;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Module.prototype, "config", {
          get: function() {
            return this._config;
          },
          enumerable: true,
          configurable: true
        });
        Module.prototype.listNotificationInterests = function() {
          return [];
        };
        Module.prototype.handleNotification = function(notification) {};
        Module.prototype.onRegister = function() {};
        Module.prototype.onRemove = function() {};
        Module.NAME = "Module";
        return Module;
      }(mvc.Notifier);
      mvc.Module = Module;
    })(mvc || (mvc = {}));
    (function(mvc) {
      var Proxy = function(_super) {
        __extends(Proxy, _super);
        function Proxy(name, data) {
          var _this = _super.call(this) || this;
          _this._name = name || Proxy.NAME;
          _this._data = data;
          return _this;
        }
        Object.defineProperty(Proxy.prototype, "name", {
          get: function() {
            return this._name;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Proxy.prototype, "data", {
          get: function() {
            return this._data;
          },
          set: function(val) {
            this._data = val;
          },
          enumerable: true,
          configurable: true
        });
        Proxy.prototype.onRegister = function() {};
        Proxy.prototype.onRemove = function() {};
        Proxy.NAME = "Proxy";
        return Proxy;
      }(mvc.Notifier);
      mvc.Proxy = Proxy;
    })(mvc || (mvc = {}));
    window.mvc = mvc;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Go", "Panel", "mvc", "GameCode" ]);