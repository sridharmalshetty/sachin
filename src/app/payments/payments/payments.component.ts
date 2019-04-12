import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder,NgForm } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  paymentForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      amount: ['', Validators.required],
      modeofpayment: ['', Validators.required],
      transid: ['', Validators.required],
  });
  }
  payform(form: NgForm){
    console.log(form.value);
  }
}
