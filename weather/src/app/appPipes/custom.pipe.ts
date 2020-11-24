import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'temperatureConverter'
})
export class CustomPipe implements PipeTransform{
    transform(value:number){
        return Math.floor (value - 273)
    }
}