!function(e) {
  "use strict";
  const t = [{
      id: "mank",
      scopeName: "source.mank",
      path: "mank.tmLanguage.json",
  },
  {
    id: "LLVM",
    scopeName: "source.llvm",
    path: "llvm.tmLanguage.json",
  },
  {
    id: "cpp",
    scopeName: "source.cpp",
    path: "cpp.tmLanguage.json"
  },
  {
    id: "rust",
    scopeName: "source.rust",
    path: "rust.tmLanguage.json"
  },
  {
    id: "c",
    scopeName: "source.c",
    path: "c.tmLanguage.json"
  },
  {
    id: "javascript",
    scopeName: "source.js",
    path: "javascript.tmLanguage.json",
    aliases: ["js"]
  },
  {
    id: "java",
    scopeName: "source.java",
    path: "java.tmLanguage.json"
  },
  {
    id: "python",
    scopeName: "source.python",
    path: "python.tmLanguage.json",
    aliases: ["py"]
  },
/*
  {
      id: "abap",
      scopeName: "source.abap",
      path: "abap.tmLanguage.json"
  }, {
      id: "actionscript-3",
      scopeName: "source.actionscript.3",
      path: "actionscript-3.tmLanguage.json"
  }, {
      id: "ada",
      scopeName: "source.ada",
      path: "ada.tmLanguage.json"
  }, {
      id: "apex",
      scopeName: "source.apex",
      path: "apex.tmLanguage.json"
  }, {
      id: "applescript",
      scopeName: "source.applescript",
      path: "applescript.tmLanguage.json"
  }, {
      id: "asm",
      scopeName: "source.asm.x86_64",
      path: "asm.tmLanguage.json"
  }, {
      id: "asp-net-razor",
      scopeName: "text.aspnetcorerazor",
      path: "asp-net-razor.tmLanguage.json"
  }, {
      id: "awk",
      scopeName: "source.awk",
      path: "awk.tmLanguage.json"
  }, {
      id: "bat",
      scopeName: "source.batchfile",
      path: "bat.tmLanguage.json",
      aliases: ["batch"]
  }, {
      id: "c",
      scopeName: "source.c",
      path: "c.tmLanguage.json"
  }, {
      id: "clojure",
      scopeName: "source.clojure",
      path: "clojure.tmLanguage.json",
      aliases: ["clj"]
  }, {
      id: "cobol",
      scopeName: "source.cobol",
      path: "cobol.tmLanguage.json"
  }, {
      id: "coffee",
      scopeName: "source.coffee",
      path: "coffee.tmLanguage.json"
  }, {
      id: "crystal",
      scopeName: "source.crystal",
      path: "crystal.tmLanguage.json"
  }, {
      id: "csharp",
      scopeName: "source.cs",
      path: "csharp.tmLanguage.json",
      aliases: ["c#"]
  }, {
      id: "css",
      scopeName: "source.css",
      path: "css.tmLanguage.json"
  }, {
      id: "d",
      scopeName: "source.d",
      path: "d.tmLanguage.json"
  }, {
      id: "dart",
      scopeName: "source.dart",
      path: "dart.tmLanguage.json"
  }, {
      id: "diff",
      scopeName: "source.diff",
      path: "diff.tmLanguage.json"
  }, {
      id: "dockerfile",
      scopeName: "source.dockerfile",
      path: "dockerfile.tmLanguage.json"
  }, {
      id: "elixir",
      scopeName: "source.elixir",
      path: "elixir.tmLanguage.json"
  }, {
      id: "elm",
      scopeName: "source.elm",
      path: "elm.tmLanguage.json"
  }, {
      id: "erlang",
      scopeName: "source.erlang",
      path: "erlang.tmLanguage.json"
  }, {
      id: "fsharp",
      scopeName: "source.fsharp",
      path: "fsharp.tmLanguage.json",
      aliases: ["f#"]
  }, {
      id: "git-commit",
      scopeName: "text.git-commit",
      path: "git-commit.tmLanguage.json"
  }, {
      id: "git-rebase",
      scopeName: "text.git-rebase",
      path: "git-rebase.tmLanguage.json"
  }, {
      id: "go",
      scopeName: "source.go",
      path: "go.tmLanguage.json"
  }, {
      id: "graphql",
      scopeName: "source.graphql",
      path: "graphql.tmLanguage.json"
  }, {
      id: "groovy",
      scopeName: "source.groovy",
      path: "groovy.tmLanguage.json"
  }, {
      id: "hack",
      scopeName: "source.hack",
      path: "hack.tmLanguage.json"
  }, {
      id: "haml",
      scopeName: "text.haml",
      path: "haml.tmLanguage.json"
  }, {
      id: "handlebars",
      scopeName: "text.html.handlebars",
      path: "handlebars.tmLanguage.json",
      aliases: ["hbs"]
  }, {
      id: "haskell",
      scopeName: "source.haskell",
      path: "haskell.tmLanguage.json"
  }, {
      id: "hcl",
      scopeName: "source.hcl",
      path: "hcl.tmLanguage.json"
  }, {
      id: "hlsl",
      scopeName: "source.hlsl",
      path: "hlsl.tmLanguage.json"
  }, {
      id: "html-ruby-erb",
      scopeName: "text.html.erb",
      path: "html-ruby-erb.tmLanguage.json",
      aliases: ["erb"]
  }, {
      id: "html",
      scopeName: "text.html.basic",
      path: "html.tmLanguage.json"
  }, {
      id: "ini",
      scopeName: "source.ini",
      path: "ini.tmLanguage.json"
  }, {
      id: "java",
      scopeName: "source.java",
      path: "java.tmLanguage.json"
  }, {
      id: "javascript",
      scopeName: "source.js",
      path: "javascript.tmLanguage.json",
      aliases: ["js"]
  }, {
      id: "jinja-html",
      scopeName: "text.html.jinja",
      path: "jinja-html.tmLanguage.json"
  }, {
      id: "jinja",
      scopeName: "source.jinja",
      path: "jinja.tmLanguage.json"
  }, {
      id: "json",
      scopeName: "source.json",
      path: "json.tmLanguage.json"
  }, {
      id: "jsonc",
      scopeName: "source.json.comments",
      path: "jsonc.tmLanguage.json"
  }, {
      id: "jsonnet",
      scopeName: "source.jsonnet",
      path: "jsonnet.tmLanguage.json"
  }, {
      id: "jsx",
      scopeName: "documentation.injection.js.jsx",
      path: "jsx.tmLanguage.json"
  }, {
      id: "julia",
      scopeName: "source.julia",
      path: "julia.tmLanguage.json"
  }, {
      id: "kotlin",
      scopeName: "source.kotlin",
      path: "kotlin.tmLanguage.json"
  }, {
      id: "latex",
      scopeName: "text.tex.latex",
      path: "latex.tmLanguage.json"
  }, {
      id: "less",
      scopeName: "source.css.less",
      path: "less.tmLanguage.json"
  }, {
      id: "lisp",
      scopeName: "source.lisp",
      path: "lisp.tmLanguage.json"
  }, {
      id: "logo",
      scopeName: "source.logo",
      path: "logo.tmLanguage.json"
  }, {
      id: "lua",
      scopeName: "source.lua",
      path: "lua.tmLanguage.json"
  }, {
      id: "makefile",
      scopeName: "source.makefile",
      path: "makefile.tmLanguage.json"
  }, {
      id: "markdown",
      scopeName: "text.html.markdown",
      path: "markdown.tmLanguage.json",
      aliases: ["md"]
  }, {
      id: "matlab",
      scopeName: "source.matlab",
      path: "matlab.tmLanguage.json"
  }, {
      id: "nix",
      scopeName: "source.nix",
      path: "nix.tmLanguage.json"
  }, {
      id: "objective-c",
      scopeName: "source.objcpp",
      path: "objective-c.tmLanguage.json",
      aliases: ["objc"]
  }, {
      id: "ocaml",
      scopeName: "source.ocaml",
      path: "ocaml.tmLanguage.json"
  }, {
      id: "pascal",
      scopeName: "source.pascal",
      path: "pascal.tmLanguage.json"
  }, {
      id: "perl",
      scopeName: "source.perl",
      path: "perl.tmLanguage.json"
  }, {
      id: "perl6",
      scopeName: "source.perl.6",
      path: "perl6.tmLanguage.json"
  }, {
      id: "php-html",
      scopeName: "text.html.php",
      path: "php-html.tmLanguage.json"
  }, {
      id: "php",
      scopeName: "source.php",
      path: "php.tmLanguage.json"
  }, {
      id: "pls",
      scopeName: "source.plsql.oracle",
      path: "pls.tmLanguage.json"
  }, {
      id: "postcss",
      scopeName: "source.css.postcss",
      path: "postcss.tmLanguage.json"
  }, {
      id: "powershell",
      scopeName: "source.powershell",
      path: "powershell.tmLanguage.json",
      aliases: ["ps", "ps1"]
  }, {
      id: "prolog",
      scopeName: "source.prolog",
      path: "prolog.tmLanguage.json"
  }, {
      id: "pug",
      scopeName: "text.pug",
      path: "pug.tmLanguage.json",
      aliases: ["jade"]
  }, {
      id: "puppet",
      scopeName: "source.puppet",
      path: "puppet.tmLanguage.json"
  }, {
      id: "purescript",
      scopeName: "source.purescript",
      path: "purescript.tmLanguage.json"
  }, {
      id: "python",
      scopeName: "source.python",
      path: "python.tmLanguage.json",
      aliases: ["py"]
  }, {
      id: "r",
      scopeName: "source.r",
      path: "r.tmLanguage.json"
  }, {
      id: "razor",
      scopeName: "text.html.cshtml",
      path: "razor.tmLanguage.json"
  }, {
      id: "ruby",
      scopeName: "source.ruby",
      path: "ruby.tmLanguage.json",
      aliases: ["rb"]
  }, {
      id: "rust",
      scopeName: "source.rust",
      path: "rust.tmLanguage.json"
  }, {
      id: "sas",
      scopeName: "source.sas",
      path: "sas.tmLanguage.json"
  }, {
      id: "sass",
      scopeName: "source.sass",
      path: "sass.tmLanguage.json"
  }, {
      id: "scala",
      scopeName: "source.scala",
      path: "scala.tmLanguage.json"
  }, {
      id: "scheme",
      scopeName: "source.scheme",
      path: "scheme.tmLanguage.json"
  }, {
      id: "scss",
      scopeName: "source.css.scss",
      path: "scss.tmLanguage.json"
  }, {
      id: "shaderlab",
      scopeName: "source.shaderlab",
      path: "shaderlab.tmLanguage.json",
      aliases: ["shader"]
  }, {
      id: "shellscript",
      scopeName: "source.shell",
      path: "shellscript.tmLanguage.json",
      aliases: ["shell", "bash", "sh", "zsh"]
  }, {
      id: "smalltalk",
      scopeName: "source.smalltalk",
      path: "smalltalk.tmLanguage.json"
  }, {
      id: "sql",
      scopeName: "source.sql",
      path: "sql.tmLanguage.json"
  }, {
      id: "ssh-config",
      scopeName: "source.ssh-config",
      path: "ssh-config.tmLanguage.json"
  }, {
      id: "stylus",
      scopeName: "source.stylus",
      path: "stylus.tmLanguage.json",
      aliases: ["styl"]
  }, {
      id: "swift",
      scopeName: "source.swift",
      path: "swift.tmLanguage.json"
  }, {
      id: "tcl",
      scopeName: "source.tcl",
      path: "tcl.tmLanguage.json"
  }, {
      id: "toml",
      scopeName: "source.toml",
      path: "toml.tmLanguage.json"
  }, {
      id: "ts",
      scopeName: "documentation.injection.ts",
      path: "ts.tmLanguage.json"
  }, {
      id: "tsx",
      scopeName: "source.tsx",
      path: "tsx.tmLanguage.json"
  }, {
      id: "typescript",
      scopeName: "source.ts",
      path: "typescript.tmLanguage.json",
      aliases: ["ts"]
  }, {
      id: "vb",
      scopeName: "source.asp.vb.net",
      path: "vb.tmLanguage.json",
      aliases: ["cmd"]
  }, {
      id: "viml",
      scopeName: "source.viml",
      path: "viml.tmLanguage.json"
  }, {
      id: "vue-html",
      scopeName: "text.html.vue-html",
      path: "vue-html.tmLanguage.json"
  }, {
      id: "vue",
      scopeName: "source.vue",
      path: "vue.tmLanguage.json"
  }, {
      id: "wasm",
      scopeName: "source.wat",
      path: "wasm.tmLanguage.json"
  }, {
      id: "xml",
      scopeName: "text.xml",
      path: "xml.tmLanguage.json"
  }, {
      id: "xsl",
      scopeName: "text.xml.xsl",
      path: "xsl.tmLanguage.json"
  }, {
      id: "yaml",
      scopeName: "source.yaml",
      path: "yaml.tmLanguage.json"
  },
  */ {
      id: "ebnf",
      scopeName: "source.ebnf",
      path: "EBNF.JSON-tmLanguage"
  }
];
  "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
  function n(e) {
      var t = {
          exports: {}
      };
      return e(t, t.exports),
      t.exports
  }
  var r = n((function(e, t) {
      var n = function() {
          "undefined" != typeof document && document.currentScript && document.currentScript.src;
          return function(e) {
              var t, n = void 0 !== (e = e || {}) ? e : {}, r = {};
              for (t in n)
                  n.hasOwnProperty(t) && (r[t] = n[t]);
              var i, o = !1, s = "";
              function a(e) {
                  return n.locateFile ? n.locateFile(e, s) : s + e
              }
              i = function(e) {
                  var t;
                  return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : (d("object" == typeof (t = read(e, "binary"))),
                  t)
              }
              ,
              "undefined" != typeof scriptArgs && scriptArgs,
              "undefined" != typeof print && ("undefined" == typeof console && (console = {}),
              console.log = print,
              console.warn = console.error = "undefined" != typeof printErr ? printErr : print);
              var u, c, l = n.print || console.log.bind(console), h = n.printErr || console.warn.bind(console);
              for (t in r)
                  r.hasOwnProperty(t) && (n[t] = r[t]);
              r = null,
              n.arguments && n.arguments,
              n.thisProgram && n.thisProgram,
              n.quit && n.quit,
              n.wasmBinary && (u = n.wasmBinary),
              n.noExitRuntime && n.noExitRuntime,
              "object" != typeof WebAssembly && h("no native wasm support detected");
              var p = new WebAssembly.Table({
                  initial: 244,
                  maximum: 244,
                  element: "anyfunc"
              })
                , f = !1;
              function d(e, t) {
                  e || X("Assertion failed: " + t)
              }
              function g(e) {
                  var t = n["_" + e];
                  return d(t, "Cannot call unknown function " + e + ", make sure it is exported"),
                  t
              }
              function m(e, t, n, r, i) {
                  var o = {
                      string: function(e) {
                          var t = 0;
                          if (null != e && 0 !== e) {
                              var n = 1 + (e.length << 2);
                              w(e, t = ye(n), n)
                          }
                          return t
                      },
                      array: function(e) {
                          var t = ye(e.length);
                          return k(e, t),
                          t
                      }
                  };
                  var s = g(e)
                    , a = []
                    , u = 0;
                  if (r)
                      for (var c = 0; c < r.length; c++) {
                          var l = o[n[c]];
                          l ? (0 === u && (u = me()),
                          a[c] = l(r[c])) : a[c] = r[c]
                      }
                  var h = s.apply(null, a);
                  return h = function(e) {
                      return "string" === t ? v(e) : "boolean" === t ? Boolean(e) : e
                  }(h),
                  0 !== u && _e(u),
                  h
              }
              var y = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
              function _(e, t, n) {
                  for (var r = t + n, i = t; e[i] && !(i >= r); )
                      ++i;
                  if (i - t > 16 && e.subarray && y)
                      return y.decode(e.subarray(t, i));
                  for (var o = ""; t < i; ) {
                      var s = e[t++];
                      if (128 & s) {
                          var a = 63 & e[t++];
                          if (192 != (224 & s)) {
                              var u = 63 & e[t++];
                              if ((s = 224 == (240 & s) ? (15 & s) << 12 | a << 6 | u : (7 & s) << 18 | a << 12 | u << 6 | 63 & e[t++]) < 65536)
                                  o += String.fromCharCode(s);
                              else {
                                  var c = s - 65536;
                                  o += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                              }
                          } else
                              o += String.fromCharCode((31 & s) << 6 | a)
                      } else
                          o += String.fromCharCode(s)
                  }
                  return o
              }
              function v(e, t) {
                  return e ? _(S, e, t) : ""
              }
              function b(e, t, n, r) {
                  if (!(r > 0))
                      return 0;
                  for (var i = n, o = n + r - 1, s = 0; s < e.length; ++s) {
                      var a = e.charCodeAt(s);
                      if (a >= 55296 && a <= 57343)
                          a = 65536 + ((1023 & a) << 10) | 1023 & e.charCodeAt(++s);
                      if (a <= 127) {
                          if (n >= o)
                              break;
                          t[n++] = a
                      } else if (a <= 2047) {
                          if (n + 1 >= o)
                              break;
                          t[n++] = 192 | a >> 6,
                          t[n++] = 128 | 63 & a
                      } else if (a <= 65535) {
                          if (n + 2 >= o)
                              break;
                          t[n++] = 224 | a >> 12,
                          t[n++] = 128 | a >> 6 & 63,
                          t[n++] = 128 | 63 & a
                      } else {
                          if (n + 3 >= o)
                              break;
                          t[n++] = 240 | a >> 18,
                          t[n++] = 128 | a >> 12 & 63,
                          t[n++] = 128 | a >> 6 & 63,
                          t[n++] = 128 | 63 & a
                      }
                  }
                  return t[n] = 0,
                  n - i
              }
              function w(e, t, n) {
                  return b(e, S, t, n)
              }
              "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
              function k(e, t) {
                  C.set(e, t)
              }
              var x, C, S, L, j = 65536;
              function N(e, t) {
                  return e % t > 0 && (e += t - e % t),
                  e
              }
              function A(e) {
                  x = e,
                  n.HEAP8 = C = new Int8Array(e),
                  n.HEAP16 = new Int16Array(e),
                  n.HEAP32 = L = new Int32Array(e),
                  n.HEAPU8 = S = new Uint8Array(e),
                  n.HEAPU16 = new Uint16Array(e),
                  n.HEAPU32 = new Uint32Array(e),
                  n.HEAPF32 = new Float32Array(e),
                  n.HEAPF64 = new Float64Array(e)
              }
              var R = 5507664
                , P = 264624
                , T = n.TOTAL_MEMORY || 157286400;
              function I(e) {
                  for (; e.length > 0; ) {
                      var t = e.shift();
                      if ("function" != typeof t) {
                          var r = t.func;
                          "number" == typeof r ? void 0 === t.arg ? n.dynCall_v(r) : n.dynCall_vi(r, t.arg) : r(void 0 === t.arg ? null : t.arg)
                      } else
                          t()
                  }
              }
              (c = n.wasmMemory ? n.wasmMemory : new WebAssembly.Memory({
                  initial: T / j
              })) && (x = c.buffer),
              T = x.byteLength,
              A(x),
              L[P >> 2] = R;
              var E = []
                , M = []
                , O = []
                , D = [];
              function G() {
                  if (n.preRun)
                      for ("function" == typeof n.preRun && (n.preRun = [n.preRun]); n.preRun.length; )
                          $(n.preRun.shift());
                  I(E)
              }
              function F() {
                  I(M)
              }
              function B() {
                  I(O)
              }
              function W() {
                  if (n.postRun)
                      for ("function" == typeof n.postRun && (n.postRun = [n.postRun]); n.postRun.length; )
                          H(n.postRun.shift());
                  I(D)
              }
              function $(e) {
                  E.unshift(e)
              }
              function H(e) {
                  D.unshift(e)
              }
              var U = 0
                , z = null;
              function q(e) {
                  U++,
                  n.monitorRunDependencies && n.monitorRunDependencies(U)
              }
              function K(e) {
                  if (U--,
                  n.monitorRunDependencies && n.monitorRunDependencies(U),
                  0 == U && z) {
                      var t = z;
                      z = null,
                      t()
                  }
              }
              function X(e) {
                  throw n.onAbort && n.onAbort(e),
                  l(e += ""),
                  h(e),
                  f = !0,
                  e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.",
                  new WebAssembly.RuntimeError(e)
              }
              n.preloadedImages = {},
              n.preloadedAudios = {};
              var J = "data:application/octet-stream;base64,";
              function Y(e) {
                  return String.prototype.startsWith ? e.startsWith(J) : 0 === e.indexOf(J)
              }
              var V = "onigasm.wasm";
              function Z() {
                  try {
                      if (u)
                          return new Uint8Array(u);
                      if (i)
                          return i(V);
                      throw "both async and sync fetching of the wasm failed"
                  } catch (e) {
                      X(e)
                  }
              }
              function Q() {
                  return !u && o && "function" == typeof fetch ? fetch(V, {
                      credentials: "same-origin"
                  }).then((function(e) {
                      if (!e.ok)
                          throw "failed to load wasm binary file at '" + V + "'";
                      return e.arrayBuffer()
                  }
                  )).catch((function() {
                      return Z()
                  }
                  )) : new Promise((function(e, t) {
                      e(Z())
                  }
                  ))
              }
              function ee() {
                  var e = {
                      env: pe,
                      wasi_unstable: pe
                  };
                  function t(e, t) {
                      var r = e.exports;
                      n.asm = r,
                      K()
                  }
                  function r(e) {
                      t(e.instance)
                  }
                  function i(t) {
                      return Q().then((function(t) {
                          return WebAssembly.instantiate(t, e)
                      }
                      )).then(t, (function(e) {
                          h("failed to asynchronously prepare wasm: " + e),
                          X(e)
                      }
                      ))
                  }
                  if (q(),
                  n.instantiateWasm)
                      try {
                          return n.instantiateWasm(e, t)
                      } catch (e) {
                          return h("Module.instantiateWasm callback failed with error: " + e),
                          !1
                      }
                  return function() {
                      if (u || "function" != typeof WebAssembly.instantiateStreaming || Y(V) || "function" != typeof fetch)
                          return i(r);
                      fetch(V, {
                          credentials: "same-origin"
                      }).then((function(t) {
                          return WebAssembly.instantiateStreaming(t, e).then(r, (function(e) {
                              h("wasm streaming compile failed: " + e),
                              h("falling back to ArrayBuffer instantiation"),
                              i(r)
                          }
                          ))
                      }
                      ))
                  }(),
                  {}
              }
              function te() {
                  X()
              }
              function ne() {
                  return C.length
              }
              function re() {
                  return 264624
              }
              function ie(e, t, n) {
                  S.set(S.subarray(t, t + n), e)
              }
              function oe(e) {
                  try {
                      return c.grow(e - x.byteLength + 65535 >> 16),
                      A(c.buffer),
                      1
                  } catch (e) {}
              }
              function se(e) {
                  var t = ne()
                    , n = 65536
                    , r = 2147418112;
                  if (e > r)
                      return !1;
                  for (var i = Math.max(t, 16777216); i < e; )
                      i = i <= 536870912 ? N(2 * i, n) : Math.min(N((3 * i + 2147483648) / 4, n), r);
                  return !!oe(i)
              }
              Y(V) || (V = a(V)),
              M.push({
                  func: function() {
                      ge()
                  }
              });
              var ae = {
                  buffers: [null, [], []],
                  printChar: function(e, t) {
                      var n = ae.buffers[e];
                      0 === t || 10 === t ? ((1 === e ? l : h)(_(n, 0)),
                      n.length = 0) : n.push(t)
                  },
                  varargs: 0,
                  get: function(e) {
                      return ae.varargs += 4,
                      L[ae.varargs - 4 >> 2]
                  },
                  getStr: function() {
                      return v(ae.get())
                  },
                  get64: function() {
                      var e = ae.get();
                      ae.get();
                      return e
                  },
                  getZero: function() {
                      ae.get()
                  }
              };
              function ue(e) {
                  try {
                      return 0
                  } catch (e) {
                      return "undefined" != typeof FS && e instanceof FS.ErrnoError || X(e),
                      e.errno
                  }
              }
              function ce(e, t, n, r, i) {
                  try {
                      return 0
                  } catch (e) {
                      return "undefined" != typeof FS && e instanceof FS.ErrnoError || X(e),
                      e.errno
                  }
              }
              function le(e, t, n, r) {
                  try {
                      for (var i = 0, o = 0; o < n; o++) {
                          for (var s = L[t + 8 * o >> 2], a = L[t + (8 * o + 4) >> 2], u = 0; u < a; u++)
                              ae.printChar(e, S[s + u]);
                          i += a
                      }
                      return L[r >> 2] = i,
                      0
                  } catch (e) {
                      return "undefined" != typeof FS && e instanceof FS.ErrnoError || X(e),
                      e.errno
                  }
              }
              function he(e) {}
              var pe = {
                  abort: te,
                  emscripten_get_sbrk_ptr: re,
                  emscripten_memcpy_big: ie,
                  emscripten_resize_heap: se,
                  fd_close: ue,
                  fd_seek: ce,
                  fd_write: le,
                  memory: c,
                  setTempRet0: he,
                  table: p
              }
                , fe = ee();
              n.asm = fe;
              var de, ge = n.___wasm_call_ctors = function() {
                  return n.asm.__wasm_call_ctors.apply(null, arguments)
              }
              , me = (n._malloc = function() {
                  return n.asm.malloc.apply(null, arguments)
              }
              ,
              n._free = function() {
                  return n.asm.free.apply(null, arguments)
              }
              ,
              n._getLastError = function() {
                  return n.asm.getLastError.apply(null, arguments)
              }
              ,
              n._compilePattern = function() {
                  return n.asm.compilePattern.apply(null, arguments)
              }
              ,
              n._disposeCompiledPatterns = function() {
                  return n.asm.disposeCompiledPatterns.apply(null, arguments)
              }
              ,
              n._findBestMatch = function() {
                  return n.asm.findBestMatch.apply(null, arguments)
              }
              ,
              n.___cxa_demangle = function() {
                  return n.asm.__cxa_demangle.apply(null, arguments)
              }
              ,
              n._setThrew = function() {
                  return n.asm.setThrew.apply(null, arguments)
              }
              ,
              n.stackSave = function() {
                  return n.asm.stackSave.apply(null, arguments)
              }
              ), ye = n.stackAlloc = function() {
                  return n.asm.stackAlloc.apply(null, arguments)
              }
              , _e = n.stackRestore = function() {
                  return n.asm.stackRestore.apply(null, arguments)
              }
              ;
              n.__growWasmMemory = function() {
                  return n.asm.__growWasmMemory.apply(null, arguments)
              }
              ,
              n.dynCall_vi = function() {
                  return n.asm.dynCall_vi.apply(null, arguments)
              }
              ,
              n.dynCall_iiii = function() {
                  return n.asm.dynCall_iiii.apply(null, arguments)
              }
              ,
              n.dynCall_iiiii = function() {
                  return n.asm.dynCall_iiiii.apply(null, arguments)
              }
              ,
              n.dynCall_iii = function() {
                  return n.asm.dynCall_iii.apply(null, arguments)
              }
              ,
              n.dynCall_iidiiii = function() {
                  return n.asm.dynCall_iidiiii.apply(null, arguments)
              }
              ,
              n.dynCall_vii = function() {
                  return n.asm.dynCall_vii.apply(null, arguments)
              }
              ,
              n.dynCall_ii = function() {
                  return n.asm.dynCall_ii.apply(null, arguments)
              }
              ,
              n.dynCall_i = function() {
                  return n.asm.dynCall_i.apply(null, arguments)
              }
              ,
              n.dynCall_v = function() {
                  return n.asm.dynCall_v.apply(null, arguments)
              }
              ,
              n.dynCall_viiiiii = function() {
                  return n.asm.dynCall_viiiiii.apply(null, arguments)
              }
              ,
              n.dynCall_viiiii = function() {
                  return n.asm.dynCall_viiiii.apply(null, arguments)
              }
              ,
              n.dynCall_viiii = function() {
                  return n.asm.dynCall_viiii.apply(null, arguments)
              }
              ,
              n.dynCall_jiji = function() {
                  return n.asm.dynCall_jiji.apply(null, arguments)
              }
              ;
              function ve(e) {
                  function t() {
                      de || (de = !0,
                      f || (F(),
                      B(),
                      n.onRuntimeInitialized && n.onRuntimeInitialized(),
                      W()))
                  }
                  U > 0 || (G(),
                  U > 0 || (n.setStatus ? (n.setStatus("Running..."),
                  setTimeout((function() {
                      setTimeout((function() {
                          n.setStatus("")
                      }
                      ), 1),
                      t()
                  }
                  ), 1)) : t()))
              }
              if (n.asm = fe,
              n.ccall = m,
              n.then = function(e) {
                  if (de)
                      e(n);
                  else {
                      var t = n.onRuntimeInitialized;
                      n.onRuntimeInitialized = function() {
                          t && t(),
                          e(n)
                      }
                  }
                  return n
              }
              ,
              z = function e() {
                  de || ve(),
                  de || (z = e)
              }
              ,
              n.run = ve,
              n.preInit)
                  for ("function" == typeof n.preInit && (n.preInit = [n.preInit]); n.preInit.length > 0; )
                      n.preInit.pop()();
              return !0,
              ve(),
              e
          }
      }();
      e.exports = n
  }
  ))
    , i = n((function(e, t) {
      async function n(e) {
          return new Promise(((n,i)=>{
              const {log: o, warn: s, error: a} = console;
              r({
                  instantiateWasm: (t,n)=>(WebAssembly.instantiate(e, t).then((e=>{
                      n(e.instance)
                  }
                  )).catch((e=>{
                      throw e
                  }
                  )),
                  {})
              }).then((e=>{
                  t.onigasmH = e,
                  n()
              }
              )),
              "undefined" != typeof print && (console.log = o,
              console.error = a,
              console.warn = s)
          }
          ))
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      let i = !1;
      t.loadWASM = async function(e) {
          if (i)
              throw new Error("Onigasm#init has been called and was succesful, subsequent calls are not allowed once initialized");
          if ("string" == typeof e) {
              const t = await (await fetch(e)).arrayBuffer();
              await n(t)
          } else {
              if (!(e instanceof ArrayBuffer))
                  throw new TypeError("Expected a string (URL of .wasm file) or ArrayBuffer (.wasm file itself) as first parameter");
              await n(e)
          }
          i = !0
      }
  }
  ))
    , o = s;
  function s(e) {
      var t = this;
      if (t instanceof s || (t = new s),
      t.tail = null,
      t.head = null,
      t.length = 0,
      e && "function" == typeof e.forEach)
          e.forEach((function(e) {
              t.push(e)
          }
          ));
      else if (arguments.length > 0)
          for (var n = 0, r = arguments.length; n < r; n++)
              t.push(arguments[n]);
      return t
  }
  function a(e, t, n) {
      var r = t === e.head ? new l(n,null,t,e) : new l(n,t,t.next,e);
      return null === r.next && (e.tail = r),
      null === r.prev && (e.head = r),
      e.length++,
      r
  }
  function u(e, t) {
      e.tail = new l(t,e.tail,null,e),
      e.head || (e.head = e.tail),
      e.length++
  }
  function c(e, t) {
      e.head = new l(t,null,e.head,e),
      e.tail || (e.tail = e.head),
      e.length++
  }
  function l(e, t, n, r) {
      if (!(this instanceof l))
          return new l(e,t,n,r);
      this.list = r,
      this.value = e,
      t ? (t.next = this,
      this.prev = t) : this.prev = null,
      n ? (n.prev = this,
      this.next = n) : this.next = null
  }
  s.Node = l,
  s.create = s,
  s.prototype.removeNode = function(e) {
      if (e.list !== this)
          throw new Error("removing node which does not belong to this list");
      var t = e.next
        , n = e.prev;
      return t && (t.prev = n),
      n && (n.next = t),
      e === this.head && (this.head = t),
      e === this.tail && (this.tail = n),
      e.list.length--,
      e.next = null,
      e.prev = null,
      e.list = null,
      t
  }
  ,
  s.prototype.unshiftNode = function(e) {
      if (e !== this.head) {
          e.list && e.list.removeNode(e);
          var t = this.head;
          e.list = this,
          e.next = t,
          t && (t.prev = e),
          this.head = e,
          this.tail || (this.tail = e),
          this.length++
      }
  }
  ,
  s.prototype.pushNode = function(e) {
      if (e !== this.tail) {
          e.list && e.list.removeNode(e);
          var t = this.tail;
          e.list = this,
          e.prev = t,
          t && (t.next = e),
          this.tail = e,
          this.head || (this.head = e),
          this.length++
      }
  }
  ,
  s.prototype.push = function() {
      for (var e = 0, t = arguments.length; e < t; e++)
          u(this, arguments[e]);
      return this.length
  }
  ,
  s.prototype.unshift = function() {
      for (var e = 0, t = arguments.length; e < t; e++)
          c(this, arguments[e]);
      return this.length
  }
  ,
  s.prototype.pop = function() {
      if (this.tail) {
          var e = this.tail.value;
          return this.tail = this.tail.prev,
          this.tail ? this.tail.next = null : this.head = null,
          this.length--,
          e
      }
  }
  ,
  s.prototype.shift = function() {
      if (this.head) {
          var e = this.head.value;
          return this.head = this.head.next,
          this.head ? this.head.prev = null : this.tail = null,
          this.length--,
          e
      }
  }
  ,
  s.prototype.forEach = function(e, t) {
      t = t || this;
      for (var n = this.head, r = 0; null !== n; r++)
          e.call(t, n.value, r, this),
          n = n.next
  }
  ,
  s.prototype.forEachReverse = function(e, t) {
      t = t || this;
      for (var n = this.tail, r = this.length - 1; null !== n; r--)
          e.call(t, n.value, r, this),
          n = n.prev
  }
  ,
  s.prototype.get = function(e) {
      for (var t = 0, n = this.head; null !== n && t < e; t++)
          n = n.next;
      if (t === e && null !== n)
          return n.value
  }
  ,
  s.prototype.getReverse = function(e) {
      for (var t = 0, n = this.tail; null !== n && t < e; t++)
          n = n.prev;
      if (t === e && null !== n)
          return n.value
  }
  ,
  s.prototype.map = function(e, t) {
      t = t || this;
      for (var n = new s, r = this.head; null !== r; )
          n.push(e.call(t, r.value, this)),
          r = r.next;
      return n
  }
  ,
  s.prototype.mapReverse = function(e, t) {
      t = t || this;
      for (var n = new s, r = this.tail; null !== r; )
          n.push(e.call(t, r.value, this)),
          r = r.prev;
      return n
  }
  ,
  s.prototype.reduce = function(e, t) {
      var n, r = this.head;
      if (arguments.length > 1)
          n = t;
      else {
          if (!this.head)
              throw new TypeError("Reduce of empty list with no initial value");
          r = this.head.next,
          n = this.head.value
      }
      for (var i = 0; null !== r; i++)
          n = e(n, r.value, i),
          r = r.next;
      return n
  }
  ,
  s.prototype.reduceReverse = function(e, t) {
      var n, r = this.tail;
      if (arguments.length > 1)
          n = t;
      else {
          if (!this.tail)
              throw new TypeError("Reduce of empty list with no initial value");
          r = this.tail.prev,
          n = this.tail.value
      }
      for (var i = this.length - 1; null !== r; i--)
          n = e(n, r.value, i),
          r = r.prev;
      return n
  }
  ,
  s.prototype.toArray = function() {
      for (var e = new Array(this.length), t = 0, n = this.head; null !== n; t++)
          e[t] = n.value,
          n = n.next;
      return e
  }
  ,
  s.prototype.toArrayReverse = function() {
      for (var e = new Array(this.length), t = 0, n = this.tail; null !== n; t++)
          e[t] = n.value,
          n = n.prev;
      return e
  }
  ,
  s.prototype.slice = function(e, t) {
      (t = t || this.length) < 0 && (t += this.length),
      (e = e || 0) < 0 && (e += this.length);
      var n = new s;
      if (t < e || t < 0)
          return n;
      e < 0 && (e = 0),
      t > this.length && (t = this.length);
      for (var r = 0, i = this.head; null !== i && r < e; r++)
          i = i.next;
      for (; null !== i && r < t; r++,
      i = i.next)
          n.push(i.value);
      return n
  }
  ,
  s.prototype.sliceReverse = function(e, t) {
      (t = t || this.length) < 0 && (t += this.length),
      (e = e || 0) < 0 && (e += this.length);
      var n = new s;
      if (t < e || t < 0)
          return n;
      e < 0 && (e = 0),
      t > this.length && (t = this.length);
      for (var r = this.length, i = this.tail; null !== i && r > t; r--)
          i = i.prev;
      for (; null !== i && r > e; r--,
      i = i.prev)
          n.push(i.value);
      return n
  }
  ,
  s.prototype.splice = function(e, t) {
      e > this.length && (e = this.length - 1),
      e < 0 && (e = this.length + e);
      for (var n = 0, r = this.head; null !== r && n < e; n++)
          r = r.next;
      var i = [];
      for (n = 0; r && n < t; n++)
          i.push(r.value),
          r = this.removeNode(r);
      null === r && (r = this.tail),
      r !== this.head && r !== this.tail && (r = r.prev);
      for (n = 2; n < arguments.length; n++)
          r = a(this, r, arguments[n]);
      return i
  }
  ,
  s.prototype.reverse = function() {
      for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
          var r = n.prev;
          n.prev = n.next,
          n.next = r
      }
      return this.head = t,
      this.tail = e,
      this
  }
  ;
  try {
      !function(e) {
          e.prototype[Symbol.iterator] = function*() {
              for (let e = this.head; e; e = e.next)
                  yield e.value
          }
      }(s)
  } catch (e) {}
  const h = Symbol("max")
    , p = Symbol("length")
    , f = Symbol("lengthCalculator")
    , d = Symbol("allowStale")
    , g = Symbol("maxAge")
    , m = Symbol("dispose")
    , y = Symbol("noDisposeOnSet")
    , _ = Symbol("lruList")
    , v = Symbol("cache")
    , b = Symbol("updateAgeOnGet")
    , w = ()=>1;
  const k = (e,t,n)=>{
      const r = e[v].get(t);
      if (r) {
          const t = r.value;
          if (x(e, t)) {
              if (S(e, r),
              !e[d])
                  return
          } else
              n && (e[b] && (r.value.now = Date.now()),
              e[_].unshiftNode(r));
          return t.value
      }
  }
    , x = (e,t)=>{
      if (!t || !t.maxAge && !e[g])
          return !1;
      const n = Date.now() - t.now;
      return t.maxAge ? n > t.maxAge : e[g] && n > e[g]
  }
    , C = e=>{
      if (e[p] > e[h])
          for (let t = e[_].tail; e[p] > e[h] && null !== t; ) {
              const n = t.prev;
              S(e, t),
              t = n
          }
  }
    , S = (e,t)=>{
      if (t) {
          const n = t.value;
          e[m] && e[m](n.key, n.value),
          e[p] -= n.length,
          e[v].delete(n.key),
          e[_].removeNode(t)
      }
  }
  ;
  class L {
      constructor(e, t, n, r, i) {
          this.key = e,
          this.value = t,
          this.length = n,
          this.now = r,
          this.maxAge = i || 0
      }
  }
  const j = (e,t,n,r)=>{
      let i = n.value;
      x(e, i) && (S(e, n),
      e[d] || (i = void 0)),
      i && t.call(r, i.value, i.key, e)
  }
  ;
  var N = class {
      constructor(e) {
          if ("number" == typeof e && (e = {
              max: e
          }),
          e || (e = {}),
          e.max && ("number" != typeof e.max || e.max < 0))
              throw new TypeError("max must be a non-negative number");
          this[h] = e.max || 1 / 0;
          const t = e.length || w;
          if (this[f] = "function" != typeof t ? w : t,
          this[d] = e.stale || !1,
          e.maxAge && "number" != typeof e.maxAge)
              throw new TypeError("maxAge must be a number");
          this[g] = e.maxAge || 0,
          this[m] = e.dispose,
          this[y] = e.noDisposeOnSet || !1,
          this[b] = e.updateAgeOnGet || !1,
          this.reset()
      }
      set max(e) {
          if ("number" != typeof e || e < 0)
              throw new TypeError("max must be a non-negative number");
          this[h] = e || 1 / 0,
          C(this)
      }
      get max() {
          return this[h]
      }
      set allowStale(e) {
          this[d] = !!e
      }
      get allowStale() {
          return this[d]
      }
      set maxAge(e) {
          if ("number" != typeof e)
              throw new TypeError("maxAge must be a non-negative number");
          this[g] = e,
          C(this)
      }
      get maxAge() {
          return this[g]
      }
      set lengthCalculator(e) {
          "function" != typeof e && (e = w),
          e !== this[f] && (this[f] = e,
          this[p] = 0,
          this[_].forEach((e=>{
              e.length = this[f](e.value, e.key),
              this[p] += e.length
          }
          ))),
          C(this)
      }
      get lengthCalculator() {
          return this[f]
      }
      get length() {
          return this[p]
      }
      get itemCount() {
          return this[_].length
      }
      rforEach(e, t) {
          t = t || this;
          for (let n = this[_].tail; null !== n; ) {
              const r = n.prev;
              j(this, e, n, t),
              n = r
          }
      }
      forEach(e, t) {
          t = t || this;
          for (let n = this[_].head; null !== n; ) {
              const r = n.next;
              j(this, e, n, t),
              n = r
          }
      }
      keys() {
          return this[_].toArray().map((e=>e.key))
      }
      values() {
          return this[_].toArray().map((e=>e.value))
      }
      reset() {
          this[m] && this[_] && this[_].length && this[_].forEach((e=>this[m](e.key, e.value))),
          this[v] = new Map,
          this[_] = new o,
          this[p] = 0
      }
      dump() {
          return this[_].map((e=>!x(this, e) && {
              k: e.key,
              v: e.value,
              e: e.now + (e.maxAge || 0)
          })).toArray().filter((e=>e))
      }
      dumpLru() {
          return this[_]
      }
      set(e, t, n) {
          if ((n = n || this[g]) && "number" != typeof n)
              throw new TypeError("maxAge must be a number");
          const r = n ? Date.now() : 0
            , i = this[f](t, e);
          if (this[v].has(e)) {
              if (i > this[h])
                  return S(this, this[v].get(e)),
                  !1;
              const o = this[v].get(e).value;
              return this[m] && (this[y] || this[m](e, o.value)),
              o.now = r,
              o.maxAge = n,
              o.value = t,
              this[p] += i - o.length,
              o.length = i,
              this.get(e),
              C(this),
              !0
          }
          const o = new L(e,t,i,r,n);
          return o.length > this[h] ? (this[m] && this[m](e, t),
          !1) : (this[p] += o.length,
          this[_].unshift(o),
          this[v].set(e, this[_].head),
          C(this),
          !0)
      }
      has(e) {
          if (!this[v].has(e))
              return !1;
          const t = this[v].get(e).value;
          return !x(this, t)
      }
      get(e) {
          return k(this, e, !0)
      }
      peek(e) {
          return k(this, e, !1)
      }
      pop() {
          const e = this[_].tail;
          return e ? (S(this, e),
          e.value) : null
      }
      del(e) {
          S(this, this[v].get(e))
      }
      load(e) {
          this.reset();
          const t = Date.now();
          for (let n = e.length - 1; n >= 0; n--) {
              const r = e[n]
                , i = r.e || 0;
              if (0 === i)
                  this.set(r.k, r.v);
              else {
                  const e = i - t;
                  e > 0 && this.set(r.k, r.v, e)
              }
          }
      }
      prune() {
          this[v].forEach(((e,t)=>k(this, t, !1)))
      }
  }
  ;
  var A = class {
      constructor(e) {
          if (this.substring = (e,t)=>this.source.substring(e, t),
          this.toString = (e,t)=>this.source,
          "string" != typeof e)
              throw new TypeError("Argument must be a string");
          this.source = e,
          this._utf8Bytes = null,
          this._utf8Indexes = null
      }
      get utf8Bytes() {
          return this._utf8Bytes || this.encode(),
          this._utf8Bytes
      }
      get utf8Indexes() {
          return this._utf8Bytes || this.encode(),
          this._utf8Indexes
      }
      get content() {
          return this.source
      }
      get length() {
          return this.source.length
      }
      get hasMultiByteCharacters() {
          return null !== this.utf8Indexes
      }
      convertUtf8OffsetToUtf16(e) {
          if (e < 0)
              return 0;
          if (e >= this._utf8Bytes.length - 1)
              return this.source.length;
          const t = this.utf8Indexes;
          return t && e >= this._mappingTableStartOffset ? function(e, t) {
              let n = 0
                , r = e.length;
              if (0 === r)
                  return 0;
              for (; n < r; ) {
                  const i = Math.floor((n + r) / 2);
                  e[i] >= t ? r = i : n = i + 1
              }
              for (; n > 0 && (n >= e.length || e[n] > t); )
                  n--;
              n > 0 && e[n] === e[n - 1] && n--;
              return n
          }(t, e - this._mappingTableStartOffset) + this._mappingTableStartOffset : e
      }
      convertUtf16OffsetToUtf8(e) {
          if (e < 0)
              return 0;
          const t = this._utf8Bytes;
          if (e >= this.source.length)
              return t.length - 1;
          const n = this.utf8Indexes;
          return n && e >= this._mappingTableStartOffset ? n[e - this._mappingTableStartOffset] + this._mappingTableStartOffset : e
      }
      encode() {
          const e = this.source
            , t = e.length;
          let n, r = 0, i = 0;
          function o(e) {
              const o = 3 * (t - e);
              n = o <= 255 ? new Uint8Array(t - e) : o <= 65535 ? new Uint16Array(t - e) : new Uint32Array(t - e),
              i = e,
              n[r++] = 0
          }
          const s = new Uint8Array(3 * t + 1);
          let a = 0
            , u = 0;
          for (; u < e.length; ) {
              let c;
              const l = e.charCodeAt(u);
              if (n && (n[r++] = a - i),
              l < 55296 || l > 57343)
                  c = l;
              else if (l >= 56320)
                  c = 65533;
              else if (u === t - 1)
                  c = 65533;
              else {
                  const t = e.charCodeAt(u + 1);
                  if (56320 <= t && t <= 57343) {
                      n || o(u);
                      c = 65536 + ((1023 & l) << 10) + (1023 & t),
                      u += 1,
                      n[r++] = a - i
                  } else
                      c = 65533
              }
              let h, p;
              if (c <= 127 ? (h = 1,
              p = 0) : c <= 2047 ? (h = 2,
              p = 192) : c <= 65535 ? (h = 3,
              p = 224) : (h = 4,
              p = 240),
              1 === h)
                  s[a++] = c;
              else
                  for (n || o(a),
                  s[a++] = (c >> 6 * --h) + p; h > 0; ) {
                      const e = c >> 6 * (h - 1);
                      s[a++] = 128 | 63 & e,
                      h -= 1
                  }
              u += 1
          }
          const c = s.slice(0, a + 1);
          c[a] = 0,
          this._utf8Bytes = c,
          n && (this._utf8Indexes = n,
          this._mappingTableStartOffset = i)
      }
  }
    , R = Object.defineProperty({
      default: A
  }, "__esModule", {
      value: !0
  });
  function P(e) {
      const t = i.onigasmH._malloc(e.utf8Bytes.length);
      return i.onigasmH.HEAPU8.set(e.utf8Bytes, t),
      t
  }
  function T(e) {
      const t = [];
      let n = 0;
      for (; 0 !== i.onigasmH.HEAPU8[e]; )
          t[n++] = i.onigasmH.HEAPU8[e++];
      return t.join()
  }
  const I = new N({
      dispose: (e,t)=>{
          const n = i.onigasmH._malloc(t.regexTPtrs.length);
          i.onigasmH.HEAPU8.set(t.regexTPtrs, n);
          if (0 !== i.onigasmH._disposeCompiledPatterns(n, e.patterns.length)) {
              const e = T(i.onigasmH._getLastError());
              throw new Error(e)
          }
          i.onigasmH._free(n)
      }
      ,
      max: 1e3
  });
  class E {
      constructor(e) {
          if (null === i.onigasmH)
              throw new Error("Onigasm has not been initialized, call loadWASM from 'onigasm' exports before using any other API");
          for (let t = 0; t < e.length; t++) {
              if ("string" != typeof e[t])
                  throw new TypeError("First parameter to OnigScanner constructor must be array of (pattern) strings")
          }
          this.sources = e.slice()
      }
      get patterns() {
          return this.sources.slice()
      }
      findNextMatch(e, t, n) {
          null == t && (t = 0),
          "function" == typeof t && (n = t,
          t = 0);
          try {
              n(null, this.findNextMatchSync(e, t))
          } catch (e) {
              n(e)
          }
      }
      findNextMatchSync(e, t) {
          null == t && (t = 0),
          t = this.convertToNumber(t);
          let n = I.get(this)
            , r = 0;
          if (!n) {
              const e = i.onigasmH._malloc(4)
                , t = [];
              for (let n = 0; n < this.sources.length; n++) {
                  const o = this.sources[n]
                    , s = P(new R.default(o));
                  if (r = i.onigasmH._compilePattern(s, e),
                  0 !== r) {
                      const e = T(i.onigasmH._getLastError());
                      throw new Error(e)
                  }
                  const a = i.onigasmH.HEAP32[e / 4];
                  t.push(a),
                  i.onigasmH._free(s)
              }
              n = {
                  regexTPtrs: new Uint8Array(Uint32Array.from(t).buffer)
              },
              i.onigasmH._free(e),
              I.set(this, n)
          }
          const o = e instanceof R.default ? e : new R.default(this.convertToString(e))
            , s = P(o)
            , a = i.onigasmH._malloc(8)
            , u = i.onigasmH._malloc(n.regexTPtrs.length);
          if (i.onigasmH.HEAPU8.set(n.regexTPtrs, u),
          r = i.onigasmH._findBestMatch(u, this.sources.length, s, o.utf8Bytes.length - 1, o.convertUtf16OffsetToUtf8(t), a),
          0 !== r) {
              const e = T(i.onigasmH._getLastError());
              throw new Error(e)
          }
          const [c,l,h] = new Uint32Array(i.onigasmH.HEAPU32.buffer,a,3);
          if (i.onigasmH._free(s),
          i.onigasmH._free(a),
          i.onigasmH._free(u),
          h > 0) {
              const e = new Uint32Array(i.onigasmH.HEAPU32.buffer,l,h)
                , t = [];
              let n = 0
                , r = 0;
              for (; n < h; ) {
                  const i = r++;
                  let s = e[n++]
                    , a = e[n++];
                  o.hasMultiByteCharacters && (s = o.convertUtf8OffsetToUtf16(s),
                  a = o.convertUtf8OffsetToUtf16(a)),
                  t.push({
                      end: a,
                      index: i,
                      length: a - s,
                      start: s
                  })
              }
              return i.onigasmH._free(l),
              {
                  captureIndices: t,
                  index: c,
                  scanner: this
              }
          }
          return null
      }
      convertToString(e) {
          return void 0 === e ? "undefined" : null === e ? "null" : e instanceof R.default ? e.content : e.toString()
      }
      convertToNumber(e) {
          return e = parseInt(e, 10),
          isFinite(e) || (e = 0),
          e = Math.max(e, 0)
      }
  }
  var M = E
    , O = E
    , D = Object.defineProperty({
      OnigScanner: M,
      default: O
  }, "__esModule", {
      value: !0
  });
  var G = class {
      constructor(e) {
          this.source = e;
          try {
              this.scanner = new D.default([this.source])
          } catch (e) {}
      }
      searchSync(e, t) {
          let n;
          return null == t && (t = 0),
          n = this.scanner.findNextMatchSync(e, t),
          this.captureIndicesForMatch(e, n)
      }
      search(e, t, n) {
          null == t && (t = 0),
          "function" == typeof t && (n = t,
          t = 0);
          try {
              n(null, this.searchSync(e, t))
          } catch (e) {
              n(e)
          }
      }
      testSync(e) {
          return "boolean" == typeof this.source || "boolean" == typeof e ? this.source === e : null != this.searchSync(e)
      }
      test(e, t) {
          "function" != typeof t && (t = ()=>{}
          );
          try {
              t(null, this.testSync(e))
          } catch (e) {
              t(e)
          }
      }
      captureIndicesForMatch(e, t) {
          if (null != t) {
              const {captureIndices: n} = t;
              let r;
              e = this.scanner.convertToString(e);
              for (let t = 0; t < n.length; t++)
                  r = n[t],
                  r.match = e.slice(r.start, r.end);
              return n
          }
          return null
      }
  }
    , F = Object.defineProperty({
      default: G
  }, "__esModule", {
      value: !0
  })
    , B = i.loadWASM
    , W = (F.default,
  D.default)
    , $ = R.default;
  function H(e) {
      return e.endsWith("/") || e.endsWith("\\") ? e.slice(0, -1) : e
  }
  function U(e) {
      return e.startsWith("./") ? e.slice(2) : e
  }
  const z = "undefined" != typeof window && void 0 !== window.document && "undefined" != typeof fetch;
  let q = "https://unpkg.com/shiki@0.9.3/"
    , K = "";
  let X = null;
  function J(e) {
      if (z)
          return q || console.warn("[Shiki] no CDN provider found, use `setCDN()` to specify the CDN for loading the resources before calling `getHighlighter()`"),
          `${q}${e}`;
      {
          const t = require("path");
          return t.isAbsolute(e) ? e : t.resolve(__dirname, "..", e)
      }
  }
  async function Y(e) {
      const t = J(e);
      if (z) { // GRAMMERS FETCHED HERE
        // Hack to load mank
        if (t.includes("mank.tmLanguage.json")) {
          const mank_grammer =
            #include "/home/macdue/git/vscode-mank/mank-lang/syntaxes/mank.tmLanguage.json"
          ;
          return JSON.stringify(mank_grammer);
        } else if (t.includes("EBNF.JSON-tmLanguage")) {
          const ebnf_grammer =
            #include "/home/macdue/git/EBNF.tmbundle/Syntaxes/EBNF.JSON-tmLanguage"
          ;
          return JSON.stringify(ebnf_grammer);
        } else if (t.includes("llvm.tmLanguage.json")) {
          const llvm_grammer =
            #include "/home/macdue/git/LLVM.tmBundle/Syntaxes/LLVM.JSON-tmLanguage"
          ;
          return JSON.stringify(llvm_grammer);
        }
        return await fetch(t).then((e=>e.text()));
      } else {
          const e = require("fs");
          return await e.promises.readFile(t, "utf-8")
      }
  }
  async function V(e) {
      const t = Z(await async function(e) {
          return JSON.parse(await Y(e))
      }(e));
      if (t.include) {
          const n = await V(function(...e) {
              return e.map(H).map(U).join("/")
          }(function(e) {
              const t = e.split(/[\/\\]/g);
              return t[t.length - 2]
          }(e), t.include));
          n.settings && (t.settings = t.settings.concat(n.settings)),
          n.bg && !t.bg && (t.bg = n.bg)
      }
      return t
  }
  function Z(e) {
      const t = Object.assign(Object.assign({}, e), function(e) {
          var t, n, r, i, o, s;
          let a, u, c = e.settings ? e.settings : e.tokenColors;
          const l = c ? c.find((e=>!e.name && !e.scope)) : void 0;
          (null === (t = null == l ? void 0 : l.settings) || void 0 === t ? void 0 : t.foreground) && (a = l.settings.foreground);
          (null === (n = null == l ? void 0 : l.settings) || void 0 === n ? void 0 : n.background) && (u = l.settings.background);
          !a && (null === (i = null === (r = e) || void 0 === r ? void 0 : r.colors) || void 0 === i ? void 0 : i["editor.foreground"]) && (a = e.colors["editor.foreground"]);
          !u && (null === (s = null === (o = e) || void 0 === o ? void 0 : o.colors) || void 0 === s ? void 0 : s["editor.background"]) && (u = e.colors["editor.background"]);
          a || (a = "light" === e.type ? Q : ee);
          u || (u = "light" === e.type ? te : ne);
          return {
              fg: a,
              bg: u
          }
      }(e));
      var n;
      return e.include && (t.include = e.include),
      e.tokenColors && (t.settings = e.tokenColors),
      (n = t).settings[0].settings && !n.settings[0].scope || n.settings.unshift({
          settings: {
              foreground: n.fg,
              background: n.bg
          }
      }),
      t
  }
  const Q = "#333333"
    , ee = "#bbbbbb"
    , te = "#fffffe"
    , ne = "#1e1e1e";
  class re {
      constructor(e, t) {
          this.languagesPath = "languages/",
          this.languageMap = {},
          this.scopeToLangMap = {},
          this._onigLibPromise = e,
          this._onigLibName = t
      }
      get onigLib() {
          return this._onigLibPromise
      }
      getOnigLibName() {
          return this._onigLibName
      }
      getLangRegistration(e) {
          return this.languageMap[e]
      }
      async loadGrammar(e) {
          const n = this.scopeToLangMap[e];
          if (!n)
              return null;
          if (n.grammar)
              return n.grammar;
          const r = await async function(e) {
              const t = await Y(e);
              return JSON.parse(t)
          }(t.includes(n) ? `${this.languagesPath}${n.path}` : n.path);
          return n.grammar = r,
          r
      }
      addLanguage(e) {
          this.languageMap[e.id] = e,
          e.aliases && e.aliases.forEach((t=>{
              this.languageMap[t] = e
          }
          )),
          this.scopeToLangMap[e.scopeName] = e
      }
  }
  class ie {
      static toBinaryStr(e) {
          let t = e.toString(2);
          for (; t.length < 32; )
              t = "0" + t;
          return t
      }
      static printMetadata(e) {
          let t = ie.getLanguageId(e)
            , n = ie.getTokenType(e)
            , r = ie.getFontStyle(e)
            , i = ie.getForeground(e)
            , o = ie.getBackground(e);
          console.log({
              languageId: t,
              tokenType: n,
              fontStyle: r,
              foreground: i,
              background: o
          })
      }
      static getLanguageId(e) {
          return (255 & e) >>> 0
      }
      static getTokenType(e) {
          return (1792 & e) >>> 8
      }
      static getFontStyle(e) {
          return (14336 & e) >>> 11
      }
      static getForeground(e) {
          return (8372224 & e) >>> 14
      }
      static getBackground(e) {
          return (4286578688 & e) >>> 23
      }
      static set(e, t, n, r, i, o) {
          let s = ie.getLanguageId(e)
            , a = ie.getTokenType(e)
            , u = ie.getFontStyle(e)
            , c = ie.getForeground(e)
            , l = ie.getBackground(e);
          return 0 !== t && (s = t),
          0 !== n && (a = 8 === n ? 0 : n),
          -1 !== r && (u = r),
          0 !== i && (c = i),
          0 !== o && (l = o),
          (s << 0 | a << 8 | u << 11 | c << 14 | l << 23) >>> 0
      }
  }
  function oe(e, t) {
      let n = [];
      for (let r = 0, i = t.length; r < i; r++) {
          let i = t.slice(0, r)
            , o = t[r];
          n[r] = {
              scopeName: o,
              themeMatches: ue(e, o, i)
          }
      }
      return n
  }
  function se(e, t) {
      let n = e + ".";
      return e === t || t.substring(0, n.length) === n
  }
  function ae(e, t, n, r) {
      if (!se(e, n))
          return !1;
      let i = t.length - 1
        , o = r.length - 1;
      for (; i >= 0 && o >= 0; )
          se(t[i], r[o]) && i--,
          o--;
      return -1 === i
  }
  function ue(e, t, n) {
      let r = []
        , i = 0;
      for (let o = 0, s = e.settings.length; o < s; o++) {
          let s, a = e.settings[o];
          if ("string" == typeof a.scope)
              s = a.scope.split(/,/).map((e=>e.trim()));
          else {
              if (!Array.isArray(a.scope))
                  continue;
              s = a.scope
          }
          for (let e = 0, o = s.length; e < o; e++) {
              let u = s[e].split(/ /);
              ae(u[u.length - 1], u.slice(0, u.length - 1), t, n) && (r[i++] = a,
              e = o)
          }
      }
      return r
  }
  function ce(e, t={}) {
      const n = t.bg || "#fff";
      let r = "";
      return r += `<pre class="shiki" style="background-color: ${n}">`,
      t.langId && (r += `<div class="language-id">${t.langId}</div>`),
      r += "<code>",
      e.forEach((e=>{
          0 === e.length ? r += "\n" : (r += '<span class="line">',
          e.forEach((e=>{
              r += `<span style="color: ${e.color || t.fg}">${function(e) {
                  return e.replace(/[&<>"']/g, (e=>le[e]))
              }(e.content)}</span>`
          }
          )),
          r += "</span>\n")
      }
      )),
      r = r.replace(/\n*$/, ""),
      r += "</code></pre>",
      r
  }
  const le = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
  };
  var he = n((function(e, t) {
      e.exports = function(e) {
          var t = {};
          function n(r) {
              if (t[r])
                  return t[r].exports;
              var i = t[r] = {
                  i: r,
                  l: !1,
                  exports: {}
              };
              return e[r].call(i.exports, i, i.exports, n),
              i.l = !0,
              i.exports
          }
          return n.m = e,
          n.c = t,
          n.d = function(e, t, r) {
              n.o(e, t) || Object.defineProperty(e, t, {
                  enumerable: !0,
                  get: r
              })
          }
          ,
          n.r = function(e) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
              }),
              Object.defineProperty(e, "__esModule", {
                  value: !0
              })
          }
          ,
          n.t = function(e, t) {
              if (1 & t && (e = n(e)),
              8 & t)
                  return e;
              if (4 & t && "object" == typeof e && e && e.__esModule)
                  return e;
              var r = Object.create(null);
              if (n.r(r),
              Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
              }),
              2 & t && "string" != typeof e)
                  for (var i in e)
                      n.d(r, i, function(t) {
                          return e[t]
                      }
                      .bind(null, i));
              return r
          }
          ,
          n.n = function(e) {
              var t = e && e.__esModule ? function() {
                  return e.default
              }
              : function() {
                  return e
              }
              ;
              return n.d(t, "a", t),
              t
          }
          ,
          n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
          }
          ,
          n.p = "",
          n(n.s = 3)
      }([function(e, t, n) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          var r = n(1)
            , i = n(5)
            , o = n(6)
            , s = n(2)
            , a = "undefined" == typeof performance ? function() {
              return Date.now()
          }
          : function() {
              return performance.now()
          }
          ;
          t.createGrammar = function(e, t, n, r, i, o) {
              return new v(e,t,n,r,i,o)
          }
          ;
          var u = function(e) {
              this.scopeName = e
          };
          t.FullScopeDependency = u;
          var c = function() {
              function e(e, t) {
                  this.scopeName = e,
                  this.include = t
              }
              return e.prototype.toKey = function() {
                  return this.scopeName + "#" + this.include
              }
              ,
              e
          }();
          t.PartialScopeDependency = c;
          var l = function() {
              function e() {
                  this.full = [],
                  this.partial = [],
                  this.visitedRule = new Set,
                  this._seenFull = new Set,
                  this._seenPartial = new Set
              }
              return e.prototype.add = function(e) {
                  e instanceof u ? this._seenFull.has(e.scopeName) || (this._seenFull.add(e.scopeName),
                  this.full.push(e)) : this._seenPartial.has(e.toKey()) || (this._seenPartial.add(e.toKey()),
                  this.partial.push(e))
              }
              ,
              e
          }();
          function h(e, t, n, i, o) {
              for (var s = 0, a = i; s < a.length; s++) {
                  var l = a[s];
                  if (!e.visitedRule.has(l)) {
                      e.visitedRule.add(l);
                      var d = l.repository ? r.mergeObjects({}, o, l.repository) : o;
                      Array.isArray(l.patterns) && h(e, t, n, l.patterns, d);
                      var g = l.include;
                      if (g)
                          if ("$base" === g || g === t.scopeName)
                              f(e, t, t);
                          else if ("$self" === g || g === n.scopeName)
                              f(e, t, n);
                          else if ("#" === g.charAt(0))
                              p(e, t, n, g.substring(1), d);
                          else {
                              var m = g.indexOf("#");
                              if (m >= 0) {
                                  var y = g.substring(0, m)
                                    , _ = g.substring(m + 1);
                                  y === t.scopeName ? p(e, t, t, _, d) : y === n.scopeName ? p(e, t, n, _, d) : e.add(new c(y,g.substring(m + 1)))
                              } else
                                  e.add(new u(g))
                          }
                  }
              }
          }
          function p(e, t, n, r, i) {
              void 0 === i && (i = n.repository),
              i && i[r] && h(e, t, n, [i[r]], i)
          }
          function f(e, t, n) {
              if (n.patterns && Array.isArray(n.patterns) && h(e, t, n, n.patterns, n.repository),
              n.injections) {
                  var r = [];
                  for (var i in n.injections)
                      r.push(n.injections[i]);
                  h(e, t, n, r, n.repository)
              }
          }
          function d(e, t) {
              if (!e)
                  return !1;
              if (e === t)
                  return !0;
              var n = t.length;
              return e.length > n && e.substr(0, n) === t && "." === e[n]
          }
          function g(e, t) {
              if (t.length < e.length)
                  return !1;
              var n = 0;
              return e.every((function(e) {
                  for (var r = n; r < t.length; r++)
                      if (d(t[r], e))
                          return n = r + 1,
                          !0;
                  return !1
              }
              ))
          }
          function m(e, t, n, r, s) {
              for (var a = o.createMatchers(t, g), u = i.RuleFactory.getCompiledRuleId(n, r, s.repository), c = 0, l = a; c < l.length; c++) {
                  var h = l[c];
                  e.push({
                      matcher: h.matcher,
                      ruleId: u,
                      grammar: s,
                      priority: h.priority
                  })
              }
          }
          t.ScopeDependencyCollector = l,
          t.collectSpecificDependencies = p,
          t.collectDependencies = f;
          var y = function(e, t, n, r) {
              this.scopeName = e,
              this.languageId = t,
              this.tokenType = n,
              this.themeData = r
          };
          t.ScopeMetadata = y;
          var _ = function() {
              function e(t, n, r) {
                  if (this._initialLanguage = t,
                  this._themeProvider = n,
                  this._cache = new Map,
                  this._defaultMetaData = new y("",this._initialLanguage,0,[this._themeProvider.getDefaults()]),
                  this._embeddedLanguages = Object.create(null),
                  r)
                      for (var i = Object.keys(r), o = 0, s = i.length; o < s; o++) {
                          var a = i[o]
                            , u = r[a];
                          "number" == typeof u && 0 !== u ? this._embeddedLanguages[a] = u : console.warn("Invalid embedded language found at scope " + a + ": <<" + u + ">>")
                      }
                  var c = Object.keys(this._embeddedLanguages).map((function(t) {
                      return e._escapeRegExpCharacters(t)
                  }
                  ));
                  0 === c.length ? this._embeddedLanguagesRegex = null : (c.sort(),
                  c.reverse(),
                  this._embeddedLanguagesRegex = new RegExp("^((" + c.join(")|(") + "))($|\\.)",""))
              }
              return e.prototype.onDidChangeTheme = function() {
                  this._cache = new Map,
                  this._defaultMetaData = new y("",this._initialLanguage,0,[this._themeProvider.getDefaults()])
              }
              ,
              e.prototype.getDefaultMetadata = function() {
                  return this._defaultMetaData
              }
              ,
              e._escapeRegExpCharacters = function(e) {
                  return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")
              }
              ,
              e.prototype.getMetadataForScope = function(t) {
                  if (null === t)
                      return e._NULL_SCOPE_METADATA;
                  var n = this._cache.get(t);
                  return n || (n = this._doGetMetadataForScope(t),
                  this._cache.set(t, n),
                  n)
              }
              ,
              e.prototype._doGetMetadataForScope = function(e) {
                  var t = this._scopeToLanguage(e)
                    , n = this._toStandardTokenType(e)
                    , r = this._themeProvider.themeMatch(e);
                  return new y(e,t,n,r)
              }
              ,
              e.prototype._scopeToLanguage = function(e) {
                  if (!e)
                      return 0;
                  if (!this._embeddedLanguagesRegex)
                      return 0;
                  var t = e.match(this._embeddedLanguagesRegex);
                  return t && (this._embeddedLanguages[t[1]] || 0) || 0
              }
              ,
              e.prototype._toStandardTokenType = function(t) {
                  var n = t.match(e.STANDARD_TOKEN_TYPE_REGEXP);
                  if (!n)
                      return 0;
                  switch (n[1]) {
                  case "comment":
                      return 1;
                  case "string":
                      return 2;
                  case "regex":
                      return 4;
                  case "meta.embedded":
                      return 8
                  }
                  throw new Error("Unexpected match for standard token type!")
              }
              ,
              e._NULL_SCOPE_METADATA = new y("",0,0,null),
              e.STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/,
              e
          }()
            , v = function() {
              function e(e, t, n, r, i, s) {
                  if (this._scopeMetadataProvider = new _(t,i,n),
                  this._onigLib = s,
                  this._rootId = -1,
                  this._lastRuleId = 0,
                  this._ruleId2desc = [null],
                  this._includedGrammars = {},
                  this._grammarRepository = i,
                  this._grammar = w(e, null),
                  this._injections = null,
                  this._tokenTypeMatchers = [],
                  r)
                      for (var a = 0, u = Object.keys(r); a < u.length; a++)
                          for (var c = u[a], l = 0, h = o.createMatchers(c, g); l < h.length; l++) {
                              var p = h[l];
                              this._tokenTypeMatchers.push({
                                  matcher: p.matcher,
                                  type: r[c]
                              })
                          }
              }
              return e.prototype.dispose = function() {
                  for (var e = 0, t = this._ruleId2desc; e < t.length; e++) {
                      var n = t[e];
                      n && n.dispose()
                  }
              }
              ,
              e.prototype.createOnigScanner = function(e) {
                  return this._onigLib.createOnigScanner(e)
              }
              ,
              e.prototype.createOnigString = function(e) {
                  return this._onigLib.createOnigString(e)
              }
              ,
              e.prototype.onDidChangeTheme = function() {
                  this._scopeMetadataProvider.onDidChangeTheme()
              }
              ,
              e.prototype.getMetadataForScope = function(e) {
                  return this._scopeMetadataProvider.getMetadataForScope(e)
              }
              ,
              e.prototype.getInjections = function() {
                  var e = this;
                  if (null === this._injections) {
                      this._injections = [];
                      var t = this._grammar.injections;
                      if (t)
                          for (var n in t)
                              m(this._injections, n, t[n], this, this._grammar);
                      if (this._grammarRepository) {
                          var r = this._grammarRepository.injections(this._grammar.scopeName);
                          r && r.forEach((function(t) {
                              var n = e.getExternalGrammar(t);
                              if (n) {
                                  var r = n.injectionSelector;
                                  r && m(e._injections, r, n, e, n)
                              }
                          }
                          ))
                      }
                      this._injections.sort((function(e, t) {
                          return e.priority - t.priority
                      }
                      ))
                  }
                  return this._injections
              }
              ,
              e.prototype.registerRule = function(e) {
                  var t = ++this._lastRuleId
                    , n = e(t);
                  return this._ruleId2desc[t] = n,
                  n
              }
              ,
              e.prototype.getRule = function(e) {
                  return this._ruleId2desc[e]
              }
              ,
              e.prototype.getExternalGrammar = function(e, t) {
                  if (this._includedGrammars[e])
                      return this._includedGrammars[e];
                  if (this._grammarRepository) {
                      var n = this._grammarRepository.lookup(e);
                      if (n)
                          return this._includedGrammars[e] = w(n, t && t.$base),
                          this._includedGrammars[e]
                  }
                  return null
              }
              ,
              e.prototype.tokenizeLine = function(e, t) {
                  var n = this._tokenize(e, t, !1);
                  return {
                      tokens: n.lineTokens.getResult(n.ruleStack, n.lineLength),
                      ruleStack: n.ruleStack
                  }
              }
              ,
              e.prototype.tokenizeLine2 = function(e, t) {
                  var n = this._tokenize(e, t, !0);
                  return {
                      tokens: n.lineTokens.getBinaryResult(n.ruleStack, n.lineLength),
                      ruleStack: n.ruleStack
                  }
              }
              ,
              e.prototype._tokenize = function(e, t, n) {
                  var r;
                  if (-1 === this._rootId && (this._rootId = i.RuleFactory.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository)),
                  t && t !== N.NULL)
                      r = !1,
                      t.reset();
                  else {
                      r = !0;
                      var o = this._scopeMetadataProvider.getDefaultMetadata()
                        , s = o.themeData[0]
                        , a = L.set(0, o.languageId, o.tokenType, s.fontStyle, s.foreground, s.background)
                        , u = this.getRule(this._rootId).getName(null, null)
                        , c = this._scopeMetadataProvider.getMetadataForScope(u)
                        , l = j.mergeMetadata(a, null, c)
                        , h = new j(null,null === u ? "unknown" : u,l);
                      t = new N(null,this._rootId,-1,-1,!1,null,h,h)
                  }
                  e += "\n";
                  var p = this.createOnigString(e)
                    , f = p.content.length
                    , d = new R(n,e,this._tokenTypeMatchers)
                    , g = S(this, p, r, 0, t, d, !0);
                  return b(p),
                  {
                      lineLength: f,
                      lineTokens: d,
                      ruleStack: g
                  }
              }
              ,
              e
          }();
          function b(e) {
              "function" == typeof e.dispose && e.dispose()
          }
          function w(e, t) {
              return (e = r.clone(e)).repository = e.repository || {},
              e.repository.$self = {
                  $vscodeTextmateLocation: e.$vscodeTextmateLocation,
                  patterns: e.patterns,
                  name: e.scopeName
              },
              e.repository.$base = t || e.repository.$self,
              e
          }
          function k(e, t, n, r, i, o, s) {
              if (0 !== o.length) {
                  for (var a = t.content, u = Math.min(o.length, s.length), c = [], l = s[0].end, h = 0; h < u; h++) {
                      var p = o[h];
                      if (null !== p) {
                          var f = s[h];
                          if (0 !== f.length) {
                              if (f.start > l)
                                  break;
                              for (; c.length > 0 && c[c.length - 1].endPos <= f.start; )
                                  i.produceFromScopes(c[c.length - 1].scopes, c[c.length - 1].endPos),
                                  c.pop();
                              if (c.length > 0 ? i.produceFromScopes(c[c.length - 1].scopes, f.start) : i.produce(r, f.start),
                              p.retokenizeCapturedWithRuleId) {
                                  var d = p.getName(a, s)
                                    , g = r.contentNameScopesList.push(e, d)
                                    , m = p.getContentName(a, s)
                                    , y = g.push(e, m)
                                    , _ = r.push(p.retokenizeCapturedWithRuleId, f.start, -1, !1, null, g, y)
                                    , v = e.createOnigString(a.substring(0, f.end));
                                  S(e, v, n && 0 === f.start, f.start, _, i, !1),
                                  b(v)
                              } else {
                                  var w = p.getName(a, s);
                                  if (null !== w) {
                                      var k = (c.length > 0 ? c[c.length - 1].scopes : r.contentNameScopesList).push(e, w);
                                      c.push(new A(k,f.end))
                                  }
                              }
                          }
                      }
                  }
                  for (; c.length > 0; )
                      i.produceFromScopes(c[c.length - 1].scopes, c[c.length - 1].endPos),
                      c.pop()
              }
          }
          function x(e) {
              for (var t = [], n = 0, r = e.rules.length; n < r; n++)
                  t.push("   - " + e.rules[n] + ": " + e.debugRegExps[n]);
              return t.join("\n")
          }
          function C(e, t, n, r, i, o) {
              var u = function(e, t, n, r, i, o) {
                  var u = i.getRule(e)
                    , c = u.compile(e, i.endRule, n, r === o)
                    , l = 0;
                  s.DebugFlags.InDebugMode && (l = a());
                  var h = c.scanner.findNextMatchSync(t, r);
                  if (s.DebugFlags.InDebugMode) {
                      var p = a() - l;
                      p > 5 && console.warn("Rule " + u.debugName + " (" + u.id + ") matching took " + p + " against '" + t + "'"),
                      h && console.log("matched rule id: " + c.rules[h.index] + " from " + h.captureIndices[0].start + " to " + h.captureIndices[0].end)
                  }
                  return h ? {
                      captureIndices: h.captureIndices,
                      matchedRuleId: c.rules[h.index]
                  } : null
              }(e, t, n, r, i, o)
                , c = e.getInjections();
              if (0 === c.length)
                  return u;
              var l = function(e, t, n, r, i, o, a) {
                  for (var u, c = Number.MAX_VALUE, l = null, h = 0, p = o.contentNameScopesList.generateScopes(), f = 0, d = e.length; f < d; f++) {
                      var g = e[f];
                      if (g.matcher(p)) {
                          var m = t.getRule(g.ruleId).compile(t, null, r, i === a)
                            , y = m.scanner.findNextMatchSync(n, i);
                          if (s.DebugFlags.InDebugMode && (console.log("  scanning for injections"),
                          console.log(x(m))),
                          y) {
                              var _ = y.captureIndices[0].start;
                              if (!(_ >= c) && (c = _,
                              l = y.captureIndices,
                              u = m.rules[y.index],
                              h = g.priority,
                              c === i))
                                  break
                          }
                      }
                  }
                  return l ? {
                      priorityMatch: -1 === h,
                      captureIndices: l,
                      matchedRuleId: u
                  } : null
              }(c, e, t, n, r, i, o);
              if (!l)
                  return u;
              if (!u)
                  return l;
              var h = u.captureIndices[0].start
                , p = l.captureIndices[0].start;
              return p < h || l.priorityMatch && p === h ? l : u
          }
          function S(e, t, n, r, o, a, u) {
              var c = t.content.length
                , l = !1
                , h = -1;
              if (u) {
                  var p = function(e, t, n, r, o, a) {
                      for (var u = o.beginRuleCapturedEOL ? 0 : -1, c = [], l = o; l; l = l.pop()) {
                          var h = l.getRule(e);
                          h instanceof i.BeginWhileRule && c.push({
                              rule: h,
                              stack: l
                          })
                      }
                      for (var p = c.pop(); p; p = c.pop()) {
                          var f = p.rule.compileWhile(e, p.stack.endRule, n, u === r)
                            , d = f.scanner.findNextMatchSync(t, r);
                          if (s.DebugFlags.InDebugMode && (console.log("  scanning for while rule"),
                          console.log(x(f))),
                          !d) {
                              s.DebugFlags.InDebugMode && console.log("  popping " + p.rule.debugName + " - " + p.rule.debugWhileRegExp),
                              o = p.stack.pop();
                              break
                          }
                          if (-2 !== f.rules[d.index]) {
                              o = p.stack.pop();
                              break
                          }
                          d.captureIndices && d.captureIndices.length && (a.produce(p.stack, d.captureIndices[0].start),
                          k(e, t, n, p.stack, a, p.rule.whileCaptures, d.captureIndices),
                          a.produce(p.stack, d.captureIndices[0].end),
                          u = d.captureIndices[0].end,
                          d.captureIndices[0].end > r && (r = d.captureIndices[0].end,
                          n = !1))
                      }
                      return {
                          stack: o,
                          linePos: r,
                          anchorPosition: u,
                          isFirstLine: n
                      }
                  }(e, t, n, r, o, a);
                  o = p.stack,
                  r = p.linePos,
                  n = p.isFirstLine,
                  h = p.anchorPosition
              }
              for (; !l; )
                  f();
              function f() {
                  s.DebugFlags.InDebugMode && (console.log(""),
                  console.log("@@scanNext " + r + ": |" + t.content.substr(r).replace(/\n$/, "\\n") + "|"));
                  var u = C(e, t, n, r, o, h);
                  if (!u)
                      return s.DebugFlags.InDebugMode && console.log("  no more matches."),
                      a.produce(o, c),
                      void (l = !0);
                  var p = u.captureIndices
                    , f = u.matchedRuleId
                    , d = !!(p && p.length > 0) && p[0].end > r;
                  if (-1 === f) {
                      var g = o.getRule(e);
                      s.DebugFlags.InDebugMode && console.log("  popping " + g.debugName + " - " + g.debugEndRegExp),
                      a.produce(o, p[0].start),
                      o = o.setContentNameScopesList(o.nameScopesList),
                      k(e, t, n, o, a, g.endCaptures, p),
                      a.produce(o, p[0].end);
                      var m = o;
                      if (o = o.pop(),
                      h = m.getAnchorPos(),
                      !d && m.getEnterPos() === r)
                          return s.DebugFlags.InDebugMode && console.error("[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing"),
                          o = m,
                          a.produce(o, c),
                          void (l = !0)
                  } else {
                      var y = e.getRule(f);
                      a.produce(o, p[0].start);
                      var _ = o
                        , v = y.getName(t.content, p)
                        , b = o.contentNameScopesList.push(e, v);
                      if (o = o.push(f, r, h, p[0].end === c, null, b, b),
                      y instanceof i.BeginEndRule) {
                          var w = y;
                          s.DebugFlags.InDebugMode && console.log("  pushing " + w.debugName + " - " + w.debugBeginRegExp),
                          k(e, t, n, o, a, w.beginCaptures, p),
                          a.produce(o, p[0].end),
                          h = p[0].end;
                          var x = w.getContentName(t.content, p)
                            , S = b.push(e, x);
                          if (o = o.setContentNameScopesList(S),
                          w.endHasBackReferences && (o = o.setEndRule(w.getEndWithResolvedBackReferences(t.content, p))),
                          !d && _.hasSameRuleAs(o))
                              return s.DebugFlags.InDebugMode && console.error("[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"),
                              o = o.pop(),
                              a.produce(o, c),
                              void (l = !0)
                      } else if (y instanceof i.BeginWhileRule) {
                          if (w = y,
                          s.DebugFlags.InDebugMode && console.log("  pushing " + w.debugName),
                          k(e, t, n, o, a, w.beginCaptures, p),
                          a.produce(o, p[0].end),
                          h = p[0].end,
                          x = w.getContentName(t.content, p),
                          S = b.push(e, x),
                          o = o.setContentNameScopesList(S),
                          w.whileHasBackReferences && (o = o.setEndRule(w.getWhileWithResolvedBackReferences(t.content, p))),
                          !d && _.hasSameRuleAs(o))
                              return s.DebugFlags.InDebugMode && console.error("[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"),
                              o = o.pop(),
                              a.produce(o, c),
                              void (l = !0)
                      } else {
                          var L = y;
                          if (s.DebugFlags.InDebugMode && console.log("  matched " + L.debugName + " - " + L.debugMatchRegExp),
                          k(e, t, n, o, a, L.captures, p),
                          a.produce(o, p[0].end),
                          o = o.pop(),
                          !d)
                              return s.DebugFlags.InDebugMode && console.error("[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping"),
                              o = o.safePop(),
                              a.produce(o, c),
                              void (l = !0)
                      }
                  }
                  p[0].end > r && (r = p[0].end,
                  n = !1)
              }
              return o
          }
          t.Grammar = v;
          var L = function() {
              function e() {}
              return e.toBinaryStr = function(e) {
                  for (var t = e.toString(2); t.length < 32; )
                      t = "0" + t;
                  return t
              }
              ,
              e.printMetadata = function(t) {
                  var n = e.getLanguageId(t)
                    , r = e.getTokenType(t)
                    , i = e.getFontStyle(t)
                    , o = e.getForeground(t)
                    , s = e.getBackground(t);
                  console.log({
                      languageId: n,
                      tokenType: r,
                      fontStyle: i,
                      foreground: o,
                      background: s
                  })
              }
              ,
              e.getLanguageId = function(e) {
                  return (255 & e) >>> 0
              }
              ,
              e.getTokenType = function(e) {
                  return (1792 & e) >>> 8
              }
              ,
              e.getFontStyle = function(e) {
                  return (14336 & e) >>> 11
              }
              ,
              e.getForeground = function(e) {
                  return (8372224 & e) >>> 14
              }
              ,
              e.getBackground = function(e) {
                  return (4286578688 & e) >>> 23
              }
              ,
              e.set = function(t, n, r, i, o, s) {
                  var a = e.getLanguageId(t)
                    , u = e.getTokenType(t)
                    , c = e.getFontStyle(t)
                    , l = e.getForeground(t)
                    , h = e.getBackground(t);
                  return 0 !== n && (a = n),
                  0 !== r && (u = 8 === r ? 0 : r),
                  -1 !== i && (c = i),
                  0 !== o && (l = o),
                  0 !== s && (h = s),
                  (a << 0 | u << 8 | c << 11 | l << 14 | h << 23) >>> 0
              }
              ,
              e
          }();
          t.StackElementMetadata = L;
          var j = function() {
              function e(e, t, n) {
                  this.parent = e,
                  this.scope = t,
                  this.metadata = n
              }
              return e._equals = function(e, t) {
                  for (; ; ) {
                      if (e === t)
                          return !0;
                      if (!e && !t)
                          return !0;
                      if (!e || !t)
                          return !1;
                      if (e.scope !== t.scope || e.metadata !== t.metadata)
                          return !1;
                      e = e.parent,
                      t = t.parent
                  }
              }
              ,
              e.prototype.equals = function(t) {
                  return e._equals(this, t)
              }
              ,
              e._matchesScope = function(e, t, n) {
                  return t === e || e.substring(0, n.length) === n
              }
              ,
              e._matches = function(e, t) {
                  if (null === t)
                      return !0;
                  for (var n = t.length, r = 0, i = t[r], o = i + "."; e; ) {
                      if (this._matchesScope(e.scope, i, o)) {
                          if (++r === n)
                              return !0;
                          o = (i = t[r]) + "."
                      }
                      e = e.parent
                  }
                  return !1
              }
              ,
              e.mergeMetadata = function(e, t, n) {
                  if (null === n)
                      return e;
                  var r = -1
                    , i = 0
                    , o = 0;
                  if (null !== n.themeData)
                      for (var s = 0, a = n.themeData.length; s < a; s++) {
                          var u = n.themeData[s];
                          if (this._matches(t, u.parentScopes)) {
                              r = u.fontStyle,
                              i = u.foreground,
                              o = u.background;
                              break
                          }
                      }
                  return L.set(e, n.languageId, n.tokenType, r, i, o)
              }
              ,
              e._push = function(t, n, r) {
                  for (var i = 0, o = r.length; i < o; i++) {
                      var s = r[i]
                        , a = n.getMetadataForScope(s)
                        , u = e.mergeMetadata(t.metadata, t, a);
                      t = new e(t,s,u)
                  }
                  return t
              }
              ,
              e.prototype.push = function(t, n) {
                  return null === n ? this : n.indexOf(" ") >= 0 ? e._push(this, t, n.split(/ /g)) : e._push(this, t, [n])
              }
              ,
              e._generateScopes = function(e) {
                  for (var t = [], n = 0; e; )
                      t[n++] = e.scope,
                      e = e.parent;
                  return t.reverse(),
                  t
              }
              ,
              e.prototype.generateScopes = function() {
                  return e._generateScopes(this)
              }
              ,
              e
          }();
          t.ScopeListElement = j;
          var N = function() {
              function e(e, t, n, r, i, o, s, a) {
                  this.parent = e,
                  this.depth = this.parent ? this.parent.depth + 1 : 1,
                  this.ruleId = t,
                  this._enterPos = n,
                  this._anchorPos = r,
                  this.beginRuleCapturedEOL = i,
                  this.endRule = o,
                  this.nameScopesList = s,
                  this.contentNameScopesList = a
              }
              return e._structuralEquals = function(e, t) {
                  for (; ; ) {
                      if (e === t)
                          return !0;
                      if (!e && !t)
                          return !0;
                      if (!e || !t)
                          return !1;
                      if (e.depth !== t.depth || e.ruleId !== t.ruleId || e.endRule !== t.endRule)
                          return !1;
                      e = e.parent,
                      t = t.parent
                  }
              }
              ,
              e._equals = function(e, t) {
                  return e === t || !!this._structuralEquals(e, t) && e.contentNameScopesList.equals(t.contentNameScopesList)
              }
              ,
              e.prototype.clone = function() {
                  return this
              }
              ,
              e.prototype.equals = function(t) {
                  return null !== t && e._equals(this, t)
              }
              ,
              e._reset = function(e) {
                  for (; e; )
                      e._enterPos = -1,
                      e._anchorPos = -1,
                      e = e.parent
              }
              ,
              e.prototype.reset = function() {
                  e._reset(this)
              }
              ,
              e.prototype.pop = function() {
                  return this.parent
              }
              ,
              e.prototype.safePop = function() {
                  return this.parent ? this.parent : this
              }
              ,
              e.prototype.push = function(t, n, r, i, o, s, a) {
                  return new e(this,t,n,r,i,o,s,a)
              }
              ,
              e.prototype.getEnterPos = function() {
                  return this._enterPos
              }
              ,
              e.prototype.getAnchorPos = function() {
                  return this._anchorPos
              }
              ,
              e.prototype.getRule = function(e) {
                  return e.getRule(this.ruleId)
              }
              ,
              e.prototype._writeString = function(e, t) {
                  return this.parent && (t = this.parent._writeString(e, t)),
                  e[t++] = "(" + this.ruleId + ", TODO-" + this.nameScopesList + ", TODO-" + this.contentNameScopesList + ")",
                  t
              }
              ,
              e.prototype.toString = function() {
                  var e = [];
                  return this._writeString(e, 0),
                  "[" + e.join(",") + "]"
              }
              ,
              e.prototype.setContentNameScopesList = function(e) {
                  return this.contentNameScopesList === e ? this : this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, e)
              }
              ,
              e.prototype.setEndRule = function(t) {
                  return this.endRule === t ? this : new e(this.parent,this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,t,this.nameScopesList,this.contentNameScopesList)
              }
              ,
              e.prototype.hasSameRuleAs = function(e) {
                  return this.ruleId === e.ruleId
              }
              ,
              e.NULL = new e(null,0,0,0,!1,null,null,null),
              e
          }();
          t.StackElement = N;
          var A = function(e, t) {
              this.scopes = e,
              this.endPos = t
          };
          t.LocalStackElement = A;
          var R = function() {
              function e(e, t, n) {
                  this._emitBinaryTokens = e,
                  this._tokenTypeOverrides = n,
                  s.DebugFlags.InDebugMode ? this._lineText = t : this._lineText = null,
                  this._tokens = [],
                  this._binaryTokens = [],
                  this._lastTokenEndIndex = 0
              }
              return e.prototype.produce = function(e, t) {
                  this.produceFromScopes(e.contentNameScopesList, t)
              }
              ,
              e.prototype.produceFromScopes = function(e, t) {
                  if (!(this._lastTokenEndIndex >= t)) {
                      if (this._emitBinaryTokens) {
                          for (var n = e.metadata, r = 0, i = this._tokenTypeOverrides; r < i.length; r++) {
                              var o = i[r];
                              o.matcher(e.generateScopes()) && (n = L.set(n, 0, P(o.type), -1, 0, 0))
                          }
                          return this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === n || (this._binaryTokens.push(this._lastTokenEndIndex),
                          this._binaryTokens.push(n)),
                          void (this._lastTokenEndIndex = t)
                      }
                      var a = e.generateScopes();
                      if (s.DebugFlags.InDebugMode) {
                          console.log("  token: |" + this._lineText.substring(this._lastTokenEndIndex, t).replace(/\n$/, "\\n") + "|");
                          for (var u = 0; u < a.length; u++)
                              console.log("      * " + a[u])
                      }
                      this._tokens.push({
                          startIndex: this._lastTokenEndIndex,
                          endIndex: t,
                          scopes: a
                      }),
                      this._lastTokenEndIndex = t
                  }
              }
              ,
              e.prototype.getResult = function(e, t) {
                  return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === t - 1 && this._tokens.pop(),
                  0 === this._tokens.length && (this._lastTokenEndIndex = -1,
                  this.produce(e, t),
                  this._tokens[this._tokens.length - 1].startIndex = 0),
                  this._tokens
              }
              ,
              e.prototype.getBinaryResult = function(e, t) {
                  this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === t - 1 && (this._binaryTokens.pop(),
                  this._binaryTokens.pop()),
                  0 === this._binaryTokens.length && (this._lastTokenEndIndex = -1,
                  this.produce(e, t),
                  this._binaryTokens[this._binaryTokens.length - 2] = 0);
                  for (var n = new Uint32Array(this._binaryTokens.length), r = 0, i = this._binaryTokens.length; r < i; r++)
                      n[r] = this._binaryTokens[r];
                  return n
              }
              ,
              e
          }();
          function P(e) {
              switch (e) {
              case 4:
                  return 4;
              case 2:
                  return 2;
              case 1:
                  return 1;
              case 0:
              default:
                  return 8
              }
          }
      }
      , function(e, t, n) {
          function r(e) {
              return Array.isArray(e) ? function(e) {
                  for (var t = [], n = 0, i = e.length; n < i; n++)
                      t[n] = r(e[n]);
                  return t
              }(e) : "object" == typeof e ? function(e) {
                  var t = {};
                  for (var n in e)
                      t[n] = r(e[n]);
                  return t
              }(e) : e
          }
          Object.defineProperty(t, "__esModule", {
              value: !0
          }),
          t.clone = function(e) {
              return r(e)
          }
          ,
          t.mergeObjects = function(e) {
              for (var t = [], n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n];
              return t.forEach((function(t) {
                  for (var n in t)
                      e[n] = t[n]
              }
              )),
              e
          }
          ,
          t.basename = function e(t) {
              var n = ~t.lastIndexOf("/") || ~t.lastIndexOf("\\");
              return 0 === n ? t : ~n == t.length - 1 ? e(t.substring(0, t.length - 1)) : t.substr(1 + ~n)
          }
          ;
          var i = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/
            , o = function() {
              function e() {}
              return e.hasCaptures = function(e) {
                  return null !== e && i.test(e)
              }
              ,
              e.replaceCaptures = function(e, t, n) {
                  return e.replace(i, (function(e, r, i, o) {
                      var s = n[parseInt(r || i, 10)];
                      if (!s)
                          return e;
                      for (var a = t.substring(s.start, s.end); "." === a[0]; )
                          a = a.substring(1);
                      switch (o) {
                      case "downcase":
                          return a.toLowerCase();
                      case "upcase":
                          return a.toUpperCase();
                      default:
                          return a
                      }
                  }
                  ))
              }
              ,
              e
          }();
          t.RegexSource = o
      }
      , function(e, t, n) {
          (function(e) {
              Object.defineProperty(t, "__esModule", {
                  value: !0
              }),
              t.DebugFlags = {
                  InDebugMode: void 0 !== e && !!e.env.VSCODE_TEXTMATE_DEBUG
              }
          }
          ).call(this, n(7))
      }
      , function(e, t, n) {
          var r = this && this.__awaiter || function(e, t, n, r) {
              return new (n || (n = Promise))((function(i, o) {
                  function s(e) {
                      try {
                          u(r.next(e))
                      } catch (e) {
                          o(e)
                      }
                  }
                  function a(e) {
                      try {
                          u(r.throw(e))
                      } catch (e) {
                          o(e)
                      }
                  }
                  function u(e) {
                      var t;
                      e.done ? i(e.value) : (t = e.value,
                      t instanceof n ? t : new n((function(e) {
                          e(t)
                      }
                      ))).then(s, a)
                  }
                  u((r = r.apply(e, t || [])).next())
              }
              ))
          }
            , i = this && this.__generator || function(e, t) {
              var n, r, i, o, s = {
                  label: 0,
                  sent: function() {
                      if (1 & i[0])
                          throw i[1];
                      return i[1]
                  },
                  trys: [],
                  ops: []
              };
              return o = {
                  next: a(0),
                  throw: a(1),
                  return: a(2)
              },
              "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                  return this
              }
              ),
              o;
              function a(o) {
                  return function(a) {
                      return function(o) {
                          if (n)
                              throw new TypeError("Generator is already executing.");
                          for (; s; )
                              try {
                                  if (n = 1,
                                  r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                  0) : r.next) && !(i = i.call(r, o[1])).done)
                                      return i;
                                  switch (r = 0,
                                  i && (o = [2 & o[0], i.value]),
                                  o[0]) {
                                  case 0:
                                  case 1:
                                      i = o;
                                      break;
                                  case 4:
                                      return s.label++,
                                      {
                                          value: o[1],
                                          done: !1
                                      };
                                  case 5:
                                      s.label++,
                                      r = o[1],
                                      o = [0];
                                      continue;
                                  case 7:
                                      o = s.ops.pop(),
                                      s.trys.pop();
                                      continue;
                                  default:
                                      if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                          s = 0;
                                          continue
                                      }
                                      if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                          s.label = o[1];
                                          break
                                      }
                                      if (6 === o[0] && s.label < i[1]) {
                                          s.label = i[1],
                                          i = o;
                                          break
                                      }
                                      if (i && s.label < i[2]) {
                                          s.label = i[2],
                                          s.ops.push(o);
                                          break
                                      }
                                      i[2] && s.ops.pop(),
                                      s.trys.pop();
                                      continue
                                  }
                                  o = t.call(e, s)
                              } catch (e) {
                                  o = [6, e],
                                  r = 0
                              } finally {
                                  n = i = 0
                              }
                          if (5 & o[0])
                              throw o[1];
                          return {
                              value: o[0] ? o[1] : void 0,
                              done: !0
                          }
                      }([o, a])
                  }
              }
          }
          ;
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          var o = n(4)
            , s = n(8)
            , a = n(11)
            , u = n(0)
            , c = function() {
              function e(e) {
                  this._options = e,
                  this._syncRegistry = new o.SyncRegistry(a.Theme.createFromRawTheme(e.theme, e.colorMap),e.onigLib),
                  this._ensureGrammarCache = new Map
              }
              return e.prototype.dispose = function() {
                  this._syncRegistry.dispose()
              }
              ,
              e.prototype.setTheme = function(e, t) {
                  this._syncRegistry.setTheme(a.Theme.createFromRawTheme(e, t))
              }
              ,
              e.prototype.getColorMap = function() {
                  return this._syncRegistry.getColorMap()
              }
              ,
              e.prototype.loadGrammarWithEmbeddedLanguages = function(e, t, n) {
                  return this.loadGrammarWithConfiguration(e, t, {
                      embeddedLanguages: n
                  })
              }
              ,
              e.prototype.loadGrammarWithConfiguration = function(e, t, n) {
                  return this._loadGrammar(e, t, n.embeddedLanguages, n.tokenTypes)
              }
              ,
              e.prototype.loadGrammar = function(e) {
                  return this._loadGrammar(e, 0, null, null)
              }
              ,
              e.prototype._doLoadSingleGrammar = function(e) {
                  return r(this, void 0, void 0, (function() {
                      var t, n;
                      return i(this, (function(r) {
                          switch (r.label) {
                          case 0:
                              return [4, this._options.loadGrammar(e)];
                          case 1:
                              return (t = r.sent()) && (n = "function" == typeof this._options.getInjections ? this._options.getInjections(e) : void 0,
                              this._syncRegistry.addGrammar(t, n)),
                              [2]
                          }
                      }
                      ))
                  }
                  ))
              }
              ,
              e.prototype._loadSingleGrammar = function(e) {
                  return r(this, void 0, void 0, (function() {
                      return i(this, (function(t) {
                          return this._ensureGrammarCache.has(e) || this._ensureGrammarCache.set(e, this._doLoadSingleGrammar(e)),
                          [2, this._ensureGrammarCache.get(e)]
                      }
                      ))
                  }
                  ))
              }
              ,
              e.prototype._collectDependenciesForDep = function(e, t, n) {
                  var r = this._syncRegistry.lookup(n.scopeName);
                  if (r) {
                      n instanceof u.FullScopeDependency ? u.collectDependencies(t, this._syncRegistry.lookup(e), r) : u.collectSpecificDependencies(t, this._syncRegistry.lookup(e), r, n.include);
                      var i = this._syncRegistry.injections(n.scopeName);
                      if (i)
                          for (var o = 0, s = i; o < s.length; o++) {
                              var a = s[o];
                              t.add(new u.FullScopeDependency(a))
                          }
                  } else if (n.scopeName === e)
                      throw new Error("No grammar provided for <" + e + ">")
              }
              ,
              e.prototype._loadGrammar = function(e, t, n, o) {
                  return r(this, void 0, void 0, (function() {
                      var r, s, a, c, l, h, p, f, d, g, m, y, _ = this;
                      return i(this, (function(i) {
                          switch (i.label) {
                          case 0:
                              r = new Set,
                              s = new Set,
                              r.add(e),
                              a = [new u.FullScopeDependency(e)],
                              i.label = 1;
                          case 1:
                              return a.length > 0 ? (c = a,
                              a = [],
                              [4, Promise.all(c.map((function(e) {
                                  return _._loadSingleGrammar(e.scopeName)
                              }
                              )))]) : [3, 3];
                          case 2:
                              for (i.sent(),
                              l = new u.ScopeDependencyCollector,
                              h = 0,
                              p = c; h < p.length; h++)
                                  y = p[h],
                                  this._collectDependenciesForDep(e, l, y);
                              for (f = 0,
                              d = l.full; f < d.length; f++)
                                  y = d[f],
                                  r.has(y.scopeName) || (r.add(y.scopeName),
                                  a.push(y));
                              for (g = 0,
                              m = l.partial; g < m.length; g++)
                                  y = m[g],
                                  r.has(y.scopeName) || s.has(y.toKey()) || (s.add(y.toKey()),
                                  a.push(y));
                              return [3, 1];
                          case 3:
                              return [2, this.grammarForScopeName(e, t, n, o)]
                          }
                      }
                      ))
                  }
                  ))
              }
              ,
              e.prototype.addGrammar = function(e, t, n, o) {
                  return void 0 === t && (t = []),
                  void 0 === n && (n = 0),
                  void 0 === o && (o = null),
                  r(this, void 0, void 0, (function() {
                      return i(this, (function(r) {
                          switch (r.label) {
                          case 0:
                              return this._syncRegistry.addGrammar(e, t),
                              [4, this.grammarForScopeName(e.scopeName, n, o)];
                          case 1:
                              return [2, r.sent()]
                          }
                      }
                      ))
                  }
                  ))
              }
              ,
              e.prototype.grammarForScopeName = function(e, t, n, r) {
                  return void 0 === t && (t = 0),
                  void 0 === n && (n = null),
                  void 0 === r && (r = null),
                  this._syncRegistry.grammarForScopeName(e, t, n, r)
              }
              ,
              e
          }();
          t.Registry = c,
          t.INITIAL = u.StackElement.NULL,
          t.parseRawGrammar = s.parseRawGrammar
      }
      , function(e, t, n) {
          var r = this && this.__awaiter || function(e, t, n, r) {
              return new (n || (n = Promise))((function(i, o) {
                  function s(e) {
                      try {
                          u(r.next(e))
                      } catch (e) {
                          o(e)
                      }
                  }
                  function a(e) {
                      try {
                          u(r.throw(e))
                      } catch (e) {
                          o(e)
                      }
                  }
                  function u(e) {
                      var t;
                      e.done ? i(e.value) : (t = e.value,
                      t instanceof n ? t : new n((function(e) {
                          e(t)
                      }
                      ))).then(s, a)
                  }
                  u((r = r.apply(e, t || [])).next())
              }
              ))
          }
            , i = this && this.__generator || function(e, t) {
              var n, r, i, o, s = {
                  label: 0,
                  sent: function() {
                      if (1 & i[0])
                          throw i[1];
                      return i[1]
                  },
                  trys: [],
                  ops: []
              };
              return o = {
                  next: a(0),
                  throw: a(1),
                  return: a(2)
              },
              "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                  return this
              }
              ),
              o;
              function a(o) {
                  return function(a) {
                      return function(o) {
                          if (n)
                              throw new TypeError("Generator is already executing.");
                          for (; s; )
                              try {
                                  if (n = 1,
                                  r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                  0) : r.next) && !(i = i.call(r, o[1])).done)
                                      return i;
                                  switch (r = 0,
                                  i && (o = [2 & o[0], i.value]),
                                  o[0]) {
                                  case 0:
                                  case 1:
                                      i = o;
                                      break;
                                  case 4:
                                      return s.label++,
                                      {
                                          value: o[1],
                                          done: !1
                                      };
                                  case 5:
                                      s.label++,
                                      r = o[1],
                                      o = [0];
                                      continue;
                                  case 7:
                                      o = s.ops.pop(),
                                      s.trys.pop();
                                      continue;
                                  default:
                                      if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                          s = 0;
                                          continue
                                      }
                                      if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                          s.label = o[1];
                                          break
                                      }
                                      if (6 === o[0] && s.label < i[1]) {
                                          s.label = i[1],
                                          i = o;
                                          break
                                      }
                                      if (i && s.label < i[2]) {
                                          s.label = i[2],
                                          s.ops.push(o);
                                          break
                                      }
                                      i[2] && s.ops.pop(),
                                      s.trys.pop();
                                      continue
                                  }
                                  o = t.call(e, s)
                              } catch (e) {
                                  o = [6, e],
                                  r = 0
                              } finally {
                                  n = i = 0
                              }
                          if (5 & o[0])
                              throw o[1];
                          return {
                              value: o[0] ? o[1] : void 0,
                              done: !0
                          }
                      }([o, a])
                  }
              }
          }
          ;
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          var o = n(0)
            , s = function() {
              function e(e, t) {
                  this._theme = e,
                  this._grammars = {},
                  this._rawGrammars = {},
                  this._injectionGrammars = {},
                  this._onigLibPromise = t
              }
              return e.prototype.dispose = function() {
                  for (var e in this._grammars)
                      this._grammars.hasOwnProperty(e) && this._grammars[e].dispose()
              }
              ,
              e.prototype.setTheme = function(e) {
                  var t = this;
                  this._theme = e,
                  Object.keys(this._grammars).forEach((function(e) {
                      t._grammars[e].onDidChangeTheme()
                  }
                  ))
              }
              ,
              e.prototype.getColorMap = function() {
                  return this._theme.getColorMap()
              }
              ,
              e.prototype.addGrammar = function(e, t) {
                  this._rawGrammars[e.scopeName] = e,
                  t && (this._injectionGrammars[e.scopeName] = t)
              }
              ,
              e.prototype.lookup = function(e) {
                  return this._rawGrammars[e]
              }
              ,
              e.prototype.injections = function(e) {
                  return this._injectionGrammars[e]
              }
              ,
              e.prototype.getDefaults = function() {
                  return this._theme.getDefaults()
              }
              ,
              e.prototype.themeMatch = function(e) {
                  return this._theme.match(e)
              }
              ,
              e.prototype.grammarForScopeName = function(e, t, n, s) {
                  return r(this, void 0, void 0, (function() {
                      var r, a, u, c, l;
                      return i(this, (function(i) {
                          switch (i.label) {
                          case 0:
                              return this._grammars[e] ? [3, 2] : (r = this._rawGrammars[e]) ? (a = this._grammars,
                              u = e,
                              c = o.createGrammar,
                              l = [r, t, n, s, this],
                              [4, this._onigLibPromise]) : [2, null];
                          case 1:
                              a[u] = c.apply(void 0, l.concat([i.sent()])),
                              i.label = 2;
                          case 2:
                              return [2, this._grammars[e]]
                          }
                      }
                      ))
                  }
                  ))
              }
              ,
              e
          }();
          t.SyncRegistry = s
      }
      , function(e, t, n) {
          var r, i = this && this.__extends || (r = function(e, t) {
              return (r = Object.setPrototypeOf || {
                  __proto__: []
              }instanceof Array && function(e, t) {
                  e.__proto__ = t
              }
              || function(e, t) {
                  for (var n in t)
                      t.hasOwnProperty(n) && (e[n] = t[n])
              }
              )(e, t)
          }
          ,
          function(e, t) {
              function n() {
                  this.constructor = e
              }
              r(e, t),
              e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
              new n)
          }
          );
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          var o = n(1)
            , s = /\\(\d+)/
            , a = /\\(\d+)/g
            , u = function() {
              function e(e, t, n) {
                  this.debugRegExps = t,
                  this.rules = n,
                  this.scanner = e.createOnigScanner(t)
              }
              return e.prototype.dispose = function() {
                  "function" == typeof this.scanner.dispose && this.scanner.dispose()
              }
              ,
              e
          }();
          t.CompiledRule = u;
          var c = function() {
              function e(e, t, n, r) {
                  this.$location = e,
                  this.id = t,
                  this._name = n || null,
                  this._nameIsCapturing = o.RegexSource.hasCaptures(this._name),
                  this._contentName = r || null,
                  this._contentNameIsCapturing = o.RegexSource.hasCaptures(this._contentName)
              }
              return Object.defineProperty(e.prototype, "debugName", {
                  get: function() {
                      var e = this.$location ? o.basename(this.$location.filename) + ":" + this.$location.line : "unknown";
                      return this.constructor.name + "#" + this.id + " @ " + e
                  },
                  enumerable: !0,
                  configurable: !0
              }),
              e.prototype.getName = function(e, t) {
                  return this._nameIsCapturing && null !== this._name && null !== e && null !== t ? o.RegexSource.replaceCaptures(this._name, e, t) : this._name
              }
              ,
              e.prototype.getContentName = function(e, t) {
                  return this._contentNameIsCapturing && null !== this._contentName ? o.RegexSource.replaceCaptures(this._contentName, e, t) : this._contentName
              }
              ,
              e
          }();
          t.Rule = c;
          var l = function(e) {
              function t(t, n, r, i, o) {
                  var s = e.call(this, t, n, r, i) || this;
                  return s.retokenizeCapturedWithRuleId = o,
                  s
              }
              return i(t, e),
              t.prototype.dispose = function() {}
              ,
              t.prototype.collectPatternsRecursive = function(e, t, n) {
                  throw new Error("Not supported!")
              }
              ,
              t.prototype.compile = function(e, t, n, r) {
                  throw new Error("Not supported!")
              }
              ,
              t
          }(c);
          t.CaptureRule = l;
          var h = function() {
              function e(e, t, n) {
                  if (void 0 === n && (n = !0),
                  n)
                      if (e) {
                          for (var r = e.length, i = 0, o = [], a = !1, u = 0; u < r; u++)
                              if ("\\" === e.charAt(u) && u + 1 < r) {
                                  var c = e.charAt(u + 1);
                                  "z" === c ? (o.push(e.substring(i, u)),
                                  o.push("$(?!\\n)(?<!\\n)"),
                                  i = u + 2) : "A" !== c && "G" !== c || (a = !0),
                                  u++
                              }
                          this.hasAnchor = a,
                          0 === i ? this.source = e : (o.push(e.substring(i, r)),
                          this.source = o.join(""))
                      } else
                          this.hasAnchor = !1,
                          this.source = e;
                  else
                      this.hasAnchor = !1,
                      this.source = e;
                  this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null,
                  this.ruleId = t,
                  this.hasBackReferences = s.test(this.source)
              }
              return e.prototype.clone = function() {
                  return new e(this.source,this.ruleId,!0)
              }
              ,
              e.prototype.setSource = function(e) {
                  this.source !== e && (this.source = e,
                  this.hasAnchor && (this._anchorCache = this._buildAnchorCache()))
              }
              ,
              e.prototype.resolveBackReferences = function(e, t) {
                  var n = t.map((function(t) {
                      return e.substring(t.start, t.end)
                  }
                  ));
                  return a.lastIndex = 0,
                  this.source.replace(a, (function(e, t) {
                      return (n[parseInt(t, 10)] || "").replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")
                  }
                  ))
              }
              ,
              e.prototype._buildAnchorCache = function() {
                  var e, t, n, r, i = [], o = [], s = [], a = [];
                  for (e = 0,
                  t = this.source.length; e < t; e++)
                      n = this.source.charAt(e),
                      i[e] = n,
                      o[e] = n,
                      s[e] = n,
                      a[e] = n,
                      "\\" === n && e + 1 < t && ("A" === (r = this.source.charAt(e + 1)) ? (i[e + 1] = "???",
                      o[e + 1] = "???",
                      s[e + 1] = "A",
                      a[e + 1] = "A") : "G" === r ? (i[e + 1] = "???",
                      o[e + 1] = "G",
                      s[e + 1] = "???",
                      a[e + 1] = "G") : (i[e + 1] = r,
                      o[e + 1] = r,
                      s[e + 1] = r,
                      a[e + 1] = r),
                      e++);
                  return {
                      A0_G0: i.join(""),
                      A0_G1: o.join(""),
                      A1_G0: s.join(""),
                      A1_G1: a.join("")
                  }
              }
              ,
              e.prototype.resolveAnchors = function(e, t) {
                  return this.hasAnchor && this._anchorCache ? e ? t ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : t ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0 : this.source
              }
              ,
              e
          }();
          t.RegExpSource = h;
          var p = function() {
              function e() {
                  this._items = [],
                  this._hasAnchors = !1,
                  this._cached = null,
                  this._anchorCache = {
                      A0_G0: null,
                      A0_G1: null,
                      A1_G0: null,
                      A1_G1: null
                  }
              }
              return e.prototype.dispose = function() {
                  this._disposeCaches()
              }
              ,
              e.prototype._disposeCaches = function() {
                  this._cached && (this._cached.dispose(),
                  this._cached = null),
                  this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(),
                  this._anchorCache.A0_G0 = null),
                  this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(),
                  this._anchorCache.A0_G1 = null),
                  this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(),
                  this._anchorCache.A1_G0 = null),
                  this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(),
                  this._anchorCache.A1_G1 = null)
              }
              ,
              e.prototype.push = function(e) {
                  this._items.push(e),
                  this._hasAnchors = this._hasAnchors || e.hasAnchor
              }
              ,
              e.prototype.unshift = function(e) {
                  this._items.unshift(e),
                  this._hasAnchors = this._hasAnchors || e.hasAnchor
              }
              ,
              e.prototype.length = function() {
                  return this._items.length
              }
              ,
              e.prototype.setSource = function(e, t) {
                  this._items[e].source !== t && (this._disposeCaches(),
                  this._items[e].setSource(t))
              }
              ,
              e.prototype.compile = function(e, t, n) {
                  if (this._hasAnchors)
                      return t ? n ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(e, t, n)),
                      this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(e, t, n)),
                      this._anchorCache.A1_G0) : n ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(e, t, n)),
                      this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(e, t, n)),
                      this._anchorCache.A0_G0);
                  if (!this._cached) {
                      var r = this._items.map((function(e) {
                          return e.source
                      }
                      ));
                      this._cached = new u(e,r,this._items.map((function(e) {
                          return e.ruleId
                      }
                      )))
                  }
                  return this._cached
              }
              ,
              e.prototype._resolveAnchors = function(e, t, n) {
                  var r = this._items.map((function(e) {
                      return e.resolveAnchors(t, n)
                  }
                  ));
                  return new u(e,r,this._items.map((function(e) {
                      return e.ruleId
                  }
                  )))
              }
              ,
              e
          }();
          t.RegExpSourceList = p;
          var f = function(e) {
              function t(t, n, r, i, o) {
                  var s = e.call(this, t, n, r, null) || this;
                  return s._match = new h(i,s.id),
                  s.captures = o,
                  s._cachedCompiledPatterns = null,
                  s
              }
              return i(t, e),
              t.prototype.dispose = function() {
                  this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(),
                  this._cachedCompiledPatterns = null)
              }
              ,
              Object.defineProperty(t.prototype, "debugMatchRegExp", {
                  get: function() {
                      return "" + this._match.source
                  },
                  enumerable: !0,
                  configurable: !0
              }),
              t.prototype.collectPatternsRecursive = function(e, t, n) {
                  t.push(this._match)
              }
              ,
              t.prototype.compile = function(e, t, n, r) {
                  return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new p,
                  this.collectPatternsRecursive(e, this._cachedCompiledPatterns, !0)),
                  this._cachedCompiledPatterns.compile(e, n, r)
              }
              ,
              t
          }(c);
          t.MatchRule = f;
          var d = function(e) {
              function t(t, n, r, i, o) {
                  var s = e.call(this, t, n, r, i) || this;
                  return s.patterns = o.patterns,
                  s.hasMissingPatterns = o.hasMissingPatterns,
                  s._cachedCompiledPatterns = null,
                  s
              }
              return i(t, e),
              t.prototype.dispose = function() {
                  this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(),
                  this._cachedCompiledPatterns = null)
              }
              ,
              t.prototype.collectPatternsRecursive = function(e, t, n) {
                  var r, i;
                  for (r = 0,
                  i = this.patterns.length; r < i; r++)
                      e.getRule(this.patterns[r]).collectPatternsRecursive(e, t, !1)
              }
              ,
              t.prototype.compile = function(e, t, n, r) {
                  return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new p,
                  this.collectPatternsRecursive(e, this._cachedCompiledPatterns, !0)),
                  this._cachedCompiledPatterns.compile(e, n, r)
              }
              ,
              t
          }(c);
          t.IncludeOnlyRule = d;
          var g = function(e) {
              function t(t, n, r, i, o, s, a, u, c, l) {
                  var p = e.call(this, t, n, r, i) || this;
                  return p._begin = new h(o,p.id),
                  p.beginCaptures = s,
                  p._end = new h(a || "???",-1),
                  p.endHasBackReferences = p._end.hasBackReferences,
                  p.endCaptures = u,
                  p.applyEndPatternLast = c || !1,
                  p.patterns = l.patterns,
                  p.hasMissingPatterns = l.hasMissingPatterns,
                  p._cachedCompiledPatterns = null,
                  p
              }
              return i(t, e),
              t.prototype.dispose = function() {
                  this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(),
                  this._cachedCompiledPatterns = null)
              }
              ,
              Object.defineProperty(t.prototype, "debugBeginRegExp", {
                  get: function() {
                      return "" + this._begin.source
                  },
                  enumerable: !0,
                  configurable: !0
              }),
              Object.defineProperty(t.prototype, "debugEndRegExp", {
                  get: function() {
                      return "" + this._end.source
                  },
                  enumerable: !0,
                  configurable: !0
              }),
              t.prototype.getEndWithResolvedBackReferences = function(e, t) {
                  return this._end.resolveBackReferences(e, t)
              }
              ,
              t.prototype.collectPatternsRecursive = function(e, t, n) {
                  if (n) {
                      var r, i = void 0;
                      for (i = 0,
                      r = this.patterns.length; i < r; i++)
                          e.getRule(this.patterns[i]).collectPatternsRecursive(e, t, !1)
                  } else
                      t.push(this._begin)
              }
              ,
              t.prototype.compile = function(e, t, n, r) {
                  return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new p,
                  this.collectPatternsRecursive(e, this._cachedCompiledPatterns, !0),
                  this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end)),
                  this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, t) : this._cachedCompiledPatterns.setSource(0, t)),
                  this._cachedCompiledPatterns.compile(e, n, r)
              }
              ,
              t
          }(c);
          t.BeginEndRule = g;
          var m = function(e) {
              function t(t, n, r, i, o, s, a, u, c) {
                  var l = e.call(this, t, n, r, i) || this;
                  return l._begin = new h(o,l.id),
                  l.beginCaptures = s,
                  l.whileCaptures = u,
                  l._while = new h(a,-2),
                  l.whileHasBackReferences = l._while.hasBackReferences,
                  l.patterns = c.patterns,
                  l.hasMissingPatterns = c.hasMissingPatterns,
                  l._cachedCompiledPatterns = null,
                  l._cachedCompiledWhilePatterns = null,
                  l
              }
              return i(t, e),
              t.prototype.dispose = function() {
                  this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(),
                  this._cachedCompiledPatterns = null),
                  this._cachedCompiledWhilePatterns && (this._cachedCompiledWhilePatterns.dispose(),
                  this._cachedCompiledWhilePatterns = null)
              }
              ,
              Object.defineProperty(t.prototype, "debugBeginRegExp", {
                  get: function() {
                      return "" + this._begin.source
                  },
                  enumerable: !0,
                  configurable: !0
              }),
              Object.defineProperty(t.prototype, "debugWhileRegExp", {
                  get: function() {
                      return "" + this._while.source
                  },
                  enumerable: !0,
                  configurable: !0
              }),
              t.prototype.getWhileWithResolvedBackReferences = function(e, t) {
                  return this._while.resolveBackReferences(e, t)
              }
              ,
              t.prototype.collectPatternsRecursive = function(e, t, n) {
                  if (n) {
                      var r, i = void 0;
                      for (i = 0,
                      r = this.patterns.length; i < r; i++)
                          e.getRule(this.patterns[i]).collectPatternsRecursive(e, t, !1)
                  } else
                      t.push(this._begin)
              }
              ,
              t.prototype.compile = function(e, t, n, r) {
                  return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new p,
                  this.collectPatternsRecursive(e, this._cachedCompiledPatterns, !0)),
                  this._cachedCompiledPatterns.compile(e, n, r)
              }
              ,
              t.prototype.compileWhile = function(e, t, n, r) {
                  return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new p,
                  this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)),
                  this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, t || "???"),
                  this._cachedCompiledWhilePatterns.compile(e, n, r)
              }
              ,
              t
          }(c);
          t.BeginWhileRule = m;
          var y = function() {
              function e() {}
              return e.createCaptureRule = function(e, t, n, r, i) {
                  return e.registerRule((function(e) {
                      return new l(t,e,n,r,i)
                  }
                  ))
              }
              ,
              e.getCompiledRuleId = function(t, n, r) {
                  return t.id || n.registerRule((function(i) {
                      if (t.id = i,
                      t.match)
                          return new f(t.$vscodeTextmateLocation,t.id,t.name,t.match,e._compileCaptures(t.captures, n, r));
                      if (void 0 === t.begin) {
                          t.repository && (r = o.mergeObjects({}, r, t.repository));
                          var s = t.patterns;
                          return void 0 === s && t.include && (s = [{
                              include: t.include
                          }]),
                          new d(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,e._compilePatterns(s, n, r))
                      }
                      return t.while ? new m(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,t.begin,e._compileCaptures(t.beginCaptures || t.captures, n, r),t.while,e._compileCaptures(t.whileCaptures || t.captures, n, r),e._compilePatterns(t.patterns, n, r)) : new g(t.$vscodeTextmateLocation,t.id,t.name,t.contentName,t.begin,e._compileCaptures(t.beginCaptures || t.captures, n, r),t.end,e._compileCaptures(t.endCaptures || t.captures, n, r),t.applyEndPatternLast,e._compilePatterns(t.patterns, n, r))
                  }
                  )),
                  t.id
              }
              ,
              e._compileCaptures = function(t, n, r) {
                  var i = [];
                  if (t) {
                      var o = 0;
                      for (var s in t)
                          "$vscodeTextmateLocation" !== s && (u = parseInt(s, 10)) > o && (o = u);
                      for (var a = 0; a <= o; a++)
                          i[a] = null;
                      for (var s in t)
                          if ("$vscodeTextmateLocation" !== s) {
                              var u = parseInt(s, 10)
                                , c = 0;
                              t[s].patterns && (c = e.getCompiledRuleId(t[s], n, r)),
                              i[u] = e.createCaptureRule(n, t[s].$vscodeTextmateLocation, t[s].name, t[s].contentName, c)
                          }
                  }
                  return i
              }
              ,
              e._compilePatterns = function(t, n, r) {
                  var i = [];
                  if (t)
                      for (var o = 0, s = t.length; o < s; o++) {
                          var a = t[o]
                            , u = -1;
                          if (a.include)
                              if ("#" === a.include.charAt(0)) {
                                  var c = r[a.include.substr(1)];
                                  c && (u = e.getCompiledRuleId(c, n, r))
                              } else if ("$base" === a.include || "$self" === a.include)
                                  u = e.getCompiledRuleId(r[a.include], n, r);
                              else {
                                  var l = null
                                    , h = null
                                    , p = a.include.indexOf("#");
                                  p >= 0 ? (l = a.include.substring(0, p),
                                  h = a.include.substring(p + 1)) : l = a.include;
                                  var f = n.getExternalGrammar(l, r);
                                  if (f)
                                      if (h) {
                                          var y = f.repository[h];
                                          y && (u = e.getCompiledRuleId(y, n, f.repository))
                                      } else
                                          u = e.getCompiledRuleId(f.repository.$self, n, f.repository)
                              }
                          else
                              u = e.getCompiledRuleId(a, n, r);
                          if (-1 !== u) {
                              var _ = n.getRule(u)
                                , v = !1;
                              if ((_ instanceof d || _ instanceof g || _ instanceof m) && _.hasMissingPatterns && 0 === _.patterns.length && (v = !0),
                              v)
                                  continue;
                              i.push(u)
                          }
                      }
                  return {
                      patterns: i,
                      hasMissingPatterns: (t ? t.length : 0) !== i.length
                  }
              }
              ,
              e
          }();
          t.RuleFactory = y
      }
      , function(e, t, n) {
          function r(e) {
              return !!e && !!e.match(/[\w\.:]+/)
          }
          Object.defineProperty(t, "__esModule", {
              value: !0
          }),
          t.createMatchers = function(e, t) {
              for (var n, i, o, s = [], a = (o = (i = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g).exec(n = e),
              {
                  next: function() {
                      if (!o)
                          return null;
                      var e = o[0];
                      return o = i.exec(n),
                      e
                  }
              }), u = a.next(); null !== u; ) {
                  var c = 0;
                  if (2 === u.length && ":" === u.charAt(1)) {
                      switch (u.charAt(0)) {
                      case "R":
                          c = 1;
                          break;
                      case "L":
                          c = -1;
                          break;
                      default:
                          console.log("Unknown priority " + u + " in scope selector")
                      }
                      u = a.next()
                  }
                  var l = p();
                  if (s.push({
                      matcher: l,
                      priority: c
                  }),
                  "," !== u)
                      break;
                  u = a.next()
              }
              return s;
              function h() {
                  if ("-" === u) {
                      u = a.next();
                      var e = h();
                      return function(t) {
                          return !!e && !e(t)
                      }
                  }
                  if ("(" === u) {
                      u = a.next();
                      var n = function() {
                          for (var e = [], t = p(); t && (e.push(t),
                          "|" === u || "," === u); ) {
                              do {
                                  u = a.next()
                              } while ("|" === u || "," === u);t = p()
                          }
                          return function(t) {
                              return e.some((function(e) {
                                  return e(t)
                              }
                              ))
                          }
                      }();
                      return ")" === u && (u = a.next()),
                      n
                  }
                  if (r(u)) {
                      var i = [];
                      do {
                          i.push(u),
                          u = a.next()
                      } while (r(u));return function(e) {
                          return t(i, e)
                      }
                  }
                  return null
              }
              function p() {
                  for (var e = [], t = h(); t; )
                      e.push(t),
                      t = h();
                  return function(t) {
                      return e.every((function(e) {
                          return e(t)
                      }
                      ))
                  }
              }
          }
      }
      , function(e, t) {
          var n, r, i = e.exports = {};
          function o() {
              throw new Error("setTimeout has not been defined")
          }
          function s() {
              throw new Error("clearTimeout has not been defined")
          }
          function a(e) {
              if (n === setTimeout)
                  return setTimeout(e, 0);
              if ((n === o || !n) && setTimeout)
                  return n = setTimeout,
                  setTimeout(e, 0);
              try {
                  return n(e, 0)
              } catch (t) {
                  try {
                      return n.call(null, e, 0)
                  } catch (t) {
                      return n.call(this, e, 0)
                  }
              }
          }
          !function() {
              try {
                  n = "function" == typeof setTimeout ? setTimeout : o
              } catch (e) {
                  n = o
              }
              try {
                  r = "function" == typeof clearTimeout ? clearTimeout : s
              } catch (e) {
                  r = s
              }
          }();
          var u, c = [], l = !1, h = -1;
          function p() {
              l && u && (l = !1,
              u.length ? c = u.concat(c) : h = -1,
              c.length && f())
          }
          function f() {
              if (!l) {
                  var e = a(p);
                  l = !0;
                  for (var t = c.length; t; ) {
                      for (u = c,
                      c = []; ++h < t; )
                          u && u[h].run();
                      h = -1,
                      t = c.length
                  }
                  u = null,
                  l = !1,
                  function(e) {
                      if (r === clearTimeout)
                          return clearTimeout(e);
                      if ((r === s || !r) && clearTimeout)
                          return r = clearTimeout,
                          clearTimeout(e);
                      try {
                          r(e)
                      } catch (t) {
                          try {
                              return r.call(null, e)
                          } catch (t) {
                              return r.call(this, e)
                          }
                      }
                  }(e)
              }
          }
          function d(e, t) {
              this.fun = e,
              this.array = t
          }
          function g() {}
          i.nextTick = function(e) {
              var t = new Array(arguments.length - 1);
              if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
              c.push(new d(e,t)),
              1 !== c.length || l || a(f)
          }
          ,
          d.prototype.run = function() {
              this.fun.apply(null, this.array)
          }
          ,
          i.title = "browser",
          i.browser = !0,
          i.env = {},
          i.argv = [],
          i.version = "",
          i.versions = {},
          i.on = g,
          i.addListener = g,
          i.once = g,
          i.off = g,
          i.removeListener = g,
          i.removeAllListeners = g,
          i.emit = g,
          i.prependListener = g,
          i.prependOnceListener = g,
          i.listeners = function(e) {
              return []
          }
          ,
          i.binding = function(e) {
              throw new Error("process.binding is not supported")
          }
          ,
          i.cwd = function() {
              return "/"
          }
          ,
          i.chdir = function(e) {
              throw new Error("process.chdir is not supported")
          }
          ,
          i.umask = function() {
              return 0
          }
      }
      , function(e, t, n) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          var r = n(9)
            , i = n(2)
            , o = n(10);
          t.parseRawGrammar = function(e, t) {
              return void 0 === t && (t = null),
              null !== t && /\.json$/.test(t) ? function(e, t) {
                  return i.DebugFlags.InDebugMode ? o.parse(e, t, !0) : JSON.parse(e)
              }(e, t) : function(e, t) {
                  return i.DebugFlags.InDebugMode ? r.parseWithLocation(e, t, "$vscodeTextmateLocation") : r.parse(e)
              }(e, t)
          }
      }
      , function(e, t, n) {
          function r(e, t, n) {
              var r = e.length
                , i = 0
                , o = 1
                , s = 0;
              function a(t) {
                  if (null === n)
                      i += t;
                  else
                      for (; t > 0; )
                          10 === e.charCodeAt(i) ? (i++,
                          o++,
                          s = 0) : (i++,
                          s++),
                          t--
              }
              function u(e) {
                  null === n ? i = e : a(e - i)
              }
              function c() {
                  for (; i < r; ) {
                      var t = e.charCodeAt(i);
                      if (32 !== t && 9 !== t && 13 !== t && 10 !== t)
                          break;
                      a(1)
                  }
              }
              function l(t) {
                  return e.substr(i, t.length) === t && (a(t.length),
                  !0)
              }
              function h(t) {
                  var n = e.indexOf(t, i);
                  u(-1 !== n ? n + t.length : r)
              }
              function p(t) {
                  var n = e.indexOf(t, i);
                  if (-1 !== n) {
                      var o = e.substring(i, n);
                      return u(n + t.length),
                      o
                  }
                  return o = e.substr(i),
                  u(r),
                  o
              }
              r > 0 && 65279 === e.charCodeAt(0) && (i = 1);
              var f = 0
                , d = null
                , g = []
                , m = []
                , y = null;
              function _(e, t) {
                  g.push(f),
                  m.push(d),
                  f = e,
                  d = t
              }
              function v() {
                  if (0 === g.length)
                      return b("illegal state stack");
                  f = g.pop(),
                  d = m.pop()
              }
              function b(t) {
                  throw new Error("Near offset " + i + ": " + t + " ~~~" + e.substr(i, 50) + "~~~")
              }
              var w, k, x, C = function() {
                  if (null === y)
                      return b("missing <key>");
                  var e = {};
                  null !== n && (e[n] = {
                      filename: t,
                      line: o,
                      char: s
                  }),
                  d[y] = e,
                  y = null,
                  _(1, e)
              }, S = function() {
                  if (null === y)
                      return b("missing <key>");
                  var e = [];
                  d[y] = e,
                  y = null,
                  _(2, e)
              }, L = function() {
                  var e = {};
                  null !== n && (e[n] = {
                      filename: t,
                      line: o,
                      char: s
                  }),
                  d.push(e),
                  _(1, e)
              }, j = function() {
                  var e = [];
                  d.push(e),
                  _(2, e)
              };
              function N() {
                  if (1 !== f)
                      return b("unexpected </dict>");
                  v()
              }
              function A() {
                  return 1 === f || 2 !== f ? b("unexpected </array>") : void v()
              }
              function R(e) {
                  if (1 === f) {
                      if (null === y)
                          return b("missing <key>");
                      d[y] = e,
                      y = null
                  } else
                      2 === f ? d.push(e) : d = e
              }
              function P(e) {
                  if (isNaN(e))
                      return b("cannot parse float");
                  if (1 === f) {
                      if (null === y)
                          return b("missing <key>");
                      d[y] = e,
                      y = null
                  } else
                      2 === f ? d.push(e) : d = e
              }
              function T(e) {
                  if (isNaN(e))
                      return b("cannot parse integer");
                  if (1 === f) {
                      if (null === y)
                          return b("missing <key>");
                      d[y] = e,
                      y = null
                  } else
                      2 === f ? d.push(e) : d = e
              }
              function I(e) {
                  if (1 === f) {
                      if (null === y)
                          return b("missing <key>");
                      d[y] = e,
                      y = null
                  } else
                      2 === f ? d.push(e) : d = e
              }
              function E(e) {
                  if (1 === f) {
                      if (null === y)
                          return b("missing <key>");
                      d[y] = e,
                      y = null
                  } else
                      2 === f ? d.push(e) : d = e
              }
              function M(e) {
                  if (1 === f) {
                      if (null === y)
                          return b("missing <key>");
                      d[y] = e,
                      y = null
                  } else
                      2 === f ? d.push(e) : d = e
              }
              function O(e) {
                  if (e.isClosed)
                      return "";
                  var t = p("</");
                  return h(">"),
                  t.replace(/&#([0-9]+);/g, (function(e, t) {
                      return String.fromCodePoint(parseInt(t, 10))
                  }
                  )).replace(/&#x([0-9a-f]+);/g, (function(e, t) {
                      return String.fromCodePoint(parseInt(t, 16))
                  }
                  )).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, (function(e) {
                      switch (e) {
                      case "&amp;":
                          return "&";
                      case "&lt;":
                          return "<";
                      case "&gt;":
                          return ">";
                      case "&quot;":
                          return '"';
                      case "&apos;":
                          return "'"
                      }
                      return e
                  }
                  ))
              }
              for (; i < r && (c(),
              !(i >= r)); ) {
                  var D = e.charCodeAt(i);
                  if (a(1),
                  60 !== D)
                      return b("expected <");
                  if (i >= r)
                      return b("unexpected end of input");
                  var G = e.charCodeAt(i);
                  if (63 !== G)
                      if (33 !== G) {
                          if (47 === G) {
                              if (a(1),
                              c(),
                              l("plist")) {
                                  h(">");
                                  continue
                              }
                              if (l("dict")) {
                                  h(">"),
                                  N();
                                  continue
                              }
                              if (l("array")) {
                                  h(">"),
                                  A();
                                  continue
                              }
                              return b("unexpected closed tag")
                          }
                          var F = (k = void 0,
                          x = void 0,
                          x = !1,
                          47 === (k = p(">")).charCodeAt(k.length - 1) && (x = !0,
                          k = k.substring(0, k.length - 1)),
                          {
                              name: k.trim(),
                              isClosed: x
                          });
                          switch (F.name) {
                          case "dict":
                              1 === f ? C() : 2 === f ? L() : (d = {},
                              null !== n && (d[n] = {
                                  filename: t,
                                  line: o,
                                  char: s
                              }),
                              _(1, d)),
                              F.isClosed && N();
                              continue;
                          case "array":
                              1 === f ? S() : 2 === f ? j() : _(2, d = []),
                              F.isClosed && A();
                              continue;
                          case "key":
                              w = O(F),
                              1 !== f ? b("unexpected <key>") : null !== y ? b("too many <key>") : y = w;
                              continue;
                          case "string":
                              R(O(F));
                              continue;
                          case "real":
                              P(parseFloat(O(F)));
                              continue;
                          case "integer":
                              T(parseInt(O(F), 10));
                              continue;
                          case "date":
                              I(new Date(O(F)));
                              continue;
                          case "data":
                              E(O(F));
                              continue;
                          case "true":
                              O(F),
                              M(!0);
                              continue;
                          case "false":
                              O(F),
                              M(!1);
                              continue
                          }
                          if (!/^plist/.test(F.name))
                              return b("unexpected opened tag " + F.name)
                      } else {
                          if (a(1),
                          l("--")) {
                              h("--\x3e");
                              continue
                          }
                          h(">")
                      }
                  else
                      a(1),
                      h("?>")
              }
              return d
          }
          Object.defineProperty(t, "__esModule", {
              value: !0
          }),
          t.parseWithLocation = function(e, t, n) {
              return r(e, t, n)
          }
          ,
          t.parse = function(e) {
              return r(e, null, null)
          }
      }
      , function(e, t, n) {
          function r(e, t) {
              throw new Error("Near offset " + e.pos + ": " + t + " ~~~" + e.source.substr(e.pos, 50) + "~~~")
          }
          Object.defineProperty(t, "__esModule", {
              value: !0
          }),
          t.parse = function(e, t, n) {
              var a = new i(e)
                , u = new o
                , c = 0
                , l = null
                , h = []
                , p = [];
              function f() {
                  h.push(c),
                  p.push(l)
              }
              function d() {
                  c = h.pop(),
                  l = p.pop()
              }
              function g(e) {
                  r(a, e)
              }
              for (; s(a, u); ) {
                  if (0 === c) {
                      if (null !== l && g("too many constructs in root"),
                      3 === u.type) {
                          l = {},
                          n && (l.$vscodeTextmateLocation = u.toLocation(t)),
                          f(),
                          c = 1;
                          continue
                      }
                      if (2 === u.type) {
                          l = [],
                          f(),
                          c = 4;
                          continue
                      }
                      g("unexpected token in root")
                  }
                  if (2 === c) {
                      if (5 === u.type) {
                          d();
                          continue
                      }
                      if (7 === u.type) {
                          c = 3;
                          continue
                      }
                      g("expected , or }")
                  }
                  if (1 === c || 3 === c) {
                      if (1 === c && 5 === u.type) {
                          d();
                          continue
                      }
                      if (1 === u.type) {
                          var m = u.value;
                          if (s(a, u) && 6 === u.type || g("expected colon"),
                          s(a, u) || g("expected value"),
                          c = 2,
                          1 === u.type) {
                              l[m] = u.value;
                              continue
                          }
                          if (8 === u.type) {
                              l[m] = null;
                              continue
                          }
                          if (9 === u.type) {
                              l[m] = !0;
                              continue
                          }
                          if (10 === u.type) {
                              l[m] = !1;
                              continue
                          }
                          if (11 === u.type) {
                              l[m] = parseFloat(u.value);
                              continue
                          }
                          if (2 === u.type) {
                              var y = [];
                              l[m] = y,
                              f(),
                              c = 4,
                              l = y;
                              continue
                          }
                          if (3 === u.type) {
                              var _ = {};
                              n && (_.$vscodeTextmateLocation = u.toLocation(t)),
                              l[m] = _,
                              f(),
                              c = 1,
                              l = _;
                              continue
                          }
                      }
                      g("unexpected token in dict")
                  }
                  if (5 === c) {
                      if (4 === u.type) {
                          d();
                          continue
                      }
                      if (7 === u.type) {
                          c = 6;
                          continue
                      }
                      g("expected , or ]")
                  }
                  if (4 === c || 6 === c) {
                      if (4 === c && 4 === u.type) {
                          d();
                          continue
                      }
                      if (c = 5,
                      1 === u.type) {
                          l.push(u.value);
                          continue
                      }
                      if (8 === u.type) {
                          l.push(null);
                          continue
                      }
                      if (9 === u.type) {
                          l.push(!0);
                          continue
                      }
                      if (10 === u.type) {
                          l.push(!1);
                          continue
                      }
                      if (11 === u.type) {
                          l.push(parseFloat(u.value));
                          continue
                      }
                      if (2 === u.type) {
                          y = [],
                          l.push(y),
                          f(),
                          c = 4,
                          l = y;
                          continue
                      }
                      if (3 === u.type) {
                          _ = {},
                          n && (_.$vscodeTextmateLocation = u.toLocation(t)),
                          l.push(_),
                          f(),
                          c = 1,
                          l = _;
                          continue
                      }
                      g("unexpected token in array")
                  }
                  g("unknown state")
              }
              return 0 !== p.length && g("unclosed constructs"),
              l
          }
          ;
          var i = function(e) {
              this.source = e,
              this.pos = 0,
              this.len = e.length,
              this.line = 1,
              this.char = 0
          }
            , o = function() {
              function e() {
                  this.value = null,
                  this.type = 0,
                  this.offset = -1,
                  this.len = -1,
                  this.line = -1,
                  this.char = -1
              }
              return e.prototype.toLocation = function(e) {
                  return {
                      filename: e,
                      line: this.line,
                      char: this.char
                  }
              }
              ,
              e
          }();
          function s(e, t) {
              t.value = null,
              t.type = 0,
              t.offset = -1,
              t.len = -1,
              t.line = -1,
              t.char = -1;
              for (var n, i = e.source, o = e.pos, s = e.len, a = e.line, u = e.char; ; ) {
                  if (o >= s)
                      return !1;
                  if (32 !== (n = i.charCodeAt(o)) && 9 !== n && 13 !== n) {
                      if (10 !== n)
                          break;
                      o++,
                      a++,
                      u = 0
                  } else
                      o++,
                      u++
              }
              if (t.offset = o,
              t.line = a,
              t.char = u,
              34 === n) {
                  for (t.type = 1,
                  o++,
                  u++; ; ) {
                      if (o >= s)
                          return !1;
                      if (n = i.charCodeAt(o),
                      o++,
                      u++,
                      92 !== n) {
                          if (34 === n)
                              break
                      } else
                          o++,
                          u++
                  }
                  t.value = i.substring(t.offset + 1, o - 1).replace(/\\u([0-9A-Fa-f]{4})/g, (function(e, t) {
                      return String.fromCodePoint(parseInt(t, 16))
                  }
                  )).replace(/\\(.)/g, (function(t, n) {
                      switch (n) {
                      case '"':
                          return '"';
                      case "\\":
                          return "\\";
                      case "/":
                          return "/";
                      case "b":
                          return "\b";
                      case "f":
                          return "\f";
                      case "n":
                          return "\n";
                      case "r":
                          return "\r";
                      case "t":
                          return "\t";
                      default:
                          r(e, "invalid escape sequence")
                      }
                      throw new Error("unreachable")
                  }
                  ))
              } else if (91 === n)
                  t.type = 2,
                  o++,
                  u++;
              else if (123 === n)
                  t.type = 3,
                  o++,
                  u++;
              else if (93 === n)
                  t.type = 4,
                  o++,
                  u++;
              else if (125 === n)
                  t.type = 5,
                  o++,
                  u++;
              else if (58 === n)
                  t.type = 6,
                  o++,
                  u++;
              else if (44 === n)
                  t.type = 7,
                  o++,
                  u++;
              else if (110 === n) {
                  if (t.type = 8,
                  o++,
                  u++,
                  117 !== (n = i.charCodeAt(o)))
                      return !1;
                  if (o++,
                  u++,
                  108 !== (n = i.charCodeAt(o)))
                      return !1;
                  if (o++,
                  u++,
                  108 !== (n = i.charCodeAt(o)))
                      return !1;
                  o++,
                  u++
              } else if (116 === n) {
                  if (t.type = 9,
                  o++,
                  u++,
                  114 !== (n = i.charCodeAt(o)))
                      return !1;
                  if (o++,
                  u++,
                  117 !== (n = i.charCodeAt(o)))
                      return !1;
                  if (o++,
                  u++,
                  101 !== (n = i.charCodeAt(o)))
                      return !1;
                  o++,
                  u++
              } else if (102 === n) {
                  if (t.type = 10,
                  o++,
                  u++,
                  97 !== (n = i.charCodeAt(o)))
                      return !1;
                  if (o++,
                  u++,
                  108 !== (n = i.charCodeAt(o)))
                      return !1;
                  if (o++,
                  u++,
                  115 !== (n = i.charCodeAt(o)))
                      return !1;
                  if (o++,
                  u++,
                  101 !== (n = i.charCodeAt(o)))
                      return !1;
                  o++,
                  u++
              } else
                  for (t.type = 11; ; ) {
                      if (o >= s)
                          return !1;
                      if (!(46 === (n = i.charCodeAt(o)) || n >= 48 && n <= 57 || 101 === n || 69 === n || 45 === n || 43 === n))
                          break;
                      o++,
                      u++
                  }
              return t.len = o - t.offset,
              null === t.value && (t.value = i.substr(t.offset, t.len)),
              e.pos = o,
              e.line = a,
              e.char = u,
              !0
          }
      }
      , function(e, t, n) {
          Object.defineProperty(t, "__esModule", {
              value: !0
          });
          var r = function(e, t, n, r, i, o) {
              this.scope = e,
              this.parentScopes = t,
              this.index = n,
              this.fontStyle = r,
              this.foreground = i,
              this.background = o
          };
          function i(e) {
              return !!(/^#[0-9a-f]{6}$/i.test(e) || /^#[0-9a-f]{8}$/i.test(e) || /^#[0-9a-f]{3}$/i.test(e) || /^#[0-9a-f]{4}$/i.test(e))
          }
          function o(e) {
              if (!e)
                  return [];
              if (!e.settings || !Array.isArray(e.settings))
                  return [];
              for (var t = e.settings, n = [], o = 0, s = 0, a = t.length; s < a; s++) {
                  var u = t[s];
                  if (u.settings) {
                      var c = void 0;
                      c = "string" == typeof u.scope ? u.scope.replace(/^[,]+/, "").replace(/[,]+$/, "").split(",") : Array.isArray(u.scope) ? u.scope : [""];
                      var l = -1;
                      if ("string" == typeof u.settings.fontStyle) {
                          l = 0;
                          for (var h = 0, p = (g = u.settings.fontStyle.split(" ")).length; h < p; h++)
                              switch (g[h]) {
                              case "italic":
                                  l |= 1;
                                  break;
                              case "bold":
                                  l |= 2;
                                  break;
                              case "underline":
                                  l |= 4
                              }
                      }
                      var f = null;
                      "string" == typeof u.settings.foreground && i(u.settings.foreground) && (f = u.settings.foreground);
                      var d = null;
                      for ("string" == typeof u.settings.background && i(u.settings.background) && (d = u.settings.background),
                      h = 0,
                      p = c.length; h < p; h++) {
                          var g, m = (g = c[h].trim().split(" "))[g.length - 1], y = null;
                          g.length > 1 && (y = g.slice(0, g.length - 1)).reverse(),
                          n[o++] = new r(m,y,s,l,f,d)
                      }
                  }
              }
              return n
          }
          function s(e, t) {
              e.sort((function(e, t) {
                  var n = c(e.scope, t.scope);
                  return 0 !== n || 0 !== (n = l(e.parentScopes, t.parentScopes)) ? n : e.index - t.index
              }
              ));
              for (var n = 0, r = "#000000", i = "#ffffff"; e.length >= 1 && "" === e[0].scope; ) {
                  var o = e.shift();
                  -1 !== o.fontStyle && (n = o.fontStyle),
                  null !== o.foreground && (r = o.foreground),
                  null !== o.background && (i = o.background)
              }
              for (var s = new a(t), f = new h(0,null,n,s.getId(r),s.getId(i)), d = new p(new h(0,null,-1,0,0),[]), g = 0, m = e.length; g < m; g++) {
                  var y = e[g];
                  d.insert(0, y.scope, y.parentScopes, y.fontStyle, s.getId(y.foreground), s.getId(y.background))
              }
              return new u(s,f,d)
          }
          t.ParsedThemeRule = r,
          t.parseTheme = o;
          var a = function() {
              function e(e) {
                  if (this._lastColorId = 0,
                  this._id2color = [],
                  this._color2id = Object.create(null),
                  Array.isArray(e)) {
                      this._isFrozen = !0;
                      for (var t = 0, n = e.length; t < n; t++)
                          this._color2id[e[t]] = t,
                          this._id2color[t] = e[t]
                  } else
                      this._isFrozen = !1
              }
              return e.prototype.getId = function(e) {
                  if (null === e)
                      return 0;
                  e = e.toUpperCase();
                  var t = this._color2id[e];
                  if (t)
                      return t;
                  if (this._isFrozen)
                      throw new Error("Missing color in color map - " + e);
                  return t = ++this._lastColorId,
                  this._color2id[e] = t,
                  this._id2color[t] = e,
                  t
              }
              ,
              e.prototype.getColorMap = function() {
                  return this._id2color.slice(0)
              }
              ,
              e
          }();
          t.ColorMap = a;
          var u = function() {
              function e(e, t, n) {
                  this._colorMap = e,
                  this._root = n,
                  this._defaults = t,
                  this._cache = {}
              }
              return e.createFromRawTheme = function(e, t) {
                  return this.createFromParsedTheme(o(e), t)
              }
              ,
              e.createFromParsedTheme = function(e, t) {
                  return s(e, t)
              }
              ,
              e.prototype.getColorMap = function() {
                  return this._colorMap.getColorMap()
              }
              ,
              e.prototype.getDefaults = function() {
                  return this._defaults
              }
              ,
              e.prototype.match = function(e) {
                  return this._cache.hasOwnProperty(e) || (this._cache[e] = this._root.match(e)),
                  this._cache[e]
              }
              ,
              e
          }();
          function c(e, t) {
              return e < t ? -1 : e > t ? 1 : 0
          }
          function l(e, t) {
              if (null === e && null === t)
                  return 0;
              if (!e)
                  return -1;
              if (!t)
                  return 1;
              var n = e.length
                , r = t.length;
              if (n === r) {
                  for (var i = 0; i < n; i++) {
                      var o = c(e[i], t[i]);
                      if (0 !== o)
                          return o
                  }
                  return 0
              }
              return n - r
          }
          t.Theme = u,
          t.strcmp = c,
          t.strArrCmp = l;
          var h = function() {
              function e(e, t, n, r, i) {
                  this.scopeDepth = e,
                  this.parentScopes = t,
                  this.fontStyle = n,
                  this.foreground = r,
                  this.background = i
              }
              return e.prototype.clone = function() {
                  return new e(this.scopeDepth,this.parentScopes,this.fontStyle,this.foreground,this.background)
              }
              ,
              e.cloneArr = function(e) {
                  for (var t = [], n = 0, r = e.length; n < r; n++)
                      t[n] = e[n].clone();
                  return t
              }
              ,
              e.prototype.acceptOverwrite = function(e, t, n, r) {
                  this.scopeDepth > e ? console.log("how did this happen?") : this.scopeDepth = e,
                  -1 !== t && (this.fontStyle = t),
                  0 !== n && (this.foreground = n),
                  0 !== r && (this.background = r)
              }
              ,
              e
          }();
          t.ThemeTrieElementRule = h;
          var p = function() {
              function e(e, t, n) {
                  void 0 === t && (t = []),
                  void 0 === n && (n = {}),
                  this._mainRule = e,
                  this._rulesWithParentScopes = t,
                  this._children = n
              }
              return e._sortBySpecificity = function(e) {
                  return 1 === e.length || e.sort(this._cmpBySpecificity),
                  e
              }
              ,
              e._cmpBySpecificity = function(e, t) {
                  if (e.scopeDepth === t.scopeDepth) {
                      var n = e.parentScopes
                        , r = t.parentScopes
                        , i = null === n ? 0 : n.length
                        , o = null === r ? 0 : r.length;
                      if (i === o)
                          for (var s = 0; s < i; s++) {
                              var a = n[s].length
                                , u = r[s].length;
                              if (a !== u)
                                  return u - a
                          }
                      return o - i
                  }
                  return t.scopeDepth - e.scopeDepth
              }
              ,
              e.prototype.match = function(t) {
                  if ("" === t)
                      return e._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));
                  var n, r, i = t.indexOf(".");
                  return -1 === i ? (n = t,
                  r = "") : (n = t.substring(0, i),
                  r = t.substring(i + 1)),
                  this._children.hasOwnProperty(n) ? this._children[n].match(r) : e._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes))
              }
              ,
              e.prototype.insert = function(t, n, r, i, o, s) {
                  if ("" !== n) {
                      var a, u, c, l = n.indexOf(".");
                      -1 === l ? (a = n,
                      u = "") : (a = n.substring(0, l),
                      u = n.substring(l + 1)),
                      this._children.hasOwnProperty(a) ? c = this._children[a] : (c = new e(this._mainRule.clone(),h.cloneArr(this._rulesWithParentScopes)),
                      this._children[a] = c),
                      c.insert(t + 1, u, r, i, o, s)
                  } else
                      this._doInsertHere(t, r, i, o, s)
              }
              ,
              e.prototype._doInsertHere = function(e, t, n, r, i) {
                  if (null !== t) {
                      for (var o = 0, s = this._rulesWithParentScopes.length; o < s; o++) {
                          var a = this._rulesWithParentScopes[o];
                          if (0 === l(a.parentScopes, t))
                              return void a.acceptOverwrite(e, n, r, i)
                      }
                      -1 === n && (n = this._mainRule.fontStyle),
                      0 === r && (r = this._mainRule.foreground),
                      0 === i && (i = this._mainRule.background),
                      this._rulesWithParentScopes.push(new h(e,t,n,r,i))
                  } else
                      this._mainRule.acceptOverwrite(e, n, r, i)
              }
              ,
              e
          }();
          t.ThemeTrieElement = p
      }
      ])
  }
  ));
  class pe extends he.Registry {
      constructor(e) {
          super(e),
          this._resolver = e,
          this.themesPath = "themes/",
          this._resolvedThemes = {},
          this._resolvedGammer = {}
      }
      getTheme(e) {
          return "string" == typeof e ? this._resolvedThemes[e] : e
      }
      async loadTheme(e) {
          return "string" == typeof e ? (this._resolvedThemes[e] || (this._resolvedThemes[e] = await V(`${this.themesPath}${e}.json`)),
          this._resolvedThemes[e]) : ((e = Z(e)).name && (this._resolvedThemes[e.name] = e),
          e)
      }
      async loadThemes(e) {
          return await Promise.all(e.map((e=>this.loadTheme(e))))
      }
      getGrammer(e) {
          return this._resolvedGammer[e]
      }
      async loadLanguage(e) {
          const t = await this.loadGrammar(e.scopeName);
          this._resolvedGammer[e.id] = t,
          e.aliases && e.aliases.forEach((e=>{
              this._resolvedGammer[e] = t
          }
          ))
      }
      async loadLanguages(e) {
          for (const t of e)
              this._resolver.addLanguage(t);
          for (const t of e)
              await this.loadLanguage(t)
      }
  }
  function fe(e) {
      return "string" == typeof e ? t.find((t=>{
          var n;
          return t.id === e || (null === (n = t.aliases) || void 0 === n ? void 0 : n.includes(e))
      }
      )) : e
  }
  e.BUNDLED_LANGUAGES = t,
  e.BUNDLED_THEMES = ["dark-plus", "github-dark", "github-light", "light-plus", "material-theme-darker", "material-theme-default", "material-theme-lighter", "material-theme-ocean", "material-theme-palenight", "min-dark", "min-light", "monokai", "nord", "slack-theme-dark-mode", "slack-theme-ochin", "solarized-dark", "solarized-light"],
  e.getHighlighter = async function(e) {
      var n, r;
      const {_languages: i, _themes: o} = function(e) {
          var n;
          let r = t
            , i = e.themes || [];
          return (null === (n = e.langs) || void 0 === n ? void 0 : n.length) && (r = e.langs.map(fe)),
          e.theme && i.unshift(e.theme),
          i.length || (i = ["nord"]),
          {
              _languages: r,
              _themes: i
          }
      }(e)
        , s = new re(async function() {
          if (!X) {
              let e;
              if (z)
                  e = B(K || J("dist/onigasm.wasm"));
              else {
                  const t = require("path").join(require.resolve("onigasm"), "../onigasm.wasm")
                    , n = require("fs").readFileSync(t).buffer;
                  e = B(n)
              }
              X = e.then((()=>({
                  createOnigScanner: e=>new W(e),
                  createOnigString: e=>new $(e)
              })))
          }
          return X
      }(),"onigasm")
        , a = new pe(s)
        , u = (await a.loadThemes(o))[0];
      function c(e) {
          const t = e ? a.getTheme(e) : u;
          if (!t)
              throw Error(`No theme registration for ${e}`);
          a.setTheme(t);
          return {
              _theme: t,
              _colorMap: a.getColorMap()
          }
      }
      function l(e, t="text", n, r={
          includeExplanation: !0
      }) {
          if (function(e) {
              return !e || ["plaintext", "txt", "text"].includes(e)
          }(t))
              return [[{
                  content: e
              }]];
          const {_grammer: i} = function(e) {
              const t = a.getGrammer(e);
              if (!t)
                  throw Error(`No language registration for ${e}`);
              return {
                  _grammer: t
              }
          }(t)
            , {_theme: o, _colorMap: s} = c(n);
          return function(e, t, n, r, i) {
              let o = n.split(/\r\n|\r|\n/)
                , s = null
                , a = []
                , u = [];
              for (let n = 0, c = o.length; n < c; n++) {
                  let c = o[n];
                  if ("" === c) {
                      a = [],
                      u.push([]);
                      continue
                  }
                  let l = r.tokenizeLine(c, s).tokens
                    , h = r.tokenizeLine2(c, s)
                    , p = h.tokens.length / 2
                    , f = 0;
                  for (let n = 0; n < p; n++) {
                      let r = h.tokens[2 * n]
                        , o = n + 1 < p ? h.tokens[2 * n + 2] : c.length;
                      if (r === o)
                          continue;
                      let s = h.tokens[2 * n + 1]
                        , u = t[ie.getForeground(s)]
                        , d = [];
                      if (i.includeExplanation) {
                          let t = 0;
                          for (; r + t < o; ) {
                              let n = l[f]
                                , r = c.substring(n.startIndex, n.endIndex);
                              t += r.length,
                              d.push({
                                  content: r,
                                  scopes: oe(e, n.scopes)
                              }),
                              f++
                          }
                      }
                      a.push({
                          content: c.substring(r, o),
                          color: u,
                          explanation: d
                      })
                  }
                  u.push(a),
                  a = [],
                  s = h.ruleStack
              }
              return u
          }(o, s, e, i, r)
      }
      return await a.loadLanguages(i),
      (null === (n = e.paths) || void 0 === n ? void 0 : n.themes) && (a.themesPath = e.paths.themes),
      (null === (r = e.paths) || void 0 === r ? void 0 : r.languages) && (s.languagesPath = e.paths.languages),
      {
          codeToThemedTokens: l,
          codeToHtml: function(e, t="text", n) {
              const r = l(e, t, n, {
                  includeExplanation: !1
              })
                , {_theme: i} = c(n);
              return ce(r, {
                  fg: i.fg,
                  bg: i.bg
              })
          },
          loadTheme: async function(e) {
              await a.loadTheme(e)
          },
          loadLanguage: async function(e) {
              const t = fe(e);
              s.addLanguage(t),
              await a.loadLanguage(t)
          },
          getBackgroundColor: function(e) {
              const {_theme: t} = c(e);
              return t.bg
          },
          getForegroundColor: function(e) {
              const {_theme: t} = c(e);
              return t.fg
          }
      }
  }
  ,
  e.loadTheme = V,
  e.renderToHtml = ce,
  e.setCDN = function(e) {
      q = e
  }
  ,
  e.setOnigasmWASM = function(e) {
      K = e
  }
  ,
  Object.defineProperty(e, "__esModule", {
      value: !0
  })
}(this.shiki = this.shiki || {});
