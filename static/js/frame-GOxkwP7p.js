var e = Object.defineProperty,
  r = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  t = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  i = (r, o, t) =>
    o in r
      ? e(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[o] = t);
import { v as l } from "./element-plus-MYdaSVk9.js";
import { u as n } from "./index-CDxT1Fie.js";
import {
  d as m,
  r as p,
  u,
  w as f,
  i as c,
  $ as v,
  o as j,
  c as d,
  a as b,
  n as y
} from "./@vue-uYjjPr_8.js";
import { _ as g } from "./_plugin-vue_expo.js";
import "./lodash-es-CZ_XKJ1O.js";
import "./async-validator-Cuo4gI4y.js";
import "./@vueuse-ChwCXi05.js";
import "./@element-plus-BCkKEMj9.js";
import "./@ctrl-D2oWfImC.js";
import "./@popperjs-D3lHDW-0.js";
import "./vite-plugin-fake-server-CytHVkXj.js";
import "./js-cookie-BXEMiIsG.js";
import "./nprogress-Dbi5RM6p.js";
import "./axs-request-BDKVJbFe.js";
import "./pinia-DIp8UqE1.js";
import "./axios-CoNXo1z2.js";
import "./vue-router-B2ECbEYM.js";
import "./ajmer.utils-BPzkq30X.js";
import "./vue-DP70K6k3.js";
import "./responsive-storage-Dm27tqI4.js";
import "./version-rocket-jMrrWvOm.js";
import "./plus-pro-components-GrzOBuxf.js";
import "./view-tool-v3-D8LvUbsn.js";
const O = { class: "frame", "element-loading-text": "加载中..." },
  h = ["src"],
  P = m(
    ((_ = ((e, r) => {
      for (var o in r || (r = {})) a.call(r, o) && i(e, o, r[o]);
      if (t) for (var o of t(r)) s.call(r, o) && i(e, o, r[o]);
      return e;
    })({}, { name: "LayFrame" })),
    r(
      _,
      o({
        __name: "frame",
        props: { frameInfo: {} },
        setup(e) {
          var r, o, t;
          const a = e,
            s = p(!0),
            { route: i } = n(),
            m = p(""),
            g = p(null);
          function P() {
            s.value = !1;
          }
          return (
            (null == (r = u(i.meta)) ? void 0 : r.frameSrc) &&
              (m.value = null == (o = u(i.meta)) ? void 0 : o.frameSrc),
            !1 === (null == (t = u(i.meta)) ? void 0 : t.frameLoading) && P(),
            f(
              () => i.fullPath,
              (e) => {
                var r, o, t;
                "Redirect" === i.name &&
                  e.includes(null == (r = a.frameInfo) ? void 0 : r.fullPath) &&
                  ((m.value = e), (s.value = !0)),
                  (null == (o = a.frameInfo) ? void 0 : o.fullPath) === e &&
                    (m.value = null == (t = a.frameInfo) ? void 0 : t.frameSrc);
              }
            ),
            c(() => {
              y(() => {
                const e = u(g);
                if (!e) return;
                const r = e;
                r.attachEvent
                  ? r.attachEvent("onload", () => {
                      P();
                    })
                  : (e.onload = () => {
                      P();
                    });
              });
            }),
            (e, r) => {
              const o = l;
              return v(
                (j(),
                d("div", O, [
                  b(
                    "iframe",
                    {
                      ref_key: "frameRef",
                      ref: g,
                      src: u(m),
                      class: "frame-iframe"
                    },
                    null,
                    8,
                    h
                  )
                ])),
                [[o, u(s)]]
              );
            }
          );
        }
      })
    ))
  );
var _;
const w = g(P, [["__scopeId", "data-v-5a2b8ea0"]]);
export { w as default };
