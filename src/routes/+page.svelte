<script>
	import Typewriter from 'svelte-typewriter';
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';
	import '@event-calendar/core/index.css';
	import config from '../config';

	let plugins = [TimeGrid];
	let options = {
		view: 'timeGridWeek',
		events: ['test']
	};

	let discord = 'images/discord.svg';
	let mail = 'images/envelope-regular.svg';
	let calendar = 'images/calendar-days-solid.svg';
</script>

<Typewriter mode="loopRandom" interval={130}>
	<div class="pt-12 pb-24">
		<h1 class="flex justify-center items-center">Welcome to CNS.</h1>
	</div>
</Typewriter>

<div class="flex justify-center items-center space-x-8">
	{#each config.links as link}
		<div>
			<a class="btn variant-ghost-surface" href={link.href}>{link.text}</a>
		</div>
	{/each}
</div>

<div class="flex justify-center items-center">
	<div class="pt-16 pb-36 flex justify-evenly gap-10 [&>*]:space-y-5">
		<div>
			<h1>Who are we?</h1>
			<p>
				We are a group of UVA students interested in software, network, hardware, and application
				security. We engage in security competitions as a club, host interesting speakers, develop
				security tools and challenges, and leverage industry connections.
			</p>
		</div>
		<div>
			<h1>What happens here?</h1>
			<p>
				CNS hosts a wide range of events throughout the semester. Our biggest event is <b
					><a href="https://cyberstorm.uvacns.com">CyberStorm</a></b
				>, a day-long, realistic cybersecurity competition that teaches you the skills to defend
				against cyber attacks in a red/blue team scenario. We host weekly meetings to cover basics
				in networking and security, participate in Capture The Flags together, and break a lot of
				things! To learn more about CNS@UVA, please check out our <b><a href="">Discord</a></b> for more
				information!
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
