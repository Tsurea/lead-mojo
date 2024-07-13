export type submitSearch = {
    name: string;
    age: number;
    gender: number;
    latitude: number;
    longitude: number;
    account: boolean;
    email: string;
    password: string;
}

export enum Gender {
    Male = "MALE",
    Female = "FEMALE",
}
