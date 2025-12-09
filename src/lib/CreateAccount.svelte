<script>
  const {window} = $props()

  const close = (e) => {
    e.preventDefault()
    window.close()
  }
</script>

<div class="modal-dialog outer-border" style="width: 30rem;">
  <div class="inner-border center">
    <div class="modal-contents">
      <h1 class="modal-text">Create Account</h1>
      <form action="/demo?/register" method="POST">
        <label>Username</label><br/>
        <input type="text" name="username"><br/>
        <label>Email</label><br/>
        <input type="email" name="email"><br/>
        <label>Password</label><br/>
        <input type="password" name="password"><br/>
        <section class="field-row" style="justify-content: flex-end">
          <button class="btn" onclick={close}>Cancel</button>
          <button type="submit" class="btn" style="width:95px;">OK</button>
        </section>
      </form>
    </div>
  </div>
</div>

<style>
  input {
    margin-block-end: 1rem;
  }
</style>