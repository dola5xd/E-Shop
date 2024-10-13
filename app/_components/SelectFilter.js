"use client";
import { FormControl, InputLabel, Select } from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

function SelectFilter({ children, defaultValue, name, setSelectValues }) {
  const searchParams = useSearchParams();

  const sort = searchParams.get("Sort") || "";
  const category = searchParams.get("Category") || "";
  const type = searchParams.get("Type") || "";

  const [value, setValue] = useState(
    (name === "Sort" && sort) ||
      (name === "Category" && category) ||
      (name === "Type" && type) ||
      defaultValue
  );

  function handleChange(e) {
    setSelectValues((prev) => [...prev, { name, value: e.target.value }]);
    setValue(e.target.value);
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{name}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={(e) => handleChange(e)}
        label={name}
        className="border-none outline-none active:outline-none"
      >
        {children}
      </Select>
    </FormControl>
  );
}

export default SelectFilter;
