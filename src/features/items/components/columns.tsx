"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Item } from "../types";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "code",
    header: "Mã",
  },
  {
    accessorKey: "name",
    header: "Tên",
  },
  {
    accessorKey: "description",
    header: "Mô tả",
  },
  {
    accessorKey: "importPrice",
    header: "Giá nhập",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("importPrice"));
      const formatted = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "retailPrice",
    header: "Giá bán lẻ",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("retailPrice"));
      const formatted = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "wholesalePrice",
    header: "Giá bán lẻ",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("wholesalePrice") ?? 0);
      const formatted = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
