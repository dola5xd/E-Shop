"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  MenuItem,
  Slider,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SelectFilter from "./SelectFilter";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlStyle = searchParams.get("style") || "";
  const urlPrice = searchParams
    .get("price")
    ?.split("|")
    .map((value) => Number(value)) || [0, 150];

  const [priceValue, setPriceValue] = useState(urlPrice);
  const [selectValues, setSelectValues] = useState("");
  const [style, setStyle] = useState(urlStyle);

  function handleChange(e, newValue) {
    setPriceValue(newValue);
  }

  function handleStyle(e) {
    const target =
      e.target.tagName === "svg" ? e.target.parentElement : e.target;
    setStyle(target.getAttribute("aria-label"));
  }

  function applyFilters() {
    const values = [
      ...selectValues,
      {
        name: "price",
        value: {
          from: priceValue.at(0),
          to: priceValue.at(1),
        },
      },
      {
        name: "style",
        value: style,
      },
    ];

    const url = new URLSearchParams(searchParams.toString());
    values.map((value) => {
      if (value.value === "") return;
      url.set(
        value.name,
        value.name === "price"
          ? `${value.value.from}|${value.value.to}`
          : value.value
      );
      router.replace(`${pathname}?${url}`, { scroll: false });
    });
  }

  return (
    <div className="px-5 pt-10 w-1/3 h-full">
      <ul className="flex flex-col gap-10 border rounded-2xl py-10 px-10 border-slate-500 w-full ">
        <li className="border-b border-primary-Black pb-7">
          <h1 className="font-bold text-4xl text-start">Filters</h1>
        </li>

        <li>
          <SelectFilter
            defaultValue={"popular"}
            name={"Sort"}
            setSelectValues={setSelectValues}
          >
            <MenuItem value={"popular"}>Most Popular</MenuItem>
            <MenuItem value={"rating"}>Best Rating</MenuItem>
            <MenuItem value={"newest"}>Newest</MenuItem>
          </SelectFilter>
        </li>

        <li>
          <SelectFilter
            defaultValue={"all"}
            name={"Type"}
            setSelectValues={setSelectValues}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"Men"}>Men</MenuItem>
            <MenuItem value={"Women"}>Women</MenuItem>
          </SelectFilter>
        </li>

        <li className="flex flex-col gap-3">
          <h1 className="text-black font-bold text-3xl">Price</h1>
          <Box sx={{ width: 350 }}>
            <Slider
              getAriaLabel={() => "Price range"}
              value={priceValue}
              onChange={handleChange}
              valueLabelDisplay="off"
              color="black"
              max={150}
            />
          </Box>{" "}
          <p className="text-primary-Black/60 font-bold text-2xl">
            from{" "}
            <span className="text-primary-Black">{priceValue.at(0)} $</span> to{" "}
            <span className="text-primary-Black">{priceValue.at(1)} $</span>
          </p>
        </li>

        <li>
          <Accordion className="py-5 border-0 shadow-none">
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <p className="text-primary-Black font-bold text-2xl">
                Dress Style
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="flex flex-col gap-4 justify-start  *:text-2xl *:font-bold  *:flex  *:items-center  *:justify-between *:duration-500 *:cursor-pointer hover:*:text-black">
                <li
                  aria-label="all"
                  onClick={handleStyle}
                  className={`${
                    style === "all"
                      ? "text-primary-goldenYellow"
                      : "text-black/60"
                  }`}
                >
                  All
                  <NavigateNextIcon />
                </li>
                <li
                  aria-label="casual"
                  onClick={handleStyle}
                  className={`${
                    style === "casual"
                      ? "text-primary-goldenYellow"
                      : "text-black/60"
                  }`}
                >
                  Casual
                  <NavigateNextIcon />
                </li>
                <li
                  aria-label="formal"
                  onClick={handleStyle}
                  className={`${
                    style === "formal"
                      ? "text-primary-goldenYellow"
                      : "text-black/60"
                  }`}
                >
                  Formal
                  <NavigateNextIcon />
                </li>
                <li
                  aria-label="party"
                  onClick={handleStyle}
                  className={`${
                    style === "party"
                      ? "text-primary-goldenYellow"
                      : "text-black/60"
                  }`}
                >
                  Party
                  <NavigateNextIcon />
                </li>
                <li
                  aria-label="gym"
                  onClick={handleStyle}
                  className={`${
                    style === "gym"
                      ? "text-primary-goldenYellow"
                      : "text-black/60"
                  }`}
                >
                  Gym
                  <NavigateNextIcon />
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </li>

        <li>
          <button
            onClick={applyFilters}
            className="bg-black text-white px-7 py-4 text-2xl w-full font-medium rounded-2xl text-center duration-500 hover:bg-black/70"
          >
            Apply filters
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
