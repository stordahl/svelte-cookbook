<script lang="ts">
  import { capitalizeFirstLetter } from "$lib/string";
  import Grid from "./Grid.svelte";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";

  export let data;

  $: title = capitalizeFirstLetter(data.title);
</script>

<svelte:head>
  <title>{title} | Svelte Cookbook</title>
</svelte:head>

<h1 class="text-5xl font-extrabold m-8">{title}</h1>

{#if data.recipes.length === 0}
  <p>No content</p>
{:else}
<Grid>
  {#each data.recipes as recipe}
    <Card.Root>
      <Card.Header>
        <Card.Title>{recipe.metadata.title}</Card.Title>
        <a href={recipe.metadata.authorLink}>by {recipe.metadata.author}</a>
        <Card.Description class="min-h-14">{recipe.metadata.description}</Card.Description>
      </Card.Header>
      <Card.Content class="flex flex-col gap-2">
        <Button href={recipe.metadata.url} variant="outline">Visit</Button>
      </Card.Content>
    </Card.Root>
  {/each}
</Grid>
{/if}
