<script>
	import Typewriter from 'svelte-typewriter';
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';
	import '@event-calendar/core/index.css';
	import config from '../config';

	const cyberstormLink =
		config.events
			.filter((e) => e.header.toLowerCase().includes('cyberstorm'))[0]
			.fields.filter((f) => f.header.toLowerCase().includes('website'))[0].href ?? '';
	const discordLink =
		config.links.filter((l) => l.text.toLowerCase().includes('discord'))[0].href ?? '';

	let plugins = [TimeGrid];
	let options = {
		view: 'timeGridWeek',
		events: ['test']
	};

	let discord = 'images/discord.svg';
	let mail = 'images/envelope-regular.svg';
	let calendar = 'images/calendar-days-solid.svg';
</script>

<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-10 items-center">
	<div class="flex flex-col items-center xl:items-start text-center xl:text-left space-y-4 pt-6 pb-24 gap-4">
		<Typewriter mode="loopRandom" interval={100}>
			<div class=""> 
				<p class="text-7xl font-bold text tracking-wideset">Welcome to CNS.</p>
			</div>
		</Typewriter>
		<p class="!text-xl max-w-[475px]"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aut nihil iusto similique atque.</p>
		<div class="flex justify-center items-center space-x-8">
			{#each config.links as link}
				<div>
					<a class="btn variant-filled !text-slate-900" href={link.href}>{link.text}</a>
				</div>
			{/each}
		</div>	
	</div>
	<!-- <div class=" absolute z-[1] top-[16%] left-[90%] aspect-video "> -->
		<!-- <figure class="avatar flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate bg-surface-400-500-token w-32  rounded-full shadow-xl"> -->
		<img class="fixed top-[-25%] right-[-10%] z-[-1] opacity-30 animate-spin-slow object-cover rounded-full w-[80%]" src="favicon_upscaled_trans.png" alt="CNS logo">
		<!-- </figure> -->
	<!-- </div> -->
</div>

<!-- <div class="flex justify-center items-center space-x-8">
	{#each config.links as link}
		<div>
			<a class="btn variant-ghost-surface" href={link.href}>{link.text}</a>
		</div>
	{/each}
</div> -->

<div class="flex-col justify-center items-center">
	<div class="pb-16 flex flex-col justify-evenly gap-[4rem] [&>*]:space-y-5 max-w-screen-xl">
		<div>
			<h2>Who are we?</h2>
			<p>
				We are a group of UVA students interested in software, network, hardware, and application
				security. We engage in security competitions as a club, host interesting speakers, develop
				security tools and challenges, and leverage industry connections.
			</p>
		</div>
		<div>
			<h2>What happens here?</h2>
			<p>
				CNS hosts a wide range of events throughout the semester. Our biggest event is <b
				><a class="text-red-500" href={cyberstormLink}>CyberStorm</a></b
				>, a day-long, realistic cybersecurity competition that teaches you the skills to defend
				against cyber attacks in a red/blue team scenario. We host weekly meetings to cover basics
				in networking and security, participate in Capture The Flags together, and break a lot of
				things! To learn more about CNS@UVA, please check out our
				<b><a class="text-red-500" href={discordLink}>Discord</a></b> for more information!
			</p>
		</div>
	</div>
</div>

<!-- Logo on website -->
<!-- Officers Page -->
<!-- Events Page -->
<!-- Calendar or link to Google Calendar -->

<!-- Docs Page (Later on) -->
<!-- automate announcements of discord onto website -->
