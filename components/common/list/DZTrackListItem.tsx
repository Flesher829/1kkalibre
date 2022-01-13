import { FunctionComponent } from "react";
import { colors } from "@/lib/styled/colors";
import { ListItemProps } from "./types";
import { ListItemContent } from "./styled";
import * as fn from "@/lib/utils";
import * as Icons from "@icons/index";

export const DZTrackListItem: FunctionComponent<ListItemProps> = ({
  itemContent1,
  itemContent2,
  itemContent3,
  itemContent4,
  trackLink,
  gridCol,
  trackTitle,
  previewLink,
  trackImg,
  positionIcon,
  iconColor,
  favouriteTrack,
  index,
  ...rest
}) => {
  return (
    <ListItemContent
      {...rest}
      noGridTableLines={trackImg ? "none" : `1px solid ${colors.grey200}`}
      trackImg={trackImg ? "4fr 2fr 2fr 0fr" : "1fr 2fr 2fr 2fr 1fr"}
      positionIcon={trackImg ? "13px" : "4px"}
      padding={trackImg ? "0.55rem" : "0.95rem"}
    >
      {trackImg ? (
        <div className="flex-between">
          <div className="flex">
            <img src={trackImg} alt={trackTitle} />{" "}
            <div className="ml-10">
              {trackTitle ? fn.checkStringLength(trackTitle, 20) : null}
            </div>
          </div>
          <div className="mr-10 flex" style={{ gap: "20px" }}>
            <div style={{ marginTop: "0.5rem" }}>
              {favouriteTrack ? (
                <Icons.HeartSolid size={17} color={colors.red} />
              ) : (
                <Icons.Heart size={17} color={colors.grey100} />
              )}
            </div>
            <div className="rounded__icon">
              <Icons.MoreVert size={20} color={colors.textColor} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-center">
          <div className="list__item">{index ? index + 1 : 1}</div>
          <div
            style={{
              marginLeft: "40px",
              marginTop: "5px",
            }}
          >
            <Icons.Heart size={18} color={colors.grey100} />
          </div>
        </div>
      )}
      <div className="list__play-icon">
        <a
          className="list__play-iconRound"
          href={trackLink || previewLink}
          rel="noreferrer"
          target="_blank"
        >
          <Icons.Play size={25} color={colors.black100} />
        </a>
      </div>

      <div>{itemContent1 ? fn.checkStringLength(itemContent1, 20) : null}</div>
      <div>{itemContent2 ? fn.checkStringLength(itemContent2, 25) : null}</div>
      <div>{itemContent3 ? fn.checkStringLength(itemContent3, 25) : null}</div>
      <div>{itemContent4 ? fn.checkStringLength(itemContent4, 25) : null}</div>
    </ListItemContent>
  );
};
