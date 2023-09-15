<script>
  import CodeForm from "./CodeForm.svelte";
  import CodeList from "./CodeList.svelte";
  import CommentForm from "./CommentForm.svelte"; 
  import CommentList from './CommentList.svelte'; // 追加
</script>

<main>
  <h1>42 Code Review Platform</h1>
  <CodeForm />
  <CodeList />
  <CommentForm /> 
  <CommentList /> <!-- 追加 -->
</main>

<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
</style>
