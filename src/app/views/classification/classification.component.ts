import { Component, OnInit } from '@angular/core';
import { ClassificationService } from 'src/app/services/classification.service';
@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})

export class ClassificationComponent implements OnInit {


  classifications!: any[] ;

  constructor(private readonly classificationService: ClassificationService) { }

  async ngOnInit(): Promise<void> {
		await this.loadClassifications();
  }

  async loadClassifications(): Promise<void> {
		this.classifications = await this.classificationService.get();
	}


}
