(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5557: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return n(2848)
        }
        ])
    },
    5233: function(e, t, n) {
        "use strict";
        n.d(t, {
            D: function() {
                return i
            }
        });
        let i = (0,
        n(1412).zo)("div", {
            appearance: "none",
            background: "transparent",
            border: 0,
            borderRadius: "$borderRadius",
            color: "$primary",
            cursor: "pointer",
            display: "inline-block",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
            margin: "0 0 0 -10px",
            outline: "0",
            padding: "8px 10px 8px",
            textDecoration: "none",
            transition: ["background $duration ease-in-out", "color $duration ease-in-out"],
            "&:hover": {
                background: "$hover",
                color: "$primary",
                opacity: 1
            },
            "&:hover kbd": {
                background: "$primary"
            }
        })
    },
    7362: function(e, t, n) {
        "use strict";
        n.d(t, {
            C2: function() {
                return a
            },
            b6: function() {
                return r
            },
            dn: function() {
                return o
            }
        });
        var i = n(1412);
        let o = (0,
        i.zo)("main", {
            "@bp2": {
                padding: "$navHeightDesktop 0"
            },
            padding: "$navHeightMobile 0",
            overflow: "hidden",
            flex: "1 1"
        });
        (0,
        i.zo)("main", {
            overflow: "hidden",
            flex: "1 1"
        });
        let r = (0,
        i.zo)("div", {
            margin: "0 auto",
            maxWidth: "760px",
            padding: "0 20px"
        })
          , a = (0,
        i.zo)("div", {
            fontSize: "16px",
            lineHeight: "32px",
            color: "$secondary",
            background: "$background",
            position: "relative",
            zIndex: 1,
            height: "100%",
            padding: "20px 0",
            "& .iframe-wrap": {
                height: "0",
                marginBottom: "20px",
                overflow: "hidden",
                paddingBottom: "56.25%",
                paddingTop: "30px",
                position: "relative"
            },
            "& .iframe-wrap iframe": {
                border: "0",
                height: "100%",
                left: "0",
                position: "absolute",
                top: "0",
                width: "100%"
            },
            "& .post-image-caption": {
                color: "$secondary",
                textAlign: "center",
                fontStyle: "italic",
                fontSize: "14px"
            },
            "& .post-image-full": {
                margin: "20px 0 0",
                maxWidth: "initial",
                width: "70vw",
                "@bp2": {
                    marginLeft: "calc(-1 * (70vw - 760px) / 2)"
                },
                "@bp4": {
                    marginLeft: 0
                }
            },
            "& .side-by-side": {
                display: "flex",
                width: "90vw",
                margin: "40px 0",
                flexDirection: "row",
                "@bp2": {
                    marginLeft: "calc(-1 * (90vw - 760px) / 2)"
                },
                "@bp4": {
                    marginLeft: 0,
                    flexDirection: "column"
                }
            },
            "& .side-by-side-img": {
                minWidth: "50%",
                "@bp2": {
                    minWidth: "100%"
                },
                "@bp4": {}
            },
            "& .side-by-side-caption": {
                color: "$secondary",
                textAlign: "center",
                fontStyle: "italic",
                fontSize: "14px",
                marginTop: -30
            }
        })
    },
    2848: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return h
            },
            default: function() {
                return m
            }
        });
        var i = n(5893)
          , o = n(1412)
          , r = n(9008)
          , a = n.n(r)
          , s = n(1103)
          , d = n(8971)
          , l = n(7362)
          , c = n(7294)
          , p = () => {
            let[e,t] = (0,
            c.useState)("")
              , n = ["Sooftware / DevOps Engineer.", "Coompetitive Programmer.", "Thheoretical Physics Enthusiast."]
              , o = 0
              , r = 0;
            return (0,
            c.useEffect)( () => {
                let e = () => {
                    r < n[o].length ? (t(e => e + n[o].charAt(r)),
                    r++,
                    setTimeout(e, 100)) : setTimeout(i, 1e3)
                }
                  , i = () => {
                    r > 0 ? (t(e => e.slice(0, -1)),
                    r--,
                    setTimeout(i, 100)) : (o = (o + 1) % n.length,
                    setTimeout(e, 100))
                }
                ;
                setTimeout(e, 100)
            }
            , []),
            (0,
            i.jsx)("strong", {
                children: e
            })
        }
          , x = n(9014)
          , u = n(1606)
          , g = n(5233);
        function f() {
            let {query: e} = (0,
            u.useKBar)()
              , [t,n] = (0,
            c.useState)(!1);
            if ((0,
            c.useEffect)( () => {
                n(!0)
            }
            , []),
            t) {
                let t = /(Mac)/i.test(navigator.userAgent);
                return /iPhone|iPad|Android/i.test(navigator.userAgent) ? (0,
                i.jsx)(g.D, {
                    as: "button",
                    onClick: e.toggle,
                    children: "Tap to start →"
                }) : t ? (0,
                i.jsxs)(g.D, {
                    as: "button",
                    onClick: e.toggle,
                    children: ["Press ", (0,
                    i.jsx)("kbd", {
                        children: "⌘"
                    }), " ", (0,
                    i.jsx)("kbd", {
                        children: "K"
                    }), " to start →"]
                }) : (0,
                i.jsxs)(g.D, {
                    as: "button",
                    onClick: e.toggle,
                    children: ["Press ", (0,
                    i.jsx)("kbd", {
                        children: "ctrl"
                    }), " ", (0,
                    i.jsx)("kbd", {
                        children: "K"
                    }), " to start →"]
                })
            }
            return (0,
            i.jsx)("div", {})
        }
        var h = !0;
        function m(e) {
            let {title: t, description: n} = e;
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsxs)(a(), {
                    children: [(0,
                    i.jsx)("title", {
                        children: t
                    }), (0,
                    i.jsx)("meta", {
                        content: t,
                        property: "og:title"
                    }), (0,
                    i.jsx)("meta", {
                        content: n,
                        name: "description"
                    }), (0,
                    i.jsx)("meta", {
                        content: n,
                        property: "og:description"
                    })]
                }), (0,
                i.jsx)(s.Z, {}), (0,
                i.jsx)(b, {
                    children: (0,
                    i.jsx)(y, {
                        children: (0,
                        i.jsx)(l.b6, {
                            children: (0,
                            i.jsxs)(v, {
                                children: [(0,
                                i.jsx)($, {
                                    style: {
                                        top: -40,
                                        left: 0
                                    },
                                    children: ":: INITIALIZING_SYSTEM"
                                }), (0,
                                i.jsx)($, {
                                    style: {
                                        bottom: -40,
                                        right: 0
                                    },
                                    children: "V.5.0.0 // STABLE"
                                }), (0,
                                i.jsx)(j, {
                                    children: (0,
                                    i.jsx)(x.Z, {
                                        text: t,
                                        animateOn: "view",
                                        revealDirection: "center",
                                        speed: 80,
                                        maxIterations: 15,
                                        characters: "XYZ123[]{}",
                                        className: "revealed",
                                        parentClassName: "all-letters",
                                        encryptedClassName: "encrypted"
                                    })
                                }), (0,
                                i.jsxs)(z, {
                                    children: [(0,
                                    i.jsx)("span", {
                                        style: {
                                            marginRight: "10px",
                                            color: "#8f9ba8"
                                        },
                                        children: ">"
                                    }), (0,
                                    i.jsx)(p, {})]
                                }), (0,
                                i.jsx)(w, {
                                    children: n
                                }), (0,
                                i.jsx)(f, {})]
                            })
                        })
                    })
                }), (0,
                i.jsx)(d.Z, {})]
            })
        }
        let b = (0,
        o.zo)(l.dn, {
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            "@bp2": {
                width: 800
            }
        })
          , y = (0,
        o.zo)(l.C2, {
            background: "transparent"
        })
          , v = (0,
        o.zo)("div", {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 0",
            position: "relative",
            zIndex: 1,
            borderLeft: "1px solid $command",
            paddingLeft: "40px",
            "@bp1": {
                paddingLeft: "20px",
                borderLeft: "none"
            }
        })
          , j = (0,
        o.zo)("h1", {
            fontSize: "64px",
            lineHeight: "1.1",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "$primary",
            margin: "0 0 24px 0",
            "@bp2": {
                fontSize: "80px"
            },
            "& .encrypted": {
                opacity: .3,
                color: "$secondary",
                fontFamily: "$code"
            }
        })
          , z = (0,
        o.zo)("div", {
            fontSize: "20px",
            fontWeight: 500,
            color: "$primary",
            marginBottom: "24px",
            minHeight: "32px",
            display: "flex",
            alignItems: "center",
            fontFamily: "$code"
        })
          , w = (0,
        o.zo)("p", {
            fontSize: "18px",
            color: "$secondary",
            maxWidth: "540px",
            lineHeight: "1.6",
            marginBottom: "40px"
        })
          , $ = (0,
        o.zo)("div", {
            position: "absolute",
            color: "$secondary",
            fontSize: "12px",
            fontFamily: "$code",
            opacity: .6,
            letterSpacing: "0.1em",
            pointerEvents: "none",
            "@bp1": {
                display: "none"
            }
        })
    }
}, function(e) {
    e.O(0, [701, 763, 888, 774, 179], function() {
        return e(e.s = 5557)
    }),
    _N_E = e.O()
}
]);
