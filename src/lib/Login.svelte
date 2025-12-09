<script>
  const {window} = $props()

  const close = () => {
    window.close()
  }
</script>
<div class="modal-dialog outer-border" style="width: 30rem;">
  <div class="inner-border center">
    <div class="modal-contents">
      <h1 class="modal-text">Log In</h1>
      <form action="/demo?/login" method="POST">
        <label>Email</label><br/>
        <input type="email" name="identifier"><br/>
        <label>Password</label><br/>
        <input type="password" name="password"><br/>
        <section class="field-row" style="justify-content: flex-end">
          <button class="btn" onclick={close}>Cancel</button>
          <button type="submit"class="btn" style="width:95px;">OK</button>
        </section>
      </form>

    </div>
  </div>
</div>