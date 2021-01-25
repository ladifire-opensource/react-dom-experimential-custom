# react-dom-experimential-custom

This is a custom build of ReactDOM, that enable some more extras APIs we need for Ladifire development projects.

e.g:
* ```unstable_createEventHandle```
* ```unstable_createRoot```

# How to use?

This is ReactDOM, maybe equivalent to ```ReactDOM experimental build```.

If you want to use, try ```yarn link``` to use.

# Why and How we build this?

When we try to recover all Facebook frontend code, web found out the version
of ReactDOM that Facebook use is different from any one they released. In this version,
they use some extras ```unstable_xxx``` APIs (not ready for statble version, just in test),
and these APIs will be visible in next release version of react-dom, after they test.

So we would like to do with the same, test unstable APIs to catchup react's technology.

To build this version;
 * We first clone React project;
 * Flag enable = true for some APIs in ```packages/shared/ReactFeatureFlag```
 * Add some code in ```packages/react-dom/src/index.experimental.js```
 * Set ```const RELEASE_CHANNEL = "experimental";``` in ```scripts/rollup/build.js```
 * Run build ```yarn build```.
 
Never do this if you don't need any of some extras unstable APIs that's listed above.
 
 
