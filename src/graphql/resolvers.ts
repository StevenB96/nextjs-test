// resolvers.ts
import {
    getUsers,
    getUserById
} from './data';
import {
    IResolvers
} from '@graphql-tools/utils';
import {
    User
} from './typeDefs';

export const resolvers: IResolvers = {
    Query: {
        users: (): User[] => {
            return getUsers();
        },
        user: (_: any, { id }: { id: string }): User | null => {
            return getUserById(id);
        },
    },
};