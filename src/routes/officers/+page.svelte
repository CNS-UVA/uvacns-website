<script lang="ts">
    import { Avatar } from '@skeletonlabs/skeleton';
    import config from '../../config';

    let officers = config.officers;
</script>

<h1 class="p-16 flex justify-center items-center"> 2023-2024 Executive Board </h1>
<div class="grid grid-cols-3">
    {#each officers as officer}
        <div class="text-center p-4 card card-hover mx-auto">
            <Avatar initials="{officer.first_name[0]}{officer.last_name[0]}" width="w-64" src={officer.img} rounded="rounded-full"/>
            <p class="pt-8"> <b> {officer.first_name} {officer.last_name} </b> </p>
            <p> <b> {officer.role} </b> </p>
        </div>
    {/each}
</div>
