import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ApiService } from '../service/api.service';
import { map } from 'rxjs';
import { AlertComponent } from '../components/core/alert/alert.component';

export const scoreGuard: CanActivateFn = (route, state) => {
  const apiService = inject(ApiService);
  const alert = inject(AlertComponent);

  const userLogin = route.params['login'];

  return apiService.getUser(userLogin).pipe(
    map((data) => {
      if (data.followers == 0 && data.public_repos == 0) {
        alert.showWarningMessage('Usuario sin seguidores y sin repositorios públicos');
        return false;
      }
      route.data = data;

      return true;
    })
  );
}
