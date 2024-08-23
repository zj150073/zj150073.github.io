var e = Object.defineProperty,
  t = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  i = (t, l, a) =>
    l in t
      ? e(t, l, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[l] = a),
  s = (e, t) => {
    for (var l in t || (t = {})) n.call(t, l) && i(e, l, t[l]);
    if (a) for (var l of a(t)) o.call(t, l) && i(e, l, t[l]);
    return e;
  },
  r = (e, a) => t(e, l(a)),
  u = (e, t, l) =>
    new Promise((a, n) => {
      var o = (e) => {
          try {
            s(l.next(e));
          } catch (t) {
            n(t);
          }
        },
        i = (e) => {
          try {
            s(l.throw(e));
          } catch (t) {
            n(t);
          }
        },
        s = (e) => (e.done ? a(e.value) : Promise.resolve(e.value).then(o, i));
      s((l = l.apply(e, t)).next());
    });
import {
  b as c,
  c as d,
  d as p,
  e as h,
  f as m,
  g as v,
  h as f,
  i as g,
  j as y,
  k as x,
  l as b,
  m as k,
  n as w,
  o as _,
  p as C,
  v as I,
  q as S,
  r as T,
  s as M,
  t as V,
  u as z,
  w as A,
  x as R,
  y as E,
  A as j
} from "./element-plus-MYdaSVk9.js";
import {
  r as P,
  z as q,
  J as L,
  i as H,
  f as B,
  u as D,
  o as $,
  c as O,
  aQ as F,
  d as N,
  w as U,
  A as W,
  $ as X,
  a0 as Y,
  a as G,
  O as K,
  U as Q,
  P as J,
  aj as Z,
  L as ee,
  _ as te,
  W as le,
  X as ae,
  R as ne,
  V as oe,
  a1 as ie,
  S as se,
  n as re,
  bk as ue,
  bi as ce,
  a8 as de,
  T as pe,
  s as he,
  C as me,
  Y as ve,
  F as fe,
  ad as ge,
  aB as ye,
  h as xe,
  H as be,
  ai as ke,
  D as we,
  I as _e,
  ae as Ce,
  af as Ie,
  Z as Se,
  G as Te
} from "./@vue-uYjjPr_8.js";
/* empty css                    */ import { a as Me } from "./@iconify-DIDSJ0LL.js";
import {
  d as Ve,
  a as ze,
  b as Ae,
  c as Re,
  e as Ee,
  f as je,
  g as Pe,
  h as qe,
  i as Le,
  j as He,
  k as Be,
  l as De,
  m as $e,
  n as Oe,
  o as Fe,
  p as Ne,
  q as Ue,
  r as We,
  s as Xe,
  t as Ye,
  u as Ge,
  v as Ke,
  w as Qe,
  x as Je,
  y as Ze,
  z as et,
  A as tt,
  B as lt,
  C as at,
  D as nt,
  E as ot,
  F as it,
  G as st,
  H as rt,
  I as ut,
  J as ct,
  K as dt,
  L as pt,
  M as ht,
  N as mt,
  O as vt,
  P as ft,
  Q as gt,
  R as yt,
  S as xt,
  T as bt,
  U as kt,
  V as wt,
  W as _t,
  X as Ct,
  Y as It,
  Z as St,
  _ as Tt,
  $ as Mt,
  a0 as Vt,
  a1 as zt,
  a2 as At
} from "./@iconify-icons-B0q_kcRm.js";
import {
  e as Rt,
  I as Et,
  u as jt,
  a as Pt,
  b as qt,
  g as Lt,
  c as Ht,
  d as Bt,
  f as Dt,
  h as $t
} from "./dark-B9MXXPkl.js";
import { d as Ot } from "./pinia-DIp8UqE1.js";
import {
  s as Ft,
  g as Nt,
  u as Ut,
  r as Wt,
  a as Xt,
  b as Yt,
  c as Gt,
  d as Kt,
  h as Qt,
  e as Jt,
  f as Zt,
  i as el
} from "./index-CDxT1Fie.js";
import "./js-cookie-BXEMiIsG.js";
import {
  K as tl,
  N as ll,
  r as al,
  a as nl,
  M as ol,
  b as il,
  c as sl,
  _ as rl,
  j as ul,
  v as cl,
  C as dl,
  f as pl,
  X as hl,
  B as ml,
  z as vl,
  d as fl,
  W as gl,
  L as yl
} from "./ajmer.utils-BPzkq30X.js";
import { o as xl, k as bl, l as kl } from "./@vueuse-ChwCXi05.js";
import { _ as wl } from "./_plugin-vue_expo.js";
import { m as _l } from "./pinyin-pro-DXmu7SIx.js";
import { S as Cl } from "./sortablejs-CG_H93Kl.js";
import { t as Il } from "./ajmer.theme-DjcWgsEv.js";
import { p as Sl } from "./path-RY3FLY9h.js";
import "./lodash-es-CZ_XKJ1O.js";
import "./async-validator-Cuo4gI4y.js";
import "./@element-plus-BCkKEMj9.js";
import "./@ctrl-D2oWfImC.js";
import "./@popperjs-D3lHDW-0.js";
import "./mitt-CNZ6avp8.js";
import "./vite-plugin-fake-server-CytHVkXj.js";
import "./nprogress-Dbi5RM6p.js";
import "./axs-request-BDKVJbFe.js";
import "./axios-CoNXo1z2.js";
import "./vue-router-B2ECbEYM.js";
import "./responsive-storage-Dm27tqI4.js";
import "./vue-DP70K6k3.js";
import "./version-rocket-jMrrWvOm.js";
import "./plus-pro-components-GrzOBuxf.js";
import "./view-tool-v3-D8LvUbsn.js";
import "./util-B6W86Hg6.js";
import "./inherits-Cs4_hlKB.js";
Me("ep:menu", Ve),
  Me("ep:edit", ze),
  Me("ep:set-up", Ae),
  Me("ep:guide", Re),
  Me("ep:monitor", Ee),
  Me("ep:lollipop", je),
  Me("ep:histogram", Pe),
  Me("ep:home-filled", qe),
  Me("ri:bookmark-2-line", Le),
  Me("ri:file-ppt-2-line", He),
  Me("ri:bank-card-line", Be),
  Me("ri:admin-fill", De),
  Me("ri:file-info-line", $e),
  Me("ri:git-branch-line", Oe),
  Me("ri:links-fill", Fe),
  Me("ri:table-line", Ne),
  Me("ri:search-line", Ue),
  Me("ri:admin-line", We),
  Me("ri:settings-3-line", Xe),
  Me("ri:mind-map", Ye),
  Me("ri:bar-chart-horizontal-line", Ge),
  Me("ri:window-line", Ke),
  Me("ri:file-search-line", Qe),
  Me("ri:artboard-line", Je),
  Me("ri:list-check", Ze),
  Me("ri:ubuntu-fill", et),
  Me("ri:user-voice-line", tt),
  Me("ri:edit-box-line", lt),
  Me("ri:history-fill", at),
  Me("ri:information-line", nt),
  Me("ri:terminal-window-line", ot),
  Me("ri:checkbox-circle-line", it);
const Tl = Ot({
  id: "pure-setting",
  state: () => ({
    title: Nt().Title,
    fixedHeader: Nt().FixedHeader,
    hiddenSideBar: Nt().HiddenSideBar
  }),
  getters: {
    getTitle: (e) => e.title,
    getFixedHeader: (e) => e.fixedHeader,
    getHiddenSideBar: (e) => e.hiddenSideBar
  },
  actions: {
    CHANGE_SETTING({ key: e, value: t }) {
      Reflect.has(this, e) && (this[e] = t);
    },
    changeSetting(e) {
      this.CHANGE_SETTING(e);
    }
  }
});
function Ml() {
  return Tl(Ft);
}
function Vl() {
  const { $storage: e } = tl(),
    { route: t } = Ut(),
    l = B(),
    a = Ml(),
    n = P(0),
    o = P(0),
    i = P(0),
    s = P(!1),
    r = P(-1),
    u = P({}),
    c = P(!1),
    d = q(() => {
      var t;
      return (null == (t = e.configure) ? void 0 : t.showModel) || "smart";
    }),
    p = q(() => {
      var t;
      return (null == (t = e.configure) ? void 0 : t.hideTabs) || !1;
    }),
    h = q(() => Xt().multiTags),
    m = L([
      { icon: st, text: "重新加载", divided: !1, disabled: !1, show: !0 },
      {
        icon: rt,
        text: "关闭当前标签页",
        divided: !1,
        disabled: !(h.value.length > 1),
        show: !0
      },
      {
        icon: ut,
        text: "关闭左侧标签页",
        divided: !0,
        disabled: !(h.value.length > 1),
        show: !0
      },
      {
        icon: ct,
        text: "关闭右侧标签页",
        divided: !1,
        disabled: !(h.value.length > 1),
        show: !0
      },
      {
        icon: dt,
        text: "关闭其他标签页",
        divided: !0,
        disabled: !(h.value.length > 2),
        show: !0
      },
      {
        icon: pt,
        text: "关闭全部标签页",
        divided: !1,
        disabled: !(h.value.length > 1),
        show: !0
      },
      { icon: ht, text: "内容区全屏", divided: !0, disabled: !1, show: !0 }
    ]);
  function v(e, l, a) {
    var n, o;
    return ol(
      null == (n = null == t ? void 0 : t.meta) ? void 0 : n.showLink
    ) &&
      !1 === (null == (o = null == t ? void 0 : t.meta) ? void 0 : o.showLink)
      ? Object.keys(t.query).length > 0
        ? il(t.query, e.query)
          ? l
          : a
        : il(t.params, e.params)
        ? l
        : a
      : t.path === e.path
      ? l
      : a;
  }
  const f = q(() => (e) => {
      var t, l;
      return (
        ol(null == (t = null == e ? void 0 : e.meta) ? void 0 : t.fixedTag) &&
        !0 === (null == (l = null == e ? void 0 : e.meta) ? void 0 : l.fixedTag)
      );
    }),
    g = q(() => (e, t) => {
      if (0 !== t) return v(e, !0, !1);
    }),
    y = q(() => (e) => v(e, "is-active", "")),
    x = q(() => (e) => v(e, "schedule-active", "")),
    b = q(() => ({
      transform: `translateX(${i.value}px)`,
      transition: c.value ? "none" : "transform 0.5s ease-in-out"
    })),
    k = q(() => ({ left: o.value + "px", top: n.value + "px" }));
  return (
    H(() => {
      if (!d.value) {
        const e = ll().getItem(`${Wt()}configure`);
        (e.showModel = "card"), ll().setItem(`${Wt()}configure`, e);
      }
    }),
    {
      Close: rt,
      visible: s,
      showTags: p,
      instance: l,
      multiTags: h,
      showModel: d,
      tagsViews: m,
      buttonTop: n,
      buttonLeft: o,
      translateX: i,
      isFixedTag: f,
      pureSetting: a,
      activeIndex: r,
      getTabStyle: b,
      isScrolling: c,
      iconIsActive: g,
      linkIsActive: y,
      currentSelect: u,
      scheduleIsActive: x,
      getContextMenuStyle: k,
      closeMenu: () => {
        s.value = !1;
      },
      onMounted: H,
      onMouseenter: function (e) {
        if ((e && (r.value = e), "smart" === D(d))) {
          if (al(l.refs["schedule" + e][0], "schedule-active")) return;
          nl(!0, "schedule-in", l.refs["schedule" + e][0]),
            nl(!1, "schedule-out", l.refs["schedule" + e][0]);
        } else {
          if (al(l.refs["dynamic" + e][0], "is-active")) return;
          nl(!0, "card-in", l.refs["dynamic" + e][0]),
            nl(!1, "card-out", l.refs["dynamic" + e][0]);
        }
      },
      onMouseleave: function (e) {
        if (((r.value = -1), "smart" === D(d))) {
          if (al(l.refs["schedule" + e][0], "schedule-active")) return;
          nl(!1, "schedule-in", l.refs["schedule" + e][0]),
            nl(!0, "schedule-out", l.refs["schedule" + e][0]);
        } else {
          if (al(l.refs["dynamic" + e][0], "is-active")) return;
          nl(!1, "card-in", l.refs["dynamic" + e][0]),
            nl(!0, "card-out", l.refs["dynamic" + e][0]);
        }
      },
      onContentFullScreen: function () {
        a.hiddenSideBar
          ? a.changeSetting({ key: "hiddenSideBar", value: !1 })
          : a.changeSetting({ key: "hiddenSideBar", value: !0 });
      }
    }
  );
}
const zl = {},
  Al = { class: "w-full h-full" },
  Rl = [
    F(
      '<defs><symbol id="geometry-left" viewBox="0 0 214 36"><path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z"></path></symbol><symbol id="geometry-right" viewBox="0 0 214 36"><use xlink:href="#geometry-left"></use></symbol><clipPath><rect width="100%" height="100%" x="0"></rect></clipPath></defs><svg width="51%" height="100%"><use xlink:href="#geometry-left" width="214" height="36" fill="currentColor"></use></svg><g transform="scale(-1, 1)"><svg width="51%" height="100%" x="-100%" y="0"><use xlink:href="#geometry-right" width="214" height="36" fill="currentColor"></use></svg></g>',
      3
    )
  ];
