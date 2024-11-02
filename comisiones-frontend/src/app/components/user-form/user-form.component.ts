import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  nombre = '';
  correo = '';

  constructor(private userService: UserService) {}

  onSubmit(): void {
    const newUser = { nombre: this.nombre, correo: this.correo };
    this.userService.createUser(newUser).subscribe(
      (data) => {
        console.log('Usuario creado:', data);
        alert('Usuario creado con éxito');
        this.nombre = '';
        this.correo = '';
      },
      (error) => {
        console.error('Error al crear el usuario:', error);
        alert('Error al crear el usuario');
      }
    );
  }
}
