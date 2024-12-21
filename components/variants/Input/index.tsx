'use client'

import styled from "styled-components"

// width: ${(props) => (props.fullWidth ? "100%" : "50%")};

const InputVariants = styled.input`
    border: 1px solid #ccc;
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 10px;
`

const TextAreaVariants = styled.textarea`
    width: 100%;
    border: 1px solid #ccc;
    outline: none;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 10px;
`

const ButtonVariants = styled.button`
    background-color: green;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
`

export default function Input({ title, placeholder, isFullWidth = false }: any) {
    return (
        <>
            <InputVariants placeholder={placeholder}/>
            <InputVariants placeholder={placeholder} />
            <TextAreaVariants rows={15} />
            <ButtonVariants>{title}</ButtonVariants>
        </>
    )
}
