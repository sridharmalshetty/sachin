import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments/payments.component';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path:'billing/payments',
      component:PaymentsComponent
    }])
  ]
})
export class PaymentsModule { }
