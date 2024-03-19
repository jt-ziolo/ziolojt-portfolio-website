import { FC } from "react";
import styles from "./name.module.css";

type Props = {
  containerClassName?: string;
  initialClassName?: string;
  dotClassName?: string;
  spaceClassName?: string;
};

const Name: FC<Props> = (props) => {
  const combineIfExists = (
    defaultClassName: string,
    overrideClassName: string | undefined,
  ) => {
    return overrideClassName === undefined
      ? defaultClassName
      : `${defaultClassName} ${overrideClassName}`;
  };
  return (
    <h1 className={combineIfExists(styles.container, props.containerClassName)}>
      <span className={combineIfExists(styles.initial, props.initialClassName)}>
        J
      </span>
      <span className={combineIfExists(styles.dot, props.dotClassName)}>.</span>
      <span className={combineIfExists(styles.initial, props.initialClassName)}>
        T
      </span>
      <span className={combineIfExists(styles.dot, props.dotClassName)}>.</span>
      <span className={combineIfExists(styles.space, props.spaceClassName)}>
        {" "}
      </span>
      Ziolo
    </h1>
  );
};

export default Name;
