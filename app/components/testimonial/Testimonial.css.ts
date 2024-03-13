import { style } from "@vanilla-extract/css";

export const root = style({});

export const quote = style({
  quotes: '"»" "«"',

  selectors: {
    "&::before": {
      marginTop: "-0.5rem",
      marginLeft: "-1.5rem",
      lineHeight: 1,
      fontSize: "2rem",
      float: "left",
      content: "open-quote",
    },
  },
});

export const caption = style({
  fontWeight: "bold",
});
