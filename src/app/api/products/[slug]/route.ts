import { z } from 'zod'
import data from '../data.json'

export async function GET(
  _: Request, // Quando não uso o parametro, coloco underline é um pattern
  { params }: { params: { slug: string } },
) {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Pra dar um timeout e assim ser possível ver o skeleton e pré-carregamentos adicionados

  const slug = z.string().parse(params.slug)

  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }

  return Response.json(product)
}
