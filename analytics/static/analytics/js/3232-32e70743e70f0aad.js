(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3232], {
    21448: function(o, e, r) {
        "use strict";
        var c = r(85893)
          , l = r(67294)
          , a = r(4009)
          , n = r(81026)
          , i = r.n(n);
        e.Z = function(o) {
            let {id: e, title: r, position: n, positionStrategy: t="absolute", className: s="", children: d} = o;
            return (0,
            c.jsxs)("div", {
                children: [d && l.Children.map(d, o=>l.cloneElement(o, {
                    "data-tooltip-id": e,
                    "data-tooltip-content": r
                })), (0,
                c.jsx)(a.Tooltip, {
                    id: e,
                    place: n,
                    positionStrategy: t,
                    className: "".concat(i().tooltip, " ").concat(s)
                })]
            })
        }
    },
    13161: function(o, e, r) {
        "use strict";
        var c = r(85893);
        let l = ()=>(0,
        c.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: (0,
            c.jsx)("path", {
                d: "M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"
            })
        });
        e.Z = l
    },
    20134: function(o, e, r) {
        "use strict";
        var c = r(12166);
        e.Z = c.k
    },
    53068: function(o, e, r) {
        "use strict";
        r.d(e, {
            Z: function() {
                return l
            }
        });
        var c = r(67294);
        function l() {
            let[o,e] = (0,
            c.useState)({
                width: void 0,
                height: void 0
            });
            return (0,
            c.useEffect)(()=>{
                function o() {
                    e({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                }
                return window.addEventListener("resize", o),
                o(),
                ()=>window.removeEventListener("resize", o)
            }
            , []),
            o
        }
    },
    53232: function(o, e, r) {
        "use strict";
        r.d(e, {
            Z: function() {
                return ol
            }
        });
        var c = r(85893)
          , l = r(67294)
          , a = r(11163)
          , n = r(53920)
          , i = r(70256)
          , t = r(91765)
          , s = r.n(t)
          , d = function(o) {
            let {imageUrl: e, name: r, className: l="", onClick: a} = o;
            return (0,
            c.jsxs)("div", {
                className: "".concat(s().container, " ").concat(l),
                onClick: a,
                children: [(0,
                c.jsx)(i.Z, {
                    src: e,
                    label: r,
                    className: s().avatar
                }), (0,
                c.jsx)("div", {
                    className: s().name,
                    children: r
                })]
            })
        }
          , f = r(69889)
          , u = r(46234)
          , b = r(43920)
          , h = r(10361)
          , y = r.n(h)
          , _ = function(o) {
            let {profileInfo: e, menuItems: r, handleProfileClick: a, isMenuOpen: n} = o;
            return (0,
            c.jsx)("div", {
                children: (0,
                c.jsxs)(f.Z, {
                    containerClassName: y().menuContainer,
                    isOpen: n,
                    className: y().menu,
                    children: [(0,
                    c.jsx)(d, {
                        className: y().header,
                        onClick: a,
                        ...e
                    }), (0,
                    c.jsx)(u.Z, {}), null == r ? void 0 : r.map(o=>(0,
                    c.jsxs)(l.Fragment, {
                        children: [(0,
                        c.jsx)(b.Z, {
                            ...o,
                            children: o.children
                        }), o.hasDivider && (0,
                        c.jsx)(u.Z, {})]
                    }, o.text))]
                })
            })
        }
          , m = r(61456)
          , p = r(39834)
          , G = r(42228)
          , x = r(44037);
        r(57383),
        r(19837);
        var v = r(44344)
          , k = r(74102)
          , C = function(o) {
            let {openFeedbackModal: e} = o
              , {t: r} = (0,
            x.Z)()
              , c = (0,
            a.useRouter)()
              , {data: n={}} = (0,
            k.Z)()
              , {data: i={}} = (0,
            v.Z)()
              , [t,s] = (0,
            l.useState)(!1)
              , d = o=>{
                c.push(o),
                s(!1)
            }
              , f = (0,
            l.useMemo)(()=>{
                var o, e;
                return {
                    applicant: {
                        name: n.name,
                        imageUrl: null === (o = n.image) || void 0 === o ? void 0 : o.key,
                        link: "/dashboard/my-application"
                    },
                    member: {
                        name: i.name,
                        imageUrl: null === (e = i.image) || void 0 === e ? void 0 : e.key,
                        link: "/dashboard/profile"
                    }
                }
            }
            , [n, i])
              , u = (0,
            l.useMemo)(()=>{
                var o, e, r;
                return {
                    name: null === (o = f[n.role]) || void 0 === o ? void 0 : o.name,
                    imageUrl: null === (e = f[n.role]) || void 0 === e ? void 0 : e.imageUrl,
                    link: null === (r = f[n.role]) || void 0 === r ? void 0 : r.link
                }
            }
            , [f])
              , b = (0,
            l.useMemo)(()=>[{
                iconName: "setting",
                text: r("settings"),
                onClick: ()=>d("/dashboard/settings"),
                hasDivider: !0
            }, {
                iconName: "faq-circle",
                text: r("feedback"),
                onClick: e,
                hasDivider: !0
            }, {
                iconName: "logout",
                text: r("logout"),
                onClick: ()=>(0,
                m.Z)()
            }], [c.locale])
              , h = (0,
            l.useMemo)(()=>[{
                iconName: "group-2",
                text: r("members"),
                onClick: ()=>d("/dashboard/profile?tab=members")
            }, {
                iconName: "dollar-circle",
                text: r("billing"),
                onClick: ()=>d("/dashboard/billing")
            }, ...b], [b, c.locale])
              , y = (0,
            l.useMemo)(()=>"company" === i.type ? h : b, [i, b, h])
              , _ = ()=>{
                d(u.link)
            }
              , p = ()=>{
                s(!t)
            }
              , G = ()=>{
                s(!1)
            }
            ;
            return {
                profileInfo: u,
                menuItems: y,
                isMenuOpen: t,
                handleProfileClick: _,
                handleMouseEnter: p,
                handleMouseLeave: G
            }
        }
          , B = r(53068)
          , g = r(41664)
          , j = r.n(g);
        function w() {
            return (0,
            c.jsxs)("svg", {
                width: "46",
                height: "46",
                viewBox: "0 0 46 46",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                c.jsxs)("g", {
                    filter: "url(#filter0_dd_3317_9747)",
                    children: [(0,
                    c.jsx)("rect", {
                        x: "3",
                        y: "2",
                        width: "40",
                        height: "40",
                        rx: "10",
                        fill: "url(#paint0_linear_3317_9747)"
                    }), (0,
                    c.jsx)("path", {
                        d: "M23.8863 21.2862C23.8863 22.4125 23.695 23.4573 23.3125 24.4206C22.9371 25.384 22.4023 26.2162 21.7081 26.9175C21.021 27.6187 20.1923 28.1712 19.2219 28.575C18.2515 28.9717 17.1748 29.17 15.9919 29.17C14.809 29.17 13.7323 28.9717 12.7619 28.575C11.7915 28.1712 10.9592 27.6187 10.265 26.9175C9.57083 26.2162 9.0325 25.384 8.65 24.4206C8.27458 23.4573 8.08688 22.4125 8.08688 21.2862C8.08688 20.16 8.27458 19.1187 8.65 18.1625C9.0325 17.1992 9.57083 16.3669 10.265 15.6656C10.9592 14.9644 11.7915 14.4154 12.7619 14.0187C13.7323 13.615 14.809 13.4131 15.9919 13.4131C17.1748 13.4131 18.2515 13.615 19.2219 14.0187C20.1923 14.4154 21.021 14.9679 21.7081 15.6762C22.4023 16.3775 22.9371 17.2098 23.3125 18.1731C23.695 19.1294 23.8863 20.1671 23.8863 21.2862ZM20.6244 21.2862C20.6244 20.4787 20.5181 19.7562 20.3056 19.1187C20.0931 18.4742 19.785 17.9287 19.3812 17.4825C18.9846 17.0292 18.4994 16.6856 17.9256 16.4519C17.359 16.211 16.7144 16.0906 15.9919 16.0906C15.2694 16.0906 14.6213 16.211 14.0475 16.4519C13.4738 16.6856 12.985 17.0292 12.5813 17.4825C12.1846 17.9287 11.88 18.4742 11.6675 19.1187C11.455 19.7562 11.3488 20.4787 11.3488 21.2862C11.3488 22.1008 11.455 22.8304 11.6675 23.475C11.88 24.1125 12.1846 24.6544 12.5813 25.1006C12.985 25.5469 13.4738 25.8904 14.0475 26.1312C14.6213 26.365 15.2694 26.4819 15.9919 26.4819C16.7144 26.4819 17.359 26.365 17.9256 26.1312C18.4994 25.8904 18.9846 25.5469 19.3812 25.1006C19.785 24.6544 20.0931 24.1125 20.3056 23.475C20.5181 22.8304 20.6244 22.1008 20.6244 21.2862ZM33.2173 23.1456L31.5492 18.4281C31.45 18.1802 31.3438 17.8898 31.2304 17.5569C31.1242 17.224 31.0215 16.8627 30.9223 16.4731C30.8232 16.8698 30.7169 17.2381 30.6036 17.5781C30.4973 17.911 30.3946 18.2015 30.2954 18.4494L28.6379 23.1456H33.2173ZM38.5723 29H36.0967C35.8204 29 35.5938 28.9362 35.4167 28.8087C35.2467 28.6742 35.1192 28.5042 35.0342 28.2988L33.9929 25.3556H27.8517L26.8104 28.2988C26.7396 28.4758 26.6157 28.6387 26.4386 28.7875C26.2615 28.9292 26.0384 29 25.7692 29H23.2723L29.2967 13.5831H32.5586L38.5723 29Z",
                        fill: "white"
                    })]
                }), (0,
                c.jsxs)("defs", {
                    children: [(0,
                    c.jsxs)("filter", {
                        id: "filter0_dd_3317_9747",
                        x: "0",
                        y: "0",
                        width: "46",
                        height: "46",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [(0,
                        c.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }), (0,
                        c.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                        }), (0,
                        c.jsx)("feOffset", {
                            dy: "1"
                        }), (0,
                        c.jsx)("feGaussianBlur", {
                            stdDeviation: "1"
                        }), (0,
                        c.jsx)("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                        }), (0,
                        c.jsx)("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_3317_9747"
                        }), (0,
                        c.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                        }), (0,
                        c.jsx)("feOffset", {
                            dy: "1"
                        }), (0,
                        c.jsx)("feGaussianBlur", {
                            stdDeviation: "1.5"
                        }), (0,
                        c.jsx)("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                        }), (0,
                        c.jsx)("feBlend", {
                            mode: "normal",
                            in2: "effect1_dropShadow_3317_9747",
                            result: "effect2_dropShadow_3317_9747"
                        }), (0,
                        c.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect2_dropShadow_3317_9747",
                            result: "shape"
                        })]
                    }), (0,
                    c.jsxs)("linearGradient", {
                        id: "paint0_linear_3317_9747",
                        x1: "4.95766",
                        y1: "48.5256",
                        x2: "38.8936",
                        y2: "-2.20047",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0,
                        c.jsx)("stop", {
                            stopColor: "#1367E4"
                        }), (0,
                        c.jsx)("stop", {
                            offset: "1",
                            stopColor: "#3F8CFF"
                        })]
                    })]
                })]
            })
        }
        var A = r(66568)
          , N = r.n(A)
          , F = function() {
            return (0,
            c.jsx)("div", {
                className: N().sidebarLogo,
                children: (0,
                c.jsx)(j(), {
                    href: "/",
                    children: (0,
                    c.jsx)("div", {
                        className: N().logo,
                        children: (0,
                        c.jsx)(w, {})
                    })
                })
            })
        }
          , Z = r(21448)
          , S = r(21135)
          , D = r.n(S)
          , M = function(o) {
            let {className: e, href: r, title: l, icon: a, onClick: n, isActive: i, count: t} = o;
            return (0,
            c.jsxs)(j(), {
                href: r,
                className: "".concat(D().link, " ").concat(i ? D().active : ""),
                onClick: ()=>n && n(),
                passHref: !0,
                children: [(0,
                c.jsx)(Z.Z, {
                    id: "tooltip-".concat(r),
                    title: l,
                    position: "right",
                    positionStrategy: "fixed",
                    className: D().tooltip,
                    children: (0,
                    c.jsx)("div", {
                        className: D().icon,
                        children: (0,
                        c.jsx)(G.Z, {
                            name: a,
                            size: 30
                        })
                    })
                }), t ? (0,
                c.jsx)("span", {
                    className: D().notificationsNum,
                    children: t > 9 ? "9+" : t
                }) : null]
            })
        }
          , P = r(38275)
          , O = r(26806)
          , L = r(94225);
        let T = [{
            icon: "search-2",
            href: "/jobs",
            key: "browse_jobs"
        }, {
            icon: "notification-1",
            href: "/dashboard/notifications",
            key: "notifications"
        }, {
            icon: "bag-7",
            href: "/dashboard/my-jobs",
            key: "my_jobs"
        }, {
            icon: "message-1",
            href: "/dashboard/messages",
            key: "messages"
        }]
          , E = [{
            icon: "add-square",
            href: "/dashboard/jobs/create-vacancy",
            key: "publish_vacancy"
        }, {
            icon: "bag-7",
            href: "/dashboard/jobs",
            key: "jobs"
        }, {
            icon: "group-2",
            href: "/dashboard/applicants",
            key: "applicants"
        }, {
            icon: "message-1",
            href: "/dashboard/messages",
            key: "messages"
        }, {
            icon: "notification-1",
            href: "/dashboard/notifications",
            key: "notifications"
        }];
        var Y = r(10979)
          , I = r.n(Y)
          , R = function(o) {
            let {isSidebarOpen: e, closeMenu: r} = o
              , {t: n} = (0,
            x.Z)()
              , {pathname: i} = (0,
            a.useRouter)()
              , {data: t, isLoading: s} = (0,
            k.Z)()
              , {data: d} = (0,
            v.Z)()
              , {data: f} = (0,
            L.Z)()
              , {data: u} = (0,
            O.Z)()
              , b = (0,
            l.useMemo)(()=>(null == d ? void 0 : d._id) ? E : (null == t ? void 0 : t.role) === "applicant" ? T : void 0, [d, t]);
            return s ? (0,
            c.jsx)(P.Z, {
                width: 30,
                height: 30,
                className: I().spinner
            }) : (0,
            c.jsx)("div", {
                className: "".concat(I().container, " ").concat(e ? I().sidebarOpen : ""),
                children: null == b ? void 0 : b.map(o=>{
                    let {icon: e, href: l, key: a} = o
                      , t = null;
                    return "notifications" == a ? t = f : "messages" == a && (t = u),
                    (0,
                    c.jsx)(M, {
                        href: l,
                        title: n(a),
                        icon: e,
                        onClick: r,
                        isActive: i === l,
                        count: t
                    }, a)
                }
                )
            })
        }
          , H = r(19481)
          , U = function(o) {
            let {isOpen: e, closeMenu: r} = o
              , {t: n} = (0,
            x.Z)()
              , {pathname: t} = (0,
            a.useRouter)()
              , [s,d] = (0,
            l.useState)(!1)
              , f = (0,
            l.useRef)()
              , u = ()=>{
                d(!0)
            }
              , b = ()=>{
                d(!1)
            }
              , {profileInfo: h, menuItems: y, isMenuOpen: G, handleProfileClick: v, handleMouseEnter: k, handleMouseLeave: g} = C({
                openFeedbackModal: u
            })
              , j = (0,
            B.Z)();
            return (0,
            c.jsxs)(c.Fragment, {
                children: [(0,
                c.jsx)(p.default, {
                    onOutsideClick: ()=>{
                        r()
                    }
                    ,
                    children: (0,
                    c.jsxs)("nav", {
                        onClick: r,
                        className: "".concat(N().sidebar, " ").concat(e ? N().sidebarOpened : ""),
                        children: [(0,
                        c.jsxs)("div", {
                            children: [(0,
                            c.jsx)(F, {}), (0,
                            c.jsx)(R, {
                                closeMenu: r,
                                isSidebarOpen: e
                            })]
                        }), (0,
                        c.jsxs)("div", {
                            children: [j.width <= 768 && (0,
                            c.jsxs)(c.Fragment, {
                                children: [(0,
                                c.jsx)(M, {
                                    href: "/dashboard/settings",
                                    title: n("settings"),
                                    icon: "setting",
                                    onClick: r,
                                    isActive: "/dashboard/settings" === t
                                }), (0,
                                c.jsx)(M, {
                                    onClick: m.Z,
                                    href: "/",
                                    title: n("logout"),
                                    icon: "login"
                                })]
                            }), (0,
                            c.jsx)("div", {
                                ref: f,
                                className: N().container,
                                children: (0,
                                c.jsx)(i.Z, {
                                    label: h.name,
                                    src: h.imageUrl,
                                    className: N().avatar,
                                    onClick: j.width <= 768 ? v : k
                                })
                            })]
                        })]
                    })
                }), (0,
                c.jsx)(p.default, {
                    onOutsideClick: function(o) {
                        f.current.contains(o.target) || g()
                    },
                    children: (0,
                    c.jsx)(_, {
                        isMenuOpen: G,
                        menuItems: y,
                        profileInfo: h,
                        handleProfileClick: v
                    })
                }), (0,
                c.jsx)(H.Z, {
                    isModalOpen: s,
                    closeModal: b
                })]
            })
        }
          , W = r(13161)
          , z = r(54095)
          , q = r.n(z);
        function J(o) {
            let {setSidebarOpen: e} = o;
            return (0,
            c.jsx)("button", {
                className: q().sidebarTrigger,
                onClick: ()=>e(o=>!o),
                children: (0,
                c.jsx)(W.Z, {})
            })
        }
        function K(o) {
            let {isSidebarOpen: e, setSidebarOpen: r} = o;
            return (0,
            c.jsx)("nav", {
                className: "".concat(q().navbar, " ").concat(e ? q().sidebarOpened : "", " "),
                children: (0,
                c.jsx)(J, {
                    setSidebarOpen: r
                })
            })
        }
        var Q = r(20134)
          , V = r(79127)
          , X = r(92896)
          , $ = r(38374)
          , oo = r.n($)
          , oe = r(83979)
          , or = r(27484)
          , oc = r.n(or)
          , ol = function(o) {
            var e;
            let {children: r} = o
              , i = (0,
            a.useRouter)()
              , {data: t} = (0,
            k.Z)()
              , {data: s, isLoading: d, isFetching: f} = (0,
            v.Z)()
              , {refetch: u} = (0,
            O.Z)()
              , {socket: {setSocket: b}={}} = (0,
            l.useContext)(Q.Z)
              , {mutateAsync: h} = (0,
            V.Z)()
              , [y,_] = (0,
            l.useState)(!1)
              , [p,G] = (0,
            l.useState)(new Date)
              , x = s && (null == s ? void 0 : s.usedInTrial) && (null == s ? void 0 : null === (e = s.subscription) || void 0 === e ? void 0 : e.status) === "InTrial" && !oc()(p || new Date).isSame(oc()(), "day");
            (0,
            l.useEffect)(()=>{
                let o = ()=>{
                    let o = localStorage.getItem("freeTrial");
                    o !== p && G(o)
                }
                ;
                return window.addEventListener("storage", o),
                ()=>{
                    window.removeEventListener("storage", o)
                }
            }
            , [p]);
            let C = ()=>{
                _(!1)
            }
            ;
            return (0,
            l.useEffect)(()=>{
                (null == t ? void 0 : t.status) === "deleted" && (0,
                m.Z)()
            }
            , [t]),
            (0,
            l.useEffect)(()=>{
                if (!d && !f && s) {
                    if ((null == s ? void 0 : s.type) !== "company" || (null == s ? void 0 : s.status) !== "inactive" && (null == s ? void 0 : s.image)) {
                        if ((null == i ? void 0 : i.pathname) !== "/dashboard/billing") {
                            var o;
                            (null == s ? void 0 : s.usedInTrial) || (null == s ? void 0 : null === (o = s.subscription) || void 0 === o ? void 0 : o.status) === "InTrial" ? (null == s ? void 0 : s.usedInTrial) && !(null == s ? void 0 : s.subscription) && i.push("/upgrade-to-premium") : i.push("/free-trial-started")
                        }
                    } else
                        i.push("/signup/employer/profile")
                }
            }
            , [s, d, f]),
            (0,
            l.useEffect)(()=>{
                X.$.init().then(o=>{
                    o && h(o).then(o=>{
                        console.log(o)
                    }
                    ).catch(o=>{
                        console.log(o)
                    }
                    )
                }
                )
            }
            , []),
            (0,
            l.useEffect)(()=>{
                let o = n.ZP.connect("wss://api.oneapp.ly", {
                    extraHeaders: {
                        Authorization: "Bearer ".concat(localStorage.getItem("token"))
                    }
                });
                return null == o || o.on("connect", ()=>console.log("Client connected: ".concat(o.id))),
                null == o || o.on("newMessage", ()=>u()),
                null == o || o.on("disconnect", o=>console.log("Client disconnected: ".concat(o))),
                null == o || o.on("connect_error", o=>console.log("Client connect_error: ".concat(o))),
                b(o),
                ()=>null == o ? void 0 : o.close()
            }
            , []),
            (0,
            c.jsxs)(c.Fragment, {
                children: [(0,
                c.jsx)(K, {
                    isSidebarOpen: y,
                    setSidebarOpen: _
                }), (0,
                c.jsxs)("div", {
                    className: oo().container,
                    children: [(0,
                    c.jsx)(U, {
                        isOpen: y,
                        closeMenu: C
                    }), (0,
                    c.jsxs)("main", {
                        className: oo().content,
                        children: [x && (0,
                        c.jsx)(oe.Z, {
                            data: null == s ? void 0 : s.subscription,
                            onClick: function() {
                                let o = new Date;
                                G(o),
                                localStorage.setItem("freeTrial", o)
                            }
                        }), r]
                    })]
                })]
            })
        }
    },
    81026: function(o) {
        o.exports = {
            colorPrimary: "#3f8cff",
            colorPrimaryDark: "#073746",
            colorGreen: "#4bc0c8",
            colorBule3: "#3558ae",
            colorBule2: "#3b447a",
            colorBlueAB: "#003cab",
            colorWhite: "#fff",
            colorGreyF1: "#f1f1f1",
            colorGreyF8: "#f1f5f8",
            colorGreyF9: "#f5f7f9",
            colorGreyD2: "#d2d2d2",
            colorGreyA6: "#8692a6",
            colorGreyA8: "#9697a8",
            colorGreyCB: "#a5b4cb",
            colorGrey7C: "#7c8da6",
            colorGreyF3: "#f3f3f3",
            colorGreyCA: "#cacaca",
            colorDark: "#475467",
            colorText: "#242423",
            colorBlack: "#000",
            colorBlack2: "#525461",
            colorBlack3: "#111",
            colorBlack4: "#101828",
            colorBlack5: "#27292c",
            colorGreen2: "#159947",
            colorGreenC8: "#c8facd",
            colorGreen44: "#44e1bb",
            colorGreen97: "#6fcf97",
            colorRed: "#fc474a",
            colorPurple: "#716ab7",
            colorYellow: "#ffc727",
            colorYellow74: "#d0d274",
            roundness: "8px",
            tooltip: "NewTooltip_tooltip__CmWsQ"
        }
    },
    38374: function(o) {
        o.exports = {
            colorPrimary: "#3f8cff",
            colorPrimaryDark: "#073746",
            colorGreen: "#4bc0c8",
            colorBule3: "#3558ae",
            colorBule2: "#3b447a",
            colorBlueAB: "#003cab",
            colorWhite: "#fff",
            colorGreyF1: "#f1f1f1",
            colorGreyF8: "#f1f5f8",
            colorGreyF9: "#f5f7f9",
            colorGreyD2: "#d2d2d2",
            colorGreyA6: "#8692a6",
            colorGreyA8: "#9697a8",
            colorGreyCB: "#a5b4cb",
            colorGrey7C: "#7c8da6",
            colorGreyF3: "#f3f3f3",
            colorGreyCA: "#cacaca",
            colorDark: "#475467",
            colorText: "#242423",
            colorBlack: "#000",
            colorBlack2: "#525461",
            colorBlack3: "#111",
            colorBlack4: "#101828",
            colorBlack5: "#27292c",
            colorGreen2: "#159947",
            colorGreenC8: "#c8facd",
            colorGreen44: "#44e1bb",
            colorGreen97: "#6fcf97",
            colorRed: "#fc474a",
            colorPurple: "#716ab7",
            colorYellow: "#ffc727",
            colorYellow74: "#d0d274",
            roundness: "8px",
            container: "DashboardLayout_container__5IpnZ",
            content: "DashboardLayout_content__MFGdd"
        }
    },
    54095: function(o) {
        o.exports = {
            colorPrimary: "#3f8cff",
            colorPrimaryDark: "#073746",
            colorGreen: "#4bc0c8",
            colorBule3: "#3558ae",
            colorBule2: "#3b447a",
            colorBlueAB: "#003cab",
            colorWhite: "#fff",
            colorGreyF1: "#f1f1f1",
            colorGreyF8: "#f1f5f8",
            colorGreyF9: "#f5f7f9",
            colorGreyD2: "#d2d2d2",
            colorGreyA6: "#8692a6",
            colorGreyA8: "#9697a8",
            colorGreyCB: "#a5b4cb",
            colorGrey7C: "#7c8da6",
            colorGreyF3: "#f3f3f3",
            colorGreyCA: "#cacaca",
            colorDark: "#475467",
            colorText: "#242423",
            colorBlack: "#000",
            colorBlack2: "#525461",
            colorBlack3: "#111",
            colorBlack4: "#101828",
            colorBlack5: "#27292c",
            colorGreen2: "#159947",
            colorGreenC8: "#c8facd",
            colorGreen44: "#44e1bb",
            colorGreen97: "#6fcf97",
            colorRed: "#fc474a",
            colorPurple: "#716ab7",
            colorYellow: "#ffc727",
            colorYellow74: "#d0d274",
            roundness: "8px",
            navbar: "Navbar_navbar__jS0hJ",
            sidebarTrigger: "Navbar_sidebarTrigger__agACa"
        }
    },
    21135: function(o) {
        o.exports = {
            colorPrimary: "#3f8cff",
            colorPrimaryDark: "#073746",
            colorGreen: "#4bc0c8",
            colorBule3: "#3558ae",
            colorBule2: "#3b447a",
            colorBlueAB: "#003cab",
            colorWhite: "#fff",
            colorGreyF1: "#f1f1f1",
            colorGreyF8: "#f1f5f8",
            colorGreyF9: "#f5f7f9",
            colorGreyD2: "#d2d2d2",
            colorGreyA6: "#8692a6",
            colorGreyA8: "#9697a8",
            colorGreyCB: "#a5b4cb",
            colorGrey7C: "#7c8da6",
            colorGreyF3: "#f3f3f3",
            colorGreyCA: "#cacaca",
            colorDark: "#475467",
            colorText: "#242423",
            colorBlack: "#000",
            colorBlack2: "#525461",
            colorBlack3: "#111",
            colorBlack4: "#101828",
            colorBlack5: "#27292c",
            colorGreen2: "#159947",
            colorGreenC8: "#c8facd",
            colorGreen44: "#44e1bb",
            colorGreen97: "#6fcf97",
            colorRed: "#fc474a",
            colorPurple: "#716ab7",
            colorYellow: "#ffc727",
            colorYellow74: "#d0d274",
            roundness: "8px",
            link: "MenuLink_link__UZ3Dt",
            active: "MenuLink_active__tztG0",
            icon: "MenuLink_icon__lq_Xy",
            notificationsNum: "MenuLink_notificationsNum__jVD0h",
            tooltip: "MenuLink_tooltip__SXclo"
        }
    },
    10979: function(o) {
        o.exports = {
            colorPrimary: "#3f8cff",
            colorPrimaryDark: "#073746",
            colorGreen: "#4bc0c8",
            colorBule3: "#3558ae",
            colorBule2: "#3b447a",
            colorBlueAB: "#003cab",
            colorWhite: "#fff",
            colorGreyF1: "#f1f1f1",
            colorGreyF8: "#f1f5f8",
            colorGreyF9: "#f5f7f9",
            colorGreyD2: "#d2d2d2",
            colorGreyA6: "#8692a6",
            colorGreyA8: "#9697a8",
            colorGreyCB: "#a5b4cb",
            colorGrey7C: "#7c8da6",
            colorGreyF3: "#f3f3f3",
            colorGreyCA: "#cacaca",
            colorDark: "#475467",
            colorText: "#242423",
            colorBlack: "#000",
            colorBlack2: "#525461",
            colorBlack3: "#111",
            colorBlack4: "#101828",
            colorBlack5: "#27292c",
            colorGreen2: "#159947",
            colorGreenC8: "#c8facd",
            colorGreen44: "#44e1bb",
            colorGreen97: "#6fcf97",
            colorRed: "#fc474a",
            colorPurple: "#716ab7",
            colorYellow: "#ffc727",
            colorYellow74: "#d0d274",
            roundness: "8px",
            spinner: "Nav_spinner__NDQUM",
            container: "Nav_container__52qu0",
            sidebarOpen: "Nav_sidebarOpen__ezRNS",
            link: "Nav_link__b5tTa"
        }
    },
    91765: function(o) {
        o.exports = {
            colorPrimary: "#3f8cff",
            colorPrimaryDark: "#073746",
            colorGreen: "#4bc0c8",
            colorBule3: "#3558ae",
            colorBule2: "#3b447a",
            colorBlueAB: "#003cab",
            colorWhite: "#fff",
            colorGreyF1: "#f1f1f1",
            colorGreyF8: "#f1f5f8",
            colorGreyF9: "#f5f7f9",
            colorGreyD2: "#d2d2d2",
            colorGreyA6: "#8692a6",
            colorGreyA8: "#9697a8",
            colorGreyCB: "#a5b4cb",
            colorGrey7C: "#7c8da6",
            colorGreyF3: "#f3f3f3",
            colorGreyCA: "#cacaca",
            colorDark: "#475467",
            colorText: "#242423",
            colorBlack: "#000",
            colorBlack2: "#525461",
            colorBlack3: "#111",
            colorBlack4: "#101828",
            colorBlack5: "#27292c",
            colorGreen2: "#159947",
            colorGreenC8: "#c8facd",
            colorGreen44: "#44e1bb",
            colorGreen97: "#6fcf97",
            colorRed: "#fc474a",
            colorPurple: "#716ab7",
            colorYellow: "#ffc727",
            colorYellow74: "#d0d274",
            roundness: "8px",
            container: "Header_container__B_Ytl",
            name: "Header_name__ANfPm",
            avatar: "Header_avatar__GNmha"
        }
    },
    10361: function(o) {
        o.exports = {
            colorPrimary: "#3f8cff",
            colorPrimaryDark: "#073746",
            colorGreen: "#4bc0c8",
            colorBule3: "#3558ae",
            colorBule2: "#3b447a",
            colorBlueAB: "#003cab",
            colorWhite: "#fff",
            colorGreyF1: "#f1f1f1",
            colorGreyF8: "#f1f5f8",
            colorGreyF9: "#f5f7f9",
            colorGreyD2: "#d2d2d2",
            colorGreyA6: "#8692a6",
            colorGreyA8: "#9697a8",
            colorGreyCB: "#a5b4cb",
            colorGrey7C: "#7c8da6",
            colorGreyF3: "#f3f3f3",
            colorGreyCA: "#cacaca",
            colorDark: "#475467",
            colorText: "#242423",
            colorBlack: "#000",
            colorBlack2: "#525461",
            colorBlack3: "#111",
            colorBlack4: "#101828",
            colorBlack5: "#27292c",
            colorGreen2: "#159947",
            colorGreenC8: "#c8facd",
            colorGreen44: "#44e1bb",
            colorGreen97: "#6fcf97",
            colorRed: "#fc474a",
            colorPurple: "#716ab7",
            colorYellow: "#ffc727",
            colorYellow74: "#d0d274",
            roundness: "8px",
            menu: "ProfileMenu_menu__ELifA",
            header: "ProfileMenu_header__3ay7w",
            menuContainer: "ProfileMenu_menuContainer__JOtAu"
        }
    },
    66568: function(o) {
        o.exports = {
            colorPrimary: "#3f8cff",
            colorPrimaryDark: "#073746",
            colorGreen: "#4bc0c8",
            colorBule3: "#3558ae",
            colorBule2: "#3b447a",
            colorBlueAB: "#003cab",
            colorWhite: "#fff",
            colorGreyF1: "#f1f1f1",
            colorGreyF8: "#f1f5f8",
            colorGreyF9: "#f5f7f9",
            colorGreyD2: "#d2d2d2",
            colorGreyA6: "#8692a6",
            colorGreyA8: "#9697a8",
            colorGreyCB: "#a5b4cb",
            colorGrey7C: "#7c8da6",
            colorGreyF3: "#f3f3f3",
            colorGreyCA: "#cacaca",
            colorDark: "#475467",
            colorText: "#242423",
            colorBlack: "#000",
            colorBlack2: "#525461",
            colorBlack3: "#111",
            colorBlack4: "#101828",
            colorBlack5: "#27292c",
            colorGreen2: "#159947",
            colorGreenC8: "#c8facd",
            colorGreen44: "#44e1bb",
            colorGreen97: "#6fcf97",
            colorRed: "#fc474a",
            colorPurple: "#716ab7",
            colorYellow: "#ffc727",
            colorYellow74: "#d0d274",
            roundness: "8px",
            sidebar: "Sidebar_sidebar__wLgPK",
            sidebarButton: "Sidebar_sidebarButton__Px4vo",
            createVacancy: "Sidebar_createVacancy__l_vKe",
            activeIcon: "Sidebar_activeIcon__lnRTn",
            icon: "Sidebar_icon__Ktu0P",
            sidebarOpened: "Sidebar_sidebarOpened__b5CAZ",
            sidebarNavLink: "Sidebar_sidebarNavLink__GGehZ",
            sidebarNavLinkActive: "Sidebar_sidebarNavLinkActive__Su_FE",
            showOnMobile: "Sidebar_showOnMobile__83nWf",
            sidebarTitle: "Sidebar_sidebarTitle__Q0fex",
            logo: "Sidebar_logo__gJOrO",
            container: "Sidebar_container__id_Mp",
            avatar: "Sidebar_avatar__1zaxE"
        }
    }
}]);
