<template>
	<div class="flex flex-col items-center justify-center mb-6 pb-6 pt-3 sticky top-0 z-10">
		<CommonNuxtLogo class="w-16 h-16" />
		<span
			:class=" state.open ? 'block' : 'hidden'"
			class="text-2xl uppercase font-opensans-medium text-white"
		>Template UI</span>

	</div>
</template>

<script>
export default {
	name: "SidenavHeader",
	inject: ["state"],
};
</script>
