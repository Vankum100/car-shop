import { z } from 'zod';
import { IVehicle } from './IVehicle';

export const zodCarSchema = z.object({
  doors: z.number().int().gte(2).lte(4),
  seats: z.number().int().gte(2).lte(7),
});

export type ICar = z.infer<typeof zodCarSchema> & IVehicle;
