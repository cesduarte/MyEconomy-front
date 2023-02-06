import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Classification } from 'src/app/models/classification';
import { ClassificationService } from 'src/app/services/classification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-classification-detail',
  templateUrl: './classification-detail.component.html',
  styleUrls: ['./classification-detail.component.scss']
})
export class ClassificationDetailComponent implements OnInit {

  @Input() classification!: Classification;

  form!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly classificationService: ClassificationService
    ) { }

  async ngOnInit(): Promise<void> {
    this.iniciaForm();
  }

  async iniciaForm() {
		this.form = this.formBuilder.group({
			description: [this.classification?.description, [Validators.required]],

		});
	}
  async save(){

    if (!this.form.valid) return;

		try {
			const classification = await this.classificationService.save(this.form.value, this.classification?.id);

			Swal.fire({
				icon: 'success',
				title: 'Sucesso',
				text: `Classificação ${this.classification ? 'alterada' : 'criada'} com sucesso!`
			}).then(() => {
				this.classificationService.updateClassification.emit(this.classification ? classification : true);
			});
		} catch (error) {
			console.error('enviaForm', error);
		}
  }


}
