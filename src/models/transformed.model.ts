import { Pet } from './pet.model';

export interface Transformed {
    gender: string;
    pets: Pet[];
    cats: Pet[];
}