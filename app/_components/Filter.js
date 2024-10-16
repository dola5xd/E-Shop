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
import { FilterAltRounded } from "@mui/icons-material";
import { motion } from "framer-motion";

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
  const [openMenu, setMenu] = useState(false);

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
    <div className="px-5 pt-10 md:w-1/3 h-full">
      <ul className="md:flex flex-col gap-10 border rounded-2xl py-10 px-10 border-slate-500 w-full hidden">
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
      <span
        onClick={() => setMenu((pre) => !pre)}
        className="flex items-center flex-col-reverse gap-1 font-bold text-xl"
      >
        <h3>Filters</h3>
        <FilterAltRounded />
      </span>
      {openMenu && (
        <motion.ul
          className="flex flex-col gap-10 py-10 px-10 w-full md:hidden bg-primary-darkWhite absolute z-40 top-0 left-0"
          variants={{
            open: { opacity: 1, display: "flex" },
            init: { opacity: 0, display: "hidden" },
          }}
          initial="init"
          animate={openMenu && "open"}
          transition={{
            duration: 0.7,
            staggerChildren: 1,
            delayChildren: 0.7,
          }}
        >
          <span onClick={() => setMenu(false)}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2882 11.9617C13.4644 12.1378 13.5633 12.3767 13.5633 12.6258C13.5633 12.8749 13.4644 13.1137 13.2882 13.2898C13.1121 13.466 12.8733 13.5649 12.6242 13.5649C12.3751 13.5649 12.1362 13.466 11.9601 13.2898L6.99997 8.32812L2.03825 13.2883C1.86213 13.4644 1.62326 13.5633 1.37418 13.5633C1.12511 13.5633 0.886243 13.4644 0.710122 13.2883C0.534002 13.1122 0.435059 12.8733 0.435059 12.6242C0.435059 12.3751 0.534002 12.1363 0.710122 11.9602L5.67184 7L0.711685 2.03828C0.535564 1.86216 0.436621 1.62329 0.436621 1.37422C0.436621 1.12515 0.535564 0.886277 0.711685 0.710157C0.887805 0.534036 1.12668 0.435093 1.37575 0.435093C1.62482 0.435093 1.86369 0.534036 2.03981 0.710157L6.99997 5.67188L11.9617 0.709375C12.1378 0.533255 12.3767 0.434312 12.6257 0.434312C12.8748 0.434312 13.1137 0.533255 13.2898 0.709375C13.4659 0.885496 13.5649 1.12437 13.5649 1.37344C13.5649 1.62251 13.4659 1.86138 13.2898 2.0375L8.32809 7L13.2882 11.9617Z"
                fill="black"
              />
            </svg>
          </span>
          <motion.li className="border-b border-primary-Black pb-7">
            <h1 className="font-bold text-4xl text-start">Filters</h1>
          </motion.li>

          <motion.li>
            <SelectFilter
              defaultValue={"popular"}
              name={"Sort"}
              setSelectValues={setSelectValues}
            >
              <MenuItem value={"popular"}>Most Popular</MenuItem>
              <MenuItem value={"rating"}>Best Rating</MenuItem>
              <MenuItem value={"newest"}>Newest</MenuItem>
            </SelectFilter>
          </motion.li>

          <motion.li>
            <SelectFilter
              defaultValue={"all"}
              name={"Type"}
              setSelectValues={setSelectValues}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"Men"}>Men</MenuItem>
              <MenuItem value={"Women"}>Women</MenuItem>
            </SelectFilter>
          </motion.li>

          <motion.li className="flex flex-col gap-3">
            <h1 className="text-black font-bold text-3xl">Price</h1>
            <Box className="w-full">
              <Slider
                getAriaLabel={() => "Price range"}
                value={priceValue}
                onChange={handleChange}
                valueLabelDisplay="off"
                color="black"
                max={150}
              />
            </Box>{" "}
            <p className="text-primary-Black/60 font-bold text-xl">
              from{" "}
              <span className="text-primary-Black">{priceValue.at(0)} $</span>{" "}
              to{" "}
              <span className="text-primary-Black">{priceValue.at(1)} $</span>
            </p>
          </motion.li>

          <motion.li>
            <Accordion className="py-1 border-0 shadow-none">
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <p className="text-primary-Black font-bold text-xl">
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
          </motion.li>

          <motion.li>
            <button
              onClick={applyFilters}
              className="bg-black text-white px-4 py-2 text-xl w-full font-medium rounded-xl text-center duration-500 hover:bg-black/70"
            >
              Apply filters
            </button>
          </motion.li>
        </motion.ul>
      )}
    </div>
  );
}

export default Filter;
