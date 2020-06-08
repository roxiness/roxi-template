
/**
 * @sveltech/routify 1.8.0-beta.23
 * File generated Mon Jun 08 2020 23:07:25 GMT+0200 (GMT+02:00)
 */

export const __version = "1.8.0-beta.23"
export const __timestamp = "2020-06-08T21:07:25.299Z"

//buildRoutes
import { buildClientTree } from "roxi/routify"

//imports
import __layout from 'src/pages/_layout.svelte'
import _about from 'src/pages/about.svelte'
import _index from 'src/pages/index.svelte'

//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_layout.svelte",
      "filepath": "/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/jakob/sandbox/svelte/dev/roxi-template/src/pages/_layout.svelte",
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/",
      "id": "__layout",
      "relativeToRoutify": "src/pages/_layout.svelte",
      "component": () => __layout
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "about.svelte",
      "filepath": "/about.svelte",
      "name": "about",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/jakob/sandbox/svelte/dev/roxi-template/src/pages/about.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/about",
      "id": "_about",
      "relativeToRoutify": "src/pages/about.svelte",
      "component": () => _about
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/jakob/sandbox/svelte/dev/roxi-template/src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/index",
      "id": "_index",
      "relativeToRoutify": "src/pages/index.svelte",
      "component": () => _index
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "preload": false,
    "prerender": true,
    "precache-order": false,
    "precache-proximity": true,
    "recursive": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

