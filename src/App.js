import { useEffect } from "react";

import { ThemeProvider } from "@mui/material/styles";

import { Button, Container } from "@mui/material";
import theme from "./styles/theme";

/* 

16.26 custom theme
20.14 appbar
*/

function App() {
	useEffect(() => {
		document.title = "Home Page";
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="xl" sx={{ background: "#fff" }}>
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
				<Button
					variant="contained"
					onClick={() => console.log("click click")}
				>
					Botoncillo
				</Button>
			</Container>
		</ThemeProvider>
	);
}

export default App;
