<script>
  import { clientSession } from "$lib/session.svelte.js"
  import CreateEvent from "$lib/CreateEvent.svelte"
  const { events } = $props()
</script>

<div class="window events">
  <div class="title-bar">
    <button aria-label="Close" class="close"></button>
    <h2 class="title" id="content-ontology">Events</h2>
    <button aria-label="Resize" class="resize"></button>
  </div>
  <div class="window-pane">
    <h3>All Events</h3>
    <ul>
      {#each events as event}
        <li>
          {event.Name} @
          <date>{event.DateTime}</date>
        </li>
      {/each}
    </ul>
    {#if clientSession.data}
      <CreateEvent />
    {/if}
  </div>
</div>

<style>
  dialog {
    border: none;
    background: none;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding: 0;
   column-gap: 1ch;
  }
  li {
    border: 1px solid black;
    list-style: none;
    padding: 1rem;
  }
  .events {
    grid-column: 2/11;
  }
</style>