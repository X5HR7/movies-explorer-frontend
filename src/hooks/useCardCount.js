import React, { useEffect } from 'react';
import useMediaQuery from './useMediaQuery';
import {
  LG_INITIAL_CARD_COUNT,
  LG_ROW_CARD_COUNT,
  MD_INITIAL_CARD_COUNT, MD_ROW_CARD_COUNT,
  SM_INITIAL_CARD_COUNT, SM_ROW_CARD_COUNT
} from '../utils/cardConstants';

const useCardCount = () => {
  const isDesktop = useMediaQuery('(min-width: 1161px)');
  const isTablet = useMediaQuery('(min-width: 751px)');

  const calculateInitialCardCount = () => {
    return isDesktop
      ? LG_INITIAL_CARD_COUNT
      : isTablet
        ? MD_INITIAL_CARD_COUNT
        : SM_INITIAL_CARD_COUNT;
  };

  const [visibleCardCount, setVisibleCardCount] = React.useState(calculateInitialCardCount());

  const calculateCardCount = () => {
    if (isDesktop)
      return setVisibleCardCount(visibleCardCount + LG_ROW_CARD_COUNT);

    if (isTablet)
      return setVisibleCardCount(visibleCardCount + MD_ROW_CARD_COUNT);

    setVisibleCardCount(visibleCardCount + SM_ROW_CARD_COUNT * 2);
  };

  useEffect(() => {
    setVisibleCardCount(
      calculateInitialCardCount()
    );
  }, [isDesktop, isTablet]);

  return { visibleCardCount, calculateCardCount };
};

export default useCardCount;
