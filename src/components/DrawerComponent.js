import React, { useState } from "react";
import { Box, Drawer } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DisplayFields from "./DisplayFields";
function DrawerComponent({ setOpen }) {
  const [fields, setFields] = useState([
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ]);

  // const [selectLabels, setSelectLabels] = ([
  // ['First Name', 'Last Name', 'Gender', 'Age', 'Account Name', 'City', 'State']
  // ])

  return (
    <Drawer anchor="right" open={true} onClose={() => setOpen(false)}>
      <Box
        sx={{ width: 550 }}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          className="container flex-col justify-between">
          <div className="bg-blue-500 text-white text-xl p-7">
            <ArrowBackIosIcon />
            Saving Segment
          </div>
          <div className="p-5 space-y-5">
            <div className="segment-input my-5">
              <label className="my-3 font-semibold text-xl">
                Enter the name of Segment
              </label>
              <input
                type="text"
                className="border border-black my-3 p-2 w-full"
                placeholder="Name of the segment"
              />
            </div>
            <div className="font-semibold text-xl">
              To save your segment, you need to add the schemas to build the
              query
            </div>
            <div className="flex gap-5 justify-end">
              <div className="flex gap-1 justify-center items-center my-3">
                <div className="h-3 w-3 bg-green-700 rounded-full"></div>
                <div className="">-User Traits</div>
              </div>
              <div className="flex gap-1 justify-center items-center my-3">
                <div className="h-3 w-3 bg-red-700 rounded-full"></div>
                <div className="">-Group Traits</div>
              </div>
            </div>
            {/* // Mapping selected fields */}
            <DisplayFields fields={fields} />
            <div className="text-green-500 font-semibold cursor-pointer">
              +
              <span
                className="border-b-2 border-green-500"
                style={{ paddingBottem: "1.3px" }}
              >
                Add new schema
              </span>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 h-30 p-8">
          <button className="bg-green-500 p-3 rounded-md text-white font-semibold">
            Save the Segment
          </button>
          <button className="bg-white p-3 mx-5 rounded-md text-red-600 font-semibold">
            Cancel
          </button>
        </div>
      </Box>
    </Drawer>
  );
}

export default DrawerComponent;
