import { Category } from '@models/category';

/**
 * Data model representing a product.
 *
 * Attributes:
 *     name (str): The name of the product. Must be 2-20 characters long and
 *                 match the pattern allowing alphanumeric characters, underscores, or dashes.
 *     description (str): A brief description of the product. Maximum 100 characters.
 */

export interface Product {
    id: string;
  
    /**
     * Description of the product
     */
    description: string;
  
    /**
     * Name of the product
     */
    name: string;
  
    /**
     * Price of the product
     */
    price: number;
    
    category: Category;
  }