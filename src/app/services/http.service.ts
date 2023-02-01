import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    console.log('Отправляю запрос сюда: ', url)
    return this.http.get<any>('http://localhost:5111/api/'+url+'?API_KEY=qwerty123');
  }

}