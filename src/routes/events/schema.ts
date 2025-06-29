import { z } from 'zod';

export const formSchema = z.object({
	id: z.number().optional(),
	name: z.string(),
	startDate: z.string().date(),
	startHour: z.number().min(0).max(23),
	startMin: z.number().min(0).max(59),
	endDate: z.string().date(),
	endHour: z.number().min(0).max(23),
	endMin: z.number().min(0).max(59),
	location: z.string(),
	description: z.string().optional()
});

export type FormSchema = typeof formSchema;
