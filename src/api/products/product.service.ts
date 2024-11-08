import { Product } from './product.model'

const GET_PRODUCTS_URL = '/data/products.json'

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(GET_PRODUCTS_URL)
    if (!response.ok) {
      throw new Error('Failed to fetch product data')
    }

    const data: Product[] = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}
