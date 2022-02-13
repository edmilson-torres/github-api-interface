import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 1em;
  width: 100%;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  display: flex;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  /* border-radius: 6px; */
  /* border: 1px solid #ccc; */
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
    /* border-color: #719ece;
    box-shadow: 0 0 3px #719ece; */
    border-bottom: 2px solid #fd8c73;
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  /* border: 1px solid "#ccc"; */
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
