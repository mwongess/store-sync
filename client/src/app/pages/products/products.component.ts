import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from 'src/app/components/product-form/product-form.component';
import { ProductComponent } from 'src/app/components/product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,ProductFormComponent,ProductComponent],
  templateUrl: './products.component.html'
})
export class ProductsComponent {

}
