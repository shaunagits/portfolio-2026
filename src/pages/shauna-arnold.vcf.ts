// The "Save contact" file on /card. Built from src/data/card.json at build time,
// so it always matches the page. vCard 3.0: the version iOS and Android contacts
// both import cleanly. Lines MUST end in CRLF per the spec.
import type { APIRoute } from 'astro';
import card from '../data/card.json';

const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;');

export const GET: APIRoute = () => {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc(card.familyName)};${esc(card.givenName)};;;`,
    `FN:${esc(card.name)}`,
    `TITLE:${esc(card.title)}`,
    `EMAIL;TYPE=INTERNET,WORK:${card.email}`,
    `TEL;TYPE=CELL,VOICE:${card.phoneE164}`,
    `URL:${card.website}`,
    `ADR;TYPE=WORK:;;;${esc(card.city)};${esc(card.region)};;${esc(card.country)}`,
    'END:VCARD',
  ];
  return new Response(lines.join('\r\n') + '\r\n', {
    headers: { 'Content-Type': 'text/vcard; charset=utf-8' },
  });
};
