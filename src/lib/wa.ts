export const PHONE = "917489414311";
export const wa = (text: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
