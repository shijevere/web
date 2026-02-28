/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const OrderTotal = ({ total, show, onClick, isPopupOpen, background }: any) => {
  const { t } = useTranslation();
  const buttonLabel = isPopupOpen ? t("order") : t("continue");

  return (
    <Grid
      item
      container
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        minHeight: "110px",
        justifyContent: "center",
        opacity: !show ? "0" : "1",
        // transition: "all 0.4s",
        visibility: !show ? "hidden" : "visible",
        zIndex: 4,
      }}
    >
      <Grid
        item
        container
        sx={{
          borderRadius: "3rem 3rem 0px 0px",
          direction: "row",
          background: background,
          alignContent: "center",
          p: 2,
          maxWidth: "sm",
        }}
      >
        <Grid
          item
          container
          xs={5}
          sx={{ alignContent: "center" }}
          direction="column"
        >
          <Typography variant="subtitle1" fontWeight={400} color="white">
            Total:
          </Typography>
          <Typography
            sx={{ marginTop: -1, fontSize: "26px" }}
            variant="h6"
            fontWeight={700}
            color="white"
          >
            {`${total} L`}
          </Typography>
        </Grid>
        <Grid item container xs={1}></Grid>
        <Grid item container sx={{ alignContent: "center" }} xs={6}>
          <Button
            endIcon={<ArrowForwardIcon />}
            fullWidth
            size="medium"
            sx={{
              borderRadius: 16,
              color: background,
              fontWeight: 500,
              textTransform: "none",
              fontSize: "20px",
              minHeight: "50px",
            }}
            style={{ backgroundColor: "white" }}
            onClick={onClick}
          >
            {buttonLabel}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrderTotal;
