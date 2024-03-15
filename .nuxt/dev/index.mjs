import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, createError, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, getQuery as getQuery$1, getCookie, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getRouterParam, readBody, getResponseStatusText } from 'file://A:/workspace/weeser.github.io/node_modules/h3/dist/index.mjs';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file://A:/workspace/weeser.github.io/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file://A:/workspace/weeser.github.io/node_modules/devalue/index.js';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash, isRelative } from 'file://A:/workspace/weeser.github.io/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file://A:/workspace/weeser.github.io/node_modules/vue/server-renderer/index.mjs';
import { renderSSRHead } from 'file://A:/workspace/weeser.github.io/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://A:/workspace/weeser.github.io/node_modules/ofetch/dist/node.mjs';
import destr, { destr as destr$1 } from 'file://A:/workspace/weeser.github.io/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://A:/workspace/weeser.github.io/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://A:/workspace/weeser.github.io/node_modules/hookable/dist/index.mjs';
import { klona } from 'file://A:/workspace/weeser.github.io/node_modules/klona/dist/index.mjs';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'file://A:/workspace/weeser.github.io/node_modules/scule/dist/index.mjs';
import defu, { defuFn, defu as defu$1 } from 'file://A:/workspace/weeser.github.io/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://A:/workspace/weeser.github.io/node_modules/ohash/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://A:/workspace/weeser.github.io/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://A:/workspace/weeser.github.io/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://A:/workspace/weeser.github.io/node_modules/radix3/dist/index.mjs';
import * as vue$1 from 'file://A:/workspace/weeser.github.io/node_modules/vue/index.mjs';
import { version, unref } from 'file://A:/workspace/weeser.github.io/node_modules/vue/index.mjs';
import { extname } from 'file://A:/workspace/weeser.github.io/node_modules/pathe/dist/index.mjs';
import { unified } from 'file://A:/workspace/weeser.github.io/node_modules/unified/index.js';
import { toString } from 'file://A:/workspace/weeser.github.io/node_modules/mdast-util-to-string/index.js';
import { postprocess, preprocess } from 'file://A:/workspace/weeser.github.io/node_modules/micromark/dev/index.js';
import { stringifyPosition } from 'file://A:/workspace/weeser.github.io/node_modules/unist-util-stringify-position/index.js';
import { markdownLineEnding, markdownSpace } from 'file://A:/workspace/weeser.github.io/node_modules/micromark-util-character/dev/index.js';
import { push, splice } from 'file://A:/workspace/weeser.github.io/node_modules/micromark-util-chunked/dev/index.js';
import { resolveAll } from 'file://A:/workspace/weeser.github.io/node_modules/micromark-util-resolve-all/index.js';
import { normalizeUri } from 'file://A:/workspace/weeser.github.io/node_modules/micromark-util-sanitize-uri/dev/index.js';
import slugify from 'file://A:/workspace/weeser.github.io/node_modules/slugify/slugify.js';
import remarkParse from 'file://A:/workspace/weeser.github.io/node_modules/remark-parse/index.js';
import remark2rehype from 'file://A:/workspace/weeser.github.io/node_modules/remark-rehype/index.js';
import remarkMDC, { parseFrontMatter } from 'file://A:/workspace/weeser.github.io/node_modules/remark-mdc/dist/index.mjs';
import { toString as toString$1 } from 'file://A:/workspace/weeser.github.io/node_modules/hast-util-to-string/index.js';
import Slugger from 'file://A:/workspace/weeser.github.io/node_modules/github-slugger/index.js';
import { detab } from 'file://A:/workspace/weeser.github.io/node_modules/detab/index.js';
import remarkEmoji from 'file://A:/workspace/weeser.github.io/node_modules/remark-emoji/index.js';
import remarkGFM from 'file://A:/workspace/weeser.github.io/node_modules/remark-gfm/index.js';
import rehypeExternalLinks from 'file://A:/workspace/weeser.github.io/node_modules/rehype-external-links/index.js';
import rehypeSortAttributeValues from 'file://A:/workspace/weeser.github.io/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file://A:/workspace/weeser.github.io/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file://A:/workspace/weeser.github.io/node_modules/rehype-raw/index.js';
import { createServerHead as createServerHead$1 } from 'file://A:/workspace/weeser.github.io/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file://A:/workspace/weeser.github.io/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const g=E(!0);return g[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const l=B(),d=l.name;function n(e){return e?e!=="false":!1}const I=globalThis.process?.platform||"",T=n(s.CI)||l.ci!==!1,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const C=t==="test"||n(s.TEST);n(s.MINIMAL)||T||C||!R;const a=/^win/i.test(I);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(R||a)&&s.TERM!=="dumb"||T);const _=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(_?.split(".")[0])||null;const W=globalThis.process||Object.create(null),c={versions:{}};new Proxy(W,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in c)return c[o]}});const A=globalThis.process?.release?.name==="node",L=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,O=!!globalThis.fastly,S=!!globalThis.Netlify,N=!!globalThis.EdgeRuntime,u=globalThis.navigator?.userAgent==="Cloudflare-Workers",b=!!globalThis.__lagon__,F=[[S,"netlify"],[N,"edge-light"],[u,"workerd"],[O,"fastly"],[D,"deno"],[L,"bun"],[A,"node"],[b,"lagon"]];function G(){const e=F.find(o=>o[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {
  "nuxt": {
    "buildId": "dev"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "primevue": {
      "usePrimeVue": true,
      "resolvePath": "",
      "cssLayerOrder": "tailwind-base, primevue, tailwind-utilities",
      "importPT": "",
      "options": {
        "ripple": true,
        "usePrimeVue": true
      },
      "components": [
        {
          "name": "AutoComplete",
          "as": "AutoComplete",
          "from": "primevue/autocomplete",
          "export": "default",
          "filePath": "primevue/autocomplete",
          "global": true
        },
        {
          "name": "Calendar",
          "as": "Calendar",
          "from": "primevue/calendar",
          "export": "default",
          "filePath": "primevue/calendar",
          "global": true
        },
        {
          "name": "CascadeSelect",
          "as": "CascadeSelect",
          "from": "primevue/cascadeselect",
          "export": "default",
          "filePath": "primevue/cascadeselect",
          "global": true
        },
        {
          "name": "Checkbox",
          "as": "Checkbox",
          "from": "primevue/checkbox",
          "export": "default",
          "filePath": "primevue/checkbox",
          "global": true
        },
        {
          "name": "Chips",
          "as": "Chips",
          "from": "primevue/chips",
          "export": "default",
          "filePath": "primevue/chips",
          "global": true
        },
        {
          "name": "ColorPicker",
          "as": "ColorPicker",
          "from": "primevue/colorpicker",
          "export": "default",
          "filePath": "primevue/colorpicker",
          "global": true
        },
        {
          "name": "Dropdown",
          "as": "Dropdown",
          "from": "primevue/dropdown",
          "export": "default",
          "filePath": "primevue/dropdown",
          "global": true
        },
        {
          "name": "Editor",
          "as": "Editor",
          "from": "primevue/editor",
          "export": "default",
          "filePath": "primevue/editor",
          "global": true
        },
        {
          "name": "FloatLabel",
          "as": "FloatLabel",
          "from": "primevue/floatlabel",
          "export": "default",
          "filePath": "primevue/floatlabel",
          "global": true
        },
        {
          "name": "IconField",
          "as": "IconField",
          "from": "primevue/iconfield",
          "export": "default",
          "filePath": "primevue/iconfield",
          "global": true
        },
        {
          "name": "InputGroup",
          "as": "InputGroup",
          "from": "primevue/inputgroup",
          "export": "default",
          "filePath": "primevue/inputgroup",
          "global": true
        },
        {
          "name": "InputGroupAddon",
          "as": "InputGroupAddon",
          "from": "primevue/inputgroupaddon",
          "export": "default",
          "filePath": "primevue/inputgroupaddon",
          "global": true
        },
        {
          "name": "InputIcon",
          "as": "InputIcon",
          "from": "primevue/inputicon",
          "export": "default",
          "filePath": "primevue/inputicon",
          "global": true
        },
        {
          "name": "InputMask",
          "as": "InputMask",
          "from": "primevue/inputmask",
          "export": "default",
          "filePath": "primevue/inputmask",
          "global": true
        },
        {
          "name": "InputNumber",
          "as": "InputNumber",
          "from": "primevue/inputnumber",
          "export": "default",
          "filePath": "primevue/inputnumber",
          "global": true
        },
        {
          "name": "InputOtp",
          "as": "InputOtp",
          "from": "primevue/inputotp",
          "export": "default",
          "filePath": "primevue/inputotp",
          "global": true
        },
        {
          "name": "InputSwitch",
          "as": "InputSwitch",
          "from": "primevue/inputswitch",
          "export": "default",
          "filePath": "primevue/inputswitch",
          "global": true
        },
        {
          "name": "InputText",
          "as": "InputText",
          "from": "primevue/inputtext",
          "export": "default",
          "filePath": "primevue/inputtext",
          "global": true
        },
        {
          "name": "Knob",
          "as": "Knob",
          "from": "primevue/knob",
          "export": "default",
          "filePath": "primevue/knob",
          "global": true
        },
        {
          "name": "Listbox",
          "as": "Listbox",
          "from": "primevue/listbox",
          "export": "default",
          "filePath": "primevue/listbox",
          "global": true
        },
        {
          "name": "MultiSelect",
          "as": "MultiSelect",
          "from": "primevue/multiselect",
          "export": "default",
          "filePath": "primevue/multiselect",
          "global": true
        },
        {
          "name": "Password",
          "as": "Password",
          "from": "primevue/password",
          "export": "default",
          "filePath": "primevue/password",
          "global": true
        },
        {
          "name": "RadioButton",
          "as": "RadioButton",
          "from": "primevue/radiobutton",
          "export": "default",
          "filePath": "primevue/radiobutton",
          "global": true
        },
        {
          "name": "Rating",
          "as": "Rating",
          "from": "primevue/rating",
          "export": "default",
          "filePath": "primevue/rating",
          "global": true
        },
        {
          "name": "SelectButton",
          "as": "SelectButton",
          "from": "primevue/selectbutton",
          "export": "default",
          "filePath": "primevue/selectbutton",
          "global": true
        },
        {
          "name": "Slider",
          "as": "Slider",
          "from": "primevue/slider",
          "export": "default",
          "filePath": "primevue/slider",
          "global": true
        },
        {
          "name": "Textarea",
          "as": "Textarea",
          "from": "primevue/textarea",
          "export": "default",
          "filePath": "primevue/textarea",
          "global": true
        },
        {
          "name": "ToggleButton",
          "as": "ToggleButton",
          "from": "primevue/togglebutton",
          "export": "default",
          "filePath": "primevue/togglebutton",
          "global": true
        },
        {
          "name": "TreeSelect",
          "as": "TreeSelect",
          "from": "primevue/treeselect",
          "export": "default",
          "filePath": "primevue/treeselect",
          "global": true
        },
        {
          "name": "TriStateCheckbox",
          "as": "TriStateCheckbox",
          "from": "primevue/tristatecheckbox",
          "export": "default",
          "filePath": "primevue/tristatecheckbox",
          "global": true
        },
        {
          "name": "Button",
          "as": "Button",
          "from": "primevue/button",
          "export": "default",
          "filePath": "primevue/button",
          "global": true
        },
        {
          "name": "ButtonGroup",
          "as": "ButtonGroup",
          "from": "primevue/buttongroup",
          "export": "default",
          "filePath": "primevue/buttongroup",
          "global": true
        },
        {
          "name": "SpeedDial",
          "as": "SpeedDial",
          "from": "primevue/speeddial",
          "export": "default",
          "filePath": "primevue/speeddial",
          "global": true
        },
        {
          "name": "SplitButton",
          "as": "SplitButton",
          "from": "primevue/splitbutton",
          "export": "default",
          "filePath": "primevue/splitbutton",
          "global": true
        },
        {
          "name": "Column",
          "as": "Column",
          "from": "primevue/column",
          "export": "default",
          "filePath": "primevue/column",
          "global": true
        },
        {
          "name": "Row",
          "as": "Row",
          "from": "primevue/row",
          "export": "default",
          "filePath": "primevue/row",
          "global": true
        },
        {
          "name": "ColumnGroup",
          "as": "ColumnGroup",
          "from": "primevue/columngroup",
          "export": "default",
          "filePath": "primevue/columngroup",
          "global": true
        },
        {
          "name": "DataTable",
          "as": "DataTable",
          "from": "primevue/datatable",
          "export": "default",
          "filePath": "primevue/datatable",
          "global": true
        },
        {
          "name": "DataView",
          "as": "DataView",
          "from": "primevue/dataview",
          "export": "default",
          "filePath": "primevue/dataview",
          "global": true
        },
        {
          "name": "DataViewLayoutOptions",
          "as": "DataViewLayoutOptions",
          "from": "primevue/dataviewlayoutoptions",
          "export": "default",
          "filePath": "primevue/dataviewlayoutoptions",
          "global": true
        },
        {
          "name": "OrderList",
          "as": "OrderList",
          "from": "primevue/orderlist",
          "export": "default",
          "filePath": "primevue/orderlist",
          "global": true
        },
        {
          "name": "OrganizationChart",
          "as": "OrganizationChart",
          "from": "primevue/organizationchart",
          "export": "default",
          "filePath": "primevue/organizationchart",
          "global": true
        },
        {
          "name": "Paginator",
          "as": "Paginator",
          "from": "primevue/paginator",
          "export": "default",
          "filePath": "primevue/paginator",
          "global": true
        },
        {
          "name": "PickList",
          "as": "PickList",
          "from": "primevue/picklist",
          "export": "default",
          "filePath": "primevue/picklist",
          "global": true
        },
        {
          "name": "Tree",
          "as": "Tree",
          "from": "primevue/tree",
          "export": "default",
          "filePath": "primevue/tree",
          "global": true
        },
        {
          "name": "TreeTable",
          "as": "TreeTable",
          "from": "primevue/treetable",
          "export": "default",
          "filePath": "primevue/treetable",
          "global": true
        },
        {
          "name": "Timeline",
          "as": "Timeline",
          "from": "primevue/timeline",
          "export": "default",
          "filePath": "primevue/timeline",
          "global": true
        },
        {
          "name": "VirtualScroller",
          "as": "VirtualScroller",
          "from": "primevue/virtualscroller",
          "export": "default",
          "filePath": "primevue/virtualscroller",
          "global": true
        },
        {
          "name": "Accordion",
          "as": "Accordion",
          "from": "primevue/accordion",
          "export": "default",
          "filePath": "primevue/accordion",
          "global": true
        },
        {
          "name": "AccordionTab",
          "as": "AccordionTab",
          "from": "primevue/accordiontab",
          "export": "default",
          "filePath": "primevue/accordiontab",
          "global": true
        },
        {
          "name": "Card",
          "as": "Card",
          "from": "primevue/card",
          "export": "default",
          "filePath": "primevue/card",
          "global": true
        },
        {
          "name": "DeferredContent",
          "as": "DeferredContent",
          "from": "primevue/deferredcontent",
          "export": "default",
          "filePath": "primevue/deferredcontent",
          "global": true
        },
        {
          "name": "Divider",
          "as": "Divider",
          "from": "primevue/divider",
          "export": "default",
          "filePath": "primevue/divider",
          "global": true
        },
        {
          "name": "Fieldset",
          "as": "Fieldset",
          "from": "primevue/fieldset",
          "export": "default",
          "filePath": "primevue/fieldset",
          "global": true
        },
        {
          "name": "Panel",
          "as": "Panel",
          "from": "primevue/panel",
          "export": "default",
          "filePath": "primevue/panel",
          "global": true
        },
        {
          "name": "ScrollPanel",
          "as": "ScrollPanel",
          "from": "primevue/scrollpanel",
          "export": "default",
          "filePath": "primevue/scrollpanel",
          "global": true
        },
        {
          "name": "Splitter",
          "as": "Splitter",
          "from": "primevue/splitter",
          "export": "default",
          "filePath": "primevue/splitter",
          "global": true
        },
        {
          "name": "SplitterPanel",
          "as": "SplitterPanel",
          "from": "primevue/splitterpanel",
          "export": "default",
          "filePath": "primevue/splitterpanel",
          "global": true
        },
        {
          "name": "Stepper",
          "as": "Stepper",
          "from": "primevue/stepper",
          "export": "default",
          "filePath": "primevue/stepper",
          "global": true
        },
        {
          "name": "StepperPanel",
          "as": "StepperPanel",
          "from": "primevue/stepperpanel",
          "export": "default",
          "filePath": "primevue/stepperpanel",
          "global": true
        },
        {
          "name": "TabView",
          "as": "TabView",
          "from": "primevue/tabview",
          "export": "default",
          "filePath": "primevue/tabview",
          "global": true
        },
        {
          "name": "TabPanel",
          "as": "TabPanel",
          "from": "primevue/tabpanel",
          "export": "default",
          "filePath": "primevue/tabpanel",
          "global": true
        },
        {
          "name": "Toolbar",
          "as": "Toolbar",
          "from": "primevue/toolbar",
          "export": "default",
          "filePath": "primevue/toolbar",
          "global": true
        },
        {
          "name": "ConfirmDialog",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmDialog",
          "from": "primevue/confirmdialog",
          "export": "default",
          "filePath": "primevue/confirmdialog",
          "global": true
        },
        {
          "name": "ConfirmPopup",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmPopup",
          "from": "primevue/confirmpopup",
          "export": "default",
          "filePath": "primevue/confirmpopup",
          "global": true
        },
        {
          "name": "Dialog",
          "as": "Dialog",
          "from": "primevue/dialog",
          "export": "default",
          "filePath": "primevue/dialog",
          "global": true
        },
        {
          "name": "DynamicDialog",
          "use": {
            "as": "DialogService"
          },
          "as": "DynamicDialog",
          "from": "primevue/dynamicdialog",
          "export": "default",
          "filePath": "primevue/dynamicdialog",
          "global": true
        },
        {
          "name": "OverlayPanel",
          "as": "OverlayPanel",
          "from": "primevue/overlaypanel",
          "export": "default",
          "filePath": "primevue/overlaypanel",
          "global": true
        },
        {
          "name": "Sidebar",
          "as": "Sidebar",
          "from": "primevue/sidebar",
          "export": "default",
          "filePath": "primevue/sidebar",
          "global": true
        },
        {
          "name": "FileUpload",
          "as": "FileUpload",
          "from": "primevue/fileupload",
          "export": "default",
          "filePath": "primevue/fileupload",
          "global": true
        },
        {
          "name": "Breadcrumb",
          "as": "Breadcrumb",
          "from": "primevue/breadcrumb",
          "export": "default",
          "filePath": "primevue/breadcrumb",
          "global": true
        },
        {
          "name": "ContextMenu",
          "as": "ContextMenu",
          "from": "primevue/contextmenu",
          "export": "default",
          "filePath": "primevue/contextmenu",
          "global": true
        },
        {
          "name": "Dock",
          "as": "Dock",
          "from": "primevue/dock",
          "export": "default",
          "filePath": "primevue/dock",
          "global": true
        },
        {
          "name": "Menu",
          "as": "Menu",
          "from": "primevue/menu",
          "export": "default",
          "filePath": "primevue/menu",
          "global": true
        },
        {
          "name": "Menubar",
          "as": "Menubar",
          "from": "primevue/menubar",
          "export": "default",
          "filePath": "primevue/menubar",
          "global": true
        },
        {
          "name": "MegaMenu",
          "as": "MegaMenu",
          "from": "primevue/megamenu",
          "export": "default",
          "filePath": "primevue/megamenu",
          "global": true
        },
        {
          "name": "PanelMenu",
          "as": "PanelMenu",
          "from": "primevue/panelmenu",
          "export": "default",
          "filePath": "primevue/panelmenu",
          "global": true
        },
        {
          "name": "Steps",
          "as": "Steps",
          "from": "primevue/steps",
          "export": "default",
          "filePath": "primevue/steps",
          "global": true
        },
        {
          "name": "TabMenu",
          "as": "TabMenu",
          "from": "primevue/tabmenu",
          "export": "default",
          "filePath": "primevue/tabmenu",
          "global": true
        },
        {
          "name": "TieredMenu",
          "as": "TieredMenu",
          "from": "primevue/tieredmenu",
          "export": "default",
          "filePath": "primevue/tieredmenu",
          "global": true
        },
        {
          "name": "Chart",
          "as": "Chart",
          "from": "primevue/chart",
          "export": "default",
          "filePath": "primevue/chart",
          "global": true
        },
        {
          "name": "Message",
          "as": "Message",
          "from": "primevue/message",
          "export": "default",
          "filePath": "primevue/message",
          "global": true
        },
        {
          "name": "InlineMessage",
          "as": "InlineMessage",
          "from": "primevue/inlinemessage",
          "export": "default",
          "filePath": "primevue/inlinemessage",
          "global": true
        },
        {
          "name": "Toast",
          "use": {
            "as": "ToastService"
          },
          "as": "Toast",
          "from": "primevue/toast",
          "export": "default",
          "filePath": "primevue/toast",
          "global": true
        },
        {
          "name": "Image",
          "as": "Image",
          "from": "primevue/image",
          "export": "default",
          "filePath": "primevue/image",
          "global": true
        },
        {
          "name": "Avatar",
          "as": "Avatar",
          "from": "primevue/avatar",
          "export": "default",
          "filePath": "primevue/avatar",
          "global": true
        },
        {
          "name": "AvatarGroup",
          "as": "AvatarGroup",
          "from": "primevue/avatargroup",
          "export": "default",
          "filePath": "primevue/avatargroup",
          "global": true
        },
        {
          "name": "Badge",
          "as": "Badge",
          "from": "primevue/badge",
          "export": "default",
          "filePath": "primevue/badge",
          "global": true
        },
        {
          "name": "BlockUI",
          "as": "BlockUI",
          "from": "primevue/blockui",
          "export": "default",
          "filePath": "primevue/blockui",
          "global": true
        },
        {
          "name": "Chip",
          "as": "Chip",
          "from": "primevue/chip",
          "export": "default",
          "filePath": "primevue/chip",
          "global": true
        },
        {
          "name": "Inplace",
          "as": "Inplace",
          "from": "primevue/inplace",
          "export": "default",
          "filePath": "primevue/inplace",
          "global": true
        },
        {
          "name": "MeterGroup",
          "as": "MeterGroup",
          "from": "primevue/metergroup",
          "export": "default",
          "filePath": "primevue/metergroup",
          "global": true
        },
        {
          "name": "ScrollTop",
          "as": "ScrollTop",
          "from": "primevue/scrolltop",
          "export": "default",
          "filePath": "primevue/scrolltop",
          "global": true
        },
        {
          "name": "Skeleton",
          "as": "Skeleton",
          "from": "primevue/skeleton",
          "export": "default",
          "filePath": "primevue/skeleton",
          "global": true
        },
        {
          "name": "ProgressBar",
          "as": "ProgressBar",
          "from": "primevue/progressbar",
          "export": "default",
          "filePath": "primevue/progressbar",
          "global": true
        },
        {
          "name": "ProgressSpinner",
          "as": "ProgressSpinner",
          "from": "primevue/progressspinner",
          "export": "default",
          "filePath": "primevue/progressspinner",
          "global": true
        },
        {
          "name": "Tag",
          "as": "Tag",
          "from": "primevue/tag",
          "export": "default",
          "filePath": "primevue/tag",
          "global": true
        },
        {
          "name": "Terminal",
          "as": "Terminal",
          "from": "primevue/terminal",
          "export": "default",
          "filePath": "primevue/terminal",
          "global": true
        }
      ],
      "directives": [
        {
          "name": "badge",
          "as": "BadgeDirective",
          "from": "primevue/badgedirective"
        },
        {
          "name": "tooltip",
          "as": "Tooltip",
          "from": "primevue/tooltip"
        },
        {
          "name": "ripple",
          "as": "Ripple",
          "from": "primevue/ripple"
        },
        {
          "name": "styleclass",
          "as": "StyleClass",
          "from": "primevue/styleclass"
        },
        {
          "name": "focustrap",
          "as": "FocusTrap",
          "from": "primevue/focustrap"
        },
        {
          "name": "animateonscroll",
          "as": "AnimateOnScroll",
          "from": "primevue/animateonscroll"
        }
      ],
      "composables": [
        {
          "name": "usePrimeVue",
          "as": "usePrimeVue",
          "from": "primevue/config"
        },
        {
          "name": "useStyle",
          "as": "useStyle",
          "from": "primevue/usestyle"
        },
        {
          "name": "useConfirm",
          "as": "useConfirm",
          "from": "primevue/useconfirm"
        },
        {
          "name": "useToast",
          "as": "useToast",
          "from": "primevue/usetoast"
        },
        {
          "name": "useDialog",
          "as": "useDialog",
          "from": "primevue/usedialog"
        }
      ],
      "config": [
        {
          "name": "PrimeVue",
          "as": "PrimeVue",
          "from": "primevue/config"
        }
      ],
      "services": [
        {
          "name": "ConfirmationService",
          "as": "ConfirmationService",
          "from": "primevue/confirmationservice"
        },
        {
          "name": "DialogService",
          "as": "DialogService",
          "from": "primevue/dialogservice"
        },
        {
          "name": "ToastService",
          "as": "ToastService",
          "from": "primevue/toastservice"
        }
      ],
      "styles": [
        {
          "name": "BaseStyle",
          "as": "BaseStyle",
          "from": "primevue/base/style"
        },
        {
          "name": "BaseComponentStyle",
          "as": "BaseComponentStyle",
          "from": "primevue/basecomponent/style"
        },
        {
          "name": "AutoCompleteStyle",
          "as": "AutoCompleteStyle",
          "from": "primevue/autocomplete/style"
        },
        {
          "name": "CalendarStyle",
          "as": "CalendarStyle",
          "from": "primevue/calendar/style"
        },
        {
          "name": "CascadeSelectStyle",
          "as": "CascadeSelectStyle",
          "from": "primevue/cascadeselect/style"
        },
        {
          "name": "CheckboxStyle",
          "as": "CheckboxStyle",
          "from": "primevue/checkbox/style"
        },
        {
          "name": "ChipsStyle",
          "as": "ChipsStyle",
          "from": "primevue/chips/style"
        },
        {
          "name": "ColorPickerStyle",
          "as": "ColorPickerStyle",
          "from": "primevue/colorpicker/style"
        },
        {
          "name": "DropdownStyle",
          "as": "DropdownStyle",
          "from": "primevue/dropdown/style"
        },
        {
          "name": "EditorStyle",
          "as": "EditorStyle",
          "from": "primevue/editor/style"
        },
        {
          "name": "FloatLabelStyle",
          "as": "FloatLabelStyle",
          "from": "primevue/floatlabel/style"
        },
        {
          "name": "IconFieldStyle",
          "as": "IconFieldStyle",
          "from": "primevue/iconfield/style"
        },
        {
          "name": "InputGroupStyle",
          "as": "InputGroupStyle",
          "from": "primevue/inputgroup/style"
        },
        {
          "name": "InputGroupAddonStyle",
          "as": "InputGroupAddonStyle",
          "from": "primevue/inputgroupaddon/style"
        },
        {
          "name": "InputIconStyle",
          "as": "InputIconStyle",
          "from": "primevue/inputicon/style"
        },
        {
          "name": "InputMaskStyle",
          "as": "InputMaskStyle",
          "from": "primevue/inputmask/style"
        },
        {
          "name": "InputNumberStyle",
          "as": "InputNumberStyle",
          "from": "primevue/inputnumber/style"
        },
        {
          "name": "InputOtpStyle",
          "as": "InputOtpStyle",
          "from": "primevue/inputotp/style"
        },
        {
          "name": "InputSwitchStyle",
          "as": "InputSwitchStyle",
          "from": "primevue/inputswitch/style"
        },
        {
          "name": "InputTextStyle",
          "as": "InputTextStyle",
          "from": "primevue/inputtext/style"
        },
        {
          "name": "KnobStyle",
          "as": "KnobStyle",
          "from": "primevue/knob/style"
        },
        {
          "name": "ListboxStyle",
          "as": "ListboxStyle",
          "from": "primevue/listbox/style"
        },
        {
          "name": "MultiSelectStyle",
          "as": "MultiSelectStyle",
          "from": "primevue/multiselect/style"
        },
        {
          "name": "PasswordStyle",
          "as": "PasswordStyle",
          "from": "primevue/password/style"
        },
        {
          "name": "RadioButtonStyle",
          "as": "RadioButtonStyle",
          "from": "primevue/radiobutton/style"
        },
        {
          "name": "RatingStyle",
          "as": "RatingStyle",
          "from": "primevue/rating/style"
        },
        {
          "name": "SelectButtonStyle",
          "as": "SelectButtonStyle",
          "from": "primevue/selectbutton/style"
        },
        {
          "name": "SliderStyle",
          "as": "SliderStyle",
          "from": "primevue/slider/style"
        },
        {
          "name": "TextareaStyle",
          "as": "TextareaStyle",
          "from": "primevue/textarea/style"
        },
        {
          "name": "ToggleButtonStyle",
          "as": "ToggleButtonStyle",
          "from": "primevue/togglebutton/style"
        },
        {
          "name": "TreeSelectStyle",
          "as": "TreeSelectStyle",
          "from": "primevue/treeselect/style"
        },
        {
          "name": "TriStateCheckboxStyle",
          "as": "TriStateCheckboxStyle",
          "from": "primevue/tristatecheckbox/style"
        },
        {
          "name": "ButtonStyle",
          "as": "ButtonStyle",
          "from": "primevue/button/style"
        },
        {
          "name": "ButtonGroupStyle",
          "as": "ButtonGroupStyle",
          "from": "primevue/buttongroup/style"
        },
        {
          "name": "SpeedDialStyle",
          "as": "SpeedDialStyle",
          "from": "primevue/speeddial/style"
        },
        {
          "name": "SplitButtonStyle",
          "as": "SplitButtonStyle",
          "from": "primevue/splitbutton/style"
        },
        {
          "name": "ColumnStyle",
          "as": "ColumnStyle",
          "from": "primevue/column/style"
        },
        {
          "name": "RowStyle",
          "as": "RowStyle",
          "from": "primevue/row/style"
        },
        {
          "name": "ColumnGroupStyle",
          "as": "ColumnGroupStyle",
          "from": "primevue/columngroup/style"
        },
        {
          "name": "DataTableStyle",
          "as": "DataTableStyle",
          "from": "primevue/datatable/style"
        },
        {
          "name": "DataViewStyle",
          "as": "DataViewStyle",
          "from": "primevue/dataview/style"
        },
        {
          "name": "DataViewLayoutOptionsStyle",
          "as": "DataViewLayoutOptionsStyle",
          "from": "primevue/dataviewlayoutoptions/style"
        },
        {
          "name": "OrderListStyle",
          "as": "OrderListStyle",
          "from": "primevue/orderlist/style"
        },
        {
          "name": "OrganizationChartStyle",
          "as": "OrganizationChartStyle",
          "from": "primevue/organizationchart/style"
        },
        {
          "name": "PaginatorStyle",
          "as": "PaginatorStyle",
          "from": "primevue/paginator/style"
        },
        {
          "name": "PickListStyle",
          "as": "PickListStyle",
          "from": "primevue/picklist/style"
        },
        {
          "name": "TreeStyle",
          "as": "TreeStyle",
          "from": "primevue/tree/style"
        },
        {
          "name": "TreeTableStyle",
          "as": "TreeTableStyle",
          "from": "primevue/treetable/style"
        },
        {
          "name": "TimelineStyle",
          "as": "TimelineStyle",
          "from": "primevue/timeline/style"
        },
        {
          "name": "VirtualScrollerStyle",
          "as": "VirtualScrollerStyle",
          "from": "primevue/virtualscroller/style"
        },
        {
          "name": "AccordionStyle",
          "as": "AccordionStyle",
          "from": "primevue/accordion/style"
        },
        {
          "name": "AccordionTabStyle",
          "as": "AccordionTabStyle",
          "from": "primevue/accordiontab/style"
        },
        {
          "name": "CardStyle",
          "as": "CardStyle",
          "from": "primevue/card/style"
        },
        {
          "name": "DeferredContentStyle",
          "as": "DeferredContentStyle",
          "from": "primevue/deferredcontent/style"
        },
        {
          "name": "DividerStyle",
          "as": "DividerStyle",
          "from": "primevue/divider/style"
        },
        {
          "name": "FieldsetStyle",
          "as": "FieldsetStyle",
          "from": "primevue/fieldset/style"
        },
        {
          "name": "PanelStyle",
          "as": "PanelStyle",
          "from": "primevue/panel/style"
        },
        {
          "name": "ScrollPanelStyle",
          "as": "ScrollPanelStyle",
          "from": "primevue/scrollpanel/style"
        },
        {
          "name": "SplitterStyle",
          "as": "SplitterStyle",
          "from": "primevue/splitter/style"
        },
        {
          "name": "SplitterPanelStyle",
          "as": "SplitterPanelStyle",
          "from": "primevue/splitterpanel/style"
        },
        {
          "name": "StepperStyle",
          "as": "StepperStyle",
          "from": "primevue/stepper/style"
        },
        {
          "name": "StepperPanelStyle",
          "as": "StepperPanelStyle",
          "from": "primevue/stepperpanel/style"
        },
        {
          "name": "TabViewStyle",
          "as": "TabViewStyle",
          "from": "primevue/tabview/style"
        },
        {
          "name": "TabPanelStyle",
          "as": "TabPanelStyle",
          "from": "primevue/tabpanel/style"
        },
        {
          "name": "ToolbarStyle",
          "as": "ToolbarStyle",
          "from": "primevue/toolbar/style"
        },
        {
          "name": "ConfirmDialogStyle",
          "as": "ConfirmDialogStyle",
          "from": "primevue/confirmdialog/style"
        },
        {
          "name": "ConfirmPopupStyle",
          "as": "ConfirmPopupStyle",
          "from": "primevue/confirmpopup/style"
        },
        {
          "name": "DialogStyle",
          "as": "DialogStyle",
          "from": "primevue/dialog/style"
        },
        {
          "name": "DynamicDialogStyle",
          "as": "DynamicDialogStyle",
          "from": "primevue/dynamicdialog/style"
        },
        {
          "name": "OverlayPanelStyle",
          "as": "OverlayPanelStyle",
          "from": "primevue/overlaypanel/style"
        },
        {
          "name": "SidebarStyle",
          "as": "SidebarStyle",
          "from": "primevue/sidebar/style"
        },
        {
          "name": "FileUploadStyle",
          "as": "FileUploadStyle",
          "from": "primevue/fileupload/style"
        },
        {
          "name": "BreadcrumbStyle",
          "as": "BreadcrumbStyle",
          "from": "primevue/breadcrumb/style"
        },
        {
          "name": "ContextMenuStyle",
          "as": "ContextMenuStyle",
          "from": "primevue/contextmenu/style"
        },
        {
          "name": "DockStyle",
          "as": "DockStyle",
          "from": "primevue/dock/style"
        },
        {
          "name": "MenuStyle",
          "as": "MenuStyle",
          "from": "primevue/menu/style"
        },
        {
          "name": "MenubarStyle",
          "as": "MenubarStyle",
          "from": "primevue/menubar/style"
        },
        {
          "name": "MegaMenuStyle",
          "as": "MegaMenuStyle",
          "from": "primevue/megamenu/style"
        },
        {
          "name": "PanelMenuStyle",
          "as": "PanelMenuStyle",
          "from": "primevue/panelmenu/style"
        },
        {
          "name": "StepsStyle",
          "as": "StepsStyle",
          "from": "primevue/steps/style"
        },
        {
          "name": "TabMenuStyle",
          "as": "TabMenuStyle",
          "from": "primevue/tabmenu/style"
        },
        {
          "name": "TieredMenuStyle",
          "as": "TieredMenuStyle",
          "from": "primevue/tieredmenu/style"
        },
        {
          "name": "ChartStyle",
          "as": "ChartStyle",
          "from": "primevue/chart/style"
        },
        {
          "name": "MessageStyle",
          "as": "MessageStyle",
          "from": "primevue/message/style"
        },
        {
          "name": "InlineMessageStyle",
          "as": "InlineMessageStyle",
          "from": "primevue/inlinemessage/style"
        },
        {
          "name": "ToastStyle",
          "as": "ToastStyle",
          "from": "primevue/toast/style"
        },
        {
          "name": "ImageStyle",
          "as": "ImageStyle",
          "from": "primevue/image/style"
        },
        {
          "name": "AvatarStyle",
          "as": "AvatarStyle",
          "from": "primevue/avatar/style"
        },
        {
          "name": "AvatarGroupStyle",
          "as": "AvatarGroupStyle",
          "from": "primevue/avatargroup/style"
        },
        {
          "name": "BadgeStyle",
          "as": "BadgeStyle",
          "from": "primevue/badge/style"
        },
        {
          "name": "BlockUIStyle",
          "as": "BlockUIStyle",
          "from": "primevue/blockui/style"
        },
        {
          "name": "ChipStyle",
          "as": "ChipStyle",
          "from": "primevue/chip/style"
        },
        {
          "name": "InplaceStyle",
          "as": "InplaceStyle",
          "from": "primevue/inplace/style"
        },
        {
          "name": "MeterGroupStyle",
          "as": "MeterGroupStyle",
          "from": "primevue/metergroup/style"
        },
        {
          "name": "ScrollTopStyle",
          "as": "ScrollTopStyle",
          "from": "primevue/scrolltop/style"
        },
        {
          "name": "SkeletonStyle",
          "as": "SkeletonStyle",
          "from": "primevue/skeleton/style"
        },
        {
          "name": "ProgressBarStyle",
          "as": "ProgressBarStyle",
          "from": "primevue/progressbar/style"
        },
        {
          "name": "ProgressSpinnerStyle",
          "as": "ProgressSpinnerStyle",
          "from": "primevue/progressspinner/style"
        },
        {
          "name": "TagStyle",
          "as": "TagStyle",
          "from": "primevue/tag/style"
        },
        {
          "name": "TerminalStyle",
          "as": "TerminalStyle",
          "from": "primevue/terminal/style"
        },
        {
          "name": "BadgeDirectiveStyle",
          "as": "BadgeDirectiveStyle",
          "from": "primevue/badgedirective/style"
        },
        {
          "name": "TooltipStyle",
          "as": "TooltipStyle",
          "from": "primevue/tooltip/style"
        },
        {
          "name": "RippleStyle",
          "as": "RippleStyle",
          "from": "primevue/ripple/style"
        },
        {
          "name": "StyleClassStyle",
          "as": "StyleClassStyle",
          "from": "primevue/styleclass/style"
        },
        {
          "name": "FocusTrapStyle",
          "as": "FocusTrapStyle",
          "from": "primevue/focustrap/style"
        },
        {
          "name": "AnimateOnScrollStyle",
          "as": "AnimateOnScrollStyle",
          "from": "primevue/animateonscroll/style"
        }
      ],
      "injectStylesAsString": [],
      "injectStylesAsStringToTop": [
        "'<style type=\"text/css\" data-primevue-style-id=\"layer-order\" >@layer tailwind-base, primevue, tailwind-utilities</style>'"
      ]
    },
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "p": "prose-p",
          "a": "prose-a",
          "blockquote": "prose-blockquote",
          "code-inline": "prose-code-inline",
          "code": "ProseCodeInline",
          "em": "prose-em",
          "h1": "prose-h1",
          "h2": "prose-h2",
          "h3": "prose-h3",
          "h4": "prose-h4",
          "h5": "prose-h5",
          "h6": "prose-h6",
          "hr": "prose-hr",
          "img": "prose-img",
          "ul": "prose-ul",
          "ol": "prose-ol",
          "li": "prose-li",
          "strong": "prose-strong",
          "table": "prose-table",
          "thead": "prose-thead",
          "tbody": "prose-tbody",
          "td": "prose-td",
          "th": "prose-th",
          "tr": "prose-tr"
        }
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    },
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": "",
      "experimental": {
        "stripQueryParameters": false,
        "advanceQuery": false,
        "clientDB": false
      },
      "respectPathCase": false,
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": []
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": false,
      "wsUrl": "ws://localhost:4000/",
      "documentDriven": false,
      "host": "",
      "trailingSlash": false,
      "search": "",
      "contentHead": true,
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      }
    }
  },
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "dLYeSFVwsx",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [],
    "locales": [],
    "defaultLocale": "",
    "highlight": false,
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      },
      "remarkPlugins": {},
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": []
    },
    "contentHead": true,
    "documentDriven": false,
    "respectPathCase": false,
    "experimental": {
      "clientDB": false,
      "cacheContents": true,
      "stripQueryParameters": false,
      "advanceQuery": false,
      "search": ""
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"A:/workspace/weeser.github.io/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('content:source:content', unstorage_47drivers_47fs({"name":"content:source:content","driver":"fs","base":"A:\\workspace\\weeser.github.io\\content","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache:content', unstorage_47drivers_47fs({"driver":"fs","base":"A:\\workspace\\weeser.github.io\\.nuxt\\content-cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"A:\\workspace\\weeser.github.io","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"A:\\workspace\\weeser.github.io\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"A:\\workspace\\weeser.github.io\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"A:\\workspace\\weeser.github.io\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"A:\\workspace\\weeser.github.io\\.data\\kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _voUPLyaHfs = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var usestyle_cjs = {};

var utils_cjs = {};

Object.defineProperty(utils_cjs, '__esModule', { value: true });

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray$3(arr) { return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread$3(); }
function _nonIterableSpread$3() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray$3(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles$3(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$3(arr); }
function _typeof$3$1(o) { "@babel/helpers - typeof"; return _typeof$3$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$3$1(o); }
function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$1(); }
function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }
function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit$1(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
var DomHandler = {
  innerWidth: function innerWidth(el) {
    if (el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
    return 0;
  },
  width: function width(el) {
    if (el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      return width;
    }
    return 0;
  },
  getWindowScrollTop: function getWindowScrollTop() {
    var doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  },
  getWindowScrollLeft: function getWindowScrollLeft() {
    var doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  },
  getOuterWidth: function getOuterWidth(el, margin) {
    if (el) {
      var width = el.offsetWidth;
      if (margin) {
        var style = getComputedStyle(el);
        width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      }
      return width;
    }
    return 0;
  },
  getOuterHeight: function getOuterHeight(el, margin) {
    if (el) {
      var height = el.offsetHeight;
      if (margin) {
        var style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getClientHeight: function getClientHeight(el, margin) {
    if (el) {
      var height = el.clientHeight;
      if (margin) {
        var style = getComputedStyle(el);
        height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }
      return height;
    }
    return 0;
  },
  getViewport: function getViewport() {
    var win = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      w = win.innerWidth || e.clientWidth || g.clientWidth,
      h = win.innerHeight || e.clientHeight || g.clientHeight;
    return {
      width: w,
      height: h
    };
  },
  getOffset: function getOffset(el) {
    if (el) {
      var rect = el.getBoundingClientRect();
      return {
        top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
        left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
      };
    }
    return {
      top: 'auto',
      left: 'auto'
    };
  },
  index: function index(element) {
    if (element) {
      var _this$getParentNode;
      var children = (_this$getParentNode = this.getParentNode(element)) === null || _this$getParentNode === void 0 ? void 0 : _this$getParentNode.childNodes;
      var num = 0;
      for (var i = 0; i < children.length; i++) {
        if (children[i] === element) return num;
        if (children[i].nodeType === 1) num++;
      }
    }
    return -1;
  },
  addMultipleClasses: function addMultipleClasses(element, classNames) {
    var _this = this;
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach(function (cNames) {
        return cNames.split(' ').forEach(function (className) {
          return _this.addClass(element, className);
        });
      });
    }
  },
  removeMultipleClasses: function removeMultipleClasses(element, classNames) {
    var _this2 = this;
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach(function (cNames) {
        return cNames.split(' ').forEach(function (className) {
          return _this2.removeClass(element, className);
        });
      });
    }
  },
  addClass: function addClass(element, className) {
    if (element && className && !this.hasClass(element, className)) {
      if (element.classList) element.classList.add(className);else element.className += ' ' + className;
    }
  },
  removeClass: function removeClass(element, className) {
    if (element && className) {
      if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  },
  hasClass: function hasClass(element, className) {
    if (element) {
      if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }
    return false;
  },
  addStyles: function addStyles(element) {
    var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (element) {
      Object.entries(styles).forEach(function (_ref) {
        var _ref2 = _slicedToArray$1(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        return element.style[key] = value;
      });
    }
  },
  find: function find(element, selector) {
    return this.isElement(element) ? element.querySelectorAll(selector) : [];
  },
  findSingle: function findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  },
  createElement: function createElement(type) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (type) {
      var element = document.createElement(type);
      this.setAttributes(element, attributes);
      for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
      }
      element.append.apply(element, children);
      return element;
    }
    return undefined;
  },
  setAttribute: function setAttribute(element) {
    var attribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var value = arguments.length > 2 ? arguments[2] : undefined;
    if (this.isElement(element) && value !== null && value !== undefined) {
      element.setAttribute(attribute, value);
    }
  },
  setAttributes: function setAttributes(element) {
    var _this3 = this;
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.isElement(element)) {
      var computedStyles = function computedStyles(rule, value) {
        var _element$$attrs, _element$$attrs2;
        var styles = element !== null && element !== void 0 && (_element$$attrs = element.$attrs) !== null && _element$$attrs !== void 0 && _element$$attrs[rule] ? [element === null || element === void 0 || (_element$$attrs2 = element.$attrs) === null || _element$$attrs2 === void 0 ? void 0 : _element$$attrs2[rule]] : [];
        return [value].flat().reduce(function (cv, v) {
          if (v !== null && v !== undefined) {
            var type = _typeof$3$1(v);
            if (type === 'string' || type === 'number') {
              cv.push(v);
            } else if (type === 'object') {
              var _cv = Array.isArray(v) ? computedStyles(rule, v) : Object.entries(v).map(function (_ref3) {
                var _ref4 = _slicedToArray$1(_ref3, 2),
                  _k = _ref4[0],
                  _v = _ref4[1];
                return rule === 'style' && (!!_v || _v === 0) ? "".concat(_k.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), ":").concat(_v) : !!_v ? _k : undefined;
              });
              cv = _cv.length ? cv.concat(_cv.filter(function (c) {
                return !!c;
              })) : cv;
            }
          }
          return cv;
        }, styles);
      };
      Object.entries(attributes).forEach(function (_ref5) {
        var _ref6 = _slicedToArray$1(_ref5, 2),
          key = _ref6[0],
          value = _ref6[1];
        if (value !== undefined && value !== null) {
          var matchedEvent = key.match(/^on(.+)/);
          if (matchedEvent) {
            element.addEventListener(matchedEvent[1].toLowerCase(), value);
          } else if (key === 'p-bind') {
            _this3.setAttributes(element, value);
          } else {
            value = key === 'class' ? _toConsumableArray$3(new Set(computedStyles('class', value))).join(' ').trim() : key === 'style' ? computedStyles('style', value).join(';').trim() : value;
            (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
            element.setAttribute(key, value);
          }
        }
      });
    }
  },
  getAttribute: function getAttribute(element, name) {
    if (this.isElement(element)) {
      var value = element.getAttribute(name);
      if (!isNaN(value)) {
        return +value;
      }
      if (value === 'true' || value === 'false') {
        return value === 'true';
      }
      return value;
    }
    return undefined;
  },
  isAttributeEquals: function isAttributeEquals(element, name, value) {
    return this.isElement(element) ? this.getAttribute(element, name) === value : false;
  },
  isAttributeNotEquals: function isAttributeNotEquals(element, name, value) {
    return !this.isAttributeEquals(element, name, value);
  },
  getHeight: function getHeight(el) {
    if (el) {
      var height = el.offsetHeight;
      var style = getComputedStyle(el);
      height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      return height;
    }
    return 0;
  },
  getWidth: function getWidth(el) {
    if (el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
      return width;
    }
    return 0;
  },
  absolutePosition: function absolutePosition(element, target) {
    var gutter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (element) {
      var elementDimensions = element.offsetParent ? {
        width: element.offsetWidth,
        height: element.offsetHeight
      } : this.getHiddenElementDimensions(element);
      var elementOuterHeight = elementDimensions.height;
      var elementOuterWidth = elementDimensions.width;
      var targetOuterHeight = target.offsetHeight;
      var targetOuterWidth = target.offsetWidth;
      var targetOffset = target.getBoundingClientRect();
      var windowScrollTop = this.getWindowScrollTop();
      var windowScrollLeft = this.getWindowScrollLeft();
      var viewport = this.getViewport();
      var top,
        left,
        origin = 'top';
      if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
        top = targetOffset.top + windowScrollTop - elementOuterHeight;
        origin = 'bottom';
        if (top < 0) {
          top = windowScrollTop;
        }
      } else {
        top = targetOuterHeight + targetOffset.top + windowScrollTop;
      }
      if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);else left = targetOffset.left + windowScrollLeft;
      element.style.top = top + 'px';
      element.style.left = left + 'px';
      element.style.transformOrigin = origin;
      gutter && (element.style.marginTop = origin === 'bottom' ? 'calc(var(--p-anchor-gutter) * -1)' : 'calc(var(--p-anchor-gutter))');
    }
  },
  relativePosition: function relativePosition(element, target) {
    var gutter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (element) {
      var elementDimensions = element.offsetParent ? {
        width: element.offsetWidth,
        height: element.offsetHeight
      } : this.getHiddenElementDimensions(element);
      var targetHeight = target.offsetHeight;
      var targetOffset = target.getBoundingClientRect();
      var viewport = this.getViewport();
      var top,
        left,
        origin = 'top';
      if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
        top = -1 * elementDimensions.height;
        origin = 'bottom';
        if (targetOffset.top + top < 0) {
          top = -1 * targetOffset.top;
        }
      } else {
        top = targetHeight;
      }
      if (elementDimensions.width > viewport.width) {
        // element wider then viewport and cannot fit on screen (align at left side of viewport)
        left = targetOffset.left * -1;
      } else if (targetOffset.left + elementDimensions.width > viewport.width) {
        // element wider then viewport but can be fit on screen (align at right side of viewport)
        left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
      } else {
        // element fits on screen (align with target)
        left = 0;
      }
      element.style.top = top + 'px';
      element.style.left = left + 'px';
      element.style.transformOrigin = origin;
      gutter && (element.style.marginTop = origin === 'bottom' ? 'calc(var(--p-anchor-gutter) * -1)' : 'calc(var(--p-anchor-gutter))');
    }
  },
  nestedPosition: function nestedPosition(element, level) {
    if (element) {
      var parentItem = element.parentElement;
      var elementOffset = this.getOffset(parentItem);
      var viewport = this.getViewport();
      var sublistWidth = element.offsetParent ? element.offsetWidth : this.getHiddenElementOuterWidth(element);
      var itemOuterWidth = this.getOuterWidth(parentItem.children[0]);
      var left;
      if (parseInt(elementOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - this.calculateScrollbarWidth()) {
        if (parseInt(elementOffset.left, 10) < sublistWidth) {
          // for too small screens
          if (level % 2 === 1) {
            left = parseInt(elementOffset.left, 10) ? '-' + parseInt(elementOffset.left, 10) + 'px' : '100%';
          } else if (level % 2 === 0) {
            left = viewport.width - sublistWidth - this.calculateScrollbarWidth() + 'px';
          }
        } else {
          left = '-100%';
        }
      } else {
        left = '100%';
      }
      element.style.top = '0px';
      element.style.left = left;
    }
  },
  getParentNode: function getParentNode(element) {
    var parent = element === null || element === void 0 ? void 0 : element.parentNode;
    if (parent && parent instanceof ShadowRoot && parent.host) {
      parent = parent.host;
    }
    return parent;
  },
  getParents: function getParents(element) {
    var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var parent = this.getParentNode(element);
    return parent === null ? parents : this.getParents(parent, parents.concat([parent]));
  },
  getScrollableParents: function getScrollableParents(element) {
    var scrollableParents = [];
    if (element) {
      var parents = this.getParents(element);
      var overflowRegex = /(auto|scroll)/;
      var overflowCheck = function overflowCheck(node) {
        try {
          var styleDeclaration = window['getComputedStyle'](node, null);
          return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
        } catch (err) {
          return false;
        }
      };
      var _iterator = _createForOfIteratorHelper$1(parents),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var parent = _step.value;
          var scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];
          if (scrollSelectors) {
            var selectors = scrollSelectors.split(',');
            var _iterator2 = _createForOfIteratorHelper$1(selectors),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var selector = _step2.value;
                var el = this.findSingle(parent, selector);
                if (el && overflowCheck(el)) {
                  scrollableParents.push(el);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          if (parent.nodeType !== 9 && overflowCheck(parent)) {
            scrollableParents.push(parent);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return scrollableParents;
  },
  getHiddenElementOuterHeight: function getHiddenElementOuterHeight(element) {
    if (element) {
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      var elementHeight = element.offsetHeight;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return elementHeight;
    }
    return 0;
  },
  getHiddenElementOuterWidth: function getHiddenElementOuterWidth(element) {
    if (element) {
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      var elementWidth = element.offsetWidth;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return elementWidth;
    }
    return 0;
  },
  getHiddenElementDimensions: function getHiddenElementDimensions(element) {
    if (element) {
      var dimensions = {};
      element.style.visibility = 'hidden';
      element.style.display = 'block';
      dimensions.width = element.offsetWidth;
      dimensions.height = element.offsetHeight;
      element.style.display = 'none';
      element.style.visibility = 'visible';
      return dimensions;
    }
    return 0;
  },
  fadeIn: function fadeIn(element, duration) {
    if (element) {
      element.style.opacity = 0;
      var last = +new Date();
      var opacity = 0;
      var tick = function tick() {
        opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
        element.style.opacity = opacity;
        last = +new Date();
        if (+opacity < 1) {
          window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
        }
      };
      tick();
    }
  },
  fadeOut: function fadeOut(element, ms) {
    if (element) {
      var opacity = 1,
        interval = 50,
        duration = ms,
        gap = interval / duration;
      var fading = setInterval(function () {
        opacity -= gap;
        if (opacity <= 0) {
          opacity = 0;
          clearInterval(fading);
        }
        element.style.opacity = opacity;
      }, interval);
    }
  },
  getUserAgent: function getUserAgent() {
    return navigator.userAgent;
  },
  appendChild: function appendChild(element, target) {
    if (this.isElement(target)) target.appendChild(element);else if (target.el && target.elElement) target.elElement.appendChild(element);else throw new Error('Cannot append ' + target + ' to ' + element);
  },
  isElement: function isElement(obj) {
    return (typeof HTMLElement === "undefined" ? "undefined" : _typeof$3$1(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && _typeof$3$1(obj) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
  },
  scrollInView: function scrollInView(container, item) {
    var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
    var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
    var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    var containerRect = container.getBoundingClientRect();
    var itemRect = item.getBoundingClientRect();
    var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    var scroll = container.scrollTop;
    var elementHeight = container.clientHeight;
    var itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  },
  clearSelection: function clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document['selection'] && document['selection'].empty) {
      try {
        document['selection'].empty();
      } catch (error) {
        //ignore IE bug
      }
    }
  },
  getSelection: function getSelection() {
    if (window.getSelection) return window.getSelection().toString();else if (document.getSelection) return document.getSelection().toString();else if (document['selection']) return document['selection'].createRange().text;
    return null;
  },
  calculateScrollbarWidth: function calculateScrollbarWidth() {
    if (this.calculatedScrollbarWidth != null) return this.calculatedScrollbarWidth;
    var scrollDiv = document.createElement('div');
    this.addStyles(scrollDiv, {
      width: '100px',
      height: '100px',
      overflow: 'scroll',
      position: 'absolute',
      top: '-9999px'
    });
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarWidth;
    return scrollbarWidth;
  },
  calculateBodyScrollbarWidth: function calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth;
  },
  getBrowser: function getBrowser() {
    if (!this.browser) {
      var matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser['version'] = matched.version;
      }
      if (this.browser['chrome']) {
        this.browser['webkit'] = true;
      } else if (this.browser['webkit']) {
        this.browser['safari'] = true;
      }
    }
    return this.browser;
  },
  resolveUserAgent: function resolveUserAgent() {
    var ua = navigator.userAgent.toLowerCase();
    var match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || '',
      version: match[2] || '0'
    };
  },
  isVisible: function isVisible(element) {
    return element && element.offsetParent != null;
  },
  invokeElementMethod: function invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  },
  isExist: function isExist(element) {
    return !!(element !== null && typeof element !== 'undefined' && element.nodeName && this.getParentNode(element));
  },
  isClient: function isClient() {
    return !!("undefined" !== 'undefined'  );
  },
  focus: function focus(el, options) {
    el && document.activeElement !== el && el.focus(options);
  },
  isFocusableElement: function isFocusableElement(element) {
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return this.isElement(element) ? element.matches("button:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])".concat(selector, ",\n                [href][clientHeight][clientWidth]:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                input:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                select:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                textarea:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                [tabIndex]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                [contenteditable]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector)) : false;
  },
  getFocusableElements: function getFocusableElements(element) {
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var focusableElements = this.find(element, "button:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])".concat(selector, ",\n                [href][clientHeight][clientWidth]:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                input:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                select:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                textarea:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                [tabIndex]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector, ",\n                [contenteditable]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])").concat(selector));
    var visibleFocusableElements = [];
    var _iterator3 = _createForOfIteratorHelper$1(focusableElements),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var focusableElement = _step3.value;
        if (getComputedStyle(focusableElement).display != 'none' && getComputedStyle(focusableElement).visibility != 'hidden') visibleFocusableElements.push(focusableElement);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return visibleFocusableElements;
  },
  getFirstFocusableElement: function getFirstFocusableElement(element, selector) {
    var focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  },
  getLastFocusableElement: function getLastFocusableElement(element, selector) {
    var focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  },
  getNextFocusableElement: function getNextFocusableElement(container, element, selector) {
    var focusableElements = this.getFocusableElements(container, selector);
    var index = focusableElements.length > 0 ? focusableElements.findIndex(function (el) {
      return el === element;
    }) : -1;
    var nextIndex = index > -1 && focusableElements.length >= index + 1 ? index + 1 : -1;
    return nextIndex > -1 ? focusableElements[nextIndex] : null;
  },
  getPreviousElementSibling: function getPreviousElementSibling(element, selector) {
    var previousElement = element.previousElementSibling;
    while (previousElement) {
      if (previousElement.matches(selector)) {
        return previousElement;
      } else {
        previousElement = previousElement.previousElementSibling;
      }
    }
    return null;
  },
  getNextElementSibling: function getNextElementSibling(element, selector) {
    var nextElement = element.nextElementSibling;
    while (nextElement) {
      if (nextElement.matches(selector)) {
        return nextElement;
      } else {
        nextElement = nextElement.nextElementSibling;
      }
    }
    return null;
  },
  isClickable: function isClickable(element) {
    if (element) {
      var targetNode = element.nodeName;
      var parentNode = element.parentElement && element.parentElement.nodeName;
      return targetNode === 'INPUT' || targetNode === 'TEXTAREA' || targetNode === 'BUTTON' || targetNode === 'A' || parentNode === 'INPUT' || parentNode === 'TEXTAREA' || parentNode === 'BUTTON' || parentNode === 'A' || !!element.closest('.p-button, .p-checkbox, .p-radiobutton') // @todo Add [data-pc-section="button"]
      ;
    }
    return false;
  },
  applyStyle: function applyStyle(element, style) {
    if (typeof style === 'string') {
      element.style.cssText = style;
    } else {
      for (var prop in style) {
        element.style[prop] = style[prop];
      }
    }
  },
  isIOS: function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
  },
  isAndroid: function isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  },
  isTouchDevice: function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  },
  hasCSSAnimation: function hasCSSAnimation(element) {
    if (element) {
      var style = getComputedStyle(element);
      var animationDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
      return animationDuration > 0;
    }
    return false;
  },
  hasCSSTransition: function hasCSSTransition(element) {
    if (element) {
      var style = getComputedStyle(element);
      var transitionDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
      return transitionDuration > 0;
    }
    return false;
  },
  exportCSV: function exportCSV(csv, filename) {
    var blob = new Blob([csv], {
      type: 'application/csv;charset=utf-8;'
    });
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename + '.csv');
    } else {
      var link = document.createElement('a');
      if (link.download !== undefined) {
        link.setAttribute('href', URL.createObjectURL(blob));
        link.setAttribute('download', filename + '.csv');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        csv = 'data:text/csv;charset=utf-8,' + csv;
        window.open(encodeURI(csv));
      }
    }
  },
  blockBodyScroll: function blockBodyScroll() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'p-overflow-hidden';
    document.body.style.setProperty('--scrollbar-width', this.calculateBodyScrollbarWidth() + 'px');
    this.addClass(document.body, className);
  },
  unblockBodyScroll: function unblockBodyScroll() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'p-overflow-hidden';
    document.body.style.removeProperty('--scrollbar-width');
    this.removeClass(document.body, className);
  }
};

