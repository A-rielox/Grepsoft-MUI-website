import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

// yellow yellow "overflow: "hidden"," para q no se ponga una scrollbar al entrar y salir el mensaje en el slider yellow yellow
export const PromotionsContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "20px 0px 20px 0px",
	overflow: "hidden",
	background: Colors.secondary,

	[theme.breakpoints.up("md")]: {
		padding: "40px 0px 40px 0px",
	},
}));

export const MessageText = styled(Typography)(({ theme }) => ({
	fontFamily: '"Montez", "cursive"',
	color: Colors.white,
	fontSize: "1.5rem",

	[theme.breakpoints.up("md")]: {
		fontSize: "3rem",
	},
}));
