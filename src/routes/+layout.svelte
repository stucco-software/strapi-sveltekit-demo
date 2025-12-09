<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ul role="menu-bar">
  <li role="menu-item" tabindex="0" aria-haspopup="false">
  	<a href="/">/Root</a>
  </li>
  <li role="menu-item" tabindex="0" aria-haspopup="true">
    Goals
    <ul role="menu">
      <li role="menu-item"><a href="/goals#members">Members</a></li>
      <li role="menu-item"><a href="/goals#chapters">Chapters</a></li>
      <li role="menu-item" class="divider"><a href="/goals#events">Events</a></li>
      <li role="menu-item"><a href="/goals">All Goals</a></li>
    </ul>
  </li>
  <li role="menu-item" tabindex="0" aria-haspopup="true">
    Ontology
    <ul role="menu">
			<li role="menu-item"><a href="/ontology#member">Member</a></li>
			<li role="menu-item"><a href="/ontology#event">Event</a></li>
			<li role="menu-item"><a href="/ontology#chapter">Chapter</a></li>
			<li role="menu-item"><a href="/ontology#partner">Partner</a></li>
			<li role="menu-item"><a href="/ontology#sponsor">Sponsor</a></li>
			<li role="menu-item"><a href="/ontology#webinar">Webinar</a></li>
			<li role="menu-item" class="divider"><a href="/ontology#static-resource">Static Resource</a></li>
      <li role="menu-item"><a href="/ontology">All Terms</a></li>
    </ul>
  </li>
  <li role="menu-item" tabindex="0" aria-haspopup="false">
  	<a href="/demo">Demo</a>
  </li>
</ul>

{@render children()}
