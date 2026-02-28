/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Grid, IconButton, ListItemIcon, ListItemText } from "@mui/material";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
// import FilterListIcon from "@mui/icons-material/FilterList";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default function SearchBox({ placeholder, onSearch, isDemo, sx }: any) {
  const { t, i18n } = useTranslation();

  const [value, setValue] = React.useState("");
  const [timer, setTimer]: any = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [icon, setIcon] = React.useState("/english.png");

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event: any): any => {
    const searchTerm = event.target.value;
    setValue(searchTerm);
    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      onSearch(searchTerm);
    }, 0);
    setTimer(newTimer);
  };

  const handleClear = () => {
    setValue("");
    onSearch("");
  };

  const handleLanguageSelect = async (language: string) => {
    i18n.changeLanguage(language);
    setAnchorEl(null);
    setIcon(language === "en" ? "/english.png" : "/albanian.png");
  };

  return (
    <Grid
      item
      container
      sx={{
        justifyContent: "center",
        padding: 1,
        // background: "#ff9d2cff",
        alignItems: "center",
        width: "100%",
        display: "row",
        ...sx,
      }}
    >
      <Grid
        container
        maxWidth={"sm"}
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid item direction={"row"} xs={true}>
          {isDemo && (
            <IconButton>
              <Link href="/">
                <ArrowBackIcon />
              </Link>
            </IconButton>
          )}
          <TextField
            InputProps={{
              disableUnderline: true,
              sx: {
                borderRadius: "12px",
                // paddingRight: "12px",
                marginTop: "8px",
                fontWeight: "100",
                // textco: "red",
                paddingLeft: "15px",
              },
              endAdornment: (
                <IconButton
                  sx={{
                    visibility: value ? "visible" : "hidden",
                    height: "30px",
                  }}
                  onClick={handleClear}
                >
                  <ClearIcon />
                </IconButton>
              ),
              style: {
                fontSize: "1.1rem",
                // color: "darkgrey",
                fontFamily: "Inter",
              },
            }}
            variant="standard"
            InputLabelProps={{
              style: {
                fontSize: "1rem",
                alignSelf: "start",
              },
            }}
            sx={{
              width: isDemo ? "85%" : "100%",
              backgroundColor: "white",
              "& input[type=number]::-webkit-inner-spin-button": {
                WebkitAppearance: "none",
                margin: 0,
              },

              borderRadius: "1rem",
              // boxShadow: "0px 5px 6px 3px rgba(100, 100, 111, 0.1)",
              zIndex: 1,
              height: 45,
              justifyContent: "start",
              fontSize: "16px",
            }}
            value={value}
            onChange={handleChange}
            placeholder={placeholder ?? t("search")}
            color="secondary"
          />

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleLanguageSelect("en")}>
              <ListItemIcon>
                <Image alt="eng" src="/english.png" width={30} height={30} />
              </ListItemIcon>
              <ListItemText>{t("English")}</ListItemText>
            </MenuItem>

            <MenuItem onClick={() => handleLanguageSelect("al")}>
              <ListItemIcon>
                <Image alt="alb" src="/albanian.png" width={30} height={30} />
              </ListItemIcon>
              <ListItemText>{t("Albanian")}</ListItemText>
            </MenuItem>
          </Menu>
        </Grid>
        <Grid item>
          <IconButton onClick={handleClick}>
            <Image alt="alb" src={icon} width={30} height={30} />
            {/* <Avatar
              sx={{
                backgroundColor: "#020f85",
                marginTop: -1, marginBottom: -1,
              }}>
              <FilterListIcon htmlColor='white' />
            </Avatar> */}
          </IconButton>
          {/* {isDemo || showWaiterButton ? (
            <IconButton onClick={onIconClick}>
              <Avatar style={{}}
                sx={{ backgroundColor: "#020f85", margin: -1 }}>
                <Image alt="waiter" src="/waiterrr.png" width={30} height={30}
                />
              </Avatar>
            </IconButton>
          ) : null
          } */}
        </Grid>
      </Grid>
    </Grid>
  );
}
