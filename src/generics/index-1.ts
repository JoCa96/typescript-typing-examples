/**
 * Generics
 * ==================
 *
 * Use:
 * - for utility functions
 * - middleware pattern
 *
 * Sources:
 * - https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content
 */

namespace Generics1 {
  type MyData = {
    someData: string;
  };

  class Storage {
    write(data: any): void { // With types we can either make it very specific "MyData" or very generic "any"
      // ...
    }
    read(): any {
      // ...
      return null;
    }
  }

  const storage = new Storage();
  storage.write({});
  const data = storage.read(); // data is any
}
