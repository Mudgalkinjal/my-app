'use client'

import { useState } from 'react'

interface Items {
  id: number
  name: string
  children?: Items[]
}

interface NestedCheckboxProps {
  items: Items[]
}

const NestedCheckbox = ({ items }: NestedCheckboxProps) => {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set())

  const handleCheckboxChange = (id: number, children?: Items[]) => {
    const newCheckedItems = new Set(checkedItems)
    if (newCheckedItems.has(id)) {
      newCheckedItems.delete(id)
      if (children) {
        // Uncheck all children if the parent is unchecked
        children.forEach((child) => {
          newCheckedItems.delete(child.id)
          // Recursively uncheck children's children if they exist
          if (child.children) {
            child.children.forEach((grandchild) =>
              newCheckedItems.delete(grandchild.id)
            )
          }
        })
      }
    } else {
      newCheckedItems.add(id)
      if (children) {
        // Check all children if the parent is checked
        children.forEach((child) => {
          newCheckedItems.add(child.id)
          // Recursively check children's children if they exist
          if (child.children) {
            child.children.forEach((grandchild) =>
              newCheckedItems.add(grandchild.id)
            )
          }
        })
      }
    }
    setCheckedItems(newCheckedItems)
  }

  const renderCheckboxes = (items: Items[]) => {
    return items.map((item) => (
      <div key={item.id}>
        <label>
          <input
            type="checkbox"
            checked={checkedItems.has(item.id)}
            onChange={() => handleCheckboxChange(item.id, item.children)}
          />
          {item.name}
        </label>
        {item.children && item.children.length > 0 && (
          <div style={{ marginLeft: '20px' }}>
            {renderCheckboxes(item.children)}
          </div>
        )}
      </div>
    ))
  }

  return <div>{renderCheckboxes(items)}</div>
}

export default NestedCheckbox
