import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse/browse.component';
import { SharedDataAccessModule } from '@acs/shared/data-access';

@NgModule({
  imports: [CommonModule, SharedDataAccessModule],
  declarations: [BrowseComponent],
  exports: [BrowseComponent]
})
export class UiDocumentModule {}
