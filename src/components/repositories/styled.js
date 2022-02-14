import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 1em;
  width: 100%;
  justify-content: flex-start;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  display: flex;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  width: 100%;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  text-align: center;
  padding: 8px 16px;
  &:focus {
    outline: none;
  }

  &.is-selected {
    outline: none;
    border-bottom: 2px solid #fd8c73;
  }

  @media Screen and (min-width: 992px) {
    width: auto;
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  @media Screen and (min-width: 600px) {
    display: none;
    &.is-selected {
      display: block;
    }
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
