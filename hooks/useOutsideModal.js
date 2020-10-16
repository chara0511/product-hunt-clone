import { useContext, useEffect } from "react";
import { SearchContext } from "../context/search/searchContext";

export const useOutsideModal = (ref) => {
  const { disableSearchMode, disableModal } = useContext(SearchContext);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        disableSearchMode();
        disableModal();
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
