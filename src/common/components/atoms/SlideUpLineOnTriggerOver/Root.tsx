import {Children, cloneElement} from "react";
import { MutableRefObject, createContext, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export const IsHoveredContext = createContext<MutableRefObject<HTMLElement | undefined> | null>(null);

export default function Root({ children }: Props) {
  const ref = useRef<HTMLElement>(null);

  const childrenArray = Children.toArray(children);
  const firstChild = childrenArray[0] as React.ReactElement | undefined;

  const firstChildWithRef = firstChild ? applyRefToParent(firstChild, ref) : null;

  return (
    <IsHoveredContext.Provider value={ref as any}>
      {firstChildWithRef}
    </IsHoveredContext.Provider>
  );
}

function applyRefToParent(element: React.ReactElement, ref: React.RefObject<HTMLElement>): React.ReactElement {
  return cloneElement(element, { ref });
}