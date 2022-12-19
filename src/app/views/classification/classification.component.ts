import { Component, OnInit } from '@angular/core';
import { Classification } from 'src/app/models/classification';
import { ClassificationService } from 'src/app/services/classification.service';
@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})

export class ClassificationComponent implements OnInit {


  classifications!: Classification[] ;

  constructor(private readonly classificationService: ClassificationService) { }

  async ngOnInit(): Promise<void> {
		await this.loadClassifications();

    this.classificationService.updateClassification.subscribe(async (classification) => {
			if (typeof classification === 'object') {
				const busca = this.classifications.find((s: any) => s.id === classification.id);
				if (busca) Object.assign(busca, classification);
			} else await this.loadClassifications();
		});
  }

  async loadClassifications(): Promise<void> {
		this.classifications = await this.classificationService.get();
	}


}
