import { memo, SVGProps } from "react";

interface IFavoriteIcon extends SVGProps<SVGSVGElement> {}

const FavoriteIcon = ({ ...rest }: IFavoriteIcon) => {
  return (
    <svg
      width="fill"
      height="fill"
      viewBox="0 0 24 22"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.75 3.86354L6.75 0.221924L0.75 3.86354V11.667L12.75 21.8982L24.75 11.667V3.86354L18.75 0.221924L12.75 3.86354Z"
        fill="#EC1D24"
      />
    </svg>
  );
};
export default memo(FavoriteIcon);
