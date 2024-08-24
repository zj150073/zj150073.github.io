var e = Object.defineProperty,
  r = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  t = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  s = (r, a, t) =>
    a in r
      ? e(r, a, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[a] = t);
import { v as n } from "./element-plus-Dxgkr2s1.js";
import { d as m } from "./vue-router-BrmJFhAM.js";
import {
  d as f,
  r as i,
  u,
  w as p,
  k as c,
  $ as v,
  o as d,
  c as j,
  a as b,
  p as y
} from "./@vue-BKBLuHe7.js";
import { _ as O } from "./zjzj.js";
import "./lodash-es-V7-Q3LJP.js";
import "./async-validator-Cuo4gI4y.js";
import "./@element-plus-fXI5LEjy.js";
import "./@ctrl-D2oWfImC.js";
import "./@popperjs-D3lHDW-0.js";
const h = { class: "frame", "element-loading-text": "加载中..." },
  P = ["src"],
  _ = f(
    ((I = ((e, r) => {
      for (var a in r || (r = {})) o.call(r, a) && s(e, a, r[a]);
      if (t) for (var a of t(r)) l.call(r, a) && s(e, a, r[a]);
      return e;
    })({}, { name: "LayFrame" })),
    r(
      I,
      a({
        __name: "frame",
        props: { frameInfo: {} },
        setup(e) {
          var r, a, t;
          const o = e,
            l = i(!0),
            s = m(),
            f = i(""),
            O = i(null);
          function _() {
            l.value = !1;
          }
          return (
            (null == (r = u(s.meta)) ? void 0 : r.frameSrc) &&
              (f.value = null == (a = u(s.meta)) ? void 0 : a.frameSrc),
            !1 === (null == (t = u(s.meta)) ? void 0 : t.frameLoading) && _(),
            p(
              () => s.fullPath,
              (e) => {
                var r, a, t;
                "Redirect" === s.name &&
                  e.includes(null == (r = o.frameInfo) ? void 0 : r.fullPath) &&
                  ((f.value = e), (l.value = !0)),
                  (null == (a = o.frameInfo) ? void 0 : a.fullPath) === e &&
                    (f.value = null == (t = o.frameInfo) ? void 0 : t.frameSrc);
              }
            ),
            c(() => {
              y(() => {
                const e = u(O);
                if (!e) return;
                const r = e;
                r.attachEvent
                  ? r.attachEvent("onload", () => {
                      _();
                    })
                  : (e.onload = () => {
                      _();
                    });
              });
            }),
            (e, r) => {
              const a = n;
              return v(
                (d(),
                j("div", h, [
                  b(
                    "iframe",
                    {
                      ref_key: "frameRef",
                      ref: O,
                      src: u(f),
                      class: "frame-iframe"
                    },
                    null,
                    8,
                    P
                  )
                ])),
                [[a, u(l)]]
              );
            }
          );
        }
      })
    ))
  );
var I;
const g = O(_, [["__scopeId", "data-v-9bb203a4"]]);
export { g as default };
