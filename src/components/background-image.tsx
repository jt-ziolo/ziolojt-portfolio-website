import Image from "next/image";
import headerBg from "../../public/header-bg.webp";
import { FC, ReactEventHandler } from "react";

type Props = {
  containerClassName: string;
  children?: JSX.Element;
  onLoad?: ReactEventHandler<HTMLImageElement>;
};

const BackgroundImage: FC<Props> = (props) => {
  return (
    <div className={props.containerClassName}>
      {props.children}
      <Image
        alt={""}
        src={headerBg}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        onLoad={props.onLoad}
        style={{
          objectFit: "cover",
          objectPosition: "center bottom",
        }}
      />
    </div>
  );
};

export default BackgroundImage;
