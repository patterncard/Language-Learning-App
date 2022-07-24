import { Component } from '@angular/core';
// import { SignUpService } from './sign-up.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(
    // private productService: SignUpService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  // ngOnInit() { }

  showSignUp() {}
}
