import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const menuCollection = defineCollection({
	loader: file("src/data/menu.json"),
	schema: z.object({
		nombre: z.string(),
		precio: z.number(),
		descripcion: z.string(),
		categoria: z.string(),
		etiqueta: z.string().optional(),
		imagen: z.string().optional(),
	}),
});

export const collections = {
	menu: menuCollection,
};