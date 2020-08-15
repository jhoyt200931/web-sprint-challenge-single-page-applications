import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const Ordering = () => {
    const [orderForm, setOrderForm] = useState({
        name: "",
        instructions: "",
        size: "",
        pepperoni: false,
        sausage: false,
        mushroom: false,
        olives: false,
        peppers: false
    })

    const [order, setOrder] = useState({});

    const handleChange = (e) => {
        e.persist();
        const newOrder = {
            ...orderForm,
            [e.target.name]: e.target.value,
        }
        validateChange(e);
        setOrderForm(newOrder);
    }

    const [errors, setErrors] = useState({
        name: "",
        instructions: "",
        size: "",
        pepperoni: "",
        sausage: "",
        mushroom: "",
        olives: "",
        peppers: ""
    })
    const submit = (e) => {
        e.preventDefault();
        axios.post("https://reqres.in/api/users", orderForm)
        .then((response) => {
            console.log(response);
            setOrder(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
        setOrderForm({
            name: "",
            instructions: "",
            size: "",
            pepperoni: false,
            sausage: false,
            mushroom: false,
            olives: false,
            peppers: false
        })
    }
    useEffect(() => {
        console.log(order);

    }, [order]);
    
    const orderSchema = yup.object().shape({
        name: yup.string().required("Please Enter your name"),
        instructions: yup.string(),
        size: yup.string().oneOf(["Small", "Medium", "Large"]),
        pepperoni: yup.boolean().oneOf([true, false]),
        sausage: yup.boolean().oneOf([true, false]),
        mushroom: yup.boolean().oneOf([true, false]),
        olives: yup.boolean().oneOf([true, false]),
        peppers: yup.boolean().oneOf([true, false])
    })

    const validateChange = (e) => {
        yup
        .reach(orderSchema, e.target.name)
        .validate(e.target.value)
        .then((valid) => {
            setErrors({
            ...errors,
            [e.target.errors]: ""
            })
        })
        .catch((err) => {
            console.log(err);
            setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
            })
        })
    }
    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="name">
                    Name: 
                <input type="text" id="name" name="name" data-cy="name" value={orderForm.name} onChange={handleChange}/>
                {errors.name.length > 0 ? <p className="errors">{errors.name}</p> : null}
                </label>
                <label htmlFor="instructions">
                    Special Instructions: 
                <input type="textarea" id="instructions" name="instructions" data-cy="instructions" value={orderForm.instructions} onChange={handleChange}/>
                </label>
                <label htmlFor="size">
                <select id="size" name="size" value={orderForm.size} onChange={handleChange}>
                    <option>--Please Select A Size--</option>
                    <option name="small">Small</option>
                    <option name="medium">Medium</option>
                    <option name="large">Large</option>
                </select>
                </label>
                <label htmlFor="pepperoni">
                    Pepperoni
                <input type="checkbox" id="pepperoni" name="pepperoni" checked={orderForm.pepperoni} onChange={handleChange}/>
                </label>
                <label htmlFor="sausage">
                    Sausage
                <input type="checkbox" id="sausage" name="sausage" checked={orderForm.sausage} onChange={handleChange}/>
                </label>
                <label htmlFor="mushroom">
                    Mushroom
                <input type="checkbox" id="mushroom" name="mushroom" checked={orderForm.mushroom} onChange={handleChange}/>
                </label>
                <label htmlFor="olives">
                    Olives
                <input type="checkbox" id="olives" name="olives" checked={orderForm.olives} onChange={handleChange}/>
                </label>
                <label htmlFor="peppers">
                    Peppers
                <input type="checkbox" id="peppers" name="peppers" checked={orderForm.peppers} onChange={handleChange}/>
                </label>
                <button type="submit">Add to Order</button>
            </form>
        </div>
    )
};

export default Ordering;