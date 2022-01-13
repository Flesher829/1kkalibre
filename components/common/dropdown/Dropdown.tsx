import { colors } from "@/lib/styled/colors";
import styled from "styled-components";
import * as Icons from "@icons/index";
import Link from "next/link";
import { useQuery } from "react-query";
import { getDeezerUserProfileInfo } from "pages/api/services";

export const Dropdown = () => {
  // const { data } = useQuery("profile", getDeezerUserProfileInfo);
  // console.log("Profile", data);
  return (
    <Container>
      <ul>
        <li className="profile-name">
          <Link href="/profile/highlights">
            <a className="flex-between">
              <div className="flex">
                <div className="profile-icon">
                  <Icons.User size={20} color={colors.borderColor} />
                </div>
                <div className="ml-7">Dugba</div>
              </div>

              <div>
                <Icons.ChevronRight size={15} color={colors.textColor} />
              </div>
            </a>
          </Link>
        </li>
        <div className="line"></div>

        <li className="flex-between">
          <span>Account Settings</span>
          <div>
            <Icons.ChevronRight size={15} color={colors.textColor} />
          </div>
        </li>
        <li className="flex-between">
          <span>Manage my exclusions</span>
          <div>
            <Icons.ChevronRight size={15} color={colors.textColor} />
          </div>
        </li>
        <li className="flex-between">
          <span>Log out</span>
          <div>
            <Icons.ChevronRight size={15} color={colors.textColor} />
          </div>
        </li>

        <div className="line"></div>
        <li className="flex-between">
          <span>Support</span>
          <div>
            <Icons.ChevronRight size={15} color={colors.textColor} />
          </div>
        </li>
        <li className="flex-between">
          <span>Community and feedback</span>
          <div>
            <Icons.ChevronRight size={15} color={colors.textColor} />
          </div>
        </li>
        <li className="flex-between">
          <span>Plans</span>
          <div>
            <Icons.ChevronRight size={15} color={colors.textColor} />
          </div>
        </li>
        <li className="flex-between">
          <span>Features</span>
          <div>
            <Icons.ChevronRight size={15} color={colors.textColor} />
          </div>
        </li>
        <li className="flex-between">
          <span>About us</span>
          <div>
            <Icons.ChevronRight size={15} color={colors.textColor} />
          </div>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 60px;
  right: 15px;
  width: 300px;
  height: 400px;
  background: ${colors.sideNavBgColor};
  border-radius: 7px;
  padding: 0.55rem;
  color: ${colors.textColor};
  overflow-y: scroll;
  z-index: 10000;

  ul {
    list-style: none;
    padding: 0.6rem;

    li {
      list-style: none;
      padding: inherit;
      cursor: pointer;
      margin-bottom: 0.7rem;

      .profile-name {
        margin-top: -30px;
      }

      &:hover {
        background: ${colors.borderColor};
        border-radius: 5px;
      }

      .profile-icon {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${colors.textColor};
        cursor: pointer;
      }
    }
  }
`;
