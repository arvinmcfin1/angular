import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    users = [
        {
            name: 'Nome1',
            lastname: 'Cognome1',
            email: 'email1@prova.it',
            fiscalcode: '123456',
            province: 'Provincia1',
            phone: '123',
            age: 12
          },
          {
            name: 'Nome2',
            lastname: 'Cognome2',
            email: 'email2@prova.it',
            fiscalcode: '123456',
            province: 'Provincia2',
            phone: '123',
            age: 13
          },
          {
            name: 'Nome3',
            lastname: 'Cognome3',
            email: 'email3@prova.it',
            fiscalcode: '123456',
            province: 'Provincia3',
            phone: '123',
            age: 14
          }
    ];

    getUsers() {
        return this.users;
    }
    deleteUser(user) {
        const index = this.users.indexOf(user);
        if ( index >= 0 ) {
            this.users.splice(index, 1);
        }
    }
}
