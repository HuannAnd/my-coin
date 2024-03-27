import { useContext } from "react";

import { LanguageContext } from "@/common/contexts/LanguageProvider/LanguageProvider";

export default function useLanguage() {
  return useContext(LanguageContext)
}