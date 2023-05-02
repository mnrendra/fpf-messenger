# fpf-messenger
Figma Plugin Framework (FPF) for simplifying Figma Plugin message.

## Install
```
npm i @mnrendra/fpf-messenger
```

## Usage
```javascript
/* UI code */
import { Messenger } from '@mnrendra/fpf-messenger'

const messenger = new Messenger('ui')

messenger.postMessage('a message from UI')
// no need to add { pluginMessage } like:
// parent.postMessage({ pluginMessage: 'a message from UI' }, '*')

messenger.onMessage((message) => {
  console.log(message)
})
// no need to destruct callback value like:
// onmessage = (event: MessageEvent) => {
//   console.log(event && event.data && event.data.pluginMessage)
// }

/* Plugin code */
import { Messenger } from '@mnrendra/fpf-messenger'

const messenger = new Messenger('plugin')

messenger.postMessage('a message')
// no need to call figma.ui like:
// figma.ui.postMessage('a message')

messenger.onMessage((message) => {
  console.log(message)
})
// no need to call figma.ui like:
// figma.ui.onmessage = (message: any) => {
//   console.log(message)
// }
```

## NPM Package
[@mnrendra/fpf-messenger](https://www.npmjs.com/package/@mnrendra/fpf-messenger)

## Repository
[Github](https://github.com/mnrendra/fpf-messenger)

## Author
[@mnrendra](https://github.com/mnrendra)
