/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

let e, t, r, i, s, o, a, n, l, c, d, p, h, g, u = () => e || "undefined" != typeof window && (e = window.gsap) && e.registerPlugin && e,
    f = 1,
    m = [],
    v = [],
    y = [],
    x = Date.now,
    b = (e, t) => t,
    w = (e, t) => ~y.indexOf(e) && y[y.indexOf(e) + 1][t],
    _ = e => !!~d.indexOf(e),
    T = (e, t, r, i, s) => e.addEventListener(t, r, {
        passive: !1 !== i,
        capture: !!s
    }),
    k = (e, t, r, i) => e.removeEventListener(t, r, !!i),
    S = () => p && p.isPressed || v.cache++,
    C = (e, t) => {
        let r = s => {
            if (s || 0 === s) {
                f && (i.history.scrollRestoration = "manual");
                let t = p && p.isPressed;
                s = r.v = Math.round(s) || (p && p.iOS ? 1 : 0), e(s), r.cacheID = v.cache, t && b("ss", s)
            } else(t || v.cache !== r.cacheID || b("ref")) && (r.cacheID = v.cache, r.v = e());
            return r.v + r.offset
        };
        return r.offset = 0, e && r
    },
    E = {
        s: "scrollLeft",
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: C((function(e) {
            return arguments.length ? i.scrollTo(e, P.sc()) : i.pageXOffset || s.scrollLeft || o.scrollLeft || a.scrollLeft || 0
        }))
    },
    P = {
        s: "scrollTop",
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: E,
        sc: C((function(e) {
            return arguments.length ? i.scrollTo(E.sc(), e) : i.pageYOffset || s.scrollTop || o.scrollTop || a.scrollTop || 0
        }))
    },
    M = (t, r) => (r && r._ctx && r._ctx.selector || e.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== e.config().nullTargetWarn ? console.warn("Element not found:", t) : null),
    O = (t, {
        s: r,
        sc: i
    }) => {
        _(t) && (t = s.scrollingElement || o);
        let a = v.indexOf(t),
            n = i === P.sc ? 1 : 2;
        !~a && (a = v.push(t) - 1), v[a + n] || T(t, "scroll", S);
        let l = v[a + n],
            c = l || (v[a + n] = C(w(t, r), !0) || (_(t) ? i : C((function(e) {
                return arguments.length ? t[r] = e : t[r]
            }))));
        return c.target = t, l || (c.smooth = "smooth" === e.getProperty(t, "scrollBehavior")), c
    },
    A = (e, t, r) => {
        let i = e,
            s = e,
            o = x(),
            a = o,
            n = t || 50,
            l = Math.max(500, 3 * n),
            c = (e, t) => {
                let l = x();
                t || l - o > n ? (s = i, i = e, a = o, o = l) : r ? i += e : i = s + (e - s) / (l - a) * (o - a)
            };
        return {
            update: c,
            reset: () => {
                s = i = r ? 0 : i, a = o = 0
            },
            getVelocity: e => {
                let t = a,
                    n = s,
                    d = x();
                return (e || 0 === e) && e !== i && c(e), o === a || d - a > l ? 0 : (i + (r ? n : -n)) / ((r ? d : o) - t) * 1e3
            }
        }
    },
    R = (e, t) => (t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
    D = e => {
        let t = Math.max(...e),
            r = Math.min(...e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    },
    Y = () => {
        c = e.core.globals().ScrollTrigger, c && c.core && (() => {
            let e = c.core,
                t = e.bridge || {},
                r = e._scrollers,
                i = e._proxies;
            r.push(...v), i.push(...y), v = r, y = i, b = (e, r) => t[e](r)
        })()
    },
    B = c => (e = c || u(), !t && e && "undefined" != typeof document && document.body && (i = window, s = document, o = s.documentElement, a = s.body, d = [i, s, o, a], r = e.utils.clamp, g = e.core.context || function() {}, l = "onpointerenter" in a ? "pointer" : "mouse", n = I.isTouch = i.matchMedia && i.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in i || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, h = I.eventTypes = ("ontouchstart" in o ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in o ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(() => f = 0, 500), Y(), t = 1), t);
E.op = P, v.cache = 0;
class I {
    constructor(e) {
        this.init(e)
    }
    init(r) {
        t || B(e) || console.warn("Please gsap.registerPlugin(Observer)"), c || Y();
        let {
            tolerance: d,
            dragMinimum: u,
            type: f,
            target: v,
            lineHeight: y,
            debounce: b,
            preventDefault: w,
            onStop: C,
            onStopDelay: I,
            ignore: X,
            wheelSpeed: z,
            event: L,
            onDragStart: N,
            onDragEnd: F,
            onDrag: W,
            onPress: H,
            onRelease: q,
            onRight: U,
            onLeft: V,
            onUp: G,
            onDown: j,
            onChangeX: K,
            onChangeY: Z,
            onChange: $,
            onToggleX: J,
            onToggleY: Q,
            onHover: ee,
            onHoverEnd: te,
            onMove: re,
            ignoreCheck: ie,
            isNormalizer: se,
            onGestureStart: oe,
            onGestureEnd: ae,
            onWheel: ne,
            onEnable: le,
            onDisable: ce,
            onClick: de,
            scrollSpeed: pe,
            capture: he,
            allowClicks: ge,
            lockAxis: ue,
            onLockAxis: fe
        } = r;
        this.target = v = M(v) || o, this.vars = r, X && (X = e.utils.toArray(X)), d = d || 1e-9, u = u || 0, z = z || 1, pe = pe || 1, f = f || "wheel,touch,pointer", b = !1 !== b, y || (y = parseFloat(i.getComputedStyle(a).lineHeight) || 22);
        let me, ve, ye, xe, be, we, _e, Te = this,
            ke = 0,
            Se = 0,
            Ce = r.passive || !w,
            Ee = O(v, E),
            Pe = O(v, P),
            Me = Ee(),
            Oe = Pe(),
            Ae = ~f.indexOf("touch") && !~f.indexOf("pointer") && "pointerdown" === h[0],
            Re = _(v),
            De = v.ownerDocument || s,
            Ye = [0, 0, 0],
            Be = [0, 0, 0],
            Ie = 0,
            Xe = () => Ie = x(),
            ze = (e, t) => (Te.event = e) && X && ~X.indexOf(e.target) || t && Ae && "touch" !== e.pointerType || ie && ie(e, t),
            Le = () => {
                let e = Te.deltaX = D(Ye),
                    t = Te.deltaY = D(Be),
                    r = Math.abs(e) >= d,
                    i = Math.abs(t) >= d;
                $ && (r || i) && $(Te, e, t, Ye, Be), r && (U && Te.deltaX > 0 && U(Te), V && Te.deltaX < 0 && V(Te), K && K(Te), J && Te.deltaX < 0 != ke < 0 && J(Te), ke = Te.deltaX, Ye[0] = Ye[1] = Ye[2] = 0), i && (j && Te.deltaY > 0 && j(Te), G && Te.deltaY < 0 && G(Te), Z && Z(Te), Q && Te.deltaY < 0 != Se < 0 && Q(Te), Se = Te.deltaY, Be[0] = Be[1] = Be[2] = 0), (xe || ye) && (re && re(Te), ye && (W(Te), ye = !1), xe = !1), we && !(we = !1) && fe && fe(Te), be && (ne(Te), be = !1), me = 0
            },
            Ne = (e, t, r) => {
                Ye[r] += e, Be[r] += t, Te._vx.update(e), Te._vy.update(t), b ? me || (me = requestAnimationFrame(Le)) : Le()
            },
            Fe = (e, t) => {
                ue && !_e && (Te.axis = _e = Math.abs(e) > Math.abs(t) ? "x" : "y", we = !0), "y" !== _e && (Ye[2] += e, Te._vx.update(e, !0)), "x" !== _e && (Be[2] += t, Te._vy.update(t, !0)), b ? me || (me = requestAnimationFrame(Le)) : Le()
            },
            We = e => {
                if (ze(e, 1)) return;
                let t = (e = R(e, w)).clientX,
                    r = e.clientY,
                    i = t - Te.x,
                    s = r - Te.y,
                    o = Te.isDragging;
                Te.x = t, Te.y = r, (o || Math.abs(Te.startX - t) >= u || Math.abs(Te.startY - r) >= u) && (W && (ye = !0), o || (Te.isDragging = !0), Fe(i, s), o || N && N(Te))
            },
            He = Te.onPress = e => {
                ze(e, 1) || e && e.button || (Te.axis = _e = null, ve.pause(), Te.isPressed = !0, e = R(e), ke = Se = 0, Te.startX = Te.x = e.clientX, Te.startY = Te.y = e.clientY, Te._vx.reset(), Te._vy.reset(), T(se ? v : De, h[1], We, Ce, !0), Te.deltaX = Te.deltaY = 0, H && H(Te))
            },
            qe = Te.onRelease = t => {
                if (ze(t, 1)) return;
                k(se ? v : De, h[1], We, !0);
                let r = !isNaN(Te.y - Te.startY),
                    s = Te.isDragging,
                    o = s && (Math.abs(Te.x - Te.startX) > 3 || Math.abs(Te.y - Te.startY) > 3),
                    a = R(t);
                !o && r && (Te._vx.reset(), Te._vy.reset(), w && ge && e.delayedCall(.08, () => {
                    if (x() - Ie > 300 && !t.defaultPrevented)
                        if (t.target.click) t.target.click();
                        else if (De.createEvent) {
                        let e = De.createEvent("MouseEvents");
                        e.initMouseEvent("click", !0, !0, i, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                    }
                })), Te.isDragging = Te.isGesturing = Te.isPressed = !1, C && s && !se && ve.restart(!0), F && s && F(Te), q && q(Te, o)
            },
            Ue = e => e.touches && e.touches.length > 1 && (Te.isGesturing = !0) && oe(e, Te.isDragging),
            Ve = () => (Te.isGesturing = !1) || ae(Te),
            Ge = e => {
                if (ze(e)) return;
                let t = Ee(),
                    r = Pe();
                Ne((t - Me) * pe, (r - Oe) * pe, 1), Me = t, Oe = r, C && ve.restart(!0)
            },
            je = e => {
                if (ze(e)) return;
                e = R(e, w), ne && (be = !0);
                let t = (1 === e.deltaMode ? y : 2 === e.deltaMode ? i.innerHeight : 1) * z;
                Ne(e.deltaX * t, e.deltaY * t, 0), C && !se && ve.restart(!0)
            },
            Ke = e => {
                if (ze(e)) return;
                let t = e.clientX,
                    r = e.clientY,
                    i = t - Te.x,
                    s = r - Te.y;
                Te.x = t, Te.y = r, xe = !0, C && ve.restart(!0), (i || s) && Fe(i, s)
            },
            Ze = e => {
                Te.event = e, ee(Te)
            },
            $e = e => {
                Te.event = e, te(Te)
            },
            Je = e => ze(e) || R(e, w) && de(Te);
        ve = Te._dc = e.delayedCall(I || .25, () => {
            Te._vx.reset(), Te._vy.reset(), ve.pause(), C && C(Te)
        }).pause(), Te.deltaX = Te.deltaY = 0, Te._vx = A(0, 50, !0), Te._vy = A(0, 50, !0), Te.scrollX = Ee, Te.scrollY = Pe, Te.isDragging = Te.isGesturing = Te.isPressed = !1, g(this), Te.enable = e => (Te.isEnabled || (T(Re ? De : v, "scroll", S), f.indexOf("scroll") >= 0 && T(Re ? De : v, "scroll", Ge, Ce, he), f.indexOf("wheel") >= 0 && T(v, "wheel", je, Ce, he), (f.indexOf("touch") >= 0 && n || f.indexOf("pointer") >= 0) && (T(v, h[0], He, Ce, he), T(De, h[2], qe), T(De, h[3], qe), ge && T(v, "click", Xe, !0, !0), de && T(v, "click", Je), oe && T(De, "gesturestart", Ue), ae && T(De, "gestureend", Ve), ee && T(v, l + "enter", Ze), te && T(v, l + "leave", $e), re && T(v, l + "move", Ke)), Te.isEnabled = !0, e && e.type && He(e), le && le(Te)), Te), Te.disable = () => {
            Te.isEnabled && (m.filter(e => e !== Te && _(e.target)).length || k(Re ? De : v, "scroll", S), Te.isPressed && (Te._vx.reset(), Te._vy.reset(), k(se ? v : De, h[1], We, !0)), k(Re ? De : v, "scroll", Ge, he), k(v, "wheel", je, he), k(v, h[0], He, he), k(De, h[2], qe), k(De, h[3], qe), k(v, "click", Xe, !0), k(v, "click", Je), k(De, "gesturestart", Ue), k(De, "gestureend", Ve), k(v, l + "enter", Ze), k(v, l + "leave", $e), k(v, l + "move", Ke), Te.isEnabled = Te.isPressed = Te.isDragging = !1, ce && ce(Te))
        }, Te.kill = Te.revert = () => {
            Te.disable();
            let e = m.indexOf(Te);
            e >= 0 && m.splice(e, 1), p === Te && (p = 0)
        }, m.push(Te), se && _(v) && (p = Te), Te.enable(L)
    }
    get velocityX() {
        return this._vx.getVelocity()
    }
    get velocityY() {
        return this._vy.getVelocity()
    }
}
I.version = "3.12.5", I.create = e => new I(e), I.register = B, I.getAll = () => m.slice(), I.getById = e => m.filter(t => t.vars.id === e)[0], u() && e.registerPlugin(I);
let X, z, L, N, F, W, H, q, U, V, G, j, K, Z, $, J, Q, ee, te, re, ie, se, oe, ae, ne, le, ce, de, pe, he, ge, ue, fe, me, ve, ye, xe, be, we = 1,
    _e = Date.now,
    Te = _e(),
    ke = 0,
    Se = 0,
    Ce = (e, t, r) => {
        let i = Ne(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
        return r["_" + t + "Clamp"] = i, i ? e.substr(6, e.length - 7) : e
    },
    Ee = (e, t) => !t || Ne(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
    Pe = () => Se && requestAnimationFrame(Pe),
    Me = () => Z = 1,
    Oe = () => Z = 0,
    Ae = e => e,
    Re = e => Math.round(1e5 * e) / 1e5 || 0,
    De = () => "undefined" != typeof window,
    Ye = () => X || De() && (X = window.gsap) && X.registerPlugin && X,
    Be = e => !!~H.indexOf(e),
    Ie = e => ("Height" === e ? ge : L["inner" + e]) || F["client" + e] || W["client" + e],
    Xe = e => w(e, "getBoundingClientRect") || (Be(e) ? () => (zt.width = L.innerWidth, zt.height = ge, zt) : () => $e(e)),
    ze = (e, {
        s: t,
        d2: r,
        d: i,
        a: s
    }) => Math.max(0, (t = "scroll" + r) && (s = w(e, t)) ? s() - Xe(e)()[i] : Be(e) ? (F[t] || W[t]) - Ie(r) : e[t] - e["offset" + r]),
    Le = (e, t) => {
        for (let r = 0; r < te.length; r += 3)(!t || ~t.indexOf(te[r + 1])) && e(te[r], te[r + 1], te[r + 2])
    },
    Ne = e => "string" == typeof e,
    Fe = e => "function" == typeof e,
    We = e => "number" == typeof e,
    He = e => "object" == typeof e,
    qe = (e, t, r) => e && e.progress(t ? 0 : 1) && r && e.pause(),
    Ue = (e, t) => {
        if (e.enabled) {
            let r = e._ctx ? e._ctx.add(() => t(e)) : t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    },
    Ve = Math.abs,
    Ge = "padding",
    je = "px",
    Ke = e => L.getComputedStyle(e),
    Ze = (e, t) => {
        for (let r in t) r in e || (e[r] = t[r]);
        return e
    },
    $e = (e, t) => {
        let r = t && "matrix(1, 0, 0, 1, 0, 0)" !== Ke(e)[$] && X.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1),
            i = e.getBoundingClientRect();
        return r && r.progress(0).kill(), i
    },
    Je = (e, {
        d2: t
    }) => e["offset" + t] || e["client" + t] || 0,
    Qe = e => {
        let t, r = [],
            i = e.labels,
            s = e.duration();
        for (t in i) r.push(i[t] / s);
        return r
    },
    et = e => {
        let t = X.utils.snap(e),
            r = Array.isArray(e) && e.slice(0).sort((e, t) => e - t);
        return r ? (e, i, s = .001) => {
            let o;
            if (!i) return t(e);
            if (i > 0) {
                for (e -= s, o = 0; o < r.length; o++)
                    if (r[o] >= e) return r[o];
                return r[o - 1]
            }
            for (o = r.length, e += s; o--;)
                if (r[o] <= e) return r[o];
            return r[0]
        } : (r, i, s = .001) => {
            let o = t(r);
            return !i || Math.abs(o - r) < s || o - r < 0 == i < 0 ? o : t(i < 0 ? r - e : r + e)
        }
    },
    tt = (e, t, r, i) => r.split(",").forEach(r => e(t, r, i)),
    rt = (e, t, r, i, s) => e.addEventListener(t, r, {
        passive: !i,
        capture: !!s
    }),
    it = (e, t, r, i) => e.removeEventListener(t, r, !!i),
    st = (e, t, r) => {
        (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
    },
    ot = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    at = {
        toggleActions: "play",
        anticipatePin: 0
    },
    nt = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    lt = (e, t) => {
        if (Ne(e)) {
            let r = e.indexOf("="),
                i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (i *= t / 100), e = e.substr(0, r - 1)), e = i + (e in nt ? nt[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    },
    ct = (e, t, r, i, {
        startColor: s,
        endColor: o,
        fontSize: a,
        indent: n,
        fontWeight: l
    }, c, d, p) => {
        let h = N.createElement("div"),
            g = Be(r) || "fixed" === w(r, "pinType"),
            u = -1 !== e.indexOf("scroller"),
            f = g ? W : r,
            m = -1 !== e.indexOf("start"),
            v = m ? s : o,
            y = "border-color:" + v + ";font-size:" + a + ";color:" + v + ";font-weight:" + l + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + ((u || p) && g ? "fixed;" : "absolute;"), (u || p || !g) && (y += (i === P ? "right" : "bottom") + ":" + (c + parseFloat(n)) + "px;"), d && (y += "box-sizing:border-box;text-align:left;width:" + d.offsetWidth + "px;"), h._isStart = m, h.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), h.style.cssText = y, h.innerText = t || 0 === t ? e + "-" + t : e, f.children[0] ? f.insertBefore(h, f.children[0]) : f.appendChild(h), h._offset = h["offset" + i.op.d2], dt(h, 0, i, m), h
    },
    dt = (e, t, r, i) => {
        let s = {
                display: "block"
            },
            o = r[i ? "os2" : "p2"],
            a = r[i ? "p2" : "os2"];
        e._isFlipped = i, s[r.a + "Percent"] = i ? -100 : 0, s[r.a] = i ? "1px" : 0, s["border" + o + "Width"] = 1, s["border" + a + "Width"] = 0, s[r.p] = t + "px", X.set(e, s)
    },
    pt = [],
    ht = {},
    gt = () => _e() - ke > 34 && (ve || (ve = requestAnimationFrame(At))),
    ut = () => {
        (!oe || !oe.isPressed || oe.startX > W.clientWidth) && (v.cache++, oe ? ve || (ve = requestAnimationFrame(At)) : At(), ke || bt("scrollStart"), ke = _e())
    },
    ft = () => {
        le = L.innerWidth, ne = L.innerHeight
    },
    mt = () => {
        v.cache++, !K && !se && !N.fullscreenElement && !N.webkitFullscreenElement && (!ae || le !== L.innerWidth || Math.abs(L.innerHeight - ne) > .25 * L.innerHeight) && q.restart(!0)
    },
    vt = {},
    yt = [],
    xt = () => it(Ut, "scrollEnd", xt) || Pt(!0),
    bt = e => vt[e] && vt[e].map(e => e()) || yt,
    wt = [],
    _t = e => {
        for (let t = 0; t < wt.length; t += 5)(!e || wt[t + 4] && wt[t + 4].query === e) && (wt[t].style.cssText = wt[t + 1], wt[t].getBBox && wt[t].setAttribute("transform", wt[t + 2] || ""), wt[t + 3].uncache = 1)
    },
    Tt = (e, t) => {
        let r;
        for (J = 0; J < pt.length; J++) r = pt[J], !r || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
        ue = !0, t && _t(t), t || bt("revert")
    },
    kt = (e, t) => {
        v.cache++, (t || !ye) && v.forEach(e => Fe(e) && e.cacheID++ && (e.rec = 0)), Ne(e) && (L.history.scrollRestoration = pe = e)
    },
    St = 0,
    Ct = () => {
        W.appendChild(he), ge = !oe && he.offsetHeight || L.innerHeight, W.removeChild(he)
    },
    Et = e => U(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(t => t.style.display = e ? "none" : "block"),
    Pt = (e, t) => {
        if (ke && !e && !ue) return void rt(Ut, "scrollEnd", xt);
        Ct(), ye = Ut.isRefreshing = !0, v.forEach(e => Fe(e) && ++e.cacheID && (e.rec = e()));
        let r = bt("refreshInit");
        re && Ut.sort(), t || Tt(), v.forEach(e => {
            Fe(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
        }), pt.slice(0).forEach(e => e.refresh()), ue = !1, pt.forEach(e => {
            if (e._subPinOffset && e.pin) {
                let t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    r = e.pin[t];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh()
            }
        }), fe = 1, Et(!0), pt.forEach(e => {
            let t = ze(e.scroller, e._dir),
                r = "max" === e.vars.end || e._endClamp && e.end > t,
                i = e._startClamp && e.start >= t;
            (r || i) && e.setPositions(i ? t - 1 : e.start, r ? Math.max(i ? t : e.start + 1, t) : e.end, !0)
        }), Et(!1), fe = 0, r.forEach(e => e && e.render && e.render(-1)), v.forEach(e => {
            Fe(e) && (e.smooth && requestAnimationFrame(() => e.target.style.scrollBehavior = "smooth"), e.rec && e(e.rec))
        }), kt(pe, 1), q.pause(), St++, ye = 2, At(2), pt.forEach(e => Fe(e.vars.onRefresh) && e.vars.onRefresh(e)), ye = Ut.isRefreshing = !1, bt("refresh")
    },
    Mt = 0,
    Ot = 1,
    At = e => {
        if (2 === e || !ye && !ue) {
            Ut.isUpdating = !0, be && be.update(0);
            let e = pt.length,
                t = _e(),
                r = t - Te >= 50,
                i = e && pt[0].scroll();
            if (Ot = Mt > i ? -1 : 1, ye || (Mt = i), r && (ke && !Z && t - ke > 200 && (ke = 0, bt("scrollEnd")), G = Te, Te = t), Ot < 0) {
                for (J = e; J-- > 0;) pt[J] && pt[J].update(0, r);
                Ot = 1
            } else
                for (J = 0; J < e; J++) pt[J] && pt[J].update(0, r);
            Ut.isUpdating = !1
        }
        ve = 0
    },
    Rt = ["left", "top", "bottom", "right", "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    Dt = Rt.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", Ge, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]),
    Yt = (e, t, r, i) => {
        if (!e._gsap.swappedIn) {
            let s, o = Rt.length,
                a = t.style,
                n = e.style;
            for (; o--;) s = Rt[o], a[s] = r[s];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), n.bottom = n.right = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a.width = Je(e, E) + je, a.height = Je(e, P) + je, a.padding = n.margin = n.top = n.left = "0", It(i), n.width = n.maxWidth = r.width, n.height = n.maxHeight = r.height, n.padding = r.padding, e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
        }
    },
    Bt = /([A-Z])/g,
    It = e => {
        if (e) {
            let t, r, i = e.t.style,
                s = e.length,
                o = 0;
            for ((e.t._gsap || X.core.getCache(e.t)).uncache = 1; o < s; o += 2) r = e[o + 1], t = e[o], r ? i[t] = r : i[t] && i.removeProperty(t.replace(Bt, "-$1").toLowerCase())
        }
    },
    Xt = e => {
        let t = Dt.length,
            r = e.style,
            i = [],
            s = 0;
        for (; s < t; s++) i.push(Dt[s], r[Dt[s]]);
        return i.t = e, i
    },
    zt = {
        left: 0,
        top: 0
    },
    Lt = (e, t, r, i, s, o, a, n, l, c, d, p, h, g) => {
        Fe(e) && (e = e(n)), Ne(e) && "max" === e.substr(0, 3) && (e = p + ("=" === e.charAt(4) ? lt("0" + e.substr(3), r) : 0));
        let u, f, m, v = h ? h.time() : 0;
        if (h && h.seek(0), isNaN(e) || (e = +e), We(e)) h && (e = X.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, p, e)), a && dt(a, r, i, !0);
        else {
            Fe(t) && (t = t(n));
            let o, d, p, h, g = (e || "0").split(" ");
            m = M(t, n) || W, o = $e(m) || {}, o && (o.left || o.top) || "none" !== Ke(m).display || (h = m.style.display, m.style.display = "block", o = $e(m), h ? m.style.display = h : m.style.removeProperty("display")), d = lt(g[0], o[i.d]), p = lt(g[1] || "0", r), e = o[i.p] - l[i.p] - c + d + s - p, a && dt(a, p, i, r - p < 20 || a._isStart && p > 20), r -= r - p
        }
        if (g && (n[g] = e || -.001, e < 0 && (e = 0)), o) {
            let t = e + r,
                s = o._isStart;
            u = "scroll" + i.d2, dt(o, t, i, s && t > 20 || !s && (d ? Math.max(W[u], F[u]) : o.parentNode[u]) <= t + 1), d && (l = $e(a), d && (o.style[i.op.p] = l[i.op.p] - i.op.m - o._offset + je))
        }
        return h && m && (u = $e(m), h.seek(p), f = $e(m), h._caScrollDist = u[i.p] - f[i.p], e = e / h._caScrollDist * p), h && h.seek(v), h ? e : Math.round(e)
    },
    Nt = /(webkit|moz|length|cssText|inset)/i,
    Ft = (e, t, r, i) => {
        if (e.parentNode !== t) {
            let s, o, a = e.style;
            if (t === W) {
                for (s in e._stOrig = a.cssText, o = Ke(e), o) + s || Nt.test(s) || !o[s] || "string" != typeof a[s] || "0" === s || (a[s] = o[s]);
                a.top = r, a.left = i
            } else a.cssText = e._stOrig;
            X.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    },
    Wt = (e, t, r) => {
        let i = t,
            s = i;
        return t => {
            let o = Math.round(e());
            return o !== i && o !== s && Math.abs(o - i) > 3 && Math.abs(o - s) > 3 && (t = o, r && r()), s = i, i = t, t
        }
    },
    Ht = (e, t, r) => {
        let i = {};
        i[t.p] = "+=" + r, X.set(e, i)
    },
    qt = (e, t) => {
        let r = O(e, t),
            i = "_scroll" + t.p2,
            s = (t, o, a, n, l) => {
                let c = s.tween,
                    d = o.onComplete,
                    p = {};
                a = a || r();
                let h = Wt(r, a, () => {
                    c.kill(), s.tween = 0
                });
                return l = n && l || 0, n = n || t - a, c && c.kill(), o[i] = t, o.inherit = !1, o.modifiers = p, p[i] = () => h(a + n * c.ratio + l * c.ratio * c.ratio), o.onUpdate = () => {
                    v.cache++, s.tween && At()
                }, o.onComplete = () => {
                    s.tween = 0, d && d.call(c)
                }, c = s.tween = X.to(e, o), c
            };
        return e[i] = r, r.wheelHandler = () => s.tween && s.tween.kill() && (s.tween = 0), rt(e, "wheel", r.wheelHandler), Ut.isTouch && rt(e, "touchmove", r.wheelHandler), s
    };
class Ut {
    constructor(e, t) {
        z || Ut.register(X) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), de(this), this.init(e, t)
    }
    init(e, t) {
        if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Se) return void(this.update = this.refresh = this.kill = Ae);
        e = Ze(Ne(e) || We(e) || e.nodeType ? {
            trigger: e
        } : e, at);
        let r, i, s, o, a, n, l, c, d, p, h, g, u, f, m, x, b, _, T, k, S, C, A, R, D, Y, B, I, z, H, q, j, $, Q, ee, te, se, oe, ae, {
                onUpdate: ne,
                toggleClass: le,
                id: ce,
                onToggle: de,
                onRefresh: pe,
                scrub: he,
                trigger: ge,
                pin: ue,
                pinSpacing: ve,
                invalidateOnRefresh: Te,
                anticipatePin: Pe,
                onScrubComplete: Me,
                onSnapComplete: Oe,
                once: De,
                snap: Ye,
                pinReparent: Le,
                pinSpacer: tt,
                containerAnimation: st,
                fastScrollEnd: nt,
                preventOverlaps: dt
            } = e,
            gt = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? E : P,
            ft = !he && 0 !== he,
            vt = M(e.scroller || L),
            yt = X.core.getCache(vt),
            bt = Be(vt),
            wt = "fixed" === ("pinType" in e ? e.pinType : w(vt, "pinType") || bt && "fixed"),
            _t = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            Tt = ft && e.toggleActions.split(" "),
            kt = "markers" in e ? e.markers : at.markers,
            Ct = bt ? 0 : parseFloat(Ke(vt)["border" + gt.p2 + "Width"]) || 0,
            Et = this,
            Mt = e.onRefreshInit && (() => e.onRefreshInit(Et)),
            At = ((e, t, {
                d: r,
                d2: i,
                a: s
            }) => (s = w(e, "getBoundingClientRect")) ? () => s()[r] : () => (t ? Ie(i) : e["client" + i]) || 0)(vt, bt, gt),
            Rt = ((e, t) => !t || ~y.indexOf(e) ? Xe(e) : () => zt)(vt, bt),
            Dt = 0,
            Bt = 0,
            Nt = 0,
            Wt = O(vt, gt);
        var Vt;
        if (Et._startClamp = Et._endClamp = !1, Et._dir = gt, Pe *= 45, Et.scroller = vt, Et.scroll = st ? st.time.bind(st) : Wt, o = Wt(), Et.vars = e, t = t || e.animation, "refreshPriority" in e && (re = 1, -9999 === e.refreshPriority && (be = Et)), yt.tweenScroll = yt.tweenScroll || {
                top: qt(vt, P),
                left: qt(vt, E)
            }, Et.tweenTo = r = yt.tweenScroll[gt.p], Et.scrubDuration = e => {
                $ = We(e) && e, $ ? j ? j.duration(e) : j = X.to(t, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: !1,
                    duration: $,
                    paused: !0,
                    onComplete: () => Me && Me(Et)
                }) : (j && j.progress(1).kill(), j = 0)
            }, t && (t.vars.lazy = !1, t._initted && !Et.isReverted || !1 !== t.vars.immediateRender && !1 !== e.immediateRender && t.duration() && t.render(0, !0, !0), Et.animation = t.pause(), t.scrollTrigger = Et, Et.scrubDuration(he), H = 0, ce || (ce = t.vars.id)), Ye && (He(Ye) && !Ye.push || (Ye = {
                snapTo: Ye
            }), "scrollBehavior" in W.style && X.set(bt ? [W, F] : vt, {
                scrollBehavior: "auto"
            }), v.forEach(e => Fe(e) && e.target === (bt ? N.scrollingElement || F : vt) && (e.smooth = !1)), s = Fe(Ye.snapTo) ? Ye.snapTo : "labels" === Ye.snapTo ? (e => t => X.utils.snap(Qe(e), t))(t) : "labelsDirectional" === Ye.snapTo ? (Vt = t, (e, t) => et(Qe(Vt))(e, t.direction)) : !1 !== Ye.directional ? (e, t) => et(Ye.snapTo)(e, _e() - Bt < 500 ? 0 : t.direction) : X.utils.snap(Ye.snapTo), Q = Ye.duration || {
                min: .1,
                max: 2
            }, Q = He(Q) ? V(Q.min, Q.max) : V(Q, Q), ee = X.delayedCall(Ye.delay || $ / 2 || .1, () => {
                let e = Wt(),
                    i = _e() - Bt < 500,
                    o = r.tween;
                if (!(i || Math.abs(Et.getVelocity()) < 10) || o || Z || Dt === e) Et.isActive && Dt !== e && ee.restart(!0);
                else {
                    let a, c, d = (e - n) / f,
                        p = t && !ft ? t.totalProgress() : d,
                        h = i ? 0 : (p - q) / (_e() - G) * 1e3 || 0,
                        g = X.utils.clamp(-d, 1 - d, Ve(h / 2) * h / .185),
                        u = d + (!1 === Ye.inertia ? 0 : g),
                        {
                            onStart: m,
                            onInterrupt: v,
                            onComplete: y
                        } = Ye;
                    if (a = s(u, Et), We(a) || (a = u), c = Math.round(n + a * f), e <= l && e >= n && c !== e) {
                        if (o && !o._initted && o.data <= Ve(c - e)) return;
                        !1 === Ye.inertia && (g = a - d), r(c, {
                            duration: Q(Ve(.185 * Math.max(Ve(u - p), Ve(a - p)) / h / .05 || 0)),
                            ease: Ye.ease || "power3",
                            data: Ve(c - e),
                            onInterrupt: () => ee.restart(!0) && v && v(Et),
                            onComplete() {
                                Et.update(), Dt = Wt(), t && (j ? j.resetTo("totalProgress", a, t._tTime / t._tDur) : t.progress(a)), H = q = t && !ft ? t.totalProgress() : Et.progress, Oe && Oe(Et), y && y(Et)
                            }
                        }, e, g * f, c - e - g * f), m && m(Et, r.tween)
                    }
                }
            }).pause()), ce && (ht[ce] = Et), ge = Et.trigger = M(ge || !0 !== ue && ue), ae = ge && ge._gsap && ge._gsap.stRevert, ae && (ae = ae(Et)), ue = !0 === ue ? ge : M(ue), Ne(le) && (le = {
                targets: ge,
                className: le
            }), ue && (!1 === ve || "margin" === ve || (ve = !(!ve && ue.parentNode && ue.parentNode.style && "flex" === Ke(ue.parentNode).display) && Ge), Et.pin = ue, i = X.core.getCache(ue), i.spacer ? m = i.pinState : (tt && (tt = M(tt), tt && !tt.nodeType && (tt = tt.current || tt.nativeElement), i.spacerIsNative = !!tt, tt && (i.spacerState = Xt(tt))), i.spacer = _ = tt || N.createElement("div"), _.classList.add("pin-spacer"), ce && _.classList.add("pin-spacer-" + ce), i.pinState = m = Xt(ue)), !1 !== e.force3D && X.set(ue, {
                force3D: !0
            }), Et.spacer = _ = i.spacer, z = Ke(ue), R = z[ve + gt.os2], k = X.getProperty(ue), S = X.quickSetter(ue, gt.a, je), Yt(ue, _, z), b = Xt(ue)), kt) {
            g = He(kt) ? Ze(kt, ot) : ot, p = ct("scroller-start", ce, vt, gt, g, 0), h = ct("scroller-end", ce, vt, gt, g, 0, p), T = p["offset" + gt.op.d2];
            let e = M(w(vt, "content") || vt);
            c = this.markerStart = ct("start", ce, e, gt, g, T, 0, st), d = this.markerEnd = ct("end", ce, e, gt, g, T, 0, st), st && (oe = X.quickSetter([c, d], gt.a, je)), wt || y.length && !0 === w(vt, "fixedMarkers") || ((e => {
                let t = Ke(e).position;
                e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
            })(bt ? W : vt), X.set([p, h], {
                force3D: !0
            }), Y = X.quickSetter(p, gt.a, je), I = X.quickSetter(h, gt.a, je))
        }
        if (st) {
            let e = st.vars.onUpdate,
                t = st.vars.onUpdateParams;
            st.eventCallback("onUpdate", () => {
                Et.update(0, 0, 1), e && e.apply(st, t || [])
            })
        }
        if (Et.previous = () => pt[pt.indexOf(Et) - 1], Et.next = () => pt[pt.indexOf(Et) + 1], Et.revert = (e, r) => {
                if (!r) return Et.kill(!0);
                let i = !1 !== e || !Et.enabled,
                    s = K;
                i !== Et.isReverted && (i && (te = Math.max(Wt(), Et.scroll.rec || 0), Nt = Et.progress, se = t && t.progress()), c && [c, d, p, h].forEach(e => e.style.display = i ? "none" : "block"), i && (K = Et, Et.update(i)), !ue || Le && Et.isActive || (i ? ((e, t, r) => {
                    It(r);
                    let i = e._gsap;
                    if (i.spacerIsNative) It(i.spacerState);
                    else if (e._gsap.swappedIn) {
                        let r = t.parentNode;
                        r && (r.insertBefore(e, t), r.removeChild(t))
                    }
                    e._gsap.swappedIn = !1
                })(ue, _, m) : Yt(ue, _, Ke(ue), D)), i || Et.update(i), K = s, Et.isReverted = i)
            }, Et.refresh = (i, s, g, v) => {
                if ((K || !Et.enabled) && !s) return;
                if (ue && i && ke) return void rt(Ut, "scrollEnd", xt);
                !ye && Mt && Mt(Et), K = Et, r.tween && !g && (r.tween.kill(), r.tween = 0), j && j.pause(), Te && t && t.revert({
                    kill: !1
                }).invalidate(), Et.isReverted || Et.revert(!0, !0), Et._subPinOffset = !1;
                let y, w, T, S, R, Y, I, z, L, H, q, U, V, G = At(),
                    Z = Rt(),
                    $ = st ? st.duration() : ze(vt, gt),
                    J = f <= .01,
                    Q = 0,
                    re = v || 0,
                    oe = He(g) ? g.end : e.end,
                    ae = e.endTrigger || ge,
                    ne = He(g) ? g.start : e.start || (0 !== e.start && ge ? ue ? "0 0" : "0 100%" : 0),
                    le = Et.pinnedContainer = e.pinnedContainer && M(e.pinnedContainer, Et),
                    ce = ge && Math.max(0, pt.indexOf(Et)) || 0,
                    de = ce;
                for (kt && He(g) && (U = X.getProperty(p, gt.p), V = X.getProperty(h, gt.p)); de--;) Y = pt[de], Y.end || Y.refresh(0, 1) || (K = Et), I = Y.pin, !I || I !== ge && I !== ue && I !== le || Y.isReverted || (H || (H = []), H.unshift(Y), Y.revert(!0, !0)), Y !== pt[de] && (ce--, de--);
                for (Fe(ne) && (ne = ne(Et)), ne = Ce(ne, "start", Et), n = Lt(ne, ge, G, gt, Wt(), c, p, Et, Z, Ct, wt, $, st, Et._startClamp && "_startClamp") || (ue ? -.001 : 0), Fe(oe) && (oe = oe(Et)), Ne(oe) && !oe.indexOf("+=") && (~oe.indexOf(" ") ? oe = (Ne(ne) ? ne.split(" ")[0] : "") + oe : (Q = lt(oe.substr(2), G), oe = Ne(ne) ? ne : (st ? X.utils.mapRange(0, st.duration(), st.scrollTrigger.start, st.scrollTrigger.end, n) : n) + Q, ae = ge)), oe = Ce(oe, "end", Et), l = Math.max(n, Lt(oe || (ae ? "100% 0" : $), ae, G, gt, Wt() + Q, d, h, Et, Z, Ct, wt, $, st, Et._endClamp && "_endClamp")) || -.001, Q = 0, de = ce; de--;) Y = pt[de], I = Y.pin, I && Y.start - Y._pinPush <= n && !st && Y.end > 0 && (y = Y.end - (Et._startClamp ? Math.max(0, Y.start) : Y.start), (I === ge && Y.start - Y._pinPush < n || I === le) && isNaN(ne) && (Q += y * (1 - Y.progress)), I === ue && (re += y));
                if (n += Q, l += Q, Et._startClamp && (Et._startClamp += Q), Et._endClamp && !ye && (Et._endClamp = l || -.001, l = Math.min(l, ze(vt, gt))), f = l - n || (n -= .01) && .001, J && (Nt = X.utils.clamp(0, 1, X.utils.normalize(n, l, te))), Et._pinPush = re, c && Q && (y = {}, y[gt.a] = "+=" + Q, le && (y[gt.p] = "-=" + Wt()), X.set([c, d], y)), !ue || fe && Et.end >= ze(vt, gt)) {
                    if (ge && Wt() && !st)
                        for (w = ge.parentNode; w && w !== W;) w._pinOffset && (n -= w._pinOffset, l -= w._pinOffset), w = w.parentNode
                } else y = Ke(ue), S = gt === P, T = Wt(), C = parseFloat(k(gt.a)) + re, !$ && l > 1 && (q = (bt ? N.scrollingElement || F : vt).style, q = {
                    style: q,
                    value: q["overflow" + gt.a.toUpperCase()]
                }, bt && "scroll" !== Ke(W)["overflow" + gt.a.toUpperCase()] && (q.style["overflow" + gt.a.toUpperCase()] = "scroll")), Yt(ue, _, y), b = Xt(ue), w = $e(ue, !0), z = wt && O(vt, S ? E : P)(), ve ? (D = [ve + gt.os2, f + re + je], D.t = _, de = ve === Ge ? Je(ue, gt) + f + re : 0, de && (D.push(gt.d, de + je), "auto" !== _.style.flexBasis && (_.style.flexBasis = de + je)), It(D), le && pt.forEach(e => {
                    e.pin === le && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                }), wt && Wt(te)) : (de = Je(ue, gt), de && "auto" !== _.style.flexBasis && (_.style.flexBasis = de + je)), wt && (R = {
                    top: w.top + (S ? T - n : z) + je,
                    left: w.left + (S ? z : T - n) + je,
                    boxSizing: "border-box",
                    position: "fixed"
                }, R.width = R.maxWidth = Math.ceil(w.width) + je, R.height = R.maxHeight = Math.ceil(w.height) + je, R.margin = R.marginTop = R.marginRight = R.marginBottom = R.marginLeft = "0", R.padding = y.padding, R.paddingTop = y.paddingTop, R.paddingRight = y.paddingRight, R.paddingBottom = y.paddingBottom, R.paddingLeft = y.paddingLeft, x = ((e, t, r) => {
                    let i, s = [],
                        o = e.length,
                        a = r ? 8 : 0;
                    for (; a < o; a += 2) i = e[a], s.push(i, i in t ? t[i] : e[a + 1]);
                    return s.t = e.t, s
                })(m, R, Le), ye && Wt(0)), t ? (L = t._initted, ie(1), t.render(t.duration(), !0, !0), A = k(gt.a) - C + f + re, B = Math.abs(f - A) > 1, wt && B && x.splice(x.length - 2, 2), t.render(0, !0, !0), L || t.invalidate(!0), t.parent || t.totalTime(t.totalTime()), ie(0)) : A = f, q && (q.value ? q.style["overflow" + gt.a.toUpperCase()] = q.value : q.style.removeProperty("overflow-" + gt.a));
                H && H.forEach(e => e.revert(!1, !0)), Et.start = n, Et.end = l, o = a = ye ? te : Wt(), st || ye || (o < te && Wt(te), Et.scroll.rec = 0), Et.revert(!1, !0), Bt = _e(), ee && (Dt = -1, ee.restart(!0)), K = 0, t && ft && (t._initted || se) && t.progress() !== se && t.progress(se || 0, !0).render(t.time(), !0, !0), (J || Nt !== Et.progress || st || Te) && (t && !ft && t.totalProgress(st && n < -.001 && !Nt ? X.utils.normalize(n, l, 0) : Nt, !0), Et.progress = J || (o - n) / f === Nt ? 0 : Nt), ue && ve && (_._pinOffset = Math.round(Et.progress * A)), j && j.invalidate(), isNaN(U) || (U -= X.getProperty(p, gt.p), V -= X.getProperty(h, gt.p), Ht(p, gt, U), Ht(c, gt, U - (v || 0)), Ht(h, gt, V), Ht(d, gt, V - (v || 0))), J && !ye && Et.update(), !pe || ye || u || (u = !0, pe(Et), u = !1)
            }, Et.getVelocity = () => (Wt() - a) / (_e() - G) * 1e3 || 0, Et.endAnimation = () => {
                qe(Et.callbackAnimation), t && (j ? j.progress(1) : t.paused() ? ft || qe(t, Et.direction < 0, 1) : qe(t, t.reversed()))
            }, Et.labelToScroll = e => t && t.labels && (n || Et.refresh() || n) + t.labels[e] / t.duration() * f || 0, Et.getTrailing = e => {
                let t = pt.indexOf(Et),
                    r = Et.direction > 0 ? pt.slice(0, t).reverse() : pt.slice(t + 1);
                return (Ne(e) ? r.filter(t => t.vars.preventOverlaps === e) : r).filter(e => Et.direction > 0 ? e.end <= n : e.start >= l)
            }, Et.update = (e, i, s) => {
                if (st && !s && !e) return;
                let c, d, h, g, u, m, v, y, w = !0 === ye ? te : Et.scroll(),
                    T = e ? 0 : (w - n) / f,
                    k = T < 0 ? 0 : T > 1 ? 1 : T || 0,
                    E = Et.progress;
                if (i && (a = o, o = st ? Wt() : w, Ye && (q = H, H = t && !ft ? t.totalProgress() : k)), Pe && ue && !K && !we && ke && (!k && n < w + (w - a) / (_e() - G) * Pe ? k = 1e-4 : 1 === k && l > w + (w - a) / (_e() - G) * Pe && (k = .9999)), k !== E && Et.enabled) {
                    if (c = Et.isActive = !!k && k < 1, d = !!E && E < 1, m = c !== d, u = m || !!k != !!E, Et.direction = k > E ? 1 : -1, Et.progress = k, u && !K && (h = k && !E ? 0 : 1 === k ? 1 : 1 === E ? 2 : 3, ft && (g = !m && "none" !== Tt[h + 1] && Tt[h + 1] || Tt[h], y = t && ("complete" === g || "reset" === g || g in t))), dt && (m || y) && (y || he || !t) && (Fe(dt) ? dt(Et) : Et.getTrailing(dt).forEach(e => e.endAnimation())), ft || (!j || K || we ? t && t.totalProgress(k, !(!K || !Bt && !e)) : (j._dp._time - j._start !== j._time && j.render(j._dp._time - j._start), j.resetTo ? j.resetTo("totalProgress", k, t._tTime / t._tDur) : (j.vars.totalProgress = k, j.invalidate().restart()))), ue)
                        if (e && ve && (_.style[ve + gt.os2] = R), wt) {
                            if (u) {
                                if (v = !e && k > E && l + 1 > w && w + 1 >= ze(vt, gt), Le)
                                    if (e || !c && !v) Ft(ue, _);
                                    else {
                                        let e = $e(ue, !0),
                                            t = w - n;
                                        Ft(ue, W, e.top + (gt === P ? t : 0) + je, e.left + (gt === P ? 0 : t) + je)
                                    } It(c || v ? x : b), B && k < 1 && c || S(C + (1 !== k || v ? 0 : A))
                            }
                        } else S(Re(C + A * k));
                    Ye && !r.tween && !K && !we && ee.restart(!0), le && (m || De && k && (k < 1 || !me)) && U(le.targets).forEach(e => e.classList[c || De ? "add" : "remove"](le.className)), ne && !ft && !e && ne(Et), u && !K ? (ft && (y && ("complete" === g ? t.pause().totalProgress(1) : "reset" === g ? t.restart(!0).pause() : "restart" === g ? t.restart(!0) : t[g]()), ne && ne(Et)), !m && me || (de && m && Ue(Et, de), _t[h] && Ue(Et, _t[h]), De && (1 === k ? Et.kill(!1, 1) : _t[h] = 0), m || (h = 1 === k ? 1 : 3, _t[h] && Ue(Et, _t[h]))), nt && !c && Math.abs(Et.getVelocity()) > (We(nt) ? nt : 2500) && (qe(Et.callbackAnimation), j ? j.progress(1) : qe(t, "reverse" === g ? 1 : !k, 1))) : ft && ne && !K && ne(Et)
                }
                if (I) {
                    let e = st ? w / st.duration() * (st._caScrollDist || 0) : w;
                    Y(e + (p._isFlipped ? 1 : 0)), I(e)
                }
                oe && oe(-w / st.duration() * (st._caScrollDist || 0))
            }, Et.enable = (e, t) => {
                Et.enabled || (Et.enabled = !0, rt(vt, "resize", mt), bt || rt(vt, "scroll", ut), Mt && rt(Ut, "refreshInit", Mt), !1 !== e && (Et.progress = Nt = 0, o = a = Dt = Wt()), !1 !== t && Et.refresh())
            }, Et.getTween = e => e && r ? r.tween : j, Et.setPositions = (e, t, r, i) => {
                if (st) {
                    let r = st.scrollTrigger,
                        i = st.duration(),
                        s = r.end - r.start;
                    e = r.start + s * e / i, t = r.start + s * t / i
                }
                Et.refresh(!1, !1, {
                    start: Ee(e, r && !!Et._startClamp),
                    end: Ee(t, r && !!Et._endClamp)
                }, i), Et.update()
            }, Et.adjustPinSpacing = e => {
                if (D && e) {
                    let t = D.indexOf(gt.d) + 1;
                    D[t] = parseFloat(D[t]) + e + je, D[1] = parseFloat(D[1]) + e + je, It(D)
                }
            }, Et.disable = (e, t) => {
                if (Et.enabled && (!1 !== e && Et.revert(!0, !0), Et.enabled = Et.isActive = !1, t || j && j.pause(), te = 0, i && (i.uncache = 1), Mt && it(Ut, "refreshInit", Mt), ee && (ee.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !bt)) {
                    let e = pt.length;
                    for (; e--;)
                        if (pt[e].scroller === vt && pt[e] !== Et) return;
                    it(vt, "resize", mt), bt || it(vt, "scroll", ut)
                }
            }, Et.kill = (r, s) => {
                Et.disable(r, s), j && !s && j.kill(), ce && delete ht[ce];
                let o = pt.indexOf(Et);
                o >= 0 && pt.splice(o, 1), o === J && Ot > 0 && J--, o = 0, pt.forEach(e => e.scroller === Et.scroller && (o = 1)), o || ye || (Et.scroll.rec = 0), t && (t.scrollTrigger = null, r && t.revert({
                    kill: !1
                }), s || t.kill()), c && [c, d, p, h].forEach(e => e.parentNode && e.parentNode.removeChild(e)), be === Et && (be = 0), ue && (i && (i.uncache = 1), o = 0, pt.forEach(e => e.pin === ue && o++), o || (i.spacer = 0)), e.onKill && e.onKill(Et)
            }, pt.push(Et), Et.enable(!1, !1), ae && ae(Et), t && t.add && !f) {
            let e = Et.update;
            Et.update = () => {
                Et.update = e, n || l || Et.refresh()
            }, X.delayedCall(.01, Et.update), f = .01, n = l = 0
        } else Et.refresh();
        ue && (() => {
            if (xe !== St) {
                let e = xe = St;
                requestAnimationFrame(() => e === St && Pt(!0))
            }
        })()
    }
    static register(e) {
        return z || (X = e || Ye(), De() && window.document && Ut.enable(), z = Se), z
    }
    static defaults(e) {
        if (e)
            for (let t in e) at[t] = e[t];
        return at
    }
    static disable(e, t) {
        Se = 0, pt.forEach(r => r[t ? "kill" : "disable"](e)), it(L, "wheel", ut), it(N, "scroll", ut), clearInterval(j), it(N, "touchcancel", Ae), it(W, "touchstart", Ae), tt(it, N, "pointerdown,touchstart,mousedown", Me), tt(it, N, "pointerup,touchend,mouseup", Oe), q.kill(), Le(it);
        for (let e = 0; e < v.length; e += 3) st(it, v[e], v[e + 1]), st(it, v[e], v[e + 2])
    }
    static enable() {
        if (L = window, N = document, F = N.documentElement, W = N.body, X && (U = X.utils.toArray, V = X.utils.clamp, de = X.core.context || Ae, ie = X.core.suppressOverwrites || Ae, pe = L.history.scrollRestoration || "auto", Mt = L.pageYOffset, X.core.globals("ScrollTrigger", Ut), W)) {
            Se = 1, he = document.createElement("div"), he.style.height = "100vh", he.style.position = "absolute", Ct(), Pe(), I.register(X), Ut.isTouch = I.isTouch, ce = I.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ae = 1 === I.isTouch, rt(L, "wheel", ut), H = [L, N, F, W], X.matchMedia ? (Ut.matchMedia = e => {
                let t, r = X.matchMedia();
                for (t in e) r.add(t, e[t]);
                return r
            }, X.addEventListener("matchMediaInit", () => Tt()), X.addEventListener("matchMediaRevert", () => _t()), X.addEventListener("matchMedia", () => {
                Pt(0, 1), bt("matchMedia")
            }), X.matchMedia("(orientation: portrait)", () => (ft(), ft))) : console.warn("Requires GSAP 3.11.0 or later"), ft(), rt(N, "scroll", ut);
            let e, t, r = W.style,
                i = r.borderTopStyle,
                s = X.core.Animation.prototype;
            for (s.revert || Object.defineProperty(s, "revert", {
                    value: function() {
                        return this.time(-.01, !0)
                    }
                }), r.borderTopStyle = "solid", e = $e(W), P.m = Math.round(e.top + P.sc()) || 0, E.m = Math.round(e.left + E.sc()) || 0, i ? r.borderTopStyle = i : r.removeProperty("border-top-style"), j = setInterval(gt, 250), X.delayedCall(.5, () => we = 0), rt(N, "touchcancel", Ae), rt(W, "touchstart", Ae), tt(rt, N, "pointerdown,touchstart,mousedown", Me), tt(rt, N, "pointerup,touchend,mouseup", Oe), $ = X.utils.checkPrefix("transform"), Dt.push($), z = _e(), q = X.delayedCall(.2, Pt).pause(), te = [N, "visibilitychange", () => {
                    let e = L.innerWidth,
                        t = L.innerHeight;
                    N.hidden ? (Q = e, ee = t) : Q === e && ee === t || mt()
                }, N, "DOMContentLoaded", Pt, L, "load", Pt, L, "resize", mt], Le(rt), pt.forEach(e => e.enable(0, 1)), t = 0; t < v.length; t += 3) st(it, v[t], v[t + 1]), st(it, v[t], v[t + 2])
        }
    }
    static config(e) {
        "limitCallbacks" in e && (me = !!e.limitCallbacks);
        let t = e.syncInterval;
        t && clearInterval(j) || (j = t) && setInterval(gt, t), "ignoreMobileResize" in e && (ae = 1 === Ut.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Le(it) || Le(rt, e.autoRefreshEvents || "none"), se = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
    }
    static scrollerProxy(e, t) {
        let r = M(e),
            i = v.indexOf(r),
            s = Be(r);
        ~i && v.splice(i, s ? 6 : 2), t && (s ? y.unshift(L, t, W, t, F, t) : y.unshift(r, t))
    }
    static clearMatchMedia(e) {
        pt.forEach(t => t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0))
    }
    static isInViewport(e, t, r) {
        let i = (Ne(e) ? M(e) : e).getBoundingClientRect(),
            s = i[r ? "width" : "height"] * t || 0;
        return r ? i.right - s > 0 && i.left + s < L.innerWidth : i.bottom - s > 0 && i.top + s < L.innerHeight
    }
    static positionInViewport(e, t, r) {
        Ne(e) && (e = M(e));
        let i = e.getBoundingClientRect(),
            s = i[r ? "width" : "height"],
            o = null == t ? s / 2 : t in nt ? nt[t] * s : ~t.indexOf("%") ? parseFloat(t) * s / 100 : parseFloat(t) || 0;
        return r ? (i.left + o) / L.innerWidth : (i.top + o) / L.innerHeight
    }
    static killAll(e) {
        if (pt.slice(0).forEach(e => "ScrollSmoother" !== e.vars.id && e.kill()), !0 !== e) {
            let e = vt.killAll || [];
            vt = {}, e.forEach(e => e())
        }
    }
}
Ut.version = "3.12.5", Ut.saveStyles = e => e ? U(e).forEach(e => {
    if (e && e.style) {
        let t = wt.indexOf(e);
        t >= 0 && wt.splice(t, 5), wt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), X.core.getCache(e), de())
    }
}) : wt, Ut.revert = (e, t) => Tt(!e, t), Ut.create = (e, t) => new Ut(e, t), Ut.refresh = e => e ? mt() : (z || Ut.register()) && Pt(!0), Ut.update = e => ++v.cache && At(!0 === e ? 2 : 0), Ut.clearScrollMemory = kt, Ut.maxScroll = (e, t) => ze(e, t ? E : P), Ut.getScrollFunc = (e, t) => O(M(e), t ? E : P), Ut.getById = e => ht[e], Ut.getAll = () => pt.filter(e => "ScrollSmoother" !== e.vars.id), Ut.isScrolling = () => !!ke, Ut.snapDirectional = et, Ut.addEventListener = (e, t) => {
    let r = vt[e] || (vt[e] = []);
    ~r.indexOf(t) || r.push(t)
}, Ut.removeEventListener = (e, t) => {
    let r = vt[e],
        i = r && r.indexOf(t);
    i >= 0 && r.splice(i, 1)
}, Ut.batch = (e, t) => {
    let r, i = [],
        s = {},
        o = t.interval || .016,
        a = t.batchMax || 1e9,
        n = (e, t) => {
            let r = [],
                i = [],
                s = X.delayedCall(o, () => {
                    t(r, i), r = [], i = []
                }).pause();
            return e => {
                r.length || s.restart(!0), r.push(e.trigger), i.push(e), a <= r.length && s.progress(1)
            }
        };
    for (r in t) s[r] = "on" === r.substr(0, 2) && Fe(t[r]) && "onRefreshInit" !== r ? n(0, t[r]) : t[r];
    return Fe(a) && (a = a(), rt(Ut, "refresh", () => a = t.batchMax())), U(e).forEach(e => {
        let t = {};
        for (r in s) t[r] = s[r];
        t.trigger = e, i.push(Ut.create(t))
    }), i
};
let Vt, Gt = (e, t, r, i) => (t > i ? e(i) : t < 0 && e(0), r > i ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1),
    jt = (e, t) => {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (I.isTouch ? " pinch-zoom" : "") : "none", e === F && jt(W, t)
    },
    Kt = {
        auto: 1,
        scroll: 1
    },
    Zt = ({
        event: e,
        target: t,
        axis: r
    }) => {
        let i, s = (e.changedTouches ? e.changedTouches[0] : e).target,
            o = s._gsap || X.core.getCache(s),
            a = _e();
        if (!o._isScrollT || a - o._isScrollT > 2e3) {
            for (; s && s !== W && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !Kt[(i = Ke(s)).overflowY] && !Kt[i.overflowX]);) s = s.parentNode;
            o._isScroll = s && s !== t && !Be(s) && (Kt[(i = Ke(s)).overflowY] || Kt[i.overflowX]), o._isScrollT = a
        }(o._isScroll || "x" === r) && (e.stopPropagation(), e._gsapAllow = !0)
    },
    $t = (e, t, r, i) => I.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: i = i && Zt,
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: () => r && rt(N, I.eventTypes[0], Qt, !1, !0),
        onDisable: () => it(N, I.eventTypes[0], Qt, !0)
    }),
    Jt = /(input|label|select|textarea)/i,
    Qt = e => {
        let t = Jt.test(e.target.tagName);
        (t || Vt) && (e._gsapAllow = !0, Vt = t)
    },
    er = e => {
        He(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        let t, r, i, s, o, a, n, l, {
                normalizeScrollX: c,
                momentum: d,
                allowNestedScroll: p,
                onRelease: h
            } = e,
            g = M(e.target) || F,
            u = X.core.globals().ScrollSmoother,
            f = u && u.get(),
            m = ce && (e.content && M(e.content) || f && !1 !== e.content && !f.smooth() && f.content()),
            y = O(g, P),
            x = O(g, E),
            b = 1,
            w = (I.isTouch && L.visualViewport ? L.visualViewport.scale * L.visualViewport.width : L.outerWidth) / L.innerWidth,
            _ = 0,
            T = Fe(d) ? () => d(t) : () => d || 2.8,
            k = $t(g, e.type, !0, p),
            S = () => s = !1,
            C = Ae,
            A = Ae,
            R = () => {
                r = ze(g, P), A = V(ce ? 1 : 0, r), c && (C = V(0, ze(g, E))), i = St
            },
            D = () => {
                m._gsap.y = Re(parseFloat(m._gsap.y) + y.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", y.offset = y.cacheID = 0
            },
            Y = () => {
                R(), o.isActive() && o.vars.scrollY > r && (y() > r ? o.progress(1) && y(r) : o.resetTo("scrollY", r))
            };
        return m && X.set(m, {
            y: "+=0"
        }), e.ignoreCheck = e => ce && "touchmove" === e.type && (() => {
            if (s) {
                requestAnimationFrame(S);
                let e = Re(t.deltaY / 2),
                    r = A(y.v - e);
                if (m && r !== y.v + y.offset) {
                    y.offset = r - y.v;
                    let e = Re((parseFloat(m && m._gsap.y) || 0) - y.offset);
                    m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", m._gsap.y = e + "px", y.cacheID = v.cache, At()
                }
                return !0
            }
            y.offset && D(), s = !0
        })() || b > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            s = !1;
            let e = b;
            b = Re((L.visualViewport && L.visualViewport.scale || 1) / w), o.pause(), e !== b && jt(g, b > 1.01 || !c && "x"), a = x(), n = y(), R(), i = St
        }, e.onRelease = e.onGestureStart = (e, t) => {
            if (y.offset && D(), t) {
                v.cache++;
                let t, i, s = T();
                c && (t = x(), i = t + .05 * s * -e.velocityX / .227, s *= Gt(x, t, i, ze(g, E)), o.vars.scrollX = C(i)), t = y(), i = t + .05 * s * -e.velocityY / .227, s *= Gt(y, t, i, ze(g, P)), o.vars.scrollY = A(i), o.invalidate().duration(s).play(.01), (ce && o.vars.scrollY >= r || t >= r - 1) && X.to({}, {
                    onUpdate: Y,
                    duration: s
                })
            } else l.restart(!0);
            h && h(e)
        }, e.onWheel = () => {
            o._ts && o.pause(), _e() - _ > 1e3 && (i = 0, _ = _e())
        }, e.onChange = (e, t, r, s, o) => {
            if (St !== i && R(), t && c && x(C(s[2] === t ? a + (e.startX - e.x) : x() + t - s[1])), r) {
                y.offset && D();
                let t = o[2] === r,
                    i = t ? n + e.startY - e.y : y() + r - o[1],
                    s = A(i);
                t && i !== s && (n += s - i), y(s)
            }(r || t) && At()
        }, e.onEnable = () => {
            jt(g, !c && "x"), Ut.addEventListener("refresh", Y), rt(L, "resize", Y), y.smooth && (y.target.style.scrollBehavior = "auto", y.smooth = x.smooth = !1), k.enable()
        }, e.onDisable = () => {
            jt(g, !0), it(L, "resize", Y), Ut.removeEventListener("refresh", Y), k.kill()
        }, e.lockAxis = !1 !== e.lockAxis, t = new I(e), t.iOS = ce, ce && !y() && y(1), ce && X.ticker.add(Ae), l = t._dc, o = X.to(t, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: Wt(y, y(), () => o.pause())
            },
            onUpdate: At,
            onComplete: l.vars.onComplete
        }), t
    };
Ut.sort = e => pt.sort(e || ((e, t) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0)))), Ut.observe = e => new I(e), Ut.normalizeScroll = e => {
    if (void 0 === e) return oe;
    if (!0 === e && oe) return oe.enable();
    if (!1 === e) return oe && oe.kill(), void(oe = e);
    let t = e instanceof I ? e : er(e);
    return oe && oe.target === t.target && oe.kill(), Be(t.target) && (oe = t), t
}, Ut.core = {
    _getVelocityProp: A,
    _inputObserver: $t,
    _scrollers: v,
    _proxies: y,
    bridge: {
        ss: () => {
            ke || bt("scrollStart"), ke = _e()
        },
        ref: () => K
    }
}, Ye() && X.registerPlugin(Ut);
export default Ut;
export {
    Ut as ScrollTrigger
};