import React from 'react';
import styles from "./MyComponent.module.css"
function MyComponent({ htmlContent }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }}  className={styles.container}/>
  );
}

export default MyComponent;
