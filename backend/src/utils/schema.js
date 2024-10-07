import { z } from 'zod';

export const exampleSchema = z.object({
    name: z.string().min(3)
})

export const signUpSchema = z.object({
    name: z.string().min(5),
    email: z.string().email(),
    password: z.string().min(5)
});

export const signInSchema = signUpSchema.omit({name: true})

export const mutateCourseSchema = z.object({
    name: z.string().min(5),
    categoryId: z.string(),
    tagline: z.string().min(5),
    description: z.string().min(10)
})