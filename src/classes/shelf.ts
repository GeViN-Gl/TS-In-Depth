import { Book, Magazine, ShelfItem } from '../interfaces';

export default class Shelf<T extends ShelfItem> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    find(title: string): T {
        return this.items.find((item: T) => item.title === title);
    }

    printTitles(): void {
        this.items.forEach(item => console.log(item.title));
    }
}

// TODO
export class Shelf2 {
    private items: Book[] | Magazine[] = [];

    private isMagazine(item: Book | Magazine): item is Magazine {
        return (<Magazine>item).publisher !== undefined;
    }

    add(item: Book & Magazine): void {
        this.items.push(item);
    }

    getFirst() {
        return this.items[0];
    }
}
