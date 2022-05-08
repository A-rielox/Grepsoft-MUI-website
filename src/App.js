import { useEffect } from "react";

import { ThemeProvider } from "@mui/material/styles";

import { Container } from "@mui/material";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";

/* 

16.26 custom theme
20.14 appbar

51.23 banner
1.04.29 custom slider
*/

function App() {
	useEffect(() => {
		document.title = "Home Page";
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="xl" sx={{ background: "#fff" }}>
				<Appbar />

				<Banner />
			</Container>
		</ThemeProvider>
	);
}

export default App;
