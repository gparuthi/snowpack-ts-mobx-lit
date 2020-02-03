# 🖥️ snowpack-ts-mobx-lit

#### 🎉 `Snowpack` + `Typescript` + `Mobx` + `lit-element` + `lit-html` Example Project

## 🚀 Getting Started

```bash
npm install
npx snowpack --include
npx servor --reload
```

## A note on directives

If you want to use directives, you'll have to add them to the `webDependencies` property in your `package.json`:

```json
  "snowpack": {
    "webDependencies": [
        "lit-html",
        "lit-element",
        "lit-html/directives/until.js",
        "lit-html/directives/class-map.js"
    ],
  },
```

### 🙏 Special Thanks

[snowpack-init](https://github.com/pikapkg/snowpack-init)
[@pika/web](https://github.com/pikapkg/web)  
[lit-html](https://github.com/polymer/lit-html)
[lit-element](https://github.com/polymer/lit-element)
[create-pika-app](https://github.com/ndom91/create-pika-app)

---

📝 `License:` [`MIT`](https://opensource.org/licenses/MIT)
