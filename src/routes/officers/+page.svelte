<:script>
    import { Avatar } from '@skeletonlabs/skeleton';

    let chris = 'officers/23-24/chris_marotta.jpg';
    let chase = 'officers/23-24/chase.png';
    let riley = 'officers/23-24/riley.jpg';
</script>

<h1 class="p-16 flex justify-center items-center"> 2023-2024 Executive Board </h1>
<div class="">
    <div class="p-16 flex justify-evenly items-center [&>*]:text-center [&>*]:p-4 [&>*]:card [&>*]:card-hover">
        <div>
            <Avatar initials="RI" width="w-64" src={riley} background="bg-primary-500" rounded="rounded-full"/>
            <p class="pt-8"> <b> Riley Immel </b> </p>
            <p> <b> President </b> </p>
        </div>
       <div>
           <Avatar initials="CH" width="w-64" src={chase} rounded="rounded-full"/>
            <p class="pt-8"> <b> Chase Hildebrand </b> </p>
            <p> <b> Vice President for Infrastructure </b> </p>
        </div>
        <div>
            <Avatar initials="CM" width="w-64" src={chris} rounded="rounded-full"/>
            <p class="pt-8"> <b> Chris Marotta </b> </p>
            <p> <b> Vice President for Competitions </b> </p>
        </div>
        <!--div >
            <Avatar initials="LB" width="w-64" background="bg-primary-500" rounded="rounded-full"/>
            <p> <b> Your Face </b> </p>
            <p> <b> President </b> </p>
        </div-->
    </div>
    <div class="p-16 flex justify-evenly items-center [&>*]:text-center [&>*]:p-4 [&>*]:card [&>*]:card-hover">
        <div>
            <Avatar initials="EM" width="w-64" background="bg-primary-500" rounded="rounded-full"/>
            <p class="pt-8"> <b> Eric Miller </b> </p>
            <p> <b> Secretary </b> </p>
        </div>
        <div>
            <Avatar initials="A" width="w-64" background="bg-primary-500" rounded="rounded-full"/>
            <p class="pt-8"> <b> Abhinav </b> </p>
            <p> <b> Meetings Chair </b> </p>
        </div>
        <div>
            <Avatar initials="J" width="w-64" background="bg-primary-500" rounded="rounded-full"/>
            <p class="pt-8"> <b> Joseph </b> </p>
            <p> <b> Treasurer </b> </p>
        </div>
        <!--div>
            <Avatar initials="LB" width="w-32" background="bg-primary-500" rounded="rounded-full"/>
            <p> <b> Your Face </b> </p>
            <p> <b> President </b> </p>
        </div-->
    </div>
</div>
