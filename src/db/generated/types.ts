import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { MembershipRole, FormStatus } from "./enums";

export type Account = {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
};
export type Form = {
    id: Generated<number>;
    slug: string;
    name: string;
    questions: Generated<unknown>;
    numberOfResponses: Generated<number>;
    password: string | null;
    status: Generated<FormStatus>;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    userId: string | null;
    teamId: string | null;
};
export type Membership = {
    id: string;
    role: Generated<MembershipRole>;
    createdAt: Generated<Timestamp>;
    userId: string;
    teamId: string;
};
export type Response = {
    id: Generated<number>;
    data: Generated<unknown>;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    submittedAt: Timestamp | null;
    formId: number;
};
export type Team = {
    id: string;
    name: string;
    logo: string | null;
    slug: string;
    createdAt: Generated<Timestamp>;
};
export type TeamInvite = {
    id: string;
    email: string;
    expires: Timestamp;
    acceptedAt: Timestamp | null;
    createdAt: Generated<Timestamp>;
    teamId: string;
};
export type User = {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Timestamp | null;
    password: string | null;
    image: string | null;
    createdAt: Generated<Timestamp>;
};
export type VerificationToken = {
    identifier: string;
    token: string;
    expires: Timestamp;
};
export type DB = {
    Account: Account;
    Form: Form;
    Membership: Membership;
    Response: Response;
    Team: Team;
    TeamInvite: TeamInvite;
    User: User;
    VerificationToken: VerificationToken;
};
