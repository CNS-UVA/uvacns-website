<script lang="ts">
	import config from '../../../config';
</script>

<svelte:head>
	<title>Cyber Offense Division | {config.title}</title>
</svelte:head>

<h1 class="typography">Cyber Offense Division</h1>
<p class="text-muted-foreground text-center text-xl leading-7 [&:not(:first-child)]:mt-6">
	The Cyber Offense Division identifies and exploits vulnerabilities in computers and networks for
	fun and profit.
</p>
<div class="typography">
	<div>
		<h2>Achievements</h2>
		<p>
			The Cyber Offense Division fields teams at competitions ranging from capture-the-flags (CTFs)
			to red team and social engineering events. Accolades include:
		</p>
		<ul>
			<li>Third place, 2025 Virginia Cyber Fusion competition</li>
			<li>
				Second place in the undergraduate division, 2024 Temple Social Engineering Competition
			</li>
			<li>First place, 2019 Northeast Collegiate Penetration Testing Competition</li>
		</ul>
	</div>
	<div>
		<h2>In the News</h2>
		<p>Read about the Cyber Offense Division here:</p>
		<ul>
			<li>
				<a href="https://cyberinnovation.virginia.edu/node/721"
					>UVA Cyber Team Shines at Virginia Cyber Fusion Competition</a
				> (March 3, 2025)
			</li>
			<li>
				<a
					href="https://engineering.virginia.edu/news-events/news/winning-streak-continues-uva-engineering-cyber-champions"
					>Winning Streak Continues for UVA Engineering Cyber Champions</a
				> (October 16, 2019)
			</li>
		</ul>
	</div>
</div>
