export const whatsappLink = (carLink: string) =>
  `https://wa.me/?text=${encodeURIComponent(`Bu araç ile ilgileniyorum: ${carLink}`)}`;
