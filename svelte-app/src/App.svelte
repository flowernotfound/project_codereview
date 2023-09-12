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
