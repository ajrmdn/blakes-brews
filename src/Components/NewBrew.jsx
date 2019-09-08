import React from 'react'


function NewBrew() {
  return (
    <div>
      <form>
        <label
          htmlFor='name'>
          Name
        </label>

        <input
          type='text'
          name='name'
          id='name'
          placeholder='Name'
          required />
        <br />

        <label
          htmlFor='flavor'>
          Flavor
        </label>

        <input
          type='text'
          name='flavor'
          id='flavor'
          placeholder='Flavor'
          required />
        <br />

        <label
            htmlFor='brand'>
            Brand
        </label>

        <input
          type='text'
          name='brand'
          id='brand'
          placeholder='Brand'
          required />
        <br />

        <label
            htmlFor='price'>
            Price
        </label>

        <input
          type='text'
          name='price'
          id='price'
          placeholder='Price'
          required />
        <br />

        <button type='submit'>Add Keg</button>
      </form>
    </div>
  )
}

export default NewColdBrews;
