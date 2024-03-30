"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9837], {
    19837: function(t, e, n) {
        n.d(e, {
            W$: function() {
                return tu
            },
            Q0: function() {
                return v.Z
            },
            LP: function() {
                return u.Z
            },
            FF: function() {
                return b
            },
            fw: function() {
                return B
            },
            vc: function() {
                return L
            },
            $h: function() {
                return D
            },
            M5: function() {
                return H
            },
            ik: function() {
                return O
            },
            PM: function() {
                return tt
            },
            Jn: function() {
                return V
            },
            XD: function() {
                return k
            },
            Ok: function() {
                return P
            },
            Gh: function() {
                return p
            },
            GF: function() {
                return c
            },
            Jm: function() {
                return l
            },
            RU: function() {
                return tn
            },
            Ak: function() {
                return F
            },
            xM: function() {
                return ti
            },
            Pr: function() {
                return Z
            },
            mC: function() {
                return j
            },
            Zr: function() {
                return Y
            },
            SA: function() {
                return g
            },
            x_: function() {
                return m
            },
            er: function() {
                return T
            },
            IQ: function() {
                return z
            },
            _8: function() {
                return W.Z
            },
            c7: function() {
                return x
            },
            Bl: function() {
                return i.Z
            },
            q: function() {
                return J
            },
            I2: function() {
                return A.Z
            },
            gw: function() {
                return f.Z
            },
            qQ: function() {
                return I
            }
        });
        var i = n(82424);
        n(13535),
        n(52215);
        var u = n(20154)
          , r = n(88767)
          , a = n(33542);
        let o = t=>{
            let e = (0,
            r.useMutation)(async t=>{
                let e = t.jobId;
                delete t.jobId,
                await a.WY.patch("/jobs/".concat(e, "/").concat(null == t ? void 0 : t.status))
            }
            , {
                onSettled: ()=>{
                    a.Eh.invalidateQueries("organization-jobs"),
                    a.Eh.invalidateQueries(["jobApplyings", t])
                }
            });
            return e
        }
        ;
        var l = o;
        let s = t=>{
            let e = (0,
            r.useMutation)(async e=>(e.jobId,
            delete e.jobId,
            await a.WY.put("/jobs/".concat(t), e).then(t=>{
                var e, n;
                return null == t ? void 0 : null === (e = t.data) || void 0 === e ? void 0 : null === (n = e.data) || void 0 === n ? void 0 : n.job
            }
            )), {
                onSettled: ()=>{
                    a.Eh.invalidateQueries("organization-jobs"),
                    a.Eh.invalidateQueries("job-by-slug"),
                    a.Eh.invalidateQueries(["jobApplyings", t])
                }
            });
            return e
        }
        ;
        var c = s;
        let d = ()=>{
            let t = (0,
            r.useMutation)(t=>a.WY.delete("/jobs/".concat(null == t ? void 0 : t.jobId)));
            return t
        }
        ;
        var p = d;
        n(89709);
        var f = n(53943)
          , v = n(58305)
          , h = n(86501)
          , y = n(44037);
        let Q = ()=>{
            let {t} = (0,
            y.Z)()
              , e = (0,
            r.useMutation)(e=>{
                let {data: n, id: i} = e;
                if ((null == n ? void 0 : n.state) === "applied") {
                    h.ZP.error(t("cant_move_applied"));
                    return
                }
                return a.WY.put("/apply/".concat(i), n)
            }
            , {
                onMutate: async t=>{
                    let {data: {state: e}, id: n, slug: i, postType: u} = t;
                    await a.Eh.cancelQueries(["".concat(u, "Applyings"), i]);
                    let r = a.Eh.getQueryData(["".concat(u, "Applyings"), i]);
                    return a.Eh.setQueryData(["".concat(u, "Applyings"), i], t=>null == t ? void 0 : t.map(t=>(t._id == n && (t.state = e),
                    t))),
                    {
                        previousData: r
                    }
                }
            });
            return e
        }
        ;
        var b = Q
          , M = n(6154);
        function g() {
            let t = (0,
            r.useMutation)(t=>M.Z.post("".concat("https://api.oneapp.ly", "/auth/password/sendResetToken"), t));
            return t
        }
        let E = ()=>{
            let t = (0,
            r.useMutation)(t=>M.Z.post("".concat("https://api.oneapp.ly", "/auth/password/reset"), t));
            return t
        }
        ;
        var m = E
          , W = n(26593);
        function Y() {
            return (0,
            r.useMutation)(()=>a.WY.put("/notifications/seen"))
        }
        function j() {
            return (0,
            r.useMutation)(t=>a.WY.delete("/notifications/".concat(t.notificationId)), {
                onSettled: ()=>{
                    a.Eh.refetchQueries("notifications")
                }
            })
        }
        function Z() {
            return (0,
            r.useMutation)(t=>a.WY.delete("profile/notifications"), {
                onSettled: ()=>{
                    a.Eh.refetchQueries("notifications")
                }
            })
        }
        let S = ()=>{
            let t = (0,
            r.useMutation)(t=>a.WY.put("/profile/password", t));
            return t
        }
        ;
        var D = S;
        let w = ()=>{
            let t = (0,
            r.useMutation)(t=>a.WY.put("/profile/email", t), {
                onSettled: ()=>{
                    a.Eh.invalidateQueries(["profile"])
                }
            });
            return t
        }
        ;
        var I = w;
        let _ = ()=>{
            let t = (0,
            r.useQueryClient)()
              , e = (0,
            r.useMutation)(()=>a.WY.delete("/profile"), {
                onSettled: ()=>{
                    t.removeQueries(["profile"])
                }
            });
            return e
        }
        ;
        var k = _;
        function z() {
            let t = (0,
            r.useMutation)(t=>{
                if (null == t ? void 0 : t.jobId)
                    return a.WY.post("/profile/savejob/".concat(t.jobId))
            }
            , {
                onMutate: async t=>{
                    await a.Eh.cancelQueries("saveds");
                    let e = a.Eh.getQueryData("saveds");
                    return a.Eh.setQueryData("saveds", function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            savedJobs: []
                        };
                        if (null == t ? void 0 : t.jobId)
                            return {
                                savedJobs: [...null == e ? void 0 : e.savedJobs, {
                                    _id: null == t ? void 0 : t.jobId
                                }],
                                _id: null == e ? void 0 : e._id
                            }
                    }),
                    {
                        previousData: e
                    }
                }
                ,
                onError: (t,e,n)=>{
                    a.Eh.setQueryData("saveds", null == n ? void 0 : n.previousData)
                }
                ,
                onSettled: ()=>{
                    a.Eh.invalidateQueries("saveds")
                }
            });
            return t
        }
        var A = n(39706);
        let C = ()=>{
            let t = (0,
            r.useMutation)(t=>M.Z.post("".concat("https://api.oneapp.ly", "/auth/signup/organization"), t));
            return t
        }
        ;
        var J = C;
        function F() {
            let t = (0,
            r.useQueryClient)();
            return (0,
            r.useMutation)(t=>a.WY.put("/profile/member", t), {
                onMutate: async e=>{
                    await t.cancelQueries("profile");
                    let n = t.getQueryData("profile");
                    return t.setQueryData("profile", t=>({
                        ...t,
                        newProfileData: e
                    })),
                    {
                        oldData: n
                    }
                }
                ,
                onError: (e,n,i)=>{
                    let {oldData: u} = i;
                    t.setQueryData("profile", u)
                }
                ,
                onSettled: ()=>{
                    t.invalidateQueries(["profile"])
                }
            })
        }
        n(30299);
        let N = ()=>{
            let t = (0,
            r.useMutation)(t=>a.WY.post("/organizations/invite", t), {
                onSettled: ()=>{
                    a.Eh.invalidateQueries("my-invitations")
                }
            });
            return t
        }
        ;
        var P = N;
        let q = ()=>(0,
        r.useMutation)(t=>M.Z.post("".concat("https://api.oneapp.ly", "/auth/signup/member"), t));
        var x = q;
        let G = ()=>{
            let t = (0,
            r.useMutation)(t=>a.WY.put("/organizations/changerole", t), {
                onSettled: ()=>{
                    a.Eh.invalidateQueries("my-organization")
                }
            });
            return t
        }
        ;
        var L = G;
        let R = ()=>{
            let t = (0,
            r.useMutation)(t=>a.WY.put("/organizations/removemember", t), {
                onSettled: ()=>{
                    a.Eh.invalidateQueries("my-organization")
                }
            });
            return t
        }
        ;
        var T = R;
        let $ = t=>{
            let e = (0,
            r.useMutation)(()=>a.WY.delete("/invitations/".concat(t)), {
                onSettled: ()=>{
                    a.Eh.invalidateQueries("my-invitations")
                }
            });
            return e
        }
        ;
        var B = $;
        function O(t) {
            return (0,
            r.useMutation)(()=>a.WY.put("/chats/".concat(t, "/messages/see")), {
                onSettled: ()=>{
                    a.Eh.invalidateQueries("chats"),
                    a.Eh.invalidateQueries("messagesCount")
                }
            })
        }
        n(45981);
        let U = t=>{
            let e = (0,
            r.useMutation)(()=>a.WY.delete("/chats/".concat(t)), {
                onSettled: ()=>{
                    a.Eh.refetchQueries(["chats"])
                }
            });
            return e
        }
        ;
        var V = U;
        let X = ()=>{
            let t = (0,
            r.useMutation)(t=>a.WY.post("/chats", t), {
                onSettled: ()=>{
                    a.Eh.refetchQueries("chats"),
                    a.Eh.invalidateQueries("chat")
                }
            });
            return t
        }
        ;
        var H = X;
        let K = ()=>{
            let t = (0,
            r.useMutation)(t=>a.WY.post("/chats/check", t));
            return t
        }
        ;
        var tt = K;
        let te = ()=>(0,
        r.useMutation)(()=>a.WY.delete("/organizations/leave"));
        var tn = te;
        function ti() {
            return (0,
            r.useMutation)(t=>a.WY.delete("profile/notifications/jobAlert"), {
                onSettled: ()=>{
                    a.Eh.refetchQueries("notificationsAlert")
                }
            })
        }
        function tu() {
            return (0,
            r.useMutation)(()=>a.WY.put("/notifications/seen/jobAlert"))
        }
        n(79127)
    },
    79127: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return r
            }
        });
        var i = n(88767)
          , u = n(33542);
        function r() {
            let t = (0,
            i.useQueryClient)()
              , e = (0,
            i.useMutation)(e=>{
                var n;
                let i = t.getQueryData("profile");
                return (null == i ? void 0 : null === (n = i.fcmDeviceTokens) || void 0 === n ? void 0 : n.includes(e)) ? null : u.WY.put("/profile/fcm-tokens", {
                    fcmToken: e
                })
            }
            );
            return e
        }
    },
    58305: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return r
            }
        });
        var i = n(88767)
          , u = n(33542);
        function r() {
            let t = (0,
            i.useQueryClient)()
              , e = (0,
            i.useMutation)(t=>u.WY.put("/profile/applicant", t), {
                onMutate: async e=>{
                    await t.cancelQueries("profile");
                    let n = t.getQueryData("profile");
                    return t.setQueryData("profile", t=>({
                        ...t,
                        newProfileData: e
                    })),
                    {
                        oldData: n
                    }
                }
                ,
                onError: (e,n,i)=>{
                    let {oldData: u} = i;
                    t.setQueryData("profile", u)
                }
                ,
                onSettled: ()=>{
                    t.invalidateQueries(["profile"]),
                    t.invalidateQueries(["myApplication"])
                }
            });
            return e
        }
    },
    20154: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return r
            }
        });
        var i = n(88767)
          , u = n(33542);
        function r(t, e) {
            let n = (0,
            i.useQueryClient)()
              , r = (0,
            i.useMutation)(n=>u.WY.request({
                url: t,
                method: e,
                data: n
            }), {
                onSettled: ()=>{
                    n.invalidateQueries("myApplication")
                }
            });
            return r
        }
    },
    52215: function(t, e, n) {
        var i = n(88767)
          , u = n(33542);
        let r = t=>{
            let e = (0,
            i.useMutation)(e=>u.WY.post("/apply/".concat(t), e), {
                onSettled: ()=>{
                    u.Eh.invalidateQueries("applying")
                }
            });
            return e
        }
        ;
        e.Z = r
    },
    89709: function(t, e, n) {
        var i = n(88767)
          , u = n(33542);
        let r = ()=>{
            let t = (0,
            i.useMutation)(t=>u.WY.post("/jobs", t).then(t=>{
                var e, n;
                return null == t ? void 0 : null === (e = t.data) || void 0 === e ? void 0 : null === (n = e.data) || void 0 === n ? void 0 : n.job
            }
            ), {
                onSettled: ()=>{
                    u.Eh.refetchQueries("jobs"),
                    u.Eh.refetchQueries("job-by-slug")
                }
            });
            return t
        }
        ;
        e.Z = r
    },
    45981: function(t, e, n) {
        var i = n(88767)
          , u = n(33542);
        let r = t=>{
            let e = (0,
            i.useMutation)(async()=>{
                try {
                    let e = await u.WY.post("/jobs/".concat(t, "/view"));
                    return e
                } catch (t) {}
            }
            );
            return e
        }
        ;
        e.Z = r
    },
    13535: function(t, e, n) {
        var i = n(88767)
          , u = n(6154);
        let r = ()=>{
            let t = (0,
            i.useMutation)(t=>u.Z.post("".concat("https://api.oneapp.ly", "/auth/login"), t));
            return t
        }
        ;
        e.Z = r
    },
    30299: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return o
            }
        });
        var i = n(25030)
          , u = n.n(i)
          , r = n(88767)
          , a = n(33542);
        function o(t, e) {
            let n = (0,
            r.useMutation)(e=>{
                let n = u()(e, ["name", "email", "image", "backgroundImage", "description", "locationCountry", "locationCity", "locationState", "website", "phoneNumber", "industry", "size", "shortName", "linkedIn", "facebook", "github", "instagram", "telegram", "youtube", "foundedAt", "programs", "facultyMembers", "students", "about", "scholarships", "admission", "studentLife", "facilities", "campus", "intro", "passingScore"]);
                return a.WY.put("/organizations/".concat(t), n)
            }
            , {
                onSettled: ()=>{
                    a.Eh.invalidateQueries(["my-organization"]),
                    a.Eh.invalidateQueries(["organizations", e])
                }
            });
            return n
        }
    },
    26593: function(t, e, n) {
        var i = n(88767)
          , u = n(6154);
        let r = ()=>{
            let t = (0,
            i.useMutation)(t=>u.Z.post("".concat("https://api.oneapp.ly", "/auth/email/sendVerificationCode"), t), {
                retry: !1
            });
            return t
        }
        ;
        e.Z = r
    },
    82424: function(t, e, n) {
        var i = n(88767)
          , u = n(6154);
        let r = t=>(0,
        i.useMutation)(e=>u.Z.post("".concat("https://api.oneapp.ly", "/auth/signup/").concat(t), e));
        e.Z = r
    },
    39706: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return r
            }
        });
        var i = n(88767)
          , u = n(33542);
        function r() {
            let t = (0,
            i.useMutation)(t=>{
                if (null == t ? void 0 : t.jobId)
                    return u.WY.delete("/profile/unsavejob/".concat(t.jobId))
            }
            , {
                onMutate: async t=>{
                    await u.Eh.cancelQueries("saveds");
                    let e = u.Eh.getQueryData("saveds");
                    return u.Eh.setQueryData("saveds", e=>{
                        if (null == t ? void 0 : t.jobId) {
                            var n;
                            let i = null == e ? void 0 : null === (n = e.savedJobs) || void 0 === n ? void 0 : n.filter(e=>(null == e ? void 0 : e._id) !== (null == t ? void 0 : t.jobId));
                            return {
                                savedJobs: i,
                                _id: null == e ? void 0 : e._id
                            }
                        }
                    }
                    ),
                    {
                        previousData: e
                    }
                }
                ,
                onError: (t,e,n)=>{
                    u.Eh.setQueryData("saveds", null == n ? void 0 : n.previousData)
                }
                ,
                onSettled: ()=>{
                    u.Eh.invalidateQueries("saveds")
                }
            });
            return t
        }
    },
    53943: function(t, e, n) {
        var i = n(88767)
          , u = n(33542);
        let r = t=>{
            let e = (0,
            i.useMutation)(async t=>{
                let e = new FormData
                  , {file: n} = t;
                e.append("file", n);
                let i = await u.WY.post("/media/upload", e, t.axiosConfig);
                return i
            }
            , {
                ...t
            });
            return e
        }
        ;
        e.Z = r
    }
}]);
