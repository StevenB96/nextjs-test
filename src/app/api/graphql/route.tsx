// src/app/api/graphql/route.ts
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest, NextResponse } from 'next/server';
import { resolvers } from '../../../graphql/resolvers';
import { typeDefs } from '../../../graphql/typeDefs';

// Initialize Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Create handler for Next.js
const handler = startServerAndCreateNextHandler(server);

// CORS middleware function
const allowCORS = () => {
    const response = new NextResponse(null, { status: 200 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return response;
};

// Handle GET requests
export async function GET(req: NextRequest) {
    if (req.method === 'OPTIONS') {
        return allowCORS();
    }
    return handler(req);
}

// Handle POST requests
export async function POST(req: NextRequest) {
    if (req.method === 'OPTIONS') {
        return allowCORS();
    }
    return handler(req);
}

// Handle OPTIONS requests
export async function OPTIONS() {
    return allowCORS();
}
