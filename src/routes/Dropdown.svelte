<script lang="ts">
  export let text: string;
  export let children: { href: string, text: string, description: string }[];
  
  let flyoutIsOpen = false; 
</script>

<div class="relative">
  <button type="button" on:mouseenter={() => flyoutIsOpen = true} on:mouseleave={() => flyoutIsOpen = false} class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
    {text}
    <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
  </button>

  {#if flyoutIsOpen}
    <div 
      role="dialog" 
      on:mouseenter={() => flyoutIsOpen = true} 
      on:mouseleave={() => flyoutIsOpen = false} 
      class="absolute top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
    >
      <div class="p-4">
        {#each children as child}
        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
          <div class="flex-auto">
            <a href={child.href} class="block font-semibold text-gray-900">
              {child.text}
              <span class="absolute inset-0"></span>
            </a>
            <p class="mt-1 text-gray-600">{child.description}</p>
          </div>
        </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  div[role="dialog"] {
    left: 50%;
    transform: translateX(-50%);
  }

  button:after {
    content: ""; 
    position: absolute;
    width: 125px;
    height: 20px;
    display: block;
    bottom: -85%;
    left: -10px;
  }
</style>
