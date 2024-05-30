export default function getLocationsString(cities: string[]): string {
  if (!cities?.length) {
    return '';
  }

  if (cities?.length > 1) {
    let locationsString = '';
    for (let i = 0; i < cities.length; i++) {
      locationsString +=
        i === cities.length - 1 ? `, and ${cities[i]}` : cities[i];
    }

    return locationsString;
  }

  return cities.join('');
}
