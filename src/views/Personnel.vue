<template>
    <div>
        <h1>Notre personnel</h1>
        <ul>
            <li v-for="(personne, index) in personnelListe" :key="index">{{ personne.firstname }}</li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: '',
        props: {
            
        },
        created() {
            this.$store.dispatch('getPersonnel')
        },
        data() {
            return {
                
            }
        },
        computed: {
            personnelListe() {
                return this.$store.getters.listePersonnel
            }
        },
        methods: {
            
        },
        components: {
            
        },
    }
</script>

<style scoped>
    
</style>