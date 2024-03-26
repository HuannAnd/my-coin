import { useContext } from "react";

import { IsHoveredContext } from "./Root";

export default function useTriggerRef(){
  return useContext(IsHoveredContext)
}