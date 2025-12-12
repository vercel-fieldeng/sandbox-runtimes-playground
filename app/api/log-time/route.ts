import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const now = new Date().toISOString();
  console.log('Current ISO Time:', now);
  return new Response(`Logged time: ${now}`);
}
cat: app/api/log-time/route.ts: No such file or directory
