<script lang="ts">
	let showPass1 = false;
	let showPass2 = false;
	let showPass3 = false;
	let logIn = true;
	const togglePass1 = () => showPass1 = showPass1 ? false : true;
	const togglePass2 = () => showPass2 = showPass2 ? false : true;
	const togglePass3 = () => showPass3 = showPass3 ? false : true;
	const toggleMode = () => logIn = logIn ? false : true;
</script>

<style>
	input:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 5.75rem #39393f inset !important;
		-webkit-text-fill-color: white !important;
	}
</style>

<svelte:head>
    <title>[Sign {logIn ? "in" : "up"}] Blug with Naybiblu</title>
	<link rel="icon" href="png/icon.png" />
</svelte:head>

<div class="h-screen w-full flex overflow-hidden select-none">
	<div class="h-full w-full relative">
		<div class="h-full w-full absolute bg-gradient-to-tr from-[#1c1c1c] z-10"></div>
		<div class="h-full w-full absolute bg-gradient-to-tr from-[#1c1c1c] z-10"></div>
		<div class="h-full w-full absolute bg-gradient-to-tr from-[#1c1c1c] z-10"></div>
		<div class="h-full w-full absolute bg-gradient-to-tr from-[#1c1c1c] z-10"></div>
		<div class="h-full w-full absolute bg-gradient-to-tr from-[#1c1c1c] z-10"></div>
		<h1 class="absolute w-full font-extrabold text-xl break-normal opacity-75">
			{"Blug With Naybiblu".repeat(1000).toUpperCase()
			.split("").join(" ")}
		</h1>
		<div class="flex flex-col h-full gap-8 text-white z-30 pl-20 justify-center relative
			xs:px-5">
			<div class="flex flex-col gap-5">
				<p class="opacity-60 tracking-[0.5rem] flex flex-row gap-3 items-center
					xs:bg-gradient-to-l xs:from-[#1c1c1c] xs:via-[#1c1c1c] rounded-full">
					<a href="/home">
						<img src="svg/arrow.svg" alt="back" class="rotate-90 h-5 invert opacity-60
							hover:opacity-100 transition-opacity">	
					</a>
					BLUG NI NAYBIBLU
				</p>
				<h1 class="font-[1000] text-6xl flex flex-row gap-5">
					Sign
					<label for="toggleTwo" class="flex cursor-pointer select-none items-center">
						<div class="relative flex h-14 w-8 bg-[#39393f] rounded-lg p-1">
							<button class="absolute flex left-1 h-6 w-6 rounded-md bg-white
							  items-center justify-center {logIn ? "top-1" : "top-7"}" 
							on:click={toggleMode} style="transition: top 0.5s ease-in-out;">
								<p class="text-sm text-[#39393f]">{logIn ? "in" : "up"}</p>
							</button>
						</div>
					</label>
				</h1>
				<p class="font-extralight text-sm opacity-60 break-words">
					Have the prestige to comment here, hahahaha.
				</p>
			</div>
			{#if logIn}
			<form class="flex flex-col gap-5 origin-right w-full"
				style="transition: margin 0.5s ease-in-out, opacity 0.5s ease-in-out;">
				<div class="relative">
					<input type="text" name="email" placeholder="somethingsweet@example.com"
						class="outline-none rounded-xl px-5 pt-5 w-[31.3rem] h-[4.5rem] bg-[#39393f]
						focus:outline-amber-700
						xs:w-full">
					<p class="absolute top-3 left-5 text-sm opacity-50 font-extrabold">EMAIL</p>
				</div>
				<div class="flex flex-row gap-5 w-[31.3rem]
					xs:w-full">
					<div class="relative w-full">
						<div class="relative flex flex-row w-full">
							<input type={showPass2 ? "text" : "password"} 
								name="email" placeholder="lamepassword12345"
								class="outline-none rounded-xl px-5 pt-5 h-[4.5rem] bg-[#39393f]
								focus:outline-amber-700 w-full">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<button on:click={togglePass2} type="button"
								class="absolute right-5 h-5 bottom-5 invert opacity-60 z-50">
								<img src="svg/{showPass2 ? "hide_eye" : "show_eye"}.svg" alt="show pass"
									class="h-5 opacity-60 hover:opacity-100 transition-opacity">
							</button>
						</div>
						<p class="absolute top-3 left-5 text-sm opacity-50 font-extrabold">PASSWORD</p>
					</div>
				</div>
				<button class="h-10 px-16 w-max bg-amber-700 rounded-full font-bold
					hover:bg-[#39393f] transition-colors">Sign up</button>
			</form>
			{:else}
			<form class="flex flex-col gap-5 origin-right w-full"
				style="transition: margin 0.5s ease-in-out, opacity 0.5s ease-in-out;">
				<div class="relative">
					<input type="text" name="username" placeholder="hiImHappyiGuess"
						class="outline-none rounded-xl px-5 pt-5 w-[31.3rem] h-[4.5rem] bg-[#39393f]
						focus:outline-amber-700
						xs:w-full">
					<p class="absolute top-3 left-5 text-sm opacity-50 font-extrabold">USERNAME</p>
				</div>
				<div class="relative">
					<input type="text" name="email" placeholder="somethingsweet@example.com"
						class="outline-none rounded-xl px-5 pt-5 w-[31.3rem] h-[4.5rem] bg-[#39393f]
						focus:outline-amber-700
						xs:w-full">
					<p class="absolute top-3 left-5 text-sm opacity-50 font-extrabold">EMAIL</p>
				</div>
				<div class="flex flex-row gap-5 w-[31rem]
					xs:flex-wrap xs:w-full">
					<div class="relative w-full">
						<div class="relative flex flex-row w-full">
							<input type={showPass2 ? "text" : "password"} 
								name="email" placeholder="lamepassword12345"
								class="outline-none rounded-xl px-5 pt-5 h-[4.5rem] bg-[#39393f]
								focus:outline-amber-700 w-60
								xs:w-full">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<button on:click={togglePass2} type="button"
								class="absolute right-5 h-5 bottom-5 invert opacity-60 z-50">
								<img src="svg/{showPass2 ? "hide_eye" : "show_eye"}.svg" alt="show pass"
									class="h-5 opacity-60 hover:opacity-100 transition-opacity">
							</button>
						</div>
						<p class="absolute top-3 left-5 text-sm opacity-50 font-extrabold">PASSWORD</p>
					</div>
					<div class="relative w-full">
						<div class="relative flex flex-row w-full">
							<input type={showPass3 ? "text" : "password"} 
								name="email" placeholder="lamepassword12345"
								class="outline-none rounded-xl px-5 pt-5 w-60 h-[4.5rem] bg-[#39393f]
								focus:outline-amber-700
								xs:w-full">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<button on:click={togglePass3} type="button"
								class="absolute right-5 h-5 bottom-5 invert opacity-60 z-50">
								<img src="svg/{showPass3 ? "hide_eye" : "show_eye"}.svg" alt="show pass"
									class="h-5 opacity-60 hover:opacity-100 transition-opacity">
							</button>
						</div>
						<p class="absolute top-3 left-5 text-sm opacity-50 font-extrabold">CONFIRM PASSWORD</p>
					</div>
				</div>
				<button class="h-10 px-16 w-max bg-amber-700 rounded-full font-bold
					hover:bg-[#39393f] transition-colors">Sign up</button>
			</form>
			{/if}
		</div>
	</div>
</div>