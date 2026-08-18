import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from '../models/User.js'
import Product from '../models/Product.js'
import Category from '../models/Category.js'
import Inventory from '../models/Inventory.js'
import bcrypt from 'bcryptjs'
import { USER_ROLES, LOYALTY_TIERS } from '../config/constants.js'

dotenv.config()

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')

    // Clear existing data
    await User.deleteMany({})
    await Product.deleteMany({})
    await Category.deleteMany({})
    await Inventory.deleteMany({})

    // Create categories
    const categories = await Category.create([
      { name: 'Paneer', slug: 'paneer', description: 'Fresh and delicious paneer for your culinary needs', image: '' },
      { name: 'Palkova', slug: 'palkova', description: 'Elegant palkova for every occasion', image: '' },
      { name: 'Butter milk', slug: 'butter-milk', description: 'Creamy and refreshing butter milk', image: '' },
      { name: 'Ghee', slug: 'ghee', description: 'Traditional and modern ghee', image: '' },
      { name: 'Butter', slug: 'butter', description: 'Rich and creamy butter', image: '' },
    ])
    console.log('Categories seeded')

    // Create admin user
    await User.create({
      name: 'Admin User',
      email: 'admin@oncemore.com',
      password: 'once123',
      role: USER_ROLES.ADMIN,
      tier: LOYALTY_TIERS.PLATINUM,
    })
    console.log('Admin user seeded')

    // Create test user
    await User.create({
      name: 'Eleanor Vance',
      email: 'eleanor@example.com',
      password: 'user123',
      phone: '+91 8124008966',
      role: USER_ROLES.USER,
      tier: LOYALTY_TIERS.GOLD,
      loyaltyPoints: 12550,
    })
    console.log('Test user seeded')

    // Create products
    const products = await Product.create([
      {
        name: 'Butter',
        slug: 'butter',
        category: categories[0]._id,
        price: 1250,
        originalPrice: 1470,
        discount: 15,
        description: 'Fresh and delicious paneer for your culinary needs',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAu85qsH-b1ZTpHVBtDHU-0DERkY6TaLw4zAa8t-45s4LNsOD9BwZTtBe2T9za6PJO8zRA8NHkj5G3c4kJWHlfKwy_gB5k3Ohr-10cSkpFw7tvWhvYwZe57VH0BE2nKJyrK7z8rKO0MrtDHGUWQL1QkOf0WgKg3fK6IO24zXUpP5RQHFVZ5qIrdYI_7AbWJ5noldHjld8ZlAh9szv7a34ghtZrk1YN9C3gRWr8NBuJsIBnKIEPsPY8'],
        badge: 'Best Seller',
        rating: 4.5,
        reviews: 124,
        sku: 'JR03456-1Y',
        sizes: [10, 11, 12, 13, 14],
      },
      {
        name: 'Paneer',
        slug: 'paneer',
        category: categories[0]._id,
        price: 1250,
        originalPrice: 1470,
        discount: 15,
        description: 'Rich and creamy paneer',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAu85qsH-b1ZTpHVBtDHU-0DERkY6TaLw4zAa8t-45s4LNsOD9BwZTtBe2T9za6PJO8zRA8NHkj5G3c4kJWHlfKwy_gB5k3Ohr-10cSkpFw7tvWhvYwZe57VH0BE2nKJyrK7z8rKO0MrtDHGUWQL1QkOf0WgKg3fK6IO24zXUpP5RQHFVZ5qIrdYI_7AbWJ5noldHjld8ZlAh9szv7a34ghtZrk1YN9C3gRWr8NBuJsIBnKIEPsPY8'],
        badge: 'Best Seller',
        rating: 4.5,
        reviews: 124,
        sku: 'JR03456-1Y',
        sizes: [10, 11, 12, 13, 14],
      },
      {
        name: 'Ghee',
        slug: 'ghee', 
        category: categories[1]._id,
        price: 890,
        originalPrice: null,
        discount: null,
        description: 'Traditional and modern ghee',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCMaV2NcyoofFZwJZdmgmQBCzDxxrJqZI7yMBzELqoOyTmSUr4Rbet7198SrtrRbFFdKiNOWhSJ6_xo-Kcl_sluF8MvowYs0H4SrjIU0oaclEbneLEaOzZj20kMdwCxvZK6RmE6m9pEC__U7TbsYdbSHyZy9W90Q58ifbRBZXd_HiX8-XcEPj8sPUQqlkRXzB2nBSwalBQOS9xRzxb1xo-3B9FfKqD2X-Gc_587cs7jA4JZY6y5MXk'],
        badge: '-15%',
        rating: 4.8,
        reviews: 89,
        sku: 'JN78901-1Y',
        sizes: [],
      },
      {
        name: 'Butter milk',
        slug: 'butter-milk',
        category: categories[2]._id,
        price: 650,
        originalPrice: null,
        discount: null,
        description: 'Creamy and refreshing butter milk',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBfsdZWhOiGJMK6I1mBfQDI7edV7H5ZAEumI5WV4TZvFKxhtKEKuEGzQo_adu8QuWGFx3Bs9K18qSSmIPokqQBCPCDHEHFTuhwyXwU5uoTXIk-5IMrLcH55cbUXEl9qAN5Oxoqg7KfZudJQavxfcaw_IhGTLVqu7LI3AXY3LOsLuUMF5unsNmv3mFRdScJ3Kg5jnO0Gk51HZzJWxGRMRee625NQFET1lD8QsYKm1-JQmw5AYzcoKL8'],
        badge: 'NEW',
        rating: 4.3,
        reviews: 12,
        sku: 'JE12345-1P',
        sizes: [6, 7, 8, 9],
      },
      {
        name: 'Palkova',
        slug: 'heritage-filigree-bangle',
        category: categories[3]._id,
        price: 2450,
        originalPrice: null,
        discount: null,
        description: 'A luxurious 22k gold bangle with intricate filigree details.',
        images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBXRcm8hiTHKBY7FOEBJFJ22Z4tIhzIwEEz5qtGMJrOTx0jHWuZmmgamtNGo9mLCSAtuFIMCsbJ8oUg37JSWTJegYn_UvQ1YnKacO7ekML1R48jb8E18_p-z-PGE0PNqIo0CAeKj5h-iMLFi5njAAEt1aqvwpQwwgJ6lDYrUm8XYUgAvqwqYssEymsW-DvP40_5-mqTSU_sAcC2fNqoFRnpfQuFk6T5FAo-p-bKM0B26x3QiUmQCZw'],
        badge: null,
        rating: 4.9,
        reviews: 34,
        sku: 'JB45678-22Y',
        sizes: [1, 2, 3],
      },
    ])
    console.log('Products seeded')

    // Create inventory for products
    await Inventory.create([
      { product: products[0]._id, stockQuantity: 50, lowStockThreshold: 10 },
      { product: products[1]._id, stockQuantity: 30, lowStockThreshold: 10 },
      { product: products[2]._id, stockQuantity: 25, lowStockThreshold: 10 },
      { product: products[3]._id, stockQuantity: 15, lowStockThreshold: 5 },
    ])
    console.log('Inventory seeded')

    console.log('Database seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedData()
