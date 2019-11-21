import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service'

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.getTestData().subscribe((data)=>{
      console.log("Test Data", data);
    })
  }

}
