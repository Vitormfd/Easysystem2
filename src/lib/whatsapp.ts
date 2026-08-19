export const CONTACT = {
  whatsappNumber: '5574999348744',
  instagram: '@easysystem2',
  instagramUrl: 'https://instagram.com/easysystem2',
}

export function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function hireMessage(productName: string) {
  return `Olá! Vim pelo site da Easy System e quero contratar o ${productName}.`
}

export function infoMessage(productName: string) {
  return `Olá! Vim pelo site da Easy System e queria saber mais sobre o ${productName}.`
}

export const GENERIC_CONTACT_MESSAGE =
  'Olá! Vim pelo site da Easy System e gostaria de falar com vocês.'
