import React, { useContext } from "react";
import {DataContex} from "../providers/DataProvider";

export const useData = () => useContext(DataContex)