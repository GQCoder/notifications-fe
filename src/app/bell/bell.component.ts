import {Component, OnInit} from '@angular/core';
import {WebServerClient} from "../web-server-client.service";
import {PersistenceService, StorageType} from 'angular-persistence';

@Component({
  selector: 'app-bell',
  templateUrl: './bell.component.html',
  styleUrls: ['./bell.component.css']
})
export class BellComponent implements OnInit {

  count = 0;
  noActiveNotifications = true;
  notifications;
  theseNotifications = true;

  constructor(private webServerClient: WebServerClient, private ps: PersistenceService) { }


  ngOnInit(): void {

     this.getNotifications();
  }

  async getNotifications(): Promise<void> {

    this.webServerClient.getNotifications().subscribe(data => {
      if(data.count > 0) {
        this.ps.set('data', data, {type: StorageType.LOCAL});
        this.handleData(data);
      }
    }, error1 => {

      console.log(error1);

      const data = this.ps.get('data', StorageType.LOCAL);
      this.handleData(data);
    });

  }

  handleData(data) {
      if(data) {
        this.count = data.count;
        this.noActiveNotifications = false;
        this.notifications = data.notifications
      }
  }

  showNotifications() {

    this.theseNotifications = false;
  }

}
