import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudinaryService } from 'src/app/services/cloudinary/cloudinary.service';

@Component({
  selector: 'app-image-uploder',
  standalone: true,
  imports: [CommonModule],
  providers: [CloudinaryService],
  templateUrl: './image-uploder.component.html',
})
export class ImageUploderComponent implements OnInit {
  myWidget: any;

  constructor(private cloudinaryService: CloudinaryService) {}
  
  ngOnInit() {
    this.myWidget = this.cloudinaryService.createUploadWidget();
  }

  openWidget() {
    this.myWidget.open();
  }
}
