/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuPrimeItem";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const MenuPrime = ({
  menu,
  onCountChange,
  cartItems,
  orderingEnabled,
  isDemo,
  productBackground,
  totalBg,
}: any) => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="sm">
      <Grid
        container
        item
        spacing={3}
        sx={{ justify: "center", alignItems: "center" }}
      >
        {menu.map((category: any, idx: number) => (
          <Grid
            item
            container
            key={idx}
            id={category?.url ?? category.name.toLowerCase()}
            sx={{ justifyContent: "start", alignItems: "center" }}
          >
            <Typography
              sx={{
                marginTop: 1,
                fontWeight: 500,
                fontSize: "1.5rem",
                fontFamily: "Inter",
              }}
            >
              {t(category?.name)}
            </Typography>
            <Grid item container sx={{ justifyContent: "start" }}>
              {category?.products.map((product: any) => (
                <MenuItem
                  key={product.id}
                  {...product}
                  index={product.id}
                  orderingEnabled={isDemo || orderingEnabled}
                  quantity={cartItems[product.id]?.quantity}
                  background={productBackground}
                  totalBg={totalBg}
                  onCountChange={(newValue: number) => {
                    onCountChange(product, newValue);
                  }}
                />
              ))}
            </Grid>
          </Grid>
        ))}
        <Box sx={{ m: 8 }} />
      </Grid>
    </Container>
  );
};

MenuPrime.propTypes = {
  menu: PropTypes.array,
  onCountChange: PropTypes.func,
  cartItems: PropTypes.object,
  orderingEnabled: PropTypes.bool,
  isDemo: PropTypes.bool,
  productBackground: PropTypes.string,
  totalBg: PropTypes.string,
};

export default MenuPrime;