function _typeof$2$1(o) { "@babel/helpers - typeof"; return _typeof$2$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$2$1(o); }
function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$1$1(descriptor.key), descriptor); } }
function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey$1$1(t) { var i = _toPrimitive$1$1(t, "string"); return "symbol" == _typeof$2$1(i) ? i : String(i); }
function _toPrimitive$1$1(t, r) { if ("object" != _typeof$2$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$2$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ConnectedOverlayScrollHandler = /*#__PURE__*/function () {
  function ConnectedOverlayScrollHandler(element) {
    var listener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    _classCallCheck$1(this, ConnectedOverlayScrollHandler);
    this.element = element;
    this.listener = listener;
  }
  _createClass$1(ConnectedOverlayScrollHandler, [{
    key: "bindScrollListener",
    value: function bindScrollListener() {
      this.scrollableParents = DomHandler.getScrollableParents(this.element);
      for (var i = 0; i < this.scrollableParents.length; i++) {
        this.scrollableParents[i].addEventListener('scroll', this.listener);
      }
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener() {
      if (this.scrollableParents) {
        for (var i = 0; i < this.scrollableParents.length; i++) {
          this.scrollableParents[i].removeEventListener('scroll', this.listener);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unbindScrollListener();
      this.element = null;
      this.listener = null;
      this.scrollableParents = null;
    }
  }]);
  return ConnectedOverlayScrollHandler;
}();

function primebus() {
  var allHandlers = new Map();
  return {
    on: function on(type, handler) {
      var handlers = allHandlers.get(type);
      if (!handlers) handlers = [handler];else handlers.push(handler);
      allHandlers.set(type, handlers);
    },
    off: function off(type, handler) {
      var handlers = allHandlers.get(type);
      if (handlers) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type, evt) {
      var handlers = allHandlers.get(type);
      if (handlers) {
        handlers.slice().map(function (handler) {
          handler(evt);
        });
      }
    }
  };
}

function _slicedToArray$2(arr, i) { return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2(); }
function _nonIterableRest$2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit$2(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles$2(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray$2(arr) { return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2(); }
function _nonIterableSpread$2() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray$2(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles$2(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$2(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }
function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof$1$1(o) { "@babel/helpers - typeof"; return _typeof$1$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1$1(o); }
var ObjectUtils = {
  equals: function equals(obj1, obj2, field) {
    if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.deepEquals(obj1, obj2);
  },
  deepEquals: function deepEquals(a, b) {
    if (a === b) return true;
    if (a && b && _typeof$1$1(a) == 'object' && _typeof$1$1(b) == 'object') {
      var arrA = Array.isArray(a),
        arrB = Array.isArray(b),
        i,
        length,
        key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;) if (!this.deepEquals(a[i], b[i])) return false;
        return true;
      }
      if (arrA != arrB) return false;
      var dateA = a instanceof Date,
        dateB = b instanceof Date;
      if (dateA != dateB) return false;
      if (dateA && dateB) return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
      if (regexpA != regexpB) return false;
      if (regexpA && regexpB) return a.toString() == b.toString();
      var keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;
      for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = length; i-- !== 0;) {
        key = keys[i];
        if (!this.deepEquals(a[key], b[key])) return false;
      }
      return true;
    }
    return a !== a && b !== b;
  },
  resolveFieldData: function resolveFieldData(data, field) {
    if (!data || !field) {
      // short circuit if there is nothing to resolve
      return null;
    }
    try {
      var value = data[field];
      if (this.isNotEmpty(value)) return value;
    } catch (_unused) {
      // Performance optimization: https://github.com/primefaces/primereact/issues/4797
      // do nothing and continue to other methods to resolve field data
    }
    if (Object.keys(data).length) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf('.') === -1) {
        return data[field];
      } else {
        var fields = field.split('.');
        var _value = data;
        for (var i = 0, len = fields.length; i < len; ++i) {
          if (_value == null) {
            return null;
          }
          _value = _value[fields[i]];
        }
        return _value;
      }
    }
    return null;
  },
  getItemValue: function getItemValue(obj) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
  },
  filter: function filter(value, fields, filterValue) {
    var filteredItems = [];
    if (value) {
      var _iterator = _createForOfIteratorHelper(value),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var _iterator2 = _createForOfIteratorHelper(fields),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var field = _step2.value;
              if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                filteredItems.push(item);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return filteredItems;
  },
  reorderArray: function reorderArray(value, from, to) {
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  },
  findIndexInList: function findIndexInList(value, list) {
    var index = -1;
    if (list) {
      for (var i = 0; i < list.length; i++) {
        if (list[i] === value) {
          index = i;
          break;
        }
      }
    }
    return index;
  },
  contains: function contains(value, list) {
    if (value != null && list && list.length) {
      var _iterator3 = _createForOfIteratorHelper(list),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var val = _step3.value;
          if (this.equals(value, val)) return true;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    return false;
  },
  insertIntoOrderedArray: function insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      var injected = false;
      for (var i = 0; i < arr.length; i++) {
        var currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  },
  removeAccents: function removeAccents(str) {
    if (str && str.search(/[\xC0-\xFF]/g) > -1) {
      str = str.replace(/[\xC0-\xC5]/g, 'A').replace(/[\xC6]/g, 'AE').replace(/[\xC7]/g, 'C').replace(/[\xC8-\xCB]/g, 'E').replace(/[\xCC-\xCF]/g, 'I').replace(/[\xD0]/g, 'D').replace(/[\xD1]/g, 'N').replace(/[\xD2-\xD6\xD8]/g, 'O').replace(/[\xD9-\xDC]/g, 'U').replace(/[\xDD]/g, 'Y').replace(/[\xDE]/g, 'P').replace(/[\xE0-\xE5]/g, 'a').replace(/[\xE6]/g, 'ae').replace(/[\xE7]/g, 'c').replace(/[\xE8-\xEB]/g, 'e').replace(/[\xEC-\xEF]/g, 'i').replace(/[\xF1]/g, 'n').replace(/[\xF2-\xF6\xF8]/g, 'o').replace(/[\xF9-\xFC]/g, 'u').replace(/[\xFE]/g, 'p').replace(/[\xFD\xFF]/g, 'y');
    }
    return str;
  },
  getVNodeProp: function getVNodeProp(vnode, prop) {
    if (vnode) {
      var props = vnode.props;
      if (props) {
        var kebabProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        var propName = Object.prototype.hasOwnProperty.call(props, kebabProp) ? kebabProp : prop;
        return vnode.type["extends"].props[prop].type === Boolean && props[propName] === '' ? true : props[propName];
      }
    }
    return null;
  },
  toFlatCase: function toFlatCase(str) {
    // convert snake, kebab, camel and pascal cases to flat case
    return this.isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
  },
  toKebabCase: function toKebabCase(str) {
    // convert snake, camel and pascal cases to kebab case
    return this.isString(str) ? str.replace(/(_)/g, '-').replace(/[A-Z]/g, function (c, i) {
      return i === 0 ? c : '-' + c.toLowerCase();
    }).toLowerCase() : str;
  },
  toCapitalCase: function toCapitalCase(str) {
    return this.isString(str, {
      empty: false
    }) ? str[0].toUpperCase() + str.slice(1) : str;
  },
  isEmpty: function isEmpty(value) {
    return value === null || value === undefined || value === '' || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && _typeof$1$1(value) === 'object' && Object.keys(value).length === 0;
  },
  isNotEmpty: function isNotEmpty(value) {
    return !this.isEmpty(value);
  },
  isFunction: function isFunction(value) {
    return !!(value && value.constructor && value.call && value.apply);
  },
  isObject: function isObject(value) {
    var empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
  },
  isDate: function isDate(value) {
    return value instanceof Date && value.constructor === Date;
  },
  isArray: function isArray(value) {
    var empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return Array.isArray(value) && (empty || value.length !== 0);
  },
  isString: function isString(value) {
    var empty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return typeof value === 'string' && (empty || value !== '');
  },
  isPrintableCharacter: function isPrintableCharacter() {
    var _char = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return this.isNotEmpty(_char) && _char.length === 1 && _char.match(/\S| /);
  },
  /**
   * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlast
   */
  findLast: function findLast(arr, callback) {
    var item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch (_unused2) {
        item = _toConsumableArray$2(arr).reverse().find(callback);
      }
    }
    return item;
  },
  /**
   * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
   * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
   */
  findLastIndex: function findLastIndex(arr, callback) {
    var index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch (_unused3) {
        index = arr.lastIndexOf(_toConsumableArray$2(arr).reverse().find(callback));
      }
    }
    return index;
  },
  sort: function sort(value1, value2) {
    var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var comparator = arguments.length > 3 ? arguments[3] : undefined;
    var nullSortOrder = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var result = this.compare(value1, value2, comparator, order);
    var finalSortOrder = order;

    // nullSortOrder == 1 means Excel like sort nulls at bottom
    if (this.isEmpty(value1) || this.isEmpty(value2)) {
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }
    return finalSortOrder * result;
  },
  compare: function compare(value1, value2, comparator) {
    var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var result = -1;
    var emptyValue1 = this.isEmpty(value1);
    var emptyValue2 = this.isEmpty(value2);
    if (emptyValue1 && emptyValue2) result = 0;else if (emptyValue1) result = order;else if (emptyValue2) result = -order;else if (typeof value1 === 'string' && typeof value2 === 'string') result = comparator(value1, value2);else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    return result;
  },
  localeComparator: function localeComparator() {
    //performance gain using Int.Collator. It is not recommended to use localeCompare against large arrays.
    return new Intl.Collator(undefined, {
      numeric: true
    }).compare;
  },
  nestedKeys: function nestedKeys() {
    var _this = this;
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var parentKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return Object.entries(obj).reduce(function (o, _ref) {
      var _ref2 = _slicedToArray$2(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      var currentKey = parentKey ? "".concat(parentKey, ".").concat(key) : key;
      _this.isObject(value) ? o = o.concat(_this.nestedKeys(value, currentKey)) : o.push(currentKey);
      return o;
    }, []);
  },
  stringify: function stringify(value) {
    var _this2 = this;
    var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var currentIndent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var currentIndentStr = ' '.repeat(currentIndent);
    var nextIndentStr = ' '.repeat(currentIndent + indent);
    if (this.isArray(value)) {
      return '[' + value.map(function (v) {
        return _this2.stringify(v, indent, currentIndent + indent);
      }).join(', ') + ']';
    } else if (this.isDate(value)) {
      return value.toISOString();
    } else if (this.isFunction(value)) {
      return value.toString();
    } else if (this.isObject(value)) {
      return '{\n' + Object.entries(value).map(function (_ref3) {
        var _ref4 = _slicedToArray$2(_ref3, 2),
          k = _ref4[0],
          v = _ref4[1];
        return "".concat(nextIndentStr).concat(k, ": ").concat(_this2.stringify(v, indent, currentIndent + indent));
      }).join(',\n') + "\n".concat(currentIndentStr) + '}';
    } else {
      return JSON.stringify(value);
    }
  }
};

function _typeof$7(o) { "@babel/helpers - typeof"; return _typeof$7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$7(o); }
function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }
function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey$7(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty$7(obj, key, value) { key = _toPropertyKey$7(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$7(t) { var i = _toPrimitive$7(t, "string"); return "symbol" == _typeof$7(i) ? i : String(i); }
function _toPrimitive$7(t, r) { if ("object" != _typeof$7(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$7(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = /*#__PURE__*/function () {
  function _default(_ref) {
    var init = _ref.init,
      type = _ref.type;
    _classCallCheck(this, _default);
    _defineProperty$7(this, "helpers", void 0);
    _defineProperty$7(this, "type", void 0);
    this.helpers = new Set(init);
    this.type = type;
  }
  _createClass(_default, [{
    key: "add",
    value: function add(instance) {
      this.helpers.add(instance);
    }
  }, {
    key: "update",
    value: function update() {
      // @todo
    }
  }, {
    key: "delete",
    value: function _delete(instance) {
      this.helpers["delete"](instance);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.helpers.clear();
    }
  }, {
    key: "get",
    value: function get(parentInstance, slots) {
      var children = this._get(parentInstance, slots);
      var computed = children ? this._recursive(_toConsumableArray$1(this.helpers), children) : null;
      return ObjectUtils.isNotEmpty(computed) ? computed : null;
    }
  }, {
    key: "_isMatched",
    value: function _isMatched(instance, key) {
      var _parent$vnode;
      var parent = instance === null || instance === void 0 ? void 0 : instance.parent;
      return (parent === null || parent === void 0 || (_parent$vnode = parent.vnode) === null || _parent$vnode === void 0 ? void 0 : _parent$vnode.key) === key || parent && this._isMatched(parent, key) || false;
    }
  }, {
    key: "_get",
    value: function _get(parentInstance, slots) {
      var _ref2, _ref2$default;
      return ((_ref2 = slots || (parentInstance === null || parentInstance === void 0 ? void 0 : parentInstance.$slots)) === null || _ref2 === void 0 || (_ref2$default = _ref2["default"]) === null || _ref2$default === void 0 ? void 0 : _ref2$default.call(_ref2)) || null;
    }
  }, {
    key: "_recursive",
    value: function _recursive() {
      var _this = this;
      var helpers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var components = [];
      children.forEach(function (child) {
        if (child.children instanceof Array) {
          components = components.concat(_this._recursive(components, child.children));
        } else if (child.type.name === _this.type) {
          components.push(child);
        } else if (ObjectUtils.isNotEmpty(child.key)) {
          components = components.concat(helpers.filter(function (c) {
            return _this._isMatched(c, child.key);
          }).map(function (c) {
            return c.vnode;
          }));
        }
      });
      return components;
    }
  }]);
  return _default;
}();

var lastId = 0;
function UniqueComponentId () {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pv_id_';
  lastId++;
  return "".concat(prefix).concat(lastId);
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$4(arr); }
function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function handler() {
  var zIndexes = [];
  var generateZIndex = function generateZIndex(key, autoZIndex) {
    var baseZIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 999;
    var lastZIndex = getLastZIndex(key, autoZIndex, baseZIndex);
    var newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;
    zIndexes.push({
      key: key,
      value: newZIndex
    });
    return newZIndex;
  };
  var revertZIndex = function revertZIndex(zIndex) {
    zIndexes = zIndexes.filter(function (obj) {
      return obj.value !== zIndex;
    });
  };
  var getCurrentZIndex = function getCurrentZIndex(key, autoZIndex) {
    return getLastZIndex(key, autoZIndex).value;
  };
  var getLastZIndex = function getLastZIndex(key, autoZIndex) {
    var baseZIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return _toConsumableArray(zIndexes).reverse().find(function (obj) {
      return autoZIndex ? true : obj.key === key;
    }) || {
      key: key,
      value: baseZIndex
    };
  };
  var getZIndex = function getZIndex(el) {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: function set(key, el, baseZIndex) {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, true, baseZIndex));
      }
    },
    clear: function clear(el) {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = '';
      }
    },
    getCurrent: function getCurrent(key) {
      return getCurrentZIndex(key, true);
    }
  };
}
var ZIndexUtils = handler();

utils_cjs.ConnectedOverlayScrollHandler = ConnectedOverlayScrollHandler;
utils_cjs.DomHandler = DomHandler;
utils_cjs.EventBus = primebus;
utils_cjs.HelperSet = _default;
utils_cjs.ObjectUtils = ObjectUtils;
utils_cjs.UniqueComponentId = UniqueComponentId;
utils_cjs.ZIndexUtils = ZIndexUtils;

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(vue$1);

Object.defineProperty(usestyle_cjs, '__esModule', { value: true });

var utils$2 = utils_cjs;
var vue = require$$1;

function _typeof$6(o) { "@babel/helpers - typeof"; return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$6(o); }
function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty$6(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$6(obj, key, value) { key = _toPropertyKey$6(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$6(t) { var i = _toPrimitive$6(t, "string"); return "symbol" == _typeof$6(i) ? i : String(i); }
function _toPrimitive$6(t, r) { if ("object" != _typeof$6(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$6(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function tryOnMounted(fn) {
  var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (vue.getCurrentInstance()) vue.onMounted(fn);else if (sync) fn();else vue.nextTick(fn);
}
var _id = 0;
function useStyle(css) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isLoaded = vue.ref(false);
  var cssRef = vue.ref(css);
  var styleRef = vue.ref(null);
  var defaultDocument = utils$2.DomHandler.isClient() ? window.document : undefined;
  var _options$document = options.document,
    document = _options$document === void 0 ? defaultDocument : _options$document,
    _options$immediate = options.immediate,
    immediate = _options$immediate === void 0 ? true : _options$immediate,
    _options$manual = options.manual,
    manual = _options$manual === void 0 ? false : _options$manual,
    _options$name = options.name,
    name = _options$name === void 0 ? "style_".concat(++_id) : _options$name,
    _options$id = options.id,
    id = _options$id === void 0 ? undefined : _options$id,
    _options$media = options.media,
    media = _options$media === void 0 ? undefined : _options$media,
    _options$nonce = options.nonce,
    nonce = _options$nonce === void 0 ? undefined : _options$nonce,
    _options$props = options.props,
    props = _options$props === void 0 ? {} : _options$props;
  var stop = function stop() {};

  /* @todo: Improve _options params */
  var load = function load(_css) {
    var _props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!document) return;
    var _styleProps = _objectSpread$2(_objectSpread$2({}, props), _props);
    var _name = _styleProps.name || name,
      _id = _styleProps.id || id,
      _nonce = _styleProps.nonce || nonce;
    styleRef.value = document.querySelector("style[data-primevue-style-id=\"".concat(_name, "\"]")) || document.getElementById(_id) || document.createElement('style');
    if (!styleRef.value.isConnected) {
      cssRef.value = _css || css;
      utils$2.DomHandler.setAttributes(styleRef.value, {
        type: 'text/css',
        id: _id,
        media: media,
        nonce: _nonce
      });
      document.head.appendChild(styleRef.value);
      utils$2.DomHandler.setAttribute(styleRef.value, 'data-primevue-style-id', name);
      utils$2.DomHandler.setAttributes(styleRef.value, _styleProps);
    }
    if (isLoaded.value) return;
    stop = vue.watch(cssRef, function (value) {
      styleRef.value.textContent = value;
    }, {
      immediate: true
    });
    isLoaded.value = true;
  };
  var unload = function unload() {
    if (!document || !isLoaded.value) return;
    stop();
    utils$2.DomHandler.isExist(styleRef.value) && document.head.removeChild(styleRef.value);
    isLoaded.value = false;
  };
  if (immediate && !manual) tryOnMounted(load);

  /*if (!manual)
    tryOnScopeDispose(unload)*/

  return {
    id: id,
    name: name,
    css: cssRef,
    unload: unload,
    load: load,
    isLoaded: vue.readonly(isLoaded)
  };
}

usestyle_cjs.useStyle = useStyle;

var usestyle$1 = usestyle_cjs;

function _typeof$5(o) { "@babel/helpers - typeof"; return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$5(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty$5(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$5(obj, key, value) { key = _toPropertyKey$5(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$5(t) { var i = _toPrimitive$5(t, "string"); return "symbol" == _typeof$5(i) ? i : String(i); }
function _toPrimitive$5(t, r) { if ("object" != _typeof$5(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$5(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var css$1 = "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n}\n\n.p-hidden-accessible input,\n.p-hidden-accessible select {\n    transform: scale(0);\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: var(--scrollbar-width);\n}\n";
var classes$1s = {};
var inlineStyles$k = {};
var BaseStyle$1u = {
  name: 'base',
  css: css$1,
  classes: classes$1s,
  inlineStyles: inlineStyles$k,
  loadStyle: function loadStyle() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return this.css ? usestyle$1.useStyle(this.css, _objectSpread$1({
      name: this.name
    }, options)) : {};
  },
  getStyleSheet: function getStyleSheet() {
    var extendedCSS = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (this.css) {
      var _props = Object.entries(props).reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];
        return acc.push("".concat(k, "=\"").concat(v, "\"")) && acc;
      }, []).join(' ');
      return "<style type=\"text/css\" data-primevue-style-id=\"".concat(this.name, "\" ").concat(_props, ">").concat(this.css).concat(extendedCSS, "</style>");
    }
    return '';
  },
  extend: function extend(style) {
    return _objectSpread$1(_objectSpread$1({}, this), {}, {
      css: undefined
    }, style);
  }
};

var basestyle_cjs = BaseStyle$1u;

const BaseStyle$1v = /*@__PURE__*/getDefaultExportFromCjs(basestyle_cjs);

var BaseStyle$1t = basestyle_cjs;
var usestyle = usestyle_cjs;

function _interopDefaultLegacy$1t (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1t = /*#__PURE__*/_interopDefaultLegacy$1t(BaseStyle$1t);

function _typeof$4(o) { "@babel/helpers - typeof"; return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$4(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty$4(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$4(obj, key, value) { key = _toPropertyKey$4(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$4(t) { var i = _toPrimitive$4(t, "string"); return "symbol" == _typeof$4(i) ? i : String(i); }
function _toPrimitive$4(t, r) { if ("object" != _typeof$4(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$4(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BaseComponentStyle = BaseStyle__default$1t["default"].extend({
  name: 'common',
  loadGlobalStyle: function loadGlobalStyle(globalCSS) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return usestyle.useStyle(globalCSS, _objectSpread({
      name: 'global'
    }, options));
  }
});

var basecomponentstyle_cjs = BaseComponentStyle;

const BaseComponentStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(basecomponentstyle_cjs);

var BaseStyle$1s = basestyle_cjs;
var utils$1 = utils_cjs;

function _interopDefaultLegacy$1s (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1s = /*#__PURE__*/_interopDefaultLegacy$1s(BaseStyle$1s);

var inlineStyles$j = {
  root: {
    position: 'relative'
  }
};
var classes$1r = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-autocomplete p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-focus': instance.focused,
      'p-autocomplete-dd': props.dropdown,
      'p-autocomplete-multiple': props.multiple,
      'p-inputwrapper-filled': props.modelValue || utils$1.ObjectUtils.isNotEmpty(instance.inputValue),
      'p-inputwrapper-focus': instance.focused,
      'p-overlay-open': instance.overlayVisible
    }];
  },
  input: function input(_ref2) {
    var props = _ref2.props,
      instance = _ref2.instance;
    return ['p-autocomplete-input p-inputtext p-component', {
      'p-autocomplete-dd-input': props.dropdown,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  },
  container: function container(_ref3) {
    var props = _ref3.props,
      instance = _ref3.instance;
    return ['p-autocomplete-multiple-container p-component p-inputtext', {
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  },
  token: function token(_ref4) {
    var instance = _ref4.instance,
      i = _ref4.i;
    return ['p-autocomplete-token', {
      'p-focus': instance.focusedMultipleOptionIndex === i
    }];
  },
  tokenLabel: 'p-autocomplete-token-label',
  removeTokenIcon: 'p-autocomplete-token-icon',
  inputToken: 'p-autocomplete-input-token',
  loadingIcon: 'p-autocomplete-loader',
  dropdownButton: 'p-autocomplete-dropdown',
  panel: function panel(_ref5) {
    _ref5.props;
      var instance = _ref5.instance;
    return ['p-autocomplete-panel p-component', {
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  list: 'p-autocomplete-items',
  itemGroup: 'p-autocomplete-item-group',
  item: function item(_ref6) {
    var instance = _ref6.instance,
      option = _ref6.option,
      i = _ref6.i,
      getItemOptions = _ref6.getItemOptions;
    return ['p-autocomplete-item', {
      'p-highlight': instance.isSelected(option),
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
      'p-disabled': instance.isOptionDisabled(option)
    }];
  },
  emptyMessage: 'p-autocomplete-empty-message'
};
var AutoCompleteStyle = BaseStyle__default$1s["default"].extend({
  name: 'autocomplete',
  classes: classes$1r,
  inlineStyles: inlineStyles$j
});

var autocompletestyle_cjs = AutoCompleteStyle;

const AutoCompleteStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(autocompletestyle_cjs);

var BaseStyle$1r = basestyle_cjs;

function _interopDefaultLegacy$1r (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1r = /*#__PURE__*/_interopDefaultLegacy$1r(BaseStyle$1r);

var inlineStyles$i = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1q = {
  root: function root(_ref2) {
    var props = _ref2.props,
      state = _ref2.state;
    return ['p-calendar p-component p-inputwrapper', {
      'p-calendar-w-btn': props.showIcon && props.iconDisplay === 'button',
      'p-icon-field p-icon-field-right': props.showIcon && props.iconDisplay === 'input',
      'p-calendar-timeonly': props.timeOnly,
      'p-calendar-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-inputwrapper-filled': props.modelValue,
      'p-inputwrapper-focus': state.focused,
      'p-focus': state.focused || state.overlayVisible
    }];
  },
  input: function input(_ref3) {
    var props = _ref3.props,
      instance = _ref3.instance;
    return ['p-inputtext p-component', {
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  },
  dropdownButton: 'p-datepicker-trigger',
  inputIcon: 'p-datepicker-trigger-icon p-input-icon',
  panel: function panel(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props,
      state = _ref4.state;
    return ['p-datepicker p-component', {
      'p-datepicker-mobile': instance.queryMatches,
      'p-datepicker-inline': props.inline,
      'p-disabled': props.disabled,
      'p-datepicker-timeonly': props.timeOnly,
      'p-datepicker-multiple-month': props.numberOfMonths > 1,
      'p-datepicker-monthpicker': state.currentView === 'month',
      'p-datepicker-yearpicker': state.currentView === 'year',
      'p-datepicker-touch-ui': props.touchUI,
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  groupContainer: 'p-datepicker-group-container',
  group: 'p-datepicker-group',
  header: 'p-datepicker-header',
  previousButton: 'p-datepicker-prev p-link',
  previousIcon: 'p-datepicker-prev-icon',
  title: 'p-datepicker-title',
  monthTitle: 'p-datepicker-month p-link',
  yearTitle: 'p-datepicker-year p-link',
  decadeTitle: 'p-datepicker-decade',
  nextButton: 'p-datepicker-next p-link',
  nextIcon: 'p-datepicker-next-icon',
  container: 'p-datepicker-calendar-container',
  table: 'p-datepicker-calendar',
  weekHeader: 'p-datepicker-weekheader p-disabled',
  weekNumber: 'p-datepicker-weeknumber',
  weekLabelContainer: 'p-disabled',
  day: function day(_ref5) {
    var date = _ref5.date;
    return [{
      'p-datepicker-other-month': date.otherMonth,
      'p-datepicker-today': date.today
    }];
  },
  dayLabel: function dayLabel(_ref6) {
    var instance = _ref6.instance,
      date = _ref6.date;
    return [{
      'p-highlight': instance.isSelected(date) && date.selectable,
      'p-disabled': !date.selectable
    }];
  },
  monthPicker: 'p-monthpicker',
  month: function month(_ref7) {
    var instance = _ref7.instance,
      _month = _ref7.month,
      index = _ref7.index;
    return ['p-monthpicker-month', {
      'p-highlight': instance.isMonthSelected(index),
      'p-disabled': !_month.selectable
    }];
  },
  yearPicker: 'p-yearpicker',
  year: function year(_ref8) {
    var instance = _ref8.instance,
      _year = _ref8.year;
    return ['p-yearpicker-year', {
      'p-highlight': instance.isYearSelected(_year.value),
      'p-disabled': !_year.selectable
    }];
  },
  timePicker: 'p-timepicker',
  hourPicker: 'p-hour-picker',
  incrementButton: 'p-link',
  decrementButton: 'p-link',
  separatorContainer: 'p-separator',
  minutePicker: 'p-minute-picker',
  secondPicker: 'p-second-picker',
  ampmPicker: 'p-ampm-picker',
  buttonbar: 'p-datepicker-buttonbar',
  todayButton: 'p-button-text',
  clearButton: 'p-button-text'
};
var CalendarStyle = BaseStyle__default$1r["default"].extend({
  name: 'calendar',
  classes: classes$1q,
  inlineStyles: inlineStyles$i
});

var calendarstyle_cjs = CalendarStyle;

const CalendarStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(calendarstyle_cjs);

var BaseStyle$1q = basestyle_cjs;

function _interopDefaultLegacy$1q (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1q = /*#__PURE__*/_interopDefaultLegacy$1q(BaseStyle$1q);

var inlineStyles$h = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1p = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-cascadeselect p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
      'p-focus': instance.focused,
      'p-inputwrapper-filled': props.modelValue,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-overlay-open': instance.overlayVisible
    }];
  },
  label: function label(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-cascadeselect-label p-inputtext', {
      'p-placeholder': instance.label === props.placeholder,
      'p-cascadeselect-label-empty': !instance.$slots['value'] && (instance.label === 'p-emptylabel' || instance.label.length === 0)
    }];
  },
  dropdownButton: 'p-cascadeselect-trigger',
  loadingIcon: 'p-cascadeselect-trigger-icon',
  dropdownIcon: 'p-cascadeselect-trigger-icon',
  panel: function panel(_ref4) {
    _ref4.props;
      var instance = _ref4.instance;
    return ['p-cascadeselect-panel p-component', {
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  wrapper: 'p-cascadeselect-items-wrapper',
  list: 'p-cascadeselect-panel p-cascadeselect-items',
  item: function item(_ref5) {
    var instance = _ref5.instance,
      processedOption = _ref5.processedOption;
    return ['p-cascadeselect-item', {
      'p-cascadeselect-item-group': instance.isOptionGroup(processedOption),
      'p-cascadeselect-item-active p-highlight': instance.isOptionActive(processedOption),
      'p-focus': instance.isOptionFocused(processedOption),
      'p-disabled': instance.isOptionDisabled(processedOption)
    }];
  },
  content: 'p-cascadeselect-item-content',
  text: 'p-cascadeselect-item-text',
  groupIcon: 'p-cascadeselect-group-icon',
  sublist: 'p-cascadeselect-sublist'
};
var CascadeSelectStyle = BaseStyle__default$1q["default"].extend({
  name: 'cascadeselect',
  classes: classes$1p,
  inlineStyles: inlineStyles$h
});

var cascadeselectstyle_cjs = CascadeSelectStyle;

const CascadeSelectStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(cascadeselectstyle_cjs);

var BaseStyle$1p = basestyle_cjs;

function _interopDefaultLegacy$1p (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1p = /*#__PURE__*/_interopDefaultLegacy$1p(BaseStyle$1p);

var classes$1o = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-checkbox p-component', {
      'p-highlight': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  },
  box: 'p-checkbox-box',
  input: 'p-checkbox-input',
  icon: 'p-checkbox-icon'
};
var CheckboxStyle = BaseStyle__default$1p["default"].extend({
  name: 'checkbox',
  classes: classes$1o
});

var checkboxstyle_cjs = CheckboxStyle;

const CheckboxStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(checkboxstyle_cjs);

var BaseStyle$1o = basestyle_cjs;

function _interopDefaultLegacy$1o (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1o = /*#__PURE__*/_interopDefaultLegacy$1o(BaseStyle$1o);

var classes$1n = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-chips p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-focus': instance.focused,
      'p-inputwrapper-filled': props.modelValue && props.modelValue.length || instance.inputValue && instance.inputValue.length,
      'p-inputwrapper-focus': instance.focused
    }];
  },
  container: function container(_ref2) {
    var props = _ref2.props,
      instance = _ref2.instance;
    return ['p-inputtext p-chips-multiple-container', {
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  },
  token: function token(_ref3) {
    var state = _ref3.state,
      index = _ref3.index;
    return ['p-chips-token', {
      'p-focus': state.focusedIndex === index
    }];
  },
  label: 'p-chips-token-label',
  removeTokenIcon: 'p-chips-token-icon',
  inputToken: 'p-chips-input-token'
};
var ChipsStyle = BaseStyle__default$1o["default"].extend({
  name: 'chips',
  classes: classes$1n
});

var chipsstyle_cjs = ChipsStyle;

const ChipsStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(chipsstyle_cjs);

var BaseStyle$1n = basestyle_cjs;

function _interopDefaultLegacy$1n (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1n = /*#__PURE__*/_interopDefaultLegacy$1n(BaseStyle$1n);

var classes$1m = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-colorpicker p-component', {
      'p-colorpicker-overlay': !props.inline
    }];
  },
  input: function input(_ref2) {
    var props = _ref2.props;
    return ['p-colorpicker-preview p-inputtext', {
      'p-disabled': props.disabled
    }];
  },
  panel: function panel(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-colorpicker-panel', {
      'p-colorpicker-overlay-panel': !props.inline,
      'p-disabled': props.disabled,
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  content: 'p-colorpicker-content',
  selector: 'p-colorpicker-color-selector',
  color: 'p-colorpicker-color',
  colorHandle: 'p-colorpicker-color-handle',
  hue: 'p-colorpicker-hue',
  hueHandle: 'p-colorpicker-hue-handle'
};
var ColorPickerStyle = BaseStyle__default$1n["default"].extend({
  name: 'colorpicker',
  classes: classes$1m
});

var colorpickerstyle_cjs = ColorPickerStyle;

const ColorPickerStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(colorpickerstyle_cjs);

var BaseStyle$1m = basestyle_cjs;

function _interopDefaultLegacy$1m (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1m = /*#__PURE__*/_interopDefaultLegacy$1m(BaseStyle$1m);

var classes$1l = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props,
      state = _ref.state;
    return ['p-dropdown p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
      'p-dropdown-clearable': props.showClear,
      'p-focus': state.focused,
      'p-inputwrapper-filled': instance.hasSelectedOption,
      'p-inputwrapper-focus': state.focused || state.overlayVisible,
      'p-overlay-open': state.overlayVisible
    }];
  },
  input: function input(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-dropdown-label p-inputtext', {
      'p-placeholder': !props.editable && instance.label === props.placeholder,
      'p-dropdown-label-empty': !props.editable && !instance.$slots['value'] && (instance.label === 'p-emptylabel' || instance.label.length === 0)
    }];
  },
  clearIcon: 'p-dropdown-clear-icon',
  trigger: 'p-dropdown-trigger',
  loadingicon: 'p-dropdown-trigger-icon',
  dropdownIcon: 'p-dropdown-trigger-icon',
  panel: function panel(_ref3) {
    _ref3.props;
      var instance = _ref3.instance;
    return ['p-dropdown-panel p-component', {
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  header: 'p-dropdown-header',
  filterContainer: 'p-dropdown-filter-container',
  filterInput: function filterInput(_ref4) {
    var props = _ref4.props,
      instance = _ref4.instance;
    return ['p-dropdown-filter p-inputtext p-component', {
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  },
  filterIcon: 'p-dropdown-filter-icon',
  wrapper: 'p-dropdown-items-wrapper',
  list: 'p-dropdown-items',
  itemGroup: 'p-dropdown-item-group',
  itemGroupLabel: 'p-dropdown-item-group-label',
  item: function item(_ref5) {
    var instance = _ref5.instance,
      props = _ref5.props,
      state = _ref5.state,
      option = _ref5.option,
      focusedOption = _ref5.focusedOption;
    return ['p-dropdown-item', {
      'p-highlight': instance.isSelected(option) && props.highlightOnSelect,
      'p-focus': state.focusedOptionIndex === focusedOption,
      'p-disabled': instance.isOptionDisabled(option)
    }];
  },
  itemLabel: 'p-dropdown-item-label',
  checkIcon: 'p-dropdown-check-icon',
  blankIcon: 'p-dropdown-blank-icon',
  emptyMessage: 'p-dropdown-empty-message'
};
var DropdownStyle = BaseStyle__default$1m["default"].extend({
  name: 'dropdown',
  classes: classes$1l
});

var dropdownstyle_cjs = DropdownStyle;

const DropdownStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(dropdownstyle_cjs);

var BaseStyle$1l = basestyle_cjs;

function _interopDefaultLegacy$1l (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1l = /*#__PURE__*/_interopDefaultLegacy$1l(BaseStyle$1l);

var quillCSS = "\n/*!\n* Quill Editor v1.3.3\n* https://quilljs.com/\n* Copyright (c) 2014, Jason Chen\n* Copyright (c) 2013, salesforce.com\n*/\n.ql-container {\n    box-sizing: border-box;\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 13px;\n    height: 100%;\n    margin: 0px;\n    position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n    visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n    pointer-events: none;\n}\n.ql-clipboard {\n    left: -100000px;\n    height: 1px;\n    overflow-y: hidden;\n    position: absolute;\n    top: 50%;\n}\n.ql-clipboard p {\n    margin: 0;\n    padding: 0;\n}\n.ql-editor {\n    box-sizing: border-box;\n    line-height: 1.42;\n    height: 100%;\n    outline: none;\n    overflow-y: auto;\n    padding: 12px 15px;\n    tab-size: 4;\n    -moz-tab-size: 4;\n    text-align: left;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n}\n.ql-editor > * {\n    cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n    margin: 0;\n    padding: 0;\n    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n    padding-left: 1.5rem;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n    list-style-type: none;\n}\n.ql-editor ul > li::before {\n    content: '\\2022';\n}\n.ql-editor ul[data-checked='true'],\n.ql-editor ul[data-checked='false'] {\n    pointer-events: none;\n}\n.ql-editor ul[data-checked='true'] > li *,\n.ql-editor ul[data-checked='false'] > li * {\n    pointer-events: all;\n}\n.ql-editor ul[data-checked='true'] > li::before,\n.ql-editor ul[data-checked='false'] > li::before {\n    color: #777;\n    cursor: pointer;\n    pointer-events: all;\n}\n.ql-editor ul[data-checked='true'] > li::before {\n    content: '\\2611';\n}\n.ql-editor ul[data-checked='false'] > li::before {\n    content: '\\2610';\n}\n.ql-editor li::before {\n    display: inline-block;\n    white-space: nowrap;\n    width: 1.2rem;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n    margin-left: -1.5rem;\n    margin-right: 0.3rem;\n    text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n    margin-left: 0.3rem;\n    margin-right: -1.5rem;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n    padding-left: 1.5rem;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n    padding-right: 1.5rem;\n}\n.ql-editor ol li {\n    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    counter-increment: list-0;\n}\n.ql-editor ol li:before {\n    content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n    counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n    content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n    counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n    content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n    counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n    content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n    counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n    content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n    counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n    counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n    content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n    counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n    counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n    content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n    counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n    counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n    content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n    counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n    counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n    content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n    counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n    counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n    content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n    padding-left: 3rem;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n    padding-left: 4.5rem;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n    padding-right: 3rem;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n    padding-right: 4.5rem;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n    padding-left: 6rem;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n    padding-left: 7.5rem;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n    padding-right: 6rem;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n    padding-right: 7.5rem;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n    padding-left: 9rem;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n    padding-left: 10.5rem;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n    padding-right: 9rem;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n    padding-right: 10.5rem;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n    padding-left: 12rem;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n    padding-left: 13.5rem;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n    padding-right: 12rem;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n    padding-right: 13.5rem;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n    padding-left: 15rem;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n    padding-left: 16.5rem;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n    padding-right: 15rem;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n    padding-right: 16.5rem;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n    padding-left: 18rem;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n    padding-left: 19.5rem;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n    padding-right: 18rem;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n    padding-right: 19.5rem;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n    padding-left: 21rem;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n    padding-left: 22.5rem;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n    padding-right: 21rem;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n    padding-right: 22.5rem;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n    padding-left: 24rem;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n    padding-left: 25.5rem;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n    padding-right: 24rem;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n    padding-right: 25.5rem;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n    padding-left: 27rem;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n    padding-left: 28.5rem;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n    padding-right: 27rem;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n    padding-right: 28.5rem;\n}\n.ql-editor .ql-video {\n    display: block;\n    max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n    margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n    margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n    background-color: #000;\n}\n.ql-editor .ql-bg-red {\n    background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n    background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n    background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n    background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n    background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n    background-color: #93f;\n}\n.ql-editor .ql-color-white {\n    color: #fff;\n}\n.ql-editor .ql-color-red {\n    color: #e60000;\n}\n.ql-editor .ql-color-orange {\n    color: #f90;\n}\n.ql-editor .ql-color-yellow {\n    color: #ff0;\n}\n.ql-editor .ql-color-green {\n    color: #008a00;\n}\n.ql-editor .ql-color-blue {\n    color: #06c;\n}\n.ql-editor .ql-color-purple {\n    color: #93f;\n}\n.ql-editor .ql-font-serif {\n    font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n    font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n    font-size: 0.75rem;\n}\n.ql-editor .ql-size-large {\n    font-size: 1.5rem;\n}\n.ql-editor .ql-size-huge {\n    font-size: 2.5rem;\n}\n.ql-editor .ql-direction-rtl {\n    direction: rtl;\n    text-align: inherit;\n}\n.ql-editor .ql-align-center {\n    text-align: center;\n}\n.ql-editor .ql-align-justify {\n    text-align: justify;\n}\n.ql-editor .ql-align-right {\n    text-align: right;\n}\n.ql-editor.ql-blank::before {\n    color: rgba(0, 0, 0, 0.6);\n    content: attr(data-placeholder);\n    font-style: italic;\n    left: 15px;\n    pointer-events: none;\n    position: absolute;\n    right: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n    clear: both;\n    content: '';\n    display: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    display: inline-block;\n    float: left;\n    height: 24px;\n    padding: 3px 5px;\n    width: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n    float: left;\n    height: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n    outline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type='file'],\n.ql-snow .ql-toolbar input.ql-image[type='file'] {\n    display: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n    color: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n    fill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n    stroke: #06c;\n}\n@media (pointer: coarse) {\n    .ql-snow.ql-toolbar button:hover:not(.ql-active),\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n        color: #444;\n    }\n    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n        fill: #444;\n    }\n    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n        stroke: #444;\n    }\n}\n.ql-snow {\n    box-sizing: border-box;\n}\n.ql-snow * {\n    box-sizing: border-box;\n}\n.ql-snow .ql-hidden {\n    display: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n    visibility: hidden;\n}\n.ql-snow .ql-tooltip {\n    position: absolute;\n    transform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\n    cursor: pointer;\n    text-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\n    transform: translateY(-10px);\n}\n.ql-snow .ql-formats {\n    display: inline-block;\n    vertical-align: middle;\n}\n.ql-snow .ql-formats:after {\n    clear: both;\n    content: '';\n    display: table;\n}\n.ql-snow .ql-stroke {\n    fill: none;\n    stroke: #444;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\n    fill: none;\n    stroke: #444;\n    stroke-miterlimit: 10;\n    stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n    fill: #444;\n}\n.ql-snow .ql-empty {\n    fill: none;\n}\n.ql-snow .ql-even {\n    fill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n    stroke-width: 1;\n}\n.ql-snow .ql-transparent {\n    opacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\n    display: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\n    display: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\n    display: none;\n}\n.ql-snow .ql-editor h1 {\n    font-size: 2rem;\n}\n.ql-snow .ql-editor h2 {\n    font-size: 1.5rem;\n}\n.ql-snow .ql-editor h3 {\n    font-size: 1.17rem;\n}\n.ql-snow .ql-editor h4 {\n    font-size: 1rem;\n}\n.ql-snow .ql-editor h5 {\n    font-size: 0.83rem;\n}\n.ql-snow .ql-editor h6 {\n    font-size: 0.67rem;\n}\n.ql-snow .ql-editor a {\n    text-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\n    border-left: 4px solid #ccc;\n    margin-bottom: 5px;\n    margin-top: 5px;\n    padding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n    background-color: #f0f0f0;\n    border-radius: 3px;\n}\n.ql-snow .ql-editor pre {\n    white-space: pre-wrap;\n    margin-bottom: 5px;\n    margin-top: 5px;\n    padding: 5px 10px;\n}\n.ql-snow .ql-editor code {\n    font-size: 85%;\n    padding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\n    background-color: #23241f;\n    color: #f8f8f2;\n    overflow: visible;\n}\n.ql-snow .ql-editor img {\n    max-width: 100%;\n}\n.ql-snow .ql-picker {\n    color: #444;\n    display: inline-block;\n    float: left;\n    font-size: 14px;\n    font-weight: 500;\n    height: 24px;\n    position: relative;\n    vertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n    cursor: pointer;\n    display: inline-block;\n    height: 100%;\n    padding-left: 8px;\n    padding-right: 2px;\n    position: relative;\n    width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n    display: inline-block;\n    line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n    background-color: #fff;\n    display: none;\n    min-width: 100%;\n    padding: 4px 8px;\n    position: absolute;\n    white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n    cursor: pointer;\n    display: block;\n    padding-bottom: 5px;\n    padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n    color: #ccc;\n    z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n    fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n    stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n    display: block;\n    margin-top: -1px;\n    top: 100%;\n    z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n    width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n    padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n    right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n    padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n    height: 24px;\n    width: 24px;\n    padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n    padding: 3px 5px;\n    width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n    border: 1px solid transparent;\n    float: left;\n    height: 16px;\n    margin: 2px;\n    padding: 0px;\n    width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n    position: absolute;\n    margin-top: -9px;\n    right: 0;\n    top: 50%;\n    width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n    content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n    width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n    content: 'Normal';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {\n    content: 'Heading 1';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {\n    content: 'Heading 2';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {\n    content: 'Heading 3';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {\n    content: 'Heading 4';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {\n    content: 'Heading 5';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {\n    content: 'Heading 6';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {\n    font-size: 2rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {\n    font-size: 1.5rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {\n    font-size: 1.17rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {\n    font-size: 1rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {\n    font-size: 0.83rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {\n    font-size: 0.67rem;\n}\n.ql-snow .ql-picker.ql-font {\n    width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n    content: 'Sans Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {\n    content: 'Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {\n    content: 'Monospace';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {\n    font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {\n    font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n    width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n    content: 'Normal';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {\n    content: 'Small';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {\n    content: 'Large';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {\n    content: 'Huge';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {\n    font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {\n    font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {\n    font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n    background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n    background-color: #000;\n}\n.ql-toolbar.ql-snow {\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n    padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n    margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n    border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n    border: 1px solid transparent;\n    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n    border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n    border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n    border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n    border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    box-shadow: 0px 0px 5px #ddd;\n    color: #444;\n    padding: 5px 12px;\n    white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n    content: 'Visit URL:';\n    line-height: 26px;\n    margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type='text'] {\n    display: none;\n    border: 1px solid #ccc;\n    font-size: 13px;\n    height: 26px;\n    margin: 0px;\n    padding: 3px 5px;\n    width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n    display: inline-block;\n    max-width: 200px;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n    border-right: 1px solid #ccc;\n    content: 'Edit';\n    margin-left: 16px;\n    padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n    content: 'Remove';\n    margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n    line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n    display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type='text'] {\n    display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n    border-right: 0px;\n    content: 'Save';\n    padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode='link']::before {\n    content: 'Enter link:';\n}\n.ql-snow .ql-tooltip[data-mode='formula']::before {\n    content: 'Enter formula:';\n}\n.ql-snow .ql-tooltip[data-mode='video']::before {\n    content: 'Enter video:';\n}\n.ql-snow a {\n    color: #06c;\n}\n.ql-container.ql-snow {\n    border: 1px solid #ccc;\n}\n";
var classes$1k = {
  root: 'p-editor-container',
  toolbar: 'p-editor-toolbar',
  content: 'p-editor-content'
};
var EditorStyle = BaseStyle__default$1l["default"].extend({
  name: 'editor',
  css: quillCSS,
  classes: classes$1k
});

var editorstyle_cjs = EditorStyle;

const EditorStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(editorstyle_cjs);

var BaseStyle$1k = basestyle_cjs;

function _interopDefaultLegacy$1k (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1k = /*#__PURE__*/_interopDefaultLegacy$1k(BaseStyle$1k);

var classes$1j = {
  root: 'p-float-label'
};
var FloatLabelStyle = BaseStyle__default$1k["default"].extend({
  name: 'floatlabel',
  classes: classes$1j
});

var floatlabelstyle_cjs = FloatLabelStyle;

const FloatLabelStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(floatlabelstyle_cjs);

var BaseStyle$1j = basestyle_cjs;

function _interopDefaultLegacy$1j (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1j = /*#__PURE__*/_interopDefaultLegacy$1j(BaseStyle$1j);

var classes$1i = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-icon-field', {
      'p-icon-field-right': props.iconPosition === 'right',
      'p-icon-field-left': props.iconPosition === 'left'
    }];
  }
};
var IconFieldStyle = BaseStyle__default$1j["default"].extend({
  name: 'iconfield',
  classes: classes$1i
});

var iconfieldstyle_cjs = IconFieldStyle;

const IconFieldStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(iconfieldstyle_cjs);

var BaseStyle$1i = basestyle_cjs;

function _interopDefaultLegacy$1i (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1i = /*#__PURE__*/_interopDefaultLegacy$1i(BaseStyle$1i);

var classes$1h = {
  root: 'p-inputgroup'
};
var InputGroupStyle = BaseStyle__default$1i["default"].extend({
  name: 'inputgroup',
  classes: classes$1h
});

var inputgroupstyle_cjs = InputGroupStyle;

const InputGroupStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(inputgroupstyle_cjs);

var BaseStyle$1h = basestyle_cjs;

function _interopDefaultLegacy$1h (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1h = /*#__PURE__*/_interopDefaultLegacy$1h(BaseStyle$1h);

var classes$1g = {
  root: 'p-inputgroup-addon'
};
var InputGroupAddonStyle = BaseStyle__default$1h["default"].extend({
  name: 'inputgroupaddon',
  classes: classes$1g
});

var inputgroupaddonstyle_cjs = InputGroupAddonStyle;

const InputGroupAddonStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(inputgroupaddonstyle_cjs);

var BaseStyle$1g = basestyle_cjs;

function _interopDefaultLegacy$1g (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1g = /*#__PURE__*/_interopDefaultLegacy$1g(BaseStyle$1g);

var classes$1f = {
  root: 'p-input-icon'
};
var InputIconStyle = BaseStyle__default$1g["default"].extend({
  name: 'inputicon',
  classes: classes$1f
});

var inputiconstyle_cjs = InputIconStyle;

const InputIconStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(inputiconstyle_cjs);

var BaseStyle$1f = basestyle_cjs;

function _interopDefaultLegacy$1f (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1f = /*#__PURE__*/_interopDefaultLegacy$1f(BaseStyle$1f);

var classes$1e = {
  root: function root(_ref) {
    var props = _ref.props,
      instance = _ref.instance;
    return ['p-inputmask p-inputtext p-component', {
      'p-filled': instance.filled,
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  }
};
var InputMaskStyle = BaseStyle__default$1f["default"].extend({
  name: 'inputmask',
  classes: classes$1e
});

var inputmaskstyle_cjs = InputMaskStyle;

const InputMaskStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(inputmaskstyle_cjs);

var BaseStyle$1e = basestyle_cjs;

function _interopDefaultLegacy$1e (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1e = /*#__PURE__*/_interopDefaultLegacy$1e(BaseStyle$1e);

var classes$1d = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputnumber p-component p-inputwrapper', {
      'p-inputwrapper-filled': instance.filled || props.allowEmpty === false,
      'p-inputwrapper-focus': instance.focused,
      'p-inputnumber-buttons-stacked': props.showButtons && props.buttonLayout === 'stacked',
      'p-inputnumber-buttons-horizontal': props.showButtons && props.buttonLayout === 'horizontal',
      'p-inputnumber-buttons-vertical': props.showButtons && props.buttonLayout === 'vertical',
      'p-invalid': props.invalid
    }];
  },
  input: function input(_ref2) {
    var props = _ref2.props,
      instance = _ref2.instance;
    return ['p-inputnumber-input', {
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  },
  buttonGroup: 'p-inputnumber-button-group',
  incrementButton: function incrementButton(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-inputnumber-button p-inputnumber-button-up', {
      'p-disabled': props.showButtons && props.max !== null && instance.maxBoundry()
    }];
  },
  decrementButton: function decrementButton(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props;
    return ['p-inputnumber-button p-inputnumber-button-down', {
      'p-disabled': props.showButtons && props.min !== null && instance.minBoundry()
    }];
  }
};
var InputNumberStyle = BaseStyle__default$1e["default"].extend({
  name: 'inputnumber',
  classes: classes$1d
});

var inputnumberstyle_cjs = InputNumberStyle;

const InputNumberStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(inputnumberstyle_cjs);

var BaseStyle$1d = basestyle_cjs;

function _interopDefaultLegacy$1d (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1d = /*#__PURE__*/_interopDefaultLegacy$1d(BaseStyle$1d);

var classes$1c = {
  root: 'p-inputotp p-component',
  input: 'p-inputotp-input'
};
var InputOtpStyle = BaseStyle__default$1d["default"].extend({
  name: 'inputotp',
  classes: classes$1c
});

var inputotpstyle_cjs = InputOtpStyle;

const InputOtpStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(inputotpstyle_cjs);

var BaseStyle$1c = basestyle_cjs;

function _interopDefaultLegacy$1c (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1c = /*#__PURE__*/_interopDefaultLegacy$1c(BaseStyle$1c);

var inlineStyles$g = {
  root: {
    position: 'relative'
  }
};
var classes$1b = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputswitch p-component', {
      'p-highlight': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': props.invalid
    }];
  },
  input: 'p-inputswitch-input',
  slider: 'p-inputswitch-slider'
};
var InputSwitchStyle = BaseStyle__default$1c["default"].extend({
  name: 'inputswitch',
  classes: classes$1b,
  inlineStyles: inlineStyles$g
});

var inputswitchstyle_cjs = InputSwitchStyle;

const InputSwitchStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(inputswitchstyle_cjs);

var BaseStyle$1b = basestyle_cjs;

function _interopDefaultLegacy$1b (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1b = /*#__PURE__*/_interopDefaultLegacy$1b(BaseStyle$1b);

var classes$1a = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputtext p-component', {
      'p-filled': instance.filled,
      'p-inputtext-sm': props.size === 'small',
      'p-inputtext-lg': props.size === 'large',
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  }
};
var InputTextStyle = BaseStyle__default$1b["default"].extend({
  name: 'inputtext',
  classes: classes$1a
});

var inputtextstyle_cjs = InputTextStyle;

const InputTextStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(inputtextstyle_cjs);

var BaseStyle$1a = basestyle_cjs;

function _interopDefaultLegacy$1a (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1a = /*#__PURE__*/_interopDefaultLegacy$1a(BaseStyle$1a);

var classes$19 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-knob p-component', {
      'p-disabled': props.disabled
    }];
  },
  range: 'p-knob-range',
  value: 'p-knob-value',
  label: 'p-knob-text'
};
var KnobStyle = BaseStyle__default$1a["default"].extend({
  name: 'knob',
  classes: classes$19
});

var knobstyle_cjs = KnobStyle;

const KnobStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(knobstyle_cjs);

var BaseStyle$19 = basestyle_cjs;

function _interopDefaultLegacy$19 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$19 = /*#__PURE__*/_interopDefaultLegacy$19(BaseStyle$19);

var classes$18 = {
  root: function root(_ref) {
    _ref.instance;
      var props = _ref.props;
    return ['p-listbox p-component', {
      'p-disabled': props.disabled,
      'p-invalid': props.invalid
    }];
  },
  header: 'p-listbox-header',
  filterContainer: 'p-listbox-filter-container',
  filterInput: 'p-listbox-filter p-inputtext p-component',
  filterIcon: 'p-listbox-filter-icon',
  wrapper: 'p-listbox-list-wrapper',
  list: 'p-listbox-list',
  itemGroup: 'p-listbox-item-group',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      option = _ref2.option,
      index = _ref2.index,
      getItemOptions = _ref2.getItemOptions;
    return ['p-listbox-item', {
      'p-highlight': instance.isSelected(option),
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      'p-disabled': instance.isOptionDisabled(option)
    }];
  },
  emptyMessage: 'p-listbox-empty-message'
};
var ListboxStyle = BaseStyle__default$19["default"].extend({
  name: 'listbox',
  classes: classes$18
});

var listboxstyle_cjs = ListboxStyle;

const ListboxStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(listboxstyle_cjs);

var BaseStyle$18 = basestyle_cjs;

function _interopDefaultLegacy$18 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$18 = /*#__PURE__*/_interopDefaultLegacy$18(BaseStyle$18);

var inlineStyles$f = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$17 = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-multiselect p-component p-inputwrapper', {
      'p-multiselect-chip': props.display === 'chip',
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
      'p-focus': instance.focused,
      'p-inputwrapper-filled': props.modelValue && props.modelValue.length,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-overlay-open': instance.overlayVisible
    }];
  },
  labelContainer: 'p-multiselect-label-container',
  label: function label(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-multiselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-multiselect-label-empty': !props.placeholder && (!props.modelValue || props.modelValue.length === 0)
    }];
  },
  token: 'p-multiselect-token',
  tokenLabel: 'p-multiselect-token-label',
  removeTokenIcon: 'p-multiselect-token-icon',
  trigger: 'p-multiselect-trigger',
  loadingIcon: 'p-multiselect-trigger-icon',
  dropdownIcon: 'p-multiselect-trigger-icon',
  panel: function panel(_ref4) {
    _ref4.props;
      var instance = _ref4.instance;
    return ['p-multiselect-panel p-component', {
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  header: 'p-multiselect-header',
  filterContainer: 'p-multiselect-filter-container',
  filterInput: function filterInput(_ref5) {
    var props = _ref5.props,
      instance = _ref5.instance;
    return ['p-multiselect-filter p-inputtext p-component', {
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  },
  filterIcon: 'p-multiselect-filter-icon',
  closeButton: 'p-multiselect-close p-link',
  closeIcon: 'p-multiselect-close-icon',
  wrapper: 'p-multiselect-items-wrapper',
  list: 'p-multiselect-items p-component',
  itemGroup: 'p-multiselect-item-group',
  item: function item(_ref6) {
    var instance = _ref6.instance,
      option = _ref6.option,
      index = _ref6.index,
      getItemOptions = _ref6.getItemOptions,
      props = _ref6.props;
    return ['p-multiselect-item', {
      'p-highlight': instance.isSelected(option) && props.highlightOnSelect,
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      'p-disabled': instance.isOptionDisabled(option)
    }];
  },
  emptyMessage: 'p-multiselect-empty-message'
};
var MultiSelectStyle = BaseStyle__default$18["default"].extend({
  name: 'multiselect',
  classes: classes$17,
  inlineStyles: inlineStyles$f
});

var multiselectstyle_cjs = MultiSelectStyle;

const MultiSelectStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(multiselectstyle_cjs);

var BaseStyle$17 = basestyle_cjs;

function _interopDefaultLegacy$17 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$17 = /*#__PURE__*/_interopDefaultLegacy$17(BaseStyle$17);

var inlineStyles$e = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$16 = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-password p-component p-inputwrapper', {
      'p-inputwrapper-filled': instance.filled,
      'p-inputwrapper-focus': instance.focused,
      'p-icon-field p-icon-field-right': props.toggleMask
    }];
  },
  input: function input(_ref3) {
    var props = _ref3.props;
    return ['p-password-input', {
      'p-disabled': props.disabled
    }];
  },
  hideIcon: 'p-input-icon',
  showIcon: 'p-input-icon',
  panel: function panel(_ref4) {
    var instance = _ref4.instance;
    return ['p-password-panel p-component', {
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  meter: 'p-password-meter',
  meterLabel: function meterLabel(_ref5) {
    var instance = _ref5.instance;
    return "p-password-strength ".concat(instance.meter ? instance.meter.strength : '');
  },
  info: 'p-password-info'
};
var PasswordStyle = BaseStyle__default$17["default"].extend({
  name: 'password',
  classes: classes$16,
  inlineStyles: inlineStyles$e
});

var passwordstyle_cjs = PasswordStyle;

const PasswordStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(passwordstyle_cjs);

var BaseStyle$16 = basestyle_cjs;

function _interopDefaultLegacy$16 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$16 = /*#__PURE__*/_interopDefaultLegacy$16(BaseStyle$16);

var classes$15 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-radiobutton p-component', {
      'p-highlight': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  },
  box: 'p-radiobutton-box',
  input: 'p-radiobutton-input',
  icon: 'p-radiobutton-icon'
};
var RadioButtonStyle = BaseStyle__default$16["default"].extend({
  name: 'radiobutton',
  classes: classes$15
});

var radiobuttonstyle_cjs = RadioButtonStyle;

const RadioButtonStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(radiobuttonstyle_cjs);

var BaseStyle$15 = basestyle_cjs;

function _interopDefaultLegacy$15 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$15 = /*#__PURE__*/_interopDefaultLegacy$15(BaseStyle$15);

var classes$14 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-rating', {
      'p-readonly': props.readonly,
      'p-disabled': props.disabled
    }];
  },
  cancelItem: function cancelItem(_ref2) {
    var instance = _ref2.instance;
    return ['p-rating-item p-rating-cancel-item', {
      'p-focus': instance.focusedOptionIndex === 0 && instance.isFocusVisibleItem
    }];
  },
  cancelIcon: 'p-rating-icon p-rating-cancel',
  item: function item(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props,
      value = _ref3.value;
    return ['p-rating-item', {
      'p-rating-item-active': value <= props.modelValue,
      'p-focus': value === instance.focusedOptionIndex && instance.isFocusVisibleItem
    }];
  },
  onIcon: 'p-rating-icon',
  offIcon: 'p-rating-icon'
};
var RatingStyle = BaseStyle__default$15["default"].extend({
  name: 'rating',
  classes: classes$14
});

var ratingstyle_cjs = RatingStyle;

const RatingStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(ratingstyle_cjs);

var BaseStyle$14 = basestyle_cjs;

function _interopDefaultLegacy$14 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$14 = /*#__PURE__*/_interopDefaultLegacy$14(BaseStyle$14);

var classes$13 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-selectbutton p-button-group p-component', {
      'p-disabled': props.disabled,
      'p-invalid': props.invalid
    }];
  },
  button: function button(_ref2) {
    var instance = _ref2.instance,
      option = _ref2.option;
    return ['p-button p-component', {
      'p-highlight': instance.isSelected(option),
      'p-disabled': instance.isOptionDisabled(option)
    }];
  },
  label: 'p-button-label'
};
var SelectButtonStyle = BaseStyle__default$14["default"].extend({
  name: 'selectbutton',
  classes: classes$13
});

var selectbuttonstyle_cjs = SelectButtonStyle;

const SelectButtonStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(selectbuttonstyle_cjs);

var BaseStyle$13 = basestyle_cjs;

function _interopDefaultLegacy$13 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$13 = /*#__PURE__*/_interopDefaultLegacy$13(BaseStyle$13);

var inlineStyles$d = {
  handle: {
    position: 'absolute'
  },
  range: {
    position: 'absolute'
  }
};
var classes$12 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-slider p-component', {
      'p-disabled': props.disabled,
      'p-slider-horizontal': props.orientation === 'horizontal',
      'p-slider-vertical': props.orientation === 'vertical'
    }];
  },
  range: 'p-slider-range',
  handle: 'p-slider-handle'
};
var SliderStyle = BaseStyle__default$13["default"].extend({
  name: 'slider',
  classes: classes$12,
  inlineStyles: inlineStyles$d
});

var sliderstyle_cjs = SliderStyle;

const SliderStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(sliderstyle_cjs);

var BaseStyle$12 = basestyle_cjs;

function _interopDefaultLegacy$12 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$12 = /*#__PURE__*/_interopDefaultLegacy$12(BaseStyle$12);

var classes$11 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputtextarea p-inputtext p-component', {
      'p-filled': instance.filled,
      'p-inputtextarea-resizable ': props.autoResize,
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  }
};
var TextareaStyle = BaseStyle__default$12["default"].extend({
  name: 'textarea',
  classes: classes$11
});

var textareastyle_cjs = TextareaStyle;

const TextareaStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(textareastyle_cjs);

var BaseStyle$11 = basestyle_cjs;

function _interopDefaultLegacy$11 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$11 = /*#__PURE__*/_interopDefaultLegacy$11(BaseStyle$11);

var classes$10 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-togglebutton p-component', {
      'p-disabled': props.disabled,
      'p-highlight': instance.active,
      'p-invalid': props.invalid
    }];
  },
  input: 'p-togglebutton-input',
  box: function box(_ref2) {
    var instance = _ref2.instance;
    return ['p-button p-component', {
      'p-button-icon-only': instance.hasIcon && !instance.hasLabel
    }];
  },
  icon: function icon(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-button-icon', {
      'p-button-icon-left': props.iconPos === 'left' && instance.label,
      'p-button-icon-right': props.iconPos === 'right' && instance.label
    }];
  },
  label: 'p-button-label'
};
var ToggleButtonStyle = BaseStyle__default$11["default"].extend({
  name: 'togglebutton',
  classes: classes$10
});

var togglebuttonstyle_cjs = ToggleButtonStyle;

const ToggleButtonStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(togglebuttonstyle_cjs);

var BaseStyle$10 = basestyle_cjs;

function _interopDefaultLegacy$10 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$10 = /*#__PURE__*/_interopDefaultLegacy$10(BaseStyle$10);

var inlineStyles$c = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$$ = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-treeselect p-component p-inputwrapper', {
      'p-treeselect-chip': props.display === 'chip',
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-focus': instance.focused,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
      'p-inputwrapper-filled': !instance.emptyValue,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible
    }];
  },
  labelContainer: 'p-treeselect-label-container',
  label: function label(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-treeselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-treeselect-label-empty': !props.placeholder && instance.emptyValue
    }];
  },
  token: 'p-treeselect-token',
  tokenLabel: 'p-treeselect-token-label',
  trigger: 'p-treeselect-trigger',
  triggerIcon: 'p-treeselect-trigger-icon',
  panel: function panel(_ref4) {
    _ref4.props;
      var instance = _ref4.instance;
    return ['p-treeselect-panel p-component', {
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  wrapper: 'p-treeselect-items-wrapper',
  emptyMessage: 'p-treeselect-empty-message'
};
var TreeSelectStyle = BaseStyle__default$10["default"].extend({
  name: 'treeselect',
  classes: classes$$,
  inlineStyles: inlineStyles$c
});

var treeselectstyle_cjs = TreeSelectStyle;

const TreeSelectStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(treeselectstyle_cjs);

var BaseStyle$$ = basestyle_cjs;

function _interopDefaultLegacy$$ (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$$ = /*#__PURE__*/_interopDefaultLegacy$$(BaseStyle$$);

var classes$_ = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-tristatecheckbox p-checkbox p-component', {
      'p-highlight': instance.active,
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant === 'filled' || instance.$primevue.config.inputStyle === 'filled'
    }];
  },
  box: 'p-checkbox-box',
  input: 'p-checkbox-input',
  checkIcon: 'p-checkbox-icon',
  uncheckIcon: 'p-checkbox-icon',
  nullableIcon: 'p-checkbox-icon'
};
var TriStateCheckboxStyle = BaseStyle__default$$["default"].extend({
  name: 'tristatecheckbox',
  classes: classes$_
});

