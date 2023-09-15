<script>
  let code = '';

  async function submitCode() {
    const response = await fetch('http://localhost:3000/api/code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    const result = await response.json();
    console.log(result);
  }
</script>

<div>
  <textarea bind:value={code} placeholder="Enter your code here..."></textarea>
  <button on:click={submitCode}>Submit Code</button>
</div>

<style>
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
  }
</style>
