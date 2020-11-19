# ESX.js

<img src="https://i.imgur.com/lj2RCGp.jpg" width="300" height="300"/>

## About

This is a JavaScript/TypeScript wrapper for the ESX (es_extended) framework in FiveM. 

If you experience any issues, please post them in the `Issues`. 

## Guide

### `Installation`

Run `npm i esx.js` to install the package. When this is done you are ready to use it. 

### `Usage`

So how do you use it? 

First you need to import either the `Client` class or `Server` class. 

### `Client`

```js
import { Client } from 'esx.js'

let ESX: Client = null

emit('esx:getSharedObject', (obj: Client) => (ESX = obj));
```

### `Server`
```js
import { Server } from 'esx.js'

let ESX: Server = null

emit('esx:getSharedObject', (obj: Server) => (ESX = obj));
```

### That's it. Now you are ready to rock the world!