var tristatecheckboxstyle_cjs = TriStateCheckboxStyle;

const TriStateCheckboxStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(tristatecheckboxstyle_cjs);

var BaseStyle$_ = basestyle_cjs;

function _interopDefaultLegacy$_ (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$_ = /*#__PURE__*/_interopDefaultLegacy$_(BaseStyle$_);

function _typeof$3(o) { "@babel/helpers - typeof"; return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$3(o); }
function _defineProperty$3(obj, key, value) { key = _toPropertyKey$3(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$3(t) { var i = _toPrimitive$3(t, "string"); return "symbol" == _typeof$3(i) ? i : String(i); }
function _toPrimitive$3(t, r) { if ("object" != _typeof$3(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$3(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var classes$Z = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-button p-component', _defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3({
      'p-button-icon-only': instance.hasIcon && !props.label && !props.badge,
      'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
      'p-disabled': instance.$attrs.disabled || instance.$attrs.disabled === '' || props.loading,
      'p-button-loading': props.loading,
      'p-button-loading-label-only': props.loading && !instance.hasIcon && props.label,
      'p-button-link': props.link
    }, "p-button-".concat(props.severity), props.severity), 'p-button-raised', props.raised), 'p-button-rounded', props.rounded), 'p-button-text', props.text), 'p-button-outlined', props.outlined), 'p-button-sm', props.size === 'small'), 'p-button-lg', props.size === 'large'), 'p-button-plain', props.plain)];
  },
  loadingIcon: 'p-button-loading-icon pi-spin',
  icon: function icon(_ref3) {
    var props = _ref3.props;
    return ['p-button-icon', {
      'p-button-icon-left': props.iconPos === 'left' && props.label,
      'p-button-icon-right': props.iconPos === 'right' && props.label,
      'p-button-icon-top': props.iconPos === 'top' && props.label,
      'p-button-icon-bottom': props.iconPos === 'bottom' && props.label
    }];
  },
  label: 'p-button-label'
};
var ButtonStyle = BaseStyle__default$_["default"].extend({
  name: 'button',
  classes: classes$Z
});

