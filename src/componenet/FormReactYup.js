import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

function FormReactYup() {

    const categoryValidationSchema = Yup.object({
        productName: Yup.string().required('Name alanı boş geçilemez'),
        unitPrice: Yup.string().required('Price alanı boş geçilemez!'),
        unitsInStock:Yup.string().required('Stock alanı boş geçilemez!')
    })

    const formik = useFormik({
           productName: {
           unitPrice : '',
           unitsInStock:''
        },
        validationSchema: categoryValidationSchema,
        onSubmit: values => {
            fetch('https://northwind.vercel.app/api/products',
             {method: "POST", 
            body: JSON.stringify({values}),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((res)=>res.json())
            .then(data=>{console.log(data);
                // console.log(values);
            })      
        }
    })

    return (<>
        <form
            onSubmit={formik.handleSubmit}
        >
            {
                formik.errors.name ? <span style={{color:'tomato'}}>{formik.errors.name}</span> : <></>
            }
            <div>
                <label>Product Name:</label>
                <input
                    type='text'
                    name='product'
                    onChange={formik.handleChange}
                    value={formik.values.product}
                />
            </div>
            <div>
                <label>Unit Price :</label>
                <input
                    type='text'
                    name='price'
                    onChange={formik.handleChange}
                    value={formik.values.price}
                />
            </div>
            <div>
                <label>Units in Stock :</label>
                <input
                    type='text'
                    name='stock'
                    onChange={formik.handleChange}
                    value={formik.values.stock}
                />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>

        </form>
    </>
    )
}

export default FormReactYup
