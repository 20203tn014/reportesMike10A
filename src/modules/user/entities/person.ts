import { Entity, TStatus } from "../../../kernel/types";

export type TPerson = Entity<number> & {
    name: string;
    surname: string;
    lastname?: string;
    birdthday?: string;
    createdAt?: string;
    curp?: string;
    rfc?: string;
    status?: TStatus;
};