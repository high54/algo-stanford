import { Component, OnInit } from '@angular/core';
// Models
import { QuickFindUF } from '../models/quick-find-u-f.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  public quickFindUF: QuickFindUF;
  public stepOneInitForm = this.fb.group({
    size: [0, Validators.required]
  });
  constructor(
    private fb: FormBuilder
  ) { }

  public ngOnInit(): void {
  }

  public validStepOneInitForm(): void {
    const { value, valid } = this.stepOneInitForm;
    if (valid) {
      this.quickFindUF = new QuickFindUF(value.size);
    }
  }

}
