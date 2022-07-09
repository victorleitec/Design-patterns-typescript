import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'Luiz', age: 30 });
myDatabaseFunction.add({ name: 'Fulano', age: 18 });
myDatabaseFunction.add({ name: 'Lucia', age: 25 });

export { myDatabaseFunction };
