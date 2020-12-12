import { Injectable } from '@angular/core';
import { DweetSettingsEnum } from 'src/enum/DweetSettingsEnum';
import { HttpClient } from '@angular/common/http';
import Dweet from 'src/models/Dweet';
import With from 'src/models/with';
import Content from 'src/models/Content';

@Injectable({
  providedIn: 'root'
})
export class DweetService {
  private dweetioApiUrl = DweetSettingsEnum.DWEET_URL_GET_ALL;
  private thingName = DweetSettingsEnum.DWEET_THING_NAME;

  constructor(private http: HttpClient) { }

  loadLastDweets() {
    return this.http.get(this.dweetioApiUrl + this.thingName.toString())
  }

  private formatDate(date: any): string {
    let originalDate: string = date;
    var dateParse = originalDate.slice(0, 10)
    return dateParse
  }

  private formatTime(date: any): string {
    let originalDate: string = date;
    var timeParse = originalDate.slice(11, 19)
    return timeParse
  }

  preencherDweet(data: any): Dweet { 
    let dweet: Dweet 
    let _withs: Array<With> 
    let _date: string 
    let _time: string

    let _lightColor: string;
    let _lightFelling: string;
    let _buzzerOn: boolean = false;
    
    _withs = new Array<With>() 
    
    for(let _with of data.with) { 
      let tempContent: Content 
      tempContent = new Content(_with.content.temperatura, 
        _with.content.luminosidade, 
        _with.content.umidade); 

      _date = this.formatDate(_with.created) 
      _time = this.formatTime(_with.created) 
      
      if (_with.content.current_color == "vermelho") {
        _lightColor = "#B71C1C";
        _lightFelling = "HOT";
      } else if (_with.content.current_color == "verde") {
        _lightColor = "#1B5E20";
        _lightFelling = "COLD";
      } else if (_with.content.current_color == "azul") {
        _lightColor = "#01579B";
        _lightFelling = "WARM";
      }

      if(_with.content.status_buzzer == "1") {
        _buzzerOn = true;
      }

      let tempWith: With 
      tempWith = new With(_with.thing, 
        _with.created,
        tempContent, 
        _date,
        _time,
        _with.content.umidMin,
        _with.content.umidMax,
        _with.content.tempMin,
        _with.content.tempMax,
        _with.content.lumMin,
        _with.content.lumMax,
        _lightColor,
        _lightFelling,
        _buzzerOn) 
      
      _withs.push(tempWith) 
    }

    dweet = new Dweet(data.this, data.by, data.the, _withs) 
    
    return dweet
  }
}
