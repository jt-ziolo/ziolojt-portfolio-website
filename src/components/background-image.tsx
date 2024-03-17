import Image from "next/image";
import headerBg from "../../public/header-bg.webp";
import { FC } from "react";

type Props = { containerClassName: string; children?: JSX.Element };

const BackgroundImage: FC<Props> = (props) => {
  return (
    <div className={props.containerClassName}>
      {props.children}
      <Image
        alt="Mountains"
        src={headerBg}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center bottom",
          backgroundColor: "#82d9f8",
        }}
      />
    </div>
  );
};

export default BackgroundImage;
