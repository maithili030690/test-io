export interface Istd{
    fname: string;
    lname: string;
    email: string;
    contact: number;
    isActive: 'in-active'|'active';
}

export interface Itodo {
    todoItem: string;
    todoRating: number;
}