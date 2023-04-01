import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  newContent: any = {};
  @Output() onCreation = new EventEmitter<Content>();

  addContent(){
    this.onCreation.emit(this.newContent);
    this.newContent = {};
  }

}