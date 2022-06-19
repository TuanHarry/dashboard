<template>
	<Provider>
		<div class="bg-primary w-full h-screen overflow-hidden relative">
			<div class="flex items-start">
				<Overlay />
				<SideNavigation />
				<div class="flex flex-col h-screen pl-0 w-full lg:pl-20 lg:space-y-4">
					<TopNavigation />
					<main class="h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:pt-4 lg:pt-0 lg:px-4">
						<slot />
					</main>
				</div>
			</div>
		</div>
	</Provider>
</template>
<script>
import Provider from "../components/dashboard/provider/Provider.vue";
import Overlay from "../components/dashboard/provider/Overlay.vue";
import SideNavigation from "../components/dashboard/sidenavigation/Index.vue";
import TopNavigation from "../components/dashboard/topnavigation/Index.vue";
export default {
	components: { Provider, Overlay, SideNavigation, TopNavigation },
};
</script>
<style></style>