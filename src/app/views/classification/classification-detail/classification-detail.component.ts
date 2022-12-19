import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-classification-detail',
  templateUrl: './classification-detail.component.html',
  styleUrls: ['./classification-detail.component.scss']
})
export class ClassificationDetailComponent implements OnInit {

  @Input() classification: any;

  form!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) { }

  async ngOnInit(): Promise<void> {
    this.iniciaForm();
  }

  async iniciaForm() {
		this.form = this.formBuilder.group({
			description: [this.classification?.description, [Validators.required]],
		});
	}

}
