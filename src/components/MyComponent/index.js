import React from 'react';

function MyComponent({ htmlContent }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default MyComponent;
