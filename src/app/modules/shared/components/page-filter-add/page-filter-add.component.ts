import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-page-filter-add',
  templateUrl: './page-filter-add.component.html',
  styleUrls: ['./page-filter-add.component.scss']
})
export class PageFilterAddComponent {

  @Output() openDialogEmiter = new EventEmitter();
  @Output() openDialogSearchEmiter = new EventEmitter();

  @Input() displayFilter!: boolean
  @Input() displayNew: boolean = true;

  items!: MenuItem[];
  filter!: string;


  constructor(private primengConfig: PrimeNGConfig) {

  }

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [{
      label: 'Opções',
      items: [{
        label: 'Busca avançada',
        icon: 'pi pi-search',
      },
      ]
    },
    {
      label: 'Exportar',
      items: [{
        label: 'CSV',
        icon: 'pi pi-file-excel',
        // url: 'http://angular.io'
      },
      {
        label: 'PDF',
        icon: 'pi pi-file-pdf'
      }
      ]
    }
    ];
  }

  openDialog() {
    this.openDialogEmiter.emit();
  }
  openDialogSearch() {
    this.openDialogSearchEmiter.emit();
  }
}
