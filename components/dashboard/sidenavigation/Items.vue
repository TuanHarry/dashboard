<template>
	<ul class="md:pl-3">
		<sidenav-item
			title="Home"
			to="/"
		>
			<CreditsIcon />
		</sidenav-item>

		<sidenav-item
			title="Archives"
			to="/admin/archives"
		>
			<ArchivesIcon />
		</sidenav-item>

		<sidenav-item
			title="Credits"
			to="/admin/credits"
		>
			<CreditsIcon />
		</sidenav-item>

	</ul>
</template>

<script>
import SidenavItem from "./Item.vue";

/* ICONS */
import CreditsIcon from "~/assets/icons/ic_archives.svg?inline";
import ArchivesIcon from "~/assets/icons/ic_credits.svg?inline";

export default {
	name: "SidenavItems",
	components: {
		SidenavItem,
		CreditsIcon,

		ArchivesIcon,
	},
};
</script>
