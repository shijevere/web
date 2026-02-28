/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useMemo, useState } from "react";
// import AppBar from '@mui/material/AppBar';
import { Provider, useDispatch, useSelector } from "react-redux";
import type { NextPage } from "next";
// import Menu from "components/Menu";
import {
  clearCart,
  updateCartItemQuantity,
  updateCartNote,
} from "@/redux/reducers/cartSlice";
import { store } from "../../redux/store";
import "../../i18n";

import OrderTotal from "../components/OrderTotal";
import MenuSlider from "../components/MenuSlider";
import OrderSummary from "../components/OrderSummary";
import InfoDialog from "../components/InfoDialog";
import SearchBox from "../components/SearchBox";
import {
  categories,
  defaultMenu,
  colors,
  businessData,
} from "../common/constants";
import {
  calculateCartTotal,
  diffInMinutesFromNow,
  scroll,
} from "../utils/common";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  IconButton,
  MenuItem,
  Grid,
  Menu as MuiMenu,
  Typography,
  ThemeProvider,
} from "@mui/material";
import Image from "next/image";
import MenuPrime from "../components/MenuPrime";
import theme from "../theme";
// import MenuPrime from "components/MenuPrime";

const business: any = businessData;
const MenuPageContent: NextPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const cart = useSelector((state: any) => state.cart);

  const [open, setOpen] = useState<any>(!cart?.items);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [callWaiterOpen, setCallWaiterOpen] = useState(false);
  const [isWaiterCommingAlertOpen, setIsWaiterCommingAlertOpen] =
    useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [menu, setMenu] = useState(business?.menu);
  const [theme, setTheme] = useState({
    menuBackground: `linear-gradient(${colors[0].start}, ${colors[0].start}, ${colors[0].end})`,
    sliderBg: colors[0].start,
    totalBg: colors[0].total,
  });

  const handleEditClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditClose = (color: any) => {
    setAnchorEl(null);
    //   menuBackground: "linear-gradient(#Ffdd74, white)",
    // productBackground: "/trap-white.png",
    // sliderBg: "#Ffdd74",
    const menuColors = {
      menuBackground: `linear-gradient(${color.start}, ${color.start}, ${color.end})`,
      sliderBg: color.start,
      totalBg: color.total,
    };
    setTheme({ ...menuColors });
  };

  const onCountChange = React.useCallback(
    (product: any, quantity: number) => {
      dispatch(updateCartItemQuantity({ product, quantity }));
    },
    [dispatch],
  );

  const onOrderItemCountChange = (product: any, quantity: number) => {
    dispatch(updateCartItemQuantity({ product, quantity }));
  };

  useEffect(() => {
    if (!Object.values(cart?.items)?.length) {
      setOpen(false);
    }

    return () => {};
  }, [cart?.items]);

  const onMenuClickHandler = ({ url }: any) => scroll(url);

  const orderTotal = React.useMemo(
    () => calculateCartTotal(cart?.items),
    [cart?.items],
  );

  const handleContinue = () => {
    if (cart?.lastOrderTime && diffInMinutesFromNow(cart?.lastOrderTime) < 3) {
      setIsAlertOpen(true);
      return;
    }

    if (open) {
      dispatch(clearCart(true));
      setIsDialogOpen(true);
    }
    setOpen(!open);
  };

  const filterProduct = (name: string, search: string) =>
    name.toLowerCase().includes(search.toLowerCase());

  const handleSearch = (term: string) => {
    if (!term) {
      setMenu(business?.menu);
    } else {
      const filterdMenu = business?.menu.map((category: any) => ({
        ...category,
        products: category?.products.filter((product: any) =>
          filterProduct(product.name, term),
        ),
      }));

      setMenu(filterdMenu);
    }
  };

  const handleNoteChange = (event: any) => {
    const note = event.target.value;
    dispatch(updateCartNote({ note }));
  };

  const handleCallWaiter = () => {
    setCallWaiterOpen(false);
    setIsWaiterCommingAlertOpen(true);
  };

  const orderItems = Object.values(cart?.items);

  const shouldOpen = useMemo(
    () => Boolean(orderItems?.length && open),
    [orderItems?.length, open],
  );
  const sliderBg = theme?.sliderBg ?? defaultMenu.sliderBg;
  const productBackground =
    business?.theme?.productBackground ?? defaultMenu.productBackground;
  const [paymentMethod, setPaymentMethod] = useState("CASH");

  // if (business?.available)
  //   return <EmptyView />;

  return (
    <>
      <div
        style={{
          background: theme.menuBackground,
          position: "fixed",
          zIndex: -1,
          height: "100%",
          width: "100%",
        }}
      ></div>
      <SearchBox
        isDemo
        onSearch={handleSearch}
        onIconClick={() => setCallWaiterOpen(true)}
      />

      <MenuSlider
        menuItems={categories}
        onClickHandler={onMenuClickHandler}
        selectedTabUrlValue={"drinks"}
        background={sliderBg}
        primaryColor={business?.theme?.primaryColor}
        showAlert={false}
        font={business?.theme?.font}
      />
      {/* <Menu
        isDemo
        menu={menu}
        onCountChange={onCountChange}
        cartItems={cart?.items}
      /> */}
      <MenuPrime
        isDemo
        menu={menu}
        onCountChange={onCountChange}
        cartItems={cart?.items}
        orderingEnabled={business?.orderRequestFlag}
        productBackground={productBackground}
        totalBg={theme.totalBg}
      />
      <OrderSummary
        shouldOpen={shouldOpen}
        orderItems={orderItems}
        onPaymentChange={setPaymentMethod}
        paymentMethod={paymentMethod}
        handleNoteChange={handleNoteChange}
        onCountChange={onOrderItemCountChange}
        handleClose={() => setOpen(false)}
        notes={cart?.notes}
        totalBg={theme.totalBg}
        umbrella={8}
      />

      <OrderTotal
        total={orderTotal}
        show={!!orderTotal}
        onClick={handleContinue}
        isPopupOpen={open}
        background={theme.totalBg}
      />
      <InfoDialog
        title={t("orderConfirmedTitle")}
        message={t("orderConfirmedMsg")}
        isOpen={isDialogOpen}
        isInfo
        handleClose={() => setIsDialogOpen(false)}
      />
      <InfoDialog
        title={t("oopsTitle")}
        message={t("oopsMsg")}
        isOpen={isAlertOpen}
        isInfo
        handleClose={() => setIsAlertOpen(false)}
      />
      <InfoDialog
        title={t("waiterComingTitle")}
        message={t("waiterComingMsg")}
        isOpen={isWaiterCommingAlertOpen}
        isInfo
        handleClose={() => setIsWaiterCommingAlertOpen(false)}
      />
      <InfoDialog
        title={t("callWaiterTitle")}
        message={t("callWaiterMsg")}
        isOpen={callWaiterOpen}
        handleConfirm={handleCallWaiter}
        handleCancel={() => setCallWaiterOpen(false)}
      />
      <IconButton
        onClick={handleCallWaiter}
        sx={{
          top: "auto",
          right: 25,
          bottom: 35,
          left: "auto",
          position: "fixed",
          boxShadow: "0px 10px 25px 5px rgba(0,0,0,0.4)",
        }}
      >
        <Avatar
          style={{ width: 65, height: 65, margin: -10 }}
          sx={{ backgroundColor: "#020f85" }}
        >
          <Image alt="waiter" src="/waiterrr.png" width={45} height={45} />
        </Avatar>
      </IconButton>

      <Grid
        container
        item
        direction={"row"}
        sx={{
          // opacity: 0.1,
          width: "40%",
          bottom: 35,
          position: "fixed",
          justifyContent: "start",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 5,
        }}
        onClick={handleEditClick}
      >
        <Grid
          item
          sx={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            m: 1,
            background: theme.menuBackground,
          }}
        />
        <Typography variant="subtitle2">{t("chooseColor")}</Typography>
      </Grid>

      {/* Colors menu */}
      <MuiMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {colors.map((color: any) => (
          <MenuItem
            sx={{ marginLeft: -1 }}
            value={color.name}
            key={color.name}
            onClick={() => handleEditClose(color)}
          >
            <Grid container sx={{}}>
              <Grid item sx={{ marginRight: 1 }}>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: `linear-gradient(${color.start}, ${color.end})`,
                  }}
                />
              </Grid>
              <Grid item xs>
                {color.name}
              </Grid>
            </Grid>
          </MenuItem>
        ))}
      </MuiMenu>
    </>
  );
};

const MenuPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <MenuPageContent />
      </Provider>
    </ThemeProvider>
  );
};

export default MenuPage;
