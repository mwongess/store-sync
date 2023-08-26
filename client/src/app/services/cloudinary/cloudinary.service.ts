import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  cloudName = "dd2zkoik3";
  uploadPreset = 'aoh4fpwm';

  constructor() {}

  createUploadWidget() {
    cloudinary.createUploadWidget(
        {
          cloudName: this.cloudName,
          uploadPreset: this.uploadPreset
        },
        (error:any, result:any) => {
          if (!error && result && result.event === "success") {
            console.log("Done uploading image! Here is the image info: ", result.info);

            return result.info.secure_url //Uploaded image url!
          }
        }
      );
  }
}
