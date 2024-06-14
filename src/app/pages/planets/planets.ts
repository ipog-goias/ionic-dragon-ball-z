export interface PaginationPlanet {
    items: Item[]
    meta: Meta
    links: Links
  }
  
  export interface Item {
    id: number
    name: string
    isDestroyed: boolean
    description: string
    image: string
    deletedAt: any
  }
  
  export interface Meta {
    totalItems: number
    itemCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
  }
  
  export interface Links {
    first: string
    previous: string
    next: string
    last: string
  }
  