const El = wl(zl, [
    [
      "render",
      function (e, t) {
        return $(), O("svg", Al, Rl);
      }
    ]
  ]),
  jl = {
    BASE_URL: "./",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_APPID: "micro-builder-app",
    VITE_CDN: "false",
    VITE_COMPRESSION: "none",
    VITE_PORT: "3000",
    VITE_PUBLIC_PATH: "",
    VITE_REQUEST_IDENTICATION: "/api",
    VITE_ROUTER_HISTORY: "hash"
  },
  Pl = { class: "arrow-left" },
  ql = ["onContextmenu", "onMouseenter", "onMouseleave", "onClick"],
  Ll = {
    class: "tag-title dark:!text-text_color_primary dark:hover:!text-primary"
  },
  Hl = ["onClick"],
  Bl = { key: 1, class: "chrome-tab" },
  Dl = { class: "chrome-tab__bg" },
  $l = { class: "tag-title" },
  Ol = ["onClick"],
  Fl = ((e) => (ue("data-v-7006f636"), (e = e()), ce(), e))(() =>
    G("span", { class: "chrome-tab-divider" }, null, -1)
  ),
  Nl = { class: "arrow-right" },
  Ul = ["onClick"],
  Wl = { class: "arrow-down" },
  Xl = wl(
    N({
      __name: "index",
      setup(e) {
        var t;
        const { route: l, router: a } = Ut(),
          {
            Close: n,
            visible: o,
            showTags: i,
            instance: s,
            multiTags: r,
            tagsViews: h,
            buttonTop: m,
            buttonLeft: v,
            showModel: f,
            translateX: g,
            isFixedTag: y,
            pureSetting: x,
            activeIndex: b,
            getTabStyle: k,
            isScrolling: w,
            iconIsActive: _,
            linkIsActive: C,
            currentSelect: I,
            scheduleIsActive: S,
            getContextMenuStyle: T,
            closeMenu: M,
            onMounted: V,
            onMouseenter: z,
            onMouseleave: A,
            onContentFullScreen: R
          } = Vl(),
          E = P(),
          j = P(),
          q = P(),
          L = P(),
          H = P(!1),
          B = null == (t = Yt()) ? void 0 : t.path,
          { VITE_HIDE_HOME: F } = jl,
          N = [
            ...Gt,
            ...Kt().flatteningRoutes.filter((e) => {
              var t;
              return null == (t = null == e ? void 0 : e.meta)
                ? void 0
                : t.fixedTag;
            })
          ],
          ue = () =>
            u(this, null, function* () {
              yield re();
              const e = r.value.findIndex((e) =>
                ul(l.query)
                  ? ul(l.params)
                    ? l.path === e.path
                    : il(l.params, e.params)
                  : il(l.query, e.query)
              );
              ce(e);
            }),
          ce = (e) =>
            u(this, null, function* () {
              var t, l;
              yield re();
              if (!s.refs["dynamic" + e]) return;
              const a = s.refs["dynamic" + e][0],
                n = null == a ? void 0 : a.offsetLeft,
                o = null == a ? void 0 : a.offsetWidth,
                i = q.value
                  ? null == (t = q.value)
                    ? void 0
                    : t.offsetWidth
                  : 0,
                r = E.value
                  ? null == (l = E.value)
                    ? void 0
                    : l.offsetWidth
                  : 0;
              (H.value = i <= r),
                r < i || 0 === n
                  ? (g.value = 0)
                  : n < -g.value
                  ? (g.value = 10 - n)
                  : n > -g.value && n + o < -g.value + i
                  ? (g.value = Math.min(0, i - o - n - 10))
                  : (g.value = -(n - (i - 10 - o)));
            }),
          pe = (e) => {
            var t;
            const l = q.value
                ? null == (t = q.value)
                  ? void 0
                  : t.offsetWidth
                : 0,
              a = E.value ? E.value.offsetWidth : 0;
            e > 0
              ? (g.value = Math.min(0, g.value + e))
              : l < a
              ? g.value >= -(a - l) && (g.value = Math.max(g.value + e, l - a))
              : (g.value = 0),
              (w.value = !1);
          },
          he = (e) => {
            w.value = !0;
            const t = Math.abs(e.deltaX) + Math.abs(e.deltaY);
            let l = 0;
            (l = e.deltaX < 0 ? (t > 0 ? t : 100) : t > 0 ? -t : -100), me(l);
          },
          me = (e) => {
            let t = Math.abs(e);
            const l = () => {
              const a = Math.sign(e) * Math.min(20, t);
              pe(a), (t -= Math.abs(a)), t > 0 && requestAnimationFrame(l);
            };
            requestAnimationFrame(l);
          };
        function ve(e, t) {
          !(function (e, t, n) {
            var o, i, s, u;
            const c = r.value.findIndex((t) => {
                if (t.query) {
                  if (t.path === e.path) return t.query === e.query;
                } else {
                  if (!t.params) return t.path === e.path;
                  if (t.path === e.path) return t.params === e.params;
                }
              }),
              d = (t, l, a) => {
                a
                  ? Xt().handleTags(
                      "equal",
                      ["false" === F ? N : de(Yt()), e].flat()
                    )
                  : Xt().handleTags("splice", "", { startIndex: t, length: l }),
                  ue();
              };
            "other" === n
              ? d(1, 1, !0)
              : "left" === n
              ? d(N.length, c - 1, !0)
              : "right" === n
              ? d(c + 1, r.value.length)
              : d(c, 1);
            const p = Xt().handleTags("slice");
            if (t === l.path) {
              if ("left" === n) return;
              (null == (o = p[0]) ? void 0 : o.query)
                ? a.push({ name: p[0].name, query: p[0].query })
                : (null == (i = p[0]) ? void 0 : i.params)
                ? a.push({ name: p[0].name, params: p[0].params })
                : a.push({ path: p[0].path });
            } else {
              if (!r.value.length) return;
              if (r.value.some((e) => e.path === l.path)) return;
              (null == (s = p[0]) ? void 0 : s.query)
                ? a.push({ name: p[0].name, query: p[0].query })
                : (null == (u = p[0]) ? void 0 : u.params)
                ? a.push({ name: p[0].name, params: p[0].params })
                : a.push({ path: p[0].path });
            }
          })(e, e.path, t),
            Qt(l);
        }
        function fe(e, t, n) {
          if (t && t.disabled) return;
          let o;
          switch (
            ((o = n
              ? {
                  path: n.path,
                  meta: n.meta,
                  name: n.name,
                  query: null == n ? void 0 : n.query,
                  params: null == n ? void 0 : n.params
                }
              : { path: l.path, meta: l.meta }),
            e)
          ) {
            case 0:
              !(function () {
                const { fullPath: e, query: t } = D(l);
                a.replace({ path: "/redirect" + e, query: t }),
                  Qt(l, "refresh");
              })();
              break;
            case 1:
              ve(o);
              break;
            case 2:
              ve(o, "left");
              break;
            case 3:
              ve(o, "right");
              break;
            case 4:
              ve(o, "other");
              break;
            case 5:
              Xt().handleTags("splice", "", {
                startIndex: N.length,
                length: r.value.length
              }),
                a.push(B),
                Qt(l);
              break;
            case 6:
              R(),
                setTimeout(() => {
                  x.hiddenSideBar
                    ? ((h[6].icon = gt), (h[6].text = "内容区退出全屏"))
                    : ((h[6].icon = ht), (h[6].text = "内容区全屏"));
                }, 100);
          }
          setTimeout(() => {
            be(l.fullPath, l.query);
          });
        }
        function ge(e) {
          const { key: t, item: l } = e;
          fe(t, l);
        }
        function ye(e) {
          Array.of(1, 2, 3, 4, 5).forEach((t) => {
            h[t].show = e;
          });
        }
        function xe(e, t = !1) {
          Array.of(1, 2, 3, 4, 5).forEach((t) => {
            h[t].disabled = e;
          }),
            t && ((h[2].show = !1), (h[2].disabled = !0));
        }
        function be(e, t = {}, l = !1) {
          var a, n, o, i;
          const s = r.value,
            u = r.value.length;
          let c = -1;
          function d() {
            var e, t;
            (null == (t = null == (e = s[c]) ? void 0 : e.meta)
              ? void 0
              : t.fixedTag) &&
              Array.of(1, 2, 3, 4, 5).forEach((e) => {
                h[e].disabled = !0;
              });
          }
          (c = ul(t)
            ? s.findIndex((t) => t.path === e)
            : s.findIndex((e) => il(e.query, t))),
            ye(!0),
            l && (h[0].show = !0),
            1 === c && 2 !== u
              ? ((h[2].show = !1),
                Array.of(1, 3, 4, 5).forEach((e) => {
                  h[e].disabled = !1;
                }),
                (h[2].disabled = !0),
                d())
              : 1 === c && 2 === u
              ? (xe(!1),
                Array.of(2, 3, 4).forEach((e) => {
                  (h[e].show = !1), (h[e].disabled = !0);
                }),
                d())
              : u - 1 === c && 0 !== c
              ? ((h[3].show = !1),
                Array.of(1, 2, 4, 5).forEach((e) => {
                  h[e].disabled = !1;
                }),
                (h[3].disabled = !0),
                (null == (n = null == (a = s[c - 1]) ? void 0 : a.meta)
                  ? void 0
                  : n.fixedTag) && ((h[2].show = !1), (h[2].disabled = !0)),
                d())
              : 0 === c || e === `/redirect${B}`
              ? xe(!0)
              : (xe(
                  !1,
                  null == (i = null == (o = s[c - 1]) ? void 0 : o.meta)
                    ? void 0
                    : i.fixedTag
                ),
                d());
        }
        return (
          xl(L, M, { detectIframe: !0 }),
          U(l, () => {
            (b.value = -1), ue();
          }),
          V(() => {
            s &&
              (be(l.fullPath),
              Rt.on("changLayoutRoute", (e) => {
                !(function (e) {
                  const t = r.value.some((t) => t.path === e);
                  !(function e(l, a) {
                    t ||
                      l.forEach((t) => {
                        t.path === a
                          ? Xt().handleTags("push", {
                              path: a,
                              meta: t.meta,
                              name: t.name
                            })
                          : t.children &&
                            t.children.length > 0 &&
                            e(t.children, a);
                      });
                  })(a.options.routes, e);
                })(e),
                  setTimeout(() => {
                    be(e);
                  });
              }),
              sl(q, ue),
              rl().then(() => ue()));
          }),
          W(() => {
            Rt.off("changLayoutRoute");
          }),
          (e, t) => {
            const s = Et,
              u = c,
              g = d,
              x = p;
            return D(i)
              ? ae("", !0)
              : ($(),
                O(
                  "div",
                  {
                    key: 0,
                    ref_key: "containerDom",
                    ref: j,
                    class: "tags-view"
                  },
                  [
                    X(
                      G(
                        "span",
                        Pl,
                        [
                          K(
                            s,
                            {
                              icon: D(mt),
                              onClick: t[0] || (t[0] = (e) => pe(200))
                            },
                            null,
                            8,
                            ["icon"]
                          )
                        ],
                        512
                      ),
                      [[Y, D(H)]]
                    ),
                    G(
                      "div",
                      {
                        ref_key: "scrollbarDom",
                        ref: q,
                        class: ee([
                          "scroll-container",
                          "chrome" === D(f) && "chrome-scroll-container"
                        ]),
                        onWheel: te(he, ["prevent"])
                      },
                      [
                        G(
                          "div",
                          {
                            ref_key: "tabDom",
                            ref: E,
                            class: "tab select-none",
                            style: Q(D(k))
                          },
                          [
                            ($(!0),
                            O(
                              J,
                              null,
                              Z(
                                D(r),
                                (e, t) => (
                                  $(),
                                  O(
                                    "div",
                                    {
                                      ref_for: !0,
                                      ref: "dynamic" + t,
                                      key: t,
                                      class: ee([
                                        "scroll-item is-closable",
                                        D(C)(e),
                                        "chrome" === D(f) && "chrome-item",
                                        D(y)(e) && "fixed-tag"
                                      ]),
                                      onContextmenu: te(
                                        (t) =>
                                          (function (e, t) {
                                            var a;
                                            M(),
                                              e.path === B ||
                                              (null ==
                                              (a = null == e ? void 0 : e.meta)
                                                ? void 0
                                                : a.fixedTag)
                                                ? (ye(!1), (h[0].show = !0))
                                                : l.path !== e.path &&
                                                  l.name !== e.name
                                                ? ((h[0].show = !1),
                                                  be(e.path, e.query))
                                                : 2 === r.value.length &&
                                                  l.path !== e.path
                                                ? (ye(!0), (h[4].show = !1))
                                                : l.path === e.path &&
                                                  be(e.path, e.query, !0),
                                              (I.value = e);
                                            const n =
                                                D(j).getBoundingClientRect()
                                                  .left,
                                              i = D(j).offsetWidth - 140,
                                              s = t.clientX - n + 5;
                                            (v.value = s > i ? i : s),
                                              Ml().hiddenSideBar
                                                ? (m.value = t.clientY)
                                                : (m.value = t.clientY - 40),
                                              re(() => {
                                                o.value = !0;
                                              });
                                          })(e, t),
                                        ["prevent"]
                                      ),
                                      onMouseenter: te(
                                        (e) => D(z)(t),
                                        ["prevent"]
                                      ),
                                      onMouseleave: te(
                                        (e) => D(A)(t),
                                        ["prevent"]
                                      ),
                                      onClick: (t) =>
                                        (function (e) {
                                          const { name: t, path: l } = e;
                                          t
                                            ? e.query
                                              ? a.push({
                                                  name: t,
                                                  query: e.query
                                                })
                                              : e.params
                                              ? a.push({
                                                  name: t,
                                                  params: e.params
                                                })
                                              : a.push({ name: t })
                                            : a.push({ path: l });
                                        })(e)
                                    },
                                    [
                                      "chrome" !== D(f)
                                        ? ($(),
                                          O(
                                            J,
                                            { key: 0 },
                                            [
                                              G(
                                                "span",
                                                Ll,
                                                le(e.meta.title),
                                                1
                                              ),
                                              !D(y)(e) &&
                                              (D(_)(e, t) ||
                                                (t === D(b) && 0 !== t))
                                                ? ($(),
                                                  O(
                                                    "span",
                                                    {
                                                      key: 0,
                                                      class: "el-icon-close",
                                                      onClick: te(
                                                        (t) => ve(e),
                                                        ["stop"]
                                                      )
                                                    },
                                                    [
                                                      K(
                                                        s,
                                                        { icon: D(n) },
                                                        null,
                                                        8,
                                                        ["icon"]
                                                      )
                                                    ],
                                                    8,
                                                    Hl
                                                  ))
                                                : ae("", !0),
                                              "card" !== D(f)
                                                ? ($(),
                                                  O(
                                                    "span",
                                                    {
                                                      key: 1,
                                                      ref_for: !0,
                                                      ref: "schedule" + t,
                                                      class: ee([D(S)(e)])
                                                    },
                                                    null,
                                                    2
                                                  ))
                                                : ae("", !0)
                                            ],
                                            64
                                          ))
                                        : ($(),
                                          O("div", Bl, [
                                            G("div", Dl, [K(El)]),
                                            G("span", $l, le(e.meta.title), 1),
                                            D(y)(e) || 0 === t
                                              ? ae("", !0)
                                              : ($(),
                                                O(
                                                  "span",
                                                  {
                                                    key: 0,
                                                    class: "chrome-close-btn",
                                                    onClick: te(
                                                      (t) => ve(e),
                                                      ["stop"]
                                                    )
                                                  },
                                                  [
                                                    K(
                                                      s,
                                                      { icon: D(n) },
                                                      null,
                                                      8,
                                                      ["icon"]
                                                    )
                                                  ],
                                                  8,
                                                  Ol
                                                )),
                                            Fl
                                          ]))
                                    ],
                                    42,
                                    ql
                                  )
                                )
                              ),
                              128
                            ))
                          ],
                          4
                        )
                      ],
                      34
                    ),
                    X(
                      G(
                        "span",
                        Nl,
                        [
                          K(
                            s,
                            {
                              icon: D(vt),
                              onClick: t[1] || (t[1] = (e) => pe(-200))
                            },
                            null,
                            8,
                            ["icon"]
                          )
                        ],
                        512
                      ),
                      [[Y, D(H)]]
                    ),
                    K(
                      ie,
                      { name: "el-zoom-in-top" },
                      {
                        default: ne(() => [
                          X(
                            ($(),
                            O(
                              "ul",
                              {
                                ref_key: "contextmenuRef",
                                ref: L,
                                key: Math.random(),
                                style: Q(D(T)),
                                class: "contextmenu"
                              },
                              [
                                ($(!0),
                                O(
                                  J,
                                  null,
                                  Z(
                                    D(h).slice(0, 6),
                                    (e, t) => (
                                      $(),
                                      O(
                                        "div",
                                        {
                                          key: t,
                                          style: {
                                            display: "flex",
                                            "align-items": "center"
                                          }
                                        },
                                        [
                                          e.show
                                            ? ($(),
                                              O(
                                                "li",
                                                {
                                                  key: 0,
                                                  onClick: (l) =>
                                                    (function (e, t) {
                                                      M(), fe(e, t, I.value);
                                                    })(t, e)
                                                },
                                                [
                                                  K(
                                                    s,
                                                    { icon: e.icon },
                                                    null,
                                                    8,
                                                    ["icon"]
                                                  ),
                                                  oe(" " + le(e.text), 1)
                                                ],
                                                8,
                                                Ul
                                              ))
                                            : ae("", !0)
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                ))
                              ],
                              4
                            )),
                            [[Y, D(o)]]
                          )
                        ]),
                        _: 1
                      }
                    ),
                    K(
                      x,
                      {
                        trigger: "click",
                        placement: "bottom-end",
                        onCommand: ge
                      },
                      {
                        dropdown: ne(() => [
                          K(g, null, {
                            default: ne(() => [
                              ($(!0),
                              O(
                                J,
                                null,
                                Z(
                                  D(h),
                                  (e, t) => (
                                    $(),
                                    se(
                                      u,
                                      {
                                        key: t,
                                        command: { key: t, item: e },
                                        divided: e.divided,
                                        disabled: e.disabled
                                      },
                                      {
                                        default: ne(() => [
                                          K(s, { icon: e.icon }, null, 8, [
                                            "icon"
                                          ]),
                                          oe(" " + le(e.text), 1)
                                        ]),
                                        _: 2
                                      },
                                      1032,
                                      ["command", "divided", "disabled"]
                                    )
                                  )
                                ),
                                128
                              ))
                            ]),
                            _: 1
                          })
                        ]),
                        default: ne(() => [
                          G("span", Wl, [
                            K(
                              s,
                              { icon: D(ft), class: "dark:text-white" },
                              null,
                              8,
                              ["icon"]
                            )
                          ])
                        ]),
                        _: 1
                      }
                    )
                  ],
                  512
                ));
          }
        );
      }
    }),
    [["__scopeId", "data-v-7006f636"]]
  );
const Yl = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    "aria-hidden": "true",
    class: "iconify iconify--ant-design",
    viewBox: "0 0 1024 1024"
  },
  Gl = [
    G(
      "path",
      {
        fill: "currentColor",
        d: "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8"
      },
      null,
      -1
    )
  ];
const Kl = {
    render: function (e, t) {
      return $(), O("svg", Yl, [...Gl]);
    }
  },
  Ql = ["onMouseenter"],
  Jl = { class: "result-item-title" },
  Zl = wl(
    N({
      __name: "SearchResult",
      props: { value: {}, options: {} },
      emits: ["update:value", "enter"],
      setup(e, { expose: t, emit: l }) {
        const a = P(),
          n = P(),
          o = l,
          i = B(),
          s = e,
          r = q(() => (e) => ({
            background:
              (null == e ? void 0 : e.path) === c.value
                ? jt().epThemeColor
                : "",
            color: e.path === c.value ? "#fff" : "",
            fontSize: e.path === c.value ? "16px" : "14px"
          })),
          c = q({
            get: () => s.value,
            set(e) {
              o("update:value", e);
            }
          });
        function d() {
          o("enter");
        }
        function p() {
          n.value = window.innerHeight - window.innerHeight / 10 - 140;
        }
        return (
          sl(a, p),
          H(() => {
            p();
          }),
          t({
            handleScroll: function (e) {
              var t;
              const l =
                null == (t = null == i ? void 0 : i.proxy)
                  ? void 0
                  : t.$refs[`resultItemRef${e}`];
              if (!l) return 0;
              const a = l[0].offsetTop + 128;
              return a > n.value ? a - n.value : 0;
            }
          }),
          (e, t) => (
            $(),
            O(
              "div",
              { ref_key: "resultRef", ref: a, class: "result" },
              [
                ($(!0),
                O(
                  J,
                  null,
                  Z(e.options, (e, t) => {
                    var l, a;
                    return (
                      $(),
                      O(
                        "div",
                        {
                          key: e.path,
                          ref_for: !0,
                          ref: "resultItemRef" + t,
                          class: "result-item dark:bg-[#1d1d1d]",
                          style: Q(D(r)(e)),
                          onClick: d,
                          onMouseenter: (t) =>
                            (function (e) {
                              return u(this, null, function* () {
                                c.value = e.path;
                              });
                            })(e)
                        },
                        [
                          ($(),
                          se(
                            pe(D(Pt)(null == (l = e.meta) ? void 0 : l.icon))
                          )),
                          G(
                            "span",
                            Jl,
                            le(null == (a = e.meta) ? void 0 : a.title),
                            1
                          ),
                          K(D(Kl))
                        ],
                        44,
                        Ql
                      )
                    );
                  }),
                  128
                ))
              ],
              512
            )
          )
        );
      }
    }),
    [["__scopeId", "data-v-7a518fda"]]
  ),
  ea = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    "aria-hidden": "true",
    class: "iconify iconify--mdi",
    viewBox: "0 0 24 24"
  },
  ta = [
    G(
      "path",
      {
        fill: "currentColor",
        d: "M1 7h6v2H3v2h4v2H3v2h4v2H1zm10 0h4v2h-4v2h2a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2H9v-2h4v-2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2m8 0h2a2 2 0 0 1 2 2v1h-2V9h-2v6h2v-1h2v1c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2"
      },
      null,
      -1
    )
  ];
const la = {
    render: function (e, t) {
      return $(), O("svg", ea, [...ta]);
    }
  },
  aa = { class: "search-footer text-[#333] dark:text-white" },
  na = { class: "search-footer-item" },
  oa = { class: "search-footer-item" },
  ia = { class: "search-footer-item" },
  sa = { key: 0, class: "search-footer-total" },
  ra = wl(
    N({
      __name: "SearchFooter",
      props: { total: { default: 0 } },
      setup(e) {
        const { device: t } = qt();
        return (e, l) => {
          const a = Et;
          return (
            $(),
            O("div", aa, [
              G("span", na, [K(D(Kl), { class: "icon" }), oe(" 确认 ")]),
              G("span", oa, [
                K(a, { icon: D(yt), class: "icon" }, null, 8, ["icon"]),
                K(a, { icon: D(xt), class: "icon" }, null, 8, ["icon"]),
                oe(" 切换 ")
              ]),
              G("span", ia, [K(D(la), { class: "icon" }), oe(" 关闭 ")]),
              "mobile" !== D(t) && e.total > 0
                ? ($(), O("p", sa, " 共" + le(`${e.total}`), 1))
                : ae("", !0)
            ])
          );
        };
      }
    }),
    [["__scopeId", "data-v-d3f3fd81"]]
  ),
  ua = { class: "history-item-title" },
  ca = wl(
    N({
      __name: "SearchHistoryItem",
      props: { item: {} },
      emits: ["collectItem", "deleteItem"],
      setup(e, { emit: t }) {
        const l = t;
        return (e, t) => {
          var a, n;
          const o = Et;
          return (
            $(),
            O(
              J,
              null,
              [
                ($(),
                se(pe(D(Pt)(null == (a = e.item.meta) ? void 0 : a.icon)))),
                G(
                  "span",
                  ua,
                  le(null == (n = e.item.meta) ? void 0 : n.title),
                  1
                ),
                X(
                  K(
                    o,
                    {
                      icon: D(bt),
                      class: "w-[18px] h-[18px] mr-2 hover:text-[#d7d5d4]",
                      onClick:
                        t[0] ||
                        (t[0] = te(
                          (t) => {
                            return (a = e.item), void l("collectItem", a);
                            var a;
                          },
                          ["stop"]
                        ))
                    },
                    null,
                    8,
                    ["icon"]
                  ),
                  [[Y, "history" === e.item.type]]
                ),
                K(
                  o,
                  {
                    icon: D(rt),
                    class:
                      "w-[18px] h-[18px] hover:text-[#d7d5d4] cursor-pointer",
                    onClick:
                      t[1] ||
                      (t[1] = te(
                        (t) => {
                          return (a = e.item), void l("deleteItem", a);
                          var a;
                        },
                        ["stop"]
                      ))
                  },
                  null,
                  8,
                  ["icon"]
                )
              ],
              64
            )
          );
        };
      }
    }),
    [["__scopeId", "data-v-5e6f9a0b"]]
  ),
  da = ["onMouseenter"],
  pa = { class: "collect-container" },
  ha = ["onMouseenter"],
  ma = wl(
    N({
      __name: "SearchHistory",
      props: { value: {}, options: {} },
      emits: ["update:value", "enter", "collect", "delete", "drag"],
      setup(e, { expose: t, emit: l }) {
        const a = P(),
          n = P(),
          o = P(!1),
          i = l,
          s = B(),
          r = e,
          c = q(() => (e) => ({
            background:
              (null == e ? void 0 : e.path) === p.value
                ? jt().epThemeColor
                : "",
            color: e.path === p.value ? "#fff" : "",
            fontSize: e.path === p.value ? "16px" : "14px"
          })),
          d = q(() => ({ color: jt().epThemeColor, fontWeight: 500 })),
          p = q({
            get: () => r.value,
            set(e) {
              i("update:value", e);
            }
          });
        U(
          () => r.value,
          (e) => {
            e && o.value && rl(100).then(() => (o.value = !1));
          }
        );
        const h = q(() => r.options.filter((e) => "history" === e.type)),
          m = q(() => r.options.filter((e) => "collect" === e.type));
        function v(e) {
          i("collect", e);
        }
        function f(e) {
          (o.value = !0), i("delete", e);
        }
        function g(e) {
          return u(this, null, function* () {
            o.value || (p.value = e.path);
          });
        }
        function y() {
          i("enter");
        }
        function x() {
          n.value = window.innerHeight - window.innerHeight / 10 - 140;
        }
        sl(a, x);
        const b = (e) => {
          i("drag", { oldIndex: e.oldIndex, newIndex: e.newIndex });
        };
        let k = null;
        return (
          U(
            m,
            (e) => {
              e.length > 1 &&
                re(() => {
                  const e = document.querySelector(".collect-container");
                  e &&
                    !k &&
                    ((k = Cl.create(e, {
                      animation: 160,
                      onStart: (e) => {
                        e.item.style.cursor = "move";
                      },
                      onEnd: (e) => {
                        e.item.style.cursor = "pointer";
                      },
                      onUpdate: b
                    })),
                    x());
                });
            },
            { deep: !0, immediate: !0 }
          ),
          t({
            handleScroll: function (e) {
              var t;
              const l =
                null == (t = null == s ? void 0 : s.proxy)
                  ? void 0
                  : t.$refs[`historyItemRef${e}`];
              if (!l) return 0;
              const a = (cl(l) ? l[0] : l).offsetTop + 128;
              return a > n.value ? a - n.value : 0;
            }
          }),
          (e, t) => (
            $(),
            O(
              "div",
              { ref_key: "historyRef", ref: a, class: "history" },
              [
                D(h).length
                  ? ($(),
                    O(
                      J,
                      { key: 0 },
                      [
                        G("div", { style: Q(D(d)) }, "搜索历史", 4),
                        ($(!0),
                        O(
                          J,
                          null,
                          Z(
                            D(h),
                            (e, t) => (
                              $(),
                              O(
                                "div",
                                {
                                  key: e.path,
                                  ref_for: !0,
                                  ref: "historyItemRef" + t,
                                  class: "history-item dark:bg-[#1d1d1d]",
                                  style: Q(D(c)(e)),
                                  onClick: y,
                                  onMouseenter: (t) => g(e)
                                },
                                [
                                  K(
                                    ca,
                                    {
                                      item: e,
                                      onDeleteItem: f,
                                      onCollectItem: v
                                    },
                                    null,
                                    8,
                                    ["item"]
                                  )
                                ],
                                44,
                                da
                              )
                            )
                          ),
                          128
                        ))
                      ],
                      64
                    ))
                  : ae("", !0),
                D(m).length
                  ? ($(),
                    O(
                      J,
                      { key: 1 },
                      [
                        G(
                          "div",
                          { style: Q(D(d)) },
                          le(
                            "收藏" + (D(m).length > 1 ? "（可拖拽排序）" : "")
                          ),
                          5
                        ),
                        G("div", pa, [
                          ($(!0),
                          O(
                            J,
                            null,
                            Z(
                              D(m),
                              (e, t) => (
                                $(),
                                O(
                                  "div",
                                  {
                                    key: e.path,
                                    ref_for: !0,
                                    ref: "historyItemRef" + (t + D(h).length),
                                    class: "history-item dark:bg-[#1d1d1d]",
                                    style: Q(D(c)(e)),
                                    onClick: y,
                                    onMouseenter: (t) => g(e)
                                  },
                                  [
                                    K(
                                      ca,
                                      { item: e, onDeleteItem: f },
                                      null,
                                      8,
                                      ["item"]
                                    )
                                  ],
                                  44,
                                  ha
                                )
                              )
                            ),
                            128
                          ))
                        ])
                      ],
                      64
                    ))
                  : ae("", !0)
              ],
              512
            )
          )
        );
      }
    }),
    [["__scopeId", "data-v-069886f3"]]
  ),
  va = { class: "search-content" },
  fa = "history",
  ga = "menu-search-history",
  ya = "menu-search-collect",
  xa = wl(
    N({
      __name: "SearchModal",
      props: { value: { type: Boolean } },
      emits: ["update:value"],
      setup(e, { emit: t }) {
        const { device: l } = qt(),
          a = t,
          n = e,
          { router: o } = Ut();
        let i = P("zh");
        const u = P(""),
          c = P(),
          d = P(),
          p = P(),
          g = P(""),
          y = P(""),
          x = he([]),
          b = he([]),
          k = bl(function () {
            var e;
            const t = (function (e) {
              const t = [];
              function l(e) {
                e.forEach((e) => {
                  t.push(e), e.children && l(e.children);
                });
              }
              return l(e), t;
            })(C.value);
            (x.value = t.filter((e) => {
              var t, l;
              return (
                !!u.value &&
                ((null == (t = e.meta)
                  ? void 0
                  : t.title
                      .toLocaleLowerCase()
                      .includes(u.value.toLocaleLowerCase().trim())) ||
                  ("zh" === i.value &&
                    !ul(
                      _l(
                        null == (l = e.meta)
                          ? void 0
                          : l.title.toLocaleLowerCase(),
                        u.value.toLocaleLowerCase().trim()
                      )
                    )))
              );
            })),
              (g.value =
                (null == (e = x.value) ? void 0 : e.length) > 0
                  ? x.value[0].path
                  : "");
          }, 300),
          w = Nt().MenuSearchHistory,
          _ = P(null),
          C = q(() => dl(Kt().wholeMenus)),
          I = q({
            get: () => n.value,
            set(e) {
              a("update:value", e);
            }
          });
        U(
          () => n.value,
          (e) => {
            e && B();
          }
        );
        const S = q(() => u.value && x.value.length > 0),
          T = q(() => !u.value && b.value.length > 0),
          M = q(
            () =>
              (!u.value && 0 === b.value.length) ||
              (u.value && 0 === x.value.length)
          );
        function V(e) {
          return ll().getItem(e) || [];
        }
        function z(e, t) {
          ll().setItem(e, t);
        }
        function A() {
          (I.value = !1),
            setTimeout(() => {
              (x.value = []), (y.value = ""), (u.value = "");
            }, 200);
        }
        function R() {
          const e = x.value.length > 0;
          return {
            options: e ? x.value : b.value,
            currentPath: e ? g.value : y.value,
            isResultOptions: e
          };
        }
        function E(e, t) {
          t ? (g.value = x.value[e].path) : (y.value = b.value[e].path),
            (function (e) {
              const t = (x.value.length ? c.value : d.value).handleScroll(e);
              p.value.setScrollTop(t);
            })(e);
        }
        function j() {
          const { options: e, currentPath: t, isResultOptions: l } = R();
          if (0 === e.length || "" === t) return;
          const a = e.findIndex((e) => e.path === t);
          -1 !== a &&
            (l
              ? (function () {
                  const { path: e, meta: t } = x.value.find(
                      (e) => e.path === g.value
                    ),
                    l = V(ga),
                    a = V(ya).some((t) => t.path === e),
                    n = l.findIndex((t) => t.path === e);
                  a ||
                    (-1 !== n && l.splice(n, 1),
                    l.length >= w && l.pop(),
                    l.unshift({ path: e, meta: t, type: fa }),
                    ll().setItem(ga, l));
                })()
              : (function () {
                  let e = V(ga);
                  const t = e.findIndex((e) => e.path === y.value);
                  if (-1 !== t) {
                    const [l] = e.splice(t, 1);
                    e.unshift(l), z(ga, e);
                  }
                })(),
            o.push(e[a].path),
            A());
        }
        function L(e) {
          const t = e.type === fa ? ga : ya;
          let l = V(t);
          (l = l.filter((t) => t.path !== e.path)), z(t, l), B();
        }
        function H(e) {
          let t = V(ga),
            l = V(ya);
          (t = t.filter((t) => t.path !== e.path)),
            z(ga, t),
            l.some((t) => t.path === e.path) ||
              (l.unshift(r(s({}, e), { type: "collect" })), z(ya, l)),
            B();
        }
        function B() {
          var e;
          const t = V(ga),
            l = V(ya);
          (b.value = [...t, ...l]),
            (y.value = null == (e = b.value[0]) ? void 0 : e.path);
        }
        function O(e) {
          const t = V(ya),
            [l] = t.splice(e.oldIndex, 1);
          t.splice(e.newIndex, 0, l),
            ll().setItem(ya, t),
            (b.value = [...V(ga), ...V(ya)]),
            (y.value = l.path);
        }
        return (
          kl("Enter", j),
          kl("ArrowUp", function () {
            const { options: e, currentPath: t, isResultOptions: l } = R();
            if (0 === e.length) return;
            E((e.findIndex((e) => e.path === t) - 1 + e.length) % e.length, l);
          }),
          kl("ArrowDown", function () {
            const { options: e, currentPath: t, isResultOptions: l } = R();
            if (0 === e.length) return;
            E((e.findIndex((e) => e.path === t) + 1) % e.length, l);
          }),
          (e, t) => {
            const a = Et,
              n = h,
              o = m,
              i = v,
              s = f;
            return (
              $(),
              se(
                s,
                {
                  modelValue: D(I),
                  "onUpdate:modelValue":
                    t[3] || (t[3] = (e) => (me(I) ? (I.value = e) : null)),
                  top: "5vh",
                  class: "pure-search-dialog",
                  "show-close": !1,
                  width: "mobile" === D(l) ? "80vw" : "40vw",
                  "before-close": A,
                  style: { borderRadius: "6px" },
                  "append-to-body": "",
                  onOpened: t[4] || (t[4] = (e) => D(_).focus()),
                  onClosed: t[5] || (t[5] = (e) => D(_).blur())
                },
                {
                  footer: ne(() => [
                    K(ra, { total: D(x).length }, null, 8, ["total"])
                  ]),
                  default: ne(() => [
                    K(
                      n,
                      {
                        ref_key: "inputRef",
                        ref: _,
                        modelValue: D(u),
                        "onUpdate:modelValue":
                          t[0] ||
                          (t[0] = (e) => (me(u) ? (u.value = e) : null)),
                        size: "large",
                        clearable: "",
                        placeholder: "搜索菜单（支持拼音搜索）",
                        onInput: D(k)
                      },
                      {
                        prefix: ne(() => [
                          K(
                            a,
                            {
                              icon: D(Ue),
                              class: "text-primary w-[24px] h-[24px]"
                            },
                            null,
                            8,
                            ["icon"]
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ["modelValue", "onInput"]
                    ),
                    G("div", va, [
                      K(
                        i,
                        {
                          ref_key: "scrollbarRef",
                          ref: p,
                          "max-height": "calc(90vh - 140px)"
                        },
                        {
                          default: ne(() => [
                            D(M)
                              ? ($(),
                                se(o, { key: 0, description: "暂无搜索结果" }))
                              : ae("", !0),
                            D(T)
                              ? ($(),
                                se(
                                  ma,
                                  {
                                    key: 1,
                                    ref_key: "historyRef",
                                    ref: d,
                                    value: D(y),
                                    "onUpdate:value":
                                      t[1] ||
                                      (t[1] = (e) =>
                                        me(y) ? (y.value = e) : null),
                                    options: D(b),
                                    onClick: j,
                                    onDelete: L,
                                    onCollect: H,
                                    onDrag: O
                                  },
                                  null,
                                  8,
                                  ["value", "options"]
                                ))
                              : ae("", !0),
                            D(S)
                              ? ($(),
                                se(
                                  Zl,
                                  {
                                    key: 2,
                                    ref_key: "resultRef",
                                    ref: c,
                                    value: D(g),
                                    "onUpdate:value":
                                      t[2] ||
                                      (t[2] = (e) =>
                                        me(g) ? (g.value = e) : null),
                                    options: D(x),
                                    onClick: j
                                  },
                                  null,
                                  8,
                                  ["value", "options"]
                                ))
                              : ae("", !0)
                          ]),
                          _: 1
                        },
                        512
                      )
                    ])
                  ]),
                  _: 1
                },
                8,
                ["modelValue", "width"]
              )
            );
          }
        );
      }
    }),
    [["__scopeId", "data-v-af4e87af"]]
  ),
  ba = N({
    __name: "index",
    setup(e) {
      const { bool: t, toggle: l } = (function (e = !1) {
        const t = P(e);
        function l(e) {
          t.value = e;
        }
        return {
          bool: t,
          setBool: l,
          setTrue: function () {
            l(!0);
          },
          setFalse: function () {
            l(!1);
          },
          toggle: function () {
            l(!t.value);
          }
        };
      })();
      function a() {
        l();
      }
      return (e, l) => {
        const n = Et;
        return (
          $(),
          O("div", null, [
            G(
              "div",
              {
                class:
                  "search-container w-[40px] h-[48px] flex-c cursor-pointer navbar-bg-hover",
                onClick: a
              },
              [K(n, { icon: "ri:search-line" })]
            ),
            K(
              xa,
              {
                value: D(t),
                "onUpdate:value":
                  l[0] || (l[0] = (e) => (me(t) ? (t.value = e) : null))
              },
              null,
              8,
              ["value"]
            )
          ])
        );
      };
    }
  }),
  ka = [
    { key: "1", name: "通知", list: [], emptyText: "暂无通知" },
    {
      key: "2",
      name: "消息",
      list: [
        {
          avatar: "https://xiaoxian521.github.io/hyperlink/svg/smile1.svg",
          title: "小铭 评论了你",
          description: "诚在于心，信在于行，诚信在于心行合一。",
          datetime: "今天",
          type: "2"
        },
        {
          avatar: "https://xiaoxian521.github.io/hyperlink/svg/smile2.svg",
          title: "李白 回复了你",
          description: "长风破浪会有时，直挂云帆济沧海。",
          datetime: "昨天",
          type: "2"
        },
        {
          avatar: "https://xiaoxian521.github.io/hyperlink/svg/smile5.svg",
          title: "标题",
          description:
            "请将鼠标移动到此处，以便测试超长的消息在此处将如何处理。本例中设置的描述最大行数为2，超过2行的描述内容将被省略并且可以通过tooltip查看完整内容",
          datetime: "时间",
          type: "2"
        }
      ],
      emptyText: "暂无消息"
    },
    {
      key: "3",
      name: "待办",
      list: [
        {
          avatar: "",
          title: "第三方紧急代码变更",
          description:
            "小林提交于 2024-05-10，需在 2024-05-11 前完成代码变更任务",
          datetime: "",
          extra: "马上到期",
          status: "danger",
          type: "3"
        },
        {
          avatar: "",
          title: "版本发布",
          description: "指派小铭于 2024-06-18 前完成更新并发布",
          datetime: "",
          extra: "已耗时 8 天",
          status: "warning",
          type: "3"
        },
        {
          avatar: "",
          title: "新功能开发",
          description: "开发多租户管理",
          datetime: "",
          extra: "进行中",
          type: "3"
        },
        {
          avatar: "",
          title: "任务名称",
          description: "任务需要在 2030-10-30 10:00 前启动",
          datetime: "",
          extra: "未开始",
          status: "info",
          type: "3"
        }
      ],
      emptyText: "暂无待办"
    }
  ],
  wa = {
    class:
      "notice-container border-b-[1px] border-solid border-[#f0f0f0] dark:border-[#303030]"
  },
  _a = { class: "notice-container-text" },
  Ca = { class: "notice-text-title text-[#000000d9] dark:text-white" },
  Ia = { class: "notice-text-datetime text-[#00000073] dark:text-white" },
  Sa = wl(
    N({
      __name: "NoticeItem",
      props: { noticeItem: { type: Object, default: () => {} } },
      setup(e) {
        const t = P(null),
          l = P(!1),
          a = P(null),
          n = P(!1),
          { tooltipEffect: o } = qt(),
          i = pl();
        function s() {
          re(() => {
            var e, a;
            (null == (e = t.value) ? void 0 : e.scrollWidth) >
            (null == (a = t.value) ? void 0 : a.clientWidth)
              ? (l.value = !0)
              : (l.value = !1);
          });
        }
        return (r, u) => {
          var c, d;
          const p = g,
            h = y,
            m = x;
          return (
            $(),
            O("div", wa, [
              e.noticeItem.avatar
                ? ($(),
                  se(
                    p,
                    {
                      key: 0,
                      size: 30,
                      src: e.noticeItem.avatar,
                      class: "notice-container-avatar"
                    },
                    null,
                    8,
                    ["src"]
                  ))
                : ae("", !0),
              G("div", _a, [
                G("div", Ca, [
                  K(
                    h,
                    {
                      "popper-class": "notice-title-popper",
                      effect: D(o),
                      disabled: !D(l),
                      content: e.noticeItem.title,
                      placement: "top-start",
                      enterable: !D(i)
                    },
                    {
                      default: ne(() => [
                        G(
                          "div",
                          {
                            ref_key: "titleRef",
                            ref: t,
                            class: "notice-title-content",
                            onMouseover: s
                          },
                          le(e.noticeItem.title),
                          545
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ["effect", "disabled", "content", "enterable"]
                  ),
                  (null == (c = e.noticeItem) ? void 0 : c.extra)
                    ? ($(),
                      se(
                        m,
                        {
                          key: 0,
                          type: null == (d = e.noticeItem) ? void 0 : d.status,
                          size: "small",
                          class: "notice-title-extra"
                        },
                        {
                          default: ne(() => {
                            var t;
                            return [
                              oe(
                                le(
                                  null == (t = e.noticeItem) ? void 0 : t.extra
                                ),
                                1
                              )
                            ];
                          }),
                          _: 1
                        },
                        8,
                        ["type"]
                      ))
                    : ae("", !0)
                ]),
                K(
                  h,
                  {
                    "popper-class": "notice-title-popper",
                    effect: D(o),
                    disabled: !D(n),
                    content: e.noticeItem.description,
                    placement: "top-start"
                  },
                  {
                    default: ne(() => [
                      G(
                        "div",
                        {
                          ref_key: "descriptionRef",
                          ref: a,
                          class: "notice-text-description",
                          onMouseover:
                            u[0] ||
                            (u[0] = (t) =>
                              (function (e, t) {
                                const l = document.createElement("span");
                                (l.innerText = t),
                                  (l.className = "getDescriptionWidth"),
                                  document.querySelector("body").appendChild(l);
                                const a = document.querySelector(
                                  ".getDescriptionWidth"
                                ).offsetWidth;
                                document
                                  .querySelector(".getDescriptionWidth")
                                  .remove();
                                const o = e.target.offsetWidth;
                                n.value = a > 2 * o;
                              })(t, e.noticeItem.description))
                        },
                        le(e.noticeItem.description),
                        545
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ["effect", "disabled", "content"]
                ),
                G("div", Ia, le(e.noticeItem.datetime), 1)
              ])
            ])
          );
        };
      }
    }),
    [["__scopeId", "data-v-73299f45"]]
  ),
  Ta = { key: 0 },
  Ma = N({
    __name: "NoticeList",
    props: {
      list: { type: Array, default: () => [] },
      emptyText: { type: String, default: "" }
    },
    setup: (e) => (t, l) => {
      const a = m;
      return e.list.length
        ? ($(),
          O("div", Ta, [
            ($(!0),
            O(
              J,
              null,
              Z(
                e.list,
                (e, t) => (
                  $(),
                  se(Sa, { key: t, noticeItem: e }, null, 8, ["noticeItem"])
                )
              ),
              128
            ))
          ]))
        : ($(),
          se(a, { key: 1, description: e.emptyText }, null, 8, [
            "description"
          ]));
    }
  }),
  Va = { class: "header-notice-icon" },
  za = { key: 1 },
  Aa = { class: "noticeList-container" },
  Ra = wl(
    N({
      __name: "index",
      setup(e) {
        var t;
        const l = P(0),
          a = P(ka),
          n = P(null == (t = ka[0]) ? void 0 : t.key);
        a.value.map((e) => (l.value += e.list.length));
        const o = q(
          () => (e) => e.name + (e.list.length > 0 ? `(${e.list.length})` : "")
        );
        return (e, t) => {
          const i = Et,
            s = b,
            r = m,
            u = v,
            c = k,
            h = w,
            f = d,
            g = p;
          return (
            $(),
            se(
              g,
              { trigger: "click", placement: "bottom-end" },
              {
                dropdown: ne(() => [
                  K(f, null, {
                    default: ne(() => [
                      K(
                        h,
                        {
                          modelValue: D(n),
                          "onUpdate:modelValue":
                            t[0] ||
                            (t[0] = (e) => (me(n) ? (n.value = e) : null)),
                          stretch: !0,
                          class: "dropdown-tabs",
                          style: Q({
                            width: 0 === D(a).length ? "200px" : "330px"
                          })
                        },
                        {
                          default: ne(() => [
                            0 === D(a).length
                              ? ($(),
                                se(r, {
                                  key: 0,
                                  description: "暂无消息",
                                  "image-size": 60
                                }))
                              : ($(),
                                O("span", za, [
                                  ($(!0),
                                  O(
                                    J,
                                    null,
                                    Z(
                                      D(a),
                                      (e) => (
                                        $(),
                                        se(
                                          c,
                                          {
                                            key: e.key,
                                            label: D(o)(e),
                                            name: `${e.key}`
                                          },
                                          {
                                            default: ne(() => [
                                              K(
                                                u,
                                                { "max-height": "330px" },
                                                {
                                                  default: ne(() => [
                                                    G("div", Aa, [
                                                      K(
                                                        Ma,
                                                        {
                                                          list: e.list,
                                                          emptyText: e.emptyText
                                                        },
                                                        null,
                                                        8,
                                                        ["list", "emptyText"]
                                                      )
                                                    ])
                                                  ]),
                                                  _: 2
                                                },
                                                1024
                                              )
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ["label", "name"]
                                        )
                                      )
                                    ),
                                    128
                                  ))
                                ]))
                          ]),
                          _: 1
                        },
                        8,
                        ["modelValue", "style"]
                      )
                    ]),
                    _: 1
                  })
                ]),
                default: ne(() => [
                  G(
                    "span",
                    {
                      class: ee([
                        "dropdown-badge",
                        "navbar-bg-hover",
                        "select-none",
                        0 !== Number(D(l)) && "mr-[10px]"
                      ])
                    },
                    [
                      K(
                        s,
                        { value: 0 === Number(D(l)) ? "" : D(l), max: 99 },
                        {
                          default: ne(() => [
                            G("span", Va, [
                              K(i, { icon: D(kt) }, null, 8, ["icon"])
                            ])
                          ]),
                          _: 1
                        },
                        8,
                        ["value"]
                      )
                    ],
                    2
                  )
                ]),
                _: 1
              }
            )
          );
        };
      }
    }),
    [["__scopeId", "data-v-7a35e482"]]
  ),
  Ea = { key: 0, class: "flex justify-center items-center" },
  ja = N({
    __name: "SidebarExtraIcon",
    props: { extraIcon: { type: String, default: "" } },
    setup(e) {
      let t = (e) => de(e);
      return (l, a) =>
        e.extraIcon
          ? ($(),
            O("div", Ea, [
              ($(),
              se(pe(D(Pt)(D(t)(e.extraIcon))), { class: "w-[30px] h-[30px]" }))
            ]))
          : ae("", !0);
    }
  }),
  Pa = N({
    __name: "SidebarFullScreen",
    setup(e) {
      const t = P(),
        { toggle: l, isFullscreen: a, Fullscreen: n, ExitFullscreen: o } = qt();
      return (
        (a.value = !!(
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement
        )),
        U(
          a,
          (e) => {
            t.value = e ? o : n;
          },
          { immediate: !0 }
        ),
        (e, a) => {
          const n = Et;
          return (
            $(),
            O(
              "span",
              {
                class: "fullscreen-icon navbar-bg-hover",
                onClick: a[0] || (a[0] = (...e) => D(l) && D(l)(...e))
              },
              [K(n, { icon: D(t) }, null, 8, ["icon"])]
            )
          );
        }
      );
    }
  }),
  qa = { key: 0, class: "horizontal-header" },
  La = { class: "select-none" },
  Ha = { class: "horizontal-header-right" },
  Ba = { class: "check-zh" },
  Da = { class: "check-en" },
  $a = { class: "el-dropdown-link navbar-bg-hover select-none" },
  Oa = ["src"],
  Fa = { key: 0, class: "dark:text-white" },
  Na = wl(
    N({
      __name: "NavMix",
      setup(e) {
        const t = P(),
          l = P(null);
        let a = (e) => de(e);
        const { route: n } = Ut(),
          { locale: o, translationCh: i, translationEn: s } = Jt(t),
          {
            device: r,
            logout: u,
            onPanel: h,
            resolvePath: m,
            username: v,
            userAvatar: f,
            getDivStyle: g,
            avatarsStyle: y,
            toAccountSettings: x,
            getDropdownItemStyle: b,
            getDropdownItemClass: k
          } = qt();
        function w(e) {
          var t, a, o;
          const i = Kt().wholeMenus,
            s = Zt(e, i)[0];
          l.value = ul(null == (t = n.meta) ? void 0 : t.activePath)
            ? null == (o = null == (a = el(s, i)) ? void 0 : a.children[0])
              ? void 0
              : o.path
            : n.meta.activePath;
        }
        return (
          H(() => {
            w(n.path);
          }),
          re(() => {
            var e;
            null == (e = t.value) || e.handleResize();
          }),
          U(
            () => [n.path, Kt().wholeMenus],
            () => {
              w(n.path);
            }
          ),
          (e, n) => {
            const w = _,
              S = C,
              T = Et,
              M = c,
              V = d,
              z = p,
              A = I;
            return "mobile" !== D(r)
              ? X(
                  ($(),
                  O("div", qa, [
                    K(
                      S,
                      {
                        ref_key: "menuRef",
                        ref: t,
                        router: "",
                        mode: "horizontal",
                        "popper-class": "pure-scrollbar",
                        class: "horizontal-header-menu",
                        "default-active": D(l)
                      },
                      {
                        default: ne(() => [
                          ($(!0),
                          O(
                            J,
                            null,
                            Z(
                              D(Kt)().wholeMenus,
                              (e) => (
                                $(),
                                se(
                                  w,
                                  { key: e.path, index: D(m)(e) || e.redirect },
                                  {
                                    title: ne(() => [
                                      D(a)(e.meta.icon)
                                        ? ($(),
                                          O(
                                            "div",
                                            {
                                              key: 0,
                                              class: ee([
                                                "sub-menu-icon",
                                                e.meta.icon
                                              ])
                                            },
                                            [
                                              ($(),
                                              se(
                                                pe(
                                                  D(Pt)(
                                                    e.meta && D(a)(e.meta.icon)
                                                  )
                                                )
                                              ))
                                            ],
                                            2
                                          ))
                                        : ae("", !0),
                                      G(
                                        "div",
                                        { style: Q(D(g)) },
                                        [
                                          G("span", La, le(e.meta.title), 1),
                                          K(
                                            ja,
                                            { extraIcon: e.meta.extraIcon },
                                            null,
                                            8,
                                            ["extraIcon"]
                                          )
                                        ],
                                        4
                                      )
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ["index"]
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        _: 1
                      },
                      8,
                      ["default-active"]
                    ),
                    G("div", Ha, [
                      K(ba, { id: "header-search" }),
                      K(
                        z,
                        { id: "header-translation", trigger: "click" },
                        {
                          dropdown: ne(() => [
                            K(
                              V,
                              { class: "translation" },
                              {
                                default: ne(() => [
                                  K(
                                    M,
                                    {
                                      style: Q(D(b)(D(o), "zh")),
                                      class: ee([
                                        "dark:!text-white",
                                        D(k)(D(o), "zh")
                                      ]),
                                      onClick: D(i)
                                    },
                                    {
                                      default: ne(() => [
                                        X(
                                          G(
                                            "span",
                                            Ba,
                                            [
                                              K(T, { icon: D(wt) }, null, 8, [
                                                "icon"
                                              ])
                                            ],
                                            512
                                          ),
                                          [[Y, "zh" === D(o)]]
                                        ),
                                        oe(" 简体中文 ")
                                      ]),
                                      _: 1
                                    },
                                    8,
                                    ["style", "class", "onClick"]
                                  ),
                                  K(
                                    M,
                                    {
                                      style: Q(D(b)(D(o), "en")),
                                      class: ee([
                                        "dark:!text-white",
                                        D(k)(D(o), "en")
                                      ]),
                                      onClick: D(s)
                                    },
                                    {
                                      default: ne(() => [
                                        X(
                                          G(
                                            "span",
                                            Da,
                                            [
                                              K(T, { icon: D(wt) }, null, 8, [
                                                "icon"
                                              ])
                                            ],
                                            512
                                          ),
                                          [[Y, "en" === D(o)]]
                                        ),
                                        oe(" English ")
                                      ]),
                                      _: 1
                                    },
                                    8,
                                    ["style", "class", "onClick"]
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          default: ne(() => [
                            K(D(Lt), {
                              class:
                                "navbar-bg-hover w-[40px] h-[48px] p-[11px] cursor-pointer outline-none"
                            })
                          ]),
                          _: 1
                        }
                      ),
                      K(Pa, { id: "full-screen" }),
                      K(Ra, { id: "header-notice" }),
                      K(
                        z,
                        { trigger: "click" },
                        {
                          dropdown: ne(() => [
                            K(
                              M,
                              { onClick: D(x) },
                              {
                                default: ne(() => [
                                  K(
                                    T,
                                    { icon: D(_t), style: { margin: "5px" } },
                                    null,
                                    8,
                                    ["icon"]
                                  ),
                                  oe(" 账户设置 ")
                                ]),
                                _: 1
                              },
                              8,
                              ["onClick"]
                            ),
                            K(
                              V,
                              { class: "logout" },
                              {
                                default: ne(() => [
                                  K(
                                    M,
                                    { onClick: D(u) },
                                    {
                                      default: ne(() => [
                                        K(
                                          T,
                                          {
                                            icon: D(Ct),
                                            style: { margin: "5px" }
                                          },
                                          null,
                                          8,
                                          ["icon"]
                                        ),
                                        oe(" 退出系统 ")
                                      ]),
                                      _: 1
                                    },
                                    8,
                                    ["onClick"]
                                  )
                                ]),
                                _: 1
                              }
                            )
                          ]),
                          default: ne(() => [
                            G("span", $a, [
                              G(
                                "img",
                                { src: D(f), style: Q(D(y)) },
                                null,
                                12,
                                Oa
                              ),
                              D(v) ? ($(), O("p", Fa, le(D(v)), 1)) : ae("", !0)
                            ])
                          ]),
                          _: 1
                        }
                      ),
                      G(
                        "span",
                        {
                          class: "set-icon navbar-bg-hover",
                          title: "打开系统配置",
                          onClick: n[0] || (n[0] = (...e) => D(h) && D(h)(...e))
                        },
                        [K(T, { icon: D(Xe) }, null, 8, ["icon"])]
                      )
                    ])
                  ])),
                  [[A, 0 === D(Kt)().wholeMenus.length]]
                )
              : ae("", !0);
          }
        );
      }
    }),
    [["__scopeId", "data-v-a4818191"]]
  ),
  Ua = ["onClick"],
  Wa = N({
    __name: "SidebarBreadCrumb",
    setup(e) {
      const t = P([]),
        { route: l, router: a } = Ut(),
        n = a.options.routes,
        o = Xt().multiTags,
        i = () => {
          let e;
          Object.keys(l.query).length > 0
            ? o.forEach((t) => {
                il(l.query, null == t ? void 0 : t.query) && (e = de(t));
              })
            : Object.keys(l.params).length > 0
            ? o.forEach((t) => {
                il(l.params, null == t ? void 0 : t.params) && (e = de(t));
              })
            : (e = el(a.currentRoute.value.path, n));
          const i = Zt(a.currentRoute.value.name, n, "name"),
            s = [];
          i.forEach((e) => {
            "/" !== e && s.push(el(e, n));
          }),
            s.push(e),
            s.forEach((t, l) => {
              (null == e ? void 0 : e.query) ||
                (null == e ? void 0 : e.params) ||
                ((null == t ? void 0 : t.children) &&
                  t.children.forEach((e) => {
                    var a, n;
                    (null == (a = null == e ? void 0 : e.meta)
                      ? void 0
                      : a.title) ===
                      (null == (n = null == t ? void 0 : t.meta)
                        ? void 0
                        : n.title) && s.splice(l, 1);
                  }));
            }),
            (t.value = s.filter(
              (e) =>
                (null == e ? void 0 : e.meta) &&
                !1 !== (null == e ? void 0 : e.meta.title)
            ));
        };
      return (
        H(() => {
          i();
        }),
        U(
          () => l.path,
          () => {
            i();
          },
          { deep: !0 }
        ),
        (e, l) => {
          const n = S,
            o = T;
          return (
            $(),
            se(
              o,
              { class: "!leading-[50px] select-none", separator: "/" },
              {
                default: ne(() => [
                  K(
                    ve,
                    { name: "breadcrumb" },
                    {
                      default: ne(() => [
                        ($(!0),
                        O(
                          J,
                          null,
                          Z(
                            D(t),
                            (e) => (
                              $(),
                              se(
                                n,
                                {
                                  key: e.path,
                                  class: "!inline !items-stretch"
                                },
                                {
                                  default: ne(() => [
                                    G(
                                      "a",
                                      {
                                        onClick: te(
                                          (t) =>
                                            ((e) => {
                                              const {
                                                redirect: t,
                                                name: l,
                                                path: n
                                              } = e;
                                              t
                                                ? a.push(t)
                                                : l
                                                ? e.query
                                                  ? a.push({
                                                      name: l,
                                                      query: e.query
                                                    })
                                                  : e.params
                                                  ? a.push({
                                                      name: l,
                                                      params: e.params
                                                    })
                                                  : a.push({ name: l })
                                                : a.push({ path: n });
                                            })(e),
                                          ["prevent"]
                                        )
                                      },
                                      le(e.meta.title),
                                      9,
                                      Ua
                                    )
                                  ]),
                                  _: 2
                                },
                                1024
                              )
                            )
                          ),
                          128
                        ))
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              }
            )
          );
        }
      );
    }
  }),
  Xa = ["title"],
  Ya = N({
    __name: "SidebarTopCollapse",
    props: { isActive: { type: Boolean, default: !1 } },
    emits: ["toggleClick"],
    setup(e, { emit: t }) {
      const l = t,
        a = () => {
          l("toggleClick");
        };
      return (e, t) => {
        const l = Et;
        return (
          $(),
          O(
            "div",
            {
              class: "px-3 mr-1 navbar-bg-hover",
              title: e.isActive ? "点击折叠" : "点击展开",
              onClick: a
            },
            [
              K(
                l,
                {
                  icon: e.isActive ? D(It) : D(St),
                  class:
                    "inline-block align-middle hover:text-primary dark:hover:!text-white"
                },
                null,
                8,
                ["icon"]
              )
            ],
            8,
            Xa
          )
        );
      };
    }
  }),
  Ga = { class: "navbar bg-[#fff] shadow-sm shadow-[rgba(0,21,41,0.08)]" },
  Ka = { key: 3, class: "vertical-header-right" },
  Qa = { class: "check-en" },
  Ja = { class: "el-dropdown-link navbar-bg-hover select-none" },
  Za = ["src"],
  en = { key: 0, class: "dark:text-white" },
  tn = wl(
    N({
      __name: "index",
      setup(e) {
        const {
            layout: t,
            device: l,
            logout: a,
            onPanel: n,
            pureApp: o,
            username: i,
            userAvatar: s,
            avatarsStyle: r,
            toggleSideBar: u,
            toAccountSettings: h,
            getDropdownItemStyle: m,
            getDropdownItemClass: v
          } = qt(),
          { locale: f, translationCh: g, translationEn: y } = Jt();
        return (e, x) => {
          const b = Et,
            k = c,
            w = d,
            _ = p;
          return (
            $(),
            O("div", Ga, [
              "mobile" === D(l)
                ? ($(),
                  se(
                    Ya,
                    {
                      key: 0,
                      class: "hamburger-container",
                      "is-active": D(o).sidebar.opened,
                      onToggleClick: D(u)
                    },
                    null,
                    8,
                    ["is-active", "onToggleClick"]
                  ))
                : ae("", !0),
              "mix" !== D(t) && "mobile" !== D(l)
                ? ($(), se(Wa, { key: 1, class: "breadcrumb-container" }))
                : ae("", !0),
              "mix" === D(t) ? ($(), se(Na, { key: 2 })) : ae("", !0),
              "vertical" === D(t)
                ? ($(),
                  O("div", Ka, [
                    K(ba, { id: "header-search" }),
                    K(
                      _,
                      { id: "header-translation", trigger: "click" },
                      {
                        dropdown: ne(() => [
                          K(
                            w,
                            { class: "translation" },
                            {
                              default: ne(() => [
                                K(
                                  k,
                                  {
                                    style: Q(D(m)(D(f), "zh")),
                                    class: ee([
                                      "dark:!text-white",
                                      D(v)(D(f), "zh")
                                    ]),
                                    onClick: D(g)
                                  },
                                  {
                                    default: ne(() => [
                                      X(
                                        K(
                                          b,
                                          { class: "check-zh", icon: D(wt) },
                                          null,
                                          8,
                                          ["icon"]
                                        ),
                                        [[Y, "zh" === D(f)]]
                                      ),
                                      oe(" 简体中文 ")
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ["style", "class", "onClick"]
                                ),
                                K(
                                  k,
                                  {
                                    style: Q(D(m)(D(f), "en")),
                                    class: ee([
                                      "dark:!text-white",
                                      D(v)(D(f), "en")
                                    ]),
                                    onClick: D(y)
                                  },
                                  {
                                    default: ne(() => [
                                      X(
                                        G(
                                          "span",
                                          Qa,
                                          [
                                            K(b, { icon: D(wt) }, null, 8, [
                                              "icon"
                                            ])
                                          ],
                                          512
                                        ),
                                        [[Y, "en" === D(f)]]
                                      ),
                                      oe(" English ")
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ["style", "class", "onClick"]
                                )
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        default: ne(() => [
                          K(D(Lt), {
                            class:
                              "navbar-bg-hover w-[40px] h-[48px] p-[11px] cursor-pointer outline-none"
                          })
                        ]),
                        _: 1
                      }
                    ),
                    K(Pa, { id: "full-screen" }),
                    K(Ra, { id: "header-notice" }),
                    K(
                      _,
                      { trigger: "click" },
                      {
                        dropdown: ne(() => [
                          K(
                            w,
                            { class: "logout" },
                            {
                              default: ne(() => [
                                K(
                                  k,
                                  { onClick: D(h) },
                                  {
                                    default: ne(() => [
                                      K(
                                        b,
                                        {
                                          icon: D(_t),
                                          style: { margin: "5px" }
                                        },
                                        null,
                                        8,
                                        ["icon"]
                                      ),
                                      oe(" 账户设置 ")
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ["onClick"]
                                ),
                                K(
                                  k,
                                  { onClick: D(a) },
                                  {
                                    default: ne(() => [
                                      K(
                                        b,
                                        {
                                          icon: D(Ct),
                                          style: { margin: "5px" }
                                        },
                                        null,
                                        8,
                                        ["icon"]
                                      ),
                                      oe(" 退出系统 ")
                                    ]),
                                    _: 1
                                  },
                                  8,
                                  ["onClick"]
                                )
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        default: ne(() => [
                          G("span", Ja, [
                            G(
                              "img",
                              { src: D(s), style: Q(D(r)) },
                              null,
                              12,
                              Za
                            ),
                            D(i) ? ($(), O("p", en, le(D(i)), 1)) : ae("", !0)
                          ])
                        ]),
                        _: 1
                      }
                    ),
                    G(
                      "span",
                      {
                        class: "set-icon navbar-bg-hover",
                        title: "打开系统配置",
                        onClick: x[0] || (x[0] = (...e) => D(n) && D(n)(...e))
                      },
                      [K(b, { icon: D(Xe) }, null, 8, ["icon"])]
                    )
                  ]))
                : ae("", !0)
            ])
          );
        };
      }
    }),
    [["__scopeId", "data-v-4c2a2aa5"]]
  ),
  ln = new Map(),
  an = { class: "w-full h-full" },
  nn = N({
    __name: "index",
    props: { currRoute: {}, currComp: {} },
    setup(e) {
      const t = e,
        l = he([]),
        {
          setMap: a,
          getMap: n,
          MAP: o,
          delMap: i
        } = {
          setMap: function (e, t) {
            ln.set(e, t);
          },
          getMap: function (e) {
            return e ? ln.get(e) : [...ln.entries()];
          },
          delMap: function (e) {
            ln.delete(e);
          },
          MAP: ln
        },
        s = q(() => {
          var e, l;
          return (
            Nt().KeepAlive &&
            (null == (e = t.currRoute.meta) ? void 0 : e.keepAlive) &&
            !!(null == (l = t.currRoute.meta) ? void 0 : l.frameSrc)
          );
        }),
        r = q(() => !s.value && t.currComp);
      return (
        U(Xt().multiTags, (e) => {
          if (!Array.isArray(e) || !s.value) return;
          if (
            e.filter((e) => {
              var t;
              return null == (t = e.meta) ? void 0 : t.frameSrc;
            }).length < o.size
          )
            for (const t of o.keys())
              e.some((e) => e.path === t) || (i(t), (l.value = n()));
        }),
        U(
          () => t.currRoute.fullPath,
          (e) => {
            const i = Xt().multiTags.filter((e) => {
              var t;
              return null == (t = e.meta) ? void 0 : t.frameSrc;
            });
            if (s.value && i.length !== o.size) {
              [...o.keys()].find((t) => e === t) || a(e, t.currComp);
            }
            o.size > 0 && (l.value = n());
          },
          { immediate: !0 }
        ),
        (e, t) => (
          $(),
          O(
            J,
            null,
            [
              ($(!0),
              O(
                J,
                null,
                Z(D(l), ([t, l]) => {
                  var a;
                  return X(
                    ($(),
                    O(
                      "div",
                      { key: t, class: "w-full h-full" },
                      [
                        fe(e.$slots, "default", {
                          fullPath: t,
                          Comp: l,
                          frameInfo: {
                            frameSrc:
                              null == (a = e.currRoute.meta)
                                ? void 0
                                : a.frameSrc,
                            fullPath: t
                          }
                        })
                      ],
                      512
                    )),
                    [[Y, t === e.currRoute.fullPath]]
                  );
                }),
                128
              )),
              X(
                G(
                  "div",
                  an,
                  [
                    fe(e.$slots, "default", {
                      Comp: D(r),
                      fullPath: e.currRoute.fullPath
                    })
                  ],
                  512
                ),
                [[Y, !D(s)]]
              )
            ],
            64
          )
        )
      );
    }
  }),
  on = {
    class:
      "layout-footer text-[rgba(0,0,0,0.6)] dark:text-[rgba(220,220,242,0.8)]"
  },
  sn = {
    class: "hover:text-primary",
    href: "https://github.com/pure-admin",
    target: "_blank"
  },
  rn = wl(
    N({
      __name: "index",
      setup(e) {
        const t = Nt("Title");
        return (e, l) => (
          $(),
          O("footer", on, [
            oe(" Copyright © 2020-present "),
            G("a", sn, "  " + le(D(t)), 1)
          ])
        );
      }
    }),
    [["__scopeId", "data-v-c7984634"]]
  ),
  un = { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" },
  cn = [
    G("path", { fill: "none", d: "M0 0h24v24H0z" }, null, -1),
    G(
      "path",
      {
        d: "M2.88 18.054a35.9 35.9 0 0 1 8.531-16.32.8.8 0 0 1 1.178 0q.25.27.413.455a35.9 35.9 0 0 1 8.118 15.865c-2.141.451-4.34.747-6.584.874l-2.089 4.178a.5.5 0 0 1-.894 0l-2.089-4.178a44 44 0 0 1-6.584-.874m6.698-1.123 1.157.066L12 19.527l1.265-2.53 1.157-.066a42 42 0 0 0 4.227-.454A33.9 33.9 0 0 0 12 4.09a33.9 33.9 0 0 0-6.649 12.387q2.093.334 4.227.454M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      },
      null,
      -1
    )
  ];
const dn = {
    render: function (e, t) {
      return $(), O("svg", un, [...cn]);
    }
  },
  pn = wl(
    N({
      __name: "index",
      props: { fixedHeader: Boolean },
      setup(e) {
        const t = e,
          { showModel: l } = Vl(),
          { $storage: a, $config: n } = tl(),
          o = q(() => (null == n ? void 0 : n.KeepAlive)),
          i = q(() =>
            u.value ? { height: "100%" } : { height: "calc(100% - 29px)" }
          ),
          s = q(() => (e) => e.meta.transition),
          r = q(() => (null == a ? void 0 : a.configure.hideTabs)),
          u = q(() => (null == a ? void 0 : a.configure.hideFooter)),
          c = q(() => (null == a ? void 0 : a.configure.stretch)),
          d = q(() => "vertical" === (null == a ? void 0 : a.layout.layout)),
          p = q(() =>
            hl(c.value) ? c.value + "px" : c.value ? "1440px" : "100%"
          ),
          h = q(() => [
            r.value && d ? "padding-top: 48px;" : "",
            !r.value && d
              ? "chrome" == l.value
                ? "padding-top: 86px;"
                : "padding-top: 82px;"
              : "",
            r.value && !d.value ? "padding-top: 48px;" : "",
            r.value || d.value
              ? ""
              : "chrome" == l.value
              ? "padding-top: 86px;"
              : "padding-top: 82px;",
            t.fixedHeader
              ? ""
              : "padding-top: 0;" +
                (r.value
                  ? "min-height: calc(100vh - 48px);"
                  : "chrome" === l.value
                  ? "min-height: calc(100vh - 86px);"
                  : "min-height: calc(100vh - 82px);")
          ]),
          m = N({
            props: { route: { type: void 0, required: !0 } },
            render() {
              var e, t, l;
              const a =
                  (null == (e = s.value(this.route)) ? void 0 : e.name) ||
                  "fade-transform",
                n =
                  null == (t = s.value(this.route))
                    ? void 0
                    : t.enterTransition,
                o =
                  null == (l = s.value(this.route))
                    ? void 0
                    : l.leaveTransition;
              return xe(
                ie,
                {
                  name: n ? "pure-classes-transition" : a,
                  enterActiveClass: n ? `animate__animated ${n}` : void 0,
                  leaveActiveClass: o ? `animate__animated ${o}` : void 0,
                  mode: "out-in",
                  appear: !0
                },
                { default: () => [this.$slots.default()] }
              );
            }
          });
        return (t, l) => {
          const a = M,
            n = v,
            s = ge("router-view");
          return (
            $(),
            O(
              "section",
              {
                class: ee([
                  e.fixedHeader ? "app-main" : "app-main-nofixed-header"
                ]),
                style: Q(h.value)
              },
              [
                K(s, null, {
                  default: ne(({ Component: t, route: l }) => [
                    K(
                      nn,
                      { currComp: t, currRoute: l },
                      {
                        default: ne(
                          ({ Comp: t, fullPath: s, frameInfo: r }) => [
                            K(
                              D(m),
                              { route: l },
                              {
                                default: ne(() => [
                                  ($(),
                                  O(
                                    "div",
                                    { key: s, style: Q(i.value) },
                                    [
                                      e.fixedHeader
                                        ? ($(),
                                          se(
                                            n,
                                            {
                                              key: 0,
                                              "wrap-style": {
                                                display: "flex",
                                                "flex-wrap": "wrap",
                                                "max-width": p.value,
                                                margin: "0 auto",
                                                transition:
                                                  "all 300ms cubic-bezier(0.4, 0, 0.2, 1)"
                                              },
                                              "view-style": {
                                                display: "flex",
                                                flex: "auto",
                                                overflow: "hidden",
                                                "flex-direction": "column"
                                              }
                                            },
                                            {
                                              default: ne(() => [
                                                K(
                                                  a,
                                                  {
                                                    title: "回到顶部",
                                                    target:
                                                      ".app-main .el-scrollbar__wrap"
                                                  },
                                                  {
                                                    default: ne(() => [
                                                      K(D(dn))
                                                    ]),
                                                    _: 1
                                                  }
                                                ),
                                                o.value
                                                  ? ($(),
                                                    se(
                                                      ye,
                                                      {
                                                        key: 0,
                                                        include:
                                                          D(Kt)().cachePageList
                                                      },
                                                      [
                                                        ($(),
                                                        se(
                                                          pe(t),
                                                          {
                                                            frameInfo: r,
                                                            class:
                                                              "main-content"
                                                          },
                                                          null,
                                                          8,
                                                          ["frameInfo"]
                                                        ))
                                                      ],
                                                      1032,
                                                      ["include"]
                                                    ))
                                                  : ($(),
                                                    se(
                                                      pe(t),
                                                      {
                                                        key: 1,
                                                        frameInfo: r,
                                                        class: "main-content"
                                                      },
                                                      null,
                                                      8,
                                                      ["frameInfo"]
                                                    ))
                                              ]),
                                              _: 2
                                            },
                                            1032,
                                            ["wrap-style"]
                                          ))
                                        : ($(),
                                          O(
                                            J,
                                            { key: 1 },
                                            [
                                              o.value
                                                ? ($(),
                                                  se(
                                                    ye,
                                                    {
                                                      key: 0,
                                                      include:
                                                        D(Kt)().cachePageList
                                                    },
                                                    [
                                                      ($(),
                                                      se(
                                                        pe(t),
                                                        {
                                                          frameInfo: r,
                                                          class: "main-content"
                                                        },
                                                        null,
                                                        8,
                                                        ["frameInfo"]
                                                      ))
                                                    ],
                                                    1032,
                                                    ["include"]
                                                  ))
                                                : ($(),
                                                  se(
                                                    pe(t),
                                                    {
                                                      key: s,
                                                      frameInfo: r,
                                                      class: "main-content"
                                                    },
                                                    null,
                                                    8,
                                                    ["frameInfo"]
                                                  ))
                                            ],
                                            64
                                          ))
                                    ],
                                    4
                                  ))
                                ]),
                                _: 2
                              },
                              1032,
                              ["route"]
                            ),
                            u.value ? ae("", !0) : ($(), se(rn, { key: 0 }))
                          ]
                        ),
                        _: 2
                      },
                      1032,
                      ["currComp", "currRoute"]
                    )
                  ]),
                  _: 1
                })
              ],
              6
            )
          );
        };
      }
    }),
    [["__scopeId", "data-v-286df198"]]
  ),
  hn = {
    options: { type: Array, default: () => [] },
    modelValue: { type: void 0, require: !1, default: "0" },
    block: { type: Boolean, default: !1 },
    size: { type: String },
    disabled: { type: Boolean, default: !1 },
    resize: { type: Boolean, default: !1 }
  },
  mn = fl(
    N({
      name: "ReSegmented",
      props: hn,
      emits: ["change", "update:modelValue"],
      setup(e, { emit: t }) {
        const l = P(0),
          a = P(0),
          { isDark: n } = ml(),
          o = P(!1),
          i = P(-1),
          r = P(""),
          u = B(),
          c = hl(e.modelValue) ? be(e, "modelValue") : P(0);
        function d(e = c.value) {
          re(() => {
            var t;
            const n =
              null == (t = null == u ? void 0 : u.proxy)
                ? void 0
                : t.$refs[`labelRef${e}`];
            n &&
              ((l.value = n.clientWidth),
              (a.value = n.offsetLeft),
              (o.value = !0));
          });
        }
        function p() {
          sl(".pure-segmented", () => {
            re(() => {
              d(c.value);
            });
          });
        }
        (e.block || e.resize) && p(),
          U(
            () => c.value,
            (e) => {
              re(() => {
                d(e);
              });
            },
            { immediate: !0 }
          ),
          U(() => e.size, p, { immediate: !0 });
        const h = () =>
          e.options.map((l, a) =>
            K(
              "label",
              {
                ref: `labelRef${a}`,
                class: [
                  "pure-segmented-item",
                  (e.disabled || (null == l ? void 0 : l.disabled)) &&
                    "pure-segmented-item-disabled"
                ],
                style: {
                  background: i.value === a ? r.value : "",
                  color: e.disabled
                    ? null
                    : l.disabled || (c.value !== a && i.value !== a)
                    ? ""
                    : n.value
                    ? "rgba(255, 255, 255, 0.85)"
                    : "rgba(0,0,0,.88)"
                },
                onMouseenter: (t) =>
                  (function ({ option: t, index: l }, a) {
                    e.disabled ||
                      (a.preventDefault(),
                      (i.value = l),
                      t.disabled || c.value === l
                        ? (r.value = "")
                        : (r.value = n.value
                            ? "#1f1f1f"
                            : "rgba(0, 0, 0, 0.06)"));
                  })({ option: l, index: a }, t),
                onMouseleave: (t) =>
                  (function (t, l) {
                    e.disabled || (l.preventDefault(), (i.value = -1));
                  })(0, t),
                onClick: (n) =>
                  (function ({ option: l, index: a }, n) {
                    e.disabled ||
                      l.disabled ||
                      (n.preventDefault(),
                      hl(e.modelValue)
                        ? t("update:modelValue", a)
                        : (c.value = a),
                      (r.value = ""),
                      t("change", { index: a, option: l }));
                  })({ option: l, index: a }, n)
              },
              [
                K("input", { type: "radio", name: "segmented" }, null),
                X(
                  K("div", { class: "pure-segmented-item-label" }, [
                    l.icon && !vl(l.label)
                      ? K(
                          "span",
                          {
                            class: "pure-segmented-item-icon",
                            style: { marginRight: l.label ? "6px" : 0 }
                          },
                          [
                            xe(
                              Pt(
                                l.icon,
                                s({}, null == l ? void 0 : l.iconAttrs)
                              )
                            )
                          ]
                        )
                      : null,
                    l.label
                      ? vl(l.label)
                        ? xe(l.label)
                        : K("span", null, [l.label])
                      : null
                  ]),
                  [
                    [
                      ke("tippy"),
                      { content: null == l ? void 0 : l.tip, zIndex: 41e3 }
                    ]
                  ]
                )
              ]
            )
          );
        return () =>
          K(
            "div",
            {
              class: {
                "pure-segmented": !0,
                "pure-segmented-block": e.block,
                "pure-segmented--large": "large" === e.size,
                "pure-segmented--small": "small" === e.size
              }
            },
            [
              K("div", { class: "pure-segmented-group" }, [
                K(
                  "div",
                  {
                    class: "pure-segmented-item-selected",
                    style: {
                      width: `${l.value}px`,
                      transform: `translateX(${a.value}px)`,
                      display: o.value ? "block" : "none"
                    }
                  },
                  null
                ),
                h()
              ])
            ]
          );
      }
    })
  ),
  vn = (e) => (ue("data-v-7862d1bc"), (e = e()), ce(), e),
  fn = vn(() => G("div", { class: "right-panel-background" }, null, -1)),
  gn = {
    class:
      "project-configuration border-b-[1px] border-solid border-[var(--pure-border-color)]"
  },
  yn = vn(() => G("h4", { class: "dark:text-white" }, "系统配置", -1)),
  xn = {
    class:
      "flex justify-end p-3 border-t-[1px] border-solid border-[var(--pure-border-color)]"
  },
  bn = wl(
    N({
      __name: "index",
      setup(e) {
        const t = P(null),
          l = P(!1),
          a = q(() => [
            "w-[22px]",
            "h-[22px]",
            "flex",
            "justify-center",
            "items-center",
            "outline-none",
            "rounded-[4px]",
            "cursor-pointer",
            "transition-colors",
            "hover:bg-[#0000000f]",
            "dark:hover:bg-[#ffffff1f]",
            "dark:hover:text-[#ffffffd9]"
          ]),
          { onReset: n } = Ht();
        return (
          xl(t, (e) => {
            e.clientX > t.value.offsetLeft || (l.value = !1);
          }),
          H(() => {
            Rt.on("openPanel", () => {
              l.value = !0;
            });
          }),
          W(() => {
            Rt.off("openPanel");
          }),
          (e, o) => {
            const i = Et,
              s = v,
              r = V,
              u = ke("tippy");
            return (
              $(),
              O(
                "div",
                { class: ee({ show: D(l) }) },
                [
                  fn,
                  G(
                    "div",
                    {
                      ref_key: "target",
                      ref: t,
                      class: "right-panel bg-bg_color"
                    },
                    [
                      G("div", gn, [
                        yn,
                        X(
                          ($(),
                          O(
                            "span",
                            { class: ee(D(a)) },
                            [
                              K(
                                i,
                                {
                                  class: "dark:text-white",
                                  width: "18px",
                                  height: "18px",
                                  icon: D(rt),
                                  onClick:
                                    o[0] || (o[0] = (e) => (l.value = !D(l)))
                                },
                                null,
                                8,
                                ["icon"]
                              )
                            ],
                            2
                          )),
                          [
                            [
                              u,
                              {
                                content: "关闭配置",
                                placement: "bottom-start",
                                zIndex: 41e3
                              }
                            ]
                          ]
                        )
                      ]),
                      K(s, null, {
                        default: ne(() => [
                          fe(e.$slots, "default", {}, void 0, !0)
                        ]),
                        _: 3
                      }),
                      G("div", xn, [
                        X(
                          ($(),
                          se(
                            r,
                            { type: "danger", text: "", bg: "", onClick: D(n) },
                            { default: ne(() => [oe(" 清空缓存 ")]), _: 1 },
                            8,
                            ["onClick"]
                          )),
                          [
                            [
                              u,
                              {
                                content: "清空缓存并返回登录页",
                                placement: "left-start",
                                zIndex: 41e3
                              }
                            ]
                          ]
                        )
                      ])
                    ],
                    512
                  )
                ],
                2
              )
            );
          }
        );
      }
    }),
    [["__scopeId", "data-v-7862d1bc"]]
  ),
  kn = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    class: "icon",
    viewBox: "0 0 1024 1024"
  },
  wn = [
    G(
      "path",
      {
        d: "M554 849.574c0 23.365-18.635 42.307-42 42.307s-42-18.941-42-42.307V662.719c0-23.365 18.635-42.307 42-42.307v-7.051c23.365 0 42 25.993 42 49.358z"
      },
      null,
      -1
    ),
    G(
      "path",
      {
        d: "M893 888.5c0 17.397-14.103 31.5-31.5 31.5h-700c-17.397 0-31.5-14.103-31.5-31.5s14.103-31.5 31.5-31.5h700c17.397 0 31.5 14.103 31.5 31.5m33-714.074C926 135.484 894.686 105 855.744 105H168.256C129.314 105 98 135.484 98 174.426V533h828zM98 630.988C98 669.931 129.314 702 168.256 702h687.488C894.686 702 926 669.931 926 630.988V596H98z"
      },
      null,
      -1
    )
  ];
const _n = {
    render: function (e, t) {
      return $(), O("svg", kn, [...wn]);
    }
  },
  Cn = (e) => (ue("data-v-d7cf5c28"), (e = e()), ce(), e),
  In = { class: "p-5" },
  Sn = { class: "theme-color" },
  Tn = ["onClick"],
  Mn = { class: "pure-theme" },
  Vn = [Cn(() => G("div", null, null, -1)), Cn(() => G("div", null, null, -1))],
  zn = [Cn(() => G("div", null, null, -1)), Cn(() => G("div", null, null, -1))],
  An = [Cn(() => G("div", null, null, -1)), Cn(() => G("div", null, null, -1))],
  Rn = { key: 0 },
  En = Cn(() =>
    G(
      "div",
      {
        class: "flex-grow border-b border-dashed",
        style: { "border-color": "var(--el-color-primary)" }
      },
      null,
      -1
    )
  ),
  jn = Cn(() =>
    G(
      "p",
      { class: "mt-5 font-medium text-sm dark:text-white" },
      "界面显示",
      -1
    )
  ),
  Pn = { class: "setting" },
  qn = Cn(() => G("span", { class: "dark:text-white" }, "灰色模式", -1)),
  Ln = Cn(() => G("span", { class: "dark:text-white" }, "色弱模式", -1)),
  Hn = Cn(() => G("span", { class: "dark:text-white" }, "隐藏标签页", -1)),
  Bn = Cn(() => G("span", { class: "dark:text-white" }, "隐藏页脚", -1)),
  Dn = Cn(() => G("span", { class: "dark:text-white" }, "Logo", -1)),
  $n = Cn(() => G("span", { class: "dark:text-white" }, " 页签持久化 ", -1)),
  On = wl(
    N({
      __name: "index",
      setup(e) {
        var t, l, a, n;
        const o = Ml(),
          { device: i } = qt(),
          { isDark: s } = ml(),
          { $storage: r } = tl(),
          u = P(),
          c = P(),
          d = P();
        let p = q(() => o.fixedHeader);
        const {
          dataTheme: h,
          overallStyle: m,
          layoutTheme: v,
          themeColors: f,
          toggleClass: g,
          dataThemeChange: y,
          setLayoutThemeColor: x
        } = Ht();
        if (D(v)) {
          const e = D(v).layout,
            t = D(v).theme;
          Il({ scopeName: `layout-theme-${t}` }), ue(e);
        }
        const b = P(
            null != (l = null == (t = r.configure) ? void 0 : t.showModel)
              ? l
              : "smart"
          ),
          k = P(
            null == (n = null == (a = r.configure) ? void 0 : a.showLogo) || n
          ),
          w = L({
            greyVal: r.configure.grey,
            weakVal: r.configure.weak,
            tabsVal: r.configure.hideTabs,
            showLogo: r.configure.showLogo,
            showModel: r.configure.showModel,
            hideFooter: r.configure.hideFooter,
            multiTagsCache: r.configure.multiTagsCache,
            stretch: r.configure.stretch
          }),
          _ = q(() => (e) => ({ background: e })),
          C = q(() => (e) => "light" !== e || !s.value);
        function I(e, t) {
          const l = r.configure;
          (l[e] = t), (r.configure = l);
        }
        const S = (e) => {
            const t = document.querySelector("html");
            g(w.greyVal, "html-grey", t), I("grey", e);
          },
          T = (e) => {
            const t = document.querySelector("html");
            g(w.weakVal, "html-weakness", t), I("weak", e);
          },
          M = () => {
            const e = w.tabsVal;
            I("hideTabs", e), Rt.emit("tagViewsChange", e);
          },
          V = () => {
            I("hideFooter", w.hideFooter);
          },
          E = () => {
            const e = w.multiTagsCache;
            I("multiTagsCache", e), Xt().multiTagsCacheChange(e);
          };
        function j({ option: e }) {
          const { value: t } = e;
          (b.value = t), I("showModel", t);
        }
        function H() {
          D(k) ? I("showLogo", !0) : I("showLogo", !1),
            Rt.emit("logoChange", D(k));
        }
        function B(e) {
          e.forEach((e) => {
            g(!1, "is-select", D(e));
          });
        }
        const F = q(() => [
            {
              label: "固定",
              tip: "紧凑页面，轻松找到所需信息",
              value: "fixed"
            },
            { label: "自定义", tip: "最小1280、最大1600", value: "custom" }
          ]),
          N = (e) => {
            (w.stretch = e), I("stretch", e);
          },
          W = ({ option: e }) => {
            const { value: t } = e;
            N("custom" === t && 1440);
          },
          te = q(
            () => (e) =>
              e === v.value.theme && "light" !== v.value.theme
                ? "#fff"
                : e === v.value.theme && "light" === v.value.theme
                ? "#1d2b45"
                : "transparent"
          ),
          le = q(() => [
            "mb-[12px]",
            "font-medium",
            "text-sm",
            "dark:text-white"
          ]),
          oe = q(() => [
            {
              label: "浅色",
              icon: Dt,
              theme: "light",
              tip: "清新启航，点亮舒适的工作界面",
              iconAttrs: { fill: s.value ? "#fff" : "#000" }
            },
            {
              label: "深色",
              icon: $t,
              theme: "dark",
              tip: "月光序曲，沉醉于夜的静谧雅致",
              iconAttrs: { fill: s.value ? "#fff" : "#000" }
            },
            {
              label: "自动",
              icon: _n,
              theme: "system",
              tip: "同步时光，界面随晨昏自然呼应",
              iconAttrs: { fill: s.value ? "#fff" : "#000" }
            }
          ]),
          ie = q(() => [
            { label: "灵动", tip: "灵动标签，添趣生辉", value: "smart" },
            { label: "卡片", tip: "卡片标签，高效浏览", value: "card" },
            { label: "谷歌", tip: "谷歌风格，经典美观", value: "chrome" }
          ]);
        function ue(e) {
          var t, l, a, n, o;
          (v.value.layout = e),
            window.document.body.setAttribute("layout", e),
            (r.layout = {
              layout: e,
              theme: v.value.theme,
              darkMode: null == (t = r.layout) ? void 0 : t.darkMode,
              sidebarStatus: null == (l = r.layout) ? void 0 : l.sidebarStatus,
              epThemeColor: null == (a = r.layout) ? void 0 : a.epThemeColor,
              themeColor: null == (n = r.layout) ? void 0 : n.themeColor,
              overallStyle: null == (o = r.layout) ? void 0 : o.overallStyle
            }),
            Bt().setLayout(e);
        }
        U(r, ({ layout: e }) => {
          switch (e.layout) {
            case "vertical":
              g(!0, "is-select", D(c)), gl(B([d]), 50), gl(B([u]), 50);
              break;
            case "horizontal":
              g(!0, "is-select", D(d)), gl(B([c]), 50), gl(B([u]), 50);
              break;
            case "mix":
              g(!0, "is-select", D(u)), gl(B([c]), 50), gl(B([d]), 50);
          }
        });
        const ce = window.matchMedia("(prefers-color-scheme: dark)");
        function de() {
          "system" === m.value &&
            (ce.matches ? (h.value = !0) : (h.value = !1), y(m.value));
        }
        function pe() {
          ce.removeEventListener("change", de);
        }
        function he() {
          de(), pe(), ce.addEventListener("change", de);
        }
        return (
          we(() => {
            re(() => {
              var e, t;
              he(),
                w.greyVal &&
                  (null == (e = document.querySelector("html")) ||
                    e.classList.add("html-grey")),
                w.weakVal &&
                  (null == (t = document.querySelector("html")) ||
                    t.classList.add("html-weakness")),
                w.tabsVal && M(),
                w.hideFooter && V();
            });
          }),
          _e(() => pe),
          (e, t) => {
            const l = mn,
              a = Et,
              n = z,
              o = A,
              s = R,
              r = ke("tippy"),
              g = ke("ripple");
            return (
              $(),
              se(bn, null, {
                default: ne(() => [
                  G("div", In, [
                    G("p", { class: ee(D(le)) }, "整体风格", 2),
                    K(
                      l,
                      {
                        resize: "",
                        class: "select-none",
                        modelValue: "system" === D(m) ? 2 : D(h) ? 1 : 0,
                        options: D(oe),
                        onChange:
                          t[0] ||
                          (t[0] = (e) => {
                            1 === e.index && 2 !== e.index
                              ? (h.value = !0)
                              : (h.value = !1),
                              (m.value = e.option.theme),
                              D(y)(e.option.theme),
                              2 === e.index && he();
                          })
                      },
                      null,
                      8,
                      ["modelValue", "options"]
                    ),
                    G("p", { class: ee(["mt-5", D(le)]) }, "主题色", 2),
                    G("ul", Sn, [
                      ($(!0),
                      O(
                        J,
                        null,
                        Z(D(f), (e, t) =>
                          X(
                            ($(),
                            O(
                              "li",
                              {
                                key: t,
                                style: Q(D(_)(e.color)),
                                onClick: (t) => D(x)(e.themeColor)
                              },
                              [
                                K(
                                  n,
                                  {
                                    style: { margin: "0.1em 0.1em 0 0" },
                                    size: 17,
                                    color: D(te)(e.themeColor)
                                  },
                                  {
                                    default: ne(() => [
                                      K(a, { icon: D(wt) }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ["color"]
                                )
                              ],
                              12,
                              Tn
                            )),
                            [[Y, D(C)(e.themeColor)]]
                          )
                        ),
                        128
                      ))
                    ]),
                    G("p", { class: ee(["mt-5", D(le)]) }, "导航模式", 2),
                    G("ul", Mn, [
                      X(
                        ($(),
                        O(
                          "li",
                          {
                            ref_key: "verticalRef",
                            ref: c,
                            class: ee(
                              "vertical" === D(v).layout ? "is-select" : ""
                            ),
                            onClick: t[1] || (t[1] = (e) => ue("vertical"))
                          },
                          Vn,
                          2
                        )),
                        [[r, { content: "左侧菜单，亲切熟悉", zIndex: 41e3 }]]
                      ),
                      "mobile" !== D(i)
                        ? X(
                            ($(),
                            O(
                              "li",
                              {
                                key: 0,
                                ref_key: "horizontalRef",
                                ref: d,
                                class: ee(
                                  "horizontal" === D(v).layout
                                    ? "is-select"
                                    : ""
                                ),
                                onClick:
                                  t[2] || (t[2] = (e) => ue("horizontal"))
                              },
                              zn,
                              2
                            )),
                            [
                              [
                                r,
                                { content: "顶部菜单，简洁概览", zIndex: 41e3 }
                              ]
                            ]
                          )
                        : ae("", !0),
                      "mobile" !== D(i)
                        ? X(
                            ($(),
                            O(
                              "li",
                              {
                                key: 1,
                                ref_key: "mixRef",
                                ref: u,
                                class: ee(
                                  "mix" === D(v).layout ? "is-select" : ""
                                ),
                                onClick: t[3] || (t[3] = (e) => ue("mix"))
                              },
                              An,
                              2
                            )),
                            [
                              [
                                r,
                                { content: "混合菜单，灵活多变", zIndex: 41e3 }
                              ]
                            ]
                          )
                        : ae("", !0)
                    ]),
                    D(Bt)().getViewportWidth > 1280 && D(p)
                      ? ($(),
                        O("span", Rn, [
                          G("p", { class: ee(["mt-5", D(le)]) }, "页宽", 2),
                          K(
                            l,
                            {
                              resize: "",
                              class: "mb-2 select-none",
                              modelValue: D(hl)(D(w).stretch) ? 1 : 0,
                              options: D(F),
                              onChange: W
                            },
                            null,
                            8,
                            ["modelValue", "options"]
                          ),
                          D(hl)(D(w).stretch)
                            ? ($(),
                              se(
                                o,
                                {
                                  key: 0,
                                  modelValue: D(w).stretch,
                                  "onUpdate:modelValue":
                                    t[4] || (t[4] = (e) => (D(w).stretch = e)),
                                  min: 1280,
                                  max: 1600,
                                  "controls-position": "right",
                                  onChange: t[5] || (t[5] = (e) => N(e))
                                },
                                null,
                                8,
                                ["modelValue"]
                              ))
                            : X(
                                ($(),
                                O(
                                  "button",
                                  {
                                    key: 1,
                                    class:
                                      "bg-transparent flex-c w-full h-20 rounded-md border border-[var(--pure-border-color)]",
                                    onClick:
                                      t[6] || (t[6] = (e) => N(!D(w).stretch))
                                  },
                                  [
                                    G(
                                      "div",
                                      {
                                        class: ee([
                                          "flex-bc transition-all duration-300",
                                          [D(w).stretch ? "w-[24%]" : "w-[50%]"]
                                        ]),
                                        style: {
                                          color: "var(--el-color-primary)"
                                        }
                                      },
                                      [
                                        K(
                                          a,
                                          {
                                            icon: D(w).stretch ? D(vt) : D(mt),
                                            height: "20"
                                          },
                                          null,
                                          8,
                                          ["icon"]
                                        ),
                                        En,
                                        K(
                                          a,
                                          {
                                            icon: D(w).stretch ? D(mt) : D(vt),
                                            height: "20"
                                          },
                                          null,
                                          8,
                                          ["icon"]
                                        )
                                      ],
                                      2
                                    )
                                  ]
                                )),
                                [[g, { class: "text-gray-300" }]]
                              )
                        ]))
                      : ae("", !0),
                    G("p", { class: ee(["mt-4", D(le)]) }, "页签风格", 2),
                    K(
                      l,
                      {
                        resize: "",
                        class: "select-none",
                        modelValue:
                          "smart" === D(b) ? 0 : "card" === D(b) ? 1 : 2,
                        options: D(ie),
                        onChange: j
                      },
                      null,
                      8,
                      ["modelValue", "options"]
                    ),
                    jn,
                    G("ul", Pn, [
                      G("li", null, [
                        qn,
                        K(
                          s,
                          {
                            modelValue: D(w).greyVal,
                            "onUpdate:modelValue":
                              t[7] || (t[7] = (e) => (D(w).greyVal = e)),
                            "inline-prompt": "",
                            "active-text": "开",
                            "inactive-text": "关",
                            onChange: S
                          },
                          null,
                          8,
                          ["modelValue"]
                        )
                      ]),
                      G("li", null, [
                        Ln,
                        K(
                          s,
                          {
                            modelValue: D(w).weakVal,
                            "onUpdate:modelValue":
                              t[8] || (t[8] = (e) => (D(w).weakVal = e)),
                            "inline-prompt": "",
                            "active-text": "开",
                            "inactive-text": "关",
                            onChange: T
                          },
                          null,
                          8,
                          ["modelValue"]
                        )
                      ]),
                      G("li", null, [
                        Hn,
                        K(
                          s,
                          {
                            modelValue: D(w).tabsVal,
                            "onUpdate:modelValue":
                              t[9] || (t[9] = (e) => (D(w).tabsVal = e)),
                            "inline-prompt": "",
                            "active-text": "开",
                            "inactive-text": "关",
                            onChange: M
                          },
                          null,
                          8,
                          ["modelValue"]
                        )
                      ]),
                      G("li", null, [
                        Bn,
                        K(
                          s,
                          {
                            modelValue: D(w).hideFooter,
                            "onUpdate:modelValue":
                              t[10] || (t[10] = (e) => (D(w).hideFooter = e)),
                            "inline-prompt": "",
                            "active-text": "开",
                            "inactive-text": "关",
                            onChange: V
                          },
                          null,
                          8,
                          ["modelValue"]
                        )
                      ]),
                      G("li", null, [
                        Dn,
                        K(
                          s,
                          {
                            modelValue: D(k),
                            "onUpdate:modelValue":
                              t[11] ||
                              (t[11] = (e) => (me(k) ? (k.value = e) : null)),
                            "inline-prompt": "",
                            "active-value": !0,
                            "inactive-value": !1,
                            "active-text": "开",
                            "inactive-text": "关",
                            onChange: H
                          },
                          null,
                          8,
                          ["modelValue"]
                        )
                      ]),
                      G("li", null, [
                        $n,
                        K(
                          s,
                          {
                            modelValue: D(w).multiTagsCache,
                            "onUpdate:modelValue":
                              t[12] ||
                              (t[12] = (e) => (D(w).multiTagsCache = e)),
                            "inline-prompt": "",
                            "active-text": "开",
                            "inactive-text": "关",
                            onChange: E
                          },
                          null,
                          8,
                          ["modelValue"]
                        )
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            );
          }
        );
      }
    }),
    [["__scopeId", "data-v-d7cf5c28"]]
  ),
  Fn = ["src"],
  Nn = { class: "sidebar-title" },
  Un = ["src"],
  Wn = { class: "sidebar-title" },
  Xn = wl(
    N({
      __name: "SidebarLogo",
      props: { collapse: Boolean },
      setup(e) {
        const { title: t, getLogo: l } = qt();
        return (a, n) => {
          const o = ge("router-link");
          return (
            $(),
            O(
              "div",
              {
                class: ee(["sidebar-logo-container", { collapses: e.collapse }])
              },
              [
                K(
                  ie,
                  { name: "sidebarLogoFade" },
                  {
                    default: ne(() => {
                      var a, n, i, s;
                      return [
                        e.collapse
                          ? ($(),
                            se(
                              o,
                              {
                                key: "collapse",
                                title: D(t),
                                class: "sidebar-logo-link",
                                to:
                                  null !=
                                  (n = null == (a = D(Yt)()) ? void 0 : a.path)
                                    ? n
                                    : "/"
                              },
                              {
                                default: ne(() => [
                                  G(
                                    "img",
                                    { src: D(l)(), alt: "logo" },
                                    null,
                                    8,
                                    Fn
                                  ),
                                  G("span", Nn, le(D(t)), 1)
                                ]),
                                _: 1
                              },
                              8,
                              ["title", "to"]
                            ))
                          : ($(),
                            se(
                              o,
                              {
                                key: "expand",
                                title: D(t),
                                class: "sidebar-logo-link",
                                to:
                                  null !=
                                  (s = null == (i = D(Yt)()) ? void 0 : i.path)
                                    ? s
                                    : "/"
                              },
                              {
                                default: ne(() => [
                                  G(
                                    "img",
                                    { src: D(l)(), alt: "logo" },
                                    null,
                                    8,
                                    Un
                                  ),
                                  G("span", Wn, le(D(t)), 1)
                                ]),
                                _: 1
                              },
                              8,
                              ["title", "to"]
                            ))
                      ];
                    }),
                    _: 1
                  }
                )
              ],
              2
            )
          );
        };
      }
    }),
    [["__scopeId", "data-v-3c9cd1d3"]]
  ),
  Yn = N({
    __name: "SidebarLinkItem",
    props: { to: {} },
    setup(e) {
      const t = e,
        l = q(() => yl(t.to.name));
      return (e, t) => {
        return (
          $(),
          se(
            pe(D(l) ? "a" : "router-link"),
            Ce(
              Ie(
                ((a = e.to),
                l.value
                  ? { href: a.name, target: "_blank", rel: "noopener" }
                  : { to: a })
              )
            ),
            { default: ne(() => [fe(e.$slots, "default")]), _: 3 },
            16
          )
        );
        var a;
      };
    }
  }),
  Gn = N({
    __name: "SidebarItem",
    props: {
      item: { type: Object },
      isNest: { type: Boolean, default: !1 },
      basePath: { type: String, default: "" }
    },
    setup(e) {
      const t = Se(),
        { layout: l, isCollapse: a, tooltipEffect: n, getDivStyle: o } = qt();
      let i = (e) => de(e);
      const u = e,
        c = q(() => ({ width: "100%", display: "flex", alignItems: "center" })),
        d = q(() => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin:
            "horizontal" === l.value
              ? "0 5px 0 0"
              : a.value
              ? "0 auto"
              : "0 5px 0 0"
        })),
        p = q(() => {
          var e;
          return (null == (e = Nt()) ? void 0 : e.MenuArrowIconNoTransition)
            ? {
                "expand-close-icon": Pt(Tt),
                "expand-open-icon": Pt(Mt),
                "collapse-close-icon": Pt(Vt),
                "collapse-open-icon": Pt(zt)
              }
            : "";
        }),
        h = P(null);
      function m(e) {
        const t = /^http(s?):\/\//;
        return t.test(e) || t.test(u.basePath)
          ? e || u.basePath
          : Sl.posix.resolve(u.basePath, e);
      }
      return (u, v) => {
        const f = E,
          g = ge("ReText"),
          y = _,
          x = ge("sidebar-item", !0),
          b = j;
        return !(function (e = [], t) {
          var l, a;
          const n = e.filter((e) => ((h.value = e), !0));
          return (
            !(null == (a = null == (l = n[0]) ? void 0 : l.meta)
              ? void 0
              : a.showParent) &&
            (1 === n.length ||
              (0 === n.length &&
                ((h.value = r(s({}, t), { path: "", noShowingChildren: !0 })),
                !0)))
          );
        })(e.item.children, e.item) ||
          (D(h).children && !D(h).noShowingChildren)
          ? ($(),
            se(
              b,
              Te(
                {
                  key: 1,
                  ref: "subMenu",
                  teleported: "",
                  index: m(e.item.path)
                },
                D(p)
              ),
              {
                title: ne(() => {
                  var t, o;
                  return [
                    D(i)(e.item.meta.icon)
                      ? ($(),
                        O(
                          "div",
                          { key: 0, style: Q(D(d)), class: "sub-menu-icon" },
                          [
                            ($(),
                            se(
                              pe(D(Pt)(e.item.meta && D(i)(e.item.meta.icon)))
                            ))
                          ],
                          4
                        ))
                      : ae("", !0),
                    (
                      "mix" === D(l) && D(i)(e.item.meta.icon)
                        ? D(a) &&
                          2 ===
                            (null ==
                            (o = null == (t = e.item) ? void 0 : t.pathList)
                              ? void 0
                              : o.length)
                        : "vertical" === D(l) &&
                          D(a) &&
                          D(i)(e.item.meta.icon) &&
                          null === e.item.parentId
                    )
                      ? ae("", !0)
                      : ($(),
                        se(
                          g,
                          {
                            key: 1,
                            tippyProps: { offset: [0, -10], theme: D(n) },
                            class: ee({
                              "!w-full": !0,
                              "!text-inherit": !0,
                              "!pl-4":
                                "horizontal" !== D(l) &&
                                D(a) &&
                                !D(i)(e.item.meta.icon) &&
                                null === e.item.parentId
                            })
                          },
                          {
                            default: ne(() => [oe(le(e.item.meta.title), 1)]),
                            _: 1
                          },
                          8,
                          ["tippyProps", "class"]
                        )),
                    D(a)
                      ? ae("", !0)
                      : ($(),
                        se(
                          ja,
                          { key: 2, extraIcon: e.item.meta.extraIcon },
                          null,
                          8,
                          ["extraIcon"]
                        ))
                  ];
                }),
                default: ne(() => [
                  ($(!0),
                  O(
                    J,
                    null,
                    Z(
                      e.item.children,
                      (e) => (
                        $(),
                        se(
                          x,
                          {
                            key: e.path,
                            "is-nest": !0,
                            item: e,
                            "base-path": m(e.path),
                            class: "nest-menu"
                          },
                          null,
                          8,
                          ["item", "base-path"]
                        )
                      )
                    ),
                    128
                  ))
                ]),
                _: 1
              },
              16,
              ["index"]
            ))
          : ($(),
            se(
              Yn,
              { key: 0, to: e.item },
              {
                default: ne(() => [
                  K(
                    y,
                    Te(
                      {
                        index: m(D(h).path),
                        class: { "submenu-title-noDropdown": !e.isNest },
                        style: D(c)
                      },
                      D(t)
                    ),
                    {
                      title: ne(() => [
                        G(
                          "div",
                          { style: Q(D(o)) },
                          [
                            K(
                              g,
                              {
                                tippyProps: { offset: [0, -10], theme: D(n) },
                                class: "!w-full !text-inherit"
                              },
                              {
                                default: ne(() => [oe(le(D(h).meta.title), 1)]),
                                _: 1
                              },
                              8,
                              ["tippyProps"]
                            ),
                            K(ja, { extraIcon: D(h).meta.extraIcon }, null, 8, [
                              "extraIcon"
                            ])
                          ],
                          4
                        )
                      ]),
                      default: ne(() => {
                        var t, n, o, s, r;
                        return [
                          D(i)(e.item.meta.icon)
                            ? ($(),
                              O(
                                "div",
                                {
                                  key: 0,
                                  class: "sub-menu-icon",
                                  style: Q(D(d))
                                },
                                [
                                  ($(),
                                  se(
                                    pe(
                                      D(Pt)(
                                        D(i)(D(h).meta.icon) ||
                                          (e.item.meta &&
                                            D(i)(e.item.meta.icon))
                                      )
                                    )
                                  ))
                                ],
                                4
                              ))
                            : ae("", !0),
                          (!(null == (t = e.item) ? void 0 : t.meta.icon) &&
                            D(a) &&
                            "vertical" === D(l) &&
                            1 ===
                              (null ==
                              (o = null == (n = e.item) ? void 0 : n.pathList)
                                ? void 0
                                : o.length)) ||
                          (!D(h).meta.icon &&
                            D(a) &&
                            "mix" === D(l) &&
                            2 ===
                              (null ==
                              (r = null == (s = e.item) ? void 0 : s.pathList)
                                ? void 0
                                : r.length))
                            ? ($(),
                              se(
                                f,
                                {
                                  key: 1,
                                  truncated: "",
                                  class: "!w-full !pl-4 !text-inherit"
                                },
                                {
                                  default: ne(() => [
                                    oe(le(D(h).meta.title), 1)
                                  ]),
                                  _: 1
                                }
                              ))
                            : ae("", !0)
                        ];
                      }),
                      _: 1
                    },
                    16,
                    ["index", "class", "style"]
                  )
                ]),
                _: 1
              },
              8,
              ["to"]
            ));
      };
    }
  }),
  Kn = { class: "left-collapse" },
  Qn = wl(
    N({
      __name: "SidebarLeftCollapse",
      props: { isActive: { type: Boolean, default: !1 } },
      emits: ["toggleClick"],
      setup(e, { emit: t }) {
        const { tooltipEffect: l } = qt(),
          a = q(() => [
            "ml-4",
            "mb-1",
            "w-[16px]",
            "h-[16px]",
            "inline-block",
            "align-middle",
            "cursor-pointer",
            "duration-[100ms]"
          ]),
          { $storage: n } = tl(),
          o = q(() => {
            var e;
            return null == (e = n.layout) ? void 0 : e.themeColor;
          }),
          i = t,
          s = () => {
            i("toggleClick");
          };
        return (e, t) => {
          const n = Et,
            i = ke("tippy");
          return (
            $(),
            O("div", Kn, [
              X(
                K(
                  n,
                  {
                    icon: D(It),
                    class: ee([D(a), "light" === D(o) ? "" : "text-primary"]),
                    style: Q({
                      transform: e.isActive ? "none" : "rotateY(180deg)"
                    }),
                    onClick: s
                  },
                  null,
                  8,
                  ["icon", "class", "style"]
                ),
                [
                  [
                    i,
                    {
                      content: e.isActive ? "点击折叠" : "点击展开",
                      theme: D(l),
                      hideOnClick: "toggle",
                      placement: "right"
                    }
                  ]
                ]
              )
            ])
          );
        };
      }
    }),
    [["__scopeId", "data-v-1e1876e7"]]
  ),
  Jn = wl(
    N({
      __name: "SidebarCenterCollapse",
      props: { isActive: { type: Boolean, default: !1 } },
      emits: ["toggleClick"],
      setup(e, { emit: t }) {
        const { tooltipEffect: l } = qt(),
          a = q(() => ["w-[16px]", "h-[16px]"]),
          { $storage: n } = tl(),
          o = q(() => {
            var e;
            return null == (e = n.layout) ? void 0 : e.themeColor;
          }),
          i = t,
          s = () => {
            i("toggleClick");
          };
        return (e, t) => {
          const n = Et,
            i = ke("tippy");
          return X(
            ($(),
            O("div", { class: "center-collapse", onClick: s }, [
              K(
                n,
                {
                  icon: D(At),
                  class: ee([D(a), "light" === D(o) ? "" : "text-primary"]),
                  style: Q({
                    transform: e.isActive ? "none" : "rotateY(180deg)"
                  })
                },
                null,
                8,
                ["icon", "class", "style"]
              )
            ])),
            [
              [
                i,
                {
                  content: e.isActive ? "点击折叠" : "点击展开",
                  theme: D(l),
                  hideOnClick: "toggle",
                  placement: "right"
                }
              ]
            ]
          );
        };
      }
    }),
    [["__scopeId", "data-v-1042ac4d"]]
  ),
  Zn = wl(
    N({
      __name: "NavVertical",
      setup(e) {
        var t, l;
        const { route: a } = Ut(),
          n = P(!1),
          o = P(
            null ==
              (l =
                null == (t = ll().getItem(`${Wt()}configure`))
                  ? void 0
                  : t.showLogo) || l
          ),
          {
            device: i,
            pureApp: s,
            isCollapse: r,
            tooltipEffect: u,
            menuSelect: c,
            toggleSideBar: d
          } = qt(),
          p = P([]),
          h = q(() =>
            "mix" === s.layout && "mobile" !== i.value
              ? p.value
              : Kt().wholeMenus
          ),
          m = q(() => "mix" !== s.layout && 0 === h.value.length),
          f = q(() => {
            var e;
            return ul(null == (e = a.meta) ? void 0 : e.activePath)
              ? a.path
              : a.meta.activePath;
          });
        function g() {
          let e = "";
          (e = f.value), (p.value = []);
          const t = Zt(e, Kt().wholeMenus),
            l = el(t[0] || e, Kt().wholeMenus);
          (null == l ? void 0 : l.children) &&
            (p.value = null == l ? void 0 : l.children);
        }
        return (
          U(
            () => [a.path, Kt().wholeMenus],
            () => {
              a.path.includes("/redirect") || (g(), c(a.path));
            }
          ),
          H(() => {
            g(),
              Rt.on("logoChange", (e) => {
                o.value = e;
              });
          }),
          W(() => {
            Rt.off("logoChange");
          }),
          (e, t) => {
            const l = C,
              a = v,
              c = I;
            return X(
              ($(),
              O(
                "div",
                {
                  class: ee([
                    "sidebar-container",
                    D(o) ? "has-logo" : "no-logo"
                  ]),
                  onMouseenter:
                    t[0] || (t[0] = te((e) => (n.value = !0), ["prevent"])),
                  onMouseleave:
                    t[1] || (t[1] = te((e) => (n.value = !1), ["prevent"]))
                },
                [
                  D(o)
                    ? ($(),
                      se(Xn, { key: 0, collapse: D(r) }, null, 8, ["collapse"]))
                    : ae("", !0),
                  K(
                    a,
                    {
                      "wrap-class": "scrollbar-wrapper",
                      class: ee(["mobile" === D(i) ? "mobile" : "pc"])
                    },
                    {
                      default: ne(() => [
                        K(
                          l,
                          {
                            "unique-opened": "",
                            mode: "vertical",
                            "popper-class": "pure-scrollbar",
                            class: "outer-most select-none",
                            collapse: D(r),
                            "collapse-transition": !1,
                            "popper-effect": D(u),
                            "default-active": D(f)
                          },
                          {
                            default: ne(() => [
                              ($(!0),
                              O(
                                J,
                                null,
                                Z(
                                  D(h),
                                  (e) => (
                                    $(),
                                    se(
                                      Gn,
                                      {
                                        key: e.path,
                                        item: e,
                                        "base-path": e.path,
                                        class: "outer-most select-none"
                                      },
                                      null,
                                      8,
                                      ["item", "base-path"]
                                    )
                                  )
                                ),
                                128
                              ))
                            ]),
                            _: 1
                          },
                          8,
                          ["collapse", "popper-effect", "default-active"]
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ["class"]
                  ),
                  "mobile" !== D(i) && (D(n) || D(r))
                    ? ($(),
                      se(
                        Jn,
                        {
                          key: 1,
                          "is-active": D(s).sidebar.opened,
                          onToggleClick: D(d)
                        },
                        null,
                        8,
                        ["is-active", "onToggleClick"]
                      ))
                    : ae("", !0),
                  "mobile" !== D(i)
                    ? ($(),
                      se(
                        Qn,
                        {
                          key: 2,
                          "is-active": D(s).sidebar.opened,
                          onToggleClick: D(d)
                        },
                        null,
                        8,
                        ["is-active", "onToggleClick"]
                      ))
                    : ae("", !0)
                ],
                34
              )),
              [[c, D(m)]]
            );
          }
        );
      }
    }),
    [["__scopeId", "data-v-13c956f8"]]
  ),
  eo = { class: "horizontal-header" },
  to = ["src"],
  lo = { class: "horizontal-header-right" },
  ao = { class: "check-zh" },
  no = { class: "check-en" },
  oo = { class: "el-dropdown-link navbar-bg-hover" },
  io = ["src"],
  so = { key: 0, class: "dark:text-white" },
  ro = wl(
    N({
      __name: "NavHorizontal",
      setup(e) {
        const t = P(),
          { route: l } = Ut(),
          { locale: a, translationCh: n, translationEn: o } = Jt(),
          {
            title: i,
            logout: s,
            onPanel: r,
            getLogo: u,
            username: h,
            userAvatar: m,
            backTopMenu: v,
            avatarsStyle: f,
            toAccountSettings: g,
            getDropdownItemStyle: y,
            getDropdownItemClass: x
          } = qt(),
          b = q(() => {
            var e;
            return ul(null == (e = l.meta) ? void 0 : e.activePath)
              ? l.path
              : l.meta.activePath;
          });
        return (
          re(() => {
            var e;
            null == (e = t.value) || e.handleResize();
          }),
          (e, l) => {
            const k = C,
              w = Et,
              _ = c,
              S = d,
              T = p,
              M = I;
            return X(
              ($(),
              O("div", eo, [
                G(
                  "div",
                  {
                    class: "horizontal-header-left",
                    onClick: l[0] || (l[0] = (...e) => D(v) && D(v)(...e))
                  },
                  [
                    G("img", { src: D(u)(), alt: "logo" }, null, 8, to),
                    G("span", null, le(D(i)), 1)
                  ]
                ),
                K(
                  k,
                  {
                    ref_key: "menuRef",
                    ref: t,
                    mode: "horizontal",
                    "popper-class": "pure-scrollbar",
                    class: "horizontal-header-menu",
                    "default-active": D(b)
                  },
                  {
                    default: ne(() => [
                      ($(!0),
                      O(
                        J,
                        null,
                        Z(
                          D(Kt)().wholeMenus,
                          (e) => (
                            $(),
                            se(
                              Gn,
                              { key: e.path, item: e, "base-path": e.path },
                              null,
                              8,
                              ["item", "base-path"]
                            )
                          )
                        ),
                        128
                      ))
                    ]),
                    _: 1
                  },
                  8,
                  ["default-active"]
                ),
                G("div", lo, [
                  K(ba, { id: "header-search" }),
                  K(
                    T,
                    { id: "header-translation", trigger: "click" },
                    {
                      dropdown: ne(() => [
                        K(
                          S,
                          { class: "translation" },
                          {
                            default: ne(() => [
                              K(
                                _,
                                {
                                  style: Q(D(y)(D(a), "zh")),
                                  class: ee([
                                    "dark:!text-white",
                                    D(x)(D(a), "zh")
                                  ]),
                                  onClick: D(n)
                                },
                                {
                                  default: ne(() => [
                                    X(
                                      G(
                                        "span",
                                        ao,
                                        [
                                          K(w, { icon: D(wt) }, null, 8, [
                                            "icon"
                                          ])
                                        ],
                                        512
                                      ),
                                      [[Y, "zh" === D(a)]]
                                    ),
                                    oe(" 简体中文 ")
                                  ]),
                                  _: 1
                                },
                                8,
                                ["style", "class", "onClick"]
                              ),
                              K(
                                _,
                                {
                                  style: Q(D(y)(D(a), "en")),
                                  class: ee([
                                    "dark:!text-white",
                                    D(x)(D(a), "en")
                                  ]),
                                  onClick: D(o)
                                },
                                {
                                  default: ne(() => [
                                    X(
                                      G(
                                        "span",
                                        no,
                                        [
                                          K(w, { icon: D(wt) }, null, 8, [
                                            "icon"
                                          ])
                                        ],
                                        512
                                      ),
                                      [[Y, "en" === D(a)]]
                                    ),
                                    oe(" English ")
                                  ]),
                                  _: 1
                                },
                                8,
                                ["style", "class", "onClick"]
                              )
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      default: ne(() => [
                        K(D(Lt), {
                          class:
                            "navbar-bg-hover w-[40px] h-[48px] p-[11px] cursor-pointer outline-none"
                        })
                      ]),
                      _: 1
                    }
                  ),
                  K(Pa, { id: "full-screen" }),
                  K(Ra, { id: "header-notice" }),
                  K(
                    T,
                    { trigger: "click" },
                    {
                      dropdown: ne(() => [
                        K(
                          _,
                          { onClick: D(g) },
                          {
                            default: ne(() => [
                              K(
                                w,
                                { icon: D(_t), style: { margin: "5px" } },
                                null,
                                8,
                                ["icon"]
                              ),
                              oe(" 账户设置 ")
                            ]),
                            _: 1
                          },
                          8,
                          ["onClick"]
                        ),
                        K(
                          S,
                          { class: "logout" },
                          {
                            default: ne(() => [
                              K(
                                _,
                                { onClick: D(s) },
                                {
                                  default: ne(() => [
                                    K(
                                      w,
                                      { icon: D(Ct), style: { margin: "5px" } },
                                      null,
                                      8,
                                      ["icon"]
                                    ),
                                    oe(" 退出系统 ")
                                  ]),
                                  _: 1
                                },
                                8,
                                ["onClick"]
                              )
                            ]),
                            _: 1
                          }
                        )
                      ]),
                      default: ne(() => [
                        G("span", oo, [
                          G("img", { src: D(m), style: Q(D(f)) }, null, 12, io),
                          D(h) ? ($(), O("p", so, le(D(h)), 1)) : ae("", !0)
                        ])
                      ]),
                      _: 1
                    }
                  ),
                  G(
                    "span",
                    {
                      class: "set-icon navbar-bg-hover",
                      title: "打开系统配置",
                      onClick: l[1] || (l[1] = (...e) => D(r) && D(r)(...e))
                    },
                    [K(w, { icon: D(Xe) }, null, 8, ["icon"])]
                  )
                ])
              ])),
              [[M, 0 === D(Kt)().wholeMenus.length]]
            );
          }
        );
      }
    }),
    [["__scopeId", "data-v-0d25125f"]]
  ),
  uo = { key: 0 },
  co = wl(
    N({
      __name: "index",
      setup(e) {
        const t = P(),
          { isDark: l } = ml(),
          { layout: a, dataThemeChange: n } = Ht(),
          o = pl(),
          i = Ml(),
          { $storage: s } = tl(),
          r = L({
            sidebar: q(() => Bt().sidebar),
            device: q(() => Bt().device),
            fixedHeader: q(() => i.fixedHeader),
            classes: q(() => ({
              hideSidebar: !r.sidebar.opened,
              openSidebar: r.sidebar.opened,
              withoutAnimation: r.sidebar.withoutAnimation,
              mobile: "mobile" === r.device
            })),
            hideTabs: q(() => (null == s ? void 0 : s.configure.hideTabs))
          });
        function u(e) {
          var t, l, a, n, o, i;
          window.document.body.setAttribute("layout", e),
            (s.layout = {
              layout: `${e}`,
              theme: null == (t = s.layout) ? void 0 : t.theme,
              darkMode: null == (l = s.layout) ? void 0 : l.darkMode,
              sidebarStatus: null == (a = s.layout) ? void 0 : a.sidebarStatus,
              epThemeColor: null == (n = s.layout) ? void 0 : n.epThemeColor,
              themeColor: null == (o = s.layout) ? void 0 : o.themeColor,
              overallStyle: null == (i = s.layout) ? void 0 : i.overallStyle
            });
        }
        function c(e, t) {
          Bt().toggleDevice(e), Bt().toggleSideBar(t, "resize");
        }
        let d = !0;
        sl(t, (e) => {
          if (o) return;
          const t = e[0],
            [{ inlineSize: l, blockSize: a }] = t.borderBoxSize;
          Bt().setViewportSize({ width: l, height: a }),
            u(l <= 760 ? "vertical" : Bt().layout),
            l > 0 && l <= 760
              ? (c("mobile", !1), (d = !0))
              : l > 760 && l <= 990
              ? d && (c("desktop", !1), (d = !1))
              : l > 990 && !r.sidebar.isClickCollapse
              ? (c("desktop", !0), (d = !0))
              : (c("desktop", !1), (d = !1));
        }),
          H(() => {
            o && c("mobile", !1);
          }),
          we(() => {
            var e;
            n(null == (e = s.layout) ? void 0 : e.overallStyle);
          });
        const p = N({
          name: "LayHeader",
          render: () =>
            xe(
              "div",
              {
                class: { "fixed-header": r.fixedHeader },
                style: [
                  r.hideTabs && a.value.includes("horizontal")
                    ? l.value
                      ? "box-shadow: 0 1px 4px #0d0d0d"
                      : "box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08)"
                    : ""
                ]
              },
              {
                default: () => [
                  i.hiddenSideBar ||
                  (!a.value.includes("vertical") && !a.value.includes("mix"))
                    ? null
                    : xe(tn),
                  !i.hiddenSideBar && a.value.includes("horizontal")
                    ? xe(ro)
                    : null,
                  xe(Xl)
                ]
              }
            )
        });
        return (e, l) => {
          const n = M,
            o = v;
          return (
            $(),
            O(
              "div",
              {
                ref_key: "appWrapperRef",
                ref: t,
                class: ee(["app-wrapper", D(r).classes])
              },
              [
                X(
                  G(
                    "div",
                    {
                      class: "app-mask",
                      onClick: l[0] || (l[0] = (e) => D(Bt)().toggleSideBar())
                    },
                    null,
                    512
                  ),
                  [
                    [
                      Y,
                      "mobile" === D(r).device &&
                        D(r).sidebar.opened &&
                        D(a).includes("vertical")
                    ]
                  ]
                ),
                X(K(Zn, null, null, 512), [
                  [
                    Y,
                    !D(i).hiddenSideBar &&
                      (D(a).includes("vertical") || D(a).includes("mix"))
                  ]
                ]),
                G(
                  "div",
                  {
                    class: ee([
                      "main-container",
                      D(i).hiddenSideBar ? "main-hidden" : ""
                    ])
                  },
                  [
                    D(r).fixedHeader
                      ? ($(),
                        O("div", uo, [
                          K(D(p)),
                          K(pn, { "fixed-header": D(r).fixedHeader }, null, 8, [
                            "fixed-header"
                          ])
                        ]))
                      : ($(),
                        se(
                          o,
                          { key: 1 },
                          {
                            default: ne(() => [
                              K(
                                n,
                                {
                                  title: "回到顶部",
                                  target: ".main-container .el-scrollbar__wrap"
                                },
                                { default: ne(() => [K(D(dn))]), _: 1 }
                              ),
                              K(D(p)),
                              K(
                                pn,
                                { "fixed-header": D(r).fixedHeader },
                                null,
                                8,
                                ["fixed-header"]
                              )
                            ]),
                            _: 1
                          }
                        ))
                  ],
                  2
                ),
                K(On)
              ],
              2
            )
          );
        };
      }
    }),
    [["__scopeId", "data-v-33da586a"]]
  );
export { co as default };
