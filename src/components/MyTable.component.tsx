'use client'

import React from 'react'

export interface IMyTableColumn {
  key: string
  label: string
  type?: 'text' | 'number' | 'duration'
}

export interface IMyTable {
  columns: IMyTableColumn[]
  data: Record<string, any>[]
}

const MyTable: React.FC<IMyTable> = ({columns, data}) => {
  const renderCell = (value: any, type: IMyTableColumn['type']) => {
    if (type === 'duration') {
      // Contoh render durasi dalam format menit:detik
      const minutes = Math.floor(value / 60)
      const seconds = value % 60
      return `${minutes}m ${seconds}s`
    }
    return value
  }

  return (
    <div className="overflow-x-auto border rounded">
      <table className="min-w-full table-auto text-sm">
        <thead className="bg-gray-100 border-b">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2 text-left font-semibold">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2">
                  {renderCell(row[col.key], col.type)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyTable