import { Component, OnInit, Inject } from '@angular/core';
import { LocationService } from '../../services/machine-service/location.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';


const uoloadURL = 'http://localhost:3200/v1/api/upload';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  constructor(private location: LocationService, public dialog: MatDialog, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userId: this.fb.array([
        this.fb.control(null)
      ])
    })
  }
  percentage: number;

  public uploader: FileUploader = new FileUploader({
    url: uoloadURL,
    itemAlias: 'photo'
  });


  fileUploadsMethod() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('data', "Send data to Server.");
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      console.log('File uploaded successfully');
      this.percentage = 0;
    };
    this.uploader.onProgressItem = (progress: any) => {
      this.percentage = progress['progress'];
      console.log('ABC');
    };
  }
  ngOnInit() {
    this.fileUploadsMethod();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileImageModal, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  selectUserImage() {
    this.openDialog()
  }

  userForm: FormGroup;
  addPhone(): void {
    (this.userForm.get('userId') as FormArray).push(
      this.fb.control(null)
    );
  }

  removePhone(index) {
    (this.userForm.get('userId') as FormArray).removeAt(index);
  }

  getuserIdFormControls(): AbstractControl[] {
    return (<FormArray>this.userForm.get('userId')).controls
  }

  send(values) {
    console.log(values);
  }
}


@Component({
  selector: 'image-upload',
  templateUrl: 'modal/image-upload.modal.html',
})
export class ProfileImageModal {
  percentage: any;

  public uploader: FileUploader = new FileUploader({
    url: uoloadURL,
    itemAlias: 'photo'
  });
  constructor(
    public dialogRef: MatDialogRef<ProfileImageModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  fileUploadsMethod() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('data', "Send data to Server.");
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      console.log('File uploaded successfully');
    };
    this.uploader.onProgressItem = (progress: any) => {
      this.percentage = progress['progress'];
    };
  }

  ngOnInit() {
    this.fileUploadsMethod();
  }
}
