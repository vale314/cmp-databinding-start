import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
      {type:'server', name:'Testserver', content:'Just a jest!'},
      {type:'blueprint', name:'Testserver3', content:'Just a jest!3'}];
 

      onServerAdded(serverDatas:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverDatas.serverName,
      content: serverDatas.serverContent
    });
  }

  onBlueprintAdded(blueprintDatas:{serverName:string, serverContent:string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintDatas.serverName,
      content: blueprintDatas.serverContent
    });
  }
}
