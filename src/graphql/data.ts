// data.ts
import { User } from './typeDefs';

const users: User[] = [
    {
        id: '1',
        name: 'Alice',
        email: 'alice@example.com',
        age: 28,
    },
    {
        id: '2',
        name: 'Bob',
        email: 'bob@example.com',
        age: 34,
    },
    {
        id: '3',
        name: 'Charlie',
        email: 'charlie@example.com',
        age: 22,
    },
];

export const getUsers = () => {
    return users;
};

export const getUserById = (id: string) => {
    return users.find(user => user.id === id) || null;
};