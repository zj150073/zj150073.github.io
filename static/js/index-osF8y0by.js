var e = Object.defineProperty,
  r = Object.defineProperties,
  t = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  s = (r, t, o) =>
    t in r
      ? e(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (r[t] = o);
import {
  o as n,
  c as i,
  a as p,
  d as c,
  P as u,
  u as d,
  bf as f,
  bd as v
} from "./@vue-BKBLuHe7.js";
import { u as b } from "./vue-router-BrmJFhAM.js";
import { _ as m } from "./zjzj.js";
const h = { width: "32", height: "32", viewBox: "0 0 48 48" },
  j = [
    p(
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
const w = {
    render: function (e, r) {
      return n(), i("svg", h, [...j]);
    }
  },
  y = (e) => (f("data-v-1ca328de"), (e = e()), v(), e),
  O = { class: "w-full h-full text-center" },
  g = y(() => p("h1", null, "业务内容模块", -1)),
  x = y(() =>
    p(
      "p",
      null,
      "使用场景：需要外嵌平台某个页面，不需要展示菜单导航以及额外模块",
      -1
    )
  ),
  _ = c(
    ((P = ((e, r) => {
      for (var t in r || (r = {})) a.call(r, t) && s(e, t, r[t]);
      if (o) for (var t of o(r)) l.call(r, t) && s(e, t, r[t]);
      return e;
    })({}, { name: "Empty" })),
    r(
      P,
      t({
        __name: "index",
        setup(e) {
          const r = b();
          return (e, t) => (
            n(),
            i("div", O, [
              g,
              x,
              p(
                "div",
                {
                  class: "back",
                  title: "返回上一页",
                  onClick: t[0] || (t[0] = (e) => d(r).go(-1))
                },
                [u(d(w), { class: "w-[80px] h-[80px]" })]
              )
            ])
          );
        }
      })
    ))
  );
var P;
const k = m(_, [["__scopeId", "data-v-1ca328de"]]);
export { k as default };
