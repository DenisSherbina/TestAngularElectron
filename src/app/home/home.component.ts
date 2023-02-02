import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { pogoda } from './../model/pogoda'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpService) { }

  public sity: Array<string> = [] // сюда загружаем массив объектов (список брендов)

  public pogoda: pogoda // сюда подгрузим информацию из конкретного города

  public confirm: boolean = false // кнопка подтверждения

  public actual_date: Date | null = new Date() // отобразим сегодняшнюю дату

  ngOnInit(): void {
    // инициализация проекта
    this.start_page()
  }

  async start_page() {
    // Загружаем список городов
    this.confirm = false
    this.sity = []
    this.pogoda = undefined
    await new Promise( (resolve) => { setTimeout(() => { console.log('Специально небольшая задержка в 500 мс'); return resolve(1); }, 500) })
    this.http.get('getAllSity')
      .subscribe(
        res => {
          console.log('\nОтвет сервер: ', res)
          this.confirm = true // вернём возможность кнопке обновления... обновлять :)
          // запишем наши города
          this.sity = res
        })
  }

  Loading_pogoda(event) {
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