var buttonstyle_cjs = ButtonStyle;

const ButtonStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(buttonstyle_cjs);

var BaseStyle$Z = basestyle_cjs;

function _interopDefaultLegacy$Z (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$Z = /*#__PURE__*/_interopDefaultLegacy$Z(BaseStyle$Z);

var classes$Y = {
  root: 'p-button-group p-component'
};
var ButtonGroupStyle = BaseStyle__default$Z["default"].extend({
  name: 'buttongroup',
  classes: classes$Y
});

var buttongroupstyle_cjs = ButtonGroupStyle;

const ButtonGroupStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(buttongroupstyle_cjs);

var BaseStyle$Y = basestyle_cjs;

function _interopDefaultLegacy$Y (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$Y = /*#__PURE__*/_interopDefaultLegacy$Y(BaseStyle$Y);

function _typeof$2(o) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$2(o); }
function _defineProperty$2(obj, key, value) { key = _toPropertyKey$2(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$2(t) { var i = _toPrimitive$2(t, "string"); return "symbol" == _typeof$2(i) ? i : String(i); }
function _toPrimitive$2(t, r) { if ("object" != _typeof$2(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$2(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* Direction */
var inlineStyles$b = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      alignItems: (props.direction === 'up' || props.direction === 'down') && 'center',
      justifyContent: (props.direction === 'left' || props.direction === 'right') && 'center',
      flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    };
  },
  menu: function menu(_ref2) {
    var props = _ref2.props;
    return {
      flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    };
  }
};
var classes$X = {
  root: function root(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ["p-speeddial p-component p-speeddial-".concat(props.type), _defineProperty$2(_defineProperty$2(_defineProperty$2({}, "p-speeddial-direction-".concat(props.direction), props.type !== 'circle'), 'p-speeddial-opened', instance.d_visible), 'p-disabled', props.disabled)];
  },
  button: function button(_ref5) {
    var props = _ref5.props;
    return ['p-speeddial-button p-button-rounded', {
      'p-speeddial-rotate': props.rotateAnimation && !props.hideIcon
    }];
  },
  menu: 'p-speeddial-list',
  menuitem: function menuitem(_ref6) {
    var instance = _ref6.instance,
      id = _ref6.id;
    return ['p-speeddial-item', {
      'p-focus': instance.isItemActive(id)
    }];
  },
  action: function action(_ref7) {
    var item = _ref7.item;
    return ['p-speeddial-action', {
      'p-disabled': item.disabled
    }];
  },
  actionIcon: 'p-speeddial-action-icon',
  mask: function mask(_ref8) {
    var instance = _ref8.instance;
    return ['p-speeddial-mask', {
      'p-speeddial-mask-visible': instance.d_visible
    }];
  }
};
var SpeedDialStyle = BaseStyle__default$Y["default"].extend({
  name: 'speeddial',
  classes: classes$X,
  inlineStyles: inlineStyles$b
});

var speeddialstyle_cjs = SpeedDialStyle;

const SpeedDialStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(speeddialstyle_cjs);

var BaseStyle$X = basestyle_cjs;

function _interopDefaultLegacy$X (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$X = /*#__PURE__*/_interopDefaultLegacy$X(BaseStyle$X);

var classes$W = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-splitbutton p-component', {
      'p-button-raised': props.raised,
      'p-button-rounded': props.rounded,
      'p-button-text': props.text,
      'p-button-outlined': props.outlined,
      'p-button-sm': props.size === 'small',
      'p-button-lg': props.size === 'large'
    }];
  },
  button: 'p-splitbutton-defaultbutton',
  menuButton: 'p-splitbutton-menubutton'
};
var SplitButtonStyle = BaseStyle__default$X["default"].extend({
  name: 'splitbutton',
  classes: classes$W
});

var splitbuttonstyle_cjs = SplitButtonStyle;

const SplitButtonStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(splitbuttonstyle_cjs);

var ColumnStyle = {};

var columnstyle_cjs = ColumnStyle;

const ColumnStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(columnstyle_cjs);

var RowStyle = {};

var rowstyle_cjs = RowStyle;

const RowStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(rowstyle_cjs);

var ColumnGroupStyle = {};

var columngroupstyle_cjs = ColumnGroupStyle;

const ColumnGroupStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(columngroupstyle_cjs);

var BaseStyle$W = basestyle_cjs;

function _interopDefaultLegacy$W (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$W = /*#__PURE__*/_interopDefaultLegacy$W(BaseStyle$W);

var classes$V = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-datatable p-component', {
      'p-datatable-hoverable-rows': props.rowHover || props.selectionMode,
      'p-datatable-resizable': props.resizableColumns,
      'p-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
      'p-datatable-scrollable': props.scrollable,
      'p-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
      'p-datatable-responsive-stack': props.responsiveLayout === 'stack',
      'p-datatable-responsive-scroll': props.responsiveLayout === 'scroll',
      'p-datatable-striped': props.stripedRows,
      'p-datatable-gridlines': props.showGridlines,
      'p-datatable-grouped-header': instance.headerColumnGroup != null,
      'p-datatable-grouped-footer': instance.footerColumnGroup != null,
      'p-datatable-sm': props.size === 'small',
      'p-datatable-lg': props.size === 'large'
    }];
  },
  loadingOverlay: 'p-datatable-loading-overlay p-component-overlay',
  loadingIcon: 'p-datatable-loading-icon',
  header: 'p-datatable-header',
  paginator: function paginator(_ref2) {
    var instance = _ref2.instance;
    return instance.paginatorTop ? 'p-paginator-top' : instance.paginatorBottom ? 'p-paginator-bottom' : '';
  },
  wrapper: 'p-datatable-wrapper',
  table: function table(_ref3) {
    var props = _ref3.props;
    return ['p-datatable-table', {
      'p-datatable-scrollable-table': props.scrollable,
      'p-datatable-resizable-table': props.resizableColumns,
      'p-datatable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
    }];
  },
  //tablehead
  thead: 'p-datatable-thead',
  // headercell
  headerCell: function headerCell(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props,
      column = _ref4.column;
    return column && !instance.columnProp(column, 'hidden') && (props.rowGroupMode !== 'subheader' || props.groupRowsBy !== instance.columnProp(column, 'field')) ? ['p-filter-column', {
      'p-frozen-column': instance.columnProp(column, 'frozen')
    }] : [{
      'p-sortable-column': instance.columnProp('sortable'),
      'p-resizable-column': instance.resizableColumns,
      'p-highlight': instance.isColumnSorted(),
      'p-filter-column': props.filterColumn,
      'p-frozen-column': instance.columnProp('frozen'),
      'p-reorderable-column': props.reorderableColumns
    }];
  },
  columnResizer: 'p-column-resizer',
  headerContent: 'p-column-header-content',
  headerTitle: 'p-column-title',
  sortIcon: 'p-sortable-column-icon',
  sortBadge: 'p-sortable-column-badge',
  // columnfilter
  columnFilter: function columnFilter(_ref5) {
    var props = _ref5.props;
    return ['p-column-filter p-fluid', {
      'p-column-filter-row': props.display === 'row',
      'p-column-filter-menu': props.display === 'menu'
    }];
  },
  filterInput: 'p-fluid p-column-filter-element',
  filterMenuButton: function filterMenuButton(_ref6) {
    var instance = _ref6.instance;
    return ['p-column-filter-menu-button p-link', {
      'p-column-filter-menu-button-open': instance.overlayVisible,
      'p-column-filter-menu-button-active': instance.hasFilter()
    }];
  },
  headerFilterClearButton: function headerFilterClearButton(_ref7) {
    var instance = _ref7.instance;
    return ['p-column-filter-clear-button p-link', {
      'p-hidden-space': !instance.hasRowFilter()
    }];
  },
  filterOverlay: function filterOverlay(_ref8) {
    var instance = _ref8.instance,
      props = _ref8.props;
    return [{
      'p-column-filter-overlay p-component p-fluid': true,
      'p-column-filter-overlay-menu': props.display === 'menu',
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  filterRowItems: 'p-column-filter-row-items',
  filterRowItem: function filterRowItem(_ref9) {
    var instance = _ref9.instance,
      matchMode = _ref9.matchMode;
    return ['p-column-filter-row-item', {
      'p-highlight': matchMode && instance.isRowMatchModeSelected(matchMode.value)
    }];
  },
  filterSeparator: 'p-column-filter-separator',
  filterOperator: 'p-column-filter-operator',
  filterOperatorDropdown: 'p-column-filter-operator-dropdown',
  filterConstraints: 'p-column-filter-constraints',
  filterConstraint: 'p-column-filter-constraint',
  filterMatchModeDropdown: 'p-column-filter-matchmode-dropdown',
  filterRemoveButton: 'p-column-filter-remove-button p-button-text p-button-danger p-button-sm',
  filterAddRule: 'p-column-filter-add-rule',
  filterAddRuleButton: 'p-column-filter-add-button p-button-text p-button-sm',
  filterButtonbar: 'p-column-filter-buttonbar',
  filterClearButton: 'p-button-outlined p-button-sm',
  filterApplyButton: 'p-button-sm',
  //tablebody
  tbody: function tbody(_ref10) {
    var props = _ref10.props;
    return props.frozenRow ? 'p-datatable-tbody p-datatable-frozen-tbody' : 'p-datatable-tbody';
  },
  rowgroupHeader: 'p-rowgroup-header',
  rowGroupToggler: 'p-row-toggler p-link',
  rowGroupTogglerIcon: 'p-row-toggler-icon',
  row: function row(_ref11) {
    var instance = _ref11.instance,
      props = _ref11.props,
      index = _ref11.index,
      columnSelectionMode = _ref11.columnSelectionMode;
    var rowStyleClass = [];
    if (props.selectionMode) {
      rowStyleClass.push('p-selectable-row');
    }
    if (props.selection) {
      rowStyleClass.push({
        'p-highlight': columnSelectionMode ? instance.isSelected && instance.$parentInstance.$parentInstance.highlightOnSelect : instance.isSelected
      });
    }
    if (props.contextMenuSelection) {
      rowStyleClass.push({
        'p-highlight-contextmenu': instance.isSelectedWithContextMenu
      });
    }
    rowStyleClass.push(index % 2 === 0 ? 'p-row-even' : 'p-row-odd');
    return rowStyleClass;
  },
  rowExpansion: 'p-datatable-row-expansion',
  rowgroupFooter: 'p-rowgroup-footer',
  emptyMessage: 'p-datatable-emptymessage',
  //bodycell
  bodyCell: function bodyCell(_ref12) {
    var instance = _ref12.instance;
    return [{
      'p-selection-column': instance.columnProp('selectionMode') != null,
      'p-editable-column': instance.isEditable(),
      'p-cell-editing': instance.d_editing,
      'p-frozen-column': instance.columnProp('frozen')
    }];
  },
  columnTitle: 'p-column-title',
  rowReorderIcon: 'p-datatable-reorderablerow-handle',
  rowToggler: 'p-row-toggler p-link',
  rowTogglerIcon: 'p-row-toggler-icon',
  rowEditorInitButton: 'p-row-editor-init p-link',
  rowEditorInitIcon: 'p-row-editor-init-icon',
  rowEditorSaveButton: 'p-row-editor-save p-link',
  rowEditorSaveIcon: 'p-row-editor-save-icon',
  rowEditorCancelButton: 'p-row-editor-cancel p-link',
  rowEditorCancelIcon: 'p-row-editor-cancel-icon',
  //tablefooter
  tfoot: 'p-datatable-tfoot',
  //footercell
  footerCell: function footerCell(_ref13) {
    var instance = _ref13.instance;
    return [{
      'p-frozen-column': instance.columnProp('frozen')
    }];
  },
  //datatable
  virtualScrollerSpacer: 'p-datatable-virtualscroller-spacer',
  footer: 'p-datatable-footer',
  resizeHelper: 'p-column-resizer-helper',
  reorderIndicatorUp: 'p-datatable-reorder-indicator-up',
  reorderIndicatorDown: 'p-datatable-reorder-indicator-down'
};
var inlineStyles$a = {
  wrapper: {
    overflow: 'auto'
  },
  thead: {
    position: 'sticky'
  },
  tfoot: {
    position: 'sticky'
  }
};
var DataTableStyle = BaseStyle__default$W["default"].extend({
  name: 'datatable',
  classes: classes$V,
  inlineStyles: inlineStyles$a
});

var datatablestyle_cjs = DataTableStyle;

const DataTableStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(datatablestyle_cjs);

var BaseStyle$V = basestyle_cjs;

function _interopDefaultLegacy$V (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$V = /*#__PURE__*/_interopDefaultLegacy$V(BaseStyle$V);

var classes$U = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-dataview p-component', {
      'p-dataview-list': props.layout === 'list',
      'p-dataview-grid': props.layout === 'grid'
    }];
  },
  header: 'p-dataview-header',
  paginator: function paginator(_ref2) {
    var instance = _ref2.instance;
    return instance.paginatorTop ? 'p-paginator-top' : instance.paginatorBottom ? 'p-paginator-bottom' : '';
  },
  content: 'p-dataview-content',
  emptyMessage: 'p-dataview-emptymessage',
  footer: 'p-dataview-footer'
};
var DataViewStyle = BaseStyle__default$V["default"].extend({
  name: 'dataview',
  classes: classes$U
});

