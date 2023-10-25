import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnDestroy {
  constructor(private fb: FormBuilder) {}

  myForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
  });

  ngOnInit(): void {
    const nameControl = this.myForm.get('name')!;
    const emailControl = this.myForm.get('email')!;

    combineLatest([
      nameControl.valueChanges,
      emailControl.valueChanges,
    ]).subscribe(([name, email]) => {
      if (name && email) {
      } else {
      }
    });
  }

  ngOnDestroy(): void {}
  onSubmit(): void {
    alert('Data sent successfully');
  }
}
