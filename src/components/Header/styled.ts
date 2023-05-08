import styled from "styled-components";
import { cart, heart, logo, search, user } from "../../assets";

const HeaderPage = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px 0px;
`;
const HeaderLogo = styled.a`
  width: 138px;
  height: 29px;
  background: url(${logo});
  cursor: pointer;
`;
const HeaderIcons = styled.div`
  display: flex;
  gap: 40px;
  padding: 16px;
`;
const HeaderHeart = styled.div`
  width: 24px;
  height: 24px;
  background: url(${heart});
  background-repeat: no-repeat;
  cursor: pointer;
`;
const HeaderCart = styled.div`
  width: 24px;
  height: 24px;
  background: url(${cart});
  background-repeat: no-repeat;
  cursor: pointer;
`;
const HeaderUser = styled.div`
  width: 24px;
  height: 24px;
  background: url(${user});
  background-repeat: no-repeat;
  cursor: pointer;
`;
const HeaderSearch = styled.div`
  width: 24px;
  height: 24px;
  background: url(${search});
  background-repeat: no-repeat;
  cursor: pointer;
`;
export { HeaderPage, HeaderLogo, HeaderIcons, HeaderHeart, HeaderCart, HeaderUser, HeaderSearch };