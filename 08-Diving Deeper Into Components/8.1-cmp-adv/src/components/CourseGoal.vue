<template>
    <section>
        <ul>
            <li v-for="goal in goals" :key="goal">
                <slot :item='goal'> </slot>
            </li>
        </ul>
    </section>
</template>


<script>
export default {
    data(){
        return{

            goals:['Finish The Course!','Master Vue!']
        }
    }
}
</script>