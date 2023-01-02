import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";


function FormReactYup() {
  const categoryValidationSchema = Yup.object({
    productName: Yup.string().required("Name alanı boş geçilemez"),
    unitPrice: Yup.number().required("Price alanı boş geçilemez!"),
    unitsInStock: Yup.number().required("Stock alanı boş geçilemez!"),
  });

  return (
    <>
      <Formik
        initialValues={{ productName: "", unitPrice: "", unitsInStock: "" }}
        validationSchema={categoryValidationSchema}
        onSubmit={(values, { resetForm }) => {
          fetch("https://northwind.vercel.app/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
          resetForm({ values: "" });
        }}
      >
        <div className="form">
          <h1>React Formik</h1>
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <div>
                <Field name="productName" type="text" />
                <ErrorMessage component="div" name="productName" />
              </div>
            </div>

            <div>
              <label htmlFor="unitPrice">Unit Price</label>
              <div>
                <Field name="unitPrice" type="number" />
                <ErrorMessage component="div" name="unitPrice" />
              </div>
            </div>

            <div>
              <label htmlFor="unitsInStock">Units In Stock</label>
              <div>
                <Field name="unitsInStock" type="number" />
                <ErrorMessage component="div" name="unitsInStock" />
              </div>
            </div>

            <button type="submit">Submit</button>
          </Form>
        </div>
      </Formik>
    </>
  );
}

export default FormReactYup;
