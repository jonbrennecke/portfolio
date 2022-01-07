import { trueBlack, trueWhite } from "../../styles";
import React from "react";
import { ContentStyle } from "../../types";
import { AnimatedSvg } from "../AnimatedSvg";

export interface CurativeLogoProps {
  id?: string;
  style?: any;
  className?: string;
  contentStyle?: ContentStyle | keyof typeof ContentStyle;
}

export const AnimatedCurativeLogo = ({
  id,
  style,
  className,
  contentStyle = ContentStyle.light,
}: CurativeLogoProps) => {
  const fillColor = contentStyle === ContentStyle.light ? trueWhite : trueBlack;
  return (
    <svg
      id={id}
      style={style}
      className={className}
      viewBox="0 0 882 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AnimatedSvg.Group fill={fillColor}>
        <AnimatedSvg.Path d="M180 74.8354H126.387L164.298 36.9243L143.061 15.7021L105.165 53.6132V0H75.1332V53.6132L37.2222 15.7021L16 36.9243L53.9111 74.8354H105.165V126.089L143.061 164L164.298 142.764L126.387 104.867H180V74.8354Z" />
        <AnimatedSvg.Path d="M53.6813 75H0V105.07H53.6813L15.7221 143.014L36.9712 164.278L74.9305 126.319V180H105V126.319L53.6813 75Z" />
        <AnimatedSvg.Path d="M432 135.102H408.028V125.852C405.057 129.415 401.325 132.266 397.107 134.194C392.888 136.123 388.291 137.08 383.654 136.995C365.015 136.995 353 124.088 353 104.614V45H376.972V99.3078C376.972 109.246 381.431 115.756 391.31 115.756C399.712 115.756 407.927 109.59 407.927 97.9311V45H431.9L432 135.102Z" />
        <AnimatedSvg.Path d="M504 67.9095C501.433 67.559 498.845 67.3857 496.255 67.3909C483.701 67.3909 474.07 75.1399 474.07 89.0679V135H450V44.5041H474.07V57.2366C478.029 49.3292 487.027 44 498.155 44C500.108 44.0116 502.059 44.1221 504 44.3313V67.9095Z" />
        <AnimatedSvg.Path d="M673 10H697V33.8716H673V10ZM697 135H673V44.9553H697V135Z" />
        <AnimatedSvg.Path d="M739.612 135L707 45H731.763L751.907 105.922L771.923 45H796L763.56 135H739.612Z" />
        <AnimatedSvg.Path d="M315.678 98.79C313.409 110.457 306.402 117.017 296.251 117.017C283.731 117.017 275.834 107.048 275.834 89.8705C275.834 72.6933 283.731 62.8962 296.251 62.8962C306.819 62.9394 313.998 70.0175 315.907 82.4616H340C337.042 58.6235 319.899 43 296.251 43C270.177 43 252 61.9036 252 89.9137C252 117.924 270.177 137 296.251 137C319.454 137 336.367 121.995 339.842 98.79H315.678Z" />
        <AnimatedSvg.Path d="M573.116 44.712V53.9911C567.833 47.4741 559.31 43 548.046 43C523.319 43 509 64.3061 509 89.9137C509 115.521 523.276 137 548.046 137C559.31 137 567.833 132.526 573.116 125.822V135.101H597V44.712H573.116ZM573.629 92.4888C573.629 107.781 565.064 116.37 553.642 116.37C540.165 116.37 532.999 105.552 532.999 89.9137C532.999 74.2758 540.137 63.6156 553.642 63.6156C565.064 63.6156 573.629 72.0459 573.629 87.5112V92.4888Z" />
        <AnimatedSvg.Path d="M797 90.9137C797 64.2703 815.334 44 840.87 44C867.597 44 882 63.925 882 89.1873V96.2366H819.968C821.675 109.99 830.01 118.176 841.903 118.233C849.664 118.233 856.077 115.025 858.659 105.573H881.24C878.772 123.283 865.459 138 841.731 138C815.162 138 797 118.924 797 90.9137ZM820.814 79.9082H858.114C858.028 70.9743 852.289 63.2488 840.698 63.2488C831.1 63.2488 823.741 68.917 820.814 79.9082Z" />
        <AnimatedSvg.Path d="M615.014 20H638.549V45.6239H656.8V65.6538H638.549V105.713C638.549 113.396 642.834 114.426 649.803 114.426H658V135H642.634C624.54 135 615 129.02 615 110.564L615.014 20Z" />
      </AnimatedSvg.Group>
    </svg>
  );
};
