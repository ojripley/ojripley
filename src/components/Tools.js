import React, { useEffect, useState } from 'react';

import './styles/page.css';

export default function Tools(props) {
  const [classNames, setClassNames] = useState('page page-offscreen');

  useEffect(() => {
    props.setCurrentPage('TOOLS');

    setTimeout(() => {
      setClassNames('page');
    }, 100);
  });

  return (
    <div className={classNames}>

    </div>
  );
};