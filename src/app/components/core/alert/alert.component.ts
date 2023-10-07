import { Component, Injectable } from '@angular/core';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AlertComponent {

  constructor(private toastEvokeService: ToastEvokeService) { }

  showErrorMessage(message: string) {
    this.toastEvokeService.danger('error', message).subscribe();
  }

  showWarningMessage(message: string) {
    this.toastEvokeService.warning('Atención!', message).subscribe();
  }

}
