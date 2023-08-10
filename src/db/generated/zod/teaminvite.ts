import * as z from "zod"
import * as imports from "../../null"
import { CompleteTeam, TeamModel } from "./index"

export const _TeamInviteModel = z.object({
  id: z.string(),
  email: z.string(),
  expires: z.date(),
  acceptedAt: z.date().nullish(),
  createdAt: z.date(),
  teamId: z.string(),
})

export interface CompleteTeamInvite extends z.infer<typeof _TeamInviteModel> {
  team: CompleteTeam
}

/**
 * TeamInviteModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const TeamInviteModel: z.ZodSchema<CompleteTeamInvite> = z.lazy(() => _TeamInviteModel.extend({
  team: TeamModel,
}))
