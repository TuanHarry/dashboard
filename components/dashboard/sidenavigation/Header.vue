<template>
	<div class="flex flex-col items-center justify-center mb-6 pb-6 pt-3 sticky top-0 z-10">
		<CommonNuxtLogo class="w-16 h-16" />
		<span
			:class="
            state.open
              ? 'lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto'
              : 'lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all'
          "
			class="text-2xl uppercase font-opensans-medium text-white inline"
		>Template UI</span>

	</div>
</template>

<script>
export default {
	name: "SidenavHeader",
	inject: ["state"],
};
</script>
