<script lang="ts">
    import { Avatar } from '@skeletonlabs/skeleton';

    let officers = [
        {
            first_name: "Riley",
            last_name: "Immel",
            role: "President",
            img: "officers/23-24/riley.jpg"
        },
        {
            first_name: "Chase",
            last_name: "Hildebrand",
            role: "Vice President for Infrastructure",
            img: "officers/23-24/chase.jpg"
        },
        {
            first_name: "Chris",
            last_name: "Marotta",
            role: "Vice President for Competitions",
            img: "officers/23-24/chris_marotta.jpg"
        },
        {
            first_name: "Eric",
            last_name: "Miller",
            role: "Secretary",
            img: "officers/23-24/eric.jpg"
        },
        {
            first_name: "Abhinav",
            last_name: "Mara",
            role: "Meetings Chair",
            img: undefined
        },
        {
            first_name: "Joseph",
            last_name: "Beauchamp",
            role: "Treasurer",
            img: undefined
        }
    ];
</script>

<h1 class="p-16 flex justify-center items-center"> 2023-2024 Executive Board </h1>
<div class="">
<!--    <div class="p-16 flex justify-evenly items-center [&>*]:text-center [&>*]:p-4 [&>*]:card [&>*]:card-hover">-->
    <div class="grid grid-cols-3">
        {#each officers as officer}
            <div class="text-center p-4 card card-hover mx-auto">
                <Avatar initials="{officer.first_name[0]}{officer.last_name[0]}" width="w-64" src={officer.img} rounded="rounded-full"/>
                <p class="pt-8"> <b> {officer.first_name} {officer.last_name} </b> </p>
                <p> <b> {officer.role} </b> </p>
            </div>
        {/each}
    </div>
</div>
