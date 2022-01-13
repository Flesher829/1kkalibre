import { useState } from "react";
import styled from "styled-components";
import { colors } from "@/lib/styled/colors";
import * as Icons from "@icons/index";
import { Dropdown } from "@/common/dropdown";

export const Profile = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <Container>
      <div
        className="profile__avatar"
        onClick={() => setOpenDropdown((state) => !state)}
      >
        <Icons.User color={colors.borderColor} size={20} />
      </div>
      {openDropdown ? <Dropdown /> : null}
    </Container>
  );  
};

const Container = styled.div`
  .profile__avatar {
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
`;
