# Changelog

## 0.1.0-alpha.3 (2025-05-24)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/rsata/petstore-demo/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** new methods ([867b561](https://github.com/rsata/petstore-demo/commit/867b561f3fc5e6f76d1503aa7df5fd4b434067ad))
* **api:** pluralize resources ([fcb72b6](https://github.com/rsata/petstore-demo/commit/fcb72b6eca1a467e2968e61ca2580efe8ac8711d))
* **client:** add withOptions helper ([3054797](https://github.com/rsata/petstore-demo/commit/30547977e9497abaa4e5ede41733cadf510b0284))
* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([279a596](https://github.com/rsata/petstore-demo/commit/279a596b98eee498a020dcd4de4dee18085b39e9))
* more gracefully handle $refs and work around schema limitations ([2e8bc83](https://github.com/rsata/petstore-demo/commit/2e8bc83947ad27ace8ba8a529c177cb8fc7a5e90))


### Bug Fixes

* **client:** always overwrite when merging headers ([d24772e](https://github.com/rsata/petstore-demo/commit/d24772ef4ddb1f8be2b2a056cc3e733b4bd156d3))
* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([24a653d](https://github.com/rsata/petstore-demo/commit/24a653de8d18f850ba98ed65bf6cba53b98cae55))
* **mcp:** fix cursor schema transformation issue with recursive references ([0404c1d](https://github.com/rsata/petstore-demo/commit/0404c1d403a5ab402df41e9173bab0bc670b8527))
* **mcp:** remove ajv dependency so MCP servers are more compatible with Cloudflare Workers ([fadccc8](https://github.com/rsata/petstore-demo/commit/fadccc8f98473f35264a01e4bb1270afd308d3cd))


### Chores

* **build:** automatically build subpackages if present ([bb228b5](https://github.com/rsata/petstore-demo/commit/bb228b5789fed045fe6d62b67a70bf62e4227fe5))
* **ci:** add timeout thresholds for CI jobs ([46ceab2](https://github.com/rsata/petstore-demo/commit/46ceab2e39af0ae49d575bca8084fae781488309))
* **ci:** only use depot for staging repos ([0acb919](https://github.com/rsata/petstore-demo/commit/0acb91943557d5cdb1122bfdda156cc75e62a561))
* **client:** drop support for EOL node versions ([4cec1d9](https://github.com/rsata/petstore-demo/commit/4cec1d9e0422a43f5bcad07ca536bfb0e313358a))
* **client:** minor internal fixes ([709efca](https://github.com/rsata/petstore-demo/commit/709efcaabaab981df348403f72ba3d033839583e))
* **docs:** grammar improvements ([6fe3dec](https://github.com/rsata/petstore-demo/commit/6fe3dec547d81cabc18e1270d1df137620cf7ed8))
* **internal:** codegen related update ([515fc38](https://github.com/rsata/petstore-demo/commit/515fc381ef286ed5a301319537a3ab034be085d1))
* **internal:** codegen related update ([207a38e](https://github.com/rsata/petstore-demo/commit/207a38ed0827eb69d4c32f2312e2cf5bb58717ea))
* **internal:** codegen related update ([2eb35b1](https://github.com/rsata/petstore-demo/commit/2eb35b15166e2182096e726b17a97b50798c5eb8))
* **internal:** codegen related update ([17f3510](https://github.com/rsata/petstore-demo/commit/17f3510365f5072bf463e8a3cf750f8dd25b623d))
* **internal:** refactor utils ([8878e6d](https://github.com/rsata/petstore-demo/commit/8878e6dd78b03e9777d651ffe67cca5672ad2b5d))
* **internal:** share typescript helpers ([5a1fda5](https://github.com/rsata/petstore-demo/commit/5a1fda54250ca6e325992f2659bfd42d0e260daf))
* **package:** remove engines ([472d9b5](https://github.com/rsata/petstore-demo/commit/472d9b508b4b7264f3deb3bf1bc92cf9c8fe02c0))
* **perf:** faster base64 decoding ([b422bd2](https://github.com/rsata/petstore-demo/commit/b422bd270ab70898b2e034d71a3571ed677b7a7e))
* **tests:** use node 22 for CI tests ([c839b7a](https://github.com/rsata/petstore-demo/commit/c839b7a4e55177f2e5e502d5c10bd5bb9f049075))


### Documentation

* add examples to tsdocs ([654d03e](https://github.com/rsata/petstore-demo/commit/654d03e42a799878bb6caf512bbfcb6de0180b07))
* **readme:** fix typo ([392cfa2](https://github.com/rsata/petstore-demo/commit/392cfa2257fef2ee89fb8083e61ace7c94fe7cd6))

## 0.1.0-alpha.2 (2025-04-11)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/rsata/petstore-demo/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** change user update name ([50b9c06](https://github.com/rsata/petstore-demo/commit/50b9c0644752a0d193a9fc7ca176b045c1a9401b))
* **api:** rename user update ([f01b9a6](https://github.com/rsata/petstore-demo/commit/f01b9a6f5b0794dcfdecf90f6e53b0af2841b73f))

## 0.1.0-alpha.1 (2025-04-11)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/rsata/petstore-demo/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([e95ddb6](https://github.com/rsata/petstore-demo/commit/e95ddb683b66896a6e8018be2f68fc246c15c933))


### Chores

* configure new SDK language ([822fe5c](https://github.com/rsata/petstore-demo/commit/822fe5c5b9422f1c9e814c313cf685ccd3050a19))
* go live ([fe426e0](https://github.com/rsata/petstore-demo/commit/fe426e08c59b6638bba75b70a3d188c586a17ce7))
