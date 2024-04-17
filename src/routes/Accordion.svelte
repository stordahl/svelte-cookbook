<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";

  export let text: string;
  export let children: { href: string, text: string, description: string }[];
  export let startOpen = false;

  let root;

  $: if(startOpen) root = "root"
</script>

<Accordion.Root bind:value={root}>
  <Accordion.Item value="root" class="border-b-0">
    <Accordion.Trigger class="rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{text}</Accordion.Trigger>
    <Accordion.Content>
      <div class="mt-2 space-y-2">
        {#each children as child}
          <a href={child.href} class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">{child.text}</a>
        {/each}
      </div>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>

