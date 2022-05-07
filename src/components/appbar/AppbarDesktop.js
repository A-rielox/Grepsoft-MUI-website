import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";

import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";

export default function AppbarDesktop({ matches }) {
	return (
		<AppbarContainer>
			<AppbarHeader>My Bags</AppbarHeader>

			<MyList type="row">
				<ListItemText primary="Home" />
				<ListItemText primary="Categories" />
				<ListItemText primary="Products" />
				<ListItemText primary="Contact Us" />

				<ListItemButton>
					<ListItemIcon>
						<SearchIcon />
					</ListItemIcon>
				</ListItemButton>
			</MyList>

			<Actions matches={matches} />
		</AppbarContainer>
	);
}
// 24.30
