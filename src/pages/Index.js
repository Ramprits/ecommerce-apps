import React from 'react';

import VerticalNav4 from '../components/vertical-navs/VerticalNav';
import Header4 from '../components/headers/Header';
import Footer3 from '../components/footers/Footer';

export default function Index() {
  return (
    <React.Fragment>
      <VerticalNav4
        content={null}
        bucketMain={[<Header4 content={null} />, <Footer3 content={null} />]}
      />
    </React.Fragment>
  );
}

