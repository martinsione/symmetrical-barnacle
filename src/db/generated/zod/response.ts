import * as z from "zod"
import * as imports from "../../null"
import { CompleteForm, FormModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _ResponseModel = z.object({
  id: z.number().int(),
  data: jsonSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  submittedAt: z.date().nullish(),
  formId: z.number().int(),
})

export interface CompleteResponse extends z.infer<typeof _ResponseModel> {
  form: CompleteForm
}

/**
 * ResponseModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ResponseModel: z.ZodSchema<CompleteResponse> = z.lazy(() => _ResponseModel.extend({
  form: FormModel,
}))
