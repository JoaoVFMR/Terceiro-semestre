'use client'
import { IProductRequest } from '@/interfaces/product.interface'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createProduct } from '../api'

type ProductForm = {
    name: string
    price: number
}

export default function CreateProduct(){
    const [products, setProducts] = useState<IProductRequest[]>([])
    const {register, handleSubmit} = useForm<ProductForm>()
    function onSubmit(data: ProductForm){
        const newProduct: IProductRequest = {...data, price: Number(data.price)}
        const newListProducts = [...products, newProduct]
        setProducts(newListProducts)
        createProduct(newProduct)
    }
    // const onSubmit: SubmitHandler<ProductForm> = (data) => {}
    return (
        <div className="grid md:grid-cols-2 gap-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name', {required: true})}
                type="text" placeholder='Nome do produto' />
                <input {...register('price')} step={0.01}
                type="number" placeholder='Preço' />
                <button type="submit">Cadastrar</button>
            </form>
            <div>
                <b>Lista de produtos</b>
                {
                    products.map((product, key) => (
                        <p key={key}>{product.name} - {product.price}</p>
                    ))
                }
            </div>
        </div>
    )
}