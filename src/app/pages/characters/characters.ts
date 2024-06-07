export interface Character {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: any;
  }
  
export interface Meta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}

export interface Link {
    first: string;
    previous: string;
    next: string;
    last: string;

}

export interface PaginationCharacter {
    items: Character[];
    meta: Meta;
    links: Link;
}