import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsuarioInterfaceResponse } from "../interface/user-list.interface";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = "http://localhost:3001/usuarios";

  constructor(private http: HttpClient) {}
  public usuarios:UsuarioInterfaceResponse[] = [
    {
      "id": 1,
      "email": "user1@example.com",
      "username": "user1"
    },
    {
      "id": 2,
      "email": "user2@example.com",
      "username": "user2"
    },
    {
      "id": 3,
      "email": "user3@example.com",
      "username": "user3"
    },
    {
      "id": 4,
      "email": "user4@example.com",
      "username": "user4"
    },
    {
      "id": 5,
      "email": "user5@example.com",
      "username": "user5"
    },
    {
      "id": 6,
      "email": "user6@example.com",
      "username": "user6"
    },
    {
      "id": 7,
      "email": "user7@example.com",
      "username": "user7"
    },
    {
      "id": 8,
      "email": "user8@example.com",
      "username": "user8"
    },
    {
      "id": 9,
      "email": "user9@example.com",
      "username": "user9"
    },
    {
      "id": 10,
      "email": "user10@example.com",
      "username": "user10"
    },
    {
      "id": 11,
      "email": "user11@example.com",
      "username": "user11"
    },
    {
      "id": 12,
      "email": "user12@example.com",
      "username": "user12"
    },
    {
      "id": 13,
      "email": "user13@example.com",
      "username": "user13"
    },
    {
      "id": 14,
      "email": "user14@example.com",
      "username": "user14"
    },
    {
      "id": 15,
      "email": "user15@example.com",
      "username": "user15"
    },
    {
      "id": 16,
      "email": "user16@example.com",
      "username": "user16"
    },
    {
      "id": 17,
      "email": "user17@example.com",
      "username": "user17"
    },
    {
      "id": 18,
      "email": "user18@example.com",
      "username": "user18"
    },
    {
      "id": 19,
      "email": "user19@example.com",
      "username": "user19"
    },
    {
      "id": 20,
      "email": "user20@example.com",
      "username": "user20"
    },
    {
      "id": 21,
      "email": "user21@example.com",
      "username": "user21"
    },
    {
      "id": 22,
      "email": "user22@example.com",
      "username": "user22"
    },
    {
      "id": 23,
      "email": "user23@example.com",
      "username": "user23"
    },
    {
      "id": 24,
      "email": "user24@example.com",
      "username": "user24"
    },
    {
      "id": 25,
      "email": "user25@example.com",
      "username": "user25"
    }
  ]

  public obterUsuario(): Observable<UsuarioInterfaceResponse[]> {
    return this.http.get<UsuarioInterfaceResponse[]>(this.apiUrl);
  }

  public atualizarUsuario(usuario: UsuarioInterfaceResponse): Observable<UsuarioInterfaceResponse> {
    const url = `${this.apiUrl}/${usuario.id}`;
    return this.http.put<UsuarioInterfaceResponse>(url, usuario);
  }

  public excluirUsuario(id?: any){

    const index = this.usuarios.findIndex(usuario => usuario.id === id); // Encontra o índice do usuário com base no ID
    if (index !== -1) {
        this.usuarios.splice(index, 1); // Remove o usuário do array
    } else {
      console.log('Usuário não encontrado');
    }
    // const url = `${this.apiUrl}/${id}`;
    // return this.http.delete(url);
  }

  public criarUsuario(usuario: any): any {

    this.usuarios.push(usuario)

    // return this.http.post<UsuarioInterfaceResponse>(this.apiUrl, usuario);
  }
}
