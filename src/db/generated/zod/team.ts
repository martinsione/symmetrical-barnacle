import * as z from "zod"
import * as imports from "../../null"
import { CompleteTeamInvite, TeamInviteModel, CompleteMembership, MembershipModel, CompleteForm, FormModel } from "./index"

export const _TeamModel = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string().nullish(),
  slug: z.string(),
  createdAt: z.date(),
})

export interface CompleteTeam extends z.infer<typeof _TeamModel> {
  invites: CompleteTeamInvite[]
  members: CompleteMembership[]
  forms: CompleteForm[]
}

/**
 * TeamModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const TeamModel: z.ZodSchema<CompleteTeam> = z.lazy(() => _TeamModel.extend({
  invites: TeamInviteModel.array(),
  members: MembershipModel.array(),
  forms: FormModel.array(),
}))
