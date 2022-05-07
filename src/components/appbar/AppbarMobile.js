import Actions from "./Actions";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { IconButton } from "@mui/material";

export default function AppbarMobile({ matches }) {
	return (
		<AppbarContainer>
			<IconButton>
				<MenuIcon />
			</IconButton>

			<AppbarHeader textAlign={"center"} variant="h4">
				My Bags
			</AppbarHeader>

			<IconButton>
				<SearchIcon />
			</IconButton>

			<Actions matches={matches} />
		</AppbarContainer>
	);
}
