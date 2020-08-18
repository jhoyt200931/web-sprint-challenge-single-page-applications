import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";


const Form = styled.form` 
display: flex;
flex-direction: column;
height: 500px;
margin-left: 40%;

`;
const Button = styled.button`
width: 30%;
height: 25px;
border-radius: 45%;
`;

const Label = styled.label`
margin-top: 10px;
margin-bottom: 10px;
`;

const Input = styled.input`
margin-left: 2%;
`;
const Select = styled.select`
margin-left: 2%;
`;

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
        name: yup.string().min(2, "Name must be longer and 2 characters").required("Please Enter your name"),
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
            <Form onSubmit={submit}>
                <Label htmlFor="name">
                    Name: 
                <Input type="text" id="name" name="name" data-cy="name" value={orderForm.name} onChange={handleChange}/>
                {errors.name.length > 0 ? <p className="errors">{errors.name}</p> : null}
                </Label>
                <Label htmlFor="instructions">
                    Special Instructions: 
                <Input type="textarea" id="instructions" name="instructions" data-cy="instructions" value={orderForm.instructions} onChange={handleChange}/>
                </Label>
                <Label htmlFor="size">
                <Select data-cy="size" id="size" name="size" value={orderForm.size} onChange={handleChange}>
                    <option>--Please Select A Size--</option>
                    <option name="small">Small</option>
                    <option name="medium">Medium</option>
                    <option name="large">Large</option>
                </Select>
                </Label>
                <Label htmlFor="pepperoni">
                    Pepperoni
                <Input data-cy="pepperoni" type="checkbox" id="pepperoni" name="pepperoni" checked={orderForm.pepperoni} onChange={handleChange}/>
                </Label>
                <Label htmlFor="sausage">
                    Sausage
                <Input data-cy="sausage" type="checkbox" id="sausage" name="sausage" checked={orderForm.sausage} onChange={handleChange}/>
                </Label>
                <Label htmlFor="mushroom">
                    Mushroom
                <Input data-cy="mushroom" type="checkbox" id="mushroom" name="mushroom" checked={orderForm.mushroom} onChange={handleChange}/>
                </Label>
                <Label htmlFor="olives">
                    Olives
                <Input data-cy="olives" type="checkbox" id="olives" name="olives" checked={orderForm.olives} onChange={handleChange}/>
                </Label>
                <Label htmlFor="peppers">
                    Peppers
                <Input data-cy="peppers" type="checkbox" id="peppers" name="peppers" checked={orderForm.peppers} onChange={handleChange}/>
                </Label>
                <Button data-cy="submit" type="submit">Add to Order</Button>
            </Form>
        </div>
    )
};

export default Ordering;