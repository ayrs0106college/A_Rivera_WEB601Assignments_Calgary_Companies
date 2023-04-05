import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent {
  newCompany: any = {};
  @Output() onCreation = new EventEmitter<Content>();

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ModifyContentComponentComponent, {
      width: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  addContent(){
    this.onCreation.emit(this.newCompany);
    this.newCompany = {};
  }
}
