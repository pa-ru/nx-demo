import { Component, OnInit } from '@angular/core';
import { DsesService } from '@acs/shared/data-access';

@Component({
  selector: 'acs-search-slot',
  templateUrl: './search-slot.component.html',
  styleUrls: ['./search-slot.component.css']
})
export class SearchSlotComponent implements OnInit {

  constructor(private dses: DsesService) { }

  ngOnInit(): void {
  }

}
