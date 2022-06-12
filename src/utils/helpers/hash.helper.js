/**
 * @description
 * Generates a random number between 0 and 999
 */
export default function getHash() {
  return Math.round(Math.random() * 999).toString().padStart(3, '0');
}
