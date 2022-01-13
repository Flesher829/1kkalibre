import type { ReactNode, ReactElement, FunctionComponent } from "react";
import styled from "styled-components";
import { Tab } from "@/common/tab/Tab";
import { getLayout as getSiteLayout } from "@/layout/layout";
import { colors } from "@/lib/styled/colors";
import * as Icons from "@icons/index";

type UserProfileProps = {
  children: ReactNode;
};

export const ProfileLayout: FunctionComponent<UserProfileProps> = ({
  children,
}) => {
  return (
    <Container>
      <div className="userProfile">
        <div className="userAvatar">
          <Icons.User size={70} color={colors.grey100} />
        </div>

        <div className="userProfile__info">
          <h1>Dugba</h1>
          <div className="flex userProfile__stats">
            <span>0 followers</span>
            <span className="ml-1 mr-1">-</span>
            <span>0 following</span>
          </div>
        </div>
      </div>
      <TabList>
        <Tab href="/profile/highlights">Highlights</Tab>
        <Tab href="/profile/playlists">Playlists</Tab>
        <Tab href="/profile/loved">Favourite tracks</Tab>
        <Tab href="/profile/albums">Albums</Tab>
        <Tab href="/profile/artists">Artists</Tab>
        <Tab href="/profile/history">Listening history</Tab>
      </TabList>

      <div
        style={{ maxWidth: "1050px", overflowX: "scroll", marginTop: "25px" }}
      >
        {children}
      </div>
    </Container>
  );
};

export const getLayout = (page: ReactElement) =>
  getSiteLayout(<ProfileLayout>{page}</ProfileLayout>);

const Container = styled.div`
  /* display: flex; */

  .userProfile {
    padding-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .userProfile__info {
    h1 {
      font-size: 2rem;
      margin: 0;
      padding: 0;
    }
  }

  .userProfile__stats {
    color: ${colors.grey100};
    font-size: 0.8rem;
  }

  .userAvatar {
    height: 180px;
    width: 180px;
    border-radius: 50%;
    border: 1px solid ${colors.grey100};
    background-color: ${colors.textColor};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
`;

const TabList = styled.div`
  border-bottom: 1px solid ${colors.grey200};
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-bottom: 1rem;
  max-width: 1050px;
  /* margin: auto; */
`;
