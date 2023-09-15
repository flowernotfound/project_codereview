<script>
  let comment = "";

  async function submitComment() {
    const response = await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        code_review_id: 1, // 仮の値。実際には選択されたコードレビューのIDを使用する
        comment
      })
    });

    const data = await response.json();
    console.log("Comment submitted with ID:", data.id);
  }
</script>

<h2>コメントを投稿</h2>
<textarea bind:value={comment}></textarea>
<button on:click={submitComment}>コメントを送信</button>

<style>
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-width: 500px;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
  }
</style>
