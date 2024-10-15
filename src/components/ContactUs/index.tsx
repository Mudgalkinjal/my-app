'use client'

import { useState } from 'react'
import Styled from 'styled-components'

interface IProp {
  fname: string
  lname: string
  phone: string
  choice: string
}

const Styledform = Styled.form`
  padding: 20px;
  background-color: #f9f9f9;

    input {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
  }

  button[type='submit'] {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }

  #label-div{
  margin-top:1rem
  }

  #label-container{
  display: flex;
  }

  #label-container label{
  margin: 1rem}

  label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }
`

const ContactUs = () => {
  const [data, setData] = useState<IProp>({
    fname: '',
    lname: '',
    phone: '',
    choice: '',
  })
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, type, value } = e.target
    if (type === 'radio') {
      setData((data) => ({ ...data, choice: id }))
    } else {
      setData((data) => ({ ...data, [id]: value }))
    }
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log('Name: ' + data.fname)
    console.log('Last Name: ' + data.lname)
    console.log('Phone Number ' + data.phone)
    console.log('Choice: ' + data.choice)
  }
  return (
    <div>
      <h1>Contact us form</h1>
      <Styledform onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">Enter your first name?</label>
          <input
            onChange={handleChange}
            id="fname"
            type="text"
            value={data.fname ? data.fname : ''}
          />
        </div>
        <div>
          <label htmlFor="lname">Enter your last name?</label>
          <input
            onChange={handleChange}
            id="lname"
            type="text"
            value={data.lname}
          />
        </div>

        <div>
          <label htmlFor="phone">Enter your phone?</label>
          <input onChange={handleChange} id="phone" type="tel" name="phone" />
        </div>

        <div id="label-container">
          <label>
            <input
              onChange={handleChange}
              id="male"
              type="radio"
              name="choice"
              placeholder="male"
            />
            Male
          </label>
          <label>
            <input
              onChange={handleChange}
              id="female"
              type="radio"
              name="choice"
            />
            Female
          </label>
          <label>
            <input
              onChange={handleChange}
              id="unknown"
              type="radio"
              name="choice"
            />
            Unknown
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>

        <div id="label-div">
          <label>First name: {data.fname}</label>
          <label>Last name: {data.lname}</label>
          <label>Phone: {data.phone}</label>
          <label>Choice: {data.choice}</label>
        </div>
      </Styledform>
    </div>
  )
}

export default ContactUs
