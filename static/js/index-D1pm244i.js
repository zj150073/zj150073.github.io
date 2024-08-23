import { K as e } from "./element-plus-MYdaSVk9.js";
import {
  d as s,
  r as a,
  o as l,
  c as o,
  a as t,
  O as r,
  u,
  C as d,
  P as m,
  bk as n,
  bi as p
} from "./@vue-uYjjPr_8.js";
import { _ as i } from "./_plugin-vue_expo.js";
import "./lodash-es-CZ_XKJ1O.js";
import "./async-validator-Cuo4gI4y.js";
import "./@vueuse-ChwCXi05.js";
import "./@element-plus-BCkKEMj9.js";
import "./@ctrl-D2oWfImC.js";
import "./@popperjs-D3lHDW-0.js";
const c = (e) => (n("data-v-e4daf9b3"), (e = e()), p(), e),
  j = { class: "demo-rate-block" },
  v = c(() => t("span", { class: "demonstration" }, "Default", -1)),
  f = { class: "demo-rate-block" },
  _ = c(() =>
    t("span", { class: "demonstration" }, "Color for different levels", -1)
  ),
  b = i(
    s({
      __name: "index",
      setup(s) {
        const n = a(0),
          p = a(0),
          i = a(["#99A9BF", "#F7BA2A", "#FF9900"]);
        return (s, a) => {
          const c = e;
          return (
            l(),
            o(
              m,
              null,
              [
                t("div", j, [
                  v,
                  r(
                    c,
                    {
                      modelValue: u(n),
                      "onUpdate:modelValue":
                        a[0] || (a[0] = (e) => (d(n) ? (n.value = e) : null))
                    },
                    null,
                    8,
                    ["modelValue"]
                  )
                ]),
                t("div", f, [
                  _,
                  r(
                    c,
                    {
                      modelValue: u(p),
                      "onUpdate:modelValue":
                        a[1] || (a[1] = (e) => (d(p) ? (p.value = e) : null)),
                      colors: u(i)
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
    [["__scopeId", "data-v-e4daf9b3"]]
  );
export { b as default };
