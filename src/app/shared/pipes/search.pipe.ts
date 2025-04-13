import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: true
})
export class SearchPipe implements PipeTransform {
  transform<T extends Record<string, any>>(
    items: T[],
    searchText: string,
    ...keys: (keyof T)[]
  ): T[] {
    if (!searchText || !items) return items;
    const lower = searchText.toLowerCase();
    return items.filter((item) =>
      keys.some((key) => item[key]?.toString().toLowerCase().includes(lower))
    );
  }
}
