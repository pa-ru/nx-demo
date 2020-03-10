import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsesService } from './dses.service';

@NgModule({
  imports: [CommonModule],
  providers: [DsesService]
})
export class SharedDataAccessModule {}
