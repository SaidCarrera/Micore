import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userData = { nombre: '', correo: '' };
  message = '';

  constructor(private userService: UserService) {}

  createUser() {
    this.userService.createUser(this.userData).subscribe(
      (response) => {
        this.message = 'Usuario creado exitosamente';
        this.userData = { nombre: '', correo: '' }; // Limpiar el formulario
      },
      (error) => {
        this.message = 'Error al crear el usuario';
        console.error('Error:', error);
      }
    );
  }
}
