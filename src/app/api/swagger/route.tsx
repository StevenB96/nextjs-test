// src/app/api/openapi/route.js

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'next.openapi.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');

  return NextResponse.json(JSON.parse(jsonData));
}