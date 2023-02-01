import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { pogoda } from './../model/pogoda'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private http: HttpService) { }

  public sity: Array<string> = ['Москва', 'Ереван', 'Оренбург', 'Ростов-на-Дону'] // сюда загружаем массив объектов (список брендов)

  public pogoda: pogoda

  public confirm: boolean = false // кнопка подтверждения

  public actual_date: Date | null = new Date()

  ngOnInit(): void {
    console.log('HomeComponent INIT');
    this.start_page()
  }

  start_page() {
    // Загружаем список городов
    this.confirm = false
    this.sity = []
    this.pogoda = undefined
    this.http.get('getAllSity')
      .subscribe(
        res => {
          console.log('\nОтвет сервер: ', res)
          this.confirm = true
          // запишем наши города
          this.sity = res
          console.log('this.sity: ', this.sity)
        })
  }

  async Loading_pogoda(event) {
    let get_sity = this.getSelect().value
    console.log('Загружаю контент: ', get_sity)
    // Загружаем погоду в городе
      this.http.get('getSityPogoda/' + get_sity)
        .subscribe(
          res => {
            console.log('\nОтвет сервер: ', res)
            // запишем погоду в городе
            this.pogoda = res
          })
  }

  getSelect() {
    return <HTMLSelectElement>document.getElementById('sity-select');
  }

}
