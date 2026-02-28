/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Dialog,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import Image from "next/image";
import OrderItem from "./OrderItem";
import { withTranslation } from "react-i18next";

const OrderSummary = ({
  shouldOpen,
  handleClose,
  orderItems,
  onCountChange,
  handleNoteChange,
  notes,
  totalBg,
  umbrella,
  onPaymentChange,
  paymentMethod,
  t,
}: any) => {
  const handlePaymentChange = (event: any) => {
    onPaymentChange(event.target.value);
  };
  return (
    <Dialog
      open={shouldOpen}
      onClose={handleClose}
      fullWidth
      sx={{
        zIndex: 1,
        maxHeight: "90%",
      }}
      style={{
        margin: -18,
      }}
    >
      <Grid
        container
        sx={{
          overflow: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Grid
          item
          container
          sx={{
            background: "white",
            margin: 1,
            borderRadius: 2,
          }}
        >
          <Grid
            item
            container
            sx={{
              justifyContent: "end",
              marginTop: 1,
              marginRight: 1.5,
            }}
          >
            <Image
              alt="closeIcon"
              src={"/CloseIcon.svg"}
              height={32}
              width={32}
              style={{ padding: 3 }}
              onClick={handleClose}
            />
          </Grid>
          {orderItems?.map((item: any) => (
            <OrderItem
              key={`${item.id}-orderItem`}
              index={`${item.id}-orderItem`}
              {...item}
              quantity={item.quantity}
              onCountChange={(newValue: number) => {
                onCountChange(item, newValue);
              }}
              totalBg={totalBg}
            />
          ))}

          <Grid item container sx={{ padding: 1.5 }}>
            <Typography fontWeight={400} sx={{ fontSize: "1rem" }}>
              {/* {t("notes")}: */}
              {t("howToPay")}
            </Typography>
            <RadioGroup
              sx={{ width: "100%", mt: 2, mb: 2 }}
              value={paymentMethod}
              onChange={handlePaymentChange}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Card
                    variant="outlined"
                    sx={{
                      borderWidth: 2,
                      borderRadius: 4,
                      borderColor:
                        paymentMethod === "CASH" ? "#7A88FD" : "transparent",
                    }}
                  >
                    <CardContent>
                      <FormControlLabel
                        value="CASH"
                        control={<Radio />}
                        label={
                          <React.Fragment>
                            <Typography
                              component="div"
                              sx={{
                                fontWeight: "bold",
                                mt: -1,
                                fontSize: "1.1rem",
                              }}
                            >
                              Cash
                            </Typography>
                            <Typography
                              sx={{ mb: -1, fontSize: "0.8rem", maxLines: 2 }}
                            >
                              {t("cashDesc")}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card
                    variant="outlined"
                    sx={{
                      borderWidth: 2,
                      borderRadius: 4,

                      borderColor:
                        paymentMethod === "CARD" ? "#7A88FD" : "transparent",
                    }}
                  >
                    <CardContent>
                      <FormControlLabel
                        value="CARD"
                        control={<Radio />}
                        label={
                          <>
                            <Typography
                              component="div"
                              sx={{
                                fontWeight: "bold",
                                mt: -1,
                                fontSize: "1.1rem",
                              }}
                            >
                              {t("byCard")}
                            </Typography>
                            <Typography sx={{ mb: -1, fontSize: "0.8rem" }}>
                              {t("byCardDesc")}
                            </Typography>
                          </>
                        }
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </RadioGroup>
            <Typography
              color="grey"
              fontWeight={100}
              sx={{ fontSize: "0.9rem", fontStyle: "italic" }}
            >
              {t("notes")}
            </Typography>
            <TextField
              multiline
              InputProps={{
                sx: {
                  backgroundColor: "white",
                  borderRadius: 2,
                  minHeight: "80px",
                  textAlign: "start",
                  fontSize: "18px",
                },
              }}
              onChange={handleNoteChange}
              fullWidth
              value={notes}
            />
            {umbrella && (
              <Typography color="black" sx={{ fontSize: "0.8rem" }}>
                {t("orderingFrom")}
                <span style={{ color: "#F9AD11", fontSize: "18px" }}>
                  {" "}
                  {umbrella}
                </span>
              </Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default withTranslation()(React.memo(OrderSummary));
