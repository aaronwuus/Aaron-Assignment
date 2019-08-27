import { Feet } from './Feet';
import { Miles } from './Miles';
import { Meters } from './Meters';
import { Kilometers } from './Kilometers';

export interface EstimatedDiameter {
    kilometers: Kilometers;
    meters: Meters;
    miles: Miles;
    feet: Feet;
}
