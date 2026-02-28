import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Alert, Container, Link, Tab, Tabs, styled } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledTab = styled(Tab)(({ isSelected }) => ({
  minHeight: "42px",
  fontSize: "1.1rem",
  font:"Lato",
  borderRadius: "0.5rem",
  margin: "0.2rem",
  "& img": {
    color: "red",
    filter: isSelected
      ? "invert(0) brightness(1)"
      : "opacity(0.5) drop-shadow(0 0 0 #020f85) drop-shadow(0 0 0 #020f85)",
  },
}));

const MenuSlider = ({
  selectedTabUrlValue,
  menuItems,
  onClickHandler,
  background,
  showAlert,
  primaryColor,
  font,
}) => {
  const { t } = useTranslation();

  const selectedTab = React.useMemo(() => {
    const idx = menuItems.map((item) => item.url).indexOf(selectedTabUrlValue);
    return idx < 0 ? 0 : idx;
  }, [menuItems, selectedTabUrlValue]);
  const [tabIndex, setTabIndex] = React.useState(selectedTab);

  // handle external tab changes
  useEffect(() => {
    setTabIndex(selectedTab);
  }, [selectedTab]);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue < 0 ? 0 : newValue);
  };

  return (
    <Container
      disableGutters
      maxWidth="sm"
      sx={{
        overflowX: "auto",
        // position: '-webkit-sticky',
        position: "sticky",
        top: 0,
        zIndex: 1,
        background: background,
      }}
    >
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        orientation="horizontal"
        aria-label="scrollable auto tabs example"
        indicatorColor="red"
        textColor="inherit"
        sx={{
          padding: 0.5,
          marginTop: 1,
          display: "flex",
          overflowX: "auto",
        }}
      >
        {menuItems.map((item, idx) => (
          <StyledTab
            key={`tab-main-${item.url}`}
            isSelected={idx === tabIndex}
            icon={
              item?.icon && (
                <img
                  alt=""
                  src={item?.icon}
                  height={25}
                  width={25}
                  color="red"
                />
              )
            }
            iconPosition="start"
            sx={{
              height: "40px",
              minWidth: "auto",
              textTransform: "none",
              color:
                idx === tabIndex ? "white" : primaryColor ? "white" : "#020f85",
              fontFamily: font,
              background:
                idx === tabIndex
                  ? (primaryColor ?? "#020f85")
                  : (primaryColor ?? "white"),
              opacity: idx !== tabIndex && primaryColor ? 0.5 : 1,
            }}
            disableRipple
            label={t(item.text)}
            component={Link}
            to={`#${item.url}`}
            onClick={() => onClickHandler(item)}
          />
        ))}
      </Tabs>
      {showAlert && (
        <Alert sx={{ m: 1 }} severity="success">
          {t("activeOrder")}
        </Alert>
      )}
    </Container>
  );
};

MenuSlider.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ),
  onClickHandler: PropTypes.func,
  selectedTabUrlValue: PropTypes.string,
  background: PropTypes.string,
  showAlert: PropTypes.bool,
  primaryColor: PropTypes.string,
  font: PropTypes.string,
};

export default React.memo(MenuSlider);