var dataviewstyle_cjs = DataViewStyle;

const DataViewStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(dataviewstyle_cjs);

var BaseStyle$U = basestyle_cjs;

function _interopDefaultLegacy$U (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$U = /*#__PURE__*/_interopDefaultLegacy$U(BaseStyle$U);

var classes$T = {
  root: 'p-dataview-layout-options p-selectbutton p-button-group',
  listButton: function listButton(_ref) {
    var props = _ref.props;
    return ['p-button p-button-icon-only', {
      'p-highlight': props.modelValue === 'list'
    }];
  },
  gridButton: function gridButton(_ref2) {
    var props = _ref2.props;
    return ['p-button p-button-icon-only', {
      'p-highlight': props.modelValue === 'grid'
    }];
  }
};
var DataViewLayoutOptionsStyle = BaseStyle__default$U["default"].extend({
  name: 'dataviewlayoutoptions',
  classes: classes$T
});

var dataviewlayoutoptionsstyle_cjs = DataViewLayoutOptionsStyle;

const DataViewLayoutOptionsStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(dataviewlayoutoptionsstyle_cjs);

var BaseStyle$T = basestyle_cjs;

function _interopDefaultLegacy$T (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$T = /*#__PURE__*/_interopDefaultLegacy$T(BaseStyle$T);

var classes$S = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-orderlist p-component', {
      'p-orderlist-striped': props.stripedRows
    }];
  },
  controls: 'p-orderlist-controls',
  container: 'p-orderlist-list-container',
  header: 'p-orderlist-header',
  list: 'p-orderlist-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      _item = _ref2.item,
      id = _ref2.id;
    return ['p-orderlist-item', {
      'p-highlight': instance.isSelected(_item),
      'p-focus': id === instance.focusedOptionId
    }];
  }
};
var OrderListStyle = BaseStyle__default$T["default"].extend({
  name: 'orderlist',
  classes: classes$S
});

var orderliststyle_cjs = OrderListStyle;

const OrderListStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(orderliststyle_cjs);

var BaseStyle$S = basestyle_cjs;

function _interopDefaultLegacy$S (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$S = /*#__PURE__*/_interopDefaultLegacy$S(BaseStyle$S);

var classes$R = {
  root: 'p-organizationchart p-component',
  table: 'p-organizationchart-table',
  node: function node(_ref) {
    var instance = _ref.instance;
    return ['p-organizationchart-node-content', {
      'p-organizationchart-selectable-node': instance.selectable,
      'p-highlight': instance.selected
    }];
  },
  nodeToggler: 'p-node-toggler',
  nodeTogglerIcon: 'p-node-toggler-icon',
  lines: 'p-organizationchart-lines',
  lineDown: 'p-organizationchart-line-down',
  lineLeft: function lineLeft(_ref2) {
    var index = _ref2.index;
    return ['p-organizationchart-line-left', {
      'p-organizationchart-line-top': !(index === 0)
    }];
  },
  lineRight: function lineRight(_ref3) {
    var props = _ref3.props,
      index = _ref3.index;
    return ['p-organizationchart-line-right', {
      'p-organizationchart-line-top': !(index === props.node.children.length - 1)
    }];
  },
  nodes: 'p-organizationchart-nodes'
};
var OrganizationChartStyle = BaseStyle__default$S["default"].extend({
  name: 'organizationchart',
  classes: classes$R
});

var organizationchartstyle_cjs = OrganizationChartStyle;

const OrganizationChartStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(organizationchartstyle_cjs);

var BaseStyle$R = basestyle_cjs;

function _interopDefaultLegacy$R (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$R = /*#__PURE__*/_interopDefaultLegacy$R(BaseStyle$R);

function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
function _defineProperty$1(obj, key, value) { key = _toPropertyKey$1(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : String(i); }
function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var classes$Q = {
  paginator: function paginator(_ref) {
    var instance = _ref.instance,
      key = _ref.key;
    return ['p-paginator p-component', _defineProperty$1({
      'p-paginator-default': !instance.hasBreakpoints()
    }, "p-paginator-".concat(key), instance.hasBreakpoints())];
  },
  start: 'p-paginator-left-content',
  end: 'p-paginator-right-content',
  firstPageButton: function firstPageButton(_ref3) {
    var instance = _ref3.instance;
    return ['p-paginator-first p-paginator-element p-link', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  firstPageIcon: 'p-paginator-icon',
  previousPageButton: function previousPageButton(_ref4) {
    var instance = _ref4.instance;
    return ['p-paginator-prev p-paginator-element p-link', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  previousPageIcon: 'p-paginator-icon',
  nextPageButton: function nextPageButton(_ref5) {
    var instance = _ref5.instance;
    return ['p-paginator-next p-paginator-element p-link', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  nextPageIcon: 'p-paginator-icon',
  lastPageButton: function lastPageButton(_ref6) {
    var instance = _ref6.instance;
    return ['p-paginator-last p-paginator-element p-link', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  lastPageIcon: 'p-paginator-icon',
  pages: 'p-paginator-pages',
  pageButton: function pageButton(_ref7) {
    var props = _ref7.props,
      pageLink = _ref7.pageLink;
    return ['p-paginator-page p-paginator-element p-link', {
      'p-highlight': pageLink - 1 === props.page
    }];
  },
  current: 'p-paginator-current',
  rowPerPageDropdown: 'p-paginator-rpp-options',
  jumpToPageDropdown: 'p-paginator-page-options',
  jumpToPageInput: 'p-paginator-page-input'
};
var PaginatorStyle = BaseStyle__default$R["default"].extend({
  name: 'paginator',
  classes: classes$Q
});

var paginatorstyle_cjs = PaginatorStyle;

const PaginatorStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(paginatorstyle_cjs);

var BaseStyle$Q = basestyle_cjs;

function _interopDefaultLegacy$Q (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$Q = /*#__PURE__*/_interopDefaultLegacy$Q(BaseStyle$Q);

var classes$P = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-picklist p-component', {
      'p-picklist-striped': props.stripedRows
    }];
  },
  sourceControls: 'p-picklist-buttons p-picklist-source-controls',
  sourceWrapper: 'p-picklist-list-wrapper p-picklist-source-wrapper',
  sourceHeader: 'p-picklist-header',
  sourceList: 'p-picklist-list p-picklist-source-list',
  buttons: 'p-picklist-buttons p-picklist-transfer-buttons',
  targetWrapper: 'p-picklist-list-wrapper p-picklist-target-wrapper',
  targetHeader: 'p-picklist-header',
  targetList: 'p-picklist-list p-picklist-target',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      _item = _ref2.item,
      id = _ref2.id,
      listIndex = _ref2.listIndex;
    return ['p-picklist-item', {
      'p-highlight': instance.isSelected(_item, listIndex),
      'p-focus': id === instance.focusedOptionId
    }];
  },
  targetControls: 'p-picklist-buttons p-picklist-target-controls'
};
var PickListStyle = BaseStyle__default$Q["default"].extend({
  name: 'picklist',
  classes: classes$P
});

var pickliststyle_cjs = PickListStyle;

const PickListStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(pickliststyle_cjs);

var BaseStyle$P = basestyle_cjs;

function _interopDefaultLegacy$P (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$P = /*#__PURE__*/_interopDefaultLegacy$P(BaseStyle$P);

var classes$O = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tree p-component', {
      'p-tree-selectable': props.selectionMode != null,
      'p-tree-loading': props.loading,
      'p-tree-flex-scrollable': props.scrollHeight === 'flex'
    }];
  },
  loadingOverlay: 'p-tree-loading-overlay p-component-overlay',
  loadingIcon: 'p-tree-loading-icon',
  filterContainer: 'p-tree-filter-container',
  input: 'p-tree-filter p-inputtext p-component',
  searchIcon: 'p-tree-filter-icon',
  wrapper: 'p-tree-wrapper',
  container: 'p-tree-container',
  node: function node(_ref2) {
    var instance = _ref2.instance;
    return ['p-treenode', {
      'p-treenode-leaf': instance.leaf
    }];
  },
  content: function content(_ref3) {
    var instance = _ref3.instance;
    return ['p-treenode-content', instance.node.styleClass, {
      'p-treenode-selectable': instance.selectable,
      'p-highlight': instance.checkboxMode && instance.$parentInstance.highlightOnSelect ? instance.checked : instance.selected
    }];
  },
  toggler: 'p-tree-toggler p-link',
  togglerIcon: 'p-tree-toggler-icon',
  nodeTogglerIcon: 'p-tree-node-toggler-icon',
  nodeCheckbox: function nodeCheckbox(_ref4) {
    var instance = _ref4.instance;
    return [{
      'p-indeterminate': instance.partialChecked
    }];
  },
  nodeIcon: 'p-treenode-icon',
  label: 'p-treenode-label',
  subgroup: 'p-treenode-children'
};
var TreeStyle = BaseStyle__default$P["default"].extend({
  name: 'tree',
  classes: classes$O
});

var treestyle_cjs = TreeStyle;

const TreeStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(treestyle_cjs);

var BaseStyle$O = basestyle_cjs;

function _interopDefaultLegacy$O (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$O = /*#__PURE__*/_interopDefaultLegacy$O(BaseStyle$O);

var classes$N = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-treetable p-component', {
      'p-treetable-hoverable-rows': props.rowHover || instance.rowSelectionMode,
      'p-treetable-auto-layout': props.autoLayout,
      'p-treetable-resizable': props.resizableColumns,
      'p-treetable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
      'p-treetable-gridlines': props.showGridlines,
      'p-treetable-scrollable': props.scrollable,
      'p-treetable-scrollable-vertical': props.scrollable && props.scrollDirection === 'vertical',
      'p-treetable-scrollable-horizontal': props.scrollable && props.scrollDirection === 'horizontal',
      'p-treetable-scrollable-both': props.scrollable && props.scrollDirection === 'both',
      'p-treetable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
      'p-treetable-responsive-scroll': props.responsiveLayout === 'scroll',
      'p-treetable-sm': props.size === 'small',
      'p-treetable-lg': props.size === 'large'
    }];
  },
  loadingWrapper: 'p-treetable-loading',
  loadingOverlay: 'p-treetable-loading-overlay p-component-overlay',
  loadingIcon: 'p-treetable-loading-icon',
  header: 'p-treetable-header',
  paginator: function paginator(_ref2) {
    var instance = _ref2.instance;
    return instance.paginatorTop ? 'p-paginator-top' : instance.paginatorBottom ? 'p-paginator-bottom' : '';
  },
  wrapper: 'p-treetable-wrapper',
  thead: 'p-treetable-thead',
  //headercell
  headerCell: function headerCell(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props,
      column = _ref3.column;
    return column && instance.hasColumnFilter() ? ['p-filter-column', {
      'p-frozen-column': instance.columnProp(column, 'frozen')
    }] : [{
      'p-sortable-column': instance.columnProp('sortable'),
      'p-resizable-column': props.resizableColumns,
      'p-highlight': instance.isColumnSorted(),
      'p-frozen-column': instance.columnProp('frozen')
    }];
  },
  columnResizer: 'p-column-resizer',
  headerTitle: 'p-column-title',
  sortIcon: 'p-sortable-column-icon',
  sortBadge: 'p-sortable-column-badge',
  tbody: 'p-treetable-tbody',
  //ttrow
  row: function row(_ref4) {
    var instance = _ref4.instance;
    return [{
      'p-highlight': instance.selected
    }];
  },
  //bodycell
  bodyCell: function bodyCell(_ref5) {
    var instance = _ref5.instance;
    return [{
      'p-frozen-column': instance.columnProp('frozen')
    }];
  },
  rowToggler: 'p-treetable-toggler p-link',
  rowTogglerIcon: 'p-tree-toggler-icon',
  rowCheckbox: function rowCheckbox(_ref6) {
    var instance = _ref6.instance;
    return ['p-treetable-checkbox', {
      'p-indeterminate': instance.partialChecked
    }];
  },
  //treetable
  emptyMessage: 'p-treetable-emptymessage',
  tfoot: 'p-treetable-tfoot',
  //footercell
  footerCell: function footerCell(_ref7) {
    var instance = _ref7.instance;
    return [{
      'p-frozen-column': instance.columnProp('frozen')
    }];
  },
  //treetable
  footer: 'p-treetable-footer',
  resizeHelper: 'p-column-resizer-helper p-highlight'
};
var TreeTableStyle = BaseStyle__default$O["default"].extend({
  name: 'treetable',
  classes: classes$N
});

var treetablestyle_cjs = TreeTableStyle;

const TreeTableStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(treetablestyle_cjs);

var BaseStyle$N = basestyle_cjs;

function _interopDefaultLegacy$N (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$N = /*#__PURE__*/_interopDefaultLegacy$N(BaseStyle$N);

var classes$M = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-timeline p-component', 'p-timeline-' + props.align, 'p-timeline-' + props.layout];
  },
  event: 'p-timeline-event',
  opposite: 'p-timeline-event-opposite',
  separator: 'p-timeline-event-separator',
  marker: 'p-timeline-event-marker',
  connector: 'p-timeline-event-connector',
  content: 'p-timeline-event-content'
};
var TimelineStyle = BaseStyle__default$N["default"].extend({
  name: 'timeline',
  classes: classes$M
});

