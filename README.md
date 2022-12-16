# vue-pendo

This is a Vue 3.x.x plugin that will allow you to easily add Pendo to any Vue project. 

## Install

```bash
npm install vue-pendo
```

Start using it in your Vue application.

```js
import { createApp } from 'vue'
import App from './App.vue'
import VuePendo from 'vue-pendo'

const app = createApp(App);

app.use(VuePendo, {
  id: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
});

app.mount("#app");
```

## Parameters

### id:

Your Pendo API Key is a required parameter. You can find this Key in Subscription Setting under Install Setting in Pendo application dashboard.

```js 
id: 'b8b56dag-c5ef-4035-5g03-b07c0e8486ye'
```

### isEnabled:

If you would like to disable or enable tracking this parameter is of type boolean. This is an optional parameter and will default to `true` if not defined.

```js 
isEnabled: true 
```


## Vue Compatibility

This plugin is specifically intended for use with Vue version 3.
