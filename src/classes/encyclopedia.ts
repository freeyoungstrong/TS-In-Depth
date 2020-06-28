import { ReferenceItem } from './reference-item';
import { positiveInteger } from '../desorators';

export default class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    private _copies: number;

    @positiveInteger
    get copies(): number {
        return this._copies;
    }

    set copies(newCopies: number) {
        this._copies = newCopies;
    }

    printItem(): void {
        super.printItem();
        console.log('Edition: ', this.edition, ' ', this.year);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
