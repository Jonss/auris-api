import type { PageServerLoad } from './$types';
import { PUBLIC_API_URL } from '$env/static/public';

const url = (PUBLIC_API_URL || 'http://localhost:8787/').replace(/\/+$/, '');
 
 export const load: PageServerLoad = async ({ fetch }) => {
   const uri = `${url}/hello`
   const res = await fetch(uri);
   const message = await res.text();

   return { message };
 };
