import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent {
  newCompany: any = {};
  @Output() onCreation = new EventEmitter<Content>();

  addContent(){
    this.onCreation.emit(this.newCompany);
    this.newCompany = {};
  }
}
