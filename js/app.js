(() => {
    var __webpack_modules__ = {
        895: () => {
            "use strict";
            if ("function" !== typeof Object.assign) Object.assign = function(target) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
                if (!target) throw TypeError("Cannot convert undefined or null to object");
                var _loop_1 = function(source) {
                    if (source) Object.keys(source).forEach((function(key) {
                        return target[key] = source[key];
                    }));
                };
                for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                    var source = args_1[_a];
                    _loop_1(source);
                }
                return target;
            };
        },
        614: function(module) {
            /*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
            (function webpackUniversalModuleDefinition(root, factory) {
                if (true) module.exports = factory();
            })(0, (function() {
                return function(modules) {
                    var installedModules = {};
                    function __nested_webpack_require_737__(moduleId) {
                        if (installedModules[moduleId]) return installedModules[moduleId].exports;
                        var module = installedModules[moduleId] = {
                            exports: {},
                            id: moduleId,
                            loaded: false
                        };
                        modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_737__);
                        module.loaded = true;
                        return module.exports;
                    }
                    __nested_webpack_require_737__.m = modules;
                    __nested_webpack_require_737__.c = installedModules;
                    __nested_webpack_require_737__.p = "";
                    return __nested_webpack_require_737__(0);
                }([ function(module, exports, __nested_webpack_require_2018__) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    var _createClass = function() {
                        function defineProperties(target, props) {
                            for (var i = 0; i < props.length; i++) {
                                var descriptor = props[i];
                                descriptor.enumerable = descriptor.enumerable || false;
                                descriptor.configurable = true;
                                if ("value" in descriptor) descriptor.writable = true;
                                Object.defineProperty(target, descriptor.key, descriptor);
                            }
                        }
                        return function(Constructor, protoProps, staticProps) {
                            if (protoProps) defineProperties(Constructor.prototype, protoProps);
                            if (staticProps) defineProperties(Constructor, staticProps);
                            return Constructor;
                        };
                    }();
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                    }
                    var _initializerJs = __nested_webpack_require_2018__(1);
                    var _htmlParserJs = __nested_webpack_require_2018__(3);
                    var Typed = function() {
                        function Typed(elementId, options) {
                            _classCallCheck(this, Typed);
                            _initializerJs.initializer.load(this, options, elementId);
                            this.begin();
                        }
                        _createClass(Typed, [ {
                            key: "toggle",
                            value: function toggle() {
                                this.pause.status ? this.start() : this.stop();
                            }
                        }, {
                            key: "stop",
                            value: function stop() {
                                if (this.typingComplete) return;
                                if (this.pause.status) return;
                                this.toggleBlinking(true);
                                this.pause.status = true;
                                this.options.onStop(this.arrayPos, this);
                            }
                        }, {
                            key: "start",
                            value: function start() {
                                if (this.typingComplete) return;
                                if (!this.pause.status) return;
                                this.pause.status = false;
                                if (this.pause.typewrite) this.typewrite(this.pause.curString, this.pause.curStrPos); else this.backspace(this.pause.curString, this.pause.curStrPos);
                                this.options.onStart(this.arrayPos, this);
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.reset(false);
                                this.options.onDestroy(this);
                            }
                        }, {
                            key: "reset",
                            value: function reset() {
                                var restart = arguments.length <= 0 || void 0 === arguments[0] ? true : arguments[0];
                                clearInterval(this.timeout);
                                this.replaceText("");
                                if (this.cursor && this.cursor.parentNode) {
                                    this.cursor.parentNode.removeChild(this.cursor);
                                    this.cursor = null;
                                }
                                this.strPos = 0;
                                this.arrayPos = 0;
                                this.curLoop = 0;
                                if (restart) {
                                    this.insertCursor();
                                    this.options.onReset(this);
                                    this.begin();
                                }
                            }
                        }, {
                            key: "begin",
                            value: function begin() {
                                var _this = this;
                                this.options.onBegin(this);
                                this.typingComplete = false;
                                this.shuffleStringsIfNeeded(this);
                                this.insertCursor();
                                if (this.bindInputFocusEvents) this.bindFocusEvents();
                                this.timeout = setTimeout((function() {
                                    if (!_this.currentElContent || 0 === _this.currentElContent.length) _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos); else _this.backspace(_this.currentElContent, _this.currentElContent.length);
                                }), this.startDelay);
                            }
                        }, {
                            key: "typewrite",
                            value: function typewrite(curString, curStrPos) {
                                var _this2 = this;
                                if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
                                    this.el.classList.remove(this.fadeOutClass);
                                    if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
                                }
                                var humanize = this.humanizer(this.typeSpeed);
                                var numChars = 1;
                                if (true === this.pause.status) {
                                    this.setPauseStatus(curString, curStrPos, true);
                                    return;
                                }
                                this.timeout = setTimeout((function() {
                                    curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
                                    var pauseTime = 0;
                                    var substr = curString.substr(curStrPos);
                                    if ("^" === substr.charAt(0)) if (/^\^\d+/.test(substr)) {
                                        var skip = 1;
                                        substr = /\d+/.exec(substr)[0];
                                        skip += substr.length;
                                        pauseTime = parseInt(substr);
                                        _this2.temporaryPause = true;
                                        _this2.options.onTypingPaused(_this2.arrayPos, _this2);
                                        curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                                        _this2.toggleBlinking(true);
                                    }
                                    if ("`" === substr.charAt(0)) {
                                        while ("`" !== curString.substr(curStrPos + numChars).charAt(0)) {
                                            numChars++;
                                            if (curStrPos + numChars > curString.length) break;
                                        }
                                        var stringBeforeSkip = curString.substring(0, curStrPos);
                                        var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
                                        var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
                                        curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
                                        numChars--;
                                    }
                                    _this2.timeout = setTimeout((function() {
                                        _this2.toggleBlinking(false);
                                        if (curStrPos >= curString.length) _this2.doneTyping(curString, curStrPos); else _this2.keepTyping(curString, curStrPos, numChars);
                                        if (_this2.temporaryPause) {
                                            _this2.temporaryPause = false;
                                            _this2.options.onTypingResumed(_this2.arrayPos, _this2);
                                        }
                                    }), pauseTime);
                                }), humanize);
                            }
                        }, {
                            key: "keepTyping",
                            value: function keepTyping(curString, curStrPos, numChars) {
                                if (0 === curStrPos) {
                                    this.toggleBlinking(false);
                                    this.options.preStringTyped(this.arrayPos, this);
                                }
                                curStrPos += numChars;
                                var nextString = curString.substr(0, curStrPos);
                                this.replaceText(nextString);
                                this.typewrite(curString, curStrPos);
                            }
                        }, {
                            key: "doneTyping",
                            value: function doneTyping(curString, curStrPos) {
                                var _this3 = this;
                                this.options.onStringTyped(this.arrayPos, this);
                                this.toggleBlinking(true);
                                if (this.arrayPos === this.strings.length - 1) {
                                    this.complete();
                                    if (false === this.loop || this.curLoop === this.loopCount) return;
                                }
                                this.timeout = setTimeout((function() {
                                    _this3.backspace(curString, curStrPos);
                                }), this.backDelay);
                            }
                        }, {
                            key: "backspace",
                            value: function backspace(curString, curStrPos) {
                                var _this4 = this;
                                if (true === this.pause.status) {
                                    this.setPauseStatus(curString, curStrPos, false);
                                    return;
                                }
                                if (this.fadeOut) return this.initFadeOut();
                                this.toggleBlinking(false);
                                var humanize = this.humanizer(this.backSpeed);
                                this.timeout = setTimeout((function() {
                                    curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
                                    var curStringAtPosition = curString.substr(0, curStrPos);
                                    _this4.replaceText(curStringAtPosition);
                                    if (_this4.smartBackspace) {
                                        var nextString = _this4.strings[_this4.arrayPos + 1];
                                        if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) _this4.stopNum = curStrPos; else _this4.stopNum = 0;
                                    }
                                    if (curStrPos > _this4.stopNum) {
                                        curStrPos--;
                                        _this4.backspace(curString, curStrPos);
                                    } else if (curStrPos <= _this4.stopNum) {
                                        _this4.arrayPos++;
                                        if (_this4.arrayPos === _this4.strings.length) {
                                            _this4.arrayPos = 0;
                                            _this4.options.onLastStringBackspaced();
                                            _this4.shuffleStringsIfNeeded();
                                            _this4.begin();
                                        } else _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
                                    }
                                }), humanize);
                            }
                        }, {
                            key: "complete",
                            value: function complete() {
                                this.options.onComplete(this);
                                if (this.loop) this.curLoop++; else this.typingComplete = true;
                            }
                        }, {
                            key: "setPauseStatus",
                            value: function setPauseStatus(curString, curStrPos, isTyping) {
                                this.pause.typewrite = isTyping;
                                this.pause.curString = curString;
                                this.pause.curStrPos = curStrPos;
                            }
                        }, {
                            key: "toggleBlinking",
                            value: function toggleBlinking(isBlinking) {
                                if (!this.cursor) return;
                                if (this.pause.status) return;
                                if (this.cursorBlinking === isBlinking) return;
                                this.cursorBlinking = isBlinking;
                                if (isBlinking) this.cursor.classList.add("typed-cursor--blink"); else this.cursor.classList.remove("typed-cursor--blink");
                            }
                        }, {
                            key: "humanizer",
                            value: function humanizer(speed) {
                                return Math.round(Math.random() * speed / 2) + speed;
                            }
                        }, {
                            key: "shuffleStringsIfNeeded",
                            value: function shuffleStringsIfNeeded() {
                                if (!this.shuffle) return;
                                this.sequence = this.sequence.sort((function() {
                                    return Math.random() - .5;
                                }));
                            }
                        }, {
                            key: "initFadeOut",
                            value: function initFadeOut() {
                                var _this5 = this;
                                this.el.className += " " + this.fadeOutClass;
                                if (this.cursor) this.cursor.className += " " + this.fadeOutClass;
                                return setTimeout((function() {
                                    _this5.arrayPos++;
                                    _this5.replaceText("");
                                    if (_this5.strings.length > _this5.arrayPos) _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0); else {
                                        _this5.typewrite(_this5.strings[0], 0);
                                        _this5.arrayPos = 0;
                                    }
                                }), this.fadeOutDelay);
                            }
                        }, {
                            key: "replaceText",
                            value: function replaceText(str) {
                                if (this.attr) this.el.setAttribute(this.attr, str); else if (this.isInput) this.el.value = str; else if ("html" === this.contentType) this.el.innerHTML = str; else this.el.textContent = str;
                            }
                        }, {
                            key: "bindFocusEvents",
                            value: function bindFocusEvents() {
                                var _this6 = this;
                                if (!this.isInput) return;
                                this.el.addEventListener("focus", (function(e) {
                                    _this6.stop();
                                }));
                                this.el.addEventListener("blur", (function(e) {
                                    if (_this6.el.value && 0 !== _this6.el.value.length) return;
                                    _this6.start();
                                }));
                            }
                        }, {
                            key: "insertCursor",
                            value: function insertCursor() {
                                if (!this.showCursor) return;
                                if (this.cursor) return;
                                this.cursor = document.createElement("span");
                                this.cursor.className = "typed-cursor";
                                this.cursor.setAttribute("aria-hidden", true);
                                this.cursor.innerHTML = this.cursorChar;
                                this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
                            }
                        } ]);
                        return Typed;
                    }();
                    exports["default"] = Typed;
                    module.exports = exports["default"];
                }, function(module, exports, __nested_webpack_require_18228__) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    var _extends = Object.assign || function(target) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = arguments[i];
                            for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                        }
                        return target;
                    };
                    var _createClass = function() {
                        function defineProperties(target, props) {
                            for (var i = 0; i < props.length; i++) {
                                var descriptor = props[i];
                                descriptor.enumerable = descriptor.enumerable || false;
                                descriptor.configurable = true;
                                if ("value" in descriptor) descriptor.writable = true;
                                Object.defineProperty(target, descriptor.key, descriptor);
                            }
                        }
                        return function(Constructor, protoProps, staticProps) {
                            if (protoProps) defineProperties(Constructor.prototype, protoProps);
                            if (staticProps) defineProperties(Constructor, staticProps);
                            return Constructor;
                        };
                    }();
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : {
                            default: obj
                        };
                    }
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                    }
                    var _defaultsJs = __nested_webpack_require_18228__(2);
                    var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
                    var Initializer = function() {
                        function Initializer() {
                            _classCallCheck(this, Initializer);
                        }
                        _createClass(Initializer, [ {
                            key: "load",
                            value: function load(self, options, elementId) {
                                if ("string" === typeof elementId) self.el = document.querySelector(elementId); else self.el = elementId;
                                self.options = _extends({}, _defaultsJs2["default"], options);
                                self.isInput = "input" === self.el.tagName.toLowerCase();
                                self.attr = self.options.attr;
                                self.bindInputFocusEvents = self.options.bindInputFocusEvents;
                                self.showCursor = self.isInput ? false : self.options.showCursor;
                                self.cursorChar = self.options.cursorChar;
                                self.cursorBlinking = true;
                                self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
                                self.contentType = self.options.contentType;
                                self.typeSpeed = self.options.typeSpeed;
                                self.startDelay = self.options.startDelay;
                                self.backSpeed = self.options.backSpeed;
                                self.smartBackspace = self.options.smartBackspace;
                                self.backDelay = self.options.backDelay;
                                self.fadeOut = self.options.fadeOut;
                                self.fadeOutClass = self.options.fadeOutClass;
                                self.fadeOutDelay = self.options.fadeOutDelay;
                                self.isPaused = false;
                                self.strings = self.options.strings.map((function(s) {
                                    return s.trim();
                                }));
                                if ("string" === typeof self.options.stringsElement) self.stringsElement = document.querySelector(self.options.stringsElement); else self.stringsElement = self.options.stringsElement;
                                if (self.stringsElement) {
                                    self.strings = [];
                                    self.stringsElement.style.display = "none";
                                    var strings = Array.prototype.slice.apply(self.stringsElement.children);
                                    var stringsLength = strings.length;
                                    if (stringsLength) for (var i = 0; i < stringsLength; i += 1) {
                                        var stringEl = strings[i];
                                        self.strings.push(stringEl.innerHTML.trim());
                                    }
                                }
                                self.strPos = 0;
                                self.arrayPos = 0;
                                self.stopNum = 0;
                                self.loop = self.options.loop;
                                self.loopCount = self.options.loopCount;
                                self.curLoop = 0;
                                self.shuffle = self.options.shuffle;
                                self.sequence = [];
                                self.pause = {
                                    status: false,
                                    typewrite: true,
                                    curString: "",
                                    curStrPos: 0
                                };
                                self.typingComplete = false;
                                for (var i in self.strings) self.sequence[i] = i;
                                self.currentElContent = this.getCurrentElContent(self);
                                self.autoInsertCss = self.options.autoInsertCss;
                                this.appendAnimationCss(self);
                            }
                        }, {
                            key: "getCurrentElContent",
                            value: function getCurrentElContent(self) {
                                var elContent = "";
                                if (self.attr) elContent = self.el.getAttribute(self.attr); else if (self.isInput) elContent = self.el.value; else if ("html" === self.contentType) elContent = self.el.innerHTML; else elContent = self.el.textContent;
                                return elContent;
                            }
                        }, {
                            key: "appendAnimationCss",
                            value: function appendAnimationCss(self) {
                                var cssDataName = "data-typed-js-css";
                                if (!self.autoInsertCss) return;
                                if (!self.showCursor && !self.fadeOut) return;
                                if (document.querySelector("[" + cssDataName + "]")) return;
                                var css = document.createElement("style");
                                css.type = "text/css";
                                css.setAttribute(cssDataName, true);
                                var innerCss = "";
                                if (self.showCursor) innerCss += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ";
                                if (self.fadeOut) innerCss += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ";
                                if (0 === css.length) return;
                                css.innerHTML = innerCss;
                                document.body.appendChild(css);
                            }
                        } ]);
                        return Initializer;
                    }();
                    exports["default"] = Initializer;
                    var initializer = new Initializer;
                    exports.initializer = initializer;
                }, function(module, exports) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    var defaults = {
                        strings: [ "These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!" ],
                        stringsElement: null,
                        typeSpeed: 0,
                        startDelay: 0,
                        backSpeed: 0,
                        smartBackspace: true,
                        shuffle: false,
                        backDelay: 700,
                        fadeOut: false,
                        fadeOutClass: "typed-fade-out",
                        fadeOutDelay: 500,
                        loop: false,
                        loopCount: 1 / 0,
                        showCursor: true,
                        cursorChar: "|",
                        autoInsertCss: true,
                        attr: null,
                        bindInputFocusEvents: false,
                        contentType: "html",
                        onBegin: function onBegin(self) {},
                        onComplete: function onComplete(self) {},
                        preStringTyped: function preStringTyped(arrayPos, self) {},
                        onStringTyped: function onStringTyped(arrayPos, self) {},
                        onLastStringBackspaced: function onLastStringBackspaced(self) {},
                        onTypingPaused: function onTypingPaused(arrayPos, self) {},
                        onTypingResumed: function onTypingResumed(arrayPos, self) {},
                        onReset: function onReset(self) {},
                        onStop: function onStop(arrayPos, self) {},
                        onStart: function onStart(arrayPos, self) {},
                        onDestroy: function onDestroy(self) {}
                    };
                    exports["default"] = defaults;
                    module.exports = exports["default"];
                }, function(module, exports) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    var _createClass = function() {
                        function defineProperties(target, props) {
                            for (var i = 0; i < props.length; i++) {
                                var descriptor = props[i];
                                descriptor.enumerable = descriptor.enumerable || false;
                                descriptor.configurable = true;
                                if ("value" in descriptor) descriptor.writable = true;
                                Object.defineProperty(target, descriptor.key, descriptor);
                            }
                        }
                        return function(Constructor, protoProps, staticProps) {
                            if (protoProps) defineProperties(Constructor.prototype, protoProps);
                            if (staticProps) defineProperties(Constructor, staticProps);
                            return Constructor;
                        };
                    }();
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                    }
                    var HTMLParser = function() {
                        function HTMLParser() {
                            _classCallCheck(this, HTMLParser);
                        }
                        _createClass(HTMLParser, [ {
                            key: "typeHtmlChars",
                            value: function typeHtmlChars(curString, curStrPos, self) {
                                if ("html" !== self.contentType) return curStrPos;
                                var curChar = curString.substr(curStrPos).charAt(0);
                                if ("<" === curChar || "&" === curChar) {
                                    var endTag = "";
                                    if ("<" === curChar) endTag = ">"; else endTag = ";";
                                    while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
                                        curStrPos++;
                                        if (curStrPos + 1 > curString.length) break;
                                    }
                                    curStrPos++;
                                }
                                return curStrPos;
                            }
                        }, {
                            key: "backSpaceHtmlChars",
                            value: function backSpaceHtmlChars(curString, curStrPos, self) {
                                if ("html" !== self.contentType) return curStrPos;
                                var curChar = curString.substr(curStrPos).charAt(0);
                                if (">" === curChar || ";" === curChar) {
                                    var endTag = "";
                                    if (">" === curChar) endTag = "<"; else endTag = "&";
                                    while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
                                        curStrPos--;
                                        if (curStrPos < 0) break;
                                    }
                                    curStrPos--;
                                }
                                return curStrPos;
                            }
                        } ]);
                        return HTMLParser;
                    }();
                    exports["default"] = HTMLParser;
                    var htmlParser = new HTMLParser;
                    exports.htmlParser = htmlParser;
                } ]);
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        /*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
        function round(v) {
            return v + .5 | 0;
        }
        const lim = (v, l, h) => Math.max(Math.min(v, h), l);
        function p2b(v) {
            return lim(round(2.55 * v), 0, 255);
        }
        function n2b(v) {
            return lim(round(255 * v), 0, 255);
        }
        function b2n(v) {
            return lim(round(v / 2.55) / 100, 0, 1);
        }
        function n2p(v) {
            return lim(round(100 * v), 0, 100);
        }
        const map$1 = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            a: 10,
            b: 11,
            c: 12,
            d: 13,
            e: 14,
            f: 15
        };
        const hex = [ ..."0123456789ABCDEF" ];
        const h1 = b => hex[15 & b];
        const h2 = b => hex[(240 & b) >> 4] + hex[15 & b];
        const eq = b => (240 & b) >> 4 === (15 & b);
        const isShort = v => eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
        function hexParse(str) {
            var len = str.length;
            var ret;
            if ("#" === str[0]) if (4 === len || 5 === len) ret = {
                r: 255 & 17 * map$1[str[1]],
                g: 255 & 17 * map$1[str[2]],
                b: 255 & 17 * map$1[str[3]],
                a: 5 === len ? 17 * map$1[str[4]] : 255
            }; else if (7 === len || 9 === len) ret = {
                r: map$1[str[1]] << 4 | map$1[str[2]],
                g: map$1[str[3]] << 4 | map$1[str[4]],
                b: map$1[str[5]] << 4 | map$1[str[6]],
                a: 9 === len ? map$1[str[7]] << 4 | map$1[str[8]] : 255
            };
            return ret;
        }
        const alpha = (a, f) => a < 255 ? f(a) : "";
        function hexString(v) {
            var f = isShort(v) ? h1 : h2;
            return v ? "#" + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f) : void 0;
        }
        const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
        function hsl2rgbn(h, s, l) {
            const a = s * Math.min(l, 1 - l);
            const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return [ f(0), f(8), f(4) ];
        }
        function hsv2rgbn(h, s, v) {
            const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
            return [ f(5), f(3), f(1) ];
        }
        function hwb2rgbn(h, w, b) {
            const rgb = hsl2rgbn(h, 1, .5);
            let i;
            if (w + b > 1) {
                i = 1 / (w + b);
                w *= i;
                b *= i;
            }
            for (i = 0; i < 3; i++) {
                rgb[i] *= 1 - w - b;
                rgb[i] += w;
            }
            return rgb;
        }
        function hueValue(r, g, b, d, max) {
            if (r === max) return (g - b) / d + (g < b ? 6 : 0);
            if (g === max) return (b - r) / d + 2;
            return (r - g) / d + 4;
        }
        function rgb2hsl(v) {
            const range = 255;
            const r = v.r / range;
            const g = v.g / range;
            const b = v.b / range;
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            const l = (max + min) / 2;
            let h, s, d;
            if (max !== min) {
                d = max - min;
                s = l > .5 ? d / (2 - max - min) : d / (max + min);
                h = hueValue(r, g, b, d, max);
                h = 60 * h + .5;
            }
            return [ 0 | h, s || 0, l ];
        }
        function calln(f, a, b, c) {
            return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
        }
        function hsl2rgb(h, s, l) {
            return calln(hsl2rgbn, h, s, l);
        }
        function hwb2rgb(h, w, b) {
            return calln(hwb2rgbn, h, w, b);
        }
        function hsv2rgb(h, s, v) {
            return calln(hsv2rgbn, h, s, v);
        }
        function hue(h) {
            return (h % 360 + 360) % 360;
        }
        function hueParse(str) {
            const m = HUE_RE.exec(str);
            let a = 255;
            let v;
            if (!m) return;
            if (m[5] !== v) a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
            const h = hue(+m[2]);
            const p1 = +m[3] / 100;
            const p2 = +m[4] / 100;
            if ("hwb" === m[1]) v = hwb2rgb(h, p1, p2); else if ("hsv" === m[1]) v = hsv2rgb(h, p1, p2); else v = hsl2rgb(h, p1, p2);
            return {
                r: v[0],
                g: v[1],
                b: v[2],
                a
            };
        }
        function rotate(v, deg) {
            var h = rgb2hsl(v);
            h[0] = hue(h[0] + deg);
            h = hsl2rgb(h);
            v.r = h[0];
            v.g = h[1];
            v.b = h[2];
        }
        function hslString(v) {
            if (!v) return;
            const a = rgb2hsl(v);
            const h = a[0];
            const s = n2p(a[1]);
            const l = n2p(a[2]);
            return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
        }
        const map = {
            x: "dark",
            Z: "light",
            Y: "re",
            X: "blu",
            W: "gr",
            V: "medium",
            U: "slate",
            A: "ee",
            T: "ol",
            S: "or",
            B: "ra",
            C: "lateg",
            D: "ights",
            R: "in",
            Q: "turquois",
            E: "hi",
            P: "ro",
            O: "al",
            N: "le",
            M: "de",
            L: "yello",
            F: "en",
            K: "ch",
            G: "arks",
            H: "ea",
            I: "ightg",
            J: "wh"
        };
        const names$1 = {
            OiceXe: "f0f8ff",
            antiquewEte: "faebd7",
            aqua: "ffff",
            aquamarRe: "7fffd4",
            azuY: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "0",
            blanKedOmond: "ffebcd",
            Xe: "ff",
            XeviTet: "8a2be2",
            bPwn: "a52a2a",
            burlywood: "deb887",
            caMtXe: "5f9ea0",
            KartYuse: "7fff00",
            KocTate: "d2691e",
            cSO: "ff7f50",
            cSnflowerXe: "6495ed",
            cSnsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "ffff",
            xXe: "8b",
            xcyan: "8b8b",
            xgTMnPd: "b8860b",
            xWay: "a9a9a9",
            xgYF: "6400",
            xgYy: "a9a9a9",
            xkhaki: "bdb76b",
            xmagFta: "8b008b",
            xTivegYF: "556b2f",
            xSange: "ff8c00",
            xScEd: "9932cc",
            xYd: "8b0000",
            xsOmon: "e9967a",
            xsHgYF: "8fbc8f",
            xUXe: "483d8b",
            xUWay: "2f4f4f",
            xUgYy: "2f4f4f",
            xQe: "ced1",
            xviTet: "9400d3",
            dAppRk: "ff1493",
            dApskyXe: "bfff",
            dimWay: "696969",
            dimgYy: "696969",
            dodgerXe: "1e90ff",
            fiYbrick: "b22222",
            flSOwEte: "fffaf0",
            foYstWAn: "228b22",
            fuKsia: "ff00ff",
            gaRsbSo: "dcdcdc",
            ghostwEte: "f8f8ff",
            gTd: "ffd700",
            gTMnPd: "daa520",
            Way: "808080",
            gYF: "8000",
            gYFLw: "adff2f",
            gYy: "808080",
            honeyMw: "f0fff0",
            hotpRk: "ff69b4",
            RdianYd: "cd5c5c",
            Rdigo: "4b0082",
            ivSy: "fffff0",
            khaki: "f0e68c",
            lavFMr: "e6e6fa",
            lavFMrXsh: "fff0f5",
            lawngYF: "7cfc00",
            NmoncEffon: "fffacd",
            ZXe: "add8e6",
            ZcSO: "f08080",
            Zcyan: "e0ffff",
            ZgTMnPdLw: "fafad2",
            ZWay: "d3d3d3",
            ZgYF: "90ee90",
            ZgYy: "d3d3d3",
            ZpRk: "ffb6c1",
            ZsOmon: "ffa07a",
            ZsHgYF: "20b2aa",
            ZskyXe: "87cefa",
            ZUWay: "778899",
            ZUgYy: "778899",
            ZstAlXe: "b0c4de",
            ZLw: "ffffe0",
            lime: "ff00",
            limegYF: "32cd32",
            lRF: "faf0e6",
            magFta: "ff00ff",
            maPon: "800000",
            VaquamarRe: "66cdaa",
            VXe: "cd",
            VScEd: "ba55d3",
            VpurpN: "9370db",
            VsHgYF: "3cb371",
            VUXe: "7b68ee",
            VsprRggYF: "fa9a",
            VQe: "48d1cc",
            VviTetYd: "c71585",
            midnightXe: "191970",
            mRtcYam: "f5fffa",
            mistyPse: "ffe4e1",
            moccasR: "ffe4b5",
            navajowEte: "ffdead",
            navy: "80",
            Tdlace: "fdf5e6",
            Tive: "808000",
            TivedBb: "6b8e23",
            Sange: "ffa500",
            SangeYd: "ff4500",
            ScEd: "da70d6",
            pOegTMnPd: "eee8aa",
            pOegYF: "98fb98",
            pOeQe: "afeeee",
            pOeviTetYd: "db7093",
            papayawEp: "ffefd5",
            pHKpuff: "ffdab9",
            peru: "cd853f",
            pRk: "ffc0cb",
            plum: "dda0dd",
            powMrXe: "b0e0e6",
            purpN: "800080",
            YbeccapurpN: "663399",
            Yd: "ff0000",
            Psybrown: "bc8f8f",
            PyOXe: "4169e1",
            saddNbPwn: "8b4513",
            sOmon: "fa8072",
            sandybPwn: "f4a460",
            sHgYF: "2e8b57",
            sHshell: "fff5ee",
            siFna: "a0522d",
            silver: "c0c0c0",
            skyXe: "87ceeb",
            UXe: "6a5acd",
            UWay: "708090",
            UgYy: "708090",
            snow: "fffafa",
            sprRggYF: "ff7f",
            stAlXe: "4682b4",
            tan: "d2b48c",
            teO: "8080",
            tEstN: "d8bfd8",
            tomato: "ff6347",
            Qe: "40e0d0",
            viTet: "ee82ee",
            JHt: "f5deb3",
            wEte: "ffffff",
            wEtesmoke: "f5f5f5",
            Lw: "ffff00",
            LwgYF: "9acd32"
        };
        function unpack() {
            const unpacked = {};
            const keys = Object.keys(names$1);
            const tkeys = Object.keys(map);
            let i, j, k, ok, nk;
            for (i = 0; i < keys.length; i++) {
                ok = nk = keys[i];
                for (j = 0; j < tkeys.length; j++) {
                    k = tkeys[j];
                    nk = nk.replace(k, map[k]);
                }
                k = parseInt(names$1[ok], 16);
                unpacked[nk] = [ k >> 16 & 255, k >> 8 & 255, 255 & k ];
            }
            return unpacked;
        }
        let names;
        function nameParse(str) {
            if (!names) {
                names = unpack();
                names.transparent = [ 0, 0, 0, 0 ];
            }
            const a = names[str.toLowerCase()];
            return a && {
                r: a[0],
                g: a[1],
                b: a[2],
                a: 4 === a.length ? a[3] : 255
            };
        }
        const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
        function rgbParse(str) {
            const m = RGB_RE.exec(str);
            let a = 255;
            let r, g, b;
            if (!m) return;
            if (m[7] !== r) {
                const v = +m[7];
                a = m[8] ? p2b(v) : lim(255 * v, 0, 255);
            }
            r = +m[1];
            g = +m[3];
            b = +m[5];
            r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
            g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
            b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
            return {
                r,
                g,
                b,
                a
            };
        }
        function rgbString(v) {
            return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
        }
        const to = v => v <= .0031308 ? 12.92 * v : 1.055 * Math.pow(v, 1 / 2.4) - .055;
        const from = v => v <= .04045 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4);
        function interpolate(rgb1, rgb2, t) {
            const r = from(b2n(rgb1.r));
            const g = from(b2n(rgb1.g));
            const b = from(b2n(rgb1.b));
            return {
                r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
                g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
                b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
                a: rgb1.a + t * (rgb2.a - rgb1.a)
            };
        }
        function modHSL(v, i, ratio) {
            if (v) {
                let tmp = rgb2hsl(v);
                tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, 0 === i ? 360 : 1));
                tmp = hsl2rgb(tmp);
                v.r = tmp[0];
                v.g = tmp[1];
                v.b = tmp[2];
            }
        }
        function clone(v, proto) {
            return v ? Object.assign(proto || {}, v) : v;
        }
        function fromObject(input) {
            var v = {
                r: 0,
                g: 0,
                b: 0,
                a: 255
            };
            if (Array.isArray(input)) {
                if (input.length >= 3) {
                    v = {
                        r: input[0],
                        g: input[1],
                        b: input[2],
                        a: 255
                    };
                    if (input.length > 3) v.a = n2b(input[3]);
                }
            } else {
                v = clone(input, {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                });
                v.a = n2b(v.a);
            }
            return v;
        }
        function functionParse(str) {
            if ("r" === str.charAt(0)) return rgbParse(str);
            return hueParse(str);
        }
        class Color {
            constructor(input) {
                if (input instanceof Color) return input;
                const type = typeof input;
                let v;
                if ("object" === type) v = fromObject(input); else if ("string" === type) v = hexParse(input) || nameParse(input) || functionParse(input);
                this._rgb = v;
                this._valid = !!v;
            }
            get valid() {
                return this._valid;
            }
            get rgb() {
                var v = clone(this._rgb);
                if (v) v.a = b2n(v.a);
                return v;
            }
            set rgb(obj) {
                this._rgb = fromObject(obj);
            }
            rgbString() {
                return this._valid ? rgbString(this._rgb) : void 0;
            }
            hexString() {
                return this._valid ? hexString(this._rgb) : void 0;
            }
            hslString() {
                return this._valid ? hslString(this._rgb) : void 0;
            }
            mix(color, weight) {
                if (color) {
                    const c1 = this.rgb;
                    const c2 = color.rgb;
                    let w2;
                    const p = weight === w2 ? .5 : weight;
                    const w = 2 * p - 1;
                    const a = c1.a - c2.a;
                    const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
                    w2 = 1 - w1;
                    c1.r = 255 & w1 * c1.r + w2 * c2.r + .5;
                    c1.g = 255 & w1 * c1.g + w2 * c2.g + .5;
                    c1.b = 255 & w1 * c1.b + w2 * c2.b + .5;
                    c1.a = p * c1.a + (1 - p) * c2.a;
                    this.rgb = c1;
                }
                return this;
            }
            interpolate(color, t) {
                if (color) this._rgb = interpolate(this._rgb, color._rgb, t);
                return this;
            }
            clone() {
                return new Color(this.rgb);
            }
            alpha(a) {
                this._rgb.a = n2b(a);
                return this;
            }
            clearer(ratio) {
                const rgb = this._rgb;
                rgb.a *= 1 - ratio;
                return this;
            }
            greyscale() {
                const rgb = this._rgb;
                const val = round(.3 * rgb.r + .59 * rgb.g + .11 * rgb.b);
                rgb.r = rgb.g = rgb.b = val;
                return this;
            }
            opaquer(ratio) {
                const rgb = this._rgb;
                rgb.a *= 1 + ratio;
                return this;
            }
            negate() {
                const v = this._rgb;
                v.r = 255 - v.r;
                v.g = 255 - v.g;
                v.b = 255 - v.b;
                return this;
            }
            lighten(ratio) {
                modHSL(this._rgb, 2, ratio);
                return this;
            }
            darken(ratio) {
                modHSL(this._rgb, 2, -ratio);
                return this;
            }
            saturate(ratio) {
                modHSL(this._rgb, 1, ratio);
                return this;
            }
            desaturate(ratio) {
                modHSL(this._rgb, 1, -ratio);
                return this;
            }
            rotate(deg) {
                rotate(this._rgb, deg);
                return this;
            }
        }
        const uid = (() => {
            let id = 0;
            return () => id++;
        })();
        function isNullOrUndef(value) {
            return null === value || "undefined" === typeof value;
        }
        function isArray(value) {
            if (Array.isArray && Array.isArray(value)) return true;
            const type = Object.prototype.toString.call(value);
            if ("[object" === type.slice(0, 7) && "Array]" === type.slice(-6)) return true;
            return false;
        }
        function isObject(value) {
            return null !== value && "[object Object]" === Object.prototype.toString.call(value);
        }
        function isNumberFinite(value) {
            return ("number" === typeof value || value instanceof Number) && isFinite(+value);
        }
        function finiteOrDefault(value, defaultValue) {
            return isNumberFinite(value) ? value : defaultValue;
        }
        function valueOrDefault(value, defaultValue) {
            return "undefined" === typeof value ? defaultValue : value;
        }
        const toDimension = (value, dimension) => "string" === typeof value && value.endsWith("%") ? parseFloat(value) / 100 * dimension : +value;
        function callback(fn, args, thisArg) {
            if (fn && "function" === typeof fn.call) return fn.apply(thisArg, args);
        }
        function each(loopable, fn, thisArg, reverse) {
            let i, len, keys;
            if (isArray(loopable)) {
                len = loopable.length;
                if (reverse) for (i = len - 1; i >= 0; i--) fn.call(thisArg, loopable[i], i); else for (i = 0; i < len; i++) fn.call(thisArg, loopable[i], i);
            } else if (isObject(loopable)) {
                keys = Object.keys(loopable);
                len = keys.length;
                for (i = 0; i < len; i++) fn.call(thisArg, loopable[keys[i]], keys[i]);
            }
        }
        function _elementsEqual(a0, a1) {
            let i, ilen, v0, v1;
            if (!a0 || !a1 || a0.length !== a1.length) return false;
            for (i = 0, ilen = a0.length; i < ilen; ++i) {
                v0 = a0[i];
                v1 = a1[i];
                if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) return false;
            }
            return true;
        }
        function helpers_segment_clone(source) {
            if (isArray(source)) return source.map(helpers_segment_clone);
            if (isObject(source)) {
                const target = Object.create(null);
                const keys = Object.keys(source);
                const klen = keys.length;
                let k = 0;
                for (;k < klen; ++k) target[keys[k]] = helpers_segment_clone(source[keys[k]]);
                return target;
            }
            return source;
        }
        function isValidKey(key) {
            return -1 === [ "__proto__", "prototype", "constructor" ].indexOf(key);
        }
        function _merger(key, target, source, options) {
            if (!isValidKey(key)) return;
            const tval = target[key];
            const sval = source[key];
            if (isObject(tval) && isObject(sval)) merge(tval, sval, options); else target[key] = helpers_segment_clone(sval);
        }
        function merge(target, source, options) {
            const sources = isArray(source) ? source : [ source ];
            const ilen = sources.length;
            if (!isObject(target)) return target;
            options = options || {};
            const merger = options.merger || _merger;
            let current;
            for (let i = 0; i < ilen; ++i) {
                current = sources[i];
                if (!isObject(current)) continue;
                const keys = Object.keys(current);
                for (let k = 0, klen = keys.length; k < klen; ++k) merger(keys[k], target, current, options);
            }
            return target;
        }
        function mergeIf(target, source) {
            return merge(target, source, {
                merger: _mergerIf
            });
        }
        function _mergerIf(key, target, source) {
            if (!isValidKey(key)) return;
            const tval = target[key];
            const sval = source[key];
            if (isObject(tval) && isObject(sval)) mergeIf(tval, sval); else if (!Object.prototype.hasOwnProperty.call(target, key)) target[key] = helpers_segment_clone(sval);
        }
        const keyResolvers = {
            "": v => v,
            x: o => o.x,
            y: o => o.y
        };
        function _splitKey(key) {
            const parts = key.split(".");
            const keys = [];
            let tmp = "";
            for (const part of parts) {
                tmp += part;
                if (tmp.endsWith("\\")) tmp = tmp.slice(0, -1) + "."; else {
                    keys.push(tmp);
                    tmp = "";
                }
            }
            return keys;
        }
        function _getKeyResolver(key) {
            const keys = _splitKey(key);
            return obj => {
                for (const k of keys) {
                    if ("" === k) break;
                    obj = obj && obj[k];
                }
                return obj;
            };
        }
        function resolveObjectKey(obj, key) {
            const resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
            return resolver(obj);
        }
        function _capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        const defined = value => "undefined" !== typeof value;
        const isFunction = value => "function" === typeof value;
        const setsEqual = (a, b) => {
            if (a.size !== b.size) return false;
            for (const item of a) if (!b.has(item)) return false;
            return true;
        };
        function _isClickEvent(e) {
            return "mouseup" === e.type || "click" === e.type || "contextmenu" === e.type;
        }
        const PI = Math.PI;
        const TAU = 2 * PI;
        const INFINITY = Number.POSITIVE_INFINITY;
        const HALF_PI = PI / 2;
        const log10 = Math.log10;
        const sign = Math.sign;
        function almostEquals(x, y, epsilon) {
            return Math.abs(x - y) < epsilon;
        }
        function niceNum(range) {
            const roundedRange = Math.round(range);
            range = almostEquals(range, roundedRange, range / 1e3) ? roundedRange : range;
            const niceRange = Math.pow(10, Math.floor(log10(range)));
            const fraction = range / niceRange;
            const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
            return niceFraction * niceRange;
        }
        function _factorize(value) {
            const result = [];
            const sqrt = Math.sqrt(value);
            let i;
            for (i = 1; i < sqrt; i++) if (value % i === 0) {
                result.push(i);
                result.push(value / i);
            }
            if (sqrt === (0 | sqrt)) result.push(sqrt);
            result.sort(((a, b) => a - b)).pop();
            return result;
        }
        function isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        function almostWhole(x, epsilon) {
            const rounded = Math.round(x);
            return rounded - epsilon <= x && rounded + epsilon >= x;
        }
        function _setMinAndMaxByKey(array, target, property) {
            let i, ilen, value;
            for (i = 0, ilen = array.length; i < ilen; i++) {
                value = array[i][property];
                if (!isNaN(value)) {
                    target.min = Math.min(target.min, value);
                    target.max = Math.max(target.max, value);
                }
            }
        }
        function toRadians(degrees) {
            return degrees * (PI / 180);
        }
        function toDegrees(radians) {
            return radians * (180 / PI);
        }
        function _decimalPlaces(x) {
            if (!isNumberFinite(x)) return;
            let e = 1;
            let p = 0;
            while (Math.round(x * e) / e !== x) {
                e *= 10;
                p++;
            }
            return p;
        }
        function getAngleFromPoint(centrePoint, anglePoint) {
            const distanceFromXCenter = anglePoint.x - centrePoint.x;
            const distanceFromYCenter = anglePoint.y - centrePoint.y;
            const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
            let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
            if (angle < -.5 * PI) angle += TAU;
            return {
                angle,
                distance: radialDistanceFromCenter
            };
        }
        function _normalizeAngle(a) {
            return (a % TAU + TAU) % TAU;
        }
        function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
            const a = _normalizeAngle(angle);
            const s = _normalizeAngle(start);
            const e = _normalizeAngle(end);
            const angleToStart = _normalizeAngle(s - a);
            const angleToEnd = _normalizeAngle(e - a);
            const startToAngle = _normalizeAngle(a - s);
            const endToAngle = _normalizeAngle(a - e);
            return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
        }
        function _limitValue(value, min, max) {
            return Math.max(min, Math.min(max, value));
        }
        function _int16Range(value) {
            return _limitValue(value, -32768, 32767);
        }
        function _isBetween(value, start, end, epsilon = 1e-6) {
            return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
        }
        function _lookup(table, value, cmp) {
            cmp = cmp || (index => table[index] < value);
            let hi = table.length - 1;
            let lo = 0;
            let mid;
            while (hi - lo > 1) {
                mid = lo + hi >> 1;
                if (cmp(mid)) lo = mid; else hi = mid;
            }
            return {
                lo,
                hi
            };
        }
        const _lookupByKey = (table, key, value, last) => _lookup(table, value, last ? index => {
            const ti = table[index][key];
            return ti < value || ti === value && table[index + 1][key] === value;
        } : index => table[index][key] < value);
        const _rlookupByKey = (table, key, value) => _lookup(table, value, (index => table[index][key] >= value));
        function _filterBetween(values, min, max) {
            let start = 0;
            let end = values.length;
            while (start < end && values[start] < min) start++;
            while (end > start && values[end - 1] > max) end--;
            return start > 0 || end < values.length ? values.slice(start, end) : values;
        }
        const arrayEvents = [ "push", "pop", "shift", "splice", "unshift" ];
        function listenArrayEvents(array, listener) {
            if (array._chartjs) {
                array._chartjs.listeners.push(listener);
                return;
            }
            Object.defineProperty(array, "_chartjs", {
                configurable: true,
                enumerable: false,
                value: {
                    listeners: [ listener ]
                }
            });
            arrayEvents.forEach((key => {
                const method = "_onData" + _capitalize(key);
                const base = array[key];
                Object.defineProperty(array, key, {
                    configurable: true,
                    enumerable: false,
                    value(...args) {
                        const res = base.apply(this, args);
                        array._chartjs.listeners.forEach((object => {
                            if ("function" === typeof object[method]) object[method](...args);
                        }));
                        return res;
                    }
                });
            }));
        }
        function unlistenArrayEvents(array, listener) {
            const stub = array._chartjs;
            if (!stub) return;
            const listeners = stub.listeners;
            const index = listeners.indexOf(listener);
            if (-1 !== index) listeners.splice(index, 1);
            if (listeners.length > 0) return;
            arrayEvents.forEach((key => {
                delete array[key];
            }));
            delete array._chartjs;
        }
        function _arrayUnique(items) {
            const set = new Set;
            let i, ilen;
            for (i = 0, ilen = items.length; i < ilen; ++i) set.add(items[i]);
            if (set.size === ilen) return items;
            return Array.from(set);
        }
        const requestAnimFrame = function() {
            if ("undefined" === typeof window) return function(callback) {
                return callback();
            };
            return window.requestAnimationFrame;
        }();
        function throttled(fn, thisArg) {
            let argsToUse = [];
            let ticking = false;
            return function(...args) {
                argsToUse = args;
                if (!ticking) {
                    ticking = true;
                    requestAnimFrame.call(window, (() => {
                        ticking = false;
                        fn.apply(thisArg, argsToUse);
                    }));
                }
            };
        }
        function debounce(fn, delay) {
            let timeout;
            return function(...args) {
                if (delay) {
                    clearTimeout(timeout);
                    timeout = setTimeout(fn, delay, args);
                } else fn.apply(this, args);
                return delay;
            };
        }
        const _toLeftRightCenter = align => "start" === align ? "left" : "end" === align ? "right" : "center";
        const _alignStartEnd = (align, start, end) => "start" === align ? start : "end" === align ? end : (start + end) / 2;
        const atEdge = t => 0 === t || 1 === t;
        const elasticIn = (t, s, p) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p);
        const elasticOut = (t, s, p) => Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
        const effects = {
            linear: t => t,
            easeInQuad: t => t * t,
            easeOutQuad: t => -t * (t - 2),
            easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
            easeInCubic: t => t * t * t,
            easeOutCubic: t => (t -= 1) * t * t + 1,
            easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
            easeInQuart: t => t * t * t * t,
            easeOutQuart: t => -((t -= 1) * t * t * t - 1),
            easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
            easeInQuint: t => t * t * t * t * t,
            easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
            easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
            easeInSine: t => -Math.cos(t * HALF_PI) + 1,
            easeOutSine: t => Math.sin(t * HALF_PI),
            easeInOutSine: t => -.5 * (Math.cos(PI * t) - 1),
            easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
            easeOutExpo: t => 1 === t ? 1 : -Math.pow(2, -10 * t) + 1,
            easeInOutExpo: t => atEdge(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (-Math.pow(2, -10 * (2 * t - 1)) + 2),
            easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
            easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
            easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
            easeInElastic: t => atEdge(t) ? t : elasticIn(t, .075, .3),
            easeOutElastic: t => atEdge(t) ? t : elasticOut(t, .075, .3),
            easeInOutElastic(t) {
                const s = .1125;
                const p = .45;
                return atEdge(t) ? t : t < .5 ? .5 * elasticIn(2 * t, s, p) : .5 + .5 * elasticOut(2 * t - 1, s, p);
            },
            easeInBack(t) {
                const s = 1.70158;
                return t * t * ((s + 1) * t - s);
            },
            easeOutBack(t) {
                const s = 1.70158;
                return (t -= 1) * t * ((s + 1) * t + s) + 1;
            },
            easeInOutBack(t) {
                let s = 1.70158;
                if ((t /= .5) < 1) return .5 * (t * t * (((s *= 1.525) + 1) * t - s));
                return .5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
            },
            easeInBounce: t => 1 - effects.easeOutBounce(1 - t),
            easeOutBounce(t) {
                const m = 7.5625;
                const d = 2.75;
                if (t < 1 / d) return m * t * t;
                if (t < 2 / d) return m * (t -= 1.5 / d) * t + .75;
                if (t < 2.5 / d) return m * (t -= 2.25 / d) * t + .9375;
                return m * (t -= 2.625 / d) * t + .984375;
            },
            easeInOutBounce: t => t < .5 ? .5 * effects.easeInBounce(2 * t) : .5 * effects.easeOutBounce(2 * t - 1) + .5
        };
        function isPatternOrGradient(value) {
            if (value && "object" === typeof value) {
                const type = value.toString();
                return "[object CanvasPattern]" === type || "[object CanvasGradient]" === type;
            }
            return false;
        }
        function color(value) {
            return isPatternOrGradient(value) ? value : new Color(value);
        }
        function getHoverColor(value) {
            return isPatternOrGradient(value) ? value : new Color(value).saturate(.5).darken(.1).hexString();
        }
        const numbers = [ "x", "y", "borderWidth", "radius", "tension" ];
        const colors = [ "color", "borderColor", "backgroundColor" ];
        function applyAnimationsDefaults(defaults) {
            defaults.set("animation", {
                delay: void 0,
                duration: 1e3,
                easing: "easeOutQuart",
                fn: void 0,
                from: void 0,
                loop: void 0,
                to: void 0,
                type: void 0
            });
            defaults.describe("animation", {
                _fallback: false,
                _indexable: false,
                _scriptable: name => "onProgress" !== name && "onComplete" !== name && "fn" !== name
            });
            defaults.set("animations", {
                colors: {
                    type: "color",
                    properties: colors
                },
                numbers: {
                    type: "number",
                    properties: numbers
                }
            });
            defaults.describe("animations", {
                _fallback: "animation"
            });
            defaults.set("transitions", {
                active: {
                    animation: {
                        duration: 400
                    }
                },
                resize: {
                    animation: {
                        duration: 0
                    }
                },
                show: {
                    animations: {
                        colors: {
                            from: "transparent"
                        },
                        visible: {
                            type: "boolean",
                            duration: 0
                        }
                    }
                },
                hide: {
                    animations: {
                        colors: {
                            to: "transparent"
                        },
                        visible: {
                            type: "boolean",
                            easing: "linear",
                            fn: v => 0 | v
                        }
                    }
                }
            });
        }
        function applyLayoutsDefaults(defaults) {
            defaults.set("layout", {
                autoPadding: true,
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            });
        }
        const intlCache = new Map;
        function getNumberFormat(locale, options) {
            options = options || {};
            const cacheKey = locale + JSON.stringify(options);
            let formatter = intlCache.get(cacheKey);
            if (!formatter) {
                formatter = new Intl.NumberFormat(locale, options);
                intlCache.set(cacheKey, formatter);
            }
            return formatter;
        }
        function formatNumber(num, locale, options) {
            return getNumberFormat(locale, options).format(num);
        }
        const formatters = {
            values(value) {
                return isArray(value) ? value : "" + value;
            },
            numeric(tickValue, index, ticks) {
                if (0 === tickValue) return "0";
                const locale = this.chart.options.locale;
                let notation;
                let delta = tickValue;
                if (ticks.length > 1) {
                    const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
                    if (maxTick < 1e-4 || maxTick > 1e15) notation = "scientific";
                    delta = calculateDelta(tickValue, ticks);
                }
                const logDelta = log10(Math.abs(delta));
                const numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
                const options = {
                    notation,
                    minimumFractionDigits: numDecimal,
                    maximumFractionDigits: numDecimal
                };
                Object.assign(options, this.options.ticks.format);
                return formatNumber(tickValue, locale, options);
            },
            logarithmic(tickValue, index, ticks) {
                if (0 === tickValue) return "0";
                const remain = ticks[index].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
                if ([ 1, 2, 3, 5, 10, 15 ].includes(remain) || index > .8 * ticks.length) return formatters.numeric.call(this, tickValue, index, ticks);
                return "";
            }
        };
        function calculateDelta(tickValue, ticks) {
            let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
            if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) delta = tickValue - Math.floor(tickValue);
            return delta;
        }
        var Ticks = {
            formatters
        };
        function applyScaleDefaults(defaults) {
            defaults.set("scale", {
                display: true,
                offset: false,
                reverse: false,
                beginAtZero: false,
                bounds: "ticks",
                grace: 0,
                grid: {
                    display: true,
                    lineWidth: 1,
                    drawOnChartArea: true,
                    drawTicks: true,
                    tickLength: 8,
                    tickWidth: (_ctx, options) => options.lineWidth,
                    tickColor: (_ctx, options) => options.color,
                    offset: false
                },
                border: {
                    display: true,
                    dash: [],
                    dashOffset: 0,
                    width: 1
                },
                title: {
                    display: false,
                    text: "",
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: false,
                    textStrokeWidth: 0,
                    textStrokeColor: "",
                    padding: 3,
                    display: true,
                    autoSkip: true,
                    autoSkipPadding: 3,
                    labelOffset: 0,
                    callback: Ticks.formatters.values,
                    minor: {},
                    major: {},
                    align: "center",
                    crossAlign: "near",
                    showLabelBackdrop: false,
                    backdropColor: "rgba(255, 255, 255, 0.75)",
                    backdropPadding: 2
                }
            });
            defaults.route("scale.ticks", "color", "", "color");
            defaults.route("scale.grid", "color", "", "borderColor");
            defaults.route("scale.border", "color", "", "borderColor");
            defaults.route("scale.title", "color", "", "color");
            defaults.describe("scale", {
                _fallback: false,
                _scriptable: name => !name.startsWith("before") && !name.startsWith("after") && "callback" !== name && "parser" !== name,
                _indexable: name => "borderDash" !== name && "tickBorderDash" !== name && "dash" !== name
            });
            defaults.describe("scales", {
                _fallback: "scale"
            });
            defaults.describe("scale.ticks", {
                _scriptable: name => "backdropPadding" !== name && "callback" !== name,
                _indexable: name => "backdropPadding" !== name
            });
        }
        const overrides = Object.create(null);
        const descriptors = Object.create(null);
        function getScope$1(node, key) {
            if (!key) return node;
            const keys = key.split(".");
            for (let i = 0, n = keys.length; i < n; ++i) {
                const k = keys[i];
                node = node[k] || (node[k] = Object.create(null));
            }
            return node;
        }
        function set(root, scope, values) {
            if ("string" === typeof scope) return merge(getScope$1(root, scope), values);
            return merge(getScope$1(root, ""), scope);
        }
        class Defaults {
            constructor(_descriptors, _appliers) {
                this.animation = void 0;
                this.backgroundColor = "rgba(0,0,0,0.1)";
                this.borderColor = "rgba(0,0,0,0.1)";
                this.color = "#666";
                this.datasets = {};
                this.devicePixelRatio = context => context.chart.platform.getDevicePixelRatio();
                this.elements = {};
                this.events = [ "mousemove", "mouseout", "click", "touchstart", "touchmove" ];
                this.font = {
                    family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    size: 12,
                    style: "normal",
                    lineHeight: 1.2,
                    weight: null
                };
                this.hover = {};
                this.hoverBackgroundColor = (ctx, options) => getHoverColor(options.backgroundColor);
                this.hoverBorderColor = (ctx, options) => getHoverColor(options.borderColor);
                this.hoverColor = (ctx, options) => getHoverColor(options.color);
                this.indexAxis = "x";
                this.interaction = {
                    mode: "nearest",
                    intersect: true,
                    includeInvisible: false
                };
                this.maintainAspectRatio = true;
                this.onHover = null;
                this.onClick = null;
                this.parsing = true;
                this.plugins = {};
                this.responsive = true;
                this.scale = void 0;
                this.scales = {};
                this.showLine = true;
                this.drawActiveElementsOnTop = true;
                this.describe(_descriptors);
                this.apply(_appliers);
            }
            set(scope, values) {
                return set(this, scope, values);
            }
            get(scope) {
                return getScope$1(this, scope);
            }
            describe(scope, values) {
                return set(descriptors, scope, values);
            }
            override(scope, values) {
                return set(overrides, scope, values);
            }
            route(scope, name, targetScope, targetName) {
                const scopeObject = getScope$1(this, scope);
                const targetScopeObject = getScope$1(this, targetScope);
                const privateName = "_" + name;
                Object.defineProperties(scopeObject, {
                    [privateName]: {
                        value: scopeObject[name],
                        writable: true
                    },
                    [name]: {
                        enumerable: true,
                        get() {
                            const local = this[privateName];
                            const target = targetScopeObject[targetName];
                            if (isObject(local)) return Object.assign({}, target, local);
                            return valueOrDefault(local, target);
                        },
                        set(value) {
                            this[privateName] = value;
                        }
                    }
                });
            }
            apply(appliers) {
                appliers.forEach((apply => apply(this)));
            }
        }
        var defaults = new Defaults({
            _scriptable: name => !name.startsWith("on"),
            _indexable: name => "events" !== name,
            hover: {
                _fallback: "interaction"
            },
            interaction: {
                _scriptable: false,
                _indexable: false
            }
        }, [ applyAnimationsDefaults, applyLayoutsDefaults, applyScaleDefaults ]);
        function toFontString(font) {
            if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) return null;
            return (font.style ? font.style + " " : "") + (font.weight ? font.weight + " " : "") + font.size + "px " + font.family;
        }
        function _measureText(ctx, data, gc, longest, string) {
            let textWidth = data[string];
            if (!textWidth) {
                textWidth = data[string] = ctx.measureText(string).width;
                gc.push(string);
            }
            if (textWidth > longest) longest = textWidth;
            return longest;
        }
        function _alignPixel(chart, pixel, width) {
            const devicePixelRatio = chart.currentDevicePixelRatio;
            const halfWidth = 0 !== width ? Math.max(width / 2, .5) : 0;
            return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
        }
        function clearCanvas(canvas, ctx) {
            ctx = ctx || canvas.getContext("2d");
            ctx.save();
            ctx.resetTransform();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.restore();
        }
        function _isPointInArea(point, area, margin) {
            margin = margin || .5;
            return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
        }
        function clipArea(ctx, area) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
            ctx.clip();
        }
        function unclipArea(ctx) {
            ctx.restore();
        }
        function renderText(ctx, text, x, y, font, opts = {}) {
            const lines = isArray(text) ? text : [ text ];
            const stroke = opts.strokeWidth > 0 && "" !== opts.strokeColor;
            let i, line;
            ctx.save();
            ctx.font = font.string;
            setRenderOpts(ctx, opts);
            for (i = 0; i < lines.length; ++i) {
                line = lines[i];
                if (opts.backdrop) drawBackdrop(ctx, opts.backdrop);
                if (stroke) {
                    if (opts.strokeColor) ctx.strokeStyle = opts.strokeColor;
                    if (!isNullOrUndef(opts.strokeWidth)) ctx.lineWidth = opts.strokeWidth;
                    ctx.strokeText(line, x, y, opts.maxWidth);
                }
                ctx.fillText(line, x, y, opts.maxWidth);
                decorateText(ctx, x, y, line, opts);
                y += font.lineHeight;
            }
            ctx.restore();
        }
        function setRenderOpts(ctx, opts) {
            if (opts.translation) ctx.translate(opts.translation[0], opts.translation[1]);
            if (!isNullOrUndef(opts.rotation)) ctx.rotate(opts.rotation);
            if (opts.color) ctx.fillStyle = opts.color;
            if (opts.textAlign) ctx.textAlign = opts.textAlign;
            if (opts.textBaseline) ctx.textBaseline = opts.textBaseline;
        }
        function decorateText(ctx, x, y, line, opts) {
            if (opts.strikethrough || opts.underline) {
                const metrics = ctx.measureText(line);
                const left = x - metrics.actualBoundingBoxLeft;
                const right = x + metrics.actualBoundingBoxRight;
                const top = y - metrics.actualBoundingBoxAscent;
                const bottom = y + metrics.actualBoundingBoxDescent;
                const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
                ctx.strokeStyle = ctx.fillStyle;
                ctx.beginPath();
                ctx.lineWidth = opts.decorationWidth || 2;
                ctx.moveTo(left, yDecoration);
                ctx.lineTo(right, yDecoration);
                ctx.stroke();
            }
        }
        function drawBackdrop(ctx, opts) {
            const oldColor = ctx.fillStyle;
            ctx.fillStyle = opts.color;
            ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
            ctx.fillStyle = oldColor;
        }
        function addRoundedRectPath(ctx, rect) {
            const {x, y, w, h, radius} = rect;
            ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, -HALF_PI, PI, true);
            ctx.lineTo(x, y + h - radius.bottomLeft);
            ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
            ctx.lineTo(x + w - radius.bottomRight, y + h);
            ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
            ctx.lineTo(x + w, y + radius.topRight);
            ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
            ctx.lineTo(x + radius.topLeft, y);
        }
        const LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
        const FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
        function toLineHeight(value, size) {
            const matches = ("" + value).match(LINE_HEIGHT);
            if (!matches || "normal" === matches[1]) return 1.2 * size;
            value = +matches[2];
            switch (matches[3]) {
              case "px":
                return value;

              case "%":
                value /= 100;
                break;
            }
            return size * value;
        }
        const numberOrZero = v => +v || 0;
        function _readValueToProps(value, props) {
            const ret = {};
            const objProps = isObject(props);
            const keys = objProps ? Object.keys(props) : props;
            const read = isObject(value) ? objProps ? prop => valueOrDefault(value[prop], value[props[prop]]) : prop => value[prop] : () => value;
            for (const prop of keys) ret[prop] = numberOrZero(read(prop));
            return ret;
        }
        function toTRBL(value) {
            return _readValueToProps(value, {
                top: "y",
                right: "x",
                bottom: "y",
                left: "x"
            });
        }
        function toTRBLCorners(value) {
            return _readValueToProps(value, [ "topLeft", "topRight", "bottomLeft", "bottomRight" ]);
        }
        function toPadding(value) {
            const obj = toTRBL(value);
            obj.width = obj.left + obj.right;
            obj.height = obj.top + obj.bottom;
            return obj;
        }
        function toFont(options, fallback) {
            options = options || {};
            fallback = fallback || defaults.font;
            let size = valueOrDefault(options.size, fallback.size);
            if ("string" === typeof size) size = parseInt(size, 10);
            let style = valueOrDefault(options.style, fallback.style);
            if (style && !("" + style).match(FONT_STYLE)) {
                console.warn('Invalid font style specified: "' + style + '"');
                style = void 0;
            }
            const font = {
                family: valueOrDefault(options.family, fallback.family),
                lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
                size,
                style,
                weight: valueOrDefault(options.weight, fallback.weight),
                string: ""
            };
            font.string = toFontString(font);
            return font;
        }
        function resolve(inputs, context, index, info) {
            let cacheable = true;
            let i, ilen, value;
            for (i = 0, ilen = inputs.length; i < ilen; ++i) {
                value = inputs[i];
                if (void 0 === value) continue;
                if (void 0 !== context && "function" === typeof value) {
                    value = value(context);
                    cacheable = false;
                }
                if (void 0 !== index && isArray(value)) {
                    value = value[index % value.length];
                    cacheable = false;
                }
                if (void 0 !== value) {
                    if (info && !cacheable) info.cacheable = false;
                    return value;
                }
            }
        }
        function _addGrace(minmax, grace, beginAtZero) {
            const {min, max} = minmax;
            const change = toDimension(grace, (max - min) / 2);
            const keepZero = (value, add) => beginAtZero && 0 === value ? 0 : value + add;
            return {
                min: keepZero(min, -Math.abs(change)),
                max: keepZero(max, change)
            };
        }
        function createContext(parentContext, context) {
            return Object.assign(Object.create(parentContext), context);
        }
        function _createResolver(scopes, prefixes = [ "" ], rootScopes = scopes, fallback, getTarget = (() => scopes[0])) {
            if (!defined(fallback)) fallback = _resolve("_fallback", scopes);
            const cache = {
                [Symbol.toStringTag]: "Object",
                _cacheable: true,
                _scopes: scopes,
                _rootScopes: rootScopes,
                _fallback: fallback,
                _getTarget: getTarget,
                override: scope => _createResolver([ scope, ...scopes ], prefixes, rootScopes, fallback)
            };
            return new Proxy(cache, {
                deleteProperty(target, prop) {
                    delete target[prop];
                    delete target._keys;
                    delete scopes[0][prop];
                    return true;
                },
                get(target, prop) {
                    return _cached(target, prop, (() => _resolveWithPrefixes(prop, prefixes, scopes, target)));
                },
                getOwnPropertyDescriptor(target, prop) {
                    return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
                },
                getPrototypeOf() {
                    return Reflect.getPrototypeOf(scopes[0]);
                },
                has(target, prop) {
                    return getKeysFromAllScopes(target).includes(prop);
                },
                ownKeys(target) {
                    return getKeysFromAllScopes(target);
                },
                set(target, prop, value) {
                    const storage = target._storage || (target._storage = getTarget());
                    target[prop] = storage[prop] = value;
                    delete target._keys;
                    return true;
                }
            });
        }
        function _attachContext(proxy, context, subProxy, descriptorDefaults) {
            const cache = {
                _cacheable: false,
                _proxy: proxy,
                _context: context,
                _subProxy: subProxy,
                _stack: new Set,
                _descriptors: _descriptors(proxy, descriptorDefaults),
                setContext: ctx => _attachContext(proxy, ctx, subProxy, descriptorDefaults),
                override: scope => _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
            };
            return new Proxy(cache, {
                deleteProperty(target, prop) {
                    delete target[prop];
                    delete proxy[prop];
                    return true;
                },
                get(target, prop, receiver) {
                    return _cached(target, prop, (() => _resolveWithContext(target, prop, receiver)));
                },
                getOwnPropertyDescriptor(target, prop) {
                    return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
                        enumerable: true,
                        configurable: true
                    } : void 0 : Reflect.getOwnPropertyDescriptor(proxy, prop);
                },
                getPrototypeOf() {
                    return Reflect.getPrototypeOf(proxy);
                },
                has(target, prop) {
                    return Reflect.has(proxy, prop);
                },
                ownKeys() {
                    return Reflect.ownKeys(proxy);
                },
                set(target, prop, value) {
                    proxy[prop] = value;
                    delete target[prop];
                    return true;
                }
            });
        }
        function _descriptors(proxy, defaults = {
            scriptable: true,
            indexable: true
        }) {
            const {_scriptable = defaults.scriptable, _indexable = defaults.indexable, _allKeys = defaults.allKeys} = proxy;
            return {
                allKeys: _allKeys,
                scriptable: _scriptable,
                indexable: _indexable,
                isScriptable: isFunction(_scriptable) ? _scriptable : () => _scriptable,
                isIndexable: isFunction(_indexable) ? _indexable : () => _indexable
            };
        }
        const readKey = (prefix, name) => prefix ? prefix + _capitalize(name) : name;
        const needsSubResolver = (prop, value) => isObject(value) && "adapters" !== prop && (null === Object.getPrototypeOf(value) || value.constructor === Object);
        function _cached(target, prop, resolve) {
            if (Object.prototype.hasOwnProperty.call(target, prop)) return target[prop];
            const value = resolve();
            target[prop] = value;
            return value;
        }
        function _resolveWithContext(target, prop, receiver) {
            const {_proxy, _context, _subProxy, _descriptors: descriptors} = target;
            let value = _proxy[prop];
            if (isFunction(value) && descriptors.isScriptable(prop)) value = _resolveScriptable(prop, value, target, receiver);
            if (isArray(value) && value.length) value = _resolveArray(prop, value, target, descriptors.isIndexable);
            if (needsSubResolver(prop, value)) value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
            return value;
        }
        function _resolveScriptable(prop, value, target, receiver) {
            const {_proxy, _context, _subProxy, _stack} = target;
            if (_stack.has(prop)) throw new Error("Recursion detected: " + Array.from(_stack).join("->") + "->" + prop);
            _stack.add(prop);
            value = value(_context, _subProxy || receiver);
            _stack.delete(prop);
            if (needsSubResolver(prop, value)) value = createSubResolver(_proxy._scopes, _proxy, prop, value);
            return value;
        }
        function _resolveArray(prop, value, target, isIndexable) {
            const {_proxy, _context, _subProxy, _descriptors: descriptors} = target;
            if (defined(_context.index) && isIndexable(prop)) value = value[_context.index % value.length]; else if (isObject(value[0])) {
                const arr = value;
                const scopes = _proxy._scopes.filter((s => s !== arr));
                value = [];
                for (const item of arr) {
                    const resolver = createSubResolver(scopes, _proxy, prop, item);
                    value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
                }
            }
            return value;
        }
        function resolveFallback(fallback, prop, value) {
            return isFunction(fallback) ? fallback(prop, value) : fallback;
        }
        const getScope = (key, parent) => true === key ? parent : "string" === typeof key ? resolveObjectKey(parent, key) : void 0;
        function addScopes(set, parentScopes, key, parentFallback, value) {
            for (const parent of parentScopes) {
                const scope = getScope(key, parent);
                if (scope) {
                    set.add(scope);
                    const fallback = resolveFallback(scope._fallback, key, value);
                    if (defined(fallback) && fallback !== key && fallback !== parentFallback) return fallback;
                } else if (false === scope && defined(parentFallback) && key !== parentFallback) return null;
            }
            return false;
        }
        function createSubResolver(parentScopes, resolver, prop, value) {
            const rootScopes = resolver._rootScopes;
            const fallback = resolveFallback(resolver._fallback, prop, value);
            const allScopes = [ ...parentScopes, ...rootScopes ];
            const set = new Set;
            set.add(value);
            let key = addScopesFromKey(set, allScopes, prop, fallback || prop, value);
            if (null === key) return false;
            if (defined(fallback) && fallback !== prop) {
                key = addScopesFromKey(set, allScopes, fallback, key, value);
                if (null === key) return false;
            }
            return _createResolver(Array.from(set), [ "" ], rootScopes, fallback, (() => subGetTarget(resolver, prop, value)));
        }
        function addScopesFromKey(set, allScopes, key, fallback, item) {
            while (key) key = addScopes(set, allScopes, key, fallback, item);
            return key;
        }
        function subGetTarget(resolver, prop, value) {
            const parent = resolver._getTarget();
            if (!(prop in parent)) parent[prop] = {};
            const target = parent[prop];
            if (isArray(target) && isObject(value)) return value;
            return target || {};
        }
        function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
            let value;
            for (const prefix of prefixes) {
                value = _resolve(readKey(prefix, prop), scopes);
                if (defined(value)) return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
            }
        }
        function _resolve(key, scopes) {
            for (const scope of scopes) {
                if (!scope) continue;
                const value = scope[key];
                if (defined(value)) return value;
            }
        }
        function getKeysFromAllScopes(target) {
            let keys = target._keys;
            if (!keys) keys = target._keys = resolveKeysFromAllScopes(target._scopes);
            return keys;
        }
        function resolveKeysFromAllScopes(scopes) {
            const set = new Set;
            for (const scope of scopes) for (const key of Object.keys(scope).filter((k => !k.startsWith("_")))) set.add(key);
            return Array.from(set);
        }
        Number.EPSILON;
        function _isDomSupported() {
            return "undefined" !== typeof window && "undefined" !== typeof document;
        }
        function _getParentNode(domNode) {
            let parent = domNode.parentNode;
            if (parent && "[object ShadowRoot]" === parent.toString()) parent = parent.host;
            return parent;
        }
        function parseMaxStyle(styleValue, node, parentProperty) {
            let valueInPixels;
            if ("string" === typeof styleValue) {
                valueInPixels = parseInt(styleValue, 10);
                if (-1 !== styleValue.indexOf("%")) valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
            } else valueInPixels = styleValue;
            return valueInPixels;
        }
        const getComputedStyle = element => element.ownerDocument.defaultView.getComputedStyle(element, null);
        function getStyle(el, property) {
            return getComputedStyle(el).getPropertyValue(property);
        }
        const positions = [ "top", "right", "bottom", "left" ];
        function getPositionedStyle(styles, style, suffix) {
            const result = {};
            suffix = suffix ? "-" + suffix : "";
            for (let i = 0; i < 4; i++) {
                const pos = positions[i];
                result[pos] = parseFloat(styles[style + "-" + pos + suffix]) || 0;
            }
            result.width = result.left + result.right;
            result.height = result.top + result.bottom;
            return result;
        }
        const useOffsetPos = (x, y, target) => (x > 0 || y > 0) && (!target || !target.shadowRoot);
        function getCanvasPosition(e, canvas) {
            const touches = e.touches;
            const source = touches && touches.length ? touches[0] : e;
            const {offsetX, offsetY} = source;
            let box = false;
            let x, y;
            if (useOffsetPos(offsetX, offsetY, e.target)) {
                x = offsetX;
                y = offsetY;
            } else {
                const rect = canvas.getBoundingClientRect();
                x = source.clientX - rect.left;
                y = source.clientY - rect.top;
                box = true;
            }
            return {
                x,
                y,
                box
            };
        }
        function getRelativePosition(event, chart) {
            if ("native" in event) return event;
            const {canvas, currentDevicePixelRatio} = chart;
            const style = getComputedStyle(canvas);
            const borderBox = "border-box" === style.boxSizing;
            const paddings = getPositionedStyle(style, "padding");
            const borders = getPositionedStyle(style, "border", "width");
            const {x, y, box} = getCanvasPosition(event, canvas);
            const xOffset = paddings.left + (box && borders.left);
            const yOffset = paddings.top + (box && borders.top);
            let {width, height} = chart;
            if (borderBox) {
                width -= paddings.width + borders.width;
                height -= paddings.height + borders.height;
            }
            return {
                x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
                y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
            };
        }
        function getContainerSize(canvas, width, height) {
            let maxWidth, maxHeight;
            if (void 0 === width || void 0 === height) {
                const container = _getParentNode(canvas);
                if (!container) {
                    width = canvas.clientWidth;
                    height = canvas.clientHeight;
                } else {
                    const rect = container.getBoundingClientRect();
                    const containerStyle = getComputedStyle(container);
                    const containerBorder = getPositionedStyle(containerStyle, "border", "width");
                    const containerPadding = getPositionedStyle(containerStyle, "padding");
                    width = rect.width - containerPadding.width - containerBorder.width;
                    height = rect.height - containerPadding.height - containerBorder.height;
                    maxWidth = parseMaxStyle(containerStyle.maxWidth, container, "clientWidth");
                    maxHeight = parseMaxStyle(containerStyle.maxHeight, container, "clientHeight");
                }
            }
            return {
                width,
                height,
                maxWidth: maxWidth || INFINITY,
                maxHeight: maxHeight || INFINITY
            };
        }
        const round1 = v => Math.round(10 * v) / 10;
        function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
            const style = getComputedStyle(canvas);
            const margins = getPositionedStyle(style, "margin");
            const maxWidth = parseMaxStyle(style.maxWidth, canvas, "clientWidth") || INFINITY;
            const maxHeight = parseMaxStyle(style.maxHeight, canvas, "clientHeight") || INFINITY;
            const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
            let {width, height} = containerSize;
            if ("content-box" === style.boxSizing) {
                const borders = getPositionedStyle(style, "border", "width");
                const paddings = getPositionedStyle(style, "padding");
                width -= paddings.width + borders.width;
                height -= paddings.height + borders.height;
            }
            width = Math.max(0, width - margins.width);
            height = Math.max(0, aspectRatio ? width / aspectRatio : height - margins.height);
            width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
            height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
            if (width && !height) height = round1(width / 2);
            const maintainHeight = void 0 !== bbWidth || void 0 !== bbHeight;
            if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
                height = containerSize.height;
                width = round1(Math.floor(height * aspectRatio));
            }
            return {
                width,
                height
            };
        }
        function retinaScale(chart, forceRatio, forceStyle) {
            const pixelRatio = forceRatio || 1;
            const deviceHeight = Math.floor(chart.height * pixelRatio);
            const deviceWidth = Math.floor(chart.width * pixelRatio);
            chart.height = Math.floor(chart.height);
            chart.width = Math.floor(chart.width);
            const canvas = chart.canvas;
            if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
                canvas.style.height = `${chart.height}px`;
                canvas.style.width = `${chart.width}px`;
            }
            if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
                chart.currentDevicePixelRatio = pixelRatio;
                canvas.height = deviceHeight;
                canvas.width = deviceWidth;
                chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
                return true;
            }
            return false;
        }
        const supportsEventListenerOptions = function() {
            let passiveSupported = false;
            try {
                const options = {
                    get passive() {
                        passiveSupported = true;
                        return false;
                    }
                };
                window.addEventListener("test", null, options);
                window.removeEventListener("test", null, options);
            } catch (e) {}
            return passiveSupported;
        }();
        function readUsedSize(element, property) {
            const value = getStyle(element, property);
            const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
            return matches ? +matches[1] : void 0;
        }
        /*!
 * Chart.js v4.2.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
        class Animator {
            constructor() {
                this._request = null;
                this._charts = new Map;
                this._running = false;
                this._lastDate = void 0;
            }
            _notify(chart, anims, date, type) {
                const callbacks = anims.listeners[type];
                const numSteps = anims.duration;
                callbacks.forEach((fn => fn({
                    chart,
                    initial: anims.initial,
                    numSteps,
                    currentStep: Math.min(date - anims.start, numSteps)
                })));
            }
            _refresh() {
                if (this._request) return;
                this._running = true;
                this._request = requestAnimFrame.call(window, (() => {
                    this._update();
                    this._request = null;
                    if (this._running) this._refresh();
                }));
            }
            _update(date = Date.now()) {
                let remaining = 0;
                this._charts.forEach(((anims, chart) => {
                    if (!anims.running || !anims.items.length) return;
                    const items = anims.items;
                    let i = items.length - 1;
                    let draw = false;
                    let item;
                    for (;i >= 0; --i) {
                        item = items[i];
                        if (item._active) {
                            if (item._total > anims.duration) anims.duration = item._total;
                            item.tick(date);
                            draw = true;
                        } else {
                            items[i] = items[items.length - 1];
                            items.pop();
                        }
                    }
                    if (draw) {
                        chart.draw();
                        this._notify(chart, anims, date, "progress");
                    }
                    if (!items.length) {
                        anims.running = false;
                        this._notify(chart, anims, date, "complete");
                        anims.initial = false;
                    }
                    remaining += items.length;
                }));
                this._lastDate = date;
                if (0 === remaining) this._running = false;
            }
            _getAnims(chart) {
                const charts = this._charts;
                let anims = charts.get(chart);
                if (!anims) {
                    anims = {
                        running: false,
                        initial: true,
                        items: [],
                        listeners: {
                            complete: [],
                            progress: []
                        }
                    };
                    charts.set(chart, anims);
                }
                return anims;
            }
            listen(chart, event, cb) {
                this._getAnims(chart).listeners[event].push(cb);
            }
            add(chart, items) {
                if (!items || !items.length) return;
                this._getAnims(chart).items.push(...items);
            }
            has(chart) {
                return this._getAnims(chart).items.length > 0;
            }
            start(chart) {
                const anims = this._charts.get(chart);
                if (!anims) return;
                anims.running = true;
                anims.start = Date.now();
                anims.duration = anims.items.reduce(((acc, cur) => Math.max(acc, cur._duration)), 0);
                this._refresh();
            }
            running(chart) {
                if (!this._running) return false;
                const anims = this._charts.get(chart);
                if (!anims || !anims.running || !anims.items.length) return false;
                return true;
            }
            stop(chart) {
                const anims = this._charts.get(chart);
                if (!anims || !anims.items.length) return;
                const items = anims.items;
                let i = items.length - 1;
                for (;i >= 0; --i) items[i].cancel();
                anims.items = [];
                this._notify(chart, anims, Date.now(), "complete");
            }
            remove(chart) {
                return this._charts.delete(chart);
            }
        }
        var animator = new Animator;
        const transparent = "transparent";
        const interpolators = {
            boolean(from, to, factor) {
                return factor > .5 ? to : from;
            },
            color(from, to, factor) {
                const c0 = color(from || transparent);
                const c1 = c0.valid && color(to || transparent);
                return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
            },
            number(from, to, factor) {
                return from + (to - from) * factor;
            }
        };
        class Animation {
            constructor(cfg, target, prop, to) {
                const currentValue = target[prop];
                to = resolve([ cfg.to, to, currentValue, cfg.from ]);
                const from = resolve([ cfg.from, currentValue, to ]);
                this._active = true;
                this._fn = cfg.fn || interpolators[cfg.type || typeof from];
                this._easing = effects[cfg.easing] || effects.linear;
                this._start = Math.floor(Date.now() + (cfg.delay || 0));
                this._duration = this._total = Math.floor(cfg.duration);
                this._loop = !!cfg.loop;
                this._target = target;
                this._prop = prop;
                this._from = from;
                this._to = to;
                this._promises = void 0;
            }
            active() {
                return this._active;
            }
            update(cfg, to, date) {
                if (this._active) {
                    this._notify(false);
                    const currentValue = this._target[this._prop];
                    const elapsed = date - this._start;
                    const remain = this._duration - elapsed;
                    this._start = date;
                    this._duration = Math.floor(Math.max(remain, cfg.duration));
                    this._total += elapsed;
                    this._loop = !!cfg.loop;
                    this._to = resolve([ cfg.to, to, currentValue, cfg.from ]);
                    this._from = resolve([ cfg.from, currentValue, to ]);
                }
            }
            cancel() {
                if (this._active) {
                    this.tick(Date.now());
                    this._active = false;
                    this._notify(false);
                }
            }
            tick(date) {
                const elapsed = date - this._start;
                const duration = this._duration;
                const prop = this._prop;
                const from = this._from;
                const loop = this._loop;
                const to = this._to;
                let factor;
                this._active = from !== to && (loop || elapsed < duration);
                if (!this._active) {
                    this._target[prop] = to;
                    this._notify(true);
                    return;
                }
                if (elapsed < 0) {
                    this._target[prop] = from;
                    return;
                }
                factor = elapsed / duration % 2;
                factor = loop && factor > 1 ? 2 - factor : factor;
                factor = this._easing(Math.min(1, Math.max(0, factor)));
                this._target[prop] = this._fn(from, to, factor);
            }
            wait() {
                const promises = this._promises || (this._promises = []);
                return new Promise(((res, rej) => {
                    promises.push({
                        res,
                        rej
                    });
                }));
            }
            _notify(resolved) {
                const method = resolved ? "res" : "rej";
                const promises = this._promises || [];
                for (let i = 0; i < promises.length; i++) promises[i][method]();
            }
        }
        class Animations {
            constructor(chart, config) {
                this._chart = chart;
                this._properties = new Map;
                this.configure(config);
            }
            configure(config) {
                if (!isObject(config)) return;
                const animationOptions = Object.keys(defaults.animation);
                const animatedProps = this._properties;
                Object.getOwnPropertyNames(config).forEach((key => {
                    const cfg = config[key];
                    if (!isObject(cfg)) return;
                    const resolved = {};
                    for (const option of animationOptions) resolved[option] = cfg[option];
                    (isArray(cfg.properties) && cfg.properties || [ key ]).forEach((prop => {
                        if (prop === key || !animatedProps.has(prop)) animatedProps.set(prop, resolved);
                    }));
                }));
            }
            _animateOptions(target, values) {
                const newOptions = values.options;
                const options = resolveTargetOptions(target, newOptions);
                if (!options) return [];
                const animations = this._createAnimations(options, newOptions);
                if (newOptions.$shared) awaitAll(target.options.$animations, newOptions).then((() => {
                    target.options = newOptions;
                }), (() => {}));
                return animations;
            }
            _createAnimations(target, values) {
                const animatedProps = this._properties;
                const animations = [];
                const running = target.$animations || (target.$animations = {});
                const props = Object.keys(values);
                const date = Date.now();
                let i;
                for (i = props.length - 1; i >= 0; --i) {
                    const prop = props[i];
                    if ("$" === prop.charAt(0)) continue;
                    if ("options" === prop) {
                        animations.push(...this._animateOptions(target, values));
                        continue;
                    }
                    const value = values[prop];
                    let animation = running[prop];
                    const cfg = animatedProps.get(prop);
                    if (animation) if (cfg && animation.active()) {
                        animation.update(cfg, value, date);
                        continue;
                    } else animation.cancel();
                    if (!cfg || !cfg.duration) {
                        target[prop] = value;
                        continue;
                    }
                    running[prop] = animation = new Animation(cfg, target, prop, value);
                    animations.push(animation);
                }
                return animations;
            }
            update(target, values) {
                if (0 === this._properties.size) {
                    Object.assign(target, values);
                    return;
                }
                const animations = this._createAnimations(target, values);
                if (animations.length) {
                    animator.add(this._chart, animations);
                    return true;
                }
            }
        }
        function awaitAll(animations, properties) {
            const running = [];
            const keys = Object.keys(properties);
            for (let i = 0; i < keys.length; i++) {
                const anim = animations[keys[i]];
                if (anim && anim.active()) running.push(anim.wait());
            }
            return Promise.all(running);
        }
        function resolveTargetOptions(target, newOptions) {
            if (!newOptions) return;
            let options = target.options;
            if (!options) {
                target.options = newOptions;
                return;
            }
            if (options.$shared) target.options = options = Object.assign({}, options, {
                $shared: false,
                $animations: {}
            });
            return options;
        }
        function scaleClip(scale, allowedOverflow) {
            const opts = scale && scale.options || {};
            const reverse = opts.reverse;
            const min = void 0 === opts.min ? allowedOverflow : 0;
            const max = void 0 === opts.max ? allowedOverflow : 0;
            return {
                start: reverse ? max : min,
                end: reverse ? min : max
            };
        }
        function defaultClip(xScale, yScale, allowedOverflow) {
            if (false === allowedOverflow) return false;
            const x = scaleClip(xScale, allowedOverflow);
            const y = scaleClip(yScale, allowedOverflow);
            return {
                top: y.end,
                right: x.end,
                bottom: y.start,
                left: x.start
            };
        }
        function toClip(value) {
            let t, r, b, l;
            if (isObject(value)) {
                t = value.top;
                r = value.right;
                b = value.bottom;
                l = value.left;
            } else t = r = b = l = value;
            return {
                top: t,
                right: r,
                bottom: b,
                left: l,
                disabled: false === value
            };
        }
        function getSortedDatasetIndices(chart, filterVisible) {
            const keys = [];
            const metasets = chart._getSortedDatasetMetas(filterVisible);
            let i, ilen;
            for (i = 0, ilen = metasets.length; i < ilen; ++i) keys.push(metasets[i].index);
            return keys;
        }
        function applyStack(stack, value, dsIndex, options = {}) {
            const keys = stack.keys;
            const singleMode = "single" === options.mode;
            let i, ilen, datasetIndex, otherValue;
            if (null === value) return;
            for (i = 0, ilen = keys.length; i < ilen; ++i) {
                datasetIndex = +keys[i];
                if (datasetIndex === dsIndex) {
                    if (options.all) continue;
                    break;
                }
                otherValue = stack.values[datasetIndex];
                if (isNumberFinite(otherValue) && (singleMode || 0 === value || sign(value) === sign(otherValue))) value += otherValue;
            }
            return value;
        }
        function convertObjectDataToArray(data) {
            const keys = Object.keys(data);
            const adata = new Array(keys.length);
            let i, ilen, key;
            for (i = 0, ilen = keys.length; i < ilen; ++i) {
                key = keys[i];
                adata[i] = {
                    x: key,
                    y: data[key]
                };
            }
            return adata;
        }
        function isStacked(scale, meta) {
            const stacked = scale && scale.options.stacked;
            return stacked || void 0 === stacked && void 0 !== meta.stack;
        }
        function getStackKey(indexScale, valueScale, meta) {
            return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
        }
        function getUserBounds(scale) {
            const {min, max, minDefined, maxDefined} = scale.getUserBounds();
            return {
                min: minDefined ? min : Number.NEGATIVE_INFINITY,
                max: maxDefined ? max : Number.POSITIVE_INFINITY
            };
        }
        function getOrCreateStack(stacks, stackKey, indexValue) {
            const subStack = stacks[stackKey] || (stacks[stackKey] = {});
            return subStack[indexValue] || (subStack[indexValue] = {});
        }
        function getLastIndexInStack(stack, vScale, positive, type) {
            for (const meta of vScale.getMatchingVisibleMetas(type).reverse()) {
                const value = stack[meta.index];
                if (positive && value > 0 || !positive && value < 0) return meta.index;
            }
            return null;
        }
        function updateStacks(controller, parsed) {
            const {chart, _cachedMeta: meta} = controller;
            const stacks = chart._stacks || (chart._stacks = {});
            const {iScale, vScale, index: datasetIndex} = meta;
            const iAxis = iScale.axis;
            const vAxis = vScale.axis;
            const key = getStackKey(iScale, vScale, meta);
            const ilen = parsed.length;
            let stack;
            for (let i = 0; i < ilen; ++i) {
                const item = parsed[i];
                const {[iAxis]: index, [vAxis]: value} = item;
                const itemStacks = item._stacks || (item._stacks = {});
                stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
                stack[datasetIndex] = value;
                stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
                stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
                const visualValues = stack._visualValues || (stack._visualValues = {});
                visualValues[datasetIndex] = value;
            }
        }
        function getFirstScaleId(chart, axis) {
            const scales = chart.scales;
            return Object.keys(scales).filter((key => scales[key].axis === axis)).shift();
        }
        function createDatasetContext(parent, index) {
            return createContext(parent, {
                active: false,
                dataset: void 0,
                datasetIndex: index,
                index,
                mode: "default",
                type: "dataset"
            });
        }
        function createDataContext(parent, index, element) {
            return createContext(parent, {
                active: false,
                dataIndex: index,
                parsed: void 0,
                raw: void 0,
                element,
                index,
                mode: "default",
                type: "data"
            });
        }
        function clearStacks(meta, items) {
            const datasetIndex = meta.controller.index;
            const axis = meta.vScale && meta.vScale.axis;
            if (!axis) return;
            items = items || meta._parsed;
            for (const parsed of items) {
                const stacks = parsed._stacks;
                if (!stacks || void 0 === stacks[axis] || void 0 === stacks[axis][datasetIndex]) return;
                delete stacks[axis][datasetIndex];
                if (void 0 !== stacks[axis]._visualValues && void 0 !== stacks[axis]._visualValues[datasetIndex]) delete stacks[axis]._visualValues[datasetIndex];
            }
        }
        const isDirectUpdateMode = mode => "reset" === mode || "none" === mode;
        const cloneIfNotShared = (cached, shared) => shared ? cached : Object.assign({}, cached);
        const createStack = (canStack, meta, chart) => canStack && !meta.hidden && meta._stacked && {
            keys: getSortedDatasetIndices(chart, true),
            values: null
        };
        class DatasetController {
            static defaults={};
            static datasetElementType=null;
            static dataElementType=null;
            constructor(chart, datasetIndex) {
                this.chart = chart;
                this._ctx = chart.ctx;
                this.index = datasetIndex;
                this._cachedDataOpts = {};
                this._cachedMeta = this.getMeta();
                this._type = this._cachedMeta.type;
                this.options = void 0;
                this._parsing = false;
                this._data = void 0;
                this._objectData = void 0;
                this._sharedOptions = void 0;
                this._drawStart = void 0;
                this._drawCount = void 0;
                this.enableOptionSharing = false;
                this.supportsDecimation = false;
                this.$context = void 0;
                this._syncList = [];
                this.datasetElementType = new.target.datasetElementType;
                this.dataElementType = new.target.dataElementType;
                this.initialize();
            }
            initialize() {
                const meta = this._cachedMeta;
                this.configure();
                this.linkScales();
                meta._stacked = isStacked(meta.vScale, meta);
                this.addElements();
                if (this.options.fill && !this.chart.isPluginEnabled("filler")) console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
            }
            updateIndex(datasetIndex) {
                if (this.index !== datasetIndex) clearStacks(this._cachedMeta);
                this.index = datasetIndex;
            }
            linkScales() {
                const chart = this.chart;
                const meta = this._cachedMeta;
                const dataset = this.getDataset();
                const chooseId = (axis, x, y, r) => "x" === axis ? x : "r" === axis ? r : y;
                const xid = meta.xAxisID = valueOrDefault(dataset.xAxisID, getFirstScaleId(chart, "x"));
                const yid = meta.yAxisID = valueOrDefault(dataset.yAxisID, getFirstScaleId(chart, "y"));
                const rid = meta.rAxisID = valueOrDefault(dataset.rAxisID, getFirstScaleId(chart, "r"));
                const indexAxis = meta.indexAxis;
                const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
                const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
                meta.xScale = this.getScaleForId(xid);
                meta.yScale = this.getScaleForId(yid);
                meta.rScale = this.getScaleForId(rid);
                meta.iScale = this.getScaleForId(iid);
                meta.vScale = this.getScaleForId(vid);
            }
            getDataset() {
                return this.chart.data.datasets[this.index];
            }
            getMeta() {
                return this.chart.getDatasetMeta(this.index);
            }
            getScaleForId(scaleID) {
                return this.chart.scales[scaleID];
            }
            _getOtherScale(scale) {
                const meta = this._cachedMeta;
                return scale === meta.iScale ? meta.vScale : meta.iScale;
            }
            reset() {
                this._update("reset");
            }
            _destroy() {
                const meta = this._cachedMeta;
                if (this._data) unlistenArrayEvents(this._data, this);
                if (meta._stacked) clearStacks(meta);
            }
            _dataCheck() {
                const dataset = this.getDataset();
                const data = dataset.data || (dataset.data = []);
                const _data = this._data;
                if (isObject(data)) this._data = convertObjectDataToArray(data); else if (_data !== data) {
                    if (_data) {
                        unlistenArrayEvents(_data, this);
                        const meta = this._cachedMeta;
                        clearStacks(meta);
                        meta._parsed = [];
                    }
                    if (data && Object.isExtensible(data)) listenArrayEvents(data, this);
                    this._syncList = [];
                    this._data = data;
                }
            }
            addElements() {
                const meta = this._cachedMeta;
                this._dataCheck();
                if (this.datasetElementType) meta.dataset = new this.datasetElementType;
            }
            buildOrUpdateElements(resetNewElements) {
                const meta = this._cachedMeta;
                const dataset = this.getDataset();
                let stackChanged = false;
                this._dataCheck();
                const oldStacked = meta._stacked;
                meta._stacked = isStacked(meta.vScale, meta);
                if (meta.stack !== dataset.stack) {
                    stackChanged = true;
                    clearStacks(meta);
                    meta.stack = dataset.stack;
                }
                this._resyncElements(resetNewElements);
                if (stackChanged || oldStacked !== meta._stacked) updateStacks(this, meta._parsed);
            }
            configure() {
                const config = this.chart.config;
                const scopeKeys = config.datasetScopeKeys(this._type);
                const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
                this.options = config.createResolver(scopes, this.getContext());
                this._parsing = this.options.parsing;
                this._cachedDataOpts = {};
            }
            parse(start, count) {
                const {_cachedMeta: meta, _data: data} = this;
                const {iScale, _stacked} = meta;
                const iAxis = iScale.axis;
                let sorted = 0 === start && count === data.length ? true : meta._sorted;
                let prev = start > 0 && meta._parsed[start - 1];
                let i, cur, parsed;
                if (false === this._parsing) {
                    meta._parsed = data;
                    meta._sorted = true;
                    parsed = data;
                } else {
                    if (isArray(data[start])) parsed = this.parseArrayData(meta, data, start, count); else if (isObject(data[start])) parsed = this.parseObjectData(meta, data, start, count); else parsed = this.parsePrimitiveData(meta, data, start, count);
                    const isNotInOrderComparedToPrev = () => null === cur[iAxis] || prev && cur[iAxis] < prev[iAxis];
                    for (i = 0; i < count; ++i) {
                        meta._parsed[i + start] = cur = parsed[i];
                        if (sorted) {
                            if (isNotInOrderComparedToPrev()) sorted = false;
                            prev = cur;
                        }
                    }
                    meta._sorted = sorted;
                }
                if (_stacked) updateStacks(this, parsed);
            }
            parsePrimitiveData(meta, data, start, count) {
                const {iScale, vScale} = meta;
                const iAxis = iScale.axis;
                const vAxis = vScale.axis;
                const labels = iScale.getLabels();
                const singleScale = iScale === vScale;
                const parsed = new Array(count);
                let i, ilen, index;
                for (i = 0, ilen = count; i < ilen; ++i) {
                    index = i + start;
                    parsed[i] = {
                        [iAxis]: singleScale || iScale.parse(labels[index], index),
                        [vAxis]: vScale.parse(data[index], index)
                    };
                }
                return parsed;
            }
            parseArrayData(meta, data, start, count) {
                const {xScale, yScale} = meta;
                const parsed = new Array(count);
                let i, ilen, index, item;
                for (i = 0, ilen = count; i < ilen; ++i) {
                    index = i + start;
                    item = data[index];
                    parsed[i] = {
                        x: xScale.parse(item[0], index),
                        y: yScale.parse(item[1], index)
                    };
                }
                return parsed;
            }
            parseObjectData(meta, data, start, count) {
                const {xScale, yScale} = meta;
                const {xAxisKey = "x", yAxisKey = "y"} = this._parsing;
                const parsed = new Array(count);
                let i, ilen, index, item;
                for (i = 0, ilen = count; i < ilen; ++i) {
                    index = i + start;
                    item = data[index];
                    parsed[i] = {
                        x: xScale.parse(resolveObjectKey(item, xAxisKey), index),
                        y: yScale.parse(resolveObjectKey(item, yAxisKey), index)
                    };
                }
                return parsed;
            }
            getParsed(index) {
                return this._cachedMeta._parsed[index];
            }
            getDataElement(index) {
                return this._cachedMeta.data[index];
            }
            applyStack(scale, parsed, mode) {
                const chart = this.chart;
                const meta = this._cachedMeta;
                const value = parsed[scale.axis];
                const stack = {
                    keys: getSortedDatasetIndices(chart, true),
                    values: parsed._stacks[scale.axis]._visualValues
                };
                return applyStack(stack, value, meta.index, {
                    mode
                });
            }
            updateRangeFromParsed(range, scale, parsed, stack) {
                const parsedValue = parsed[scale.axis];
                let value = null === parsedValue ? NaN : parsedValue;
                const values = stack && parsed._stacks[scale.axis];
                if (stack && values) {
                    stack.values = values;
                    value = applyStack(stack, parsedValue, this._cachedMeta.index);
                }
                range.min = Math.min(range.min, value);
                range.max = Math.max(range.max, value);
            }
            getMinMax(scale, canStack) {
                const meta = this._cachedMeta;
                const _parsed = meta._parsed;
                const sorted = meta._sorted && scale === meta.iScale;
                const ilen = _parsed.length;
                const otherScale = this._getOtherScale(scale);
                const stack = createStack(canStack, meta, this.chart);
                const range = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                };
                const {min: otherMin, max: otherMax} = getUserBounds(otherScale);
                let i, parsed;
                function _skip() {
                    parsed = _parsed[i];
                    const otherValue = parsed[otherScale.axis];
                    return !isNumberFinite(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
                }
                for (i = 0; i < ilen; ++i) {
                    if (_skip()) continue;
                    this.updateRangeFromParsed(range, scale, parsed, stack);
                    if (sorted) break;
                }
                if (sorted) for (i = ilen - 1; i >= 0; --i) {
                    if (_skip()) continue;
                    this.updateRangeFromParsed(range, scale, parsed, stack);
                    break;
                }
                return range;
            }
            getAllParsedValues(scale) {
                const parsed = this._cachedMeta._parsed;
                const values = [];
                let i, ilen, value;
                for (i = 0, ilen = parsed.length; i < ilen; ++i) {
                    value = parsed[i][scale.axis];
                    if (isNumberFinite(value)) values.push(value);
                }
                return values;
            }
            getMaxOverflow() {
                return false;
            }
            getLabelAndValue(index) {
                const meta = this._cachedMeta;
                const iScale = meta.iScale;
                const vScale = meta.vScale;
                const parsed = this.getParsed(index);
                return {
                    label: iScale ? "" + iScale.getLabelForValue(parsed[iScale.axis]) : "",
                    value: vScale ? "" + vScale.getLabelForValue(parsed[vScale.axis]) : ""
                };
            }
            _update(mode) {
                const meta = this._cachedMeta;
                this.update(mode || "default");
                meta._clip = toClip(valueOrDefault(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
            }
            update(mode) {}
            draw() {
                const ctx = this._ctx;
                const chart = this.chart;
                const meta = this._cachedMeta;
                const elements = meta.data || [];
                const area = chart.chartArea;
                const active = [];
                const start = this._drawStart || 0;
                const count = this._drawCount || elements.length - start;
                const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
                let i;
                if (meta.dataset) meta.dataset.draw(ctx, area, start, count);
                for (i = start; i < start + count; ++i) {
                    const element = elements[i];
                    if (element.hidden) continue;
                    if (element.active && drawActiveElementsOnTop) active.push(element); else element.draw(ctx, area);
                }
                for (i = 0; i < active.length; ++i) active[i].draw(ctx, area);
            }
            getStyle(index, active) {
                const mode = active ? "active" : "default";
                return void 0 === index && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
            }
            getContext(index, active, mode) {
                const dataset = this.getDataset();
                let context;
                if (index >= 0 && index < this._cachedMeta.data.length) {
                    const element = this._cachedMeta.data[index];
                    context = element.$context || (element.$context = createDataContext(this.getContext(), index, element));
                    context.parsed = this.getParsed(index);
                    context.raw = dataset.data[index];
                    context.index = context.dataIndex = index;
                } else {
                    context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
                    context.dataset = dataset;
                    context.index = context.datasetIndex = this.index;
                }
                context.active = !!active;
                context.mode = mode;
                return context;
            }
            resolveDatasetElementOptions(mode) {
                return this._resolveElementOptions(this.datasetElementType.id, mode);
            }
            resolveDataElementOptions(index, mode) {
                return this._resolveElementOptions(this.dataElementType.id, mode, index);
            }
            _resolveElementOptions(elementType, mode = "default", index) {
                const active = "active" === mode;
                const cache = this._cachedDataOpts;
                const cacheKey = elementType + "-" + mode;
                const cached = cache[cacheKey];
                const sharing = this.enableOptionSharing && defined(index);
                if (cached) return cloneIfNotShared(cached, sharing);
                const config = this.chart.config;
                const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
                const prefixes = active ? [ `${elementType}Hover`, "hover", elementType, "" ] : [ elementType, "" ];
                const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
                const names = Object.keys(defaults.elements[elementType]);
                const context = () => this.getContext(index, active, mode);
                const values = config.resolveNamedOptions(scopes, names, context, prefixes);
                if (values.$shared) {
                    values.$shared = sharing;
                    cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
                }
                return values;
            }
            _resolveAnimations(index, transition, active) {
                const chart = this.chart;
                const cache = this._cachedDataOpts;
                const cacheKey = `animation-${transition}`;
                const cached = cache[cacheKey];
                if (cached) return cached;
                let options;
                if (false !== chart.options.animation) {
                    const config = this.chart.config;
                    const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
                    const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
                    options = config.createResolver(scopes, this.getContext(index, active, transition));
                }
                const animations = new Animations(chart, options && options.animations);
                if (options && options._cacheable) cache[cacheKey] = Object.freeze(animations);
                return animations;
            }
            getSharedOptions(options) {
                if (!options.$shared) return;
                return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
            }
            includeOptions(mode, sharedOptions) {
                return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
            }
            _getSharedOptions(start, mode) {
                const firstOpts = this.resolveDataElementOptions(start, mode);
                const previouslySharedOptions = this._sharedOptions;
                const sharedOptions = this.getSharedOptions(firstOpts);
                const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
                this.updateSharedOptions(sharedOptions, mode, firstOpts);
                return {
                    sharedOptions,
                    includeOptions
                };
            }
            updateElement(element, index, properties, mode) {
                if (isDirectUpdateMode(mode)) Object.assign(element, properties); else this._resolveAnimations(index, mode).update(element, properties);
            }
            updateSharedOptions(sharedOptions, mode, newOptions) {
                if (sharedOptions && !isDirectUpdateMode(mode)) this._resolveAnimations(void 0, mode).update(sharedOptions, newOptions);
            }
            _setStyle(element, index, mode, active) {
                element.active = active;
                const options = this.getStyle(index, active);
                this._resolveAnimations(index, mode, active).update(element, {
                    options: !active && this.getSharedOptions(options) || options
                });
            }
            removeHoverStyle(element, datasetIndex, index) {
                this._setStyle(element, index, "active", false);
            }
            setHoverStyle(element, datasetIndex, index) {
                this._setStyle(element, index, "active", true);
            }
            _removeDatasetHoverStyle() {
                const element = this._cachedMeta.dataset;
                if (element) this._setStyle(element, void 0, "active", false);
            }
            _setDatasetHoverStyle() {
                const element = this._cachedMeta.dataset;
                if (element) this._setStyle(element, void 0, "active", true);
            }
            _resyncElements(resetNewElements) {
                const data = this._data;
                const elements = this._cachedMeta.data;
                for (const [method, arg1, arg2] of this._syncList) this[method](arg1, arg2);
                this._syncList = [];
                const numMeta = elements.length;
                const numData = data.length;
                const count = Math.min(numData, numMeta);
                if (count) this.parse(0, count);
                if (numData > numMeta) this._insertElements(numMeta, numData - numMeta, resetNewElements); else if (numData < numMeta) this._removeElements(numData, numMeta - numData);
            }
            _insertElements(start, count, resetNewElements = true) {
                const meta = this._cachedMeta;
                const data = meta.data;
                const end = start + count;
                let i;
                const move = arr => {
                    arr.length += count;
                    for (i = arr.length - 1; i >= end; i--) arr[i] = arr[i - count];
                };
                move(data);
                for (i = start; i < end; ++i) data[i] = new this.dataElementType;
                if (this._parsing) move(meta._parsed);
                this.parse(start, count);
                if (resetNewElements) this.updateElements(data, start, count, "reset");
            }
            updateElements(element, start, count, mode) {}
            _removeElements(start, count) {
                const meta = this._cachedMeta;
                if (this._parsing) {
                    const removed = meta._parsed.splice(start, count);
                    if (meta._stacked) clearStacks(meta, removed);
                }
                meta.data.splice(start, count);
            }
            _sync(args) {
                if (this._parsing) this._syncList.push(args); else {
                    const [method, arg1, arg2] = args;
                    this[method](arg1, arg2);
                }
                this.chart._dataChanges.push([ this.index, ...args ]);
            }
            _onDataPush() {
                const count = arguments.length;
                this._sync([ "_insertElements", this.getDataset().data.length - count, count ]);
            }
            _onDataPop() {
                this._sync([ "_removeElements", this._cachedMeta.data.length - 1, 1 ]);
            }
            _onDataShift() {
                this._sync([ "_removeElements", 0, 1 ]);
            }
            _onDataSplice(start, count) {
                if (count) this._sync([ "_removeElements", start, count ]);
                const newCount = arguments.length - 2;
                if (newCount) this._sync([ "_insertElements", start, newCount ]);
            }
            _onDataUnshift() {
                this._sync([ "_insertElements", 0, arguments.length ]);
            }
        }
        function getAllScaleValues(scale, type) {
            if (!scale._cache.$bar) {
                const visibleMetas = scale.getMatchingVisibleMetas(type);
                let values = [];
                for (let i = 0, ilen = visibleMetas.length; i < ilen; i++) values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
                scale._cache.$bar = _arrayUnique(values.sort(((a, b) => a - b)));
            }
            return scale._cache.$bar;
        }
        function computeMinSampleSize(meta) {
            const scale = meta.iScale;
            const values = getAllScaleValues(scale, meta.type);
            let min = scale._length;
            let i, ilen, curr, prev;
            const updateMinAndPrev = () => {
                if (32767 === curr || -32768 === curr) return;
                if (defined(prev)) min = Math.min(min, Math.abs(curr - prev) || min);
                prev = curr;
            };
            for (i = 0, ilen = values.length; i < ilen; ++i) {
                curr = scale.getPixelForValue(values[i]);
                updateMinAndPrev();
            }
            prev = void 0;
            for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
                curr = scale.getPixelForTick(i);
                updateMinAndPrev();
            }
            return min;
        }
        function computeFitCategoryTraits(index, ruler, options, stackCount) {
            const thickness = options.barThickness;
            let size, ratio;
            if (isNullOrUndef(thickness)) {
                size = ruler.min * options.categoryPercentage;
                ratio = options.barPercentage;
            } else {
                size = thickness * stackCount;
                ratio = 1;
            }
            return {
                chunk: size / stackCount,
                ratio,
                start: ruler.pixels[index] - size / 2
            };
        }
        function computeFlexCategoryTraits(index, ruler, options, stackCount) {
            const pixels = ruler.pixels;
            const curr = pixels[index];
            let prev = index > 0 ? pixels[index - 1] : null;
            let next = index < pixels.length - 1 ? pixels[index + 1] : null;
            const percent = options.categoryPercentage;
            if (null === prev) prev = curr - (null === next ? ruler.end - ruler.start : next - curr);
            if (null === next) next = curr + curr - prev;
            const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
            const size = Math.abs(next - prev) / 2 * percent;
            return {
                chunk: size / stackCount,
                ratio: options.barPercentage,
                start
            };
        }
        function parseFloatBar(entry, item, vScale, i) {
            const startValue = vScale.parse(entry[0], i);
            const endValue = vScale.parse(entry[1], i);
            const min = Math.min(startValue, endValue);
            const max = Math.max(startValue, endValue);
            let barStart = min;
            let barEnd = max;
            if (Math.abs(min) > Math.abs(max)) {
                barStart = max;
                barEnd = min;
            }
            item[vScale.axis] = barEnd;
            item._custom = {
                barStart,
                barEnd,
                start: startValue,
                end: endValue,
                min,
                max
            };
        }
        function parseValue(entry, item, vScale, i) {
            if (isArray(entry)) parseFloatBar(entry, item, vScale, i); else item[vScale.axis] = vScale.parse(entry, i);
            return item;
        }
        function parseArrayOrPrimitive(meta, data, start, count) {
            const iScale = meta.iScale;
            const vScale = meta.vScale;
            const labels = iScale.getLabels();
            const singleScale = iScale === vScale;
            const parsed = [];
            let i, ilen, item, entry;
            for (i = start, ilen = start + count; i < ilen; ++i) {
                entry = data[i];
                item = {};
                item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
                parsed.push(parseValue(entry, item, vScale, i));
            }
            return parsed;
        }
        function isFloatBar(custom) {
            return custom && void 0 !== custom.barStart && void 0 !== custom.barEnd;
        }
        function barSign(size, vScale, actualBase) {
            if (0 !== size) return sign(size);
            return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
        }
        function borderProps(properties) {
            let reverse, start, end, top, bottom;
            if (properties.horizontal) {
                reverse = properties.base > properties.x;
                start = "left";
                end = "right";
            } else {
                reverse = properties.base < properties.y;
                start = "bottom";
                end = "top";
            }
            if (reverse) {
                top = "end";
                bottom = "start";
            } else {
                top = "start";
                bottom = "end";
            }
            return {
                start,
                end,
                reverse,
                top,
                bottom
            };
        }
        function setBorderSkipped(properties, options, stack, index) {
            let edge = options.borderSkipped;
            const res = {};
            if (!edge) {
                properties.borderSkipped = res;
                return;
            }
            if (true === edge) {
                properties.borderSkipped = {
                    top: true,
                    right: true,
                    bottom: true,
                    left: true
                };
                return;
            }
            const {start, end, reverse, top, bottom} = borderProps(properties);
            if ("middle" === edge && stack) {
                properties.enableBorderRadius = true;
                if ((stack._top || 0) === index) edge = top; else if ((stack._bottom || 0) === index) edge = bottom; else {
                    res[parseEdge(bottom, start, end, reverse)] = true;
                    edge = top;
                }
            }
            res[parseEdge(edge, start, end, reverse)] = true;
            properties.borderSkipped = res;
        }
        function parseEdge(edge, a, b, reverse) {
            if (reverse) {
                edge = swap(edge, a, b);
                edge = startEnd(edge, b, a);
            } else edge = startEnd(edge, a, b);
            return edge;
        }
        function swap(orig, v1, v2) {
            return orig === v1 ? v2 : orig === v2 ? v1 : orig;
        }
        function startEnd(v, start, end) {
            return "start" === v ? start : "end" === v ? end : v;
        }
        function setInflateAmount(properties, {inflateAmount}, ratio) {
            properties.inflateAmount = "auto" === inflateAmount ? 1 === ratio ? .33 : 0 : inflateAmount;
        }
        class BarController extends DatasetController {
            static id="bar";
            static defaults={
                datasetElementType: false,
                dataElementType: "bar",
                categoryPercentage: .8,
                barPercentage: .9,
                grouped: true,
                animations: {
                    numbers: {
                        type: "number",
                        properties: [ "x", "y", "base", "width", "height" ]
                    }
                }
            };
            static overrides={
                scales: {
                    _index_: {
                        type: "category",
                        offset: true,
                        grid: {
                            offset: true
                        }
                    },
                    _value_: {
                        type: "linear",
                        beginAtZero: true
                    }
                }
            };
            parsePrimitiveData(meta, data, start, count) {
                return parseArrayOrPrimitive(meta, data, start, count);
            }
            parseArrayData(meta, data, start, count) {
                return parseArrayOrPrimitive(meta, data, start, count);
            }
            parseObjectData(meta, data, start, count) {
                const {iScale, vScale} = meta;
                const {xAxisKey = "x", yAxisKey = "y"} = this._parsing;
                const iAxisKey = "x" === iScale.axis ? xAxisKey : yAxisKey;
                const vAxisKey = "x" === vScale.axis ? xAxisKey : yAxisKey;
                const parsed = [];
                let i, ilen, item, obj;
                for (i = start, ilen = start + count; i < ilen; ++i) {
                    obj = data[i];
                    item = {};
                    item[iScale.axis] = iScale.parse(resolveObjectKey(obj, iAxisKey), i);
                    parsed.push(parseValue(resolveObjectKey(obj, vAxisKey), item, vScale, i));
                }
                return parsed;
            }
            updateRangeFromParsed(range, scale, parsed, stack) {
                super.updateRangeFromParsed(range, scale, parsed, stack);
                const custom = parsed._custom;
                if (custom && scale === this._cachedMeta.vScale) {
                    range.min = Math.min(range.min, custom.min);
                    range.max = Math.max(range.max, custom.max);
                }
            }
            getMaxOverflow() {
                return 0;
            }
            getLabelAndValue(index) {
                const meta = this._cachedMeta;
                const {iScale, vScale} = meta;
                const parsed = this.getParsed(index);
                const custom = parsed._custom;
                const value = isFloatBar(custom) ? "[" + custom.start + ", " + custom.end + "]" : "" + vScale.getLabelForValue(parsed[vScale.axis]);
                return {
                    label: "" + iScale.getLabelForValue(parsed[iScale.axis]),
                    value
                };
            }
            initialize() {
                this.enableOptionSharing = true;
                super.initialize();
                const meta = this._cachedMeta;
                meta.stack = this.getDataset().stack;
            }
            update(mode) {
                const meta = this._cachedMeta;
                this.updateElements(meta.data, 0, meta.data.length, mode);
            }
            updateElements(bars, start, count, mode) {
                const reset = "reset" === mode;
                const {index, _cachedMeta: {vScale}} = this;
                const base = vScale.getBasePixel();
                const horizontal = vScale.isHorizontal();
                const ruler = this._getRuler();
                const {sharedOptions, includeOptions} = this._getSharedOptions(start, mode);
                for (let i = start; i < start + count; i++) {
                    const parsed = this.getParsed(i);
                    const vpixels = reset || isNullOrUndef(parsed[vScale.axis]) ? {
                        base,
                        head: base
                    } : this._calculateBarValuePixels(i);
                    const ipixels = this._calculateBarIndexPixels(i, ruler);
                    const stack = (parsed._stacks || {})[vScale.axis];
                    const properties = {
                        horizontal,
                        base: vpixels.base,
                        enableBorderRadius: !stack || isFloatBar(parsed._custom) || index === stack._top || index === stack._bottom,
                        x: horizontal ? vpixels.head : ipixels.center,
                        y: horizontal ? ipixels.center : vpixels.head,
                        height: horizontal ? ipixels.size : Math.abs(vpixels.size),
                        width: horizontal ? Math.abs(vpixels.size) : ipixels.size
                    };
                    if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? "active" : mode);
                    const options = properties.options || bars[i].options;
                    setBorderSkipped(properties, options, stack, index);
                    setInflateAmount(properties, options, ruler.ratio);
                    this.updateElement(bars[i], i, properties, mode);
                }
            }
            _getStacks(last, dataIndex) {
                const {iScale} = this._cachedMeta;
                const metasets = iScale.getMatchingVisibleMetas(this._type).filter((meta => meta.controller.options.grouped));
                const stacked = iScale.options.stacked;
                const stacks = [];
                const skipNull = meta => {
                    const parsed = meta.controller.getParsed(dataIndex);
                    const val = parsed && parsed[meta.vScale.axis];
                    if (isNullOrUndef(val) || isNaN(val)) return true;
                };
                for (const meta of metasets) {
                    if (void 0 !== dataIndex && skipNull(meta)) continue;
                    if (false === stacked || -1 === stacks.indexOf(meta.stack) || void 0 === stacked && void 0 === meta.stack) stacks.push(meta.stack);
                    if (meta.index === last) break;
                }
                if (!stacks.length) stacks.push(void 0);
                return stacks;
            }
            _getStackCount(index) {
                return this._getStacks(void 0, index).length;
            }
            _getStackIndex(datasetIndex, name, dataIndex) {
                const stacks = this._getStacks(datasetIndex, dataIndex);
                const index = void 0 !== name ? stacks.indexOf(name) : -1;
                return -1 === index ? stacks.length - 1 : index;
            }
            _getRuler() {
                const opts = this.options;
                const meta = this._cachedMeta;
                const iScale = meta.iScale;
                const pixels = [];
                let i, ilen;
                for (i = 0, ilen = meta.data.length; i < ilen; ++i) pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
                const barThickness = opts.barThickness;
                const min = barThickness || computeMinSampleSize(meta);
                return {
                    min,
                    pixels,
                    start: iScale._startPixel,
                    end: iScale._endPixel,
                    stackCount: this._getStackCount(),
                    scale: iScale,
                    grouped: opts.grouped,
                    ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
                };
            }
            _calculateBarValuePixels(index) {
                const {_cachedMeta: {vScale, _stacked, index: datasetIndex}, options: {base: baseValue, minBarLength}} = this;
                const actualBase = baseValue || 0;
                const parsed = this.getParsed(index);
                const custom = parsed._custom;
                const floating = isFloatBar(custom);
                let value = parsed[vScale.axis];
                let start = 0;
                let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
                let head, size;
                if (length !== value) {
                    start = length - value;
                    length = value;
                }
                if (floating) {
                    value = custom.barStart;
                    length = custom.barEnd - custom.barStart;
                    if (0 !== value && sign(value) !== sign(custom.barEnd)) start = 0;
                    start += value;
                }
                const startValue = !isNullOrUndef(baseValue) && !floating ? baseValue : start;
                let base = vScale.getPixelForValue(startValue);
                if (this.chart.getDataVisibility(index)) head = vScale.getPixelForValue(start + length); else head = base;
                size = head - base;
                if (Math.abs(size) < minBarLength) {
                    size = barSign(size, vScale, actualBase) * minBarLength;
                    if (value === actualBase) base -= size / 2;
                    const startPixel = vScale.getPixelForDecimal(0);
                    const endPixel = vScale.getPixelForDecimal(1);
                    const min = Math.min(startPixel, endPixel);
                    const max = Math.max(startPixel, endPixel);
                    base = Math.max(Math.min(base, max), min);
                    head = base + size;
                    if (_stacked && !floating) parsed._stacks[vScale.axis]._visualValues[datasetIndex] = vScale.getValueForPixel(head) - vScale.getValueForPixel(base);
                }
                if (base === vScale.getPixelForValue(actualBase)) {
                    const halfGrid = sign(size) * vScale.getLineWidthForValue(actualBase) / 2;
                    base += halfGrid;
                    size -= halfGrid;
                }
                return {
                    size,
                    base,
                    head,
                    center: head + size / 2
                };
            }
            _calculateBarIndexPixels(index, ruler) {
                const scale = ruler.scale;
                const options = this.options;
                const skipNull = options.skipNull;
                const maxBarThickness = valueOrDefault(options.maxBarThickness, 1 / 0);
                let center, size;
                if (ruler.grouped) {
                    const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
                    const range = "flex" === options.barThickness ? computeFlexCategoryTraits(index, ruler, options, stackCount) : computeFitCategoryTraits(index, ruler, options, stackCount);
                    const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : void 0);
                    center = range.start + range.chunk * stackIndex + range.chunk / 2;
                    size = Math.min(maxBarThickness, range.chunk * range.ratio);
                } else {
                    center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
                    size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
                }
                return {
                    base: center - size / 2,
                    head: center + size / 2,
                    center,
                    size
                };
            }
            draw() {
                const meta = this._cachedMeta;
                const vScale = meta.vScale;
                const rects = meta.data;
                const ilen = rects.length;
                let i = 0;
                for (;i < ilen; ++i) if (null !== this.getParsed(i)[vScale.axis]) rects[i].draw(this._ctx);
            }
        }
        function chart_abstract() {
            throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
        }
        class DateAdapterBase {
            static override(members) {
                Object.assign(DateAdapterBase.prototype, members);
            }
            constructor(options) {
                this.options = options || {};
            }
            init() {}
            formats() {
                return chart_abstract();
            }
            parse() {
                return chart_abstract();
            }
            format() {
                return chart_abstract();
            }
            add() {
                return chart_abstract();
            }
            diff() {
                return chart_abstract();
            }
            startOf() {
                return chart_abstract();
            }
            endOf() {
                return chart_abstract();
            }
        }
        var adapters = {
            _date: DateAdapterBase
        };
        function binarySearch(metaset, axis, value, intersect) {
            const {controller, data, _sorted} = metaset;
            const iScale = controller._cachedMeta.iScale;
            if (iScale && axis === iScale.axis && "r" !== axis && _sorted && data.length) {
                const lookupMethod = iScale._reversePixels ? _rlookupByKey : _lookupByKey;
                if (!intersect) return lookupMethod(data, axis, value); else if (controller._sharedOptions) {
                    const el = data[0];
                    const range = "function" === typeof el.getRange && el.getRange(axis);
                    if (range) {
                        const start = lookupMethod(data, axis, value - range);
                        const end = lookupMethod(data, axis, value + range);
                        return {
                            lo: start.lo,
                            hi: end.hi
                        };
                    }
                }
            }
            return {
                lo: 0,
                hi: data.length - 1
            };
        }
        function evaluateInteractionItems(chart, axis, position, handler, intersect) {
            const metasets = chart.getSortedVisibleDatasetMetas();
            const value = position[axis];
            for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
                const {index, data} = metasets[i];
                const {lo, hi} = binarySearch(metasets[i], axis, value, intersect);
                for (let j = lo; j <= hi; ++j) {
                    const element = data[j];
                    if (!element.skip) handler(element, index, j);
                }
            }
        }
        function getDistanceMetricForAxis(axis) {
            const useX = -1 !== axis.indexOf("x");
            const useY = -1 !== axis.indexOf("y");
            return function(pt1, pt2) {
                const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
                const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
                return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
            };
        }
        function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
            const items = [];
            if (!includeInvisible && !chart.isPointInArea(position)) return items;
            const evaluationFunc = function(element, datasetIndex, index) {
                if (!includeInvisible && !_isPointInArea(element, chart.chartArea, 0)) return;
                if (element.inRange(position.x, position.y, useFinalPosition)) items.push({
                    element,
                    datasetIndex,
                    index
                });
            };
            evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
            return items;
        }
        function getNearestRadialItems(chart, position, axis, useFinalPosition) {
            let items = [];
            function evaluationFunc(element, datasetIndex, index) {
                const {startAngle, endAngle} = element.getProps([ "startAngle", "endAngle" ], useFinalPosition);
                const {angle} = getAngleFromPoint(element, {
                    x: position.x,
                    y: position.y
                });
                if (_angleBetween(angle, startAngle, endAngle)) items.push({
                    element,
                    datasetIndex,
                    index
                });
            }
            evaluateInteractionItems(chart, axis, position, evaluationFunc);
            return items;
        }
        function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
            let items = [];
            const distanceMetric = getDistanceMetricForAxis(axis);
            let minDistance = Number.POSITIVE_INFINITY;
            function evaluationFunc(element, datasetIndex, index) {
                const inRange = element.inRange(position.x, position.y, useFinalPosition);
                if (intersect && !inRange) return;
                const center = element.getCenterPoint(useFinalPosition);
                const pointInArea = !!includeInvisible || chart.isPointInArea(center);
                if (!pointInArea && !inRange) return;
                const distance = distanceMetric(position, center);
                if (distance < minDistance) {
                    items = [ {
                        element,
                        datasetIndex,
                        index
                    } ];
                    minDistance = distance;
                } else if (distance === minDistance) items.push({
                    element,
                    datasetIndex,
                    index
                });
            }
            evaluateInteractionItems(chart, axis, position, evaluationFunc);
            return items;
        }
        function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
            if (!includeInvisible && !chart.isPointInArea(position)) return [];
            return "r" === axis && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
        }
        function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
            const items = [];
            const rangeMethod = "x" === axis ? "inXRange" : "inYRange";
            let intersectsItem = false;
            evaluateInteractionItems(chart, axis, position, ((element, datasetIndex, index) => {
                if (element[rangeMethod](position[axis], useFinalPosition)) {
                    items.push({
                        element,
                        datasetIndex,
                        index
                    });
                    intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
                }
            }));
            if (intersect && !intersectsItem) return [];
            return items;
        }
        var Interaction = {
            evaluateInteractionItems,
            modes: {
                index(chart, e, options, useFinalPosition) {
                    const position = getRelativePosition(e, chart);
                    const axis = options.axis || "x";
                    const includeInvisible = options.includeInvisible || false;
                    const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
                    const elements = [];
                    if (!items.length) return [];
                    chart.getSortedVisibleDatasetMetas().forEach((meta => {
                        const index = items[0].index;
                        const element = meta.data[index];
                        if (element && !element.skip) elements.push({
                            element,
                            datasetIndex: meta.index,
                            index
                        });
                    }));
                    return elements;
                },
                dataset(chart, e, options, useFinalPosition) {
                    const position = getRelativePosition(e, chart);
                    const axis = options.axis || "xy";
                    const includeInvisible = options.includeInvisible || false;
                    let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
                    if (items.length > 0) {
                        const datasetIndex = items[0].datasetIndex;
                        const data = chart.getDatasetMeta(datasetIndex).data;
                        items = [];
                        for (let i = 0; i < data.length; ++i) items.push({
                            element: data[i],
                            datasetIndex,
                            index: i
                        });
                    }
                    return items;
                },
                point(chart, e, options, useFinalPosition) {
                    const position = getRelativePosition(e, chart);
                    const axis = options.axis || "xy";
                    const includeInvisible = options.includeInvisible || false;
                    return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
                },
                nearest(chart, e, options, useFinalPosition) {
                    const position = getRelativePosition(e, chart);
                    const axis = options.axis || "xy";
                    const includeInvisible = options.includeInvisible || false;
                    return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
                },
                x(chart, e, options, useFinalPosition) {
                    const position = getRelativePosition(e, chart);
                    return getAxisItems(chart, position, "x", options.intersect, useFinalPosition);
                },
                y(chart, e, options, useFinalPosition) {
                    const position = getRelativePosition(e, chart);
                    return getAxisItems(chart, position, "y", options.intersect, useFinalPosition);
                }
            }
        };
        const STATIC_POSITIONS = [ "left", "top", "right", "bottom" ];
        function filterByPosition(array, position) {
            return array.filter((v => v.pos === position));
        }
        function filterDynamicPositionByAxis(array, axis) {
            return array.filter((v => -1 === STATIC_POSITIONS.indexOf(v.pos) && v.box.axis === axis));
        }
        function sortByWeight(array, reverse) {
            return array.sort(((a, b) => {
                const v0 = reverse ? b : a;
                const v1 = reverse ? a : b;
                return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
            }));
        }
        function wrapBoxes(boxes) {
            const layoutBoxes = [];
            let i, ilen, box, pos, stack, stackWeight;
            for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
                box = boxes[i];
                ({position: pos, options: {stack, stackWeight = 1}} = box);
                layoutBoxes.push({
                    index: i,
                    box,
                    pos,
                    horizontal: box.isHorizontal(),
                    weight: box.weight,
                    stack: stack && pos + stack,
                    stackWeight
                });
            }
            return layoutBoxes;
        }
        function buildStacks(layouts) {
            const stacks = {};
            for (const wrap of layouts) {
                const {stack, pos, stackWeight} = wrap;
                if (!stack || !STATIC_POSITIONS.includes(pos)) continue;
                const _stack = stacks[stack] || (stacks[stack] = {
                    count: 0,
                    placed: 0,
                    weight: 0,
                    size: 0
                });
                _stack.count++;
                _stack.weight += stackWeight;
            }
            return stacks;
        }
        function setLayoutDims(layouts, params) {
            const stacks = buildStacks(layouts);
            const {vBoxMaxWidth, hBoxMaxHeight} = params;
            let i, ilen, layout;
            for (i = 0, ilen = layouts.length; i < ilen; ++i) {
                layout = layouts[i];
                const {fullSize} = layout.box;
                const stack = stacks[layout.stack];
                const factor = stack && layout.stackWeight / stack.weight;
                if (layout.horizontal) {
                    layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
                    layout.height = hBoxMaxHeight;
                } else {
                    layout.width = vBoxMaxWidth;
                    layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
                }
            }
            return stacks;
        }
        function buildLayoutBoxes(boxes) {
            const layoutBoxes = wrapBoxes(boxes);
            const fullSize = sortByWeight(layoutBoxes.filter((wrap => wrap.box.fullSize)), true);
            const left = sortByWeight(filterByPosition(layoutBoxes, "left"), true);
            const right = sortByWeight(filterByPosition(layoutBoxes, "right"));
            const top = sortByWeight(filterByPosition(layoutBoxes, "top"), true);
            const bottom = sortByWeight(filterByPosition(layoutBoxes, "bottom"));
            const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, "x");
            const centerVertical = filterDynamicPositionByAxis(layoutBoxes, "y");
            return {
                fullSize,
                leftAndTop: left.concat(top),
                rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
                chartArea: filterByPosition(layoutBoxes, "chartArea"),
                vertical: left.concat(right).concat(centerVertical),
                horizontal: top.concat(bottom).concat(centerHorizontal)
            };
        }
        function getCombinedMax(maxPadding, chartArea, a, b) {
            return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
        }
        function updateMaxPadding(maxPadding, boxPadding) {
            maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
            maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
            maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
            maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
        }
        function updateDims(chartArea, params, layout, stacks) {
            const {pos, box} = layout;
            const maxPadding = chartArea.maxPadding;
            if (!isObject(pos)) {
                if (layout.size) chartArea[pos] -= layout.size;
                const stack = stacks[layout.stack] || {
                    size: 0,
                    count: 1
                };
                stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
                layout.size = stack.size / stack.count;
                chartArea[pos] += layout.size;
            }
            if (box.getPadding) updateMaxPadding(maxPadding, box.getPadding());
            const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, "left", "right"));
            const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, "top", "bottom"));
            const widthChanged = newWidth !== chartArea.w;
            const heightChanged = newHeight !== chartArea.h;
            chartArea.w = newWidth;
            chartArea.h = newHeight;
            return layout.horizontal ? {
                same: widthChanged,
                other: heightChanged
            } : {
                same: heightChanged,
                other: widthChanged
            };
        }
        function handleMaxPadding(chartArea) {
            const maxPadding = chartArea.maxPadding;
            function updatePos(pos) {
                const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
                chartArea[pos] += change;
                return change;
            }
            chartArea.y += updatePos("top");
            chartArea.x += updatePos("left");
            updatePos("right");
            updatePos("bottom");
        }
        function getMargins(horizontal, chartArea) {
            const maxPadding = chartArea.maxPadding;
            function marginForPositions(positions) {
                const margin = {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                };
                positions.forEach((pos => {
                    margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
                }));
                return margin;
            }
            return horizontal ? marginForPositions([ "left", "right" ]) : marginForPositions([ "top", "bottom" ]);
        }
        function fitBoxes(boxes, chartArea, params, stacks) {
            const refitBoxes = [];
            let i, ilen, layout, box, refit, changed;
            for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
                layout = boxes[i];
                box = layout.box;
                box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
                const {same, other} = updateDims(chartArea, params, layout, stacks);
                refit |= same && refitBoxes.length;
                changed = changed || other;
                if (!box.fullSize) refitBoxes.push(layout);
            }
            return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
        }
        function setBoxDims(box, left, top, width, height) {
            box.top = top;
            box.left = left;
            box.right = left + width;
            box.bottom = top + height;
            box.width = width;
            box.height = height;
        }
        function placeBoxes(boxes, chartArea, params, stacks) {
            const userPadding = params.padding;
            let {x, y} = chartArea;
            for (const layout of boxes) {
                const box = layout.box;
                const stack = stacks[layout.stack] || {
                    count: 1,
                    placed: 0,
                    weight: 1
                };
                const weight = layout.stackWeight / stack.weight || 1;
                if (layout.horizontal) {
                    const width = chartArea.w * weight;
                    const height = stack.size || box.height;
                    if (defined(stack.start)) y = stack.start;
                    if (box.fullSize) setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height); else setBoxDims(box, chartArea.left + stack.placed, y, width, height);
                    stack.start = y;
                    stack.placed += width;
                    y = box.bottom;
                } else {
                    const height1 = chartArea.h * weight;
                    const width1 = stack.size || box.width;
                    if (defined(stack.start)) x = stack.start;
                    if (box.fullSize) setBoxDims(box, x, userPadding.top, width1, params.outerHeight - userPadding.bottom - userPadding.top); else setBoxDims(box, x, chartArea.top + stack.placed, width1, height1);
                    stack.start = x;
                    stack.placed += height1;
                    x = box.right;
                }
            }
            chartArea.x = x;
            chartArea.y = y;
        }
        var layouts = {
            addBox(chart, item) {
                if (!chart.boxes) chart.boxes = [];
                item.fullSize = item.fullSize || false;
                item.position = item.position || "top";
                item.weight = item.weight || 0;
                item._layers = item._layers || function() {
                    return [ {
                        z: 0,
                        draw(chartArea) {
                            item.draw(chartArea);
                        }
                    } ];
                };
                chart.boxes.push(item);
            },
            removeBox(chart, layoutItem) {
                const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
                if (-1 !== index) chart.boxes.splice(index, 1);
            },
            configure(chart, item, options) {
                item.fullSize = options.fullSize;
                item.position = options.position;
                item.weight = options.weight;
            },
            update(chart, width, height, minPadding) {
                if (!chart) return;
                const padding = toPadding(chart.options.layout.padding);
                const availableWidth = Math.max(width - padding.width, 0);
                const availableHeight = Math.max(height - padding.height, 0);
                const boxes = buildLayoutBoxes(chart.boxes);
                const verticalBoxes = boxes.vertical;
                const horizontalBoxes = boxes.horizontal;
                each(chart.boxes, (box => {
                    if ("function" === typeof box.beforeLayout) box.beforeLayout();
                }));
                const visibleVerticalBoxCount = verticalBoxes.reduce(((total, wrap) => wrap.box.options && false === wrap.box.options.display ? total : total + 1), 0) || 1;
                const params = Object.freeze({
                    outerWidth: width,
                    outerHeight: height,
                    padding,
                    availableWidth,
                    availableHeight,
                    vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
                    hBoxMaxHeight: availableHeight / 2
                });
                const maxPadding = Object.assign({}, padding);
                updateMaxPadding(maxPadding, toPadding(minPadding));
                const chartArea = Object.assign({
                    maxPadding,
                    w: availableWidth,
                    h: availableHeight,
                    x: padding.left,
                    y: padding.top
                }, padding);
                const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
                fitBoxes(boxes.fullSize, chartArea, params, stacks);
                fitBoxes(verticalBoxes, chartArea, params, stacks);
                if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) fitBoxes(verticalBoxes, chartArea, params, stacks);
                handleMaxPadding(chartArea);
                placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
                chartArea.x += chartArea.w;
                chartArea.y += chartArea.h;
                placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
                chart.chartArea = {
                    left: chartArea.left,
                    top: chartArea.top,
                    right: chartArea.left + chartArea.w,
                    bottom: chartArea.top + chartArea.h,
                    height: chartArea.h,
                    width: chartArea.w
                };
                each(boxes.chartArea, (layout => {
                    const box = layout.box;
                    Object.assign(box, chart.chartArea);
                    box.update(chartArea.w, chartArea.h, {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    });
                }));
            }
        };
        class BasePlatform {
            acquireContext(canvas, aspectRatio) {}
            releaseContext(context) {
                return false;
            }
            addEventListener(chart, type, listener) {}
            removeEventListener(chart, type, listener) {}
            getDevicePixelRatio() {
                return 1;
            }
            getMaximumSize(element, width, height, aspectRatio) {
                width = Math.max(0, width || element.width);
                height = height || element.height;
                return {
                    width,
                    height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
                };
            }
            isAttached(canvas) {
                return true;
            }
            updateConfig(config) {}
        }
        class BasicPlatform extends BasePlatform {
            acquireContext(item) {
                return item && item.getContext && item.getContext("2d") || null;
            }
            updateConfig(config) {
                config.options.animation = false;
            }
        }
        const EXPANDO_KEY = "$chartjs";
        const EVENT_TYPES = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        };
        const isNullOrEmpty = value => null === value || "" === value;
        function initCanvas(canvas, aspectRatio) {
            const style = canvas.style;
            const renderHeight = canvas.getAttribute("height");
            const renderWidth = canvas.getAttribute("width");
            canvas[EXPANDO_KEY] = {
                initial: {
                    height: renderHeight,
                    width: renderWidth,
                    style: {
                        display: style.display,
                        height: style.height,
                        width: style.width
                    }
                }
            };
            style.display = style.display || "block";
            style.boxSizing = style.boxSizing || "border-box";
            if (isNullOrEmpty(renderWidth)) {
                const displayWidth = readUsedSize(canvas, "width");
                if (void 0 !== displayWidth) canvas.width = displayWidth;
            }
            if (isNullOrEmpty(renderHeight)) if ("" === canvas.style.height) canvas.height = canvas.width / (aspectRatio || 2); else {
                const displayHeight = readUsedSize(canvas, "height");
                if (void 0 !== displayHeight) canvas.height = displayHeight;
            }
            return canvas;
        }
        const eventListenerOptions = supportsEventListenerOptions ? {
            passive: true
        } : false;
        function addListener(node, type, listener) {
            node.addEventListener(type, listener, eventListenerOptions);
        }
        function removeListener(chart, type, listener) {
            chart.canvas.removeEventListener(type, listener, eventListenerOptions);
        }
        function fromNativeEvent(event, chart) {
            const type = EVENT_TYPES[event.type] || event.type;
            const {x, y} = getRelativePosition(event, chart);
            return {
                type,
                chart,
                native: event,
                x: void 0 !== x ? x : null,
                y: void 0 !== y ? y : null
            };
        }
        function nodeListContains(nodeList, canvas) {
            for (const node of nodeList) if (node === canvas || node.contains(canvas)) return true;
        }
        function createAttachObserver(chart, type, listener) {
            const canvas = chart.canvas;
            const observer = new MutationObserver((entries => {
                let trigger = false;
                for (const entry of entries) {
                    trigger = trigger || nodeListContains(entry.addedNodes, canvas);
                    trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
                }
                if (trigger) listener();
            }));
            observer.observe(document, {
                childList: true,
                subtree: true
            });
            return observer;
        }
        function createDetachObserver(chart, type, listener) {
            const canvas = chart.canvas;
            const observer = new MutationObserver((entries => {
                let trigger = false;
                for (const entry of entries) {
                    trigger = trigger || nodeListContains(entry.removedNodes, canvas);
                    trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
                }
                if (trigger) listener();
            }));
            observer.observe(document, {
                childList: true,
                subtree: true
            });
            return observer;
        }
        const drpListeningCharts = new Map;
        let oldDevicePixelRatio = 0;
        function onWindowResize() {
            const dpr = window.devicePixelRatio;
            if (dpr === oldDevicePixelRatio) return;
            oldDevicePixelRatio = dpr;
            drpListeningCharts.forEach(((resize, chart) => {
                if (chart.currentDevicePixelRatio !== dpr) resize();
            }));
        }
        function listenDevicePixelRatioChanges(chart, resize) {
            if (!drpListeningCharts.size) window.addEventListener("resize", onWindowResize);
            drpListeningCharts.set(chart, resize);
        }
        function unlistenDevicePixelRatioChanges(chart) {
            drpListeningCharts.delete(chart);
            if (!drpListeningCharts.size) window.removeEventListener("resize", onWindowResize);
        }
        function createResizeObserver(chart, type, listener) {
            const canvas = chart.canvas;
            const container = canvas && _getParentNode(canvas);
            if (!container) return;
            const resize = throttled(((width, height) => {
                const w = container.clientWidth;
                listener(width, height);
                if (w < container.clientWidth) listener();
            }), window);
            const observer = new ResizeObserver((entries => {
                const entry = entries[0];
                const width = entry.contentRect.width;
                const height = entry.contentRect.height;
                if (0 === width && 0 === height) return;
                resize(width, height);
            }));
            observer.observe(container);
            listenDevicePixelRatioChanges(chart, resize);
            return observer;
        }
        function releaseObserver(chart, type, observer) {
            if (observer) observer.disconnect();
            if ("resize" === type) unlistenDevicePixelRatioChanges(chart);
        }
        function createProxyAndListen(chart, type, listener) {
            const canvas = chart.canvas;
            const proxy = throttled((event => {
                if (null !== chart.ctx) listener(fromNativeEvent(event, chart));
            }), chart);
            addListener(canvas, type, proxy);
            return proxy;
        }
        class DomPlatform extends BasePlatform {
            acquireContext(canvas, aspectRatio) {
                const context = canvas && canvas.getContext && canvas.getContext("2d");
                if (context && context.canvas === canvas) {
                    initCanvas(canvas, aspectRatio);
                    return context;
                }
                return null;
            }
            releaseContext(context) {
                const canvas = context.canvas;
                if (!canvas[EXPANDO_KEY]) return false;
                const initial = canvas[EXPANDO_KEY].initial;
                [ "height", "width" ].forEach((prop => {
                    const value = initial[prop];
                    if (isNullOrUndef(value)) canvas.removeAttribute(prop); else canvas.setAttribute(prop, value);
                }));
                const style = initial.style || {};
                Object.keys(style).forEach((key => {
                    canvas.style[key] = style[key];
                }));
                canvas.width = canvas.width;
                delete canvas[EXPANDO_KEY];
                return true;
            }
            addEventListener(chart, type, listener) {
                this.removeEventListener(chart, type);
                const proxies = chart.$proxies || (chart.$proxies = {});
                const handlers = {
                    attach: createAttachObserver,
                    detach: createDetachObserver,
                    resize: createResizeObserver
                };
                const handler = handlers[type] || createProxyAndListen;
                proxies[type] = handler(chart, type, listener);
            }
            removeEventListener(chart, type) {
                const proxies = chart.$proxies || (chart.$proxies = {});
                const proxy = proxies[type];
                if (!proxy) return;
                const handlers = {
                    attach: releaseObserver,
                    detach: releaseObserver,
                    resize: releaseObserver
                };
                const handler = handlers[type] || removeListener;
                handler(chart, type, proxy);
                proxies[type] = void 0;
            }
            getDevicePixelRatio() {
                return window.devicePixelRatio;
            }
            getMaximumSize(canvas, width, height, aspectRatio) {
                return getMaximumSize(canvas, width, height, aspectRatio);
            }
            isAttached(canvas) {
                const container = _getParentNode(canvas);
                return !!(container && container.isConnected);
            }
        }
        function _detectPlatform(canvas) {
            if (!_isDomSupported() || "undefined" !== typeof OffscreenCanvas && canvas instanceof OffscreenCanvas) return BasicPlatform;
            return DomPlatform;
        }
        class Element {
            static defaults={};
            static defaultRoutes=void 0;
            active=false;
            tooltipPosition(useFinalPosition) {
                const {x, y} = this.getProps([ "x", "y" ], useFinalPosition);
                return {
                    x,
                    y
                };
            }
            hasValue() {
                return isNumber(this.x) && isNumber(this.y);
            }
            getProps(props, final) {
                const anims = this.$animations;
                if (!final || !anims) return this;
                const ret = {};
                props.forEach((prop => {
                    ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
                }));
                return ret;
            }
        }
        function autoSkip(scale, ticks) {
            const tickOpts = scale.options.ticks;
            const determinedMaxTicks = determineMaxTicks(scale);
            const ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
            const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
            const numMajorIndices = majorIndices.length;
            const first = majorIndices[0];
            const last = majorIndices[numMajorIndices - 1];
            const newTicks = [];
            if (numMajorIndices > ticksLimit) {
                skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
                return newTicks;
            }
            const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
            if (numMajorIndices > 0) {
                let i, ilen;
                const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
                skip(ticks, newTicks, spacing, isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
                for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
                skip(ticks, newTicks, spacing, last, isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
                return newTicks;
            }
            skip(ticks, newTicks, spacing);
            return newTicks;
        }
        function determineMaxTicks(scale) {
            const offset = scale.options.offset;
            const tickLength = scale._tickSize();
            const maxScale = scale._length / tickLength + (offset ? 0 : 1);
            const maxChart = scale._maxLength / tickLength;
            return Math.floor(Math.min(maxScale, maxChart));
        }
        function calculateSpacing(majorIndices, ticks, ticksLimit) {
            const evenMajorSpacing = getEvenSpacing(majorIndices);
            const spacing = ticks.length / ticksLimit;
            if (!evenMajorSpacing) return Math.max(spacing, 1);
            const factors = _factorize(evenMajorSpacing);
            for (let i = 0, ilen = factors.length - 1; i < ilen; i++) {
                const factor = factors[i];
                if (factor > spacing) return factor;
            }
            return Math.max(spacing, 1);
        }
        function getMajorIndices(ticks) {
            const result = [];
            let i, ilen;
            for (i = 0, ilen = ticks.length; i < ilen; i++) if (ticks[i].major) result.push(i);
            return result;
        }
        function skipMajors(ticks, newTicks, majorIndices, spacing) {
            let count = 0;
            let next = majorIndices[0];
            let i;
            spacing = Math.ceil(spacing);
            for (i = 0; i < ticks.length; i++) if (i === next) {
                newTicks.push(ticks[i]);
                count++;
                next = majorIndices[count * spacing];
            }
        }
        function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
            const start = valueOrDefault(majorStart, 0);
            const end = Math.min(valueOrDefault(majorEnd, ticks.length), ticks.length);
            let count = 0;
            let length, i, next;
            spacing = Math.ceil(spacing);
            if (majorEnd) {
                length = majorEnd - majorStart;
                spacing = length / Math.floor(length / spacing);
            }
            next = start;
            while (next < 0) {
                count++;
                next = Math.round(start + count * spacing);
            }
            for (i = Math.max(start, 0); i < end; i++) if (i === next) {
                newTicks.push(ticks[i]);
                count++;
                next = Math.round(start + count * spacing);
            }
        }
        function getEvenSpacing(arr) {
            const len = arr.length;
            let i, diff;
            if (len < 2) return false;
            for (diff = arr[0], i = 1; i < len; ++i) if (arr[i] - arr[i - 1] !== diff) return false;
            return diff;
        }
        const reverseAlign = align => "left" === align ? "right" : "right" === align ? "left" : align;
        const offsetFromEdge = (scale, edge, offset) => "top" === edge || "left" === edge ? scale[edge] + offset : scale[edge] - offset;
        const getTicksLimit = (ticksLength, maxTicksLimit) => Math.min(maxTicksLimit || ticksLength, ticksLength);
        function sample(arr, numItems) {
            const result = [];
            const increment = arr.length / numItems;
            const len = arr.length;
            let i = 0;
            for (;i < len; i += increment) result.push(arr[Math.floor(i)]);
            return result;
        }
        function getPixelForGridLine(scale, index, offsetGridLines) {
            const length = scale.ticks.length;
            const validIndex = Math.min(index, length - 1);
            const start = scale._startPixel;
            const end = scale._endPixel;
            const epsilon = 1e-6;
            let lineValue = scale.getPixelForTick(validIndex);
            let offset;
            if (offsetGridLines) {
                if (1 === length) offset = Math.max(lineValue - start, end - lineValue); else if (0 === index) offset = (scale.getPixelForTick(1) - lineValue) / 2; else offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
                lineValue += validIndex < index ? offset : -offset;
                if (lineValue < start - epsilon || lineValue > end + epsilon) return;
            }
            return lineValue;
        }
        function garbageCollect(caches, length) {
            each(caches, (cache => {
                const gc = cache.gc;
                const gcLen = gc.length / 2;
                let i;
                if (gcLen > length) {
                    for (i = 0; i < gcLen; ++i) delete cache.data[gc[i]];
                    gc.splice(0, gcLen);
                }
            }));
        }
        function getTickMarkLength(options) {
            return options.drawTicks ? options.tickLength : 0;
        }
        function getTitleHeight(options, fallback) {
            if (!options.display) return 0;
            const font = toFont(options.font, fallback);
            const padding = toPadding(options.padding);
            const lines = isArray(options.text) ? options.text.length : 1;
            return lines * font.lineHeight + padding.height;
        }
        function createScaleContext(parent, scale) {
            return createContext(parent, {
                scale,
                type: "scale"
            });
        }
        function createTickContext(parent, index, tick) {
            return createContext(parent, {
                tick,
                index,
                type: "tick"
            });
        }
        function titleAlign(align, position, reverse) {
            let ret = _toLeftRightCenter(align);
            if (reverse && "right" !== position || !reverse && "right" === position) ret = reverseAlign(ret);
            return ret;
        }
        function titleArgs(scale, offset, position, align) {
            const {top, left, bottom, right, chart} = scale;
            const {chartArea, scales} = chart;
            let rotation = 0;
            let maxWidth, titleX, titleY;
            const height = bottom - top;
            const width = right - left;
            if (scale.isHorizontal()) {
                titleX = _alignStartEnd(align, left, right);
                if (isObject(position)) {
                    const positionAxisID = Object.keys(position)[0];
                    const value = position[positionAxisID];
                    titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
                } else if ("center" === position) titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset; else titleY = offsetFromEdge(scale, position, offset);
                maxWidth = right - left;
            } else {
                if (isObject(position)) {
                    const positionAxisID1 = Object.keys(position)[0];
                    const value1 = position[positionAxisID1];
                    titleX = scales[positionAxisID1].getPixelForValue(value1) - width + offset;
                } else if ("center" === position) titleX = (chartArea.left + chartArea.right) / 2 - width + offset; else titleX = offsetFromEdge(scale, position, offset);
                titleY = _alignStartEnd(align, bottom, top);
                rotation = "left" === position ? -HALF_PI : HALF_PI;
            }
            return {
                titleX,
                titleY,
                maxWidth,
                rotation
            };
        }
        class Scale extends Element {
            constructor(cfg) {
                super();
                this.id = cfg.id;
                this.type = cfg.type;
                this.options = void 0;
                this.ctx = cfg.ctx;
                this.chart = cfg.chart;
                this.top = void 0;
                this.bottom = void 0;
                this.left = void 0;
                this.right = void 0;
                this.width = void 0;
                this.height = void 0;
                this._margins = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                };
                this.maxWidth = void 0;
                this.maxHeight = void 0;
                this.paddingTop = void 0;
                this.paddingBottom = void 0;
                this.paddingLeft = void 0;
                this.paddingRight = void 0;
                this.axis = void 0;
                this.labelRotation = void 0;
                this.min = void 0;
                this.max = void 0;
                this._range = void 0;
                this.ticks = [];
                this._gridLineItems = null;
                this._labelItems = null;
                this._labelSizes = null;
                this._length = 0;
                this._maxLength = 0;
                this._longestTextCache = {};
                this._startPixel = void 0;
                this._endPixel = void 0;
                this._reversePixels = false;
                this._userMax = void 0;
                this._userMin = void 0;
                this._suggestedMax = void 0;
                this._suggestedMin = void 0;
                this._ticksLength = 0;
                this._borderValue = 0;
                this._cache = {};
                this._dataLimitsCached = false;
                this.$context = void 0;
            }
            init(options) {
                this.options = options.setContext(this.getContext());
                this.axis = options.axis;
                this._userMin = this.parse(options.min);
                this._userMax = this.parse(options.max);
                this._suggestedMin = this.parse(options.suggestedMin);
                this._suggestedMax = this.parse(options.suggestedMax);
            }
            parse(raw, index) {
                return raw;
            }
            getUserBounds() {
                let {_userMin, _userMax, _suggestedMin, _suggestedMax} = this;
                _userMin = finiteOrDefault(_userMin, Number.POSITIVE_INFINITY);
                _userMax = finiteOrDefault(_userMax, Number.NEGATIVE_INFINITY);
                _suggestedMin = finiteOrDefault(_suggestedMin, Number.POSITIVE_INFINITY);
                _suggestedMax = finiteOrDefault(_suggestedMax, Number.NEGATIVE_INFINITY);
                return {
                    min: finiteOrDefault(_userMin, _suggestedMin),
                    max: finiteOrDefault(_userMax, _suggestedMax),
                    minDefined: isNumberFinite(_userMin),
                    maxDefined: isNumberFinite(_userMax)
                };
            }
            getMinMax(canStack) {
                let {min, max, minDefined, maxDefined} = this.getUserBounds();
                let range;
                if (minDefined && maxDefined) return {
                    min,
                    max
                };
                const metas = this.getMatchingVisibleMetas();
                for (let i = 0, ilen = metas.length; i < ilen; ++i) {
                    range = metas[i].controller.getMinMax(this, canStack);
                    if (!minDefined) min = Math.min(min, range.min);
                    if (!maxDefined) max = Math.max(max, range.max);
                }
                min = maxDefined && min > max ? max : min;
                max = minDefined && min > max ? min : max;
                return {
                    min: finiteOrDefault(min, finiteOrDefault(max, min)),
                    max: finiteOrDefault(max, finiteOrDefault(min, max))
                };
            }
            getPadding() {
                return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0
                };
            }
            getTicks() {
                return this.ticks;
            }
            getLabels() {
                const data = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
            }
            getLabelItems(chartArea = this.chart.chartArea) {
                const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
                return items;
            }
            beforeLayout() {
                this._cache = {};
                this._dataLimitsCached = false;
            }
            beforeUpdate() {
                callback(this.options.beforeUpdate, [ this ]);
            }
            update(maxWidth, maxHeight, margins) {
                const {beginAtZero, grace, ticks: tickOpts} = this.options;
                const sampleSize = tickOpts.sampleSize;
                this.beforeUpdate();
                this.maxWidth = maxWidth;
                this.maxHeight = maxHeight;
                this._margins = margins = Object.assign({
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, margins);
                this.ticks = null;
                this._labelSizes = null;
                this._gridLineItems = null;
                this._labelItems = null;
                this.beforeSetDimensions();
                this.setDimensions();
                this.afterSetDimensions();
                this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
                if (!this._dataLimitsCached) {
                    this.beforeDataLimits();
                    this.determineDataLimits();
                    this.afterDataLimits();
                    this._range = _addGrace(this, grace, beginAtZero);
                    this._dataLimitsCached = true;
                }
                this.beforeBuildTicks();
                this.ticks = this.buildTicks() || [];
                this.afterBuildTicks();
                const samplingEnabled = sampleSize < this.ticks.length;
                this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
                this.configure();
                this.beforeCalculateLabelRotation();
                this.calculateLabelRotation();
                this.afterCalculateLabelRotation();
                if (tickOpts.display && (tickOpts.autoSkip || "auto" === tickOpts.source)) {
                    this.ticks = autoSkip(this, this.ticks);
                    this._labelSizes = null;
                    this.afterAutoSkip();
                }
                if (samplingEnabled) this._convertTicksToLabels(this.ticks);
                this.beforeFit();
                this.fit();
                this.afterFit();
                this.afterUpdate();
            }
            configure() {
                let reversePixels = this.options.reverse;
                let startPixel, endPixel;
                if (this.isHorizontal()) {
                    startPixel = this.left;
                    endPixel = this.right;
                } else {
                    startPixel = this.top;
                    endPixel = this.bottom;
                    reversePixels = !reversePixels;
                }
                this._startPixel = startPixel;
                this._endPixel = endPixel;
                this._reversePixels = reversePixels;
                this._length = endPixel - startPixel;
                this._alignToPixels = this.options.alignToPixels;
            }
            afterUpdate() {
                callback(this.options.afterUpdate, [ this ]);
            }
            beforeSetDimensions() {
                callback(this.options.beforeSetDimensions, [ this ]);
            }
            setDimensions() {
                if (this.isHorizontal()) {
                    this.width = this.maxWidth;
                    this.left = 0;
                    this.right = this.width;
                } else {
                    this.height = this.maxHeight;
                    this.top = 0;
                    this.bottom = this.height;
                }
                this.paddingLeft = 0;
                this.paddingTop = 0;
                this.paddingRight = 0;
                this.paddingBottom = 0;
            }
            afterSetDimensions() {
                callback(this.options.afterSetDimensions, [ this ]);
            }
            _callHooks(name) {
                this.chart.notifyPlugins(name, this.getContext());
                callback(this.options[name], [ this ]);
            }
            beforeDataLimits() {
                this._callHooks("beforeDataLimits");
            }
            determineDataLimits() {}
            afterDataLimits() {
                this._callHooks("afterDataLimits");
            }
            beforeBuildTicks() {
                this._callHooks("beforeBuildTicks");
            }
            buildTicks() {
                return [];
            }
            afterBuildTicks() {
                this._callHooks("afterBuildTicks");
            }
            beforeTickToLabelConversion() {
                callback(this.options.beforeTickToLabelConversion, [ this ]);
            }
            generateTickLabels(ticks) {
                const tickOpts = this.options.ticks;
                let i, ilen, tick;
                for (i = 0, ilen = ticks.length; i < ilen; i++) {
                    tick = ticks[i];
                    tick.label = callback(tickOpts.callback, [ tick.value, i, ticks ], this);
                }
            }
            afterTickToLabelConversion() {
                callback(this.options.afterTickToLabelConversion, [ this ]);
            }
            beforeCalculateLabelRotation() {
                callback(this.options.beforeCalculateLabelRotation, [ this ]);
            }
            calculateLabelRotation() {
                const options = this.options;
                const tickOpts = options.ticks;
                const numTicks = getTicksLimit(this.ticks.length, options.ticks.maxTicksLimit);
                const minRotation = tickOpts.minRotation || 0;
                const maxRotation = tickOpts.maxRotation;
                let labelRotation = minRotation;
                let tickWidth, maxHeight, maxLabelDiagonal;
                if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
                    this.labelRotation = minRotation;
                    return;
                }
                const labelSizes = this._getLabelSizes();
                const maxLabelWidth = labelSizes.widest.width;
                const maxLabelHeight = labelSizes.highest.height;
                const maxWidth = _limitValue(this.chart.width - maxLabelWidth, 0, this.maxWidth);
                tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
                if (maxLabelWidth + 6 > tickWidth) {
                    tickWidth = maxWidth / (numTicks - (options.offset ? .5 : 1));
                    maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
                    maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
                    labelRotation = toDegrees(Math.min(Math.asin(_limitValue((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin(_limitValue(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin(_limitValue(maxLabelHeight / maxLabelDiagonal, -1, 1))));
                    labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
                }
                this.labelRotation = labelRotation;
            }
            afterCalculateLabelRotation() {
                callback(this.options.afterCalculateLabelRotation, [ this ]);
            }
            afterAutoSkip() {}
            beforeFit() {
                callback(this.options.beforeFit, [ this ]);
            }
            fit() {
                const minSize = {
                    width: 0,
                    height: 0
                };
                const {chart, options: {ticks: tickOpts, title: titleOpts, grid: gridOpts}} = this;
                const display = this._isVisible();
                const isHorizontal = this.isHorizontal();
                if (display) {
                    const titleHeight = getTitleHeight(titleOpts, chart.options.font);
                    if (isHorizontal) {
                        minSize.width = this.maxWidth;
                        minSize.height = getTickMarkLength(gridOpts) + titleHeight;
                    } else {
                        minSize.height = this.maxHeight;
                        minSize.width = getTickMarkLength(gridOpts) + titleHeight;
                    }
                    if (tickOpts.display && this.ticks.length) {
                        const {first, last, widest, highest} = this._getLabelSizes();
                        const tickPadding = 2 * tickOpts.padding;
                        const angleRadians = toRadians(this.labelRotation);
                        const cos = Math.cos(angleRadians);
                        const sin = Math.sin(angleRadians);
                        if (isHorizontal) {
                            const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
                            minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
                        } else {
                            const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
                            minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
                        }
                        this._calculatePadding(first, last, sin, cos);
                    }
                }
                this._handleMargins();
                if (isHorizontal) {
                    this.width = this._length = chart.width - this._margins.left - this._margins.right;
                    this.height = minSize.height;
                } else {
                    this.width = minSize.width;
                    this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
                }
            }
            _calculatePadding(first, last, sin, cos) {
                const {ticks: {align, padding}, position} = this.options;
                const isRotated = 0 !== this.labelRotation;
                const labelsBelowTicks = "top" !== position && "x" === this.axis;
                if (this.isHorizontal()) {
                    const offsetLeft = this.getPixelForTick(0) - this.left;
                    const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
                    let paddingLeft = 0;
                    let paddingRight = 0;
                    if (isRotated) if (labelsBelowTicks) {
                        paddingLeft = cos * first.width;
                        paddingRight = sin * last.height;
                    } else {
                        paddingLeft = sin * first.height;
                        paddingRight = cos * last.width;
                    } else if ("start" === align) paddingRight = last.width; else if ("end" === align) paddingLeft = first.width; else if ("inner" !== align) {
                        paddingLeft = first.width / 2;
                        paddingRight = last.width / 2;
                    }
                    this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
                    this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
                } else {
                    let paddingTop = last.height / 2;
                    let paddingBottom = first.height / 2;
                    if ("start" === align) {
                        paddingTop = 0;
                        paddingBottom = first.height;
                    } else if ("end" === align) {
                        paddingTop = last.height;
                        paddingBottom = 0;
                    }
                    this.paddingTop = paddingTop + padding;
                    this.paddingBottom = paddingBottom + padding;
                }
            }
            _handleMargins() {
                if (this._margins) {
                    this._margins.left = Math.max(this.paddingLeft, this._margins.left);
                    this._margins.top = Math.max(this.paddingTop, this._margins.top);
                    this._margins.right = Math.max(this.paddingRight, this._margins.right);
                    this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
                }
            }
            afterFit() {
                callback(this.options.afterFit, [ this ]);
            }
            isHorizontal() {
                const {axis, position} = this.options;
                return "top" === position || "bottom" === position || "x" === axis;
            }
            isFullSize() {
                return this.options.fullSize;
            }
            _convertTicksToLabels(ticks) {
                this.beforeTickToLabelConversion();
                this.generateTickLabels(ticks);
                let i, ilen;
                for (i = 0, ilen = ticks.length; i < ilen; i++) if (isNullOrUndef(ticks[i].label)) {
                    ticks.splice(i, 1);
                    ilen--;
                    i--;
                }
                this.afterTickToLabelConversion();
            }
            _getLabelSizes() {
                let labelSizes = this._labelSizes;
                if (!labelSizes) {
                    const sampleSize = this.options.ticks.sampleSize;
                    let ticks = this.ticks;
                    if (sampleSize < ticks.length) ticks = sample(ticks, sampleSize);
                    this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length, this.options.ticks.maxTicksLimit);
                }
                return labelSizes;
            }
            _computeLabelSizes(ticks, length, maxTicksLimit) {
                const {ctx, _longestTextCache: caches} = this;
                const widths = [];
                const heights = [];
                const increment = Math.floor(length / getTicksLimit(length, maxTicksLimit));
                let widestLabelSize = 0;
                let highestLabelSize = 0;
                let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
                for (i = 0; i < length; i += increment) {
                    label = ticks[i].label;
                    tickFont = this._resolveTickFontOptions(i);
                    ctx.font = fontString = tickFont.string;
                    cache = caches[fontString] = caches[fontString] || {
                        data: {},
                        gc: []
                    };
                    lineHeight = tickFont.lineHeight;
                    width = height = 0;
                    if (!isNullOrUndef(label) && !isArray(label)) {
                        width = _measureText(ctx, cache.data, cache.gc, width, label);
                        height = lineHeight;
                    } else if (isArray(label)) for (j = 0, jlen = label.length; j < jlen; ++j) {
                        nestedLabel = label[j];
                        if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
                            width = _measureText(ctx, cache.data, cache.gc, width, nestedLabel);
                            height += lineHeight;
                        }
                    }
                    widths.push(width);
                    heights.push(height);
                    widestLabelSize = Math.max(width, widestLabelSize);
                    highestLabelSize = Math.max(height, highestLabelSize);
                }
                garbageCollect(caches, length);
                const widest = widths.indexOf(widestLabelSize);
                const highest = heights.indexOf(highestLabelSize);
                const valueAt = idx => ({
                    width: widths[idx] || 0,
                    height: heights[idx] || 0
                });
                return {
                    first: valueAt(0),
                    last: valueAt(length - 1),
                    widest: valueAt(widest),
                    highest: valueAt(highest),
                    widths,
                    heights
                };
            }
            getLabelForValue(value) {
                return value;
            }
            getPixelForValue(value, index) {
                return NaN;
            }
            getValueForPixel(pixel) {}
            getPixelForTick(index) {
                const ticks = this.ticks;
                if (index < 0 || index > ticks.length - 1) return null;
                return this.getPixelForValue(ticks[index].value);
            }
            getPixelForDecimal(decimal) {
                if (this._reversePixels) decimal = 1 - decimal;
                const pixel = this._startPixel + decimal * this._length;
                return _int16Range(this._alignToPixels ? _alignPixel(this.chart, pixel, 0) : pixel);
            }
            getDecimalForPixel(pixel) {
                const decimal = (pixel - this._startPixel) / this._length;
                return this._reversePixels ? 1 - decimal : decimal;
            }
            getBasePixel() {
                return this.getPixelForValue(this.getBaseValue());
            }
            getBaseValue() {
                const {min, max} = this;
                return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
            }
            getContext(index) {
                const ticks = this.ticks || [];
                if (index >= 0 && index < ticks.length) {
                    const tick = ticks[index];
                    return tick.$context || (tick.$context = createTickContext(this.getContext(), index, tick));
                }
                return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
            }
            _tickSize() {
                const optionTicks = this.options.ticks;
                const rot = toRadians(this.labelRotation);
                const cos = Math.abs(Math.cos(rot));
                const sin = Math.abs(Math.sin(rot));
                const labelSizes = this._getLabelSizes();
                const padding = optionTicks.autoSkipPadding || 0;
                const w = labelSizes ? labelSizes.widest.width + padding : 0;
                const h = labelSizes ? labelSizes.highest.height + padding : 0;
                return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
            }
            _isVisible() {
                const display = this.options.display;
                if ("auto" !== display) return !!display;
                return this.getMatchingVisibleMetas().length > 0;
            }
            _computeGridLineItems(chartArea) {
                const axis = this.axis;
                const chart = this.chart;
                const options = this.options;
                const {grid, position, border} = options;
                const offset = grid.offset;
                const isHorizontal = this.isHorizontal();
                const ticks = this.ticks;
                const ticksLength = ticks.length + (offset ? 1 : 0);
                const tl = getTickMarkLength(grid);
                const items = [];
                const borderOpts = border.setContext(this.getContext());
                const axisWidth = borderOpts.display ? borderOpts.width : 0;
                const axisHalfWidth = axisWidth / 2;
                const alignBorderValue = function(pixel) {
                    return _alignPixel(chart, pixel, axisWidth);
                };
                let borderValue, i, lineValue, alignedLineValue;
                let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
                if ("top" === position) {
                    borderValue = alignBorderValue(this.bottom);
                    ty1 = this.bottom - tl;
                    ty2 = borderValue - axisHalfWidth;
                    y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
                    y2 = chartArea.bottom;
                } else if ("bottom" === position) {
                    borderValue = alignBorderValue(this.top);
                    y1 = chartArea.top;
                    y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
                    ty1 = borderValue + axisHalfWidth;
                    ty2 = this.top + tl;
                } else if ("left" === position) {
                    borderValue = alignBorderValue(this.right);
                    tx1 = this.right - tl;
                    tx2 = borderValue - axisHalfWidth;
                    x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
                    x2 = chartArea.right;
                } else if ("right" === position) {
                    borderValue = alignBorderValue(this.left);
                    x1 = chartArea.left;
                    x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
                    tx1 = borderValue + axisHalfWidth;
                    tx2 = this.left + tl;
                } else if ("x" === axis) {
                    if ("center" === position) borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + .5); else if (isObject(position)) {
                        const positionAxisID = Object.keys(position)[0];
                        const value = position[positionAxisID];
                        borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
                    }
                    y1 = chartArea.top;
                    y2 = chartArea.bottom;
                    ty1 = borderValue + axisHalfWidth;
                    ty2 = ty1 + tl;
                } else if ("y" === axis) {
                    if ("center" === position) borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2); else if (isObject(position)) {
                        const positionAxisID1 = Object.keys(position)[0];
                        const value1 = position[positionAxisID1];
                        borderValue = alignBorderValue(this.chart.scales[positionAxisID1].getPixelForValue(value1));
                    }
                    tx1 = borderValue - axisHalfWidth;
                    tx2 = tx1 - tl;
                    x1 = chartArea.left;
                    x2 = chartArea.right;
                }
                const limit = valueOrDefault(options.ticks.maxTicksLimit, ticksLength);
                const step = Math.max(1, Math.ceil(ticksLength / limit));
                for (i = 0; i < ticksLength; i += step) {
                    const context = this.getContext(i);
                    const optsAtIndex = grid.setContext(context);
                    const optsAtIndexBorder = border.setContext(context);
                    const lineWidth = optsAtIndex.lineWidth;
                    const lineColor = optsAtIndex.color;
                    const borderDash = optsAtIndexBorder.dash || [];
                    const borderDashOffset = optsAtIndexBorder.dashOffset;
                    const tickWidth = optsAtIndex.tickWidth;
                    const tickColor = optsAtIndex.tickColor;
                    const tickBorderDash = optsAtIndex.tickBorderDash || [];
                    const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
                    lineValue = getPixelForGridLine(this, i, offset);
                    if (void 0 === lineValue) continue;
                    alignedLineValue = _alignPixel(chart, lineValue, lineWidth);
                    if (isHorizontal) tx1 = tx2 = x1 = x2 = alignedLineValue; else ty1 = ty2 = y1 = y2 = alignedLineValue;
                    items.push({
                        tx1,
                        ty1,
                        tx2,
                        ty2,
                        x1,
                        y1,
                        x2,
                        y2,
                        width: lineWidth,
                        color: lineColor,
                        borderDash,
                        borderDashOffset,
                        tickWidth,
                        tickColor,
                        tickBorderDash,
                        tickBorderDashOffset
                    });
                }
                this._ticksLength = ticksLength;
                this._borderValue = borderValue;
                return items;
            }
            _computeLabelItems(chartArea) {
                const axis = this.axis;
                const options = this.options;
                const {position, ticks: optionTicks} = options;
                const isHorizontal = this.isHorizontal();
                const ticks = this.ticks;
                const {align, crossAlign, padding, mirror} = optionTicks;
                const tl = getTickMarkLength(options.grid);
                const tickAndPadding = tl + padding;
                const hTickAndPadding = mirror ? -padding : tickAndPadding;
                const rotation = -toRadians(this.labelRotation);
                const items = [];
                let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
                let textBaseline = "middle";
                if ("top" === position) {
                    y = this.bottom - hTickAndPadding;
                    textAlign = this._getXAxisLabelAlignment();
                } else if ("bottom" === position) {
                    y = this.top + hTickAndPadding;
                    textAlign = this._getXAxisLabelAlignment();
                } else if ("left" === position) {
                    const ret = this._getYAxisLabelAlignment(tl);
                    textAlign = ret.textAlign;
                    x = ret.x;
                } else if ("right" === position) {
                    const ret1 = this._getYAxisLabelAlignment(tl);
                    textAlign = ret1.textAlign;
                    x = ret1.x;
                } else if ("x" === axis) {
                    if ("center" === position) y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding; else if (isObject(position)) {
                        const positionAxisID = Object.keys(position)[0];
                        const value = position[positionAxisID];
                        y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
                    }
                    textAlign = this._getXAxisLabelAlignment();
                } else if ("y" === axis) {
                    if ("center" === position) x = (chartArea.left + chartArea.right) / 2 - tickAndPadding; else if (isObject(position)) {
                        const positionAxisID1 = Object.keys(position)[0];
                        const value1 = position[positionAxisID1];
                        x = this.chart.scales[positionAxisID1].getPixelForValue(value1);
                    }
                    textAlign = this._getYAxisLabelAlignment(tl).textAlign;
                }
                if ("y" === axis) if ("start" === align) textBaseline = "top"; else if ("end" === align) textBaseline = "bottom";
                const labelSizes = this._getLabelSizes();
                for (i = 0, ilen = ticks.length; i < ilen; ++i) {
                    tick = ticks[i];
                    label = tick.label;
                    const optsAtIndex = optionTicks.setContext(this.getContext(i));
                    pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
                    font = this._resolveTickFontOptions(i);
                    lineHeight = font.lineHeight;
                    lineCount = isArray(label) ? label.length : 1;
                    const halfCount = lineCount / 2;
                    const color = optsAtIndex.color;
                    const strokeColor = optsAtIndex.textStrokeColor;
                    const strokeWidth = optsAtIndex.textStrokeWidth;
                    let tickTextAlign = textAlign;
                    if (isHorizontal) {
                        x = pixel;
                        if ("inner" === textAlign) if (i === ilen - 1) tickTextAlign = !this.options.reverse ? "right" : "left"; else if (0 === i) tickTextAlign = !this.options.reverse ? "left" : "right"; else tickTextAlign = "center";
                        if ("top" === position) if ("near" === crossAlign || 0 !== rotation) textOffset = -lineCount * lineHeight + lineHeight / 2; else if ("center" === crossAlign) textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight; else textOffset = -labelSizes.highest.height + lineHeight / 2; else if ("near" === crossAlign || 0 !== rotation) textOffset = lineHeight / 2; else if ("center" === crossAlign) textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight; else textOffset = labelSizes.highest.height - lineCount * lineHeight;
                        if (mirror) textOffset *= -1;
                        if (0 !== rotation && !optsAtIndex.showLabelBackdrop) x += lineHeight / 2 * Math.sin(rotation);
                    } else {
                        y = pixel;
                        textOffset = (1 - lineCount) * lineHeight / 2;
                    }
                    let backdrop;
                    if (optsAtIndex.showLabelBackdrop) {
                        const labelPadding = toPadding(optsAtIndex.backdropPadding);
                        const height = labelSizes.heights[i];
                        const width = labelSizes.widths[i];
                        let top = textOffset - labelPadding.top;
                        let left = 0 - labelPadding.left;
                        switch (textBaseline) {
                          case "middle":
                            top -= height / 2;
                            break;

                          case "bottom":
                            top -= height;
                            break;
                        }
                        switch (textAlign) {
                          case "center":
                            left -= width / 2;
                            break;

                          case "right":
                            left -= width;
                            break;
                        }
                        backdrop = {
                            left,
                            top,
                            width: width + labelPadding.width,
                            height: height + labelPadding.height,
                            color: optsAtIndex.backdropColor
                        };
                    }
                    items.push({
                        label,
                        font,
                        textOffset,
                        options: {
                            rotation,
                            color,
                            strokeColor,
                            strokeWidth,
                            textAlign: tickTextAlign,
                            textBaseline,
                            translation: [ x, y ],
                            backdrop
                        }
                    });
                }
                return items;
            }
            _getXAxisLabelAlignment() {
                const {position, ticks} = this.options;
                const rotation = -toRadians(this.labelRotation);
                if (rotation) return "top" === position ? "left" : "right";
                let align = "center";
                if ("start" === ticks.align) align = "left"; else if ("end" === ticks.align) align = "right"; else if ("inner" === ticks.align) align = "inner";
                return align;
            }
            _getYAxisLabelAlignment(tl) {
                const {position, ticks: {crossAlign, mirror, padding}} = this.options;
                const labelSizes = this._getLabelSizes();
                const tickAndPadding = tl + padding;
                const widest = labelSizes.widest.width;
                let textAlign;
                let x;
                if ("left" === position) if (mirror) {
                    x = this.right + padding;
                    if ("near" === crossAlign) textAlign = "left"; else if ("center" === crossAlign) {
                        textAlign = "center";
                        x += widest / 2;
                    } else {
                        textAlign = "right";
                        x += widest;
                    }
                } else {
                    x = this.right - tickAndPadding;
                    if ("near" === crossAlign) textAlign = "right"; else if ("center" === crossAlign) {
                        textAlign = "center";
                        x -= widest / 2;
                    } else {
                        textAlign = "left";
                        x = this.left;
                    }
                } else if ("right" === position) if (mirror) {
                    x = this.left + padding;
                    if ("near" === crossAlign) textAlign = "right"; else if ("center" === crossAlign) {
                        textAlign = "center";
                        x -= widest / 2;
                    } else {
                        textAlign = "left";
                        x -= widest;
                    }
                } else {
                    x = this.left + tickAndPadding;
                    if ("near" === crossAlign) textAlign = "left"; else if ("center" === crossAlign) {
                        textAlign = "center";
                        x += widest / 2;
                    } else {
                        textAlign = "right";
                        x = this.right;
                    }
                } else textAlign = "right";
                return {
                    textAlign,
                    x
                };
            }
            _computeLabelArea() {
                if (this.options.ticks.mirror) return;
                const chart = this.chart;
                const position = this.options.position;
                if ("left" === position || "right" === position) return {
                    top: 0,
                    left: this.left,
                    bottom: chart.height,
                    right: this.right
                };
                if ("top" === position || "bottom" === position) return {
                    top: this.top,
                    left: 0,
                    bottom: this.bottom,
                    right: chart.width
                };
            }
            drawBackground() {
                const {ctx, options: {backgroundColor}, left, top, width, height} = this;
                if (backgroundColor) {
                    ctx.save();
                    ctx.fillStyle = backgroundColor;
                    ctx.fillRect(left, top, width, height);
                    ctx.restore();
                }
            }
            getLineWidthForValue(value) {
                const grid = this.options.grid;
                if (!this._isVisible() || !grid.display) return 0;
                const ticks = this.ticks;
                const index = ticks.findIndex((t => t.value === value));
                if (index >= 0) {
                    const opts = grid.setContext(this.getContext(index));
                    return opts.lineWidth;
                }
                return 0;
            }
            drawGrid(chartArea) {
                const grid = this.options.grid;
                const ctx = this.ctx;
                const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
                let i, ilen;
                const drawLine = (p1, p2, style) => {
                    if (!style.width || !style.color) return;
                    ctx.save();
                    ctx.lineWidth = style.width;
                    ctx.strokeStyle = style.color;
                    ctx.setLineDash(style.borderDash || []);
                    ctx.lineDashOffset = style.borderDashOffset;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                    ctx.restore();
                };
                if (grid.display) for (i = 0, ilen = items.length; i < ilen; ++i) {
                    const item = items[i];
                    if (grid.drawOnChartArea) drawLine({
                        x: item.x1,
                        y: item.y1
                    }, {
                        x: item.x2,
                        y: item.y2
                    }, item);
                    if (grid.drawTicks) drawLine({
                        x: item.tx1,
                        y: item.ty1
                    }, {
                        x: item.tx2,
                        y: item.ty2
                    }, {
                        color: item.tickColor,
                        width: item.tickWidth,
                        borderDash: item.tickBorderDash,
                        borderDashOffset: item.tickBorderDashOffset
                    });
                }
            }
            drawBorder() {
                const {chart, ctx, options: {border, grid}} = this;
                const borderOpts = border.setContext(this.getContext());
                const axisWidth = border.display ? borderOpts.width : 0;
                if (!axisWidth) return;
                const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
                const borderValue = this._borderValue;
                let x1, x2, y1, y2;
                if (this.isHorizontal()) {
                    x1 = _alignPixel(chart, this.left, axisWidth) - axisWidth / 2;
                    x2 = _alignPixel(chart, this.right, lastLineWidth) + lastLineWidth / 2;
                    y1 = y2 = borderValue;
                } else {
                    y1 = _alignPixel(chart, this.top, axisWidth) - axisWidth / 2;
                    y2 = _alignPixel(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
                    x1 = x2 = borderValue;
                }
                ctx.save();
                ctx.lineWidth = borderOpts.width;
                ctx.strokeStyle = borderOpts.color;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                ctx.restore();
            }
            drawLabels(chartArea) {
                const optionTicks = this.options.ticks;
                if (!optionTicks.display) return;
                const ctx = this.ctx;
                const area = this._computeLabelArea();
                if (area) clipArea(ctx, area);
                const items = this.getLabelItems(chartArea);
                for (const item of items) {
                    const renderTextOptions = item.options;
                    const tickFont = item.font;
                    const label = item.label;
                    const y = item.textOffset;
                    renderText(ctx, label, 0, y, tickFont, renderTextOptions);
                }
                if (area) unclipArea(ctx);
            }
            drawTitle() {
                const {ctx, options: {position, title, reverse}} = this;
                if (!title.display) return;
                const font = toFont(title.font);
                const padding = toPadding(title.padding);
                const align = title.align;
                let offset = font.lineHeight / 2;
                if ("bottom" === position || "center" === position || isObject(position)) {
                    offset += padding.bottom;
                    if (isArray(title.text)) offset += font.lineHeight * (title.text.length - 1);
                } else offset += padding.top;
                const {titleX, titleY, maxWidth, rotation} = titleArgs(this, offset, position, align);
                renderText(ctx, title.text, 0, 0, font, {
                    color: title.color,
                    maxWidth,
                    rotation,
                    textAlign: titleAlign(align, position, reverse),
                    textBaseline: "middle",
                    translation: [ titleX, titleY ]
                });
            }
            draw(chartArea) {
                if (!this._isVisible()) return;
                this.drawBackground();
                this.drawGrid(chartArea);
                this.drawBorder();
                this.drawTitle();
                this.drawLabels(chartArea);
            }
            _layers() {
                const opts = this.options;
                const tz = opts.ticks && opts.ticks.z || 0;
                const gz = valueOrDefault(opts.grid && opts.grid.z, -1);
                const bz = valueOrDefault(opts.border && opts.border.z, 0);
                if (!this._isVisible() || this.draw !== Scale.prototype.draw) return [ {
                    z: tz,
                    draw: chartArea => {
                        this.draw(chartArea);
                    }
                } ];
                return [ {
                    z: gz,
                    draw: chartArea => {
                        this.drawBackground();
                        this.drawGrid(chartArea);
                        this.drawTitle();
                    }
                }, {
                    z: bz,
                    draw: () => {
                        this.drawBorder();
                    }
                }, {
                    z: tz,
                    draw: chartArea => {
                        this.drawLabels(chartArea);
                    }
                } ];
            }
            getMatchingVisibleMetas(type) {
                const metas = this.chart.getSortedVisibleDatasetMetas();
                const axisID = this.axis + "AxisID";
                const result = [];
                let i, ilen;
                for (i = 0, ilen = metas.length; i < ilen; ++i) {
                    const meta = metas[i];
                    if (meta[axisID] === this.id && (!type || meta.type === type)) result.push(meta);
                }
                return result;
            }
            _resolveTickFontOptions(index) {
                const opts = this.options.ticks.setContext(this.getContext(index));
                return toFont(opts.font);
            }
            _maxDigits() {
                const fontSize = this._resolveTickFontOptions(0).lineHeight;
                return (this.isHorizontal() ? this.width : this.height) / fontSize;
            }
        }
        class TypedRegistry {
            constructor(type, scope, override) {
                this.type = type;
                this.scope = scope;
                this.override = override;
                this.items = Object.create(null);
            }
            isForType(type) {
                return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
            }
            register(item) {
                const proto = Object.getPrototypeOf(item);
                let parentScope;
                if (isIChartComponent(proto)) parentScope = this.register(proto);
                const items = this.items;
                const id = item.id;
                const scope = this.scope + "." + id;
                if (!id) throw new Error("class does not have id: " + item);
                if (id in items) return scope;
                items[id] = item;
                registerDefaults(item, scope, parentScope);
                if (this.override) defaults.override(item.id, item.overrides);
                return scope;
            }
            get(id) {
                return this.items[id];
            }
            unregister(item) {
                const items = this.items;
                const id = item.id;
                const scope = this.scope;
                if (id in items) delete items[id];
                if (scope && id in defaults[scope]) {
                    delete defaults[scope][id];
                    if (this.override) delete overrides[id];
                }
            }
        }
        function registerDefaults(item, scope, parentScope) {
            const itemDefaults = merge(Object.create(null), [ parentScope ? defaults.get(parentScope) : {}, defaults.get(scope), item.defaults ]);
            defaults.set(scope, itemDefaults);
            if (item.defaultRoutes) routeDefaults(scope, item.defaultRoutes);
            if (item.descriptors) defaults.describe(scope, item.descriptors);
        }
        function routeDefaults(scope, routes) {
            Object.keys(routes).forEach((property => {
                const propertyParts = property.split(".");
                const sourceName = propertyParts.pop();
                const sourceScope = [ scope ].concat(propertyParts).join(".");
                const parts = routes[property].split(".");
                const targetName = parts.pop();
                const targetScope = parts.join(".");
                defaults.route(sourceScope, sourceName, targetScope, targetName);
            }));
        }
        function isIChartComponent(proto) {
            return "id" in proto && "defaults" in proto;
        }
        class Registry {
            constructor() {
                this.controllers = new TypedRegistry(DatasetController, "datasets", true);
                this.elements = new TypedRegistry(Element, "elements");
                this.plugins = new TypedRegistry(Object, "plugins");
                this.scales = new TypedRegistry(Scale, "scales");
                this._typedRegistries = [ this.controllers, this.scales, this.elements ];
            }
            add(...args) {
                this._each("register", args);
            }
            remove(...args) {
                this._each("unregister", args);
            }
            addControllers(...args) {
                this._each("register", args, this.controllers);
            }
            addElements(...args) {
                this._each("register", args, this.elements);
            }
            addPlugins(...args) {
                this._each("register", args, this.plugins);
            }
            addScales(...args) {
                this._each("register", args, this.scales);
            }
            getController(id) {
                return this._get(id, this.controllers, "controller");
            }
            getElement(id) {
                return this._get(id, this.elements, "element");
            }
            getPlugin(id) {
                return this._get(id, this.plugins, "plugin");
            }
            getScale(id) {
                return this._get(id, this.scales, "scale");
            }
            removeControllers(...args) {
                this._each("unregister", args, this.controllers);
            }
            removeElements(...args) {
                this._each("unregister", args, this.elements);
            }
            removePlugins(...args) {
                this._each("unregister", args, this.plugins);
            }
            removeScales(...args) {
                this._each("unregister", args, this.scales);
            }
            _each(method, args, typedRegistry) {
                [ ...args ].forEach((arg => {
                    const reg = typedRegistry || this._getRegistryForType(arg);
                    if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) this._exec(method, reg, arg); else each(arg, (item => {
                        const itemReg = typedRegistry || this._getRegistryForType(item);
                        this._exec(method, itemReg, item);
                    }));
                }));
            }
            _exec(method, registry, component) {
                const camelMethod = _capitalize(method);
                callback(component["before" + camelMethod], [], component);
                registry[method](component);
                callback(component["after" + camelMethod], [], component);
            }
            _getRegistryForType(type) {
                for (let i = 0; i < this._typedRegistries.length; i++) {
                    const reg = this._typedRegistries[i];
                    if (reg.isForType(type)) return reg;
                }
                return this.plugins;
            }
            _get(id, typedRegistry, type) {
                const item = typedRegistry.get(id);
                if (void 0 === item) throw new Error('"' + id + '" is not a registered ' + type + ".");
                return item;
            }
        }
        var registry = new Registry;
        class PluginService {
            constructor() {
                this._init = [];
            }
            notify(chart, hook, args, filter) {
                if ("beforeInit" === hook) {
                    this._init = this._createDescriptors(chart, true);
                    this._notify(this._init, chart, "install");
                }
                const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
                const result = this._notify(descriptors, chart, hook, args);
                if ("afterDestroy" === hook) {
                    this._notify(descriptors, chart, "stop");
                    this._notify(this._init, chart, "uninstall");
                }
                return result;
            }
            _notify(descriptors, chart, hook, args) {
                args = args || {};
                for (const descriptor of descriptors) {
                    const plugin = descriptor.plugin;
                    const method = plugin[hook];
                    const params = [ chart, args, descriptor.options ];
                    if (false === callback(method, params, plugin) && args.cancelable) return false;
                }
                return true;
            }
            invalidate() {
                if (!isNullOrUndef(this._cache)) {
                    this._oldCache = this._cache;
                    this._cache = void 0;
                }
            }
            _descriptors(chart) {
                if (this._cache) return this._cache;
                const descriptors = this._cache = this._createDescriptors(chart);
                this._notifyStateChanges(chart);
                return descriptors;
            }
            _createDescriptors(chart, all) {
                const config = chart && chart.config;
                const options = valueOrDefault(config.options && config.options.plugins, {});
                const plugins = allPlugins(config);
                return false === options && !all ? [] : createDescriptors(chart, plugins, options, all);
            }
            _notifyStateChanges(chart) {
                const previousDescriptors = this._oldCache || [];
                const descriptors = this._cache;
                const diff = (a, b) => a.filter((x => !b.some((y => x.plugin.id === y.plugin.id))));
                this._notify(diff(previousDescriptors, descriptors), chart, "stop");
                this._notify(diff(descriptors, previousDescriptors), chart, "start");
            }
        }
        function allPlugins(config) {
            const localIds = {};
            const plugins = [];
            const keys = Object.keys(registry.plugins.items);
            for (let i = 0; i < keys.length; i++) plugins.push(registry.getPlugin(keys[i]));
            const local = config.plugins || [];
            for (let i1 = 0; i1 < local.length; i1++) {
                const plugin = local[i1];
                if (-1 === plugins.indexOf(plugin)) {
                    plugins.push(plugin);
                    localIds[plugin.id] = true;
                }
            }
            return {
                plugins,
                localIds
            };
        }
        function getOpts(options, all) {
            if (!all && false === options) return null;
            if (true === options) return {};
            return options;
        }
        function createDescriptors(chart, {plugins, localIds}, options, all) {
            const result = [];
            const context = chart.getContext();
            for (const plugin of plugins) {
                const id = plugin.id;
                const opts = getOpts(options[id], all);
                if (null === opts) continue;
                result.push({
                    plugin,
                    options: pluginOpts(chart.config, {
                        plugin,
                        local: localIds[id]
                    }, opts, context)
                });
            }
            return result;
        }
        function pluginOpts(config, {plugin, local}, opts, context) {
            const keys = config.pluginScopeKeys(plugin);
            const scopes = config.getOptionScopes(opts, keys);
            if (local && plugin.defaults) scopes.push(plugin.defaults);
            return config.createResolver(scopes, context, [ "" ], {
                scriptable: false,
                indexable: false,
                allKeys: true
            });
        }
        function getIndexAxis(type, options) {
            const datasetDefaults = defaults.datasets[type] || {};
            const datasetOptions = (options.datasets || {})[type] || {};
            return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || "x";
        }
        function getAxisFromDefaultScaleID(id, indexAxis) {
            let axis = id;
            if ("_index_" === id) axis = indexAxis; else if ("_value_" === id) axis = "x" === indexAxis ? "y" : "x";
            return axis;
        }
        function getDefaultScaleIDFromAxis(axis, indexAxis) {
            return axis === indexAxis ? "_index_" : "_value_";
        }
        function axisFromPosition(position) {
            if ("top" === position || "bottom" === position) return "x";
            if ("left" === position || "right" === position) return "y";
        }
        function determineAxis(id, scaleOptions) {
            if ("x" === id || "y" === id || "r" === id) return id;
            id = scaleOptions.axis || axisFromPosition(scaleOptions.position) || id.length > 1 && determineAxis(id[0].toLowerCase(), scaleOptions);
            if (id) return id;
            throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`);
        }
        function mergeScaleConfig(config, options) {
            const chartDefaults = overrides[config.type] || {
                scales: {}
            };
            const configScales = options.scales || {};
            const chartIndexAxis = getIndexAxis(config.type, options);
            const scales = Object.create(null);
            Object.keys(configScales).forEach((id => {
                const scaleConf = configScales[id];
                if (!isObject(scaleConf)) return console.error(`Invalid scale configuration for scale: ${id}`);
                if (scaleConf._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
                const axis = determineAxis(id, scaleConf);
                const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
                const defaultScaleOptions = chartDefaults.scales || {};
                scales[id] = mergeIf(Object.create(null), [ {
                    axis
                }, scaleConf, defaultScaleOptions[axis], defaultScaleOptions[defaultId] ]);
            }));
            config.data.datasets.forEach((dataset => {
                const type = dataset.type || config.type;
                const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
                const datasetDefaults = overrides[type] || {};
                const defaultScaleOptions = datasetDefaults.scales || {};
                Object.keys(defaultScaleOptions).forEach((defaultID => {
                    const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
                    const id = dataset[axis + "AxisID"] || axis;
                    scales[id] = scales[id] || Object.create(null);
                    mergeIf(scales[id], [ {
                        axis
                    }, configScales[id], defaultScaleOptions[defaultID] ]);
                }));
            }));
            Object.keys(scales).forEach((key => {
                const scale = scales[key];
                mergeIf(scale, [ defaults.scales[scale.type], defaults.scale ]);
            }));
            return scales;
        }
        function initOptions(config) {
            const options = config.options || (config.options = {});
            options.plugins = valueOrDefault(options.plugins, {});
            options.scales = mergeScaleConfig(config, options);
        }
        function initData(data) {
            data = data || {};
            data.datasets = data.datasets || [];
            data.labels = data.labels || [];
            return data;
        }
        function initConfig(config) {
            config = config || {};
            config.data = initData(config.data);
            initOptions(config);
            return config;
        }
        const keyCache = new Map;
        const keysCached = new Set;
        function cachedKeys(cacheKey, generate) {
            let keys = keyCache.get(cacheKey);
            if (!keys) {
                keys = generate();
                keyCache.set(cacheKey, keys);
                keysCached.add(keys);
            }
            return keys;
        }
        const addIfFound = (set, obj, key) => {
            const opts = resolveObjectKey(obj, key);
            if (void 0 !== opts) set.add(opts);
        };
        class Config {
            constructor(config) {
                this._config = initConfig(config);
                this._scopeCache = new Map;
                this._resolverCache = new Map;
            }
            get platform() {
                return this._config.platform;
            }
            get type() {
                return this._config.type;
            }
            set type(type) {
                this._config.type = type;
            }
            get data() {
                return this._config.data;
            }
            set data(data) {
                this._config.data = initData(data);
            }
            get options() {
                return this._config.options;
            }
            set options(options) {
                this._config.options = options;
            }
            get plugins() {
                return this._config.plugins;
            }
            update() {
                const config = this._config;
                this.clearCache();
                initOptions(config);
            }
            clearCache() {
                this._scopeCache.clear();
                this._resolverCache.clear();
            }
            datasetScopeKeys(datasetType) {
                return cachedKeys(datasetType, (() => [ [ `datasets.${datasetType}`, "" ] ]));
            }
            datasetAnimationScopeKeys(datasetType, transition) {
                return cachedKeys(`${datasetType}.transition.${transition}`, (() => [ [ `datasets.${datasetType}.transitions.${transition}`, `transitions.${transition}` ], [ `datasets.${datasetType}`, "" ] ]));
            }
            datasetElementScopeKeys(datasetType, elementType) {
                return cachedKeys(`${datasetType}-${elementType}`, (() => [ [ `datasets.${datasetType}.elements.${elementType}`, `datasets.${datasetType}`, `elements.${elementType}`, "" ] ]));
            }
            pluginScopeKeys(plugin) {
                const id = plugin.id;
                const type = this.type;
                return cachedKeys(`${type}-plugin-${id}`, (() => [ [ `plugins.${id}`, ...plugin.additionalOptionScopes || [] ] ]));
            }
            _cachedScopes(mainScope, resetCache) {
                const _scopeCache = this._scopeCache;
                let cache = _scopeCache.get(mainScope);
                if (!cache || resetCache) {
                    cache = new Map;
                    _scopeCache.set(mainScope, cache);
                }
                return cache;
            }
            getOptionScopes(mainScope, keyLists, resetCache) {
                const {options, type} = this;
                const cache = this._cachedScopes(mainScope, resetCache);
                const cached = cache.get(keyLists);
                if (cached) return cached;
                const scopes = new Set;
                keyLists.forEach((keys => {
                    if (mainScope) {
                        scopes.add(mainScope);
                        keys.forEach((key => addIfFound(scopes, mainScope, key)));
                    }
                    keys.forEach((key => addIfFound(scopes, options, key)));
                    keys.forEach((key => addIfFound(scopes, overrides[type] || {}, key)));
                    keys.forEach((key => addIfFound(scopes, defaults, key)));
                    keys.forEach((key => addIfFound(scopes, descriptors, key)));
                }));
                const array = Array.from(scopes);
                if (0 === array.length) array.push(Object.create(null));
                if (keysCached.has(keyLists)) cache.set(keyLists, array);
                return array;
            }
            chartOptionScopes() {
                const {options, type} = this;
                return [ options, overrides[type] || {}, defaults.datasets[type] || {}, {
                    type
                }, defaults, descriptors ];
            }
            resolveNamedOptions(scopes, names, context, prefixes = [ "" ]) {
                const result = {
                    $shared: true
                };
                const {resolver, subPrefixes} = getResolver(this._resolverCache, scopes, prefixes);
                let options = resolver;
                if (needContext(resolver, names)) {
                    result.$shared = false;
                    context = isFunction(context) ? context() : context;
                    const subResolver = this.createResolver(scopes, context, subPrefixes);
                    options = _attachContext(resolver, context, subResolver);
                }
                for (const prop of names) result[prop] = options[prop];
                return result;
            }
            createResolver(scopes, context, prefixes = [ "" ], descriptorDefaults) {
                const {resolver} = getResolver(this._resolverCache, scopes, prefixes);
                return isObject(context) ? _attachContext(resolver, context, void 0, descriptorDefaults) : resolver;
            }
        }
        function getResolver(resolverCache, scopes, prefixes) {
            let cache = resolverCache.get(scopes);
            if (!cache) {
                cache = new Map;
                resolverCache.set(scopes, cache);
            }
            const cacheKey = prefixes.join();
            let cached = cache.get(cacheKey);
            if (!cached) {
                const resolver = _createResolver(scopes, prefixes);
                cached = {
                    resolver,
                    subPrefixes: prefixes.filter((p => !p.toLowerCase().includes("hover")))
                };
                cache.set(cacheKey, cached);
            }
            return cached;
        }
        const hasFunction = value => isObject(value) && Object.getOwnPropertyNames(value).reduce(((acc, key) => acc || isFunction(value[key])), false);
        function needContext(proxy, names) {
            const {isScriptable, isIndexable} = _descriptors(proxy);
            for (const prop of names) {
                const scriptable = isScriptable(prop);
                const indexable = isIndexable(prop);
                const value = (indexable || scriptable) && proxy[prop];
                if (scriptable && (isFunction(value) || hasFunction(value)) || indexable && isArray(value)) return true;
            }
            return false;
        }
        var version = "4.2.1";
        const KNOWN_POSITIONS = [ "top", "bottom", "left", "right", "chartArea" ];
        function positionIsHorizontal(position, axis) {
            return "top" === position || "bottom" === position || -1 === KNOWN_POSITIONS.indexOf(position) && "x" === axis;
        }
        function compare2Level(l1, l2) {
            return function(a, b) {
                return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
            };
        }
        function onAnimationsComplete(context) {
            const chart = context.chart;
            const animationOptions = chart.options.animation;
            chart.notifyPlugins("afterRender");
            callback(animationOptions && animationOptions.onComplete, [ context ], chart);
        }
        function onAnimationProgress(context) {
            const chart = context.chart;
            const animationOptions = chart.options.animation;
            callback(animationOptions && animationOptions.onProgress, [ context ], chart);
        }
        function getCanvas(item) {
            if (_isDomSupported() && "string" === typeof item) item = document.getElementById(item); else if (item && item.length) item = item[0];
            if (item && item.canvas) item = item.canvas;
            return item;
        }
        const instances = {};
        const getChart = key => {
            const canvas = getCanvas(key);
            return Object.values(instances).filter((c => c.canvas === canvas)).pop();
        };
        function moveNumericKeys(obj, start, move) {
            const keys = Object.keys(obj);
            for (const key of keys) {
                const intKey = +key;
                if (intKey >= start) {
                    const value = obj[key];
                    delete obj[key];
                    if (move > 0 || intKey > start) obj[intKey + move] = value;
                }
            }
        }
        function determineLastEvent(e, lastEvent, inChartArea, isClick) {
            if (!inChartArea || "mouseout" === e.type) return null;
            if (isClick) return lastEvent;
            return e;
        }
        function getDatasetArea(meta) {
            const {xScale, yScale} = meta;
            if (xScale && yScale) return {
                left: xScale.left,
                right: xScale.right,
                top: yScale.top,
                bottom: yScale.bottom
            };
        }
        class Chart {
            static defaults=defaults;
            static instances=instances;
            static overrides=overrides;
            static registry=registry;
            static version=version;
            static getChart=getChart;
            static register(...items) {
                registry.add(...items);
                invalidatePlugins();
            }
            static unregister(...items) {
                registry.remove(...items);
                invalidatePlugins();
            }
            constructor(item, userConfig) {
                const config = this.config = new Config(userConfig);
                const initialCanvas = getCanvas(item);
                const existingChart = getChart(initialCanvas);
                if (existingChart) throw new Error("Canvas is already in use. Chart with ID '" + existingChart.id + "'" + " must be destroyed before the canvas with ID '" + existingChart.canvas.id + "' can be reused.");
                const options = config.createResolver(config.chartOptionScopes(), this.getContext());
                this.platform = new (config.platform || _detectPlatform(initialCanvas));
                this.platform.updateConfig(config);
                const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
                const canvas = context && context.canvas;
                const height = canvas && canvas.height;
                const width = canvas && canvas.width;
                this.id = uid();
                this.ctx = context;
                this.canvas = canvas;
                this.width = width;
                this.height = height;
                this._options = options;
                this._aspectRatio = this.aspectRatio;
                this._layers = [];
                this._metasets = [];
                this._stacks = void 0;
                this.boxes = [];
                this.currentDevicePixelRatio = void 0;
                this.chartArea = void 0;
                this._active = [];
                this._lastEvent = void 0;
                this._listeners = {};
                this._responsiveListeners = void 0;
                this._sortedMetasets = [];
                this.scales = {};
                this._plugins = new PluginService;
                this.$proxies = {};
                this._hiddenIndices = {};
                this.attached = false;
                this._animationsDisabled = void 0;
                this.$context = void 0;
                this._doResize = debounce((mode => this.update(mode)), options.resizeDelay || 0);
                this._dataChanges = [];
                instances[this.id] = this;
                if (!context || !canvas) {
                    console.error("Failed to create chart: can't acquire context from the given item");
                    return;
                }
                animator.listen(this, "complete", onAnimationsComplete);
                animator.listen(this, "progress", onAnimationProgress);
                this._initialize();
                if (this.attached) this.update();
            }
            get aspectRatio() {
                const {options: {aspectRatio, maintainAspectRatio}, width, height, _aspectRatio} = this;
                if (!isNullOrUndef(aspectRatio)) return aspectRatio;
                if (maintainAspectRatio && _aspectRatio) return _aspectRatio;
                return height ? width / height : null;
            }
            get data() {
                return this.config.data;
            }
            set data(data) {
                this.config.data = data;
            }
            get options() {
                return this._options;
            }
            set options(options) {
                this.config.options = options;
            }
            get registry() {
                return registry;
            }
            _initialize() {
                this.notifyPlugins("beforeInit");
                if (this.options.responsive) this.resize(); else retinaScale(this, this.options.devicePixelRatio);
                this.bindEvents();
                this.notifyPlugins("afterInit");
                return this;
            }
            clear() {
                clearCanvas(this.canvas, this.ctx);
                return this;
            }
            stop() {
                animator.stop(this);
                return this;
            }
            resize(width, height) {
                if (!animator.running(this)) this._resize(width, height); else this._resizeBeforeDraw = {
                    width,
                    height
                };
            }
            _resize(width, height) {
                const options = this.options;
                const canvas = this.canvas;
                const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
                const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
                const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
                const mode = this.width ? "resize" : "attach";
                this.width = newSize.width;
                this.height = newSize.height;
                this._aspectRatio = this.aspectRatio;
                if (!retinaScale(this, newRatio, true)) return;
                this.notifyPlugins("resize", {
                    size: newSize
                });
                callback(options.onResize, [ this, newSize ], this);
                if (this.attached) if (this._doResize(mode)) this.render();
            }
            ensureScalesHaveIDs() {
                const options = this.options;
                const scalesOptions = options.scales || {};
                each(scalesOptions, ((axisOptions, axisID) => {
                    axisOptions.id = axisID;
                }));
            }
            buildOrUpdateScales() {
                const options = this.options;
                const scaleOpts = options.scales;
                const scales = this.scales;
                const updated = Object.keys(scales).reduce(((obj, id) => {
                    obj[id] = false;
                    return obj;
                }), {});
                let items = [];
                if (scaleOpts) items = items.concat(Object.keys(scaleOpts).map((id => {
                    const scaleOptions = scaleOpts[id];
                    const axis = determineAxis(id, scaleOptions);
                    const isRadial = "r" === axis;
                    const isHorizontal = "x" === axis;
                    return {
                        options: scaleOptions,
                        dposition: isRadial ? "chartArea" : isHorizontal ? "bottom" : "left",
                        dtype: isRadial ? "radialLinear" : isHorizontal ? "category" : "linear"
                    };
                })));
                each(items, (item => {
                    const scaleOptions = item.options;
                    const id = scaleOptions.id;
                    const axis = determineAxis(id, scaleOptions);
                    const scaleType = valueOrDefault(scaleOptions.type, item.dtype);
                    if (void 0 === scaleOptions.position || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) scaleOptions.position = item.dposition;
                    updated[id] = true;
                    let scale = null;
                    if (id in scales && scales[id].type === scaleType) scale = scales[id]; else {
                        const scaleClass = registry.getScale(scaleType);
                        scale = new scaleClass({
                            id,
                            type: scaleType,
                            ctx: this.ctx,
                            chart: this
                        });
                        scales[scale.id] = scale;
                    }
                    scale.init(scaleOptions, options);
                }));
                each(updated, ((hasUpdated, id) => {
                    if (!hasUpdated) delete scales[id];
                }));
                each(scales, (scale => {
                    layouts.configure(this, scale, scale.options);
                    layouts.addBox(this, scale);
                }));
            }
            _updateMetasets() {
                const metasets = this._metasets;
                const numData = this.data.datasets.length;
                const numMeta = metasets.length;
                metasets.sort(((a, b) => a.index - b.index));
                if (numMeta > numData) {
                    for (let i = numData; i < numMeta; ++i) this._destroyDatasetMeta(i);
                    metasets.splice(numData, numMeta - numData);
                }
                this._sortedMetasets = metasets.slice(0).sort(compare2Level("order", "index"));
            }
            _removeUnreferencedMetasets() {
                const {_metasets: metasets, data: {datasets}} = this;
                if (metasets.length > datasets.length) delete this._stacks;
                metasets.forEach(((meta, index) => {
                    if (0 === datasets.filter((x => x === meta._dataset)).length) this._destroyDatasetMeta(index);
                }));
            }
            buildOrUpdateControllers() {
                const newControllers = [];
                const datasets = this.data.datasets;
                let i, ilen;
                this._removeUnreferencedMetasets();
                for (i = 0, ilen = datasets.length; i < ilen; i++) {
                    const dataset = datasets[i];
                    let meta = this.getDatasetMeta(i);
                    const type = dataset.type || this.config.type;
                    if (meta.type && meta.type !== type) {
                        this._destroyDatasetMeta(i);
                        meta = this.getDatasetMeta(i);
                    }
                    meta.type = type;
                    meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
                    meta.order = dataset.order || 0;
                    meta.index = i;
                    meta.label = "" + dataset.label;
                    meta.visible = this.isDatasetVisible(i);
                    if (meta.controller) {
                        meta.controller.updateIndex(i);
                        meta.controller.linkScales();
                    } else {
                        const ControllerClass = registry.getController(type);
                        const {datasetElementType, dataElementType} = defaults.datasets[type];
                        Object.assign(ControllerClass, {
                            dataElementType: registry.getElement(dataElementType),
                            datasetElementType: datasetElementType && registry.getElement(datasetElementType)
                        });
                        meta.controller = new ControllerClass(this, i);
                        newControllers.push(meta.controller);
                    }
                }
                this._updateMetasets();
                return newControllers;
            }
            _resetElements() {
                each(this.data.datasets, ((dataset, datasetIndex) => {
                    this.getDatasetMeta(datasetIndex).controller.reset();
                }), this);
            }
            reset() {
                this._resetElements();
                this.notifyPlugins("reset");
            }
            update(mode) {
                const config = this.config;
                config.update();
                const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
                const animsDisabled = this._animationsDisabled = !options.animation;
                this._updateScales();
                this._checkEventBindings();
                this._updateHiddenIndices();
                this._plugins.invalidate();
                if (false === this.notifyPlugins("beforeUpdate", {
                    mode,
                    cancelable: true
                })) return;
                const newControllers = this.buildOrUpdateControllers();
                this.notifyPlugins("beforeElementsUpdate");
                let minPadding = 0;
                for (let i = 0, ilen = this.data.datasets.length; i < ilen; i++) {
                    const {controller} = this.getDatasetMeta(i);
                    const reset = !animsDisabled && -1 === newControllers.indexOf(controller);
                    controller.buildOrUpdateElements(reset);
                    minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
                }
                minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
                this._updateLayout(minPadding);
                if (!animsDisabled) each(newControllers, (controller => {
                    controller.reset();
                }));
                this._updateDatasets(mode);
                this.notifyPlugins("afterUpdate", {
                    mode
                });
                this._layers.sort(compare2Level("z", "_idx"));
                const {_active, _lastEvent} = this;
                if (_lastEvent) this._eventHandler(_lastEvent, true); else if (_active.length) this._updateHoverStyles(_active, _active, true);
                this.render();
            }
            _updateScales() {
                each(this.scales, (scale => {
                    layouts.removeBox(this, scale);
                }));
                this.ensureScalesHaveIDs();
                this.buildOrUpdateScales();
            }
            _checkEventBindings() {
                const options = this.options;
                const existingEvents = new Set(Object.keys(this._listeners));
                const newEvents = new Set(options.events);
                if (!setsEqual(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
                    this.unbindEvents();
                    this.bindEvents();
                }
            }
            _updateHiddenIndices() {
                const {_hiddenIndices} = this;
                const changes = this._getUniformDataChanges() || [];
                for (const {method, start, count} of changes) {
                    const move = "_removeElements" === method ? -count : count;
                    moveNumericKeys(_hiddenIndices, start, move);
                }
            }
            _getUniformDataChanges() {
                const _dataChanges = this._dataChanges;
                if (!_dataChanges || !_dataChanges.length) return;
                this._dataChanges = [];
                const datasetCount = this.data.datasets.length;
                const makeSet = idx => new Set(_dataChanges.filter((c => c[0] === idx)).map(((c, i) => i + "," + c.splice(1).join(","))));
                const changeSet = makeSet(0);
                for (let i = 1; i < datasetCount; i++) if (!setsEqual(changeSet, makeSet(i))) return;
                return Array.from(changeSet).map((c => c.split(","))).map((a => ({
                    method: a[1],
                    start: +a[2],
                    count: +a[3]
                })));
            }
            _updateLayout(minPadding) {
                if (false === this.notifyPlugins("beforeLayout", {
                    cancelable: true
                })) return;
                layouts.update(this, this.width, this.height, minPadding);
                const area = this.chartArea;
                const noArea = area.width <= 0 || area.height <= 0;
                this._layers = [];
                each(this.boxes, (box => {
                    if (noArea && "chartArea" === box.position) return;
                    if (box.configure) box.configure();
                    this._layers.push(...box._layers());
                }), this);
                this._layers.forEach(((item, index) => {
                    item._idx = index;
                }));
                this.notifyPlugins("afterLayout");
            }
            _updateDatasets(mode) {
                if (false === this.notifyPlugins("beforeDatasetsUpdate", {
                    mode,
                    cancelable: true
                })) return;
                for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) this.getDatasetMeta(i).controller.configure();
                for (let i1 = 0, ilen1 = this.data.datasets.length; i1 < ilen1; ++i1) this._updateDataset(i1, isFunction(mode) ? mode({
                    datasetIndex: i1
                }) : mode);
                this.notifyPlugins("afterDatasetsUpdate", {
                    mode
                });
            }
            _updateDataset(index, mode) {
                const meta = this.getDatasetMeta(index);
                const args = {
                    meta,
                    index,
                    mode,
                    cancelable: true
                };
                if (false === this.notifyPlugins("beforeDatasetUpdate", args)) return;
                meta.controller._update(mode);
                args.cancelable = false;
                this.notifyPlugins("afterDatasetUpdate", args);
            }
            render() {
                if (false === this.notifyPlugins("beforeRender", {
                    cancelable: true
                })) return;
                if (animator.has(this)) {
                    if (this.attached && !animator.running(this)) animator.start(this);
                } else {
                    this.draw();
                    onAnimationsComplete({
                        chart: this
                    });
                }
            }
            draw() {
                let i;
                if (this._resizeBeforeDraw) {
                    const {width, height} = this._resizeBeforeDraw;
                    this._resize(width, height);
                    this._resizeBeforeDraw = null;
                }
                this.clear();
                if (this.width <= 0 || this.height <= 0) return;
                if (false === this.notifyPlugins("beforeDraw", {
                    cancelable: true
                })) return;
                const layers = this._layers;
                for (i = 0; i < layers.length && layers[i].z <= 0; ++i) layers[i].draw(this.chartArea);
                this._drawDatasets();
                for (;i < layers.length; ++i) layers[i].draw(this.chartArea);
                this.notifyPlugins("afterDraw");
            }
            _getSortedDatasetMetas(filterVisible) {
                const metasets = this._sortedMetasets;
                const result = [];
                let i, ilen;
                for (i = 0, ilen = metasets.length; i < ilen; ++i) {
                    const meta = metasets[i];
                    if (!filterVisible || meta.visible) result.push(meta);
                }
                return result;
            }
            getSortedVisibleDatasetMetas() {
                return this._getSortedDatasetMetas(true);
            }
            _drawDatasets() {
                if (false === this.notifyPlugins("beforeDatasetsDraw", {
                    cancelable: true
                })) return;
                const metasets = this.getSortedVisibleDatasetMetas();
                for (let i = metasets.length - 1; i >= 0; --i) this._drawDataset(metasets[i]);
                this.notifyPlugins("afterDatasetsDraw");
            }
            _drawDataset(meta) {
                const ctx = this.ctx;
                const clip = meta._clip;
                const useClip = !clip.disabled;
                const area = getDatasetArea(meta) || this.chartArea;
                const args = {
                    meta,
                    index: meta.index,
                    cancelable: true
                };
                if (false === this.notifyPlugins("beforeDatasetDraw", args)) return;
                if (useClip) clipArea(ctx, {
                    left: false === clip.left ? 0 : area.left - clip.left,
                    right: false === clip.right ? this.width : area.right + clip.right,
                    top: false === clip.top ? 0 : area.top - clip.top,
                    bottom: false === clip.bottom ? this.height : area.bottom + clip.bottom
                });
                meta.controller.draw();
                if (useClip) unclipArea(ctx);
                args.cancelable = false;
                this.notifyPlugins("afterDatasetDraw", args);
            }
            isPointInArea(point) {
                return _isPointInArea(point, this.chartArea, this._minPadding);
            }
            getElementsAtEventForMode(e, mode, options, useFinalPosition) {
                const method = Interaction.modes[mode];
                if ("function" === typeof method) return method(this, e, options, useFinalPosition);
                return [];
            }
            getDatasetMeta(datasetIndex) {
                const dataset = this.data.datasets[datasetIndex];
                const metasets = this._metasets;
                let meta = metasets.filter((x => x && x._dataset === dataset)).pop();
                if (!meta) {
                    meta = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: dataset && dataset.order || 0,
                        index: datasetIndex,
                        _dataset: dataset,
                        _parsed: [],
                        _sorted: false
                    };
                    metasets.push(meta);
                }
                return meta;
            }
            getContext() {
                return this.$context || (this.$context = createContext(null, {
                    chart: this,
                    type: "chart"
                }));
            }
            getVisibleDatasetCount() {
                return this.getSortedVisibleDatasetMetas().length;
            }
            isDatasetVisible(datasetIndex) {
                const dataset = this.data.datasets[datasetIndex];
                if (!dataset) return false;
                const meta = this.getDatasetMeta(datasetIndex);
                return "boolean" === typeof meta.hidden ? !meta.hidden : !dataset.hidden;
            }
            setDatasetVisibility(datasetIndex, visible) {
                const meta = this.getDatasetMeta(datasetIndex);
                meta.hidden = !visible;
            }
            toggleDataVisibility(index) {
                this._hiddenIndices[index] = !this._hiddenIndices[index];
            }
            getDataVisibility(index) {
                return !this._hiddenIndices[index];
            }
            _updateVisibility(datasetIndex, dataIndex, visible) {
                const mode = visible ? "show" : "hide";
                const meta = this.getDatasetMeta(datasetIndex);
                const anims = meta.controller._resolveAnimations(void 0, mode);
                if (defined(dataIndex)) {
                    meta.data[dataIndex].hidden = !visible;
                    this.update();
                } else {
                    this.setDatasetVisibility(datasetIndex, visible);
                    anims.update(meta, {
                        visible
                    });
                    this.update((ctx => ctx.datasetIndex === datasetIndex ? mode : void 0));
                }
            }
            hide(datasetIndex, dataIndex) {
                this._updateVisibility(datasetIndex, dataIndex, false);
            }
            show(datasetIndex, dataIndex) {
                this._updateVisibility(datasetIndex, dataIndex, true);
            }
            _destroyDatasetMeta(datasetIndex) {
                const meta = this._metasets[datasetIndex];
                if (meta && meta.controller) meta.controller._destroy();
                delete this._metasets[datasetIndex];
            }
            _stop() {
                let i, ilen;
                this.stop();
                animator.remove(this);
                for (i = 0, ilen = this.data.datasets.length; i < ilen; ++i) this._destroyDatasetMeta(i);
            }
            destroy() {
                this.notifyPlugins("beforeDestroy");
                const {canvas, ctx} = this;
                this._stop();
                this.config.clearCache();
                if (canvas) {
                    this.unbindEvents();
                    clearCanvas(canvas, ctx);
                    this.platform.releaseContext(ctx);
                    this.canvas = null;
                    this.ctx = null;
                }
                delete instances[this.id];
                this.notifyPlugins("afterDestroy");
            }
            toBase64Image(...args) {
                return this.canvas.toDataURL(...args);
            }
            bindEvents() {
                this.bindUserEvents();
                if (this.options.responsive) this.bindResponsiveEvents(); else this.attached = true;
            }
            bindUserEvents() {
                const listeners = this._listeners;
                const platform = this.platform;
                const _add = (type, listener) => {
                    platform.addEventListener(this, type, listener);
                    listeners[type] = listener;
                };
                const listener = (e, x, y) => {
                    e.offsetX = x;
                    e.offsetY = y;
                    this._eventHandler(e);
                };
                each(this.options.events, (type => _add(type, listener)));
            }
            bindResponsiveEvents() {
                if (!this._responsiveListeners) this._responsiveListeners = {};
                const listeners = this._responsiveListeners;
                const platform = this.platform;
                const _add = (type, listener) => {
                    platform.addEventListener(this, type, listener);
                    listeners[type] = listener;
                };
                const _remove = (type, listener) => {
                    if (listeners[type]) {
                        platform.removeEventListener(this, type, listener);
                        delete listeners[type];
                    }
                };
                const listener = (width, height) => {
                    if (this.canvas) this.resize(width, height);
                };
                let detached;
                const attached = () => {
                    _remove("attach", attached);
                    this.attached = true;
                    this.resize();
                    _add("resize", listener);
                    _add("detach", detached);
                };
                detached = () => {
                    this.attached = false;
                    _remove("resize", listener);
                    this._stop();
                    this._resize(0, 0);
                    _add("attach", attached);
                };
                if (platform.isAttached(this.canvas)) attached(); else detached();
            }
            unbindEvents() {
                each(this._listeners, ((listener, type) => {
                    this.platform.removeEventListener(this, type, listener);
                }));
                this._listeners = {};
                each(this._responsiveListeners, ((listener, type) => {
                    this.platform.removeEventListener(this, type, listener);
                }));
                this._responsiveListeners = void 0;
            }
            updateHoverStyle(items, mode, enabled) {
                const prefix = enabled ? "set" : "remove";
                let meta, item, i, ilen;
                if ("dataset" === mode) {
                    meta = this.getDatasetMeta(items[0].datasetIndex);
                    meta.controller["_" + prefix + "DatasetHoverStyle"]();
                }
                for (i = 0, ilen = items.length; i < ilen; ++i) {
                    item = items[i];
                    const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
                    if (controller) controller[prefix + "HoverStyle"](item.element, item.datasetIndex, item.index);
                }
            }
            getActiveElements() {
                return this._active || [];
            }
            setActiveElements(activeElements) {
                const lastActive = this._active || [];
                const active = activeElements.map((({datasetIndex, index}) => {
                    const meta = this.getDatasetMeta(datasetIndex);
                    if (!meta) throw new Error("No dataset found at index " + datasetIndex);
                    return {
                        datasetIndex,
                        element: meta.data[index],
                        index
                    };
                }));
                const changed = !_elementsEqual(active, lastActive);
                if (changed) {
                    this._active = active;
                    this._lastEvent = null;
                    this._updateHoverStyles(active, lastActive);
                }
            }
            notifyPlugins(hook, args, filter) {
                return this._plugins.notify(this, hook, args, filter);
            }
            isPluginEnabled(pluginId) {
                return 1 === this._plugins._cache.filter((p => p.plugin.id === pluginId)).length;
            }
            _updateHoverStyles(active, lastActive, replay) {
                const hoverOptions = this.options.hover;
                const diff = (a, b) => a.filter((x => !b.some((y => x.datasetIndex === y.datasetIndex && x.index === y.index))));
                const deactivated = diff(lastActive, active);
                const activated = replay ? active : diff(active, lastActive);
                if (deactivated.length) this.updateHoverStyle(deactivated, hoverOptions.mode, false);
                if (activated.length && hoverOptions.mode) this.updateHoverStyle(activated, hoverOptions.mode, true);
            }
            _eventHandler(e, replay) {
                const args = {
                    event: e,
                    replay,
                    cancelable: true,
                    inChartArea: this.isPointInArea(e)
                };
                const eventFilter = plugin => (plugin.options.events || this.options.events).includes(e.native.type);
                if (false === this.notifyPlugins("beforeEvent", args, eventFilter)) return;
                const changed = this._handleEvent(e, replay, args.inChartArea);
                args.cancelable = false;
                this.notifyPlugins("afterEvent", args, eventFilter);
                if (changed || args.changed) this.render();
                return this;
            }
            _handleEvent(e, replay, inChartArea) {
                const {_active: lastActive = [], options} = this;
                const useFinalPosition = replay;
                const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
                const isClick = _isClickEvent(e);
                const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
                if (inChartArea) {
                    this._lastEvent = null;
                    callback(options.onHover, [ e, active, this ], this);
                    if (isClick) callback(options.onClick, [ e, active, this ], this);
                }
                const changed = !_elementsEqual(active, lastActive);
                if (changed || replay) {
                    this._active = active;
                    this._updateHoverStyles(active, lastActive, replay);
                }
                this._lastEvent = lastEvent;
                return changed;
            }
            _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
                if ("mouseout" === e.type) return [];
                if (!inChartArea) return lastActive;
                const hoverOptions = this.options.hover;
                return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
            }
        }
        function invalidatePlugins() {
            return each(Chart.instances, (chart => chart._plugins.invalidate()));
        }
        function getBarBounds(bar, useFinalPosition) {
            const {x, y, base, width, height} = bar.getProps([ "x", "y", "base", "width", "height" ], useFinalPosition);
            let left, right, top, bottom, half;
            if (bar.horizontal) {
                half = height / 2;
                left = Math.min(x, base);
                right = Math.max(x, base);
                top = y - half;
                bottom = y + half;
            } else {
                half = width / 2;
                left = x - half;
                right = x + half;
                top = Math.min(y, base);
                bottom = Math.max(y, base);
            }
            return {
                left,
                top,
                right,
                bottom
            };
        }
        function skipOrLimit(skip, value, min, max) {
            return skip ? 0 : _limitValue(value, min, max);
        }
        function parseBorderWidth(bar, maxW, maxH) {
            const value = bar.options.borderWidth;
            const skip = bar.borderSkipped;
            const o = toTRBL(value);
            return {
                t: skipOrLimit(skip.top, o.top, 0, maxH),
                r: skipOrLimit(skip.right, o.right, 0, maxW),
                b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
                l: skipOrLimit(skip.left, o.left, 0, maxW)
            };
        }
        function parseBorderRadius(bar, maxW, maxH) {
            const {enableBorderRadius} = bar.getProps([ "enableBorderRadius" ]);
            const value = bar.options.borderRadius;
            const o = toTRBLCorners(value);
            const maxR = Math.min(maxW, maxH);
            const skip = bar.borderSkipped;
            const enableBorder = enableBorderRadius || isObject(value);
            return {
                topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
                topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
                bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
                bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
            };
        }
        function boundingRects(bar) {
            const bounds = getBarBounds(bar);
            const width = bounds.right - bounds.left;
            const height = bounds.bottom - bounds.top;
            const border = parseBorderWidth(bar, width / 2, height / 2);
            const radius = parseBorderRadius(bar, width / 2, height / 2);
            return {
                outer: {
                    x: bounds.left,
                    y: bounds.top,
                    w: width,
                    h: height,
                    radius
                },
                inner: {
                    x: bounds.left + border.l,
                    y: bounds.top + border.t,
                    w: width - border.l - border.r,
                    h: height - border.t - border.b,
                    radius: {
                        topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
                        topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
                        bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
                        bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
                    }
                }
            };
        }
        function inRange(bar, x, y, useFinalPosition) {
            const skipX = null === x;
            const skipY = null === y;
            const skipBoth = skipX && skipY;
            const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
            return bounds && (skipX || _isBetween(x, bounds.left, bounds.right)) && (skipY || _isBetween(y, bounds.top, bounds.bottom));
        }
        function hasRadius(radius) {
            return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
        }
        function addNormalRectPath(ctx, rect) {
            ctx.rect(rect.x, rect.y, rect.w, rect.h);
        }
        function inflateRect(rect, amount, refRect = {}) {
            const x = rect.x !== refRect.x ? -amount : 0;
            const y = rect.y !== refRect.y ? -amount : 0;
            const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
            const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
            return {
                x: rect.x + x,
                y: rect.y + y,
                w: rect.w + w,
                h: rect.h + h,
                radius: rect.radius
            };
        }
        class BarElement extends Element {
            static id="bar";
            static defaults={
                borderSkipped: "start",
                borderWidth: 0,
                borderRadius: 0,
                inflateAmount: "auto",
                pointStyle: void 0
            };
            static defaultRoutes={
                backgroundColor: "backgroundColor",
                borderColor: "borderColor"
            };
            constructor(cfg) {
                super();
                this.options = void 0;
                this.horizontal = void 0;
                this.base = void 0;
                this.width = void 0;
                this.height = void 0;
                this.inflateAmount = void 0;
                if (cfg) Object.assign(this, cfg);
            }
            draw(ctx) {
                const {inflateAmount, options: {borderColor, backgroundColor}} = this;
                const {inner, outer} = boundingRects(this);
                const addRectPath = hasRadius(outer.radius) ? addRoundedRectPath : addNormalRectPath;
                ctx.save();
                if (outer.w !== inner.w || outer.h !== inner.h) {
                    ctx.beginPath();
                    addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
                    ctx.clip();
                    addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
                    ctx.fillStyle = borderColor;
                    ctx.fill("evenodd");
                }
                ctx.beginPath();
                addRectPath(ctx, inflateRect(inner, inflateAmount));
                ctx.fillStyle = backgroundColor;
                ctx.fill();
                ctx.restore();
            }
            inRange(mouseX, mouseY, useFinalPosition) {
                return inRange(this, mouseX, mouseY, useFinalPosition);
            }
            inXRange(mouseX, useFinalPosition) {
                return inRange(this, mouseX, null, useFinalPosition);
            }
            inYRange(mouseY, useFinalPosition) {
                return inRange(this, null, mouseY, useFinalPosition);
            }
            getCenterPoint(useFinalPosition) {
                const {x, y, base, horizontal} = this.getProps([ "x", "y", "base", "horizontal" ], useFinalPosition);
                return {
                    x: horizontal ? (x + base) / 2 : x,
                    y: horizontal ? y : (y + base) / 2
                };
            }
            getRange(axis) {
                return "x" === axis ? this.width / 2 : this.height / 2;
            }
        }
        new WeakMap;
        const addIfString = (labels, raw, index, addedLabels) => {
            if ("string" === typeof raw) {
                index = labels.push(raw) - 1;
                addedLabels.unshift({
                    index,
                    label: raw
                });
            } else if (isNaN(raw)) index = null;
            return index;
        };
        function findOrAddLabel(labels, raw, index, addedLabels) {
            const first = labels.indexOf(raw);
            if (-1 === first) return addIfString(labels, raw, index, addedLabels);
            const last = labels.lastIndexOf(raw);
            return first !== last ? index : first;
        }
        const validIndex = (index, max) => null === index ? null : _limitValue(Math.round(index), 0, max);
        function _getLabelForValue(value) {
            const labels = this.getLabels();
            if (value >= 0 && value < labels.length) return labels[value];
            return value;
        }
        class CategoryScale extends Scale {
            static id="category";
            static defaults={
                ticks: {
                    callback: _getLabelForValue
                }
            };
            constructor(cfg) {
                super(cfg);
                this._startValue = void 0;
                this._valueRange = 0;
                this._addedLabels = [];
            }
            init(scaleOptions) {
                const added = this._addedLabels;
                if (added.length) {
                    const labels = this.getLabels();
                    for (const {index, label} of added) if (labels[index] === label) labels.splice(index, 1);
                    this._addedLabels = [];
                }
                super.init(scaleOptions);
            }
            parse(raw, index) {
                if (isNullOrUndef(raw)) return null;
                const labels = this.getLabels();
                index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, valueOrDefault(index, raw), this._addedLabels);
                return validIndex(index, labels.length - 1);
            }
            determineDataLimits() {
                const {minDefined, maxDefined} = this.getUserBounds();
                let {min, max} = this.getMinMax(true);
                if ("ticks" === this.options.bounds) {
                    if (!minDefined) min = 0;
                    if (!maxDefined) max = this.getLabels().length - 1;
                }
                this.min = min;
                this.max = max;
            }
            buildTicks() {
                const min = this.min;
                const max = this.max;
                const offset = this.options.offset;
                const ticks = [];
                let labels = this.getLabels();
                labels = 0 === min && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
                this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
                this._startValue = this.min - (offset ? .5 : 0);
                for (let value = min; value <= max; value++) ticks.push({
                    value
                });
                return ticks;
            }
            getLabelForValue(value) {
                return _getLabelForValue.call(this, value);
            }
            configure() {
                super.configure();
                if (!this.isHorizontal()) this._reversePixels = !this._reversePixels;
            }
            getPixelForValue(value) {
                if ("number" !== typeof value) value = this.parse(value);
                return null === value ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
            }
            getPixelForTick(index) {
                const ticks = this.ticks;
                if (index < 0 || index > ticks.length - 1) return null;
                return this.getPixelForValue(ticks[index].value);
            }
            getValueForPixel(pixel) {
                return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
            }
            getBasePixel() {
                return this.bottom;
            }
        }
        function generateTicks$1(generationOptions, dataRange) {
            const ticks = [];
            const MIN_SPACING = 1e-14;
            const {bounds, step, min, max, precision, count, maxTicks, maxDigits, includeBounds} = generationOptions;
            const unit = step || 1;
            const maxSpaces = maxTicks - 1;
            const {min: rmin, max: rmax} = dataRange;
            const minDefined = !isNullOrUndef(min);
            const maxDefined = !isNullOrUndef(max);
            const countDefined = !isNullOrUndef(count);
            const minSpacing = (rmax - rmin) / (maxDigits + 1);
            let spacing = niceNum((rmax - rmin) / maxSpaces / unit) * unit;
            let factor, niceMin, niceMax, numSpaces;
            if (spacing < MIN_SPACING && !minDefined && !maxDefined) return [ {
                value: rmin
            }, {
                value: rmax
            } ];
            numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
            if (numSpaces > maxSpaces) spacing = niceNum(numSpaces * spacing / maxSpaces / unit) * unit;
            if (!isNullOrUndef(precision)) {
                factor = Math.pow(10, precision);
                spacing = Math.ceil(spacing * factor) / factor;
            }
            if ("ticks" === bounds) {
                niceMin = Math.floor(rmin / spacing) * spacing;
                niceMax = Math.ceil(rmax / spacing) * spacing;
            } else {
                niceMin = rmin;
                niceMax = rmax;
            }
            if (minDefined && maxDefined && step && almostWhole((max - min) / step, spacing / 1e3)) {
                numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
                spacing = (max - min) / numSpaces;
                niceMin = min;
                niceMax = max;
            } else if (countDefined) {
                niceMin = minDefined ? min : niceMin;
                niceMax = maxDefined ? max : niceMax;
                numSpaces = count - 1;
                spacing = (niceMax - niceMin) / numSpaces;
            } else {
                numSpaces = (niceMax - niceMin) / spacing;
                if (almostEquals(numSpaces, Math.round(numSpaces), spacing / 1e3)) numSpaces = Math.round(numSpaces); else numSpaces = Math.ceil(numSpaces);
            }
            const decimalPlaces = Math.max(_decimalPlaces(spacing), _decimalPlaces(niceMin));
            factor = Math.pow(10, isNullOrUndef(precision) ? decimalPlaces : precision);
            niceMin = Math.round(niceMin * factor) / factor;
            niceMax = Math.round(niceMax * factor) / factor;
            let j = 0;
            if (minDefined) if (includeBounds && niceMin !== min) {
                ticks.push({
                    value: min
                });
                if (niceMin < min) j++;
                if (almostEquals(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) j++;
            } else if (niceMin < min) j++;
            for (;j < numSpaces; ++j) ticks.push({
                value: Math.round((niceMin + j * spacing) * factor) / factor
            });
            if (maxDefined && includeBounds && niceMax !== max) if (ticks.length && almostEquals(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) ticks[ticks.length - 1].value = max; else ticks.push({
                value: max
            }); else if (!maxDefined || niceMax === max) ticks.push({
                value: niceMax
            });
            return ticks;
        }
        function relativeLabelSize(value, minSpacing, {horizontal, minRotation}) {
            const rad = toRadians(minRotation);
            const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || .001;
            const length = .75 * minSpacing * ("" + value).length;
            return Math.min(minSpacing / ratio, length);
        }
        class LinearScaleBase extends Scale {
            constructor(cfg) {
                super(cfg);
                this.start = void 0;
                this.end = void 0;
                this._startValue = void 0;
                this._endValue = void 0;
                this._valueRange = 0;
            }
            parse(raw, index) {
                if (isNullOrUndef(raw)) return null;
                if (("number" === typeof raw || raw instanceof Number) && !isFinite(+raw)) return null;
                return +raw;
            }
            handleTickRangeOptions() {
                const {beginAtZero} = this.options;
                const {minDefined, maxDefined} = this.getUserBounds();
                let {min, max} = this;
                const setMin = v => min = minDefined ? min : v;
                const setMax = v => max = maxDefined ? max : v;
                if (beginAtZero) {
                    const minSign = sign(min);
                    const maxSign = sign(max);
                    if (minSign < 0 && maxSign < 0) setMax(0); else if (minSign > 0 && maxSign > 0) setMin(0);
                }
                if (min === max) {
                    let offset = 0 === max ? 1 : Math.abs(.05 * max);
                    setMax(max + offset);
                    if (!beginAtZero) setMin(min - offset);
                }
                this.min = min;
                this.max = max;
            }
            getTickLimit() {
                const tickOpts = this.options.ticks;
                let {maxTicksLimit, stepSize} = tickOpts;
                let maxTicks;
                if (stepSize) {
                    maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
                    if (maxTicks > 1e3) {
                        console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
                        maxTicks = 1e3;
                    }
                } else {
                    maxTicks = this.computeTickLimit();
                    maxTicksLimit = maxTicksLimit || 11;
                }
                if (maxTicksLimit) maxTicks = Math.min(maxTicksLimit, maxTicks);
                return maxTicks;
            }
            computeTickLimit() {
                return Number.POSITIVE_INFINITY;
            }
            buildTicks() {
                const opts = this.options;
                const tickOpts = opts.ticks;
                let maxTicks = this.getTickLimit();
                maxTicks = Math.max(2, maxTicks);
                const numericGeneratorOptions = {
                    maxTicks,
                    bounds: opts.bounds,
                    min: opts.min,
                    max: opts.max,
                    precision: tickOpts.precision,
                    step: tickOpts.stepSize,
                    count: tickOpts.count,
                    maxDigits: this._maxDigits(),
                    horizontal: this.isHorizontal(),
                    minRotation: tickOpts.minRotation || 0,
                    includeBounds: false !== tickOpts.includeBounds
                };
                const dataRange = this._range || this;
                const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
                if ("ticks" === opts.bounds) _setMinAndMaxByKey(ticks, this, "value");
                if (opts.reverse) {
                    ticks.reverse();
                    this.start = this.max;
                    this.end = this.min;
                } else {
                    this.start = this.min;
                    this.end = this.max;
                }
                return ticks;
            }
            configure() {
                const ticks = this.ticks;
                let start = this.min;
                let end = this.max;
                super.configure();
                if (this.options.offset && ticks.length) {
                    const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
                    start -= offset;
                    end += offset;
                }
                this._startValue = start;
                this._endValue = end;
                this._valueRange = end - start;
            }
            getLabelForValue(value) {
                return formatNumber(value, this.chart.options.locale, this.options.ticks.format);
            }
        }
        class LinearScale extends LinearScaleBase {
            static id="linear";
            static defaults={
                ticks: {
                    callback: Ticks.formatters.numeric
                }
            };
            determineDataLimits() {
                const {min, max} = this.getMinMax(true);
                this.min = isNumberFinite(min) ? min : 0;
                this.max = isNumberFinite(max) ? max : 1;
                this.handleTickRangeOptions();
            }
            computeTickLimit() {
                const horizontal = this.isHorizontal();
                const length = horizontal ? this.width : this.height;
                const minRotation = toRadians(this.options.ticks.minRotation);
                const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || .001;
                const tickFont = this._resolveTickFontOptions(0);
                return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
            }
            getPixelForValue(value) {
                return null === value ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
            }
            getValueForPixel(pixel) {
                return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
            }
        }
        class LogarithmicScale extends Scale {
            static id="logarithmic";
            static defaults={
                ticks: {
                    callback: Ticks.formatters.logarithmic,
                    major: {
                        enabled: true
                    }
                }
            };
            constructor(cfg) {
                super(cfg);
                this.start = void 0;
                this.end = void 0;
                this._startValue = void 0;
                this._valueRange = 0;
            }
            parse(raw, index) {
                const value = LinearScaleBase.prototype.parse.apply(this, [ raw, index ]);
                if (0 === value) {
                    this._zero = true;
                    return;
                }
                return isNumberFinite(value) && value > 0 ? value : null;
            }
            determineDataLimits() {
                const {min, max} = this.getMinMax(true);
                this.min = isNumberFinite(min) ? Math.max(0, min) : null;
                this.max = isNumberFinite(max) ? Math.max(0, max) : null;
                if (this.options.beginAtZero) this._zero = true;
                if (this._zero && this.min !== this._suggestedMin && !isNumberFinite(this._userMin)) this.min = min === changeExponent(this.min, 0) ? changeExponent(this.min, -1) : changeExponent(this.min, 0);
                this.handleTickRangeOptions();
            }
            handleTickRangeOptions() {
                const {minDefined, maxDefined} = this.getUserBounds();
                let min = this.min;
                let max = this.max;
                const setMin = v => minDefined ? min : v;
                const setMax = v => maxDefined ? max : v;
                if (min === max) if (min <= 0) {
                    setMin(1);
                    setMax(10);
                } else {
                    setMin(changeExponent(min, -1));
                    setMax(changeExponent(max, +1));
                }
                if (min <= 0) setMin(changeExponent(max, -1));
                if (max <= 0) setMax(changeExponent(min, +1));
                this.min = min;
                this.max = max;
            }
            buildTicks() {
                const opts = this.options;
                const generationOptions = {
                    min: this._userMin,
                    max: this._userMax
                };
                const ticks = generateTicks(generationOptions, this);
                if ("ticks" === opts.bounds) _setMinAndMaxByKey(ticks, this, "value");
                if (opts.reverse) {
                    ticks.reverse();
                    this.start = this.max;
                    this.end = this.min;
                } else {
                    this.start = this.min;
                    this.end = this.max;
                }
                return ticks;
            }
            getLabelForValue(value) {
                return void 0 === value ? "0" : formatNumber(value, this.chart.options.locale, this.options.ticks.format);
            }
            configure() {
                const start = this.min;
                super.configure();
                this._startValue = log10(start);
                this._valueRange = log10(this.max) - log10(start);
            }
            getPixelForValue(value) {
                if (void 0 === value || 0 === value) this.min;
                if (null === value || isNaN(value)) return NaN;
                return this.getPixelForDecimal(value === this.min ? 0 : (log10(value) - this._startValue) / this._valueRange);
            }
            getValueForPixel(pixel) {
                const decimal = this.getDecimalForPixel(pixel);
                return Math.pow(10, this._startValue + decimal * this._valueRange);
            }
        }
        class RadialLinearScale extends LinearScaleBase {
            static id="radialLinear";
            static defaults={
                display: true,
                animate: true,
                position: "chartArea",
                angleLines: {
                    display: true,
                    lineWidth: 1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                grid: {
                    circular: false
                },
                startAngle: 0,
                ticks: {
                    showLabelBackdrop: true,
                    callback: Ticks.formatters.numeric
                },
                pointLabels: {
                    backdropColor: void 0,
                    backdropPadding: 2,
                    display: true,
                    font: {
                        size: 10
                    },
                    callback(label) {
                        return label;
                    },
                    padding: 5,
                    centerPointLabels: false
                }
            };
            static defaultRoutes={
                "angleLines.color": "borderColor",
                "pointLabels.color": "color",
                "ticks.color": "color"
            };
            static descriptors={
                angleLines: {
                    _fallback: "grid"
                }
            };
            constructor(cfg) {
                super(cfg);
                this.xCenter = void 0;
                this.yCenter = void 0;
                this.drawingArea = void 0;
                this._pointLabels = [];
                this._pointLabelItems = [];
            }
            setDimensions() {
                const padding = this._padding = toPadding(getTickBackdropHeight(this.options) / 2);
                const w = this.width = this.maxWidth - padding.width;
                const h = this.height = this.maxHeight - padding.height;
                this.xCenter = Math.floor(this.left + w / 2 + padding.left);
                this.yCenter = Math.floor(this.top + h / 2 + padding.top);
                this.drawingArea = Math.floor(Math.min(w, h) / 2);
            }
            determineDataLimits() {
                const {min, max} = this.getMinMax(false);
                this.min = isNumberFinite(min) && !isNaN(min) ? min : 0;
                this.max = isNumberFinite(max) && !isNaN(max) ? max : 0;
                this.handleTickRangeOptions();
            }
            computeTickLimit() {
                return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
            }
            generateTickLabels(ticks) {
                LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
                this._pointLabels = this.getLabels().map(((value, index) => {
                    const label = callback(this.options.pointLabels.callback, [ value, index ], this);
                    return label || 0 === label ? label : "";
                })).filter(((v, i) => this.chart.getDataVisibility(i)));
            }
            fit() {
                const opts = this.options;
                if (opts.display && opts.pointLabels.display) fitWithPointLabels(this); else this.setCenterPoint(0, 0, 0, 0);
            }
            setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
                this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
                this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
                this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
            }
            getIndexAngle(index) {
                const angleMultiplier = TAU / (this._pointLabels.length || 1);
                const startAngle = this.options.startAngle || 0;
                return _normalizeAngle(index * angleMultiplier + toRadians(startAngle));
            }
            getDistanceFromCenterForValue(value) {
                if (isNullOrUndef(value)) return NaN;
                const scalingFactor = this.drawingArea / (this.max - this.min);
                if (this.options.reverse) return (this.max - value) * scalingFactor;
                return (value - this.min) * scalingFactor;
            }
            getValueForDistanceFromCenter(distance) {
                if (isNullOrUndef(distance)) return NaN;
                const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
                return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
            }
            getPointLabelContext(index) {
                const pointLabels = this._pointLabels || [];
                if (index >= 0 && index < pointLabels.length) {
                    const pointLabel = pointLabels[index];
                    return createPointLabelContext(this.getContext(), index, pointLabel);
                }
            }
            getPointPosition(index, distanceFromCenter, additionalAngle = 0) {
                const angle = this.getIndexAngle(index) - HALF_PI + additionalAngle;
                return {
                    x: Math.cos(angle) * distanceFromCenter + this.xCenter,
                    y: Math.sin(angle) * distanceFromCenter + this.yCenter,
                    angle
                };
            }
            getPointPositionForValue(index, value) {
                return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
            }
            getBasePosition(index) {
                return this.getPointPositionForValue(index || 0, this.getBaseValue());
            }
            getPointLabelPosition(index) {
                const {left, top, right, bottom} = this._pointLabelItems[index];
                return {
                    left,
                    top,
                    right,
                    bottom
                };
            }
            drawBackground() {
                const {backgroundColor, grid: {circular}} = this.options;
                if (backgroundColor) {
                    const ctx = this.ctx;
                    ctx.save();
                    ctx.beginPath();
                    pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
                    ctx.closePath();
                    ctx.fillStyle = backgroundColor;
                    ctx.fill();
                    ctx.restore();
                }
            }
            drawGrid() {
                const ctx = this.ctx;
                const opts = this.options;
                const {angleLines, grid, border} = opts;
                const labelCount = this._pointLabels.length;
                let i, offset, position;
                if (opts.pointLabels.display) drawPointLabels(this, labelCount);
                if (grid.display) this.ticks.forEach(((tick, index) => {
                    if (0 !== index) {
                        this.getDistanceFromCenterForValue(tick.value);
                        const context = this.getContext(index);
                        const optsAtIndex = grid.setContext(context);
                        const optsAtIndexBorder = border.setContext(context);
                        drawRadiusLine(this, optsAtIndex, offset, labelCount, optsAtIndexBorder);
                    }
                }));
                if (angleLines.display) {
                    ctx.save();
                    for (labelCount - 1; i >= 0; i--) {
                        const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
                        const {color, lineWidth} = optsAtIndex;
                        if (!lineWidth || !color) continue;
                        ctx.lineWidth = lineWidth;
                        ctx.strokeStyle = color;
                        ctx.setLineDash(optsAtIndex.borderDash);
                        ctx.lineDashOffset = optsAtIndex.borderDashOffset;
                        this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
                        this.getPointPosition(i, offset);
                        ctx.beginPath();
                        ctx.moveTo(this.xCenter, this.yCenter);
                        ctx.lineTo(position.x, position.y);
                        ctx.stroke();
                    }
                    ctx.restore();
                }
            }
            drawBorder() {}
            drawLabels() {
                const ctx = this.ctx;
                const opts = this.options;
                const tickOpts = opts.ticks;
                if (!tickOpts.display) return;
                const startAngle = this.getIndexAngle(0);
                let offset, width;
                ctx.save();
                ctx.translate(this.xCenter, this.yCenter);
                ctx.rotate(startAngle);
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                this.ticks.forEach(((tick, index) => {
                    if (0 === index && !opts.reverse) return;
                    const optsAtIndex = tickOpts.setContext(this.getContext(index));
                    const tickFont = toFont(optsAtIndex.font);
                    this.getDistanceFromCenterForValue(this.ticks[index].value);
                    if (optsAtIndex.showLabelBackdrop) {
                        ctx.font = tickFont.string;
                        ctx.measureText(tick.label).width;
                        ctx.fillStyle = optsAtIndex.backdropColor;
                        const padding = toPadding(optsAtIndex.backdropPadding);
                        ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
                    }
                    renderText(ctx, tick.label, 0, -offset, tickFont, {
                        color: optsAtIndex.color
                    });
                }));
                ctx.restore();
            }
            drawTitle() {}
        }
        const INTERVALS = {
            millisecond: {
                common: true,
                size: 1,
                steps: 1e3
            },
            second: {
                common: true,
                size: 1e3,
                steps: 60
            },
            minute: {
                common: true,
                size: 6e4,
                steps: 60
            },
            hour: {
                common: true,
                size: 36e5,
                steps: 24
            },
            day: {
                common: true,
                size: 864e5,
                steps: 30
            },
            week: {
                common: false,
                size: 6048e5,
                steps: 4
            },
            month: {
                common: true,
                size: 2628e6,
                steps: 12
            },
            quarter: {
                common: false,
                size: 7884e6,
                steps: 4
            },
            year: {
                common: true,
                size: 3154e7
            }
        };
        const UNITS = Object.keys(INTERVALS);
        function sorter(a, b) {
            return a - b;
        }
        function parse(scale, input) {
            if (isNullOrUndef(input)) return null;
            const adapter = scale._adapter;
            const {parser, round, isoWeekday} = scale._parseOpts;
            let value = input;
            if ("function" === typeof parser) value = parser(value);
            if (!isNumberFinite(value)) value = "string" === typeof parser ? adapter.parse(value, parser) : adapter.parse(value);
            if (null === value) return null;
            if (round) value = "week" === round && (isNumber(isoWeekday) || true === isoWeekday) ? adapter.startOf(value, "isoWeek", isoWeekday) : adapter.startOf(value, round);
            return +value;
        }
        function determineUnitForAutoTicks(minUnit, min, max, capacity) {
            const ilen = UNITS.length;
            for (let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
                const interval = INTERVALS[UNITS[i]];
                const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
                if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) return UNITS[i];
            }
            return UNITS[ilen - 1];
        }
        function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
            for (let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
                const unit = UNITS[i];
                if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) return unit;
            }
            return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
        }
        function determineMajorUnit(unit) {
            for (let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) if (INTERVALS[UNITS[i]].common) return UNITS[i];
        }
        function addTick(ticks, time, timestamps) {
            if (!timestamps) ticks[time] = true; else if (timestamps.length) {
                const {lo, hi} = _lookup(timestamps, time);
                const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
                ticks[timestamp] = true;
            }
        }
        function setMajorTicks(scale, ticks, map, majorUnit) {
            const adapter = scale._adapter;
            const first = +adapter.startOf(ticks[0].value, majorUnit);
            const last = ticks[ticks.length - 1].value;
            let major, index;
            for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
                index = map[major];
                if (index >= 0) ticks[index].major = true;
            }
            return ticks;
        }
        function ticksFromTimestamps(scale, values, majorUnit) {
            const ticks = [];
            const map = {};
            const ilen = values.length;
            let i, value;
            for (i = 0; i < ilen; ++i) {
                value = values[i];
                map[value] = i;
                ticks.push({
                    value,
                    major: false
                });
            }
            return 0 === ilen || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
        }
        class TimeScale extends Scale {
            static id="time";
            static defaults={
                bounds: "data",
                adapters: {},
                time: {
                    parser: false,
                    unit: false,
                    round: false,
                    isoWeekday: false,
                    minUnit: "millisecond",
                    displayFormats: {}
                },
                ticks: {
                    source: "auto",
                    callback: false,
                    major: {
                        enabled: false
                    }
                }
            };
            constructor(props) {
                super(props);
                this._cache = {
                    data: [],
                    labels: [],
                    all: []
                };
                this._unit = "day";
                this._majorUnit = void 0;
                this._offsets = {};
                this._normalized = false;
                this._parseOpts = void 0;
            }
            init(scaleOpts, opts = {}) {
                const time = scaleOpts.time || (scaleOpts.time = {});
                const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
                adapter.init(opts);
                mergeIf(time.displayFormats, adapter.formats());
                this._parseOpts = {
                    parser: time.parser,
                    round: time.round,
                    isoWeekday: time.isoWeekday
                };
                super.init(scaleOpts);
                this._normalized = opts.normalized;
            }
            parse(raw, index) {
                if (void 0 === raw) return null;
                return parse(this, raw);
            }
            beforeLayout() {
                super.beforeLayout();
                this._cache = {
                    data: [],
                    labels: [],
                    all: []
                };
            }
            determineDataLimits() {
                const options = this.options;
                const adapter = this._adapter;
                const unit = options.time.unit || "day";
                let {min, max, minDefined, maxDefined} = this.getUserBounds();
                function _applyBounds(bounds) {
                    if (!minDefined && !isNaN(bounds.min)) min = Math.min(min, bounds.min);
                    if (!maxDefined && !isNaN(bounds.max)) max = Math.max(max, bounds.max);
                }
                if (!minDefined || !maxDefined) {
                    _applyBounds(this._getLabelBounds());
                    if ("ticks" !== options.bounds || "labels" !== options.ticks.source) _applyBounds(this.getMinMax(false));
                }
                min = isNumberFinite(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
                max = isNumberFinite(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
                this.min = Math.min(min, max - 1);
                this.max = Math.max(min + 1, max);
            }
            _getLabelBounds() {
                const arr = this.getLabelTimestamps();
                let min = Number.POSITIVE_INFINITY;
                let max = Number.NEGATIVE_INFINITY;
                if (arr.length) {
                    min = arr[0];
                    max = arr[arr.length - 1];
                }
                return {
                    min,
                    max
                };
            }
            buildTicks() {
                const options = this.options;
                const timeOpts = options.time;
                const tickOpts = options.ticks;
                const timestamps = "labels" === tickOpts.source ? this.getLabelTimestamps() : this._generate();
                if ("ticks" === options.bounds && timestamps.length) {
                    this.min = this._userMin || timestamps[0];
                    this.max = this._userMax || timestamps[timestamps.length - 1];
                }
                const min = this.min;
                const max = this.max;
                const ticks = _filterBetween(timestamps, min, max);
                this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
                this._majorUnit = !tickOpts.major.enabled || "year" === this._unit ? void 0 : determineMajorUnit(this._unit);
                this.initOffsets(timestamps);
                if (options.reverse) ticks.reverse();
                return ticksFromTimestamps(this, ticks, this._majorUnit);
            }
            afterAutoSkip() {
                if (this.options.offsetAfterAutoskip) this.initOffsets(this.ticks.map((tick => +tick.value)));
            }
            initOffsets(timestamps = []) {
                let start = 0;
                let end = 0;
                let first, last;
                if (this.options.offset && timestamps.length) {
                    first = this.getDecimalForValue(timestamps[0]);
                    if (1 === timestamps.length) start = 1 - first; else start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
                    last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
                    if (1 === timestamps.length) end = last; else end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
                }
                const limit = timestamps.length < 3 ? .5 : .25;
                start = _limitValue(start, 0, limit);
                end = _limitValue(end, 0, limit);
                this._offsets = {
                    start,
                    end,
                    factor: 1 / (start + 1 + end)
                };
            }
            _generate() {
                const adapter = this._adapter;
                const min = this.min;
                const max = this.max;
                const options = this.options;
                const timeOpts = options.time;
                const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
                const stepSize = valueOrDefault(options.ticks.stepSize, 1);
                const weekday = "week" === minor ? timeOpts.isoWeekday : false;
                const hasWeekday = isNumber(weekday) || true === weekday;
                const ticks = {};
                let first = min;
                let time, count;
                if (hasWeekday) first = +adapter.startOf(first, "isoWeek", weekday);
                first = +adapter.startOf(first, hasWeekday ? "day" : minor);
                if (adapter.diff(max, min, minor) > 1e5 * stepSize) throw new Error(min + " and " + max + " are too far apart with stepSize of " + stepSize + " " + minor);
                const timestamps = "data" === options.ticks.source && this.getDataTimestamps();
                for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), 
                count++) addTick(ticks, time, timestamps);
                if (time === max || "ticks" === options.bounds || 1 === count) addTick(ticks, time, timestamps);
                return Object.keys(ticks).sort(((a, b) => a - b)).map((x => +x));
            }
            getLabelForValue(value) {
                const adapter = this._adapter;
                const timeOpts = this.options.time;
                if (timeOpts.tooltipFormat) return adapter.format(value, timeOpts.tooltipFormat);
                return adapter.format(value, timeOpts.displayFormats.datetime);
            }
            format(value, format) {
                const options = this.options;
                const formats = options.time.displayFormats;
                const unit = this._unit;
                const fmt = format || formats[unit];
                return this._adapter.format(value, fmt);
            }
            _tickFormatFunction(time, index, ticks, format) {
                const options = this.options;
                const formatter = options.ticks.callback;
                if (formatter) return callback(formatter, [ time, index, ticks ], this);
                const formats = options.time.displayFormats;
                const unit = this._unit;
                const majorUnit = this._majorUnit;
                const minorFormat = unit && formats[unit];
                const majorFormat = majorUnit && formats[majorUnit];
                const tick = ticks[index];
                const major = majorUnit && majorFormat && tick && tick.major;
                return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
            }
            generateTickLabels(ticks) {
                let i, ilen, tick;
                for (i = 0, ilen = ticks.length; i < ilen; ++i) {
                    tick = ticks[i];
                    tick.label = this._tickFormatFunction(tick.value, i, ticks);
                }
            }
            getDecimalForValue(value) {
                return null === value ? NaN : (value - this.min) / (this.max - this.min);
            }
            getPixelForValue(value) {
                const offsets = this._offsets;
                const pos = this.getDecimalForValue(value);
                return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
            }
            getValueForPixel(pixel) {
                const offsets = this._offsets;
                const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
                return this.min + pos * (this.max - this.min);
            }
            _getLabelSize(label) {
                const ticksOpts = this.options.ticks;
                const tickLabelWidth = this.ctx.measureText(label).width;
                const angle = toRadians(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
                const cosRotation = Math.cos(angle);
                const sinRotation = Math.sin(angle);
                const tickFontSize = this._resolveTickFontOptions(0).size;
                return {
                    w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
                    h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
                };
            }
            _getLabelCapacity(exampleTime) {
                const timeOpts = this.options.time;
                const displayFormats = timeOpts.displayFormats;
                const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
                const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [ exampleTime ], this._majorUnit), format);
                const size = this._getLabelSize(exampleLabel);
                const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
                return capacity > 0 ? capacity : 1;
            }
            getDataTimestamps() {
                let timestamps = this._cache.data || [];
                let i, ilen;
                if (timestamps.length) return timestamps;
                const metas = this.getMatchingVisibleMetas();
                if (this._normalized && metas.length) return this._cache.data = metas[0].controller.getAllParsedValues(this);
                for (i = 0, ilen = metas.length; i < ilen; ++i) timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
                return this._cache.data = this.normalize(timestamps);
            }
            getLabelTimestamps() {
                const timestamps = this._cache.labels || [];
                let i, ilen;
                if (timestamps.length) return timestamps;
                const labels = this.getLabels();
                for (i = 0, ilen = labels.length; i < ilen; ++i) timestamps.push(parse(this, labels[i]));
                return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
            }
            normalize(values) {
                return _arrayUnique(values.sort(sorter));
            }
        }
        class TimeSeriesScale extends TimeScale {
            static id="timeseries";
            static defaults=TimeScale.defaults;
            constructor(props) {
                super(props);
                this._table = [];
                this._minPos = void 0;
                this._tableRange = void 0;
            }
            initOffsets() {
                const timestamps = this._getTimestampsForTable();
                const table = this._table = this.buildLookupTable(timestamps);
                this._minPos = chart_interpolate(table, this.min);
                this._tableRange = chart_interpolate(table, this.max) - this._minPos;
                super.initOffsets(timestamps);
            }
            buildLookupTable(timestamps) {
                const {min, max} = this;
                const items = [];
                const table = [];
                let i, ilen, prev, curr, next;
                for (0, timestamps.length; i < ilen; ++i) {
                    timestamps[i];
                    if (curr >= min && curr <= max) items.push(curr);
                }
                if (items.length < 2) return [ {
                    time: min,
                    pos: 0
                }, {
                    time: max,
                    pos: 1
                } ];
                for (0, items.length; i < ilen; ++i) {
                    items[i + 1];
                    items[i - 1];
                    items[i];
                    if (Math.round((next + prev) / 2) !== curr) table.push({
                        time: curr,
                        pos: i / (ilen - 1)
                    });
                }
                return table;
            }
            _getTimestampsForTable() {
                let timestamps = this._cache.all || [];
                if (timestamps.length) return timestamps;
                const data = this.getDataTimestamps();
                const label = this.getLabelTimestamps();
                if (data.length && label.length) this.normalize(data.concat(label)); else data.length ? data : label;
                this._cache.all = timestamps;
                return timestamps;
            }
            getDecimalForValue(value) {
                return (chart_interpolate(this._table, value) - this._minPos) / this._tableRange;
            }
            getValueForPixel(pixel) {
                const offsets = this._offsets;
                const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
                return chart_interpolate(this._table, decimal * this._tableRange + this._minPos, true);
            }
        }
        window.addEventListener("load", (() => {
            if (document.querySelector(".main-account")) {
                Chart.register({
                    BarController,
                    BarElement,
                    CategoryScale,
                    LinearScale
                });
                const totalCommissions = document.querySelector("#total-commissions");
                let firstChart = new Chart(totalCommissions, {
                    type: "bar",
                    options: {
                        responsive: true,
                        hover: false,
                        plugins: {
                            legend: {
                                display: false
                            },
                            datalabels: {
                                display: false
                            }
                        }
                    },
                    data: {
                        labels: [ "Jan", "Feb", "Mar" ],
                        datasets: [ {
                            label: "",
                            data: [ 1200, 1203, 3200 ],
                            backgroundColor: "#307FDB",
                            borderSkipped: false,
                            categoryPercentage: .4
                        } ]
                    }
                });
                const totalEarnings = document.querySelector("#total-earning");
                let secondChart = new Chart(totalEarnings, {
                    type: "bar",
                    options: {
                        responsive: true,
                        hover: false,
                        plugins: {
                            legend: {
                                display: false
                            },
                            datalabels: {
                                display: false
                            }
                        }
                    },
                    data: {
                        labels: [ "Jan", "Feb", "Mar" ],
                        datasets: [ {
                            label: "",
                            data: [ 3200, 503, 2200 ],
                            backgroundColor: "#307FDB",
                            borderSkipped: false,
                            categoryPercentage: .4
                        } ]
                    }
                });
                const htmlBlock = document.documentElement;
                const options = {
                    attributes: true
                };
                function chartUpdate(color) {
                    firstChart.data.datasets[0].backgroundColor = color;
                    firstChart.update();
                    secondChart.data.datasets[0].backgroundColor = color;
                    secondChart.update();
                }
                function callback(mutationList, observer) {
                    mutationList.forEach((function(mutation) {
                        if ("attributes" === mutation.type && "class" === mutation.attributeName) {
                            const colors = {
                                blue: "#307FDB",
                                red: "#CD343D",
                                green: "#07E156"
                            };
                            let currentColor = htmlBlock.className;
                            if ("blue" == currentColor) chartUpdate(colors.blue); else if ("red" == currentColor) chartUpdate(colors.red); else chartUpdate(colors.green);
                        }
                    }));
                }
                const observer = new MutationObserver(callback);
                observer.observe(htmlBlock, options);
            }
        }));
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function functions_getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = functions_getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        const module_techModule = {};
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if ("error" !== this._dataValue) {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        }
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && 27 == e.which && "Escape" === e.code && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && 9 == e.which && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") ? true : false;
                    if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                    }
                }
            }
            close(selectorValue) {
                if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && 0 === focusedIndex) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
        }
        module_techModule.popup = new Popup({});
        function formFieldsInit(options = {
            viewPass: false
        }) {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (formFields.length) formFields.forEach((formField => {
                if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((null !== formRequiredItem.offsetParent || "SELECT" === formRequiredItem.tagName) && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if ("email" === formRequiredItem.dataset.required) {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if ("checkbox" === formRequiredItem.type && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (module_techModule.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            module_techModule.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        class SelectConstructor {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.selectClasses = {
                    classSelect: "select",
                    classSelectBody: "select__body",
                    classSelectTitle: "select__title",
                    classSelectValue: "select__value",
                    classSelectLabel: "select__label",
                    classSelectInput: "select__input",
                    classSelectText: "select__text",
                    classSelectLink: "select__link",
                    classSelectOptions: "select__options",
                    classSelectOptionsScroll: "select__scroll",
                    classSelectOption: "select__option",
                    classSelectContent: "select__content",
                    classSelectRow: "select__row",
                    classSelectData: "select__asset",
                    classSelectDisabled: "_select-disabled",
                    classSelectTag: "_select-tag",
                    classSelectOpen: "_select-open",
                    classSelectActive: "_select-active",
                    classSelectFocus: "_select-focus",
                    classSelectMultiple: "_select-multiple",
                    classSelectCheckBox: "_select-checkbox",
                    classSelectOptionSelected: "_select-selected",
                    classSelectPseudoLabel: "_select-pseudo-label"
                };
                this._this = this;
                if (this.config.init) {
                    const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
                    if (selectItems.length) this.selectsInit(selectItems);
                }
            }
            getSelectClass(className) {
                return `.${className}`;
            }
            getSelectElement(selectItem, className) {
                return {
                    originalSelect: selectItem.querySelector("select"),
                    selectElement: selectItem.querySelector(this.getSelectClass(className))
                };
            }
            selectsInit(selectItems) {
                selectItems.forEach(((originalSelect, index) => {
                    this.selectInit(originalSelect, index + 1);
                }));
                document.addEventListener("click", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusin", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusout", function(e) {
                    this.selectsActions(e);
                }.bind(this));
            }
            selectInit(originalSelect, index) {
                const _this = this;
                let selectItem = document.createElement("div");
                selectItem.classList.add(this.selectClasses.classSelect);
                originalSelect.parentNode.insertBefore(selectItem, originalSelect);
                selectItem.appendChild(originalSelect);
                originalSelect.hidden = true;
                index ? originalSelect.dataset.id = index : null;
                if (this.getSelectPlaceholder(originalSelect)) {
                    originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                    if (this.getSelectPlaceholder(originalSelect).label.show) {
                        const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                        selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
                    }
                }
                selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
                this.selectBuild(originalSelect);
                originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : "150";
                originalSelect.addEventListener("change", (function(e) {
                    _this.selectChange(e);
                }));
            }
            selectBuild(originalSelect) {
                const selectItem = originalSelect.parentElement;
                selectItem.dataset.id = originalSelect.dataset.id;
                selectItem.classList.add(originalSelect.getAttribute("class") ? `select_${originalSelect.getAttribute("class")}` : "");
                originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
                originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setOptions(selectItem, originalSelect);
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
                this.selectDisabled(selectItem, originalSelect);
            }
            selectsActions(e) {
                const targetElement = e.target;
                const targetType = e.type;
                if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                    const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    if ("click" === targetType) {
                        if (!originalSelect.disabled) if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                            const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                            const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
                            this.optionAction(selectItem, originalSelect, optionItem);
                        } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                            const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                            this.optionAction(selectItem, originalSelect, optionItem);
                        }
                    } else if ("focusin" === targetType || "focusout" === targetType) {
                        if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) "focusin" === targetType ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                    } else if ("keydown" === targetType && "Escape" === e.code) this.selectsСlose();
                } else this.selectsСlose();
            }
            selectsСlose(selectOneGroup) {
                const selectsGroup = selectOneGroup ? selectOneGroup : document;
                const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
                if (selectActiveItems.length) selectActiveItems.forEach((selectActiveItem => {
                    this.selectСlose(selectActiveItem);
                }));
            }
            selectСlose(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.remove(this.selectClasses.classSelectOpen);
                    _slideUp(selectOptions, originalSelect.dataset.speed);
                }
            }
            selectAction(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (originalSelect.closest("[data-one-select]")) {
                    const selectOneGroup = originalSelect.closest("[data-one-select]");
                    this.selectsСlose(selectOneGroup);
                }
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                    _slideToggle(selectOptions, originalSelect.dataset.speed);
                }
            }
            setSelectTitleValue(selectItem, originalSelect) {
                const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
                const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                if (selectItemTitle) selectItemTitle.remove();
                selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
            }
            getSelectTitleValue(selectItem, originalSelect) {
                let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
                if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                    selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`)).join("");
                    if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                        document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                        if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                    }
                }
                selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
                let pseudoAttribute = "";
                let pseudoAttributeClass = "";
                if (originalSelect.hasAttribute("data-pseudo-label")) {
                    pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заполните атрибут"`;
                    pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
                }
                this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
                if (originalSelect.hasAttribute("data-search")) return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`; else {
                    const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
                    return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
                }
            }
            getSelectElementContent(selectOption) {
                const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
                const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
                let selectOptionContentHTML = ``;
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
                selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
                selectOptionContentHTML += selectOption.textContent;
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                return selectOptionContentHTML;
            }
            getSelectPlaceholder(originalSelect) {
                const selectPlaceholder = Array.from(originalSelect.options).find((option => !option.value));
                if (selectPlaceholder) return {
                    value: selectPlaceholder.textContent,
                    show: selectPlaceholder.hasAttribute("data-show"),
                    label: {
                        show: selectPlaceholder.hasAttribute("data-label"),
                        text: selectPlaceholder.dataset.label
                    }
                };
            }
            getSelectedOptionsData(originalSelect, type) {
                let selectedOptions = [];
                if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((option => option.value)).filter((option => option.selected)); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
                return {
                    elements: selectedOptions.map((option => option)),
                    values: selectedOptions.filter((option => option.value)).map((option => option.value)),
                    html: selectedOptions.map((option => this.getSelectElementContent(option)))
                };
            }
            getOptions(originalSelect) {
                let selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
                let selectOptionsScrollHeight = originalSelect.dataset.scroll ? `style="max-height:${originalSelect.dataset.scroll}px"` : "";
                let selectOptions = Array.from(originalSelect.options);
                if (selectOptions.length > 0) {
                    let selectOptionsHTML = ``;
                    if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((option => option.value));
                    selectOptionsHTML += selectOptionsScroll ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight} class="${this.selectClasses.classSelectOptionsScroll}">` : "";
                    selectOptions.forEach((selectOption => {
                        selectOptionsHTML += this.getOption(selectOption, originalSelect);
                    }));
                    selectOptionsHTML += selectOptionsScroll ? `</div>` : "";
                    return selectOptionsHTML;
                }
            }
            getOption(selectOption, originalSelect) {
                const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
                const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
                const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
                const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
                const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
                let selectOptionHTML = ``;
                selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
                selectOptionHTML += this.getSelectElementContent(selectOption);
                selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
                return selectOptionHTML;
            }
            setOptions(selectItem, originalSelect) {
                const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                selectItemOptions.innerHTML = this.getOptions(originalSelect);
            }
            optionAction(selectItem, originalSelect, optionItem) {
                if (originalSelect.multiple) {
                    optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                    const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                    originalSelectSelectedItems.forEach((originalSelectSelectedItem => {
                        originalSelectSelectedItem.removeAttribute("selected");
                    }));
                    const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                    selectSelectedItems.forEach((selectSelectedItems => {
                        originalSelect.querySelector(`option[value="${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "selected");
                    }));
                } else {
                    if (!originalSelect.hasAttribute("data-show-selected")) {
                        if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
                        optionItem.hidden = true;
                    }
                    originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                    this.selectAction(selectItem);
                }
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setSelectChange(originalSelect);
            }
            selectChange(e) {
                const originalSelect = e.target;
                this.selectBuild(originalSelect);
                this.setSelectChange(originalSelect);
            }
            setSelectChange(originalSelect) {
                if (originalSelect.hasAttribute("data-validate")) formValidate.validateInput(originalSelect);
                if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                    let tempButton = document.createElement("button");
                    tempButton.type = "submit";
                    originalSelect.closest("form").append(tempButton);
                    tempButton.click();
                    tempButton.remove();
                }
                const selectItem = originalSelect.parentElement;
                this.selectCallback(selectItem, originalSelect);
            }
            selectDisabled(selectItem, originalSelect) {
                if (originalSelect.disabled) {
                    selectItem.classList.add(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
                } else {
                    selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
                }
            }
            searchActions(selectItem) {
                this.getSelectElement(selectItem).originalSelect;
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption}`);
                const _this = this;
                selectInput.addEventListener("input", (function() {
                    selectOptionsItems.forEach((selectOptionsItem => {
                        if (selectOptionsItem.textContent.toUpperCase().indexOf(selectInput.value.toUpperCase()) >= 0) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                    }));
                    true === selectOptions.hidden ? _this.selectAction(selectItem) : null;
                }));
            }
            selectCallback(selectItem, originalSelect) {
                document.dispatchEvent(new CustomEvent("selectCallback", {
                    detail: {
                        select: originalSelect
                    }
                }));
            }
        }
        module_techModule.select = new SelectConstructor({});
        var lib_typed = __webpack_require__(614);
        window.addEventListener("load", (() => {
            const title = document.querySelector(".home__title");
            if (title) {
                const titleWrapper = title.closest(".home__typed");
                const text = titleWrapper.getAttribute("data-text");
                new lib_typed(".home__title", {
                    strings: [ text ],
                    typeSpeed: 60,
                    backSpeed: 30,
                    loop: true,
                    startDelay: 1e3,
                    backDelay: 1e3
                });
            }
        }));
        var HOOKS = [ "onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition" ];
        var options_defaults = {
            _disable: [],
            allowInput: false,
            allowInvalidPreload: false,
            altFormat: "F j, Y",
            altInput: false,
            altInputClass: "form-control input",
            animate: "object" === typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
            ariaDateFormat: "F j, Y",
            autoFillDefaultTime: true,
            clickOpens: true,
            closeOnSelect: true,
            conjunction: ", ",
            dateFormat: "Y-m-d",
            defaultHour: 12,
            defaultMinute: 0,
            defaultSeconds: 0,
            disable: [],
            disableMobile: false,
            enableSeconds: false,
            enableTime: false,
            errorHandler: function(err) {
                return "undefined" !== typeof console && console.warn(err);
            },
            getWeek: function(givenDate) {
                var date = new Date(givenDate.getTime());
                date.setHours(0, 0, 0, 0);
                date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
                var week1 = new Date(date.getFullYear(), 0, 4);
                return 1 + Math.round(((date.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
            },
            hourIncrement: 1,
            ignoredFocusElements: [],
            inline: false,
            locale: "default",
            minuteIncrement: 5,
            mode: "single",
            monthSelectorType: "dropdown",
            nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
            noCalendar: false,
            now: new Date,
            onChange: [],
            onClose: [],
            onDayCreate: [],
            onDestroy: [],
            onKeyDown: [],
            onMonthChange: [],
            onOpen: [],
            onParseConfig: [],
            onReady: [],
            onValueUpdate: [],
            onYearChange: [],
            onPreCalendarPosition: [],
            plugins: [],
            position: "auto",
            positionElement: void 0,
            prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
            shorthandCurrentMonth: false,
            showMonths: 1,
            static: false,
            time_24hr: false,
            weekNumbers: false,
            wrap: false
        };
        var english = {
            weekdays: {
                shorthand: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
                longhand: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
            },
            months: {
                shorthand: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                longhand: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
            },
            daysInMonth: [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ],
            firstDayOfWeek: 0,
            ordinal: function(nth) {
                var s = nth % 100;
                if (s > 3 && s < 21) return "th";
                switch (s % 10) {
                  case 1:
                    return "st";

                  case 2:
                    return "nd";

                  case 3:
                    return "rd";

                  default:
                    return "th";
                }
            },
            rangeSeparator: " to ",
            weekAbbreviation: "Wk",
            scrollTitle: "Scroll to increment",
            toggleTitle: "Click to toggle",
            amPM: [ "AM", "PM" ],
            yearAriaLabel: "Year",
            monthAriaLabel: "Month",
            hourAriaLabel: "Hour",
            minuteAriaLabel: "Minute",
            time_24hr: false
        };
        const l10n_default = english;
        var pad = function(number, length) {
            if (void 0 === length) length = 2;
            return ("000" + number).slice(-1 * length);
        };
        var utils_int = function(bool) {
            return true === bool ? 1 : 0;
        };
        function utils_debounce(fn, wait) {
            var t;
            return function() {
                var _this = this;
                var args = arguments;
                clearTimeout(t);
                t = setTimeout((function() {
                    return fn.apply(_this, args);
                }), wait);
            };
        }
        var arrayify = function(obj) {
            return obj instanceof Array ? obj : [ obj ];
        };
        function toggleClass(elem, className, bool) {
            if (true === bool) return elem.classList.add(className);
            elem.classList.remove(className);
        }
        function createElement(tag, className, content) {
            var e = window.document.createElement(tag);
            className = className || "";
            content = content || "";
            e.className = className;
            if (void 0 !== content) e.textContent = content;
            return e;
        }
        function clearNode(node) {
            while (node.firstChild) node.removeChild(node.firstChild);
        }
        function findParent(node, condition) {
            if (condition(node)) return node; else if (node.parentNode) return findParent(node.parentNode, condition);
            return;
        }
        function createNumberInput(inputClassName, opts) {
            var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
            if (-1 === navigator.userAgent.indexOf("MSIE 9.0")) numInput.type = "number"; else {
                numInput.type = "text";
                numInput.pattern = "\\d*";
            }
            if (void 0 !== opts) for (var key in opts) numInput.setAttribute(key, opts[key]);
            wrapper.appendChild(numInput);
            wrapper.appendChild(arrowUp);
            wrapper.appendChild(arrowDown);
            return wrapper;
        }
        function getEventTarget(event) {
            try {
                if ("function" === typeof event.composedPath) {
                    var path = event.composedPath();
                    return path[0];
                }
                return event.target;
            } catch (error) {
                return event.target;
            }
        }
        var doNothing = function() {
            return;
        };
        var monthToStr = function(monthNumber, shorthand, locale) {
            return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
        };
        var revFormat = {
            D: doNothing,
            F: function(dateObj, monthName, locale) {
                dateObj.setMonth(locale.months.longhand.indexOf(monthName));
            },
            G: function(dateObj, hour) {
                dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
            },
            H: function(dateObj, hour) {
                dateObj.setHours(parseFloat(hour));
            },
            J: function(dateObj, day) {
                dateObj.setDate(parseFloat(day));
            },
            K: function(dateObj, amPM, locale) {
                dateObj.setHours(dateObj.getHours() % 12 + 12 * utils_int(new RegExp(locale.amPM[1], "i").test(amPM)));
            },
            M: function(dateObj, shortMonth, locale) {
                dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
            },
            S: function(dateObj, seconds) {
                dateObj.setSeconds(parseFloat(seconds));
            },
            U: function(_, unixSeconds) {
                return new Date(1e3 * parseFloat(unixSeconds));
            },
            W: function(dateObj, weekNum, locale) {
                var weekNumber = parseInt(weekNum);
                var date = new Date(dateObj.getFullYear(), 0, 2 + 7 * (weekNumber - 1), 0, 0, 0, 0);
                date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
                return date;
            },
            Y: function(dateObj, year) {
                dateObj.setFullYear(parseFloat(year));
            },
            Z: function(_, ISODate) {
                return new Date(ISODate);
            },
            d: function(dateObj, day) {
                dateObj.setDate(parseFloat(day));
            },
            h: function(dateObj, hour) {
                dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
            },
            i: function(dateObj, minutes) {
                dateObj.setMinutes(parseFloat(minutes));
            },
            j: function(dateObj, day) {
                dateObj.setDate(parseFloat(day));
            },
            l: doNothing,
            m: function(dateObj, month) {
                dateObj.setMonth(parseFloat(month) - 1);
            },
            n: function(dateObj, month) {
                dateObj.setMonth(parseFloat(month) - 1);
            },
            s: function(dateObj, seconds) {
                dateObj.setSeconds(parseFloat(seconds));
            },
            u: function(_, unixMillSeconds) {
                return new Date(parseFloat(unixMillSeconds));
            },
            w: doNothing,
            y: function(dateObj, year) {
                dateObj.setFullYear(2e3 + parseFloat(year));
            }
        };
        var tokenRegex = {
            D: "",
            F: "",
            G: "(\\d\\d|\\d)",
            H: "(\\d\\d|\\d)",
            J: "(\\d\\d|\\d)\\w+",
            K: "",
            M: "",
            S: "(\\d\\d|\\d)",
            U: "(.+)",
            W: "(\\d\\d|\\d)",
            Y: "(\\d{4})",
            Z: "(.+)",
            d: "(\\d\\d|\\d)",
            h: "(\\d\\d|\\d)",
            i: "(\\d\\d|\\d)",
            j: "(\\d\\d|\\d)",
            l: "",
            m: "(\\d\\d|\\d)",
            n: "(\\d\\d|\\d)",
            s: "(\\d\\d|\\d)",
            u: "(.+)",
            w: "(\\d\\d|\\d)",
            y: "(\\d{2})"
        };
        var formats = {
            Z: function(date) {
                return date.toISOString();
            },
            D: function(date, locale, options) {
                return locale.weekdays.shorthand[formats.w(date, locale, options)];
            },
            F: function(date, locale, options) {
                return monthToStr(formats.n(date, locale, options) - 1, false, locale);
            },
            G: function(date, locale, options) {
                return pad(formats.h(date, locale, options));
            },
            H: function(date) {
                return pad(date.getHours());
            },
            J: function(date, locale) {
                return void 0 !== locale.ordinal ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
            },
            K: function(date, locale) {
                return locale.amPM[utils_int(date.getHours() > 11)];
            },
            M: function(date, locale) {
                return monthToStr(date.getMonth(), true, locale);
            },
            S: function(date) {
                return pad(date.getSeconds());
            },
            U: function(date) {
                return date.getTime() / 1e3;
            },
            W: function(date, _, options) {
                return options.getWeek(date);
            },
            Y: function(date) {
                return pad(date.getFullYear(), 4);
            },
            d: function(date) {
                return pad(date.getDate());
            },
            h: function(date) {
                return date.getHours() % 12 ? date.getHours() % 12 : 12;
            },
            i: function(date) {
                return pad(date.getMinutes());
            },
            j: function(date) {
                return date.getDate();
            },
            l: function(date, locale) {
                return locale.weekdays.longhand[date.getDay()];
            },
            m: function(date) {
                return pad(date.getMonth() + 1);
            },
            n: function(date) {
                return date.getMonth() + 1;
            },
            s: function(date) {
                return date.getSeconds();
            },
            u: function(date) {
                return date.getTime();
            },
            w: function(date) {
                return date.getDay();
            },
            y: function(date) {
                return String(date.getFullYear()).substring(2);
            }
        };
        var createDateFormatter = function(_a) {
            var _b = _a.config, config = void 0 === _b ? options_defaults : _b, _c = _a.l10n, l10n = void 0 === _c ? english : _c, _d = _a.isMobile, isMobile = void 0 === _d ? false : _d;
            return function(dateObj, frmt, overrideLocale) {
                var locale = overrideLocale || l10n;
                if (void 0 !== config.formatDate && !isMobile) return config.formatDate(dateObj, frmt, locale);
                return frmt.split("").map((function(c, i, arr) {
                    return formats[c] && "\\" !== arr[i - 1] ? formats[c](dateObj, locale, config) : "\\" !== c ? c : "";
                })).join("");
            };
        };
        var createDateParser = function(_a) {
            var _b = _a.config, config = void 0 === _b ? options_defaults : _b, _c = _a.l10n, l10n = void 0 === _c ? english : _c;
            return function(date, givenFormat, timeless, customLocale) {
                if (0 !== date && !date) return;
                var locale = customLocale || l10n;
                var parsedDate;
                var dateOrig = date;
                if (date instanceof Date) parsedDate = new Date(date.getTime()); else if ("string" !== typeof date && void 0 !== date.toFixed) parsedDate = new Date(date); else if ("string" === typeof date) {
                    var format = givenFormat || (config || options_defaults).dateFormat;
                    var datestr = String(date).trim();
                    if ("today" === datestr) {
                        parsedDate = new Date;
                        timeless = true;
                    } else if (config && config.parseDate) parsedDate = config.parseDate(date, format); else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date); else {
                        var matched = void 0, ops = [];
                        for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                            var token = format[i];
                            var isBackSlash = "\\" === token;
                            var escaped = "\\" === format[i - 1] || isBackSlash;
                            if (tokenRegex[token] && !escaped) {
                                regexStr += tokenRegex[token];
                                var match = new RegExp(regexStr).exec(date);
                                if (match && (matched = true)) ops["Y" !== token ? "push" : "unshift"]({
                                    fn: revFormat[token],
                                    val: match[++matchIndex]
                                });
                            } else if (!isBackSlash) regexStr += ".";
                        }
                        parsedDate = !config || !config.noCalendar ? new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((new Date).setHours(0, 0, 0, 0));
                        ops.forEach((function(_a) {
                            var fn = _a.fn, val = _a.val;
                            return parsedDate = fn(parsedDate, val, locale) || parsedDate;
                        }));
                        parsedDate = matched ? parsedDate : void 0;
                    }
                }
                if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                    config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                    return;
                }
                if (true === timeless) parsedDate.setHours(0, 0, 0, 0);
                return parsedDate;
            };
        };
        function compareDates(date1, date2, timeless) {
            if (void 0 === timeless) timeless = true;
            if (false !== timeless) return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
            return date1.getTime() - date2.getTime();
        }
        var isBetween = function(ts, ts1, ts2) {
            return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
        };
        var calculateSecondsSinceMidnight = function(hours, minutes, seconds) {
            return 3600 * hours + 60 * minutes + seconds;
        };
        var parseSeconds = function(secondsSinceMidnight) {
            var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - 3600 * hours) / 60;
            return [ hours, minutes, secondsSinceMidnight - 3600 * hours - 60 * minutes ];
        };
        var duration = {
            DAY: 864e5
        };
        function getDefaultHours(config) {
            var hours = config.defaultHour;
            var minutes = config.defaultMinute;
            var seconds = config.defaultSeconds;
            if (void 0 !== config.minDate) {
                var minHour = config.minDate.getHours();
                var minMinutes = config.minDate.getMinutes();
                var minSeconds = config.minDate.getSeconds();
                if (hours < minHour) hours = minHour;
                if (hours === minHour && minutes < minMinutes) minutes = minMinutes;
                if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
            }
            if (void 0 !== config.maxDate) {
                var maxHr = config.maxDate.getHours();
                var maxMinutes = config.maxDate.getMinutes();
                hours = Math.min(hours, maxHr);
                if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
                if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
            }
            return {
                hours,
                minutes,
                seconds
            };
        }
        __webpack_require__(895);
        var __assign = void 0 && (void 0).__assign || function() {
            __assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        var __spreadArrays = void 0 && (void 0).__spreadArrays || function() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            var r = Array(s), k = 0;
            for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
            k++) r[k] = a[j];
            return r;
        };
        var DEBOUNCED_CHANGE_MS = 300;
        function FlatpickrInstance(element, instanceConfig) {
            var self = {
                config: __assign(__assign({}, options_defaults), flatpickr.defaultConfig),
                l10n: l10n_default
            };
            self.parseDate = createDateParser({
                config: self.config,
                l10n: self.l10n
            });
            self._handlers = [];
            self.pluginElements = [];
            self.loadedPlugins = [];
            self._bind = bind;
            self._setHoursFromDate = setHoursFromDate;
            self._positionCalendar = positionCalendar;
            self.changeMonth = changeMonth;
            self.changeYear = changeYear;
            self.clear = clear;
            self.close = close;
            self.onMouseOver = onMouseOver;
            self._createElement = createElement;
            self.createDay = createDay;
            self.destroy = destroy;
            self.isEnabled = isEnabled;
            self.jumpToDate = jumpToDate;
            self.updateValue = updateValue;
            self.open = open;
            self.redraw = redraw;
            self.set = set;
            self.setDate = setDate;
            self.toggle = toggle;
            function setupHelperFunctions() {
                self.utils = {
                    getDaysInMonth: function(month, yr) {
                        if (void 0 === month) month = self.currentMonth;
                        if (void 0 === yr) yr = self.currentYear;
                        if (1 === month && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
                        return self.l10n.daysInMonth[month];
                    }
                };
            }
            function init() {
                self.element = self.input = element;
                self.isOpen = false;
                parseConfig();
                setupLocale();
                setupInputs();
                setupDates();
                setupHelperFunctions();
                if (!self.isMobile) build();
                bindEvents();
                if (self.selectedDates.length || self.config.noCalendar) {
                    if (self.config.enableTime) setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : void 0);
                    updateValue(false);
                }
                setCalendarWidth();
                var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                if (!self.isMobile && isSafari) positionCalendar();
                triggerEvent("onReady");
            }
            function getClosestActiveElement() {
                var _a;
                return (null === (_a = self.calendarContainer) || void 0 === _a ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
            }
            function bindToInstance(fn) {
                return fn.bind(self);
            }
            function setCalendarWidth() {
                var config = self.config;
                if (false === config.weekNumbers && 1 === config.showMonths) return; else if (true !== config.noCalendar) window.requestAnimationFrame((function() {
                    if (void 0 !== self.calendarContainer) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (void 0 !== self.daysContainer) {
                        var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width = daysWidth + (void 0 !== self.weekWrapper ? self.weekWrapper.offsetWidth : 0) + "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                }));
            }
            function updateTime(e) {
                if (0 === self.selectedDates.length) {
                    var defaultDate = void 0 === self.config.minDate || compareDates(new Date, self.config.minDate) >= 0 ? new Date : new Date(self.config.minDate.getTime());
                    var defaults = getDefaultHours(self.config);
                    defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
                    self.selectedDates = [ defaultDate ];
                    self.latestSelectedDateObj = defaultDate;
                }
                if (void 0 !== e && "blur" !== e.type) timeWrapper(e);
                var prevValue = self._input.value;
                setHoursFromInputs();
                updateValue();
                if (self._input.value !== prevValue) self._debouncedChange();
            }
            function ampm2military(hour, amPM) {
                return hour % 12 + 12 * utils_int(amPM === self.l10n.amPM[1]);
            }
            function military2ampm(hour) {
                switch (hour % 24) {
                  case 0:
                  case 12:
                    return 12;

                  default:
                    return hour % 12;
                }
            }
            function setHoursFromInputs() {
                if (void 0 === self.hourElement || void 0 === self.minuteElement) return;
                var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = void 0 !== self.secondElement ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
                if (void 0 !== self.amPM) hours = ampm2military(hours, self.amPM.textContent);
                var limitMinHours = void 0 !== self.config.minTime || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && 0 === compareDates(self.latestSelectedDateObj, self.config.minDate, true);
                var limitMaxHours = void 0 !== self.config.maxTime || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && 0 === compareDates(self.latestSelectedDateObj, self.config.maxDate, true);
                if (void 0 !== self.config.maxTime && void 0 !== self.config.minTime && self.config.minTime > self.config.maxTime) {
                    var minBound = calculateSecondsSinceMidnight(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
                    var maxBound = calculateSecondsSinceMidnight(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
                    var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
                    if (currentTime > maxBound && currentTime < minBound) {
                        var result = parseSeconds(minBound);
                        hours = result[0];
                        minutes = result[1];
                        seconds = result[2];
                    }
                } else {
                    if (limitMaxHours) {
                        var maxTime = void 0 !== self.config.maxTime ? self.config.maxTime : self.config.maxDate;
                        hours = Math.min(hours, maxTime.getHours());
                        if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
                        if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
                    }
                    if (limitMinHours) {
                        var minTime = void 0 !== self.config.minTime ? self.config.minTime : self.config.minDate;
                        hours = Math.max(hours, minTime.getHours());
                        if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
                        if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
                    }
                }
                setHours(hours, minutes, seconds);
            }
            function setHoursFromDate(dateObj) {
                var date = dateObj || self.latestSelectedDateObj;
                if (date && date instanceof Date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
            }
            function setHours(hours, minutes, seconds) {
                if (void 0 !== self.latestSelectedDateObj) self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
                if (!self.hourElement || !self.minuteElement || self.isMobile) return;
                self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * utils_int(hours % 12 === 0) : hours);
                self.minuteElement.value = pad(minutes);
                if (void 0 !== self.amPM) self.amPM.textContent = self.l10n.amPM[utils_int(hours >= 12)];
                if (void 0 !== self.secondElement) self.secondElement.value = pad(seconds);
            }
            function onYearInput(event) {
                var eventTarget = getEventTarget(event);
                var year = parseInt(eventTarget.value) + (event.delta || 0);
                if (year / 1e3 > 1 || "Enter" === event.key && !/[^\d]/.test(year.toString())) changeYear(year);
            }
            function bind(element, event, handler, options) {
                if (event instanceof Array) return event.forEach((function(ev) {
                    return bind(element, ev, handler, options);
                }));
                if (element instanceof Array) return element.forEach((function(el) {
                    return bind(el, event, handler, options);
                }));
                element.addEventListener(event, handler, options);
                self._handlers.push({
                    remove: function() {
                        return element.removeEventListener(event, handler, options);
                    }
                });
            }
            function triggerChange() {
                triggerEvent("onChange");
            }
            function bindEvents() {
                if (self.config.wrap) [ "open", "close", "toggle", "clear" ].forEach((function(evt) {
                    Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), (function(el) {
                        return bind(el, "click", self[evt]);
                    }));
                }));
                if (self.isMobile) {
                    setupMobile();
                    return;
                }
                var debouncedResize = utils_debounce(onResize, 50);
                self._debouncedChange = utils_debounce(triggerChange, DEBOUNCED_CHANGE_MS);
                if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", (function(e) {
                    if ("range" === self.config.mode) onMouseOver(getEventTarget(e));
                }));
                bind(self._input, "keydown", onKeyDown);
                if (void 0 !== self.calendarContainer) bind(self.calendarContainer, "keydown", onKeyDown);
                if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
                if (void 0 !== window.ontouchstart) bind(window.document, "touchstart", documentClick); else bind(window.document, "mousedown", documentClick);
                bind(window.document, "focus", documentClick, {
                    capture: true
                });
                if (true === self.config.clickOpens) {
                    bind(self._input, "focus", self.open);
                    bind(self._input, "click", self.open);
                }
                if (void 0 !== self.daysContainer) {
                    bind(self.monthNav, "click", onMonthNavClick);
                    bind(self.monthNav, [ "keyup", "increment" ], onYearInput);
                    bind(self.daysContainer, "click", selectDate);
                }
                if (void 0 !== self.timeContainer && void 0 !== self.minuteElement && void 0 !== self.hourElement) {
                    var selText = function(e) {
                        return getEventTarget(e).select();
                    };
                    bind(self.timeContainer, [ "increment" ], updateTime);
                    bind(self.timeContainer, "blur", updateTime, {
                        capture: true
                    });
                    bind(self.timeContainer, "click", timeIncrement);
                    bind([ self.hourElement, self.minuteElement ], [ "focus", "click" ], selText);
                    if (void 0 !== self.secondElement) bind(self.secondElement, "focus", (function() {
                        return self.secondElement && self.secondElement.select();
                    }));
                    if (void 0 !== self.amPM) bind(self.amPM, "click", (function(e) {
                        updateTime(e);
                    }));
                }
                if (self.config.allowInput) bind(self._input, "blur", onBlur);
            }
            function jumpToDate(jumpDate, triggerChange) {
                var jumpTo = void 0 !== jumpDate ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
                var oldYear = self.currentYear;
                var oldMonth = self.currentMonth;
                try {
                    if (void 0 !== jumpTo) {
                        self.currentYear = jumpTo.getFullYear();
                        self.currentMonth = jumpTo.getMonth();
                    }
                } catch (e) {
                    e.message = "Invalid date supplied: " + jumpTo;
                    self.config.errorHandler(e);
                }
                if (triggerChange && self.currentYear !== oldYear) {
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) triggerEvent("onMonthChange");
                self.redraw();
            }
            function timeIncrement(e) {
                var eventTarget = getEventTarget(e);
                if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
            }
            function incrementNumInput(e, delta, inputElem) {
                var target = e && getEventTarget(e);
                var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
                var event = createEvent("increment");
                event.delta = delta;
                input && input.dispatchEvent(event);
            }
            function build() {
                var fragment = window.document.createDocumentFragment();
                self.calendarContainer = createElement("div", "flatpickr-calendar");
                self.calendarContainer.tabIndex = -1;
                if (!self.config.noCalendar) {
                    fragment.appendChild(buildMonthNav());
                    self.innerContainer = createElement("div", "flatpickr-innerContainer");
                    if (self.config.weekNumbers) {
                        var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                        self.innerContainer.appendChild(weekWrapper);
                        self.weekNumbers = weekNumbers;
                        self.weekWrapper = weekWrapper;
                    }
                    self.rContainer = createElement("div", "flatpickr-rContainer");
                    self.rContainer.appendChild(buildWeekdays());
                    if (!self.daysContainer) {
                        self.daysContainer = createElement("div", "flatpickr-days");
                        self.daysContainer.tabIndex = -1;
                    }
                    buildDays();
                    self.rContainer.appendChild(self.daysContainer);
                    self.innerContainer.appendChild(self.rContainer);
                    fragment.appendChild(self.innerContainer);
                }
                if (self.config.enableTime) fragment.appendChild(buildTime());
                toggleClass(self.calendarContainer, "rangeMode", "range" === self.config.mode);
                toggleClass(self.calendarContainer, "animate", true === self.config.animate);
                toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
                self.calendarContainer.appendChild(fragment);
                var customAppend = void 0 !== self.config.appendTo && void 0 !== self.config.appendTo.nodeType;
                if (self.config.inline || self.config.static) {
                    self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                    if (self.config.inline) if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling); else if (void 0 !== self.config.appendTo) self.config.appendTo.appendChild(self.calendarContainer);
                    if (self.config.static) {
                        var wrapper = createElement("div", "flatpickr-wrapper");
                        if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
                        wrapper.appendChild(self.element);
                        if (self.altInput) wrapper.appendChild(self.altInput);
                        wrapper.appendChild(self.calendarContainer);
                    }
                }
                if (!self.config.static && !self.config.inline) (void 0 !== self.config.appendTo ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
            }
            function createDay(className, date, _dayNumber, i) {
                var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
                dayElement.dateObj = date;
                dayElement.$i = i;
                dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
                if (-1 === className.indexOf("hidden") && 0 === compareDates(date, self.now)) {
                    self.todayDateElem = dayElement;
                    dayElement.classList.add("today");
                    dayElement.setAttribute("aria-current", "date");
                }
                if (dateIsEnabled) {
                    dayElement.tabIndex = -1;
                    if (isDateSelected(date)) {
                        dayElement.classList.add("selected");
                        self.selectedDateElem = dayElement;
                        if ("range" === self.config.mode) {
                            toggleClass(dayElement, "startRange", self.selectedDates[0] && 0 === compareDates(date, self.selectedDates[0], true));
                            toggleClass(dayElement, "endRange", self.selectedDates[1] && 0 === compareDates(date, self.selectedDates[1], true));
                            if ("nextMonthDay" === className) dayElement.classList.add("inRange");
                        }
                    }
                } else dayElement.classList.add("flatpickr-disabled");
                if ("range" === self.config.mode) if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
                if (self.weekNumbers && 1 === self.config.showMonths && "prevMonthDay" !== className && i % 7 === 6) self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
                triggerEvent("onDayCreate", dayElement);
                return dayElement;
            }
            function focusOnDayElem(targetNode) {
                targetNode.focus();
                if ("range" === self.config.mode) onMouseOver(targetNode);
            }
            function getFirstAvailableDay(delta) {
                var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
                var endMonth = delta > 0 ? self.config.showMonths : -1;
                for (var m = startMonth; m != endMonth; m += delta) {
                    var month = self.daysContainer.children[m];
                    var startIndex = delta > 0 ? 0 : month.children.length - 1;
                    var endIndex = delta > 0 ? month.children.length : -1;
                    for (var i = startIndex; i != endIndex; i += delta) {
                        var c = month.children[i];
                        if (-1 === c.className.indexOf("hidden") && isEnabled(c.dateObj)) return c;
                    }
                }
                return;
            }
            function getNextAvailableDay(current, delta) {
                var givenMonth = -1 === current.className.indexOf("Month") ? current.dateObj.getMonth() : self.currentMonth;
                var endMonth = delta > 0 ? self.config.showMonths : -1;
                var loopDelta = delta > 0 ? 1 : -1;
                for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                    var month = self.daysContainer.children[m];
                    var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
                    var numMonthDays = month.children.length;
                    for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                        var c = month.children[i];
                        if (-1 === c.className.indexOf("hidden") && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
                    }
                }
                self.changeMonth(loopDelta);
                focusOnDay(getFirstAvailableDay(loopDelta), 0);
                return;
            }
            function focusOnDay(current, offset) {
                var activeElement = getClosestActiveElement();
                var dayFocused = isInView(activeElement || document.body);
                var startElem = void 0 !== current ? current : dayFocused ? activeElement : void 0 !== self.selectedDateElem && isInView(self.selectedDateElem) ? self.selectedDateElem : void 0 !== self.todayDateElem && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
                if (void 0 === startElem) self._input.focus(); else if (!dayFocused) focusOnDayElem(startElem); else getNextAvailableDay(startElem, offset);
            }
            function buildMonthDays(year, month) {
                var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
                var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
                var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
                var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
                for (;dayNumber <= prevMonthDays; dayNumber++, dayIndex++) days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
                for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
                for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (1 === self.config.showMonths || dayIndex % 7 !== 0); dayNum++, 
                dayIndex++) days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
                var dayContainer = createElement("div", "dayContainer");
                dayContainer.appendChild(days);
                return dayContainer;
            }
            function buildDays() {
                if (void 0 === self.daysContainer) return;
                clearNode(self.daysContainer);
                if (self.weekNumbers) clearNode(self.weekNumbers);
                var frag = document.createDocumentFragment();
                for (var i = 0; i < self.config.showMonths; i++) {
                    var d = new Date(self.currentYear, self.currentMonth, 1);
                    d.setMonth(self.currentMonth + i);
                    frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
                }
                self.daysContainer.appendChild(frag);
                self.days = self.daysContainer.firstChild;
                if ("range" === self.config.mode && 1 === self.selectedDates.length) onMouseOver();
            }
            function buildMonthSwitch() {
                if (self.config.showMonths > 1 || "dropdown" !== self.config.monthSelectorType) return;
                var shouldBuildMonth = function(month) {
                    if (void 0 !== self.config.minDate && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) return false;
                    return !(void 0 !== self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
                };
                self.monthsDropdownContainer.tabIndex = -1;
                self.monthsDropdownContainer.innerHTML = "";
                for (var i = 0; i < 12; i++) {
                    if (!shouldBuildMonth(i)) continue;
                    var month = createElement("option", "flatpickr-monthDropdown-month");
                    month.value = new Date(self.currentYear, i).getMonth().toString();
                    month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
                    month.tabIndex = -1;
                    if (self.currentMonth === i) month.selected = true;
                    self.monthsDropdownContainer.appendChild(month);
                }
            }
            function buildMonth() {
                var container = createElement("div", "flatpickr-month");
                var monthNavFragment = window.document.createDocumentFragment();
                var monthElement;
                if (self.config.showMonths > 1 || "static" === self.config.monthSelectorType) monthElement = createElement("span", "cur-month"); else {
                    self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
                    self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
                    bind(self.monthsDropdownContainer, "change", (function(e) {
                        var target = getEventTarget(e);
                        var selectedMonth = parseInt(target.value, 10);
                        self.changeMonth(selectedMonth - self.currentMonth);
                        triggerEvent("onMonthChange");
                    }));
                    buildMonthSwitch();
                    monthElement = self.monthsDropdownContainer;
                }
                var yearInput = createNumberInput("cur-year", {
                    tabindex: "-1"
                });
                var yearElement = yearInput.getElementsByTagName("input")[0];
                yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
                if (self.config.minDate) yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
                if (self.config.maxDate) {
                    yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                    yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
                }
                var currentMonth = createElement("div", "flatpickr-current-month");
                currentMonth.appendChild(monthElement);
                currentMonth.appendChild(yearInput);
                monthNavFragment.appendChild(currentMonth);
                container.appendChild(monthNavFragment);
                return {
                    container,
                    yearElement,
                    monthElement
                };
            }
            function buildMonths() {
                clearNode(self.monthNav);
                self.monthNav.appendChild(self.prevMonthNav);
                if (self.config.showMonths) {
                    self.yearElements = [];
                    self.monthElements = [];
                }
                for (var m = self.config.showMonths; m--; ) {
                    var month = buildMonth();
                    self.yearElements.push(month.yearElement);
                    self.monthElements.push(month.monthElement);
                    self.monthNav.appendChild(month.container);
                }
                self.monthNav.appendChild(self.nextMonthNav);
            }
            function buildMonthNav() {
                self.monthNav = createElement("div", "flatpickr-months");
                self.yearElements = [];
                self.monthElements = [];
                self.prevMonthNav = createElement("span", "flatpickr-prev-month");
                self.prevMonthNav.innerHTML = self.config.prevArrow;
                self.nextMonthNav = createElement("span", "flatpickr-next-month");
                self.nextMonthNav.innerHTML = self.config.nextArrow;
                buildMonths();
                Object.defineProperty(self, "_hidePrevMonthArrow", {
                    get: function() {
                        return self.__hidePrevMonthArrow;
                    },
                    set: function(bool) {
                        if (self.__hidePrevMonthArrow !== bool) {
                            toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                            self.__hidePrevMonthArrow = bool;
                        }
                    }
                });
                Object.defineProperty(self, "_hideNextMonthArrow", {
                    get: function() {
                        return self.__hideNextMonthArrow;
                    },
                    set: function(bool) {
                        if (self.__hideNextMonthArrow !== bool) {
                            toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                            self.__hideNextMonthArrow = bool;
                        }
                    }
                });
                self.currentYearElement = self.yearElements[0];
                updateNavigationCurrentMonth();
                return self.monthNav;
            }
            function buildTime() {
                self.calendarContainer.classList.add("hasTime");
                if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
                var defaults = getDefaultHours(self.config);
                self.timeContainer = createElement("div", "flatpickr-time");
                self.timeContainer.tabIndex = -1;
                var separator = createElement("span", "flatpickr-time-separator", ":");
                var hourInput = createNumberInput("flatpickr-hour", {
                    "aria-label": self.l10n.hourAriaLabel
                });
                self.hourElement = hourInput.getElementsByTagName("input")[0];
                var minuteInput = createNumberInput("flatpickr-minute", {
                    "aria-label": self.l10n.minuteAriaLabel
                });
                self.minuteElement = minuteInput.getElementsByTagName("input")[0];
                self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
                self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
                self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
                self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
                self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
                self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
                self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
                self.hourElement.setAttribute("maxlength", "2");
                self.minuteElement.setAttribute("min", "0");
                self.minuteElement.setAttribute("max", "59");
                self.minuteElement.setAttribute("maxlength", "2");
                self.timeContainer.appendChild(hourInput);
                self.timeContainer.appendChild(separator);
                self.timeContainer.appendChild(minuteInput);
                if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");
                if (self.config.enableSeconds) {
                    self.timeContainer.classList.add("hasSeconds");
                    var secondInput = createNumberInput("flatpickr-second");
                    self.secondElement = secondInput.getElementsByTagName("input")[0];
                    self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
                    self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                    self.secondElement.setAttribute("min", "0");
                    self.secondElement.setAttribute("max", "59");
                    self.secondElement.setAttribute("maxlength", "2");
                    self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
                    self.timeContainer.appendChild(secondInput);
                }
                if (!self.config.time_24hr) {
                    self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[utils_int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
                    self.amPM.title = self.l10n.toggleTitle;
                    self.amPM.tabIndex = -1;
                    self.timeContainer.appendChild(self.amPM);
                }
                return self.timeContainer;
            }
            function buildWeekdays() {
                if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays"); else clearNode(self.weekdayContainer);
                for (var i = self.config.showMonths; i--; ) {
                    var container = createElement("div", "flatpickr-weekdaycontainer");
                    self.weekdayContainer.appendChild(container);
                }
                updateWeekdays();
                return self.weekdayContainer;
            }
            function updateWeekdays() {
                if (!self.weekdayContainer) return;
                var firstDayOfWeek = self.l10n.firstDayOfWeek;
                var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
                if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
                for (var i = self.config.showMonths; i--; ) self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
            }
            function buildWeeks() {
                self.calendarContainer.classList.add("hasWeeks");
                var weekWrapper = createElement("div", "flatpickr-weekwrapper");
                weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
                var weekNumbers = createElement("div", "flatpickr-weeks");
                weekWrapper.appendChild(weekNumbers);
                return {
                    weekWrapper,
                    weekNumbers
                };
            }
            function changeMonth(value, isOffset) {
                if (void 0 === isOffset) isOffset = true;
                var delta = isOffset ? value : value - self.currentMonth;
                if (delta < 0 && true === self._hidePrevMonthArrow || delta > 0 && true === self._hideNextMonthArrow) return;
                self.currentMonth += delta;
                if (self.currentMonth < 0 || self.currentMonth > 11) {
                    self.currentYear += self.currentMonth > 11 ? 1 : -1;
                    self.currentMonth = (self.currentMonth + 12) % 12;
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                buildDays();
                triggerEvent("onMonthChange");
                updateNavigationCurrentMonth();
            }
            function clear(triggerChangeEvent, toInitial) {
                if (void 0 === triggerChangeEvent) triggerChangeEvent = true;
                if (void 0 === toInitial) toInitial = true;
                self.input.value = "";
                if (void 0 !== self.altInput) self.altInput.value = "";
                if (void 0 !== self.mobileInput) self.mobileInput.value = "";
                self.selectedDates = [];
                self.latestSelectedDateObj = void 0;
                if (true === toInitial) {
                    self.currentYear = self._initialDate.getFullYear();
                    self.currentMonth = self._initialDate.getMonth();
                }
                if (true === self.config.enableTime) {
                    var _a = getDefaultHours(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
                    setHours(hours, minutes, seconds);
                }
                self.redraw();
                if (triggerChangeEvent) triggerEvent("onChange");
            }
            function close() {
                self.isOpen = false;
                if (!self.isMobile) {
                    if (void 0 !== self.calendarContainer) self.calendarContainer.classList.remove("open");
                    if (void 0 !== self._input) self._input.classList.remove("active");
                }
                triggerEvent("onClose");
            }
            function destroy() {
                if (void 0 !== self.config) triggerEvent("onDestroy");
                for (var i = self._handlers.length; i--; ) self._handlers[i].remove();
                self._handlers = [];
                if (self.mobileInput) {
                    if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
                    self.mobileInput = void 0;
                } else if (self.calendarContainer && self.calendarContainer.parentNode) if (self.config.static && self.calendarContainer.parentNode) {
                    var wrapper = self.calendarContainer.parentNode;
                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                    if (wrapper.parentNode) {
                        while (wrapper.firstChild) wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                    }
                } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
                if (self.altInput) {
                    self.input.type = "text";
                    if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
                    delete self.altInput;
                }
                if (self.input) {
                    self.input.type = self.input._type;
                    self.input.classList.remove("flatpickr-input");
                    self.input.removeAttribute("readonly");
                }
                [ "_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config" ].forEach((function(k) {
                    try {
                        delete self[k];
                    } catch (_) {}
                }));
            }
            function isCalendarElem(elem) {
                return self.calendarContainer.contains(elem);
            }
            function documentClick(e) {
                if (self.isOpen && !self.config.inline) {
                    var eventTarget_1 = getEventTarget(e);
                    var isCalendarElement = isCalendarElem(eventTarget_1);
                    var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
                    var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
                    var isIgnored = !self.config.ignoredFocusElements.some((function(elem) {
                        return elem.contains(eventTarget_1);
                    }));
                    if (lostFocus && isIgnored) {
                        if (self.config.allowInput) self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
                        if (void 0 !== self.timeContainer && void 0 !== self.minuteElement && void 0 !== self.hourElement && "" !== self.input.value && void 0 !== self.input.value) updateTime();
                        self.close();
                        if (self.config && "range" === self.config.mode && 1 === self.selectedDates.length) self.clear(false);
                    }
                }
            }
            function changeYear(newYear) {
                if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
                var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
                self.currentYear = newYearNum || self.currentYear;
                if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth); else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
                if (isNewYear) {
                    self.redraw();
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
            }
            function isEnabled(date, timeless) {
                var _a;
                if (void 0 === timeless) timeless = true;
                var dateToCheck = self.parseDate(date, void 0, timeless);
                if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, void 0 !== timeless ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, void 0 !== timeless ? timeless : !self.maxDateHasTime) > 0) return false;
                if (!self.config.enable && 0 === self.config.disable.length) return true;
                if (void 0 === dateToCheck) return false;
                var bool = !!self.config.enable, array = null !== (_a = self.config.enable) && void 0 !== _a ? _a : self.config.disable;
                for (var i = 0, d = void 0; i < array.length; i++) {
                    d = array[i];
                    if ("function" === typeof d && d(dateToCheck)) return bool; else if (d instanceof Date && void 0 !== dateToCheck && d.getTime() === dateToCheck.getTime()) return bool; else if ("string" === typeof d) {
                        var parsed = self.parseDate(d, void 0, true);
                        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
                    } else if ("object" === typeof d && void 0 !== dateToCheck && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
                }
                return !bool;
            }
            function isInView(elem) {
                if (void 0 !== self.daysContainer) return -1 === elem.className.indexOf("hidden") && -1 === elem.className.indexOf("flatpickr-disabled") && self.daysContainer.contains(elem);
                return false;
            }
            function onBlur(e) {
                var isInput = e.target === self._input;
                var valueChanged = self._input.value.trimEnd() !== getDateStr();
                if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
            }
            function onKeyDown(e) {
                var eventTarget = getEventTarget(e);
                var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
                var allowInput = self.config.allowInput;
                var allowKeydown = self.isOpen && (!allowInput || !isInput);
                var allowInlineKeydown = self.config.inline && isInput && !allowInput;
                if (13 === e.keyCode && isInput) if (allowInput) {
                    self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
                    self.close();
                    return eventTarget.blur();
                } else self.open(); else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
                    var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
                    switch (e.keyCode) {
                      case 13:
                        if (isTimeObj) {
                            e.preventDefault();
                            updateTime();
                            focusAndClose();
                        } else selectDate(e);
                        break;

                      case 27:
                        e.preventDefault();
                        focusAndClose();
                        break;

                      case 8:
                      case 46:
                        if (isInput && !self.config.allowInput) {
                            e.preventDefault();
                            self.clear();
                        }
                        break;

                      case 37:
                      case 39:
                        if (!isTimeObj && !isInput) {
                            e.preventDefault();
                            var activeElement = getClosestActiveElement();
                            if (void 0 !== self.daysContainer && (false === allowInput || activeElement && isInView(activeElement))) {
                                var delta_1 = 39 === e.keyCode ? 1 : -1;
                                if (!e.ctrlKey) focusOnDay(void 0, delta_1); else {
                                    e.stopPropagation();
                                    changeMonth(delta_1);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                            }
                        } else if (self.hourElement) self.hourElement.focus();
                        break;

                      case 38:
                      case 40:
                        e.preventDefault();
                        var delta = 40 === e.keyCode ? 1 : -1;
                        if (self.daysContainer && void 0 !== eventTarget.$i || eventTarget === self.input || eventTarget === self.altInput) {
                            if (e.ctrlKey) {
                                e.stopPropagation();
                                changeYear(self.currentYear - delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            } else if (!isTimeObj) focusOnDay(void 0, 7 * delta);
                        } else if (eventTarget === self.currentYearElement) changeYear(self.currentYear - delta); else if (self.config.enableTime) {
                            if (!isTimeObj && self.hourElement) self.hourElement.focus();
                            updateTime(e);
                            self._debouncedChange();
                        }
                        break;

                      case 9:
                        if (isTimeObj) {
                            var elems = [ self.hourElement, self.minuteElement, self.secondElement, self.amPM ].concat(self.pluginElements).filter((function(x) {
                                return x;
                            }));
                            var i = elems.indexOf(eventTarget);
                            if (-1 !== i) {
                                var target = elems[i + (e.shiftKey ? -1 : 1)];
                                e.preventDefault();
                                (target || self._input).focus();
                            }
                        } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
                            e.preventDefault();
                            self._input.focus();
                        }
                        break;

                      default:
                        break;
                    }
                }
                if (void 0 !== self.amPM && eventTarget === self.amPM) switch (e.key) {
                  case self.l10n.amPM[0].charAt(0):
                  case self.l10n.amPM[0].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[0];
                    setHoursFromInputs();
                    updateValue();
                    break;

                  case self.l10n.amPM[1].charAt(0):
                  case self.l10n.amPM[1].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[1];
                    setHoursFromInputs();
                    updateValue();
                    break;
                }
                if (isInput || isCalendarElem(eventTarget)) triggerEvent("onKeyDown", e);
            }
            function onMouseOver(elem, cellClass) {
                if (void 0 === cellClass) cellClass = "flatpickr-day";
                if (1 !== self.selectedDates.length || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled"))) return;
                var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], void 0, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
                var containsDisabled = false;
                var minRange = 0, maxRange = 0;
                for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) if (!isEnabled(new Date(t), true)) {
                    containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
                    if (t < initialDate && (!minRange || t > minRange)) minRange = t; else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
                }
                var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
                hoverableCells.forEach((function(dayElem) {
                    var date = dayElem.dateObj;
                    var timestamp = date.getTime();
                    var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
                    if (outOfRange) {
                        dayElem.classList.add("notAllowed");
                        [ "inRange", "startRange", "endRange" ].forEach((function(c) {
                            dayElem.classList.remove(c);
                        }));
                        return;
                    } else if (containsDisabled && !outOfRange) return;
                    [ "startRange", "inRange", "endRange", "notAllowed" ].forEach((function(c) {
                        dayElem.classList.remove(c);
                    }));
                    if (void 0 !== elem) {
                        elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
                        if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange"); else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
                        if (timestamp >= minRange && (0 === maxRange || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
                    }
                }));
            }
            function onResize() {
                if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
            }
            function open(e, positionElement) {
                if (void 0 === positionElement) positionElement = self._positionElement;
                if (true === self.isMobile) {
                    if (e) {
                        e.preventDefault();
                        var eventTarget = getEventTarget(e);
                        if (eventTarget) eventTarget.blur();
                    }
                    if (void 0 !== self.mobileInput) {
                        self.mobileInput.focus();
                        self.mobileInput.click();
                    }
                    triggerEvent("onOpen");
                    return;
                } else if (self._input.disabled || self.config.inline) return;
                var wasOpen = self.isOpen;
                self.isOpen = true;
                if (!wasOpen) {
                    self.calendarContainer.classList.add("open");
                    self._input.classList.add("active");
                    triggerEvent("onOpen");
                    positionCalendar(positionElement);
                }
                if (true === self.config.enableTime && true === self.config.noCalendar) if (false === self.config.allowInput && (void 0 === e || !self.timeContainer.contains(e.relatedTarget))) setTimeout((function() {
                    return self.hourElement.select();
                }), 50);
            }
            function minMaxDateSetter(type) {
                return function(date) {
                    var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
                    var inverseDateObj = self.config["_" + ("min" === type ? "max" : "min") + "Date"];
                    if (void 0 !== dateObj) self["min" === type ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
                    if (self.selectedDates) {
                        self.selectedDates = self.selectedDates.filter((function(d) {
                            return isEnabled(d);
                        }));
                        if (!self.selectedDates.length && "min" === type) setHoursFromDate(dateObj);
                        updateValue();
                    }
                    if (self.daysContainer) {
                        redraw();
                        if (void 0 !== dateObj) self.currentYearElement[type] = dateObj.getFullYear().toString(); else self.currentYearElement.removeAttribute(type);
                        self.currentYearElement.disabled = !!inverseDateObj && void 0 !== dateObj && inverseDateObj.getFullYear() === dateObj.getFullYear();
                    }
                };
            }
            function parseConfig() {
                var boolOpts = [ "wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile" ];
                var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
                var formats = {};
                self.config.parseDate = userConfig.parseDate;
                self.config.formatDate = userConfig.formatDate;
                Object.defineProperty(self.config, "enable", {
                    get: function() {
                        return self.config._enable;
                    },
                    set: function(dates) {
                        self.config._enable = parseDateRules(dates);
                    }
                });
                Object.defineProperty(self.config, "disable", {
                    get: function() {
                        return self.config._disable;
                    },
                    set: function(dates) {
                        self.config._disable = parseDateRules(dates);
                    }
                });
                var timeMode = "time" === userConfig.mode;
                if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                    var defaultDateFormat = flatpickr.defaultConfig.dateFormat || options_defaults.dateFormat;
                    formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
                }
                if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
                    var defaultAltFormat = flatpickr.defaultConfig.altFormat || options_defaults.altFormat;
                    formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + " h:i" + (userConfig.enableSeconds ? ":S" : "") + " K";
                }
                Object.defineProperty(self.config, "minDate", {
                    get: function() {
                        return self.config._minDate;
                    },
                    set: minMaxDateSetter("min")
                });
                Object.defineProperty(self.config, "maxDate", {
                    get: function() {
                        return self.config._maxDate;
                    },
                    set: minMaxDateSetter("max")
                });
                var minMaxTimeSetter = function(type) {
                    return function(val) {
                        self.config["min" === type ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
                    };
                };
                Object.defineProperty(self.config, "minTime", {
                    get: function() {
                        return self.config._minTime;
                    },
                    set: minMaxTimeSetter("min")
                });
                Object.defineProperty(self.config, "maxTime", {
                    get: function() {
                        return self.config._maxTime;
                    },
                    set: minMaxTimeSetter("max")
                });
                if ("time" === userConfig.mode) {
                    self.config.noCalendar = true;
                    self.config.enableTime = true;
                }
                Object.assign(self.config, formats, userConfig);
                for (var i = 0; i < boolOpts.length; i++) self.config[boolOpts[i]] = true === self.config[boolOpts[i]] || "true" === self.config[boolOpts[i]];
                HOOKS.filter((function(hook) {
                    return void 0 !== self.config[hook];
                })).forEach((function(hook) {
                    self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
                }));
                self.isMobile = !self.config.disableMobile && !self.config.inline && "single" === self.config.mode && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                for (i = 0; i < self.config.plugins.length; i++) {
                    var pluginConf = self.config.plugins[i](self) || {};
                    for (var key in pluginConf) if (HOOKS.indexOf(key) > -1) self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]); else if ("undefined" === typeof userConfig[key]) self.config[key] = pluginConf[key];
                }
                if (!userConfig.altInputClass) self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
                triggerEvent("onParseConfig");
            }
            function getInputElem() {
                return self.config.wrap ? element.querySelector("[data-input]") : element;
            }
            function setupLocale() {
                if ("object" !== typeof self.config.locale && "undefined" === typeof flatpickr.l10ns[self.config.locale]) self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
                self.l10n = __assign(__assign({}, flatpickr.l10ns.default), "object" === typeof self.config.locale ? self.config.locale : "default" !== self.config.locale ? flatpickr.l10ns[self.config.locale] : void 0);
                tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
                tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
                tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
                tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
                tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
                var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
                if (void 0 === userConfig.time_24hr && void 0 === flatpickr.defaultConfig.time_24hr) self.config.time_24hr = self.l10n.time_24hr;
                self.formatDate = createDateFormatter(self);
                self.parseDate = createDateParser({
                    config: self.config,
                    l10n: self.l10n
                });
            }
            function positionCalendar(customPositionElement) {
                if ("function" === typeof self.config.position) return void self.config.position(self, customPositionElement);
                if (void 0 === self.calendarContainer) return;
                triggerEvent("onPreCalendarPosition");
                var positionElement = customPositionElement || self._positionElement;
                var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function(acc, child) {
                    return acc + child.offsetHeight;
                }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = "above" === configPosVertical || "below" !== configPosVertical && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
                var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
                toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
                toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
                if (self.config.inline) return;
                var left = window.pageXOffset + inputBounds.left;
                var isCenter = false;
                var isRight = false;
                if ("center" === configPosHorizontal) {
                    left -= (calendarWidth - inputBounds.width) / 2;
                    isCenter = true;
                } else if ("right" === configPosHorizontal) {
                    left -= calendarWidth - inputBounds.width;
                    isRight = true;
                }
                toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
                toggleClass(self.calendarContainer, "arrowCenter", isCenter);
                toggleClass(self.calendarContainer, "arrowRight", isRight);
                var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
                var rightMost = left + calendarWidth > window.document.body.offsetWidth;
                var centerMost = right + calendarWidth > window.document.body.offsetWidth;
                toggleClass(self.calendarContainer, "rightMost", rightMost);
                if (self.config.static) return;
                self.calendarContainer.style.top = top + "px";
                if (!rightMost) {
                    self.calendarContainer.style.left = left + "px";
                    self.calendarContainer.style.right = "auto";
                } else if (!centerMost) {
                    self.calendarContainer.style.left = "auto";
                    self.calendarContainer.style.right = right + "px";
                } else {
                    var doc = getDocumentStyleSheet();
                    if (void 0 === doc) return;
                    var bodyWidth = window.document.body.offsetWidth;
                    var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                    var centerBefore = ".flatpickr-calendar.centerMost:before";
                    var centerAfter = ".flatpickr-calendar.centerMost:after";
                    var centerIndex = doc.cssRules.length;
                    var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                    toggleClass(self.calendarContainer, "rightMost", false);
                    toggleClass(self.calendarContainer, "centerMost", true);
                    doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                    self.calendarContainer.style.left = centerLeft + "px";
                    self.calendarContainer.style.right = "auto";
                }
            }
            function getDocumentStyleSheet() {
                var editableSheet = null;
                for (var i = 0; i < document.styleSheets.length; i++) {
                    var sheet = document.styleSheets[i];
                    if (!sheet.cssRules) continue;
                    try {
                        sheet.cssRules;
                    } catch (err) {
                        continue;
                    }
                    editableSheet = sheet;
                    break;
                }
                return null != editableSheet ? editableSheet : createStyleSheet();
            }
            function createStyleSheet() {
                var style = document.createElement("style");
                document.head.appendChild(style);
                return style.sheet;
            }
            function redraw() {
                if (self.config.noCalendar || self.isMobile) return;
                buildMonthSwitch();
                updateNavigationCurrentMonth();
                buildDays();
            }
            function focusAndClose() {
                self._input.focus();
                if (-1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints) setTimeout(self.close, 0); else self.close();
            }
            function selectDate(e) {
                e.preventDefault();
                e.stopPropagation();
                var isSelectable = function(day) {
                    return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
                };
                var t = findParent(getEventTarget(e), isSelectable);
                if (void 0 === t) return;
                var target = t;
                var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
                var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && "range" !== self.config.mode;
                self.selectedDateElem = target;
                if ("single" === self.config.mode) self.selectedDates = [ selectedDate ]; else if ("multiple" === self.config.mode) {
                    var selectedIndex = isDateSelected(selectedDate);
                    if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1); else self.selectedDates.push(selectedDate);
                } else if ("range" === self.config.mode) {
                    if (2 === self.selectedDates.length) self.clear(false, false);
                    self.latestSelectedDateObj = selectedDate;
                    self.selectedDates.push(selectedDate);
                    if (0 !== compareDates(selectedDate, self.selectedDates[0], true)) self.selectedDates.sort((function(a, b) {
                        return a.getTime() - b.getTime();
                    }));
                }
                setHoursFromInputs();
                if (shouldChangeMonth) {
                    var isNewYear = self.currentYear !== selectedDate.getFullYear();
                    self.currentYear = selectedDate.getFullYear();
                    self.currentMonth = selectedDate.getMonth();
                    if (isNewYear) {
                        triggerEvent("onYearChange");
                        buildMonthSwitch();
                    }
                    triggerEvent("onMonthChange");
                }
                updateNavigationCurrentMonth();
                buildDays();
                updateValue();
                if (!shouldChangeMonth && "range" !== self.config.mode && 1 === self.config.showMonths) focusOnDayElem(target); else if (void 0 !== self.selectedDateElem && void 0 === self.hourElement) self.selectedDateElem && self.selectedDateElem.focus();
                if (void 0 !== self.hourElement) void 0 !== self.hourElement && self.hourElement.focus();
                if (self.config.closeOnSelect) {
                    var single = "single" === self.config.mode && !self.config.enableTime;
                    var range = "range" === self.config.mode && 2 === self.selectedDates.length && !self.config.enableTime;
                    if (single || range) focusAndClose();
                }
                triggerChange();
            }
            var CALLBACKS = {
                locale: [ setupLocale, updateWeekdays ],
                showMonths: [ buildMonths, setCalendarWidth, buildWeekdays ],
                minDate: [ jumpToDate ],
                maxDate: [ jumpToDate ],
                positionElement: [ updatePositionElement ],
                clickOpens: [ function() {
                    if (true === self.config.clickOpens) {
                        bind(self._input, "focus", self.open);
                        bind(self._input, "click", self.open);
                    } else {
                        self._input.removeEventListener("focus", self.open);
                        self._input.removeEventListener("click", self.open);
                    }
                } ]
            };
            function set(option, value) {
                if (null !== option && "object" === typeof option) {
                    Object.assign(self.config, option);
                    for (var key in option) if (void 0 !== CALLBACKS[key]) CALLBACKS[key].forEach((function(x) {
                        return x();
                    }));
                } else {
                    self.config[option] = value;
                    if (void 0 !== CALLBACKS[option]) CALLBACKS[option].forEach((function(x) {
                        return x();
                    })); else if (HOOKS.indexOf(option) > -1) self.config[option] = arrayify(value);
                }
                self.redraw();
                updateValue(true);
            }
            function setSelectedDate(inputDate, format) {
                var dates = [];
                if (inputDate instanceof Array) dates = inputDate.map((function(d) {
                    return self.parseDate(d, format);
                })); else if (inputDate instanceof Date || "number" === typeof inputDate) dates = [ self.parseDate(inputDate, format) ]; else if ("string" === typeof inputDate) switch (self.config.mode) {
                  case "single":
                  case "time":
                    dates = [ self.parseDate(inputDate, format) ];
                    break;

                  case "multiple":
                    dates = inputDate.split(self.config.conjunction).map((function(date) {
                        return self.parseDate(date, format);
                    }));
                    break;

                  case "range":
                    dates = inputDate.split(self.l10n.rangeSeparator).map((function(date) {
                        return self.parseDate(date, format);
                    }));
                    break;

                  default:
                    break;
                } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
                self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter((function(d) {
                    return d instanceof Date && isEnabled(d, false);
                }));
                if ("range" === self.config.mode) self.selectedDates.sort((function(a, b) {
                    return a.getTime() - b.getTime();
                }));
            }
            function setDate(date, triggerChange, format) {
                if (void 0 === triggerChange) triggerChange = false;
                if (void 0 === format) format = self.config.dateFormat;
                if (0 !== date && !date || date instanceof Array && 0 === date.length) return self.clear(triggerChange);
                setSelectedDate(date, format);
                self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
                self.redraw();
                jumpToDate(void 0, triggerChange);
                setHoursFromDate();
                if (0 === self.selectedDates.length) self.clear(false);
                updateValue(triggerChange);
                if (triggerChange) triggerEvent("onChange");
            }
            function parseDateRules(arr) {
                return arr.slice().map((function(rule) {
                    if ("string" === typeof rule || "number" === typeof rule || rule instanceof Date) return self.parseDate(rule, void 0, true); else if (rule && "object" === typeof rule && rule.from && rule.to) return {
                        from: self.parseDate(rule.from, void 0),
                        to: self.parseDate(rule.to, void 0)
                    };
                    return rule;
                })).filter((function(x) {
                    return x;
                }));
            }
            function setupDates() {
                self.selectedDates = [];
                self.now = self.parseDate(self.config.now) || new Date;
                var preloadedDate = self.config.defaultDate || (("INPUT" === self.input.nodeName || "TEXTAREA" === self.input.nodeName) && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
                if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
                self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
                self.currentYear = self._initialDate.getFullYear();
                self.currentMonth = self._initialDate.getMonth();
                if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
                if (void 0 !== self.config.minTime) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
                if (void 0 !== self.config.maxTime) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
                self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
                self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
            }
            function setupInputs() {
                self.input = getInputElem();
                if (!self.input) {
                    self.config.errorHandler(new Error("Invalid input element specified"));
                    return;
                }
                self.input._type = self.input.type;
                self.input.type = "text";
                self.input.classList.add("flatpickr-input");
                self._input = self.input;
                if (self.config.altInput) {
                    self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
                    self._input = self.altInput;
                    self.altInput.placeholder = self.input.placeholder;
                    self.altInput.disabled = self.input.disabled;
                    self.altInput.required = self.input.required;
                    self.altInput.tabIndex = self.input.tabIndex;
                    self.altInput.type = "text";
                    self.input.setAttribute("type", "hidden");
                    if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
                }
                if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
                updatePositionElement();
            }
            function updatePositionElement() {
                self._positionElement = self.config.positionElement || self._input;
            }
            function setupMobile() {
                var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
                self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
                self.mobileInput.tabIndex = 1;
                self.mobileInput.type = inputType;
                self.mobileInput.disabled = self.input.disabled;
                self.mobileInput.required = self.input.required;
                self.mobileInput.placeholder = self.input.placeholder;
                self.mobileFormatStr = "datetime-local" === inputType ? "Y-m-d\\TH:i:S" : "date" === inputType ? "Y-m-d" : "H:i:S";
                if (self.selectedDates.length > 0) self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
                if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
                if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
                if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
                self.input.type = "hidden";
                if (void 0 !== self.altInput) self.altInput.type = "hidden";
                try {
                    if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
                } catch (_a) {}
                bind(self.mobileInput, "change", (function(e) {
                    self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
                    triggerEvent("onChange");
                    triggerEvent("onClose");
                }));
            }
            function toggle(e) {
                if (true === self.isOpen) return self.close();
                self.open(e);
            }
            function triggerEvent(event, data) {
                if (void 0 === self.config) return;
                var hooks = self.config[event];
                if (void 0 !== hooks && hooks.length > 0) for (var i = 0; hooks[i] && i < hooks.length; i++) hooks[i](self.selectedDates, self.input.value, self, data);
                if ("onChange" === event) {
                    self.input.dispatchEvent(createEvent("change"));
                    self.input.dispatchEvent(createEvent("input"));
                }
            }
            function createEvent(name) {
                var e = document.createEvent("Event");
                e.initEvent(name, true, true);
                return e;
            }
            function isDateSelected(date) {
                for (var i = 0; i < self.selectedDates.length; i++) {
                    var selectedDate = self.selectedDates[i];
                    if (selectedDate instanceof Date && 0 === compareDates(selectedDate, date)) return "" + i;
                }
                return false;
            }
            function isDateInRange(date) {
                if ("range" !== self.config.mode || self.selectedDates.length < 2) return false;
                return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
            }
            function updateNavigationCurrentMonth() {
                if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
                self.yearElements.forEach((function(yearElement, i) {
                    var d = new Date(self.currentYear, self.currentMonth, 1);
                    d.setMonth(self.currentMonth + i);
                    if (self.config.showMonths > 1 || "static" === self.config.monthSelectorType) self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " "; else self.monthsDropdownContainer.value = d.getMonth().toString();
                    yearElement.value = d.getFullYear().toString();
                }));
                self._hidePrevMonthArrow = void 0 !== self.config.minDate && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
                self._hideNextMonthArrow = void 0 !== self.config.maxDate && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
            }
            function getDateStr(specificFormat) {
                var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
                return self.selectedDates.map((function(dObj) {
                    return self.formatDate(dObj, format);
                })).filter((function(d, i, arr) {
                    return "range" !== self.config.mode || self.config.enableTime || arr.indexOf(d) === i;
                })).join("range" !== self.config.mode ? self.config.conjunction : self.l10n.rangeSeparator);
            }
            function updateValue(triggerChange) {
                if (void 0 === triggerChange) triggerChange = true;
                if (void 0 !== self.mobileInput && self.mobileFormatStr) self.mobileInput.value = void 0 !== self.latestSelectedDateObj ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
                self.input.value = getDateStr(self.config.dateFormat);
                if (void 0 !== self.altInput) self.altInput.value = getDateStr(self.config.altFormat);
                if (false !== triggerChange) triggerEvent("onValueUpdate");
            }
            function onMonthNavClick(e) {
                var eventTarget = getEventTarget(e);
                var isPrevMonth = self.prevMonthNav.contains(eventTarget);
                var isNextMonth = self.nextMonthNav.contains(eventTarget);
                if (isPrevMonth || isNextMonth) changeMonth(isPrevMonth ? -1 : 1); else if (self.yearElements.indexOf(eventTarget) >= 0) eventTarget.select(); else if (eventTarget.classList.contains("arrowUp")) self.changeYear(self.currentYear + 1); else if (eventTarget.classList.contains("arrowDown")) self.changeYear(self.currentYear - 1);
            }
            function timeWrapper(e) {
                e.preventDefault();
                var isKeyDown = "keydown" === e.type, eventTarget = getEventTarget(e), input = eventTarget;
                if (void 0 !== self.amPM && eventTarget === self.amPM) self.amPM.textContent = self.l10n.amPM[utils_int(self.amPM.textContent === self.l10n.amPM[0])];
                var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta || (isKeyDown ? 38 === e.which ? 1 : -1 : 0);
                var newValue = curValue + step * delta;
                if ("undefined" !== typeof input.value && 2 === input.value.length) {
                    var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                    if (newValue < min) {
                        newValue = max + newValue + utils_int(!isHourElem) + (utils_int(isHourElem) && utils_int(!self.amPM));
                        if (isMinuteElem) incrementNumInput(void 0, -1, self.hourElement);
                    } else if (newValue > max) {
                        newValue = input === self.hourElement ? newValue - max - utils_int(!self.amPM) : min;
                        if (isMinuteElem) incrementNumInput(void 0, 1, self.hourElement);
                    }
                    if (self.amPM && isHourElem && (1 === step ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) self.amPM.textContent = self.l10n.amPM[utils_int(self.amPM.textContent === self.l10n.amPM[0])];
                    input.value = pad(newValue);
                }
            }
            init();
            return self;
        }
        function _flatpickr(nodeList, config) {
            var nodes = Array.prototype.slice.call(nodeList).filter((function(x) {
                return x instanceof HTMLElement;
            }));
            var instances = [];
            for (var i = 0; i < nodes.length; i++) {
                var node = nodes[i];
                try {
                    if (null !== node.getAttribute("data-fp-omit")) continue;
                    if (void 0 !== node._flatpickr) {
                        node._flatpickr.destroy();
                        node._flatpickr = void 0;
                    }
                    node._flatpickr = FlatpickrInstance(node, config || {});
                    instances.push(node._flatpickr);
                } catch (e) {
                    console.error(e);
                }
            }
            return 1 === instances.length ? instances[0] : instances;
        }
        if ("undefined" !== typeof HTMLElement && "undefined" !== typeof HTMLCollection && "undefined" !== typeof NodeList) {
            HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
                return _flatpickr(this, config);
            };
            HTMLElement.prototype.flatpickr = function(config) {
                return _flatpickr([ this ], config);
            };
        }
        var flatpickr = function(selector, config) {
            if ("string" === typeof selector) return _flatpickr(window.document.querySelectorAll(selector), config); else if (selector instanceof Node) return _flatpickr([ selector ], config); else return _flatpickr(selector, config);
        };
        flatpickr.defaultConfig = {};
        flatpickr.l10ns = {
            en: __assign({}, l10n_default),
            default: __assign({}, l10n_default)
        };
        flatpickr.localize = function(l10n) {
            flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
        };
        flatpickr.setDefaults = function(config) {
            flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
        };
        flatpickr.parseDate = createDateParser({});
        flatpickr.formatDate = createDateFormatter({});
        flatpickr.compareDates = compareDates;
        if ("undefined" !== typeof jQuery && "undefined" !== typeof jQuery.fn) jQuery.fn.flatpickr = function(config) {
            return _flatpickr(this, config);
        };
        Date.prototype.fp_incr = function(days) {
            return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" === typeof days ? parseInt(days, 10) : days));
        };
        if ("undefined" !== typeof window) window.flatpickr = flatpickr;
        const esm = flatpickr;
        window.addEventListener("load", (() => {
            if (document.querySelector("#date-from")) {
                esm("#date-from", {
                    altFormat: "F/j/Y",
                    altInput: true,
                    disableMobile: "true"
                });
            }
            if (document.querySelector("#date-to")) {
                esm("#date-to", {
                    altFormat: "F/j/Y",
                    altInput: true,
                    disableMobile: "true"
                });
            }
        }));
        window.addEventListener("load", (() => {
            if (document.querySelector(".header__burger")) {
                const headerBurger = document.querySelector(".header__burger"), menu = document.querySelector(".header__nav");
                headerBurger.addEventListener("click", (() => {
                    headerBurger.classList.toggle("_active");
                    menu.classList.toggle("_active");
                    document.body.classList.toggle("lock");
                }));
            }
            if (document.querySelector("#c")) {
                const c = document.getElementById("c"), $ = c.getContext("2d"), W = c.width = window.innerWidth, H = c.height = window.innerHeight;
                const str = "A+B0C-D=E1F2G3 H4I 5J6 K7L8 M9N #O$P% Q^R> S<T:U *V@W &X Y|Z", matrix = str.split("");
                let font = 11, col = W / font, arr = [];
                for (let i = 0; i < col; i++) arr[i] = 1;
                function draw() {
                    var color = [ "#307FDB" ];
                    if (document.querySelector(".registration") || document.querySelector(".login")) $.fillStyle = "rgba(16,21,30,.3)"; else $.fillStyle = "rgba(10,11,15,.2)";
                    $.fillRect(0, 0, W, H);
                    $.fillStyle = color[Math.floor(Math.random() * color.length)];
                    $.font = font + "px system-ui";
                    for (let i = 0; i < arr.length; i++) {
                        let txt = matrix[Math.floor(Math.random() * matrix.length)];
                        $.fillText(txt, i * font, arr[i] * font);
                        if (arr[i] * font > H && Math.random() > .975) arr[i] = 0;
                        arr[i]++;
                    }
                }
                setInterval(draw, 80);
            }
            if (document.querySelector(".column-main__balance-numbers")) {
                const balance = document.querySelector(".column-main__balance-numbers");
                const balanceNumbers = balance.querySelector("span").innerHTML.split("");
                let output = "";
                for (let i = 0; i < balanceNumbers.length; i++) if ("1" == balanceNumbers[i]) output += "1"; else if ("." == balanceNumbers[i]) output += "."; else output += "0";
                balance.setAttribute("data-balance", output);
            }
            if (document.querySelector(".color-select")) {
                const select = document.querySelector(".color-select");
                const selectTitle = select.querySelector(".color-select__title");
                const selectName = selectTitle.querySelector(".color-select__name");
                const selectOptionImg = selectTitle.querySelector(".color-select__asset img");
                const favicon = document.querySelector('[rel="shortcut icon"]');
                window.addEventListener("click", (e => {
                    if (e.composedPath().includes(selectTitle)) select.classList.toggle("_open"); else select.classList.remove("_open");
                }));
                const htmlBlock = document.documentElement;
                const colorOptions = document.querySelectorAll(".color-select__option");
                function setColorTheme(value, imgSrc) {
                    if (value) {
                        htmlBlock.className = "";
                        htmlBlock.classList.add(value);
                        localStorage.setItem("user-theme", value);
                        localStorage.setItem("img-src", imgSrc);
                        selectName.innerHTML = value;
                        selectOptionImg.setAttribute("src", imgSrc);
                        favicon.setAttribute("href", `img/favicon-${value}.svg`);
                    }
                }
                function loadLocalColor() {
                    const currentColor = localStorage.getItem("user-theme");
                    const currentImgSrc = localStorage.getItem("img-src");
                    if (currentColor) if (currentImgSrc) setColorTheme(currentColor, currentImgSrc); else setColorTheme(currentColor, selectOptionImg.getAttribute("src")); else setColorTheme("blue", selectOptionImg.getAttribute("src"));
                }
                colorOptions.forEach((colorOption => {
                    colorOption.addEventListener("click", (() => {
                        const value = colorOption.getAttribute("data-color");
                        const imgSrc = colorOption.querySelector(".color-select__option-asset img").getAttribute("src");
                        setColorTheme(value, imgSrc);
                    }));
                }));
                loadLocalColor();
            }
        }));
        tabs();
        formFieldsInit({
            viewPass: true
        });
    })();
})();