import * as z from "zod"
import * as imports from "../../null"
import { MembershipRole } from "@prisma/client"
import { CompleteUser, UserModel, CompleteTeam, TeamModel } from "./index"

export const _MembershipModel = z.object({
  id: z.string(),
  role: z.nativeEnum(MembershipRole),
  createdAt: z.date(),
  userId: z.string(),
  teamId: z.string(),
})

export interface CompleteMembership extends z.infer<typeof _MembershipModel> {
  user: CompleteUser
  team: CompleteTeam
}

/**
 * MembershipModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const MembershipModel: z.ZodSchema<CompleteMembership> = z.lazy(() => _MembershipModel.extend({
  user: UserModel,
  team: TeamModel,
}))
