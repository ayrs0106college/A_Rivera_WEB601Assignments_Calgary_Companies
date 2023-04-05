import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FiltersPipe } from './filters.pipe';
import { HoverAffectDirective, typeHoverAffectDirective } from './hover-affect.directive';
import { MessageComponent } from './message/message.component';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { CreateContentComponent } from './create-content/create-content.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    FiltersPipe,
    HoverAffectDirective,
    typeHoverAffectDirective,
    MessageComponent,
    ModifyContentComponentComponent,
    CreateContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
      }),
    HttpClientInMemoryWebApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }