import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploderComponent } from '../image-uploder/image-uploder.component';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule,ImageUploderComponent],
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {

}
