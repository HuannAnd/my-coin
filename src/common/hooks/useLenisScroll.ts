import { useContext } from "react";

import { LenisContext } from "@/common/contexts/LenisScrollProvider";

export default function useLenisScroll() {
  return useContext(LenisContext)
}