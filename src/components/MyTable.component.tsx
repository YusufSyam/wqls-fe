"use client";

import { getQuizSubjectById } from "@/utils/constants/quizSubject.const";
import {
  formatDateNormal,
  getQuizDuration,
} from "@/utils/functions/date.function";
import React from "react";

export interface IMyTableColumn {
  key: string;
  label: string;
  type?: "text" | "number" | "duration" | "date" | "subject";
}

export interface IMyTable {
  columns: IMyTableColumn[];
  data: Record<string, any>[];
}

const MyTable: React.FC<IMyTable> = ({ columns, data }) => {
  const renderCell = (value: any, type: IMyTableColumn["type"]) => {
    if (type === "duration") {
      return getQuizDuration(value);
    } else if (type === "subject") {
      return getQuizSubjectById(value as number);
    } else if (type === "date") {
      return formatDateNormal(new Date(value));
    } else {
      return value;
    }
  };

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
              {columns.map((col: any) => (
                <td key={col.key} className="px-4 py-2">
                  {col.key == "index"
                    ? idx + 1
                    : renderCell(row[col.key], col.type)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
