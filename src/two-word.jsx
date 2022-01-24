import React, { useEffect, useMemo, useState } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';

const TwoWord = () => {
  const data = useLazyLoadQuery(
    graphql`query twoWordQuery {
      hello
    }`
  );
  
  return <></>;
};

export {
  TwoWord,
};