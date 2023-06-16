import { v4 as uuidv4 } from 'uuid';

const uuid = uuidv4();
console.log(uuid);

type Item = {
  id: string;
  name: string;
  price: number;
  description: string;
};

type User = {
  id: string;
  name: string;
  age: number;
  cart: Item[];
};

function createUser(name: string, age: number): User {

  return { id: uuidv4(), name, age, cart: [] };
}

function createItem(name: string, price: number, description: string): Item {

  return { id: uuidv4(), name, price, description };
}

export { createUser, createItem};
