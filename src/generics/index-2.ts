namespace Generics2 {
  type MyData = {
    someData: string;
  };

  // imagine a Storage class
  class Storage<T extends any> {
    write(data: T): void {
      // ...
    }
    read(): T {
      // ...
      return null as any as T;
    }
  }

  const storage = new Storage<MyData>();
  const data = storage.read();
  data.someData;
  data.someThingElse;
}
