import { siteConfig } from '../config/site';

const { contact, social } = siteConfig;

export const hasValue = (value?: string | null): value is string =>
  typeof value === 'string' && value.trim().length > 0;

export const onlyDigits = (value: string) => value.replace(/\D/g, '');

/** Número válido para wa.me: DDI + DDD + número (12 ou 13 dígitos no Brasil). */
export const whatsappNumber = (() => {
  const digits = onlyDigits(contact.whatsapp);
  return digits.length >= 10 && digits.length <= 15 ? digits : '';
})();

export const hasWhatsapp = whatsappNumber !== '';

export function whatsappLink(message: string = siteConfig.whatsappMessage) {
  if (!hasWhatsapp) return '';
  const text = hasValue(message) ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${whatsappNumber}${text}`;
}

/** Destino dos botões "Falar com a Professora Meire":
 *  WhatsApp quando cadastrado; caso contrário, a seção de contato. */
export const primaryContact = hasWhatsapp
  ? { href: whatsappLink(), external: true }
  : { href: '#contato', external: false };

export const instagramUrl = hasValue(social.instagram)
  ? `https://www.instagram.com/${social.instagram.replace(/^@/, '').trim()}/`
  : '';

export const facebookUrl = hasValue(social.facebook)
  ? social.facebook.startsWith('http')
    ? social.facebook
    : `https://www.facebook.com/${social.facebook.trim()}`
  : '';

export function formatWhatsappDisplay(digits: string) {
  const local = digits.startsWith('55') ? digits.slice(2) : digits;
  const m = local.match(/^(\d{2})(\d{4,5})(\d{4})$/);
  return m ? `(${m[1]}) ${m[2]}-${m[3]}` : digits;
}

export type ContactChannel = {
  id: string;
  icon: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

/** Lista apenas os canais preenchidos em siteConfig. */
export function getContactChannels(): ContactChannel[] {
  const channels: ContactChannel[] = [];

  if (hasWhatsapp)
    channels.push({
      id: 'whatsapp',
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: formatWhatsappDisplay(whatsappNumber),
      href: whatsappLink(),
      external: true,
    });
  if (hasValue(contact.phone))
    channels.push({
      id: 'phone',
      icon: 'phone',
      label: 'Telefone',
      value: contact.phone,
      href: `tel:+${onlyDigits(contact.phone).replace(/^(?!55)/, '55')}`,
    });
  if (instagramUrl)
    channels.push({
      id: 'instagram',
      icon: 'instagram',
      label: 'Instagram',
      value: `@${social.instagram.replace(/^@/, '')}`,
      href: instagramUrl,
      external: true,
    });
  if (facebookUrl)
    channels.push({ id: 'facebook', icon: 'facebook', label: 'Facebook', value: 'Facebook', href: facebookUrl, external: true });
  if (hasValue(contact.email))
    channels.push({ id: 'email', icon: 'mail', label: 'E-mail', value: contact.email, href: `mailto:${contact.email}` });
  if (hasValue(contact.address))
    channels.push({
      id: 'address',
      icon: 'map-pin',
      label: 'Endereço',
      value: contact.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`,
      external: true,
    });
  if (hasValue(contact.openingHours))
    channels.push({ id: 'hours', icon: 'clock', label: 'Horários', value: contact.openingHours });

  return channels;
}
