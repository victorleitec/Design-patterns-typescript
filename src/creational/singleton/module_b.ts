import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseFunction as myDatabaseFunctionA } from './module_a';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'Roberto', age: 35 });
myDatabaseFunction.add({ name: 'Claudio', age: 54 });
myDatabaseFunction.add({ name: 'Paloma', age: 12 });
myDatabaseFunction.show();

console.log(myDatabaseFunction === myDatabaseFunctionA);
