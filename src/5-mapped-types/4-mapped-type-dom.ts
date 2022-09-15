// Copied from /Applications/Visual Studio Code.app/Contents/Resources/app/extensions/node_modules/typescript/lib/lib.dom.d.ts

interface DocumentEventMap
  extends DocumentAndElementEventHandlersEventMap,
    GlobalEventHandlersEventMap {
  DOMContentLoaded: Event;
  fullscreenchange: Event;
  fullscreenerror: Event;
  pointerlockchange: Event;
  pointerlockerror: Event;
  readystatechange: Event;
  visibilitychange: Event;
}

interface Document {
  addEventListener<K extends keyof DocumentEventMap>(
    type: K,
    listener: (this: Document, ev: DocumentEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
}