import { Component, Input } from '@angular/core';
import { APIResponse } from 'src/app/models/api';

@Component({
  selector: 'app-grid',
  templateUrl: './presentationalForm.component.html',
  styleUrls: ['./presentationalForm.component.css']
})
export class presentationalFormComponent {
@Input() data!: APIResponse


}