var timelinestyle_cjs = TimelineStyle;

const TimelineStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(timelinestyle_cjs);

var BaseStyle$M = basestyle_cjs;

function _interopDefaultLegacy$M (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$M = /*#__PURE__*/_interopDefaultLegacy$M(BaseStyle$M);

var css = "\n@layer primevue {\n    .p-virtualscroller {\n        position: relative;\n        overflow: auto;\n        contain: strict;\n        transform: translateZ(0);\n        will-change: scroll-position;\n        outline: 0 none;\n    }\n\n    .p-virtualscroller-content {\n        position: absolute;\n        top: 0;\n        left: 0;\n        /* contain: content; */\n        min-height: 100%;\n        min-width: 100%;\n        will-change: transform;\n    }\n\n    .p-virtualscroller-spacer {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 1px;\n        width: 1px;\n        transform-origin: 0 0;\n        pointer-events: none;\n    }\n\n    .p-virtualscroller .p-virtualscroller-loader {\n        position: sticky;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-virtualscroller-loader.p-component-overlay {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .p-virtualscroller-loading-icon {\n        font-size: 2rem;\n    }\n\n    .p-virtualscroller-loading-icon.p-icon {\n        width: 2rem;\n        height: 2rem;\n    }\n\n    .p-virtualscroller-horizontal > .p-virtualscroller-content {\n        display: flex;\n    }\n\n    /* Inline */\n    .p-virtualscroller-inline .p-virtualscroller-content {\n        position: static;\n    }\n}\n";
var VirtualScrollerStyle = BaseStyle__default$M["default"].extend({
  name: 'virtualscroller',
  css: css
});

var virtualscrollerstyle_cjs = VirtualScrollerStyle;

const VirtualScrollerStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(virtualscrollerstyle_cjs);

var BaseStyle$L = basestyle_cjs;

function _interopDefaultLegacy$L (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$L = /*#__PURE__*/_interopDefaultLegacy$L(BaseStyle$L);

var classes$L = {
  root: 'p-accordion p-component',
  tab: {
    root: function root(_ref) {
      var instance = _ref.instance,
        index = _ref.index;
      return ['p-accordion-tab', {
        'p-accordion-tab-active': instance.isTabActive(index)
      }];
    },
    header: function header(_ref2) {
      var instance = _ref2.instance,
        tab = _ref2.tab,
        index = _ref2.index;
      return ['p-accordion-header', {
        'p-highlight': instance.isTabActive(index),
        'p-disabled': instance.getTabProp(tab, 'disabled')
      }];
    },
    headerAction: 'p-accordion-header-link p-accordion-header-action',
    headerIcon: 'p-accordion-toggle-icon',
    headerTitle: 'p-accordion-header-text',
    toggleableContent: 'p-toggleable-content',
    content: 'p-accordion-content'
  }
};
var AccordionStyle = BaseStyle__default$L["default"].extend({
  name: 'accordion',
  classes: classes$L
});

var accordionstyle_cjs = AccordionStyle;

const AccordionStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(accordionstyle_cjs);

var AccordionTabStyle = {};

var accordiontabstyle_cjs = AccordionTabStyle;

const AccordionTabStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(accordiontabstyle_cjs);

var BaseStyle$K = basestyle_cjs;

function _interopDefaultLegacy$K (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$K = /*#__PURE__*/_interopDefaultLegacy$K(BaseStyle$K);

var classes$K = {
  root: 'p-card p-component',
  header: 'p-card-header',
  body: 'p-card-body',
  caption: 'p-card-caption',
  title: 'p-card-title',
  subtitle: 'p-card-subtitle',
  content: 'p-card-content',
  footer: 'p-card-footer'
};
var CardStyle = BaseStyle__default$K["default"].extend({
  name: 'card',
  classes: classes$K
});

var cardstyle_cjs = CardStyle;

const CardStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(cardstyle_cjs);

var DeferredContentStyle = {};

var deferredcontentstyle_cjs = DeferredContentStyle;

const DeferredContentStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(deferredcontentstyle_cjs);

var BaseStyle$J = basestyle_cjs;

function _interopDefaultLegacy$J (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$J = /*#__PURE__*/_interopDefaultLegacy$J(BaseStyle$J);

/* Position */
var inlineStyles$9 = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      justifyContent: props.layout === 'horizontal' ? props.align === 'center' || props.align === null ? 'center' : props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : null : null,
      alignItems: props.layout === 'vertical' ? props.align === 'center' || props.align === null ? 'center' : props.align === 'top' ? 'flex-start' : props.align === 'bottom' ? 'flex-end' : null : null
    };
  }
};
var classes$J = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-divider p-component', 'p-divider-' + props.layout, 'p-divider-' + props.type, {
      'p-divider-left': props.layout === 'horizontal' && (!props.align || props.align === 'left')
    }, {
      'p-divider-center': props.layout === 'horizontal' && props.align === 'center'
    }, {
      'p-divider-right': props.layout === 'horizontal' && props.align === 'right'
    }, {
      'p-divider-top': props.layout === 'vertical' && props.align === 'top'
    }, {
      'p-divider-center': props.layout === 'vertical' && (!props.align || props.align === 'center')
    }, {
      'p-divider-bottom': props.layout === 'vertical' && props.align === 'bottom'
    }];
  },
  content: 'p-divider-content'
};
var DividerStyle = BaseStyle__default$J["default"].extend({
  name: 'divider',
  classes: classes$J,
  inlineStyles: inlineStyles$9
});

var dividerstyle_cjs = DividerStyle;

const DividerStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(dividerstyle_cjs);

var BaseStyle$I = basestyle_cjs;

function _interopDefaultLegacy$I (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$I = /*#__PURE__*/_interopDefaultLegacy$I(BaseStyle$I);

var classes$I = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-fieldset p-component', {
      'p-fieldset-toggleable': props.toggleable
    }];
  },
  legend: 'p-fieldset-legend',
  legendtitle: 'p-fieldset-legend-text',
  togglericon: 'p-fieldset-toggler',
  toggleablecontent: 'p-toggleable-content',
  content: 'p-fieldset-content'
};
var FieldsetStyle = BaseStyle__default$I["default"].extend({
  name: 'fieldset',
  classes: classes$I
});

var fieldsetstyle_cjs = FieldsetStyle;

const FieldsetStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(fieldsetstyle_cjs);

var BaseStyle$H = basestyle_cjs;

function _interopDefaultLegacy$H (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$H = /*#__PURE__*/_interopDefaultLegacy$H(BaseStyle$H);

var classes$H = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-panel p-component', {
      'p-panel-toggleable': props.toggleable
    }];
  },
  header: 'p-panel-header',
  title: 'p-panel-title',
  icons: 'p-panel-icons',
  toggler: 'p-panel-header-icon p-panel-toggler p-link',
  toggleablecontent: 'p-toggleable-content',
  content: 'p-panel-content',
  footer: 'p-panel-footer'
};
var PanelStyle = BaseStyle__default$H["default"].extend({
  name: 'panel',
  classes: classes$H
});

var panelstyle_cjs = PanelStyle;

const PanelStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(panelstyle_cjs);

var BaseStyle$G = basestyle_cjs;

function _interopDefaultLegacy$G (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$G = /*#__PURE__*/_interopDefaultLegacy$G(BaseStyle$G);

var classes$G = {
  root: 'p-scrollpanel p-component',
  wrapper: 'p-scrollpanel-wrapper',
  content: 'p-scrollpanel-content',
  barx: 'p-scrollpanel-bar p-scrollpanel-bar-x',
  bary: 'p-scrollpanel-bar p-scrollpanel-bar-y'
};
var ScrollPanelStyle = BaseStyle__default$G["default"].extend({
  name: 'scrollpanel',
  classes: classes$G
});

var scrollpanelstyle_cjs = ScrollPanelStyle;

const ScrollPanelStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(scrollpanelstyle_cjs);

var BaseStyle$F = basestyle_cjs;

function _interopDefaultLegacy$F (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$F = /*#__PURE__*/_interopDefaultLegacy$F(BaseStyle$F);

var classes$F = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-splitter p-component', 'p-splitter-' + props.layout];
  },
  gutter: 'p-splitter-gutter',
  gutterHandler: 'p-splitter-gutter-handle'
};
var inlineStyles$8 = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return [{
      display: 'flex',
      'flex-wrap': 'nowrap'
    }, props.layout === 'vertical' ? {
      'flex-direction': 'column'
    } : ''];
  }
};
var SplitterStyle = BaseStyle__default$F["default"].extend({
  name: 'splitter',
  classes: classes$F,
  inlineStyles: inlineStyles$8
});

var splitterstyle_cjs = SplitterStyle;

const SplitterStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(splitterstyle_cjs);

var BaseStyle$E = basestyle_cjs;

function _interopDefaultLegacy$E (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$E = /*#__PURE__*/_interopDefaultLegacy$E(BaseStyle$E);

var classes$E = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-splitter-panel', {
      'p-splitter-panel-nested': instance.isNested
    }];
  }
};
var SplitterPanelStyle = BaseStyle__default$E["default"].extend({
  name: 'splitterpanel',
  classes: classes$E
});

var splitterpanelstyle_cjs = SplitterPanelStyle;

const SplitterPanelStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(splitterpanelstyle_cjs);

var BaseStyle$D = basestyle_cjs;

function _interopDefaultLegacy$D (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$D = /*#__PURE__*/_interopDefaultLegacy$D(BaseStyle$D);

var classes$D = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-stepper p-component', {
      'p-stepper-horizontal': props.orientation === 'horizontal',
      'p-stepper-vertical': props.orientation === 'vertical',
      'p-readonly': props.linear
    }];
  },
  nav: 'p-stepper-nav',
  stepper: {
    header: function header(_ref2) {
      var instance = _ref2.instance;
        _ref2.step;
        var index = _ref2.index;
      return ['p-stepper-header', {
        'p-highlight': instance.isStepActive(index),
        'p-disabled': instance.isItemDisabled(index)
      }];
    },
    action: 'p-stepper-action',
    number: 'p-stepper-number',
    title: 'p-stepper-title',
    separator: 'p-stepper-separator',
    toggleableContent: 'p-stepper-toggleable-content',
    content: function content(_ref3) {
      var props = _ref3.props;
      return ['p-stepper-content', {
        'p-toggleable-content': props.orientation === 'vertical'
      }];
    }
  },
  panelContainer: 'p-stepper-panels',
  panel: function panel(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props,
      index = _ref4.index;
    return ['p-stepper-panel', {
      'p-stepper-panel-active': props.orientation === 'vertical' && instance.isStepActive(index)
    }];
  }
};
var StepperStyle = BaseStyle__default$D["default"].extend({
  name: 'stepper',
  classes: classes$D
});

var stepperstyle_cjs = StepperStyle;

const StepperStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(stepperstyle_cjs);

var StepperPanelStyle = {};

var stepperpanelstyle_cjs = StepperPanelStyle;

const StepperPanelStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(stepperpanelstyle_cjs);

var BaseStyle$C = basestyle_cjs;

function _interopDefaultLegacy$C (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$C = /*#__PURE__*/_interopDefaultLegacy$C(BaseStyle$C);

var classes$C = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tabview p-component', {
      'p-tabview-scrollable': props.scrollable
    }];
  },
  navContainer: 'p-tabview-nav-container',
  previousButton: 'p-tabview-nav-prev p-tabview-nav-btn p-link',
  navContent: 'p-tabview-nav-content',
  nav: 'p-tabview-nav',
  tab: {
    header: function header(_ref2) {
      var instance = _ref2.instance,
        tab = _ref2.tab,
        index = _ref2.index;
      return ['p-tabview-header', instance.getTabProp(tab, 'headerClass'), {
        'p-highlight': instance.d_activeIndex === index,
        'p-disabled': instance.getTabProp(tab, 'disabled')
      }];
    },
    headerAction: 'p-tabview-nav-link p-tabview-header-action',
    headerTitle: 'p-tabview-title',
    content: function content(_ref3) {
      var instance = _ref3.instance,
        tab = _ref3.tab;
      return ['p-tabview-panel', instance.getTabProp(tab, 'contentClass')];
    }
  },
  inkbar: 'p-tabview-ink-bar',
  nextButton: 'p-tabview-nav-next p-tabview-nav-btn p-link',
  panelContainer: 'p-tabview-panels'
};
var TabViewStyle = BaseStyle__default$C["default"].extend({
  name: 'tabview',
  classes: classes$C
});

var tabviewstyle_cjs = TabViewStyle;

const TabViewStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(tabviewstyle_cjs);

var TabPanelStyle = {};

var tabpanelstyle_cjs = TabPanelStyle;

const TabPanelStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(tabpanelstyle_cjs);

var BaseStyle$B = basestyle_cjs;

function _interopDefaultLegacy$B (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$B = /*#__PURE__*/_interopDefaultLegacy$B(BaseStyle$B);

var classes$B = {
  root: 'p-toolbar p-component',
  start: 'p-toolbar-group-start p-toolbar-group-left',
  center: 'p-toolbar-group-center',
  end: 'p-toolbar-group-end p-toolbar-group-right'
};
var ToolbarStyle = BaseStyle__default$B["default"].extend({
  name: 'toolbar',
  classes: classes$B
});

var toolbarstyle_cjs = ToolbarStyle;

const ToolbarStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(toolbarstyle_cjs);

var BaseStyle$A = basestyle_cjs;

function _interopDefaultLegacy$A (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$A = /*#__PURE__*/_interopDefaultLegacy$A(BaseStyle$A);

var classes$A = {
  root: 'p-confirm-dialog',
  icon: 'p-confirm-dialog-icon',
  message: 'p-confirm-dialog-message',
  rejectButton: function rejectButton(_ref) {
    var instance = _ref.instance;
    return ['p-confirm-dialog-reject', instance.confirmation && !instance.confirmation.rejectClass ? 'p-button-text' : null];
  },
  acceptButton: 'p-confirm-dialog-accept'
};
var ConfirmDialogStyle = BaseStyle__default$A["default"].extend({
  name: 'confirmdialog',
  classes: classes$A
});

var confirmdialogstyle_cjs = ConfirmDialogStyle;

const ConfirmDialogStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(confirmdialogstyle_cjs);

var BaseStyle$z = basestyle_cjs;

function _interopDefaultLegacy$z (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$z = /*#__PURE__*/_interopDefaultLegacy$z(BaseStyle$z);

var classes$z = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-confirm-popup p-component', {
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  content: 'p-confirm-popup-content',
  icon: 'p-confirm-popup-icon',
  message: 'p-confirm-popup-message',
  footer: 'p-confirm-popup-footer',
  rejectButton: function rejectButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-confirm-popup-reject', instance.confirmation && !instance.confirmation.rejectClass ? 'p-button-sm p-button-text' : null];
  },
  acceptButton: function acceptButton(_ref3) {
    var instance = _ref3.instance;
    return ['p-confirm-popup-accept', instance.confirmation && !instance.confirmation.acceptClass ? 'p-button-sm' : null];
  }
};
var ConfirmPopupStyle = BaseStyle__default$z["default"].extend({
  name: 'confirmpopup',
  classes: classes$z
});

var confirmpopupstyle_cjs = ConfirmPopupStyle;

const ConfirmPopupStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(confirmpopupstyle_cjs);

var BaseStyle$y = basestyle_cjs;

function _interopDefaultLegacy$y (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$y = /*#__PURE__*/_interopDefaultLegacy$y(BaseStyle$y);

/* Position */
var inlineStyles$7 = {
  mask: function mask(_ref) {
    var position = _ref.position,
      modal = _ref.modal;
    return {
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      justifyContent: position === 'left' || position === 'topleft' || position === 'bottomleft' ? 'flex-start' : position === 'right' || position === 'topright' || position === 'bottomright' ? 'flex-end' : 'center',
      alignItems: position === 'top' || position === 'topleft' || position === 'topright' ? 'flex-start' : position === 'bottom' || position === 'bottomleft' || position === 'bottomright' ? 'flex-end' : 'center',
      pointerEvents: modal ? 'auto' : 'none'
    };
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'auto'
  }
};
var classes$y = {
  mask: function mask(_ref2) {
    var props = _ref2.props;
    var positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
    var pos = positions.find(function (item) {
      return item === props.position;
    });
    return ['p-dialog-mask', {
      'p-component-overlay p-component-overlay-enter': props.modal
    }, pos ? "p-dialog-".concat(pos) : ''];
  },
  root: function root(_ref3) {
    var props = _ref3.props,
      instance = _ref3.instance;
    return ['p-dialog p-component', {
      'p-dialog-rtl': props.rtl,
      'p-dialog-maximized': props.maximizable && instance.maximized,
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  header: 'p-dialog-header',
  title: 'p-dialog-title',
  icons: 'p-dialog-header-icons',
  maximizableButton: 'p-dialog-header-icon p-dialog-header-maximize p-link',
  maximizableIcon: 'p-dialog-header-maximize-icon',
  closeButton: 'p-dialog-header-icon p-dialog-header-close p-link',
  closeButtonIcon: 'p-dialog-header-close-icon',
  content: 'p-dialog-content',
  footer: 'p-dialog-footer'
};
var DialogStyle = BaseStyle__default$y["default"].extend({
  name: 'dialog',
  classes: classes$y,
  inlineStyles: inlineStyles$7
});

var dialogstyle_cjs = DialogStyle;

const DialogStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(dialogstyle_cjs);

var DynamicDialogStyle = {};

var dynamicdialogstyle_cjs = DynamicDialogStyle;

const DynamicDialogStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(dynamicdialogstyle_cjs);

var BaseStyle$x = basestyle_cjs;

function _interopDefaultLegacy$x (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$x = /*#__PURE__*/_interopDefaultLegacy$x(BaseStyle$x);

var classes$x = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-overlaypanel p-component', {
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  content: 'p-overlaypanel-content',
  closeButton: 'p-overlaypanel-close p-link',
  closeIcon: 'p-overlaypanel-close-icon'
};
var OverlayPanelStyle = BaseStyle__default$x["default"].extend({
  name: 'overlaypanel',
  classes: classes$x
});

var overlaypanelstyle_cjs = OverlayPanelStyle;

const OverlayPanelStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(overlaypanelstyle_cjs);

var BaseStyle$w = basestyle_cjs;

function _interopDefaultLegacy$w (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$w = /*#__PURE__*/_interopDefaultLegacy$w(BaseStyle$w);

var inlineStyles$6 = {
  mask: function mask(_ref) {
    var position = _ref.position;
    return {
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      justifyContent: position === 'left' ? 'flex-start' : position === 'right' ? 'flex-end' : 'center',
      alignItems: position === 'top' ? 'flex-start' : position === 'bottom' ? 'flex-end' : 'center'
    };
  }
};
var classes$w = {
  mask: function mask(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    var positions = ['left', 'right', 'top', 'bottom'];
    var pos = positions.find(function (item) {
      return item === props.position;
    });
    return ['p-sidebar-mask', {
      'p-component-overlay p-component-overlay-enter': props.modal,
      'p-sidebar-mask-scrollblocker': props.blockScroll,
      'p-sidebar-visible': instance.containerVisible,
      'p-sidebar-full': instance.fullScreen
    }, pos ? "p-sidebar-".concat(pos) : ''];
  },
  root: function root(_ref3) {
    var instance = _ref3.instance;
    return ['p-sidebar p-component', {
      'p-ripple-disabled': instance.$primevue.config.ripple === false,
      'p-sidebar-full': instance.fullScreen
    }];
  },
  header: 'p-sidebar-header',
  title: 'p-sidebar-header-content',
  closeButton: 'p-sidebar-close p-sidebar-icon p-link',
  closeIcon: 'p-sidebar-close-icon',
  content: 'p-sidebar-content'
};
var SidebarStyle = BaseStyle__default$w["default"].extend({
  name: 'sidebar',
  classes: classes$w,
  inlineStyles: inlineStyles$6
});

var sidebarstyle_cjs = SidebarStyle;

const SidebarStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(sidebarstyle_cjs);

var BaseStyle$v = basestyle_cjs;

function _interopDefaultLegacy$v (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$v = /*#__PURE__*/_interopDefaultLegacy$v(BaseStyle$v);

var classes$v = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-fileupload p-fileupload-".concat(props.mode, " p-component")];
  },
  buttonbar: 'p-fileupload-buttonbar',
  chooseButton: function chooseButton(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-button p-component p-fileupload-choose', {
      'p-fileupload-choose-selected': props.mode === 'basic' && instance.hasFiles,
      'p-disabled': props.disabled,
      'p-focus': instance.focused
    }];
  },
  chooseIcon: 'p-button-icon p-button-icon-left',
  chooseButtonLabel: 'p-button-label',
  content: 'p-fileupload-content',
  empty: 'p-fileupload-empty',
  uploadIcon: 'p-button-icon p-button-icon-left',
  label: 'p-button-label',
  file: 'p-fileupload-file',
  thumbnail: 'p-fileupload-file-thumbnail',
  details: 'p-fileupload-file-details',
  fileName: 'p-fileupload-file-name',
  fileSize: 'p-fileupload-file-size',
  badge: 'p-fileupload-file-badge',
  actions: 'p-fileupload-file-actions',
  removeButton: 'p-fileupload-file-remove'
};
var FileUploadStyle = BaseStyle__default$v["default"].extend({
  name: 'fileupload',
  classes: classes$v
});

var fileuploadstyle_cjs = FileUploadStyle;

const FileUploadStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(fileuploadstyle_cjs);

var BaseStyle$u = basestyle_cjs;

function _interopDefaultLegacy$u (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$u = /*#__PURE__*/_interopDefaultLegacy$u(BaseStyle$u);

var classes$u = {
  root: 'p-breadcrumb p-component',
  menu: 'p-breadcrumb-list',
  home: 'p-breadcrumb-home',
  separator: 'p-menuitem-separator',
  menuitem: function menuitem(_ref) {
    var instance = _ref.instance;
    return ['p-menuitem', {
      'p-disabled': instance.disabled()
    }];
  },
  action: 'p-menuitem-link',
  icon: 'p-menuitem-icon',
  label: 'p-menuitem-text'
};
var BreadcrumbStyle = BaseStyle__default$u["default"].extend({
  name: 'breadcrumb',
  classes: classes$u
});

var breadcrumbstyle_cjs = BreadcrumbStyle;

const BreadcrumbStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(breadcrumbstyle_cjs);

var BaseStyle$t = basestyle_cjs;

function _interopDefaultLegacy$t (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$t = /*#__PURE__*/_interopDefaultLegacy$t(BaseStyle$t);

var classes$t = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-contextmenu p-component', {
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  menu: 'p-contextmenu-root-list',
  menuitem: function menuitem(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem;
    return ['p-menuitem', {
      'p-menuitem-active p-highlight': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  content: 'p-menuitem-content',
  action: 'p-menuitem-link',
  icon: 'p-menuitem-icon',
  label: 'p-menuitem-text',
  submenuIcon: 'p-submenu-icon',
  submenu: 'p-submenu-list',
  separator: 'p-menuitem-separator'
};
var ContextMenuStyle = BaseStyle__default$t["default"].extend({
  name: 'contextmenu',
  classes: classes$t
});

var contextmenustyle_cjs = ContextMenuStyle;

const ContextMenuStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(contextmenustyle_cjs);

var BaseStyle$s = basestyle_cjs;

function _interopDefaultLegacy$s (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$s = /*#__PURE__*/_interopDefaultLegacy$s(BaseStyle$s);

var classes$s = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-dock p-component', "p-dock-".concat(props.position), {
      'p-dock-mobile': instance.queryMatches
    }];
  },
  container: 'p-dock-list-container',
  menu: 'p-dock-list',
  menuitem: function menuitem(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem,
      index = _ref2.index,
      id = _ref2.id;
    return ['p-dock-item', {
      'p-focus': instance.isItemActive(id),
      'p-disabled': instance.disabled(processedItem),
      'p-dock-item-second-prev': instance.currentIndex - 2 === index,
      'p-dock-item-prev': instance.currentIndex - 1 === index,
      'p-dock-item-current': instance.currentIndex === index,
      'p-dock-item-next': instance.currentIndex + 1 === index,
      'p-dock-item-second-next': instance.currentIndex + 2 === index
    }];
  },
  content: 'p-menuitem-content',
  action: 'p-dock-link',
  icon: 'p-dock-icon'
};
var DockStyle = BaseStyle__default$s["default"].extend({
  name: 'dock',
  classes: classes$s
});

var dockstyle_cjs = DockStyle;

const DockStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(dockstyle_cjs);

var BaseStyle$r = basestyle_cjs;

function _interopDefaultLegacy$r (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$r = /*#__PURE__*/_interopDefaultLegacy$r(BaseStyle$r);

var classes$r = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-menu p-component', {
      'p-menu-overlay': props.popup,
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  start: 'p-menu-start',
  menu: 'p-menu-list p-reset',
  submenuHeader: 'p-submenu-header',
  separator: 'p-menuitem-separator',
  end: 'p-menu-end',
  menuitem: function menuitem(_ref2) {
    var instance = _ref2.instance;
    return ['p-menuitem', {
      'p-focus': instance.id === instance.focusedOptionId,
      'p-disabled': instance.disabled()
    }];
  },
  content: 'p-menuitem-content',
  action: 'p-menuitem-link',
  icon: 'p-menuitem-icon',
  label: 'p-menuitem-text'
};
var MenuStyle = BaseStyle__default$r["default"].extend({
  name: 'menu',
  classes: classes$r
});

var menustyle_cjs = MenuStyle;

const MenuStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(menustyle_cjs);

var BaseStyle$q = basestyle_cjs;

function _interopDefaultLegacy$q (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$q = /*#__PURE__*/_interopDefaultLegacy$q(BaseStyle$q);

var inlineStyles$5 = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance,
      processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'block' : 'none'
    };
  }
};
var classes$q = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-menubar p-component', {
      'p-menubar-mobile': instance.queryMatches,
      'p-menubar-mobile-active': instance.mobileActive
    }];
  },
  start: 'p-menubar-start',
  button: 'p-menubar-button',
  menu: 'p-menubar-root-list',
  menuitem: function menuitem(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-menuitem', {
      'p-menuitem-active p-highlight': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  content: 'p-menuitem-content',
  action: 'p-menuitem-link',
  icon: 'p-menuitem-icon',
  label: 'p-menuitem-text',
  submenuIcon: 'p-submenu-icon',
  submenu: 'p-submenu-list',
  separator: 'p-menuitem-separator',
  end: 'p-menubar-end'
};
var MenubarStyle = BaseStyle__default$q["default"].extend({
  name: 'menubar',
  classes: classes$q,
  inlineStyles: inlineStyles$5
});

var menubarstyle_cjs = MenubarStyle;

const MenubarStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(menubarstyle_cjs);

var BaseStyle$p = basestyle_cjs;

