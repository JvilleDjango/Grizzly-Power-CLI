import {customElement, bindable} from 'aurelia-framework';

@customElement('step-wizard')
export class StepWizard {
  @bindable stepName = '';
  @bindable stepIndex = 1;
  @bindable isActive = false;

  static inject = [Element];
  constructor(element) {
    this._elem = element;
  }

  attached() {
// if($('li').hasClass('active')){
//   $('li.active').parent("step-wizard").addClass('active');
// } else{
//   $('li.active').parent("step-wizard").removeClass('active');
// }
//
  }

}
