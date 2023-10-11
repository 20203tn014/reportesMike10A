import { Entity, TStatus } from "../../../kernel/types";

export type TUser = Entity<number> & {
    username: string;
    password?: string;
    userDetails?: JSON;
    type?: number;
    status?: TStatus;
    person?:any;
};

export type UserAreas = Entity<number> & {
    user: TUser;
    area: Area;
    createdAt?: string;
    status?: TStatus;
};

export type Area = Entity<number> & {
    name: string;
    academicDivision?: AcademicDivision;
    createdAt?: string;
    status?: TStatus;
};

export type AcademicDivision = Entity<number> & {
    name: string;
    academicDivision?: string;
    createdAt?: string;
    status?: TStatus;
};