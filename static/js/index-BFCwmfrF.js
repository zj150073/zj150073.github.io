var e = Object.defineProperty,
  r = Object.defineProperties,
  t = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  p = (r, t, o) =>
    t in r
      ? e(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (r[t] = o);
import { u as a } from "./index-CDxT1Fie.js";
import {
  o as l,
  c as n,
  a as m,
  d as u,
  O as j,
  u as c,
  bk as v,
  bi as d
} from "./@vue-uYjjPr_8.js";
import { _ as f } from "./_plugin-vue_expo.js";
import "./vite-plugin-fake-server-CytHVkXj.js";
import "./js-cookie-BXEMiIsG.js";
import "./nprogress-Dbi5RM6p.js";
import "./axs-request-BDKVJbFe.js";
import "./pinia-DIp8UqE1.js";
import "./axios-CoNXo1z2.js";
import "./vue-router-B2ECbEYM.js";
import "./ajmer.utils-BPzkq30X.js";
import "./vue-DP70K6k3.js";
import "./@vueuse-ChwCXi05.js";
import "./responsive-storage-Dm27tqI4.js";
import "./version-rocket-jMrrWvOm.js";
import "./element-plus-MYdaSVk9.js";
import "./lodash-es-CZ_XKJ1O.js";
import "./async-validator-Cuo4gI4y.js";
import "./@element-plus-BCkKEMj9.js";
import "./@ctrl-D2oWfImC.js";
import "./@popperjs-D3lHDW-0.js";
import "./plus-pro-components-GrzOBuxf.js";
import "./view-tool-v3-D8LvUbsn.js";
const b = { width: "32", height: "32", viewBox: "0 0 48 48" },
  g = [
    m(
      "path",
      {
        fill: "#2F88FF",
        "fill-rule": "evenodd",
        stroke: "#000",
        "stroke-linejoin": "round",
        "stroke-width": "4",
        d: "M44 40.836q-7.34-8.96-13.036-10.168t-10.846-.365V41L4 23.545 20.118 7v10.167q9.523.075 16.192 6.833 6.668 6.758 7.69 16.836Z",
        "clip-rule": "evenodd"
      },
      null,
      -1
    )
  ];
const h = {
    render: function (e, r) {
      return l(), n("svg", b, [...g]);
    }
  },
  w = (e) => (v("data-v-5a9e63c8"), (e = e()), d(), e),
  x = { class: "w-full h-full text-center" },
  y = w(() => m("h1", null, "业务内容模块", -1)),
  O = w(() =>
    m(
      "p",
      null,
      "使用场景：需要外嵌平台某个页面，不需要展示菜单导航以及额外模块",
      -1
    )
  ),
  k = u(
    ((_ = ((e, r) => {
      for (var t in r || (r = {})) s.call(r, t) && p(e, t, r[t]);
      if (o) for (var t of o(r)) i.call(r, t) && p(e, t, r[t]);
      return e;
    })({}, { name: "Empty" })),
    r(
      _,
      t({
        __name: "index",
        setup(e) {
          const { router: r } = a();
          return (e, t) => (
            l(),
            n("div", x, [
              y,
              O,
              m(
                "div",
                {
                  class: "back",
                  title: "返回上一页",
                  onClick: t[0] || (t[0] = (e) => c(r).go(-1))
                },
                [j(c(h), { class: "w-[80px] h-[80px]" })]
              )
            ])
          );
        }
      })
    ))
  );
var _;
const P = f(k, [["__scopeId", "data-v-5a9e63c8"]]);
export { P as default };
