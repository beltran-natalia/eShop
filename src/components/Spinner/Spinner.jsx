import React from "react";
import { ClipLoader } from "react-spinners";
// from https://www.davidhu.io/react-spinners/
import styles from "./Spinner.module.scss";

export const Spinner = () => {
  return (
    <div className={styles.spinner_container}>
      <ClipLoader />
    </div>
  );
};
