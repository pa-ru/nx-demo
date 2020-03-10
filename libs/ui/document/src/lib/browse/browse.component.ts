import { Component, OnInit } from '@angular/core';
import { DsesService } from '@acs/shared/data-access';

@Component({
  selector: 'acs-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private dsesService: DsesService) { }

  ngOnInit(): void {
  }

}
