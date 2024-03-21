import { Button, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import { FC } from "react";

type Props = {
  href: string;
  linkAccessibleText: string;
  buttonProps?: React.ComponentPropsWithoutRef<typeof Button>;
  iconProps?: React.ComponentPropsWithoutRef<"span">;
  iconComponent?: React.ReactNode;
};

const SocialBtn: FC<Props> = (props) => {
  return (
    <Link
      href={props.href}
      aria-label={props.linkAccessibleText}
      rel="noopener noreferrer"
      target="_blank"
    >
      <IconButton aria-hidden {...props.buttonProps}>
        <span {...props.iconProps}>{props.iconComponent}</span>
      </IconButton>
    </Link>
  );
};

export default SocialBtn;
