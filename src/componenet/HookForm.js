import React from 'react'
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';



function HookForm() {
    const categoryValidationSchema = Yup.object({
    productName: Yup.string().required("Name hissesini doldurun !"),
    unitPrice: Yup.number().required("Price alanı boş geçilemez!"),
    unitsInStock: Yup.number().required("Stock alanı boş geçilemez!"),
  });
    const formOptions = { resolver: yupResolver(categoryValidationSchema) };

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm(formOptions);
	const onSubmit = (values) => {
		fetch("https://northwind.vercel.app/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
		reset();
	};

  
  return (
    <>
			<h1>React Hook Form</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="productName">Product Name</label>
					<div>
						<input type="text" defaultValue="" {...register('productName')} />
						<div>{errors.productName?.message}</div>
					</div>
				</div>

				<div>
					<label htmlFor="unitPrice">Unit Price</label>
					<div>
						<input type="number" defaultValue="" {...register('unitPrice')} />
						<div>{errors.unitPrice?.message && `UnitPrice yoxdur , reqem yazin `}</div>
					</div>
				</div>

				<div>
					<label htmlFor="unitsInStock">Units In Stock</label>
					<div>
						<input type="number" defaultValue="" {...register('unitsInStock')} />
						<div>{errors.unitsInStock?.message && `unitStock yoxdur zehnmet olmasa number yazin `}</div>
					</div>
				</div>

				<button type="submit"> Submit </button>
			</form>
    </>
)}
  

export default HookForm