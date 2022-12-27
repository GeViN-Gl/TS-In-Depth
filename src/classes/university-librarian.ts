import { format, logger, logMethod, logParameter, seald, writable } from '../decorators';
import * as Interfaces from './../interfaces';

// interface A {
//     a: number;
// }

// @seald('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;

    // a: number = 1;
    @logMethod
    assistCustomer(@logParameter custName: string, @logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }

    // @writable(true)
    /* static */
    assistFaculty(): void {
        console.log('Assist Faculty');
    }

    // @writable(false)
    teachCommunity(): void {
        console.log('Teach Community');
    }
}

export { UniversityLibrarian };
