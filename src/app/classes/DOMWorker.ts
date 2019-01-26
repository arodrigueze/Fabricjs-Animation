import * as _ from 'lodash';

import { ElementAttribute } from '../interfaces/ElementAttribute';

export class DOMWorker {

    /**
     * get DOM element style
     * @param idElement DOM id
     * @param attr style atribute
     */
    public getDOMElementStyleById(idElement: string, attr: string): number {
        const element = document.getElementById(idElement);
        const computedStyle = window.getComputedStyle(element, null);
        return parseInt(computedStyle[attr], 10);
    }

    /**
     * set DOM element style
     * @param idElement DOM id
     * @param attr style atribute
     * @param value new value
     */
    public setDOMElementStyleById(idElement: string, attr: string, value: string) {
        const element = document.getElementById(idElement);
        element.style[attr] = value;
    }

    /**
     * set DOM element style
     * @param idElement element id
     */
    public getDOMElementById(idElement: string) {
        return document.getElementById(idElement);
    }

    /**
     * create element and add to dom
     * @param elementType element type to create
     * @param Parent Parent of element
     * @param attrs array of ElementAttribute
     */
    public addelementToDOM(elementType: string, Parent: HTMLElement, attrs: ElementAttribute[]): HTMLElement {
        const element = document.createElement(elementType);
        _.forEach(attrs, attr => {
            element[`${attr.key}`] = attr.value;
        });
        console.log(element);
        Parent.appendChild(element);
        return element;
    }

}

export const workWithDOM = new  DOMWorker();
