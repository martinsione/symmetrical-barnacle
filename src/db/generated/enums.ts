export const MembershipRole = {
    OWNER: "OWNER",
    ADMIN: "ADMIN",
    USER: "USER"
} as const;
export type MembershipRole = (typeof MembershipRole)[keyof typeof MembershipRole];
export const FormStatus = {
    PUBLISHED: "PUBLISHED",
    DRAFT: "DRAFT"
} as const;
export type FormStatus = (typeof FormStatus)[keyof typeof FormStatus];
