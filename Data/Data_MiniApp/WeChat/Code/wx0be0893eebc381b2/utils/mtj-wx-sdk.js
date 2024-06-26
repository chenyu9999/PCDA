!function(e) {
    var t, n, r = "1.10.13", o = "https://hmma.baidu.com/mini.gif", i = {
        app: [ "onShow", "onHide", "onError" ],
        page: [ "onShow", "onHide", "onPageScroll" ],
        share: [ "onShareAppMessage" ],
        behavior: [ "tap" ]
    }, a = "mtj_uuid", c = "mtj_user", u = "mtj_user_property", s = "mtj_track_status", f = "mtj_remote_config", l = {}, p = {
        type: 1
    }, h = {
        aso: {}
    }, g = {}, d = function() {
        return "undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(4294967295 * Math.random());
    }, y = function(e, t) {
        return "[object " + t + "]" === {}.toString.call(e);
    }, m = function(e, t, n) {
        var r = (e = e.replace(new RegExp(t + "=[^&]*", "g"), "").replace(/(\?|&)&/g, "$1").replace(/(\?|&)$/g, "")).indexOf("?") > 0 ? "&" : "?";
        return e + r + t + "=" + encodeURIComponent(n);
    }, v = function e(t) {
        return y(t, "Object") || y(t, "Array") ? (Object.keys(t).forEach(function(n) {
            var r = t[n];
            y(r, "Object") || y(r, "Array") ? t[n] = e(r) : t[n] = "" + r;
        }), t) : t;
    }, j = function(e) {
        return y(e, "String") && /^[a-z][a-z0-9_]{0,31}$/.test(e);
    }, b = function(e) {
        return y(e, "String") && /^[a-z0-9_]{1,32}$/.test(e);
    }, S = function(e) {
        return y(e, "String") || y(e, "Number");
    }, O = function(e) {
        return y(e, "String") && /^\d{11}$/.test(e);
    }, k = function(e) {
        return y(e, "String") && 28 === e.length;
    }, w = 0, P = function(e) {
        return new Promise(function(n, o) {
            return e.data = e.data || {}, l.blacklist && (l.blacklist.indexOf("all") > -1 && e.data.et || l.blacklist.indexOf("behavior") > -1 && "behavior" === e.data.et) ? n() : (e.data.v = r, 
            e.data.rqc = ++w, i = e.data, JSON.stringify(i).length <= 204800 ? (e.success = function(e) {
                return n(e);
            }, e.fail = function(e) {
                return o(e);
            }, void function(e) {
                if (!1 !== l.trackStatus) {
                    var n = e.data.et ? {
                        mtj_ii: e.data.uuid || "",
                        mtj_et: e.data.et,
                        mtj_en: e.data.en
                    } : {};
                    t.request({
                        url: e.url,
                        data: e.data,
                        header: Object.assign({
                            "content-type": "application/json"
                        }, n, e.header),
                        method: e.method || "POST",
                        dataType: e.dataType || "json",
                        success: function(t) {
                            e.success && e.success(t);
                        },
                        fail: function(t) {
                            e.fail && e.fail(t);
                        }
                    });
                }
            }(e)) : (w--, o(new Error("invalid data"))));
            var i;
        });
    }, _ = function(e, t) {
        var n = y(t, "Object") ? JSON.stringify(t) : "" + t;
        P({
            url: o,
            dataType: "string",
            data: Object.assign({}, p, {
                et: "error",
                en: e,
                ep: {
                    ex: n
                },
                rid: d()
            })
        });
    }, T = function(e) {
        e.rid = d(), e.aso = e.aso || {};
        var t = {
            url: o,
            dataType: "string",
            data: Object.assign({}, p, e)
        };
        P(t), (g.circleToken || g.circleByThreeFingers) && ("page" === e.et && "show" === e.en || "behavior" === e.et && "tap" === e.en) && (t.url = "https://hmma.baidu.com/mini.gif?circle=1", 
        t.data.token = g.circleToken, P(t).catch(function(e) {
            return console.error(e);
        }));
    };
    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    var A = function(e) {
        try {
            return t.getStorageSync(e);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            _("getStorageSync", e);
        }
    }, E = function(e, n) {
        try {
            t.setStorageSync(e, n);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            _("setStorageSync", e);
        }
    }, x = function(e) {
        return new Promise(function(n) {
            if (!e) return n();
            t.getShareInfo({
                shareTicket: e,
                success: function(e) {
                    delete e.errMsg, n(e);
                },
                fail: function() {
                    n({});
                }
            });
        });
    }, q = function() {
        return n || (p.sid = d(), p.rqc = 0, n = Promise.all([ Promise.resolve().then(function() {
            var e = A(a);
            return y(e, "String") && 32 === e.length || (e = ([ 1e7 ] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function(e) {
                return (e ^ ("undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] : Math.floor(255 * Math.random())) & 15 >> e / 4).toString(16);
            }), E(a, e)), e;
        }), new Promise(function(e) {
            t.getSystemInfo({
                success: function(t) {
                    delete t.errMsg, e(t);
                },
                fail: function() {
                    e({});
                }
            });
        }), new Promise(function(e) {
            t.getNetworkType({
                success: function(t) {
                    delete t.errMsg, e(t);
                },
                fail: function() {
                    e({});
                }
            });
        }), Promise.resolve().then(function() {
            var e = A(c), n = y(e, "Object") ? e : {};
            return new Promise(function(e) {
                t.getSetting({
                    success: function(r) {
                        r.authSetting && r.authSetting["scope.userInfo"] ? t.getUserInfo({
                            success: function(t) {
                                delete t.userInfo.errMsg, e(Object.assign(n, t.userInfo));
                            },
                            fail: function() {
                                e(n);
                            }
                        }) : e(n);
                    },
                    fail: function() {
                        e(n);
                    }
                });
            });
        }), new Promise(function(e) {
            if (!l.getLocation) return e({});
            t.getLocation({
                type: "wgs84",
                success: function(t) {
                    delete t.errMsg, e(t);
                },
                fail: function() {
                    e({});
                }
            });
        }), Promise.resolve().then(function() {
            var e = A(u);
            return y(e, "Object") ? e : {};
        }) ]).then(function(e) {
            var t = function(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e;
                }(e) || function(e, t) {
                    var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                    if (null != n) {
                        var r, o, i = [], a = !0, c = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            c = !0, o = e;
                        } finally {
                            try {
                                a || null == n.return || n.return();
                            } finally {
                                if (c) throw o;
                            }
                        }
                        return i;
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return I(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? I(e, t) : void 0;
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }(e, 6), n = t[0], o = t[1], i = t[2], a = t[3], c = t[4], u = t[5];
            p.uuid = n, h.system = v(o), h.network = v(i), Object.keys(a).length > 0 && (h.user = v(a)), 
            Object.keys(c).length > 0 && (h.location = v(c)), Object.keys(u).length > 0 && (h.userProperty = JSON.stringify(u)), 
            "devtools" === h.system.platform && l.latestVersion && function(e, t) {
                for (var n = e.split("."), r = t.split("."), o = 0; o < 3; o++) {
                    var i = +n[o] || 0, a = +r[o] || 0;
                    if (i > a) return 1;
                    if (a > i) return -1;
                }
                return 0;
            }(r, l.latestVersion) < 0 && console.warn("百度移动统计微信小程序SDK已更新，为不影响您的正常使用，请到SDK下载中心 https://mtj.baidu.com/web/sdk/index 下载最新版本");
        }));
    }, N = {
        onShow: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (h.aso.query || []).filter(function(e) {
                return 0 === e.key.indexOf("mtj_");
            });
            return h.aso.scene = "" + (e.scene || ""), e.referrerInfo && e.referrerInfo.appId ? h.aso.referrerInfo = e.referrerInfo : delete h.aso.referrerInfo, 
            h.aso.path = e.path || "", h.aso.query = Object.keys(e.query || {}).map(function(t) {
                return {
                    key: t,
                    value: e.query[t]
                };
            }), t.length > 0 && !/(^|,)mtj_/.test(Object.keys(e.query || {}).join(",")) && (h.aso.query = h.aso.query.concat(t)), 
            (e.query || {}).mtj_ctoken && !l.disableCircling && (g.circleToken = e.query.mtj_ctoken), 
            q().then(function() {
                return x(e.shareTicket);
            }).then(function(e) {
                e ? h.aso.shareInfo = e : delete h.aso.shareInfo, T(Object.assign({
                    et: "app",
                    en: "show"
                }, h));
            }).catch(function(e) {
                _("app.onShow", e);
            });
        },
        onHide: function() {
            T({
                et: "app",
                en: "hide"
            });
        },
        onError: function(e) {
            var t = y(e, "Object") ? JSON.stringify(v(e)) : "" + e;
            T({
                et: "app",
                en: "error",
                ep: {
                    ex: t
                }
            });
        }
    }, M = -1, C = -1, U = 0, J = {
        onShow: function() {
            var e = getCurrentPages(), t = e[e.length - 1];
            return p.path = t.route, p.query = Object.keys(t.options).map(function(e) {
                return {
                    key: e,
                    value: t.options[e]
                };
            }).filter(function(e) {
                return "mtj_qrid" !== e.key && "mtj_lkid" !== e.key && "mtj_shuuid" !== e.key;
            }), p.path === g.lastPagePath && JSON.stringify(p.query) === g.lastPageQuery || (g.lastPagePath = p.path, 
            g.lastPageQuery = JSON.stringify(p.query), g.pageScrollTop = 0), q().then(function() {
                T(Object.assign({
                    et: "page",
                    en: "show"
                }, h));
            }).catch(function(e) {
                _("page.onShow", e);
            });
        },
        onHide: function() {
            var e, n, r, o, i, a = v({
                scrollTop: g.pageScrollTop,
                height: null === (e = h.system) || void 0 === e || null === (n = e.safeArea) || void 0 === n ? void 0 : n.height,
                width: null === (r = h.system) || void 0 === r || null === (o = r.safeArea) || void 0 === o ? void 0 : o.width
            }), c = Object.keys(a).map(function(e) {
                return {
                    key: e,
                    value: a[e]
                };
            });
            if (T({
                et: "page",
                en: "hide",
                ep: {
                    data: c
                }
            }), l.getComponentScroll) try {
                i = JSON.parse(JSON.stringify(p)), t.createSelectorQuery().selectAll(".mtj-scroll").fields({
                    id: !0,
                    size: !0,
                    scrollOffset: !0
                }).exec(function(e) {
                    Object.keys(e[0]).length > 0 && T(Object.assign({
                        et: "page",
                        en: "scroll",
                        ep: v(e[0])
                    }, i));
                });
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                _("page.trackComponentScrollEvent", e);
            }
        },
        onPageScroll: function(e) {
            (!g.pageScrollTop || e.scrollTop > g.pageScrollTop) && (g.pageScrollTop = e.scrollTop);
        },
        onShareAppMessage: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
                from: e.from,
                path: t.path
            };
            if (!n.path) {
                var r = p.query.map(function(e) {
                    return e.key + "=" + e.value;
                }).join("&");
                n.path = p.path + (r ? "?" + r : "");
            }
            t.title && (n.title = "" + t.title), e.target && (n.target = JSON.stringify(e.target)), 
            T(Object.assign({
                et: "share",
                en: "action",
                ep: n
            }, h));
            var o = h.aso.query.filter(function(e) {
                return "mtj_shuuid" === e.key;
            }), i = o[0] ? o[0].value.split("_") : [];
            p.uuid !== i[i.length - 1] && i.push(p.uuid);
            var a = i.slice(Math.max(0, i.length - 3)).join("_");
            return t.path = m(n.path, "mtj_shuuid", a), t;
        },
        onAction: function(e, t) {
            if (e && e.type && e.currentTarget) {
                var n = "#" + (e.currentTarget.id || t);
                if ("tap" !== e.type) {
                    if ("touchmove" === e.type && -1 === M && e.touches instanceof Array && 3 === e.touches.length) {
                        if (U += 1, clearTimeout(C), 3 === U) return g.circleByThreeFingers = !0, g.circleToken = void 0, 
                        void T(Object.assign({
                            et: "page",
                            en: "show"
                        }, h));
                        M = setTimeout(function() {
                            M = -1, C = setTimeout(function() {
                                U = 0;
                            }, 500);
                        }, 1e3);
                    }
                } else {
                    var r = [ {
                        key: "xpath",
                        value: n
                    } ];
                    T(Object.assign({
                        et: "behavior",
                        en: "tap",
                        ep: {
                            data: r
                        }
                    }, h));
                }
            }
        }
    }, R = {
        trackEvent: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!j(e)) return Promise.reject(new Error("事件名称不合法"));
            var n = Object.keys(t).filter(function(e) {
                return b(e) && S(t[e]);
            }).map(function(e) {
                return {
                    key: "" + e,
                    value: "" + t[e],
                    type: y(t[e], "String") ? "string" : "number"
                };
            });
            return q().then(function() {
                T(Object.assign({
                    et: "event",
                    en: "" + e,
                    ep: {
                        data: n
                    }
                }, h));
            }).catch(function(e) {
                _("trackEvent", e);
            });
        },
        setTrackStatus: function(e) {
            y(e, "Boolean") && (l.trackStatus = e, E(s, e));
        },
        setUserInfo: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.tel, n = e.openId;
            return q().then(function() {
                var e = A(c), r = y(e, "Object") ? e : {};
                O(t) && (r.tel = h.user.tel = t.substr(t.length - 11)), k(n) && (r.openId = h.user.openId = n), 
                (r.tel || r.openId) && E(c, r), y(t, "Undefined") || O(t) || console.error("手机号 ".concat(t, " 不合法")), 
                y(n, "Undefined") || k(n) || console.error("openid ".concat(n, " 不合法"));
            }).catch(function(e) {
                _("setUserInfo", e);
            });
        },
        setUserId: function(e) {
            return Promise.resolve().then(function() {
                if (!(y(e, "String") || y(e, "Number") && Number.isFinite(e))) return Promise.reject(new Error("userId只能是字符串或数字"));
                var t = "" + e, n = A(u), r = y(n, "Object") ? n : {};
                if (!r.uid_ || r.uid_[0] !== t) {
                    r.uid_ = [ t, "1" ], E(u, r), h.userProperty = JSON.stringify(r);
                    var o = [ {
                        key: "uid",
                        value: t
                    } ];
                    return q().then(function() {
                        T(Object.assign({
                            et: "api",
                            en: "setUserId",
                            ep: {
                                data: o
                            }
                        }, h));
                    }).catch(function(e) {
                        _("setUserId", e);
                    });
                }
            });
        },
        setUserProperty: function(e) {
            return Promise.resolve().then(function() {
                var t = A(u), n = y(t, "Object") ? t : {};
                if (y(e, "Null")) Object.keys(n).forEach(function(e) {
                    "_" !== e.charAt(0) && "_" !== e.charAt(e.length - 1) && delete n[e];
                }); else if (!y(e, "Object")) return Promise.reject(new Error("userProperty必须是对象"));
                var r = Object.keys(n).filter(function(e) {
                    return "_" !== e.charAt(0) && "_" !== e.charAt(e.length - 1);
                }).length;
                Object.keys(e || {}).forEach(function(t) {
                    var o = e[t];
                    "" !== t && "_" !== t.charAt(0) && "_" !== t.charAt(t.length - 1) && (y(o, "Null") ? n[t] && (delete n[t], 
                    r--) : !(y(o, "String") || y(o, "Number") && Number.isFinite(o)) || t.length > 256 || ("" + o).length > 256 || !n[t] && r >= 100 || (n[t] || r++, 
                    n[t] = [ o, "1" ]));
                }), E(u, n), h.userProperty = JSON.stringify(n);
            });
        }
    }, B = function(e, t, n) {
        var r = t[e];
        t[e] = function(t) {
            if (n.call(this, t, e), r) return r.apply(this, arguments);
        };
    }, V = App, $ = function(e) {
        i.app.forEach(function(t) {
            B(t, e, N[t]);
        }), e.mtj = R, e.mtj.pageEvent = J, V(e);
    }, K = Page, z = function(e) {
        i.page.forEach(function(t) {
            B(t, e, J[t]);
        }), i.share.forEach(function(t) {
            !function(e, t, n) {
                var r = t[e];
                t[e] = function(e) {
                    var t = r && r.apply(this, arguments);
                    return n.call(this, e, t);
                };
            }(t, e, J[t]);
        }), Object.keys(e).forEach(function(t) {
            "function" == typeof e[t] && -1 === i.page.indexOf(t) && -1 === i.share.indexOf(t) && B(t, e, J.onAction);
        }), K(e);
    }, D = Behavior, F = function(e) {
        return i.page.forEach(function(t) {
            B(t, e.methods, J[t]);
        }), D(e);
    };
    F.prototype.constructor = Behavior;
    var H = Component, L = function(e) {
        return i.page.forEach(function(t) {
            B(t, e.methods, J[t]);
        }), H(e);
    }, Q = function() {
        var e, n;
        e = wx, t = e;
        try {
            n = require("./mtj-wx-sdk.config");
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            return void console.error("请把mtj-wx-sdk.config.js文件拷贝到utils目录中");
        }
        n && n.appKey ? (p.key = n.appKey, l.getLocation = n.getLocation || !1, l.getComponentScroll = n.getComponentScroll || !1, 
        l.disableCircling = n.disableCircling || !1, l.trackStatus = !(!1 === A(s)), function() {
            var e = A(f);
            if (e) {
                Object.keys(e).forEach(function(t) {
                    l[t] = e[t];
                });
                var t = e.updateTimestamp || 0;
                if (+new Date() - t < 864e5) return Promise.resolve();
            }
            P({
                url: "https://hmma.baidu.com/mini.conf",
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: {
                    type: "wx",
                    key: p.key
                }
            }).then(function(e) {
                if (e && e.data) {
                    var t = e.data;
                    Object.keys(t).forEach(function(e) {
                        l[e] = t[e];
                    }), t.updateTimestamp = +new Date(), E(f, t);
                } else _("remoteConfig", e);
            }).catch(function(e) {
                _("sendRequest", e);
            });
        }(), n.hasPlugin || (App = $, Page = z), module.exports = {
            App: $,
            Page: z,
            Behavior: F,
            Component: L
        }) : console.error("请设置mtj-wx-sdk.config.js文件中的appKey字段");
    };
    Q(), e.init = Q, Object.defineProperty(e, "__esModule", {
        value: !0
    });
}({});