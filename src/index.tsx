import { LitElement, html, TemplateResult, customElement } from '/web_modules/lit-element.js';
import { observable, action } from '/web_modules/mobx.js';
import { MobxLitElement } from '/web_modules/@adobe/lit-mobx.js';

// create a mobx observable
class Counter {
    @observable
    public count = 0;

    @action
    public increment() {
        this.count++;
    }
}

// create instance that can be shared across components
const counter = new Counter();

@customElement('my-element')
export class MyElement extends MobxLitElement {
    private counter = counter

    // any observables accessed in the render method will now trigger an update
    public render(): TemplateResult {
        return html`
            Cou is ${this.counter.count}
            <br />
            <button @click=${this.incrementCount}>Add</button>
        `;
    }

    private incrementCount() {
        this.counter.increment();
    }
}