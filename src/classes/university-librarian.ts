import { logger, seald } from '../decorators';
import * as Interfaces from './../interfaces';

// interface A {
//     a: number;
// }

// @seald('UniversityLibrarian')
@logger
class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    // a: number = 1;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }
}

export { UniversityLibrarian };
