import { useContext, useEffect } from 'react';
import { SearchContext } from '../context/search/searchContext';

export const useOutsideModal = (ref) => {
  const { disableSearchMode, disableModal } = useContext(SearchContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        disableSearchMode();
        disableModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
