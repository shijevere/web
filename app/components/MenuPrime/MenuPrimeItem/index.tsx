/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from "react";
// import { StyledText } from 'components/BaseComponents/StyledText';
import PropTypes from "prop-types";
import { Grid, Typography, styled } from "@mui/material";
// import StepCount from 'components/StepCount/Loadable';
// import { glide } from 'react-tiger-transition/esm/react-tiger-transition';
// import CSSTransition from 'react-transition-group/CSSTransition';
// import ConfirmationDialog from 'components/ConfirmationDialog/Loadable';
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import StepCountPrime from "../../StepCountPrime";
// import ConfirmationDialog from '../../ConfirmationDialog';

// glide({
//   name: 'exitAnim',
//   direction: 'left',
//   exit: {
//     opacity: 0,
//     scale: 0.5,
//   },
// });

const StyledDescription = styled(Typography)({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 400,
  marginBottom: "5px",
  fontSize: "0.8rem",
  color: "#373737b1",
  opacity: 0.6,
  maxLines: 1,
  textOverflow: "ellipsis",
  "-webkit-line-clamp": 1,
  "-webkit-box-orient": "horizontal",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  wordBreak: "break-word",
  lineHeight: "16px",
});

const MenuPrimeItem = (
  {
    name,
    description,
    imageUrl,
    index,
    quantity,
    price,
    onCountChange,
    orderingEnabled,
    readonly,
    background,
    totalBg,
  }: any, // animationDelay,
  // promoId,
  // discount,
  // addedByPromo,
) => {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  // const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  // const classes = useStyles();
  const stepOnChangeHandler = useCallback(
    (newValue: number) => {
      onCountChange(newValue);
      // setRowPrice(newValue * price);
    },
    [onCountChange],
  );

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  // const [rowPrice, setRowPrice] = useState(quantity * price);

  // const handleOnRemoveItem = useCallback((shouldRemove: boolean) => {
  //   if (shouldRemove) onCountChange(0);
  // }, []);

  // const productImage = imageUrl ||;

  const memoImage = React.useMemo(
    () => (
      <Grid
        item
        container
        sx={{
          position: "relative",
          mb: 12,
          justifyContent: "center",
          // width: "300px",
          // height: "350px",
        }}
      >
        <Image
          alt=""
          src={imageUrl || "/placeholder.png"}
          width={120}
          height={120}
          objectFit="cover"
        />
      </Grid>
    ),
    [imageUrl],
  );

  const product = (
    <Grid
      paddingTop={1}
      paddingBottom={1}
      container
      item
      xs={6}
      sm={4}
      sx={{
        justifyContent: "center",
        justifyItems: "center",
        alignContent: "center",
        width: "150px",
        height: "260px",

        mb: 5,
      }}
    >
      <Grid
        container
        item
        sx={{
          width: "95%",
          height: "100%",
        }}
      >
        {/* 70% container*/}
        <Grid
          item
          xs={12}
          container
          sx={{
            height: "70%",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          {/* Image and shadow*/}
          <Grid
            item
            container
            alignContent={"center"}
            direction={"column"}
            sx={{
              maxWidth: "160px",
              position: "relative",
              top: "20%",
              height: "100%",
              m: "0rem 0.6rem",
              backgroundImage: `url(${background})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {quantity > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "5px",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {quantity}
              </div>
            )}
            {memoImage}
            <div
              style={{
                width: "35%",
                height: "0px",
                backgroundColor: "trasparent",
                boxShadow: "0px -5px 15px 1px black",
                position: "absolute",
                bottom: "20%",
              }}
            />
          </Grid>
          {/* Step count */}
          <Grid
            item
            container
            sx={{
              position: "relative",
              height: "25%",
              maxWidth: "180px",

              bottom: "20%",
              mt: "1.6rem",
            }}
          >
            {orderingEnabled && !readonly && (
              <StepCountPrime
                value={quantity}
                onStepValueChange={stepOnChangeHandler}
                enableDelete
                totalBg={totalBg}
              />
            )}
          </Grid>
        </Grid>
        {/* 20%  Name of product */}
        <Grid
          item
          container
          sx={{
            height: "15%",
            p: "0rem 0.5rem",
            mt: "2.6rem",
            alignSelf: "center",
            justifySelf: "center",
            justifyContent: "start",
            alignContent: { xs: "start", sm: "start" },
          }}
        >
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "common.black",
                  },
                },
              }}
              title={
                <React.Fragment>
                  <Typography
                    color="whitesmoke"
                    variant="h6"
                    style={{ fontSize: "1rem", color: "whitesmoke" }}
                  >
                    {t(`${name}`)}
                  </Typography>
                  <Typography
                    variant="caption"
                    style={{ fontSize: "0.8rem", color: "whitesmoke" }}
                  >
                    {t(`${description}`)}
                  </Typography>
                </React.Fragment>
              }
              sx={{ marginBottom: -3 }}
            >
              <Typography
                sx={{
                  lineHeight: "22px",
                  fontWeight: 500,
                  paddingBottom: "3px",
                  fontSize: "1.2rem",
                  maxLines: 1,
                  fontFamily: "Inter",
                  textOverflow: "ellipsis",
                  "-webkit-line-clamp": 1,
                  "-webkit-box-orient": "vertical",
                  overflow: "hidden",
                  flexShrink: 1,
                  wordBreak: "break-all",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                }}
                onClick={handleTooltipOpen}
              >
                {t(`${name}`)}
              </Typography>
            </Tooltip>
          </ClickAwayListener>

          {description && (
            <Grid item container>
              <StyledDescription>{t(`${description}`)}</StyledDescription>
            </Grid>
          )}
        </Grid>
        {/* 10% Price of product */}
        <Grid
          item
          container
          sx={{
            height: "10%",
            p: "0rem 0.5rem",
            maxWidth: "150px",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              color: "#020F85",
              fontWeight: 500,
              fontSize: "1.5rem",
            }}
          >
            <strong>{price}</strong>
            <span style={{ fontSize: "1.2rem" }}> L</span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
  return (
    <>
      {/* {content} */}
      {product}
      {/* {productCard} */}
      {/* {content} */}
    </>
  );
};

MenuPrimeItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.any,
  onCountChange: PropTypes.func,
  animationDelay: PropTypes.number,
  // promoId: PropTypes.number,
  discount: PropTypes.number,
  // addedByPromo: PropTypes.bool,
};

MenuPrimeItem.defaultProps = {
  animationDelay: 300,
  description: "",
  quantity: 0,
  imageUrl: "",
  readonly: false,
};

export default React.memo(
  MenuPrimeItem,
  (curr, next) => curr.index === next.index && curr.name === next.quantity,
);
