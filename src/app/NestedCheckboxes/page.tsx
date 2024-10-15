'use client'

import React from 'react'
import NestedCheckbox from '@/components/NestedCheckbox'

const NestedCheckboxes = () => {
  const items = [
    {
      id: 1,
      name: 'Fruits',
      children: [
        { id: 2, name: 'Apples' },
        {
          id: 3,
          name: 'Citrus',
          children: [
            { id: 4, name: 'Oranges' },
            { id: 5, name: 'Lemons' },
          ],
        },
      ],
    },
    {
      id: 6,
      name: 'Vegetables',
      children: [
        { id: 7, name: 'Carrots' },
        { id: 8, name: 'Broccoli' },
      ],
    },
  ]

  return (
    <div>
      <h1>Nested Checkbox Example</h1>
      <NestedCheckbox items={items} />
    </div>
  )
}

export default NestedCheckboxes
