import { HorizontalRuleIcon, PlusIcon } from '@primer/octicons-react';
import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
  defaultOpen?: number;
}
interface AppContextInterface {
  onClick: (index: number) => void;
  open: number | null;
}
const AccordionContext = React.createContext<AppContextInterface | null>(null);

export default function Accordion({ defaultOpen = 0, children }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const onClick = (index: number) => {
    if (open === index) return setOpen(null);
    setOpen(index);
  };
  const value: AppContextInterface = {
    onClick,
    open,
  };
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
}

function useAccordion() {
  const c = React.useContext(AccordionContext);
  if (!c) throw new Error('useCtx must be inside a Provider with a value');

  return c;
}

interface TabProps {
  index: number;
  children: React.ReactNode;
  title: string;
}

export function Tab({ index, children, title }: TabProps) {
  const c = useAccordion();
  const isOpen = c.open === index;

  return (
    <div className="mt-8">
      <button
        className={`font-semibold text-left tracking-tight ${
          isOpen ? 'mb-8' : ''
        } focus:outline-none hover:text-primary`}
        onClick={() => c.onClick(index)}
      >
        {isOpen ? <HorizontalRuleIcon /> : <PlusIcon />}
        <span className="ml-2">{title}</span>
      </button>
      <div
        className={`transition-visibility ${
          isOpen ? 'visible' : 'h-0 invisible'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
type TabContentProps = { children: React.ReactNode };
export function TabContent({ children }: TabContentProps) {
  return children as React.ReactElement;
}
