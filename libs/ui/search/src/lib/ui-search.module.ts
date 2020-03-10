import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSlotComponent } from './search-slot/search-slot.component';
import { SharedDataAccessModule } from '@acs/shared/data-access';

@NgModule({
  imports: [CommonModule, SharedDataAccessModule],
  declarations: [SearchSlotComponent],
  exports: [SearchSlotComponent]
})
export class UiSearchModule {}
