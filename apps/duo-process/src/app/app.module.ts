import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiSearchModule } from '../../../../libs/ui/search/src/lib/ui-search.module';
import { UiDocumentModule } from '../../../../libs/ui/document/src/lib/ui-document.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiSearchModule, UiDocumentModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