function _interopDefaultLegacy$p (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$p = /*#__PURE__*/_interopDefaultLegacy$p(BaseStyle$p);

var inlineStyles$4 = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance,
      processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'block' : 'none'
    };
  }
};
var classes$p = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-megamenu p-component', {
      'p-megamenu-mobile': instance.queryMatches,
      'p-megamenu-mobile-active': instance.mobileActive,
      'p-megamenu-horizontal': instance.horizontal,
      'p-megamenu-vertical': instance.vertical
    }];
  },
  start: 'p-megamenu-start',
  menubutton: 'p-megamenu-button',
  menu: 'p-megamenu-root-list',
  submenuHeader: function submenuHeader(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-megamenu-submenu-header p-submenu-header', {
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  menuitem: function menuitem(_ref4) {
    var instance = _ref4.instance,
      processedItem = _ref4.processedItem;
    return ['p-menuitem', {
      'p-menuitem-active p-highlight': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  content: 'p-menuitem-content',
  action: 'p-menuitem-link',
  icon: 'p-menuitem-icon',
  label: 'p-menuitem-text',
  submenuIcon: 'p-submenu-icon',
  panel: 'p-megamenu-panel',
  grid: 'p-megamenu-grid',
  column: function column(_ref5) {
    var instance = _ref5.instance,
      processedItem = _ref5.processedItem;
    var length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
    var columnClass;
    if (instance.$parentInstance.queryMatches) columnClass = 'p-megamenu-col-12';else {
      switch (length) {
        case 2:
          columnClass = 'p-megamenu-col-6';
          break;
        case 3:
          columnClass = 'p-megamenu-col-4';
          break;
        case 4:
          columnClass = 'p-megamenu-col-3';
          break;
        case 6:
          columnClass = 'p-megamenu-col-2';
          break;
        default:
          columnClass = 'p-megamenu-col-12';
          break;
      }
    }
    return columnClass;
  },
  submenu: 'p-submenu-list p-megamenu-submenu',
  submenuLabel: 'p-menuitem-text',
  separator: 'p-menuitem-separator',
  end: 'p-megamenu-end'
};
var MegaMenuStyle = BaseStyle__default$p["default"].extend({
  name: 'megamenu',
  classes: classes$p,
  inlineStyles: inlineStyles$4
});

var megamenustyle_cjs = MegaMenuStyle;

const MegaMenuStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(megamenustyle_cjs);

var BaseStyle$o = basestyle_cjs;

function _interopDefaultLegacy$o (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$o = /*#__PURE__*/_interopDefaultLegacy$o(BaseStyle$o);

var classes$o = {
  root: 'p-panelmenu p-component',
  panel: 'p-panelmenu-panel',
  header: function header(_ref) {
    var instance = _ref.instance,
      item = _ref.item;
    return ['p-panelmenu-header', {
      'p-highlight': instance.isItemActive(item) && !!item.items,
      'p-disabled': instance.isItemDisabled(item)
    }];
  },
  headerContent: 'p-panelmenu-header-content',
  headerAction: 'p-panelmenu-header-action',
  headerIcon: 'p-menuitem-icon',
  headerLabel: 'p-menuitem-text',
  toggleableContent: 'p-toggleable-content',
  menuContent: 'p-panelmenu-content',
  menu: 'p-panelmenu-root-list',
  menuitem: function menuitem(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem;
    return ['p-menuitem', {
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  content: 'p-menuitem-content',
  action: 'p-menuitem-link',
  icon: 'p-menuitem-icon',
  label: 'p-menuitem-text',
  submenuIcon: 'p-submenu-icon',
  submenu: 'p-submenu-list',
  separator: 'p-menuitem-separator'
};
var PanelMenuStyle = BaseStyle__default$o["default"].extend({
  name: 'panelmenu',
  classes: classes$o
});

var panelmenustyle_cjs = PanelMenuStyle;

const PanelMenuStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(panelmenustyle_cjs);

var BaseStyle$n = basestyle_cjs;

function _interopDefaultLegacy$n (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$n = /*#__PURE__*/_interopDefaultLegacy$n(BaseStyle$n);

var classes$n = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-steps p-component', {
      'p-readonly': props.readonly
    }];
  },
  menu: 'p-steps-list',
  menuitem: function menuitem(_ref2) {
    var instance = _ref2.instance,
      item = _ref2.item,
      index = _ref2.index;
    return ['p-steps-item', {
      'p-highlight p-steps-current': instance.isActive(index),
      'p-disabled': instance.isItemDisabled(item, index)
    }];
  },
  action: 'p-menuitem-link',
  step: 'p-steps-number',
  label: 'p-steps-title'
};
var StepsStyle = BaseStyle__default$n["default"].extend({
  name: 'steps',
  classes: classes$n
});

var stepsstyle_cjs = StepsStyle;

const StepsStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(stepsstyle_cjs);

var BaseStyle$m = basestyle_cjs;

function _interopDefaultLegacy$m (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$m = /*#__PURE__*/_interopDefaultLegacy$m(BaseStyle$m);

var classes$m = {
  root: 'p-tabmenu p-component',
  menu: 'p-tabmenu-nav p-reset',
  menuitem: function menuitem(_ref) {
    var instance = _ref.instance,
      index = _ref.index,
      item = _ref.item;
    return ['p-tabmenuitem', {
      'p-highlight': instance.d_activeIndex === index,
      'p-disabled': instance.disabled(item)
    }];
  },
  action: 'p-menuitem-link',
  icon: 'p-menuitem-icon',
  label: 'p-menuitem-text',
  inkbar: 'p-tabmenu-ink-bar'
};
var TabMenuStyle = BaseStyle__default$m["default"].extend({
  name: 'tabmenu',
  classes: classes$m
});

var tabmenustyle_cjs = TabMenuStyle;

const TabMenuStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(tabmenustyle_cjs);

var BaseStyle$l = basestyle_cjs;

function _interopDefaultLegacy$l (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$l = /*#__PURE__*/_interopDefaultLegacy$l(BaseStyle$l);

var inlineStyles$3 = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance,
      processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'block' : 'none'
    };
  }
};
var classes$l = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-tieredmenu p-component', {
      'p-tieredmenu-overlay': props.popup,
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  start: 'p-tieredmenu-start',
  menu: 'p-tieredmenu-root-list',
  menuitem: function menuitem(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-menuitem', {
      'p-menuitem-active p-highlight': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  content: 'p-menuitem-content',
  action: 'p-menuitem-link',
  icon: 'p-menuitem-icon',
  text: 'p-menuitem-text',
  submenuIcon: 'p-submenu-icon',
  submenu: 'p-submenu-list',
  separator: 'p-menuitem-separator',
  end: 'p-tieredmenu-end'
};
var TieredMenuStyle = BaseStyle__default$l["default"].extend({
  name: 'tieredmenu',
  classes: classes$l,
  inlineStyles: inlineStyles$3
});

var tieredmenustyle_cjs = TieredMenuStyle;

const TieredMenuStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(tieredmenustyle_cjs);

var BaseStyle$k = basestyle_cjs;

function _interopDefaultLegacy$k (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$k = /*#__PURE__*/_interopDefaultLegacy$k(BaseStyle$k);

var inlineStyles$2 = {
  root: {
    position: 'relative'
  }
};
var classes$k = {
  root: 'p-chart'
};
var ChartStyle = BaseStyle__default$k["default"].extend({
  name: 'chart',
  inlineStyles: inlineStyles$2,
  classes: classes$k
});

var chartstyle_cjs = ChartStyle;

const ChartStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(chartstyle_cjs);

var BaseStyle$j = basestyle_cjs;

function _interopDefaultLegacy$j (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$j = /*#__PURE__*/_interopDefaultLegacy$j(BaseStyle$j);

var classes$j = {
  root: function root(_ref) {
    var props = _ref.props;
    return 'p-message p-component p-message-' + props.severity;
  },
  wrapper: 'p-message-wrapper',
  icon: 'p-message-icon',
  text: 'p-message-text',
  closeButton: 'p-message-close p-link',
  closeIcon: 'p-message-close-icon'
};
var MessageStyle = BaseStyle__default$j["default"].extend({
  name: 'message',
  classes: classes$j
});

var messagestyle_cjs = MessageStyle;

const MessageStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(messagestyle_cjs);

var BaseStyle$i = basestyle_cjs;

function _interopDefaultLegacy$i (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$i = /*#__PURE__*/_interopDefaultLegacy$i(BaseStyle$i);

var classes$i = {
  root: function root(_ref) {
    var props = _ref.props,
      instance = _ref.instance;
    return ['p-inline-message p-component p-inline-message-' + props.severity, {
      'p-inline-message-icon-only': !instance.$slots["default"]
    }];
  },
  icon: function icon(_ref2) {
    var props = _ref2.props;
    return ['p-inline-message-icon', props.icon];
  },
  text: 'p-inline-message-text'
};
var InlineMessageStyle = BaseStyle__default$i["default"].extend({
  name: 'inlinemessage',
  classes: classes$i
});

var inlinemessagestyle_cjs = InlineMessageStyle;

const InlineMessageStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(inlinemessagestyle_cjs);

var BaseStyle$h = basestyle_cjs;

function _interopDefaultLegacy$h (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$h = /*#__PURE__*/_interopDefaultLegacy$h(BaseStyle$h);

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// Position
var inlineStyles$1 = {
  root: function root(_ref) {
    var position = _ref.position;
    return {
      position: 'fixed',
      top: position === 'top-right' || position === 'top-left' || position === 'top-center' ? '20px' : position === 'center' ? '50%' : null,
      right: (position === 'top-right' || position === 'bottom-right') && '20px',
      bottom: (position === 'bottom-left' || position === 'bottom-right' || position === 'bottom-center') && '20px',
      left: position === 'top-left' || position === 'bottom-left' ? '20px' : position === 'center' || position === 'top-center' || position === 'bottom-center' ? '50%' : null
    };
  }
};
var classes$h = {
  root: function root(_ref2) {
    var props = _ref2.props,
      instance = _ref2.instance;
    return ['p-toast p-component p-toast-' + props.position, {
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  container: function container(_ref3) {
    var props = _ref3.props;
    return ['p-toast-message', {
      'p-toast-message-info': props.message.severity === 'info' || props.message.severity === undefined,
      'p-toast-message-warn': props.message.severity === 'warn',
      'p-toast-message-error': props.message.severity === 'error',
      'p-toast-message-success': props.message.severity === 'success',
      'p-toast-message-secondary': props.message.severity === 'secondary',
      'p-toast-message-contrast': props.message.severity === 'contrast'
    }];
  },
  content: 'p-toast-message-content',
  icon: function icon(_ref4) {
    var props = _ref4.props;
    return ['p-toast-message-icon', _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, props.infoIcon, props.message.severity === 'info'), props.warnIcon, props.message.severity === 'warn'), props.errorIcon, props.message.severity === 'error'), props.successIcon, props.message.severity === 'success')];
  },
  text: 'p-toast-message-text',
  summary: 'p-toast-summary',
  detail: 'p-toast-detail',
  closeButton: 'p-toast-icon-close p-link',
  closeIcon: 'p-toast-icon-close-icon'
};
var ToastStyle = BaseStyle__default$h["default"].extend({
  name: 'toast',
  classes: classes$h,
  inlineStyles: inlineStyles$1
});

var toaststyle_cjs = ToastStyle;

const ToastStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(toaststyle_cjs);

var BaseStyle$g = basestyle_cjs;

function _interopDefaultLegacy$g (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$g = /*#__PURE__*/_interopDefaultLegacy$g(BaseStyle$g);

var classes$g = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-image p-component', {
      'p-image-preview-container': props.preview
    }];
  },
  image: function image(_ref2) {
    var props = _ref2.props;
    return props.image;
  },
  button: 'p-image-preview-indicator',
  icon: 'p-image-preview-icon',
  mask: 'p-image-mask p-component-overlay p-component-overlay-enter',
  toolbar: 'p-image-toolbar',
  rotateRightButton: 'p-image-action p-link',
  rotateLeftButton: 'p-image-action p-link',
  zoomOutButton: function zoomOutButton(_ref3) {
    var instance = _ref3.instance;
    return ['p-image-action p-link', {
      'p-disabled': instance.isZoomOutDisabled
    }];
  },
  zoomInButton: function zoomInButton(_ref4) {
    var instance = _ref4.instance;
    return ['p-image-action p-link', {
      'p-disabled': instance.isZoomInDisabled
    }];
  },
  closeButton: 'p-image-action p-link',
  preview: 'p-image-preview'
};
var ImageStyle = BaseStyle__default$g["default"].extend({
  name: 'image',
  classes: classes$g
});

var imagestyle_cjs = ImageStyle;

const ImageStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(imagestyle_cjs);

var BaseStyle$f = basestyle_cjs;

function _interopDefaultLegacy$f (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$f = /*#__PURE__*/_interopDefaultLegacy$f(BaseStyle$f);

var classes$f = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-avatar p-component', {
      'p-avatar-image': props.image != null,
      'p-avatar-circle': props.shape === 'circle',
      'p-avatar-lg': props.size === 'large',
      'p-avatar-xl': props.size === 'xlarge'
    }];
  },
  label: 'p-avatar-text',
  icon: 'p-avatar-icon'
};
var AvatarStyle = BaseStyle__default$f["default"].extend({
  name: 'avatar',
  classes: classes$f
});

var avatarstyle_cjs = AvatarStyle;

const AvatarStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(avatarstyle_cjs);

var BaseStyle$e = basestyle_cjs;

function _interopDefaultLegacy$e (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$e = /*#__PURE__*/_interopDefaultLegacy$e(BaseStyle$e);

var classes$e = {
  root: 'p-avatar-group p-component'
};
var AvatarGroupStyle = BaseStyle__default$e["default"].extend({
  name: 'avatargroup',
  classes: classes$e
});

var avatargroupstyle_cjs = AvatarGroupStyle;

const AvatarGroupStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(avatargroupstyle_cjs);

var BaseStyle$d = basestyle_cjs;
var utils = utils_cjs;

function _interopDefaultLegacy$d (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$d = /*#__PURE__*/_interopDefaultLegacy$d(BaseStyle$d);

var classes$d = {
  root: function root(_ref) {
    var props = _ref.props,
      instance = _ref.instance;
    return ['p-badge p-component', {
      'p-badge-no-gutter': utils.ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
      'p-badge-dot': utils.ObjectUtils.isEmpty(props.value) && !instance.$slots["default"],
      'p-badge-lg': props.size === 'large',
      'p-badge-xl': props.size === 'xlarge',
      'p-badge-info': props.severity === 'info',
      'p-badge-success': props.severity === 'success',
      'p-badge-warning': props.severity === 'warning',
      'p-badge-danger': props.severity === 'danger',
      'p-badge-secondary': props.severity === 'secondary',
      'p-badge-contrast': props.severity === 'contrast'
    }];
  }
};
var BadgeStyle = BaseStyle__default$d["default"].extend({
  name: 'badge',
  classes: classes$d
});

var badgestyle_cjs = BadgeStyle;

const BadgeStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(badgestyle_cjs);

var BaseStyle$c = basestyle_cjs;

function _interopDefaultLegacy$c (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$c = /*#__PURE__*/_interopDefaultLegacy$c(BaseStyle$c);

var classes$c = {
  root: 'p-blockui-container'
};
var BlockUIStyle = BaseStyle__default$c["default"].extend({
  name: 'blockui',
  classes: classes$c
});

var blockuistyle_cjs = BlockUIStyle;

const BlockUIStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(blockuistyle_cjs);

var BaseStyle$b = basestyle_cjs;

function _interopDefaultLegacy$b (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$b = /*#__PURE__*/_interopDefaultLegacy$b(BaseStyle$b);

var classes$b = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-chip p-component', {
      'p-chip-image': props.image != null
    }];
  },
  icon: 'p-chip-icon',
  label: 'p-chip-text',
  removeIcon: 'p-chip-remove-icon'
};
var ChipStyle = BaseStyle__default$b["default"].extend({
  name: 'chip',
  classes: classes$b
});

var chipstyle_cjs = ChipStyle;

const ChipStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(chipstyle_cjs);

var BaseStyle$a = basestyle_cjs;

function _interopDefaultLegacy$a (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$a = /*#__PURE__*/_interopDefaultLegacy$a(BaseStyle$a);

var classes$a = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-inplace p-component', {
      'p-inplace-closable': props.closable
    }];
  },
  display: function display(_ref2) {
    var props = _ref2.props;
    return ['p-inplace-display', {
      'p-disabled': props.disabled
    }];
  },
  content: 'p-inplace-content'
};
var InplaceStyle = BaseStyle__default$a["default"].extend({
  name: 'inplace',
  classes: classes$a
});

var inplacestyle_cjs = InplaceStyle;

const InplaceStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(inplacestyle_cjs);

var BaseStyle$9 = basestyle_cjs;

function _interopDefaultLegacy$9 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$9 = /*#__PURE__*/_interopDefaultLegacy$9(BaseStyle$9);

var classes$9 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-metergroup p-component', {
      'p-metergroup-horizontal': props.orientation === 'horizontal',
      'p-metergroup-vertical': props.orientation === 'vertical'
    }];
  },
  metercontainer: 'p-metergroup-meters',
  meter: 'p-metergroup-meter',
  labellist: function labellist(_ref2) {
    var props = _ref2.props;
    return ['p-metergroup-labels', {
      'p-metergroup-labels-vertical': props.labelOrientation === 'vertical',
      'p-metergroup-labels-horizontal': props.labelOrientation === 'horizontal'
    }];
  },
  labellistitem: 'p-metergroup-label',
  labelicon: 'p-metergroup-label-icon',
  labellisttype: 'p-metergroup-label-marker',
  label: 'p-metergroup-label-text'
};
var MeterGroupStyle = BaseStyle__default$9["default"].extend({
  name: 'metergroup',
  classes: classes$9
});

var metergroupstyle_cjs = MeterGroupStyle;

const MeterGroupStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(metergroupstyle_cjs);

var BaseStyle$8 = basestyle_cjs;

function _interopDefaultLegacy$8 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$8 = /*#__PURE__*/_interopDefaultLegacy$8(BaseStyle$8);

var classes$8 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-scrolltop p-link p-component', {
      'p-scrolltop-sticky': props.target !== 'window'
    }];
  },
  icon: 'p-scrolltop-icon'
};
var ScrollTopStyle = BaseStyle__default$8["default"].extend({
  name: 'scrolltop',
  classes: classes$8
});

var scrolltopstyle_cjs = ScrollTopStyle;

const ScrollTopStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(scrolltopstyle_cjs);

var BaseStyle$7 = basestyle_cjs;

function _interopDefaultLegacy$7 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$7 = /*#__PURE__*/_interopDefaultLegacy$7(BaseStyle$7);

var inlineStyles = {
  root: {
    position: 'relative'
  }
};
var classes$7 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-skeleton p-component', {
      'p-skeleton-circle': props.shape === 'circle',
      'p-skeleton-none': props.animation === 'none'
    }];
  }
};
var SkeletonStyle = BaseStyle__default$7["default"].extend({
  name: 'skeleton',
  classes: classes$7,
  inlineStyles: inlineStyles
});

var skeletonstyle_cjs = SkeletonStyle;

const SkeletonStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(skeletonstyle_cjs);

var BaseStyle$6 = basestyle_cjs;

function _interopDefaultLegacy$6 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$6 = /*#__PURE__*/_interopDefaultLegacy$6(BaseStyle$6);

var classes$6 = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-progressbar p-component', {
      'p-progressbar-determinate': instance.determinate,
      'p-progressbar-indeterminate': instance.indeterminate
    }];
  },
  container: 'p-progressbar-indeterminate-container',
  value: 'p-progressbar-value p-progressbar-value-animate',
  label: 'p-progressbar-label'
};
var ProgressBarStyle = BaseStyle__default$6["default"].extend({
  name: 'progressbar',
  classes: classes$6
});

var progressbarstyle_cjs = ProgressBarStyle;

const ProgressBarStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(progressbarstyle_cjs);

var BaseStyle$5 = basestyle_cjs;

function _interopDefaultLegacy$5 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$5 = /*#__PURE__*/_interopDefaultLegacy$5(BaseStyle$5);

var classes$5 = {
  root: 'p-progress-spinner',
  spinner: 'p-progress-spinner-svg',
  circle: 'p-progress-spinner-circle'
};
var ProgressSpinnerStyle = BaseStyle__default$5["default"].extend({
  name: 'progressspinner',
  classes: classes$5
});

var progressspinnerstyle_cjs = ProgressSpinnerStyle;

const ProgressSpinnerStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(progressspinnerstyle_cjs);

var BaseStyle$4 = basestyle_cjs;

function _interopDefaultLegacy$4 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$4 = /*#__PURE__*/_interopDefaultLegacy$4(BaseStyle$4);

var classes$4 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tag p-component', {
      'p-tag-info': props.severity === 'info',
      'p-tag-success': props.severity === 'success',
      'p-tag-warning': props.severity === 'warning',
      'p-tag-danger': props.severity === 'danger',
      'p-tag-secondary': props.severity === 'secondary',
      'p-tag-contrast': props.severity === 'contrast',
      'p-tag-rounded': props.rounded
    }];
  },
  icon: 'p-tag-icon',
  value: 'p-tag-value'
};
var TagStyle = BaseStyle__default$4["default"].extend({
  name: 'tag',
  classes: classes$4
});

var tagstyle_cjs = TagStyle;

const TagStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(tagstyle_cjs);

var BaseStyle$3 = basestyle_cjs;

function _interopDefaultLegacy$3 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$3 = /*#__PURE__*/_interopDefaultLegacy$3(BaseStyle$3);

var classes$3 = {
  root: 'p-terminal p-component',
  content: 'p-terminal-content',
  prompt: 'p-terminal-prompt',
  command: 'p-terminal-command',
  response: 'p-terminal-response',
  container: 'p-terminal-prompt-container',
  commandText: 'p-terminal-input'
};
var TerminalStyle = BaseStyle__default$3["default"].extend({
  name: 'terminal',
  classes: classes$3
});

var terminalstyle_cjs = TerminalStyle;

const TerminalStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(terminalstyle_cjs);

var BaseStyle$2 = basestyle_cjs;

function _interopDefaultLegacy$2 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$2 = /*#__PURE__*/_interopDefaultLegacy$2(BaseStyle$2);

var classes$2 = {
  root: 'p-badge p-component'
};
var BadgeDirectiveStyle = BaseStyle__default$2["default"].extend({
  name: 'badge',
  classes: classes$2
});

var badgedirectivestyle_cjs = BadgeDirectiveStyle;

const BadgeDirectiveStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(badgedirectivestyle_cjs);

var BaseStyle$1 = basestyle_cjs;

function _interopDefaultLegacy$1 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default$1 = /*#__PURE__*/_interopDefaultLegacy$1(BaseStyle$1);

var classes$1 = {
  root: 'p-tooltip p-component',
  arrow: 'p-tooltip-arrow',
  text: 'p-tooltip-text'
};
var TooltipStyle = BaseStyle__default$1["default"].extend({
  name: 'tooltip',
  classes: classes$1
});

var tooltipstyle_cjs = TooltipStyle;

const TooltipStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(tooltipstyle_cjs);

var BaseStyle = basestyle_cjs;

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BaseStyle__default = /*#__PURE__*/_interopDefaultLegacy(BaseStyle);

var classes = {
  root: 'p-ink'
};
var RippleStyle = BaseStyle__default["default"].extend({
  name: 'ripple',
  classes: classes
});

var ripplestyle_cjs = RippleStyle;

const RippleStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(ripplestyle_cjs);

var StyleClassStyle = {};

var styleclassstyle_cjs = StyleClassStyle;

const StyleClassStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(styleclassstyle_cjs);

var FocusTrapStyle = {};

var focustrapstyle_cjs = FocusTrapStyle;

const FocusTrapStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(focustrapstyle_cjs);

var AnimateOnScrollStyle = {};

var animateonscrollstyle_cjs = AnimateOnScrollStyle;

const AnimateOnScrollStyle$1 = /*@__PURE__*/getDefaultExportFromCjs(animateonscrollstyle_cjs);

const stylesToTop = ['<style type="text/css" data-primevue-style-id="layer-order" >@layer tailwind-base, primevue, tailwind-utilities</style>'].join('');
const styleProps = {
  
};
const styles = [
  ,
  BaseStyle$1v && BaseStyle$1v.getStyleSheet ? BaseStyle$1v.getStyleSheet(undefined, styleProps) : '',BaseComponentStyle$1 && BaseComponentStyle$1.getStyleSheet ? BaseComponentStyle$1.getStyleSheet(undefined, styleProps) : '',AutoCompleteStyle$1 && AutoCompleteStyle$1.getStyleSheet ? AutoCompleteStyle$1.getStyleSheet(undefined, styleProps) : '',CalendarStyle$1 && CalendarStyle$1.getStyleSheet ? CalendarStyle$1.getStyleSheet(undefined, styleProps) : '',CascadeSelectStyle$1 && CascadeSelectStyle$1.getStyleSheet ? CascadeSelectStyle$1.getStyleSheet(undefined, styleProps) : '',CheckboxStyle$1 && CheckboxStyle$1.getStyleSheet ? CheckboxStyle$1.getStyleSheet(undefined, styleProps) : '',ChipsStyle$1 && ChipsStyle$1.getStyleSheet ? ChipsStyle$1.getStyleSheet(undefined, styleProps) : '',ColorPickerStyle$1 && ColorPickerStyle$1.getStyleSheet ? ColorPickerStyle$1.getStyleSheet(undefined, styleProps) : '',DropdownStyle$1 && DropdownStyle$1.getStyleSheet ? DropdownStyle$1.getStyleSheet(undefined, styleProps) : '',EditorStyle$1 && EditorStyle$1.getStyleSheet ? EditorStyle$1.getStyleSheet(undefined, styleProps) : '',FloatLabelStyle$1 && FloatLabelStyle$1.getStyleSheet ? FloatLabelStyle$1.getStyleSheet(undefined, styleProps) : '',IconFieldStyle$1 && IconFieldStyle$1.getStyleSheet ? IconFieldStyle$1.getStyleSheet(undefined, styleProps) : '',InputGroupStyle$1 && InputGroupStyle$1.getStyleSheet ? InputGroupStyle$1.getStyleSheet(undefined, styleProps) : '',InputGroupAddonStyle$1 && InputGroupAddonStyle$1.getStyleSheet ? InputGroupAddonStyle$1.getStyleSheet(undefined, styleProps) : '',InputIconStyle$1 && InputIconStyle$1.getStyleSheet ? InputIconStyle$1.getStyleSheet(undefined, styleProps) : '',InputMaskStyle$1 && InputMaskStyle$1.getStyleSheet ? InputMaskStyle$1.getStyleSheet(undefined, styleProps) : '',InputNumberStyle$1 && InputNumberStyle$1.getStyleSheet ? InputNumberStyle$1.getStyleSheet(undefined, styleProps) : '',InputOtpStyle$1 && InputOtpStyle$1.getStyleSheet ? InputOtpStyle$1.getStyleSheet(undefined, styleProps) : '',InputSwitchStyle$1 && InputSwitchStyle$1.getStyleSheet ? InputSwitchStyle$1.getStyleSheet(undefined, styleProps) : '',InputTextStyle$1 && InputTextStyle$1.getStyleSheet ? InputTextStyle$1.getStyleSheet(undefined, styleProps) : '',KnobStyle$1 && KnobStyle$1.getStyleSheet ? KnobStyle$1.getStyleSheet(undefined, styleProps) : '',ListboxStyle$1 && ListboxStyle$1.getStyleSheet ? ListboxStyle$1.getStyleSheet(undefined, styleProps) : '',MultiSelectStyle$1 && MultiSelectStyle$1.getStyleSheet ? MultiSelectStyle$1.getStyleSheet(undefined, styleProps) : '',PasswordStyle$1 && PasswordStyle$1.getStyleSheet ? PasswordStyle$1.getStyleSheet(undefined, styleProps) : '',RadioButtonStyle$1 && RadioButtonStyle$1.getStyleSheet ? RadioButtonStyle$1.getStyleSheet(undefined, styleProps) : '',RatingStyle$1 && RatingStyle$1.getStyleSheet ? RatingStyle$1.getStyleSheet(undefined, styleProps) : '',SelectButtonStyle$1 && SelectButtonStyle$1.getStyleSheet ? SelectButtonStyle$1.getStyleSheet(undefined, styleProps) : '',SliderStyle$1 && SliderStyle$1.getStyleSheet ? SliderStyle$1.getStyleSheet(undefined, styleProps) : '',TextareaStyle$1 && TextareaStyle$1.getStyleSheet ? TextareaStyle$1.getStyleSheet(undefined, styleProps) : '',ToggleButtonStyle$1 && ToggleButtonStyle$1.getStyleSheet ? ToggleButtonStyle$1.getStyleSheet(undefined, styleProps) : '',TreeSelectStyle$1 && TreeSelectStyle$1.getStyleSheet ? TreeSelectStyle$1.getStyleSheet(undefined, styleProps) : '',TriStateCheckboxStyle$1 && TriStateCheckboxStyle$1.getStyleSheet ? TriStateCheckboxStyle$1.getStyleSheet(undefined, styleProps) : '',ButtonStyle$1 && ButtonStyle$1.getStyleSheet ? ButtonStyle$1.getStyleSheet(undefined, styleProps) : '',ButtonGroupStyle$1 && ButtonGroupStyle$1.getStyleSheet ? ButtonGroupStyle$1.getStyleSheet(undefined, styleProps) : '',SpeedDialStyle$1 && SpeedDialStyle$1.getStyleSheet ? SpeedDialStyle$1.getStyleSheet(undefined, styleProps) : '',SplitButtonStyle$1 && SplitButtonStyle$1.getStyleSheet ? SplitButtonStyle$1.getStyleSheet(undefined, styleProps) : '',ColumnStyle$1 && ColumnStyle$1.getStyleSheet ? ColumnStyle$1.getStyleSheet(undefined, styleProps) : '',RowStyle$1 && RowStyle$1.getStyleSheet ? RowStyle$1.getStyleSheet(undefined, styleProps) : '',ColumnGroupStyle$1 && ColumnGroupStyle$1.getStyleSheet ? ColumnGroupStyle$1.getStyleSheet(undefined, styleProps) : '',DataTableStyle$1 && DataTableStyle$1.getStyleSheet ? DataTableStyle$1.getStyleSheet(undefined, styleProps) : '',DataViewStyle$1 && DataViewStyle$1.getStyleSheet ? DataViewStyle$1.getStyleSheet(undefined, styleProps) : '',DataViewLayoutOptionsStyle$1 && DataViewLayoutOptionsStyle$1.getStyleSheet ? DataViewLayoutOptionsStyle$1.getStyleSheet(undefined, styleProps) : '',OrderListStyle$1 && OrderListStyle$1.getStyleSheet ? OrderListStyle$1.getStyleSheet(undefined, styleProps) : '',OrganizationChartStyle$1 && OrganizationChartStyle$1.getStyleSheet ? OrganizationChartStyle$1.getStyleSheet(undefined, styleProps) : '',PaginatorStyle$1 && PaginatorStyle$1.getStyleSheet ? PaginatorStyle$1.getStyleSheet(undefined, styleProps) : '',PickListStyle$1 && PickListStyle$1.getStyleSheet ? PickListStyle$1.getStyleSheet(undefined, styleProps) : '',TreeStyle$1 && TreeStyle$1.getStyleSheet ? TreeStyle$1.getStyleSheet(undefined, styleProps) : '',TreeTableStyle$1 && TreeTableStyle$1.getStyleSheet ? TreeTableStyle$1.getStyleSheet(undefined, styleProps) : '',TimelineStyle$1 && TimelineStyle$1.getStyleSheet ? TimelineStyle$1.getStyleSheet(undefined, styleProps) : '',VirtualScrollerStyle$1 && VirtualScrollerStyle$1.getStyleSheet ? VirtualScrollerStyle$1.getStyleSheet(undefined, styleProps) : '',AccordionStyle$1 && AccordionStyle$1.getStyleSheet ? AccordionStyle$1.getStyleSheet(undefined, styleProps) : '',AccordionTabStyle$1 && AccordionTabStyle$1.getStyleSheet ? AccordionTabStyle$1.getStyleSheet(undefined, styleProps) : '',CardStyle$1 && CardStyle$1.getStyleSheet ? CardStyle$1.getStyleSheet(undefined, styleProps) : '',DeferredContentStyle$1 && DeferredContentStyle$1.getStyleSheet ? DeferredContentStyle$1.getStyleSheet(undefined, styleProps) : '',DividerStyle$1 && DividerStyle$1.getStyleSheet ? DividerStyle$1.getStyleSheet(undefined, styleProps) : '',FieldsetStyle$1 && FieldsetStyle$1.getStyleSheet ? FieldsetStyle$1.getStyleSheet(undefined, styleProps) : '',PanelStyle$1 && PanelStyle$1.getStyleSheet ? PanelStyle$1.getStyleSheet(undefined, styleProps) : '',ScrollPanelStyle$1 && ScrollPanelStyle$1.getStyleSheet ? ScrollPanelStyle$1.getStyleSheet(undefined, styleProps) : '',SplitterStyle$1 && SplitterStyle$1.getStyleSheet ? SplitterStyle$1.getStyleSheet(undefined, styleProps) : '',SplitterPanelStyle$1 && SplitterPanelStyle$1.getStyleSheet ? SplitterPanelStyle$1.getStyleSheet(undefined, styleProps) : '',StepperStyle$1 && StepperStyle$1.getStyleSheet ? StepperStyle$1.getStyleSheet(undefined, styleProps) : '',StepperPanelStyle$1 && StepperPanelStyle$1.getStyleSheet ? StepperPanelStyle$1.getStyleSheet(undefined, styleProps) : '',TabViewStyle$1 && TabViewStyle$1.getStyleSheet ? TabViewStyle$1.getStyleSheet(undefined, styleProps) : '',TabPanelStyle$1 && TabPanelStyle$1.getStyleSheet ? TabPanelStyle$1.getStyleSheet(undefined, styleProps) : '',ToolbarStyle$1 && ToolbarStyle$1.getStyleSheet ? ToolbarStyle$1.getStyleSheet(undefined, styleProps) : '',ConfirmDialogStyle$1 && ConfirmDialogStyle$1.getStyleSheet ? ConfirmDialogStyle$1.getStyleSheet(undefined, styleProps) : '',ConfirmPopupStyle$1 && ConfirmPopupStyle$1.getStyleSheet ? ConfirmPopupStyle$1.getStyleSheet(undefined, styleProps) : '',DialogStyle$1 && DialogStyle$1.getStyleSheet ? DialogStyle$1.getStyleSheet(undefined, styleProps) : '',DynamicDialogStyle$1 && DynamicDialogStyle$1.getStyleSheet ? DynamicDialogStyle$1.getStyleSheet(undefined, styleProps) : '',OverlayPanelStyle$1 && OverlayPanelStyle$1.getStyleSheet ? OverlayPanelStyle$1.getStyleSheet(undefined, styleProps) : '',SidebarStyle$1 && SidebarStyle$1.getStyleSheet ? SidebarStyle$1.getStyleSheet(undefined, styleProps) : '',FileUploadStyle$1 && FileUploadStyle$1.getStyleSheet ? FileUploadStyle$1.getStyleSheet(undefined, styleProps) : '',BreadcrumbStyle$1 && BreadcrumbStyle$1.getStyleSheet ? BreadcrumbStyle$1.getStyleSheet(undefined, styleProps) : '',ContextMenuStyle$1 && ContextMenuStyle$1.getStyleSheet ? ContextMenuStyle$1.getStyleSheet(undefined, styleProps) : '',DockStyle$1 && DockStyle$1.getStyleSheet ? DockStyle$1.getStyleSheet(undefined, styleProps) : '',MenuStyle$1 && MenuStyle$1.getStyleSheet ? MenuStyle$1.getStyleSheet(undefined, styleProps) : '',MenubarStyle$1 && MenubarStyle$1.getStyleSheet ? MenubarStyle$1.getStyleSheet(undefined, styleProps) : '',MegaMenuStyle$1 && MegaMenuStyle$1.getStyleSheet ? MegaMenuStyle$1.getStyleSheet(undefined, styleProps) : '',PanelMenuStyle$1 && PanelMenuStyle$1.getStyleSheet ? PanelMenuStyle$1.getStyleSheet(undefined, styleProps) : '',StepsStyle$1 && StepsStyle$1.getStyleSheet ? StepsStyle$1.getStyleSheet(undefined, styleProps) : '',TabMenuStyle$1 && TabMenuStyle$1.getStyleSheet ? TabMenuStyle$1.getStyleSheet(undefined, styleProps) : '',TieredMenuStyle$1 && TieredMenuStyle$1.getStyleSheet ? TieredMenuStyle$1.getStyleSheet(undefined, styleProps) : '',ChartStyle$1 && ChartStyle$1.getStyleSheet ? ChartStyle$1.getStyleSheet(undefined, styleProps) : '',MessageStyle$1 && MessageStyle$1.getStyleSheet ? MessageStyle$1.getStyleSheet(undefined, styleProps) : '',InlineMessageStyle$1 && InlineMessageStyle$1.getStyleSheet ? InlineMessageStyle$1.getStyleSheet(undefined, styleProps) : '',ToastStyle$1 && ToastStyle$1.getStyleSheet ? ToastStyle$1.getStyleSheet(undefined, styleProps) : '',ImageStyle$1 && ImageStyle$1.getStyleSheet ? ImageStyle$1.getStyleSheet(undefined, styleProps) : '',AvatarStyle$1 && AvatarStyle$1.getStyleSheet ? AvatarStyle$1.getStyleSheet(undefined, styleProps) : '',AvatarGroupStyle$1 && AvatarGroupStyle$1.getStyleSheet ? AvatarGroupStyle$1.getStyleSheet(undefined, styleProps) : '',BadgeStyle$1 && BadgeStyle$1.getStyleSheet ? BadgeStyle$1.getStyleSheet(undefined, styleProps) : '',BlockUIStyle$1 && BlockUIStyle$1.getStyleSheet ? BlockUIStyle$1.getStyleSheet(undefined, styleProps) : '',ChipStyle$1 && ChipStyle$1.getStyleSheet ? ChipStyle$1.getStyleSheet(undefined, styleProps) : '',InplaceStyle$1 && InplaceStyle$1.getStyleSheet ? InplaceStyle$1.getStyleSheet(undefined, styleProps) : '',MeterGroupStyle$1 && MeterGroupStyle$1.getStyleSheet ? MeterGroupStyle$1.getStyleSheet(undefined, styleProps) : '',ScrollTopStyle$1 && ScrollTopStyle$1.getStyleSheet ? ScrollTopStyle$1.getStyleSheet(undefined, styleProps) : '',SkeletonStyle$1 && SkeletonStyle$1.getStyleSheet ? SkeletonStyle$1.getStyleSheet(undefined, styleProps) : '',ProgressBarStyle$1 && ProgressBarStyle$1.getStyleSheet ? ProgressBarStyle$1.getStyleSheet(undefined, styleProps) : '',ProgressSpinnerStyle$1 && ProgressSpinnerStyle$1.getStyleSheet ? ProgressSpinnerStyle$1.getStyleSheet(undefined, styleProps) : '',TagStyle$1 && TagStyle$1.getStyleSheet ? TagStyle$1.getStyleSheet(undefined, styleProps) : '',TerminalStyle$1 && TerminalStyle$1.getStyleSheet ? TerminalStyle$1.getStyleSheet(undefined, styleProps) : '',BadgeDirectiveStyle$1 && BadgeDirectiveStyle$1.getStyleSheet ? BadgeDirectiveStyle$1.getStyleSheet(undefined, styleProps) : '',TooltipStyle$1 && TooltipStyle$1.getStyleSheet ? TooltipStyle$1.getStyleSheet(undefined, styleProps) : '',RippleStyle$1 && RippleStyle$1.getStyleSheet ? RippleStyle$1.getStyleSheet(undefined, styleProps) : '',StyleClassStyle$1 && StyleClassStyle$1.getStyleSheet ? StyleClassStyle$1.getStyleSheet(undefined, styleProps) : '',FocusTrapStyle$1 && FocusTrapStyle$1.getStyleSheet ? FocusTrapStyle$1.getStyleSheet(undefined, styleProps) : '',AnimateOnScrollStyle$1 && AnimateOnScrollStyle$1.getStyleSheet ? AnimateOnScrollStyle$1.getStyleSheet(undefined, styleProps) : ''
].join('');

const defineNitroPlugin = (def) => def;
const _LYShc9h9Ik = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    html.head.unshift(stylesToTop);
    html.head.push(styles);
  });
});

const plugins = [
  _voUPLyaHfs,
_LYShc9h9Ik
];

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.path.endsWith("/favicon.ico")) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => {
  return Array.isArray(value) ? value : [void 0, null].includes(value) ? [] : [value];
};

const arrayParams = ["sort", "where", "only", "without"];
function createQuery(fetcher, opts = {}) {
  const queryParams = {};
  for (const key of Object.keys(opts.initialParams || {})) {
    queryParams[key] = arrayParams.includes(key) ? ensureArray(opts.initialParams[key]) : opts.initialParams[key];
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const resolveResult = (result) => {
    if (opts.legacy) {
      if (result?.surround) {
        return result.surround;
      }
      if (!result) {
        return result;
      }
      if (result?.dirConfig) {
        result.result = {
          _path: result.dirConfig?._path,
          ...result.result,
          _dir: result.dirConfig
        };
      }
      return result?._path || Array.isArray(result) || !Object.prototype.hasOwnProperty.call(result, "result") ? result : result?.result;
    }
    return result;
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query).then(resolveResult),
    findOne: () => fetcher($set("first")(true)).then(resolveResult),
    count: () => fetcher($set("count")(true)).then(resolveResult),
    // locale
    locale: (_locale) => query.where({ _locale }),
    withSurround: $set("surround", (surroundQuery, options) => ({ query: surroundQuery, ...options })),
    withDirConfig: () => $set("dirConfig")(true)
  };
  if (opts.legacy) {
    query.findSurround = (surroundQuery, options) => {
      return query.withSurround(surroundQuery, options).find().then(resolveResult);
    };
    return query;
  }
  return query;
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler()(
    postprocess(
      parse(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

const useProcessorPlugins = async (processor, plugins = {}) => {
  const toUse = Object.entries(plugins).filter((p) => p[1] !== false);
  for (const plugin of toUse) {
    const instance = plugin[1].instance || await import(
      /* @vite-ignore */
      plugin[0]
    ).then((m) => m.default || m);
    processor.use(instance, plugin[1].options);
  }
};

const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
const validateProp = (attribute, value) => {
  if (attribute.startsWith("on")) {
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return !unsafeLinkPrefix.some((prefix) => value.toLowerCase().startsWith(prefix));
  }
  return true;
};
const validateProps = (type, props) => {
  if (!props) {
    return {};
  }
  props = Object.fromEntries(
    Object.entries(props).filter(([name, value]) => {
      const isValid = validateProp(name, value);
      if (!isValid) {
        console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${name}="${value}"`);
      }
      return isValid;
    })
  );
  if (type === "pre") {
    if (typeof props.highlights === "string") {
      props.highlights = props.highlights.split(" ").map((i) => parseInt(i));
    }
  }
  return props;
};

function compileHast(options = {}) {
  const slugs = new Slugger();
  function compileToJSON(node, parent) {
    if (node.type === "root") {
      return {
        type: "root",
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "element") {
      if (node.tagName === "p" && node.children.every((child) => child.type === "text" && /^\s*$/.test(child.value))) {
        return null;
      }
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children?.flatMap((child) => {
          if (child.type === "element" && child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName?.match(/^h\d$/)) {
        node.properties = node.properties || {};
        node.properties.id = String(node.properties?.id || slugs.slug(toString$1(node))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1");
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      const children = (node.tagName === "template" && node.content?.children.length ? node.content.children : node.children).map((child) => compileToJSON(child, node)).filter(Boolean);
      return {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.tagName, node.properties),
        children
      };
    }
    if (node.type === "text") {
      if (node.value !== "\n" || parent?.properties?.emptyLinePlaceholder) {
        return {
          type: "text",
          value: node.value
        };
      }
    }
    if (options.keepComments && node.type === "comment") {
      return {
        type: "comment",
        value: node.value
      };
    }
    return null;
  }
  this.Compiler = (tree) => {
    const body = compileToJSON(tree);
    let excerpt = void 0;
    const excerptIndex = tree.children.findIndex((node) => node.type === "comment" && node.value?.trim() === "more");
    if (excerptIndex !== -1) {
      excerpt = compileToJSON({
        type: "root",
        children: tree.children.slice(0, excerptIndex)
      });
      if (excerpt.children.find((node) => node.type === "element" && node.tag === "pre")) {
        const lastChild = body.children[body.children.length - 1];
        if (lastChild.type === "element" && lastChild.tag === "style") {
          excerpt.children.push(lastChild);
        }
      }
    }
    return {
      body,
      excerpt
    };
  };
}

function emphasis(state, node) {
  const result = {
    type: "element",
    tagName: "em",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function parseThematicBlock(lang) {
  if (!lang?.trim()) {
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/{([^}]*)}/);
  const filenameMatches = lang.match(/\[((\\]|[^\]])*)\]/);
  const meta = lang.replace(languageMatches?.[0] ?? "", "").replace(highlightTokensMatches?.[0] ?? "", "").replace(filenameMatches?.[0] ?? "", "").trim();
  return {
    language: languageMatches?.[0] || void 0,
    highlights: parseHighlightedLines(highlightTokensMatches?.[1] || void 0),
    // https://github.com/nuxt/content/pull/2169
    filename: filenameMatches?.[1].replace(/\\]/g, "]") || void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}

const code = (state, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename, meta } = parseThematicBlock(lang);
  const value = node.value ? detab(node.value + "\n") : "";
  let result = {
    type: "element",
    tagName: "code",
    properties: { __ignoreMap: "" },
    children: [{ type: "text", value }]
  };
  if (meta) {
    result.data = {
      // @ts-ignore
      meta
    };
  }
  state.patch(node, result);
  result = state.applyData(node, result);
  const properties = {
    language,
    filename,
    highlights,
    meta,
    code: value
  };
  if (language) {
    properties.className = ["language-" + language];
  }
  result = { type: "element", tagName: "pre", properties, children: [result] };
  state.patch(node, result);
  return result;
};

function html(state, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (state.dangerous || state.options?.allowDangerousHtml) {
    const result = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }
  return void 0;
}

function link$1(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function list(state, node) {
  const properties = {};
  const results = state.all(node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    properties.start = node.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    properties.className = ["contains-task-list"];
  }
  const result = {
    type: "element",
    tagName: node.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(state, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return state.all(node);
    }
  }
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function image(state, node) {
  const properties = { ...node.attributes, src: normalizeUri(node.url) };
  if (node.alt !== null && node.alt !== void 0) {
    properties.alt = node.alt;
  }
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node, result);
  return state.applyData(node, result);
}

function strong(state, node) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function inlineCode(state, node) {
  const language = node.attributes?.language || node.attributes?.lang;
  const text = { type: "text", value: node.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node, text);
  const result = {
    type: "element",
    tagName: "code",
    properties: node.attributes || {},
    children: [text]
  };
  const classes = (result.properties.class || "").split(" ");
  delete result.properties.class;
  if (language) {
    result.properties.language = language;
    delete result.properties.lang;
    classes.push("language-" + language);
  }
  result.properties.className = classes.join(" ");
  state.patch(node, result);
  return state.applyData(node, result);
}

function containerComponent(state, node) {
  const result = {
    type: "element",
    tagName: node.name,
    properties: {
      ...node.attributes,
      ...node.data?.hProperties
    },
    children: state.all(node)
  };
  state.patch(node, result);
  result.attributes = node.attributes;
  result.fmAttributes = node.fmAttributes;
  return result;
}

const handlers$1 = {
  emphasis,
  code,
  link: link$1,
  paragraph,
  html,
  list,
  image,
  strong,
  inlineCode,
  containerComponent
};

const defaults = {
  remark: {
    plugins: {
      "remark-mdc": {
        instance: remarkMDC
      },
      "remark-emoji": {
        instance: remarkEmoji
      },
      "remark-gfm": {
        instance: remarkGFM
      }
    }
  },
  rehype: {
    options: {
      // @ts-ignore
      handlers: handlers$1,
      allowDangerousHtml: true
    },
    plugins: {
      "rehype-external-links": {
        instance: rehypeExternalLinks
      },
      "rehype-sort-attribute-values": {
        instance: rehypeSortAttributeValues
      },
      "rehype-sort-attributes": {
        instance: rehypeSortAttributes
      },
      "rehype-raw": {
        instance: rehypeRaw,
        options: {
          passThrough: ["element"]
        }
      }
    }
  },
  highlight: false,
  toc: {
    searchDepth: 2,
    depth: 2
  }
};

function flattenNodeText(node) {
  if (node.type === "comment") {
    return "";
  }
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value || "";
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).filter(Boolean).join("");
  }
  return "";
}

let moduleOptions;
let generatedMdcConfigs;
const createMarkdownParser = async (inlineOptions = {}) => {
  if (!moduleOptions) {
    moduleOptions = await Promise.resolve().then(function () { return mdcImports; }).catch(() => ({}));
  }
  if (!generatedMdcConfigs) {
    generatedMdcConfigs = await Promise.resolve().then(function () { return mdcConfigs; }).then((r) => r.getMdcConfigs()).catch(() => []);
  }
  const mdcConfigs$1 = [
    ...generatedMdcConfigs || [],
    ...inlineOptions.configs || []
  ];
  if (inlineOptions.highlight != null && inlineOptions.highlight != false && inlineOptions.highlight.highlighter !== void 0 && typeof inlineOptions.highlight.highlighter !== "function") {
    console.warn("[@nuxtjs/mdc] `highlighter` passed to `parseMarkdown` is should be a function, but got " + JSON.stringify(inlineOptions.highlight.highlighter) + ", ignored.");
    inlineOptions = {
      ...inlineOptions,
      highlight: {
        ...inlineOptions.highlight
      }
    };
    delete inlineOptions.highlight.highlighter;
  }
  const options = defu$1(inlineOptions, {
    remark: { plugins: moduleOptions?.remarkPlugins },
    rehype: { plugins: moduleOptions?.rehypePlugins },
    highlight: moduleOptions?.highlight
  }, defaults);
  if (options.rehype?.plugins?.highlight) {
    options.rehype.plugins.highlight.options = {
      ...options.rehype.plugins.highlight.options || {},
      ...options.highlight || {}
    };
  }
  let processor = unified();
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.pre?.(processor) || processor;
  }
  processor.use(remarkParse);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.remark?.(processor) || processor;
  }
  await useProcessorPlugins(processor, options.remark?.plugins);
  processor.use(remark2rehype, options.rehype?.options);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.rehype?.(processor) || processor;
  }
  await useProcessorPlugins(processor, options.rehype?.plugins);
  processor.use(compileHast, options);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.post?.(processor) || processor;
  }
  return async (md) => {
    const { content, data: frontmatter } = await parseFrontMatter(md);
    const processedFile = await processor.process({ value: content, data: frontmatter });
    const result = processedFile.result;
    const data = Object.assign(
      contentHeading(result.body),
      frontmatter,
      processedFile?.data || {}
    );
    let toc;
    if (data.toc !== false) {
      const tocOption = defu$1(data.toc || {}, options.toc);
      toc = generateToc(result.body, tocOption);
    }
    return {
      data,
      body: result.body,
      excerpt: result.excerpt,
      toc
    };
  };
};
const parseMarkdown = async (md, inlineOptions = {}) => {
  const parser = await createMarkdownParser(inlineOptions);
  return parser(md);
};
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type === "element" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (id) => {
  const [_source, ...parts] = id.split(":");
  const [, filename, _extension] = parts[parts.length - 1]?.match(/(.*)\.([^.]+)$/) || [];
  if (filename) {
    parts[parts.length - 1] = filename;
  }
  const _path = (parts || []).join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en", respectPathCase = false } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"), { respectPathCase });
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: content._draft ?? isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true, respectPathCase = false } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: !respectPathCase })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const highlightOptions = options.highlight ? {
      ...options.highlight,
      // Pass only when it's an function. String values are handled by `@nuxtjs/mdc`
      highlighter: typeof options.highlight?.highlighter === "function" ? options.highlight.highlighter : void 0
    } : void 0;
    const parsed = await parseMarkdown(content, {
      ...config,
      highlight: highlightOptions,
      remark: {
        plugins: config.remarkPlugins
      },
      rehype: {
        options: {
          handlers: {
            link
          }
        },
        plugins: config.rehypePlugins
      },
      toc: config.toc
    });
    return {
      ...parsed.data,
      excerpt: parsed.excerpt,
      body: {
        ...parsed.body,
        toc: parsed.toc
      },
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        options: plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}
function link(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function normalizeLink(link2) {
  const match = link2.match(/#.+$/);
  const hash = match ? match[0] : "";
  if (link2.replace(/#.+$/, "").endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(".md" + hash, ""), { forceLeadingSlash: false }) + hash;
  } else {
    return link2;
  }
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: (_id, content) => {
    const { data } = parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('file://A:/workspace/weeser.github.io/node_modules/json5/lib/index.js').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr$1(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

function makeIgnored(ignores) {
  const rxAll = ["/\\.", "/-", ...ignores.filter((p) => p)].map((p) => new RegExp(p));
  return function isIgnored(key) {
    const path = "/" + key.replace(/:/g, "/");
    return rxAll.some((rx) => rx.test(path));
  };
}

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or match every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before ?? 1;
    after = after ?? 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const matchingPipelines = [
    // Conditions
    (state, params) => {
      const filtered = state.result.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery)));
      return {
        ...state,
        result: filtered,
        total: filtered.length
      };
    },
    // Sort data
    (state, params) => ensureArray(params.sort).forEach((options) => sortList(state.result, options)),
    function fetchSurround(state, params, db) {
      if (params.surround) {
        let _surround = surround(state.result?.length === 1 ? db : state.result, params.surround);
        _surround = apply(withoutKeys(params.without))(_surround);
        _surround = apply(withKeys(params.only))(_surround);
        state.surround = _surround;
      }
      return state;
    }
  ];
  const transformingPiples = [
    // Skip first items
    (state, params) => {
      if (params.skip) {
        return {
          ...state,
          result: state.result.slice(params.skip),
          skip: params.skip
        };
      }
    },
    // Pick first items
    (state, params) => {
      if (params.limit) {
        return {
          ...state,
          result: state.result.slice(0, params.limit),
          limit: params.limit
        };
      }
    },
    function fetchDirConfig(state, params, db) {
      if (params.dirConfig) {
        const path = state.result[0]?._path || params.where?.find((w) => w._path)?._path;
        if (typeof path === "string") {
          const dirConfig = db.find((item) => item._path === joinURL(path, "_dir"));
          if (dirConfig) {
            state.dirConfig = { _path: dirConfig._path, ...withoutKeys(["_"])(dirConfig) };
          }
        }
      }
      return state;
    },
    // Remove unwanted fields
    (state, params) => ({
      ...state,
      result: apply(withoutKeys(params.without))(state.result)
    }),
    // Select only wanted fields
    (state, params) => ({
      ...state,
      result: apply(withKeys(params.only))(state.result)
    })
  ];
  return async (query) => {
    const db = await getContentsList();
    const params = query.params();
    const result1 = {
      result: db,
      limit: 0,
      skip: 0,
      total: db.length
    };
    const matchedData = matchingPipelines.reduce(($data, pipe) => pipe($data, params, db) || $data, result1);
    if (params.count) {
      return {
        result: matchedData.result.length
      };
    }
    const result = transformingPiples.reduce(($data, pipe) => pipe($data, params, db) || $data, matchedData);
    if (params.first) {
      return {
        ...omit(["skip", "limit", "total"])(result),
        result: result.result[0]
      };
    }
    return result;
  };
}

const isPreview = (event) => {
  const previewToken = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && !params.surround && !params.dirConfig && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const keyChunks = [...chunksFromArray(keys, 10)];
    const contents = [];
    for await (const chunk of keyChunks) {
      const result = await Promise.all(chunk.map((key) => getContent(event, key)));
      contents.push(...result);
    }
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const isIgnored = makeIgnored(contentConfig.ignores);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || isIgnored(key)) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
function* chunksFromArray(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
const getContentsList = /* @__PURE__ */ (() => {
  let pendingContentsListPromise = null;
  const _getContentsList = async (event, prefix) => {
    const keys = await getContentsIds(event, prefix);
    const keyChunks = [...chunksFromArray(keys, 10)];
    const contents = [];
    for (const chunk of keyChunks) {
      const result = await Promise.all(chunk.map((key) => getContent(event, key)));
      contents.push(...result);
    }
    return contents;
  };
  return (event, prefix) => {
    if (event.context.__contentList) {
      return event.context.__contentList;
    }
    if (!pendingContentsListPromise) {
      pendingContentsListPromise = _getContentsList(event, prefix);
      pendingContentsListPromise.then((result) => {
        event.context.__contentList = result;
        pendingContentsListPromise = null;
      });
    }
    return pendingContentsListPromise;
  };
})();
const pendingPromises = {};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  const meta = await sourceStorage.getMeta(id);
  const mtime = meta.mtime;
  const size = meta.size || 0;
  const hash$1 = hash({
    // Last modified time
    mtime,
    // File size
    size,
    // Add Content version to the hash, to revalidate the cache on content update
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  if (!pendingPromises[id + hash$1]) {
    pendingPromises[id + hash$1] = new Promise(async (resolve) => {
      const body = await sourceStorage.getItem(id);
      if (body === null) {
        return resolve({ _id: contentId, body: null });
      }
      const parsed = await parseContent(contentId, body);
      await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
      });
      resolve(parsed);
      delete pendingPromises[id + hash$1];
    });
  }
  return pendingPromises[id + hash$1];
};
const parseContent = async (id, content, opts = {}) => {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: {
        ...contentConfig.markdown,
        highlight: contentConfig.highlight
      },
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales,
        respectPathCase: contentConfig.respectPathCase
      }
    }
  );
  const file = { _id: id, body: typeof content === "string" ? content.replace(/\r\n|\r/g, "\n") : content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
};
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, query, ...pathParts) {
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  const queryBuilder = advanceQuery ? createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: false }) : createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: true });
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (contentConfig.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: contentConfig.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params?.qid?.replace(/.json$/, "");
  const query = getQuery$1(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid].where && !Array.isArray(memory[qid].where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (qid && memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _NQPjHV = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  if (query.first) {
    let contentQuery = serverQueryContent(event, query);
    if (!advanceQuery) {
      contentQuery = contentQuery.withDirConfig();
    }
    const content = await contentQuery.findOne();
    const _result = advanceQuery ? content?.result : content;
    const missing = !_result && !content?.dirConfig?.navigation?.redirect && !content?._dir?.navigation?.redirect;
    if (missing) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  if (query.count) {
    return serverQueryContent(event, query).count();
  }
  return serverQueryContent(event, query).find();
});

const _h8gOB1 = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents: content.experimental.cacheContents ? contents : [],
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().public.content;
  if (navigation === false) {
    return [];
  }
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  nav.forEach((item) => {
    item._file = item._file.split(".").slice(0, -1).join(".");
  });
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _5u5Wog = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = (dirConfigs?.result || dirConfigs).reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents?.result || contents, configs);
});

const _lazy_ku5uAH = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/__nuxt_error', handler: _lazy_ku5uAH, lazy: true, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid/**:params', handler: _NQPjHV, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _NQPjHV, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _NQPjHV, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.json', handler: _h8gOB1, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _5u5Wog, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _5u5Wog, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _5u5Wog, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_ku5uAH, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (a) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template$1 = _template;

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const remarkPlugins = {
};

const rehypePlugins = {
};

const highlight = {};

const mdcImports = /*#__PURE__*/Object.freeze({
  __proto__: null,
  highlight: highlight,
  rehypePlugins: rehypePlugins,
  remarkPlugins: remarkPlugins
});

let configs;
function getMdcConfigs () {
if (!configs) {
  configs = Promise.all([
  ]);
}
return configs
}

const mdcConfigs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getMdcConfigs: getMdcConfigs
});

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = [];

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[{"id":"theme-link","rel":"stylesheet","href":"/themes/aura-light-teal/theme.css"}],"style":[],"script":[],"noscript":[]};

const appRootId = "__nuxt";

const appRootTag = "div";

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://A:/workspace/weeser.github.io/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file://A:/workspace/weeser.github.io/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag}${` id="${appRootId}"` }>${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "");
  const options = {
    manifest,
    renderToString: () => `<${appRootTag}${` id="${appRootId}"` }>${spaTemplate}</${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set()
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = false ;
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !isRenderingIsland;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    modules: /* @__PURE__ */ new Set(),
    set _registeredComponents(value) {
      this.modules = value;
    },
    get _registeredComponents() {
      return this.modules;
    },
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  head.push({ style: inlinedStyles });
  {
    const link = [];
    for (const style in styles) {
      const resource = styles[style];
      if ("inline" in getQuery(resource.file)) {
        continue;
      }
      {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) });
      }
    }
    head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS && !isRenderingIsland) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && !isRenderingIsland) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags, ssrContext.styles]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [_rendered.html],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    type: "application/json",
    id: opts.id,
    innerHTML: contents,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
