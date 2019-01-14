import { Component } from "@angular/core";
import { templateJitUrl } from "@angular/compiler";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 5;
  serverStatus: string = 'offline';

}
