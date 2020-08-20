import { Pet } from './pet.model';

export interface Person {
    name: string;
    gender: string;
    age: number;
    pets: Pet[];
}