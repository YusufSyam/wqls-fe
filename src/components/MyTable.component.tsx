"use client";

import { getQuizSubjectById } from "@/utils/constants/quizSubject.const";
import {
  formatDateNormal,
  getQuizDuration,
} from "@/utils/functions/date.function";
import { Text } from "@mantine/core";
import React from "react";
import Loading from "./Loading.component";

export interface IMyTableColumn {
  key: string;
  label: string;
  type?: "text" | "number" | "duration" | "date" | "subject";
}

export interface IMyTable {
  columns: IMyTableColumn[];
  data: Record<string, any>[];
  isLoading?: boolean;
}

const MyTable: React.FC<IMyTable> = ({ columns, data, isLoading = true }) => {
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
    <div className="overflow-x-auto border rounded-3xl">
      <table className="min-w-full table-auto text-sm">
        <thead className="bg-dark-blue border-b">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-4 text-left font-quicksand text-white text-md"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {isLoading ? (
            <div className="relative h-56">
              <div className="absolute w-full left-96 top-8">
                <Loading />
              </div>
            </div>
          ) : (
            <>
              {data.map((row, idx) => (
                <tr key={idx} className={`border-b hover:bg-light-gray/30`}>
                  {columns.map((col: any) => (
                    <td key={col.key} className="px-6 py-2">
                      {col.key == "index" ? (
                        <Text className="text-primary-text text-md text-center bg-error">
                          {idx + 1}
                        </Text>
                      ) : (
                        <Text className="text-primary-text text-md">
                          {renderCell(row[col.key], col.type)}
                        </Text>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
