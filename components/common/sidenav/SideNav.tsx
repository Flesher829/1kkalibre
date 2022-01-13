import Link from "next/link";
import styled from "styled-components";
import { SideNavIcons } from "./SideNavIcons";
import { colors } from "@/lib/styled/colors";
import * as Icons from "@icons/index";

export const SideNav = () => {
  return (
    <SidenavContainer>
      <div className="deezerLogo">
        <Link href="/">
          <a>
            <img src="https://e-cdns-files.dzcdn.net/cache/slash/images/common/logos/deezer_light.a087061697d2a623bb90b30241da46d0.png" />
          </a>
        </Link>
      </div>
      <ul>
        <SideNavIcons
          href="/"
          label="Music"
          icon={<Icons.Music size={25} color={colors.textColor} />}
        />

        <SideNavIcons
          href="/explore"
          label="Explore"
          icon={<Icons.Menu size={20} color={colors.textColor} />}
        />

        <SideNavIcons
          href="/podcast"
          label="Favourites"
          icon={<Icons.Heart size={20} color={colors.textColor} />}
        />

        <div className="additional__links">
          <li>
            <Link href="/profile/loved">
              <a>Favourite tracks</a>
            </Link>
          </li>
          <li>
            <Link href="/profile/playlists">
              <a>Playlists</a>
            </Link>
          </li>
          <li>
            <Link href="/profile/albums">
              <a>Albums</a>
            </Link>
          </li>
          <li>
            <Link href="/profile/artists">
              <a>Artists</a>
            </Link>
          </li>
        </div>
      </ul>
    </SidenavContainer>
  );
};

const SidenavContainer = styled.aside`
  grid-area: sidenav;
  background-color: ${colors.sideNavBgColor};
  border-right: 1px solid ${colors.borderColor};
  color: ${colors.textColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 90px;
  height: 100%;

  @media (min-width: 801px) {
    width: 230px;
  }

  ul {
    margin: 32px 0 12px;
    padding: 0 12px;
    display: flex;
    list-style: none;
    align-items: center;
    flex-direction: column;
  }

  .deezerLogo {
    margin-left: 2rem;
    height: 80px;
    width: 80px;
    display: flex;
    align-items: center;
  }

  .additional__links {
    li {
      list-style: none;
      width: 100%;

      a {
        display: flex;
        align-items: center;
        padding: 0.6rem;
        cursor: pointer;
        margin-top: 0.5rem;
        font-size: 0.8rem;
        color: ${colors.grey100};
        transition: color 0.2s ease-in-out;

        &:hover {
          color: ${colors.red};
        }
      }
    }
  }
`;
