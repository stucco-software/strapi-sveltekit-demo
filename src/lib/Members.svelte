<script>
  import CreateAccount from "$lib/CreateAccount.svelte"
  import Login from "$lib/Login.svelte"
  import { clientSession } from "$lib/session.svelte.js"

  let login
  let create

  const showLogin = (e) => {
    login.showModal()
  }

  const showCreate = (e) => {
    create.showModal()
  }
</script>

<div class="window members">
  <div class="title-bar">
    <button aria-label="Close" class="close"></button>
    <h2 class="title" id="content-ontology">Members</h2>
    <button aria-label="Resize" class="resize"></button>
  </div>

  {#if clientSession.data}
    <div class="window-pane">
      <p>
        You are currently <b>Logged In</b> as <b>{clientSession.data.user.username}</b>.
      </p>
    </div>
  {:else}
    <div class="window-pane">
      <p>
        You are currently <b>Logged Out</b>.
      </p>
      <section class="field-row" style="justify-content: center">
        <button class="btn" onclick={showLogin}>Log In</button>
        <button class="btn" onclick={showCreate}>Create Account</button>
      </section>
    </div>
  {/if}
</div>

<dialog bind:this={login}>
  <Login window={login}></Login>
</dialog>

<dialog bind:this={create}>
  <CreateAccount window={create}></CreateAccount>
</dialog>


<style>
  dialog {
    border: none;
    background: none;
  }
  .members {
    grid-column: 1/9;
  }
</style>