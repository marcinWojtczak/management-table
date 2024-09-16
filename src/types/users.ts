export type User  = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string
}

export type Notification = {
    status: string,
    title: string,
    message: string
}

export type Options = {
    id: number
    name: string,
    username: string,
    email: string,
    phone: string,
}

export type SortOrder = {
    columnType: "id" | "name" | "username" | "email" | "phone" | "filters"
    order: "asc" | "desc";
}