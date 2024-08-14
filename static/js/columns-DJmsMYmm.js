import{s as e,a1 as t,E as i,Q as s}from"./@vue-CFXrvzpc.js";var r={pkg:{name:"vue-pure-admin",version:"5.7.0",engines:{node:"^18.18.0 || ^20.9.0 || >=21.1.0"},dependencies:{"@pureadmin/descriptions":"^1.2.1","@pureadmin/table":"^3.1.2","@pureadmin/utils":"^2.4.8","@amap/amap-jsapi-loader":"^1.0.1","@howdyjs/mouse-menu":"^2.1.3","@infectoone/vue-ganttastic":"^2.3.2","@logicflow/core":"^1.2.28","@logicflow/extension":"^1.2.28","@vue-flow/background":"^1.3.0","@vue-flow/core":"^1.39.3","@vueuse/core":"^10.11.0","@vueuse/motion":"^2.2.3","@wangeditor/editor":"^5.1.23","@wangeditor/editor-for-vue":"^5.1.12","@zxcvbn-ts/core":"^3.0.4","animate.css":"^4.1.1","axs-request":"^0.0.1","china-area-data":"^5.0.1",cropperjs:"^1.6.2",dayjs:"^1.11.12",echarts:"^5.5.1","el-table-infinite-scroll":"^3.0.6","element-plus":"^2.7.8","intro.js":"^7.2.0","js-cookie":"^3.0.5",jsbarcode:"^3.11.6",localforage:"^1.10.0","mint-filter":"^4.0.3",mitt:"^3.0.1",mqtt:"4.3.8",nprogress:"^0.2.0",path:"^0.12.7",pinia:"^2.2.1","pinyin-pro":"^3.24.2","plus-pro-components":"^0.1.14",qrcode:"^1.5.4",qs:"^6.13.0","responsive-storage":"^2.2.0",sortablejs:"^1.15.2",swiper:"^11.1.9",typeit:"^8.8.4","v-contextmenu":"^3.2.0","v3-infinite-loading":"^1.3.1","version-rocket":"^1.7.1","vite-plugin-html":"^3.2.2",vue:"^3.4.37","vue-demi":"^0.14.10","vue-i18n":"^9.13.1","vue-json-pretty":"^2.4.0","vue-pdf-embed":"^2.1.0","vue-router":"^4.4.3","vue-tippy":"^6.4.4","vue-types":"^5.1.3","vue-virtual-scroller":"2.0.0-beta.8","vue-waterfall-plugin-next":"^2.4.3","vue3-danmaku":"^1.6.1","vue3-puzzle-vcode":"^1.1.7",vuedraggable:"^4.1.0","vxe-table":"4.6.18","wavesurfer.js":"^7.8.2",xgplayer:"^3.0.18",xlsx:"^0.18.5"},devDependencies:{"@commitlint/cli":"^19.4.0","@commitlint/config-conventional":"^19.2.2","@commitlint/types":"^19.0.3","@eslint/js":"^9.8.0","@faker-js/faker":"^8.4.1","@iconify-icons/ep":"^1.2.12","@iconify-icons/ri":"^1.2.10","@iconify/vue":"^4.1.2","@intlify/unplugin-vue-i18n":"^4.0.0","@pureadmin/theme":"^3.2.0","@types/dagre":"^0.7.52","@types/gradient-string":"^1.1.6","@types/intro.js":"^5.1.5","@types/js-cookie":"^3.0.6","@types/node":"^22.1.0","@types/nprogress":"^0.2.3","@types/qrcode":"^1.5.5","@types/qs":"^6.9.15","@types/sortablejs":"^1.15.8","@typescript-eslint/eslint-plugin":"^8.0.1","@typescript-eslint/parser":"^8.0.1","@vitejs/plugin-vue":"^5.1.2","@vitejs/plugin-vue-jsx":"^4.0.0",autoprefixer:"^10.4.20",boxen:"^8.0.1","cross-env":"^7.0.3",cssnano:"^7.0.4",dagre:"^0.8.5",eslint:"^9.8.0","eslint-config-prettier":"^9.1.0","eslint-define-config":"^2.1.0","eslint-plugin-prettier":"^5.2.1","eslint-plugin-vue":"^9.27.0","gradient-string":"^2.0.2",husky:"^9.1.4","lint-staged":"^15.2.8",postcss:"^8.4.41","postcss-html":"^1.7.0","postcss-import":"^16.1.0","postcss-scss":"^4.0.9",prettier:"^3.3.3",rimraf:"^5.0.10","rollup-plugin-visualizer":"^5.12.0",sass:"^1.77.8",stylelint:"^16.8.1","stylelint-config-recess-order":"^5.0.1","stylelint-config-recommended-vue":"^1.5.0","stylelint-config-standard-scss":"^13.1.0","stylelint-prettier":"^5.0.2",svgo:"^3.3.2",tailwindcss:"^3.4.8",typescript:"^5.5.3",vite:"^5.3.5","vite-plugin-cdn-import":"^1.0.1","vite-plugin-checker":"^0.7.2","vite-plugin-compression":"^0.5.1","vite-plugin-fake-server":"^2.1.1","vite-plugin-remove-console":"^2.2.0","vite-plugin-router-warn":"^1.0.0","vite-plugin-vue-inspector":"^5.1.3","vite-svg-loader":"^5.1.0","vue-eslint-parser":"^9.4.3","vue-tsc":"^2.0.29"}},lastBuildTime:"2024-08-14 09:00:31"};function n(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!s(e)}function l(){const{pkg:s,lastBuildTime:l}=r,{version:a,engines:o}=s;return{columns:[{label:"当前版本",minWidth:100,cellRenderer:()=>e(t("el-tag"),{size:"large",class:"!text-base"},n(a)?a:{default:()=>[a]})},{label:"最后编译时间",minWidth:120,cellRenderer:()=>e(t("el-tag"),{size:"large",class:"!text-base"},n(l)?l:{default:()=>[l]})},{label:"推荐 node 版本",minWidth:140,cellRenderer:()=>e(t("el-tag"),{size:"large",class:"!text-base"},{default:()=>[o.node]})},{label:"推荐 pnpm 版本",minWidth:140,cellRenderer:()=>e(t("el-tag"),{size:"large",class:"!text-base"},{default:()=>[o.pnpm]})},{label:"完整版代码地址",minWidth:140,className:"pure-version",cellRenderer:()=>e("a",{href:"https://github.com/pure-admin/vue-pure-admin",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[i("完整版代码链接")])])},{label:"精简版代码地址",minWidth:140,className:"pure-version",cellRenderer:()=>e("a",{href:"https://github.com/pure-admin/pure-admin-thin",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[i("精简版代码链接")])])},{label:"文档地址",minWidth:100,className:"pure-version",cellRenderer:()=>e("a",{href:"https://pure-admin.github.io/pure-admin-doc",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[i("文档链接")])])},{label:"预览地址",minWidth:100,className:"pure-version",cellRenderer:()=>e("a",{href:"https://pure-admin.github.io/vue-pure-admin",target:"_blank"},[e("span",{style:"color: var(--el-color-primary)"},[i("预览链接")])])}]}}export{l as useColumns};
