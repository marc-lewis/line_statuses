<style lang="sass" src="line-statuses.scss"></style>

<template>

    <section>

        <h1>{{TFL_APPLICATION_ID}} {{TFL_APPLICATION_KEY}}</h1>

    </section>

</template>

<script>

export default {

    data: function () {

        return {

            TFL_APPLICATION_ID: '{%TFL_APPLICATION_ID%}',
            TFL_APPLICATION_KEY: '{%TFL_APPLICATION_KEY%}'

        };

    }

}
</script>