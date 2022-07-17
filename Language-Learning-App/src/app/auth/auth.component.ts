import { Component, OnDestroy } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { SignUpComponent } from './sign-up/sign-up.component';

import { MessageService } from 'primeng/api';
import { Product } from './sign-up/product';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [DialogService, MessageService],
  animations: [DialogService, MessageService], // <-- Don't forget!
})
export class AuthComponent {
  constructor(
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  ref: DynamicDialogRef;

  // ngOnInit(): void {}

  show() {
    this.ref = this.dialogService.open(SignUpComponent, {
      header: 'Choose a Product',
      width: '70%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe((product: Product) => {
      if (product) {
        this.messageService.add({
          severity: 'info',
          summary: 'Product Selected',
          detail: product.name,
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
