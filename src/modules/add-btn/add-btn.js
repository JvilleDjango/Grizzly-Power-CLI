import {customElement, bindable, inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Element, Router)
@customElement('add-btn')

export class AddBtn {
  @bindable route;


  constructor(element, router) {
    this.element = element;
    this.router = router;
  }

  attached() {
    this.element.addEventListener("click", () => {
      this.router.navigateToRoute(this.route);

    });
  }
}
