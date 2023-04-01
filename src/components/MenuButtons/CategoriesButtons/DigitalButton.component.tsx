import { CategoriesButton } from "./CategoriesButton.styled";
import { DropDownListDigital } from "../../DropDownLists/DropDownListDigital.component";
import { useState, useEffect, useRef, MouseEvent } from "react";

export const DigitalButton: React.FC = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = (): void => {
    setDropdown(!dropdown);
  };

  const handleDocumentClick = (event: MouseEvent): void => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div>
      <CategoriesButton onClick={handleClick}>Digital</CategoriesButton>
      {dropdown && <DropDownListDigital ref={dropdownRef} />}
    </div>
  );
};
