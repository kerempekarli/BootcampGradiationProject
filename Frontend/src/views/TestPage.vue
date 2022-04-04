"<template>
    TEST PAGE
</template>"
<script>
export default {
    methods:{
        deneme(){
            console.log(this.$route.query.category)
        }
    },
    mounted(){
        this.deneme()
    }
}
</script>