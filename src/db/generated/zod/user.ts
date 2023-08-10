import * as z from "zod"
import * as imports from "../../null"
import { CompleteAccount, AccountModel, CompleteMembership, MembershipModel, CompleteForm, FormModel } from "./index"

export const _UserModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  password: z.string().nullish(),
  image: z.string().nullish(),
  createdAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof _UserModel> {
  accounts: CompleteAccount[]
  memberships: CompleteMembership[]
  forms: CompleteForm[]
}

/**
 * UserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const UserModel: z.ZodSchema<CompleteUser> = z.lazy(() => _UserModel.extend({
  accounts: AccountModel.array(),
  memberships: MembershipModel.array(),
  forms: FormModel.array(),
}))
