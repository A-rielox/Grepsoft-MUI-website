import { useEffect } from "react";

import { ThemeProvider } from "@mui/material/styles";

import { Container } from "@mui/material";
import theme from "./styles/theme";
import Appbar from "./components/appbar";

/* 

16.26 custom theme
20.14 appbar

51.23 banner
*/

function App() {
	useEffect(() => {
		document.title = "Home Page";
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="xl" sx={{ background: "#fff" }}>
				<Appbar />

				{/*       
      appbar
      banner
      promotions
      title
      products
      footer

      --hidden
      searchbos
      appdrawer

      */}
			</Container>
		</ThemeProvider>
	);
}

export default App;
