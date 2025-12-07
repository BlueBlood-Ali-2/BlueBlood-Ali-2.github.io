(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[701], {
    4394: function(t, e, n) {
        "use strict";
        n.d(e, {
            K: function() {
                return r
            },
            k: function() {
                return i
            }
        });
        var r = function() {}
          , i = function() {}
    },
    3454: function(t, e, n) {
        "use strict";
        var r, i;
        t.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof (null == (i = n.g.process) ? void 0 : i.env) ? n.g.process : n(7663)
    },
    3412: function(t, e) {
        "use strict";
        var n, r;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var n in e)
                Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
        }(e, {
            PrefetchKind: function() {
                return n
            },
            ACTION_REFRESH: function() {
                return i
            },
            ACTION_NAVIGATE: function() {
                return o
            },
            ACTION_RESTORE: function() {
                return a
            },
            ACTION_SERVER_PATCH: function() {
                return s
            },
            ACTION_PREFETCH: function() {
                return u
            },
            ACTION_FAST_REFRESH: function() {
                return l
            },
            ACTION_SERVER_ACTION: function() {
                return c
            },
            isThenable: function() {
                return f
            }
        });
        let i = "refresh"
          , o = "navigate"
          , a = "restore"
          , s = "server-patch"
          , u = "prefetch"
          , l = "fast-refresh"
          , c = "server-action";
        function f(t) {
            return t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then
        }
        (r = n || (n = {})).AUTO = "auto",
        r.FULL = "full",
        r.TEMPORARY = "temporary",
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    6504: function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return !1
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n(282),
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    3480: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return x
            }
        });
        let r = n(8754)
          , i = n(5893)
          , o = r._(n(7294))
          , a = n(7950)
          , s = n(7387)
          , u = n(6982)
          , l = n(6921)
          , c = n(7727)
          , f = n(1973)
          , d = n(6216)
          , p = n(1722)
          , v = n(6504)
          , h = n(634)
          , m = n(3412)
          , y = new Set;
        function g(t, e, n, r, i, o) {
            if (o || (0,
            s.isLocalURL)(e)) {
                if (!r.bypassPrefetchedCheck) {
                    let i = e + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale"in t ? t.locale : void 0);
                    if (y.has(i))
                        return;
                    y.add(i)
                }
                Promise.resolve(o ? t.prefetch(e, i) : t.prefetch(e, n, r)).catch(t => {}
                )
            }
        }
        function b(t) {
            return "string" == typeof t ? t : (0,
            u.formatUrl)(t)
        }
        let x = o.default.forwardRef(function(t, e) {
            let n, r;
            let {href: u, as: y, children: x, prefetch: E=null, passHref: w, replace: T, shallow: P, scroll: A, locale: S, onClick: C, onMouseEnter: R, onTouchStart: V, legacyBehavior: M=!1, ...L} = t;
            n = x,
            M && ("string" == typeof n || "number" == typeof n) && (n = (0,
            i.jsx)("a", {
                children: n
            }));
            let k = o.default.useContext(f.RouterContext)
              , O = o.default.useContext(d.AppRouterContext)
              , j = null != k ? k : O
              , D = !k
              , I = !1 !== E
              , F = null === E ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL
              , {href: U, as: B} = o.default.useMemo( () => {
                if (!k) {
                    let t = b(u);
                    return {
                        href: t,
                        as: y ? b(y) : t
                    }
                }
                let[t,e] = (0,
                a.resolveHref)(k, u, !0);
                return {
                    href: t,
                    as: y ? (0,
                    a.resolveHref)(k, y) : e || t
                }
            }
            , [k, u, y])
              , N = o.default.useRef(U)
              , _ = o.default.useRef(B);
            M && (r = o.default.Children.only(n));
            let z = M ? r && "object" == typeof r && r.ref : e
              , [H,Y,W] = (0,
            p.useIntersection)({
                rootMargin: "200px"
            })
              , X = o.default.useCallback(t => {
                (_.current !== B || N.current !== U) && (W(),
                _.current = B,
                N.current = U),
                H(t),
                z && ("function" == typeof z ? z(t) : "object" == typeof z && (z.current = t))
            }
            , [B, z, U, W, H]);
            o.default.useEffect( () => {
                j && Y && I && g(j, U, B, {
                    locale: S
                }, {
                    kind: F
                }, D)
            }
            , [B, U, Y, S, I, null == k ? void 0 : k.locale, j, D, F]);
            let Z = {
                ref: X,
                onClick(t) {
                    M || "function" != typeof C || C(t),
                    M && r.props && "function" == typeof r.props.onClick && r.props.onClick(t),
                    j && !t.defaultPrevented && function(t, e, n, r, i, a, u, l, c) {
                        let {nodeName: f} = t.currentTarget;
                        if ("A" === f.toUpperCase() && (function(t) {
                            let e = t.currentTarget.getAttribute("target");
                            return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                        }(t) || !c && !(0,
                        s.isLocalURL)(n)))
                            return;
                        t.preventDefault();
                        let d = () => {
                            let t = null == u || u;
                            "beforePopState"in e ? e[i ? "replace" : "push"](n, r, {
                                shallow: a,
                                locale: l,
                                scroll: t
                            }) : e[i ? "replace" : "push"](r || n, {
                                scroll: t
                            })
                        }
                        ;
                        c ? o.default.startTransition(d) : d()
                    }(t, j, U, B, T, P, A, S, D)
                },
                onMouseEnter(t) {
                    M || "function" != typeof R || R(t),
                    M && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(t),
                    j && (I || !D) && g(j, U, B, {
                        locale: S,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: F
                    }, D)
                },
                onTouchStart(t) {
                    M || "function" != typeof V || V(t),
                    M && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(t),
                    j && (I || !D) && g(j, U, B, {
                        locale: S,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: F
                    }, D)
                }
            };
            if ((0,
            l.isAbsoluteUrl)(B))
                Z.href = B;
            else if (!M || w || "a" === r.type && !("href"in r.props)) {
                let t = void 0 !== S ? S : null == k ? void 0 : k.locale
                  , e = (null == k ? void 0 : k.isLocaleDomain) && (0,
                v.getDomainLocale)(B, t, null == k ? void 0 : k.locales, null == k ? void 0 : k.domainLocales);
                Z.href = e || (0,
                h.addBasePath)((0,
                c.addLocale)(B, t, null == k ? void 0 : k.defaultLocale))
            }
            return M ? o.default.cloneElement(r, Z) : (0,
            i.jsx)("a", {
                ...L,
                ...Z,
                children: n
            })
        });
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    1722: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "useIntersection", {
            enumerable: !0,
            get: function() {
                return u
            }
        });
        let r = n(7294)
          , i = n(9126)
          , o = "function" == typeof IntersectionObserver
          , a = new Map
          , s = [];
        function u(t) {
            let {rootRef: e, rootMargin: n, disabled: u} = t
              , l = u || !o
              , [c,f] = (0,
            r.useState)(!1)
              , d = (0,
            r.useRef)(null)
              , p = (0,
            r.useCallback)(t => {
                d.current = t
            }
            , []);
            return (0,
            r.useEffect)( () => {
                if (o) {
                    if (l || c)
                        return;
                    let t = d.current;
                    if (t && t.tagName)
                        return function(t, e, n) {
                            let {id: r, observer: i, elements: o} = function(t) {
                                let e;
                                let n = {
                                    root: t.root || null,
                                    margin: t.rootMargin || ""
                                }
                                  , r = s.find(t => t.root === n.root && t.margin === n.margin);
                                if (r && (e = a.get(r)))
                                    return e;
                                let i = new Map;
                                return e = {
                                    id: n,
                                    observer: new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            let e = i.get(t.target)
                                              , n = t.isIntersecting || t.intersectionRatio > 0;
                                            e && n && e(n)
                                        }
                                        )
                                    }
                                    ,t),
                                    elements: i
                                },
                                s.push(n),
                                a.set(n, e),
                                e
                            }(n);
                            return o.set(t, e),
                            i.observe(t),
                            function() {
                                if (o.delete(t),
                                i.unobserve(t),
                                0 === o.size) {
                                    i.disconnect(),
                                    a.delete(r);
                                    let t = s.findIndex(t => t.root === r.root && t.margin === r.margin);
                                    t > -1 && s.splice(t, 1)
                                }
                            }
                        }(t, t => t && f(t), {
                            root: null == e ? void 0 : e.current,
                            rootMargin: n
                        })
                } else if (!c) {
                    let t = (0,
                    i.requestIdleCallback)( () => f(!0));
                    return () => (0,
                    i.cancelIdleCallback)(t)
                }
            }
            , [l, n, e, c, d.current]),
            [p, c, (0,
            r.useCallback)( () => {
                f(!1)
            }
            , [])]
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    7663: function(t) {
        !function() {
            var e = {
                229: function(t) {
                    var e, n, r, i = t.exports = {};
                    function o() {
                        throw Error("setTimeout has not been defined")
                    }
                    function a() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function s(t) {
                        if (e === setTimeout)
                            return setTimeout(t, 0);
                        if ((e === o || !e) && setTimeout)
                            return e = setTimeout,
                            setTimeout(t, 0);
                        try {
                            return e(t, 0)
                        } catch (n) {
                            try {
                                return e.call(null, t, 0)
                            } catch (n) {
                                return e.call(this, t, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            e = "function" == typeof setTimeout ? setTimeout : o
                        } catch (t) {
                            e = o
                        }
                        try {
                            n = "function" == typeof clearTimeout ? clearTimeout : a
                        } catch (t) {
                            n = a
                        }
                    }();
                    var u = []
                      , l = !1
                      , c = -1;
                    function f() {
                        l && r && (l = !1,
                        r.length ? u = r.concat(u) : c = -1,
                        u.length && d())
                    }
                    function d() {
                        if (!l) {
                            var t = s(f);
                            l = !0;
                            for (var e = u.length; e; ) {
                                for (r = u,
                                u = []; ++c < e; )
                                    r && r[c].run();
                                c = -1,
                                e = u.length
                            }
                            r = null,
                            l = !1,
                            function(t) {
                                if (n === clearTimeout)
                                    return clearTimeout(t);
                                if ((n === a || !n) && clearTimeout)
                                    return n = clearTimeout,
                                    clearTimeout(t);
                                try {
                                    n(t)
                                } catch (e) {
                                    try {
                                        return n.call(null, t)
                                    } catch (e) {
                                        return n.call(this, t)
                                    }
                                }
                            }(t)
                        }
                    }
                    function p(t, e) {
                        this.fun = t,
                        this.array = e
                    }
                    function v() {}
                    i.nextTick = function(t) {
                        var e = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++)
                                e[n - 1] = arguments[n];
                        u.push(new p(t,e)),
                        1 !== u.length || l || s(d)
                    }
                    ,
                    p.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    i.title = "browser",
                    i.browser = !0,
                    i.env = {},
                    i.argv = [],
                    i.version = "",
                    i.versions = {},
                    i.on = v,
                    i.addListener = v,
                    i.once = v,
                    i.off = v,
                    i.removeListener = v,
                    i.removeAllListeners = v,
                    i.emit = v,
                    i.prependListener = v,
                    i.prependOnceListener = v,
                    i.listeners = function(t) {
                        return []
                    }
                    ,
                    i.binding = function(t) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    i.cwd = function() {
                        return "/"
                    }
                    ,
                    i.chdir = function(t) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    i.umask = function() {
                        return 0
                    }
                }
            }
              , n = {};
            function r(t) {
                var i = n[t];
                if (void 0 !== i)
                    return i.exports;
                var o = n[t] = {
                    exports: {}
                }
                  , a = !0;
                try {
                    e[t](o, o.exports, r),
                    a = !1
                } finally {
                    a && delete n[t]
                }
                return o.exports
            }
            r.ab = "//";
            var i = r(229);
            t.exports = i
        }()
    },
    1664: function(t, e, n) {
        t.exports = n(3480)
    },
    5421: function(t, e, n) {
        "use strict";
        n.d(e, {
            M: function() {
                return y
            }
        });
        var r = n(7582)
          , i = n(7294)
          , o = n(9304)
          , a = n(6337)
          , s = n(4454)
          , u = n(240)
          , l = n(6681)
          , c = n(6316)
          , f = function(t) {
            var e = t.children
              , n = t.initial
              , o = t.isPresent
              , a = t.onExitComplete
              , s = t.custom
              , f = t.presenceAffectsLayout
              , p = (0,
            l.h)(d)
              , v = (0,
            c.M)()
              , h = (0,
            i.useMemo)(function() {
                return {
                    id: v,
                    initial: n,
                    isPresent: o,
                    custom: s,
                    onExitComplete: function(t) {
                        var e, n;
                        p.set(t, !0);
                        try {
                            for (var i = (0,
                            r.XA)(p.values()), o = i.next(); !o.done; o = i.next())
                                if (!o.value)
                                    return
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (e)
                                    throw e.error
                            }
                        }
                        null == a || a()
                    },
                    register: function(t) {
                        return p.set(t, !1),
                        function() {
                            return p.delete(t)
                        }
                    }
                }
            }, f ? void 0 : [o]);
            return (0,
            i.useMemo)(function() {
                p.forEach(function(t, e) {
                    return p.set(e, !1)
                })
            }, [o]),
            i.useEffect(function() {
                o || p.size || null == a || a()
            }, [o]),
            i.createElement(u.O.Provider, {
                value: h
            }, e)
        };
        function d() {
            return new Map
        }
        var p = n(5364)
          , v = n(8868)
          , h = n(5411)
          , m = function(t) {
            return t.key || ""
        }
          , y = function(t) {
            var e, n = t.children, u = t.custom, l = t.initial, c = void 0 === l || l, d = t.onExitComplete, y = t.exitBeforeEnter, g = t.presenceAffectsLayout, b = void 0 === g || g, x = (0,
            r.CR)((0,
            a.N)(), 1)[0], E = (0,
            i.useContext)(p.p).forceRender;
            E && (x = E);
            var w = (0,
            s.t)()
              , T = (e = [],
            i.Children.forEach(n, function(t) {
                (0,
                i.isValidElement)(t) && e.push(t)
            }),
            e)
              , P = T
              , A = new Set
              , S = (0,
            i.useRef)(P)
              , C = (0,
            i.useRef)(new Map).current
              , R = (0,
            i.useRef)(!0);
            if ((0,
            v.L)(function() {
                R.current = !1,
                function(t, e) {
                    t.forEach(function(t) {
                        var n = m(t);
                        e.set(n, t)
                    })
                }(T, C),
                S.current = P
            }),
            (0,
            h.z)(function() {
                R.current = !0,
                C.clear(),
                A.clear()
            }),
            R.current)
                return i.createElement(i.Fragment, null, P.map(function(t) {
                    return i.createElement(f, {
                        key: m(t),
                        isPresent: !0,
                        initial: !!c && void 0,
                        presenceAffectsLayout: b
                    }, t)
                }));
            P = (0,
            r.ev)([], (0,
            r.CR)(P), !1);
            for (var V = S.current.map(m), M = T.map(m), L = V.length, k = 0; k < L; k++) {
                var O = V[k];
                -1 === M.indexOf(O) && A.add(O)
            }
            return y && A.size && (P = []),
            A.forEach(function(t) {
                if (-1 === M.indexOf(t)) {
                    var e = C.get(t);
                    if (e) {
                        var n = V.indexOf(t);
                        P.splice(n, 0, i.createElement(f, {
                            key: m(e),
                            isPresent: !1,
                            onExitComplete: function() {
                                C.delete(t),
                                A.delete(t);
                                var e = S.current.findIndex(function(e) {
                                    return e.key === t
                                });
                                if (S.current.splice(e, 1),
                                !A.size) {
                                    if (S.current = T,
                                    !1 === w.current)
                                        return;
                                    x(),
                                    d && d()
                                }
                            },
                            custom: u,
                            presenceAffectsLayout: b
                        }, e))
                    }
                }
            }),
            P = P.map(function(t) {
                var e = t.key;
                return A.has(e) ? t : i.createElement(f, {
                    key: m(t),
                    isPresent: !0,
                    presenceAffectsLayout: b
                }, t)
            }),
            "production" !== o.O && y && P.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),
            i.createElement(i.Fragment, null, A.size ? P : P.map(function(t) {
                return (0,
                i.cloneElement)(t)
            }))
        }
    },
    116: function(t, e, n) {
        "use strict";
        n.d(e, {
            s: function() {
                return v
            }
        });
        var r = n(4394)
          , i = n(7294)
          , o = n(6681)
          , a = n(7582)
          , s = n(5364)
          , u = (0,
        i.createContext)(null)
          , l = n(6337)
          , c = function(t) {
            return !t.isLayoutDirty && t.willUpdate(!1)
        }
          , f = function(t) {
            return !0 === t
        }
          , d = function(t) {
            var e, n, r, o, d, p, v = t.children, h = t.id, m = t.inheritId, y = t.inherit, g = void 0 === y || y;
            void 0 !== m && (g = m);
            var b = (0,
            i.useContext)(s.p)
              , x = (0,
            i.useContext)(u)
              , E = (0,
            a.CR)((0,
            l.N)(), 2)
              , w = E[0]
              , T = E[1]
              , P = (0,
            i.useRef)(null)
              , A = null !== (d = b.id) && void 0 !== d ? d : x;
            null === P.current && ((f(!0 === (o = g)) || "id" === o) && A && (h = h ? A + "-" + h : A),
            P.current = {
                id: h,
                group: f(g) && null !== (p = null == b ? void 0 : b.group) && void 0 !== p ? p : (e = new Set,
                n = new WeakMap,
                {
                    add: function(t) {
                        e.add(t),
                        n.set(t, t.addEventListener("willUpdate", r))
                    },
                    remove: function(t) {
                        var i;
                        e.delete(t),
                        null === (i = n.get(t)) || void 0 === i || i(),
                        n.delete(t),
                        r()
                    },
                    dirty: r = function() {
                        return e.forEach(c)
                    }
                })
            });
            var S = (0,
            i.useMemo)(function() {
                return (0,
                a.pi)((0,
                a.pi)({}, P.current), {
                    forceRender: w
                })
            }, [T]);
            return i.createElement(s.p.Provider, {
                value: S
            }, v)
        }
          , p = 0
          , v = function(t) {
            var e = t.children;
            return i.useEffect(function() {
                (0,
                r.K)(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
            }, []),
            i.createElement(d, {
                id: (0,
                o.h)(function() {
                    return "asl-".concat(p++)
                })
            }, e)
        }
    },
    5364: function(t, e, n) {
        "use strict";
        n.d(e, {
            p: function() {
                return r
            }
        });
        var r = (0,
        n(7294).createContext)({})
    },
    240: function(t, e, n) {
        "use strict";
        n.d(e, {
            O: function() {
                return r
            }
        });
        var r = (0,
        n(7294).createContext)(null)
    },
    3811: function(t, e, n) {
        "use strict";
        n.d(e, {
            E: function() {
                return iY
            }
        });
        var r, i, o, a, s, u = n(7582), l = n(7294), c = n(9304), f = function(t) {
            return {
                isEnabled: function(e) {
                    return t.some(function(t) {
                        return !!e[t]
                    })
                }
            }
        }, d = {
            measureLayout: f(["layout", "layoutId", "drag"]),
            animation: f(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
            exit: f(["exit"]),
            drag: f(["drag", "dragControls"]),
            focus: f(["whileFocus"]),
            hover: f(["whileHover", "onHoverStart", "onHoverEnd"]),
            tap: f(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
            pan: f(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
            inView: f(["whileInView", "onViewportEnter", "onViewportLeave"])
        }, p = n(4394), v = (0,
        l.createContext)({
            strict: !1
        }), h = Object.keys(d), m = h.length, y = (0,
        l.createContext)({
            transformPagePoint: function(t) {
                return t
            },
            isStatic: !1,
            reducedMotion: "never"
        }), g = (0,
        l.createContext)({}), b = n(240), x = n(8868), E = n(1741), w = {
            current: null
        }, T = !1;
        function P(t) {
            return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function A(t) {
            return Array.isArray(t)
        }
        function S(t) {
            return "string" == typeof t || A(t)
        }
        function C(t, e, n, r, i) {
            var o;
            return void 0 === r && (r = {}),
            void 0 === i && (i = {}),
            "function" == typeof e && (e = e(null != n ? n : t.custom, r, i)),
            "string" == typeof e && (e = null === (o = t.variants) || void 0 === o ? void 0 : o[e]),
            "function" == typeof e && (e = e(null != n ? n : t.custom, r, i)),
            e
        }
        function R(t, e, n) {
            var r, i, o = t.getProps();
            return C(o, e, null != n ? n : o.custom, (r = {},
            t.forEachValue(function(t, e) {
                return r[e] = t.get()
            }),
            r), (i = {},
            t.forEachValue(function(t, e) {
                return i[e] = t.getVelocity()
            }),
            i))
        }
        function V(t) {
            var e;
            return "function" == typeof (null === (e = t.animate) || void 0 === e ? void 0 : e.start) || S(t.initial) || S(t.animate) || S(t.whileHover) || S(t.whileDrag) || S(t.whileTap) || S(t.whileFocus) || S(t.exit)
        }
        function M(t) {
            return !!(V(t) || t.variants)
        }
        function L(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        var k = n(6681)
          , O = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        }
          , j = 1
          , D = n(5364)
          , I = (0,
        l.createContext)({})
          , F = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0,
            u.ZT)(e, t),
            e.prototype.getSnapshotBeforeUpdate = function() {
                return this.updateProps(),
                null
            }
            ,
            e.prototype.componentDidUpdate = function() {}
            ,
            e.prototype.updateProps = function() {
                var t = this.props
                  , e = t.visualElement
                  , n = t.props;
                e && e.setProps(n)
            }
            ,
            e.prototype.render = function() {
                return this.props.children
            }
            ,
            e
        }(l.Component)
          , U = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];
        function B(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (U.indexOf(t) > -1 || /[A-Z]/.test(t))
                return !0;
            return !1
        }
        var N = {}
          , _ = ["", "X", "Y", "Z"]
          , z = ["transformPerspective", "x", "y", "z"];
        function H(t, e) {
            return z.indexOf(t) - z.indexOf(e)
        }
        ["translate", "scale", "rotate", "skew"].forEach(function(t) {
            return _.forEach(function(e) {
                return z.push(t + e)
            })
        });
        var Y = new Set(z);
        function W(t) {
            return Y.has(t)
        }
        var X = new Set(["originX", "originY", "originZ"]);
        function Z(t, e) {
            var n = e.layout
              , r = e.layoutId;
            return W(t) || X.has(t) || (n || void 0 !== r) && (!!N[t] || "opacity" === t)
        }
        var q = function(t) {
            return !!(null !== t && "object" == typeof t && t.getVelocity)
        }
          , K = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        };
        function G(t) {
            return t.startsWith("--")
        }
        let $ = (t, e) => n => Math.max(Math.min(n, e), t)
          , J = t => t % 1 ? Number(t.toFixed(5)) : t
          , Q = /(-)?([\d]*\.?[\d])+/g
          , tt = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi
          , te = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
        function tn(t) {
            return "string" == typeof t
        }
        let tr = t => ({
            test: e => tn(e) && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        })
          , ti = tr("deg")
          , to = tr("%")
          , ta = tr("px")
          , ts = tr("vh")
          , tu = tr("vw")
          , tl = Object.assign(Object.assign({}, to), {
            parse: t => to.parse(t) / 100,
            transform: t => to.transform(100 * t)
        })
          , tc = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        }
          , tf = Object.assign(Object.assign({}, tc), {
            transform: $(0, 1)
        })
          , td = Object.assign(Object.assign({}, tc), {
            default: 1
        });
        var tp = (0,
        u.pi)((0,
        u.pi)({}, tc), {
            transform: Math.round
        })
          , tv = {
            borderWidth: ta,
            borderTopWidth: ta,
            borderRightWidth: ta,
            borderBottomWidth: ta,
            borderLeftWidth: ta,
            borderRadius: ta,
            radius: ta,
            borderTopLeftRadius: ta,
            borderTopRightRadius: ta,
            borderBottomRightRadius: ta,
            borderBottomLeftRadius: ta,
            width: ta,
            maxWidth: ta,
            height: ta,
            maxHeight: ta,
            size: ta,
            top: ta,
            right: ta,
            bottom: ta,
            left: ta,
            padding: ta,
            paddingTop: ta,
            paddingRight: ta,
            paddingBottom: ta,
            paddingLeft: ta,
            margin: ta,
            marginTop: ta,
            marginRight: ta,
            marginBottom: ta,
            marginLeft: ta,
            rotate: ti,
            rotateX: ti,
            rotateY: ti,
            rotateZ: ti,
            scale: td,
            scaleX: td,
            scaleY: td,
            scaleZ: td,
            skew: ti,
            skewX: ti,
            skewY: ti,
            distance: ta,
            translateX: ta,
            translateY: ta,
            translateZ: ta,
            x: ta,
            y: ta,
            z: ta,
            perspective: ta,
            transformPerspective: ta,
            opacity: tf,
            originX: tl,
            originY: tl,
            originZ: ta,
            zIndex: tp,
            fillOpacity: tf,
            strokeOpacity: tf,
            numOctaves: tp
        };
        function th(t, e, n, r) {
            var i, o, a, s, u = t.style, l = t.vars, c = t.transform, f = t.transformKeys, d = t.transformOrigin;
            f.length = 0;
            var p = !1
              , v = !1
              , h = !0;
            for (var m in e) {
                var y = e[m];
                if (G(m)) {
                    l[m] = y;
                    continue
                }
                var g = tv[m]
                  , b = g && "number" == typeof y ? g.transform(y) : y;
                if (W(m)) {
                    if (p = !0,
                    c[m] = b,
                    f.push(m),
                    !h)
                        continue;
                    y !== (null !== (s = g.default) && void 0 !== s ? s : 0) && (h = !1)
                } else
                    X.has(m) ? (d[m] = b,
                    v = !0) : u[m] = b
            }
            p ? u.transform = function(t, e, n, r) {
                var i = t.transform
                  , o = t.transformKeys
                  , a = e.enableHardwareAcceleration
                  , s = e.allowTransformNone
                  , u = "";
                o.sort(H);
                for (var l = !1, c = o.length, f = 0; f < c; f++) {
                    var d = o[f];
                    u += "".concat(K[d] || d, "(").concat(i[d], ") "),
                    "z" === d && (l = !0)
                }
                return !l && (void 0 === a || a) ? u += "translateZ(0)" : u = u.trim(),
                r ? u = r(i, n ? "" : u) : (void 0 === s || s) && n && (u = "none"),
                u
            }(t, n, h, r) : r ? u.transform = r({}, "") : !e.transform && u.transform && (u.transform = "none"),
            v && (u.transformOrigin = (i = d.originX,
            o = d.originY,
            a = d.originZ,
            "".concat(void 0 === i ? "50%" : i, " ").concat(void 0 === o ? "50%" : o, " ").concat(void 0 === a ? 0 : a)))
        }
        var tm = function() {
            return {
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            }
        };
        function ty(t, e, n) {
            for (var r in e)
                q(e[r]) || Z(r, n) || (t[r] = e[r])
        }
        var tg = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);
        function tb(t) {
            return tg.has(t)
        }
        var tx = function(t) {
            return !tb(t)
        };
        try {
            (r = require("@emotion/is-prop-valid").default) && (tx = function(t) {
                return t.startsWith("on") ? !tb(t) : r(t)
            }
            )
        } catch (t) {}
        function tE(t, e, n) {
            return "string" == typeof t ? t : ta.transform(e + n * t)
        }
        var tw = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , tT = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function tP(t, e, n, r) {
            var i, o, a, s, l, c, f, d, p = e.attrX, v = e.attrY, h = e.originX, m = e.originY, y = e.pathLength, g = e.pathSpacing, b = e.pathOffset;
            th(t, (0,
            u._T)(e, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, r),
            t.attrs = t.style,
            t.style = {};
            var x = t.attrs
              , E = t.style
              , w = t.dimensions;
            x.transform && (w && (E.transform = x.transform),
            delete x.transform),
            w && (void 0 !== h || void 0 !== m || E.transform) && (E.transformOrigin = (i = tE(void 0 !== h ? h : .5, w.x, w.width),
            o = tE(void 0 !== m ? m : .5, w.y, w.height),
            "".concat(i, " ").concat(o))),
            void 0 !== p && (x.x = p),
            void 0 !== v && (x.y = v),
            void 0 !== y && (l = !1,
            void 0 === (a = void 0 === g ? 1 : g) && (a = 1),
            void 0 === (s = void 0 === b ? 0 : b) && (s = 0),
            void 0 === l && (l = !0),
            x.pathLength = 1,
            x[(c = l ? tw : tT).offset] = ta.transform(-s),
            f = ta.transform(y),
            d = ta.transform(a),
            x[c.array] = "".concat(f, " ").concat(d))
        }
        var tA = function() {
            return (0,
            u.pi)((0,
            u.pi)({}, tm()), {
                attrs: {}
            })
        }
          , tS = /([a-z])([A-Z])/g
          , tC = function(t) {
            return t.replace(tS, "$1-$2").toLowerCase()
        };
        function tR(t, e, n, r) {
            var i = e.style
              , o = e.vars;
            for (var a in Object.assign(t.style, i, r && r.getProjectionStyles(n)),
            o)
                t.style.setProperty(a, o[a])
        }
        var tV = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);
        function tM(t, e, n, r) {
            for (var i in tR(t, e, void 0, r),
            e.attrs)
                t.setAttribute(tV.has(i) ? i : tC(i), e.attrs[i])
        }
        function tL(t) {
            var e = t.style
              , n = {};
            for (var r in e)
                (q(e[r]) || Z(r, t)) && (n[r] = e[r]);
            return n
        }
        function tk(t) {
            var e = tL(t);
            for (var n in t)
                q(t[n]) && (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
            return e
        }
        function tO(t) {
            return "object" == typeof t && "function" == typeof t.start
        }
        var tj = function(t) {
            return Array.isArray(t)
        }
          , tD = function(t) {
            return tj(t) ? t[t.length - 1] || 0 : t
        };
        function tI(t) {
            var e = q(t) ? t.get() : t;
            return e && "object" == typeof e && e.mix && e.toValue ? e.toValue() : e
        }
        function tF(t, e, n, r) {
            var i = t.scrapeMotionValuesFromProps
              , o = t.createRenderState
              , a = t.onMount
              , s = {
                latestValues: function(t, e, n, r) {
                    var i = {}
                      , o = (null == n ? void 0 : n.initial) === !1
                      , a = r(t);
                    for (var s in a)
                        i[s] = tI(a[s]);
                    var l = t.initial
                      , c = t.animate
                      , f = V(t)
                      , d = M(t);
                    e && d && !f && !1 !== t.inherit && (null != l || (l = e.initial),
                    null != c || (c = e.animate));
                    var p = o || !1 === l
                      , v = p ? c : l;
                    return v && "boolean" != typeof v && !tO(v) && (Array.isArray(v) ? v : [v]).forEach(function(e) {
                        var n = C(t, e);
                        if (n) {
                            var r = n.transitionEnd;
                            n.transition;
                            var o = (0,
                            u._T)(n, ["transitionEnd", "transition"]);
                            for (var a in o) {
                                var s = o[a];
                                if (Array.isArray(s)) {
                                    var l = p ? s.length - 1 : 0;
                                    s = s[l]
                                }
                                null !== s && (i[a] = s)
                            }
                            for (var a in r)
                                i[a] = r[a]
                        }
                    }),
                    i
                }(e, n, r, i),
                renderState: o()
            };
            return a && (s.mount = function(t) {
                return a(e, t, s)
            }
            ),
            s
        }
        var tU = function(t) {
            return function(e, n) {
                var r = (0,
                l.useContext)(g)
                  , i = (0,
                l.useContext)(b.O);
                return n ? tF(t, e, r, i) : (0,
                k.h)(function() {
                    return tF(t, e, r, i)
                })
            }
        }
          , tB = {
            useVisualState: tU({
                scrapeMotionValuesFromProps: tk,
                createRenderState: tA,
                onMount: function(t, e, n) {
                    var r = n.renderState
                      , i = n.latestValues;
                    try {
                        r.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                    } catch (t) {
                        r.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    tP(r, i, {
                        enableHardwareAcceleration: !1
                    }, t.transformTemplate),
                    tM(e, r)
                }
            })
        }
          , tN = {
            useVisualState: tU({
                scrapeMotionValuesFromProps: tL,
                createRenderState: tm
            })
        };
        function t_(t, e, n, r) {
            return void 0 === r && (r = {
                passive: !0
            }),
            t.addEventListener(e, n, r),
            function() {
                return t.removeEventListener(e, n)
            }
        }
        function tz(t, e, n, r) {
            (0,
            l.useEffect)(function() {
                var i = t.current;
                if (n && i)
                    return t_(i, e, n, r)
            }, [t, e, n, r])
        }
        function tH(t) {
            return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
        }
        (i = a || (a = {})).Animate = "animate",
        i.Hover = "whileHover",
        i.Tap = "whileTap",
        i.Drag = "whileDrag",
        i.Focus = "whileFocus",
        i.InView = "whileInView",
        i.Exit = "exit";
        var tY = {
            pageX: 0,
            pageY: 0
        };
        function tW(t, e) {
            var n, r, i;
            return void 0 === e && (e = "page"),
            {
                point: t.touches ? (void 0 === (n = e) && (n = "page"),
                {
                    x: (r = t.touches[0] || t.changedTouches[0] || tY)[n + "X"],
                    y: r[n + "Y"]
                }) : (void 0 === (i = e) && (i = "page"),
                {
                    x: t[i + "X"],
                    y: t[i + "Y"]
                })
            }
        }
        var tX = function(t, e) {
            void 0 === e && (e = !1);
            var n = function(e) {
                return t(e, tW(e))
            };
            return e ? function(t) {
                var e = t instanceof MouseEvent;
                (!e || e && 0 === t.button) && n(t)
            }
            : n
        }
          , tZ = {
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointercancel: "mousecancel",
            pointerover: "mouseover",
            pointerout: "mouseout",
            pointerenter: "mouseenter",
            pointerleave: "mouseleave"
        }
          , tq = {
            pointerdown: "touchstart",
            pointermove: "touchmove",
            pointerup: "touchend",
            pointercancel: "touchcancel"
        };
        function tK(t) {
            if (E.j && null === window.onpointerdown)
                ;
            else if (E.j && null === window.ontouchstart)
                return tq[t];
            else if (E.j && null === window.onmousedown)
                return tZ[t];
            return t
        }
        function tG(t, e, n, r) {
            return t_(t, tK(e), tX(n, "pointerdown" === e), r)
        }
        function t$(t, e, n, r) {
            return tz(t, tK(e), n && tX(n, "pointerdown" === e), r)
        }
        function tJ(t) {
            var e = null;
            return function() {
                return null === e && (e = t,
                function() {
                    e = null
                }
                )
            }
        }
        var tQ = tJ("dragHorizontal")
          , t0 = tJ("dragVertical");
        function t1(t) {
            var e = !1;
            if ("y" === t)
                e = t0();
            else if ("x" === t)
                e = tQ();
            else {
                var n = tQ()
                  , r = t0();
                n && r ? e = function() {
                    n(),
                    r()
                }
                : (n && n(),
                r && r())
            }
            return e
        }
        function t2() {
            var t = t1(!0);
            return !t || (t(),
            !1)
        }
        function t5(t, e, n) {
            return function(r, i) {
                var o;
                !tH(r) || t2() || (null === (o = t.animationState) || void 0 === o || o.setActive(a.Hover, e),
                null == n || n(r, i))
            }
        }
        var t3 = function(t, e) {
            return !!e && (t === e || t3(t, e.parentElement))
        }
          , t4 = n(5411);
        let t6 = (t, e) => n => e(t(n))
          , t7 = (...t) => t.reduce(t6);
        var t8 = new Set
          , t9 = new WeakMap
          , et = new WeakMap
          , ee = function(t) {
            var e;
            null === (e = t9.get(t.target)) || void 0 === e || e(t)
        }
          , en = function(t) {
            t.forEach(ee)
        }
          , er = {
            some: 0,
            all: 1
        }
          , ei = function(t) {
            return function(e) {
                return t(e),
                null
            }
        }
          , eo = {
            inView: ei(function(t) {
                var e = t.visualElement
                  , n = t.whileInView
                  , r = t.onViewportEnter
                  , i = t.onViewportLeave
                  , o = t.viewport
                  , s = void 0 === o ? {} : o
                  , f = (0,
                l.useRef)({
                    hasEnteredView: !1,
                    isInView: !1
                })
                  , d = !!(n || r || i);
                s.once && f.current.hasEnteredView && (d = !1),
                ("undefined" == typeof IntersectionObserver ? function(t, e, n, r) {
                    var i = r.fallback
                      , o = void 0 === i || i;
                    (0,
                    l.useEffect)(function() {
                        if (t && o) {
                            if ("production" !== c.O) {
                                var r, i;
                                r = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.",
                                t8.has(r) || (console.warn(r),
                                i && console.warn(i),
                                t8.add(r))
                            }
                            requestAnimationFrame(function() {
                                e.hasEnteredView = !0;
                                var t, r = n.getProps().onViewportEnter;
                                null == r || r(null),
                                null === (t = n.animationState) || void 0 === t || t.setActive(a.InView, !0)
                            })
                        }
                    }, [t])
                }
                : function(t, e, n, r) {
                    var i = r.root
                      , o = r.margin
                      , s = r.amount
                      , c = void 0 === s ? "some" : s
                      , f = r.once;
                    (0,
                    l.useEffect)(function() {
                        if (t) {
                            var r, s, l, d, p, v, h, m = {
                                root: null == i ? void 0 : i.current,
                                rootMargin: o,
                                threshold: "number" == typeof c ? c : er[c]
                            };
                            return r = n.getInstance(),
                            s = m.root,
                            l = (0,
                            u._T)(m, ["root"]),
                            d = s || document,
                            et.has(d) || et.set(d, {}),
                            (p = et.get(d))[v = JSON.stringify(l)] || (p[v] = new IntersectionObserver(en,(0,
                            u.pi)({
                                root: s
                            }, l))),
                            h = p[v],
                            t9.set(r, function(t) {
                                var r, i = t.isIntersecting;
                                if (e.isInView !== i) {
                                    if (e.isInView = i,
                                    f && !i && e.hasEnteredView)
                                        return;
                                    i && (e.hasEnteredView = !0),
                                    null === (r = n.animationState) || void 0 === r || r.setActive(a.InView, i);
                                    var o = n.getProps()
                                      , s = i ? o.onViewportEnter : o.onViewportLeave;
                                    null == s || s(t)
                                }
                            }),
                            h.observe(r),
                            function() {
                                t9.delete(r),
                                h.unobserve(r)
                            }
                        }
                    }, [t, i, o, c])
                }
                )(d, f.current, e, s)
            }),
            tap: ei(function(t) {
                var e = t.onTap
                  , n = t.onTapStart
                  , r = t.onTapCancel
                  , i = t.whileTap
                  , o = t.visualElement
                  , s = e || n || r || i
                  , u = (0,
                l.useRef)(!1)
                  , c = (0,
                l.useRef)(null)
                  , f = {
                    passive: !(n || e || r || m)
                };
                function d() {
                    var t;
                    null === (t = c.current) || void 0 === t || t.call(c),
                    c.current = null
                }
                function p() {
                    var t;
                    return d(),
                    u.current = !1,
                    null === (t = o.animationState) || void 0 === t || t.setActive(a.Tap, !1),
                    !t2()
                }
                function v(t, n) {
                    p() && (t3(o.getInstance(), t.target) ? null == e || e(t, n) : null == r || r(t, n))
                }
                function h(t, e) {
                    p() && (null == r || r(t, e))
                }
                function m(t, e) {
                    var r;
                    d(),
                    u.current || (u.current = !0,
                    c.current = t7(tG(window, "pointerup", v, f), tG(window, "pointercancel", h, f)),
                    null === (r = o.animationState) || void 0 === r || r.setActive(a.Tap, !0),
                    null == n || n(t, e))
                }
                t$(o, "pointerdown", s ? m : void 0, f),
                (0,
                t4.z)(d)
            }),
            focus: ei(function(t) {
                var e = t.whileFocus
                  , n = t.visualElement;
                tz(n, "focus", e ? function() {
                    var t;
                    null === (t = n.animationState) || void 0 === t || t.setActive(a.Focus, !0)
                }
                : void 0),
                tz(n, "blur", e ? function() {
                    var t;
                    null === (t = n.animationState) || void 0 === t || t.setActive(a.Focus, !1)
                }
                : void 0)
            }),
            hover: ei(function(t) {
                var e = t.onHoverStart
                  , n = t.onHoverEnd
                  , r = t.whileHover
                  , i = t.visualElement;
                t$(i, "pointerenter", e || r ? t5(i, !0, e) : void 0, {
                    passive: !e
                }),
                t$(i, "pointerleave", n || r ? t5(i, !1, n) : void 0, {
                    passive: !n
                })
            })
        }
          , ea = n(6316);
        function es() {
            var t = (0,
            l.useContext)(b.O);
            if (null === t)
                return [!0, null];
            var e = t.isPresent
              , n = t.onExitComplete
              , r = t.register
              , i = (0,
            ea.M)();
            return (0,
            l.useEffect)(function() {
                return r(i)
            }, []),
            !e && n ? [!1, function() {
                return null == n ? void 0 : n(i)
            }
            ] : [!0]
        }
        function eu(t, e) {
            if (!Array.isArray(e))
                return !1;
            var n = e.length;
            if (n !== t.length)
                return !1;
            for (var r = 0; r < n; r++)
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        let el = (t, e, n) => Math.min(Math.max(n, t), e);
        function ec(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let ef = ["duration", "bounce"]
          , ed = ["stiffness", "damping", "mass"];
        function ep(t, e) {
            return e.some(e => void 0 !== t[e])
        }
        function ev(t) {
            var {from: e=0, to: n=1, restSpeed: r=2, restDelta: i} = t
              , o = (0,
            u._T)(t, ["from", "to", "restSpeed", "restDelta"]);
            let a = {
                done: !1,
                value: e
            }
              , {stiffness: s, damping: l, mass: c, velocity: f, duration: d, isResolvedFromDuration: v} = function(t) {
                let e = Object.assign({
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1
                }, t);
                if (!ep(t, ed) && ep(t, ef)) {
                    let n = function({duration: t=800, bounce: e=.25, velocity: n=0, mass: r=1}) {
                        let i, o;
                        (0,
                        p.K)(t <= 1e4, "Spring duration must be 10 seconds or less");
                        let a = 1 - e;
                        a = el(.05, 1, a),
                        t = el(.01, 10, t / 1e3),
                        a < 1 ? (i = e => {
                            let r = e * a
                              , i = r * t;
                            return .001 - (r - n) / ec(e, a) * Math.exp(-i)
                        }
                        ,
                        o = e => {
                            let r = e * a * t
                              , o = Math.pow(a, 2) * Math.pow(e, 2) * t
                              , s = ec(Math.pow(e, 2), a);
                            return (r * n + n - o) * Math.exp(-r) * (-i(e) + .001 > 0 ? -1 : 1) / s
                        }
                        ) : (i = e => -.001 + Math.exp(-e * t) * ((e - n) * t + 1),
                        o = e => t * t * (n - e) * Math.exp(-e * t));
                        let s = function(t, e, n) {
                            let r = n;
                            for (let n = 1; n < 12; n++)
                                r -= t(r) / e(r);
                            return r
                        }(i, o, 5 / t);
                        if (t *= 1e3,
                        isNaN(s))
                            return {
                                stiffness: 100,
                                damping: 10,
                                duration: t
                            };
                        {
                            let e = Math.pow(s, 2) * r;
                            return {
                                stiffness: e,
                                damping: 2 * a * Math.sqrt(r * e),
                                duration: t
                            }
                        }
                    }(t);
                    (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                        velocity: 0,
                        mass: 1
                    })).isResolvedFromDuration = !0
                }
                return e
            }(o)
              , h = eh
              , m = eh;
            function y() {
                let t = f ? -(f / 1e3) : 0
                  , r = n - e
                  , o = l / (2 * Math.sqrt(s * c))
                  , a = Math.sqrt(s / c) / 1e3;
                if (void 0 === i && (i = Math.min(Math.abs(n - e) / 100, .4)),
                o < 1) {
                    let e = ec(a, o);
                    h = i => n - Math.exp(-o * a * i) * ((t + o * a * r) / e * Math.sin(e * i) + r * Math.cos(e * i)),
                    m = n => {
                        let i = Math.exp(-o * a * n);
                        return o * a * i * (Math.sin(e * n) * (t + o * a * r) / e + r * Math.cos(e * n)) - i * (Math.cos(e * n) * (t + o * a * r) - e * r * Math.sin(e * n))
                    }
                } else if (1 === o)
                    h = e => n - Math.exp(-a * e) * (r + (t + a * r) * e);
                else {
                    let e = a * Math.sqrt(o * o - 1);
                    h = i => {
                        let s = Math.exp(-o * a * i)
                          , u = Math.min(e * i, 300);
                        return n - s * ((t + o * a * r) * Math.sinh(u) + e * r * Math.cosh(u)) / e
                    }
                }
            }
            return y(),
            {
                next: t => {
                    let e = h(t);
                    if (v)
                        a.done = t >= d;
                    else {
                        let o = 1e3 * m(t)
                          , s = Math.abs(n - e) <= i;
                        a.done = Math.abs(o) <= r && s
                    }
                    return a.value = a.done ? n : e,
                    a
                }
                ,
                flipTarget: () => {
                    f = -f,
                    [e,n] = [n, e],
                    y()
                }
            }
        }
        ev.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
        let eh = t => 0
          , em = (t, e, n) => {
            let r = e - t;
            return 0 === r ? 1 : (n - t) / r
        }
          , ey = (t, e, n) => -n * t + n * e + t
          , eg = (t, e) => n => !!(tn(n) && te.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e))
          , eb = (t, e, n) => r => {
            if (!tn(r))
                return r;
            let[i,o,a,s] = r.match(Q);
            return {
                [t]: parseFloat(i),
                [e]: parseFloat(o),
                [n]: parseFloat(a),
                alpha: void 0 !== s ? parseFloat(s) : 1
            }
        }
          , ex = $(0, 255)
          , eE = Object.assign(Object.assign({}, tc), {
            transform: t => Math.round(ex(t))
        })
          , ew = {
            test: eg("rgb", "red"),
            parse: eb("red", "green", "blue"),
            transform: ({red: t, green: e, blue: n, alpha: r=1}) => "rgba(" + eE.transform(t) + ", " + eE.transform(e) + ", " + eE.transform(n) + ", " + J(tf.transform(r)) + ")"
        }
          , eT = {
            test: eg("#"),
            parse: function(t) {
                let e = ""
                  , n = ""
                  , r = ""
                  , i = "";
                return t.length > 5 ? (e = t.substr(1, 2),
                n = t.substr(3, 2),
                r = t.substr(5, 2),
                i = t.substr(7, 2)) : (e = t.substr(1, 1),
                n = t.substr(2, 1),
                r = t.substr(3, 1),
                i = t.substr(4, 1),
                e += e,
                n += n,
                r += r,
                i += i),
                {
                    red: parseInt(e, 16),
                    green: parseInt(n, 16),
                    blue: parseInt(r, 16),
                    alpha: i ? parseInt(i, 16) / 255 : 1
                }
            },
            transform: ew.transform
        }
          , eP = {
            test: eg("hsl", "hue"),
            parse: eb("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: n, alpha: r=1}) => "hsla(" + Math.round(t) + ", " + to.transform(J(e)) + ", " + to.transform(J(n)) + ", " + J(tf.transform(r)) + ")"
        };
        function eA(t, e, n) {
            return (n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6) ? t + (e - t) * 6 * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
        }
        function eS({hue: t, saturation: e, lightness: n, alpha: r}) {
            t /= 360,
            n /= 100;
            let i = 0
              , o = 0
              , a = 0;
            if (e /= 100) {
                let r = n < .5 ? n * (1 + e) : n + e - n * e
                  , s = 2 * n - r;
                i = eA(s, r, t + 1 / 3),
                o = eA(s, r, t),
                a = eA(s, r, t - 1 / 3)
            } else
                i = o = a = n;
            return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: r
            }
        }
        let eC = (t, e, n) => {
            let r = t * t;
            return Math.sqrt(Math.max(0, n * (e * e - r) + r))
        }
          , eR = [eT, ew, eP]
          , eV = t => eR.find(e => e.test(t))
          , eM = t => `'${t}' is not an animatable color. Use the equivalent color code instead.`
          , eL = (t, e) => {
            let n = eV(t)
              , r = eV(e);
            (0,
            p.k)(!!n, eM(t)),
            (0,
            p.k)(!!r, eM(e));
            let i = n.parse(t)
              , o = r.parse(e);
            n === eP && (i = eS(i),
            n = ew),
            r === eP && (o = eS(o),
            r = ew);
            let a = Object.assign({}, i);
            return t => {
                for (let e in a)
                    "alpha" !== e && (a[e] = eC(i[e], o[e], t));
                return a.alpha = ey(i.alpha, o.alpha, t),
                n.transform(a)
            }
        }
          , ek = {
            test: t => ew.test(t) || eT.test(t) || eP.test(t),
            parse: t => ew.test(t) ? ew.parse(t) : eP.test(t) ? eP.parse(t) : eT.parse(t),
            transform: t => tn(t) ? t : t.hasOwnProperty("red") ? ew.transform(t) : eP.transform(t)
        }
          , eO = "${c}"
          , ej = "${n}";
        function eD(t) {
            "number" == typeof t && (t = `${t}`);
            let e = []
              , n = 0
              , r = t.match(tt);
            r && (n = r.length,
            t = t.replace(tt, eO),
            e.push(...r.map(ek.parse)));
            let i = t.match(Q);
            return i && (t = t.replace(Q, ej),
            e.push(...i.map(tc.parse))),
            {
                values: e,
                numColors: n,
                tokenised: t
            }
        }
        function eI(t) {
            return eD(t).values
        }
        function eF(t) {
            let {values: e, numColors: n, tokenised: r} = eD(t)
              , i = e.length;
            return t => {
                let e = r;
                for (let r = 0; r < i; r++)
                    e = e.replace(r < n ? eO : ej, r < n ? ek.transform(t[r]) : J(t[r]));
                return e
            }
        }
        let eU = t => "number" == typeof t ? 0 : t
          , eB = {
            test: function(t) {
                var e, n, r, i;
                return isNaN(t) && tn(t) && (null !== (n = null === (e = t.match(Q)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) + (null !== (i = null === (r = t.match(tt)) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0) > 0
            },
            parse: eI,
            createTransformer: eF,
            getAnimatableNone: function(t) {
                let e = eI(t);
                return eF(t)(e.map(eU))
            }
        }
          , eN = t => "number" == typeof t;
        function e_(t, e) {
            return eN(t) ? n => ey(t, e, n) : ek.test(t) ? eL(t, e) : eW(t, e)
        }
        let ez = (t, e) => {
            let n = [...t]
              , r = n.length
              , i = t.map( (t, n) => e_(t, e[n]));
            return t => {
                for (let e = 0; e < r; e++)
                    n[e] = i[e](t);
                return n
            }
        }
          , eH = (t, e) => {
            let n = Object.assign(Object.assign({}, t), e)
              , r = {};
            for (let i in n)
                void 0 !== t[i] && void 0 !== e[i] && (r[i] = e_(t[i], e[i]));
            return t => {
                for (let e in r)
                    n[e] = r[e](t);
                return n
            }
        }
        ;
        function eY(t) {
            let e = eB.parse(t)
              , n = e.length
              , r = 0
              , i = 0
              , o = 0;
            for (let t = 0; t < n; t++)
                r || "number" == typeof e[t] ? r++ : void 0 !== e[t].hue ? o++ : i++;
            return {
                parsed: e,
                numNumbers: r,
                numRGB: i,
                numHSL: o
            }
        }
        let eW = (t, e) => {
            let n = eB.createTransformer(e)
              , r = eY(t)
              , i = eY(e);
            return r.numHSL === i.numHSL && r.numRGB === i.numRGB && r.numNumbers >= i.numNumbers ? t7(ez(r.parsed, i.parsed), n) : ((0,
            p.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            n => `${n > 0 ? e : t}`)
        }
          , eX = (t, e) => n => ey(t, e, n);
        function eZ(t, e, {clamp: n=!0, ease: r, mixer: i}={}) {
            let o = t.length;
            (0,
            p.k)(o === e.length, "Both input and output ranges must be the same length"),
            (0,
            p.k)(!r || !Array.isArray(r) || r.length === o - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),
            t[0] > t[o - 1] && (t = [].concat(t),
            e = [].concat(e),
            t.reverse(),
            e.reverse());
            let a = function(t, e, n) {
                var r;
                let i = []
                  , o = n || ("number" == typeof (r = t[0]) ? eX : "string" == typeof r ? ek.test(r) ? eL : eW : Array.isArray(r) ? ez : "object" == typeof r ? eH : void 0)
                  , a = t.length - 1;
                for (let n = 0; n < a; n++) {
                    let r = o(t[n], t[n + 1]);
                    e && (r = t7(Array.isArray(e) ? e[n] : e, r)),
                    i.push(r)
                }
                return i
            }(e, r, i)
              , s = 2 === o ? function([t,e], [n]) {
                return r => n(em(t, e, r))
            }(t, a) : function(t, e) {
                let n = t.length
                  , r = n - 1;
                return i => {
                    let o = 0
                      , a = !1;
                    if (i <= t[0] ? a = !0 : i >= t[r] && (o = r - 1,
                    a = !0),
                    !a) {
                        let e = 1;
                        for (; e < n && !(t[e] > i) && e !== r; e++)
                            ;
                        o = e - 1
                    }
                    let s = em(t[o], t[o + 1], i);
                    return e[o](s)
                }
            }(t, a);
            return n ? e => s(el(t[0], t[o - 1], e)) : s
        }
        let eq = t => e => 1 - t(1 - e)
          , eK = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          , eG = t => e => e * e * ((t + 1) * e - t)
          , e$ = 4 / 11
          , eJ = 8 / 11
          , eQ = t => t
          , e0 = t => Math.pow(t, 2)
          , e1 = eq(e0)
          , e2 = eK(e0)
          , e5 = t => 1 - Math.sin(Math.acos(t))
          , e3 = eq(e5)
          , e4 = eK(e3)
          , e6 = eG(1.525)
          , e7 = eq(e6)
          , e8 = eK(e6)
          , e9 = (t => {
            let e = eG(1.525);
            return t => (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
        )(0)
          , nt = 4356 / 361
          , ne = 35442 / 1805
          , nn = 16061 / 1805
          , nr = t => {
            if (1 === t || 0 === t)
                return t;
            let e = t * t;
            return t < e$ ? 7.5625 * e : t < eJ ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? nt * e - ne * t + nn : 10.8 * t * t - 20.52 * t + 10.72
        }
          , ni = eq(nr);
        function no({from: t=0, to: e=1, ease: n, offset: r, duration: i=300}) {
            let o = {
                done: !1,
                value: t
            }
              , a = Array.isArray(e) ? e : [t, e]
              , s = (r && r.length === a.length ? r : function(t) {
                let e = t.length;
                return t.map( (t, n) => 0 !== n ? n / (e - 1) : 0)
            }(a)).map(t => t * i);
            function u() {
                return eZ(s, a, {
                    ease: Array.isArray(n) ? n : a.map( () => n || e2).splice(0, a.length - 1)
                })
            }
            let l = u();
            return {
                next: t => (o.value = l(t),
                o.done = t >= i,
                o),
                flipTarget: () => {
                    a.reverse(),
                    l = u()
                }
            }
        }
        let na = {
            keyframes: no,
            spring: ev,
            decay: function({velocity: t=0, from: e=0, power: n=.8, timeConstant: r=350, restDelta: i=.5, modifyTarget: o}) {
                let a = {
                    done: !1,
                    value: e
                }
                  , s = n * t
                  , u = e + s
                  , l = void 0 === o ? u : o(u);
                return l !== u && (s = l - e),
                {
                    next: t => {
                        let e = -s * Math.exp(-t / r);
                        return a.done = !(e > i || e < -i),
                        a.value = a.done ? l : l + e,
                        a
                    }
                    ,
                    flipTarget: () => {}
                }
            }
        };
        var ns = n(4735);
        function nu(t, e, n=0) {
            return t - e - n
        }
        let nl = t => {
            let e = ({delta: e}) => t(e);
            return {
                start: () => ns.ZP.update(e, !0),
                stop: () => ns.qY.update(e)
            }
        }
        ;
        function nc(t) {
            let e, n, r;
            var i, {from: o, autoplay: a=!0, driver: s=nl, elapsed: l=0, repeat: c=0, repeatType: f="loop", repeatDelay: d=0, onPlay: p, onStop: v, onComplete: h, onRepeat: m, onUpdate: y} = t, g = (0,
            u._T)(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
            let {to: b} = g
              , x = 0
              , E = g.duration
              , w = !1
              , T = !0
              , P = function(t) {
                if (Array.isArray(t.to))
                    return no;
                if (na[t.type])
                    return na[t.type];
                let e = new Set(Object.keys(t));
                if (e.has("ease") || e.has("duration") && !e.has("dampingRatio"))
                    ;
                else if (e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta"))
                    return ev;
                return no
            }(g);
            (null === (i = P.needsInterpolation) || void 0 === i ? void 0 : i.call(P, o, b)) && (r = eZ([0, 100], [o, b], {
                clamp: !1
            }),
            o = 0,
            b = 100);
            let A = P(Object.assign(Object.assign({}, g), {
                from: o,
                to: b
            }));
            return a && (null == p || p(),
            (e = s(function(t) {
                if (T || (t = -t),
                l += t,
                !w) {
                    let t = A.next(Math.max(0, l));
                    n = t.value,
                    r && (n = r(n)),
                    w = T ? t.done : l <= 0
                }
                if (null == y || y(n),
                w) {
                    if (0 === x && (null != E || (E = l)),
                    x < c) {
                        var i, o;
                        i = l,
                        o = E,
                        (T ? i >= o + d : i <= -d) && (x++,
                        "reverse" === f ? l = function(t, e, n=0, r=!0) {
                            return r ? nu(e + -t, e, n) : e - (t - e) + n
                        }(l, E, d, T = x % 2 == 0) : (l = nu(l, E, d),
                        "mirror" === f && A.flipTarget()),
                        w = !1,
                        m && m())
                    } else
                        e.stop(),
                        h && h()
                }
            })).start()),
            {
                stop: () => {
                    null == v || v(),
                    e.stop()
                }
            }
        }
        var nf = function(t) {
            return 1e3 * t
        };
        let nd = (t, e) => 1 - 3 * e + 3 * t
          , np = (t, e) => 3 * e - 6 * t
          , nv = t => 3 * t
          , nh = (t, e, n) => ((nd(e, n) * t + np(e, n)) * t + nv(e)) * t
          , nm = (t, e, n) => 3 * nd(e, n) * t * t + 2 * np(e, n) * t + nv(e);
        var ny = {
            linear: eQ,
            easeIn: e0,
            easeInOut: e2,
            easeOut: e1,
            circIn: e5,
            circInOut: e4,
            circOut: e3,
            backIn: e6,
            backInOut: e8,
            backOut: e7,
            anticipate: e9,
            bounceIn: ni,
            bounceInOut: t => t < .5 ? .5 * (1 - nr(1 - 2 * t)) : .5 * nr(2 * t - 1) + .5,
            bounceOut: nr
        }
          , ng = function(t) {
            if (Array.isArray(t)) {
                (0,
                p.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                var e = (0,
                u.CR)(t, 4);
                return function(t, e, n, r) {
                    if (t === e && n === r)
                        return eQ;
                    let i = new Float32Array(11);
                    for (let e = 0; e < 11; ++e)
                        i[e] = nh(.1 * e, t, n);
                    return o => 0 === o || 1 === o ? o : nh(function(e) {
                        let r = 0
                          , o = 1;
                        for (; 10 !== o && i[o] <= e; ++o)
                            r += .1;
                        let a = r + (e - i[--o]) / (i[o + 1] - i[o]) * .1
                          , s = nm(a, t, n);
                        return s >= .001 ? function(t, e, n, r) {
                            for (let i = 0; i < 8; ++i) {
                                let i = nm(e, n, r);
                                if (0 === i)
                                    break;
                                let o = nh(e, n, r) - t;
                                e -= o / i
                            }
                            return e
                        }(e, a, t, n) : 0 === s ? a : function(t, e, n, r, i) {
                            let o, a;
                            let s = 0;
                            do
                                (o = nh(a = e + (n - e) / 2, r, i) - t) > 0 ? n = a : e = a;
                            while (Math.abs(o) > 1e-7 && ++s < 10);
                            return a
                        }(e, r, r + .1, t, n)
                    }(o), e, r)
                }(e[0], e[1], e[2], e[3])
            }
            return "string" == typeof t ? ((0,
            p.k)(void 0 !== ny[t], "Invalid easing type '".concat(t, "'")),
            ny[t]) : t
        }
          , nb = function(t, e) {
            return "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && eB.test(e) && !e.startsWith("url("))
        }
          , nx = function() {
            return {
                type: "spring",
                stiffness: 500,
                damping: 25,
                restSpeed: 10
            }
        }
          , nE = function(t) {
            return {
                type: "spring",
                stiffness: 550,
                damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10
            }
        }
          , nw = function() {
            return {
                type: "keyframes",
                ease: "linear",
                duration: .3
            }
        }
          , nT = function(t) {
            return {
                type: "keyframes",
                duration: .8,
                values: t
            }
        }
          , nP = {
            x: nx,
            y: nx,
            z: nx,
            rotate: nx,
            rotateX: nx,
            rotateY: nx,
            rotateZ: nx,
            scaleX: nE,
            scaleY: nE,
            scale: nE,
            opacity: nw,
            backgroundColor: nw,
            color: nw,
            default: nE
        }
          , nA = function(t, e) {
            var n;
            return n = tj(e) ? nT : nP[t] || nP.default,
            (0,
            u.pi)({
                to: e
            }, n(e))
        };
        let nS = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function nC(t) {
            let[e,n] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[r] = n.match(Q) || [];
            if (!r)
                return t;
            let i = n.replace(r, "")
              , o = nS.has(e) ? 1 : 0;
            return r !== n && (o *= 100),
            e + "(" + o + i + ")"
        }
        let nR = /([a-z-]*)\(.*?\)/g
          , nV = Object.assign(Object.assign({}, eB), {
            getAnimatableNone: t => {
                let e = t.match(nR);
                return e ? e.map(nC).join(" ") : t
            }
        });
        var nM = (0,
        u.pi)((0,
        u.pi)({}, tv), {
            color: ek,
            backgroundColor: ek,
            outlineColor: ek,
            fill: ek,
            stroke: ek,
            borderColor: ek,
            borderTopColor: ek,
            borderRightColor: ek,
            borderBottomColor: ek,
            borderLeftColor: ek,
            filter: nV,
            WebkitFilter: nV
        })
          , nL = function(t) {
            return nM[t]
        };
        function nk(t, e) {
            var n, r = nL(t);
            return r !== nV && (r = eB),
            null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e)
        }
        var nO = {
            current: !1
        }
          , nj = !1;
        function nD(t) {
            return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
        }
        function nI(t) {
            return "number" == typeof t ? 0 : nk("", t)
        }
        function nF(t, e) {
            return t[e] || t.default || t
        }
        function nU(t, e, n, r) {
            return void 0 === r && (r = {}),
            nO.current && (r = {
                type: !1
            }),
            e.start(function(i) {
                var o, a, s, l, c, f, d, v, h, m, y, g = (l = n,
                d = null !== (c = (f = nF(r, t)).from) && void 0 !== c ? c : e.get(),
                v = nb(t, l),
                "none" === d && v && "string" == typeof l ? d = nk(t, l) : nD(d) && "string" == typeof l ? d = nI(l) : !Array.isArray(l) && nD(l) && "string" == typeof d && (l = nI(d)),
                h = nb(t, d),
                (0,
                p.K)(h === v, "You are trying to animate ".concat(t, ' from "').concat(d, '" to "').concat(l, '". ').concat(d, " is not an animatable value - to enable this animation set ").concat(d, " to a value animatable to ").concat(l, " via the `style` property.")),
                h && v && !1 !== f.type ? function() {
                    var n, r, o, a, s, c, v, h, m, y, g, b, x, E = {
                        from: d,
                        to: l,
                        velocity: e.getVelocity(),
                        onComplete: i,
                        onUpdate: function(t) {
                            return e.set(t)
                        }
                    };
                    return "inertia" === f.type || "decay" === f.type ? function({from: t=0, velocity: e=0, min: n, max: r, power: i=.8, timeConstant: o=750, bounceStiffness: a=500, bounceDamping: s=10, restDelta: u=1, modifyTarget: l, driver: c, onUpdate: f, onComplete: d, onStop: p}) {
                        let v;
                        function h(t) {
                            return void 0 !== n && t < n || void 0 !== r && t > r
                        }
                        function m(t) {
                            return void 0 === n ? r : void 0 === r ? n : Math.abs(n - t) < Math.abs(r - t) ? n : r
                        }
                        function y(t) {
                            null == v || v.stop(),
                            v = nc(Object.assign(Object.assign({}, t), {
                                driver: c,
                                onUpdate: e => {
                                    var n;
                                    null == f || f(e),
                                    null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                }
                                ,
                                onComplete: d,
                                onStop: p
                            }))
                        }
                        function g(t) {
                            y(Object.assign({
                                type: "spring",
                                stiffness: a,
                                damping: s,
                                restDelta: u
                            }, t))
                        }
                        if (h(t))
                            g({
                                from: t,
                                velocity: e,
                                to: m(t)
                            });
                        else {
                            let r, a, s = i * e + t;
                            void 0 !== l && (s = l(s));
                            let c = m(s)
                              , f = c === n ? -1 : 1;
                            y({
                                type: "decay",
                                from: t,
                                velocity: e,
                                timeConstant: o,
                                power: i,
                                restDelta: u,
                                modifyTarget: l,
                                onUpdate: h(s) ? t => {
                                    var n, i;
                                    r = a,
                                    a = t,
                                    n = t - r,
                                    e = (i = (0,
                                    ns.$B)().delta) ? 1e3 / i * n : 0,
                                    (1 === f && t > c || -1 === f && t < c) && g({
                                        from: t,
                                        to: c,
                                        velocity: e
                                    })
                                }
                                : void 0
                            })
                        }
                        return {
                            stop: () => null == v ? void 0 : v.stop()
                        }
                    }((0,
                    u.pi)((0,
                    u.pi)({}, E), f)) : nc((0,
                    u.pi)((0,
                    u.pi)({}, (n = f,
                    r = E,
                    o = t,
                    Array.isArray(r.to) && (null !== (a = n.duration) && void 0 !== a || (n.duration = .8)),
                    Array.isArray(r.to) && null === r.to[0] && (r.to = (0,
                    u.ev)([], (0,
                    u.CR)(r.to), !1),
                    r.to[0] = r.from),
                    (s = n).when,
                    s.delay,
                    s.delayChildren,
                    s.staggerChildren,
                    s.staggerDirection,
                    s.repeat,
                    s.repeatType,
                    s.repeatDelay,
                    s.from,
                    Object.keys((0,
                    u._T)(s, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"])).length || (n = (0,
                    u.pi)((0,
                    u.pi)({}, n), nA(o, r.to))),
                    (0,
                    u.pi)((0,
                    u.pi)({}, r), (v = (c = n).ease,
                    h = c.times,
                    m = c.yoyo,
                    y = c.flip,
                    g = c.loop,
                    b = (0,
                    u._T)(c, ["ease", "times", "yoyo", "flip", "loop"]),
                    x = (0,
                    u.pi)({}, b),
                    h && (x.offset = h),
                    b.duration && (x.duration = nf(b.duration)),
                    b.repeatDelay && (x.repeatDelay = nf(b.repeatDelay)),
                    v && (x.ease = Array.isArray(v) && "number" != typeof v[0] ? v.map(ng) : ng(v)),
                    "tween" === b.type && (x.type = "keyframes"),
                    (m || g || y) && ((0,
                    p.K)(!nj, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."),
                    nj = !0,
                    m ? x.repeatType = "reverse" : g ? x.repeatType = "loop" : y && (x.repeatType = "mirror"),
                    x.repeat = g || m || y || b.repeat),
                    "spring" !== b.type && (x.type = "keyframes"),
                    x)))), {
                        onUpdate: function(t) {
                            var e;
                            E.onUpdate(t),
                            null === (e = f.onUpdate) || void 0 === e || e.call(f, t)
                        },
                        onComplete: function() {
                            var t;
                            E.onComplete(),
                            null === (t = f.onComplete) || void 0 === t || t.call(f)
                        }
                    }))
                }
                : function() {
                    var t, n, r = tD(l);
                    return e.set(r),
                    i(),
                    null === (t = null == f ? void 0 : f.onUpdate) || void 0 === t || t.call(f, r),
                    null === (n = null == f ? void 0 : f.onComplete) || void 0 === n || n.call(f),
                    {
                        stop: function() {}
                    }
                }
                ), b = null !== (s = null !== (a = (nF(o = r, t) || {}).delay) && void 0 !== a ? a : o.delay) && void 0 !== s ? s : 0, x = function() {
                    return y = g()
                };
                return b ? m = window.setTimeout(x, nf(b)) : x(),
                function() {
                    clearTimeout(m),
                    null == y || y.stop()
                }
            })
        }
        function nB(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function nN(t, e) {
            var n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }
        var n_ = function() {
            function t() {
                this.subscriptions = []
            }
            return t.prototype.add = function(t) {
                var e = this;
                return nB(this.subscriptions, t),
                function() {
                    return nN(e.subscriptions, t)
                }
            }
            ,
            t.prototype.notify = function(t, e, n) {
                var r = this.subscriptions.length;
                if (r) {
                    if (1 === r)
                        this.subscriptions[0](t, e, n);
                    else
                        for (var i = 0; i < r; i++) {
                            var o = this.subscriptions[i];
                            o && o(t, e, n)
                        }
                }
            }
            ,
            t.prototype.getSize = function() {
                return this.subscriptions.length
            }
            ,
            t.prototype.clear = function() {
                this.subscriptions.length = 0
            }
            ,
            t
        }()
          , nz = function() {
            function t(t) {
                var e = this;
                this.version = "6.5.1",
                this.timeDelta = 0,
                this.lastUpdated = 0,
                this.updateSubscribers = new n_,
                this.velocityUpdateSubscribers = new n_,
                this.renderSubscribers = new n_,
                this.canTrackVelocity = !1,
                this.updateAndNotify = function(t, n) {
                    void 0 === n && (n = !0),
                    e.prev = e.current,
                    e.current = t;
                    var r = (0,
                    ns.$B)()
                      , i = r.delta
                      , o = r.timestamp;
                    e.lastUpdated !== o && (e.timeDelta = i,
                    e.lastUpdated = o,
                    ns.ZP.postRender(e.scheduleVelocityCheck)),
                    e.prev !== e.current && e.updateSubscribers.notify(e.current),
                    e.velocityUpdateSubscribers.getSize() && e.velocityUpdateSubscribers.notify(e.getVelocity()),
                    n && e.renderSubscribers.notify(e.current)
                }
                ,
                this.scheduleVelocityCheck = function() {
                    return ns.ZP.postRender(e.velocityCheck)
                }
                ,
                this.velocityCheck = function(t) {
                    t.timestamp !== e.lastUpdated && (e.prev = e.current,
                    e.velocityUpdateSubscribers.notify(e.getVelocity()))
                }
                ,
                this.hasAnimated = !1,
                this.prev = this.current = t,
                this.canTrackVelocity = !isNaN(parseFloat(this.current))
            }
            return t.prototype.onChange = function(t) {
                return this.updateSubscribers.add(t)
            }
            ,
            t.prototype.clearListeners = function() {
                this.updateSubscribers.clear()
            }
            ,
            t.prototype.onRenderRequest = function(t) {
                return t(this.get()),
                this.renderSubscribers.add(t)
            }
            ,
            t.prototype.attach = function(t) {
                this.passiveEffect = t
            }
            ,
            t.prototype.set = function(t, e) {
                void 0 === e && (e = !0),
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            ,
            t.prototype.get = function() {
                return this.current
            }
            ,
            t.prototype.getPrevious = function() {
                return this.prev
            }
            ,
            t.prototype.getVelocity = function() {
                var t, e;
                return this.canTrackVelocity ? (t = parseFloat(this.current) - parseFloat(this.prev),
                (e = this.timeDelta) ? 1e3 / e * t : 0) : 0
            }
            ,
            t.prototype.start = function(t) {
                var e = this;
                return this.stop(),
                new Promise(function(n) {
                    e.hasAnimated = !0,
                    e.stopAnimation = t(n)
                }
                ).then(function() {
                    return e.clearAnimation()
                })
            }
            ,
            t.prototype.stop = function() {
                this.stopAnimation && this.stopAnimation(),
                this.clearAnimation()
            }
            ,
            t.prototype.isAnimating = function() {
                return !!this.stopAnimation
            }
            ,
            t.prototype.clearAnimation = function() {
                this.stopAnimation = null
            }
            ,
            t.prototype.destroy = function() {
                this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop()
            }
            ,
            t
        }();
        function nH(t) {
            return new nz(t)
        }
        var nY = function(t) {
            return function(e) {
                return e.test(t)
            }
        }
          , nW = [tc, ta, to, ti, tu, ts, {
            test: function(t) {
                return "auto" === t
            },
            parse: function(t) {
                return t
            }
        }]
          , nX = function(t) {
            return nW.find(nY(t))
        }
          , nZ = (0,
        u.ev)((0,
        u.ev)([], (0,
        u.CR)(nW), !1), [ek, eB], !1);
        function nq(t, e, n) {
            void 0 === n && (n = {});
            var r, i = R(t, e, n.custom), o = (i || {}).transition, a = void 0 === o ? t.getDefaultTransition() || {} : o;
            n.transitionOverride && (a = n.transitionOverride);
            var s = i ? function() {
                return nK(t, i, n)
            }
            : function() {
                return Promise.resolve()
            }
              , l = (null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size) ? function(r) {
                void 0 === r && (r = 0);
                var i, o, s, l, c, f, d, p = a.delayChildren;
                return i = (void 0 === p ? 0 : p) + r,
                o = a.staggerChildren,
                s = a.staggerDirection,
                l = n,
                void 0 === i && (i = 0),
                void 0 === o && (o = 0),
                void 0 === s && (s = 1),
                c = [],
                f = (t.variantChildren.size - 1) * o,
                d = 1 === s ? function(t) {
                    return void 0 === t && (t = 0),
                    t * o
                }
                : function(t) {
                    return void 0 === t && (t = 0),
                    f - t * o
                }
                ,
                Array.from(t.variantChildren).sort(nG).forEach(function(t, n) {
                    c.push(nq(t, e, (0,
                    u.pi)((0,
                    u.pi)({}, l), {
                        delay: i + d(n)
                    })).then(function() {
                        return t.notifyAnimationComplete(e)
                    }))
                }),
                Promise.all(c)
            }
            : function() {
                return Promise.resolve()
            }
              , c = a.when;
            if (!c)
                return Promise.all([s(), l(n.delay)]);
            var f = (0,
            u.CR)("beforeChildren" === c ? [s, l] : [l, s], 2)
              , d = f[0]
              , p = f[1];
            return d().then(p)
        }
        function nK(t, e, n) {
            var r, i = void 0 === n ? {} : n, o = i.delay, a = void 0 === o ? 0 : o, s = i.transitionOverride, l = i.type, c = t.makeTargetAnimatable(e), f = c.transition, d = void 0 === f ? t.getDefaultTransition() : f, p = c.transitionEnd, v = (0,
            u._T)(c, ["transition", "transitionEnd"]);
            s && (d = s);
            var h = []
              , m = l && (null === (r = t.animationState) || void 0 === r ? void 0 : r.getState()[l]);
            for (var y in v) {
                var g = t.getValue(y)
                  , b = v[y];
                if (!(!g || void 0 === b || m && function(t, e) {
                    var n = t.protectedKeys
                      , r = t.needsAnimating
                      , i = n.hasOwnProperty(e) && !0 !== r[e];
                    return r[e] = !1,
                    i
                }(m, y))) {
                    var x = (0,
                    u.pi)({
                        delay: a
                    }, d);
                    t.shouldReduceMotion && W(y) && (x = (0,
                    u.pi)((0,
                    u.pi)({}, x), {
                        type: !1,
                        delay: 0
                    }));
                    var E = nU(y, g, b, x);
                    h.push(E)
                }
            }
            return Promise.all(h).then(function() {
                p && function(t, e) {
                    var n = R(t, e)
                      , r = n ? t.makeTargetAnimatable(n, !1) : {}
                      , i = r.transitionEnd;
                    r.transition;
                    var o = (0,
                    u._T)(r, ["transitionEnd", "transition"]);
                    for (var a in o = (0,
                    u.pi)((0,
                    u.pi)({}, o), void 0 === i ? {} : i)) {
                        var s = tD(o[a]);
                        t.hasValue(a) ? t.getValue(a).set(s) : t.addValue(a, nH(s))
                    }
                }(t, p)
            })
        }
        function nG(t, e) {
            return t.sortNodePosition(e)
        }
        var n$ = [a.Animate, a.InView, a.Focus, a.Hover, a.Tap, a.Drag, a.Exit]
          , nJ = (0,
        u.ev)([], (0,
        u.CR)(n$), !1).reverse()
          , nQ = n$.length;
        function n0(t) {
            return void 0 === t && (t = !1),
            {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        var n1 = {
            animation: ei(function(t) {
                var e = t.visualElement
                  , n = t.animate;
                e.animationState || (e.animationState = function(t) {
                    var e, n = function(e) {
                        return Promise.all(e.map(function(e) {
                            return function(t, e, n) {
                                if (void 0 === n && (n = {}),
                                t.notifyAnimationStart(e),
                                Array.isArray(e)) {
                                    var r;
                                    r = Promise.all(e.map(function(e) {
                                        return nq(t, e, n)
                                    }))
                                } else if ("string" == typeof e)
                                    r = nq(t, e, n);
                                else {
                                    var i = "function" == typeof e ? R(t, e, n.custom) : e;
                                    r = nK(t, i, n)
                                }
                                return r.then(function() {
                                    return t.notifyAnimationComplete(e)
                                })
                            }(t, e.animation, e.options)
                        }))
                    }, r = ((e = {})[a.Animate] = n0(!0),
                    e[a.InView] = n0(),
                    e[a.Hover] = n0(),
                    e[a.Tap] = n0(),
                    e[a.Drag] = n0(),
                    e[a.Focus] = n0(),
                    e[a.Exit] = n0(),
                    e), i = {}, o = !0, s = function(e, n) {
                        var r = R(t, n);
                        if (r) {
                            r.transition;
                            var i = r.transitionEnd
                              , o = (0,
                            u._T)(r, ["transition", "transitionEnd"]);
                            e = (0,
                            u.pi)((0,
                            u.pi)((0,
                            u.pi)({}, e), o), i)
                        }
                        return e
                    };
                    function l(e, a) {
                        for (var l, c = t.getProps(), f = t.getVariantContext(!0) || {}, d = [], p = new Set, v = {}, h = 1 / 0, m = 0; m < nQ; m++)
                            !function(n) {
                                var i, m = nJ[n], y = r[m], g = null !== (l = c[m]) && void 0 !== l ? l : f[m], b = S(g), x = m === a ? y.isActive : null;
                                !1 === x && (h = n);
                                var E = g === f[m] && g !== c[m] && b;
                                if (E && o && t.manuallyAnimateOnMount && (E = !1),
                                y.protectedKeys = (0,
                                u.pi)({}, v),
                                !(!y.isActive && null === x || !g && !y.prevProp || tO(g)) && "boolean" != typeof g) {
                                    var w = (i = y.prevProp,
                                    "string" == typeof g ? g !== i : !!A(g) && !eu(g, i))
                                      , T = w || m === a && y.isActive && !E && b || n > h && b
                                      , P = Array.isArray(g) ? g : [g]
                                      , C = P.reduce(s, {});
                                    !1 === x && (C = {});
                                    var R = y.prevResolvedValues
                                      , V = void 0 === R ? {} : R
                                      , M = (0,
                                    u.pi)((0,
                                    u.pi)({}, V), C)
                                      , L = function(t) {
                                        T = !0,
                                        p.delete(t),
                                        y.needsAnimating[t] = !0
                                    };
                                    for (var k in M) {
                                        var O = C[k]
                                          , j = V[k];
                                        v.hasOwnProperty(k) || (O !== j ? tj(O) && tj(j) ? !eu(O, j) || w ? L(k) : y.protectedKeys[k] = !0 : void 0 !== O ? L(k) : p.add(k) : void 0 !== O && p.has(k) ? L(k) : y.protectedKeys[k] = !0)
                                    }
                                    y.prevProp = g,
                                    y.prevResolvedValues = C,
                                    y.isActive && (v = (0,
                                    u.pi)((0,
                                    u.pi)({}, v), C)),
                                    o && t.blockInitialAnimation && (T = !1),
                                    T && !E && d.push.apply(d, (0,
                                    u.ev)([], (0,
                                    u.CR)(P.map(function(t) {
                                        return {
                                            animation: t,
                                            options: (0,
                                            u.pi)({
                                                type: m
                                            }, e)
                                        }
                                    })), !1))
                                }
                            }(m);
                        if (i = (0,
                        u.pi)({}, v),
                        p.size) {
                            var y = {};
                            p.forEach(function(e) {
                                var n = t.getBaseTarget(e);
                                void 0 !== n && (y[e] = n)
                            }),
                            d.push({
                                animation: y
                            })
                        }
                        var g = !!d.length;
                        return o && !1 === c.initial && !t.manuallyAnimateOnMount && (g = !1),
                        o = !1,
                        g ? n(d) : Promise.resolve()
                    }
                    return {
                        isAnimated: function(t) {
                            return void 0 !== i[t]
                        },
                        animateChanges: l,
                        setActive: function(e, n, i) {
                            if (r[e].isActive === n)
                                return Promise.resolve();
                            null === (o = t.variantChildren) || void 0 === o || o.forEach(function(t) {
                                var r;
                                return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, n)
                            }),
                            r[e].isActive = n;
                            var o, a = l(i, e);
                            for (var s in r)
                                r[s].protectedKeys = {};
                            return a
                        },
                        setAnimateFunction: function(e) {
                            n = e(t)
                        },
                        getState: function() {
                            return r
                        }
                    }
                }(e)),
                tO(n) && (0,
                l.useEffect)(function() {
                    return n.subscribe(e)
                }, [n])
            }),
            exit: ei(function(t) {
                var e = t.custom
                  , n = t.visualElement
                  , r = (0,
                u.CR)(es(), 2)
                  , i = r[0]
                  , o = r[1]
                  , s = (0,
                l.useContext)(b.O);
                (0,
                l.useEffect)(function() {
                    n.isPresent = i;
                    var t, r, u = null === (t = n.animationState) || void 0 === t ? void 0 : t.setActive(a.Exit, !i, {
                        custom: null !== (r = null == s ? void 0 : s.custom) && void 0 !== r ? r : e
                    });
                    i || null == u || u.then(o)
                }, [i])
            })
        };
        let n2 = t => t.hasOwnProperty("x") && t.hasOwnProperty("y")
          , n5 = t => n2(t) && t.hasOwnProperty("z")
          , n3 = (t, e) => Math.abs(t - e);
        function n4(t, e) {
            return eN(t) && eN(e) ? n3(t, e) : n2(t) && n2(e) ? Math.sqrt(Math.pow(n3(t.x, e.x), 2) + Math.pow(n3(t.y, e.y), 2) + Math.pow(n5(t) && n5(e) ? n3(t.z, e.z) : 0, 2)) : void 0
        }
        var n6 = function() {
            function t(t, e, n) {
                var r = this
                  , i = (void 0 === n ? {} : n).transformPagePoint;
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = function() {
                    if (r.lastMoveEvent && r.lastMoveEventInfo) {
                        var t = n9(r.lastMoveEventInfo, r.history)
                          , e = null !== r.startEvent
                          , n = n4(t.offset, {
                            x: 0,
                            y: 0
                        }) >= 3;
                        if (e || n) {
                            var i = t.point
                              , o = (0,
                            ns.$B)().timestamp;
                            r.history.push((0,
                            u.pi)((0,
                            u.pi)({}, i), {
                                timestamp: o
                            }));
                            var a = r.handlers
                              , s = a.onStart
                              , l = a.onMove;
                            e || (s && s(r.lastMoveEvent, t),
                            r.startEvent = r.lastMoveEvent),
                            l && l(r.lastMoveEvent, t)
                        }
                    }
                }
                ,
                this.handlePointerMove = function(t, e) {
                    if (r.lastMoveEvent = t,
                    r.lastMoveEventInfo = n7(e, r.transformPagePoint),
                    tH(t) && 0 === t.buttons) {
                        r.handlePointerUp(t, e);
                        return
                    }
                    ns.ZP.update(r.updatePoint, !0)
                }
                ,
                this.handlePointerUp = function(t, e) {
                    r.end();
                    var n = r.handlers
                      , i = n.onEnd
                      , o = n.onSessionEnd
                      , a = n9(n7(e, r.transformPagePoint), r.history);
                    r.startEvent && i && i(t, a),
                    o && o(t, a)
                }
                ,
                !t.touches || !(t.touches.length > 1)) {
                    this.handlers = e,
                    this.transformPagePoint = i;
                    var o = n7(tW(t), this.transformPagePoint)
                      , a = o.point
                      , s = (0,
                    ns.$B)().timestamp;
                    this.history = [(0,
                    u.pi)((0,
                    u.pi)({}, a), {
                        timestamp: s
                    })];
                    var l = e.onSessionStart;
                    l && l(t, n9(o, this.history)),
                    this.removeListeners = t7(tG(window, "pointermove", this.handlePointerMove), tG(window, "pointerup", this.handlePointerUp), tG(window, "pointercancel", this.handlePointerUp))
                }
            }
            return t.prototype.updateHandlers = function(t) {
                this.handlers = t
            }
            ,
            t.prototype.end = function() {
                this.removeListeners && this.removeListeners(),
                ns.qY.update(this.updatePoint)
            }
            ,
            t
        }();
        function n7(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function n8(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function n9(t, e) {
            var n = t.point;
            return {
                point: n,
                delta: n8(n, rt(e)),
                offset: n8(n, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    for (var n = t.length - 1, r = null, i = rt(t); n >= 0 && (r = t[n],
                    !(i.timestamp - r.timestamp > nf(.1))); )
                        n--;
                    if (!r)
                        return {
                            x: 0,
                            y: 0
                        };
                    var o = (i.timestamp - r.timestamp) / 1e3;
                    if (0 === o)
                        return {
                            x: 0,
                            y: 0
                        };
                    var a = {
                        x: (i.x - r.x) / o,
                        y: (i.y - r.y) / o
                    };
                    return a.x === 1 / 0 && (a.x = 0),
                    a.y === 1 / 0 && (a.y = 0),
                    a
                }(e, 0)
            }
        }
        function rt(t) {
            return t[t.length - 1]
        }
        function re(t) {
            return t.max - t.min
        }
        function rn(t, e, n) {
            return void 0 === e && (e = 0),
            void 0 === n && (n = .01),
            n4(t, e) < n
        }
        function rr(t, e, n, r) {
            void 0 === r && (r = .5),
            t.origin = r,
            t.originPoint = ey(e.min, e.max, t.origin),
            t.scale = re(n) / re(e),
            (rn(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
            t.translate = ey(n.min, n.max, t.origin) - t.originPoint,
            (rn(t.translate) || isNaN(t.translate)) && (t.translate = 0)
        }
        function ri(t, e, n, r) {
            rr(t.x, e.x, n.x, null == r ? void 0 : r.originX),
            rr(t.y, e.y, n.y, null == r ? void 0 : r.originY)
        }
        function ro(t, e, n) {
            t.min = n.min + e.min,
            t.max = t.min + re(e)
        }
        function ra(t, e, n) {
            t.min = e.min - n.min,
            t.max = t.min + re(e)
        }
        function rs(t, e, n) {
            ra(t.x, e.x, n.x),
            ra(t.y, e.y, n.y)
        }
        function ru(t, e, n) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
            }
        }
        function rl(t, e) {
            var n, r = e.min - t.min, i = e.max - t.max;
            return e.max - e.min < t.max - t.min && (r = (n = (0,
            u.CR)([i, r], 2))[0],
            i = n[1]),
            {
                min: r,
                max: i
            }
        }
        function rc(t, e, n) {
            return {
                min: rf(t, e),
                max: rf(t, n)
            }
        }
        function rf(t, e) {
            var n;
            return "number" == typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
        }
        var rd = function() {
            return {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            }
        }
          , rp = function() {
            return {
                x: rd(),
                y: rd()
            }
        }
          , rv = function() {
            return {
                min: 0,
                max: 0
            }
        }
          , rh = function() {
            return {
                x: rv(),
                y: rv()
            }
        };
        function rm(t) {
            return [t("x"), t("y")]
        }
        function ry(t) {
            var e = t.top;
            return {
                x: {
                    min: t.left,
                    max: t.right
                },
                y: {
                    min: e,
                    max: t.bottom
                }
            }
        }
        function rg(t) {
            return void 0 === t || 1 === t
        }
        function rb(t) {
            var e = t.scale
              , n = t.scaleX
              , r = t.scaleY;
            return !rg(e) || !rg(n) || !rg(r)
        }
        function rx(t) {
            var e, n;
            return rb(t) || (e = t.x) && "0%" !== e || (n = t.y) && "0%" !== n || t.z || t.rotate || t.rotateX || t.rotateY
        }
        function rE(t, e, n, r, i) {
            return void 0 !== i && (t = r + i * (t - r)),
            r + n * (t - r) + e
        }
        function rw(t, e, n, r, i) {
            void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            t.min = rE(t.min, e, n, r, i),
            t.max = rE(t.max, e, n, r, i)
        }
        function rT(t, e) {
            var n = e.x
              , r = e.y;
            rw(t.x, n.translate, n.scale, n.originPoint),
            rw(t.y, r.translate, r.scale, r.originPoint)
        }
        function rP(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function rA(t, e, n) {
            var r = (0,
            u.CR)(n, 3)
              , i = r[0]
              , o = r[1]
              , a = r[2]
              , s = void 0 !== e[a] ? e[a] : .5
              , l = ey(t.min, t.max, s);
            rw(t, e[i], e[o], l, e.scale)
        }
        var rS = ["x", "scaleX", "originX"]
          , rC = ["y", "scaleY", "originY"];
        function rR(t, e) {
            rA(t.x, e, rS),
            rA(t.y, e, rC)
        }
        function rV(t, e) {
            return ry(function(t, e) {
                if (!e)
                    return t;
                var n = e({
                    x: t.left,
                    y: t.top
                })
                  , r = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: n.y,
                    left: n.x,
                    bottom: r.y,
                    right: r.x
                }
            }(t.getBoundingClientRect(), e))
        }
        var rM = new WeakMap
          , rL = function() {
            function t(t) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = rh(),
                this.visualElement = t
            }
            return t.prototype.start = function(t, e) {
                var n = this
                  , r = (void 0 === e ? {} : e).snapToCursor
                  , i = void 0 !== r && r;
                !1 !== this.visualElement.isPresent && (this.panSession = new n6(t,{
                    onSessionStart: function(t) {
                        n.stopAnimation(),
                        i && n.snapToCursor(tW(t, "page").point)
                    },
                    onStart: function(t, e) {
                        var r, i = n.getProps(), o = i.drag, s = i.dragPropagation, u = i.onDragStart;
                        (!o || s || (n.openGlobalLock && n.openGlobalLock(),
                        n.openGlobalLock = t1(o),
                        n.openGlobalLock)) && (n.isDragging = !0,
                        n.currentDirection = null,
                        n.resolveConstraints(),
                        n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0,
                        n.visualElement.projection.target = void 0),
                        rm(function(t) {
                            var e, r, i = n.getAxisMotionValue(t).get() || 0;
                            if (to.test(i)) {
                                var o = null === (r = null === (e = n.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === r ? void 0 : r.actual[t];
                                if (o) {
                                    var a = re(o);
                                    i = parseFloat(i) / 100 * a
                                }
                            }
                            n.originPoint[t] = i
                        }),
                        null == u || u(t, e),
                        null === (r = n.visualElement.animationState) || void 0 === r || r.setActive(a.Drag, !0))
                    },
                    onMove: function(t, e) {
                        var r = n.getProps()
                          , i = r.dragPropagation
                          , o = r.dragDirectionLock
                          , a = r.onDirectionLock
                          , s = r.onDrag;
                        if (i || n.openGlobalLock) {
                            var u, l, c = e.offset;
                            if (o && null === n.currentDirection) {
                                n.currentDirection = (void 0 === u && (u = 10),
                                l = null,
                                Math.abs(c.y) > u ? l = "y" : Math.abs(c.x) > u && (l = "x"),
                                l),
                                null !== n.currentDirection && (null == a || a(n.currentDirection));
                                return
                            }
                            n.updateAxis("x", e.point, c),
                            n.updateAxis("y", e.point, c),
                            n.visualElement.syncRender(),
                            null == s || s(t, e)
                        }
                    },
                    onSessionEnd: function(t, e) {
                        return n.stop(t, e)
                    }
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint()
                }))
            }
            ,
            t.prototype.stop = function(t, e) {
                var n = this.isDragging;
                if (this.cancel(),
                n) {
                    var r = e.velocity;
                    this.startAnimation(r);
                    var i = this.getProps().onDragEnd;
                    null == i || i(t, e)
                }
            }
            ,
            t.prototype.cancel = function() {
                var t, e;
                this.isDragging = !1,
                this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                this.panSession = void 0,
                !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(a.Drag, !1)
            }
            ,
            t.prototype.updateAxis = function(t, e, n) {
                var r = this.getProps().drag;
                if (n && rk(t, r, this.currentDirection)) {
                    var i, o, a, s, u, l = this.getAxisMotionValue(t), c = this.originPoint[t] + n[t];
                    this.constraints && this.constraints[t] && (i = c,
                    o = this.constraints[t],
                    a = this.elastic[t],
                    s = o.min,
                    u = o.max,
                    void 0 !== s && i < s ? i = a ? ey(s, i, a.min) : Math.max(i, s) : void 0 !== u && i > u && (i = a ? ey(u, i, a.max) : Math.min(i, u)),
                    c = i),
                    l.set(c)
                }
            }
            ,
            t.prototype.resolveConstraints = function() {
                var t, e, n, r, i, o, a = this, s = this.getProps(), u = s.dragConstraints, l = s.dragElastic, c = (this.visualElement.projection || {}).layout, f = this.constraints;
                u && P(u) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : u && c ? this.constraints = (t = c.actual,
                e = u.top,
                n = u.left,
                r = u.bottom,
                i = u.right,
                {
                    x: ru(t.x, n, i),
                    y: ru(t.y, e, r)
                }) : this.constraints = !1,
                this.elastic = (void 0 === (o = l) && (o = .35),
                !1 === o ? o = 0 : !0 === o && (o = .35),
                {
                    x: rc(o, "left", "right"),
                    y: rc(o, "top", "bottom")
                }),
                f !== this.constraints && c && this.constraints && !this.hasMutatedConstraints && rm(function(t) {
                    if (a.getAxisMotionValue(t)) {
                        var e, n, r;
                        a.constraints[t] = (e = c.actual[t],
                        n = a.constraints[t],
                        r = {},
                        void 0 !== n.min && (r.min = n.min - e.min),
                        void 0 !== n.max && (r.max = n.max - e.min),
                        r)
                    }
                })
            }
            ,
            t.prototype.resolveRefConstraints = function() {
                var t = this.getProps()
                  , e = t.dragConstraints
                  , n = t.onMeasureDragConstraints;
                if (!e || !P(e))
                    return !1;
                var r = e.current;
                (0,
                p.k)(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                var i = this.visualElement.projection;
                if (!i || !i.layout)
                    return !1;
                var o = (s = i.root,
                u = rV(r, this.visualElement.getTransformPagePoint()),
                (l = s.scroll) && (rP(u.x, l.x),
                rP(u.y, l.y)),
                u)
                  , a = {
                    x: rl((c = i.layout.actual).x, o.x),
                    y: rl(c.y, o.y)
                };
                if (n) {
                    var s, u, l, c, f, d, v, h = n((d = (f = a).x,
                    {
                        top: (v = f.y).min,
                        right: d.max,
                        bottom: v.max,
                        left: d.min
                    }));
                    this.hasMutatedConstraints = !!h,
                    h && (a = ry(h))
                }
                return a
            }
            ,
            t.prototype.startAnimation = function(t) {
                var e = this
                  , n = this.getProps()
                  , r = n.drag
                  , i = n.dragMomentum
                  , o = n.dragElastic
                  , a = n.dragTransition
                  , s = n.dragSnapToOrigin
                  , l = n.onDragTransitionEnd
                  , c = this.constraints || {};
                return Promise.all(rm(function(n) {
                    if (rk(n, r, e.currentDirection)) {
                        var l, f = null !== (l = null == c ? void 0 : c[n]) && void 0 !== l ? l : {};
                        s && (f = {
                            min: 0,
                            max: 0
                        });
                        var d = (0,
                        u.pi)((0,
                        u.pi)({
                            type: "inertia",
                            velocity: i ? t[n] : 0,
                            bounceStiffness: o ? 200 : 1e6,
                            bounceDamping: o ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10
                        }, a), f);
                        return e.startAxisValueAnimation(n, d)
                    }
                })).then(l)
            }
            ,
            t.prototype.startAxisValueAnimation = function(t, e) {
                var n = this.getAxisMotionValue(t);
                return nU(t, n, 0, e)
            }
            ,
            t.prototype.stopAnimation = function() {
                var t = this;
                rm(function(e) {
                    return t.getAxisMotionValue(e).stop()
                })
            }
            ,
            t.prototype.getAxisMotionValue = function(t) {
                var e, n, r = "_drag" + t.toUpperCase();
                return this.visualElement.getProps()[r] || this.visualElement.getValue(t, null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0)
            }
            ,
            t.prototype.snapToCursor = function(t) {
                var e = this;
                rm(function(n) {
                    if (rk(n, e.getProps().drag, e.currentDirection)) {
                        var r = e.visualElement.projection
                          , i = e.getAxisMotionValue(n);
                        if (r && r.layout) {
                            var o = r.layout.actual[n]
                              , a = o.min
                              , s = o.max;
                            i.set(t[n] - ey(a, s, .5))
                        }
                    }
                })
            }
            ,
            t.prototype.scalePositionWithinConstraints = function() {
                var t, e = this, n = this.getProps(), r = n.drag, i = n.dragConstraints, o = this.visualElement.projection;
                if (P(i) && o && this.constraints) {
                    this.stopAnimation();
                    var a = {
                        x: 0,
                        y: 0
                    };
                    rm(function(t) {
                        var n = e.getAxisMotionValue(t);
                        if (n) {
                            var r, i, o, s, u, l = n.get();
                            a[t] = (r = {
                                min: l,
                                max: l
                            },
                            i = e.constraints[t],
                            o = .5,
                            s = re(r),
                            (u = re(i)) > s ? o = em(i.min, i.max - s, r.min) : s > u && (o = em(r.min, r.max - u, i.min)),
                            el(0, 1, o))
                        }
                    });
                    var s = this.visualElement.getProps().transformTemplate;
                    this.visualElement.getInstance().style.transform = s ? s({}, "") : "none",
                    null === (t = o.root) || void 0 === t || t.updateScroll(),
                    o.updateLayout(),
                    this.resolveConstraints(),
                    rm(function(t) {
                        if (rk(t, r, null)) {
                            var n = e.getAxisMotionValue(t)
                              , i = e.constraints[t]
                              , o = i.min
                              , s = i.max;
                            n.set(ey(o, s, a[t]))
                        }
                    })
                }
            }
            ,
            t.prototype.addListeners = function() {
                var t, e = this;
                rM.set(this.visualElement, this);
                var n = tG(this.visualElement.getInstance(), "pointerdown", function(t) {
                    var n = e.getProps()
                      , r = n.drag
                      , i = n.dragListener;
                    r && (void 0 === i || i) && e.start(t)
                })
                  , r = function() {
                    P(e.getProps().dragConstraints) && (e.constraints = e.resolveRefConstraints())
                }
                  , i = this.visualElement.projection
                  , o = i.addEventListener("measure", r);
                i && !i.layout && (null === (t = i.root) || void 0 === t || t.updateScroll(),
                i.updateLayout()),
                r();
                var a = t_(window, "resize", function() {
                    return e.scalePositionWithinConstraints()
                });
                return i.addEventListener("didUpdate", function(t) {
                    var n = t.delta
                      , r = t.hasLayoutChanged;
                    e.isDragging && r && (rm(function(t) {
                        var r = e.getAxisMotionValue(t);
                        r && (e.originPoint[t] += n[t].translate,
                        r.set(r.get() + n[t].translate))
                    }),
                    e.visualElement.syncRender())
                }),
                function() {
                    a(),
                    n(),
                    o()
                }
            }
            ,
            t.prototype.getProps = function() {
                var t = this.visualElement.getProps()
                  , e = t.drag
                  , n = t.dragDirectionLock
                  , r = t.dragPropagation
                  , i = t.dragConstraints
                  , o = t.dragElastic
                  , a = t.dragMomentum;
                return (0,
                u.pi)((0,
                u.pi)({}, t), {
                    drag: void 0 !== e && e,
                    dragDirectionLock: void 0 !== n && n,
                    dragPropagation: void 0 !== r && r,
                    dragConstraints: void 0 !== i && i,
                    dragElastic: void 0 === o ? .35 : o,
                    dragMomentum: void 0 === a || a
                })
            }
            ,
            t
        }();
        function rk(t, e, n) {
            return (!0 === e || e === t) && (null === n || n === t)
        }
        var rO = {
            pan: ei(function(t) {
                var e = t.onPan
                  , n = t.onPanStart
                  , r = t.onPanEnd
                  , i = t.onPanSessionStart
                  , o = t.visualElement
                  , a = (0,
                l.useRef)(null)
                  , s = (0,
                l.useContext)(y).transformPagePoint
                  , u = {
                    onSessionStart: i,
                    onStart: n,
                    onMove: e,
                    onEnd: function(t, e) {
                        a.current = null,
                        r && r(t, e)
                    }
                };
                (0,
                l.useEffect)(function() {
                    null !== a.current && a.current.updateHandlers(u)
                }),
                t$(o, "pointerdown", (e || n || r || i) && function(t) {
                    a.current = new n6(t,u,{
                        transformPagePoint: s
                    })
                }
                ),
                (0,
                t4.z)(function() {
                    return a.current && a.current.end()
                })
            }),
            drag: ei(function(t) {
                var e = t.dragControls
                  , n = t.visualElement
                  , r = (0,
                k.h)(function() {
                    return new rL(n)
                });
                (0,
                l.useEffect)(function() {
                    return e && e.subscribe(r)
                }, [r, e]),
                (0,
                l.useEffect)(function() {
                    return r.addListeners()
                }, [r])
            })
        }
          , rj = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"]
          , rD = function(t) {
            var e = t.treeType
              , n = void 0 === e ? "" : e
              , r = t.build
              , i = t.getBaseTarget
              , o = t.makeTargetAnimatable
              , a = t.measureViewportBox
              , s = t.render
              , l = t.readValueFromInstance
              , c = t.removeValueFromRenderState
              , f = t.sortNodePosition
              , d = t.scrapeMotionValuesFromProps;
            return function(t, e) {
                var p, v, h, m, y, g = t.parent, b = t.props, x = t.presenceId, E = t.blockInitialAnimation, w = t.visualState, T = t.shouldReduceMotion;
                void 0 === e && (e = {});
                var P = !1
                  , A = w.latestValues
                  , C = w.renderState
                  , R = (p = rj.map(function() {
                    return new n_
                }),
                v = {},
                h = {
                    clearAllListeners: function() {
                        return p.forEach(function(t) {
                            return t.clear()
                        })
                    },
                    updatePropListeners: function(t) {
                        rj.forEach(function(e) {
                            var n, r = "on" + e, i = t[r];
                            null === (n = v[e]) || void 0 === n || n.call(v),
                            i && (v[e] = h[r](i))
                        })
                    }
                },
                p.forEach(function(t, e) {
                    h["on" + rj[e]] = function(e) {
                        return t.add(e)
                    }
                    ,
                    h["notify" + rj[e]] = function() {
                        for (var e = [], n = 0; n < arguments.length; n++)
                            e[n] = arguments[n];
                        return t.notify.apply(t, (0,
                        u.ev)([], (0,
                        u.CR)(e), !1))
                    }
                }),
                h)
                  , L = new Map
                  , k = new Map
                  , O = {}
                  , j = (0,
                u.pi)({}, A);
                function D() {
                    m && P && (I(),
                    s(m, C, b.style, Y.projection))
                }
                function I() {
                    r(Y, C, A, e, b)
                }
                function F() {
                    R.notifyUpdate(A)
                }
                function U(t, e) {
                    var n = e.onChange(function(e) {
                        A[t] = e,
                        b.onUpdate && ns.ZP.update(F, !1, !0)
                    })
                      , r = e.onRenderRequest(Y.scheduleRender);
                    k.set(t, function() {
                        n(),
                        r()
                    })
                }
                var B = d(b);
                for (var N in B) {
                    var _ = B[N];
                    void 0 !== A[N] && q(_) && _.set(A[N], !1)
                }
                var z = V(b)
                  , H = M(b)
                  , Y = (0,
                u.pi)((0,
                u.pi)({
                    treeType: n,
                    current: null,
                    depth: g ? g.depth + 1 : 0,
                    parent: g,
                    children: new Set,
                    presenceId: x,
                    shouldReduceMotion: T,
                    variantChildren: H ? new Set : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: !!(null == g ? void 0 : g.isMounted()),
                    blockInitialAnimation: E,
                    isMounted: function() {
                        return !!m
                    },
                    mount: function(t) {
                        P = !0,
                        m = Y.current = t,
                        Y.projection && Y.projection.mount(t),
                        H && g && !z && (y = null == g ? void 0 : g.addVariantChild(Y)),
                        L.forEach(function(t, e) {
                            return U(e, t)
                        }),
                        null == g || g.children.add(Y),
                        Y.setProps(b)
                    },
                    unmount: function() {
                        var t;
                        null === (t = Y.projection) || void 0 === t || t.unmount(),
                        ns.qY.update(F),
                        ns.qY.render(D),
                        k.forEach(function(t) {
                            return t()
                        }),
                        null == y || y(),
                        null == g || g.children.delete(Y),
                        R.clearAllListeners(),
                        m = void 0,
                        P = !1
                    },
                    addVariantChild: function(t) {
                        var e, n = Y.getClosestVariantNode();
                        if (n)
                            return null === (e = n.variantChildren) || void 0 === e || e.add(t),
                            function() {
                                return n.variantChildren.delete(t)
                            }
                    },
                    sortNodePosition: function(t) {
                        return f && n === t.treeType ? f(Y.getInstance(), t.getInstance()) : 0
                    },
                    getClosestVariantNode: function() {
                        return H ? Y : null == g ? void 0 : g.getClosestVariantNode()
                    },
                    getLayoutId: function() {
                        return b.layoutId
                    },
                    getInstance: function() {
                        return m
                    },
                    getStaticValue: function(t) {
                        return A[t]
                    },
                    setStaticValue: function(t, e) {
                        return A[t] = e
                    },
                    getLatestValues: function() {
                        return A
                    },
                    setVisibility: function(t) {
                        Y.isVisible !== t && (Y.isVisible = t,
                        Y.scheduleRender())
                    },
                    makeTargetAnimatable: function(t, e) {
                        return void 0 === e && (e = !0),
                        o(Y, t, b, e)
                    },
                    measureViewportBox: function() {
                        return a(m, b)
                    },
                    addValue: function(t, e) {
                        Y.hasValue(t) && Y.removeValue(t),
                        L.set(t, e),
                        A[t] = e.get(),
                        U(t, e)
                    },
                    removeValue: function(t) {
                        var e;
                        L.delete(t),
                        null === (e = k.get(t)) || void 0 === e || e(),
                        k.delete(t),
                        delete A[t],
                        c(t, C)
                    },
                    hasValue: function(t) {
                        return L.has(t)
                    },
                    getValue: function(t, e) {
                        var n = L.get(t);
                        return void 0 === n && void 0 !== e && (n = nH(e),
                        Y.addValue(t, n)),
                        n
                    },
                    forEachValue: function(t) {
                        return L.forEach(t)
                    },
                    readValue: function(t) {
                        var n;
                        return null !== (n = A[t]) && void 0 !== n ? n : l(m, t, e)
                    },
                    setBaseTarget: function(t, e) {
                        j[t] = e
                    },
                    getBaseTarget: function(t) {
                        if (i) {
                            var e = i(b, t);
                            if (void 0 !== e && !q(e))
                                return e
                        }
                        return j[t]
                    }
                }, R), {
                    build: function() {
                        return I(),
                        C
                    },
                    scheduleRender: function() {
                        ns.ZP.render(D, !1, !0)
                    },
                    syncRender: D,
                    setProps: function(t) {
                        (t.transformTemplate || b.transformTemplate) && Y.scheduleRender(),
                        b = t,
                        R.updatePropListeners(t),
                        O = function(t, e, n) {
                            var r;
                            for (var i in e) {
                                var o = e[i]
                                  , a = n[i];
                                if (q(o))
                                    t.addValue(i, o);
                                else if (q(a))
                                    t.addValue(i, nH(o));
                                else if (a !== o) {
                                    if (t.hasValue(i)) {
                                        var s = t.getValue(i);
                                        s.hasAnimated || s.set(o)
                                    } else
                                        t.addValue(i, nH(null !== (r = t.getStaticValue(i)) && void 0 !== r ? r : o))
                                }
                            }
                            for (var i in n)
                                void 0 === e[i] && t.removeValue(i);
                            return e
                        }(Y, d(b), O)
                    },
                    getProps: function() {
                        return b
                    },
                    getVariant: function(t) {
                        var e;
                        return null === (e = b.variants) || void 0 === e ? void 0 : e[t]
                    },
                    getDefaultTransition: function() {
                        return b.transition
                    },
                    getTransformPagePoint: function() {
                        return b.transformPagePoint
                    },
                    getVariantContext: function(t) {
                        if (void 0 === t && (t = !1),
                        t)
                            return null == g ? void 0 : g.getVariantContext();
                        if (!z) {
                            var e = (null == g ? void 0 : g.getVariantContext()) || {};
                            return void 0 !== b.initial && (e.initial = b.initial),
                            e
                        }
                        for (var n = {}, r = 0; r < rF; r++) {
                            var i = rI[r]
                              , o = b[i];
                            (S(o) || !1 === o) && (n[i] = o)
                        }
                        return n
                    }
                });
                return Y
            }
        }
          , rI = (0,
        u.ev)(["initial"], (0,
        u.CR)(n$), !1)
          , rF = rI.length;
        function rU(t) {
            return "string" == typeof t && t.startsWith("var(--")
        }
        var rB = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        function rN(t, e, n) {
            void 0 === n && (n = 1),
            (0,
            p.k)(n <= 4, 'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.'));
            var r = (0,
            u.CR)(function(t) {
                var e = rB.exec(t);
                if (!e)
                    return [, ];
                var n = (0,
                u.CR)(e, 3);
                return [n[1], n[2]]
            }(t), 2)
              , i = r[0]
              , o = r[1];
            if (i) {
                var a = window.getComputedStyle(e).getPropertyValue(i);
                return a ? a.trim() : rU(o) ? rN(o, e, n + 1) : o
            }
        }
        var r_ = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"])
          , rz = function(t) {
            return r_.has(t)
        }
          , rH = function(t, e) {
            t.set(e, !1),
            t.set(e)
        }
          , rY = function(t) {
            return t === tc || t === ta
        };
        (o = s || (s = {})).width = "width",
        o.height = "height",
        o.left = "left",
        o.right = "right",
        o.top = "top",
        o.bottom = "bottom";
        var rW = function(t, e) {
            return parseFloat(t.split(", ")[e])
        }
          , rX = function(t, e) {
            return function(n, r) {
                var i = r.transform;
                if ("none" === i || !i)
                    return 0;
                var o = i.match(/^matrix3d\((.+)\)$/);
                if (o)
                    return rW(o[1], e);
                var a = i.match(/^matrix\((.+)\)$/);
                return a ? rW(a[1], t) : 0
            }
        }
          , rZ = new Set(["x", "y", "z"])
          , rq = z.filter(function(t) {
            return !rZ.has(t)
        })
          , rK = {
            width: function(t, e) {
                var n = t.x
                  , r = e.paddingLeft
                  , i = e.paddingRight;
                return n.max - n.min - parseFloat(void 0 === r ? "0" : r) - parseFloat(void 0 === i ? "0" : i)
            },
            height: function(t, e) {
                var n = t.y
                  , r = e.paddingTop
                  , i = e.paddingBottom;
                return n.max - n.min - parseFloat(void 0 === r ? "0" : r) - parseFloat(void 0 === i ? "0" : i)
            },
            top: function(t, e) {
                return parseFloat(e.top)
            },
            left: function(t, e) {
                return parseFloat(e.left)
            },
            bottom: function(t, e) {
                var n = t.y;
                return parseFloat(e.top) + (n.max - n.min)
            },
            right: function(t, e) {
                var n = t.x;
                return parseFloat(e.left) + (n.max - n.min)
            },
            x: rX(4, 13),
            y: rX(5, 14)
        }
          , rG = function(t, e, n) {
            var r = e.measureViewportBox()
              , i = e.getInstance()
              , o = getComputedStyle(i)
              , a = o.display
              , s = {};
            "none" === a && e.setStaticValue("display", t.display || "block"),
            n.forEach(function(t) {
                s[t] = rK[t](r, o)
            }),
            e.syncRender();
            var u = e.measureViewportBox();
            return n.forEach(function(n) {
                rH(e.getValue(n), s[n]),
                t[n] = rK[n](u, o)
            }),
            t
        }
          , r$ = function(t, e, n, r) {
            void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            e = (0,
            u.pi)({}, e),
            r = (0,
            u.pi)({}, r);
            var i = Object.keys(e).filter(rz)
              , o = []
              , a = !1
              , s = [];
            if (i.forEach(function(i) {
                var u, l = t.getValue(i);
                if (t.hasValue(i)) {
                    var c = n[i]
                      , f = nX(c)
                      , d = e[i];
                    if (tj(d)) {
                        var v = d.length
                          , h = null === d[0] ? 1 : 0;
                        f = nX(c = d[h]);
                        for (var m = h; m < v; m++)
                            u ? (0,
                            p.k)(nX(d[m]) === u, "All keyframes must be of the same type") : (u = nX(d[m]),
                            (0,
                            p.k)(u === f || rY(f) && rY(u), "Keyframes must be of the same dimension as the current value"))
                    } else
                        u = nX(d);
                    if (f !== u) {
                        if (rY(f) && rY(u)) {
                            var y, g = l.get();
                            "string" == typeof g && l.set(parseFloat(g)),
                            "string" == typeof d ? e[i] = parseFloat(d) : Array.isArray(d) && u === ta && (e[i] = d.map(parseFloat))
                        } else
                            (null == f ? void 0 : f.transform) && (null == u ? void 0 : u.transform) && (0 === c || 0 === d) ? 0 === c ? l.set(u.transform(c)) : e[i] = f.transform(d) : (a || (y = [],
                            rq.forEach(function(e) {
                                var n = t.getValue(e);
                                void 0 !== n && (y.push([e, n.get()]),
                                n.set(e.startsWith("scale") ? 1 : 0))
                            }),
                            y.length && t.syncRender(),
                            o = y,
                            a = !0),
                            s.push(i),
                            r[i] = void 0 !== r[i] ? r[i] : e[i],
                            rH(l, d))
                    }
                }
            }),
            !s.length)
                return {
                    target: e,
                    transitionEnd: r
                };
            var l = s.indexOf("height") >= 0 ? window.pageYOffset : null
              , c = rG(e, t, s);
            return o.length && o.forEach(function(e) {
                var n = (0,
                u.CR)(e, 2)
                  , r = n[0]
                  , i = n[1];
                t.getValue(r).set(i)
            }),
            t.syncRender(),
            null !== l && window.scrollTo({
                top: l
            }),
            {
                target: c,
                transitionEnd: r
            }
        }
          , rJ = function(t, e, n, r) {
            var i, o, a = function(t, e, n) {
                var r, i = (0,
                u._T)(e, []), o = t.getInstance();
                if (!(o instanceof Element))
                    return {
                        target: i,
                        transitionEnd: n
                    };
                for (var a in n && (n = (0,
                u.pi)({}, n)),
                t.forEachValue(function(t) {
                    var e = t.get();
                    if (rU(e)) {
                        var n = rN(e, o);
                        n && t.set(n)
                    }
                }),
                i) {
                    var s = i[a];
                    if (rU(s)) {
                        var l = rN(s, o);
                        l && (i[a] = l,
                        n && (null !== (r = n[a]) && void 0 !== r || (n[a] = s)))
                    }
                }
                return {
                    target: i,
                    transitionEnd: n
                }
            }(t, e, r);
            return i = e = a.target,
            o = r = a.transitionEnd,
            Object.keys(i).some(rz) ? r$(t, i, n, o) : {
                target: i,
                transitionEnd: o
            }
        }
          , rQ = {
            treeType: "dom",
            readValueFromInstance: function(t, e) {
                if (W(e)) {
                    var n = nL(e);
                    return n && n.default || 0
                }
                var r = window.getComputedStyle(t);
                return (G(e) ? r.getPropertyValue(e) : r[e]) || 0
            },
            sortNodePosition: function(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            },
            getBaseTarget: function(t, e) {
                var n;
                return null === (n = t.style) || void 0 === n ? void 0 : n[e]
            },
            measureViewportBox: function(t, e) {
                return rV(t, e.transformPagePoint)
            },
            resetTransform: function(t, e, n) {
                var r = n.transformTemplate;
                e.style.transform = r ? r({}, "") : "none",
                t.scheduleRender()
            },
            restoreTransform: function(t, e) {
                t.style.transform = e.style.transform
            },
            removeValueFromRenderState: function(t, e) {
                var n = e.vars
                  , r = e.style;
                delete n[t],
                delete r[t]
            },
            makeTargetAnimatable: function(t, e, n, r) {
                var i = n.transformValues;
                void 0 === r && (r = !0);
                var o = e.transition
                  , a = e.transitionEnd
                  , s = (0,
                u._T)(e, ["transition", "transitionEnd"])
                  , l = function(t, e, n) {
                    var r, i, o = {};
                    for (var a in t)
                        o[a] = null !== (r = function(t, e) {
                            if (e)
                                return (e[t] || e.default || e).from
                        }(a, e)) && void 0 !== r ? r : null === (i = n.getValue(a)) || void 0 === i ? void 0 : i.get();
                    return o
                }(s, o || {}, t);
                if (i && (a && (a = i(a)),
                s && (s = i(s)),
                l && (l = i(l))),
                r) {
                    !function(t, e, n) {
                        var r, i, o, a = Object.keys(e).filter(function(e) {
                            return !t.hasValue(e)
                        }), s = a.length;
                        if (s)
                            for (var u = 0; u < s; u++) {
                                var l, c, f, d = a[u], p = e[d], v = null;
                                Array.isArray(p) && (v = p[0]),
                                null === v && (v = null !== (i = null !== (r = n[d]) && void 0 !== r ? r : t.readValue(d)) && void 0 !== i ? i : e[d]),
                                null != v && ("string" == typeof v && (l = v,
                                /^\-?\d*\.?\d+$/.test(l) || (c = v,
                                /^0[^.\s]+$/.test(c))) ? v = parseFloat(v) : (f = v,
                                !nZ.find(nY(f)) && eB.test(p) && (v = nk(d, p))),
                                t.addValue(d, nH(v)),
                                null !== (o = n[d]) && void 0 !== o || (n[d] = v),
                                t.setBaseTarget(d, v))
                            }
                    }(t, s, l);
                    var c = rJ(t, s, l, a);
                    a = c.transitionEnd,
                    s = c.target
                }
                return (0,
                u.pi)({
                    transition: o,
                    transitionEnd: a
                }, s)
            },
            scrapeMotionValuesFromProps: tL,
            build: function(t, e, n, r, i) {
                void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"),
                th(e, n, r, i.transformTemplate)
            },
            render: tR
        }
          , r0 = rD(rQ)
          , r1 = rD((0,
        u.pi)((0,
        u.pi)({}, rQ), {
            getBaseTarget: function(t, e) {
                return t[e]
            },
            readValueFromInstance: function(t, e) {
                var n;
                return W(e) ? (null === (n = nL(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = tV.has(e) ? e : tC(e),
                t.getAttribute(e))
            },
            scrapeMotionValuesFromProps: tk,
            build: function(t, e, n, r, i) {
                tP(e, n, r, i.transformTemplate)
            },
            render: tM
        }))
          , r2 = function(t, e) {
            return B(t) ? r1(e, {
                enableHardwareAcceleration: !1
            }) : r0(e, {
                enableHardwareAcceleration: !0
            })
        };
        function r5(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        var r3 = {
            correct: function(t, e) {
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!ta.test(t))
                        return t;
                    t = parseFloat(t)
                }
                var n = r5(t, e.target.x)
                  , r = r5(t, e.target.y);
                return "".concat(n, "% ").concat(r, "%")
            }
        }
          , r4 = "_$css"
          , r6 = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0,
            u.ZT)(e, t),
            e.prototype.componentDidMount = function() {
                var t = this
                  , e = this.props
                  , n = e.visualElement
                  , r = e.layoutGroup
                  , i = e.switchLayoutGroup
                  , o = e.layoutId
                  , a = n.projection;
                Object.assign(N, r7),
                a && ((null == r ? void 0 : r.group) && r.group.add(a),
                (null == i ? void 0 : i.register) && o && i.register(a),
                a.root.didUpdate(),
                a.addEventListener("animationComplete", function() {
                    t.safeToRemove()
                }),
                a.setOptions((0,
                u.pi)((0,
                u.pi)({}, a.options), {
                    onExitComplete: function() {
                        return t.safeToRemove()
                    }
                }))),
                O.hasEverUpdated = !0
            }
            ,
            e.prototype.getSnapshotBeforeUpdate = function(t) {
                var e = this
                  , n = this.props
                  , r = n.layoutDependency
                  , i = n.visualElement
                  , o = n.drag
                  , a = n.isPresent
                  , s = i.projection;
                return s && (s.isPresent = a,
                o || t.layoutDependency !== r || void 0 === r ? s.willUpdate() : this.safeToRemove(),
                t.isPresent === a || (a ? s.promote() : s.relegate() || ns.ZP.postRender(function() {
                    var t;
                    (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || e.safeToRemove()
                }))),
                null
            }
            ,
            e.prototype.componentDidUpdate = function() {
                var t = this.props.visualElement.projection;
                t && (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove())
            }
            ,
            e.prototype.componentWillUnmount = function() {
                var t = this.props
                  , e = t.visualElement
                  , n = t.layoutGroup
                  , r = t.switchLayoutGroup
                  , i = e.projection;
                i && (i.scheduleCheckAfterUnmount(),
                (null == n ? void 0 : n.group) && n.group.remove(i),
                (null == r ? void 0 : r.deregister) && r.deregister(i))
            }
            ,
            e.prototype.safeToRemove = function() {
                var t = this.props.safeToRemove;
                null == t || t()
            }
            ,
            e.prototype.render = function() {
                return null
            }
            ,
            e
        }(l.Component)
          , r7 = {
            borderRadius: (0,
            u.pi)((0,
            u.pi)({}, r3), {
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            }),
            borderTopLeftRadius: r3,
            borderTopRightRadius: r3,
            borderBottomLeftRadius: r3,
            borderBottomRightRadius: r3,
            boxShadow: {
                correct: function(t, e) {
                    var n = e.treeScale
                      , r = e.projectionDelta
                      , i = t
                      , o = t.includes("var(")
                      , a = [];
                    o && (t = t.replace(rB, function(t) {
                        return a.push(t),
                        r4
                    }));
                    var s = eB.parse(t);
                    if (s.length > 5)
                        return i;
                    var u = eB.createTransformer(t)
                      , l = "number" != typeof s[0] ? 1 : 0
                      , c = r.x.scale * n.x
                      , f = r.y.scale * n.y;
                    s[0 + l] /= c,
                    s[1 + l] /= f;
                    var d = ey(c, f, .5);
                    "number" == typeof s[2 + l] && (s[2 + l] /= d),
                    "number" == typeof s[3 + l] && (s[3 + l] /= d);
                    var p = u(s);
                    if (o) {
                        var v = 0;
                        p = p.replace(r4, function() {
                            var t = a[v];
                            return v++,
                            t
                        })
                    }
                    return p
                }
            }
        }
          , r8 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , r9 = r8.length
          , it = function(t) {
            return "string" == typeof t ? parseFloat(t) : t
        }
          , ie = function(t) {
            return "number" == typeof t || ta.test(t)
        };
        function ir(t, e) {
            var n;
            return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
        }
        var ii = ia(0, .5, e3)
          , io = ia(.5, .95, eQ);
        function ia(t, e, n) {
            return function(r) {
                return r < t ? 0 : r > e ? 1 : n(em(t, e, r))
            }
        }
        function is(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function iu(t, e) {
            is(t.x, e.x),
            is(t.y, e.y)
        }
        function il(t, e, n, r, i) {
            return t -= e,
            t = r + 1 / n * (t - r),
            void 0 !== i && (t = r + 1 / i * (t - r)),
            t
        }
        function ic(t, e, n, r, i) {
            var o = (0,
            u.CR)(n, 3)
              , a = o[0]
              , s = o[1]
              , l = o[2];
            !function(t, e, n, r, i, o, a) {
                if (void 0 === e && (e = 0),
                void 0 === n && (n = 1),
                void 0 === r && (r = .5),
                void 0 === o && (o = t),
                void 0 === a && (a = t),
                to.test(e) && (e = parseFloat(e),
                e = ey(a.min, a.max, e / 100) - a.min),
                "number" == typeof e) {
                    var s = ey(o.min, o.max, r);
                    t === o && (s -= e),
                    t.min = il(t.min, e, n, s, i),
                    t.max = il(t.max, e, n, s, i)
                }
            }(t, e[a], e[s], e[l], e.scale, r, i)
        }
        var id = ["x", "scaleX", "originX"]
          , ip = ["y", "scaleY", "originY"];
        function iv(t, e, n, r) {
            ic(t.x, e, id, null == n ? void 0 : n.x, null == r ? void 0 : r.x),
            ic(t.y, e, ip, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
        }
        function ih(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function im(t) {
            return ih(t.x) && ih(t.y)
        }
        function iy(t, e) {
            return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
        }
        var ig = function() {
            function t() {
                this.members = []
            }
            return t.prototype.add = function(t) {
                nB(this.members, t),
                t.scheduleRender()
            }
            ,
            t.prototype.remove = function(t) {
                if (nN(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    var e = this.members[this.members.length - 1];
                    e && this.promote(e)
                }
            }
            ,
            t.prototype.relegate = function(t) {
                var e, n = this.members.findIndex(function(e) {
                    return t === e
                });
                if (0 === n)
                    return !1;
                for (var r = n; r >= 0; r--) {
                    var i = this.members[r];
                    if (!1 !== i.isPresent) {
                        e = i;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            ,
            t.prototype.promote = function(t, e) {
                var n, r = this.lead;
                t !== r && (this.prevLead = r,
                this.lead = t,
                t.show(),
                r && (r.instance && r.scheduleRender(),
                t.scheduleRender(),
                t.resumeFrom = r,
                e && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && (t.snapshot = r.snapshot,
                t.snapshot.latestValues = r.animationValues || r.latestValues,
                t.snapshot.isShared = !0),
                (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0),
                !1 === t.options.crossfade && r.hide()))
            }
            ,
            t.prototype.exitAnimationComplete = function() {
                this.members.forEach(function(t) {
                    var e, n, r, i, o;
                    null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e),
                    null === (o = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (i = r.options).onExitComplete) || void 0 === o || o.call(i)
                })
            }
            ,
            t.prototype.scheduleRender = function() {
                this.members.forEach(function(t) {
                    t.instance && t.scheduleRender(!1)
                })
            }
            ,
            t.prototype.removeLeadSnapshot = function() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
            ,
            t
        }();
        function ib(t, e, n) {
            var r = t.x.translate / e.x
              , i = t.y.translate / e.y
              , o = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
            if (o += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") "),
            n) {
                var a = n.rotate
                  , s = n.rotateX
                  , u = n.rotateY;
                a && (o += "rotate(".concat(a, "deg) ")),
                s && (o += "rotateX(".concat(s, "deg) ")),
                u && (o += "rotateY(".concat(u, "deg) "))
            }
            var l = t.x.scale * e.x
              , c = t.y.scale * e.y;
            return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" === (o += "scale(".concat(l, ", ").concat(c, ")")) ? "none" : o
        }
        var ix = function(t, e) {
            return t.depth - e.depth
        }
          , iE = function() {
            function t() {
                this.children = [],
                this.isDirty = !1
            }
            return t.prototype.add = function(t) {
                nB(this.children, t),
                this.isDirty = !0
            }
            ,
            t.prototype.remove = function(t) {
                nN(this.children, t),
                this.isDirty = !0
            }
            ,
            t.prototype.forEach = function(t) {
                this.isDirty && this.children.sort(ix),
                this.isDirty = !1,
                this.children.forEach(t)
            }
            ,
            t
        }();
        function iw(t) {
            var e = t.attachResizeListener
              , n = t.defaultParent
              , r = t.measureScroll
              , i = t.checkIsScrollRoot
              , o = t.resetTransform;
            return function() {
                function t(t, e, r) {
                    var i = this;
                    void 0 === e && (e = {}),
                    void 0 === r && (r = null == n ? void 0 : n()),
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.potentialNodes = new Map,
                    this.checkUpdateFailed = function() {
                        i.isUpdating && (i.isUpdating = !1,
                        i.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = function() {
                        i.nodes.forEach(iV),
                        i.nodes.forEach(iM)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.id = t,
                    this.latestValues = e,
                    this.root = r ? r.root || r : this,
                    this.path = r ? (0,
                    u.ev)((0,
                    u.ev)([], (0,
                    u.CR)(r.path), !1), [r], !1) : [],
                    this.parent = r,
                    this.depth = r ? r.depth + 1 : 0,
                    t && this.root.registerPotentialNode(t, this);
                    for (var o = 0; o < this.path.length; o++)
                        this.path[o].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new iE)
                }
                return t.prototype.addEventListener = function(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new n_),
                    this.eventHandlers.get(t).add(e)
                }
                ,
                t.prototype.notifyListeners = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n];
                    var r = this.eventHandlers.get(t);
                    null == r || r.notify.apply(r, (0,
                    u.ev)([], (0,
                    u.CR)(e), !1))
                }
                ,
                t.prototype.hasListeners = function(t) {
                    return this.eventHandlers.has(t)
                }
                ,
                t.prototype.registerPotentialNode = function(t, e) {
                    this.potentialNodes.set(t, e)
                }
                ,
                t.prototype.mount = function(t, n) {
                    var r = this;
                    if (void 0 === n && (n = !1),
                    !this.instance) {
                        this.isSVG = t instanceof SVGElement && "svg" !== t.tagName,
                        this.instance = t;
                        var i = this.options
                          , o = i.layoutId
                          , a = i.layout
                          , s = i.visualElement;
                        if (s && !s.getInstance() && s.mount(t),
                        this.root.nodes.add(this),
                        null === (l = this.parent) || void 0 === l || l.children.add(this),
                        this.id && this.root.potentialNodes.delete(this.id),
                        n && (a || o) && (this.isLayoutDirty = !0),
                        e) {
                            var l, c, f = function() {
                                return r.root.updateBlockedByResize = !1
                            };
                            e(t, function() {
                                r.root.updateBlockedByResize = !0,
                                clearTimeout(c),
                                c = window.setTimeout(f, 250),
                                O.hasAnimatedSinceResize && (O.hasAnimatedSinceResize = !1,
                                r.nodes.forEach(iR))
                            })
                        }
                        o && this.root.registerSharedNode(o, this),
                        !1 !== this.options.animate && s && (o || a) && this.addEventListener("didUpdate", function(t) {
                            var e, n, i, o, a, l = t.delta, c = t.hasLayoutChanged, f = t.hasRelativeTargetChanged, d = t.layout;
                            if (r.isTreeAnimationBlocked()) {
                                r.target = void 0,
                                r.relativeTarget = void 0;
                                return
                            }
                            var p = null !== (n = null !== (e = r.options.transition) && void 0 !== e ? e : s.getDefaultTransition()) && void 0 !== n ? n : iI
                              , v = s.getProps()
                              , h = v.onLayoutAnimationStart
                              , m = v.onLayoutAnimationComplete
                              , y = !r.targetLayout || !iy(r.targetLayout, d) || f
                              , g = !c && f;
                            if ((null === (i = r.resumeFrom) || void 0 === i ? void 0 : i.instance) || g || c && (y || !r.currentAnimation)) {
                                r.resumeFrom && (r.resumingFrom = r.resumeFrom,
                                r.resumingFrom.resumingFrom = void 0),
                                r.setAnimationOrigin(l, g);
                                var b = (0,
                                u.pi)((0,
                                u.pi)({}, nF(p, "layout")), {
                                    onPlay: h,
                                    onComplete: m
                                });
                                s.shouldReduceMotion && (b.delay = 0,
                                b.type = !1),
                                r.startAnimation(b)
                            } else
                                c || 0 !== r.animationProgress || r.finishAnimation(),
                                r.isLead() && (null === (a = (o = r.options).onExitComplete) || void 0 === a || a.call(o));
                            r.targetLayout = d
                        })
                    }
                }
                ,
                t.prototype.unmount = function() {
                    var t, e;
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this),
                    null === (t = this.getStack()) || void 0 === t || t.remove(this),
                    null === (e = this.parent) || void 0 === e || e.children.delete(this),
                    this.instance = void 0,
                    ns.qY.preRender(this.updateProjection)
                }
                ,
                t.prototype.blockUpdate = function() {
                    this.updateManuallyBlocked = !0
                }
                ,
                t.prototype.unblockUpdate = function() {
                    this.updateManuallyBlocked = !1
                }
                ,
                t.prototype.isUpdateBlocked = function() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                ,
                t.prototype.isTreeAnimationBlocked = function() {
                    var t;
                    return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                }
                ,
                t.prototype.startUpdate = function() {
                    var t;
                    this.isUpdateBlocked() || (this.isUpdating = !0,
                    null === (t = this.nodes) || void 0 === t || t.forEach(iL))
                }
                ,
                t.prototype.willUpdate = function(t) {
                    if (void 0 === t && (t = !0),
                    this.root.isUpdateBlocked()) {
                        null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
                        return
                    }
                    if (this.root.isUpdating || this.root.startUpdate(),
                    !this.isLayoutDirty) {
                        this.isLayoutDirty = !0;
                        for (var e, n, r, i = 0; i < this.path.length; i++) {
                            var o = this.path[i];
                            o.shouldResetTransform = !0,
                            o.updateScroll()
                        }
                        var a = this.options
                          , s = a.layoutId
                          , u = a.layout;
                        if (void 0 !== s || u) {
                            var l = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                            this.prevTransformTemplateValue = null == l ? void 0 : l(this.latestValues, ""),
                            this.updateSnapshot(),
                            t && this.notifyListeners("willUpdate")
                        }
                    }
                }
                ,
                t.prototype.didUpdate = function() {
                    if (this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(iS);
                        return
                    }
                    this.isUpdating && (this.isUpdating = !1,
                    this.potentialNodes.size && (this.potentialNodes.forEach(iF),
                    this.potentialNodes.clear()),
                    this.nodes.forEach(iC),
                    this.nodes.forEach(iT),
                    this.nodes.forEach(iP),
                    this.clearAllSnapshots(),
                    ns.iW.update(),
                    ns.iW.preRender(),
                    ns.iW.render())
                }
                ,
                t.prototype.clearAllSnapshots = function() {
                    this.nodes.forEach(iA),
                    this.sharedNodes.forEach(ik)
                }
                ,
                t.prototype.scheduleUpdateProjection = function() {
                    ns.ZP.preRender(this.updateProjection, !1, !0)
                }
                ,
                t.prototype.scheduleCheckAfterUnmount = function() {
                    var t = this;
                    ns.ZP.postRender(function() {
                        t.isLayoutDirty ? t.root.didUpdate() : t.root.checkUpdateFailed()
                    })
                }
                ,
                t.prototype.updateSnapshot = function() {
                    if (!this.snapshot && this.instance) {
                        var t = this.measure()
                          , e = this.removeTransform(this.removeElementScroll(t));
                        iB(e),
                        this.snapshot = {
                            measured: t,
                            layout: e,
                            latestValues: {}
                        }
                    }
                }
                ,
                t.prototype.updateLayout = function() {
                    if (this.instance && (this.updateScroll(),
                    this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (var t, e = 0; e < this.path.length; e++)
                                this.path[e].updateScroll();
                        var n = this.measure();
                        iB(n);
                        var r = this.layout;
                        this.layout = {
                            measured: n,
                            actual: this.removeElementScroll(n)
                        },
                        this.layoutCorrected = rh(),
                        this.isLayoutDirty = !1,
                        this.projectionDelta = void 0,
                        this.notifyListeners("measure", this.layout.actual),
                        null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null == r ? void 0 : r.actual)
                    }
                }
                ,
                t.prototype.updateScroll = function() {
                    this.options.layoutScroll && this.instance && (this.isScrollRoot = i(this.instance),
                    this.scroll = r(this.instance))
                }
                ,
                t.prototype.resetTransform = function() {
                    if (o) {
                        var t, e = this.isLayoutDirty || this.shouldResetTransform, n = this.projectionDelta && !im(this.projectionDelta), r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate, i = null == r ? void 0 : r(this.latestValues, ""), a = i !== this.prevTransformTemplateValue;
                        e && (n || rx(this.latestValues) || a) && (o(this.instance, i),
                        this.shouldResetTransform = !1,
                        this.scheduleRender())
                    }
                }
                ,
                t.prototype.measure = function() {
                    var t = this.options.visualElement;
                    if (!t)
                        return rh();
                    var e = t.measureViewportBox()
                      , n = this.root.scroll;
                    return n && (rP(e.x, n.x),
                    rP(e.y, n.y)),
                    e
                }
                ,
                t.prototype.removeElementScroll = function(t) {
                    var e = rh();
                    iu(e, t);
                    for (var n = 0; n < this.path.length; n++) {
                        var r = this.path[n]
                          , i = r.scroll
                          , o = r.options
                          , a = r.isScrollRoot;
                        if (r !== this.root && i && o.layoutScroll) {
                            if (a) {
                                iu(e, t);
                                var s = this.root.scroll;
                                s && (rP(e.x, -s.x),
                                rP(e.y, -s.y))
                            }
                            rP(e.x, i.x),
                            rP(e.y, i.y)
                        }
                    }
                    return e
                }
                ,
                t.prototype.applyTransform = function(t, e) {
                    void 0 === e && (e = !1);
                    var n = rh();
                    iu(n, t);
                    for (var r = 0; r < this.path.length; r++) {
                        var i = this.path[r];
                        !e && i.options.layoutScroll && i.scroll && i !== i.root && rR(n, {
                            x: -i.scroll.x,
                            y: -i.scroll.y
                        }),
                        rx(i.latestValues) && rR(n, i.latestValues)
                    }
                    return rx(this.latestValues) && rR(n, this.latestValues),
                    n
                }
                ,
                t.prototype.removeTransform = function(t) {
                    var e, n = rh();
                    iu(n, t);
                    for (var r = 0; r < this.path.length; r++) {
                        var i = this.path[r];
                        if (i.instance && rx(i.latestValues)) {
                            rb(i.latestValues) && i.updateSnapshot();
                            var o = rh();
                            iu(o, i.measure()),
                            iv(n, i.latestValues, null === (e = i.snapshot) || void 0 === e ? void 0 : e.layout, o)
                        }
                    }
                    return rx(this.latestValues) && iv(n, this.latestValues),
                    n
                }
                ,
                t.prototype.setTargetDelta = function(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection()
                }
                ,
                t.prototype.setOptions = function(t) {
                    var e;
                    this.options = (0,
                    u.pi)((0,
                    u.pi)((0,
                    u.pi)({}, this.options), t), {
                        crossfade: null === (e = t.crossfade) || void 0 === e || e
                    })
                }
                ,
                t.prototype.clearMeasurements = function() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                ,
                t.prototype.resolveTargetDelta = function() {
                    var t, e, n, r, i = this.options, o = i.layout, a = i.layoutId;
                    this.layout && (o || a) && (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(),
                    this.relativeParent && this.relativeParent.layout && (this.relativeTarget = rh(),
                    this.relativeTargetOrigin = rh(),
                    rs(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual),
                    iu(this.relativeTarget, this.relativeTargetOrigin))),
                    (this.relativeTarget || this.targetDelta) && ((this.target || (this.target = rh(),
                    this.targetWithTransforms = rh()),
                    this.relativeTarget && this.relativeTargetOrigin && (null === (r = this.relativeParent) || void 0 === r ? void 0 : r.target)) ? (t = this.target,
                    e = this.relativeTarget,
                    n = this.relativeParent.target,
                    ro(t.x, e.x, n.x),
                    ro(t.y, e.y, n.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.actual) : iu(this.target, this.layout.actual),
                    rT(this.target, this.targetDelta)) : iu(this.target, this.layout.actual),
                    this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
                    this.relativeParent = this.getClosestProjectingParent(),
                    this.relativeParent && !!this.relativeParent.resumingFrom == !!this.resumingFrom && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = rh(),
                    this.relativeTargetOrigin = rh(),
                    rs(this.relativeTargetOrigin, this.target, this.relativeParent.target),
                    iu(this.relativeTarget, this.relativeTargetOrigin)))))
                }
                ,
                t.prototype.getClosestProjectingParent = function() {
                    if (!(!this.parent || rx(this.parent.latestValues)))
                        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                }
                ,
                t.prototype.calcProjection = function() {
                    var t, e = this.options, n = e.layout, r = e.layoutId;
                    if (this.isTreeAnimating = !!((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    this.layout && (n || r)) {
                        var i = this.getLead();
                        iu(this.layoutCorrected, this.layout.actual),
                        function(t, e, n, r) {
                            void 0 === r && (r = !1);
                            var i, o, a, s, u = n.length;
                            if (u) {
                                e.x = e.y = 1;
                                for (var l = 0; l < u; l++)
                                    s = (a = n[l]).projectionDelta,
                                    (null === (o = null === (i = a.instance) || void 0 === i ? void 0 : i.style) || void 0 === o ? void 0 : o.display) !== "contents" && (r && a.options.layoutScroll && a.scroll && a !== a.root && rR(t, {
                                        x: -a.scroll.x,
                                        y: -a.scroll.y
                                    }),
                                    s && (e.x *= s.x.scale,
                                    e.y *= s.y.scale,
                                    rT(t, s)),
                                    r && rx(a.latestValues) && rR(t, a.latestValues))
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, !!this.resumingFrom || this !== i);
                        var o = i.target;
                        if (o) {
                            this.projectionDelta || (this.projectionDelta = rp(),
                            this.projectionDeltaWithTransform = rp());
                            var a = this.treeScale.x
                              , s = this.treeScale.y
                              , u = this.projectionTransform;
                            ri(this.projectionDelta, this.layoutCorrected, o, this.latestValues),
                            this.projectionTransform = ib(this.projectionDelta, this.treeScale),
                            (this.projectionTransform !== u || this.treeScale.x !== a || this.treeScale.y !== s) && (this.hasProjected = !0,
                            this.scheduleRender(),
                            this.notifyListeners("projectionUpdate", o))
                        }
                    }
                }
                ,
                t.prototype.hide = function() {
                    this.isVisible = !1
                }
                ,
                t.prototype.show = function() {
                    this.isVisible = !0
                }
                ,
                t.prototype.scheduleRender = function(t) {
                    var e, n, r;
                    void 0 === t && (t = !0),
                    null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e),
                    t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()),
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                ,
                t.prototype.setAnimationOrigin = function(t, e) {
                    var n, r = this;
                    void 0 === e && (e = !1);
                    var i = this.snapshot
                      , o = (null == i ? void 0 : i.latestValues) || {}
                      , a = (0,
                    u.pi)({}, this.latestValues)
                      , s = rp();
                    this.relativeTarget = this.relativeTargetOrigin = void 0,
                    this.attemptToResolveRelativeTarget = !e;
                    var l = rh()
                      , c = null == i ? void 0 : i.isShared
                      , f = 1 >= ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0)
                      , d = !!(c && !f && !0 === this.options.crossfade && !this.path.some(iD));
                    this.animationProgress = 0,
                    this.mixTargetDelta = function(e) {
                        var n, i, u, p = e / 1e3;
                        iO(s.x, t.x, p),
                        iO(s.y, t.y, p),
                        r.setTargetDelta(s),
                        r.relativeTarget && r.relativeTargetOrigin && r.layout && (null === (u = r.relativeParent) || void 0 === u ? void 0 : u.layout) && (rs(l, r.layout.actual, r.relativeParent.layout.actual),
                        n = r.relativeTarget,
                        i = r.relativeTargetOrigin,
                        ij(n.x, i.x, l.x, p),
                        ij(n.y, i.y, l.y, p)),
                        c && (r.animationValues = a,
                        function(t, e, n, r, i, o) {
                            var a, s, u, l;
                            i ? (t.opacity = ey(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, ii(r)),
                            t.opacityExit = ey(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, io(r))) : o && (t.opacity = ey(null !== (u = e.opacity) && void 0 !== u ? u : 1, null !== (l = n.opacity) && void 0 !== l ? l : 1, r));
                            for (var c = 0; c < r9; c++) {
                                var f = "border".concat(r8[c], "Radius")
                                  , d = ir(e, f)
                                  , p = ir(n, f);
                                (void 0 !== d || void 0 !== p) && (d || (d = 0),
                                p || (p = 0),
                                0 === d || 0 === p || ie(d) === ie(p) ? (t[f] = Math.max(ey(it(d), it(p), r), 0),
                                (to.test(p) || to.test(d)) && (t[f] += "%")) : t[f] = p)
                            }
                            (e.rotate || n.rotate) && (t.rotate = ey(e.rotate || 0, n.rotate || 0, r))
                        }(a, o, r.latestValues, p, d, f)),
                        r.root.scheduleUpdateProjection(),
                        r.scheduleRender(),
                        r.animationProgress = p
                    }
                    ,
                    this.mixTargetDelta(0)
                }
                ,
                t.prototype.startAnimation = function(t) {
                    var e, n, r = this;
                    this.notifyListeners("animationStart"),
                    null === (e = this.currentAnimation) || void 0 === e || e.stop(),
                    this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()),
                    this.pendingAnimation && (ns.qY.update(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = ns.ZP.update(function() {
                        var e, n;
                        O.hasAnimatedSinceResize = !0,
                        r.currentAnimation = (void 0 === (e = (0,
                        u.pi)((0,
                        u.pi)({}, t), {
                            onUpdate: function(e) {
                                var n;
                                r.mixTargetDelta(e),
                                null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                            },
                            onComplete: function() {
                                var e;
                                null === (e = t.onComplete) || void 0 === e || e.call(t),
                                r.completeAnimation()
                            }
                        })) && (e = {}),
                        nU("", n = q(0) ? 0 : nH(0), 1e3, e),
                        {
                            stop: function() {
                                return n.stop()
                            },
                            isAnimating: function() {
                                return n.isAnimating()
                            }
                        }),
                        r.resumingFrom && (r.resumingFrom.currentAnimation = r.currentAnimation),
                        r.pendingAnimation = void 0
                    })
                }
                ,
                t.prototype.completeAnimation = function() {
                    var t;
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0),
                    null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                ,
                t.prototype.finishAnimation = function() {
                    var t;
                    this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                ,
                t.prototype.applyTransformsToTarget = function() {
                    var t = this.getLead()
                      , e = t.targetWithTransforms
                      , n = t.target
                      , r = t.layout
                      , i = t.latestValues;
                    e && n && r && (iu(e, n),
                    rR(e, i),
                    ri(this.projectionDeltaWithTransform, this.layoutCorrected, e, i))
                }
                ,
                t.prototype.registerSharedNode = function(t, e) {
                    var n, r, i;
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new ig),
                    this.sharedNodes.get(t).add(e),
                    e.promote({
                        transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                        preserveFollowOpacity: null === (i = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === i ? void 0 : i.call(r, e)
                    })
                }
                ,
                t.prototype.isLead = function() {
                    var t = this.getStack();
                    return !t || t.lead === this
                }
                ,
                t.prototype.getLead = function() {
                    var t;
                    return this.options.layoutId && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                ,
                t.prototype.getPrevLead = function() {
                    var t;
                    return this.options.layoutId ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                ,
                t.prototype.getStack = function() {
                    var t = this.options.layoutId;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                ,
                t.prototype.promote = function(t) {
                    var e = void 0 === t ? {} : t
                      , n = e.needsReset
                      , r = e.transition
                      , i = e.preserveFollowOpacity
                      , o = this.getStack();
                    o && o.promote(this, i),
                    n && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    r && this.setOptions({
                        transition: r
                    })
                }
                ,
                t.prototype.relegate = function() {
                    var t = this.getStack();
                    return !!t && t.relegate(this)
                }
                ,
                t.prototype.resetRotation = function() {
                    var t = this.options.visualElement;
                    if (t) {
                        for (var e = !1, n = {}, r = 0; r < _.length; r++) {
                            var i = "rotate" + _[r];
                            t.getStaticValue(i) && (e = !0,
                            n[i] = t.getStaticValue(i),
                            t.setStaticValue(i, 0))
                        }
                        if (e) {
                            for (var i in null == t || t.syncRender(),
                            n)
                                t.setStaticValue(i, n[i]);
                            t.scheduleRender()
                        }
                    }
                }
                ,
                t.prototype.getProjectionStyles = function(t) {
                    void 0 === t && (t = {});
                    var e, n, r, i, o, a, s = {};
                    if (!this.instance || this.isSVG)
                        return s;
                    if (!this.isVisible)
                        return {
                            visibility: "hidden"
                        };
                    s.visibility = "";
                    var u = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                    if (this.needsReset)
                        return this.needsReset = !1,
                        s.opacity = "",
                        s.pointerEvents = tI(t.pointerEvents) || "",
                        s.transform = u ? u(this.latestValues, "") : "none",
                        s;
                    var l = this.getLead();
                    if (!this.projectionDelta || !this.layout || !l.target) {
                        var c = {};
                        return this.options.layoutId && (c.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1,
                        c.pointerEvents = tI(t.pointerEvents) || ""),
                        this.hasProjected && !rx(this.latestValues) && (c.transform = u ? u({}, "") : "none",
                        this.hasProjected = !1),
                        c
                    }
                    var f = l.animationValues || l.latestValues;
                    this.applyTransformsToTarget(),
                    s.transform = ib(this.projectionDeltaWithTransform, this.treeScale, f),
                    u && (s.transform = u(f, s.transform));
                    var d = this.projectionDelta
                      , p = d.x
                      , v = d.y;
                    for (var h in s.transformOrigin = "".concat(100 * p.origin, "% ").concat(100 * v.origin, "% 0"),
                    l.animationValues ? s.opacity = l === this ? null !== (i = null !== (r = f.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : s.opacity = l === this ? null !== (o = f.opacity) && void 0 !== o ? o : "" : null !== (a = f.opacityExit) && void 0 !== a ? a : 0,
                    N)
                        if (void 0 !== f[h]) {
                            var m = N[h]
                              , y = m.correct
                              , g = m.applyTo
                              , b = y(f[h], l);
                            if (g)
                                for (var x = g.length, E = 0; E < x; E++)
                                    s[g[E]] = b;
                            else
                                s[h] = b
                        }
                    return this.options.layoutId && (s.pointerEvents = l === this ? tI(t.pointerEvents) || "" : "none"),
                    s
                }
                ,
                t.prototype.clearSnapshot = function() {
                    this.resumeFrom = this.snapshot = void 0
                }
                ,
                t.prototype.resetTree = function() {
                    this.root.nodes.forEach(function(t) {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }),
                    this.root.nodes.forEach(iS),
                    this.root.sharedNodes.clear()
                }
                ,
                t
            }()
        }
        function iT(t) {
            t.updateLayout()
        }
        function iP(t) {
            var e, n, r, i, o = null !== (n = null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) && void 0 !== n ? n : t.snapshot;
            if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
                var a = t.layout
                  , s = a.actual
                  , u = a.measured;
                "size" === t.options.animationType ? rm(function(t) {
                    var e = o.isShared ? o.measured[t] : o.layout[t]
                      , n = re(e);
                    e.min = s[t].min,
                    e.max = e.min + n
                }) : "position" === t.options.animationType && rm(function(t) {
                    var e = o.isShared ? o.measured[t] : o.layout[t]
                      , n = re(s[t]);
                    e.max = e.min + n
                });
                var l = rp();
                ri(l, s, o.layout);
                var c = rp();
                o.isShared ? ri(c, t.applyTransform(u, !0), o.measured) : ri(c, s, o.layout);
                var f = !im(l)
                  , d = !1;
                if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(),
                t.relativeParent && !t.relativeParent.resumeFrom)) {
                    var p = t.relativeParent
                      , v = p.snapshot
                      , h = p.layout;
                    if (v && h) {
                        var m = rh();
                        rs(m, o.layout, v.layout);
                        var y = rh();
                        rs(y, s, h.actual),
                        iy(m, y) || (d = !0)
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: s,
                    snapshot: o,
                    delta: c,
                    layoutDelta: l,
                    hasLayoutChanged: f,
                    hasRelativeTargetChanged: d
                })
            } else
                t.isLead() && (null === (i = (r = t.options).onExitComplete) || void 0 === i || i.call(r));
            t.options.transition = void 0
        }
        function iA(t) {
            t.clearSnapshot()
        }
        function iS(t) {
            t.clearMeasurements()
        }
        function iC(t) {
            var e = t.options.visualElement;
            (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(),
            t.resetTransform()
        }
        function iR(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0
        }
        function iV(t) {
            t.resolveTargetDelta()
        }
        function iM(t) {
            t.calcProjection()
        }
        function iL(t) {
            t.resetRotation()
        }
        function ik(t) {
            t.removeLeadSnapshot()
        }
        function iO(t, e, n) {
            t.translate = ey(e.translate, 0, n),
            t.scale = ey(e.scale, 1, n),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function ij(t, e, n, r) {
            t.min = ey(e.min, n.min, r),
            t.max = ey(e.max, n.max, r)
        }
        function iD(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        var iI = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        };
        function iF(t, e) {
            for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
                if (t.path[r].instance) {
                    n = t.path[r];
                    break
                }
            var i = (n && n !== t.root ? n.instance : document).querySelector('[data-projection-id="'.concat(e, '"]'));
            i && t.mount(i, !0)
        }
        function iU(t) {
            t.min = Math.round(t.min),
            t.max = Math.round(t.max)
        }
        function iB(t) {
            iU(t.x),
            iU(t.y)
        }
        var iN = iw({
            attachResizeListener: function(t, e) {
                return t_(t, "resize", e)
            },
            measureScroll: function() {
                return {
                    x: document.documentElement.scrollLeft || document.body.scrollLeft,
                    y: document.documentElement.scrollTop || document.body.scrollTop
                }
            },
            checkIsScrollRoot: function() {
                return !0
            }
        })
          , i_ = {
            current: void 0
        }
          , iz = iw({
            measureScroll: function(t) {
                return {
                    x: t.scrollLeft,
                    y: t.scrollTop
                }
            },
            defaultParent: function() {
                if (!i_.current) {
                    var t = new iN(0,{});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    i_.current = t
                }
                return i_.current
            },
            resetTransform: function(t, e) {
                t.style.transform = null != e ? e : "none"
            },
            checkIsScrollRoot: function(t) {
                return "fixed" === window.getComputedStyle(t).position
            }
        })
          , iH = (0,
        u.pi)((0,
        u.pi)((0,
        u.pi)((0,
        u.pi)({}, n1), eo), rO), {
            measureLayout: function(t) {
                var e = (0,
                u.CR)(es(), 2)
                  , n = e[0]
                  , r = e[1]
                  , i = (0,
                l.useContext)(D.p);
                return l.createElement(r6, (0,
                u.pi)({}, t, {
                    layoutGroup: i,
                    switchLayoutGroup: (0,
                    l.useContext)(I),
                    isPresent: n,
                    safeToRemove: r
                }))
            }
        })
          , iY = function(t) {
            function e(e, n) {
                var r, i, o, a, s, f, A;
                return void 0 === n && (n = {}),
                i = (r = t(e, n)).preloadedFeatures,
                o = r.createVisualElement,
                a = r.projectionNodeConstructor,
                s = r.useRender,
                f = r.useVisualState,
                A = r.Component,
                i && function(t) {
                    for (var e in t)
                        null !== t[e] && ("projectionNodeConstructor" === e ? d.projectionNodeConstructor = t[e] : d[e].Component = t[e])
                }(i),
                (0,
                l.forwardRef)(function(t, e) {
                    var n, r, C, R, M, U, B, N, _, z, H, Y, W, X, Z, q, K, G, $, J, Q, tt, te, tn, tr, ti, to, ta = (Y = t.layoutId,
                    (W = null === (H = (0,
                    l.useContext)(D.p)) || void 0 === H ? void 0 : H.id) && void 0 !== Y ? W + "-" + Y : Y);
                    t = (0,
                    u.pi)((0,
                    u.pi)({}, t), {
                        layoutId: ta
                    });
                    var ts = (0,
                    l.useContext)(y)
                      , tu = null
                      , tl = (Z = (X = function(t, e) {
                        if (V(t)) {
                            var n = t.initial
                              , r = t.animate;
                            return {
                                initial: !1 === n || S(n) ? n : void 0,
                                animate: S(r) ? r : void 0
                            }
                        }
                        return !1 !== t.inherit ? e : {}
                    }(t, (0,
                    l.useContext)(g))).initial,
                    q = X.animate,
                    (0,
                    l.useMemo)(function() {
                        return {
                            initial: Z,
                            animate: q
                        }
                    }, [L(Z), L(q)]))
                      , tc = ts.isStatic ? void 0 : (0,
                    k.h)(function() {
                        if (O.hasEverUpdated)
                            return j++
                    })
                      , tf = f(t, ts.isStatic);
                    return !ts.isStatic && E.j && (tl.visualElement = (K = (0,
                    u.pi)((0,
                    u.pi)({}, ts), t),
                    G = o,
                    $ = (0,
                    l.useContext)(v),
                    J = (0,
                    l.useContext)(g).visualElement,
                    Q = (0,
                    l.useContext)(b.O),
                    T || function() {
                        if (T = !0,
                        E.j) {
                            if (window.matchMedia) {
                                var t = window.matchMedia("(prefers-reduced-motion)")
                                  , e = function() {
                                    return w.current = t.matches
                                };
                                t.addListener(e),
                                e()
                            } else
                                w.current = !1
                        }
                    }(),
                    tt = (0,
                    u.CR)((0,
                    l.useState)(w.current), 1)[0],
                    tn = "never" !== (te = (0,
                    l.useContext)(y).reducedMotion) && ("always" === te || tt),
                    tr = (0,
                    l.useRef)(void 0),
                    G || (G = $.renderer),
                    !tr.current && G && (tr.current = G(A, {
                        visualState: tf,
                        parent: J,
                        props: K,
                        presenceId: null == Q ? void 0 : Q.id,
                        blockInitialAnimation: (null == Q ? void 0 : Q.initial) === !1,
                        shouldReduceMotion: tn
                    })),
                    ti = tr.current,
                    (0,
                    x.L)(function() {
                        null == ti || ti.syncRender()
                    }),
                    (0,
                    l.useEffect)(function() {
                        var t;
                        null === (t = null == ti ? void 0 : ti.animationState) || void 0 === t || t.animateChanges()
                    }),
                    (0,
                    x.L)(function() {
                        return function() {
                            return null == ti ? void 0 : ti.notifyUnmount()
                        }
                    }, []),
                    ti),
                    n = t,
                    r = tl.visualElement,
                    C = a || d.projectionNodeConstructor,
                    M = n.layoutId,
                    U = n.layout,
                    B = n.drag,
                    N = n.dragConstraints,
                    _ = n.layoutScroll,
                    z = (0,
                    l.useContext)(I),
                    !C || !r || (null == r ? void 0 : r.projection) || (r.projection = new C(tc,r.getLatestValues(),null === (R = r.parent) || void 0 === R ? void 0 : R.projection),
                    r.projection.setOptions({
                        layoutId: M,
                        layout: U,
                        alwaysMeasureLayout: !!B || N && P(N),
                        visualElement: r,
                        scheduleRender: function() {
                            return r.scheduleRender()
                        },
                        animationType: "string" == typeof U ? U : "both",
                        initialPromotionConfig: z,
                        layoutScroll: _
                    })),
                    tu = function(t, e, n) {
                        var r = []
                          , i = (0,
                        l.useContext)(v);
                        if (!e)
                            return null;
                        "production" !== c.O && n && i.strict && (0,
                        p.k)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
                        for (var o = 0; o < m; o++) {
                            var a = h[o]
                              , s = d[a]
                              , f = s.isEnabled
                              , y = s.Component;
                            f(t) && y && r.push(l.createElement(y, (0,
                            u.pi)({
                                key: a
                            }, t, {
                                visualElement: e
                            })))
                        }
                        return r
                    }(t, tl.visualElement, i)),
                    l.createElement(F, {
                        visualElement: tl.visualElement,
                        props: (0,
                        u.pi)((0,
                        u.pi)({}, ts), t)
                    }, tu, l.createElement(g.Provider, {
                        value: tl
                    }, s(A, t, tc, (to = tl.visualElement,
                    (0,
                    l.useCallback)(function(t) {
                        var n;
                        t && (null === (n = tf.mount) || void 0 === n || n.call(tf, t)),
                        to && (t ? to.mount(t) : to.unmount()),
                        e && ("function" == typeof e ? e(t) : P(e) && (e.current = t))
                    }, [to])), tf, ts.isStatic, tl.visualElement)))
                })
            }
            if ("undefined" == typeof Proxy)
                return e;
            var n = new Map;
            return new Proxy(e,{
                get: function(t, r) {
                    return n.has(r) || n.set(r, e(r)),
                    n.get(r)
                }
            })
        }(function(t, e) {
            var n, r, i;
            return n = e.forwardMotionProps,
            r = B(t) ? tB : tN,
            (0,
            u.pi)((0,
            u.pi)({}, r), {
                preloadedFeatures: iH,
                useRender: (void 0 === (i = void 0 !== n && n) && (i = !1),
                function(t, e, n, r, o, a) {
                    var s = o.latestValues
                      , c = (B(t) ? function(t, e) {
                        var n = (0,
                        l.useMemo)(function() {
                            var n = tA();
                            return tP(n, e, {
                                enableHardwareAcceleration: !1
                            }, t.transformTemplate),
                            (0,
                            u.pi)((0,
                            u.pi)({}, n.attrs), {
                                style: (0,
                                u.pi)({}, n.style)
                            })
                        }, [e]);
                        if (t.style) {
                            var r = {};
                            ty(r, t.style, t),
                            n.style = (0,
                            u.pi)((0,
                            u.pi)({}, r), n.style)
                        }
                        return n
                    }
                    : function(t, e, n) {
                        var r, i, o = {}, a = (ty(r = {}, t.style || {}, t),
                        Object.assign(r, (i = t.transformTemplate,
                        (0,
                        l.useMemo)(function() {
                            var t = tm();
                            th(t, e, {
                                enableHardwareAcceleration: !n
                            }, i);
                            var r = t.vars
                              , o = t.style;
                            return (0,
                            u.pi)((0,
                            u.pi)({}, r), o)
                        }, [e]))),
                        t.transformValues && (r = t.transformValues(r)),
                        r);
                        return t.drag && !1 !== t.dragListener && (o.draggable = !1,
                        a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none",
                        a.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")),
                        o.style = a,
                        o
                    }
                    )(e, s, a)
                      , f = function(t, e, n) {
                        var r = {};
                        for (var i in t)
                            (tx(i) || !0 === n && tb(i) || !e && !tb(i) || t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
                        return r
                    }(e, "string" == typeof t, i)
                      , d = (0,
                    u.pi)((0,
                    u.pi)((0,
                    u.pi)({}, f), c), {
                        ref: r
                    });
                    return n && (d["data-projection-id"] = n),
                    (0,
                    l.createElement)(t, d)
                }
                ),
                createVisualElement: r2,
                projectionNodeConstructor: iz,
                Component: t
            })
        })
    },
    1741: function(t, e, n) {
        "use strict";
        n.d(e, {
            j: function() {
                return r
            }
        });
        var r = "undefined" != typeof document
    },
    9304: function(t, e, n) {
        "use strict";
        n.d(e, {
            O: function() {
                return i
            }
        });
        var r = n(3454)
          , i = (void 0 === r || r.env,
        "production")
    },
    6681: function(t, e, n) {
        "use strict";
        n.d(e, {
            h: function() {
                return i
            }
        });
        var r = n(7294);
        function i(t) {
            var e = (0,
            r.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    },
    6337: function(t, e, n) {
        "use strict";
        n.d(e, {
            N: function() {
                return s
            }
        });
        var r = n(7582)
          , i = n(4735)
          , o = n(7294)
          , a = n(4454);
        function s() {
            var t = (0,
            a.t)()
              , e = (0,
            r.CR)((0,
            o.useState)(0), 2)
              , n = e[0]
              , s = e[1]
              , u = (0,
            o.useCallback)(function() {
                t.current && s(n + 1)
            }, [n]);
            return [(0,
            o.useCallback)(function() {
                return i.ZP.postRender(u)
            }, [u]), n]
        }
    },
    6316: function(t, e, n) {
        "use strict";
        n.d(e, {
            M: function() {
                return a
            }
        });
        var r = n(6681)
          , i = 0
          , o = function() {
            return i++
        }
          , a = function() {
            return (0,
            r.h)(o)
        }
    },
    4454: function(t, e, n) {
        "use strict";
        n.d(e, {
            t: function() {
                return o
            }
        });
        var r = n(7294)
          , i = n(8868);
        function o() {
            var t = (0,
            r.useRef)(!1);
            return (0,
            i.L)(function() {
                return t.current = !0,
                function() {
                    t.current = !1
                }
            }, []),
            t
        }
    },
    8868: function(t, e, n) {
        "use strict";
        n.d(e, {
            L: function() {
                return i
            }
        });
        var r = n(7294)
          , i = n(1741).j ? r.useLayoutEffect : r.useEffect
    },
    5411: function(t, e, n) {
        "use strict";
        n.d(e, {
            z: function() {
                return i
            }
        });
        var r = n(7294);
        function i(t) {
            return (0,
            r.useEffect)(function() {
                return function() {
                    return t()
                }
            }, [])
        }
    },
    4735: function(t, e, n) {
        "use strict";
        n.d(e, {
            qY: function() {
                return p
            },
            ZP: function() {
                return b
            },
            iW: function() {
                return v
            },
            $B: function() {
                return g
            }
        });
        let r = 1 / 60 * 1e3
          , i = "undefined" != typeof performance ? () => performance.now() : () => Date.now()
          , o = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout( () => t(i()), r)
          , a = !0
          , s = !1
          , u = !1
          , l = {
            delta: 0,
            timestamp: 0
        }
          , c = ["read", "update", "preRender", "render", "postRender"]
          , f = c.reduce( (t, e) => (t[e] = function(t) {
            let e = []
              , n = []
              , r = 0
              , i = !1
              , o = !1
              , a = new WeakSet
              , s = {
                schedule: (t, o=!1, s=!1) => {
                    let u = s && i
                      , l = u ? e : n;
                    return o && a.add(t),
                    -1 === l.indexOf(t) && (l.push(t),
                    u && i && (r = e.length)),
                    t
                }
                ,
                cancel: t => {
                    let e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1),
                    a.delete(t)
                }
                ,
                process: u => {
                    if (i) {
                        o = !0;
                        return
                    }
                    if (i = !0,
                    [e,n] = [n, e],
                    n.length = 0,
                    r = e.length)
                        for (let n = 0; n < r; n++) {
                            let r = e[n];
                            r(u),
                            a.has(r) && (s.schedule(r),
                            t())
                        }
                    i = !1,
                    o && (o = !1,
                    s.process(u))
                }
            };
            return s
        }( () => s = !0),
        t), {})
          , d = c.reduce( (t, e) => {
            let n = f[e];
            return t[e] = (t, e=!1, r=!1) => (s || y(),
            n.schedule(t, e, r)),
            t
        }
        , {})
          , p = c.reduce( (t, e) => (t[e] = f[e].cancel,
        t), {})
          , v = c.reduce( (t, e) => (t[e] = () => f[e].process(l),
        t), {})
          , h = t => f[t].process(l)
          , m = t => {
            s = !1,
            l.delta = a ? r : Math.max(Math.min(t - l.timestamp, 40), 1),
            l.timestamp = t,
            u = !0,
            c.forEach(h),
            u = !1,
            s && (a = !1,
            o(m))
        }
          , y = () => {
            s = !0,
            a = !0,
            u || o(m)
        }
          , g = () => l;
        var b = d
    },
    7582: function(t, e, n) {
        "use strict";
        n.d(e, {
            CR: function() {
                return u
            },
            XA: function() {
                return s
            },
            ZT: function() {
                return i
            },
            _T: function() {
                return a
            },
            ev: function() {
                return l
            },
            pi: function() {
                return o
            }
        });
        var r = function(t, e) {
            return (r = Object.setPrototypeOf || ({
                __proto__: []
            })instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            )(t, e)
        };
        function i(t, e) {
            if ("function" != typeof e && null !== e)
                throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function n() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        var o = function() {
            return (o = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }
            ).apply(this, arguments)
        };
        function a(t, e) {
            var n = {};
            for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                    0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
            return n
        }
        function s(t) {
            var e = "function" == typeof Symbol && Symbol.iterator
              , n = e && t[e]
              , r = 0;
            if (n)
                return n.call(t);
            if (t && "number" == typeof t.length)
                return {
                    next: function() {
                        return t && r >= t.length && (t = void 0),
                        {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
            throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function u(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n)
                return t;
            var r, i, o = n.call(t), a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
                    a.push(r.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return a
        }
        function l(t, e, n) {
            if (n || 2 == arguments.length)
                for (var r, i = 0, o = e.length; i < o; i++)
                    !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)),
                    r[i] = e[i]);
            return t.concat(r || Array.prototype.slice.call(e))
        }
        "function" == typeof SuppressedError && SuppressedError
    }
}]);
