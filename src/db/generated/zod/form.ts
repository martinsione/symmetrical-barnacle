import * as z from "zod"
import * as imports from "../../null"
import { FormStatus } from "@prisma/client"
import { CompleteResponse, ResponseModel, CompleteUser, UserModel, CompleteTeam, TeamModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _FormModel = z.object({
  id: z.number().int(),
  slug: z.string(),
  name: z.string(),
  questions: jsonSchema,
  numberOfResponses: z.number().int(),
  password: z.string().nullish(),
  status: z.nativeEnum(FormStatus),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string().nullish(),
  teamId: z.string().nullish(),
})

export interface CompleteForm extends z.infer<typeof _FormModel> {
  responses: CompleteResponse[]
  user?: CompleteUser | null
  team?: CompleteTeam | null
}

/**
 * FormModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const FormModel: z.ZodSchema<CompleteForm> = z.lazy(() => _FormModel.extend({
  responses: ResponseModel.array(),
  user: UserModel.nullish(),
  team: TeamModel.nullish(),
}))
