import { H as a } from "./element-plus-Dxgkr2s1.js";
import {
  d as e,
  r as s,
  o as l,
  c as o,
  a as t,
  P as r,
  u as d,
  F as n,
  Q as m,
  bf as u,
  bd as p
} from "./@vue-BKBLuHe7.js";
import { _ as c } from "./zjzj.js";
import "./lodash-es-V7-Q3LJP.js";
import "./async-validator-Cuo4gI4y.js";
import "./@element-plus-fXI5LEjy.js";
import "./@ctrl-D2oWfImC.js";
import "./@popperjs-D3lHDW-0.js";
const i = (a) => (u("data-v-bab1cf5d"), (a = a()), p(), a),
  f = { class: "demo-rate-block" },
  v = i(() => t("span", { class: "demonstration" }, "Default", -1)),
  j = { class: "demo-rate-block" },
  b = i(() =>
    t("span", { class: "demonstration" }, "Color for different levels", -1)
  ),
  _ = c(
    e({
      __name: "index",
      setup(e) {
        const u = s(0),
          p = s(0),
          c = s(["#99A9BF", "#F7BA2A", "#FF9900"]);
        return (e, s) => {
          const i = a;
          return (
            l(),
            o(
              m,
              null,
              [
                t("div", f, [
                  v,
                  r(
                    i,
                    {
                      modelValue: d(u),
                      "onUpdate:modelValue":
                        s[0] || (s[0] = (a) => (n(u) ? (u.value = a) : null))
                    },
                    null,
                    8,
                    ["modelValue"]
                  )
                ]),
                t("div", j, [
                  b,
                  r(
                    i,
                    {
                      modelValue: d(p),
                      "onUpdate:modelValue":
                        s[1] || (s[1] = (a) => (n(p) ? (p.value = a) : null)),
                      colors: d(c)
                    },
                    null,
                    8,
                    ["modelValue", "colors"]
                  )
                ])
              ],
              64
            )
          );
        };
      }
    }),
    [["__scopeId", "data-v-bab1cf5d"]]
  );
export { _ as default };
