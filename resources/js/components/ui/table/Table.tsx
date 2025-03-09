import { TableProps } from "@/types/components/ui/tableTypes";
import React from "react";
import { TriangleUpIcon, TriangleDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import SortButton from "../table/sub-components/SortButton";
import { useEffect } from "react";

const Table: React.FC<TableProps> = ({ head, data, generateRows }) => {
    const [sortOrder, setSortOrder] = useState("default");
    const [sortCategory, setSortCategory] = useState<string>("default");
    const [finalData, setFinalData] = useState(() =>
        data.map((data) => generateRows(data))
    );

    const toggleSortOrder = (
        currentSortOrder: string,
        currentCategory: string
    ) => {
        currentSortOrder === "asc" || currentSortOrder === "default"
            ? setSortOrder("desc")
            : setSortOrder("asc");

        setSortCategory(currentCategory.toLowerCase());
    };

    const sorter = (currentOrder: string, currentCategory: string) => {
        if (currentOrder !== "default" && currentCategory !== "default") {
            switch (currentOrder) {
                case "asc":
                    switch (currentCategory) {
                        case "name":
                            setFinalData((prevData) => {
                                return [...prevData].sort((a, b) =>
                                    b[0].localeCompare(a[0])
                                );
                            });
                            break;
                        case "age":
                            setFinalData((prevData) => {
                                return [...prevData].sort(
                                    (a, b) => a[1] - b[1]
                                );
                            });
                            break;
                        case "address":
                            setFinalData((prevData) => {
                                return [...prevData].sort((a, b) =>
                                    b[2].localeCompare(a[2])
                                );
                            });
                            break;
                    }
                    break;
                case "desc":
                    console.log(currentCategory, currentOrder);
                    switch (currentCategory) {
                        case "name":
                            setFinalData((prevData) => {
                                return [...prevData].sort((a, b) =>
                                    a[0].localeCompare(b[0])
                                );
                            });
                            break;
                        case "age":
                            setFinalData((prevData) => {
                                return [...prevData].sort(
                                    (a, b) => b[1] - a[1]
                                );
                            });
                            break;
                        case "address":
                            setFinalData((prevData) => {
                                return [...prevData].sort((a, b) =>
                                    a[2].localeCompare(b[2])
                                );
                            });
                            break;
                    }
                    break;
            }
        }
    };

    useEffect(() => {
        sorter(sortOrder, sortCategory);
    }, [sortCategory, sortOrder]);

    const generateHeader = (head: TableProps["head"]) => {
        return head.map((h, index: number) => {
            return (
                <th className="p-2 border-1" key={index}>
                    <div className="flex justify-center">
                        {h.title}
                        {h.isSortable &&
                            (sortOrder === "default" || sortOrder === "asc" ? (
                                <SortButton
                                    toggleSortOrder={toggleSortOrder}
                                    currentSortOrder={sortOrder}
                                    currentCategory={h.title}
                                >
                                    <TriangleUpIcon className="mt-[2px] ml-2 w-4 h-4" />
                                </SortButton>
                            ) : (
                                <SortButton
                                    toggleSortOrder={toggleSortOrder}
                                    currentSortOrder={sortOrder}
                                    currentCategory={h.title}
                                >
                                    <TriangleDownIcon className="ml-2 w-4 h-4" />
                                </SortButton>
                            ))}
                    </div>
                </th>
            );
        });
    };

    return (
        <table className="w-[70%] max-w-4xl mx-auto border-1 bg-gray-50 rounded-lg text-center">
            <thead className="text-[14.5px]">
                <tr>{generateHeader(head)}</tr>
            </thead>
            <tbody className="text-sm font-normal">
                {console.log(finalData)}
                {finalData.map((rowData, index) => {
                    return (
                        <tr key={index}>
                            {rowData.map((finalData, index) => {
                                return (
                                    <td
                                        className=" p-1 border-1 hover:bg-zinc-200"
                                        key={index}
                                    >
                                        {finalData}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
export default Table;
