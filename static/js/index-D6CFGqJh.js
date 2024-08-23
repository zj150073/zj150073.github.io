import { B as e, x as a, C as l, D as s } from "./element-plus-MYdaSVk9.js";
import {
  d as u,
  r as n,
  c as t,
  a as o,
  O as r,
  R as d,
  V as i,
  P as p,
  bk as v,
  bi as g,
  o as c
} from "./@vue-uYjjPr_8.js";
import { _ as m } from "./_plugin-vue_expo.js";
import "./lodash-es-CZ_XKJ1O.js";
import "./async-validator-Cuo4gI4y.js";
import "./@vueuse-ChwCXi05.js";
import "./@element-plus-BCkKEMj9.js";
import "./@ctrl-D2oWfImC.js";
import "./@popperjs-D3lHDW-0.js";
const z = (e) => (v("data-v-5444016f"), (e = e()), g(), e),
  b = { class: "flex items-center mb-4" },
  f = { class: "ml-4" },
  k = z(() => o("hr", { class: "my-4" }, null, -1)),
  C = { class: "demo-pagination-block" },
  j = z(() => o("div", { class: "demonstration" }, "Total item count", -1)),
  h = { class: "demo-pagination-block" },
  _ = z(() => o("div", { class: "demonstration" }, "Change page size", -1)),
  U = { class: "demo-pagination-block" },
  V = z(() => o("div", { class: "demonstration" }, "Jump to", -1)),
  x = { class: "demo-pagination-block" },
  S = z(() => o("div", { class: "demonstration" }, "All combined", -1)),
  y = m(
    u({
      __name: "index",
      setup(u) {
        const v = n(5),
          g = n(5),
          m = n(5),
          z = n(4),
          y = n(100),
          P = n(100),
          A = n(100),
          B = n("default"),
          D = n(!1),
          I = n(!1),
          J = (e) => {},
          O = (e) => {};
        return (u, n) => {
          const R = s,
            T = e,
            q = a,
            w = l;
          return (
            c(),
            t(
              p,
              null,
              [
                o("div", b, [
                  r(
                    T,
                    {
                      modelValue: B.value,
                      "onUpdate:modelValue":
                        n[0] || (n[0] = (e) => (B.value = e)),
                      class: "mr-4"
                    },
                    {
                      default: d(() => [
                        r(
                          R,
                          { value: "default" },
                          { default: d(() => [i("default")]), _: 1 }
                        ),
                        r(
                          R,
                          { value: "large" },
                          { default: d(() => [i("large")]), _: 1 }
                        ),
                        r(
                          R,
                          { value: "small" },
                          { default: d(() => [i("small")]), _: 1 }
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ["modelValue"]
                  ),
                  o("div", null, [
                    i(" background: "),
                    r(
                      q,
                      {
                        modelValue: D.value,
                        "onUpdate:modelValue":
                          n[1] || (n[1] = (e) => (D.value = e)),
                        class: "ml-2"
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ]),
                  o("div", f, [
                    i(" disabled: "),
                    r(
                      q,
                      {
                        modelValue: I.value,
                        "onUpdate:modelValue":
                          n[2] || (n[2] = (e) => (I.value = e)),
                        class: "ml-2"
                      },
                      null,
                      8,
                      ["modelValue"]
                    )
                  ])
                ]),
                k,
                o("div", C, [
                  j,
                  r(
                    w,
                    {
                      "current-page": v.value,
                      "onUpdate:currentPage":
                        n[3] || (n[3] = (e) => (v.value = e)),
                      "page-size": 100,
                      size: B.value,
                      disabled: I.value,
                      background: D.value,
                      layout: "total, prev, pager, next",
                      total: 1e3,
                      onSizeChange: J,
                      onCurrentChange: O
                    },
                    null,
                    8,
                    ["current-page", "size", "disabled", "background"]
                  )
                ]),
                o("div", h, [
                  _,
                  r(
                    w,
                    {
                      "current-page": g.value,
                      "onUpdate:currentPage":
                        n[4] || (n[4] = (e) => (g.value = e)),
                      "page-size": y.value,
                      "onUpdate:pageSize":
                        n[5] || (n[5] = (e) => (y.value = e)),
                      "page-sizes": [100, 200, 300, 400],
                      size: B.value,
                      disabled: I.value,
                      background: D.value,
                      layout: "sizes, prev, pager, next",
                      total: 1e3,
                      onSizeChange: J,
                      onCurrentChange: O
                    },
                    null,
                    8,
                    [
                      "current-page",
                      "page-size",
                      "size",
                      "disabled",
                      "background"
                    ]
                  )
                ]),
                o("div", U, [
                  V,
                  r(
                    w,
                    {
                      "current-page": m.value,
                      "onUpdate:currentPage":
                        n[6] || (n[6] = (e) => (m.value = e)),
                      "page-size": P.value,
                      "onUpdate:pageSize":
                        n[7] || (n[7] = (e) => (P.value = e)),
                      size: B.value,
                      disabled: I.value,
                      background: D.value,
                      layout: "prev, pager, next, jumper",
                      total: 1e3,
                      onSizeChange: J,
                      onCurrentChange: O
                    },
                    null,
                    8,
                    [
                      "current-page",
                      "page-size",
                      "size",
                      "disabled",
                      "background"
                    ]
                  )
                ]),
                o("div", x, [
                  S,
                  r(
                    w,
                    {
                      "current-page": z.value,
                      "onUpdate:currentPage":
                        n[8] || (n[8] = (e) => (z.value = e)),
                      "page-size": A.value,
                      "onUpdate:pageSize":
                        n[9] || (n[9] = (e) => (A.value = e)),
                      "page-sizes": [100, 200, 300, 400],
                      size: B.value,
                      disabled: I.value,
                      background: D.value,
                      layout: "total, sizes, prev, pager, next, jumper",
                      total: 400,
                      onSizeChange: J,
                      onCurrentChange: O
                    },
                    null,
                    8,
                    [
                      "current-page",
                      "page-size",
                      "size",
                      "disabled",
                      "background"
                    ]
                  )
                ])
              ],
              64
            )
          );
        };
      }
    }),
    [["__scopeId", "data-v-5444016f"]]
  );
export { y as default };
