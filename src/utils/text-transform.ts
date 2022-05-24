export const capitalizeFirstLetter = (source: string) => {
  if (!source) return '';
  return source.charAt(0).toUpperCase() + source.slice(1);
};

export const capitalize = (value = ''): string => {
  const split = value.toLowerCase().split(' ');
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
  }
  // Directly return the joined string
  return split.join(' ');
};
