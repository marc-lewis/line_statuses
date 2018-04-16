<style lang="sass" src="line-statuses.scss"></style>

<template>

    <section>

        <h1>{{lineStatuses}}</h1>

    </section>

</template>

<script>

import axios from 'axios';

export default {

    data: function () {

        return {

            TFL_APPLICATION_ID: '{%TFL_APPLICATION_ID%}',
            TFL_APPLICATION_KEY: '{%TFL_APPLICATION_KEY%}',
            lineStatuses: []

        };

    },

    methods: {

        /**
         * Make an AJAX request for the line statuses
         * @param {void}
         * @returns {Object} - A JSON Object containing the response from the ajax call 
         **/
        getLineStatuses () {

            axios.get('https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status',{
                params: {

                    app_id: this.TFL_APPLICATION_ID,
                    app_key: this.TFL_APPLICATION_KEY

                }
            })
                .then((response) => {

                    this.lineStatuses = response.data;
                    
                });

            

        }

    },

    created () {

        this.getLineStatuses();

    }

}
</script>