import Image from "next/image";
import headerBg from "../../public/header-bg.webp";
import { CSSProperties, FC, ReactEventHandler } from "react";

type Props = {
  containerClassName: string;
  children?: JSX.Element;
  // onLoad?: ReactEventHandler<HTMLImageElement>;
  imageClassName?: string;
};

const BackgroundImage: FC<Props> = (props) => {
  return (
    <div className={props.containerClassName}>
      {props.children}
      <Image
        alt={""}
        className={props.imageClassName}
        src={headerBg}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        // onLoad={props.onLoad}
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default BackgroundImage;
