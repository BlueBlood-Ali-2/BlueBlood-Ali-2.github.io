"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[763], {
    9014: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return s
            }
        });
        var n = i(5893)
          , r = i(7294)
          , o = i(3811);
        let a = {
            wrapper: {
                display: "inline-block",
                whiteSpace: "pre-wrap"
            },
            srOnly: {
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0,0,0,0)",
                border: 0
            }
        };
        function s(e) {
            let {text: t, speed: i=50, maxIterations: s=10, sequential: l=!0, revealDirection: c="start", useOriginalCharsOnly: p=!1, characters: d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+", className: u="", parentClassName: h="", encryptedClassName: x="", animateOn: f="hover", ...m} = e
              , [g,y] = (0,
            r.useState)(t)
              , [b,v] = (0,
            r.useState)(!1)
              , [j,z] = (0,
            r.useState)(!1)
              , [k,w] = (0,
            r.useState)(new Set)
              , [S,$] = (0,
            r.useState)(!1)
              , I = (0,
            r.useRef)(null);
            return (0,
            r.useEffect)( () => {
                let e;
                let n = e => {
                    let i = t.length;
                    switch (c) {
                    case "start":
                    default:
                        return e.size;
                    case "end":
                        return i - 1 - e.size;
                    case "center":
                        {
                            let t = Math.floor(i / 2)
                              , n = Math.floor(e.size / 2)
                              , r = e.size % 2 == 0 ? t + n : t - n - 1;
                            if (r >= 0 && r < i && !e.has(r))
                                return r;
                            for (let t = 0; t < i; t++)
                                if (!e.has(t))
                                    return t;
                            return 0
                        }
                    }
                }
                  , r = p ? Array.from(new Set(t.split(""))).filter(e => " " !== e) : d.split("")
                  , o = (e, t) => {
                    if (!p)
                        return e.split("").map( (i, n) => " " === i ? " " : t.has(n) ? e[n] : r[Math.floor(Math.random() * r.length)]).join("");
                    {
                        let i = e.split("").map( (e, i) => ({
                            char: e,
                            isSpace: " " === e,
                            index: i,
                            isRevealed: t.has(i)
                        }))
                          , n = i.filter(e => !e.isSpace && !e.isRevealed).map(e => e.char);
                        for (let e = n.length - 1; e > 0; e--) {
                            let t = Math.floor(Math.random() * (e + 1));
                            [n[e],n[t]] = [n[t], n[e]]
                        }
                        let r = 0;
                        return i.map(t => t.isSpace ? " " : t.isRevealed ? e[t.index] : n[r++]).join("")
                    }
                }
                ;
                return b ? (z(!0),
                e = setInterval( () => {
                    w(i => {
                        if (!(i.size < t.length))
                            return clearInterval(e),
                            z(!1),
                            i;
                        {
                            let e = n(i)
                              , r = new Set(i);
                            return r.add(e),
                            y(o(t, r)),
                            r
                        }
                    }
                    )
                }
                , i)) : (y(t),
                w(new Set),
                z(!1)),
                () => {
                    e && clearInterval(e)
                }
            }
            , [b, t, i, c, d, p]),
            (0,
            r.useEffect)( () => {
                if ("view" !== f && "both" !== f)
                    return;
                let e = new IntersectionObserver(e => {
                    e.forEach(e => {
                        e.isIntersecting && !S && (v(!0),
                        $(!0))
                    }
                    )
                }
                ,{
                    root: null,
                    rootMargin: "0px",
                    threshold: .1
                })
                  , t = I.current;
                return t && e.observe(t),
                () => {
                    t && e.unobserve(t)
                }
            }
            , [f, S]),
            (0,
            n.jsxs)(o.E.span, {
                className: h,
                ref: I,
                style: a.wrapper,
                ..."hover" === f || "both" === f ? {
                    onMouseEnter: () => v(!0),
                    onMouseLeave: () => v(!1)
                } : {},
                ...m,
                children: [(0,
                n.jsx)("span", {
                    style: a.srOnly,
                    children: g
                }), (0,
                n.jsx)("span", {
                    "aria-hidden": "true",
                    children: g.split("").map( (e, t) => {
                        let i = k.has(t) || !j || !b;
                        return (0,
                        n.jsx)("span", {
                            className: i ? u : x,
                            children: e
                        }, t)
                    }
                    )
                })]
            })
        }
    },
    8971: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return x
            }
        });
        var n = i(5893)
          , r = i(1664)
          , o = i.n(r)
          , a = i(1412)
          , s = i(7294)
          , l = i(1571)
          , c = i(3811)
          , p = i(5421);
        let d = (0,
        a.zo)("button", {
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "$primary",
            transition: "background 0.2s ease",
            position: "relative",
            width: "40px",
            height: "40px",
            "&:hover": {
                background: "$hover"
            }
        })
          , u = (0,
        a.zo)(c.E.div, {
            position: "fixed",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 999
        });
        function h() {
            let[e,t] = (0,
            s.useState)(!1)
              , {theme: i, setTheme: r} = (0,
            l.F)()
              , [o,h] = (0,
            s.useState)("idle")
              , [x,f] = (0,
            s.useState)({
                x: 0,
                y: 0
            });
            (0,
            s.useEffect)( () => {
                t(!0)
            }
            , []);
            let m = () => {
                r("dark" === i ? "light" : "dark"),
                h("collapsing")
            }
              , g = () => {
                h("idle")
            }
            ;
            if (!e)
                return (0,
                n.jsx)("div", {
                    style: {
                        width: 40,
                        height: 40
                    }
                });
            let y = "light" == ("dark" === i ? "light" : "dark") ? a.Wb.colors.background.value : a.$_.colors.background.value
              , b = 2 * Math.sqrt(Math.max(x.x, window.innerWidth - x.x) ** 2 + Math.max(x.y, window.innerHeight - x.y) ** 2);
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(p.M, {
                    children: "idle" !== o && (0,
                    n.jsx)(u, {
                        initial: {
                            width: 0,
                            height: 0,
                            top: x.y,
                            left: x.x
                        },
                        animate: {
                            width: "expanding" === o ? b : 0,
                            height: "expanding" === o ? b : 0
                        },
                        transition: {
                            duration: .5,
                            ease: "easeInOut"
                        },
                        style: {
                            backgroundColor: y
                        },
                        onAnimationComplete: () => {
                            "expanding" === o ? m() : "collapsing" === o && g()
                        }
                    })
                }), (0,
                n.jsx)(d, {
                    onClick: e => {
                        "idle" === o && (f({
                            x: e.clientX,
                            y: e.clientY
                        }),
                        h("expanding"))
                    }
                    ,
                    "aria-label": "Toggle theme",
                    children: (0,
                    n.jsx)(c.E.div, {
                        initial: {
                            scale: .5,
                            opacity: 0,
                            rotate: -90
                        },
                        animate: {
                            scale: 1,
                            opacity: 1,
                            rotate: 0
                        },
                        transition: {
                            duration: .3,
                            ease: "easeOut"
                        },
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: "dark" === i ? (0,
                        n.jsx)("i", {
                            className: "ri-moon-clear-line",
                            style: {
                                fontSize: "22px"
                            }
                        }) : (0,
                        n.jsx)("i", {
                            className: "ri-sun-line",
                            style: {
                                fontSize: "22px"
                            }
                        })
                    }, i)
                })]
            })
        }
        function x() {
            return (0,
            n.jsxs)(f, {
                children: [(0,
                n.jsx)(m, {
                    href: "https://www.justfuckingcode.com/",
                    target: "_blank",
                    children: "Philosophy I live by."
                }), (0,
                n.jsx)(g, {
                    children: [{
                        title: "Email",
                        url: "mailto:daksharma5804@gmail.com",
                        icon: "ri-mail-line"
                    }, {
                        title: "Twitter",
                        url: "https://twitter.com/DakshSh83692751",
                        icon: "ri-twitter-line"
                    }, {
                        title: "GitHub",
                        url: "https://github.com/frypan05",
                        icon: "ri-github-line"
                    }, {
                        title: "linkedin",
                        url: "https://linkedin.com/in/dakshsharma05",
                        icon: "ri-linkedin-line"
                    }, {
                        title: "Instagram",
                        url: "https://instagram.com/daksh.zip",
                        icon: "ri-instagram-line"
                    }].map( (e, t) => e.url.startsWith("http") || e.url.startsWith("mailto") ? (0,
                    n.jsxs)(v, {
                        href: e.url,
                        target: e.url.startsWith("http") ? "_blank" : "_self",
                        children: [(0,
                        n.jsx)(z, {
                            children: e.title
                        }), (0,
                        n.jsx)(b, {
                            className: e.icon
                        })]
                    }, t) : (0,
                    n.jsx)(o(), {
                        href: e.url,
                        children: (0,
                        n.jsxs)(j, {
                            children: [(0,
                            n.jsx)(z, {
                                children: e.title
                            }), (0,
                            n.jsx)(b, {
                                className: e.icon
                            })]
                        })
                    }, t))
                }), (0,
                n.jsx)(y, {
                    children: (0,
                    n.jsx)(h, {})
                })]
            })
        }
        let f = (0,
        a.zo)("footer", {
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px 40px",
            zIndex: 1,
            position: "relative",
            "@bp3": {
                flexDirection: "column"
            }
        })
          , m = (0,
        a.zo)("a", {
            position: "absolute",
            left: "20px",
            bottom: "20px",
            color: "$secondary",
            fontSize: "14px",
            textDecoration: "none",
            transition: "color $duration ease-in-out",
            "&:hover, &:focus": {
                color: "$primary"
            },
            "@bp3": {
                position: "relative",
                left: "auto",
                bottom: "auto",
                marginBottom: "20px"
            }
        })
          , g = (0,
        a.zo)("div", {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        })
          , y = (0,
        a.zo)("div", {
            position: "absolute",
            right: "20px",
            bottom: "20px",
            "@bp3": {
                position: "relative",
                right: "auto",
                bottom: "auto",
                marginTop: "20px"
            }
        })
          , b = (0,
        a.zo)("i", {
            color: "$primary",
            opacity: 1,
            marginLeft: "5px",
            marginTop: "1px",
            fontSize: "24px",
            "@bp2": {
                opacity: 0,
                fontSize: "16px"
            }
        })
          , v = (0,
        a.zo)("a", {
            color: "$secondary",
            display: "flex",
            fontSize: "15px",
            border: 0,
            marginLeft: "20px",
            textDecoration: "none",
            textTransform: "lowercase",
            transition: "color $duration ease-in-out",
            "&:hover, &:focus": {
                color: "$primary",
                opacity: 1
            },
            ["&:hover ".concat(b)]: {
                transition: "opacity $duration ease-in-out",
                opacity: 1
            },
            "&:first-child": {
                margin: "0"
            }
        })
          , j = (0,
        a.zo)("span", {
            color: "$secondary",
            display: "flex",
            fontSize: "15px",
            border: 0,
            marginLeft: "20px",
            textDecoration: "none",
            textTransform: "lowercase",
            transition: "color $duration ease-in-out",
            "&:hover, &:focus": {
                color: "$primary",
                opacity: 1
            },
            ["&:hover ".concat(b)]: {
                transition: "opacity $duration ease-in-out",
                opacity: 1
            },
            "&:first-child": {
                margin: "0"
            }
        })
          , z = (0,
        a.zo)("span", {
            display: "none",
            "@bp2": {
                display: "block"
            }
        })
    },
    1103: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return y
            }
        });
        var n = i(5893)
          , r = i(1412)
          , o = i(7294)
          , a = i(1664)
          , s = i.n(a)
          , l = i(1163)
          , c = i(116)
          , p = i(3811)
          , d = i(1606)
          , u = i(4704);
        let h = (0,
        r.F4)({
            "0%": {
                transform: "scaleY(1)"
            },
            "50%": {
                transform: "scaleY(2)"
            },
            "100%": {
                transform: "scaleY(1)"
            }
        })
          , x = (0,
        r.zo)("button", {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            padding: "8px 12px",
            borderRadius: "8px",
            transition: "all 0.2s ease-in-out",
            height: "34px",
            "&:hover": {
                background: "$hover"
            },
            "&:focus": {
                outline: "none",
                borderColor: "$pink"
            }
        })
          , f = (0,
        r.zo)("div", {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "3px",
            pointerEvents: "none"
        })
          , m = (0,
        r.zo)("div", {
            width: "2px",
            height: "10px",
            backgroundColor: "$primary",
            transformOrigin: "bottom",
            transition: "background-color 0.3s ease-in-out",
            "&:nth-child(1)": {
                animation: "".concat(h, " 0.5s -0.2s infinite")
            },
            "&:nth-child(2)": {
                animation: "".concat(h, " 0.5s -0.1s infinite")
            },
            "&:nth-child(3)": {
                animation: "".concat(h, " 0.5s 0s infinite")
            },
            "&:nth-child(4)": {
                animation: "".concat(h, " 0.5s 0.1s infinite")
            },
            "&:nth-child(5)": {
                animation: "".concat(h, " 0.5s 0.2s infinite")
            }
        });
        var g = () => {
            let {isPlaying: e, togglePlay: t} = (0,
            u.Q)();
            return (0,
            n.jsx)(x, {
                onClick: t,
                type: "button",
                "aria-label": "Toggle music",
                title: e ? "Pause music" : "Play music",
                children: (0,
                n.jsx)(f, {
                    children: Array.from({
                        length: 5
                    }).map( (t, i) => (0,
                    n.jsx)(m, {
                        style: {
                            animationPlayState: e ? "running" : "paused"
                        }
                    }, i))
                })
            })
        }
        ;
        function y() {
            let e = (0,
            l.useRouter)()
              , [t,i] = (0,
            o.useState)("")
              , {query: r} = (0,
            d.useKBar)()
              , a = "/contact" === e.pathname;
            return (0,
            n.jsx)(c.s, {
                children: (0,
                n.jsxs)(b, {
                    children: [(0,
                    n.jsxs)(v, {
                        children: [(0,
                        n.jsx)(s(), {
                            href: "/",
                            passHref: !0,
                            legacyBehavior: !0,
                            children: (0,
                            n.jsx)(w, {
                                as: "a",
                                children: "DS"
                            })
                        }), (0,
                        n.jsx)(I, {
                            initial: {
                                opacity: 0,
                                x: -10
                            },
                            animate: {
                                opacity: a ? 0 : 1,
                                x: a ? -10 : 0,
                                pointerEvents: a ? "none" : "auto"
                            },
                            transition: {
                                duration: .3
                            },
                            children: (0,
                            n.jsx)(s(), {
                                href: "/contact",
                                passHref: !0,
                                legacyBehavior: !0,
                                children: (0,
                                n.jsx)(C, {
                                    children: "Have something to comment?"
                                })
                            })
                        })]
                    }), (0,
                    n.jsx)(S, {
                        children: (0,
                        n.jsx)(j, {
                            children: ["About", "Projects", "Reminder", "Stack", "Hacks"].map(r => {
                                let o = "/".concat(r.toLowerCase())
                                  , a = t === r;
                                return (0,
                                n.jsx)("li", {
                                    children: (0,
                                    n.jsx)(s(), {
                                        href: o,
                                        passHref: !0,
                                        legacyBehavior: !0,
                                        children: (0,
                                        n.jsx)(E, {
                                            children: (0,
                                            n.jsxs)(R, {
                                                onHoverStart: () => i(r),
                                                onHoverEnd: () => i(""),
                                                css: e.pathname == o ? {
                                                    color: "$primary",
                                                    "&::after": {
                                                        opacity: 1
                                                    }
                                                } : "",
                                                children: [a && (0,
                                                n.jsx)(M, {
                                                    layoutId: "nav",
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        opacity: 1
                                                    },
                                                    exit: {
                                                        opacity: 0
                                                    }
                                                }), r]
                                            })
                                        })
                                    })
                                }, r)
                            }
                            )
                        })
                    }), (0,
                    n.jsxs)($, {
                        children: [(0,
                        n.jsx)(g, {}), (0,
                        n.jsx)(z, {
                            as: "button",
                            type: "button",
                            "aria-label": "Command",
                            onClick: r.toggle,
                            css: {
                                padding: "0 8px"
                            },
                            children: (0,
                            n.jsx)(k, {
                                className: "ri-command-line"
                            })
                        })]
                    })]
                })
            })
        }
        let b = (0,
        r.zo)("header", {
            display: "flex",
            alignItems: "center",
            color: "$primary",
            fontSize: "12px",
            minHeight: "59px",
            width: "100%",
            flexWrap: "wrap",
            position: "absolute",
            top: "0",
            zIndex: 3,
            marginTop: "13px",
            "@bp2": {
                marginTop: "0"
            }
        })
          , v = (0,
        r.zo)("div", {
            display: "flex",
            alignItems: "center",
            gap: "16px",
            "@bp1": {
                gap: "12px"
            }
        })
          , j = (0,
        r.zo)("ul", {
            margin: "0",
            padding: "0",
            listStyle: "none",
            display: "inline-flex",
            position: "relative",
            top: "5px",
            "@bp1": {
                justifyContent: "space-around"
            }
        })
          , z = (0,
        r.zo)("div", {
            appearance: "none",
            background: "transparent",
            border: "none",
            borderRadius: "$borderRadius",
            color: "$primary",
            cursor: "pointer",
            height: "34px",
            padding: "0 10px",
            transition: "background $duration ease-in-out, color $duration ease-in-out",
            "&:hover": {
                background: "$hover",
                color: "$primary"
            }
        })
          , k = (0,
        r.zo)("i", {
            fontSize: "24px",
            lineHeight: "32px",
            color: "$primary"
        })
          , w = (0,
        r.zo)(z, {
            fontWeight: 700,
            fontSize: "32px",
            textDecoration: "none",
            marginLeft: "12px",
            fontFamily: "$heading",
            color: "$primary",
            display: "flex",
            alignItems: "center",
            padding: 0
        })
          , S = (0,
        r.zo)("nav", {
            textAlign: "center",
            flex: 1,
            order: 2,
            flexBasis: "100%",
            "@bp2": {
                order: 0,
                flexBasis: "initial"
            },
            "@bp3": {
                overflowX: "scroll",
                overflowY: "hidden"
            }
        })
          , $ = (0,
        r.zo)("div", {
            display: "flex",
            alignItems: "center",
            paddingRight: "12px",
            marginLeft: "auto",
            gap: "12px"
        })
          , I = (0,
        r.zo)(p.E.div, {
            display: "flex",
            alignItems: "center",
            fontSize: "12px"
        })
          , C = (0,
        r.zo)("a", {
            fontSize: "12px",
            fontWeight: 400,
            fontStyle: "italic",
            color: "$secondary",
            textDecoration: "none",
            transition: "color $duration ease-in-out",
            cursor: "pointer",
            whiteSpace: "nowrap",
            opacity: .7,
            "&:hover": {
                color: "$primary",
                opacity: 1,
                textDecoration: "underline"
            }
        })
          , E = (0,
        r.zo)("span", {
            border: 0,
            position: "relative",
            "&:hover, &:focus": {
                opacity: 1
            }
        })
          , R = (0,
        r.zo)(p.E.span, {
            color: "$secondary",
            cursor: "pointer",
            display: "inline-block",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "1.2px",
            padding: "20px",
            textDecoration: "none",
            textTransform: "uppercase",
            transition: "color $duration ease-in-out",
            position: "relative",
            "&:hover": {
                color: "$primary"
            },
            "&::after": {
                content: '""',
                position: "absolute",
                bottom: "15px",
                left: "50%",
                transform: "translateX(-50%)",
                height: "2px",
                width: "20px",
                background: "$primary",
                opacity: 0,
                transition: "opacity $duration ease-in-out",
                borderRadius: "1px"
            }
        })
          , M = (0,
        r.zo)(p.E.span, {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: "$hover",
            borderRadius: "$borderRadius",
            zIndex: -1
        })
    }
}]);
