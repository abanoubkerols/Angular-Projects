import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from './accordion-item.interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  

  @Input() public items: AccordionItem[] = [];

  public toggle(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded;
  }



  ngOnInit(): void {
  }
}

